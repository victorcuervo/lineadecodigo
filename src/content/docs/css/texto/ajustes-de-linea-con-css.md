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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466235QAK25%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa4sPOaE5Oas7vhcN5xAZ7MkB4wWdxcHhp0OiIjn3fyQIhAMZb6XcXYIT6md26wel8YcBQKUEz9s0PwSq2aHry7ETvKv8DCHQQABoMNjM3NDIzMTgzODA1IgyN4PnkcrJxcb1eHUoq3AP0bhEF8VOZA38dypV1lT5u8V2h0Ooe2S35LagOUjYmROF79wjpe6tAX%2FHbwboGE8SYRRonsQLBtHqlZYFine88G1WjW%2Br3HLOY6EH2NnPNRXDYxMF3renrRyTdttCrmwHh93NeVEV2yUmqky0T1mWfBo74pZX3ihodQE5wB8vR2xTfXvKqW5KE3x9Q%2B4ZH7P8R47%2Bj9Wi3XbRrkm0OEC63NVFK34%2Fg1l5B5ixfc58eWjEB25ekYfP7L%2BoAHWJ%2FizDqN6FDW7oE7O6waed3yxSDytxnEdz5FZJDlk9m5Gf%2BfUF6A%2FWz98kUcN0honFn9150w0oBtqCx1O6uXTw3P5RYxM%2F%2FKABbrGzzilvU4NV403lMbTOJBygoLS2EDi5HDI%2BeqVFNR60IlgyUU2v5nADRpDZAKM3rd2hEOAoIdy90BUnnd7Qtc5tdUE%2BbptZNwSRB136%2F%2FrRZIyK6SN4OiBarIw0DoXV0Ju26ZRguz%2F%2FTQI0k4HtmH9CdSaWBk3u4vaC5GuZwGJaF8URq4fD5HbEvhCc4Frvl8BzDoRSZI9aAgetRxM%2FjGf6z%2F7RdBwHsoKLQk1bvt7lDq1GrhdprOO55524teGhIlEzPBiGOr8Ts0TIzuQeaDFZHI5qqlzCWsojKBjqkAfeq3pJlAMsOTRPD%2FTgfHJY%2B5y2mPSFP0x1z9qKOlYULc5WQMcopgQVxTEXruMf%2F0LdwBaPKCB7Dc1zd4ZpXeBhqO41s81Wl%2BVxX1IRpxiFsDee6V%2F4Ut34u9eIQbJdptltDjv%2Fc4Zh0RLSOZ1JM9HlW7%2F%2FXGi8UpwqwFdVqnq4SuLmL6eoQQfQ6BHTiE6xR3Ov6t54VJR4cUfmUTbtEnmKjA6hi&X-Amz-Signature=ca114e980ae4c8c184d45f7f7e718e95c9954f9141774521db3cc83fde317823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466235QAK25%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa4sPOaE5Oas7vhcN5xAZ7MkB4wWdxcHhp0OiIjn3fyQIhAMZb6XcXYIT6md26wel8YcBQKUEz9s0PwSq2aHry7ETvKv8DCHQQABoMNjM3NDIzMTgzODA1IgyN4PnkcrJxcb1eHUoq3AP0bhEF8VOZA38dypV1lT5u8V2h0Ooe2S35LagOUjYmROF79wjpe6tAX%2FHbwboGE8SYRRonsQLBtHqlZYFine88G1WjW%2Br3HLOY6EH2NnPNRXDYxMF3renrRyTdttCrmwHh93NeVEV2yUmqky0T1mWfBo74pZX3ihodQE5wB8vR2xTfXvKqW5KE3x9Q%2B4ZH7P8R47%2Bj9Wi3XbRrkm0OEC63NVFK34%2Fg1l5B5ixfc58eWjEB25ekYfP7L%2BoAHWJ%2FizDqN6FDW7oE7O6waed3yxSDytxnEdz5FZJDlk9m5Gf%2BfUF6A%2FWz98kUcN0honFn9150w0oBtqCx1O6uXTw3P5RYxM%2F%2FKABbrGzzilvU4NV403lMbTOJBygoLS2EDi5HDI%2BeqVFNR60IlgyUU2v5nADRpDZAKM3rd2hEOAoIdy90BUnnd7Qtc5tdUE%2BbptZNwSRB136%2F%2FrRZIyK6SN4OiBarIw0DoXV0Ju26ZRguz%2F%2FTQI0k4HtmH9CdSaWBk3u4vaC5GuZwGJaF8URq4fD5HbEvhCc4Frvl8BzDoRSZI9aAgetRxM%2FjGf6z%2F7RdBwHsoKLQk1bvt7lDq1GrhdprOO55524teGhIlEzPBiGOr8Ts0TIzuQeaDFZHI5qqlzCWsojKBjqkAfeq3pJlAMsOTRPD%2FTgfHJY%2B5y2mPSFP0x1z9qKOlYULc5WQMcopgQVxTEXruMf%2F0LdwBaPKCB7Dc1zd4ZpXeBhqO41s81Wl%2BVxX1IRpxiFsDee6V%2F4Ut34u9eIQbJdptltDjv%2Fc4Zh0RLSOZ1JM9HlW7%2F%2FXGi8UpwqwFdVqnq4SuLmL6eoQQfQ6BHTiE6xR3Ov6t54VJR4cUfmUTbtEnmKjA6hi&X-Amz-Signature=d07897246ef5d88d59af76bfc67a20fa39e211bc16922fb839f6ff22cf7f3df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

