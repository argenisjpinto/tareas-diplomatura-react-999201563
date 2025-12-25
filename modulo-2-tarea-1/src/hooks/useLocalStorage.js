import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error al leer localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const value = typeof storedValue === 'function' ? storedValue(storedValue) : storedValue;
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
}