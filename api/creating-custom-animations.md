# Creating Custom Animations

Custom animations are built with `AnimationBuilder`.

## Core pieces

- `AnimationBuilder`
- `AnimationType`
- `ComponentArguments`
- `FramesBuilder`

## Animation types

Current enum values:

- `REPEATING`
- `FADE_IN`
- `LIGHT`

## Example animation

```java
package org.korastudios.amazingtitles.extension.example;

import org.bukkit.boss.BarColor;
import org.korastudios.amazingtitles.code.api.builders.AnimationBuilder;
import org.korastudios.amazingtitles.code.api.enums.AnimationType;
import org.korastudios.amazingtitles.code.api.enums.DisplayType;
import org.korastudios.amazingtitles.code.api.interfaces.AmazingExtension;
import org.korastudios.amazingtitles.code.internal.components.ComponentArguments;
import org.korastudios.amazingtitles.code.internal.utils.ColorTranslator;

import java.util.LinkedList;

public class Main implements AmazingExtension {

    @Override
    public String extension_name() {
        return "Example";
    }

    @Override
    public void load() {
        AnimationBuilder builder = new AnimationBuilder(this, AnimationType.REPEATING, false, "Color");
        builder.setComponentArguments(ComponentArguments.create("Example", "", BarColor.WHITE, 3, 10, DisplayType.TITLE));
        builder.setFramesBuilder((arguments, args) -> {
            LinkedList<String> frames = new LinkedList<>();
            String color = args.length > 0 ? args[0] : "&a";
            frames.add(ColorTranslator.colorize(color + arguments.getMainText()));
            frames.add(ColorTranslator.colorize("&f" + arguments.getMainText()));
            return frames;
        });
        builder.register("EXTENSION_EXAMPLE_FLASH");
    }

    @Override
    public void unload() {
    }
}
```

## Registration flow

1. Create the builder
2. Set default `ComponentArguments`
3. Set a `FramesBuilder`
4. Register with a stable key

## Good naming style

Use uppercase keys with a clear family prefix:

```text
EXTENSION_EXAMPLE_FLASH
```

## Tips

- use `LinkedList<String>` for frame output
- colorize frames before returning them
- keep frame counts reasonable
- document required arguments for command users
