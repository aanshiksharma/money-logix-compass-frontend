export function setStorageItem(key: string, value: string) {
  return localStorage.setItem(key, value);
}

export function getStorageItem(key: string) {
  return localStorage.getItem(key);
}

export function removeStorageItem(key: string) {
  return localStorage.removeItem(key);
}

export function clearStorage() {
  return localStorage.clear();
}
