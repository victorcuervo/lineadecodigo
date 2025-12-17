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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPBIR4B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL860IxOaHfD5FgfPySxenJYnX5Jcm5%2F7xNcKjFs9YLAIhANxS9r9Mn6KveJDWxC3sxi3s0gxewDFZsiZ6V8GrLqVnKv8DCHUQABoMNjM3NDIzMTgzODA1IgwHHzXsW2DZ86fX9pYq3ANGLEfDQES7LPUFYCife%2B9bgp6%2FRi%2BZlNmrDgeNTPfqnH4fFxPmHK4dcAAnWepGjYqjxZChSWWiTVMeujQsshjlEryj6%2FNlL9yDZoHcVmXP9iKX7BmHuaDUJSiUTgTUNloSuk2pQtyWht3dRovGyN3O5UfNI%2FrC%2F%2FfFqd04rQNpLaMlj%2B3CYAbk3WfA0tlDri1rN2ALwOAn5JJgLtGu0MZw8c%2FfA0AwMA05AUTvobrl%2BytMpz3OwsW0LP2kPiNTo4%2B9fp7yFDPiQsEq0vI2%2FnRjgswbErugM0dijb01AShKEAnCx%2F2UCUv7Ugjekb0ywJ4w%2BhWIev%2Fw93YBgs0KStZ3jsB9qtxviniQmNHDt7J2MZ6%2BpKvS5BfGjKm1ghXxK6Vw%2FbEYeURTMP9rrNt7tKEXl12vDMETAa%2FuVvcSvP7Lc1pFhLhsMiaQrJTE%2Ft8EpHIdBSQQURAyhmSwC6TyALsOoN8vwxq%2Bv4zWFafbV6rT95TECXidNkr8msSLW8pWuF%2FXNrvXXReeWQqqHzLoMbTVMKmy9bCgcRJypX%2Fk96aMGIP6lIoRNznrRe%2FInkgzL2a8ZA9%2FhR%2FHCu%2FLAyy6%2F%2FT7%2BmOPZ4w4Ltdrh7gPJpWPVUumS%2FStkVW5afidVTChzojKBjqkAfn2WQGf%2BxO80%2BR2Xgb%2FPzaxe2L0wUupElHEur3IfDi5OF3KoJb5mKfjruLz0hY9sagMf0Rne6NX96lShIYVk2Yr4GMGiVoeqDl9%2FnL%2B9EbKR64OAfUTZFgY6sM%2BbU3E7FXPRtlJMmbxvVRPpL0hdIrxOwgqurlPkcv09RYkQHHmBi2rBrYLGFu8Km2FxlXNbtuVuQ2AxISFKDFLwg9z%2FU4g1Og7&X-Amz-Signature=b46ec20ef4fb3f5182e023d1137309f74b399c9710f81d13dc9ceebbef3e2408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPBIR4B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL860IxOaHfD5FgfPySxenJYnX5Jcm5%2F7xNcKjFs9YLAIhANxS9r9Mn6KveJDWxC3sxi3s0gxewDFZsiZ6V8GrLqVnKv8DCHUQABoMNjM3NDIzMTgzODA1IgwHHzXsW2DZ86fX9pYq3ANGLEfDQES7LPUFYCife%2B9bgp6%2FRi%2BZlNmrDgeNTPfqnH4fFxPmHK4dcAAnWepGjYqjxZChSWWiTVMeujQsshjlEryj6%2FNlL9yDZoHcVmXP9iKX7BmHuaDUJSiUTgTUNloSuk2pQtyWht3dRovGyN3O5UfNI%2FrC%2F%2FfFqd04rQNpLaMlj%2B3CYAbk3WfA0tlDri1rN2ALwOAn5JJgLtGu0MZw8c%2FfA0AwMA05AUTvobrl%2BytMpz3OwsW0LP2kPiNTo4%2B9fp7yFDPiQsEq0vI2%2FnRjgswbErugM0dijb01AShKEAnCx%2F2UCUv7Ugjekb0ywJ4w%2BhWIev%2Fw93YBgs0KStZ3jsB9qtxviniQmNHDt7J2MZ6%2BpKvS5BfGjKm1ghXxK6Vw%2FbEYeURTMP9rrNt7tKEXl12vDMETAa%2FuVvcSvP7Lc1pFhLhsMiaQrJTE%2Ft8EpHIdBSQQURAyhmSwC6TyALsOoN8vwxq%2Bv4zWFafbV6rT95TECXidNkr8msSLW8pWuF%2FXNrvXXReeWQqqHzLoMbTVMKmy9bCgcRJypX%2Fk96aMGIP6lIoRNznrRe%2FInkgzL2a8ZA9%2FhR%2FHCu%2FLAyy6%2F%2FT7%2BmOPZ4w4Ltdrh7gPJpWPVUumS%2FStkVW5afidVTChzojKBjqkAfn2WQGf%2BxO80%2BR2Xgb%2FPzaxe2L0wUupElHEur3IfDi5OF3KoJb5mKfjruLz0hY9sagMf0Rne6NX96lShIYVk2Yr4GMGiVoeqDl9%2FnL%2B9EbKR64OAfUTZFgY6sM%2BbU3E7FXPRtlJMmbxvVRPpL0hdIrxOwgqurlPkcv09RYkQHHmBi2rBrYLGFu8Km2FxlXNbtuVuQ2AxISFKDFLwg9z%2FU4g1Og7&X-Amz-Signature=51e5eabbe6c2856032ee9bee4e920fe9b4e641e1ba6b64334d02f899b70169dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

