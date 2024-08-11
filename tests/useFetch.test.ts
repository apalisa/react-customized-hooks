import { renderHook } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import useFetch from '../src/hooks/fetchingHooks/useFetch';

global.fetch = jest.fn();

test('should return data when fetch is successful', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ message: 'Hello, world!' }),
  });

  const { result } = renderHook(() =>
    useFetch<{ message: string }>('https://api.example.com/data')
  );

  expect(result.current.loading).toBe(true);

  await waitFor(() => expect(result.current.loading).toBe(false));

  expect(result.current.data).toEqual({ message: 'Hello, world!' });
  expect(result.current.error).toBe(null);
});

test('should return error when fetch fails', async () => {
  (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

  const { result } = renderHook(() =>
    useFetch<{ message: string }>('https://api.example.com/data')
  );

  expect(result.current.loading).toBe(true);

  await waitFor(() => expect(result.current.loading).toBe(false));

  expect(result.current.data).toBe(null);
  expect(result.current.error).toEqual(new Error('Failed to fetch'));
});
