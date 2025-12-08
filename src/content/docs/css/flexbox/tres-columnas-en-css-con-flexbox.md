---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUXHL23%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1Ie1MZs75%2B%2Bwg9mDjK3XERYQBgrqAtUWMvZX70ROEQAiEAwVJ%2FTYGG41qPS6X9kVwTuzvAxLWIToIZuJwU4dX0DnAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxpiwCl5H7eeZOYKCrcA477s086eO92Dv8vwcKPKGgamp8OP5pZ40mVwiGAoSz6mkDyGqVpXajaHmHDsKaleE0WawSs0hhiO5cLuNfQlIJYEIQodqp9MYMVC74NfUpm9cdg4%2FlUJI4i093KaceEby0jyjAyRkUdba2%2FyHc1mbRMIGTR6S8GcPgLjXXHlPDm4wIC%2B9G8QjWRwyA9P%2FRb440xG9bEdzR2T2k1o5qU5Q3FqiZfYht%2BFptxKfxepR5aA8a47JmCA4QYhK%2BYvPrMOHhUJYxVV48KdP8A%2Bh9i2rx0FMmB2vBKArp9%2B%2BV%2F6pmZmKUnOhQZFTaqihqWAxUsVYokjOs4B9fYvwtCH9KypaHsLKJfS%2Bb8KC%2B9CO32hqFGKoWhciZt71XU7JHe9VZEDADxospgN5xL6smKC1q8cEs675rAtRglKpEyzjrR1sNqEaRjfPOUyNCj7bGIeJ%2FK9BQexe2PHsbMKInGr6bwpGoD0OLqUY6idZGBaYObRv37%2Faogawkcg8CU9x%2FhAMt86etg7lGT4iwSLya8NDn9amo%2FKcMYEUTdT64Ok7M%2BhZ7WNKumDbFZKKC3RcEO0ESboFG1lLcag%2BkHQZuv2hGqToayNUK6kCPkVPcFzBYMfc%2FpNRNVnq7SKL7o0RnEMMrc3MkGOqUBPqlj2vJXf2gUN46oX5fUU0qy%2BlPZlVe77rp1JI%2BxDnwjKsYCITgGO4yi%2FdI2rUj5q1039juOBgIGAh9kcR%2B4%2FcZ9cL0DQ3WQ5%2BaF15RfgxBH%2B%2BqXEiFPdPdUMVjhUkxs1Fj%2FYXoHtjZh1cw9UZCpyMN2bdAhcmS6s4MPk%2FNzJj0IF6hcW6zZCRE45WuNtvnZ2VZy0Q2Rrw9WdLrPOZdQ2DCYR0HK&X-Amz-Signature=10bf78304e0d5fe44374070fd82acc9750188169d5c85da8ef29e15e7686f006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUXHL23%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1Ie1MZs75%2B%2Bwg9mDjK3XERYQBgrqAtUWMvZX70ROEQAiEAwVJ%2FTYGG41qPS6X9kVwTuzvAxLWIToIZuJwU4dX0DnAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxpiwCl5H7eeZOYKCrcA477s086eO92Dv8vwcKPKGgamp8OP5pZ40mVwiGAoSz6mkDyGqVpXajaHmHDsKaleE0WawSs0hhiO5cLuNfQlIJYEIQodqp9MYMVC74NfUpm9cdg4%2FlUJI4i093KaceEby0jyjAyRkUdba2%2FyHc1mbRMIGTR6S8GcPgLjXXHlPDm4wIC%2B9G8QjWRwyA9P%2FRb440xG9bEdzR2T2k1o5qU5Q3FqiZfYht%2BFptxKfxepR5aA8a47JmCA4QYhK%2BYvPrMOHhUJYxVV48KdP8A%2Bh9i2rx0FMmB2vBKArp9%2B%2BV%2F6pmZmKUnOhQZFTaqihqWAxUsVYokjOs4B9fYvwtCH9KypaHsLKJfS%2Bb8KC%2B9CO32hqFGKoWhciZt71XU7JHe9VZEDADxospgN5xL6smKC1q8cEs675rAtRglKpEyzjrR1sNqEaRjfPOUyNCj7bGIeJ%2FK9BQexe2PHsbMKInGr6bwpGoD0OLqUY6idZGBaYObRv37%2Faogawkcg8CU9x%2FhAMt86etg7lGT4iwSLya8NDn9amo%2FKcMYEUTdT64Ok7M%2BhZ7WNKumDbFZKKC3RcEO0ESboFG1lLcag%2BkHQZuv2hGqToayNUK6kCPkVPcFzBYMfc%2FpNRNVnq7SKL7o0RnEMMrc3MkGOqUBPqlj2vJXf2gUN46oX5fUU0qy%2BlPZlVe77rp1JI%2BxDnwjKsYCITgGO4yi%2FdI2rUj5q1039juOBgIGAh9kcR%2B4%2FcZ9cL0DQ3WQ5%2BaF15RfgxBH%2B%2BqXEiFPdPdUMVjhUkxs1Fj%2FYXoHtjZh1cw9UZCpyMN2bdAhcmS6s4MPk%2FNzJj0IF6hcW6zZCRE45WuNtvnZ2VZy0Q2Rrw9WdLrPOZdQ2DCYR0HK&X-Amz-Signature=4c4df681fb6011fb2d7fb243a4ef950ea355863d2cfb75b1b49df29ac4501531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

