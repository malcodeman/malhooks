import { useEffect } from "react";

export function useFavicon(href) {
  useEffect(() => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");

    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = href;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [href]);
}

export default useFavicon;
