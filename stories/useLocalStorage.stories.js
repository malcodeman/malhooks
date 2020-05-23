import React from "react";

import { useLocalStorage } from "../src/useLocalStorage";

export default { title: "useLocalStorage" };

export function Default() {
  const [value, setValue] = useLocalStorage("key", "foo");

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue("foo")}>foo</button>
      <button onClick={() => setValue("bar")}>bar</button>
    </div>
  );
}
