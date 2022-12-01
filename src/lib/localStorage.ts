/**
 * Wrapper around localStorage.getItem
 *
 * Accepts a `key`, tries to read localStorage for the key's value, and parses it.
 *
 * Returns `null` if a key cannot be found, or if localStorage is not available.
 */
export const getItem = (key: string) => {
  try {
    const persisted = localStorage.getItem(key);
    if (typeof persisted !== 'string') return null;
    const parsed = JSON.parse(persisted);
    return parsed;
  } catch (err) {
    console.log(err);
    return null;
  }
};

/**
 * Wrapper around localStorage.setItem
 *
 * Accepts a `key` and `value`, serializes the value as a JSON string, and attempts to write the key/value pair to localStorage.
 */
export const setItem = (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (err) {
    console.log(err);
  }
};
