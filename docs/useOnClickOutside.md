# `useOnClickOutside`

React UI hook that triggers a callback when user clicks outside the target element.

## Usage

```jsx
import { useRef } from "react";
import { useOnClickOutside } from "malhooks";

function Demo() {
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    console.log("OUTSIDE CLICKED");
  });

  return <div ref={ref} />;
}
```
