import { useEffect, useState } from "react";

export function useIntersection(ref, options) {
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState(
    null
  );

  useEffect(() => {
    if (ref.current) {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0]);
      };
      const observer = new IntersectionObserver(handler, options);

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.disconnect();
        }
      };
    }
    return () => {};
  }, [ref, options.threshold, options.root, options.rootMargin]);

  return intersectionObserverEntry;
}

export default useIntersection;
