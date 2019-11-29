# `useInterval`

A declarative interval hook based on [Dan Abramov's article on overreacted.io](https://overreacted.io/making-setinterval-declarative-with-react-hooks).

## Usage

```jsx
import React, { useState } from "react";
import { useInterval } from "malhook";

function Demo() {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  return <div>{date}</div>;
}
```
