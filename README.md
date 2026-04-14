# AmazingTitles

Animated titles, subtitles, action bars, boss bars, notifications, interactive messages, extensions, and API tooling for Spigot and Paper servers.

> This wiki is organized to import cleanly into GitBook and follows a structure closer to a product documentation site: documentation, API reference, changelog, and help pages.

## At a glance

- Plugin version: `6.0-SNAPSHOT`
- Namespace: `org.korastudios.amazingtitles`
- Main command: `/amazingtitles` and `/at`
- Version range in this build: `1.8.8` to `1.21.11`
- Update source: GitHub Releases

## Jump right in

- [Quickstart](documentation/getting-started.md)
- [Plugin Details](plugin-details.md)
- [Documentation Overview](documentation/README.md)
- [API Reference Overview](api-reference/README.md)

## Explore the docs

- [Plugin Functions](functions/plugin-functions.md)
- [Sending Animations](functions/sending-animations.md)
- [Sending Notifications](functions/sending-notifications.md)
- [Sending Interactive Messages](functions/sending-interactive-messages.md)
- [HEX and Gradient Colors](functions/hex-and-gradient-colors.md)
- [Built-in Animations](animations/none.md)
- [Extensions](extensions/overview.md)
- [CMI Integration](integrations/cmi-integration.md)

## Release and support

- [Changelog](changelog.md)
- [Help Center](help-center.md)
- GitHub Releases: <https://github.com/Kora-Studios-LLC/AmazingTitles/releases>
- Support Discord: <https://discord.com/invite/Ms7uAAAtcT>

## Compatibility notes

- Modern RGB-capable servers support HEX and gradients.
- Older versions such as `1.8.8` do not provide native boss bars, so that display mode falls back internally.
- External extension jars are loaded from `plugins/AmazingTitles/Extensions`.
