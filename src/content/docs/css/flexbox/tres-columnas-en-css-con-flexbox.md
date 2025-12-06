---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3Y5LF4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOPOynC5fcq3Ji8SS3CszzskaSMG5cuHZ%2Bhmdidz69VQIgK4gr3dSuhwYo2QeTWbj8g5WNcrR1%2FOjYiMNr06RlW3Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ5oyeEcMI73kuw2kSrcAzh6z1IYINOQcXUpE0L6nzTgrrmF60VZPQe2zQwX991wKF%2FvwCoFIxxxP9OTtPD%2BN2b20i5Mm2IZV98J93IM%2F8cDOIETYRfCJ27zkC%2BfWq2Lg8vT20whXNf%2BnkAkfBOob8pMsNol3oGFofZwmvZYQf1wXglz9f%2Ff%2B0zR0GZK7qj06MYBXNeGtkiZ1e9lWdly%2BvI7In1jzN4%2FJAr4Gv08kXe4pJMVdg8xIFf1lS%2BYCWfL0Ypl0Osf0cVe9rw1Pq%2FaW3hgG4p6nq6INPhzwu88dFeGa2Kj6%2Fw1548uPM8bJMzJQZYT%2FlHsZ%2FHgbX2%2F2HMkDEJBhqau%2FYrPEuwAp3fJDUZbBQdXhqzmBIsClwsds%2Fz8LoGuy5cMSrF%2BsY3zD28rwXAVR3eu1WQbWpXv2joKGzVchveS4hgIR2VDqmfbmta%2FoCE1h5CXUcTMb6LteGS%2FcrhloFlMYUgWaVCqMHnlyK7WTVHdM2M8IZsI%2FqVV6aP9R2tscRS4Kit6iTqVVcJMCjzwgvsuEqew76t3TNxtmFBL%2FqEcDeM17tZZB9YX2PX%2BEJdVtUKlxSTC%2FesAw%2FlN6r4FZq%2BJUQbZmqA0PQI8J6Wu8R4dq%2Bj38uCe7oZhjK5Z%2Fs0IvnTs%2B8dayynRMPem0MkGOqUBkeZ52mDHR29vpaEukry2%2BSKKH91BgLWrORrZXOP5ScXTS5TFHHXw4B4fxB23WSZkhiURv8zr09oQ5SXWY7r8F6IEahax9whdcn%2B4qW6L5sdJjcJDwvfXoDCTdQqNlfYa5ysO4CcEcGDrAwM6tHqesSbFN5HIA1anY5B2QxRWEkPGJcbTR%2BlE%2Bn0euyGaYMXQHCb5jL29AQEXXsJYQqRiGQx0kv7t&X-Amz-Signature=07a618666e0a8751861d33f1c397849a4e17f95de293e112edcf7a0739accce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3Y5LF4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOPOynC5fcq3Ji8SS3CszzskaSMG5cuHZ%2Bhmdidz69VQIgK4gr3dSuhwYo2QeTWbj8g5WNcrR1%2FOjYiMNr06RlW3Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ5oyeEcMI73kuw2kSrcAzh6z1IYINOQcXUpE0L6nzTgrrmF60VZPQe2zQwX991wKF%2FvwCoFIxxxP9OTtPD%2BN2b20i5Mm2IZV98J93IM%2F8cDOIETYRfCJ27zkC%2BfWq2Lg8vT20whXNf%2BnkAkfBOob8pMsNol3oGFofZwmvZYQf1wXglz9f%2Ff%2B0zR0GZK7qj06MYBXNeGtkiZ1e9lWdly%2BvI7In1jzN4%2FJAr4Gv08kXe4pJMVdg8xIFf1lS%2BYCWfL0Ypl0Osf0cVe9rw1Pq%2FaW3hgG4p6nq6INPhzwu88dFeGa2Kj6%2Fw1548uPM8bJMzJQZYT%2FlHsZ%2FHgbX2%2F2HMkDEJBhqau%2FYrPEuwAp3fJDUZbBQdXhqzmBIsClwsds%2Fz8LoGuy5cMSrF%2BsY3zD28rwXAVR3eu1WQbWpXv2joKGzVchveS4hgIR2VDqmfbmta%2FoCE1h5CXUcTMb6LteGS%2FcrhloFlMYUgWaVCqMHnlyK7WTVHdM2M8IZsI%2FqVV6aP9R2tscRS4Kit6iTqVVcJMCjzwgvsuEqew76t3TNxtmFBL%2FqEcDeM17tZZB9YX2PX%2BEJdVtUKlxSTC%2FesAw%2FlN6r4FZq%2BJUQbZmqA0PQI8J6Wu8R4dq%2Bj38uCe7oZhjK5Z%2Fs0IvnTs%2B8dayynRMPem0MkGOqUBkeZ52mDHR29vpaEukry2%2BSKKH91BgLWrORrZXOP5ScXTS5TFHHXw4B4fxB23WSZkhiURv8zr09oQ5SXWY7r8F6IEahax9whdcn%2B4qW6L5sdJjcJDwvfXoDCTdQqNlfYa5ysO4CcEcGDrAwM6tHqesSbFN5HIA1anY5B2QxRWEkPGJcbTR%2BlE%2Bn0euyGaYMXQHCb5jL29AQEXXsJYQqRiGQx0kv7t&X-Amz-Signature=2423c1a68f679511964990cefdfab1474ea7d1bdf675980f5b62ca004b92c4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

