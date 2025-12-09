---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSDZPMJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdoS15jLD61bs026lzCeeEyU33tO92IixZqHTwBTQQFAiBiEG9xYRBrbOqRnz7iduQQyOTiawkUJK1TlgIS5hs6ICqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2BNH2GO%2F%2Fe20saUIKtwDkLfexU1Gj9qzj0gk1hgAocTDHU4xkgNQgJttfcTQPkYp1NuYqmf6ryVHWlmd14NwM9oCgYKWFIy99MAOLLXwIXF6F668znvdEca%2FJ1PJdSb5fJsJRTPgigDs4VvncvtSzpRF%2FWnEJEyaKkqzpvzRtGK4LFKlfhBTPOZ2rLaW%2FM3VLybIqNgebnqwfee1a6fdWr9LypGTljUKk%2BuSehO%2FDWyUlJTi6yLqU200ZIk3a%2BxTqptFqH2gTgj7U3maSewCI15phLN7HQM6tp16Bkn6ME3%2F0XTYuvy7isuODPr7W8%2FJh1Nny1SVMbsWKRJmr8MRr%2BTOnmjriQ3iJzvX6FGLRfb9Whtgy1pq%2BW%2F1oXk6RZmnk9Uoe3kWglhNEqHjgChWaA3uEAOPkFEXHuirKkwfG4xvq6ycETEaN9R5KNwpEvbZOVAFoKwVx6ckrWREC8NjC77NYngkQIdKOJJjMp%2BSCB3HHh0CNfZpTERQKZT85xDYJsfYSn%2FdaMxanhryHNvWXS2Hl5Fxc%2FvARPMO6qRxA2nrMSexND%2BvVD0l%2BiphpfR81GFPwvEIEZ%2BfRoOpA7rLMB49OjGwVmI5f3oUmYl3GJ7lkdB50CaV98iCdGlKhe6mPsGGliXevsvwmRowiIffyQY6pgFawRKSK2GAKk4SKVK80tGXnvsqGqdqYyeAag20tHIwc0%2BMmY0h3NDYSbK788Ix874AWLrWR5pIEtfp6hxrSSIZhxZsDR3ccG7%2BKvyhapqRCy9FyuMLfGqS7P2N5GESkRGnk6wEduzgDUB8%2F1FWHUAds1aOgUNWwd73v7hSLdqXFvRaNAFUVPt%2B8%2FfJbWFqUzk84uDBNTQ2d9YT4Sofa1PaxXq%2BO3uN&X-Amz-Signature=2f11c68e2198d86ac80a1e13e39cf5d503b86300c0c34971e2dc256ce4ff5384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSDZPMJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdoS15jLD61bs026lzCeeEyU33tO92IixZqHTwBTQQFAiBiEG9xYRBrbOqRnz7iduQQyOTiawkUJK1TlgIS5hs6ICqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2BNH2GO%2F%2Fe20saUIKtwDkLfexU1Gj9qzj0gk1hgAocTDHU4xkgNQgJttfcTQPkYp1NuYqmf6ryVHWlmd14NwM9oCgYKWFIy99MAOLLXwIXF6F668znvdEca%2FJ1PJdSb5fJsJRTPgigDs4VvncvtSzpRF%2FWnEJEyaKkqzpvzRtGK4LFKlfhBTPOZ2rLaW%2FM3VLybIqNgebnqwfee1a6fdWr9LypGTljUKk%2BuSehO%2FDWyUlJTi6yLqU200ZIk3a%2BxTqptFqH2gTgj7U3maSewCI15phLN7HQM6tp16Bkn6ME3%2F0XTYuvy7isuODPr7W8%2FJh1Nny1SVMbsWKRJmr8MRr%2BTOnmjriQ3iJzvX6FGLRfb9Whtgy1pq%2BW%2F1oXk6RZmnk9Uoe3kWglhNEqHjgChWaA3uEAOPkFEXHuirKkwfG4xvq6ycETEaN9R5KNwpEvbZOVAFoKwVx6ckrWREC8NjC77NYngkQIdKOJJjMp%2BSCB3HHh0CNfZpTERQKZT85xDYJsfYSn%2FdaMxanhryHNvWXS2Hl5Fxc%2FvARPMO6qRxA2nrMSexND%2BvVD0l%2BiphpfR81GFPwvEIEZ%2BfRoOpA7rLMB49OjGwVmI5f3oUmYl3GJ7lkdB50CaV98iCdGlKhe6mPsGGliXevsvwmRowiIffyQY6pgFawRKSK2GAKk4SKVK80tGXnvsqGqdqYyeAag20tHIwc0%2BMmY0h3NDYSbK788Ix874AWLrWR5pIEtfp6hxrSSIZhxZsDR3ccG7%2BKvyhapqRCy9FyuMLfGqS7P2N5GESkRGnk6wEduzgDUB8%2F1FWHUAds1aOgUNWwd73v7hSLdqXFvRaNAFUVPt%2B8%2FfJbWFqUzk84uDBNTQ2d9YT4Sofa1PaxXq%2BO3uN&X-Amz-Signature=f8d2cb740352d51b29a6fd3082cc57612dafbe00dc4ceade68d8d0d37454728c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

