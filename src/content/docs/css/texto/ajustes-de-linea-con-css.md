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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWNANG2C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN7Cy0eWqqZmax2olYz%2FmDug7%2B3hCEy9huQQdhcWy63AiAIi18mZ2Xb%2BZ0OZb4tlJXOqvBQDl5eckkjFRU5xFnxcCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMrgs0uUMuQr8TC7bbKtwDkhtfEiptOOXlrchv6ua%2B1aFnfWjcvGiL1fOgCiswtnJq%2BNoUtn5kiQcvx3cld2OvMt0zVw2CJo2JiRtvFXoAwYz0kf257qLDPgkCxwqIoDe4e%2BRaZ24Wmk7h0JJX0AXiHbDaUYUF1EzwQYWKyXSAl7zfYTgzfoPMnQNZcV30WgH2lK13yQrfRWTpqyTeqhn3WrQo%2B%2Bw0SdAQrImmf9WBiAhqYXZn7l5IwnxsqaRFYKHZduyrnewHvnDeDQwSo6TPVv4kcAP6Ds%2BsiChbZrJi%2BXQlqWf5fvdYUidAmy5j50X6VW7s84r6IrDUkcJru2jc7P4ukBNQSOdefY7nxdkH93TuSTLM01KlzPe3EObDxBfHM3ywOOVyzfhXINnotufdW5TkhNatPyKR3WrcFDJnUfXHTWDKXEMa7o7EI1dN%2FYBSOoH%2BBT6M8zWCnsBXWfcJ6PAFWS6k2G3F6fdrPcTjCQvADau6ch4glxAmnprUGHUM9TBzma9WsYT48l%2F5iTBSsvhg4MqTHBjTGItydAY2MzVQxWHXEWITzsg6p5t04O7Gwa6P4KNwarcNVVMdhm33SrE6UIUs3o6NmjofL63%2B3MPpJEJ2MhzMAYZyo0s7uDae1Q3OBVk5NMjHnxcwvLGIygY6pgHfgcdoPowueLIpfm8XHwy0SkDifbmFsaMpWpWotxBN11jTa7LPJP87KLuUYVaOQw%2BXIQhpYM6ta7A9fMGBzaQGSsVKvF8TgjyVgx%2FZKER%2BtQ7xweGzqo7JoA8GdSvTlJv6miqZrMT6hlkdmy2A1yRsuKuj4UjUOULeG5ZaqUEA6P3yNqtFcjHfZwIUn2jfDH5Zc7VWgXy00PmkIvUst0jCwafmmgF4&X-Amz-Signature=c7871fe931e1962eca98854f51766ba37c3f2dd0c68abc7457369e64f2d25d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWNANG2C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN7Cy0eWqqZmax2olYz%2FmDug7%2B3hCEy9huQQdhcWy63AiAIi18mZ2Xb%2BZ0OZb4tlJXOqvBQDl5eckkjFRU5xFnxcCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMrgs0uUMuQr8TC7bbKtwDkhtfEiptOOXlrchv6ua%2B1aFnfWjcvGiL1fOgCiswtnJq%2BNoUtn5kiQcvx3cld2OvMt0zVw2CJo2JiRtvFXoAwYz0kf257qLDPgkCxwqIoDe4e%2BRaZ24Wmk7h0JJX0AXiHbDaUYUF1EzwQYWKyXSAl7zfYTgzfoPMnQNZcV30WgH2lK13yQrfRWTpqyTeqhn3WrQo%2B%2Bw0SdAQrImmf9WBiAhqYXZn7l5IwnxsqaRFYKHZduyrnewHvnDeDQwSo6TPVv4kcAP6Ds%2BsiChbZrJi%2BXQlqWf5fvdYUidAmy5j50X6VW7s84r6IrDUkcJru2jc7P4ukBNQSOdefY7nxdkH93TuSTLM01KlzPe3EObDxBfHM3ywOOVyzfhXINnotufdW5TkhNatPyKR3WrcFDJnUfXHTWDKXEMa7o7EI1dN%2FYBSOoH%2BBT6M8zWCnsBXWfcJ6PAFWS6k2G3F6fdrPcTjCQvADau6ch4glxAmnprUGHUM9TBzma9WsYT48l%2F5iTBSsvhg4MqTHBjTGItydAY2MzVQxWHXEWITzsg6p5t04O7Gwa6P4KNwarcNVVMdhm33SrE6UIUs3o6NmjofL63%2B3MPpJEJ2MhzMAYZyo0s7uDae1Q3OBVk5NMjHnxcwvLGIygY6pgHfgcdoPowueLIpfm8XHwy0SkDifbmFsaMpWpWotxBN11jTa7LPJP87KLuUYVaOQw%2BXIQhpYM6ta7A9fMGBzaQGSsVKvF8TgjyVgx%2FZKER%2BtQ7xweGzqo7JoA8GdSvTlJv6miqZrMT6hlkdmy2A1yRsuKuj4UjUOULeG5ZaqUEA6P3yNqtFcjHfZwIUn2jfDH5Zc7VWgXy00PmkIvUst0jCwafmmgF4&X-Amz-Signature=abfc369c8cb80d583e3050282f6e4f3e586aa04831ae3a36e6e243ab66a8e413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

