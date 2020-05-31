import { useEffect, useState } from "react";

// Custom hook to get and store values from localStorage
export const useStateWithLocalStorage = (localStorageKey: string) => {
  const [value, setValue] = useState<string>(localStorage.getItem(localStorageKey));

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return { value, setValue };
};
