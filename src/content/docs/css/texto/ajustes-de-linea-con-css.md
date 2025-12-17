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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG3W3CBK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFMY9yQy91XObtLNgopA1T4S2v0tgw0HmF7hhsFnODbAiAqc1oUOYuNDM4YzEcZoFW01XOp7e%2Fx%2FmA0TM0aGuNaBSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtOVTW3CuWZwC50LVKtwDw9B6TVJ67WzXa3FJThQLOVe82ITPO7nyliBuQ0oKfaHqlpDOnEx4F1yLV9qi84Wj7RAoK5kbomQMZntYabCz1wQKIiQfqCzqqaut0k1Gtxd0CpLGJK1AC6jOfwk48cMpZcSZEP4j6rCLjXh76v7xo8k0YiCBfe4GGuiEa95QMgR8FMzfiAQo5z89h445fJS0ZTVceAdOnGPAIPUihCEnJu0Gj%2BPxIcdQ72BULnIIxs3MSIqA%2BrAFXGHSJdXSw8j9ccfQhqjISf2NKoZB16tknTFqhcE7PtrL8jJmIMfBH6Kk7WEP3oLbMSqa3abvGl9tEWxNIy5%2BcIzsLN0aBtjurmK3LaRS4xtfKknYTc9MuEEximS91Gsw0DAlLw9%2FzGeMMWDmtf1cpmUwAy5KWbyT9x3mlKoWOUkOxTgHzTL2484j0njgWof2xJ9iEXYKEl0wjMKERR2HbQRwVHcKiXE%2BmNwe3P%2BNEjRykvsltAMef36sfdD1406V8X9%2FNy0DRBiMoDqD%2Ff9rABUWDxPqnlCrYav3PH5C%2BzQCQiKQkgB%2Bbx81WMLtupdOxIJWUq67O2%2FykoOpJp9WltkoRErUz%2Bp3in3HuyqBRoyoB%2BAzXnS%2BBJWo83NZ5y6HGPOhsDcw7I6KygY6pgH7fSBnnK%2Fg0rp4FwsjIFsxaOgN3UtzeKFTFC9AgM38rEJiwiAzsnyDlJfivsMB6LY8eqp9nJ%2Fejb2HIUGGgqCAKwbLQyWjUDoRTP%2B3RHJXdZ3LpkE7sAxUrljtfT1z%2FZzZtt%2FNSVP99HGnZc2kbCq9looWI47o%2FXJnHI2oRiI82elPsfRn%2B%2FVrknEMiZYP4FO1idTDgU%2BahKqtX3PhSXxsyJDnXgvM&X-Amz-Signature=db5b3668a43cd903c53421f1a8e45c3f85fc0d5bb36d5bb00127b3c1bed30d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG3W3CBK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFMY9yQy91XObtLNgopA1T4S2v0tgw0HmF7hhsFnODbAiAqc1oUOYuNDM4YzEcZoFW01XOp7e%2Fx%2FmA0TM0aGuNaBSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtOVTW3CuWZwC50LVKtwDw9B6TVJ67WzXa3FJThQLOVe82ITPO7nyliBuQ0oKfaHqlpDOnEx4F1yLV9qi84Wj7RAoK5kbomQMZntYabCz1wQKIiQfqCzqqaut0k1Gtxd0CpLGJK1AC6jOfwk48cMpZcSZEP4j6rCLjXh76v7xo8k0YiCBfe4GGuiEa95QMgR8FMzfiAQo5z89h445fJS0ZTVceAdOnGPAIPUihCEnJu0Gj%2BPxIcdQ72BULnIIxs3MSIqA%2BrAFXGHSJdXSw8j9ccfQhqjISf2NKoZB16tknTFqhcE7PtrL8jJmIMfBH6Kk7WEP3oLbMSqa3abvGl9tEWxNIy5%2BcIzsLN0aBtjurmK3LaRS4xtfKknYTc9MuEEximS91Gsw0DAlLw9%2FzGeMMWDmtf1cpmUwAy5KWbyT9x3mlKoWOUkOxTgHzTL2484j0njgWof2xJ9iEXYKEl0wjMKERR2HbQRwVHcKiXE%2BmNwe3P%2BNEjRykvsltAMef36sfdD1406V8X9%2FNy0DRBiMoDqD%2Ff9rABUWDxPqnlCrYav3PH5C%2BzQCQiKQkgB%2Bbx81WMLtupdOxIJWUq67O2%2FykoOpJp9WltkoRErUz%2Bp3in3HuyqBRoyoB%2BAzXnS%2BBJWo83NZ5y6HGPOhsDcw7I6KygY6pgH7fSBnnK%2Fg0rp4FwsjIFsxaOgN3UtzeKFTFC9AgM38rEJiwiAzsnyDlJfivsMB6LY8eqp9nJ%2Fejb2HIUGGgqCAKwbLQyWjUDoRTP%2B3RHJXdZ3LpkE7sAxUrljtfT1z%2FZzZtt%2FNSVP99HGnZc2kbCq9looWI47o%2FXJnHI2oRiI82elPsfRn%2B%2FVrknEMiZYP4FO1idTDgU%2BahKqtX3PhSXxsyJDnXgvM&X-Amz-Signature=679447efec6176ea7a2cff9fe5e728277faba7c566fd75c6994ec6755899ffe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

