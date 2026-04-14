# Help Center

This page is designed for support, FAQs, and common troubleshooting topics once the content is imported into GitBook.

## Common questions

### Why does boss bar output not appear on 1.8.8?

Minecraft `1.8.8` does not provide Bukkit boss bars in the way modern versions do. AmazingTitles falls back internally instead of exposing a native boss bar there.

### Why are HEX colors not showing correctly?

HEX and gradients depend on RGB-capable server support. On older versions, formatting may degrade to simpler color output.

### Where do I place extension jars?

Use:

```text
plugins/AmazingTitles/Extensions
```

### How do I reload the plugin or extensions?

Use the `pluginActions` command family:

```text
/at pluginActions reload
/at pluginActions loadExtensions
/at pluginActions reloadExtensions
```

### Where does AmazingTitles check for updates?

The current build checks GitHub Releases:

<https://github.com/Kora-Studios-LLC/AmazingTitles/releases>

## Support links

- Releases: <https://github.com/Kora-Studios-LLC/AmazingTitles/releases>
- Discord: <https://discord.com/invite/Ms7uAAAtcT>
