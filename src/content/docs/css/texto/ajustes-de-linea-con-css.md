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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UFHKIYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC99%2BO1eUfrvKKoDVjiAz7CHxMarnaEcI0Nx97r90sz3AIgdGcH2nNnP0dDwk8MFNNeYeixXA8mmKIjFNl6XEaeu28q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCykkjJ7E%2BmOHGK1qyrcAzICDXo2EurpMSTtfeAI7uIiPqgktKkOXPjGC2VsT%2FwN6oIDrPM%2FGYpPtwTzVd7ldddbaEaqjZq%2FUfoWpnF4QFdWZNGimaB4wyWGXfgvsLMkdNn91Db8RqmYj8Id0Srwa24ss66MsOm6Iygl7pBa5NWtPXZ7WNsWFb4KQYr7UVdQwvLCpZ%2BUUFfLI256nyUs8aMWzqzhUNxae8VHvzDPT6sKoCWS62pLIeGkxdVKSo48QzLKrb0bwDmTKszknUfvaigDkfPpHa%2BBFrgEAGoBJpDhCOTfjj2md4RpdiH8JgvDfFYfj4Cr4fLDRlV7ZJ933Yj30hltONofvuVhb5%2F%2BzCD72NM0MXI2MIO0NmQTy7rDN8ocpt%2Fezz%2BfMo2uoZh2MQBmRopxIKEva770w0F%2Fiuogz5WytE%2F00Wqd15NgO7GB1efzAE7NPn59FGh5B2O6jWrX9fBm3ujd5e0q88u2cT32ptaG3fCBIPC7%2BY2PXs89iv0OFOf%2FNm%2B1mE3zNskAFaQPiZfn0NEfjOI5ak7gJfhukyrKhECi5Vexa2f%2Bd%2BRsrHIHDw86sfPn7kdyHo2IDoiUd052GvY0Ok3sXYKXJL7XihCBKcm%2B2t8%2BW2I395qif1F4qZjFlQt7Y6cBMMjhisoGOqUBbXQd5f4PFOeIrSzmLVypgo8YAbd1Bfx1pIOpwsygga%2FUVEj2fT%2FxTXntNgx33ue%2FnPbHX4yiP5LrmfI%2FU0ljXPLnVO5HNqUKqVo%2BBSmCowgzXXJwfZzLC1uqOm92utjsdhI0bfyCbFF6Bj8TlUBxRtBkxzm9XwFsKd0Xap%2BBl91gfIMiJyfZkZ909qzU1zUlTMG3XepilwvV9xRacnJqwoKy063X&X-Amz-Signature=51c32775cd3d6c865276bd057f2eb32893f232f74035a055f1d85000979e95b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UFHKIYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC99%2BO1eUfrvKKoDVjiAz7CHxMarnaEcI0Nx97r90sz3AIgdGcH2nNnP0dDwk8MFNNeYeixXA8mmKIjFNl6XEaeu28q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCykkjJ7E%2BmOHGK1qyrcAzICDXo2EurpMSTtfeAI7uIiPqgktKkOXPjGC2VsT%2FwN6oIDrPM%2FGYpPtwTzVd7ldddbaEaqjZq%2FUfoWpnF4QFdWZNGimaB4wyWGXfgvsLMkdNn91Db8RqmYj8Id0Srwa24ss66MsOm6Iygl7pBa5NWtPXZ7WNsWFb4KQYr7UVdQwvLCpZ%2BUUFfLI256nyUs8aMWzqzhUNxae8VHvzDPT6sKoCWS62pLIeGkxdVKSo48QzLKrb0bwDmTKszknUfvaigDkfPpHa%2BBFrgEAGoBJpDhCOTfjj2md4RpdiH8JgvDfFYfj4Cr4fLDRlV7ZJ933Yj30hltONofvuVhb5%2F%2BzCD72NM0MXI2MIO0NmQTy7rDN8ocpt%2Fezz%2BfMo2uoZh2MQBmRopxIKEva770w0F%2Fiuogz5WytE%2F00Wqd15NgO7GB1efzAE7NPn59FGh5B2O6jWrX9fBm3ujd5e0q88u2cT32ptaG3fCBIPC7%2BY2PXs89iv0OFOf%2FNm%2B1mE3zNskAFaQPiZfn0NEfjOI5ak7gJfhukyrKhECi5Vexa2f%2Bd%2BRsrHIHDw86sfPn7kdyHo2IDoiUd052GvY0Ok3sXYKXJL7XihCBKcm%2B2t8%2BW2I395qif1F4qZjFlQt7Y6cBMMjhisoGOqUBbXQd5f4PFOeIrSzmLVypgo8YAbd1Bfx1pIOpwsygga%2FUVEj2fT%2FxTXntNgx33ue%2FnPbHX4yiP5LrmfI%2FU0ljXPLnVO5HNqUKqVo%2BBSmCowgzXXJwfZzLC1uqOm92utjsdhI0bfyCbFF6Bj8TlUBxRtBkxzm9XwFsKd0Xap%2BBl91gfIMiJyfZkZ909qzU1zUlTMG3XepilwvV9xRacnJqwoKy063X&X-Amz-Signature=3b8b44f1d7c25263c6ff8c5e9cf092a80967ec1948eaeb78b06fc3c7a471ae82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

