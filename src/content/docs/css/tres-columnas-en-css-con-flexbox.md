---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM6N4FV3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD32OY4RGtNeoYKUcVMa5tJeWlU4LW6Sd64KyTuwrIjIAIhANAyN673olkJNSthcH5Zdt0BK5jrutgxrOQt5wHN1Nv1Kv8DCDgQABoMNjM3NDIzMTgzODA1IgxtkcwjAi59WNcWXYsq3AMC8BQWAerYnq%2FIkXkfCLwOk5DvqtQpximyQv%2F5S33J%2BEuBqL7Wd3JIeIT6PQ5f8TkC%2Bcaev1r2ndndETQRD5Vk4VvWaBThph2iAvTqkdFhX5eupSOpCCvofKExjP7pZa%2FYHq%2BSdBe66M9G2FRT8ht34gms%2BzHXDun3eUTy4grJjC7ZrCldm3oHDxj6gBs1uYw8H2zA32xm5tk%2B%2BcdRC8f3XMx2iEFirBJERIheNYHJ5R8CEQjnZFq8nqZ1ZZYmHBb9dlyImXfbNSjaXG5%2BhZZDvqI90jaOCzWQpRWKz8uiznIXkOtEdO1Vv74t749pyUD%2FSAp2WDRF7g8x3yhYowKUQvxtGDQ958W49sVg1Rt6se%2FLfU3CQ3u%2BERv%2F%2BAw4wYi%2FjAs3pUgYM%2B4hlbzAHPXU33Gtk5sEpiE5%2Bl3wryx70YY%2FvjVEPTSmnqNaj1LRcWqQozKrrkuS73L1wovqZgdOlgPXoHBpZrl4dq8y%2FwPRnXZyXOSl07QkQx1rMqf5MJwvbNHuGSmf7gB9AMPoDoLalXSFPK2mvxbuSLM%2BOD%2BOtW3pvMumQvrZU%2FvI0KRlZZl0itZeIJ2DjeSJVnNdxWa%2B%2BrF3MXha7qCfQlZN1ZtGFsT%2FOxTV8sSReKD2gDDC%2BMLJBjqkAR6kP0eXGYJH8TVOXC6UIGdJbUNbG%2FM8yx5xydewdOZ%2Fn%2BNWL1k4FbNcZOLhOThc8z%2FvVCIE3V8Vhm%2B%2FYWwrQpmqp%2FdujsXn80ZdEYus3Mp6KfTZURUIZs%2BnhJDWURpdsfigqWnfYoOfU40Lvz3bORLPufxaZT3OBObu7lM9vfoHHgiQcHVpl62CYlNpXnCDbsTFpSydECLWRvS%2Bbqh4p3lAWX4O&X-Amz-Signature=83f0e852844428001ba31c765f3fa1438927d2662cf31db83678f588a50ea8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM6N4FV3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD32OY4RGtNeoYKUcVMa5tJeWlU4LW6Sd64KyTuwrIjIAIhANAyN673olkJNSthcH5Zdt0BK5jrutgxrOQt5wHN1Nv1Kv8DCDgQABoMNjM3NDIzMTgzODA1IgxtkcwjAi59WNcWXYsq3AMC8BQWAerYnq%2FIkXkfCLwOk5DvqtQpximyQv%2F5S33J%2BEuBqL7Wd3JIeIT6PQ5f8TkC%2Bcaev1r2ndndETQRD5Vk4VvWaBThph2iAvTqkdFhX5eupSOpCCvofKExjP7pZa%2FYHq%2BSdBe66M9G2FRT8ht34gms%2BzHXDun3eUTy4grJjC7ZrCldm3oHDxj6gBs1uYw8H2zA32xm5tk%2B%2BcdRC8f3XMx2iEFirBJERIheNYHJ5R8CEQjnZFq8nqZ1ZZYmHBb9dlyImXfbNSjaXG5%2BhZZDvqI90jaOCzWQpRWKz8uiznIXkOtEdO1Vv74t749pyUD%2FSAp2WDRF7g8x3yhYowKUQvxtGDQ958W49sVg1Rt6se%2FLfU3CQ3u%2BERv%2F%2BAw4wYi%2FjAs3pUgYM%2B4hlbzAHPXU33Gtk5sEpiE5%2Bl3wryx70YY%2FvjVEPTSmnqNaj1LRcWqQozKrrkuS73L1wovqZgdOlgPXoHBpZrl4dq8y%2FwPRnXZyXOSl07QkQx1rMqf5MJwvbNHuGSmf7gB9AMPoDoLalXSFPK2mvxbuSLM%2BOD%2BOtW3pvMumQvrZU%2FvI0KRlZZl0itZeIJ2DjeSJVnNdxWa%2B%2BrF3MXha7qCfQlZN1ZtGFsT%2FOxTV8sSReKD2gDDC%2BMLJBjqkAR6kP0eXGYJH8TVOXC6UIGdJbUNbG%2FM8yx5xydewdOZ%2Fn%2BNWL1k4FbNcZOLhOThc8z%2FvVCIE3V8Vhm%2B%2FYWwrQpmqp%2FdujsXn80ZdEYus3Mp6KfTZURUIZs%2BnhJDWURpdsfigqWnfYoOfU40Lvz3bORLPufxaZT3OBObu7lM9vfoHHgiQcHVpl62CYlNpXnCDbsTFpSydECLWRvS%2Bbqh4p3lAWX4O&X-Amz-Signature=c71a58e62b257ea4e71376e68333f73a0d3fd7196e4655489d8c259e56f14117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

