---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNABM7J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKBOztD%2FXl8rn5Fmi4nJ8kvl8Ko%2BzVmLRRDi8JfRK6vAiEAyuQS1ptihbGBfO0AiplVmqXh9dSD7YQ7queSLmORb2kq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFudbNH5JWwveY%2FdCircA%2B8uAKqAvd0AA%2Bmn9dZb9UWnW8AYyEDta4MGHbB6ynpKnzLBLMhyaLGWc0WtD71hXHiR6zdDdKTptv8CfsO3tWdA64HnGs2%2FABjmXfV8tHmDO2NdmhFygFBS9egLQG4sBh0tgtAxVe8kawkms5aBntcrVnp00ng9P%2BDij8aDxTnB8rPYoyCRLP%2BBsTLf6kYS8zCbwrZf5PRb5Y5BqREL3ZIPHsdF6nHgi5vNqIyVbuglri4ruiRok7YHOK5fVgxYmqNqMGmQ6cpKfqlhBVrf%2F0iG2%2B1Jq65VLgbAIgOLb90LDuimv2WZJqrjn%2BHl%2BszT1qtB9fJ28oHZG%2BCRYlGCCOYy5LkFLjvFFoti9LpOkFXLkIhSyaJsaLQ3hjFeeD6NQvT1PqKQ2WVpiHGHaPAvCmZ7jy1EO7EytKtVq72IGlBT3iZcgGC%2BHC%2BhbZhC84XTdyteoGQ4xIr0C5Ysfjd2QMcNA%2F0UtRDw0Q%2BKvSi6QKUhJsY%2FUbafrB0bZxvwZdjGG%2BKc2lXKDhUjn5x38yGMlleK8cV3KzktkmmQZXJFPjrXrGfCKLUZ%2F%2BDkDaANCb4NiyGZwgpKPBG57knEWTR6rjDJSyWm5iV20dpEicfzn1CQqrgALXnxUpcS0xXVMOfszMkGOqUBvIwQ1EHdqb5O3sUYTNJ1aVDEW5Ewz8oJrPIRhmVwfUekvNwgVF99xodwi%2FbTWig8Prz2zdhiqNRy3DoxxNz52Hj4Mgaq%2FJJRJJMucUPuRsjlNJIXvAJRjOdGdn9xPX6U1YCjL2vXmrI3V2YwuzlGu8uIckgRSEkiBNrXtxCan7iru%2B8WU0rqwvyc1T8htEO8PNw4VtGc5SPO6vrWWihtVfwIUFia&X-Amz-Signature=dc953f7b1ef9444c90de0682ef4e74781e330f5fd35be05e2d10488a4d8510b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNABM7J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKBOztD%2FXl8rn5Fmi4nJ8kvl8Ko%2BzVmLRRDi8JfRK6vAiEAyuQS1ptihbGBfO0AiplVmqXh9dSD7YQ7queSLmORb2kq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFudbNH5JWwveY%2FdCircA%2B8uAKqAvd0AA%2Bmn9dZb9UWnW8AYyEDta4MGHbB6ynpKnzLBLMhyaLGWc0WtD71hXHiR6zdDdKTptv8CfsO3tWdA64HnGs2%2FABjmXfV8tHmDO2NdmhFygFBS9egLQG4sBh0tgtAxVe8kawkms5aBntcrVnp00ng9P%2BDij8aDxTnB8rPYoyCRLP%2BBsTLf6kYS8zCbwrZf5PRb5Y5BqREL3ZIPHsdF6nHgi5vNqIyVbuglri4ruiRok7YHOK5fVgxYmqNqMGmQ6cpKfqlhBVrf%2F0iG2%2B1Jq65VLgbAIgOLb90LDuimv2WZJqrjn%2BHl%2BszT1qtB9fJ28oHZG%2BCRYlGCCOYy5LkFLjvFFoti9LpOkFXLkIhSyaJsaLQ3hjFeeD6NQvT1PqKQ2WVpiHGHaPAvCmZ7jy1EO7EytKtVq72IGlBT3iZcgGC%2BHC%2BhbZhC84XTdyteoGQ4xIr0C5Ysfjd2QMcNA%2F0UtRDw0Q%2BKvSi6QKUhJsY%2FUbafrB0bZxvwZdjGG%2BKc2lXKDhUjn5x38yGMlleK8cV3KzktkmmQZXJFPjrXrGfCKLUZ%2F%2BDkDaANCb4NiyGZwgpKPBG57knEWTR6rjDJSyWm5iV20dpEicfzn1CQqrgALXnxUpcS0xXVMOfszMkGOqUBvIwQ1EHdqb5O3sUYTNJ1aVDEW5Ewz8oJrPIRhmVwfUekvNwgVF99xodwi%2FbTWig8Prz2zdhiqNRy3DoxxNz52Hj4Mgaq%2FJJRJJMucUPuRsjlNJIXvAJRjOdGdn9xPX6U1YCjL2vXmrI3V2YwuzlGu8uIckgRSEkiBNrXtxCan7iru%2B8WU0rqwvyc1T8htEO8PNw4VtGc5SPO6vrWWihtVfwIUFia&X-Amz-Signature=093585e63e8dd8cb596deec899be0b3b1ec08a24e38a96d9fa4b711592ad4015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

