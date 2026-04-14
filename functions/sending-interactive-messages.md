# Sending Interactive Messages

Interactive chat messages are built from a raw string mini-format and then converted into Bungee chat components.

## Command syntax

```text
/at sendMessage <Players> <Message>
```

## Raw format

Interactive segments use this structure:

```text
<ARGUMENTS>Visible text</>
```

Supported arguments:

- `HOVER=<text>`
- `OPEN_URL=<url>`
- `SUGGEST_COMMAND=<command>`
- `RUN_COMMAND=<command>`

You can combine multiple arguments with commas:

```text
<HOVER=&eOpen releases,OPEN_URL=https://github.com/Kora-Studios-LLC/AmazingTitles/releases>&aGitHub Releases</>
```

## Example commands

### Open a URL

```text
/at sendMessage all <HOVER=&eOpen releases,OPEN_URL=https://github.com/Kora-Studios-LLC/AmazingTitles/releases>&aClick here to update</>
```

### Suggest a command

```text
/at sendMessage Steve <HOVER=&7Suggest command,SUGGEST_COMMAND=/at pluginActions reload>&dReload AmazingTitles</>
```

### Run a command

```text
/at sendMessage Steve <HOVER=&7Run now,RUN_COMMAND=/at pluginActions extensionList>&aShow loaded extensions</>
```

## Plain text and interactive text together

You can mix normal colored text and interactive sections:

```text
&7Need help? <HOVER=&bOpen support,OPEN_URL=https://discord.com/invite/Ms7uAAAtcT>&bJoin Discord</> &7or <HOVER=&eOpen releases,OPEN_URL=https://github.com/Kora-Studios-LLC/AmazingTitles/releases>&eopen releases</>
```

## Important parser limitations

The current parser is intentionally lightweight. Keep these rules in mind:

- Argument values are split by commas
- Values are not quoted
- Avoid commas inside hover text or command values
- Keep raw tags balanced with `</>`

## API equivalent

```java
AmazingTitles.sendInteractiveMessage(
    "<HOVER=&eOpen releases,OPEN_URL=https://github.com/Kora-Studios-LLC/AmazingTitles/releases>&aClick here</>",
    player
);
```
