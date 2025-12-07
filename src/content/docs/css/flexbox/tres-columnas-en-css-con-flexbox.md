---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P6WN4B2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7DZVR7oMHSw%2FBhBBedFyaDQaPZNOcJ0KABCM7bpFPnAIhALJ%2FQpaTu%2FHOjHaQWHdJXsY1o0zYw5Mem0trO%2B794p0PKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9afUbWh%2B90CRI8Moq3AN1llm5Jzhud7vldJ0v0DHLF9g1ahU7rqctu%2FOwLQnu545p8wSt2seaqFkmTbkbh9QK%2F1NCWbJzO9U%2FDTLD5cNVOT2Aiyh9ZYcYvP3TdHpPPiTaI5AmFO5fwBchjAgdy%2FrKpvLTV3psAGVfW5vxf0r03WGRMzxj4i67I5tNTtE2x6Cap2p1LVFD6iqImXZdbWAarLQKFlVYWU457gqwWWziA1v%2Fe6nGnUjoQZFU%2BBiwCIEvvGij0aZWIx%2BxvYChUd3gS2xZ%2FERcEuiMfRUcIu46A%2FfyMNSVdcQ99fpxeo4bvGkNcy0icpVgiuGpeg0COm8D9vRT5xgLfmysl1S1B5UuxfW3cFWZmz%2FVuO6VyRFbx8FhmE795MKDrDDnTco5XtRxT3vc8rKqlc7nCah3xAkD6Qzsvssay2zCOpzUBgYv2Fqpmr8qCeM159dxINt0Rxn39Q8p9GKwWf1m%2BXqP2lphWSj4G6%2BOw1bdodaMho5xNAdb5tfJQq9GD3mKe0RvlAlrOKfYiVBRpwKOsaPYUdOgkhllLembuSVKnJyq%2BoadI9D0RoFQnnFHUD8XFaTuXNHG54Nfw6gRwvTSSxiGcj%2Fqbw9kIkiBuEgJSJlfbBy%2Bz8MjC4%2BbGNB8gF1hnzClotTJBjqkAQ6A8R10yk2sNu82Kly0L6zk5KtcfQ1FJ3d67u10gcIbCSqgAjQmd8BUDr5%2Fe2CYTeca7JSvDIz%2F1NChQmArJ%2BHccxwqZFQr1zhqxL0sTCIYIZdgggaDUQHC14FZ%2FPaScC4pvDOQ3uTadZ0gOJ1%2BfXfk48KgPYnoOMSNPKeUQ%2BJrJ%2BCeSTAd8yL43x%2F2Wice0nj4SzcwY5t4K0VMrOptsy1uYRqC&X-Amz-Signature=17cc9a2a28e6ee31fb3a890c8f01972528a3c038d1ea5157aa166d483ecf3a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P6WN4B2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7DZVR7oMHSw%2FBhBBedFyaDQaPZNOcJ0KABCM7bpFPnAIhALJ%2FQpaTu%2FHOjHaQWHdJXsY1o0zYw5Mem0trO%2B794p0PKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9afUbWh%2B90CRI8Moq3AN1llm5Jzhud7vldJ0v0DHLF9g1ahU7rqctu%2FOwLQnu545p8wSt2seaqFkmTbkbh9QK%2F1NCWbJzO9U%2FDTLD5cNVOT2Aiyh9ZYcYvP3TdHpPPiTaI5AmFO5fwBchjAgdy%2FrKpvLTV3psAGVfW5vxf0r03WGRMzxj4i67I5tNTtE2x6Cap2p1LVFD6iqImXZdbWAarLQKFlVYWU457gqwWWziA1v%2Fe6nGnUjoQZFU%2BBiwCIEvvGij0aZWIx%2BxvYChUd3gS2xZ%2FERcEuiMfRUcIu46A%2FfyMNSVdcQ99fpxeo4bvGkNcy0icpVgiuGpeg0COm8D9vRT5xgLfmysl1S1B5UuxfW3cFWZmz%2FVuO6VyRFbx8FhmE795MKDrDDnTco5XtRxT3vc8rKqlc7nCah3xAkD6Qzsvssay2zCOpzUBgYv2Fqpmr8qCeM159dxINt0Rxn39Q8p9GKwWf1m%2BXqP2lphWSj4G6%2BOw1bdodaMho5xNAdb5tfJQq9GD3mKe0RvlAlrOKfYiVBRpwKOsaPYUdOgkhllLembuSVKnJyq%2BoadI9D0RoFQnnFHUD8XFaTuXNHG54Nfw6gRwvTSSxiGcj%2Fqbw9kIkiBuEgJSJlfbBy%2Bz8MjC4%2BbGNB8gF1hnzClotTJBjqkAQ6A8R10yk2sNu82Kly0L6zk5KtcfQ1FJ3d67u10gcIbCSqgAjQmd8BUDr5%2Fe2CYTeca7JSvDIz%2F1NChQmArJ%2BHccxwqZFQr1zhqxL0sTCIYIZdgggaDUQHC14FZ%2FPaScC4pvDOQ3uTadZ0gOJ1%2BfXfk48KgPYnoOMSNPKeUQ%2BJrJ%2BCeSTAd8yL43x%2F2Wice0nj4SzcwY5t4K0VMrOptsy1uYRqC&X-Amz-Signature=e18014678af7574773f432e3cea3b61ca8832fabd879ec90fa0f92b8f72cac6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

