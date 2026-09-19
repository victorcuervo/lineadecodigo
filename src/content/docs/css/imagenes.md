---
title: "Imágenes"
description: "Aprende a controlar imágenes CSS con tamaños fluidos, proporciones, object-fit, bordes, visibilidad y efectos mediante ejemplos prácticos y claros."
date: 2026-01-17
updatedDate: 2026-09-19
tags: ["img","object-fit","aspect-ratio","border-radius"]
slug: css/imagenes
type: category
topic: css
id: 2eba9dfb-adca-8091-b3fc-c5bd823bb406
author: victor_cuervo
---

## ¿Qué es Imágenes CSS?


Las **imágenes CSS** son imágenes cuyo tamaño, ajuste, apariencia y comportamiento visual se controlan mediante reglas de hojas de estilo. [CSS](https://lineadecodigo.com/css/) no modifica el archivo original: determina cómo se representa dentro de la caja asignada por el navegador.


Una imagen insertada como contenido dispone normalmente de unas dimensiones intrínsecas, es decir, el ancho y el alto definidos por el propio archivo. Propiedades como `width`, `height`, `max-width` y `aspect-ratio` permiten adaptar esas dimensiones al diseño. Cuando la caja y la imagen tienen proporciones distintas, `object-fit` decide si el contenido se recorta, se deforma o se muestra completo.


Conviene distinguir las imágenes de contenido de las imágenes de fondo. Las primeras forman parte del documento y CSS controla su presentación. Las segundas se aplican con `background-image` y resultan apropiadas para recursos decorativos o composiciones visuales que no aportan información esencial.


## Características de Imágenes CSS

- **Tamaño adaptable:** `max-width: 100%` evita que una imagen desborde su contenedor. Combinado con `height: auto`, conserva la proporción original cuando cambia el ancho.
- **Proporción predecible:** `aspect-ratio` define la relación entre ancho y alto, por ejemplo `4 / 3` o `1 / 1`. Resulta útil en galerías, tarjetas y avatares con dimensiones uniformes.
- **Ajuste dentro de una caja:** `object-fit: cover` llena el área disponible y recorta el exceso; `contain` muestra la imagen completa, aunque puede dejar espacio libre. `fill` ocupa toda la caja, pero puede deformar el contenido.
- **Control del punto visible:** `object-position` desplaza la imagen dentro de su caja. Permite conservar en pantalla la zona relevante cuando `cover` produce un recorte.
- **Bordes y recorte:** `border` dibuja el contorno y `border-radius` redondea las esquinas. En un contenedor, `overflow: hidden` impide que la imagen sobresalga del borde redondeado.
- **Comportamiento en línea:** una imagen se comporta como elemento en línea de forma predeterminada y puede dejar un pequeño espacio bajo ella por la línea base del texto. `display: block` elimina ese espacio cuando no se necesita alineación con texto.
- **Visibilidad:** `opacity: 0` hace transparente la imagen, pero conserva su espacio y puede seguir siendo interactiva. `visibility: hidden` también conserva el espacio; `display: none` la retira del flujo del documento.
- **Efectos visuales:** `filter` permite aplicar brillo, contraste, saturación, desenfoque o escala de grises sin editar el archivo. Estos efectos deben mantener suficiente contraste y no ocultar información necesaria.

## ¿Por qué aprender Imágenes CSS?


Controlar **imágenes con CSS** permite crear interfaces que se adaptan a pantallas diferentes sin desbordamientos ni deformaciones. Una misma fotografía puede ocupar el ancho disponible en un móvil y conservar una proporción uniforme dentro de una cuadrícula en escritorio.


También resuelve problemas frecuentes de consistencia visual. `aspect-ratio` y `object-fit` permiten mostrar archivos con tamaños originales distintos dentro de tarjetas equivalentes. `object-position` ayuda a mantener visible el sujeto principal cuando es necesario recortar.


Los bordes, la transparencia y los filtros permiten comunicar estados como selección, desactivación o interacción. Deben utilizarse junto con otras señales visuales cuando el estado necesite ser comprensible sin depender únicamente de un efecto.


Conocer estas propiedades facilita elegir entre una imagen de contenido y una imagen de fondo, coordinarla con el modelo de caja y construir componentes reutilizables. También ayuda a reservar espacio antes de que el recurso termine de cargar y a reducir cambios inesperados en la distribución.


## Ejemplo de Imágenes CSS


El siguiente estilo crea una galería adaptable. Todas las fotografías ocupan una tarjeta con proporción `4 / 3`, mantienen su escala y se recortan sin deformarse.


```css
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
}

.tarjeta-imagen {
  margin: 0;
  overflow: hidden;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  background-color: #ffffff;
}

.tarjeta-imagen__foto {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.95);
  transition: filter 200ms ease, transform 200ms ease;
}

.tarjeta-imagen:hover .tarjeta-imagen__foto,
.tarjeta-imagen:focus-within .tarjeta-imagen__foto {
  filter: saturate(1.1) contrast(1.05);
  transform: scale(1.02);
}

@media (prefers-reduced-motion: reduce) {
  .tarjeta-imagen__foto {
    transition: none;
  }
}
```


La cuadrícula crea tantas columnas como quepan y establece un ancho mínimo de `14rem`. En cada imagen, `width: 100%` utiliza todo el ancho de la tarjeta y `aspect-ratio: 4 / 3` fija una altura proporcional.


`object-fit: cover` llena esa superficie sin deformar la fotografía; si las proporciones no coinciden, recorta los bordes. `object-position: center` conserva el centro como punto de referencia y puede cambiarse, por ejemplo, a `center top` cuando el contenido relevante está en la zona superior.


La tarjeta oculta el pequeño exceso producido por la ampliación y mantiene las esquinas redondeadas. El filtro y la escala aportan una respuesta visual al pasar el puntero o enfocar un elemento interior. La consulta `prefers-reduced-motion` elimina la transición para quienes han solicitado menos movimiento en su sistema.

