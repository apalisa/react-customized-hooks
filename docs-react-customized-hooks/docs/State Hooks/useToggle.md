---
id: useToggle
title: useToggle
---

# `useToggle`

`useToggle` is a hook that provides a boolean state and a function to toggle its value.

## Usage

```tsx
import useToggle from 'react-customized-hooks/src/hooks/UIHooks/useToggle';

const ExampleComponent = () => {
  const [isToggled, toggle] = useToggle();

  return (
    <button onClick={toggle}>
      {isToggled ? 'On' : 'Off'}
    </button>
  );
};
```

## API

```typescript
const useToggle: (initialValue: boolean = false) => [boolean, () => void];
```

* `initialValue` - The initial boolean state (optional, defaults to `false`).

* **Returns** - An array containing:
    * `isToggled: boolean` - Current state.
    * `toggle: () => void` - Function to toggle the state.

