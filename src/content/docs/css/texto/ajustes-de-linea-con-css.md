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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSFOSK7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQXb31jjEM2TFBMnmJEeZxRDsZ%2Fnvegd2A%2Fyb1rut%2FsAIgBVjMkBcJU2IyyxEnf6iC4Ge7616g7aN4jQtHMH70Mpoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKdQLMYKktNiZYMAsSrcA%2Bqe1q0l4V42XXSdgnQL2owi9SP7tX2pFW5qkk2enNENh7VA2NBgvgwOzEPsA13z8qAAzws6UIjNehl2yntgJx0epKkZ6gs8UuZ2fNgv3jx0qx6WQIhJ33HaC4WweRxN8RvS96FC7uhzXWBb6WicQLZozvBXwDOJOX0TjXo5YA1ewdIEqoheGdDSRroVU2qepLIfRaXz2VXibMvhVNNSvB16yb7ZfseNaYe3G4hMoC0UQZ%2BtI6g5ap7PzMGte8EhIEfXPwuMXE6IDC3BLcEB5Ho3aFpY9dpq8N2p%2FRUx3wGEqjT3lUtcUJPU88srAh%2Fhl6iQE8alCDhMhTaKXuvEUOt7d071qVDRhLZ9Q1EpjDrB9%2F%2BKmKiJ8YybEjo03dofD60ngYeOSodJr9ICWoGhK4PGc53IoQiqcKtgJcXXuznQrXrCgkYX4iWuvDP9Gs2TJne1HchT6muxQzTeln1AfEvRXrc4jwPlnPGbhSkmZtUrgvG5XRCOMeJ%2BEvGe6DUkoybqz72FAu0Wfk4Pa8hTWWY2fdUGHZ8hJ2QGr%2Fwl85Ra9kHG%2B08S0gq6j5sH0LFIQWdgTkud3WR1amscKFJ4Gz3r%2FEnw6bntqnuMZG%2FJ2dBlY%2BRHtqrUp4BV86MQMJeXiMoGOqUBDLrBEjar1j4ZxPfs53nV75UmN1HERgDzhLqCboV6W0urvTJXGFO6tzbG6ZqDhDLNS%2B49Dk2Mp60rbkbhEFNNCJrAi8NrwE1UI6mLbcIpKFYsGNPra3jT7FY7ZLtVt4dhlcOcGb6AAQgzo5ISW6Qxzej9ocAEgH4Mrv3aywy6MMqv%2FCEFnJa9fL3y2AqhJYbdBjT7uHzRQLehp2Zns5LYqoDFOtBd&X-Amz-Signature=ee5cc1de98dd4860fa256752ca06d9bb0354cbb198bbbb0db009dcff730f719f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSFOSK7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQXb31jjEM2TFBMnmJEeZxRDsZ%2Fnvegd2A%2Fyb1rut%2FsAIgBVjMkBcJU2IyyxEnf6iC4Ge7616g7aN4jQtHMH70Mpoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKdQLMYKktNiZYMAsSrcA%2Bqe1q0l4V42XXSdgnQL2owi9SP7tX2pFW5qkk2enNENh7VA2NBgvgwOzEPsA13z8qAAzws6UIjNehl2yntgJx0epKkZ6gs8UuZ2fNgv3jx0qx6WQIhJ33HaC4WweRxN8RvS96FC7uhzXWBb6WicQLZozvBXwDOJOX0TjXo5YA1ewdIEqoheGdDSRroVU2qepLIfRaXz2VXibMvhVNNSvB16yb7ZfseNaYe3G4hMoC0UQZ%2BtI6g5ap7PzMGte8EhIEfXPwuMXE6IDC3BLcEB5Ho3aFpY9dpq8N2p%2FRUx3wGEqjT3lUtcUJPU88srAh%2Fhl6iQE8alCDhMhTaKXuvEUOt7d071qVDRhLZ9Q1EpjDrB9%2F%2BKmKiJ8YybEjo03dofD60ngYeOSodJr9ICWoGhK4PGc53IoQiqcKtgJcXXuznQrXrCgkYX4iWuvDP9Gs2TJne1HchT6muxQzTeln1AfEvRXrc4jwPlnPGbhSkmZtUrgvG5XRCOMeJ%2BEvGe6DUkoybqz72FAu0Wfk4Pa8hTWWY2fdUGHZ8hJ2QGr%2Fwl85Ra9kHG%2B08S0gq6j5sH0LFIQWdgTkud3WR1amscKFJ4Gz3r%2FEnw6bntqnuMZG%2FJ2dBlY%2BRHtqrUp4BV86MQMJeXiMoGOqUBDLrBEjar1j4ZxPfs53nV75UmN1HERgDzhLqCboV6W0urvTJXGFO6tzbG6ZqDhDLNS%2B49Dk2Mp60rbkbhEFNNCJrAi8NrwE1UI6mLbcIpKFYsGNPra3jT7FY7ZLtVt4dhlcOcGb6AAQgzo5ISW6Qxzej9ocAEgH4Mrv3aywy6MMqv%2FCEFnJa9fL3y2AqhJYbdBjT7uHzRQLehp2Zns5LYqoDFOtBd&X-Amz-Signature=236bb95e382efae73f8c77aa141e7f3d77a3485ac1b43a8bc7583894f391d98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

