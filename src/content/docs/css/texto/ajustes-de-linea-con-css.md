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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV76ZGEX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjY25dRB2Rj7%2F4mJg6QKMNZIeI2Pk%2F7oWZiAGGQ%2FT4gIhAOYBOiUvBU3nl93lECJuBeRlsAsCmzBJNxFvZFhn6mFaKv8DCH8QABoMNjM3NDIzMTgzODA1IgzU4PFo6IOEMz%2Bx23Iq3APEWYaHxRTakPv8ylw2Jo3K7COjLHTI%2BWUyDOKU0ky%2FlukME86OiKcJIE%2BmeJ45i9TSfruNyJ7tMZX49esCx7P4CxFXzvZSyr2oMDntnTg9Fyk5pmTs6stJgEBiF3TXfDaSn4%2BVWuENcXmnBDSBFz37sBMBP6TWD%2Fhxj8q8Ux6X9YVZlNG1u%2Fh4Vpnjr65cJjXIj9N%2F0%2BFYeGI5o3EcjcYUtM1lyA3K5LwZjP212KelVGHfz3fASQNfSd9zJ%2BEZfFVOTcqkkeixtg6sJjkxcRD2MNDymsLqp4zlIxRM1r8QjxAIOCsCkHZTSypDZonkvjdeoGuiZJS0bC6qXTfKwg7sJy528EPQeAQeD0R2pWW4PBmaJYv6jJjP0lZke13H0uvpTMmarXHS4Q4U7%2B%2BeZBYI5BndOwDX6qodEveZ3LbHsGy%2FkXpAolRKuyAE36MPBh83m5PcQMMsdotI4OeBJ5u2q4oUbgRQVPSofCepAR0GUmIPSvHqkXRxR2eG%2FQmVaZkBDZJpUs6gCavJBSSXnPNPT1o3EbIclWENcnBzdWL8zTem3UA8X08yrrkDAY3O4MdXjCvETL%2BVEaA5S3Lm2tnhb9VtwBw%2F7IVCmn1AaO8VC85o5KjcoZzdNowVbDDd4YrKBjqkAUZ%2BfZXLfWPUuNZjNYX%2Fc%2B11qnmk7Yf6nXX3Ga%2FfHdReVSFtq%2BVtGW%2FAWFlcuNC65VvFu%2FC4BdktIV9qHuYm3GYSSaEHTJzGROmDh8OyJo6fKEYftJ9wur2II9YpF5qBMIq6t27JSMBWXUgpXLuaS6TIpo2NKBS2t53%2FQUKeCzTdY968MN8AUF%2FFjfq6iVUfh%2BX4ycOf5MCF%2FbU1%2BqUrVdo4sxHk&X-Amz-Signature=806b2fed0bec3d8aac651714a7573a5bb5cafabf63a01d6507594f939c6bee4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV76ZGEX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjY25dRB2Rj7%2F4mJg6QKMNZIeI2Pk%2F7oWZiAGGQ%2FT4gIhAOYBOiUvBU3nl93lECJuBeRlsAsCmzBJNxFvZFhn6mFaKv8DCH8QABoMNjM3NDIzMTgzODA1IgzU4PFo6IOEMz%2Bx23Iq3APEWYaHxRTakPv8ylw2Jo3K7COjLHTI%2BWUyDOKU0ky%2FlukME86OiKcJIE%2BmeJ45i9TSfruNyJ7tMZX49esCx7P4CxFXzvZSyr2oMDntnTg9Fyk5pmTs6stJgEBiF3TXfDaSn4%2BVWuENcXmnBDSBFz37sBMBP6TWD%2Fhxj8q8Ux6X9YVZlNG1u%2Fh4Vpnjr65cJjXIj9N%2F0%2BFYeGI5o3EcjcYUtM1lyA3K5LwZjP212KelVGHfz3fASQNfSd9zJ%2BEZfFVOTcqkkeixtg6sJjkxcRD2MNDymsLqp4zlIxRM1r8QjxAIOCsCkHZTSypDZonkvjdeoGuiZJS0bC6qXTfKwg7sJy528EPQeAQeD0R2pWW4PBmaJYv6jJjP0lZke13H0uvpTMmarXHS4Q4U7%2B%2BeZBYI5BndOwDX6qodEveZ3LbHsGy%2FkXpAolRKuyAE36MPBh83m5PcQMMsdotI4OeBJ5u2q4oUbgRQVPSofCepAR0GUmIPSvHqkXRxR2eG%2FQmVaZkBDZJpUs6gCavJBSSXnPNPT1o3EbIclWENcnBzdWL8zTem3UA8X08yrrkDAY3O4MdXjCvETL%2BVEaA5S3Lm2tnhb9VtwBw%2F7IVCmn1AaO8VC85o5KjcoZzdNowVbDDd4YrKBjqkAUZ%2BfZXLfWPUuNZjNYX%2Fc%2B11qnmk7Yf6nXX3Ga%2FfHdReVSFtq%2BVtGW%2FAWFlcuNC65VvFu%2FC4BdktIV9qHuYm3GYSSaEHTJzGROmDh8OyJo6fKEYftJ9wur2II9YpF5qBMIq6t27JSMBWXUgpXLuaS6TIpo2NKBS2t53%2FQUKeCzTdY968MN8AUF%2FFjfq6iVUfh%2BX4ycOf5MCF%2FbU1%2BqUrVdo4sxHk&X-Amz-Signature=afcbe15624248a41ce22e64d805e16d1dc9b607f2ae554451cc7c213e9a1509f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

