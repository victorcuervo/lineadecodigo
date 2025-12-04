---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKLBOZYN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD0vmvWcbu4kSsL8mjzYUJSHsRGVbFQBq0LnwfR7RbieQIgVjXc9jy104db53oXYBAUe%2ByuufX8NnzdzBW4TdJz5Uwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPY5DVMEYmnHh%2BsDWyrcA%2F0fAta1iW8O0W9WMT2RLcAhG05rQKvVom9dDbO8R%2B33M4uAnKAeYc8uXl66XSJY8%2FeyDtJ4sCBZ6aHGkMb69QngC4l9Qd79asfpxtBoWl4fqRHnQZHxnjB%2Fqh8Spdb5C9BWaczpRyUxytFUjnkFeoj3Aaf9do5C5sp5k4DYXnmHMd1DgUibLYMmTNlUBITHGilcGqWsuVUdH0lQ0i9CuQuP42A%2FpohHNku0hOiWWhcxmOupXmjGzkRP1wgDEzC2AIGObWcki%2F%2FEoWRo0IvVmjalcDAcUb94C09f4eR%2BZx2GRjCK%2BZmSUirzbiTlC6eKNwE7DdGvm47dc6OUy6TD2v89CdlmbMI3lKLqpmYQy2h9owro2sy%2FmB2VQ6PUjYBEor3iBSL5EE1gO%2FxCNQqaDXFZlUTEibI1EkFOsnU7OIElham4%2FdtnAB9xNxAhHv7cnEyOfNF9kjTRxmbNneXy5erz64489ZnmxbKZt%2BdvyCLnn233Wo9iri9DyFHCpbm9bHtvL8vFOnqujlGnKHintREvRKbZu0k%2BPfi9w8SI9c%2Fj%2FcylUZPvD2ECHu5k6u68ulEC%2Bjj6eCiFDMeE73IZRebk3XD74o5UudKPA%2FOG0YZVQ9KsX%2FCQ5admSx4CMLGVw8kGOqUBMZVw8QbGcERd2oGS5pl9t2Li9EAcWBOhO01%2BsOHo8e2QOZhhEZyBlJYulq6QtQelq8iafFEuyAsNBfKqDSVSKAF8TbAsv3PivpoN72QqYF0NN01y4usY%2FY4YDjEQFgTvT%2F8tO24SzzxTKqOpasUNHBZypq0sCQj4KHkiBi4O9SQrCBnj4V80v%2BFy0tr3UQvCITizHpj0lZiMe1e%2FhmPhVXZsmpq1&X-Amz-Signature=4282810aea00f874c7684d68183b6f4491eba17bea24d34cf8a773eb2d266aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKLBOZYN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD0vmvWcbu4kSsL8mjzYUJSHsRGVbFQBq0LnwfR7RbieQIgVjXc9jy104db53oXYBAUe%2ByuufX8NnzdzBW4TdJz5Uwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPY5DVMEYmnHh%2BsDWyrcA%2F0fAta1iW8O0W9WMT2RLcAhG05rQKvVom9dDbO8R%2B33M4uAnKAeYc8uXl66XSJY8%2FeyDtJ4sCBZ6aHGkMb69QngC4l9Qd79asfpxtBoWl4fqRHnQZHxnjB%2Fqh8Spdb5C9BWaczpRyUxytFUjnkFeoj3Aaf9do5C5sp5k4DYXnmHMd1DgUibLYMmTNlUBITHGilcGqWsuVUdH0lQ0i9CuQuP42A%2FpohHNku0hOiWWhcxmOupXmjGzkRP1wgDEzC2AIGObWcki%2F%2FEoWRo0IvVmjalcDAcUb94C09f4eR%2BZx2GRjCK%2BZmSUirzbiTlC6eKNwE7DdGvm47dc6OUy6TD2v89CdlmbMI3lKLqpmYQy2h9owro2sy%2FmB2VQ6PUjYBEor3iBSL5EE1gO%2FxCNQqaDXFZlUTEibI1EkFOsnU7OIElham4%2FdtnAB9xNxAhHv7cnEyOfNF9kjTRxmbNneXy5erz64489ZnmxbKZt%2BdvyCLnn233Wo9iri9DyFHCpbm9bHtvL8vFOnqujlGnKHintREvRKbZu0k%2BPfi9w8SI9c%2Fj%2FcylUZPvD2ECHu5k6u68ulEC%2Bjj6eCiFDMeE73IZRebk3XD74o5UudKPA%2FOG0YZVQ9KsX%2FCQ5admSx4CMLGVw8kGOqUBMZVw8QbGcERd2oGS5pl9t2Li9EAcWBOhO01%2BsOHo8e2QOZhhEZyBlJYulq6QtQelq8iafFEuyAsNBfKqDSVSKAF8TbAsv3PivpoN72QqYF0NN01y4usY%2FY4YDjEQFgTvT%2F8tO24SzzxTKqOpasUNHBZypq0sCQj4KHkiBi4O9SQrCBnj4V80v%2BFy0tr3UQvCITizHpj0lZiMe1e%2FhmPhVXZsmpq1&X-Amz-Signature=0e45bd0594a2f2fed717b0f6665f754ac515dda7b8ff785d475fea5e392348a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

