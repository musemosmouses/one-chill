# One Line, One Chill

Entry for the make.fun bounty
[u-azazex-one-line-one-chill-6d4d5488](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
("One Line, One Chill").

`main.ts` writes a single sentence of horror (123 characters, one sentence)
to `$MAKEFUN_OUTPUT_DIR/entry.txt`. Nothing else is written, no network, no
randomness — the output is identical on every run.

## Entry

> Our wedding photo has always shown four people at the altar; this morning I counted five, and the fifth is wearing my face.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
