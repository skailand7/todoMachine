import React from "react";

function useLocalStorage(itenName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itenName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itenName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, [item]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itenName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return { item, saveItem, loading, error };
}
export { useLocalStorage };
