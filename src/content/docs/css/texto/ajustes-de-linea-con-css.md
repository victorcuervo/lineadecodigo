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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJPMZA3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjHizma4NwpfoThh16Siq%2FRy7gSi2KdiE4Whv0hK9RwgIhAM0pK3%2BzXTlEyfdTFt1nXOqZhnuacOs%2FloFGx9rqK0OMKv8DCHwQABoMNjM3NDIzMTgzODA1Igz%2FyGWD9g1HXmWkUF0q3APu5jET%2F2y18G356ryZEOEG73mzQ5Qp8hl6DHfxJ6R3o9QmeY62FfUiUUcn%2BD%2Bvy0JXkOthxaKT0GXH9bqGoWvdPS6b7FNgArv6i2sXunD1c6OadTVJA5ZYwR4WGTP68%2Fpj6N52L3L0vDeICXjMysJdgAp1rw%2F%2BIX5BinUeTqgS2k%2FLDwNFZemxy2zCRxuKn3S5%2FGAdSFv4D5IYdGs9Ftn%2FOYHEDgkJdFTg19UhatFIV37XcUBuxQdOVTkHceUvTtEhJfhCjJEq2DypbLmn0pwCAGbF2aRo1dLtcF%2FUwhf2lDA%2F1z7epmslI%2FR4919NLapajRTkc5Pkcv9nkvWUO8qDn7rwrZ9TRFX4HqG6l928RV2OEiJlyka%2F9EXqY2w0D9zeJPmKaOLi%2FCrfEN%2BpEritXqXoVQz4yoYkgU4hYpQuC2BRrWDdYVAaiiIoxO7vgblC03JajtORzOyx5%2FGBo9JOaKqzPOeyTb1WTDNJprKJlWjTwrBqSqxlIMi7akqne%2FcsA8Qq2D%2F4Yfcl8PUxXkc%2FXVEFrX3mil2TUg2zIZpiDGNiyeCjJsgSt%2FYzQi5snJ%2BsVMc1ZotQOZFvOsa1cUHv6GN93J4kRXemBWNtA7Yp4Qr%2B2rl%2B1gACV1vkmjCVj4rKBjqkATC18MjLSz4YwEwVBMlaalnWBSuoqw1dUJNlSxTZWAw41FBAFd1BiHKN6e9KnTMDqVc5yCWDszpi0KNM21i5LHDdSMAjWtU7CWH71ltG%2BTelyPSkEm5%2B5oL63AF3yCrlC81biTeJEYr34vxUDaKZi3gmU7vcJMDVp%2BuX39JL%2F9ZglOEkCG04qp37ypBKHjpaxxrf30%2BQC%2F%2BS2EIsTxJIepAXtRLB&X-Amz-Signature=fa0d62da59b44917a4c43c35085080b3a076e4e4647407b66908b4f04bd49d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJPMZA3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjHizma4NwpfoThh16Siq%2FRy7gSi2KdiE4Whv0hK9RwgIhAM0pK3%2BzXTlEyfdTFt1nXOqZhnuacOs%2FloFGx9rqK0OMKv8DCHwQABoMNjM3NDIzMTgzODA1Igz%2FyGWD9g1HXmWkUF0q3APu5jET%2F2y18G356ryZEOEG73mzQ5Qp8hl6DHfxJ6R3o9QmeY62FfUiUUcn%2BD%2Bvy0JXkOthxaKT0GXH9bqGoWvdPS6b7FNgArv6i2sXunD1c6OadTVJA5ZYwR4WGTP68%2Fpj6N52L3L0vDeICXjMysJdgAp1rw%2F%2BIX5BinUeTqgS2k%2FLDwNFZemxy2zCRxuKn3S5%2FGAdSFv4D5IYdGs9Ftn%2FOYHEDgkJdFTg19UhatFIV37XcUBuxQdOVTkHceUvTtEhJfhCjJEq2DypbLmn0pwCAGbF2aRo1dLtcF%2FUwhf2lDA%2F1z7epmslI%2FR4919NLapajRTkc5Pkcv9nkvWUO8qDn7rwrZ9TRFX4HqG6l928RV2OEiJlyka%2F9EXqY2w0D9zeJPmKaOLi%2FCrfEN%2BpEritXqXoVQz4yoYkgU4hYpQuC2BRrWDdYVAaiiIoxO7vgblC03JajtORzOyx5%2FGBo9JOaKqzPOeyTb1WTDNJprKJlWjTwrBqSqxlIMi7akqne%2FcsA8Qq2D%2F4Yfcl8PUxXkc%2FXVEFrX3mil2TUg2zIZpiDGNiyeCjJsgSt%2FYzQi5snJ%2BsVMc1ZotQOZFvOsa1cUHv6GN93J4kRXemBWNtA7Yp4Qr%2B2rl%2B1gACV1vkmjCVj4rKBjqkATC18MjLSz4YwEwVBMlaalnWBSuoqw1dUJNlSxTZWAw41FBAFd1BiHKN6e9KnTMDqVc5yCWDszpi0KNM21i5LHDdSMAjWtU7CWH71ltG%2BTelyPSkEm5%2B5oL63AF3yCrlC81biTeJEYr34vxUDaKZi3gmU7vcJMDVp%2BuX39JL%2F9ZglOEkCG04qp37ypBKHjpaxxrf30%2BQC%2F%2BS2EIsTxJIepAXtRLB&X-Amz-Signature=e6ec96eeb24791344d9edcdb475f21395afdcf6597d74dc98a8caae494ac8f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

