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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHTHMDF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCvP0%2FS7wrvEuv7GzcDcyeWvW8zkLiQxjorkaXgtNAsNgIhAJHC%2BELW4%2FTLJjVHd1eWAjkJBv1ryWntfZR6kr4gtX5pKv8DCC8QABoMNjM3NDIzMTgzODA1IgxTziufsQQUGgsLznAq3AOhUmI8JPLBAlawur15AO0vSpbHHJmTYbtSysQ6CT3ZMXxtttDDRoNWcDhuHxvom3sFYitWQraChc5JQpMmYn7KU%2FF3GifpKsE%2BHyZeG2DEe%2BzWc7DxJwRI1W%2FUMPUvPKgM8SIvMY0c%2FPbwT%2FvMJ6dP7RJmIgrp%2Fn%2BV456tYLCqSaHwePPujkXkyOSqYuOLPAOPvS2kR%2BgyWih0GNX9pZoKC3q%2BHtFBIG7djZGMXeRBjj0eym2hkS7YtCkjxUitFNit8vZ3UhGI2exghcUGiv4RMKiaEOZ1G4iKJ8RyEIBiOz2i7lEtQvNvHnzI84piw5aLhzqdmKXHdh4az1ics%2FWEJyvvWIWRKEEIMyOchiJ5cGSI50nhYsLIfd2x9XpF54o6NPPoBSjMw0FPiXyO34Q4UP2%2Bp65qx%2BUMUiyLbI0H7HOFODMojb6zymcaI%2FksFdhqDyssz9zpTuHEf8%2BM8MYUljaSe1zwtiWJ%2B66vJ%2BykIbdbFvYF%2BnDvH%2BN5nteLef3erti0Szp1PdtI%2F6CakUEi%2BqKoEVYnXCICB7jIVNlI90uYaXQ%2FQBqRtDXipW2HqKxaUwj89nmdENwJve1hCoDglLWwOipZvPO7T7V3xNNWTBn68sBqziCtsmr4GjDfh8HJBjqkAYEJQ5v0cRLT76q6ITrLt%2F2%2BtvGDNAK%2BC82cPlVSdybwSaXZmtVypBr7LQ5MZx9ZcHx%2BfyT%2BkJOa06I0m8AUXInCAFlgcIKbpbd9kvS39IwfXqBgzWtALu0F9n6mU2ZXWKUyweipEAL3MMdMisLi2hofUuDjz5UdMYpoJ6Shjg8z2u1GfHiaIewUV9BUno2%2B5inw5HYwHym37ZtlNoEwXx9DyHQJ&X-Amz-Signature=4ab754b9cf2eac43d39f9e1826e4d614b7758646d60499528396fed7a8005495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHTHMDF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCvP0%2FS7wrvEuv7GzcDcyeWvW8zkLiQxjorkaXgtNAsNgIhAJHC%2BELW4%2FTLJjVHd1eWAjkJBv1ryWntfZR6kr4gtX5pKv8DCC8QABoMNjM3NDIzMTgzODA1IgxTziufsQQUGgsLznAq3AOhUmI8JPLBAlawur15AO0vSpbHHJmTYbtSysQ6CT3ZMXxtttDDRoNWcDhuHxvom3sFYitWQraChc5JQpMmYn7KU%2FF3GifpKsE%2BHyZeG2DEe%2BzWc7DxJwRI1W%2FUMPUvPKgM8SIvMY0c%2FPbwT%2FvMJ6dP7RJmIgrp%2Fn%2BV456tYLCqSaHwePPujkXkyOSqYuOLPAOPvS2kR%2BgyWih0GNX9pZoKC3q%2BHtFBIG7djZGMXeRBjj0eym2hkS7YtCkjxUitFNit8vZ3UhGI2exghcUGiv4RMKiaEOZ1G4iKJ8RyEIBiOz2i7lEtQvNvHnzI84piw5aLhzqdmKXHdh4az1ics%2FWEJyvvWIWRKEEIMyOchiJ5cGSI50nhYsLIfd2x9XpF54o6NPPoBSjMw0FPiXyO34Q4UP2%2Bp65qx%2BUMUiyLbI0H7HOFODMojb6zymcaI%2FksFdhqDyssz9zpTuHEf8%2BM8MYUljaSe1zwtiWJ%2B66vJ%2BykIbdbFvYF%2BnDvH%2BN5nteLef3erti0Szp1PdtI%2F6CakUEi%2BqKoEVYnXCICB7jIVNlI90uYaXQ%2FQBqRtDXipW2HqKxaUwj89nmdENwJve1hCoDglLWwOipZvPO7T7V3xNNWTBn68sBqziCtsmr4GjDfh8HJBjqkAYEJQ5v0cRLT76q6ITrLt%2F2%2BtvGDNAK%2BC82cPlVSdybwSaXZmtVypBr7LQ5MZx9ZcHx%2BfyT%2BkJOa06I0m8AUXInCAFlgcIKbpbd9kvS39IwfXqBgzWtALu0F9n6mU2ZXWKUyweipEAL3MMdMisLi2hofUuDjz5UdMYpoJ6Shjg8z2u1GfHiaIewUV9BUno2%2B5inw5HYwHym37ZtlNoEwXx9DyHQJ&X-Amz-Signature=3c9af1402ad829fb3af2cf520f9695f6de21c158f4b61ededd023ea06062fc53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

