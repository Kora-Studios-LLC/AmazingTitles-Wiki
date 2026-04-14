# Extensions and Integrations

AmazingTitles supports both external extension jars and integration scripts or files stored in the plugin data folder.

## Extensions

Extensions are loaded from:

```text
plugins/AmazingTitles/Extensions
```

The plugin reads `extension.yml` inside each jar and instantiates the configured main class.

Use these commands to work with installed extension jars:

```text
/at pluginActions extensionList
/at pluginActions loadExtension <file>
/at pluginActions reloadExtension <name>
/at pluginActions unloadExtension <name>
/at pluginActions loadExtensions
/at pluginActions reloadExtensions
/at pluginActions unloadExtensions
```

More details:

- [Extensions Overview](../extensions/overview.md)
- [Creating AmazingExtension](../api/creating-amazingextension.md)

## Integrations

Integrations are read from:

```text
plugins/AmazingTitles/Integrations
```

The most visible built-in integration path in the repository is `CMI`.

More details:

- [CMI Integration](../integrations/cmi-integration.md)

## Typical workflow

1. Keep the main plugin stable and configured first.
2. Add extension jars only after the base plugin loads normally.
3. Test each extension individually.
4. If using CMI, verify event names and conditions in your integration files.

## Compatibility note

Extensions compiled for this project should import:

```text
org.korastudios.amazingtitles
```

and should target the current AmazingTitles API instead of the legacy namespace.
