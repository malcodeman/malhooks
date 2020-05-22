import React from "react";

import { usePreferredTheme } from "../src/usePreferredTheme";

export default { title: "usePreferredTheme" };

export function Default() {
  const darkTheme = usePreferredTheme();

  return <div>{darkTheme ? "Dark" : "Light"}</div>;
}
