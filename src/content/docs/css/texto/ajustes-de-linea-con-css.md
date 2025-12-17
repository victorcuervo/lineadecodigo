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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQICQ46%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChDIUxiqYy3U7vgOtqfZSHbz5257LLbj%2FgR2gESDTvCAiEArYBNMGtKR5%2FjgZolCmf2qT%2BXtgAo21xByogbZ%2FWgLUgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDL8ByTzrv92BQ%2B9MZSrcAxrxT03AS08Lh42Wgju6YS0HtJXHxsfepp31viKahAqr6FVUNNBMg36oXw3um8%2FHTb4U%2FM0wLM6n6ayRPJ40rdQ79BEyAr0bEpu3fsL9iui9sg1202uZzMMeuckJi4D4VhKnwPl1XmjDjkmhjpl15oLJ2r6UT9mMRCp9qs3kcT4bMwWOaOHc7BrM36HtFzO2TRKOmteP76XCj%2Fyh8wjBBV7MLGDX3TAjUOPBW8E9P6GXNLG8baAxrZ3gyTK1Ircfd5FouXGOlK2lZ%2FFA6B7paC2kf4yAoIxoBdeReac%2Bwu8Ol4kQ3Rfz%2B8nn9Lr88PEyBgBu7Antec3msL6AW8xh0QsmcyKLStVUTBEfLZO0T56WPs4Kx118QcwLknT%2FVSHGKrAhVmgteLR2Wr3faU0fJjkkHf4OXk9mNYSItnPVVFVzfvMhWUnZp58bqlB3F7FCuUhAhhk1OWjznnyB4pAIRhMM62ru6rSAzHfLEbKdLBQ3ScNmS8JCVhFIpJXn15hh5Wq95EWHTdvDME%2BjlCaCg5n038eigmlX6zJcdRV57BQ%2FjTCXAv65jracW8zRCaV2cG9BXK17gbUZTw9uW6ekx4e5uXy%2BJga4qHqeZYX5jDMkso%2B1aPyNzJCqfp%2BLMMfhisoGOqUB6E47Kcd0ppQ%2FCI4sCrjFs0IMtmm%2F3y2N0RFB%2BKK6KV3lmRizzprZYgKpZdQG%2BJwsPT0h7ZHGCeQ3%2BZTMrXcZprIOaKsS8%2BjglnumQOQCxkhOL46OZ2iJGWBxa3UQLMhI%2FM9iNG8d01c5%2BCt0NW9jq3bvUmpG6tBGjV940AaG5gNH3PNzCNJ8vhxB32AgNi2b1l0Uujf3rQOVGIMYSErnLZjpiMTd&X-Amz-Signature=63814a5a3064102ffd951146bd2030c26c41793d39991b40d07f65e75966c4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQICQ46%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChDIUxiqYy3U7vgOtqfZSHbz5257LLbj%2FgR2gESDTvCAiEArYBNMGtKR5%2FjgZolCmf2qT%2BXtgAo21xByogbZ%2FWgLUgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDL8ByTzrv92BQ%2B9MZSrcAxrxT03AS08Lh42Wgju6YS0HtJXHxsfepp31viKahAqr6FVUNNBMg36oXw3um8%2FHTb4U%2FM0wLM6n6ayRPJ40rdQ79BEyAr0bEpu3fsL9iui9sg1202uZzMMeuckJi4D4VhKnwPl1XmjDjkmhjpl15oLJ2r6UT9mMRCp9qs3kcT4bMwWOaOHc7BrM36HtFzO2TRKOmteP76XCj%2Fyh8wjBBV7MLGDX3TAjUOPBW8E9P6GXNLG8baAxrZ3gyTK1Ircfd5FouXGOlK2lZ%2FFA6B7paC2kf4yAoIxoBdeReac%2Bwu8Ol4kQ3Rfz%2B8nn9Lr88PEyBgBu7Antec3msL6AW8xh0QsmcyKLStVUTBEfLZO0T56WPs4Kx118QcwLknT%2FVSHGKrAhVmgteLR2Wr3faU0fJjkkHf4OXk9mNYSItnPVVFVzfvMhWUnZp58bqlB3F7FCuUhAhhk1OWjznnyB4pAIRhMM62ru6rSAzHfLEbKdLBQ3ScNmS8JCVhFIpJXn15hh5Wq95EWHTdvDME%2BjlCaCg5n038eigmlX6zJcdRV57BQ%2FjTCXAv65jracW8zRCaV2cG9BXK17gbUZTw9uW6ekx4e5uXy%2BJga4qHqeZYX5jDMkso%2B1aPyNzJCqfp%2BLMMfhisoGOqUB6E47Kcd0ppQ%2FCI4sCrjFs0IMtmm%2F3y2N0RFB%2BKK6KV3lmRizzprZYgKpZdQG%2BJwsPT0h7ZHGCeQ3%2BZTMrXcZprIOaKsS8%2BjglnumQOQCxkhOL46OZ2iJGWBxa3UQLMhI%2FM9iNG8d01c5%2BCt0NW9jq3bvUmpG6tBGjV940AaG5gNH3PNzCNJ8vhxB32AgNi2b1l0Uujf3rQOVGIMYSErnLZjpiMTd&X-Amz-Signature=e7ceded518bf436321b754f699295acbe52d8fd068451c3d5ab489e4f976096c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

