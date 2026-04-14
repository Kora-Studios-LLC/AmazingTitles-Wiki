# Creating Custom SubCommand

AmazingTitles allows registering custom command handlers through its API.

## Main interface

Implement `CommandHandler` and register it with:

```java
AmazingTitles.registerCommandHandler("myHandler", handler);
```

## Required methods

- `readAndExecute(CommandSender sender, String[] args)`
- `readAndReturn(CommandSender sender, String[] args)`
- `permission()`
- `handlerType()`
- `helpMessage()`

## Example

```java
import net.md_5.bungee.api.chat.BaseComponent;
import net.md_5.bungee.api.chat.TextComponent;
import org.bukkit.command.CommandSender;
import org.korastudios.amazingtitles.code.api.AmazingTitles;
import org.korastudios.amazingtitles.code.internal.commands.commandreaders.CommandHandler;
import org.korastudios.amazingtitles.code.internal.commands.commandreaders.HandlerType;
import org.korastudios.amazingtitles.code.internal.commands.commandreaders.InternalHandlerType;

import java.util.Collections;
import java.util.List;

public class MyHandler implements CommandHandler {

    @Override
    public boolean readAndExecute(CommandSender sender, String[] args) {
        sender.sendMessage("Hello from AmazingTitles");
        return true;
    }

    @Override
    public List<String> readAndReturn(CommandSender sender, String[] args) {
        return Collections.singletonList("example");
    }

    @Override
    public String permission() {
        return "at.custom";
    }

    @Override
    public HandlerType handlerType() {
        return new InternalHandlerType();
    }

    @Override
    public BaseComponent[] helpMessage() {
        return new BaseComponent[] { new TextComponent("/at myHandler") };
    }
}
```

## Register and unregister

```java
AmazingTitles.registerCommandHandler("myHandler", new MyHandler());
AmazingTitles.unregisterCommandHandler("myHandler");
```

## Practical use cases

- admin utilities
- integration shortcuts
- extension-specific command entry points
- developer debugging tools
