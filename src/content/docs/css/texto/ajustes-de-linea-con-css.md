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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSWIAOHP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9vZWtvC1FVdMowugfvDJXv%2FkR6b1skXN9CWAwAxskCQIgXPsWJTX3Hs27RvqkeKpLYpZhqOjs5D7uC73j5aciudYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJXoTEwtJxl9gPlJLircA4751eXgAUfXcNnEh2q2RjifSe32HOQzB4ko70rQ0coGs%2B9KuR5WHWZBeKcBTHiI%2Bft8E83sixf4u9084CtKNn726AfvgBDaZezl5BFGWVELrLGe88q7OM0HHyOJvAgrlG8His73dDDrUwZopupW0XPQXtLVrRy7V6ALeS6mtjEL8KQOhWM9eHEiW77es9bwcdqhTeEPznPQILzke1WEQu8KzlJoe9iTZg3FPSSyhS9VzmM2dvkk0593VtA9hb6LNX78iycGdVMzQ3y6YpZ73xeDs%2BSViehn7pmhvtao70mP6WMwqphu3S6EPotnnA3l1kKpi37y6%2B1qhoLCsgDARh0HdTg3jpkQVMQpU4ayPa0IlP3JwP11YdA0eShNzgXP1Kuia2G42k191y1HhW7Hc2BYEiualN%2BWkjMuUM59lFADLMX%2FbR%2B1a5u4hQypD1XiPy4m%2Bb1SFw98JOAiSN2CMjpAweJQwF9WlJbJWovVbUHT6JlN5R1S%2BiqFfvvr9uBtyL5PTVhcb6W12sTUFIH8AxmHQK4k1V8OsFX9TvGxSKHjzScf7j%2FTxesnjMrl22kvwrTuzdWlvHFcaEyLHUghlv9x8QgpkkDHh0Ex1ht9ngtqJpHYZ2k%2FtBzU2WZRMOuxiMoGOqUBJ3jL3UTsaSzUHhIg7Fy9Si6ruby03NpJIoXmQpoudQn0T5V5jdHvyLB1plP9aAd%2BVZ%2BERFK1dIlQPeCneVcwjk2gmujj%2BtqJQqc%2FaOTBEVB5eZOnj8%2Fyi2mZCAwRbxg6GLGi4Cv8D%2BA3SbT%2FXzw1Te%2BnGdA5XzBhMoVRnBelNh9S7KUCTOLGr3bffSAamXSgI5E6C8wi0KrOKNJr7Igm7RtJxexM&X-Amz-Signature=139ce4499ce9b7b3d04833f45437600a3db427e42fa33dd0413faccd6c995e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSWIAOHP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9vZWtvC1FVdMowugfvDJXv%2FkR6b1skXN9CWAwAxskCQIgXPsWJTX3Hs27RvqkeKpLYpZhqOjs5D7uC73j5aciudYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJXoTEwtJxl9gPlJLircA4751eXgAUfXcNnEh2q2RjifSe32HOQzB4ko70rQ0coGs%2B9KuR5WHWZBeKcBTHiI%2Bft8E83sixf4u9084CtKNn726AfvgBDaZezl5BFGWVELrLGe88q7OM0HHyOJvAgrlG8His73dDDrUwZopupW0XPQXtLVrRy7V6ALeS6mtjEL8KQOhWM9eHEiW77es9bwcdqhTeEPznPQILzke1WEQu8KzlJoe9iTZg3FPSSyhS9VzmM2dvkk0593VtA9hb6LNX78iycGdVMzQ3y6YpZ73xeDs%2BSViehn7pmhvtao70mP6WMwqphu3S6EPotnnA3l1kKpi37y6%2B1qhoLCsgDARh0HdTg3jpkQVMQpU4ayPa0IlP3JwP11YdA0eShNzgXP1Kuia2G42k191y1HhW7Hc2BYEiualN%2BWkjMuUM59lFADLMX%2FbR%2B1a5u4hQypD1XiPy4m%2Bb1SFw98JOAiSN2CMjpAweJQwF9WlJbJWovVbUHT6JlN5R1S%2BiqFfvvr9uBtyL5PTVhcb6W12sTUFIH8AxmHQK4k1V8OsFX9TvGxSKHjzScf7j%2FTxesnjMrl22kvwrTuzdWlvHFcaEyLHUghlv9x8QgpkkDHh0Ex1ht9ngtqJpHYZ2k%2FtBzU2WZRMOuxiMoGOqUBJ3jL3UTsaSzUHhIg7Fy9Si6ruby03NpJIoXmQpoudQn0T5V5jdHvyLB1plP9aAd%2BVZ%2BERFK1dIlQPeCneVcwjk2gmujj%2BtqJQqc%2FaOTBEVB5eZOnj8%2Fyi2mZCAwRbxg6GLGi4Cv8D%2BA3SbT%2FXzw1Te%2BnGdA5XzBhMoVRnBelNh9S7KUCTOLGr3bffSAamXSgI5E6C8wi0KrOKNJr7Igm7RtJxexM&X-Amz-Signature=070004cc0680d89380861803603b5761f081bda87dcc4507bebe355e4588282e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

