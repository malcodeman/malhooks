import React from "react";

import { useInterval } from "../src/useInterval";

export default { title: "useInterval" };

export function Default() {
  const [date, setDate] = React.useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  return <div>{date.toString()}</div>;
}
