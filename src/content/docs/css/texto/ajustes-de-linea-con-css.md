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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZFW26G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC408Vb%2BUwRYlpuh7gaMW0rG674JcKCtjUKp8RmME2R9AIgVuUu95Da7w9Wi95AlTXryAf5SzxRGkgDPXijJwFUGeYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE75R3p2NyKHSJ1BKircA6z6Xos9Lnj7MJQHBFUFMbYtPPlCEIcdYInxKu8d8KLsi89R9fQDOwmyF%2BuELpQDrbYZE70HOTxTMKN%2FpZ9ASskFwUhFaN46MzpG3BosCETmvrQ4d8dbZWeOZI3rs5Nk1KRrs1XYw%2B67NgTznh6HUHwSr6HRNzo56MxLQRAWiEu04j4S9bmEvH2a4qRYyMwNUiOrNFylsDkRT0NzyGiRElK%2FBirU%2BhgkQvczuCe9hAy8HTPiVay7limf0%2B8F1Z1mnUZzVNzYRgQ6fM%2Fq%2Fjc%2FsholHj0ZSvowfPfotZufGWCGO9yeZ8dsyeOs%2FQ%2FFsQ72AIhVzr1UX66MZl3pte06MSEl59N%2FNvrL3We3hBtLX%2B1DY7o4p8SmGekTvy%2BXH1BCc0pfXUt7IXmcGOWEeYzW32Oc%2FaJ5DvfnATdK1kV3%2FcYyiSWoWFOcRerOjTFECBDtzXFLeJNppQjdP7Q%2F1wlM90P6hL4A%2Fe73eANeSa8gj8yDeuht5NcWQxnvBRhRioUZb%2By9wix0nSnshZ3%2BMK3F5a1F3PZjWZEs8eMup%2BaNxd1n4W1IXFHZyTlBseLlpy%2Fzo16zHLXDPS0nMyLJLQq8hBVHmwo7bCjJsQADgFsN8X50T%2FpjvSEOfzvSWhUgMNXhisoGOqUBD9ePUzy%2BGJNEci78jg6luTGTCoMOb88FYXlMpK77P6HG8oILQ3%2FuBgyb3Qipfta0WnlzDq7%2BGUt9yr8lPDOY98%2F1zwZ2GjpqoQVj2E99Iym%2BxbbPj8rTCnSdrVuQjmm%2BpVUPGbpRi30eWgCxbXB1m%2BDi7IH%2BVHWo240Sma%2FlyqlIESJtiXUbuv5gMNwvfDtgY0Kjf8fqs5FMzJgmSAlxKFCxMmFu&X-Amz-Signature=c0fa422374d471396c545fd75c22a18e404ccd8f3b1bf44844c7d57b501460f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZFW26G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC408Vb%2BUwRYlpuh7gaMW0rG674JcKCtjUKp8RmME2R9AIgVuUu95Da7w9Wi95AlTXryAf5SzxRGkgDPXijJwFUGeYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE75R3p2NyKHSJ1BKircA6z6Xos9Lnj7MJQHBFUFMbYtPPlCEIcdYInxKu8d8KLsi89R9fQDOwmyF%2BuELpQDrbYZE70HOTxTMKN%2FpZ9ASskFwUhFaN46MzpG3BosCETmvrQ4d8dbZWeOZI3rs5Nk1KRrs1XYw%2B67NgTznh6HUHwSr6HRNzo56MxLQRAWiEu04j4S9bmEvH2a4qRYyMwNUiOrNFylsDkRT0NzyGiRElK%2FBirU%2BhgkQvczuCe9hAy8HTPiVay7limf0%2B8F1Z1mnUZzVNzYRgQ6fM%2Fq%2Fjc%2FsholHj0ZSvowfPfotZufGWCGO9yeZ8dsyeOs%2FQ%2FFsQ72AIhVzr1UX66MZl3pte06MSEl59N%2FNvrL3We3hBtLX%2B1DY7o4p8SmGekTvy%2BXH1BCc0pfXUt7IXmcGOWEeYzW32Oc%2FaJ5DvfnATdK1kV3%2FcYyiSWoWFOcRerOjTFECBDtzXFLeJNppQjdP7Q%2F1wlM90P6hL4A%2Fe73eANeSa8gj8yDeuht5NcWQxnvBRhRioUZb%2By9wix0nSnshZ3%2BMK3F5a1F3PZjWZEs8eMup%2BaNxd1n4W1IXFHZyTlBseLlpy%2Fzo16zHLXDPS0nMyLJLQq8hBVHmwo7bCjJsQADgFsN8X50T%2FpjvSEOfzvSWhUgMNXhisoGOqUBD9ePUzy%2BGJNEci78jg6luTGTCoMOb88FYXlMpK77P6HG8oILQ3%2FuBgyb3Qipfta0WnlzDq7%2BGUt9yr8lPDOY98%2F1zwZ2GjpqoQVj2E99Iym%2BxbbPj8rTCnSdrVuQjmm%2BpVUPGbpRi30eWgCxbXB1m%2BDi7IH%2BVHWo240Sma%2FlyqlIESJtiXUbuv5gMNwvfDtgY0Kjf8fqs5FMzJgmSAlxKFCxMmFu&X-Amz-Signature=59b62147e5c4869ed2df6bd495ba3308c7998d6fdbfe875e06419240d5e2f0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

