import { useState, useEffect } from "react";

export function useKeyPress(
  targetKey,
  onPressDown = () => {},
  onPressUp = () => {}
) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
        onPressDown();
      }
    }

    function upHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(false);
        onPressUp();
      }
    }

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey, onPressDown, onPressUp]);

  return keyPressed;
}

export default useKeyPress;
