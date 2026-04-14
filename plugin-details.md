# Plugin Details

This page covers the current build, runtime behavior, folder layout, permissions, and high-level capabilities.

## Identity

- Name: `AmazingTitles`
- Namespace: `org.korastudios.amazingtitles`
- Plugin main class: `org.korastudios.amazingtitles.code.internal.Booter`
- Command aliases: `/amazingtitles`, `/at`
- Soft dependency: `CMI`

## What the plugin does

AmazingTitles is designed to dispatch formatted text to players in several display channels:

- Title
- Subtitle
- Action Bar
- Boss Bar
- Interactive chat
- Smart notifications through the action bar layer

It also includes:

- Built-in animation presets
- Extension loading through jar files
- CMI integration hooks
- A public API for custom animations, extensions, notifications, and subcommands

## Runtime compatibility

- Java target in modules: Java 8 bytecode
- Project build currently compiles with JDK 21
- Supported Minecraft range in this repository: `1.8.8` to `1.21.11`

### RGB and HEX support

RGB formatting depends on runtime support exposed by the server chat color API.

- Modern versions: HEX and gradients are available
- Older versions: HEX and gradients gracefully degrade to plain text or legacy color behavior

## Data folders

When the plugin runs, it uses these directories inside the plugin data folder:

- `plugins/AmazingTitles/Extensions`
- `plugins/AmazingTitles/Integrations`

## Built-in command handlers

The main command is routed into four built-in handler families:

- `sendAnimation`
- `sendNotification`
- `sendMessage`
- `pluginActions`

See [Plugin Functions](functions/plugin-functions.md) for syntax details.

## Permissions seen in code

These permission nodes are currently used by command and update logic:

- `amazingtitles.command`
- `amazingtitles.admin`
- `at.animations`
- `at.notifications`
- `at.messages`
- `at.plugin`

## Update notifications

The update notifier reads the latest release tag from GitHub instead of Spigot.

- Releases page: <https://github.com/Kora-Studios-LLC/AmazingTitles/releases>
- API endpoint used by the checker: `https://api.github.com/repos/Kora-Studios-LLC/AmazingTitles/releases/latest`

You can toggle update notifications in `options.yml` with `UpdateNotifier`.

## SmartBar notes

`options.yml` exposes a built-in static smart bar configuration with:

- enabled toggle
- animation name
- fps
- animation arguments
- display text
- notification interruption toggle

That makes it possible to run an always-on animated action bar without writing code.
