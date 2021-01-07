export function setNewTheme(theme) {
  return {
    type: 'main/setTheme',
    payload: theme,
  };
}

export function increment() {
  return {
    type: 'increment',
  };
}

export function decrement() {
  return {
    type: 'decrement',
  };
}
