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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HU4CJJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsxys8NJk%2BXWqSlWvzCQFKqGJ87TpgTgvDN0c%2Ftxt4ngIgLDe5E1bEAjxsbJ3cpOJzV3V%2BzUgidoBOPpCz5RHYB3wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKwSUosSsnr1%2BzsnVyrcA8h9UWjPOrrRDz5Glom1Vb9Ekf%2BtBiHNJVWFh1DZCBjM48ZKKCKoD1Atv1jtlNa80x6soWeMVEb030CpJirUWILoeUuWqUyRSz3CmyH8SrdhF8clFq9zn3Tv2YhGbBNN%2BJvYjbyTJiIOnQOvaouVzuTHxvWIlGJerP291mxiYlJePpeXhgUbT%2BfeOR%2FRPyfrIQ5aFmB2WbFatkijjjyc5sDBvkbzrKuah4ozL%2FWfjfHE98f2RYxfSItaaZtvGOsvkn2S8yvhyZOdWLKZQyADc7QaO1ogXSRtC%2BJWQ9XOTAFI2HtTNFMWBgVF7sPPB%2BRKR34hsYCsYVZKRB4o2bibaXRsgf5HUoantQJlBqZQ0rGxeHSzNoynTfJou9sLx0QfuhznbbNSir45xZeLpV8FE2hCq57WM0xi4TDcxAp%2BT3eDhiDnlkATJsMyRixKA1nHMC73ijPE9G1yVHWqRqUBodAOcjbHdayBkJGcLfTddzi5QhuAW8TvlPMjI7%2FxCgrB5R0floZAq1BsTJ%2F9DuypD6jFo6WAafsDT6Epd65VfliBpc%2FgoRmXrid27RAqVEVhNpGAZZOrZyUc5rSz%2BAGqdy6BjeFPdkjGe1%2Bbh7OC%2BeSf9K9xq%2BU9t7gCMraUMNeWiMoGOqUB165DzVIcguLX%2FIpsfJeFfexGOKLhtUI%2FzJMHM8FJRiLZ9XkpyeHYRT1mXwRE4IWiOITFcwSth1Xzy5m%2FjXno%2FS9G7RMe2IGul%2Bder%2FGOQQohdocHAORECtdr%2Fcxo%2Bl97iFjKtY4aXDBf%2BIec0Cwuq6H1thggJpPAd8VSdYFOiZvVCffvdGj9AeE1tvN4l8rLYigXonOLj7YDYztuEfwQlwjpD8tD&X-Amz-Signature=840fdb299ae9cc172a3deda33b7cfb2ce8c01d4491f74b67fe677400caa815df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HU4CJJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsxys8NJk%2BXWqSlWvzCQFKqGJ87TpgTgvDN0c%2Ftxt4ngIgLDe5E1bEAjxsbJ3cpOJzV3V%2BzUgidoBOPpCz5RHYB3wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKwSUosSsnr1%2BzsnVyrcA8h9UWjPOrrRDz5Glom1Vb9Ekf%2BtBiHNJVWFh1DZCBjM48ZKKCKoD1Atv1jtlNa80x6soWeMVEb030CpJirUWILoeUuWqUyRSz3CmyH8SrdhF8clFq9zn3Tv2YhGbBNN%2BJvYjbyTJiIOnQOvaouVzuTHxvWIlGJerP291mxiYlJePpeXhgUbT%2BfeOR%2FRPyfrIQ5aFmB2WbFatkijjjyc5sDBvkbzrKuah4ozL%2FWfjfHE98f2RYxfSItaaZtvGOsvkn2S8yvhyZOdWLKZQyADc7QaO1ogXSRtC%2BJWQ9XOTAFI2HtTNFMWBgVF7sPPB%2BRKR34hsYCsYVZKRB4o2bibaXRsgf5HUoantQJlBqZQ0rGxeHSzNoynTfJou9sLx0QfuhznbbNSir45xZeLpV8FE2hCq57WM0xi4TDcxAp%2BT3eDhiDnlkATJsMyRixKA1nHMC73ijPE9G1yVHWqRqUBodAOcjbHdayBkJGcLfTddzi5QhuAW8TvlPMjI7%2FxCgrB5R0floZAq1BsTJ%2F9DuypD6jFo6WAafsDT6Epd65VfliBpc%2FgoRmXrid27RAqVEVhNpGAZZOrZyUc5rSz%2BAGqdy6BjeFPdkjGe1%2Bbh7OC%2BeSf9K9xq%2BU9t7gCMraUMNeWiMoGOqUB165DzVIcguLX%2FIpsfJeFfexGOKLhtUI%2FzJMHM8FJRiLZ9XkpyeHYRT1mXwRE4IWiOITFcwSth1Xzy5m%2FjXno%2FS9G7RMe2IGul%2Bder%2FGOQQohdocHAORECtdr%2Fcxo%2Bl97iFjKtY4aXDBf%2BIec0Cwuq6H1thggJpPAd8VSdYFOiZvVCffvdGj9AeE1tvN4l8rLYigXonOLj7YDYztuEfwQlwjpD8tD&X-Amz-Signature=e971c84a8363e7caf0fc330eaf09f818d8f87f8b74e549610c6d0ccdea005cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

