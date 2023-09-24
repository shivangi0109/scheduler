import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  // Create the 'transition' function to update the 'mode' state
  const transition = (newMode) => {
    setMode(newMode);
  };

  return {
    mode,
    transition
  };
}

// As seen here, the `useVisualMode` function can take an initial argument to set the mode state. We then return an object `{ mode }`, which can also be written as `{ mode: mode }`. This lets our tests (and components) access the current value of the mode from the hook.