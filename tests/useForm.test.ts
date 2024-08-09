import { renderHook, act } from '@testing-library/react';
import useForm from '../src/hooks/formHooks/useForm';

test('should handle form changes', () => {
    const { result } = renderHook(() => useForm({ name: '' }));

    act(() => {
        result.current.handleChange({ target: { name: 'name', value: 'John' } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values.name).toBe('John');
});

test('should reset form', () => {
    const { result } = renderHook(() => useForm({ name: '' }));

    act(() => {
        result.current.handleChange({ target: { name: 'name', value: 'John' } } as React.ChangeEvent<HTMLInputElement>);
        result.current.resetForm();
    });

    expect(result.current.values.name).toBe('');
});
