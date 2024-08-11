---
id: useFetch
title: useFetch
---

# `useFetch`

`useFetch` is a custom hook for performing HTTP requests and handling loading and error states.

## Usage

```tsx
import { useFetch } from 'react-customized-hooks/src/hooks/fetchingHooks/useFetch';

const ExampleComponent = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>Data: {JSON.stringify(data)}</div>;
};
```

## API
* `url: string` - The URL to which the request will be made. This should be a string representing the endpoint.

## Returned Values
* `data: any` - The data retrieved from the request. This will be `undefined` while the request is in progress.
* `loading: boolean` - true while the request is in progress, and `false` once the request has completed.
* `error: Error | null` - An error object if there is an issue with the request, or `null` if there are no errors.

## Advanced Options
You can customize the behavior of the hook by passing additional options, such as HTTP method and request body:

```tsx
const { data, loading, error } = useFetch('https://api.example.com/data', {
  method: 'POST',
  body: JSON.stringify({ key: 'value' }),
});
```
