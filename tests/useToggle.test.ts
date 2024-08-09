import { renderHook, act } from '@testing-library/react';
import useToggle from '../src/hooks/UIHooks/useToggle';

test('should toggle value', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);

    act(() => {
        result.current[1]();
    });

    expect(result.current[0]).toBe(true);
});
