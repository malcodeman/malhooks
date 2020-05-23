import React from "react";

import { usePrevious } from "../src/usePrevious";

export default { title: "usePrevious" };

export function Default() {
  const [count, setCount] = React.useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>
        Now: {count}, before: {prevCount}
      </p>
    </div>
  );
}
