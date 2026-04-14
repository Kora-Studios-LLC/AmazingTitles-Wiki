# Plugin Functions

This page summarizes the plugin features that ship in the main jar.

## Core display modules

- Title dispatcher
- Subtitle dispatcher
- Action bar dispatcher
- Boss bar dispatcher
- Interactive chat sender
- Smart notification sender

## Built-in systems

- Animation registry
- Extension loader
- SmartBar manager
- Interactive message parser
- Update notifier
- CMI integration bootstrap

## Main command handlers

The plugin command internally registers these handlers:

- `/at sendAnimation`
- `/at sendNotification`
- `/at sendMessage`
- `/at pluginActions`

## `/at sendAnimation`

Used to dispatch a built-in or extension animation to players.

Syntax:

```text
/at sendAnimation <Players> <arguments/@> <Animation> [AnimationArguments] <Text%subtitle%SubText>
```

Examples:

```text
/at sendAnimation all p:TITLE,d:3,fps:20 NONE &aWelcome
/at sendAnimation Steve p:ACTIONBAR,d:4,fps:10 WAVES #00AAFF #FFFFFF &bLoading...
/at sendAnimation all p:TITLE,d:4,fps:12 FADE_IN_WRITER | &dSeason Reset%subtitle%&7Please wait
```

Detailed page: [Sending Animations](sending-animations.md)

## `/at sendNotification`

Used to send SmartBar notifications.

Syntax:

```text
/at sendNotification <Players> <Duration> <Symbol> <Message>
```

Example:

```text
/at sendNotification all 4 &a+ &fReward claimed
```

Detailed page: [Sending Notifications](sending-notifications.md)

## `/at sendMessage`

Used to send interactive chat messages built from a raw mini-format.

Syntax:

```text
/at sendMessage <Players> <Message>
```

Example:

```text
/at sendMessage all <HOVER=&eOpen releases,OPEN_URL=https://github.com/Kora-Studios-LLC/AmazingTitles/releases>&aClick here</>
```

Detailed page: [Sending Interactive Messages](sending-interactive-messages.md)

## `/at pluginActions`

Used to manage reloads and external extension jars.

Supported actions seen in code:

- `extensionList`
- `loadExtension`
- `reloadExtension`
- `unloadExtension`
- `reloadExtensions`
- `unloadExtensions`
- `loadExtensions`
- `reload`

Examples:

```text
/at pluginActions extensionList
/at pluginActions loadExtensions
/at pluginActions reload
```

## Built-in animation catalog

The main plugin currently registers these default animations:

- `NONE`
- `FLASHING_SYMBOL_WRAP`
- `RAINBOW`
- `WAVES`
- `BOUNCE`
- `FLASHING`
- `SPLIT`
- `WORDS_SPLIT`
- `FROM_LEFT`
- `FROM_RIGHT`
- `FADE_IN`
- `FADE_IN_WRITER`
- `FROM_BOTH_SIDES`
- `PULSING`
