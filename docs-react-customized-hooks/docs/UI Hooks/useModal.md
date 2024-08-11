---
id: useModal
title: useModal
---

# `useModal`

`useModal` is a custom hook that provides a simple interface to control the visibility of modals in your application.

## Usage

```tsx
import { useModal } from 'react-customized-hooks/src/hooks/UIHooks/useModal';

const ExampleComponent = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <p>This is a modal</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};
```
## API

`isOpen: boolean` - Indicates if the modal is open.
`openModal: () => void` - Function to open the modal.
`closeModal: () => void` - Function to close the modal.