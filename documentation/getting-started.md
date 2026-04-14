# Quickstart

This page is meant to be the fastest path from download to first visible animation.

## 1. Install the plugin

Place the main plugin jar into your server `plugins` directory and start the server once.

That creates the AmazingTitles data folder and its default configuration files.

## 2. Check your server version

This build supports:

- `1.8.8` through `1.21.11`

Notes:

- `1.21.11` is targeted through the Paper API line used in this repository
- `1.8.8` support uses the `R1_8_R3` provider
- boss bars are not available natively on `1.8.8`

## 3. Test a simple animation

Use one of these commands in game or from the console:

```text
/at sendAnimation all p:TITLE,d:3,fps:20 NONE &aWelcome
/at sendAnimation all p:TITLE,d:4,fps:15 WAVES #00AAFF #FFFFFF &bServer ready
```

## 4. Test a notification

```text
/at sendNotification all 4 &a+ &fReward claimed
```

## 5. Test an interactive message

```text
/at sendMessage all <HOVER=&eOpen releases,OPEN_URL=https://github.com/Kora-Studios-LLC/AmazingTitles/releases>&aClick here</>
```

## 6. Add extensions if needed

Drop external extension jars into:

```text
plugins/AmazingTitles/Extensions
```

Then use:

```text
/at pluginActions loadExtensions
```

## Continue reading

- [Installation and Setup](installation-and-setup.md)
- [Plugin Functions](../functions/plugin-functions.md)
- [Extensions Overview](../extensions/overview.md)
- [API Reference Overview](../api-reference/README.md)
