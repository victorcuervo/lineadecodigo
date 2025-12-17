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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOGC2OS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGwnJ8ERQn02zmyXRGBWM7j9MNb9gfhRJgjTxW5sTQwgIhAN2NtL3tEZytVyz0JcGv%2Ft%2B05HMRq2GGwX3f6TYM3CeoKv8DCHkQABoMNjM3NDIzMTgzODA1IgzEq2rleruczAdh4xoq3AO8EkozeYIaR3WPemM%2Bw2VGgjznS%2Bw1%2F640viKWD1V7%2F4xBew7cRUWXK9yu5bYG11%2FP3t5ldaPKoOLXYWD2zxs%2BVwTt6zqLAq3ub%2BiDJryoOFVTa%2F2TLHvUq6nEA76Q3bho3irxU3ZvvQqRIluNQiJ584ENhXqZGPhVqW8LEVURLl%2FyRijBn6iBU5kn36qO5eH5Fvvfz%2FRs%2BfkNFILgfzmJEsVH52BHO1syslqKVl3UoFSuSZbIeoM%2FLaxLritvAUm3fv31BAhfhN0a2H%2BInVcbLBkSWfYHaIBd11iXkzbX2jj%2Bom9HPQ1XtJywwrlrRMmW2cB6qG555lB4TTNmZY1aNAUcFmUsYwPFj%2BuH%2BxO1%2F3O42AkoTMGIa5xk%2F43uSa4YPy9gKnlp2Z6jU8J196yZAkfXWrET3sr%2BSi3vjNyEDhzd9uot18m2LU3iKBcONnHIMW5MwQ0AXSR7fTxAshc3v%2BfGUc89ZJrGwPhxEXuOToNdhPxWxUhv9zCiWem6ke5t4Xo1ggydoJqckB%2F07xf5ncArF1K%2F7Woy22gs4epO1zgJsRsOjVVtCX3G6oco2nEut3pXJjVh5UQ%2FDH4Ykmp1iCd0LWdF3QxCwmntCWNICjxB%2FXVDvPkAgZAG2jD1t4nKBjqkAS5D0ii69qjNGhGMX4T9GBPHkoTA22qjWM6J3wHSIlw7zzgbc35XZjBPKy4grIvDbu99v0QKqXdlnebKF5kaz5Xo0hYD17nvhM7s6gsoKo1Y4BMui22bCUV5dc%2BZ%2FsZPdGJSi2%2Fo%2BWYE9S6gpzftTkU%2F4pRd7GspZMbKxDGcXiWTtHepHubtu2MARlVtp8i0nMfqXAALFcg%2B1UpQDMNXjPGWfLkP&X-Amz-Signature=6cf718ae5c2529ef89b02519a7d2b5a5205dd84790b247a60f2252712abb4fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOGC2OS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGwnJ8ERQn02zmyXRGBWM7j9MNb9gfhRJgjTxW5sTQwgIhAN2NtL3tEZytVyz0JcGv%2Ft%2B05HMRq2GGwX3f6TYM3CeoKv8DCHkQABoMNjM3NDIzMTgzODA1IgzEq2rleruczAdh4xoq3AO8EkozeYIaR3WPemM%2Bw2VGgjznS%2Bw1%2F640viKWD1V7%2F4xBew7cRUWXK9yu5bYG11%2FP3t5ldaPKoOLXYWD2zxs%2BVwTt6zqLAq3ub%2BiDJryoOFVTa%2F2TLHvUq6nEA76Q3bho3irxU3ZvvQqRIluNQiJ584ENhXqZGPhVqW8LEVURLl%2FyRijBn6iBU5kn36qO5eH5Fvvfz%2FRs%2BfkNFILgfzmJEsVH52BHO1syslqKVl3UoFSuSZbIeoM%2FLaxLritvAUm3fv31BAhfhN0a2H%2BInVcbLBkSWfYHaIBd11iXkzbX2jj%2Bom9HPQ1XtJywwrlrRMmW2cB6qG555lB4TTNmZY1aNAUcFmUsYwPFj%2BuH%2BxO1%2F3O42AkoTMGIa5xk%2F43uSa4YPy9gKnlp2Z6jU8J196yZAkfXWrET3sr%2BSi3vjNyEDhzd9uot18m2LU3iKBcONnHIMW5MwQ0AXSR7fTxAshc3v%2BfGUc89ZJrGwPhxEXuOToNdhPxWxUhv9zCiWem6ke5t4Xo1ggydoJqckB%2F07xf5ncArF1K%2F7Woy22gs4epO1zgJsRsOjVVtCX3G6oco2nEut3pXJjVh5UQ%2FDH4Ykmp1iCd0LWdF3QxCwmntCWNICjxB%2FXVDvPkAgZAG2jD1t4nKBjqkAS5D0ii69qjNGhGMX4T9GBPHkoTA22qjWM6J3wHSIlw7zzgbc35XZjBPKy4grIvDbu99v0QKqXdlnebKF5kaz5Xo0hYD17nvhM7s6gsoKo1Y4BMui22bCUV5dc%2BZ%2FsZPdGJSi2%2Fo%2BWYE9S6gpzftTkU%2F4pRd7GspZMbKxDGcXiWTtHepHubtu2MARlVtp8i0nMfqXAALFcg%2B1UpQDMNXjPGWfLkP&X-Amz-Signature=9179cb08944f508d312711b83077684436695e514596728e83e3e99390159eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

