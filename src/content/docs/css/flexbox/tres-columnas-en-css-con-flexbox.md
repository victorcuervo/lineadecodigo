---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2CHVXDX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWuybEkOwOSbLIKGRNpy0iRMWGaWo9oSvGMyD1R8mZhQIgc3badvqAayBWzuxhK8GExKVxdhD6PIqbxjnN5a8BjMIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMznpRAVqwmutu6CACrcAyDvdGwXvQcgFeCnRg83y%2F5BSutItP5NHOLsu5Y322zNvm511Lq8EK38XcoBW%2F4tlEsCvO%2BwuvwTbbnuzZihJq9GCl4SKLxTeSLyajzwvwlf5HxQ71I1rTy8AH37QFAtrVeyHX60lqI%2FeqOlRzmn4VzSqvT0ifpK6VSgj2FSBu3AMQzYYIh1ua8C2vW0D7piyT%2FyEK4WHYeW%2B6Z%2BwPjJMxefTOv1lLYsSFM9poRNqHHqkyGRA57ZxOdoLPqkYglCcQOP%2BHu1RBkA7kMqWMNhT%2BAxjIUSCRiBO2tXavIJLff3BLd%2BrKVNFR0z8hta0rptu54hbYgX%2FQ7sesFGqKyIUm7cMb%2FKt7ESyf2bCDqpB%2BdQ%2BUEp0o5RqwhpDxvZSd6dmBVQsnjb%2F497wESqM%2BkeUPvB5AYunhAqSShLoqOx6ZNp5pYw3BvkBaPqfEV9TYkzC5E%2BFOhgkFTjzamyfXVkH9y20TfuypPSCHlS4tCwbgkZ3Hk3EFzsN8b0A4x550U6H6zTJuIkE0RcpkT0emlKybMJ0iS%2BlTBkGqjp23SeqtG8K94HrqvnxQH87Iusea5Eb0GRUvK2%2BC4m8xSjtk6bj%2BH30BfmJqvmGATqHlcyOdGbYQnaVnMZ1CwPfDBYMOT8zskGOqUB532TwNJRHMTHc9zVWbewpm6%2BfkIYELHHDzliX7CxB7ZIj4bq%2BVhMgtTsxPd0oG7f%2B2qvnSDwS9J1DUlmkXdX2HenhwJ6f846B20LIN8FTeaa%2FHvZHBTUTBmuxYSyeU1S3fGoRLB4u4zTb3%2FPhFDj9aT%2F%2Fui7c50ARND%2BLNaFDW7hV7d3iWUFjzl8DChpzvElcIJtNmdpa5bcN1Dzk4dvtQGe%2FuBr&X-Amz-Signature=9d8801530ac3d276615dc4e9dde670b6dd2c41cef4540b972be175129b8fd5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2CHVXDX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWuybEkOwOSbLIKGRNpy0iRMWGaWo9oSvGMyD1R8mZhQIgc3badvqAayBWzuxhK8GExKVxdhD6PIqbxjnN5a8BjMIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMznpRAVqwmutu6CACrcAyDvdGwXvQcgFeCnRg83y%2F5BSutItP5NHOLsu5Y322zNvm511Lq8EK38XcoBW%2F4tlEsCvO%2BwuvwTbbnuzZihJq9GCl4SKLxTeSLyajzwvwlf5HxQ71I1rTy8AH37QFAtrVeyHX60lqI%2FeqOlRzmn4VzSqvT0ifpK6VSgj2FSBu3AMQzYYIh1ua8C2vW0D7piyT%2FyEK4WHYeW%2B6Z%2BwPjJMxefTOv1lLYsSFM9poRNqHHqkyGRA57ZxOdoLPqkYglCcQOP%2BHu1RBkA7kMqWMNhT%2BAxjIUSCRiBO2tXavIJLff3BLd%2BrKVNFR0z8hta0rptu54hbYgX%2FQ7sesFGqKyIUm7cMb%2FKt7ESyf2bCDqpB%2BdQ%2BUEp0o5RqwhpDxvZSd6dmBVQsnjb%2F497wESqM%2BkeUPvB5AYunhAqSShLoqOx6ZNp5pYw3BvkBaPqfEV9TYkzC5E%2BFOhgkFTjzamyfXVkH9y20TfuypPSCHlS4tCwbgkZ3Hk3EFzsN8b0A4x550U6H6zTJuIkE0RcpkT0emlKybMJ0iS%2BlTBkGqjp23SeqtG8K94HrqvnxQH87Iusea5Eb0GRUvK2%2BC4m8xSjtk6bj%2BH30BfmJqvmGATqHlcyOdGbYQnaVnMZ1CwPfDBYMOT8zskGOqUB532TwNJRHMTHc9zVWbewpm6%2BfkIYELHHDzliX7CxB7ZIj4bq%2BVhMgtTsxPd0oG7f%2B2qvnSDwS9J1DUlmkXdX2HenhwJ6f846B20LIN8FTeaa%2FHvZHBTUTBmuxYSyeU1S3fGoRLB4u4zTb3%2FPhFDj9aT%2F%2Fui7c50ARND%2BLNaFDW7hV7d3iWUFjzl8DChpzvElcIJtNmdpa5bcN1Dzk4dvtQGe%2FuBr&X-Amz-Signature=caf56fee46614f4decbaf5d04e0cbee063dff552f276068e6d5dbcf59acd9df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

