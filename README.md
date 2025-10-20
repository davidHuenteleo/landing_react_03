# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Tutorial 
https://www.youtube.com/watch?v=EBS4Cl0IK2Q&list=LL&index=28&t=7342s
## Sistema global para media queries (responsive)

Este proyecto incluye un stylesheet global para manejar breakpoints, utilidades y escalas responsive de forma centralizada.

### 1) Importación
Ya está importado en la app:
```js
// src/main.jsx
import &#39;./styles/media.css&#39;
```

### 2) Breakpoints disponibles
Usa estos valores en tus CSS de componentes:
- XS: 480px
- SM: 768px
- MD: 992px
- LG: 1200px
- XL: 1400px

Ejemplos:
```css
/* Mobile-first: cambia a 1 columna bajo 768px */
@media (max-width: 768px) {
  .mi-lista {
    grid-template-columns: 1fr;
  }
}

/* Desktop-first: solo aplica desde 1201px en adelante */
@media (min-width: 1201px) {
  .mi-hero {
    padding: 4rem 6rem;
  }
}
```

### 3) Utilidades incluidas
Puedes usarlas en JSX/HTML sin escribir CSS adicional:

- Visibilidad
  - `.u-hide-xs` / `.u-show-xs` (≤ 480px)
  - `.u-hide-sm` / `.u-show-sm` (≤ 768px)
  - `.u-hide-md` / `.u-show-md` (≤ 992px)
  - `.u-hide-lg` / `.u-show-lg` (≤ 1200px)

- Grid responsivo
  - `.u-grid` para display: grid; con `gap` consistente
  - `.u-grid--2` y `.u-grid--3` que colapsan automáticamente:
    - `--3` → 2 columnas bajo 992px
    - `--2` y `--3` → 1 columna bajo 768px

- Tipografía fluida
  - `.u-text-sm`, `.u-text-md`, `.u-text-lg` usan `clamp()` para escalar con el viewport

Ejemplo JSX:
```jsx
&lt;section className=&quot;u-grid u-grid--3&quot;&gt;
  &lt;article className=&quot;u-text-md&quot;&gt;Card 1&lt;/article&gt;
  &lt;article className=&quot;u-text-md&quot;&gt;Card 2&lt;/article&gt;
  &lt;article className=&quot;u-text-md&quot;&gt;Card 3&lt;/article&gt;
&lt;/section&gt;
```

### 4) Contenedor global (opcional)
El archivo define una variable `--container-px` que aumenta el padding lateral bajo ciertos anchos. Si quieres usar esa convención global, añade la clase `container--padded` junto a tu contenedor principal:
```jsx
&lt;div className=&quot;container container--padded&quot;&gt;...&lt;/div&gt;
```
Si prefieres tu implementación actual, no es necesario usarlo.

### 5) Personalización
Edita `src/styles/media.css` para:
- Cambiar los breakpoints (variables `--bp-*`)
- Ajustar la escala de espaciado
- Modificar el comportamiento de utilidades (grid, visibilidad, tipografía)

### 6) Buenas prácticas
- Usa enfoque mobile-first con `max-width` cuando sea posible.
- Centraliza tokens (breakpoints/spacing) en el stylesheet global.
- Evita repetir números mágicos; reusa las utilidades y patrones existentes.
- Adopta gradualmente: puedes combinar tus estilos actuales con estas utilidades sin romper nada.