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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB5QTEOM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGqgNTb7m%2FQWECqLe9TeQKEroKOXtqSryJvJFnxws76QIhAKGA%2BuhIxI5SEqUrfgor%2B5QCMSnc%2FOLuX6gAHW9d%2Bv9cKv8DCHQQABoMNjM3NDIzMTgzODA1IgzsvrCz5rbF7frp4HAq3APV3JMSZLd3NgVa9%2BvQiWausTH5fHn9YW2f9s%2FRDItWx2gS2sWZWN0dR349H4gxqztVZUU5mG9IOyqW81p0CdiczMfNktZ8xkSelZFmEGGEZJbqzEw%2BuQbAeEpiDitD5f%2BpIR14tt%2Fbnxhs5%2Bvrj8E42hYUQ%2F1ULU300OJCbFi%2FSqm3bSRGV%2BEHI7Sv8vdogtOiTyzDzT8MeNepJPdmW%2FdzqJxlqAA5679Bt1ZIiW6ahq6zXsPafO%2FlzXeP%2B1kvG8wR2G6fRG%2Fm5ajvf4ZH70U6E6Mcen18V7FTYUZC2Nmb59U7PcEBBx8WQKjJjd4wmyzzZ6yn7Z9%2Bw4EGcV46%2FakVss43qPssCSZsl5XrxrKoF7TAVaAhk17%2FaML5mRhc69JhPpUktzrl11v3qhtTQ8%2Bl7TleHTWaSBPk%2BboxDwBFDyke%2BajAY1EXnxKp9OaZfQn1AIupHBUy6w2RNE%2BZkCWJZytr62hpkDb7nlsFHaLczTax1hiWc6ryTB8C%2BB106vndCmQsBQhFkY2rJIyUiWrJWzuy%2FcF5rXM7PJcJ18CyujaMlALy%2Bx2DnpMzpg9MHByMNTPN%2B9PYjwVHOdjpFhfUehEHzGeuvb5VUySO5KJXNkVhwkImuv0hDvM3UDD0sojKBjqkAc3kPwfrpFk1nNRuS8TR%2BNEl1Tr0see5Got7Mb%2FX90L8WrYxsbozi%2BlYKAXV41beEVx47dx8aHJPwmV03jCpMrk0irUfqnus9y4XfIjvPkyVzCeSdbUCXb1LZN%2F4vDqV84ri4gEmVnt7hNafR0gohXnTNdb5FVhq2N9dj909%2FZmKULIOyr3BrpZFGYpy1wYodT%2FeFeIzZLnXm9Ylqr84RtuMlJ8Q&X-Amz-Signature=767bd7c1717323d8fe68a3e0feb3022522b66cb78d51b9ebf6833891ededca94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB5QTEOM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGqgNTb7m%2FQWECqLe9TeQKEroKOXtqSryJvJFnxws76QIhAKGA%2BuhIxI5SEqUrfgor%2B5QCMSnc%2FOLuX6gAHW9d%2Bv9cKv8DCHQQABoMNjM3NDIzMTgzODA1IgzsvrCz5rbF7frp4HAq3APV3JMSZLd3NgVa9%2BvQiWausTH5fHn9YW2f9s%2FRDItWx2gS2sWZWN0dR349H4gxqztVZUU5mG9IOyqW81p0CdiczMfNktZ8xkSelZFmEGGEZJbqzEw%2BuQbAeEpiDitD5f%2BpIR14tt%2Fbnxhs5%2Bvrj8E42hYUQ%2F1ULU300OJCbFi%2FSqm3bSRGV%2BEHI7Sv8vdogtOiTyzDzT8MeNepJPdmW%2FdzqJxlqAA5679Bt1ZIiW6ahq6zXsPafO%2FlzXeP%2B1kvG8wR2G6fRG%2Fm5ajvf4ZH70U6E6Mcen18V7FTYUZC2Nmb59U7PcEBBx8WQKjJjd4wmyzzZ6yn7Z9%2Bw4EGcV46%2FakVss43qPssCSZsl5XrxrKoF7TAVaAhk17%2FaML5mRhc69JhPpUktzrl11v3qhtTQ8%2Bl7TleHTWaSBPk%2BboxDwBFDyke%2BajAY1EXnxKp9OaZfQn1AIupHBUy6w2RNE%2BZkCWJZytr62hpkDb7nlsFHaLczTax1hiWc6ryTB8C%2BB106vndCmQsBQhFkY2rJIyUiWrJWzuy%2FcF5rXM7PJcJ18CyujaMlALy%2Bx2DnpMzpg9MHByMNTPN%2B9PYjwVHOdjpFhfUehEHzGeuvb5VUySO5KJXNkVhwkImuv0hDvM3UDD0sojKBjqkAc3kPwfrpFk1nNRuS8TR%2BNEl1Tr0see5Got7Mb%2FX90L8WrYxsbozi%2BlYKAXV41beEVx47dx8aHJPwmV03jCpMrk0irUfqnus9y4XfIjvPkyVzCeSdbUCXb1LZN%2F4vDqV84ri4gEmVnt7hNafR0gohXnTNdb5FVhq2N9dj909%2FZmKULIOyr3BrpZFGYpy1wYodT%2FeFeIzZLnXm9Ylqr84RtuMlJ8Q&X-Amz-Signature=e47404f59e21ad1a633f015bf1e74d4a627669dcd60bac2654d879196002a462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

