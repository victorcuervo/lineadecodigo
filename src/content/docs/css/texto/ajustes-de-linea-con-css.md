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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOHZHWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhfH7h459oqHuUrBZDBbK4YJqBTpu%2BBcattxpkBpWvSAiAlUMTwnwlfHDMwqic6Rp%2F%2FnceeQMnQ%2B4EOeDNaCuqZwSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfCAC0XYbkLz5FRy6KtwDqObTVrTRMCQm9qqG0Po4qqIKC65oSnOvFL%2BAZtUlmdG3CAghaluRKZM14wxGi%2F8zjwZ7txU%2Ft%2F078D4Z%2F8lAEDtYojskMpBLd6Hx5uutnQ20jq%2BSJUTqJWz2pK4N1fHO4Cwu0fycMEWFdIV4uIwRr%2BRmx2DxJW%2B7fx6kYTNEI8zxBP37DVrrPPuAgZKVhiwDZxbvyBVsrPOf0Xq9EM%2B%2BgJL%2Fi%2FVL7eYPnXz8pnjQ4afawFwDJGVCfFTDrhJk8v91QvO%2BbhyfeB%2BpQGYYQvfDoKGmDQAuFNgZbTtJLDxgEXGh8tivrZM34ACaerSGNK47bde%2FPQsA30tSUUIDr9gmUkJtmvmaevvOXjdjeJtmo493yjFwnOdIwnjCbsP5Wme40%2BCSXEHT7ziAbIqkOjV7byAfnwEBwmwzxIObtSSpg%2BFl9Z6%2FV75jYcOfsMoxl5Hh1J0ABE%2FBgT9AePtAdGrfgRY6o1uQFoiEKmaUTq35JUQBcMf9kxke52d%2Fic4z2hlk4MxzEG%2F%2BwXEeWgB9t38hwKvHhPus3DgAWXsV92V4cX7QDjZfeWoJzWvvZ2xsrHcRdk1fqke69pcGRIzieagqSbfRQqpQ%2FvrnDlvvm8xu4dNwjriZ2HBPHqqIgbww1p%2BLygY6pgGGkD9Mh4gqIpWN23XkFsK7x1LhEcX8aMY8tTKcChmfqpYH07E6mBa3yvfhhlKDJdbjfXRlhZpPacJtQoZQUIbwagXCSpEhfEtvoSqlPs8YD7IY9dzi8MPgmH25daDAjIWFDfoh0MuSlZEy5pDlIclqHWzm3BjDI5bViqJoA2TeTsrrt0a35JnOmsZQtjGhFngoq8QakM0NkfeuJnrKJQARV1mq8a7n&X-Amz-Signature=9e4f781f7693b5f40dcf39778f94bc6658524a8550926484772545ddead66734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOHZHWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhfH7h459oqHuUrBZDBbK4YJqBTpu%2BBcattxpkBpWvSAiAlUMTwnwlfHDMwqic6Rp%2F%2FnceeQMnQ%2B4EOeDNaCuqZwSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfCAC0XYbkLz5FRy6KtwDqObTVrTRMCQm9qqG0Po4qqIKC65oSnOvFL%2BAZtUlmdG3CAghaluRKZM14wxGi%2F8zjwZ7txU%2Ft%2F078D4Z%2F8lAEDtYojskMpBLd6Hx5uutnQ20jq%2BSJUTqJWz2pK4N1fHO4Cwu0fycMEWFdIV4uIwRr%2BRmx2DxJW%2B7fx6kYTNEI8zxBP37DVrrPPuAgZKVhiwDZxbvyBVsrPOf0Xq9EM%2B%2BgJL%2Fi%2FVL7eYPnXz8pnjQ4afawFwDJGVCfFTDrhJk8v91QvO%2BbhyfeB%2BpQGYYQvfDoKGmDQAuFNgZbTtJLDxgEXGh8tivrZM34ACaerSGNK47bde%2FPQsA30tSUUIDr9gmUkJtmvmaevvOXjdjeJtmo493yjFwnOdIwnjCbsP5Wme40%2BCSXEHT7ziAbIqkOjV7byAfnwEBwmwzxIObtSSpg%2BFl9Z6%2FV75jYcOfsMoxl5Hh1J0ABE%2FBgT9AePtAdGrfgRY6o1uQFoiEKmaUTq35JUQBcMf9kxke52d%2Fic4z2hlk4MxzEG%2F%2BwXEeWgB9t38hwKvHhPus3DgAWXsV92V4cX7QDjZfeWoJzWvvZ2xsrHcRdk1fqke69pcGRIzieagqSbfRQqpQ%2FvrnDlvvm8xu4dNwjriZ2HBPHqqIgbww1p%2BLygY6pgGGkD9Mh4gqIpWN23XkFsK7x1LhEcX8aMY8tTKcChmfqpYH07E6mBa3yvfhhlKDJdbjfXRlhZpPacJtQoZQUIbwagXCSpEhfEtvoSqlPs8YD7IY9dzi8MPgmH25daDAjIWFDfoh0MuSlZEy5pDlIclqHWzm3BjDI5bViqJoA2TeTsrrt0a35JnOmsZQtjGhFngoq8QakM0NkfeuJnrKJQARV1mq8a7n&X-Amz-Signature=997615ecb440073ce5ee8bc5b14da0498a0eaab8fd9e152d8cf790da713254eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

