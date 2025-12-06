---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBM7YMF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOmzFikri%2BfDx4QDm%2FbbomKcDi3Pt%2FoukzREWX6fFjzAiEA7jUrUzaOZ7uyW%2FujdkQ5MzAGyFN3VThojQ%2BBBFNVk%2BMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUC0xekydBACNXErSrcAwwFCxSZ8DF5ycIcUOKXNsqfoSbgUJpuJJAH%2B%2FsoGrtiY9SWu2PZ89n%2Fz%2FfxicA6v83%2BR7%2BWiyuZwVs6TJ5lgjEHSB4sKZv0j6Ppa%2B%2Fsh7%2BfX4vJbAwD7EUMDBqBq65UVjVHoxA0j0mPJq8OWwSsjFxFcUDAWzhxsdkqfPD3YYHzq%2B04%2FLTpnFtD837YpFH4uNjcBCCUOh4GGWPiVJXlZ9vLUetP8YKYXAV2NZipKXDevxTwgWD6j8msffG3PelZAwMWMNHgLyA49e6rBOWch1naG6o8AoUFIXRhoTw5eebXlOP2Ak5O%2FVdHago8B7cr2GeRH4cvVk%2BXELXvlUkySPJw1pTIC8fIEu%2FOnFmfsCeDyT5sodOq%2F2xbzqvvj%2BXiz8KLEgqjPQRYn%2FESw2XnlwQPnhpA5Jc4hSUHn2p1A8CCJJ1DAJcc7s5bam%2Ba2i%2FOOVAjPueAJsbcP4K5kORcqnDhEjesuzYQxsSvKQjB4NoWTUkRbP4x3GAbYUJrxb3VL7%2Foj8IoJS9VmNAqmXCDi6W6RUQxKiaUBsnGEOco9UTWCVGb%2FjKEKHXRZr9j47ElrROIk35O8l6jTPd%2BoaayHIe3qUxAjcq6Lmcvp%2FQcBrlcZPHgZ%2FINzfw%2BPNj0MOy8z8kGOqUBFlpmRztQK%2FE4AFxsW5xNb9r%2FmhGCBdK1ju7vuGlAtVtHZxCu4KO2W0dLHBAKya540Kjmef74444JaSqJGM3gagzLeuAoMSiu3EW%2FDhZ4BVAC%2BWwHlf%2FbIWSg2%2F22QI5JM%2FVQpFcJkrEqc4D0mlDiUvirvuPUN5NvM6cqlO%2FHTHW%2FhIXER%2F%2FX963JQJkGARqcALHD7FLTawt81OPhr7k%2B5SofzseN&X-Amz-Signature=f24e8c76004b1881f9a397eb92d07fdb3562ca0648e31ac7559ecb7526089624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBM7YMF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOmzFikri%2BfDx4QDm%2FbbomKcDi3Pt%2FoukzREWX6fFjzAiEA7jUrUzaOZ7uyW%2FujdkQ5MzAGyFN3VThojQ%2BBBFNVk%2BMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIUC0xekydBACNXErSrcAwwFCxSZ8DF5ycIcUOKXNsqfoSbgUJpuJJAH%2B%2FsoGrtiY9SWu2PZ89n%2Fz%2FfxicA6v83%2BR7%2BWiyuZwVs6TJ5lgjEHSB4sKZv0j6Ppa%2B%2Fsh7%2BfX4vJbAwD7EUMDBqBq65UVjVHoxA0j0mPJq8OWwSsjFxFcUDAWzhxsdkqfPD3YYHzq%2B04%2FLTpnFtD837YpFH4uNjcBCCUOh4GGWPiVJXlZ9vLUetP8YKYXAV2NZipKXDevxTwgWD6j8msffG3PelZAwMWMNHgLyA49e6rBOWch1naG6o8AoUFIXRhoTw5eebXlOP2Ak5O%2FVdHago8B7cr2GeRH4cvVk%2BXELXvlUkySPJw1pTIC8fIEu%2FOnFmfsCeDyT5sodOq%2F2xbzqvvj%2BXiz8KLEgqjPQRYn%2FESw2XnlwQPnhpA5Jc4hSUHn2p1A8CCJJ1DAJcc7s5bam%2Ba2i%2FOOVAjPueAJsbcP4K5kORcqnDhEjesuzYQxsSvKQjB4NoWTUkRbP4x3GAbYUJrxb3VL7%2Foj8IoJS9VmNAqmXCDi6W6RUQxKiaUBsnGEOco9UTWCVGb%2FjKEKHXRZr9j47ElrROIk35O8l6jTPd%2BoaayHIe3qUxAjcq6Lmcvp%2FQcBrlcZPHgZ%2FINzfw%2BPNj0MOy8z8kGOqUBFlpmRztQK%2FE4AFxsW5xNb9r%2FmhGCBdK1ju7vuGlAtVtHZxCu4KO2W0dLHBAKya540Kjmef74444JaSqJGM3gagzLeuAoMSiu3EW%2FDhZ4BVAC%2BWwHlf%2FbIWSg2%2F22QI5JM%2FVQpFcJkrEqc4D0mlDiUvirvuPUN5NvM6cqlO%2FHTHW%2FhIXER%2F%2FX963JQJkGARqcALHD7FLTawt81OPhr7k%2B5SofzseN&X-Amz-Signature=1abd242ff43abaa519df8ef97c02cd14363b37fca5117a27a8d59a4f02e80f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

