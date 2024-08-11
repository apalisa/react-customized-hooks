---
id: useInput
title: useInput
---

# `useInput`

`useInput` is a custom hook for managing the state of an individual input field.

## Usage

```tsx
import { useInput } from 'react-customized-hooks/src/hooks/formHooks/useInput';

const ExampleComponent = () => {
  const { value, onChange } = useInput('');

  return (
    <input
      value={value}
      onChange={onChange}
      placeholder="Type something..."
    />
  );
};
```

## API

* `initialValue: string` - Initial value for the input (optional, defaults to `''`).

## Returned Values

* `value: string` - Current value of the input.
* `onChange: (event: React.ChangeEvent<HTMLInputElement>) => void` - Function to update the input value.
