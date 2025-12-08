---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624A4XLVH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwuGcL%2BXUC2pN5D6UTa0S9MKbyJn8JHY6BWphqRkEiWAiEAtYXLS4b543vaByyGFIBdf4eIWqQo%2BZW256nfiwab2KQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7Tm2tzLKlF8JJcXSrcA2TbWtuErI3PO8wG0qZ4s9cJBpjjgqeP8xosXJr%2FnzJ1MT%2F6MF4A7c08FtzHbNU3XSnnJXKLN9o2uJ4fwU840t5qYIvK3tfGCo5C%2B%2FXl5k%2BlxVPX7%2F0yPsa7S%2ByxV0t%2BAPodpxk4nhuIQvGOfHWs4sZFJLOHOUSmT%2Fh%2B0y2KC6Ex2l1gYJ%2Bx5vYZ%2FovKcw13NRR%2BGy9g3pSyjur2GbomqNxdO%2Bps1IAZaGY39TPPtexxc6248pLJqwyrKK2Dt%2Bb6omI43gaP5hOxnqSbqNXIpQS%2FD688tqDNH7U5bfHDxfvdbwBtN3tXoM8%2FqJrHod2ylEj%2FToTqBXZcqDgFnR2CHnMnmfZC3tAk1%2BX5JYxbeBBY%2Fg8Rfz3IbzqLOYTRmCLwjDC3FU8jdAY6nMvbhoSkZVhbXXNd0GwVeDCU7hkRtHVujtYfB1Ripmmdyx3irxOwxUsul%2Bq2vPzVwwoCBqNX34dtSS0sb3ziUZR51%2F%2F6Kx%2BSuxBBO6U%2BiG6dTVtwDazou3ZLMklhYpCuiGypVOpTMXY8hoYEV9UKNbmc7M1%2FTGRyqmZ4tsk%2FjtthLWSwYnEBpQyZO17uVk9BQFvZjwVRQmypQKt11eW8YEYvKkdkk%2FRaiLT6zFPOqM9dKBrVMODD28kGOqUBgDNKXX5jQqYifXj%2Bylmow4VR6ZeziyCglZ%2Fjf64%2FxS1HozH2XJii5Ts1vPcZ39dljZlGhFDXTdXz7iH2GI8byzJhKha9xZJ3w5gDa4%2FI76kcRqngTWiQ8RRwxYdS3AmWMfiJM%2Fs2mb6tvPlRh7aenQI2%2FWL6%2BujZJvWMvxDT99FUfbNSH8Fuv5uhZGj6ioCgAe8ATjs%2BwobgoUG8BBqGgVBcYFMT&X-Amz-Signature=09c26df1f65e4590acaafc542553fc6ba5bbd977acbfba14b782e50e860b88e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624A4XLVH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwuGcL%2BXUC2pN5D6UTa0S9MKbyJn8JHY6BWphqRkEiWAiEAtYXLS4b543vaByyGFIBdf4eIWqQo%2BZW256nfiwab2KQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7Tm2tzLKlF8JJcXSrcA2TbWtuErI3PO8wG0qZ4s9cJBpjjgqeP8xosXJr%2FnzJ1MT%2F6MF4A7c08FtzHbNU3XSnnJXKLN9o2uJ4fwU840t5qYIvK3tfGCo5C%2B%2FXl5k%2BlxVPX7%2F0yPsa7S%2ByxV0t%2BAPodpxk4nhuIQvGOfHWs4sZFJLOHOUSmT%2Fh%2B0y2KC6Ex2l1gYJ%2Bx5vYZ%2FovKcw13NRR%2BGy9g3pSyjur2GbomqNxdO%2Bps1IAZaGY39TPPtexxc6248pLJqwyrKK2Dt%2Bb6omI43gaP5hOxnqSbqNXIpQS%2FD688tqDNH7U5bfHDxfvdbwBtN3tXoM8%2FqJrHod2ylEj%2FToTqBXZcqDgFnR2CHnMnmfZC3tAk1%2BX5JYxbeBBY%2Fg8Rfz3IbzqLOYTRmCLwjDC3FU8jdAY6nMvbhoSkZVhbXXNd0GwVeDCU7hkRtHVujtYfB1Ripmmdyx3irxOwxUsul%2Bq2vPzVwwoCBqNX34dtSS0sb3ziUZR51%2F%2F6Kx%2BSuxBBO6U%2BiG6dTVtwDazou3ZLMklhYpCuiGypVOpTMXY8hoYEV9UKNbmc7M1%2FTGRyqmZ4tsk%2FjtthLWSwYnEBpQyZO17uVk9BQFvZjwVRQmypQKt11eW8YEYvKkdkk%2FRaiLT6zFPOqM9dKBrVMODD28kGOqUBgDNKXX5jQqYifXj%2Bylmow4VR6ZeziyCglZ%2Fjf64%2FxS1HozH2XJii5Ts1vPcZ39dljZlGhFDXTdXz7iH2GI8byzJhKha9xZJ3w5gDa4%2FI76kcRqngTWiQ8RRwxYdS3AmWMfiJM%2Fs2mb6tvPlRh7aenQI2%2FWL6%2BujZJvWMvxDT99FUfbNSH8Fuv5uhZGj6ioCgAe8ATjs%2BwobgoUG8BBqGgVBcYFMT&X-Amz-Signature=11a7d01bfcc0477d0a38dcd074165dd931baaae5a9a67c9ac8e010739f67574d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

