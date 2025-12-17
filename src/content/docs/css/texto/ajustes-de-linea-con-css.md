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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7N2B2FC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6krB4qLilcVVBsgVonYDWflHjMi2Z0F0Dq4kwuHWXPAIhAKOh2fQ0jl%2BxigRN4PRgwnmtYGA5Rv%2B1%2F22sNS6lOLclKv8DCHMQABoMNjM3NDIzMTgzODA1Igx7MQpUhvBp7bkBDOcq3APtuvCjItHObf4%2FjjEukzV56m2v%2BHJ7CdyUbMh5y8Lu0BGByNzSpqPy4euXeKHSvML6aPNU1sJCKTZRsLj3hcv5X7AukLD2HfrFzISfiyC1CgA%2BwBu2QY%2B6phmoM%2BRNM9hz2wd7mDQGrFgkbbrn8IkpvLmASLLCOApG%2BxkHF2bd1booTIH%2Fmu4sNo8ZwEFx95oY%2FZoQUwAguZSRn1Rc1YhbpHCui0Au%2B%2Faxtz1ZyeLWpzoeOywyCIj4%2BBhDHFYkX6sma0ITFMbIh%2BALsKlTYQ1FCkQ%2F%2BZq0n9vimKRk%2B8%2BukuXFQegsQjxUgbLrmIsvv6jzg8FqBzbXmFUzGjhIvRVubwqVWulEMpzwoJKgUG2TnpuILRT7nln5jY7C5U0c48MujHS%2BRHZQOC7p5clArUABwb7MK%2Bl5pile9nffIF1aq1SDiH7kGrIP6p0Rxu7NL1MUTkff8FBF2i22u71OZ6gORNDH0cejPRO0x0U8CqIS8C%2FsqHpKKmUmIpmTvj%2BqrXtchXagAL0V%2Fil5YA5ImgnY7FxX2Bikb5OchqTvnicjr9V5EIlNNDP1SFLUk13nrh0bnlem6NhYeD5Ljc8Ykl9NT2G3Z04RQu13MXlTMkTGdx%2BKH5fmgoNq8CEzYTCvmIjKBjqkAVY%2BZArbTmFy1RkuL%2B0YZ0xeg%2FLhAzcOMneFY8EUGElPvHCZGTNw1krrxX9ffubu93saXrsjMYcGI0CrGkmSE9Ksn%2FsI62OSpJnstoQB2Y8JDvyeiDN7LNSoCLnA86MONL9hMx5Z3JL4RCRGfTtJc%2FeVDTr9PDjPvJEReo2QwL6q89hMj9vY2KinvBfKXdKaY0Q4ydCzdYWrn7zM8eLmpXl1lJRs&X-Amz-Signature=e59a6734ff97c314a4c5678986588f83abc6163e3dbbdfd4d48cb171135a8362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7N2B2FC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6krB4qLilcVVBsgVonYDWflHjMi2Z0F0Dq4kwuHWXPAIhAKOh2fQ0jl%2BxigRN4PRgwnmtYGA5Rv%2B1%2F22sNS6lOLclKv8DCHMQABoMNjM3NDIzMTgzODA1Igx7MQpUhvBp7bkBDOcq3APtuvCjItHObf4%2FjjEukzV56m2v%2BHJ7CdyUbMh5y8Lu0BGByNzSpqPy4euXeKHSvML6aPNU1sJCKTZRsLj3hcv5X7AukLD2HfrFzISfiyC1CgA%2BwBu2QY%2B6phmoM%2BRNM9hz2wd7mDQGrFgkbbrn8IkpvLmASLLCOApG%2BxkHF2bd1booTIH%2Fmu4sNo8ZwEFx95oY%2FZoQUwAguZSRn1Rc1YhbpHCui0Au%2B%2Faxtz1ZyeLWpzoeOywyCIj4%2BBhDHFYkX6sma0ITFMbIh%2BALsKlTYQ1FCkQ%2F%2BZq0n9vimKRk%2B8%2BukuXFQegsQjxUgbLrmIsvv6jzg8FqBzbXmFUzGjhIvRVubwqVWulEMpzwoJKgUG2TnpuILRT7nln5jY7C5U0c48MujHS%2BRHZQOC7p5clArUABwb7MK%2Bl5pile9nffIF1aq1SDiH7kGrIP6p0Rxu7NL1MUTkff8FBF2i22u71OZ6gORNDH0cejPRO0x0U8CqIS8C%2FsqHpKKmUmIpmTvj%2BqrXtchXagAL0V%2Fil5YA5ImgnY7FxX2Bikb5OchqTvnicjr9V5EIlNNDP1SFLUk13nrh0bnlem6NhYeD5Ljc8Ykl9NT2G3Z04RQu13MXlTMkTGdx%2BKH5fmgoNq8CEzYTCvmIjKBjqkAVY%2BZArbTmFy1RkuL%2B0YZ0xeg%2FLhAzcOMneFY8EUGElPvHCZGTNw1krrxX9ffubu93saXrsjMYcGI0CrGkmSE9Ksn%2FsI62OSpJnstoQB2Y8JDvyeiDN7LNSoCLnA86MONL9hMx5Z3JL4RCRGfTtJc%2FeVDTr9PDjPvJEReo2QwL6q89hMj9vY2KinvBfKXdKaY0Q4ydCzdYWrn7zM8eLmpXl1lJRs&X-Amz-Signature=fd4a3ff6053c4d3020db7a7d8871dae13c709d3142ac90f13c770bb18fc701bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

