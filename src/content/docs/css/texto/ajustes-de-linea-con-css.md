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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQQQ2KK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnsP0AlDdfQWJHfv0c9lakJyqVGtdIRFlpEoUZftxZwIhAJP8ZweWA9hYgQZLXstDWht2%2Fs9lKsdV%2Feey3kmN7uhsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxozvSGyFoaSGV7NBsq3ANs2NrUD4l9sDSLmPUoRdvdWkflIa2xMGx5wSwBklMAhHzpGfpjOqBv2%2BKYcVpIktFgnAhxSF5L5Ijf4F0Dy0Y42q0P43iZ%2FB21vq9cz4TBd7yqBS7c0HiUataBU7%2BxkH9cdn67NmXLPDUPLosB1wR6u%2FVDGuMoTe56JT0TsBqzxGQOwxRiLlrypHnxlkPZIln850HFf8PHbspDCrW7V8jLFromAdyxmjKDIkOUD03Fy6uH46otUatdLzlJ%2BFnClVxDn7FxtirPSe6dC%2FG7nR5RUAHa6e2H7lXTvQ85PkWyHiLBXUXlC6OPVKSSQvKedTh2Iqz%2FD%2BKAeIvB20iZ5smuuUjz4geZiikGHu%2BPC72BHeuDNgMyL71dyAyO1DEqF%2B0qxNgd3lMVwj2I2A%2B8qshSDhHZ%2F1aAvorLD9Jq4s8Z4b24Pno8GyEwL6N5z6w6XJEIA1er%2FOwH1oxOZQFuK3Ap8P5z82gzds28vS9uzmgeynO8H6QddLyBHYGUEQobiUO1xzi5gfV4g9w17x8eMqGnz1eemMEgsfAibGyIzt5A3RjM0OMvkfiqZnCT3XqBQd9daNJjEfl%2Bj%2F7RVkO%2Bq7IJP9NuYERMZCKZfE%2BmFmYgD3sT%2BxaAGk88mwHGhTCwn4vKBjqkARssfXSK%2F2fKoeMMz%2BbIEb%2FQqxaOnlm3gj6aQxgZSpbqfb3ZXuzGl1hgT%2B1roM3zEwchWpudSjSxF6t%2FpYDMETbg7S6zIWizIlMekrutDvp2YKl5KxnbYahATqMP0l%2FUKKaJChPTagKKogKz5RazVRXLTmHbqvpH0pVSKRIPKCOBCRhaJPNuwU7KArZe831pzeU71KdACkJPfP6ITsy9Ke1S5P7a&X-Amz-Signature=811e7b60cb652ea1dc572b89c04073bb311e668e67b17d8fbc8af0552e7a2f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQQQ2KK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnsP0AlDdfQWJHfv0c9lakJyqVGtdIRFlpEoUZftxZwIhAJP8ZweWA9hYgQZLXstDWht2%2Fs9lKsdV%2Feey3kmN7uhsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxozvSGyFoaSGV7NBsq3ANs2NrUD4l9sDSLmPUoRdvdWkflIa2xMGx5wSwBklMAhHzpGfpjOqBv2%2BKYcVpIktFgnAhxSF5L5Ijf4F0Dy0Y42q0P43iZ%2FB21vq9cz4TBd7yqBS7c0HiUataBU7%2BxkH9cdn67NmXLPDUPLosB1wR6u%2FVDGuMoTe56JT0TsBqzxGQOwxRiLlrypHnxlkPZIln850HFf8PHbspDCrW7V8jLFromAdyxmjKDIkOUD03Fy6uH46otUatdLzlJ%2BFnClVxDn7FxtirPSe6dC%2FG7nR5RUAHa6e2H7lXTvQ85PkWyHiLBXUXlC6OPVKSSQvKedTh2Iqz%2FD%2BKAeIvB20iZ5smuuUjz4geZiikGHu%2BPC72BHeuDNgMyL71dyAyO1DEqF%2B0qxNgd3lMVwj2I2A%2B8qshSDhHZ%2F1aAvorLD9Jq4s8Z4b24Pno8GyEwL6N5z6w6XJEIA1er%2FOwH1oxOZQFuK3Ap8P5z82gzds28vS9uzmgeynO8H6QddLyBHYGUEQobiUO1xzi5gfV4g9w17x8eMqGnz1eemMEgsfAibGyIzt5A3RjM0OMvkfiqZnCT3XqBQd9daNJjEfl%2Bj%2F7RVkO%2Bq7IJP9NuYERMZCKZfE%2BmFmYgD3sT%2BxaAGk88mwHGhTCwn4vKBjqkARssfXSK%2F2fKoeMMz%2BbIEb%2FQqxaOnlm3gj6aQxgZSpbqfb3ZXuzGl1hgT%2B1roM3zEwchWpudSjSxF6t%2FpYDMETbg7S6zIWizIlMekrutDvp2YKl5KxnbYahATqMP0l%2FUKKaJChPTagKKogKz5RazVRXLTmHbqvpH0pVSKRIPKCOBCRhaJPNuwU7KArZe831pzeU71KdACkJPfP6ITsy9Ke1S5P7a&X-Amz-Signature=7c7b0d74417d526751031b4ebda9e04083669eeb56ca08e91da77c6e3da4ff87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

