---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YATL3EOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLmoabDdapEvIJu88MqSZEHSZTXw%2F%2FW%2FUH8GOndc%2F%2BkwIgNYLwvxtDauAiJR4Uo5ZcXCQI%2BI%2FpPknk%2B4swRi11dZ4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHn%2Fg16aLyiUOePSTircA%2F4TH6J2yARTpoJnaSfgSqsYTKM1IeIqy4GJ65bp0HRXjnIt1x4HgcZZvTC%2Bmnx1unppyJrsvWJ1pBri0G34AAJ13Hujju63JYej2nOJRYxa1ccUIZYyB9hKXnGqWYT24yRdbUfvQzlXEs6whgy3PkNrHt8z0B%2B1%2FWFxJhmtqfICB6wzbwqQmTdau4h%2FqqN4lTz34mAodYHVD3t5JOOCF36W8bZWoyaDQJW%2F9GX68MipPP35lqUkAnk82Tt%2BVJI7MYNu0%2FXidVYpxdEVRLYaIOHC3%2Bk7O%2FLb9oB5x0p1kDzC2KCZ3adRrClomhaXcHvTcrSZJ6L1qTJcaHBIxHtWLeMOZPRnwMfk6tFaIcWjulFmiQcCsbt5oaMDTtnXi36kODiEBmHnGr6AhnhoSAXQvNlNdzNmIieEdSjLGE9qj9UeF01iUTiZSNwz7mErkLOUT%2Fns9pgqIRXz8I7CXvoTl3bJ3lxlUbyd21QCikkbolzuzcVEbtUU%2FI71HgeZzhMljxP4XoaL%2BnBr36Y15zTN%2FB9%2FW1mMoPXwlvahPOjMCPZgqOIaeNtVvUifJ8h5OBevjimUbtd4SOjcWVe4O9V0w9zIEqlqNa8cJzEiwFmE2B7KfZ6HBuzhRC0sPp55MLXGisoGOqUBVQYr5Jj2xPcn%2FBUlFFnXs%2BFmGhbJPv54YwrFacS0TSQrn61p1dY5BflJW9hymYkimEKkc8hj6P%2F5PJgCAKrmTKFSyx5JljHs3360JgYmQX59lGmZrbrKGE8cGzeL4gYjhvrngkyoC37tO8QNwpfthpkIV8SKx30Gdo6R3iYjmRgMI79f12XO7Ff85OtVyNUFoRn8dSEhhVscOwFq9z4VdzrzGmP5&X-Amz-Signature=869d9c3f5dd37c994c6defff27b2538ab12a3cb262284589ff97d21a32652c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YATL3EOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLmoabDdapEvIJu88MqSZEHSZTXw%2F%2FW%2FUH8GOndc%2F%2BkwIgNYLwvxtDauAiJR4Uo5ZcXCQI%2BI%2FpPknk%2B4swRi11dZ4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHn%2Fg16aLyiUOePSTircA%2F4TH6J2yARTpoJnaSfgSqsYTKM1IeIqy4GJ65bp0HRXjnIt1x4HgcZZvTC%2Bmnx1unppyJrsvWJ1pBri0G34AAJ13Hujju63JYej2nOJRYxa1ccUIZYyB9hKXnGqWYT24yRdbUfvQzlXEs6whgy3PkNrHt8z0B%2B1%2FWFxJhmtqfICB6wzbwqQmTdau4h%2FqqN4lTz34mAodYHVD3t5JOOCF36W8bZWoyaDQJW%2F9GX68MipPP35lqUkAnk82Tt%2BVJI7MYNu0%2FXidVYpxdEVRLYaIOHC3%2Bk7O%2FLb9oB5x0p1kDzC2KCZ3adRrClomhaXcHvTcrSZJ6L1qTJcaHBIxHtWLeMOZPRnwMfk6tFaIcWjulFmiQcCsbt5oaMDTtnXi36kODiEBmHnGr6AhnhoSAXQvNlNdzNmIieEdSjLGE9qj9UeF01iUTiZSNwz7mErkLOUT%2Fns9pgqIRXz8I7CXvoTl3bJ3lxlUbyd21QCikkbolzuzcVEbtUU%2FI71HgeZzhMljxP4XoaL%2BnBr36Y15zTN%2FB9%2FW1mMoPXwlvahPOjMCPZgqOIaeNtVvUifJ8h5OBevjimUbtd4SOjcWVe4O9V0w9zIEqlqNa8cJzEiwFmE2B7KfZ6HBuzhRC0sPp55MLXGisoGOqUBVQYr5Jj2xPcn%2FBUlFFnXs%2BFmGhbJPv54YwrFacS0TSQrn61p1dY5BflJW9hymYkimEKkc8hj6P%2F5PJgCAKrmTKFSyx5JljHs3360JgYmQX59lGmZrbrKGE8cGzeL4gYjhvrngkyoC37tO8QNwpfthpkIV8SKx30Gdo6R3iYjmRgMI79f12XO7Ff85OtVyNUFoRn8dSEhhVscOwFq9z4VdzrzGmP5&X-Amz-Signature=e1f7690071707971337e61d84f8f2f60de86da0720381ec5430e91313781a5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

