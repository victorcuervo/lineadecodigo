---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEJPAC7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDQ%2Fz73rsV6MRNdBteRTnoWMYdji4qeYVU351CPVaTKlgIgZxriwsziAu2XuDeW0z8GgePhghRyJj%2Fn7c%2FDSQqUoigq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCes237giVEdYU8BMyrcA4yu345pspd6RWjj%2Fx43YlWkxSJwXQSKFycTedP6eLyg7Sl%2BulytW0AvsZU%2FQ5iDm9RvwZ8%2BjZxi%2Fs%2Bwf3vZLkMBaWrkneqElrlRrHvBEc7AU3s%2FZf37JFj4YiCkDmi2M5rVJRJW2xbIQftCJMZ%2BzrgySCUfZGSRApRmZOh8pwx2787MJl%2BuRPzWNKjnkFLbjBjAnuQ9b4vJJLCTd1%2FRNx3lwUuMICjKZnoizoUFoVKWsxsITjqAOu37wp7ElFmRZmlbSLFpQe9rl5lN20qhL6sV%2B8xCrrR8a2nX7iLhbZVDAlSR37cesU%2FSE7Jwu3dX8dOUA6tZ34gVe4ZAVOxfcTzBTIafLP8VLLq090SpzhHsZPHB3oU2NGAv%2FkvIT5RO2mU02VqMujS1bWlHe5tbsChG1SgoSiD7Hd8vm9zCjK57S0Fe4xGhWhwNpbCrjeMHzAejcujsb5DCfhZm3nQikllf6kHWqPoWE%2FbI77VfnScS3m5aGJT6MFSvWrSrsxjq5Ws%2BvG1KBmAoR7d%2FxHRbyX8ZcGj45gparCAGHbxSAUqBH31x224vkXgX2AHwKmLs%2FHNdo8cH6eFYUAWhchIVkKN7ESYJ0siNeR4B0qAohOpz4fIyXKiGnMD1nxMjML2uwMkGOqUB25GXJU6O5sWniPSkybTUIQPDrVR%2BW7ed1kyiMez0nSZAtmO276%2FusElVh5oRiWCDRYttl3TB7wSjQtZonrQYVEQK6XmW3kaLdeOd48kFAvbH2U9GPjucPG%2FVUxQfeAPbYyGZiYsa5VObGrBwHwl331H%2Bqix7xdW1gax7zCdNJN2yI3HG1dhGe3j3wSlRGwsV28NA%2F3FTuohfhG%2Ff0ef3tQII2hW4&X-Amz-Signature=39952ead75efc634ef01d84ed04d8218259474548267e1c6daae7c198977fe13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEJPAC7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDQ%2Fz73rsV6MRNdBteRTnoWMYdji4qeYVU351CPVaTKlgIgZxriwsziAu2XuDeW0z8GgePhghRyJj%2Fn7c%2FDSQqUoigq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCes237giVEdYU8BMyrcA4yu345pspd6RWjj%2Fx43YlWkxSJwXQSKFycTedP6eLyg7Sl%2BulytW0AvsZU%2FQ5iDm9RvwZ8%2BjZxi%2Fs%2Bwf3vZLkMBaWrkneqElrlRrHvBEc7AU3s%2FZf37JFj4YiCkDmi2M5rVJRJW2xbIQftCJMZ%2BzrgySCUfZGSRApRmZOh8pwx2787MJl%2BuRPzWNKjnkFLbjBjAnuQ9b4vJJLCTd1%2FRNx3lwUuMICjKZnoizoUFoVKWsxsITjqAOu37wp7ElFmRZmlbSLFpQe9rl5lN20qhL6sV%2B8xCrrR8a2nX7iLhbZVDAlSR37cesU%2FSE7Jwu3dX8dOUA6tZ34gVe4ZAVOxfcTzBTIafLP8VLLq090SpzhHsZPHB3oU2NGAv%2FkvIT5RO2mU02VqMujS1bWlHe5tbsChG1SgoSiD7Hd8vm9zCjK57S0Fe4xGhWhwNpbCrjeMHzAejcujsb5DCfhZm3nQikllf6kHWqPoWE%2FbI77VfnScS3m5aGJT6MFSvWrSrsxjq5Ws%2BvG1KBmAoR7d%2FxHRbyX8ZcGj45gparCAGHbxSAUqBH31x224vkXgX2AHwKmLs%2FHNdo8cH6eFYUAWhchIVkKN7ESYJ0siNeR4B0qAohOpz4fIyXKiGnMD1nxMjML2uwMkGOqUB25GXJU6O5sWniPSkybTUIQPDrVR%2BW7ed1kyiMez0nSZAtmO276%2FusElVh5oRiWCDRYttl3TB7wSjQtZonrQYVEQK6XmW3kaLdeOd48kFAvbH2U9GPjucPG%2FVUxQfeAPbYyGZiYsa5VObGrBwHwl331H%2Bqix7xdW1gax7zCdNJN2yI3HG1dhGe3j3wSlRGwsV28NA%2F3FTuohfhG%2Ff0ef3tQII2hW4&X-Amz-Signature=0e8a3739ce1c70fc37b954e3d123ce1eda7e8bea28b0bc0bb73b4e2b37eb3f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

