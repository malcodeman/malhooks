# `useKeyPress`

React UI sensor hook that detects when the user is pressing a specific key on their keyboard.

## Usage

```jsx
import { useKeyPress } from "malhooks";

function Demo() {
  useKeyPress("Escape", () => console.log("ESCAPE PRESSED"));

  return null;
}
```
