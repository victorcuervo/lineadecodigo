---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DDUQLM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCYmeorceYSznBEptLHC0LrYfPCoMia1Rp8Z9SaDFZlDQIgWEYJx5kC2GGnskGHrpWxOUBgWJ2X5A7EFQjwyBo95BQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDISHUxfFehOowxOmeircA%2BGCHl1ac09aSy0JZPa25rSkHbfLVPhXUWhhgQP7P8oxHLJN%2Br%2Fb7Fi%2Fvs6ZRir%2BaznG8G7TaI3tH%2B4PxgFbE%2F9p7DYJYqVvNSk9TA2GP5Yq%2B7M%2FT4649nPwksvicRz6tlNJaWaDIUelWIrSRGEMCtLivqAg8er4GSIXUj8XWYuYa5GoxmV2OZ2GsfY3dg33DvdMy8WdvvQ9hekkJb7jJxqCMuwN3DVV4HUPCLRp9GEzMQ3JH%2F8Sw6SYbnn3Vtr%2FIF%2FWvSTTdg7d%2BCkM7Bs3dAlMR%2B1gmiM%2BhIHiYZnxmnCsroSbaz7HqT6nCR2e2TU0QFwioRq9Y2FauepXEwg%2Bb%2Bw5nOZQG8IBW66hq%2BzdrYIwlyZbTFsj0TUaA4p96XIDVuPXKK%2BvG%2BCCxccyW4ZarGYN%2FAEoVNrusRoyeBTWc1e5GTZl%2BxuNNPkKtcwPiUvrIo7ZjbgEjIZPKccc0X69mYWcsi8SZ29SABNDHd21b92w1mlx1zwGmb%2B1H8eh20LhB%2Bt%2BxJNWpPeCNElOXp9cKDHzzg91bas8R3TI9BIJ5IB1ZX52m2LEWwbHEIZIBBLjADzwABW5ViQCYweJjK1Ea%2FzSeNyhA1E84f0tvQqNVlbBV7SgWHEByPUqZqEzMNLTw8kGOqUBbUsjSS7KvtkmHLgLgy2jdgGI8juKb5jfI5P5p5zbsDQLnjEroTABqMQ%2FhOiskbB7ekX7F7yAIaOnt3YUVpPTIvzxfG31%2FBo42dj7ca%2Fxl%2BWBGYseUxpUwoUvL%2BHrNwonND9dgq6Yibe6lHINAYwQsNSRXZnUB07MBuf64zfjfXJ8Z5XziuDrY5U0FJl5eCp6E1ySIRSdniRK0WNpuTTfqo7rt6K8&X-Amz-Signature=8ec481e80460f0970be112fa47e2db7edacf214603893158d965d3239708e4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DDUQLM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCYmeorceYSznBEptLHC0LrYfPCoMia1Rp8Z9SaDFZlDQIgWEYJx5kC2GGnskGHrpWxOUBgWJ2X5A7EFQjwyBo95BQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDISHUxfFehOowxOmeircA%2BGCHl1ac09aSy0JZPa25rSkHbfLVPhXUWhhgQP7P8oxHLJN%2Br%2Fb7Fi%2Fvs6ZRir%2BaznG8G7TaI3tH%2B4PxgFbE%2F9p7DYJYqVvNSk9TA2GP5Yq%2B7M%2FT4649nPwksvicRz6tlNJaWaDIUelWIrSRGEMCtLivqAg8er4GSIXUj8XWYuYa5GoxmV2OZ2GsfY3dg33DvdMy8WdvvQ9hekkJb7jJxqCMuwN3DVV4HUPCLRp9GEzMQ3JH%2F8Sw6SYbnn3Vtr%2FIF%2FWvSTTdg7d%2BCkM7Bs3dAlMR%2B1gmiM%2BhIHiYZnxmnCsroSbaz7HqT6nCR2e2TU0QFwioRq9Y2FauepXEwg%2Bb%2Bw5nOZQG8IBW66hq%2BzdrYIwlyZbTFsj0TUaA4p96XIDVuPXKK%2BvG%2BCCxccyW4ZarGYN%2FAEoVNrusRoyeBTWc1e5GTZl%2BxuNNPkKtcwPiUvrIo7ZjbgEjIZPKccc0X69mYWcsi8SZ29SABNDHd21b92w1mlx1zwGmb%2B1H8eh20LhB%2Bt%2BxJNWpPeCNElOXp9cKDHzzg91bas8R3TI9BIJ5IB1ZX52m2LEWwbHEIZIBBLjADzwABW5ViQCYweJjK1Ea%2FzSeNyhA1E84f0tvQqNVlbBV7SgWHEByPUqZqEzMNLTw8kGOqUBbUsjSS7KvtkmHLgLgy2jdgGI8juKb5jfI5P5p5zbsDQLnjEroTABqMQ%2FhOiskbB7ekX7F7yAIaOnt3YUVpPTIvzxfG31%2FBo42dj7ca%2Fxl%2BWBGYseUxpUwoUvL%2BHrNwonND9dgq6Yibe6lHINAYwQsNSRXZnUB07MBuf64zfjfXJ8Z5XziuDrY5U0FJl5eCp6E1ySIRSdniRK0WNpuTTfqo7rt6K8&X-Amz-Signature=000149b17a5d31bd19a676560c4dbcb4e2b3eb24cff6c36bd9f265b0f39baedf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

