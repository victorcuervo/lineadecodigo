---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466625BVMEZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDqCVkLjQx2Dg%2BmBFzcAt5INNY7VdXDd%2FNlDVnsAXO6cAiBXXsWoQcgZ1YZxmUBhyDIiXodF4vvM4nCmGlJk5hHJ%2BSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMAAEPA9rMNq88H7FUKtwDdWzsdSd2DFNRN5vMc6Eul0dhK9E%2BYN4qKj0OWfb86yv%2FxwAwmKgkGoGGGd07DtfrzSAzPz%2F0Na4KDvCVeHHhHiNCRVpp3dRvOpxxVPfJ1ZY3GgifWanI1WqPN7SZRkC3DD%2B2GcK0SGqIL2fRR5K%2FvBEd6LBTXb82t%2BAaifVq5YKO7esZlla%2FJT05C0nj6ia0ufC30b7G4f5VYUxDSmn%2BsL91mtrspDhXjw%2BUiLwG3tXf2mjgjhKBORISpLJ7jlzvN3VELoLEn0IGpfGiqd3H9AvxWbjCkZ11zNMg5QulW2nF%2B1bYOHY2CqJbA5ExGbzwMAZ4qmNXGKZA9UlfBgdocPOEbF2utiYjvX7ekIEBWRQ5yeSlnxC8l3Ah9GgThU0qgetG1m%2B1kyqdFt8H8CL1O38vjXIRt6qTmNrxuW%2BAIlijDvRmAXEuZ4%2BFmwhDMISlOHoPLbaCamJvA7%2F2E7Ildoa7FbGFOkoh7DAnubk0JZkPbJjZuuoGZG8Z0xD4K1te%2FXFcqIAiRrk7nueCpKDzOK6ipqoA4Q92a0YGRfhYNGFQFB02rUwuDVjg644eesE5LYehGiEVXr8NWMJEgXSSBTYd7caOTH6hwbvo%2BQMkpfr8axQjVVHR%2F1HtWaMwwaHGyQY6pgFfRIDjBJ48wEOxUh%2Bnw5c2T%2FwPIGp4H8XLEZzaI%2FOvTCcjTikYEtqnfbQemGtSpOjAJWucmECaqgSYFff4kUrumL1NXpGQnYUvUd4KlVjcHb5mPPnhYkWl9EnmgQmVvEEieZYe6nMeXJS%2BlLMklR%2F%2FFOJ3jcvDGrqgyIYcyBZII%2Fms2mSWpFndZ%2B8fwWWmz3NdpFSi%2FcRLD4TQdtVw1McyqQ9B7qCQ&X-Amz-Signature=88501ac528a8482bfe868bd4a3d73deccc4c449ad7f61ccc332d573a6921ef38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466625BVMEZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDqCVkLjQx2Dg%2BmBFzcAt5INNY7VdXDd%2FNlDVnsAXO6cAiBXXsWoQcgZ1YZxmUBhyDIiXodF4vvM4nCmGlJk5hHJ%2BSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMAAEPA9rMNq88H7FUKtwDdWzsdSd2DFNRN5vMc6Eul0dhK9E%2BYN4qKj0OWfb86yv%2FxwAwmKgkGoGGGd07DtfrzSAzPz%2F0Na4KDvCVeHHhHiNCRVpp3dRvOpxxVPfJ1ZY3GgifWanI1WqPN7SZRkC3DD%2B2GcK0SGqIL2fRR5K%2FvBEd6LBTXb82t%2BAaifVq5YKO7esZlla%2FJT05C0nj6ia0ufC30b7G4f5VYUxDSmn%2BsL91mtrspDhXjw%2BUiLwG3tXf2mjgjhKBORISpLJ7jlzvN3VELoLEn0IGpfGiqd3H9AvxWbjCkZ11zNMg5QulW2nF%2B1bYOHY2CqJbA5ExGbzwMAZ4qmNXGKZA9UlfBgdocPOEbF2utiYjvX7ekIEBWRQ5yeSlnxC8l3Ah9GgThU0qgetG1m%2B1kyqdFt8H8CL1O38vjXIRt6qTmNrxuW%2BAIlijDvRmAXEuZ4%2BFmwhDMISlOHoPLbaCamJvA7%2F2E7Ildoa7FbGFOkoh7DAnubk0JZkPbJjZuuoGZG8Z0xD4K1te%2FXFcqIAiRrk7nueCpKDzOK6ipqoA4Q92a0YGRfhYNGFQFB02rUwuDVjg644eesE5LYehGiEVXr8NWMJEgXSSBTYd7caOTH6hwbvo%2BQMkpfr8axQjVVHR%2F1HtWaMwwaHGyQY6pgFfRIDjBJ48wEOxUh%2Bnw5c2T%2FwPIGp4H8XLEZzaI%2FOvTCcjTikYEtqnfbQemGtSpOjAJWucmECaqgSYFff4kUrumL1NXpGQnYUvUd4KlVjcHb5mPPnhYkWl9EnmgQmVvEEieZYe6nMeXJS%2BlLMklR%2F%2FFOJ3jcvDGrqgyIYcyBZII%2Fms2mSWpFndZ%2B8fwWWmz3NdpFSi%2FcRLD4TQdtVw1McyqQ9B7qCQ&X-Amz-Signature=a5f4861a7fc4d79b418d90461123f50dd29926458f225df1a72a5b57ac710bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

