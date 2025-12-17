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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3POM73W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUOQdAowxGA8OjIBZDGbYKLlfsu6YN8QW6DfEDjd1E6AiANuxRJshhyw9uCc8uKV%2BW0B%2F8lLScohyuDTukdLHHY1yr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMsAm2Ps46msRG9wVSKtwDCiunki3O4NuvltiAkoYxyRoC5ECIkjalFda6ZzT%2FhUuoaRaKNCdWW%2FxTOaDiszpbL22d3h4ZJW9HX8jQFzcK3hM303ihrUzfSyXQKd3baNJlxKRgY1kvESZTpPDaIYEXHLLpKg8uQv8wyFUXtDvm%2BoB2VsE0t3iJwMtTRanZA7nWcDmHtB8tehkP4K4Icp0Od9PfoZ3YH4FvpnFi46j69V9P6ZNK6v%2Fx3YPYIfmpa39g5XkapA5zMNJOtDixofC%2BEsAOMYtdpZg3Xk0wMXUSF0p48eGERrZMMaNfudwbrTMnNVJbvnpCVK7zlvZP2lSsofRsUnNF5UGUm9SC35xI%2BvYdE21%2BwV0sZElT2DZqKi7l2LU3CGUMRdkkO4HHEFBRQdyh2AnlKWIryi64xkMC63qSNpkN5gm9F9hTkuXMmJ95OeU%2FJnK6PYDLDC%2Brk9oJX9luJ0nmWnYySiqHX8iajNdmRi9F2KlVRU1596Mt7h%2Bx8Rop4tBM2sjk6FJ869xLG1GLx%2FG%2B3jk1l1RmgBYVguEMLzF47CGwducz6XlwQbTfFCcYeIsdzKF0W66FXoswu5Oe19NlWSI7vChSmlAF6i0JMzQYX6%2FSXjiZqkvkKLd%2F8RyaXY65U47a0ecw052JygY6pgH56%2Bmsw6saqJ2cx3jLQ1o2rjljiqlib8jGb5MqVg%2FWxxyNZA3faGiBh%2F3eaV0fAENJrH0OgaA76f86xF9fj7q1cGlXJUqiO%2BJ9wt49gsPLMkPfo91Uq87OO0nTpUwoxkyurzGC26QTB0wnXs5dHa1kZjSsvo1ZQdJ%2B%2FoSHdlCvAe8nAasSU4tlAL0Ry%2FwArWS8Qvrk0pyzWHPmRI1aoZaMCYiXBDD4&X-Amz-Signature=e1f8f2fc257f528917a9020ac032daaa2a4b5754f0385fb3d980fb33fe1b9c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3POM73W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUOQdAowxGA8OjIBZDGbYKLlfsu6YN8QW6DfEDjd1E6AiANuxRJshhyw9uCc8uKV%2BW0B%2F8lLScohyuDTukdLHHY1yr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMsAm2Ps46msRG9wVSKtwDCiunki3O4NuvltiAkoYxyRoC5ECIkjalFda6ZzT%2FhUuoaRaKNCdWW%2FxTOaDiszpbL22d3h4ZJW9HX8jQFzcK3hM303ihrUzfSyXQKd3baNJlxKRgY1kvESZTpPDaIYEXHLLpKg8uQv8wyFUXtDvm%2BoB2VsE0t3iJwMtTRanZA7nWcDmHtB8tehkP4K4Icp0Od9PfoZ3YH4FvpnFi46j69V9P6ZNK6v%2Fx3YPYIfmpa39g5XkapA5zMNJOtDixofC%2BEsAOMYtdpZg3Xk0wMXUSF0p48eGERrZMMaNfudwbrTMnNVJbvnpCVK7zlvZP2lSsofRsUnNF5UGUm9SC35xI%2BvYdE21%2BwV0sZElT2DZqKi7l2LU3CGUMRdkkO4HHEFBRQdyh2AnlKWIryi64xkMC63qSNpkN5gm9F9hTkuXMmJ95OeU%2FJnK6PYDLDC%2Brk9oJX9luJ0nmWnYySiqHX8iajNdmRi9F2KlVRU1596Mt7h%2Bx8Rop4tBM2sjk6FJ869xLG1GLx%2FG%2B3jk1l1RmgBYVguEMLzF47CGwducz6XlwQbTfFCcYeIsdzKF0W66FXoswu5Oe19NlWSI7vChSmlAF6i0JMzQYX6%2FSXjiZqkvkKLd%2F8RyaXY65U47a0ecw052JygY6pgH56%2Bmsw6saqJ2cx3jLQ1o2rjljiqlib8jGb5MqVg%2FWxxyNZA3faGiBh%2F3eaV0fAENJrH0OgaA76f86xF9fj7q1cGlXJUqiO%2BJ9wt49gsPLMkPfo91Uq87OO0nTpUwoxkyurzGC26QTB0wnXs5dHa1kZjSsvo1ZQdJ%2B%2FoSHdlCvAe8nAasSU4tlAL0Ry%2FwArWS8Qvrk0pyzWHPmRI1aoZaMCYiXBDD4&X-Amz-Signature=17f9b3a6800155d345925f3e7c32e5475564df6ace0b084cc3ce240948d53652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

