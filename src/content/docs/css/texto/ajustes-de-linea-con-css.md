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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X3V43A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwYe6T6fb%2FfP0A7bJs9%2F26k9piUkQFZMuE18jXjcNEoAiEA5S9rJ6LjaY8ZWnaiKCR%2FgAqXJgD7iLpXF6sdMwXyGtcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGPzLh%2BQ3yv1hyr0LCrcA%2Bg%2FKXAfovdX%2BbkBjP2JeTGcwRDdR1GodNLqT9zPVtWOxIAKe5FFqS1jDJOavX3bwIfVrZ77Xi%2FH7v1v%2FnwCArwbnamVOEd6vHS2dt9L6fvGM%2FTWk7B8SPsx%2Frd5yvUS86MlrujAsWExOtEQ9Ft0YtgjnEEt0jYNSjEwf4CoekrBnqlPLb3ttJWCVKl6p9G3BsMNSY5VVvnM5E8r2MOLMZIaeIFEFENVMigV97FVgHXrCiWLdOYoQXyRhz72k%2BVtj1F5OcTozyF9FyOpOy24GrmGAIT42S5NTbg9syYAHky1M17zQS9OFX3d87PTMlk9X6zcM28bWy5L8mWj6Q4wbMZu4M%2Bu1PL2cy9m6JSRC6JnXp0jpsxiYC3I6SSyfRN5eSAA1EppjN%2BZLNrrBYS%2FsZ0kMZe7mq5F5EBlr7SlM%2Fgk0FVZ0Qjc%2FDYhY5dUL%2FOGo%2BKGm3z4TtLyuMhQNaOTJmddkqQr65NiHII5zEOug5gguaEINi24ZvSnYlb%2BZ8NiY01DnKQItTRykq8nL%2B6LClXjFIA8FbIDhEpLmWKyd3ve94haHXynxyNn39OalI3YBBqYEa%2BqbHEPFj3Dc10nXEzEgbZceiUeaJjAeJDVI0TlKXmcx5n471TBHzSaMIrRicoGOqUB4yDbAob5YmWcecesQRdC9jJE9NJOt8TPvFzIyU3B3nFP4O3b%2FucugL6w0T26Z%2F3Il28PsoVRcVcTdZ1%2BDgRo%2FyhD7YWdEUr58T6WDKO%2Frv5JpGDa0eMJ3pgtTn2HdvsUp%2F377gQubjbmcowvnu2hEyNQKTAAI11MqptnLH7IYfSUaRBZAKpBLGf0v%2Fz3LEQ6kbJSbMdWi8CXdPg2dLMMHzke0fZo&X-Amz-Signature=40a66ab7b81ebbb40f25215d37220c411f1244181a914b0eac4b1ee69d4bdc4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X3V43A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwYe6T6fb%2FfP0A7bJs9%2F26k9piUkQFZMuE18jXjcNEoAiEA5S9rJ6LjaY8ZWnaiKCR%2FgAqXJgD7iLpXF6sdMwXyGtcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGPzLh%2BQ3yv1hyr0LCrcA%2Bg%2FKXAfovdX%2BbkBjP2JeTGcwRDdR1GodNLqT9zPVtWOxIAKe5FFqS1jDJOavX3bwIfVrZ77Xi%2FH7v1v%2FnwCArwbnamVOEd6vHS2dt9L6fvGM%2FTWk7B8SPsx%2Frd5yvUS86MlrujAsWExOtEQ9Ft0YtgjnEEt0jYNSjEwf4CoekrBnqlPLb3ttJWCVKl6p9G3BsMNSY5VVvnM5E8r2MOLMZIaeIFEFENVMigV97FVgHXrCiWLdOYoQXyRhz72k%2BVtj1F5OcTozyF9FyOpOy24GrmGAIT42S5NTbg9syYAHky1M17zQS9OFX3d87PTMlk9X6zcM28bWy5L8mWj6Q4wbMZu4M%2Bu1PL2cy9m6JSRC6JnXp0jpsxiYC3I6SSyfRN5eSAA1EppjN%2BZLNrrBYS%2FsZ0kMZe7mq5F5EBlr7SlM%2Fgk0FVZ0Qjc%2FDYhY5dUL%2FOGo%2BKGm3z4TtLyuMhQNaOTJmddkqQr65NiHII5zEOug5gguaEINi24ZvSnYlb%2BZ8NiY01DnKQItTRykq8nL%2B6LClXjFIA8FbIDhEpLmWKyd3ve94haHXynxyNn39OalI3YBBqYEa%2BqbHEPFj3Dc10nXEzEgbZceiUeaJjAeJDVI0TlKXmcx5n471TBHzSaMIrRicoGOqUB4yDbAob5YmWcecesQRdC9jJE9NJOt8TPvFzIyU3B3nFP4O3b%2FucugL6w0T26Z%2F3Il28PsoVRcVcTdZ1%2BDgRo%2FyhD7YWdEUr58T6WDKO%2Frv5JpGDa0eMJ3pgtTn2HdvsUp%2F377gQubjbmcowvnu2hEyNQKTAAI11MqptnLH7IYfSUaRBZAKpBLGf0v%2Fz3LEQ6kbJSbMdWi8CXdPg2dLMMHzke0fZo&X-Amz-Signature=8fe641261e10339d5555f3dfcde5f8fd2ef8bded3d18d248313b87d616358eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

