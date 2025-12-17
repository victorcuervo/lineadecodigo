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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPRK6S6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGE5yR645Y1P8bTNVU53j9hom4B5qPpZvMgzAzh2F8QIgQ5tuQNpxiG3BhZMOIqQ7bXzn8jv5GgTn3LsrG2l7tvMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk5o35NfOGG3ys9MCrcA%2FWiSx2d4FtNKzUFyWr7ICQxrY0YpZOVzpJUUTrofmhAUPTMbPX%2FZ6G%2F0vSYco6YfFd9gAbLhUd8vSbG2gcqDsVof9uyyYNxjw7riK3kqiYdYcxIMN3og6XbMLOoAKnkpeApcMTDF6vH7MweCix23EuDEvGhNdb5UAJ9ct0WjW0zpLZiriBF7DevDuXhf7X2TOrI%2Fwl6jReP3dpTlKp%2BsRm40Qdzjn8cH1Ka0YiCwiZiXJF%2Bv%2FH%2BlW2mZKbAVf2ioeNwpvwdVKycPTUsAGI4O0dfoqQdgnVIzpEHyrQtZdM14oAPtg12tuYYjXJFqTQCmgyWlmVxHzQJhiGCnogF3OUpxo6FCDz0dU8l32GYWVPPbmb5cFVCv91NKVNA%2F0QFFpCWUmQ1IWnVA0FjnPgobsX7Mb7vMa8XUbTRI3EcV4m5tZBgJKEd4eincCv3J0Beq7sdAp9z8Jbc8SIfeOdsYWWwNXiH1FSBGoqQhdd3MazsgFdqAxbS35WrAq0NDfam7LBDf3GUwpu51pX0vu6SuvY91%2Fh0UjicAIqqSEjaFoxRTe7zDuOqlaSI2ruyAsZ4ytT4sQNv0KSFIDC3rDUDJjJfKmhnj6ZOKlc1fgiBWBx1y%2FdcSjhzADdu1CGdMJ2gi8oGOqUBsmuqdEDMZm1fi88P5aiA9uNQVUKuzH2mcYuKpyaRUIWwQRzT8bM7yET%2FKefF6p7bQij0%2BrNOpgMGwjjHoX2UTSuuufLNi73oxPNJeNiP2OU3c%2B7TdFrifYhWXza7hGX1IL41NslWTz9YVWWwNkaylB5Hz0eZLCKwIg9RtNIvuHvaJZxgy0yVQS7Cb1GCsvAlg%2FYglF1m3qN7LsTPQe1bd3XVAlPB&X-Amz-Signature=8d4e6842765a7515972b271b45f7d8458372c508b5866f6df40ceebcd870fa7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPRK6S6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGE5yR645Y1P8bTNVU53j9hom4B5qPpZvMgzAzh2F8QIgQ5tuQNpxiG3BhZMOIqQ7bXzn8jv5GgTn3LsrG2l7tvMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk5o35NfOGG3ys9MCrcA%2FWiSx2d4FtNKzUFyWr7ICQxrY0YpZOVzpJUUTrofmhAUPTMbPX%2FZ6G%2F0vSYco6YfFd9gAbLhUd8vSbG2gcqDsVof9uyyYNxjw7riK3kqiYdYcxIMN3og6XbMLOoAKnkpeApcMTDF6vH7MweCix23EuDEvGhNdb5UAJ9ct0WjW0zpLZiriBF7DevDuXhf7X2TOrI%2Fwl6jReP3dpTlKp%2BsRm40Qdzjn8cH1Ka0YiCwiZiXJF%2Bv%2FH%2BlW2mZKbAVf2ioeNwpvwdVKycPTUsAGI4O0dfoqQdgnVIzpEHyrQtZdM14oAPtg12tuYYjXJFqTQCmgyWlmVxHzQJhiGCnogF3OUpxo6FCDz0dU8l32GYWVPPbmb5cFVCv91NKVNA%2F0QFFpCWUmQ1IWnVA0FjnPgobsX7Mb7vMa8XUbTRI3EcV4m5tZBgJKEd4eincCv3J0Beq7sdAp9z8Jbc8SIfeOdsYWWwNXiH1FSBGoqQhdd3MazsgFdqAxbS35WrAq0NDfam7LBDf3GUwpu51pX0vu6SuvY91%2Fh0UjicAIqqSEjaFoxRTe7zDuOqlaSI2ruyAsZ4ytT4sQNv0KSFIDC3rDUDJjJfKmhnj6ZOKlc1fgiBWBx1y%2FdcSjhzADdu1CGdMJ2gi8oGOqUBsmuqdEDMZm1fi88P5aiA9uNQVUKuzH2mcYuKpyaRUIWwQRzT8bM7yET%2FKefF6p7bQij0%2BrNOpgMGwjjHoX2UTSuuufLNi73oxPNJeNiP2OU3c%2B7TdFrifYhWXza7hGX1IL41NslWTz9YVWWwNkaylB5Hz0eZLCKwIg9RtNIvuHvaJZxgy0yVQS7Cb1GCsvAlg%2FYglF1m3qN7LsTPQe1bd3XVAlPB&X-Amz-Signature=d0dab0a6a3d9e61ce18831fb3fd3e53dcc60f38ab693825370aff3a89d04d65d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

