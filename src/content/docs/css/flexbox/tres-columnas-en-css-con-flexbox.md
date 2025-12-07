---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQYSX3B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdOIGToOtyxRpn%2Boo1HiWlbypkDxsWWZiti2X5gdUklAiA%2BQ1Wv%2FC993oiLMeww2ozaGxz9EEhkbmjt58Z518pwQCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYLNz6bNGzGQJ2K%2B4KtwDnuUE0hBOWzbQRfUUhpu3gBRCXLY6v7pUvstmTjB%2Bxedm9YStwSi27w6IhMQZ%2BHgN2vgWHdzRc23KNoSt%2Bpfv1jr7XNjMC1kHgzAfY9QzDYDantQZFPcR4zGR8vjbMH8NEe1T%2FPQ0BMS3retkCTER%2Bu%2FFrBuPS35jgUf6XUPm72kBCe%2B3ETuFTMRiEXmKpMRZVtLfOEalcaGQFjuIbI8mTRPXM44%2F3RrAsh5CH8hc9tj8wAPgcKkKeA0viaEpVWtEmfaWyqa2vcWawhs5BHXF8oumG9BgsrK2eLEQ0GwUJAyXQ0gyDvpXIIZmrTk7QTRX0l80Y3qXcK7VI6oBBK8G08PbOrNuYaTbzuSRnmzOzVlvzGrIYbxiirXEoRwipbnuQ0lthecOGcCR9NySzo9dPB8A0zNz1EAo7cjLXo6wtLKQkF6NZrGpBzUbDCEL5xBxlo9Qff7DnjY1CfvwZYNsg5l44KQV5ZdueuhkfXT03%2BHDk2tLla9ExpleYepusXjrv%2BDSMJderY4YHFAXvfzdbQq4jpPg78sNOgTrAI31CoG%2FcZ%2BoVCt0yu1jYT6zWmd%2BKlp1Y67rhC8iKndUu6Fa77o4Dyog15jFcqlF7jXH4D8vpvZ1JQdN0A22d3Yw%2FaPUyQY6pgFrN%2Bql6fIclDfrC6lu7OdAcvx%2FB8Am%2BEdrDQv%2BCzU9z5gj2IiuEQd1fBqV6nZ1W%2BU7QxVLLeJP2qak0tQdsoc9ZJ2SJNwFBJQUs9kzCg%2Bha0kZeVLiDdkzroMvXIBC%2F2QR6E5igiIEQtN0RO7dDhiv9byiFFfS2KfDxpR%2FIwciIsEclH1kHxIgXG3SOJOw90B1tIHd07jtXRNtaBWHQ3gmiVf8EY5o&X-Amz-Signature=5f066b2bdbb8612e15e1a251bfd7d3dbc78cdebf1c1e34f421f5a58df366da23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQYSX3B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdOIGToOtyxRpn%2Boo1HiWlbypkDxsWWZiti2X5gdUklAiA%2BQ1Wv%2FC993oiLMeww2ozaGxz9EEhkbmjt58Z518pwQCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYLNz6bNGzGQJ2K%2B4KtwDnuUE0hBOWzbQRfUUhpu3gBRCXLY6v7pUvstmTjB%2Bxedm9YStwSi27w6IhMQZ%2BHgN2vgWHdzRc23KNoSt%2Bpfv1jr7XNjMC1kHgzAfY9QzDYDantQZFPcR4zGR8vjbMH8NEe1T%2FPQ0BMS3retkCTER%2Bu%2FFrBuPS35jgUf6XUPm72kBCe%2B3ETuFTMRiEXmKpMRZVtLfOEalcaGQFjuIbI8mTRPXM44%2F3RrAsh5CH8hc9tj8wAPgcKkKeA0viaEpVWtEmfaWyqa2vcWawhs5BHXF8oumG9BgsrK2eLEQ0GwUJAyXQ0gyDvpXIIZmrTk7QTRX0l80Y3qXcK7VI6oBBK8G08PbOrNuYaTbzuSRnmzOzVlvzGrIYbxiirXEoRwipbnuQ0lthecOGcCR9NySzo9dPB8A0zNz1EAo7cjLXo6wtLKQkF6NZrGpBzUbDCEL5xBxlo9Qff7DnjY1CfvwZYNsg5l44KQV5ZdueuhkfXT03%2BHDk2tLla9ExpleYepusXjrv%2BDSMJderY4YHFAXvfzdbQq4jpPg78sNOgTrAI31CoG%2FcZ%2BoVCt0yu1jYT6zWmd%2BKlp1Y67rhC8iKndUu6Fa77o4Dyog15jFcqlF7jXH4D8vpvZ1JQdN0A22d3Yw%2FaPUyQY6pgFrN%2Bql6fIclDfrC6lu7OdAcvx%2FB8Am%2BEdrDQv%2BCzU9z5gj2IiuEQd1fBqV6nZ1W%2BU7QxVLLeJP2qak0tQdsoc9ZJ2SJNwFBJQUs9kzCg%2Bha0kZeVLiDdkzroMvXIBC%2F2QR6E5igiIEQtN0RO7dDhiv9byiFFfS2KfDxpR%2FIwciIsEclH1kHxIgXG3SOJOw90B1tIHd07jtXRNtaBWHQ3gmiVf8EY5o&X-Amz-Signature=2075dc81c028506cd49061458f6627932fbe9d676e6b746e75f9c4309121d211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

