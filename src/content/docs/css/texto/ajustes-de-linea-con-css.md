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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2MLEND%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCscT4FA%2FTLd3bq8OEpiT%2FDXA1nwhZJonD60vB5Ew%2FxUQIhAKbdYGy6zr522bQbHKLWK6z5puDgLCQKRRvS17vGTXGlKv8DCHkQABoMNjM3NDIzMTgzODA1Igy09ZwOBv9qkBH9f4kq3AOr5vNY4sAyck%2B62PHM%2B5iQu7K1MD6ZPmLrLQyYR2CM36cowkxgN5aRaoDbnMVZyp4hC%2FptzYUQGsTIXlqm04R4oBSqrgZh0sjc4cvS8Z2s1FsnFKxycdiCeg4FWU4xDWyU9RvpsrTDStUEDpFi1tGup5fksU1KA7g0ghrKPmcgIqf5TaJK7vDt5hvD2HEK6kwFdjjF28n%2B2TVSEYjBsU51qSXL7bT9n9utXcdtj80pPUs3OfszVbDMU0pL49yPie%2FNQ%2Fi2OjMI8MZpKZTG%2FJmWZMoiRJfuIBUd2eTU0w%2BO9hxbGesrNIyRVWagtLR5lveUqOyCqf9%2B5CWePLDCZodKocBH3W47%2Fbi2o%2FSr0Ad6V9Czr3JpG%2Fe86OGZa7uPjH5eptPn1daJBm5FpHfnFIKOaAmyVItGEDMgCI6OBW48QSVRbi3m0jBBmZYOs8iKpOyb5vn%2BSZxni7Pigp0ro69ZfWelGuqqZ0qrSygN%2Ffvq2e4XHgNaWY6ul2midWvva1hAiIgPV5jVTEq1pXVailZ9TayAWpBW68iJq%2Fw7pON3ZVBceIRb3EztsrB5FXq2H3fYEJQUYL8wjwUiD2qt1Dr6O2%2BCmuTpyeNApYvx8Et2e%2FVUuBwMuiD494knnzCJt4nKBjqkAUemde0iqMcAyfBm%2FFdOf%2BTju7qFV3YKBRp3R%2FId0UgP%2BM6v2455osTfbdObzA96bXN1vbVNag4zN6qPilySsm8CZ9MGuWY9XlmVK03jcPgm%2Ba9g0%2F%2FGC2%2BrGyyAuiaj%2BwM2xF8Eei3lx78U9PR3lbw5zYY%2F6o9E5LvkRbtuwFVkmzIJrX9QyBM8aa5XQqSWbCfMW0d2CMHzLLKBM4kbWc37wNRk&X-Amz-Signature=e91fa730e11d81692de357f13df64c9a7d22fc305ccc8222c49656e9b05100a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2MLEND%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCscT4FA%2FTLd3bq8OEpiT%2FDXA1nwhZJonD60vB5Ew%2FxUQIhAKbdYGy6zr522bQbHKLWK6z5puDgLCQKRRvS17vGTXGlKv8DCHkQABoMNjM3NDIzMTgzODA1Igy09ZwOBv9qkBH9f4kq3AOr5vNY4sAyck%2B62PHM%2B5iQu7K1MD6ZPmLrLQyYR2CM36cowkxgN5aRaoDbnMVZyp4hC%2FptzYUQGsTIXlqm04R4oBSqrgZh0sjc4cvS8Z2s1FsnFKxycdiCeg4FWU4xDWyU9RvpsrTDStUEDpFi1tGup5fksU1KA7g0ghrKPmcgIqf5TaJK7vDt5hvD2HEK6kwFdjjF28n%2B2TVSEYjBsU51qSXL7bT9n9utXcdtj80pPUs3OfszVbDMU0pL49yPie%2FNQ%2Fi2OjMI8MZpKZTG%2FJmWZMoiRJfuIBUd2eTU0w%2BO9hxbGesrNIyRVWagtLR5lveUqOyCqf9%2B5CWePLDCZodKocBH3W47%2Fbi2o%2FSr0Ad6V9Czr3JpG%2Fe86OGZa7uPjH5eptPn1daJBm5FpHfnFIKOaAmyVItGEDMgCI6OBW48QSVRbi3m0jBBmZYOs8iKpOyb5vn%2BSZxni7Pigp0ro69ZfWelGuqqZ0qrSygN%2Ffvq2e4XHgNaWY6ul2midWvva1hAiIgPV5jVTEq1pXVailZ9TayAWpBW68iJq%2Fw7pON3ZVBceIRb3EztsrB5FXq2H3fYEJQUYL8wjwUiD2qt1Dr6O2%2BCmuTpyeNApYvx8Et2e%2FVUuBwMuiD494knnzCJt4nKBjqkAUemde0iqMcAyfBm%2FFdOf%2BTju7qFV3YKBRp3R%2FId0UgP%2BM6v2455osTfbdObzA96bXN1vbVNag4zN6qPilySsm8CZ9MGuWY9XlmVK03jcPgm%2Ba9g0%2F%2FGC2%2BrGyyAuiaj%2BwM2xF8Eei3lx78U9PR3lbw5zYY%2F6o9E5LvkRbtuwFVkmzIJrX9QyBM8aa5XQqSWbCfMW0d2CMHzLLKBM4kbWc37wNRk&X-Amz-Signature=142a2d58b34e3e61fe999710f9379bb218a4e7c940a326db234157bb2835020b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

