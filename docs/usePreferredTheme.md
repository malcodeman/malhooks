# `usePreferredTheme`

React hook that detects if the user has requested the system use a light or dark color theme.

## Usage

```jsx
import { usePreferredTheme } from "malhooks";

function Demo() {
  const darkTheme = usePreferredTheme();

  return <div>{darkTheme ? <span>dark</span> : <span>light</span>}</div>;
}
```
