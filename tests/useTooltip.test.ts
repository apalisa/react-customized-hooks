import { renderHook, act } from '@testing-library/react';
import useTooltip from '../src/hooks/UIHooks/useTooltip';

test('should show and hide tooltip', () => {
    const { result } = renderHook(() => useTooltip());

    expect(result.current.isVisible).toBe(false);

    act(() => {
        result.current.showTooltip();
    });

    expect(result.current.isVisible).toBe(true);

    act(() => {
        result.current.hideTooltip();
    });

    expect(result.current.isVisible).toBe(false);
});
