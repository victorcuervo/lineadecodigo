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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVRWIAZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvzjRnsXukW3WbljyKWUG7WBqLOJc%2F8m3Y2jEI86h22AiEAmx2uR2%2BF9j8z9qH3TppIprIPrZKCy3A9kgGOW5jKNK0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFkx03ukw4gx8yoWPSrcA7cGQ%2FLg9RUergw8vGSvHlPhN7f1DE78kYCA2arcfx0N0ZPZJgIUiuy4MxXQygyZoH5cfIHc%2FPeV5%2FeFMCZJZsgQMKlh03F7HmJt2NAegA%2Fut0T9MdqKNn5PuL8Cqvi0bhmrIW0cFacniPBJN8AJIcChTR1xd4hRMfE5QFC%2BXWYQYDkN%2F%2FthB8uy6OfUgZxS0JrpCpuJ7I3Dr6VFkk%2F5Fj3KgIS3DiB842Texi3mHOXMYMvM%2BSYZfUDdjdvsCNVCr2gSLT%2FZaSPae8mFZazS8IKMxRHgVEOQgQySeO2vtHCPwgTbFNlwCVgYGRtxl5DKZ90SUg3x%2Blo4cwPwCbBCWVyzigzypiWdcGpNidDFhfkLihsRkSIQKKQYjhkEE1qzZmFApGOJgW0IT0cy7wIDBJVB2jwnT%2FUlbnG6Dak7EvwL%2B0d8Mw%2FVKJU5UTvvQ%2FOlVnATdIv%2FF7NpWFEDGputrslOGFsZuoQPNpXtSeRKPEJvPq%2FXYx%2BKyShPwirRCaYLY%2BjpcLagIRmmJ%2FBSfp13K3%2FPcwZxC4OFXZ3cIsk6cryRH1%2BHyaMznh%2BbZCyX4tIjhH0ur8boOyzInJowYjghxCBNvuSuVpf%2BEBYpYn1TtiXvnO83yqrLc0fD6u0YMJiDicoGOqUBJXd5CL694ATgsCoEZn8yQ92ThLRHpFWqndHxs4fA2VEfqVN3yABvL0Rs039n5KfbJgcr5WXVCj86ZxOLX2L2jgUoD2rDueCQLLz7%2Bhfev%2BldFBfy%2FASPl%2FlaTxJscw9fJA8rYf6eINLZAJhG71369xhoZwk2pAns0g84VTIamkd%2FR60ovnj2Fsv18lgSz3rAcRHD5PrPcBrlKUp7UFrijt64mheU&X-Amz-Signature=789d0ce9d16fa85012f7fe488c4d1c8c5862d2d3222552918caddc9991e867ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVRWIAZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvzjRnsXukW3WbljyKWUG7WBqLOJc%2F8m3Y2jEI86h22AiEAmx2uR2%2BF9j8z9qH3TppIprIPrZKCy3A9kgGOW5jKNK0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFkx03ukw4gx8yoWPSrcA7cGQ%2FLg9RUergw8vGSvHlPhN7f1DE78kYCA2arcfx0N0ZPZJgIUiuy4MxXQygyZoH5cfIHc%2FPeV5%2FeFMCZJZsgQMKlh03F7HmJt2NAegA%2Fut0T9MdqKNn5PuL8Cqvi0bhmrIW0cFacniPBJN8AJIcChTR1xd4hRMfE5QFC%2BXWYQYDkN%2F%2FthB8uy6OfUgZxS0JrpCpuJ7I3Dr6VFkk%2F5Fj3KgIS3DiB842Texi3mHOXMYMvM%2BSYZfUDdjdvsCNVCr2gSLT%2FZaSPae8mFZazS8IKMxRHgVEOQgQySeO2vtHCPwgTbFNlwCVgYGRtxl5DKZ90SUg3x%2Blo4cwPwCbBCWVyzigzypiWdcGpNidDFhfkLihsRkSIQKKQYjhkEE1qzZmFApGOJgW0IT0cy7wIDBJVB2jwnT%2FUlbnG6Dak7EvwL%2B0d8Mw%2FVKJU5UTvvQ%2FOlVnATdIv%2FF7NpWFEDGputrslOGFsZuoQPNpXtSeRKPEJvPq%2FXYx%2BKyShPwirRCaYLY%2BjpcLagIRmmJ%2FBSfp13K3%2FPcwZxC4OFXZ3cIsk6cryRH1%2BHyaMznh%2BbZCyX4tIjhH0ur8boOyzInJowYjghxCBNvuSuVpf%2BEBYpYn1TtiXvnO83yqrLc0fD6u0YMJiDicoGOqUBJXd5CL694ATgsCoEZn8yQ92ThLRHpFWqndHxs4fA2VEfqVN3yABvL0Rs039n5KfbJgcr5WXVCj86ZxOLX2L2jgUoD2rDueCQLLz7%2Bhfev%2BldFBfy%2FASPl%2FlaTxJscw9fJA8rYf6eINLZAJhG71369xhoZwk2pAns0g84VTIamkd%2FR60ovnj2Fsv18lgSz3rAcRHD5PrPcBrlKUp7UFrijt64mheU&X-Amz-Signature=f3bf64b746d882cc5d65a7f465f4207d6579362a7b2369085372ff5492333f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

