# Slider de Productos Interactivo

<div align="center">
  <img src="public/vite.svg" alt="Logo" width="100" height="100">
</div>

## 📋 Descripción

Este proyecto implementa un slider de productos interactivo para un e-commerce, desarrollado con React, Swiper.js, Tailwind CSS y Phosphor Icons. Permite navegar entre productos destacados, filtrar por categorías y precio, ver detalles rápidos de productos y recibir notificaciones al realizar acciones como añadir al carrito o elegir un favorito.

### ✨ Características principales

- **Slider responsive** que se adapta a diferentes tamaños de pantalla
- **Filtrado por categorías** para visualizar productos específicos
- **Filtrado por rango de precios** con controles deslizantes interactivos
- **Vista previa rápida** de productos mediante modales con efecto blur
- **Notificaciones** al añadir productos al carrito o favoritos
- **Autoplay configurable** para navegación automática entre productos
- **Diseño completamente responsive** (móvil, tablet y desktop)
- **Animaciones y transiciones** para una experiencia de usuario atractiva

## 🚀 Tecnologías utilizadas

- **React** - Biblioteca para construir interfaces de usuario
- **Vite** - Entorno de desarrollo ultrarrápido
- **Tailwind CSS** - Framework de utilidades CSS
- **Swiper.js** - Slider moderno y táctil
- **Phosphor Icons** - Biblioteca de iconos

## 📦 Instalación

1. Clona este repositorio
   ```bash
   git clone https://github.com/JoeySolen/product-slider-app.git
   cd slider-productos-interactivo
   ```

2. Instala las dependencias
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo
   ```bash
   npm run dev
   ```

4. Abre tu navegador en http://localhost:5173

## 💻 Uso

### Navegación por el slider

- Utiliza las flechas de navegación para desplazarte entre productos
- Activa/desactiva el autoplay con el interruptor correspondiente
- Haz clic en los puntos de navegación para ir a un producto específico

### Filtrado de productos

- Selecciona una categoría para filtrar los productos
- Utiliza el botón de filtro de precios para mostrar/ocultar el control de rango
- Ajusta los deslizadores para definir el rango de precios deseado
- Utiliza el botón "Reset" para restablecer los filtros a su valor original

### Interacción con productos

- Pasa el cursor sobre un producto para mostrar las opciones rápidas
- Haz clic en el icono del carrito para añadir al carrito
- Haz clic en el icono del corazón para añadir a favoritos
- Haz clic en el icono del ojo para abrir la vista previa detallada

## 🖼️ Capturas de pantalla

![Slider de Productos]()
![Vista previa de producto]()
![Filtros aplicados]()

## 📝 Estructura del proyecto

```
/
├── public/               # Assets públicos
│   └── favicon.svg       # Favicon del proyecto
├── src/                  # Código fuente
│   ├── components/       # Componentes de React
│   │   ├── ProductSlider.jsx      # Componente principal del slider
│   │   ├── ProductCard.jsx        # Tarjeta de producto individual
│   │   ├── NotificationContainer.jsx  # Sistema de notificaciones
│   │   └── NotificationService.js  # Servicio para manejar notificaciones
│   ├── App.jsx           # Componente principal de la aplicación
│   ├── main.jsx          # Punto de entrada de la aplicación
│   └── index.css         # Estilos globales y personalizaciones
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
├── tailwind.config.js    # Configuración de Tailwind CSS
└── README.md             # Documentación del proyecto
```

## 🧑‍💻 Desarrollado por

Creado con ❤ por [Jose Moreno](https://github.com/JoeySolen)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.