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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGRZKWW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCtWQt6KGOan8tiqjhXjxmc54QU44hkkkPd2Vjc4qkFegIhANzhGCEWo1DkxUG2ylPjUDUqNDM0RB8YKIq6Rs9VPezBKv8DCCgQABoMNjM3NDIzMTgzODA1Igz8Ylm8ZVk9zzisoacq3APPpOL6VxauXTJa04FMW3jJjw9ku98Sr7y5xZ8MiPHc2056c%2F6fCKCzFdvphsFjlBWx5HoJB1TC561y3gT9zB4kwYAw7%2B3DUq0ePq5XGYRjdM2BEtYhS8ZdPxILQpRxxVNlIkkHQkcFQYtAQqhwI%2BahNK5FlDNNlKTSOeeSHXLC%2FLN55rt90OUi3OfZHsaCDiAxGR5ZDtAm72ogwKmJ1dN8LrB5dI8okkR7yLbiaOXW6Ndi%2F2z%2FZOuK3OJ7zD4rj4QpPl3SvJEwUhvpRLNELEuFgROEdvzm5H0ApSB1Uz1R9fJiG0j%2BUP5OFgsUyxkL%2F%2BowKgcoL850V6UDe4H7NxvsuFCwSvdZBGLjdKW6LtQ89qLKKkGHb2gQ%2FNmTj6Z2QwE3qwp9EVMtKh7MO5yeq8lehU8pvz%2BZNdZ6PV0Y24w38XWGdqCk70QvyQ%2BgNAQ58rbX9qgLjd4ux3FEJx0m0NQbW8IZcLf4Y4wzGRAxIesw%2F%2FrXl4O4Q0ow7U%2FxPuD9E%2BMK9L06%2B%2FCMLQsVfLuvSqtswlsNlBb6ers%2BdTQdhncwykB0LH4RbCWCBCHLcc63TREi173kZlwLLFK%2FcrPvKnOSZ0A5NqJNvXyoOkGru3JAYyjob95SFsjy8npevTDsub%2FJBjqkAUzsPzqGgnsiznHddcBVlVHBy4NvGOvzrw2q6jNsiOyYPTHxumeTSwXZG9PJ80y%2BQHLElo2kqyhzzOgoI8Qc2h9KoEsk9YktYxocqzQbwIBUJWTqRUCLA5fisilGE0TrnCMRVBbJLEFyDSQJUt0zMUpdV9w3X78B0nwYr%2FFVJV0TSw4YtNQho53R3%2BuN%2ByyDK41AD%2FFREAvmZmaKgn6NBQXrLYqE&X-Amz-Signature=d8f1e826fc808135cb8f803a0352e5a3a4c2b2c983c0294face09729f26f55b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGRZKWW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCtWQt6KGOan8tiqjhXjxmc54QU44hkkkPd2Vjc4qkFegIhANzhGCEWo1DkxUG2ylPjUDUqNDM0RB8YKIq6Rs9VPezBKv8DCCgQABoMNjM3NDIzMTgzODA1Igz8Ylm8ZVk9zzisoacq3APPpOL6VxauXTJa04FMW3jJjw9ku98Sr7y5xZ8MiPHc2056c%2F6fCKCzFdvphsFjlBWx5HoJB1TC561y3gT9zB4kwYAw7%2B3DUq0ePq5XGYRjdM2BEtYhS8ZdPxILQpRxxVNlIkkHQkcFQYtAQqhwI%2BahNK5FlDNNlKTSOeeSHXLC%2FLN55rt90OUi3OfZHsaCDiAxGR5ZDtAm72ogwKmJ1dN8LrB5dI8okkR7yLbiaOXW6Ndi%2F2z%2FZOuK3OJ7zD4rj4QpPl3SvJEwUhvpRLNELEuFgROEdvzm5H0ApSB1Uz1R9fJiG0j%2BUP5OFgsUyxkL%2F%2BowKgcoL850V6UDe4H7NxvsuFCwSvdZBGLjdKW6LtQ89qLKKkGHb2gQ%2FNmTj6Z2QwE3qwp9EVMtKh7MO5yeq8lehU8pvz%2BZNdZ6PV0Y24w38XWGdqCk70QvyQ%2BgNAQ58rbX9qgLjd4ux3FEJx0m0NQbW8IZcLf4Y4wzGRAxIesw%2F%2FrXl4O4Q0ow7U%2FxPuD9E%2BMK9L06%2B%2FCMLQsVfLuvSqtswlsNlBb6ers%2BdTQdhncwykB0LH4RbCWCBCHLcc63TREi173kZlwLLFK%2FcrPvKnOSZ0A5NqJNvXyoOkGru3JAYyjob95SFsjy8npevTDsub%2FJBjqkAUzsPzqGgnsiznHddcBVlVHBy4NvGOvzrw2q6jNsiOyYPTHxumeTSwXZG9PJ80y%2BQHLElo2kqyhzzOgoI8Qc2h9KoEsk9YktYxocqzQbwIBUJWTqRUCLA5fisilGE0TrnCMRVBbJLEFyDSQJUt0zMUpdV9w3X78B0nwYr%2FFVJV0TSw4YtNQho53R3%2BuN%2ByyDK41AD%2FFREAvmZmaKgn6NBQXrLYqE&X-Amz-Signature=11993af09591e3b718ab9e5107fe29d8a6308dbd3d2500ed6c946a4835997344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

