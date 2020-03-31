import React from "react";

export function usePreferredTheme(scheme = "dark") {
  const [theme, setTheme] = React.useState(
    window.matchMedia &&
      window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches
  );

  if (scheme !== "dark" && scheme !== "light") {
    console.warn(`usePreferredTheme only supports dark or light scheme.`);
  }

  React.useEffect(() => {
    function handler({ matches }) {
      setTheme(matches);
    }

    window.matchMedia &&
      window
        .matchMedia(`(prefers-color-scheme: ${scheme})`)
        .addEventListener("change", handler);
    return () => {
      window.matchMedia &&
        window
          .matchMedia(`(prefers-color-scheme: ${scheme})`)
          .removeEventListener("change", handler);
    };
  }, [scheme]);

  return theme;
}

export default usePreferredTheme;
