# Sending Notifications

AmazingTitles includes a SmartBar notification system designed for short animated action bar notices.

## Command syntax

```text
/at sendNotification <Players> <Duration> <Symbol> <Message>
```

## Arguments

- `Players`: same selector rules as animation dispatch
- `Duration`: seconds as an integer
- `Symbol`: leading icon or prefix
- `Message`: notification body

## Example commands

```text
/at sendNotification all 4 &a+ &fReward claimed
/at sendNotification Steve,Alex 6 &e! &6Server restart in 60 seconds
/at sendNotification -p:staff.notify 3 &cX &fA moderation action was completed
```

## Behavior notes

- The symbol and message are colorized before display
- Notifications animate in and animate out automatically
- Notifications are routed through each player's SmartBar instance

## API equivalent

The public API exposes the same feature through `SmartNotification`:

```java
AmazingTitles.sendNotification(new SmartNotification(4, "&a+", "&fReward claimed"), player);
```

## Best practices

- Keep the symbol short
- Keep the text compact so it fits action bar space
- Avoid very long durations unless the notification is critical
