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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2INP3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhdzkIYRsABxav4cSnsu8QLJNeEkEK5NA10JxqhXGwxAiEA4zYR8T7GTKxol1rvgvMx1rGbJcpqPne59UfTn39orS8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQmiiFq3B%2BtADL0RyrcA1y1vtK3Zf0iu9RaMwaeS8CPuRgIzkZmHCCFIw2Mk%2BSlyT2de9pNiI6vdzL%2Fqp9Khb27U8j4E6LQ5vsS9L3XU475232pOguvwsmG7M6abCwcousCCHjrxjoky5zlJgOf6%2FIfja86r8arQKdatMosdxpvKK%2F9jjJZ%2BkPZXj4RGu3ggtBlLXjn%2F4DRZEdJncqhxPwOxHozqmkTlaojrZXkBsKvXVVPsgAsFHbjf1jIk4bpJfH9PVjwiE35E74dvm2B06q4VXgKeSUEFeUqJJZZyenQxIgS2%2BA6sAQsTr9A3mXJJ8axeuZFHiaVcbtn0OP9Cq6AuOcx54paHZHiazZLfKPnQ0lcst9wMnE%2FgV0j3%2BYAMJKQFJeL%2B7fmaGGLf%2BYDEHfgDUo3rTS5CAvbmnhe9sf4KU6EkeAzAGU6%2Bawdxi1VP9FUdV1nHrNX3MCdrSksUPAQaRNr8I6J0vPMWz0rBw5QPUSe5rBbLnXcVzn3IfR8A4Tnk2zycm6ill%2By%2BeOF5aYVepcNPYWdHgwPJ7LVRCxDI5Kp6BjxdK4FCI4YwoZcD5HSKJau0tgw%2BYuSKDMxgIM1J9LiXzCd3%2FJJu32YN2XH5YnvKy7pzdu5L%2FV7Xv95NdXduttTu%2B5VhLZnMNmAi8oGOqUBGDCuIwdEPH06F4WunU6u%2Bd4FjgilTm5ZzIpgBMLawHEjJNoKT2EwpR6X9ONqx8ahaWVuQDtY4Aa4P8t%2F1UfLUkXZXcR12g55P86er%2BYFPb9ZlzoFua80hXvM2gSH7tJkltxxP6HzvtDvssq6F0%2FCxIa1Y8jMnIh3P%2FMKc0ToXGoHOtvxp%2F6M7rqzSFrARiNQDOlkSTyn2bTRm2cwTv0ChuHQ0WAT&X-Amz-Signature=0621a7e2e02af5ce7daff1d6ae1a26ff93a55283ab202d28056a94de504736dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2INP3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhdzkIYRsABxav4cSnsu8QLJNeEkEK5NA10JxqhXGwxAiEA4zYR8T7GTKxol1rvgvMx1rGbJcpqPne59UfTn39orS8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQmiiFq3B%2BtADL0RyrcA1y1vtK3Zf0iu9RaMwaeS8CPuRgIzkZmHCCFIw2Mk%2BSlyT2de9pNiI6vdzL%2Fqp9Khb27U8j4E6LQ5vsS9L3XU475232pOguvwsmG7M6abCwcousCCHjrxjoky5zlJgOf6%2FIfja86r8arQKdatMosdxpvKK%2F9jjJZ%2BkPZXj4RGu3ggtBlLXjn%2F4DRZEdJncqhxPwOxHozqmkTlaojrZXkBsKvXVVPsgAsFHbjf1jIk4bpJfH9PVjwiE35E74dvm2B06q4VXgKeSUEFeUqJJZZyenQxIgS2%2BA6sAQsTr9A3mXJJ8axeuZFHiaVcbtn0OP9Cq6AuOcx54paHZHiazZLfKPnQ0lcst9wMnE%2FgV0j3%2BYAMJKQFJeL%2B7fmaGGLf%2BYDEHfgDUo3rTS5CAvbmnhe9sf4KU6EkeAzAGU6%2Bawdxi1VP9FUdV1nHrNX3MCdrSksUPAQaRNr8I6J0vPMWz0rBw5QPUSe5rBbLnXcVzn3IfR8A4Tnk2zycm6ill%2By%2BeOF5aYVepcNPYWdHgwPJ7LVRCxDI5Kp6BjxdK4FCI4YwoZcD5HSKJau0tgw%2BYuSKDMxgIM1J9LiXzCd3%2FJJu32YN2XH5YnvKy7pzdu5L%2FV7Xv95NdXduttTu%2B5VhLZnMNmAi8oGOqUBGDCuIwdEPH06F4WunU6u%2Bd4FjgilTm5ZzIpgBMLawHEjJNoKT2EwpR6X9ONqx8ahaWVuQDtY4Aa4P8t%2F1UfLUkXZXcR12g55P86er%2BYFPb9ZlzoFua80hXvM2gSH7tJkltxxP6HzvtDvssq6F0%2FCxIa1Y8jMnIh3P%2FMKc0ToXGoHOtvxp%2F6M7rqzSFrARiNQDOlkSTyn2bTRm2cwTv0ChuHQ0WAT&X-Amz-Signature=b83ab813dbf4418331288151bf3ee3dc99dd05c03052f3438af06d42aa03826b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

