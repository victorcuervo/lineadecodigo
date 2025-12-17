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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGBWSXP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs77V4HYwhZTTkbQw7ntjRAkkjcRco0kWjBjQs%2B8p2sAiAfuVb7QAYq6%2FUctPZYDlzGKuZJNxCStreY5gzlLaMXRSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMCCxqig2tqn%2BTKbbPKtwDeFZYx6lGzpsB7R9iAlzlkq7vpCmvBRjGfygjPSxr%2F4OQLb1yG8ANhjAI%2B3Qwo%2Bv2Xdgs3KebTKDsNW0OWLVlBmvsSZFu2BheLEmvDQB5Ua2DxaCkskai1c5VSBQq4zkLZUiijQaj3Etq9g44g%2Fkbz%2BXBxRgs8czLI%2FxcVGYQzn7gm%2BD5BQ9FKRMBN9vd2Ai7URvuW6o0b5ihaWrI1O6qRYhYD4DE8YOeeJgOtDGtkTTYNk2YhBUlGHFK1WMgpF1uBgXJjgPS39NESwjT0WYU8RE2d5UsC2T85G0zri57z7UefYp6F8KHh3eHWf%2BFVFISq6WAqDKu%2BZlbJzyVietuP4qxB%2Bqt4f5p3w4idX3O5FWjlbppFQwKWJnC4PtFkcUTRUbJgwvOn9qmqOCU4Km8INLAMK06A43sxy%2F65%2F2S%2F0fnPV9Sm3isa%2Fyr2uJMt%2BQU7fhE338Ll19StMzc43MV6Uc0oJEesbDWSMSh7zzo30NbJJrMkvfvoJkXaEN%2F5XKnIjGXSInazGa9FL3TblMZ7ZEvnO71Tcc0Ral2pHghhSaAkedoZY7JI5vIbKgf0BT7m3Zn4PNLlln7B5g9F0S%2FZoR2AUqh0cnlt30QRTorZ0gTdILXKSY5XvRjeQgw57GIygY6pgHvVFAIzt%2B56NgvkQh2aMMs1ROaOgBMx4VkGUeS1gkPW7r3BK0nvzTKp8xm0kOfCZzZwTqhZ8uSy94x3l050oPnexOnH8tl6W8BFKa31JCvBLegoTglAn0PIVFm91r94t9EjOXd17toAxoKV8qsAtpqffQufnsuRSqec1dNVqZi%2Bl6quwgjJxJ7KghxsgZxL2mkhfBQgQBwwDIHiwTziIalTNNm8kxf&X-Amz-Signature=8e1b722691bf846773475e1fda6a3fe75304ca4bb4ee217814e9f0953852c64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGBWSXP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs77V4HYwhZTTkbQw7ntjRAkkjcRco0kWjBjQs%2B8p2sAiAfuVb7QAYq6%2FUctPZYDlzGKuZJNxCStreY5gzlLaMXRSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMCCxqig2tqn%2BTKbbPKtwDeFZYx6lGzpsB7R9iAlzlkq7vpCmvBRjGfygjPSxr%2F4OQLb1yG8ANhjAI%2B3Qwo%2Bv2Xdgs3KebTKDsNW0OWLVlBmvsSZFu2BheLEmvDQB5Ua2DxaCkskai1c5VSBQq4zkLZUiijQaj3Etq9g44g%2Fkbz%2BXBxRgs8czLI%2FxcVGYQzn7gm%2BD5BQ9FKRMBN9vd2Ai7URvuW6o0b5ihaWrI1O6qRYhYD4DE8YOeeJgOtDGtkTTYNk2YhBUlGHFK1WMgpF1uBgXJjgPS39NESwjT0WYU8RE2d5UsC2T85G0zri57z7UefYp6F8KHh3eHWf%2BFVFISq6WAqDKu%2BZlbJzyVietuP4qxB%2Bqt4f5p3w4idX3O5FWjlbppFQwKWJnC4PtFkcUTRUbJgwvOn9qmqOCU4Km8INLAMK06A43sxy%2F65%2F2S%2F0fnPV9Sm3isa%2Fyr2uJMt%2BQU7fhE338Ll19StMzc43MV6Uc0oJEesbDWSMSh7zzo30NbJJrMkvfvoJkXaEN%2F5XKnIjGXSInazGa9FL3TblMZ7ZEvnO71Tcc0Ral2pHghhSaAkedoZY7JI5vIbKgf0BT7m3Zn4PNLlln7B5g9F0S%2FZoR2AUqh0cnlt30QRTorZ0gTdILXKSY5XvRjeQgw57GIygY6pgHvVFAIzt%2B56NgvkQh2aMMs1ROaOgBMx4VkGUeS1gkPW7r3BK0nvzTKp8xm0kOfCZzZwTqhZ8uSy94x3l050oPnexOnH8tl6W8BFKa31JCvBLegoTglAn0PIVFm91r94t9EjOXd17toAxoKV8qsAtpqffQufnsuRSqec1dNVqZi%2Bl6quwgjJxJ7KghxsgZxL2mkhfBQgQBwwDIHiwTziIalTNNm8kxf&X-Amz-Signature=0efdd470960e05241f7c477411dc4575d0c820225c83dd58024f2af1954ec5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

