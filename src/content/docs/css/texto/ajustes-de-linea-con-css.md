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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZ7NWWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRXvDu%2FUSMhLBGQYZ2ect%2Bz4Gwj71t2jHAO8qhBQzQRgIhAJz%2BOI0Qw55VR8z01uAQ2CM5PWKvgiZ%2B3jHJka0lcmgSKv8DCHgQABoMNjM3NDIzMTgzODA1IgyHBUtTbaF7wKApikQq3AOIimPKt999KLWMCfZsfCz2O%2F5Z7BqFZO6EX4yKGH78fSNqMQVueheQ7LgS3zxwsr3P4BEr2p7h3JM2YfqSsC%2BMDmeb8F5PVuE2%2Fve%2FdQLZLjPH4pSblIF0tfRpu5aRTIvRKBiNOwp3V24G6jvJOwQRwcGSB82fFPW3V5%2F2SxevJLJIxZ2WDFxNISmXehoa7fWzEA8Tft%2BuxSCvN7Y%2BEIabkztLQad4faxulntYYP9JlLrEKkKmEfLscPa2C4hPLBdld%2BpSZsRYNQyu%2BESzdeH%2FGArXHIm7GWpa8eSmHdV5ghQXXochPWJlXH9Xxj%2B2MvG%2BCNFWjsOJ6vlKGgaYKATnxCym2FYVsRd3aXsjlBLZzLbyOfjoA7JO88Bj3J1yFr%2FgXFoFh0%2F7tqJ1iYE00PPvI%2Bvnp33JNo19ikxlMHFd9TqsIO6sGdYLNKz4jUKMkUrf2Rv%2B7UhEA4gM422ED2xtavtkIvaoYM4leCIkEOPamkD7h7q5VaqcpBy5NYpVxu%2BtKR%2F3O2GzCIv9tW20tixEVHxSJ5Wxn%2B19VIFSzP3Gc6x4KhMrkQKrTxZ9CDRsIWwzrC1KoYXILbiUsrmK8%2FGPjAvFQNQyRpABlZKxZ6PopVtY2ljx66mHOOs2HTCduInKBjqkAdy7suubXjGB2to2iHSu7w4PsOFyzR%2Bzjb7qwOHMn19KAtNNtTtXFBtV9CQSj4hU%2FxWT9s1FVzOvxuW55BxRC4x5inHUHub%2BM165fBkPvz1QdMUYYhQ3rYbTZ4sB7z93jLpE7iVrqH2k2gX%2BMoDeWCgbdd1%2F2SAqF8Zc7WnWQxhsleb2mafQ82xFYlYkDYTcguC0Mu1uo4w1cUuYPRKCc5SDK1yv&X-Amz-Signature=b8ae31d9945bfc550bd82202923978afd17a455ddb19c49ba717df4eac668238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZ7NWWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRXvDu%2FUSMhLBGQYZ2ect%2Bz4Gwj71t2jHAO8qhBQzQRgIhAJz%2BOI0Qw55VR8z01uAQ2CM5PWKvgiZ%2B3jHJka0lcmgSKv8DCHgQABoMNjM3NDIzMTgzODA1IgyHBUtTbaF7wKApikQq3AOIimPKt999KLWMCfZsfCz2O%2F5Z7BqFZO6EX4yKGH78fSNqMQVueheQ7LgS3zxwsr3P4BEr2p7h3JM2YfqSsC%2BMDmeb8F5PVuE2%2Fve%2FdQLZLjPH4pSblIF0tfRpu5aRTIvRKBiNOwp3V24G6jvJOwQRwcGSB82fFPW3V5%2F2SxevJLJIxZ2WDFxNISmXehoa7fWzEA8Tft%2BuxSCvN7Y%2BEIabkztLQad4faxulntYYP9JlLrEKkKmEfLscPa2C4hPLBdld%2BpSZsRYNQyu%2BESzdeH%2FGArXHIm7GWpa8eSmHdV5ghQXXochPWJlXH9Xxj%2B2MvG%2BCNFWjsOJ6vlKGgaYKATnxCym2FYVsRd3aXsjlBLZzLbyOfjoA7JO88Bj3J1yFr%2FgXFoFh0%2F7tqJ1iYE00PPvI%2Bvnp33JNo19ikxlMHFd9TqsIO6sGdYLNKz4jUKMkUrf2Rv%2B7UhEA4gM422ED2xtavtkIvaoYM4leCIkEOPamkD7h7q5VaqcpBy5NYpVxu%2BtKR%2F3O2GzCIv9tW20tixEVHxSJ5Wxn%2B19VIFSzP3Gc6x4KhMrkQKrTxZ9CDRsIWwzrC1KoYXILbiUsrmK8%2FGPjAvFQNQyRpABlZKxZ6PopVtY2ljx66mHOOs2HTCduInKBjqkAdy7suubXjGB2to2iHSu7w4PsOFyzR%2Bzjb7qwOHMn19KAtNNtTtXFBtV9CQSj4hU%2FxWT9s1FVzOvxuW55BxRC4x5inHUHub%2BM165fBkPvz1QdMUYYhQ3rYbTZ4sB7z93jLpE7iVrqH2k2gX%2BMoDeWCgbdd1%2F2SAqF8Zc7WnWQxhsleb2mafQ82xFYlYkDYTcguC0Mu1uo4w1cUuYPRKCc5SDK1yv&X-Amz-Signature=00a62ecf62521845bb803836f76c3fb7199faee8365571c441f77945c72c2557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

