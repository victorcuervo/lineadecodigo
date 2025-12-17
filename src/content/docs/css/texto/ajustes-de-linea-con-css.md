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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMFYBKT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2nZhlQlqZCr3r43eRm3eU6Svy3CeaA9yjXOdPPWKsigIhAN5MPBlkUijcUwdWEFilYGdSbfqFQVqmuC2v%2BoZqcGWhKv8DCH0QABoMNjM3NDIzMTgzODA1Igx0Oy%2B0hJ4pqmnG9cQq3AP7lZ5TI4LsdxKOPYabHGI91nKJ304USPjBkwK0gsCZ4kOqQSG3Y%2FkULNuf3JNDJOA%2Fg9fvG8VZ47SvmGEl7j7a%2BPTIc4KUl1vXg3LFVHDq5CN3NAOceGtC480qWzaOsvV80mXO8Bc0benDs%2FiIRg11enDWln62BrVuv%2BZzspKQWnLmMTsN4JGgQKGnZeU8OVsLbgBePtsw6FCYY%2B%2FNTVMy60h7beeQUyGLASL3vW%2F2HjR4Kny8IJ%2F6S6nULiAhZIaHtpXunDaPYMkl2hsaMW32Zg6g4MhL0jKOcq0aO8%2FaaAFg6Ctjg6fD6QiQoM%2Bh2bE1LKx%2BkP%2FZvKd8wUX8Fiyh2tTkVZX%2FnPkvlqbDOVN9SkjXsbjY6YSc1njrPFhg5EVPV9gCYNPMktqNGHJaPC1ThZj%2BhmKjSpXV1pLLQLDmLSgejTPbLT6OGYIuo5jyw2YpJv5Xg9Oy0qVf3yZ4PFBFzMy%2FfoYaP9luC6fj42WIjk8Mb%2BVMxrSILfRnRw4UpjgHBnQrvSdWEDRBWdX7xcHDIYZ0dVENuyVj0d71ll9re%2BsSfo5D0FE7bsbhy87k00BsyhXEPVqSyk%2Bza5iO%2FadfaQ%2FBtKtX1AVughfacb2X7EURYsOfd8nf2B1C6DCZqorKBjqkAV4o7o9mI5ITJXyMRacPQrubIUK%2Ftk3NpMfkk%2BAkfTA1I3KKZTtxq1VY%2Fqbn%2BQXB%2FGFRS3%2FrA9EMEeE0VvKxRiTLBLtiMtlzMrcI1kvEpDICqLlQ%2FdENbm8pmBY2dE28A5ruIN%2BX%2FGc3xJJgYzLdFg1xYlkba45hec4lYqwXSzpkSbXFi4lZ%2BPcy2SZpS3BImHLLakwUikoR8ywsrOxeo4ep5Akj&X-Amz-Signature=35238bac532e4a7f2db2eb553048339344e88d44b5829b0e9d5d43248d070543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMFYBKT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2nZhlQlqZCr3r43eRm3eU6Svy3CeaA9yjXOdPPWKsigIhAN5MPBlkUijcUwdWEFilYGdSbfqFQVqmuC2v%2BoZqcGWhKv8DCH0QABoMNjM3NDIzMTgzODA1Igx0Oy%2B0hJ4pqmnG9cQq3AP7lZ5TI4LsdxKOPYabHGI91nKJ304USPjBkwK0gsCZ4kOqQSG3Y%2FkULNuf3JNDJOA%2Fg9fvG8VZ47SvmGEl7j7a%2BPTIc4KUl1vXg3LFVHDq5CN3NAOceGtC480qWzaOsvV80mXO8Bc0benDs%2FiIRg11enDWln62BrVuv%2BZzspKQWnLmMTsN4JGgQKGnZeU8OVsLbgBePtsw6FCYY%2B%2FNTVMy60h7beeQUyGLASL3vW%2F2HjR4Kny8IJ%2F6S6nULiAhZIaHtpXunDaPYMkl2hsaMW32Zg6g4MhL0jKOcq0aO8%2FaaAFg6Ctjg6fD6QiQoM%2Bh2bE1LKx%2BkP%2FZvKd8wUX8Fiyh2tTkVZX%2FnPkvlqbDOVN9SkjXsbjY6YSc1njrPFhg5EVPV9gCYNPMktqNGHJaPC1ThZj%2BhmKjSpXV1pLLQLDmLSgejTPbLT6OGYIuo5jyw2YpJv5Xg9Oy0qVf3yZ4PFBFzMy%2FfoYaP9luC6fj42WIjk8Mb%2BVMxrSILfRnRw4UpjgHBnQrvSdWEDRBWdX7xcHDIYZ0dVENuyVj0d71ll9re%2BsSfo5D0FE7bsbhy87k00BsyhXEPVqSyk%2Bza5iO%2FadfaQ%2FBtKtX1AVughfacb2X7EURYsOfd8nf2B1C6DCZqorKBjqkAV4o7o9mI5ITJXyMRacPQrubIUK%2Ftk3NpMfkk%2BAkfTA1I3KKZTtxq1VY%2Fqbn%2BQXB%2FGFRS3%2FrA9EMEeE0VvKxRiTLBLtiMtlzMrcI1kvEpDICqLlQ%2FdENbm8pmBY2dE28A5ruIN%2BX%2FGc3xJJgYzLdFg1xYlkba45hec4lYqwXSzpkSbXFi4lZ%2BPcy2SZpS3BImHLLakwUikoR8ywsrOxeo4ep5Akj&X-Amz-Signature=f8f0adcbe2296bbb4b49f456045edcdca0579f707041a0555d94859166e9856d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

