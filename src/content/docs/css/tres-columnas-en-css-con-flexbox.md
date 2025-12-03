---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJUHGFE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFLODI%2Bg%2BYgtsOnPxYfADgrEUzjvjVBFwVOpXfBXJLaoAiEA4%2BskJAwMf71AecDKsYz%2FpS9haWA93vbchyU50aN0Zysq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDND1%2B03v5nnEQu%2F5cSrcA6EYmGKpOhAhZTP4fGDNuIOgjX2wiHAWW%2B%2B0EqcJuM%2FeK5OphbsZh8CUQUTkpfjrG4FpNpD3UCjm%2FnWD2K7UI0wn0QBAzEgBCKkl%2Flsc2V0iFpwC8Qy%2FKcgXHEWrYlU5FAxilb6BSbdODf%2FEaF4chKhexA84a7ab6oQ608rckxTHADLpT0yHZxikCMrB06Ihg0RqWT10dbmTyn2kV0P8aFuMJWdXbARPuw0A4SHFNDFRgcPNDJQs275xSECdOg2x9Jf4T59pgYfHkALTkdy1A0CyA%2BW177kQAf4tx4i%2BiOvNIColBDYkwcoDkjRz1NOMXhzENgagxBxrFcyPvHb4zduXb%2FcwBkLpFDdSZhYxCwpIkVb1Qxud23XcLYA13kRLhubrCp5UhL1L3te07C8cTZj3lZbFjAPzSmnF%2BAkm8zMpddH062EOCx7XGIzZIprVzSt%2FOvqFrnHHUIzKuc%2BNwVjCLJN%2BwBTW5vTCvNGScprF7gN9%2FWlrxtEeWqDvosieHbcF8GffSMjmtflsDDxjJAw9TwlJ2OhLcxD8cCvkgimXdbEKty9ERRYLcfCGkT9Li2CmmnppfwBTUUqQFQAV5AmnnOrMvWrrC76MDtspzgaiIdlxhlp%2B98RjwkqWMLjdwskGOqUB3l9K3se2T7A3P0qsN4XSNKhHfAXq9Q5RPKo2zJOETz3g%2Fatoe2x9iopt4Pt3%2B1exB11wTSsNBoaYiJE6bm7%2FZyocKBeIh8RrH0avQFKEqvYMBm%2FWg%2BSCCJlH5S98vOkfc7kh0fbqs%2B5ikbd4X8nTd6oLxEXslc5B4R9HeCx0IzXfuTH%2BO1UywthW8x9OMLYf2BRdPCgjKYkZ%2BakgVgycnnWazNfj&X-Amz-Signature=31a3f2a25f5aee1d6ac0560ce1bbb0cb24d4bb5f0b5c2d3b8efb76c9e9cd07e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJUHGFE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFLODI%2Bg%2BYgtsOnPxYfADgrEUzjvjVBFwVOpXfBXJLaoAiEA4%2BskJAwMf71AecDKsYz%2FpS9haWA93vbchyU50aN0Zysq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDND1%2B03v5nnEQu%2F5cSrcA6EYmGKpOhAhZTP4fGDNuIOgjX2wiHAWW%2B%2B0EqcJuM%2FeK5OphbsZh8CUQUTkpfjrG4FpNpD3UCjm%2FnWD2K7UI0wn0QBAzEgBCKkl%2Flsc2V0iFpwC8Qy%2FKcgXHEWrYlU5FAxilb6BSbdODf%2FEaF4chKhexA84a7ab6oQ608rckxTHADLpT0yHZxikCMrB06Ihg0RqWT10dbmTyn2kV0P8aFuMJWdXbARPuw0A4SHFNDFRgcPNDJQs275xSECdOg2x9Jf4T59pgYfHkALTkdy1A0CyA%2BW177kQAf4tx4i%2BiOvNIColBDYkwcoDkjRz1NOMXhzENgagxBxrFcyPvHb4zduXb%2FcwBkLpFDdSZhYxCwpIkVb1Qxud23XcLYA13kRLhubrCp5UhL1L3te07C8cTZj3lZbFjAPzSmnF%2BAkm8zMpddH062EOCx7XGIzZIprVzSt%2FOvqFrnHHUIzKuc%2BNwVjCLJN%2BwBTW5vTCvNGScprF7gN9%2FWlrxtEeWqDvosieHbcF8GffSMjmtflsDDxjJAw9TwlJ2OhLcxD8cCvkgimXdbEKty9ERRYLcfCGkT9Li2CmmnppfwBTUUqQFQAV5AmnnOrMvWrrC76MDtspzgaiIdlxhlp%2B98RjwkqWMLjdwskGOqUB3l9K3se2T7A3P0qsN4XSNKhHfAXq9Q5RPKo2zJOETz3g%2Fatoe2x9iopt4Pt3%2B1exB11wTSsNBoaYiJE6bm7%2FZyocKBeIh8RrH0avQFKEqvYMBm%2FWg%2BSCCJlH5S98vOkfc7kh0fbqs%2B5ikbd4X8nTd6oLxEXslc5B4R9HeCx0IzXfuTH%2BO1UywthW8x9OMLYf2BRdPCgjKYkZ%2BakgVgycnnWazNfj&X-Amz-Signature=d739e812ded4b0b7a923919dca952a1b5b1821472f973ad1949bc0039e56c934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

