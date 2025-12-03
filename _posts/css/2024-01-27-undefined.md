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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5N2PXZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD3L9lPD3dGh%2FPCd%2BqsneA%2B%2BHlJZXbcK1JCHCid5jIe9wIgKIeDLh2bIqVh9q5t7P0h6XJJ32N%2BSAwXgbOW08wu050q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIu2sSDx0S0NXgwCzyrcA06nz9sG1O87TfBC8SsMDaXv63hLXc7wtq00DAI0QmJ3KcIc40QxNdm1%2BzjAGoFUOnKm5f4uChDdJegmqQfYKsEoOipiGAKfDFcG3yoSB4ch%2F6GX6r%2BEXJ5TdCRHoUcp72u5yywAsbctHBcK%2FICZS4RQ8%2BqtC6l0hghNWnVYO7wgMiTg5AcFCz7xW%2FU6OfaEEp4gT1TdRknDSxRABhz6XrOYb7naZ%2FTI9UnXuBkFnKuZavwNz2A7xRHoDj7xwZpBhQ4maZYu6AHpbvZxx9prI5aU6BwTnsw5k5HWemh41U61qdoVPLY00qg1MvBw0mT06FN1FvaiaaRvadaWu6RWFhFZS86LdDGmAhHidfGtjZCC5XloFPwnpmZWTAB71bKIesnD5Z0XATnuLhYzebfMlTQlHax%2FzrLS2hnRZcVY%2F6jDhDjN0jxhRHfXEzKHNW3B4QGup0xqWaQXG7HAN5J7x8pv8bEoaTGCQVBTmeJmlJZKcH3KZ%2FxWBKSOfEWsdph7zmu50550dgrPS3AzVOVU3aP7i6eKQaGX3Vl4jOa43j%2FEc6G5maJS4swcrfwRdjRO8EW9Imo%2FfA%2BjjEsQK0b%2BFL8pnJj59u9cFhXIyS180z3RdAX%2Fh55%2BSeAM7X3PMMnUv8kGOqUBmUwHvk%2FJErTdLa9DJSs6L8Cr1D%2BO%2BZN%2BYpyXlM%2BbzSUanVt%2FJlwNyBM0QAD3Ft2zI3CXPcW0D2sA5lt%2BW9M%2Bu%2F4PcdFTcBRdr4cEjPNSGAWk01wHNka5tM6pbHN6cYnL0uZxx5p8DJNRcigZOgFelCfh%2Be3A5hgLsl8NExVAb8RrtANNQgEBSUT6pCmqQc9o3h3FirUZjWGF11X5dAhWwmugNl%2Bv&X-Amz-Signature=a73361c4570fd8b799f13bdb9d93cb5b7d3c75e942fc4b8d7088fd7cda4a90d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5N2PXZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD3L9lPD3dGh%2FPCd%2BqsneA%2B%2BHlJZXbcK1JCHCid5jIe9wIgKIeDLh2bIqVh9q5t7P0h6XJJ32N%2BSAwXgbOW08wu050q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIu2sSDx0S0NXgwCzyrcA06nz9sG1O87TfBC8SsMDaXv63hLXc7wtq00DAI0QmJ3KcIc40QxNdm1%2BzjAGoFUOnKm5f4uChDdJegmqQfYKsEoOipiGAKfDFcG3yoSB4ch%2F6GX6r%2BEXJ5TdCRHoUcp72u5yywAsbctHBcK%2FICZS4RQ8%2BqtC6l0hghNWnVYO7wgMiTg5AcFCz7xW%2FU6OfaEEp4gT1TdRknDSxRABhz6XrOYb7naZ%2FTI9UnXuBkFnKuZavwNz2A7xRHoDj7xwZpBhQ4maZYu6AHpbvZxx9prI5aU6BwTnsw5k5HWemh41U61qdoVPLY00qg1MvBw0mT06FN1FvaiaaRvadaWu6RWFhFZS86LdDGmAhHidfGtjZCC5XloFPwnpmZWTAB71bKIesnD5Z0XATnuLhYzebfMlTQlHax%2FzrLS2hnRZcVY%2F6jDhDjN0jxhRHfXEzKHNW3B4QGup0xqWaQXG7HAN5J7x8pv8bEoaTGCQVBTmeJmlJZKcH3KZ%2FxWBKSOfEWsdph7zmu50550dgrPS3AzVOVU3aP7i6eKQaGX3Vl4jOa43j%2FEc6G5maJS4swcrfwRdjRO8EW9Imo%2FfA%2BjjEsQK0b%2BFL8pnJj59u9cFhXIyS180z3RdAX%2Fh55%2BSeAM7X3PMMnUv8kGOqUBmUwHvk%2FJErTdLa9DJSs6L8Cr1D%2BO%2BZN%2BYpyXlM%2BbzSUanVt%2FJlwNyBM0QAD3Ft2zI3CXPcW0D2sA5lt%2BW9M%2Bu%2F4PcdFTcBRdr4cEjPNSGAWk01wHNka5tM6pbHN6cYnL0uZxx5p8DJNRcigZOgFelCfh%2Be3A5hgLsl8NExVAb8RrtANNQgEBSUT6pCmqQc9o3h3FirUZjWGF11X5dAhWwmugNl%2Bv&X-Amz-Signature=c7cf55e732baced5abdcbfa1688f32e79b8bd7e715ca325001c73c442b7e93d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

