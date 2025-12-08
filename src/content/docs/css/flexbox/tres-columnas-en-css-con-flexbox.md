---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKAX675%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSqYuMrWMJ9dz2dy%2BvHb2lGVFgyqXXjoJ5uEfzSnlhOAIhAK3l99Wmu7wmi9pcunBGCeaEnC1MwKsnopP6hYh9sTq8KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8fd1sj%2BkRd9oD3iEq3APdzIoUArjI%2Fr0r9Q0TKCnScE87urb0dfzB%2BYBouDeUsLmqH%2FTPu9xef6viGyXwO4fkLg5fvXqG6bUENlFl5yyLC5pPb%2FNbck6D2CtCmo1HaPbqhSrzqAI%2FMxq%2F74yDR3y4RZvfgECrzp7S%2FaTvwhGwJi3TgrxKNBGHxHUTV0%2FHA3ABS8WdzG3FmFp0CmPP47MU17ywkTpAnDVR3tCth7fiRJLWruKtXrLl9rRsMJU7Ui%2F%2FLWIWeKw5EeXCum1ffvYcjqhEzfqvex1Jc07XltfMnswwlcaKA9LYuA%2BvyCdDwVjockcC10EUO%2FidFTtI9oiVFgXCiVVl5Ip5TQ1BSs7iZHBiYHx9YFwZA8CMcTlvLEYc5cthLOI%2BFT9VECTX288XoldRO0ntoetQnXCu1Cnm%2B87y5sihgyY8l4EsFBTnn7FMs9lsDCrDwRbg8qqq8h3oINgaN%2FV7rBYwqBo7sAMEUxotuBgbqqq20u10XZvgvY%2BSwZacKBf8F8KGINj09iZcQYPnYDvGeEx9HZQRLbVRucTwHqWRlVxF9lM3c2qzhBthhSffCZCw3ojaIv4K69AYiwLhLa3mXDo81A7aPJfXBTujuniFVTUHcrrxeYWMAUUFtB65fVLKUw6oKjCRgN3JBjqkAdYT9dMm99GBCFHbFW4S%2FrqgGR2TQcBAZ7gGBtWlFJ9OE7FSb8WKeNTDOpyHW4YFGwBA8vpbi4JG0Ywn9Pun%2FpG0GVrbAsBUGKsB9HYsgjJATa7pN0kHaUDVRU0Sixx1O9U7rPEreGvMGrYO0nlCUFLezIcqY50Fu2LQpCElN%2FSbHDgP7JEdw%2BOfhOrbxOFDad1opI%2F2HOp4mZJjbFUj2HiNXnI1&X-Amz-Signature=ae12eb1ca78b46550f0cae600b29239760890c387555a08fa19a147709133ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKAX675%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSqYuMrWMJ9dz2dy%2BvHb2lGVFgyqXXjoJ5uEfzSnlhOAIhAK3l99Wmu7wmi9pcunBGCeaEnC1MwKsnopP6hYh9sTq8KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8fd1sj%2BkRd9oD3iEq3APdzIoUArjI%2Fr0r9Q0TKCnScE87urb0dfzB%2BYBouDeUsLmqH%2FTPu9xef6viGyXwO4fkLg5fvXqG6bUENlFl5yyLC5pPb%2FNbck6D2CtCmo1HaPbqhSrzqAI%2FMxq%2F74yDR3y4RZvfgECrzp7S%2FaTvwhGwJi3TgrxKNBGHxHUTV0%2FHA3ABS8WdzG3FmFp0CmPP47MU17ywkTpAnDVR3tCth7fiRJLWruKtXrLl9rRsMJU7Ui%2F%2FLWIWeKw5EeXCum1ffvYcjqhEzfqvex1Jc07XltfMnswwlcaKA9LYuA%2BvyCdDwVjockcC10EUO%2FidFTtI9oiVFgXCiVVl5Ip5TQ1BSs7iZHBiYHx9YFwZA8CMcTlvLEYc5cthLOI%2BFT9VECTX288XoldRO0ntoetQnXCu1Cnm%2B87y5sihgyY8l4EsFBTnn7FMs9lsDCrDwRbg8qqq8h3oINgaN%2FV7rBYwqBo7sAMEUxotuBgbqqq20u10XZvgvY%2BSwZacKBf8F8KGINj09iZcQYPnYDvGeEx9HZQRLbVRucTwHqWRlVxF9lM3c2qzhBthhSffCZCw3ojaIv4K69AYiwLhLa3mXDo81A7aPJfXBTujuniFVTUHcrrxeYWMAUUFtB65fVLKUw6oKjCRgN3JBjqkAdYT9dMm99GBCFHbFW4S%2FrqgGR2TQcBAZ7gGBtWlFJ9OE7FSb8WKeNTDOpyHW4YFGwBA8vpbi4JG0Ywn9Pun%2FpG0GVrbAsBUGKsB9HYsgjJATa7pN0kHaUDVRU0Sixx1O9U7rPEreGvMGrYO0nlCUFLezIcqY50Fu2LQpCElN%2FSbHDgP7JEdw%2BOfhOrbxOFDad1opI%2F2HOp4mZJjbFUj2HiNXnI1&X-Amz-Signature=70193637b4e647a7aeb2d9af43fb7e0909505b1f63d32d24d7a50ac88ff1c8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

