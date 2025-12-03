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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RSG5LFG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC6NNfuqwl2cfxw1bGvocA%2FuZp1ycs19D%2F4DkIXJ2hp9AIgLjoItm1WALASn9NgB8GSGa%2B%2FW1PbPVf7JgzuGkNd7PMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOH0nBEpoV2AQ%2FZqhCrcAymoIHje7Ts2t2QiYBF3TzIgDhTQjAHe16WRL6JRHXAPXPhyNBhzgn2oRoJblewyh1XjtCOcSnKrQxMvCp1qP5yrodUl29tNaHAjg0IWDGabOOUNlCKat2uToezJ2okL5dQCb3jgfLr%2BvgAYh35OnC5f6Qnmvk0NboCEAPb4WvAU1rMw97BPD9N7elu8iIp9GcgyH8fv9yhM%2BbuOlz0x6YlbOiA9SOynzNaqIEvKYqBqK7jTAVXTTzseGdivcxFzaQqJ8esSY%2FLtHmriSKknnIBsI4qPFxzZJ8awtV5Ok%2FPIatA5GOTu8lS8Op3mznij6yVzJuURBTgpctjKNmbP7uKS5TlFaBsGNVsRsHfnm1o6ckYdHTkYm4UtjdjepcFzFV28TMv4BRTLwK6EMH3vNMv9Ko9cWIozkCyWieeRKqwVnHZNlXXUeE7eMnsegWxOvFL0AbFQz8UMEi0v6sJ1Au9htkwfCZn5ow0k1U%2Bxy66C4FicOQ9K7Tnq7B6eK8WwyzoAehwIXh3SpAbU%2BKG3%2BxK4QS7nMLCWyuwbWjmDm9Ovb9zxp5WMvvtA%2BHulGJi23ceEJSGRjpJeGtaRmJqCQBJczvmysLFvVw8enlsHsCkMF8F45i8M2DKX2b0HMNqSwMkGOqUBwKv3Mxm9Dt2GNB5rY%2FTg7FPp2rx3w89nEZODFuWee%2BCX0dImyB75WlImo0soDjCfBQOe0%2Fih%2BbnmmjCLMvn6a5qMds7AnRW%2FEy4OX6U5arlEJbFDgPlKM8NIBAFRyA3noeYL3duX22XjycyxChbrTxVUghNC%2FRuO%2BWDLYtAUvpvC55yQ9CcygfElMs0N1G5W%2FF9wZT1oXHkzeb2rkHLjhZsjERr2&X-Amz-Signature=cdcee41da5fcb3f73631af5f9b6f01418c5b97c37617c37bc12faa53721983da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RSG5LFG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC6NNfuqwl2cfxw1bGvocA%2FuZp1ycs19D%2F4DkIXJ2hp9AIgLjoItm1WALASn9NgB8GSGa%2B%2FW1PbPVf7JgzuGkNd7PMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOH0nBEpoV2AQ%2FZqhCrcAymoIHje7Ts2t2QiYBF3TzIgDhTQjAHe16WRL6JRHXAPXPhyNBhzgn2oRoJblewyh1XjtCOcSnKrQxMvCp1qP5yrodUl29tNaHAjg0IWDGabOOUNlCKat2uToezJ2okL5dQCb3jgfLr%2BvgAYh35OnC5f6Qnmvk0NboCEAPb4WvAU1rMw97BPD9N7elu8iIp9GcgyH8fv9yhM%2BbuOlz0x6YlbOiA9SOynzNaqIEvKYqBqK7jTAVXTTzseGdivcxFzaQqJ8esSY%2FLtHmriSKknnIBsI4qPFxzZJ8awtV5Ok%2FPIatA5GOTu8lS8Op3mznij6yVzJuURBTgpctjKNmbP7uKS5TlFaBsGNVsRsHfnm1o6ckYdHTkYm4UtjdjepcFzFV28TMv4BRTLwK6EMH3vNMv9Ko9cWIozkCyWieeRKqwVnHZNlXXUeE7eMnsegWxOvFL0AbFQz8UMEi0v6sJ1Au9htkwfCZn5ow0k1U%2Bxy66C4FicOQ9K7Tnq7B6eK8WwyzoAehwIXh3SpAbU%2BKG3%2BxK4QS7nMLCWyuwbWjmDm9Ovb9zxp5WMvvtA%2BHulGJi23ceEJSGRjpJeGtaRmJqCQBJczvmysLFvVw8enlsHsCkMF8F45i8M2DKX2b0HMNqSwMkGOqUBwKv3Mxm9Dt2GNB5rY%2FTg7FPp2rx3w89nEZODFuWee%2BCX0dImyB75WlImo0soDjCfBQOe0%2Fih%2BbnmmjCLMvn6a5qMds7AnRW%2FEy4OX6U5arlEJbFDgPlKM8NIBAFRyA3noeYL3duX22XjycyxChbrTxVUghNC%2FRuO%2BWDLYtAUvpvC55yQ9CcygfElMs0N1G5W%2FF9wZT1oXHkzeb2rkHLjhZsjERr2&X-Amz-Signature=35a8424776dc00c394182012c85d2cd15eef4db6fa24850c21de75d00b219e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

