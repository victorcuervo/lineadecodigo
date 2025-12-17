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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTRFEMA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4CW5jvbNyqpt1PT16f8lLRRJl9ZQpLFyiJUxyr33PkAiEAu3epSUHis2ugVd4gcwwA8aBBslsY%2BdAJ7LyIwNUqCcQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPHah%2F9HUeuzvafe7SrcAzpR4Iz7CxqfJCIG0l25TAwabv7Asd2TBuvuuTdv%2F5VCQPuUyB6zg9%2BDv3q3mX8d749N7ntEw19jSJ9XDjkI1RYDBSpT9YNGhm5Fz4HhYqEs5OjK8ZVUoQO%2BvwVVY7bllos7kWgcnv3H5VQcY2BXSdZLp0pFd6IoQ9q8%2FPQxrvLF2vJwBs%2BQEXGy0rKoPz42LzQaRAkUmOXQxEs2UaSd3VbzpTjqHwmjD3lHgLgexbIPNVRBfDUSE0Civ%2Bf6WnmgYj1S5oJRbor5S1O83B%2BeVjF%2F%2FMjbfcUjutZ4S9w3Rl43PQbk1ZYBl6JbqfmuNj%2BTCN8ENBSLSrTS1ErGoIg2RPF6MyYUJ42u9WvodbmcZImSKsCL1X9DsExHxr44oS7lNazcIkQ5Yb0k34jwKvALAQbY7vKtswoCLTaNZA4iOOM5cd1pWMO%2B3af8B8gC9IPchXt7El6pvjZfGhDjRX%2BLiCG5hXXUKWdEygTJC9BkOPUppoc8G%2FJE6I9yLpVGQeeTgalkGgiEamS79rfqAfvoaDyoNelL0EoGob3uwX8ueX4SwbFDw%2FdTGOL%2FVx5IGBb0dT0vdOQE64u1RIN59PbosA%2B7hYU5BgUtZFu4DN9U4nCEQDD3rUppq3yedkoqMLvOiMoGOqUBNcLW60da4qDAHDvuy5eoxjueSgkZmPM8TPklG0LmvybWZ1w%2FF0MeZdvBYNz9Ig%2B%2B34rmrFcwy7H4P9M9HXcLNrNNq2R1RzeJghtS4Qo47LjrlxnOvLpohSbLZgweaaCShrKUjKbbffdd0i2ss3e0RXPYTCWVOetHY2AjpN8OGlkZrfuChS9BWWUT4A0a%2FiD1RUdA4qoY%2BX9AHzzGIi%2FTldvI%2Fsqb&X-Amz-Signature=d6eda109161a2b8d23026b2d9c8caa46f5b0c0c3837f7ac8b80a373d59e902dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTRFEMA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4CW5jvbNyqpt1PT16f8lLRRJl9ZQpLFyiJUxyr33PkAiEAu3epSUHis2ugVd4gcwwA8aBBslsY%2BdAJ7LyIwNUqCcQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPHah%2F9HUeuzvafe7SrcAzpR4Iz7CxqfJCIG0l25TAwabv7Asd2TBuvuuTdv%2F5VCQPuUyB6zg9%2BDv3q3mX8d749N7ntEw19jSJ9XDjkI1RYDBSpT9YNGhm5Fz4HhYqEs5OjK8ZVUoQO%2BvwVVY7bllos7kWgcnv3H5VQcY2BXSdZLp0pFd6IoQ9q8%2FPQxrvLF2vJwBs%2BQEXGy0rKoPz42LzQaRAkUmOXQxEs2UaSd3VbzpTjqHwmjD3lHgLgexbIPNVRBfDUSE0Civ%2Bf6WnmgYj1S5oJRbor5S1O83B%2BeVjF%2F%2FMjbfcUjutZ4S9w3Rl43PQbk1ZYBl6JbqfmuNj%2BTCN8ENBSLSrTS1ErGoIg2RPF6MyYUJ42u9WvodbmcZImSKsCL1X9DsExHxr44oS7lNazcIkQ5Yb0k34jwKvALAQbY7vKtswoCLTaNZA4iOOM5cd1pWMO%2B3af8B8gC9IPchXt7El6pvjZfGhDjRX%2BLiCG5hXXUKWdEygTJC9BkOPUppoc8G%2FJE6I9yLpVGQeeTgalkGgiEamS79rfqAfvoaDyoNelL0EoGob3uwX8ueX4SwbFDw%2FdTGOL%2FVx5IGBb0dT0vdOQE64u1RIN59PbosA%2B7hYU5BgUtZFu4DN9U4nCEQDD3rUppq3yedkoqMLvOiMoGOqUBNcLW60da4qDAHDvuy5eoxjueSgkZmPM8TPklG0LmvybWZ1w%2FF0MeZdvBYNz9Ig%2B%2B34rmrFcwy7H4P9M9HXcLNrNNq2R1RzeJghtS4Qo47LjrlxnOvLpohSbLZgweaaCShrKUjKbbffdd0i2ss3e0RXPYTCWVOetHY2AjpN8OGlkZrfuChS9BWWUT4A0a%2FiD1RUdA4qoY%2BX9AHzzGIi%2FTldvI%2Fsqb&X-Amz-Signature=3d3b2f81cca6bb407779ed5230cf54350af10333f069518824298dc83f675499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

