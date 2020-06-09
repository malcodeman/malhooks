import React from "react";
import { action } from "@storybook/addon-actions";

import { useKeyPress } from "../src/useKeyPress";

export default { title: "useKeyPress" };

export function Default() {
  const pressed = useKeyPress("Escape", () => action("ESCAPE PRESSED")());

  return (
    <>
      <p>Press Escape</p>
      <div>{pressed ? "Pressed" : "Not pressed"}</div>
    </>
  );
}
