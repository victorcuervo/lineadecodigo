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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MTQ2DS5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9DDzT%2BZc9wnw%2FdaSMdsZRC44K6b%2Fs0KrOQLTdWKWV7AiEAvlMkdPGml2ogIDg1U0KcZK1BP6SbTLtqR%2Ff%2Fvzzb4ssq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF9tBS8bFJi1vXtMCircA15i4KGMKRcXNqxtfESI5fPk%2BhFnZjriWrmVtFQAOwiQe7o9FzfHnBZboS%2FNq9poWZ2uAPSejZXeS7zNUWmTkuMwVMK1QQpqna94UiV4nzAIQBGhY2LysavR0mhlHeFpSqwux2OTB8bedKEwJUfuUPZZFDl9QEKajkVADfgYnFRlvVTBc1tKSGRSsv7DUXOgWf1LUHsd%2BTAqlZPFIwQVAsu%2BLdBME0oGbpTSmrc9Yg7je6GGcawdj4kUwHsI8qErDdAcC1OUk7h4lT0zHE%2BLTJw%2BhGC9yXwlqEZ2whhBubu6%2Bndazf7CEyOwVjGN6X%2FEdGchunWX5j3UG1sBEIiZIOk6imTNQyZF4D5QpJzicKKDz2jcT9R%2BcHaLqqO9ByG2fCHq3%2FEfP4rWuhf%2BsRcLAuLV%2F6IJUfATGyGU%2F4HQnpLEfOARmza96hPPgeuBTuAfhPtCoZUL77RZryws0iHPp1ejRLjnJ37fWU2j6y%2BBZFeN4QcSdcCkfmQbcBIC4%2Bo7hnhQW4V2heuSdajIT6KXUIPsf1tgyWiZbuqIsJk%2FVZgMm75WkH12L7X1rAVAw6bD8GjvNWESe4sy%2BFgpEaeAG0FUyJ3OMesIIISgK3f80J%2B%2FWKN1a6AqvaQA3PEnMMbOiMoGOqUB5wMHGtxa5w%2FpSF4ruePvv9hR3q8UovJJb9p6JX1mCe0mB2Tdr%2FMA%2B3gjANeF4y%2FKqReUl%2Fxmo8UvnBqsedxQU2rZt%2Fwe9ZdCGmPKBkaaz%2BOsDAqb8oDWmhVMp%2BTQ7Ev%2Bbxl2edlYD8RD65g%2F8KU2tywfp3cWvHPVH%2BhCzbMGV4eYI2QLUlxnTNfVdlwgWRmrhxyaP5HKh0slokWQc3heH%2BjZEZ02&X-Amz-Signature=31ea14193936dd2ca5380405213f5258375b7ab965c23912c9ecca7ac60233d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MTQ2DS5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9DDzT%2BZc9wnw%2FdaSMdsZRC44K6b%2Fs0KrOQLTdWKWV7AiEAvlMkdPGml2ogIDg1U0KcZK1BP6SbTLtqR%2Ff%2Fvzzb4ssq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF9tBS8bFJi1vXtMCircA15i4KGMKRcXNqxtfESI5fPk%2BhFnZjriWrmVtFQAOwiQe7o9FzfHnBZboS%2FNq9poWZ2uAPSejZXeS7zNUWmTkuMwVMK1QQpqna94UiV4nzAIQBGhY2LysavR0mhlHeFpSqwux2OTB8bedKEwJUfuUPZZFDl9QEKajkVADfgYnFRlvVTBc1tKSGRSsv7DUXOgWf1LUHsd%2BTAqlZPFIwQVAsu%2BLdBME0oGbpTSmrc9Yg7je6GGcawdj4kUwHsI8qErDdAcC1OUk7h4lT0zHE%2BLTJw%2BhGC9yXwlqEZ2whhBubu6%2Bndazf7CEyOwVjGN6X%2FEdGchunWX5j3UG1sBEIiZIOk6imTNQyZF4D5QpJzicKKDz2jcT9R%2BcHaLqqO9ByG2fCHq3%2FEfP4rWuhf%2BsRcLAuLV%2F6IJUfATGyGU%2F4HQnpLEfOARmza96hPPgeuBTuAfhPtCoZUL77RZryws0iHPp1ejRLjnJ37fWU2j6y%2BBZFeN4QcSdcCkfmQbcBIC4%2Bo7hnhQW4V2heuSdajIT6KXUIPsf1tgyWiZbuqIsJk%2FVZgMm75WkH12L7X1rAVAw6bD8GjvNWESe4sy%2BFgpEaeAG0FUyJ3OMesIIISgK3f80J%2B%2FWKN1a6AqvaQA3PEnMMbOiMoGOqUB5wMHGtxa5w%2FpSF4ruePvv9hR3q8UovJJb9p6JX1mCe0mB2Tdr%2FMA%2B3gjANeF4y%2FKqReUl%2Fxmo8UvnBqsedxQU2rZt%2Fwe9ZdCGmPKBkaaz%2BOsDAqb8oDWmhVMp%2BTQ7Ev%2Bbxl2edlYD8RD65g%2F8KU2tywfp3cWvHPVH%2BhCzbMGV4eYI2QLUlxnTNfVdlwgWRmrhxyaP5HKh0slokWQc3heH%2BjZEZ02&X-Amz-Signature=87f11e206cc89a067cbcc451d858d6b0e5d14aa2a7f8ebb50a612167ce03b6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

