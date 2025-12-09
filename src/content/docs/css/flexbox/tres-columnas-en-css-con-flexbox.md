---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZVHNYC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSVnu98DqHLULZDAbAEKAJdWtJNKfK8e3A%2BTYLiAe4GQIgSoKR%2Fu0AQ8gq0GJd%2BM40THv4XTbNhjhuG7mdlp9geEoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDd19bkTZ5nuiyawSyrcAz0X%2FQY2grKSGgtIEHx1emawucvpIM%2FU3DsMKTNI4zjpbIqSGYEaiXDQtBqocijhqurSiMZu%2FggnBsY1Gk72bMu1Jl5DnhfhX3Jo0uMcXi3kxzUAZaNJtzvBycOvXpSmLPPoMhjDU1AhBLqUm143OUkY%2BKE%2FnBN4gLafb55sJNjya0l0OUdbh%2BgaXD%2BQCuXdSIWiJcTkEcRI5tFOhqs%2BVCHeJhaGz859VA%2FOqRBOi%2Fdap50MCMFjWr92%2B6IspIv08BZ%2BLXVGjtOMVjszgieoeCBcWgFD1%2FfqLxTB%2Bho4Siw4mk6tgvqv6AIq%2FoGTGd57b39TeSOlSfUcvWB2Upe%2Bw4cGZVll8sbJGO4y4tltfHtMpEnPjY9H3vHdgBcbuxuIYU0Ks4WSYuTP41x%2BNYhCUHWnK4m2fcjhzknEViD%2BTq7tNvNDR2bWuM81r6lO6j4mSBuoBAwF2IVR992nK%2FRIv8NZfZE0%2B%2BhDxP4LNe50q2MFdf1E6%2BJ%2FQjnliLWiUBO4oLGWzndiAZV21bynFn9sbr1FsMalFoN9GXFPozvf%2BouSBbLg7dvSVdSanhO6QvH%2BE45pJO9AilpjAzg7cZ4pDP4IHN6miANPEyBFbCBdIM3I1GnGtqCvfmsh4CH9MJ7D3ckGOqUBN2vQabsMQnH3%2FY%2B%2FAsghDqZ8qPxLWqBxCrEHgrSrSfSI%2B7W2lWntH1tjt2GPGuO26ysy1x8FKO9G2MTck4gPmOlu5VCtV%2FfbcZYGstr0eTvTB2MTDH5PKbwjBLSopOOW9MFKTzkkFBvQ1%2Bx5Zw%2Be2F2aAJy0i0bXXeuvvMToLkEBfKf%2FfcMtp8J9eBnpNzGaD%2F1pQPJl58b7SdB3b7%2F5q8hSjHUV&X-Amz-Signature=3a10fee730b14823a81bef956e00bec3d6fb8441888189a4b1526defc7137e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZVHNYC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSVnu98DqHLULZDAbAEKAJdWtJNKfK8e3A%2BTYLiAe4GQIgSoKR%2Fu0AQ8gq0GJd%2BM40THv4XTbNhjhuG7mdlp9geEoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDd19bkTZ5nuiyawSyrcAz0X%2FQY2grKSGgtIEHx1emawucvpIM%2FU3DsMKTNI4zjpbIqSGYEaiXDQtBqocijhqurSiMZu%2FggnBsY1Gk72bMu1Jl5DnhfhX3Jo0uMcXi3kxzUAZaNJtzvBycOvXpSmLPPoMhjDU1AhBLqUm143OUkY%2BKE%2FnBN4gLafb55sJNjya0l0OUdbh%2BgaXD%2BQCuXdSIWiJcTkEcRI5tFOhqs%2BVCHeJhaGz859VA%2FOqRBOi%2Fdap50MCMFjWr92%2B6IspIv08BZ%2BLXVGjtOMVjszgieoeCBcWgFD1%2FfqLxTB%2Bho4Siw4mk6tgvqv6AIq%2FoGTGd57b39TeSOlSfUcvWB2Upe%2Bw4cGZVll8sbJGO4y4tltfHtMpEnPjY9H3vHdgBcbuxuIYU0Ks4WSYuTP41x%2BNYhCUHWnK4m2fcjhzknEViD%2BTq7tNvNDR2bWuM81r6lO6j4mSBuoBAwF2IVR992nK%2FRIv8NZfZE0%2B%2BhDxP4LNe50q2MFdf1E6%2BJ%2FQjnliLWiUBO4oLGWzndiAZV21bynFn9sbr1FsMalFoN9GXFPozvf%2BouSBbLg7dvSVdSanhO6QvH%2BE45pJO9AilpjAzg7cZ4pDP4IHN6miANPEyBFbCBdIM3I1GnGtqCvfmsh4CH9MJ7D3ckGOqUBN2vQabsMQnH3%2FY%2B%2FAsghDqZ8qPxLWqBxCrEHgrSrSfSI%2B7W2lWntH1tjt2GPGuO26ysy1x8FKO9G2MTck4gPmOlu5VCtV%2FfbcZYGstr0eTvTB2MTDH5PKbwjBLSopOOW9MFKTzkkFBvQ1%2Bx5Zw%2Be2F2aAJy0i0bXXeuvvMToLkEBfKf%2FfcMtp8J9eBnpNzGaD%2F1pQPJl58b7SdB3b7%2F5q8hSjHUV&X-Amz-Signature=34788d8211251e66b043a67d0c03fd6ca33789ecd641333b4a1d7ef9e3337517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

