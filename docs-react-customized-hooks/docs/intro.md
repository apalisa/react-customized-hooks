---
id: intro
title: Introduction
---

# React Customized Hooks

Welcome to the documentation of `react-customized-hooks`. This package provides a collection of reusable and customizable React hooks for your projects.

## Available Hooks

### Form Hooks

`useForm`: Custom hook for managing form state and handling form submissions.  
`useInput`: Custom hook for managing the state of an individual input field.

### UI-UX Hooks
`useModal`: Custom hook that provides a simple interface to control the visibility of modals in your application.  
`useTooltip`: Custom hook for managing the visibility and positioning of a tooltip.

### State and Effects Hooks
`useToggle`: Custom hook that provides a boolean state and a function to toggle its value.

### Fetching Hooks
`useFetch`: Custom hook for performing HTTP requests and handling loading and error states.

***Please refer to the sidebar for detailed documentation of each hook.***

-----------------------------------------------------------------------------------------------------

## Tipos de Hooks a Incluir

### Hooks de Estado y Efectos

- [ ] `usePrevious`: Para obtener el valor previo de una variable.  
- [x] ~~`useToggle`~~: Para alternar entre dos estados booleanos.  
- [ ] `useTimeout`: Para ejecutar una función después de un tiempo determinado.  
- [ ] `useInterval`: Para ejecutar una función en intervalos regulares.  
- [ ] `useDebounce`: Para debouncing de valores, útil en formularios y búsquedas.  

### Hooks para Manejo de Formularios

- [x] ~~`useForm`~~: Para manejar el estado y validación de formularios.  
- [x] ~~`useInput`~~: Para manejar el estado de entradas de formularios.  
- [ ] `useFieldArray`: Para manejar campos de formularios dinámicos (arrays de campos).  

### Hooks de Fetching y API

- [x] ~~`useFetch`~~: Para realizar peticiones HTTP de manera sencilla.  
- [ ] `useAxios`: Integración con Axios para peticiones más complejas.  
- [ ] `useWebSocket`: Para manejar conexiones WebSocket.  

### Hooks de UI y UX

- [x] ~~`useModal`~~: Para manejar la apertura y cierre de modales.
- [x] ~~`useTooltip`~~: Para manejar tooltips de manera sencilla.  
- [ ] `useScroll`: Para manejar eventos de scroll y obtener la posición de scroll.  

### Hooks de Accesibilidad

- [ ] `useFocusTrap`: Para manejar el enfoque en elementos dentro de un contenedor.  
- [ ] `useAriaLive`: Para manejar anuncios dinámicos para lectores de pantalla.  

### Hooks de Utilidades

- [ ] `useLocalStorage`: Para manejar el almacenamiento en localStorage.  
- [ ] `useSessionStorage`: Para manejar el almacenamiento en sessionStorage.  
- [ ] `useMediaQuery`: Para manejar media queries y adaptarse a diferentes tamaños de pantalla.  
- [ ] `useWindowSize`: Para obtener el tamaño actual de la ventana.  
