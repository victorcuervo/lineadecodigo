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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE2K5XF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDsUOSGCnTiaCWPU4OZyKcCUDoDuxzZWy0QKOnu0tJ8UQIgVXa1mGpEcEdRxaR073ysgMF8AXIr%2BOg3VLPObp3PXOoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNai1kuyJoKZQPjuIircA38GXV%2BzHi4Q7je42sPMpDcRAJ8utD659NC0TgvEpzi%2Br593GU3pmMJ1AqeMeIk7QwNzbQkAimGmdn4a%2FOm1oHOwrux5pBcJddnnlOvaaF4SHkoG4u5ePOLQGGRpzY%2BUm5m9UJkS9ZiO5jAoowfE%2FkTK4lMpZwsugPDvcB3rkUQS9pnaO1tpOuJXgTWAOsITZIxVwdRug42Wq9%2FEEklaNpRAk%2BCsSlb8vQ7uirbXkoaYHA8TGpEaIBU1qIUhsCH7lKKZ0OHGn%2F94%2B%2BC%2BLPWY0SzF6v5ASNFu0HIbyMt3kcrAcVX3EgcCvfTiXh6vFoK51zr%2BOnJLoGignCOBzvjrdcP%2BzVyzyaDhss9Ah7uCN0lCt8maXlt6YQRqnLVWHGR1C4Czylx5qoz3xFaE2eXky%2BVpTB2VeOUMReNDp%2FsM%2FHvSye7d2DNQTZ2%2BYvrnZ6kb3VqRIbNToXpfOqKd3DNLiuIObNgTk4rnYy%2BGArIg5zrspNNgt9Oqg1f8%2FG5oIbVQKKcvkADC2KRywO%2BU2AFJfnGvAEv6KR3es882yFgIujJImBlnQXD1m%2F1cZryha8qzajgOD0YNluVswGtLjmvl9mm08vFvjqOfyzfiQMj%2BsBrBxyUk9Dr%2F0SDba5qFMPSSwMkGOqUBn4MMSOarHSnTl%2BPbcQz70yAQ4x%2BG%2ByuS7rV2BdAMIorhpOrdB9G%2BOkJE6on2OYSno%2FVDCkUWB6xZeuxxgMxHRwZ5JXqoah4TasjaSFAIRWL1QWUTKNgRC%2B5fab24x6oUublii9n3DLwhjIMuE1TDvze2Lmg6eXpn7tz7mrkHZ48IZ%2Byl9lyWvGQT44ASPCADRiAzqjdwUKb7GlPAfJkAeugRBMG1&X-Amz-Signature=9dd68c319b77e1831a341e184e45ed35b46bf8afec9a22d46255941e42f07ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE2K5XF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDsUOSGCnTiaCWPU4OZyKcCUDoDuxzZWy0QKOnu0tJ8UQIgVXa1mGpEcEdRxaR073ysgMF8AXIr%2BOg3VLPObp3PXOoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNai1kuyJoKZQPjuIircA38GXV%2BzHi4Q7je42sPMpDcRAJ8utD659NC0TgvEpzi%2Br593GU3pmMJ1AqeMeIk7QwNzbQkAimGmdn4a%2FOm1oHOwrux5pBcJddnnlOvaaF4SHkoG4u5ePOLQGGRpzY%2BUm5m9UJkS9ZiO5jAoowfE%2FkTK4lMpZwsugPDvcB3rkUQS9pnaO1tpOuJXgTWAOsITZIxVwdRug42Wq9%2FEEklaNpRAk%2BCsSlb8vQ7uirbXkoaYHA8TGpEaIBU1qIUhsCH7lKKZ0OHGn%2F94%2B%2BC%2BLPWY0SzF6v5ASNFu0HIbyMt3kcrAcVX3EgcCvfTiXh6vFoK51zr%2BOnJLoGignCOBzvjrdcP%2BzVyzyaDhss9Ah7uCN0lCt8maXlt6YQRqnLVWHGR1C4Czylx5qoz3xFaE2eXky%2BVpTB2VeOUMReNDp%2FsM%2FHvSye7d2DNQTZ2%2BYvrnZ6kb3VqRIbNToXpfOqKd3DNLiuIObNgTk4rnYy%2BGArIg5zrspNNgt9Oqg1f8%2FG5oIbVQKKcvkADC2KRywO%2BU2AFJfnGvAEv6KR3es882yFgIujJImBlnQXD1m%2F1cZryha8qzajgOD0YNluVswGtLjmvl9mm08vFvjqOfyzfiQMj%2BsBrBxyUk9Dr%2F0SDba5qFMPSSwMkGOqUBn4MMSOarHSnTl%2BPbcQz70yAQ4x%2BG%2ByuS7rV2BdAMIorhpOrdB9G%2BOkJE6on2OYSno%2FVDCkUWB6xZeuxxgMxHRwZ5JXqoah4TasjaSFAIRWL1QWUTKNgRC%2B5fab24x6oUublii9n3DLwhjIMuE1TDvze2Lmg6eXpn7tz7mrkHZ48IZ%2Byl9lyWvGQT44ASPCADRiAzqjdwUKb7GlPAfJkAeugRBMG1&X-Amz-Signature=ccf368e158c3d5613f9d1337d9a9a94cc73c1de7dd4da4048d065fa6045a081a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

