---
id: useTooltip
title: useTooltip
---

# `useTooltip`

`useTooltip` is a custom hook for managing the visibility and positioning of a tooltip.

## Usage

```tsx
import { useTooltip } from 'react-customized-hooks/src/hooks/UIHooks/useTooltip';

const ExampleComponent = () => {
  const { showTooltip, hideTooltip, tooltipVisible, tooltipPosition } = useTooltip();

  return (
    <div>
      <button
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        Hover over me
      </button>
      {tooltipVisible && (
        <div className="tooltip" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>
          Tooltip content
        </div>
      )}
    </div>
  );
};
```

## API

* `tooltipVisible: boolean` - Indicates if the tooltip is visible.
* `tooltipPosition: { top: number, left: number }` - The position of the tooltip.
* `showTooltip: () => void` - Function to show the tooltip.
* `hideTooltip: () => void` - Function to hide the tooltip.