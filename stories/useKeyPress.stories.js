import React from "react";

import { useKeyPress } from "../src/useKeyPress";

export default { title: "useKeyPress" };

export function Default() {
  const pressed = useKeyPress("Escape", () => console.log("ESCAPE PRESSED"));

  return (
    <>
      <p>Press Escape</p>
      <div>{pressed ? "Pressed" : "Not pressed"}</div>
    </>
  );
}
