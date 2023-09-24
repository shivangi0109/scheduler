import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  return { mode };
}

// As seen here, the `useVisualMode` function can take an initial argument to set the mode state. We then return an object `{ mode }`, which can also be written as `{ mode: mode }`. This lets our tests (and components) access the current value of the mode from the hook.