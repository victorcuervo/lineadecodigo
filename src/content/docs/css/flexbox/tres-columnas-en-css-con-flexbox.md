---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPBQVLRW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICankkq4HOYWeToLNqVbKBMOfI062yCRRHUZy%2F2exCQ7AiEA17ncfDLPr178hTfaNj3XfM2%2BrYxp%2BU94LlBKEpA4NcQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw%2F06V7%2BwwIHqK5DircA17WhQilPTh%2F6%2Fr5QN6leht5vzhrLliSuem%2BzLExjfpJiDFtEyY1jv%2FQpfkShwRLThFmH%2FjBi4%2FutcZZHRQwNVJozhXfP70sSjYUnIcm17EcCa5S2RlSJSteK5fB0e9GAAXXRJ5zK14hKNCXEgEm3RVobEWg%2BeH2nPU9%2FnMqoSQhCq%2FI4AJsF%2BLGN%2BDjGZFZCPb%2BE2C5WG%2Fj05FZ5jPBUyG8ArNcD12DYLZrBezvnq4I%2FyENYZh6FGKV92Ct4g%2FYpKsMwLsmRwcXSowehbFK5xTG2OA2iEll%2BCHRQok%2F8wIclcjhFCjWVeGwNhxDio%2BqIHiplRfCdPRZkP9tDLxpPZGbZ2j48BxoM7Ppyo92lh7kDxaAVx3U%2F1Mshtphfiuk5KEmUMnwhtxFtlLKPC76Yj%2Bngjm4Rn5atDpFWJscPgmfE45Rwwj%2BX9Ox0ezSkPdm3645TqdJDT%2B1j8lrGGPqZQlFy1QH9PXJ%2B8w%2Bw%2FAbVzQF41izd9fCG8lhYFpGtau3n5ZcsA%2B5FJGb2eYcsdrdAvEyp7qY87mNMgEaXdrCmsnQbLqOp34hjAXZ2fBGzA7u%2FI6CnfRe3p2NpVgswaGgQH7EsqBQureH2lTSHPSWhqLxUxu8ZUrKLvdaCd9%2BMJTH18kGOqUBiedlV0xOZg87hZmbQ4vB52hi4SpkIUv%2B%2Bq14260NdM4FLqDp5XIlxNkCEt1cOBsuQgSQ%2B6H6AKYfqqHqp6PAELFJDcApB8A5a7ujwJQ1hVw9QSgOIRDVezk2QzSZhSNlF6Lu8qkFT2pmq8%2BprDhaCVV50De7%2FsEORk7d4%2B5QKtZrPxHaqdX6B8%2B88FX21BcQ8LM1bUjd5PhCYbzPQHAsngMY3GTF&X-Amz-Signature=c9c038f0831e7a824b787d0e2b39f2aa375c191741951d0f4ececb7995a5d24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPBQVLRW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICankkq4HOYWeToLNqVbKBMOfI062yCRRHUZy%2F2exCQ7AiEA17ncfDLPr178hTfaNj3XfM2%2BrYxp%2BU94LlBKEpA4NcQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw%2F06V7%2BwwIHqK5DircA17WhQilPTh%2F6%2Fr5QN6leht5vzhrLliSuem%2BzLExjfpJiDFtEyY1jv%2FQpfkShwRLThFmH%2FjBi4%2FutcZZHRQwNVJozhXfP70sSjYUnIcm17EcCa5S2RlSJSteK5fB0e9GAAXXRJ5zK14hKNCXEgEm3RVobEWg%2BeH2nPU9%2FnMqoSQhCq%2FI4AJsF%2BLGN%2BDjGZFZCPb%2BE2C5WG%2Fj05FZ5jPBUyG8ArNcD12DYLZrBezvnq4I%2FyENYZh6FGKV92Ct4g%2FYpKsMwLsmRwcXSowehbFK5xTG2OA2iEll%2BCHRQok%2F8wIclcjhFCjWVeGwNhxDio%2BqIHiplRfCdPRZkP9tDLxpPZGbZ2j48BxoM7Ppyo92lh7kDxaAVx3U%2F1Mshtphfiuk5KEmUMnwhtxFtlLKPC76Yj%2Bngjm4Rn5atDpFWJscPgmfE45Rwwj%2BX9Ox0ezSkPdm3645TqdJDT%2B1j8lrGGPqZQlFy1QH9PXJ%2B8w%2Bw%2FAbVzQF41izd9fCG8lhYFpGtau3n5ZcsA%2B5FJGb2eYcsdrdAvEyp7qY87mNMgEaXdrCmsnQbLqOp34hjAXZ2fBGzA7u%2FI6CnfRe3p2NpVgswaGgQH7EsqBQureH2lTSHPSWhqLxUxu8ZUrKLvdaCd9%2BMJTH18kGOqUBiedlV0xOZg87hZmbQ4vB52hi4SpkIUv%2B%2Bq14260NdM4FLqDp5XIlxNkCEt1cOBsuQgSQ%2B6H6AKYfqqHqp6PAELFJDcApB8A5a7ujwJQ1hVw9QSgOIRDVezk2QzSZhSNlF6Lu8qkFT2pmq8%2BprDhaCVV50De7%2FsEORk7d4%2B5QKtZrPxHaqdX6B8%2B88FX21BcQ8LM1bUjd5PhCYbzPQHAsngMY3GTF&X-Amz-Signature=6ace3ea5a6017687c4598b6a925840ecca2dbc9c72c6e28ed408a188be2d6bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

