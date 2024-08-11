---
id: useForm
title: useForm
---

# `useForm`

`useForm` is a custom hook for managing form state and handling form submissions.

## Usage

```tsx
import { useForm } from 'react-customized-hooks/src/hooks/formHooks/useForm';

const ExampleComponent = () => {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
```

## API

* `initialValues: object` - Initial values for the form fields.
* `onSubmit: (values: object) => void` - Function to handle form submission.

## Returned Values
* `values: object` - Current form values.
* `handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void` - Function to update form values.
* `handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void` - Function to handle form submission.