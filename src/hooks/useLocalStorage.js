import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue));

  const setValue = (value) => {
    const valueToStore = value instanceof Function
      ? value(localStorageValue)
      : value;

    // Set to state
    setLocalStorageValue(value);

    // Set to local Storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  }

  return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
  const curentLocalStorageValue = localStorage.getItem(key);

  if (curentLocalStorageValue != null) {
    return JSON.parse(curentLocalStorageValue);
  }

  return initialValue;
}

export default useLocalStorage;