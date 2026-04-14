# Creating AmazingExtension

This page shows the basic extension contract used by AmazingTitles.

## The interface

An extension implements `AmazingExtension` and defines:

- `extension_name()`
- `load()`
- `unload()`

It also inherits helpers such as:

- `addListener(...)`
- `getPluginInstance()`
- `getListeners()`
- `unregisterListeners()`

## Minimal example

```java
package org.korastudios.amazingtitles.extension.example;

import org.korastudios.amazingtitles.code.api.interfaces.AmazingExtension;

public class Main implements AmazingExtension {

    @Override
    public String extension_name() {
        return "Example";
    }

    @Override
    public void load() {
        // Register animations here
    }

    @Override
    public void unload() {
        unregisterListeners();
    }
}
```

## Required metadata

Your jar must include `extension.yml`:

```yaml
Class: org.korastudios.amazingtitles.extension.example.Main
```

## Loading behavior

AmazingTitles scans the `Extensions` folder for jar files, reads `extension.yml`, and instantiates the configured class with a no-args constructor.

## Recommendations

- keep `load()` focused on registration
- keep `unload()` focused on cleanup
- do not leave listeners registered after unload
- prefer unique animation keys such as `EXTENSION_EXAMPLE_MY_ANIMATION`
