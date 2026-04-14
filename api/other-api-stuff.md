# Other API Stuff

This page collects useful public entry points exposed by `AmazingTitles`.

## Plugin reload

```java
AmazingTitles.reloadPlugin();
AmazingTitles.reloadPlugin(sender);
```

## Animations

```java
AmazingTitles.registerCustomAnimation("MY_ANIMATION", builder);
AmazingTitles.unregisterCustomAnimation("MY_ANIMATION");
AmazingTitles.getCustomAnimation("MY_ANIMATION");
AmazingTitles.getAnimationNames();
AmazingTitles.sendAnimation("MY_ANIMATION", arguments, args, player);
AmazingTitles.broadcastAnimation("MY_ANIMATION", arguments, args);
```

## Components and cache helpers

```java
AmazingTitles.getAnimationBy(player);
AmazingTitles.hasAnimation(player);
AmazingTitles.removeAnimation(player);
```

## Notifications

```java
AmazingTitles.sendNotification(notification, player);
AmazingTitles.sendNotification("id", notification, players);
AmazingTitles.broadcastNotification(notification);
```

## Interactive messages

```java
AmazingTitles.getInteractiveMessageFromRaw(raw);
AmazingTitles.sendInteractiveMessage(raw, player);
AmazingTitles.broadcastInteractiveMessage(raw);
```

## Extensions

```java
AmazingTitles.loadExtension(extension);
AmazingTitles.unloadExtension("Example");
AmazingTitles.unloadAllExtensions();
AmazingTitles.getLoadedExtensionNames();
AmazingTitles.getLoadedExtensionFileNames();
AmazingTitles.registerExtensionListener(extension, listener);
```

## SmartBar access

```java
AmazingTitles.getSmartBar(player);
AmazingTitles.hideSmartBar(player);
AmazingTitles.showSmartBar(player);
```

## System folders

The API exposes these shared directories:

- `AmazingTitles.EXTENSIONS_FOLDER`
- `AmazingTitles.INTEGRATIONS_FOLDER`

## Namespace reminder

All current API imports should use:

```text
org.korastudios.amazingtitles
```
