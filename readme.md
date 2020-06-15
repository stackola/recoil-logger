# recoil-logger

A simple logging utility for recoiljs.

## Installation:


## Example usage:

```Javascript
import React from "react";
import { RecoilRoot, atom } from "recoil";

import RecoilLogger from "recoil-logger";

const textState = atom({
  key: "textState",
  default: 1,
});

export default function Wrapper() {
  return (
    <RecoilRoot>
      <RecoilLogger enabled atoms={[textState]}></RecoilLogger>
      <App></App>
    </RecoilRoot>
  );
}
```
