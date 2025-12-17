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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3OV6R5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjrGe5hATs8WiwjV9PUBH9GKORDEhQcEBF4X6AXKlyyAiAqaxX5lbxNs%2F2tCs%2FYb7ElPvZKZKRxhXGzYNuHjMzNESqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Bxs15ZuFohfhEHFKtwDvtIGAP6oCb8Hxcxb68hR%2Fb%2FpJZ4xRDh6aKMPRGS2Rdc%2FDyvPluzNUiM3JCpK%2BUD%2F8LTbudsR%2BTqSi3eKEdUZXPTsa8Khri%2F7kcTGd70YsegEp10EPm33NHBJsuJE4VosFSEcT2O0mqx%2BPtcjUbJwIFDAwukdGXER2Y1S4nwCm2TJ%2BlzGEwfqus7%2FdM1gtLIW1uwRN7A9n%2F1tU9oIKJWBJurPdC0JC4w37P4dOJ0HntqayrP1JCpmz%2BsZF4E8YEdGV%2F%2BLeJWb0fIeD7BJIQSmPq68tKDA6RJtRVAYhJ1tB5DyB8KkEPXwOX8h98ybxo7lr3vHtits%2BVZi5G2%2FnWWnIL%2BNFGNHThQSeUdybFjXjNHFq4fzNH%2BCmDLeBOGsP3soSFKvc2Xg%2B6soJ7m2kqmRn17FpY16QXGvpCXpayo6VNrw8rihKLOyvTH1Ne9rmQYGOxNdZIj7AbbijfALpzYTEKjMINjbiSX5QM7SIEn%2FwlBwxbGHLUTYIv22Xb%2FPWbwXVLuMx2NUYkTsCueeLvnHrMZERC7hAlp1v1PuqZjLjjUsx7jFXAwe8EMkx6Po41czJ4N28yc2GIx7DbN7CEXNtvk8hhDVs10kbSQiSE%2BcICNShNPCCFrF8nxhsVUwyJ%2BLygY6pgEBd8wg6Xscvb%2B0Zs%2BpQVXlofyUO5xUONpbSuTtU76LmU1Hz4GNr4jg2RX7wdAtZ52fOisa9N8MNKaHmnmGnNqfcUgL0yEvnDZvBKQV%2BlWQ6zjlUUNuESGY4e0VMswDHz4d5sKn6W0%2FCCywtW7TMkJiYsB6Xrolpmn2GAJTzwgOciBEWXiaJonlhvvuh2uDahYTQjR1PXeDPkoJT2K0UsFa0Ql6MxBF&X-Amz-Signature=062c687d27e8769754c8646297809d360e8cd2817cd6d13beeff01fbb230478d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3OV6R5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjrGe5hATs8WiwjV9PUBH9GKORDEhQcEBF4X6AXKlyyAiAqaxX5lbxNs%2F2tCs%2FYb7ElPvZKZKRxhXGzYNuHjMzNESqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Bxs15ZuFohfhEHFKtwDvtIGAP6oCb8Hxcxb68hR%2Fb%2FpJZ4xRDh6aKMPRGS2Rdc%2FDyvPluzNUiM3JCpK%2BUD%2F8LTbudsR%2BTqSi3eKEdUZXPTsa8Khri%2F7kcTGd70YsegEp10EPm33NHBJsuJE4VosFSEcT2O0mqx%2BPtcjUbJwIFDAwukdGXER2Y1S4nwCm2TJ%2BlzGEwfqus7%2FdM1gtLIW1uwRN7A9n%2F1tU9oIKJWBJurPdC0JC4w37P4dOJ0HntqayrP1JCpmz%2BsZF4E8YEdGV%2F%2BLeJWb0fIeD7BJIQSmPq68tKDA6RJtRVAYhJ1tB5DyB8KkEPXwOX8h98ybxo7lr3vHtits%2BVZi5G2%2FnWWnIL%2BNFGNHThQSeUdybFjXjNHFq4fzNH%2BCmDLeBOGsP3soSFKvc2Xg%2B6soJ7m2kqmRn17FpY16QXGvpCXpayo6VNrw8rihKLOyvTH1Ne9rmQYGOxNdZIj7AbbijfALpzYTEKjMINjbiSX5QM7SIEn%2FwlBwxbGHLUTYIv22Xb%2FPWbwXVLuMx2NUYkTsCueeLvnHrMZERC7hAlp1v1PuqZjLjjUsx7jFXAwe8EMkx6Po41czJ4N28yc2GIx7DbN7CEXNtvk8hhDVs10kbSQiSE%2BcICNShNPCCFrF8nxhsVUwyJ%2BLygY6pgEBd8wg6Xscvb%2B0Zs%2BpQVXlofyUO5xUONpbSuTtU76LmU1Hz4GNr4jg2RX7wdAtZ52fOisa9N8MNKaHmnmGnNqfcUgL0yEvnDZvBKQV%2BlWQ6zjlUUNuESGY4e0VMswDHz4d5sKn6W0%2FCCywtW7TMkJiYsB6Xrolpmn2GAJTzwgOciBEWXiaJonlhvvuh2uDahYTQjR1PXeDPkoJT2K0UsFa0Ql6MxBF&X-Amz-Signature=80699738252e0c640d623acdb55f48cf568bd57634635a5657a963c400318e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

