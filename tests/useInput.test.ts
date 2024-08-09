import { renderHook, act } from '@testing-library/react';
import useInput from '../src/hooks/formHooks/useInput';

test('should handle input change', () => {
    const { result } = renderHook(() => useInput(''));

    act(() => {
        result.current.onChange({ target: { value: 'Hello' } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe('Hello');
});

test('should reset input', () => {
    const { result } = renderHook(() => useInput(''));

    act(() => {
        result.current.onChange({ target: { value: 'Hello' } } as React.ChangeEvent<HTMLInputElement>);
        result.current.reset();
    });

    expect(result.current.value).toBe('');
});
