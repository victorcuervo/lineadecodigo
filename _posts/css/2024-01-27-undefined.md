---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRYVIJT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCTDKyt%2BUym27Wz9h1So3Rs8FKMAfkU1tOfkRF0MaL9WAIhAPXXmC5Ra0JATmPhpXGhZ%2BGrpBdyv01DNmkNKnEWpLWWKv8DCCIQABoMNjM3NDIzMTgzODA1IgzbLZ93jEGZwFHUTHwq3AO405XGXcQ3T7s1lzXkeg9l9YU5QXfmLvGqfzCvsU4%2BgtoEhJYOPg%2BimXUFS86G%2BxTcfgiwv5b%2FndrmqqF3JBtNCo7DJm3IVstBs9QR09HWsJYAFS0aokHBXto5cjxUpDus5rRJTkEmxQswTRB8ohY5IaS65yOhI8X2KqiP4CAJqoEsheRR5Y2MHOKU%2B53teUL0JY3CjHh6Uh2Um2VT4fENvBgQIFJvwmxeJF3QTrp2gMA8HpuHmIIuOv%2FtwbA52aX6IE6c7o6JpWi1pz0hNzooKfakZdAK4x%2FzA6u%2FZ%2FfqoXGKowvczIgZ8SponiThv%2FGYipyN8bRIXGy%2FkaH8sBvqycyK%2BuuhEPKNp6OcPZDV4aHBXzaUpKftbcp7Ff%2FEHjmFQPpJT%2FM1uRLxC4SqXOLng%2BBsWudecFodKm6PsFBRttnAcc%2BRRnDElT7G9GUZwUVvMMk3N9xCiSTF18iYC7wGEyciRAhXhxDQdkoNfpytTITBFYTPU0DNDwE72v8LHyu270u3iUuEXDB2fycD%2FjwMoUkA7HF7rHgxgNNCd9bRBRchPVxjFLxMh4L9T6jNPDBIzkI6UHZ2YbzMttNoq2Yp6QRRsFefWdCcAkBu8l4a%2BYWn%2ByD1cCdoylPLzzDSlL7JBjqkAeFzMzJrP7G6XrHBlfKfR5ph0cw0HGECPRX0OORJ9MZadn3besSm0dSYvCBRzE5Y6pxD28nwpVBitvU33SLars8UYpObVxQo%2BIm2kmQR3N3oQqLLNHKe9HSA7KBtLHR3T5JzTbcLNbPnAQGkNkfxOPJBnP4nKIYJUXpQFyGjVRerx%2BUHEq80esVF%2FPMRz59DVs7ff9Z6jmUWcZw54ddXkSMHQ2%2Fc&X-Amz-Signature=71ca82b6a5f28a5982412ecf77c55aa72a685761a4c20c5a6e69a71414bcde59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRYVIJT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCTDKyt%2BUym27Wz9h1So3Rs8FKMAfkU1tOfkRF0MaL9WAIhAPXXmC5Ra0JATmPhpXGhZ%2BGrpBdyv01DNmkNKnEWpLWWKv8DCCIQABoMNjM3NDIzMTgzODA1IgzbLZ93jEGZwFHUTHwq3AO405XGXcQ3T7s1lzXkeg9l9YU5QXfmLvGqfzCvsU4%2BgtoEhJYOPg%2BimXUFS86G%2BxTcfgiwv5b%2FndrmqqF3JBtNCo7DJm3IVstBs9QR09HWsJYAFS0aokHBXto5cjxUpDus5rRJTkEmxQswTRB8ohY5IaS65yOhI8X2KqiP4CAJqoEsheRR5Y2MHOKU%2B53teUL0JY3CjHh6Uh2Um2VT4fENvBgQIFJvwmxeJF3QTrp2gMA8HpuHmIIuOv%2FtwbA52aX6IE6c7o6JpWi1pz0hNzooKfakZdAK4x%2FzA6u%2FZ%2FfqoXGKowvczIgZ8SponiThv%2FGYipyN8bRIXGy%2FkaH8sBvqycyK%2BuuhEPKNp6OcPZDV4aHBXzaUpKftbcp7Ff%2FEHjmFQPpJT%2FM1uRLxC4SqXOLng%2BBsWudecFodKm6PsFBRttnAcc%2BRRnDElT7G9GUZwUVvMMk3N9xCiSTF18iYC7wGEyciRAhXhxDQdkoNfpytTITBFYTPU0DNDwE72v8LHyu270u3iUuEXDB2fycD%2FjwMoUkA7HF7rHgxgNNCd9bRBRchPVxjFLxMh4L9T6jNPDBIzkI6UHZ2YbzMttNoq2Yp6QRRsFefWdCcAkBu8l4a%2BYWn%2ByD1cCdoylPLzzDSlL7JBjqkAeFzMzJrP7G6XrHBlfKfR5ph0cw0HGECPRX0OORJ9MZadn3besSm0dSYvCBRzE5Y6pxD28nwpVBitvU33SLars8UYpObVxQo%2BIm2kmQR3N3oQqLLNHKe9HSA7KBtLHR3T5JzTbcLNbPnAQGkNkfxOPJBnP4nKIYJUXpQFyGjVRerx%2BUHEq80esVF%2FPMRz59DVs7ff9Z6jmUWcZw54ddXkSMHQ2%2Fc&X-Amz-Signature=5c6abd94a0b24a37b9ca30b9a8fb1128e0c2090a1ee77be89be1b43bd438a3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

