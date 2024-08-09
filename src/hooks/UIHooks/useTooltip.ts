import { useState, useCallback } from 'react';

const useTooltip = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showTooltip = useCallback(() => setIsVisible(true), []);
    const hideTooltip = useCallback(() => setIsVisible(false), []);

    return { isVisible, showTooltip, hideTooltip };
};

export default useTooltip;
