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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YABLAQC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2OZiDZ3WOfhn%2BkP0bLe%2Bp%2FZiaAhkMtAAu6HUg%2BhukgAiEApf2ndbZM7qF50QHfXYC786soPNJOHbWq916f8qTQSs0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNkRpDyZb38qkq2GHCrcA%2F8pKL%2Bp300deezxfoe5RizEGpUmf%2BdtqBH5m0c2SYD%2B%2B0ymO9yb6kkVDfbHCisrdzV5y8kLrR8oXF9YYMeehNUXddLiX2NsUqeuMYUtMWz0k0fkWfWqLSdp%2FSTG7JNCwRGtZkRQbgHODR5VPXNp6hqYp1Ah985wkSQhgsyhaEi4Hh9jzF4Qq6PpZGpgauqK7x7GlawBNnuRQ8IC8hU05x16DlxEW%2FaiAxIKeVbTNsZwDKaHva1SLPxZzbzCQ4Mj%2FTTWFKAYxlAU8jC8t66bZTb36ygfNty2%2BCoC5w5SwJupkQeC3MiaqmCUA5FgW7cuOHaoMls%2FbOYO8c7BDZ%2BOEUjBvJqh5p%2Bakr1%2BtNO5Vy9HP7oAX4hHmO8DwgWFgTauknonqRSM2zie6VnTVzXzlcIyUvkwRQbLEgQ%2FnPbO1SvlLWK%2B4UpFLfMgE2%2F4qVa4kJdVuirEF3us49h8bnjgDxmtYVsSSNoBNP%2BYPlmQGEjXZ8JXptrSRsG59qQJw2JUcy%2Fslc9VVN%2FU6lxdUOGzcARLQuZ1NVo%2F%2BIEKnVUdB9kEIQh4Bj%2BjcHfsUjNtK5Xz75rV4983aw3e7cdDpE8SiE4Y%2BKofIp2Bbdp027mY3nRy4ue1Ku13mTY%2FowJFMPidicoGOqUB1IaycSOsZ1h7lOI7tkMM%2BDVHBgrA6%2FYda8tgKC01YuaaBns7CZNNue9OjxaeEOjRXTnj3bT7h6%2BCERSeIOVR7T%2FzYXmrzgPXg2rGbXvLcJy6xiDt2H8cjtm6GEeSC01S53HeeTe64UmE0PSFTSlTdHawI3xZL%2Bygk6Mq6m3LUYw0yIKnRQPkzMwn%2BR1FmciQfKKFMwUTFOv3%2F1wUqPd9ieM2dFfD&X-Amz-Signature=263a5d9d254cdc5d873d8baa0ec770679b5d08b55c39510c6c38c028074d0a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YABLAQC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2OZiDZ3WOfhn%2BkP0bLe%2Bp%2FZiaAhkMtAAu6HUg%2BhukgAiEApf2ndbZM7qF50QHfXYC786soPNJOHbWq916f8qTQSs0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNkRpDyZb38qkq2GHCrcA%2F8pKL%2Bp300deezxfoe5RizEGpUmf%2BdtqBH5m0c2SYD%2B%2B0ymO9yb6kkVDfbHCisrdzV5y8kLrR8oXF9YYMeehNUXddLiX2NsUqeuMYUtMWz0k0fkWfWqLSdp%2FSTG7JNCwRGtZkRQbgHODR5VPXNp6hqYp1Ah985wkSQhgsyhaEi4Hh9jzF4Qq6PpZGpgauqK7x7GlawBNnuRQ8IC8hU05x16DlxEW%2FaiAxIKeVbTNsZwDKaHva1SLPxZzbzCQ4Mj%2FTTWFKAYxlAU8jC8t66bZTb36ygfNty2%2BCoC5w5SwJupkQeC3MiaqmCUA5FgW7cuOHaoMls%2FbOYO8c7BDZ%2BOEUjBvJqh5p%2Bakr1%2BtNO5Vy9HP7oAX4hHmO8DwgWFgTauknonqRSM2zie6VnTVzXzlcIyUvkwRQbLEgQ%2FnPbO1SvlLWK%2B4UpFLfMgE2%2F4qVa4kJdVuirEF3us49h8bnjgDxmtYVsSSNoBNP%2BYPlmQGEjXZ8JXptrSRsG59qQJw2JUcy%2Fslc9VVN%2FU6lxdUOGzcARLQuZ1NVo%2F%2BIEKnVUdB9kEIQh4Bj%2BjcHfsUjNtK5Xz75rV4983aw3e7cdDpE8SiE4Y%2BKofIp2Bbdp027mY3nRy4ue1Ku13mTY%2FowJFMPidicoGOqUB1IaycSOsZ1h7lOI7tkMM%2BDVHBgrA6%2FYda8tgKC01YuaaBns7CZNNue9OjxaeEOjRXTnj3bT7h6%2BCERSeIOVR7T%2FzYXmrzgPXg2rGbXvLcJy6xiDt2H8cjtm6GEeSC01S53HeeTe64UmE0PSFTSlTdHawI3xZL%2Bygk6Mq6m3LUYw0yIKnRQPkzMwn%2BR1FmciQfKKFMwUTFOv3%2F1wUqPd9ieM2dFfD&X-Amz-Signature=88419eaf9e644b43168b7ebda8ed4e5d7284642a2574c5f1087b36ca882e7b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

