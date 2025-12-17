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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPZVNAOV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5T1MbPwnkfYe%2B26HF6QkTIy%2FOOJJzxokWvRqowwm9EQIhALeT%2B24c63BaGtIHjxoFe17qmPycjKFWeRcUeI%2FdtQZrKv8DCHQQABoMNjM3NDIzMTgzODA1IgzgMzuOrsuky2kYmJ0q3APfV5fT1JIpBdmHh%2BvEHPqlmz2ZZbO8e477Scko2bE4dsetUvwjp28a%2BQFe4rbmV1%2Bcs8%2F2nOS53e902DpyYkBeJFtXsVrjjzCAyUWU37hnH45reBDU8FieX7CfnpL8bDkfv9xNSMo7q1sa%2F9n%2BGFImkVP%2FY0oJMu1Ulk0gzvrFk6WqwjdAqpgIrLAdMF%2BmaW26lghqC2idroeb3ZB5GNwqPZWW%2FpU6sa%2FlX2t16EiJaqRVTuhuDzFWUz21K8zc7Fl7a2jYTbhj6DDsYS%2F5vtW1HLgDJWO%2BjJWywhVTinKOn%2B5b1TkXO1pbOpWXcSobT0G5tDFJfW0W1P4mbFUD4bpoubVY2tJJL%2BNhWpx%2FqbMZsfUpjkKnu5nH9DxK9BgA%2BQuLUg6uAZDMKOQjTPqBG3%2FYC6UhIU%2B0PZcxR7keu5OWsCHY7%2Fy3TspYeIhi9l0UxEdTXKQpPRb2mTU1RdexoMtv7a2UlJDqVRj95J9vXQ4pw0ZVx%2BMyqQDpgCgHCJR6QnzyrH8Ihw50QoauvcrisZtv%2FcschTkB5YoVHEwjpiKlYIWH1dZi3m2QUqdjbTj70i6xyT%2FqKwuQQ4xs4Cpwjr49GO%2FxncOosXz4kaxFyuY3XfScnaCcIBF8OjHJlDC5sojKBjqkARPfpYrqRzFE%2FTSi0Vp%2BSnmxtnZ01%2F2ySfs%2Bb1SUtdTGzevyaQcWzA7VA20tUyaA8nadU8JoFN8Hix6OF3g8BsxZRCYjcbvKy4g%2BNytaYyZ7fGjklEwySDCtzR2PgZiGRxQizw1amJKPwyK%2BYWhSIbhj7LmNHLd1Er6CxryvQjmvfJGa84zBuXWjlOsA8O5idlHwpYzvz5UzFV0a4MPKqNvL5WP8&X-Amz-Signature=ef0d8cab5fe3a47d09664d2bee37a19bea00d6e9124a1fb4adc7a81a42855c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPZVNAOV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5T1MbPwnkfYe%2B26HF6QkTIy%2FOOJJzxokWvRqowwm9EQIhALeT%2B24c63BaGtIHjxoFe17qmPycjKFWeRcUeI%2FdtQZrKv8DCHQQABoMNjM3NDIzMTgzODA1IgzgMzuOrsuky2kYmJ0q3APfV5fT1JIpBdmHh%2BvEHPqlmz2ZZbO8e477Scko2bE4dsetUvwjp28a%2BQFe4rbmV1%2Bcs8%2F2nOS53e902DpyYkBeJFtXsVrjjzCAyUWU37hnH45reBDU8FieX7CfnpL8bDkfv9xNSMo7q1sa%2F9n%2BGFImkVP%2FY0oJMu1Ulk0gzvrFk6WqwjdAqpgIrLAdMF%2BmaW26lghqC2idroeb3ZB5GNwqPZWW%2FpU6sa%2FlX2t16EiJaqRVTuhuDzFWUz21K8zc7Fl7a2jYTbhj6DDsYS%2F5vtW1HLgDJWO%2BjJWywhVTinKOn%2B5b1TkXO1pbOpWXcSobT0G5tDFJfW0W1P4mbFUD4bpoubVY2tJJL%2BNhWpx%2FqbMZsfUpjkKnu5nH9DxK9BgA%2BQuLUg6uAZDMKOQjTPqBG3%2FYC6UhIU%2B0PZcxR7keu5OWsCHY7%2Fy3TspYeIhi9l0UxEdTXKQpPRb2mTU1RdexoMtv7a2UlJDqVRj95J9vXQ4pw0ZVx%2BMyqQDpgCgHCJR6QnzyrH8Ihw50QoauvcrisZtv%2FcschTkB5YoVHEwjpiKlYIWH1dZi3m2QUqdjbTj70i6xyT%2FqKwuQQ4xs4Cpwjr49GO%2FxncOosXz4kaxFyuY3XfScnaCcIBF8OjHJlDC5sojKBjqkARPfpYrqRzFE%2FTSi0Vp%2BSnmxtnZ01%2F2ySfs%2Bb1SUtdTGzevyaQcWzA7VA20tUyaA8nadU8JoFN8Hix6OF3g8BsxZRCYjcbvKy4g%2BNytaYyZ7fGjklEwySDCtzR2PgZiGRxQizw1amJKPwyK%2BYWhSIbhj7LmNHLd1Er6CxryvQjmvfJGa84zBuXWjlOsA8O5idlHwpYzvz5UzFV0a4MPKqNvL5WP8&X-Amz-Signature=a374544333849459c59e2a04c84748dc2c631eee30f3dba605aa8c349e387047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

