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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOOHXNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAso6r16IeCMfXrqwmHhZeIi4WM9CpBzduyrhOHKM3uxAiAPTBP6Dm907cyV2nqAqdaVGBUXbOMv%2B2BgqKwFH00eeyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHE7Iz%2BnkR1wh4xjbKtwD3EIJXT31biKshb2s1%2BRwyj2MCT16qMFO8fzafJCGBe%2BLhjOzFPdc%2FiF7AV%2BZDa1f2xguIWXpfSW2xi9xF4w7gVKOIhfnfD3fNjfPZ48lqBk1chixuz6Gw6tUmLc09MOOQEzSqfn5QLJsbzqVBWVKXvO2S6U%2BqgIMviVadNBG%2FI3mcK7wb5yNGqfLXmjR9pNnpl10W%2FAGyHyWNf%2BR93%2FFtI9VuEcuQb0O%2B%2BTNnwAiI160JKRd66qA2UwnAiu40eNaiIq3vr3hSLms6cVQZ0QlvyaR1EzgvyE8o%2BCV%2BvPO%2F%2FG21LTlNhqixsQB2zk%2FKmeILLF3htN06S2dmuJ4P2Yw4UdW9%2Fl9QMtraxS2gv9SM1FJaZLDo9iZTQeCADdFTaS%2FllL7EYXCr9TX8KMSU008P%2Bl1IERVe8tbewHgwpxxVPlrRhUGMs8md9mEVT%2BWx0HuujIwXXPADolJ0FIGY%2Fq0vIGSyvBLMi8OeTdVP%2B8H0tbdK%2FSxyVbgnod%2FI4o9cs0iQ11RAwiYhQ6jyvd13W6bVeWZGYfJQOurxYi4PoG6%2B2TjfhQ2064LvzlT7TNzqzX7XhfHpI7QZnFIa32cfEcGK%2FAYvGtsilZ04jTUa3A62qf1C1llr84DBGpG%2Br4w0Z%2BLygY6pgFzsjuna3QO50UjkwPS6vXyCywSm5Zr8giVRG6R6R%2BNRHW2quukiUgi%2FVzB0bvtaLS6ITOiVZildZlMMy2gLocyOGjHyK%2B7cw%2FEsXJc%2BGBwE7yfO4JB3%2Bmwe6e3VzZi5PApZXO3ADWAwnzIENMC%2BmQSayYceFe86FfkB7qxy8mqWTth7FQInKAx1ej5l3N%2Fkn9GH0FnO1sIN%2BzwmrCpnJ9SdqKennxC&X-Amz-Signature=3a934218742db98a97357fdf7d139c42e0ef5363404a2361c588dc2a666b5f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOOHXNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAso6r16IeCMfXrqwmHhZeIi4WM9CpBzduyrhOHKM3uxAiAPTBP6Dm907cyV2nqAqdaVGBUXbOMv%2B2BgqKwFH00eeyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHE7Iz%2BnkR1wh4xjbKtwD3EIJXT31biKshb2s1%2BRwyj2MCT16qMFO8fzafJCGBe%2BLhjOzFPdc%2FiF7AV%2BZDa1f2xguIWXpfSW2xi9xF4w7gVKOIhfnfD3fNjfPZ48lqBk1chixuz6Gw6tUmLc09MOOQEzSqfn5QLJsbzqVBWVKXvO2S6U%2BqgIMviVadNBG%2FI3mcK7wb5yNGqfLXmjR9pNnpl10W%2FAGyHyWNf%2BR93%2FFtI9VuEcuQb0O%2B%2BTNnwAiI160JKRd66qA2UwnAiu40eNaiIq3vr3hSLms6cVQZ0QlvyaR1EzgvyE8o%2BCV%2BvPO%2F%2FG21LTlNhqixsQB2zk%2FKmeILLF3htN06S2dmuJ4P2Yw4UdW9%2Fl9QMtraxS2gv9SM1FJaZLDo9iZTQeCADdFTaS%2FllL7EYXCr9TX8KMSU008P%2Bl1IERVe8tbewHgwpxxVPlrRhUGMs8md9mEVT%2BWx0HuujIwXXPADolJ0FIGY%2Fq0vIGSyvBLMi8OeTdVP%2B8H0tbdK%2FSxyVbgnod%2FI4o9cs0iQ11RAwiYhQ6jyvd13W6bVeWZGYfJQOurxYi4PoG6%2B2TjfhQ2064LvzlT7TNzqzX7XhfHpI7QZnFIa32cfEcGK%2FAYvGtsilZ04jTUa3A62qf1C1llr84DBGpG%2Br4w0Z%2BLygY6pgFzsjuna3QO50UjkwPS6vXyCywSm5Zr8giVRG6R6R%2BNRHW2quukiUgi%2FVzB0bvtaLS6ITOiVZildZlMMy2gLocyOGjHyK%2B7cw%2FEsXJc%2BGBwE7yfO4JB3%2Bmwe6e3VzZi5PApZXO3ADWAwnzIENMC%2BmQSayYceFe86FfkB7qxy8mqWTth7FQInKAx1ej5l3N%2Fkn9GH0FnO1sIN%2BzwmrCpnJ9SdqKennxC&X-Amz-Signature=bed87b23e7dc4071062fe68d2809672061dd0099cd530153ea1a827ce6f40c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

