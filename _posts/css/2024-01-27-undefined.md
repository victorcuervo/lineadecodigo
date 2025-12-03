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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PZDQEA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIF4GnFNnZQ2cTuVHyXKAupqW8xyZhMFnbANF1PChPFtbAiEA3MnJKMl3BONGFzoWgzGuISG1NosZLDH1L96jE9Xd%2BrQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEuS%2BKjoK46B8vrxAyrcAzVVywK55zCv5V0uC%2BsIRxjqAQnQibAFc9YqM95AMtOTurRtYB7Y%2Bvc51RIPP4G%2BsOHYzNfyvM8glMgo2IpiouExdQMjrs9fbdfoC2ViJhBZHxMQLgI4DjOSF%2B4zp8Be94b3ednQM0UOua91WObxFdfHUcF%2FbaUmZ4rlualXr86hRlgYktG5pv1R3Fch3oNrfsEd7KvzXoRMtuhMq9EOqBcauZVNBd7qIH%2Fd7Jwxh2KP1yo0QXtM2NmzTCf7LrinITnxZk7yCTQd5DpEnx9N1E7IyTdHkWU6evoGN%2F1%2BaDSXOSPWklt%2FJx%2F%2FdPaQ9%2BGJEPobgb1B9jzTFAmvCrIvznI1leoEfGRo6exfX17VIdc38ZE%2BoU6a%2Fr5MF058rwNBbagUubvUBwa8Oa6szlqo7JvfzW0WJPU%2BiFrg48WbGWRp1zgTC5mjSmgvpWLTLar0NuH2AfRCTo9TqHK7yEchFVCsAerT4Vy0BcYi4j6gV24dNldzqQdgxfPeeYvSChQ0ybs1iheTZhiZ3aX42EKOVDkd5y%2FV968Tjh5PL8fbUEW7aSWpcXUwtEbVPgGBGMN5JGA%2Bo8Cyqis2JZz7xuTAlCr0DMorruaY7SdUULQz8Z9U0mmchCUnepg7fCDgMLrNwMkGOqUBt%2FyiQxyjyRtbKd26dzVNBLOelYDpbLR%2FwTo4pMUdpSBxdFJAp370rPWRS0M5klC95GDYPvvXqvCKQEmkEPG0q7QzkmsN7i5kEQYk0%2FoPznv0vP4HexMz6Cvse%2F0XZp5BdM0XAGhF0ca9%2BM9Jx1iasgTnt1B5dgSpyHb0PjycGDqQFLk2%2FWxACAsnGYIrV9RwwW0niSdCnikr%2BAAJRmlVx0AsuRdk&X-Amz-Signature=246d807e70c0d048ac85cf498dd2b4c97fe4f22009f5a1f4883c26ea7a0573b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PZDQEA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIF4GnFNnZQ2cTuVHyXKAupqW8xyZhMFnbANF1PChPFtbAiEA3MnJKMl3BONGFzoWgzGuISG1NosZLDH1L96jE9Xd%2BrQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEuS%2BKjoK46B8vrxAyrcAzVVywK55zCv5V0uC%2BsIRxjqAQnQibAFc9YqM95AMtOTurRtYB7Y%2Bvc51RIPP4G%2BsOHYzNfyvM8glMgo2IpiouExdQMjrs9fbdfoC2ViJhBZHxMQLgI4DjOSF%2B4zp8Be94b3ednQM0UOua91WObxFdfHUcF%2FbaUmZ4rlualXr86hRlgYktG5pv1R3Fch3oNrfsEd7KvzXoRMtuhMq9EOqBcauZVNBd7qIH%2Fd7Jwxh2KP1yo0QXtM2NmzTCf7LrinITnxZk7yCTQd5DpEnx9N1E7IyTdHkWU6evoGN%2F1%2BaDSXOSPWklt%2FJx%2F%2FdPaQ9%2BGJEPobgb1B9jzTFAmvCrIvznI1leoEfGRo6exfX17VIdc38ZE%2BoU6a%2Fr5MF058rwNBbagUubvUBwa8Oa6szlqo7JvfzW0WJPU%2BiFrg48WbGWRp1zgTC5mjSmgvpWLTLar0NuH2AfRCTo9TqHK7yEchFVCsAerT4Vy0BcYi4j6gV24dNldzqQdgxfPeeYvSChQ0ybs1iheTZhiZ3aX42EKOVDkd5y%2FV968Tjh5PL8fbUEW7aSWpcXUwtEbVPgGBGMN5JGA%2Bo8Cyqis2JZz7xuTAlCr0DMorruaY7SdUULQz8Z9U0mmchCUnepg7fCDgMLrNwMkGOqUBt%2FyiQxyjyRtbKd26dzVNBLOelYDpbLR%2FwTo4pMUdpSBxdFJAp370rPWRS0M5klC95GDYPvvXqvCKQEmkEPG0q7QzkmsN7i5kEQYk0%2FoPznv0vP4HexMz6Cvse%2F0XZp5BdM0XAGhF0ca9%2BM9Jx1iasgTnt1B5dgSpyHb0PjycGDqQFLk2%2FWxACAsnGYIrV9RwwW0niSdCnikr%2BAAJRmlVx0AsuRdk&X-Amz-Signature=d7b64f76c847db7c414f25ebb4fb7378b01b00ec130a05e75ca8a08216481f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

