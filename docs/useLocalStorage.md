# `useLocalStorage`

React side-effect hook that manages a single localStorage key.

## Usage

```jsx
import { useLocalStorage } from "malhooks";

function Demo() {
  const [value, setValue] = useLocalStorage("key", "foo");

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue("bar")}>bar</button>
    </div>
  );
}
```
