---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LAELH6F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1fG0zLA7cmwYKWgSzsdq%2FaFvGxW1m1vJSmdUIWQkt9AIgBlXeWKnly3AyCN5XyJKNyUQINEaBI5q1q%2B2m7mlNdLgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5iFyAh%2F%2BdPJR5hfSrcA6RoB2kT1bWQQBgLcfaJXtaWUJkujHrvQBqCFKbsBnewpx52B9GR2Ddh9tQxhb8I0lZbAkQLtgHxb0aYFlZ5q9kHHevguzbw2Fhy890b6n8JjrqigntdhZSl6Be8G0psdveCaWw0VW5CAuse5hBvQedrNFETL6l%2FJC4mij0jFr6L64rp1lVrbERyuUFSE3ej04pokp24apXblAg8bs5p2yz5kQYjxwSjOlLKVa3c62L94nkHguHzzvUo4PUNxQxNxFLGQDk31OKL7R1F%2F3vd63EZawBrECaZe33tDda4zIDrEraEQhA7Xrq0ybfYBTIfJKmlDm5XD8rfLDvRZB8bUqvAczdlBf0iUWQGwYaTEriubqndK2ii4iRu6EakgStvsnUADbrsN14rTYQyGd8bWwzRigj6fPA2QgUlEQe5llQTEZKAsd2tiidikypr%2BcnwBO1gD97EH3BcQaqmRZlJKtDN9%2Bjd6nkWNJJe3FfxAMCGmsiRaFIwBKGxfQtXFkXIv4Nd7eTVg4%2FAz4dXoTI5M36W239TO%2FGqgwvGJz0hCqElIJVdfHPu8LONyWj1N8ym9fB2qOlq%2FuuQewJM%2FyDJhCbH6I6RNltXWtzwDCdyltz%2FzOQ2wLXDK74iLf8JMNTJ3skGOqUBojve7WMjYDWI3IGVIpd123vOLZOQ%2FePYo1SqskBfpd9%2BUvuOyQOSnOwPCHWPlX%2BJ02pmTzuo7FzHprrOhMBwLtaCl3d2G3fEcBwa2r%2FvryG43TER2%2FiOMOQsoEl5CLrnXnSruCyt40lQjZfe9h%2F0qY8eziPNtN1APkQZlHJUIRgFqMVtgnXOkYS9qLhV7kB2XFpEwj4CSAImmIM%2BFaUb%2Fe8YQNc%2F&X-Amz-Signature=17be61e72801edcc7acfc9096a485a2614c41a96c60b9c146965ec347f2f1c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LAELH6F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1fG0zLA7cmwYKWgSzsdq%2FaFvGxW1m1vJSmdUIWQkt9AIgBlXeWKnly3AyCN5XyJKNyUQINEaBI5q1q%2B2m7mlNdLgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5iFyAh%2F%2BdPJR5hfSrcA6RoB2kT1bWQQBgLcfaJXtaWUJkujHrvQBqCFKbsBnewpx52B9GR2Ddh9tQxhb8I0lZbAkQLtgHxb0aYFlZ5q9kHHevguzbw2Fhy890b6n8JjrqigntdhZSl6Be8G0psdveCaWw0VW5CAuse5hBvQedrNFETL6l%2FJC4mij0jFr6L64rp1lVrbERyuUFSE3ej04pokp24apXblAg8bs5p2yz5kQYjxwSjOlLKVa3c62L94nkHguHzzvUo4PUNxQxNxFLGQDk31OKL7R1F%2F3vd63EZawBrECaZe33tDda4zIDrEraEQhA7Xrq0ybfYBTIfJKmlDm5XD8rfLDvRZB8bUqvAczdlBf0iUWQGwYaTEriubqndK2ii4iRu6EakgStvsnUADbrsN14rTYQyGd8bWwzRigj6fPA2QgUlEQe5llQTEZKAsd2tiidikypr%2BcnwBO1gD97EH3BcQaqmRZlJKtDN9%2Bjd6nkWNJJe3FfxAMCGmsiRaFIwBKGxfQtXFkXIv4Nd7eTVg4%2FAz4dXoTI5M36W239TO%2FGqgwvGJz0hCqElIJVdfHPu8LONyWj1N8ym9fB2qOlq%2FuuQewJM%2FyDJhCbH6I6RNltXWtzwDCdyltz%2FzOQ2wLXDK74iLf8JMNTJ3skGOqUBojve7WMjYDWI3IGVIpd123vOLZOQ%2FePYo1SqskBfpd9%2BUvuOyQOSnOwPCHWPlX%2BJ02pmTzuo7FzHprrOhMBwLtaCl3d2G3fEcBwa2r%2FvryG43TER2%2FiOMOQsoEl5CLrnXnSruCyt40lQjZfe9h%2F0qY8eziPNtN1APkQZlHJUIRgFqMVtgnXOkYS9qLhV7kB2XFpEwj4CSAImmIM%2BFaUb%2Fe8YQNc%2F&X-Amz-Signature=7c40422af500baac030749d72864b2a8203947da2487657bfb44e6d3613c4da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

