(function () {
    const data = window.AmazingTitlesWiki;
    if (!data) {
        return;
    }

    const navRoot = document.getElementById("sidebar-nav");
    const tocRoot = document.getElementById("toc-nav");
    const articleContent = document.getElementById("article-content");
    const pageTitle = document.getElementById("page-title");
    const pageExcerpt = document.getElementById("page-excerpt");
    const pageKicker = document.getElementById("page-kicker");
    const breadcrumbs = document.getElementById("breadcrumbs");
    const prevNext = document.getElementById("prev-next");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");

    const pageParents = new Map();
    const orderedPages = [];

    function walkNav(items, parents) {
        items.forEach((item) => {
            if (item.path) {
                pageParents.set(item.path, parents);
                orderedPages.push(item.path);
            }
            if (item.children && item.children.length) {
                walkNav(item.children, item.path ? [...parents, item.title] : [...parents, item.title]);
            }
        });
    }

    walkNav(data.nav, []);

    function normalizeRoute(rawHash) {
        const fallback = data.site.defaultPage;
        if (!rawHash || rawHash === "#") {
            return { path: fallback, section: "" };
        }

        const clean = rawHash.replace(/^#\/?/, "");
        if (!clean) {
            return { path: fallback, section: "" };
        }

        const [pathPart, queryString = ""] = clean.split("?");
        const params = new URLSearchParams(queryString);
        const path = decodeURIComponent(pathPart || fallback);
        const section = params.get("section") || "";
        return { path, section };
    }

    function createLink(label, href, className) {
        const anchor = document.createElement("a");
        anchor.textContent = label;
        anchor.href = href;
        if (className) {
            anchor.className = className;
        }
        return anchor;
    }

    function renderNav(items, activePath) {
        const list = document.createElement("ul");
        list.className = "nav-list";

        items.forEach((item) => {
            const entry = document.createElement("li");
            if (item.path) {
                const link = createLink(item.title, `#/${item.path}`, "nav-link");
                if (item.path === activePath) {
                    link.classList.add("active");
                }
                entry.appendChild(link);
            } else {
                const title = document.createElement("p");
                title.className = "nav-group-title";
                title.textContent = item.title;
                entry.appendChild(title);
            }

            if (item.children && item.children.length) {
                const childrenWrap = document.createElement("div");
                childrenWrap.className = item.path ? "nav-children" : "nav-group";
                childrenWrap.appendChild(renderNav(item.children, activePath));
                entry.appendChild(childrenWrap);
            }

            list.appendChild(entry);
        });

        return list;
    }

    function renderSidebar(activePath) {
        navRoot.innerHTML = "";
        data.nav.forEach((item) => {
            if (item.path) {
                const group = document.createElement("div");
                group.className = "nav-group";
                group.appendChild(renderNav([item], activePath));
                navRoot.appendChild(group);
                return;
            }

            const group = document.createElement("div");
            group.className = "nav-group";
            const title = document.createElement("p");
            title.className = "nav-group-title";
            title.textContent = item.title;
            group.appendChild(title);
            group.appendChild(renderNav(item.children || [], activePath));
            navRoot.appendChild(group);
        });
    }

    function renderBreadcrumbs(path) {
        breadcrumbs.innerHTML = "";
        const trail = pageParents.get(path) || [];
        breadcrumbs.appendChild(createLink("Home", "#/Home.md"));

        trail.forEach((segment) => {
            const separator = document.createElement("span");
            separator.textContent = "/";
            breadcrumbs.appendChild(separator);

            const crumb = document.createElement("span");
            crumb.textContent = segment;
            breadcrumbs.appendChild(crumb);
        });

        const page = data.pages[path];
        if (page) {
            const separator = document.createElement("span");
            separator.textContent = "/";
            breadcrumbs.appendChild(separator);

            const current = document.createElement("strong");
            current.textContent = page.title;
            breadcrumbs.appendChild(current);
        }
    }

    function renderToc(page) {
        tocRoot.innerHTML = "";
        const tocItems = page.headings.filter((heading) => Number(heading.level) >= 2 && Number(heading.level) <= 4);

        if (!tocItems.length) {
            const empty = document.createElement("p");
            empty.className = "toc-link";
            empty.textContent = "No section headings";
            tocRoot.appendChild(empty);
            return;
        }

        tocItems.forEach((heading) => {
            const link = document.createElement("a");
            link.href = `#/${page.path}?section=${encodeURIComponent(heading.id)}`;
            link.className = `toc-link level-${heading.level}`;
            link.dataset.anchor = heading.id;
            link.textContent = heading.title;
            tocRoot.appendChild(link);
        });
    }

    function renderPrevNext(path) {
        prevNext.innerHTML = "";
        const index = orderedPages.indexOf(path);
        const previousPath = index > 0 ? orderedPages[index - 1] : null;
        const nextPath = index >= 0 && index < orderedPages.length - 1 ? orderedPages[index + 1] : null;

        [
            { label: "Previous", path: previousPath },
            { label: "Next", path: nextPath },
        ].forEach((entry) => {
            if (!entry.path || !data.pages[entry.path]) {
                return;
            }

            const page = data.pages[entry.path];
            const card = createLink("", `#/${entry.path}`, "prev-next-card");
            card.innerHTML = `<small>${entry.label}</small><strong>${page.title}</strong>`;
            prevNext.appendChild(card);
        });
    }

    function attachCodeButtons() {
        articleContent.querySelectorAll(".copy-code").forEach((button) => {
            button.addEventListener("click", async () => {
                const code = button.nextElementSibling ? button.nextElementSibling.textContent : "";
                try {
                    await navigator.clipboard.writeText(code);
                    const oldText = button.textContent;
                    button.textContent = "Copied";
                    window.setTimeout(() => {
                        button.textContent = oldText;
                    }, 1200);
                } catch (error) {
                    button.textContent = "Copy failed";
                    window.setTimeout(() => {
                        button.textContent = "Copy";
                    }, 1200);
                }
            });
        });
    }

    function highlightToc(anchor) {
        tocRoot.querySelectorAll(".toc-link").forEach((link) => {
            link.classList.toggle("active", link.dataset.anchor === anchor);
        });
    }

    function setupScrollSpy() {
        const headings = Array.from(articleContent.querySelectorAll("h2[id], h3[id], h4[id]"));
        if (!headings.length) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
                if (visible) {
                    highlightToc(visible.target.id);
                }
            },
            { rootMargin: "-20% 0px -65% 0px", threshold: [0, 1] }
        );

        headings.forEach((heading) => observer.observe(heading));
    }

    function scrollToSection(sectionId) {
        if (!sectionId) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            highlightToc(sectionId);
        }
    }

    function renderPage() {
        const route = normalizeRoute(window.location.hash);
        const page = data.pages[route.path] || data.pages[data.site.defaultPage];
        if (!page) {
            return;
        }

        document.body.classList.remove("sidebar-open");
        renderSidebar(page.path);
        renderBreadcrumbs(page.path);
        renderToc(page);
        renderPrevNext(page.path);

        const parents = pageParents.get(page.path) || [];
        pageKicker.textContent = parents.length ? parents[parents.length - 1] : "AmazingTitles Wiki";
        pageTitle.textContent = page.title;
        pageExcerpt.textContent = page.excerpt || "";
        articleContent.innerHTML = page.html;
        if (articleContent.firstElementChild && articleContent.firstElementChild.tagName === "H1") {
            articleContent.firstElementChild.remove();
        }
        document.title = `${page.title} | AmazingTitles Wiki`;

        attachCodeButtons();
        setupScrollSpy();
        window.setTimeout(() => scrollToSection(route.section), 20);
    }

    function renderSearch(query) {
        const trimmed = query.trim().toLowerCase();
        if (!trimmed) {
            searchResults.hidden = true;
            searchResults.innerHTML = "";
            return;
        }

        const results = Object.values(data.pages)
            .filter((page) => `${page.title} ${page.excerpt} ${page.html}`.toLowerCase().includes(trimmed))
            .slice(0, 8);

        searchResults.hidden = false;
        searchResults.innerHTML = "";

        if (!results.length) {
            const empty = document.createElement("div");
            empty.className = "search-empty";
            empty.textContent = "No matches found.";
            searchResults.appendChild(empty);
            return;
        }

        results.forEach((page) => {
            const item = createLink("", `#/${page.path}`, "search-item");
            item.innerHTML = `<p class="search-item-title">${page.title}</p><p class="search-item-excerpt">${page.excerpt}</p>`;
            item.addEventListener("click", () => {
                searchResults.hidden = true;
                searchResults.innerHTML = "";
                searchInput.value = "";
            });
            searchResults.appendChild(item);
        });
    }

    menuToggle.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-open");
    });

    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            document.body.classList.remove("sidebar-open");
        }

        if (!searchResults.hidden && !searchResults.contains(event.target) && event.target !== searchInput) {
            searchResults.hidden = true;
        }
    });

    searchInput.addEventListener("input", (event) => {
        renderSearch(event.target.value);
    });

    window.addEventListener("hashchange", renderPage);
    renderPage();
})();
