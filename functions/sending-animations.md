# Sending Animations

This page explains the built-in animation command and its argument parser.

## Command syntax

```text
/at sendAnimation <Players> <arguments/@> <Animation> [AnimationArguments] <Text%subtitle%SubText>
```

## Part 1: Player selector

The first argument selects receivers.

Supported forms:

- `all`
- `Steve`
- `Steve,Alex`
- `-p:permission.node`
- `-w:world_name`

Examples:

```text
all
Steve,Alex
-p:vip.rank
-w:world_nether
```

## Part 2: Display argument bundle

The second argument is a comma-separated bundle parsed by `ArgsHelper`.

Supported tokens:

- `cc:PINK`
- `cc:BLUE`
- `cc:RED`
- `cc:GREEN`
- `cc:YELLOW`
- `cc:PURPLE`
- `cc:WHITE`
- `p:TITLE`
- `p:SUBTITLE`
- `p:BOSSBAR`
- `p:ACTIONBAR`
- `d:<seconds>`
- `fps:<1-20>`

Example:

```text
p:TITLE,d:4,fps:20,cc:WHITE
```

Notes:

- `cc:` mainly matters for boss bar output
- `d:` is in seconds
- `fps:` is animation speed
- `p:BOSSBAR` falls back internally on old servers without boss bar support

## Part 3: Animation name

The third argument is the animation key, for example:

- `NONE`
- `FADE_IN`
- `WAVES`
- `PULSING`
- `EXTENSION_BOUNCE_CENTER_REVEAL`

## Part 4: Animation arguments

Some animations require extra arguments before the text body.

Examples:

- `WAVES` -> `Color1 Color2`
- `PULSING` -> `Color1 Color2`
- `FADE_IN_WRITER` -> `WriterSymbol`
- `FLASHING_SYMBOL_WRAP` -> `Symbol`

## Part 5: Main text and subtitle

The final text block may optionally include `%subtitle%`.

Example:

```text
&aMain title%subtitle%&7Subtitle text
```

If `%subtitle%` is not present, only the main text is used.

## Example commands

### Static title

```text
/at sendAnimation all p:TITLE,d:3,fps:20 NONE &aWelcome
```

### RGB wave

```text
/at sendAnimation all p:ACTIONBAR,d:5,fps:12 WAVES #00AAFF #FFFFFF &bSynchronizing data
```

### Writer reveal with subtitle

```text
/at sendAnimation Steve p:TITLE,d:4,fps:15 FADE_IN_WRITER | &dAmazingTitles%subtitle%&7Loading modules
```

## Where animations come from

Animations can come from two places:

- built-in registrations in `PluginLoader.loadDefaultAnimations()`
- extension jars loaded into `plugins/AmazingTitles/Extensions`

## Troubleshooting

If the command returns the help message, check:

- the player selector
- the display argument bundle
- the animation name
- the required animation arguments
- whether your extension is loaded
