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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UICGEW2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsL6qWfIEAnm1VEHLzCqgOR0Nr7rTaGJHJRNlaHSUTPAiEAogQImASTwKpAAiLd7rly4xrxf%2Bv2rCW2CE4DhRcUgqsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLWbhEnbLFKdF6%2B6qSrcA53fju%2Bmzm4ghVPrKuzo1xlVckzL8jJ6T81UZTRA7N%2B2uiRHhg6SB9B0PkwQyvyfLgG%2FmrUbBRbPJmzH87TgnsGR9aUu%2F0tqKm85YoEpbVJSfq5beGOTZKKuB7RloQT0Ov0LC%2FsfRBbJ1qP3639V6KvnUUaasRDGV5qdkkn3%2BYE5MXyu%2FCCxA%2BYAjyBKqxbl1iGB2hH0WY9YYBk06PvVaeb1EVM12F%2F0mIZIzpSlLYgHTdRSceWQAfr4BNT24sAx5OYJfyctWJV3YtMVviZE2y29SGdm1yAVFNbLVqhyVQwBIwijyrsngnLNgXqkM4HONGM3c3TtBDWrlgb1ykLzRb0oyq7H8jUsvSnr9ltx%2FdOenQ4%2BSrrrY8TvW3bQlmSaAAw5qEMrUbuo0wUDFNIPyrS7YevVGs2I0w1aR28SAUsM%2F1Tz9pSBY2ikX9EZET5H5gkgEKMO2YtseGg3WIuk7cYvegrbQrzApC2KpI4H%2B1zUgG6cAHf%2BJr3BZWq8MzVBdLRAf8rxwWKm9VENskizavTfJBCidNpUWE8GqYsQMUDAfkA5mHftFiuH7r3x%2FtGc5Xp8Gc%2FTnXY%2B3rFEJdMftsA0x17Xe0foRgRLCRSbFNyYmrNx5oAN6%2ByCk9zTMMadicoGOqUB2WgpmCWDxyeYOFFMVGjShoXDkapMtPCvMVBukiAF13DXweUafnvSeycm7qZscouS9Ide5pe8nOfeDCmRMJlnbs3VH3tdeopA9Fuoi4qV3NpdSJKEeqZwIJdrLRim6MY7LZA4xwuMkHeqIpZJLjIHZdpHPMDEaoRePsVpZZt6hpcb9L65gmLLRX2Cg7qU7QJy9OPhVPmzBfimDW0rpQ4%2BupAnSIHw&X-Amz-Signature=8c66bf424e10c9cdd4ac24388306cc3ccd90a83baa6246b3ffab78da177360ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UICGEW2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsL6qWfIEAnm1VEHLzCqgOR0Nr7rTaGJHJRNlaHSUTPAiEAogQImASTwKpAAiLd7rly4xrxf%2Bv2rCW2CE4DhRcUgqsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLWbhEnbLFKdF6%2B6qSrcA53fju%2Bmzm4ghVPrKuzo1xlVckzL8jJ6T81UZTRA7N%2B2uiRHhg6SB9B0PkwQyvyfLgG%2FmrUbBRbPJmzH87TgnsGR9aUu%2F0tqKm85YoEpbVJSfq5beGOTZKKuB7RloQT0Ov0LC%2FsfRBbJ1qP3639V6KvnUUaasRDGV5qdkkn3%2BYE5MXyu%2FCCxA%2BYAjyBKqxbl1iGB2hH0WY9YYBk06PvVaeb1EVM12F%2F0mIZIzpSlLYgHTdRSceWQAfr4BNT24sAx5OYJfyctWJV3YtMVviZE2y29SGdm1yAVFNbLVqhyVQwBIwijyrsngnLNgXqkM4HONGM3c3TtBDWrlgb1ykLzRb0oyq7H8jUsvSnr9ltx%2FdOenQ4%2BSrrrY8TvW3bQlmSaAAw5qEMrUbuo0wUDFNIPyrS7YevVGs2I0w1aR28SAUsM%2F1Tz9pSBY2ikX9EZET5H5gkgEKMO2YtseGg3WIuk7cYvegrbQrzApC2KpI4H%2B1zUgG6cAHf%2BJr3BZWq8MzVBdLRAf8rxwWKm9VENskizavTfJBCidNpUWE8GqYsQMUDAfkA5mHftFiuH7r3x%2FtGc5Xp8Gc%2FTnXY%2B3rFEJdMftsA0x17Xe0foRgRLCRSbFNyYmrNx5oAN6%2ByCk9zTMMadicoGOqUB2WgpmCWDxyeYOFFMVGjShoXDkapMtPCvMVBukiAF13DXweUafnvSeycm7qZscouS9Ide5pe8nOfeDCmRMJlnbs3VH3tdeopA9Fuoi4qV3NpdSJKEeqZwIJdrLRim6MY7LZA4xwuMkHeqIpZJLjIHZdpHPMDEaoRePsVpZZt6hpcb9L65gmLLRX2Cg7qU7QJy9OPhVPmzBfimDW0rpQ4%2BupAnSIHw&X-Amz-Signature=5834d909a52c52108a887f3efc6afc21ae2f1fc2ecd3690f2fb7d2fedd57c610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

