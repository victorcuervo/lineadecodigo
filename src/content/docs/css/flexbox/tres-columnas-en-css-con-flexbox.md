---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEMWFLR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC9E4wIcq2TLr4YJNAl9BFKyGgNSJIUkAVPiei2ta%2F0bAIhAOdoYFqmaoS2E%2BkDQ0leRWk0RtVRiAKccu0XZAKbMcutKv8DCEUQABoMNjM3NDIzMTgzODA1IgxWLwQm4v3hWOyVBH4q3ANrG1yeXiLpN71XSALWbjAEBXvpC41oAvFmfOVI50fGxrDj6FmbF5Uwf4G59R5dZec7d0DOy6JYPCnXMLQZQn4zFDvH%2FJHlhpFqprqqd4OTfXw0iRbStMXuIX002RVrOLJXs4eiRTbGUkQOVU7R6Hj0VCOJ2BnCbtoCJwU3KpCoa0lCjiXaq9QdlxDnA1rHWfpg2XRjPfSamrgBhs7%2FrtBaz%2B%2BZOyRP1mt54inz94tqQVPK2jHHjeH8Pq%2FnIejHo37Xjq2pYqISq4cg2LPHusN8URZMMYWXLjqGvVUdNFmKXXE1cI1XeGpiYESFIx%2B1ReOG9Cmk0LDUYyU5YoPxHevqILg7QIaqLQcqhMLmzSC8GxK1jHz%2BnD4VrdokEY59VxBjYL9JgcF7YD8qXWvdAv73ZGwgt9slwn77jFsZKgJTk7YIr%2FyLISVepJuSXsGPj6H508%2BOwiUbMpy83Fv8wjexyBwjxk8SZqTxpEtQscSuKuARreu3ba1AHh6N7Y27o82zuuSzOhr%2FT3Hi8PI9RHFU30WjMFCIFSmnCanyh%2BjFGsjRNeYP9TjR3N47O1zTGzV3uF9IvnKkKmKPbUuUS15Jm2jGYmZ%2F1wppTxpZMKqmWOMue8cGgvBZuJHaTjD05sXJBjqkAYGXUferqvzC2zATdnzRV2S0Jh0cc0PR5WXU1wRVi1YPrVkINh8%2BqDLKAcgXvkXOMc85OJNcHFmMgcBPHVHldSvDIJj%2BuBq6aNpAMlqgPcJaBsE0KiZo0DdQTnQ%2FYyTYJJsrCGUk3yYz3WQy76kDBhrmwWPeU%2FrJs4dPn9BFPcHJMd%2BiaIKrgss8SdxsqpzEnwd00RMYUtQ%2FUIXVwVLIonBfTw%2BI&X-Amz-Signature=ddf78d5566485432dcb0045b1a730f4f1669992a919aca6a95069a83825ba319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEMWFLR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC9E4wIcq2TLr4YJNAl9BFKyGgNSJIUkAVPiei2ta%2F0bAIhAOdoYFqmaoS2E%2BkDQ0leRWk0RtVRiAKccu0XZAKbMcutKv8DCEUQABoMNjM3NDIzMTgzODA1IgxWLwQm4v3hWOyVBH4q3ANrG1yeXiLpN71XSALWbjAEBXvpC41oAvFmfOVI50fGxrDj6FmbF5Uwf4G59R5dZec7d0DOy6JYPCnXMLQZQn4zFDvH%2FJHlhpFqprqqd4OTfXw0iRbStMXuIX002RVrOLJXs4eiRTbGUkQOVU7R6Hj0VCOJ2BnCbtoCJwU3KpCoa0lCjiXaq9QdlxDnA1rHWfpg2XRjPfSamrgBhs7%2FrtBaz%2B%2BZOyRP1mt54inz94tqQVPK2jHHjeH8Pq%2FnIejHo37Xjq2pYqISq4cg2LPHusN8URZMMYWXLjqGvVUdNFmKXXE1cI1XeGpiYESFIx%2B1ReOG9Cmk0LDUYyU5YoPxHevqILg7QIaqLQcqhMLmzSC8GxK1jHz%2BnD4VrdokEY59VxBjYL9JgcF7YD8qXWvdAv73ZGwgt9slwn77jFsZKgJTk7YIr%2FyLISVepJuSXsGPj6H508%2BOwiUbMpy83Fv8wjexyBwjxk8SZqTxpEtQscSuKuARreu3ba1AHh6N7Y27o82zuuSzOhr%2FT3Hi8PI9RHFU30WjMFCIFSmnCanyh%2BjFGsjRNeYP9TjR3N47O1zTGzV3uF9IvnKkKmKPbUuUS15Jm2jGYmZ%2F1wppTxpZMKqmWOMue8cGgvBZuJHaTjD05sXJBjqkAYGXUferqvzC2zATdnzRV2S0Jh0cc0PR5WXU1wRVi1YPrVkINh8%2BqDLKAcgXvkXOMc85OJNcHFmMgcBPHVHldSvDIJj%2BuBq6aNpAMlqgPcJaBsE0KiZo0DdQTnQ%2FYyTYJJsrCGUk3yYz3WQy76kDBhrmwWPeU%2FrJs4dPn9BFPcHJMd%2BiaIKrgss8SdxsqpzEnwd00RMYUtQ%2FUIXVwVLIonBfTw%2BI&X-Amz-Signature=a66cf4636059ccee0a6fddc56dc0d45364adaa6fcadbdc2cd53fb21c803ee997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

