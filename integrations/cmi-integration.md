# CMI Integration

AmazingTitles contains a built-in integration bootstrap for `CMI`.

## How it loads

On plugin enable, AmazingTitles checks whether the `CMI` plugin is present. If it is, the CMI integration is instantiated and registers its listeners automatically.

## Integration file

The integration stores its config here:

```text
plugins/AmazingTitles/Integrations/CMI-Integration.yml
```

## Supported CMI events in code

- portal use
- teleport request
- teleport
- AFK enter
- AFK leave
- balance change

## Conditions

Current condition keys supported by the helper:

- `permission::<node>`
- `world::<world_name>`

## Executions

Executions are plain console commands. Placeholders are replaced before dispatch.

## Example config

```yaml
Teleport:
  Conditions:
    - "world::world"
  Executions:
    - "at sendAnimation {Player} p:TITLE,d:3,fps:20 NONE &aTeleported%subtitle%&7{World} {X} {Y} {Z}"

AfkEnter:
  Conditions: []
  Executions:
    - "at sendNotification {Player} 4 &e! &6You are now AFK"
```

## Common placeholders

Depending on the event, the integration exposes values such as:

- `{Player}`
- `{PortalName}`
- `{OfferingPlayer}`
- `{AcceptingPlayer}`
- `{World}`
- `{X}`
- `{Y}`
- `{Z}`
- `{TeleportType}`
- `{From}`
- `{To}`

## Practical note

Because executions are dispatched as console commands, this integration works best when you reuse AmazingTitles commands directly.
