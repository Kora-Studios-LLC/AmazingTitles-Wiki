# Extensions Overview

AmazingTitles can load external extension jars from its `Extensions` folder.

## Extension directory

```text
plugins/AmazingTitles/Extensions
```

## Extension lifecycle

Extensions are loaded through `AmazingExtension` and may:

- register custom animations
- register Bukkit listeners
- use the public AmazingTitles API

## Managing extensions in-game

Use the plugin actions handler:

```text
/at pluginActions extensionList
/at pluginActions loadExtensions
/at pluginActions reloadExtensions
/at pluginActions unloadExtensions
/at pluginActions loadExtension <jarName>
/at pluginActions reloadExtension <extensionName>
/at pluginActions unloadExtension <extensionName>
```

## Current extension families in this repository

- Summer
- Winter
- Alert
- Bounce
- Cosmic
- Fire
- Glow
- Progress
- Shockwave
- Timer
- Void

## Current source-level extension reference

See [EXTENSIONS.md](../../EXTENSIONS.md) for the current extension catalog and animation keys bundled in this repository.

## Extension jar requirements

Each extension jar must include an `extension.yml` file with a `Class:` entry pointing to the extension main class.

Example:

```yaml
Class: org.korastudios.amazingtitles.extension.example.Main
```

## Recommended structure

- one main class implementing `AmazingExtension`
- animation registrations inside `load()`
- cleanup inside `unload()`
- listener registration through `addListener(...)`
