---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZK6MGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0Qx2AEf2wSA8EnKb%2F8lN7PLr8xsUZySkG68I3QAuQAiADEJBh6FDPIOGa0xr6Ou1fGoSi5eSgmrBhv9NjstgzwiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsjEVZtG8Wr6efDHsKtwD6lmBTIThju9E%2Fi9Osi%2BGB8Jmy3nJl79jwHzGngLTD08zyGYwCOYSdFK4YjREhXA33n1mklZMPSUNW97kMklGbkkDV890ix0pjmLo9RduUvn6IDn6W8jD2Hx9grrfehx1VXDG70Z7N2zkyKc7gXjsK2XVKDDZrUb%2BwjeSk8N5ndwyxiPQjvYEc0QmC3i3WUIKU5Scg1hU0Yp3%2FiZ4gFlBEqnlyW%2BubLgBzbf7LrbBb3ywhPLyfFx7ZuqpDivT5gd0sJnb6pzGalLVcUxAIGKjglWvaK36udIG%2BtHqXeFRG3pRPZvWmDRJKy8AnfN%2BBoreODfQ%2F37W8HapUeVHebV8E8tAOgFbGG1cs0lDprq66dVkSdlq3p8Ii%2BrNI6k2Q7ibohzuXTtHkavzMWUk9aBcrfCwImAQ9Z50DtgoNFR8Z5KS8Yg%2FiaCd%2F%2F8inTY%2Fjpzq1AqCSfN7uPVGamQ1OPxUM3IRt4%2F8r39q6ycFADPgemsNcsKnHWWm%2BvTykvpOZ%2FOvgBrPh498BlM08eBuSibZCs%2BNIq3Uwmw0GabmJVIjHhBzLFM7msNyrAvR3yi7uwf96R4VWoFr5BZ6Qdc1tJLYe6ZjUKPHIxBQB0d1zpk0PzVaMbr0BOH4IB7oEcIwv7TcyQY6pgFodx9wW4FxCAo4uLB2JsRohBcEJWItUEP1vnyTPPgm8R6y4iMgjLMK%2BHqKtt6Hw3g6FjItWNy%2FGsXrSebz%2FSGywZy%2B0BThhhN6cgb9bIJyFzv6KXEYyv5tvrkAjkZjqLdwP5BZ%2BzKvXR4UmeJ4MbyuifkNDxyYuwfHFQr%2Bl9Qs%2FsayIFevZugwW12Vxzf0dqbmI%2BWlXpygkl0vTOUczsb649CxVd1g&X-Amz-Signature=853ce1c9e4e124d0c5f1f427782a921bf69ab70ccd03e0382ce9427a9a946f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZK6MGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ0Qx2AEf2wSA8EnKb%2F8lN7PLr8xsUZySkG68I3QAuQAiADEJBh6FDPIOGa0xr6Ou1fGoSi5eSgmrBhv9NjstgzwiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsjEVZtG8Wr6efDHsKtwD6lmBTIThju9E%2Fi9Osi%2BGB8Jmy3nJl79jwHzGngLTD08zyGYwCOYSdFK4YjREhXA33n1mklZMPSUNW97kMklGbkkDV890ix0pjmLo9RduUvn6IDn6W8jD2Hx9grrfehx1VXDG70Z7N2zkyKc7gXjsK2XVKDDZrUb%2BwjeSk8N5ndwyxiPQjvYEc0QmC3i3WUIKU5Scg1hU0Yp3%2FiZ4gFlBEqnlyW%2BubLgBzbf7LrbBb3ywhPLyfFx7ZuqpDivT5gd0sJnb6pzGalLVcUxAIGKjglWvaK36udIG%2BtHqXeFRG3pRPZvWmDRJKy8AnfN%2BBoreODfQ%2F37W8HapUeVHebV8E8tAOgFbGG1cs0lDprq66dVkSdlq3p8Ii%2BrNI6k2Q7ibohzuXTtHkavzMWUk9aBcrfCwImAQ9Z50DtgoNFR8Z5KS8Yg%2FiaCd%2F%2F8inTY%2Fjpzq1AqCSfN7uPVGamQ1OPxUM3IRt4%2F8r39q6ycFADPgemsNcsKnHWWm%2BvTykvpOZ%2FOvgBrPh498BlM08eBuSibZCs%2BNIq3Uwmw0GabmJVIjHhBzLFM7msNyrAvR3yi7uwf96R4VWoFr5BZ6Qdc1tJLYe6ZjUKPHIxBQB0d1zpk0PzVaMbr0BOH4IB7oEcIwv7TcyQY6pgFodx9wW4FxCAo4uLB2JsRohBcEJWItUEP1vnyTPPgm8R6y4iMgjLMK%2BHqKtt6Hw3g6FjItWNy%2FGsXrSebz%2FSGywZy%2B0BThhhN6cgb9bIJyFzv6KXEYyv5tvrkAjkZjqLdwP5BZ%2BzKvXR4UmeJ4MbyuifkNDxyYuwfHFQr%2Bl9Qs%2FsayIFevZugwW12Vxzf0dqbmI%2BWlXpygkl0vTOUczsb649CxVd1g&X-Amz-Signature=80d95e742997d274efc0e624a67edd87fb4e3fc5dbf33887272673cfa0fc55b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

