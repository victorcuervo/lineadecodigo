---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZ52NHK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtYQiM7MCS1gBO3LUGELll1iXHSU3zHGjHg55kB2oGeAIhANaM3JvKl%2BkF0RImvLTljoR2nJNmYwNlKQH9kM%2BLh573KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzleYa8AFB3kgfKLRYq3AMYM8OM4JyraW2tzQT%2Fza4sb4qwtOGuOk9%2FHgnU6gcWoTPi%2FyHjdbyLbOy9yqgKOMaqagfdoGq7OgpScJBS6X1%2FRtG9mWKwJW06t1Rxoc48FwWTyGBkbm31Iz2XqDiR7i9In8My5BrUEVhwjUB7NaXY%2BWILkPjemUWyt7Ze%2BP066WQNImEahOTivrQkWVxR1CxxwBoh9ZRb1fisRhh%2BQeKVQ6jZxuuBFo%2FieOYFyyUYOshbizrpApEMBQJX8oonS1VD3lOEdqo5iVMbbrctjKl9PqBubbd3dNelQ3PtUn7dWN%2FuJprqUYDe73yFYZpNyZOOc4trvYobIm7hq1I5WjC%2F%2FATjkBzOckNuXAHCufBLyq42FmHRF4J8EgGOlh9M1vuoAxVPvmimbFElP4sfl0jwYWv00RncMVRXqAplQGEW1LZxvZAllbswwVowCNhy63kSwY8AQ8J8ziKibg%2BUDYvNnYhJPrCteAKsfss4PMmYDYhdmwsGB2i5uesrJbNSXZCcOQYWSudCJURSYgNqcY7Z0JXQnBVXrQ%2BrFd2yxjP%2BqjroIL0IQxMulhPRuVauKW6Zq1SmyNUqC2ius%2F%2FR%2FGKLrAXmTGFZICzN9jUxXCj%2BMaLKDVftyParffHiiDD%2B%2F9zJBjqkAZP9V1zmfQq3%2FkcDufHVciPALulV148ilI3LAeCBiuVz4WwzHgCdiVtbOTUp%2BbBBUcmyO7akgd4h5rA57ifJY9girMhaMqSQxpSBRVNdwH9VZ40Nd31KTyYilYV2prJDs0rVf5j5Mp0Z%2BkZVfm11XT0oPQ5%2BPr95SGoZln80FIaPQi1g57mxXmGI9NSAbw4Bx3uGKAJYPi%2FmwqXkMOneyrlyBQsZ&X-Amz-Signature=beadddb794913a6cf140fdaf2a8edfc82f07109893403397822b1eff6459fdc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZ52NHK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtYQiM7MCS1gBO3LUGELll1iXHSU3zHGjHg55kB2oGeAIhANaM3JvKl%2BkF0RImvLTljoR2nJNmYwNlKQH9kM%2BLh573KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzleYa8AFB3kgfKLRYq3AMYM8OM4JyraW2tzQT%2Fza4sb4qwtOGuOk9%2FHgnU6gcWoTPi%2FyHjdbyLbOy9yqgKOMaqagfdoGq7OgpScJBS6X1%2FRtG9mWKwJW06t1Rxoc48FwWTyGBkbm31Iz2XqDiR7i9In8My5BrUEVhwjUB7NaXY%2BWILkPjemUWyt7Ze%2BP066WQNImEahOTivrQkWVxR1CxxwBoh9ZRb1fisRhh%2BQeKVQ6jZxuuBFo%2FieOYFyyUYOshbizrpApEMBQJX8oonS1VD3lOEdqo5iVMbbrctjKl9PqBubbd3dNelQ3PtUn7dWN%2FuJprqUYDe73yFYZpNyZOOc4trvYobIm7hq1I5WjC%2F%2FATjkBzOckNuXAHCufBLyq42FmHRF4J8EgGOlh9M1vuoAxVPvmimbFElP4sfl0jwYWv00RncMVRXqAplQGEW1LZxvZAllbswwVowCNhy63kSwY8AQ8J8ziKibg%2BUDYvNnYhJPrCteAKsfss4PMmYDYhdmwsGB2i5uesrJbNSXZCcOQYWSudCJURSYgNqcY7Z0JXQnBVXrQ%2BrFd2yxjP%2BqjroIL0IQxMulhPRuVauKW6Zq1SmyNUqC2ius%2F%2FR%2FGKLrAXmTGFZICzN9jUxXCj%2BMaLKDVftyParffHiiDD%2B%2F9zJBjqkAZP9V1zmfQq3%2FkcDufHVciPALulV148ilI3LAeCBiuVz4WwzHgCdiVtbOTUp%2BbBBUcmyO7akgd4h5rA57ifJY9girMhaMqSQxpSBRVNdwH9VZ40Nd31KTyYilYV2prJDs0rVf5j5Mp0Z%2BkZVfm11XT0oPQ5%2BPr95SGoZln80FIaPQi1g57mxXmGI9NSAbw4Bx3uGKAJYPi%2FmwqXkMOneyrlyBQsZ&X-Amz-Signature=9c311e976ccc6d3cff5fa65089bd69c93febec0a43f88cee08e11d8dab67e4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

