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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMQC4GV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5psYeMG%2BtbvG3LWhp%2F4Br%2FXr7dLT6ndHmKzB%2FoD140AIhAPniHUi4gV4HXVmdV38D%2FKRsefR9dKz4bJ%2FmilgipzPAKv8DCH0QABoMNjM3NDIzMTgzODA1IgwumeigLrfxMWs%2Fn1sq3AM20EG%2BSQnaT87oFeA14tsoF0GmAyAgyqhgPIViSDRtoVxu9Z3lpuHSAi18BdGFMWd91n9XpxH3mc98tY3zy8AHneZLRXkNUsrlbakH%2B%2FJF6p8GKC9Cu8Muu5mLriF0kiWsf0J%2FVIDXZtQ6PzD6VP2G1IW0CEm7dKCeramtOru1uwMH4vxa96Ua28rOhCaitdSIc3iVPqGHXKtLSz7floUVdM53m3LG6NmDiHcZKbVQgP3wfXmHsA0sb3ePeLjPYNx9KotGg6H6ofz%2BKor0JUrrYkgLRxKvlvHev4KdF12UlXJz767YfSift4bUaequy1CimtkdO01nX%2Faw9Y6uJqlmGrerGg1WssejLhoMtYoa3uRVJudIjNWFpbEnbDhHIbc8zSofAi5nQgvFuegxrOrw6KIW8V2L8OkHIx%2BSfAtzqNNAGt234ISx1laXsVK1yGiKSd39Gg7GeDa6Mjcnxv4%2FcUve5IXEWw6mOZdYd67RGdNDj%2FlTjHSdmsXnOFySgR9U3xIPIK66%2FITLuTVqa5H4xJsRkKgKvxT%2BoYehAKrzFPiCpa7YK%2F3dm5IeBhcBGNZEZTQrR6b8OpiAciDbzTUq%2F4XSJOVcLCCaT7nbIPtf8hTXX5Nqkr54Y1onDzCcqorKBjqkAX5p%2BcbPgRVFoDft0i7vKVScZQOg7WOGpFjjgR4Zrj0R920MhJInjFgRh8Fm9LuKGltDMtPm93USKBxzKzCkKNkPfgmWJxjRijBucav7Ig6Yf6gFukYrr%2Bmxdz7xbuhpP1ZPVLhk6hwRP7AhGiJD%2Be7Q7mEyChWawyReTqfswFuLqV4ytgUyK49jZvrJ6c0OiNHYmzC7p3m1mk6X5E2h7PtXG1I%2B&X-Amz-Signature=6d47c9086eddbbc7d66d3ea796150fe925e67c63caa5e24bc98da5121dcbe9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMQC4GV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5psYeMG%2BtbvG3LWhp%2F4Br%2FXr7dLT6ndHmKzB%2FoD140AIhAPniHUi4gV4HXVmdV38D%2FKRsefR9dKz4bJ%2FmilgipzPAKv8DCH0QABoMNjM3NDIzMTgzODA1IgwumeigLrfxMWs%2Fn1sq3AM20EG%2BSQnaT87oFeA14tsoF0GmAyAgyqhgPIViSDRtoVxu9Z3lpuHSAi18BdGFMWd91n9XpxH3mc98tY3zy8AHneZLRXkNUsrlbakH%2B%2FJF6p8GKC9Cu8Muu5mLriF0kiWsf0J%2FVIDXZtQ6PzD6VP2G1IW0CEm7dKCeramtOru1uwMH4vxa96Ua28rOhCaitdSIc3iVPqGHXKtLSz7floUVdM53m3LG6NmDiHcZKbVQgP3wfXmHsA0sb3ePeLjPYNx9KotGg6H6ofz%2BKor0JUrrYkgLRxKvlvHev4KdF12UlXJz767YfSift4bUaequy1CimtkdO01nX%2Faw9Y6uJqlmGrerGg1WssejLhoMtYoa3uRVJudIjNWFpbEnbDhHIbc8zSofAi5nQgvFuegxrOrw6KIW8V2L8OkHIx%2BSfAtzqNNAGt234ISx1laXsVK1yGiKSd39Gg7GeDa6Mjcnxv4%2FcUve5IXEWw6mOZdYd67RGdNDj%2FlTjHSdmsXnOFySgR9U3xIPIK66%2FITLuTVqa5H4xJsRkKgKvxT%2BoYehAKrzFPiCpa7YK%2F3dm5IeBhcBGNZEZTQrR6b8OpiAciDbzTUq%2F4XSJOVcLCCaT7nbIPtf8hTXX5Nqkr54Y1onDzCcqorKBjqkAX5p%2BcbPgRVFoDft0i7vKVScZQOg7WOGpFjjgR4Zrj0R920MhJInjFgRh8Fm9LuKGltDMtPm93USKBxzKzCkKNkPfgmWJxjRijBucav7Ig6Yf6gFukYrr%2Bmxdz7xbuhpP1ZPVLhk6hwRP7AhGiJD%2Be7Q7mEyChWawyReTqfswFuLqV4ytgUyK49jZvrJ6c0OiNHYmzC7p3m1mk6X5E2h7PtXG1I%2B&X-Amz-Signature=15953f16013e8564405730712b0062792c13d666ab36ca319b6d0e03344768b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

