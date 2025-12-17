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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7IFCH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPXVPU8Ytx%2Bqb%2BOX6RfYQFCjG96dqGmc27Mx1tyIyRKAiBx4eHB54c0HqjI9goK%2FH%2BXRPo3WUHmLmrzcYG5bxykhyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMvsW%2FRebzMaUPiAa6KtwDGMNsYDCPtOYLWBT4E80F8F594kw9X9URskMidcDK%2FSMW0j9eVl%2F6GJo5o%2BkM8XlKEoS%2B4q%2FcR5RL2yxHT4HECt1HKY0fNcwcuYTKmkFhQ7m0tb5VAB7NoLQ2uRV9ufsEzQEOCFQJGRVQIsszTXXv9yCgy1ySAwGWd9To%2BWrOBwTfRoo1xUgimk9e1l076jfiHqO1olP3pTy6a%2BZiPw8iN1aFVnPEFYoubecQv2iogQ%2BqdJtCqLonNxzoh8KUcG92PVM9vQ5WwkpyXjJ2D%2F%2BpuEXaTHT7tadagiJqbBas4qFDMalPBtmgw3nxAtVzY92WEIQP%2FdGyUu8Y2Ct23Sx0lFXWY57oHuB3E%2BMPyT36PzxHS7N9u6MqB0Ad6WbUvFN98EDgEZSXn7yaFaUx8RON2M%2BYMoAQO6y1RhfIeHbe3wM8e8UURYpdBuC3qXlcURayHsQLud4DnL5pIqp18b7XlA5JWV4Ei4UfwpvKnejpQQdEXMK7zWdIQcP719e4BWmcMmpyBl3ZKEx7KHn66%2FMoSsTlqixL7HSmdgqV4dQh9OyoLnDkgfHQGWvZVWUrt1XaUpMp%2Fmb3UZ4UJPcjloD9ifkuvHM2HVH9YSBdd1Qg83L%2F5HxOGg8dr6JUMJcw8JWIygY6pgEB4EP7MFoYhFUyTFTn%2BKpb2z5sC4N%2Fef5N3r%2BcS%2B1mBdSkreNRDfHNGh60KANLgpSNQrA6thdEHMPLZfKzi1EOpjjAeQ%2F3g0H3jHwwV2DxxrKCtvLraduucptd4enBUV4xYm4fkoRYGAxvNiXgibYVz1bKoR6hcmO77V%2FZWtximR8Kly5HrYPW%2Bo4qArrj%2Bv%2FQPfUJyW3UZq8RNI3largn6Iua38yB&X-Amz-Signature=ec58b64b13cc39c07b76456f87e5f19d563394de270b6e31aa3c8e0573278c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7IFCH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPXVPU8Ytx%2Bqb%2BOX6RfYQFCjG96dqGmc27Mx1tyIyRKAiBx4eHB54c0HqjI9goK%2FH%2BXRPo3WUHmLmrzcYG5bxykhyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMvsW%2FRebzMaUPiAa6KtwDGMNsYDCPtOYLWBT4E80F8F594kw9X9URskMidcDK%2FSMW0j9eVl%2F6GJo5o%2BkM8XlKEoS%2B4q%2FcR5RL2yxHT4HECt1HKY0fNcwcuYTKmkFhQ7m0tb5VAB7NoLQ2uRV9ufsEzQEOCFQJGRVQIsszTXXv9yCgy1ySAwGWd9To%2BWrOBwTfRoo1xUgimk9e1l076jfiHqO1olP3pTy6a%2BZiPw8iN1aFVnPEFYoubecQv2iogQ%2BqdJtCqLonNxzoh8KUcG92PVM9vQ5WwkpyXjJ2D%2F%2BpuEXaTHT7tadagiJqbBas4qFDMalPBtmgw3nxAtVzY92WEIQP%2FdGyUu8Y2Ct23Sx0lFXWY57oHuB3E%2BMPyT36PzxHS7N9u6MqB0Ad6WbUvFN98EDgEZSXn7yaFaUx8RON2M%2BYMoAQO6y1RhfIeHbe3wM8e8UURYpdBuC3qXlcURayHsQLud4DnL5pIqp18b7XlA5JWV4Ei4UfwpvKnejpQQdEXMK7zWdIQcP719e4BWmcMmpyBl3ZKEx7KHn66%2FMoSsTlqixL7HSmdgqV4dQh9OyoLnDkgfHQGWvZVWUrt1XaUpMp%2Fmb3UZ4UJPcjloD9ifkuvHM2HVH9YSBdd1Qg83L%2F5HxOGg8dr6JUMJcw8JWIygY6pgEB4EP7MFoYhFUyTFTn%2BKpb2z5sC4N%2Fef5N3r%2BcS%2B1mBdSkreNRDfHNGh60KANLgpSNQrA6thdEHMPLZfKzi1EOpjjAeQ%2F3g0H3jHwwV2DxxrKCtvLraduucptd4enBUV4xYm4fkoRYGAxvNiXgibYVz1bKoR6hcmO77V%2FZWtximR8Kly5HrYPW%2Bo4qArrj%2Bv%2FQPfUJyW3UZq8RNI3largn6Iua38yB&X-Amz-Signature=a22945afb1ad920b0e27926c13978780859b074b8778220eb00481b76e1d0b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

