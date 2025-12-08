---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6AJHCBG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYbuDLanJRXLI7ykDKWluV6IsON%2B7pvHTVZRR5s67u9QIgZ4UXa1bTk%2BGP7Gz70%2BFFs2dpxFMaY08oyhld6OjJFCkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2PTR9YY9HSm6I5mircAxPiwjgO0sG83CMGj1FuXXOrcJzex4Tv6Yxhkw4ORhEuUia8qNNJCQG29sQZeRMnHqbjNsHxmWvFi3rpmD2wVP53Ge7KEmK1mPOMTPKm0S8lWv4h9Ruf%2B87OZkwGGJD8ATLHlL7OgigxnekFHoFndZ%2FmyPhjDmy9nJ4ALBZoHuukM7Mws0S0Dz0HwL%2Fnb8Jkw7i2zrV32Hz4hfu0hlbvXn4e1H1QGsdF7KmZ3MsUNlbVsItDBYJNf25wHjhcW0YIkbmCuAo2jpvvKn%2FbiuN6sUQd4qnx%2FYYpka6EWPvV8rFZ%2FkUJDazrVL8p2yVrUHywdPKemq9%2F1L72W3scP%2FCQzk7yLDJHy4hFP0kJ3dm4CakOZ%2BkYdejDQU8%2FmcXi1ur17z4l07%2BmuicApLmxcjjNOx7zn9lhuO1kJV1JJTsQIjKDvxtrBuyN%2BIU082uDiRrVQH6aik5U8vbuLTCU1RK0Qae5lhEgn1xaYLIEIY9zTKqxs3%2BJHw42%2BLbfBab0AxhD0pvP8Zlu8BQsDO7PnLdo%2BSBxjwISy5IYyU2tXlQvbquoaME8OUMFQ4pS3LUJFYboYmszRK6p14Z6M6c7mdrHA%2FkI32A4wdDqeT5Pcbxjk2xmV7Ah%2BvRWH8V0Cr8sMKmU2ckGOqUB7hx%2FXNZ6XHkr7oNPbFaXEmpdx03%2F1YGom0J4x8Lke36lbdOqfqOCvVsilaHnP3V5w%2Bf73qmc1x17osg5iFn%2BYtkbv6CpqMTNnE42rIaJwOENIJdh5I6GdJFI0Qh2AMGfptwEbSIEIuG0NC3Xp1JzypEHPdPu%2F2211x1LcB0Nd1pMEBmOapqd6rwft3%2BJPHC%2FZ55MI8TaCwvuZF%2FHwnsK5qR32gaM&X-Amz-Signature=2546e389bd11e8405118dcf3391070e4d823a3c9411abb001707dec1d22aedc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6AJHCBG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYbuDLanJRXLI7ykDKWluV6IsON%2B7pvHTVZRR5s67u9QIgZ4UXa1bTk%2BGP7Gz70%2BFFs2dpxFMaY08oyhld6OjJFCkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2PTR9YY9HSm6I5mircAxPiwjgO0sG83CMGj1FuXXOrcJzex4Tv6Yxhkw4ORhEuUia8qNNJCQG29sQZeRMnHqbjNsHxmWvFi3rpmD2wVP53Ge7KEmK1mPOMTPKm0S8lWv4h9Ruf%2B87OZkwGGJD8ATLHlL7OgigxnekFHoFndZ%2FmyPhjDmy9nJ4ALBZoHuukM7Mws0S0Dz0HwL%2Fnb8Jkw7i2zrV32Hz4hfu0hlbvXn4e1H1QGsdF7KmZ3MsUNlbVsItDBYJNf25wHjhcW0YIkbmCuAo2jpvvKn%2FbiuN6sUQd4qnx%2FYYpka6EWPvV8rFZ%2FkUJDazrVL8p2yVrUHywdPKemq9%2F1L72W3scP%2FCQzk7yLDJHy4hFP0kJ3dm4CakOZ%2BkYdejDQU8%2FmcXi1ur17z4l07%2BmuicApLmxcjjNOx7zn9lhuO1kJV1JJTsQIjKDvxtrBuyN%2BIU082uDiRrVQH6aik5U8vbuLTCU1RK0Qae5lhEgn1xaYLIEIY9zTKqxs3%2BJHw42%2BLbfBab0AxhD0pvP8Zlu8BQsDO7PnLdo%2BSBxjwISy5IYyU2tXlQvbquoaME8OUMFQ4pS3LUJFYboYmszRK6p14Z6M6c7mdrHA%2FkI32A4wdDqeT5Pcbxjk2xmV7Ah%2BvRWH8V0Cr8sMKmU2ckGOqUB7hx%2FXNZ6XHkr7oNPbFaXEmpdx03%2F1YGom0J4x8Lke36lbdOqfqOCvVsilaHnP3V5w%2Bf73qmc1x17osg5iFn%2BYtkbv6CpqMTNnE42rIaJwOENIJdh5I6GdJFI0Qh2AMGfptwEbSIEIuG0NC3Xp1JzypEHPdPu%2F2211x1LcB0Nd1pMEBmOapqd6rwft3%2BJPHC%2FZ55MI8TaCwvuZF%2FHwnsK5qR32gaM&X-Amz-Signature=f9745382f58ca5e6b46666ec5c5fe53b384cc0f7d7e25d37fc4b47c22715c081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

