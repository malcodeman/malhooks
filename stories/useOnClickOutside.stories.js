import React from "react";

import { useOnClickOutside } from "../src/useOnClickOutside";

export default { title: "useOnClickOutside" };

export function Default() {
  const ref = React.useRef(null);
  const [clicked, setClicked] = React.useState(false);

  function handler() {
    setClicked(true);
  }

  useOnClickOutside(ref, handler);

  return (
    <div ref={ref} onClick={() => setClicked(false)}>
      Clicked ? {clicked ? "true" : "false"}
    </div>
  );
}
