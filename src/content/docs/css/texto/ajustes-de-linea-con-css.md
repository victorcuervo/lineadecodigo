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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYJ52DW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsF1cru06V4%2BtqxnJILiMrZLdBrGK6MfAEVn2HQmdn4AIhAJXto0YTiQDZHlfSKJ5l1TH4gaXMFZ5cHFkPrls9qLD6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLkHvSCHetZwpzfucq3AMtKGxbrjUiT9LV%2F93aeyw%2FYmAQzd%2Fx2AwkhJCGYXMqd6THcuHhqHKh%2F96gyvLI5aM70nA1i1Hu7Q8ARs%2B94HQEDbioqmEG%2FgXXnLzfBBl8QVivkaTAt1lAFCipaJaYwf54WoItrTPJi%2BNyavan2%2B2%2Fkotp%2BKAzEeWmoKvcOIdXQkX45eV%2BieZ8f5J4ZzfdC%2FJ9Y3yu0fBDNijplfzFUr2IsNyOr9SEZc9ZTZyJpuzMFLCGW6TcJgdhNaW51QHaFJYawBU%2Bsr0mpTGxS1rpNZLEtWNaHI%2F2C6K4qs12I7OJnHeXt7uacybUhhN01A7xKoNqVuImWEwa2RFKdmzED4GPmEFGeUdwH69nuFZn44GtFyhdfNH8ZSbzY0n6wfG22eqzyYD7iFZD2o4LqNlzvnk8mu%2FQ3GzZTFRWX5TpY0aaKoYhSIGIqiU%2F9DNO292M4r7iA1p3h3QVKoJlF6CXJioVCKPMbV1TOUWEmoNYjnBJEzmfALxgccVdY7tvLBSQtatBFqxRUWjwonx7Yp1wQg6OHSW15Hfv29tPn%2B%2F87QrYfJWYEETQP7WdQ7hq467jomnbR6PlGHdCdjuKhVEI6NKwY7RUSGh51g1WI913Tv4cMuJvRi70YhZmjj4D8zCZn4vKBjqkAevH2KrOsCvP0pfV2FFQXAjPOwi3dXghpoxkj8wbT7rBjiRix9Jy9TTGp1PiaWKVAG52QgEBKRko6aJITt1t%2FQauitGEYrqgLYx1W1ruNJLOrHyGtIOipDPIykcF%2Br3sBMgvaAvAEe%2F0d2wLpecQFdZiuBaXY51y94bO1ZUEVjOCaOiz6Fr%2F5ErVG%2F0bWxhkFyXzmGLYkVDOJ7TBJziffGaqbn%2Bw&X-Amz-Signature=deca5bea1335d932781dec8a0fa7c412f7f1cafc4554df0669a2c6b3975fcca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYJ52DW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsF1cru06V4%2BtqxnJILiMrZLdBrGK6MfAEVn2HQmdn4AIhAJXto0YTiQDZHlfSKJ5l1TH4gaXMFZ5cHFkPrls9qLD6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLkHvSCHetZwpzfucq3AMtKGxbrjUiT9LV%2F93aeyw%2FYmAQzd%2Fx2AwkhJCGYXMqd6THcuHhqHKh%2F96gyvLI5aM70nA1i1Hu7Q8ARs%2B94HQEDbioqmEG%2FgXXnLzfBBl8QVivkaTAt1lAFCipaJaYwf54WoItrTPJi%2BNyavan2%2B2%2Fkotp%2BKAzEeWmoKvcOIdXQkX45eV%2BieZ8f5J4ZzfdC%2FJ9Y3yu0fBDNijplfzFUr2IsNyOr9SEZc9ZTZyJpuzMFLCGW6TcJgdhNaW51QHaFJYawBU%2Bsr0mpTGxS1rpNZLEtWNaHI%2F2C6K4qs12I7OJnHeXt7uacybUhhN01A7xKoNqVuImWEwa2RFKdmzED4GPmEFGeUdwH69nuFZn44GtFyhdfNH8ZSbzY0n6wfG22eqzyYD7iFZD2o4LqNlzvnk8mu%2FQ3GzZTFRWX5TpY0aaKoYhSIGIqiU%2F9DNO292M4r7iA1p3h3QVKoJlF6CXJioVCKPMbV1TOUWEmoNYjnBJEzmfALxgccVdY7tvLBSQtatBFqxRUWjwonx7Yp1wQg6OHSW15Hfv29tPn%2B%2F87QrYfJWYEETQP7WdQ7hq467jomnbR6PlGHdCdjuKhVEI6NKwY7RUSGh51g1WI913Tv4cMuJvRi70YhZmjj4D8zCZn4vKBjqkAevH2KrOsCvP0pfV2FFQXAjPOwi3dXghpoxkj8wbT7rBjiRix9Jy9TTGp1PiaWKVAG52QgEBKRko6aJITt1t%2FQauitGEYrqgLYx1W1ruNJLOrHyGtIOipDPIykcF%2Br3sBMgvaAvAEe%2F0d2wLpecQFdZiuBaXY51y94bO1ZUEVjOCaOiz6Fr%2F5ErVG%2F0bWxhkFyXzmGLYkVDOJ7TBJziffGaqbn%2Bw&X-Amz-Signature=838178319348c07d9846b5a438b0be2ecc0eb6e36adab8702c18cc03601dff74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

