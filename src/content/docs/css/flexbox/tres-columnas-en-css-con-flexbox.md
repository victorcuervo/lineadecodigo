---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCBEYIS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsIaqf5Xbb7pZLiHQYKGvRVsBLra8%2FhbsLDgZApy0B%2BAiEA9QXYDOPqukWcVvlFFX7hAkjSVOP4qmkkczzrkNuQMdcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtXimovadQ%2FgV4pTyrcAyNvaZnFfw1kpiq38H33Kofit41yC6aDAaHt9hR9Zk6BUOETCfpJitBwMYKDNjKcdKOdDxD9i53VJQcn3N7%2Bsc%2BqSfGBSF7Vz%2FZUdT%2BhiC67ZcyrkM7TyTwVloIEpVryKf29ua2D4zCgP%2F7LIx%2FaBB%2BjZNVTXXF65Nq3dQ28XILUkuP2rHIoJMvF2QoN5xwL37tV2YIt%2BCvdPRMV0Yktp95uZCO9bskn3WnAy8PbBPU7q%2FO5GL5igRUFQ9TIBo5%2F9qNtDisOxdVHb71K0xvncE2HwUqGDq29FvxTFXKMzLWXoBL%2FikTYl3GUXi62GjuVx3pOo0OfTzJjzeSgqydsfoBbMrfnVr3mWDRGLP%2BHbOHiY9ObVVIrnEsUZUtsvwwL4GkM2yGRJWWVt0V4bSoTxheP8JQAHyZ62MKDmhfSDuQRukS6%2BJBCa3O3pTjhZ3C5u9o%2BeSaN3ylp5XYUw47UOvtDDLDGXu6IDXyWBr1EZdBZHaMIL3OcMVckK43vOgbZAf9vMVbnFmkZtFgjdFxbXUw6UqK2UdtS7FBBxuBUEilBFRSO4tYBDI8swUJ2GlD2ZwEQVMBVX7gn83YqIPWH5CXXLdSTTquRTwiU8kKHWDyqBi3P1KSd4MxI4pD2MM6H3MkGOqUBmmWGIqK5CKqgz4etuWAOV3i4WSewxV02PGJOh3hQVS2rLiJCUcxgJBdG3vHKU%2B4supM3YmkNxaHlfyfTvTyMACMKAOP3UQ%2FE2DVfkOKCCyeuwAZPFfJru7sFlZCPVikmQDskPYF4EucNwPJaCjBNsqzkk6a%2FpQ7OXLtyaTSAjjiif8l%2B3E52oH0ibKoO0O8d94Iz4e2SHHMCwH%2F2kr19HO717b7v&X-Amz-Signature=81ac1a498e7f4aa8d9fdebddf0833a53666779919061e6d3fe2c17def413d861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCBEYIS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsIaqf5Xbb7pZLiHQYKGvRVsBLra8%2FhbsLDgZApy0B%2BAiEA9QXYDOPqukWcVvlFFX7hAkjSVOP4qmkkczzrkNuQMdcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtXimovadQ%2FgV4pTyrcAyNvaZnFfw1kpiq38H33Kofit41yC6aDAaHt9hR9Zk6BUOETCfpJitBwMYKDNjKcdKOdDxD9i53VJQcn3N7%2Bsc%2BqSfGBSF7Vz%2FZUdT%2BhiC67ZcyrkM7TyTwVloIEpVryKf29ua2D4zCgP%2F7LIx%2FaBB%2BjZNVTXXF65Nq3dQ28XILUkuP2rHIoJMvF2QoN5xwL37tV2YIt%2BCvdPRMV0Yktp95uZCO9bskn3WnAy8PbBPU7q%2FO5GL5igRUFQ9TIBo5%2F9qNtDisOxdVHb71K0xvncE2HwUqGDq29FvxTFXKMzLWXoBL%2FikTYl3GUXi62GjuVx3pOo0OfTzJjzeSgqydsfoBbMrfnVr3mWDRGLP%2BHbOHiY9ObVVIrnEsUZUtsvwwL4GkM2yGRJWWVt0V4bSoTxheP8JQAHyZ62MKDmhfSDuQRukS6%2BJBCa3O3pTjhZ3C5u9o%2BeSaN3ylp5XYUw47UOvtDDLDGXu6IDXyWBr1EZdBZHaMIL3OcMVckK43vOgbZAf9vMVbnFmkZtFgjdFxbXUw6UqK2UdtS7FBBxuBUEilBFRSO4tYBDI8swUJ2GlD2ZwEQVMBVX7gn83YqIPWH5CXXLdSTTquRTwiU8kKHWDyqBi3P1KSd4MxI4pD2MM6H3MkGOqUBmmWGIqK5CKqgz4etuWAOV3i4WSewxV02PGJOh3hQVS2rLiJCUcxgJBdG3vHKU%2B4supM3YmkNxaHlfyfTvTyMACMKAOP3UQ%2FE2DVfkOKCCyeuwAZPFfJru7sFlZCPVikmQDskPYF4EucNwPJaCjBNsqzkk6a%2FpQ7OXLtyaTSAjjiif8l%2B3E52oH0ibKoO0O8d94Iz4e2SHHMCwH%2F2kr19HO717b7v&X-Amz-Signature=ebf4156d6ee8c5cc3a212cd45bf659ee69615e597fe53404ab64e5cfa26ad74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

