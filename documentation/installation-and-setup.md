# Installation and Setup

This page covers the runtime layout you will usually want before publishing the docs in GitBook.

## Requirements

- Java 21 to build this repository
- Java compatibility at runtime according to your server platform
- Spigot or Paper server within the supported range

## Files and folders

The plugin creates and uses these paths inside its data directory:

```text
plugins/AmazingTitles/
plugins/AmazingTitles/Extensions/
plugins/AmazingTitles/Integrations/
```

Important files commonly edited by administrators:

- `plugin.yml` inside the jar for command metadata
- `options.yml` for runtime options and SmartBar settings

## Main command

AmazingTitles registers:

```text
/amazingtitles
/at
```

## Permissions

The current codebase uses these permission nodes:

- `amazingtitles.command`
- `amazingtitles.admin`
- `at.animations`
- `at.notifications`
- `at.messages`
- `at.plugin`

## Update notifications

The current build checks GitHub Releases instead of Spigot:

- Releases page: <https://github.com/Kora-Studios-LLC/AmazingTitles/releases>
- API endpoint: `https://api.github.com/repos/Kora-Studios-LLC/AmazingTitles/releases/latest`

## Common first-run checklist

1. Start the server once with the plugin installed.
2. Confirm the data folder was created.
3. Review `options.yml`.
4. Run a simple `/at sendAnimation` test.
5. Add extension jars only after the base plugin is working.

## Related pages

- [Plugin Details](../plugin-details.md)
- [Quickstart](getting-started.md)
- [Help Center](../help-center.md)
