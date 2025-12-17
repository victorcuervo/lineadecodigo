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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQLH5Y6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZZ5zT9G201%2FumkSkde3kklptfS7BcikCVEgmZsFP%2FlAiEA9voWqh2R0OidvtFW%2FgLbLqlAe4wWhy6fG38PIWn0Uy8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLNZAIuyuXgp1F7QLSrcA71af2igDnml4k18s%2FT3LuIFy2%2BE%2Bo0Ly53vroPAj7MntkJRp%2FlpenK%2F1deU3p%2Bu%2FmCGKh%2FsKGJLi5H2iqbYG5QoteZJzUTtTJWEGst%2FotbORfDxTnpDhTZ4F1uj2A0Xzv47jYtCkK0G5IibGmaGBnr8kiROlGDJ5S4HfH4udTX%2BvEg5rtaSm7iClHFpAy19gs1MfqO1KcPslUHmRIZxbaMw6K2cgmyS8cdKvO2auP0WsYE3LuBPq397JndwGYT3hWPX3Z%2B9otRBBQr2idJOj3X9eRyukw1NtHeVJQMf%2FChBRd3DebyM9TO4fXNuh3KwOWorKncmqKVNRAlvpNpj2VskQhXtyVtUW01uONupWHLKjgy8yytRow3uUddAoXWQfS2MXx%2FjTA74ADddVF3HQEkLuF9ZpGF274HaYzKyxY9zYUFPuBpAYzFO2WjLL5N72nnRkhCNZv76jqqJviR7NWkIZF8D61aRi7BDFdf5IGqK3ceSxeTjB3acNS0Ui8kZH3TvLXW%2Bv50rA8XAucG8tUact3xTY4XPTdsLKpP7quOiV6qZ5QGljesjt8kE2tqLL73P6Yw1310g7siwwlSWoX3EaEu8r3UJV0Vn%2BTEhvuvmo%2FwIriOT9i%2BX%2FuydMNGqisoGOqUB9gC11dsWq7NQ0iyJmVudRAqfNhE%2FTU1sJgy8eqc6yFPVoggTLGIpne%2BAdz8diwild1ropVzzJ2Aj2VEZJfuKpnLqltOtiumg81yIxa3P%2BvUV%2F1Cw%2BNayfye8IfaZE%2BaEjMDdU0aYEZcCnURQbsx5n6h8KJVHiPANDayLo48C%2BWF5NyYYyXPeojsNTv3%2F%2Bye%2F%2FPUwg18v%2FxfhcVFDQqhyiXI58TqU&X-Amz-Signature=ac912561173869b6cf95929983a403d95084481aa148137c83aab3e3cec671cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQLH5Y6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZZ5zT9G201%2FumkSkde3kklptfS7BcikCVEgmZsFP%2FlAiEA9voWqh2R0OidvtFW%2FgLbLqlAe4wWhy6fG38PIWn0Uy8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLNZAIuyuXgp1F7QLSrcA71af2igDnml4k18s%2FT3LuIFy2%2BE%2Bo0Ly53vroPAj7MntkJRp%2FlpenK%2F1deU3p%2Bu%2FmCGKh%2FsKGJLi5H2iqbYG5QoteZJzUTtTJWEGst%2FotbORfDxTnpDhTZ4F1uj2A0Xzv47jYtCkK0G5IibGmaGBnr8kiROlGDJ5S4HfH4udTX%2BvEg5rtaSm7iClHFpAy19gs1MfqO1KcPslUHmRIZxbaMw6K2cgmyS8cdKvO2auP0WsYE3LuBPq397JndwGYT3hWPX3Z%2B9otRBBQr2idJOj3X9eRyukw1NtHeVJQMf%2FChBRd3DebyM9TO4fXNuh3KwOWorKncmqKVNRAlvpNpj2VskQhXtyVtUW01uONupWHLKjgy8yytRow3uUddAoXWQfS2MXx%2FjTA74ADddVF3HQEkLuF9ZpGF274HaYzKyxY9zYUFPuBpAYzFO2WjLL5N72nnRkhCNZv76jqqJviR7NWkIZF8D61aRi7BDFdf5IGqK3ceSxeTjB3acNS0Ui8kZH3TvLXW%2Bv50rA8XAucG8tUact3xTY4XPTdsLKpP7quOiV6qZ5QGljesjt8kE2tqLL73P6Yw1310g7siwwlSWoX3EaEu8r3UJV0Vn%2BTEhvuvmo%2FwIriOT9i%2BX%2FuydMNGqisoGOqUB9gC11dsWq7NQ0iyJmVudRAqfNhE%2FTU1sJgy8eqc6yFPVoggTLGIpne%2BAdz8diwild1ropVzzJ2Aj2VEZJfuKpnLqltOtiumg81yIxa3P%2BvUV%2F1Cw%2BNayfye8IfaZE%2BaEjMDdU0aYEZcCnURQbsx5n6h8KJVHiPANDayLo48C%2BWF5NyYYyXPeojsNTv3%2F%2Bye%2F%2FPUwg18v%2FxfhcVFDQqhyiXI58TqU&X-Amz-Signature=41a72136565f9c1551e10c464cc14093041761dbb1b4a4a8e064fbebfa643f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

