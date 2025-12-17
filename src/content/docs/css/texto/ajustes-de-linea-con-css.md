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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIS24S2F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxLzTUskQir8IsyiaCpuMLNsgyeA2JqC9ZDTKOz8MzkAiBxHxGbLdPLAyxdciRSYJWeIPlkzpv6x0uv30pIxOyU7yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMz6rmaJmL%2BtrZp2%2FyKtwDSWkyrfxlZ8df8FeUB%2BO4GP0ZkwhZ%2BT024ZUN7bXkSDhkwvHYITCCmjyQmhtPQK%2F42CM4Ge5O0fPMcAErm7kAYkpmwXqfLWB7yoAFwrkpmhanXMDjXtNY5w0yz5%2FsCi1UwFMKyv62jehil24qk%2FNH2oIwUFY9IXBnuek5jkeFyGcV1utEpnAsHsv%2FC%2B7MdO6OedFA7FkxBq8TkovByQ%2B49JUi%2F4Qpwp4A00t5YdmgLwYdk7momqQHVqSF%2Bu49gsvqOHr5StyqijzBP6G6FxyhPbFfC4AJQg93J267KMbKKpVIyJBJc1etGJ4aclH39IYN5A%2FyDS05ywL%2FMdpJ1m79mrIxF5fJbfoBamrtwfIPWyZijaTbFp%2BV4Ozgp9t4lRnEV%2BIGPjPIqDRXyIm07IoRys50AS1mj9fElXImUiLxV3%2F8UM%2BuvWygpmbcp%2BRsd%2BCyqbtlchrxIZXgKijZTpzcPInCVnJ%2Fc7SScVIOIqpk%2B4P68EAImgRDdpw6eZpUKnP7Yy6vNNbBIPnlePA9T6Je2gPXAFg37EzomUEkLP48PQQ9kiIs92jHuEap8AbzcOUOYNjeB9lbSFxMBUMxgjgTBdNbxGebqTyqWetiNZ3j9cg1%2FXVZJkAajnjUFFMwi9GJygY6pgFVhEjK4OHjC9dFevNOhqpeOhPCilydEMMVosVC3c%2F0P%2BM%2B%2Fo%2BVX9UJtYxMxerXP%2B5VJbELPGxQ01fCx1C9wChUOeuqoyt%2FviXj6dgvIrAu6%2FtfqWw3KQXrd0nimUKdSuL%2B40tCUObWmOv8wnIOO1V4YY%2FCZSPdzkktguJPBNJmTtwWsZp1zJ6m4DKcZrdNT%2Fybc3D3AFx0IbAbm51rG8MzkUgDShwZ&X-Amz-Signature=fab529dc413aa76be9426dff26b36490ebaff3bf0bb653318bae0a9d0adfd4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIS24S2F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxLzTUskQir8IsyiaCpuMLNsgyeA2JqC9ZDTKOz8MzkAiBxHxGbLdPLAyxdciRSYJWeIPlkzpv6x0uv30pIxOyU7yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMz6rmaJmL%2BtrZp2%2FyKtwDSWkyrfxlZ8df8FeUB%2BO4GP0ZkwhZ%2BT024ZUN7bXkSDhkwvHYITCCmjyQmhtPQK%2F42CM4Ge5O0fPMcAErm7kAYkpmwXqfLWB7yoAFwrkpmhanXMDjXtNY5w0yz5%2FsCi1UwFMKyv62jehil24qk%2FNH2oIwUFY9IXBnuek5jkeFyGcV1utEpnAsHsv%2FC%2B7MdO6OedFA7FkxBq8TkovByQ%2B49JUi%2F4Qpwp4A00t5YdmgLwYdk7momqQHVqSF%2Bu49gsvqOHr5StyqijzBP6G6FxyhPbFfC4AJQg93J267KMbKKpVIyJBJc1etGJ4aclH39IYN5A%2FyDS05ywL%2FMdpJ1m79mrIxF5fJbfoBamrtwfIPWyZijaTbFp%2BV4Ozgp9t4lRnEV%2BIGPjPIqDRXyIm07IoRys50AS1mj9fElXImUiLxV3%2F8UM%2BuvWygpmbcp%2BRsd%2BCyqbtlchrxIZXgKijZTpzcPInCVnJ%2Fc7SScVIOIqpk%2B4P68EAImgRDdpw6eZpUKnP7Yy6vNNbBIPnlePA9T6Je2gPXAFg37EzomUEkLP48PQQ9kiIs92jHuEap8AbzcOUOYNjeB9lbSFxMBUMxgjgTBdNbxGebqTyqWetiNZ3j9cg1%2FXVZJkAajnjUFFMwi9GJygY6pgFVhEjK4OHjC9dFevNOhqpeOhPCilydEMMVosVC3c%2F0P%2BM%2B%2Fo%2BVX9UJtYxMxerXP%2B5VJbELPGxQ01fCx1C9wChUOeuqoyt%2FviXj6dgvIrAu6%2FtfqWw3KQXrd0nimUKdSuL%2B40tCUObWmOv8wnIOO1V4YY%2FCZSPdzkktguJPBNJmTtwWsZp1zJ6m4DKcZrdNT%2Fybc3D3AFx0IbAbm51rG8MzkUgDShwZ&X-Amz-Signature=200113c5d26ac2508f27a799af71934a2673275038b77338255d4389afb14c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

