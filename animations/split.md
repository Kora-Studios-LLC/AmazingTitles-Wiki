# SPLIT

`SPLIT` turns one text body into multiple frames using the `%frame%` delimiter.

## Arguments

- none

## Input rule

Place `%frame%` inside the main text wherever you want to cut frames.

## Example

```text
/at sendAnimation all p:ACTIONBAR,d:4,fps:6 SPLIT &aLoading%frame%&eLoading.%frame%&6Loading..
```
