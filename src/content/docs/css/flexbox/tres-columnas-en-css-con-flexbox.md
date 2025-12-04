---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYKYWBQO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF09%2FdNc0CsNOlSy6iSiuHE250yDdpHMfiMhnvi9YqJEAiEA6jdi49xObuuw4FRXJSoVhcTm3RfoBZVNIazlE2nnEaAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN5SNI8f5%2FYquQ7FqSrcAxEVv%2BMH7vH%2BWXXu%2FGYxHE%2FSUrOsykzZ%2FMdKRW1O2VTtaqP8CLSh55khCFD5gF4v5zQUocogbAckqOB8nsP4hUHSGrEUtHFBSfYEzlUPNl6utgSbgBwgtYq5QD75YSpB0avCpzfyItjFvsbJISuZnsn6mA8B5dnEhM7YD82ZcJjkWwZOhCt1TnqUWkSniMTeNXRkj%2Fu6RYwbbrJNP2g8hCsp40eAEQsFQDr1yvKNfiIGPm2V5spTCroQGI6j1QR5o86hk5BwKeeYbuqu5P%2B2zb7TxgO43KiUnxStCSLnJnHzpFKegNg7RNzyKoClLa28PSlbTiwxDploZVH%2F0Z%2F2gKSZW0vMXu9MIboeF%2Bh9TADIxGQIYwvuTxZopUUL1w93T7udvAgw1enMoJGnseMOtZ5r2b7cJLsF3KPuHSB%2BMu8Q2Kbt5guOW4viP5Wvla9FawFOKQBwFp1a42AVaPWB8Jg6tzhX%2BkpQSYxqOh84OG7yOEP11lqicOgkCmbMe%2BfYpEQfoYu45HOB64I2D7nK3ZOsI%2BuE2yxUtPEBwmppi6jVX%2FGe15HZdQ%2FalPMkoZj8orARGLZAgrT4fHDHVQsc37bi%2BbEzmqJTA5nwfnu%2FnrlzMneZdCXjAzEAVtR8MMWUw8kGOqUBJFITuxdwR0wJyFRuo69j38BSnNmDAXByU9W5rxAL9pe6VewpjiFJCaLwq18kk04V9RXZSe0rBclwi9HMoax6FFlXjozBPSXal7iYaLbHl87yjGsemvh2Q%2BAjMoNMv5c5kca4lP2eqHwN1%2BHL4NUZ%2F9e6NGlNY%2BKR25YYzOSq8ugIm9ViUE9Mpfb9NOanJmfEDk5DDtr4fzd%2FMBWSls1uWZeId%2Fwa&X-Amz-Signature=e2b199de4238809908cf0b28a1722356e7c78a4ea5e475d30553f8c0307150a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYKYWBQO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF09%2FdNc0CsNOlSy6iSiuHE250yDdpHMfiMhnvi9YqJEAiEA6jdi49xObuuw4FRXJSoVhcTm3RfoBZVNIazlE2nnEaAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN5SNI8f5%2FYquQ7FqSrcAxEVv%2BMH7vH%2BWXXu%2FGYxHE%2FSUrOsykzZ%2FMdKRW1O2VTtaqP8CLSh55khCFD5gF4v5zQUocogbAckqOB8nsP4hUHSGrEUtHFBSfYEzlUPNl6utgSbgBwgtYq5QD75YSpB0avCpzfyItjFvsbJISuZnsn6mA8B5dnEhM7YD82ZcJjkWwZOhCt1TnqUWkSniMTeNXRkj%2Fu6RYwbbrJNP2g8hCsp40eAEQsFQDr1yvKNfiIGPm2V5spTCroQGI6j1QR5o86hk5BwKeeYbuqu5P%2B2zb7TxgO43KiUnxStCSLnJnHzpFKegNg7RNzyKoClLa28PSlbTiwxDploZVH%2F0Z%2F2gKSZW0vMXu9MIboeF%2Bh9TADIxGQIYwvuTxZopUUL1w93T7udvAgw1enMoJGnseMOtZ5r2b7cJLsF3KPuHSB%2BMu8Q2Kbt5guOW4viP5Wvla9FawFOKQBwFp1a42AVaPWB8Jg6tzhX%2BkpQSYxqOh84OG7yOEP11lqicOgkCmbMe%2BfYpEQfoYu45HOB64I2D7nK3ZOsI%2BuE2yxUtPEBwmppi6jVX%2FGe15HZdQ%2FalPMkoZj8orARGLZAgrT4fHDHVQsc37bi%2BbEzmqJTA5nwfnu%2FnrlzMneZdCXjAzEAVtR8MMWUw8kGOqUBJFITuxdwR0wJyFRuo69j38BSnNmDAXByU9W5rxAL9pe6VewpjiFJCaLwq18kk04V9RXZSe0rBclwi9HMoax6FFlXjozBPSXal7iYaLbHl87yjGsemvh2Q%2BAjMoNMv5c5kca4lP2eqHwN1%2BHL4NUZ%2F9e6NGlNY%2BKR25YYzOSq8ugIm9ViUE9Mpfb9NOanJmfEDk5DDtr4fzd%2FMBWSls1uWZeId%2Fwa&X-Amz-Signature=6cf7c384e70116f0540b9b3de63eb019e4e455b87f23b2090cb2eb0aace4500b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

