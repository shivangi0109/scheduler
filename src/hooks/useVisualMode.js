import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  // We will need to keep track of the history of the modes, so we can go backwards to a previous mode. We can store this history as a stateful array called history in our Hook.
  const [history, setHistory] = useState([initial]);

  // Create the 'transition' function to update the 'mode' state
  const transition = (newMode) => {
    setHistory(prev => [...prev, newMode]);
  };

  const back = () => {
    setHistory(prev => [...prev.slice(0, prev.length - 1)]);
  };

  return {
    mode: history[history.length -1],
    transition,
    back
  };
}

// As seen here, the `useVisualMode` function can take an initial argument to set the mode state. We then return an object `{ mode }`, which can also be written as `{ mode: mode }`. This lets our tests (and components) access the current value of the mode from the hook.