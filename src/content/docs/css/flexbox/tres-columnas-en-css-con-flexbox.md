---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEUCG7H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfDh81z2DI%2Bi09k12pQgAWFIomWjYhCZ%2B9dWvJaXBCuAiB7HOxF9%2Byj4foqgnPZ1g34tAkM2%2FVl6Qd7l7%2BOOJJQvir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM6ccLPnDCbpqsG1VaKtwDkcvPIntVGMlhQRoPQjsbhd2c2NxbHBYK99aSrPe0GuIGphYVUBumAuGGHiJc1uKalxMTGMcfkCxDfRk%2BdfmNdlYt8O9wPgh5bu2zMol3WW4hwAJFGiIPqLEAZodr4A48eUvFPqvGsDt45WvI9ivUs4Xoo4fXuxwNQK%2BsGYBHiJYarRfr6lIY2apdDME4xJryQM0jEqFpAKO%2BLz2LeH5CcnnPRvGMe38Ae9h0e2k5xDT5R3Dhb96fQR1wmasZfbXcB1XWIEcklYxQ%2BErvD%2BxUxPeVRWThFarQUqLLLSpYYSfxifGG3l5sxOEPJ81Dh8ICWVbUaX414xFoQ5IYxKyP2oxVRpdhHwUanve%2Baentygg4O30VTxsJ1PdFd9mhrz%2FO0yjumg%2BpZ6NIqmzoS3FPWk%2B5uRQvUm78IHIQCHs7FYJNO18ZHxiOC3%2FncaYxfgcqAZz%2Bdl%2FvTWQv0eRzYt0JybYNAmJDHQXG2KsvWQW%2FTZsP6oiImUjJIzFKYJ2POjPU0exD7Z%2FhcTsvJnw%2BruJcP2oyAzQ7XXWaFSTKaltxXY6IqFKnn6k6ktWe4ZM%2ByFmcNbUy29FNI4RGRdWqyceZkwiGd920cMv%2BQ1qdD8Rv1yf%2BrBWS9MsjgcJXSt4wnt7OyQY6pgE61NH6zv520Vy2opAEX%2BcDKrt9mYomg0j24Xi3oW%2BNzWXgV4H7S6woDr6%2FOftbKDL64VfKZyOuOnTA%2FGAWTI60rZ0qnVUJj9I32AXyONQeJhtDDtU%2FPxpMPeEkXg0H5deRXZM8%2FUtlat%2F%2FkDeITdOiG8pZ%2BjY%2BRnd5Gy8p44yFyW2b6kcslKxm1NgGu0SXxJuw41Mh0eSX4k7tXr0r6bWqqlKNHanI&X-Amz-Signature=755e7c5b5dfb9aaaed237105d1379eab441101343fdbb74c2bd0a66207b78adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEUCG7H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfDh81z2DI%2Bi09k12pQgAWFIomWjYhCZ%2B9dWvJaXBCuAiB7HOxF9%2Byj4foqgnPZ1g34tAkM2%2FVl6Qd7l7%2BOOJJQvir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM6ccLPnDCbpqsG1VaKtwDkcvPIntVGMlhQRoPQjsbhd2c2NxbHBYK99aSrPe0GuIGphYVUBumAuGGHiJc1uKalxMTGMcfkCxDfRk%2BdfmNdlYt8O9wPgh5bu2zMol3WW4hwAJFGiIPqLEAZodr4A48eUvFPqvGsDt45WvI9ivUs4Xoo4fXuxwNQK%2BsGYBHiJYarRfr6lIY2apdDME4xJryQM0jEqFpAKO%2BLz2LeH5CcnnPRvGMe38Ae9h0e2k5xDT5R3Dhb96fQR1wmasZfbXcB1XWIEcklYxQ%2BErvD%2BxUxPeVRWThFarQUqLLLSpYYSfxifGG3l5sxOEPJ81Dh8ICWVbUaX414xFoQ5IYxKyP2oxVRpdhHwUanve%2Baentygg4O30VTxsJ1PdFd9mhrz%2FO0yjumg%2BpZ6NIqmzoS3FPWk%2B5uRQvUm78IHIQCHs7FYJNO18ZHxiOC3%2FncaYxfgcqAZz%2Bdl%2FvTWQv0eRzYt0JybYNAmJDHQXG2KsvWQW%2FTZsP6oiImUjJIzFKYJ2POjPU0exD7Z%2FhcTsvJnw%2BruJcP2oyAzQ7XXWaFSTKaltxXY6IqFKnn6k6ktWe4ZM%2ByFmcNbUy29FNI4RGRdWqyceZkwiGd920cMv%2BQ1qdD8Rv1yf%2BrBWS9MsjgcJXSt4wnt7OyQY6pgE61NH6zv520Vy2opAEX%2BcDKrt9mYomg0j24Xi3oW%2BNzWXgV4H7S6woDr6%2FOftbKDL64VfKZyOuOnTA%2FGAWTI60rZ0qnVUJj9I32AXyONQeJhtDDtU%2FPxpMPeEkXg0H5deRXZM8%2FUtlat%2F%2FkDeITdOiG8pZ%2BjY%2BRnd5Gy8p44yFyW2b6kcslKxm1NgGu0SXxJuw41Mh0eSX4k7tXr0r6bWqqlKNHanI&X-Amz-Signature=414fa9e00da6fe2d4f71c4b54eea1e2e421b656f713b8ea7e415c1c15f4e5c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

