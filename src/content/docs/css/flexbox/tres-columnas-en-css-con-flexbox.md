---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3NGUPY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEvzaWS9DbQ2zgJFFVIQO8jSywIOwxNxtsuUU%2FG4jJkAiBGJPEwoZd2%2BM1dWhFqDuZ8jX9j1HmmPHU23v1JWrQdeir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FrHHLQThbJsymNRdKtwDxUqYLxc9nYIRZTFZngfmq71kLy%2Bj6DY0T2l2eRUeEZ5%2BhLELrYIWseqPL6zXmG0otfAbY3ZkiRT23VuRbMi0QXRr0uKDXPnGyilCGVcHYjQ2QVO4a5sreESJGIL2BFgvFT7oX9%2FWhL%2BYyO6kHnmsO50hqNQeMbhfXhR7MD3JB1YzoUkIY5EX%2BaW3Dftvxdxccn3mfFty0DkO7RPTgVQD6jDBMXUa094KGg4LwRAWr6kQqRIonIsQj2X4Z3O99bbUzAsAEVsINDqjSTw53tC5lrv7YwIbB5IVxcbxumIPBIGtqwIGQ8pcCj1jLWkpIH179TND2Sh9HABWHS8XvOB68TrnE0amZScMAdU5PwjPdSOYUGKvlb7k7jDzA81QNBI%2F%2BgFqXrieC6jNZC6p7p2b0ym5%2FJ3hs73pZu82EXJ%2BOiDva5M8YEOKV%2BuhI%2BpeqIwPoq5oSh9Tt7MURaDg5TSk0ztsIXu4F52ldHnE2AbAmkUBgAUSl19Xp3u%2Fd%2BIOXX9WwrD3H%2Bc4gNM27oJalc1TT4xuUnbh%2BBVMmYewPIDKn2ZmOSZLFKZTdAzQk0bxk8QtUgYdzHuYgTJG5m9Kt5OpJW4iUP6KvaAG6Zirw9GKkLw0pKzs0SlVPkweHF8wnobNyQY6pgHqzjShvceWWJsqE7ByxZU5n5et6yxXtRPbl2ysEJjj5eaoMkkuiT1aODHmmlYx0oFKOaZAUqR%2BAQKP9riHlnJdjrFs1DSgVpZ7xpKXErraWusBPDEx9WLdvOMX3hSqTiqmnNiOmb0k59jlil4gk7833rtJ6bzvTCeVnhdJXJdK8yg2w3b5f5qUXrft862gjVvvcBJBBO10%2Beto6EmEJIRFecgnc7sz&X-Amz-Signature=2a2361aeb184180c78ebc426a953452e74cb2a8b13468fcafc7badb50017c830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3NGUPY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEvzaWS9DbQ2zgJFFVIQO8jSywIOwxNxtsuUU%2FG4jJkAiBGJPEwoZd2%2BM1dWhFqDuZ8jX9j1HmmPHU23v1JWrQdeir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FrHHLQThbJsymNRdKtwDxUqYLxc9nYIRZTFZngfmq71kLy%2Bj6DY0T2l2eRUeEZ5%2BhLELrYIWseqPL6zXmG0otfAbY3ZkiRT23VuRbMi0QXRr0uKDXPnGyilCGVcHYjQ2QVO4a5sreESJGIL2BFgvFT7oX9%2FWhL%2BYyO6kHnmsO50hqNQeMbhfXhR7MD3JB1YzoUkIY5EX%2BaW3Dftvxdxccn3mfFty0DkO7RPTgVQD6jDBMXUa094KGg4LwRAWr6kQqRIonIsQj2X4Z3O99bbUzAsAEVsINDqjSTw53tC5lrv7YwIbB5IVxcbxumIPBIGtqwIGQ8pcCj1jLWkpIH179TND2Sh9HABWHS8XvOB68TrnE0amZScMAdU5PwjPdSOYUGKvlb7k7jDzA81QNBI%2F%2BgFqXrieC6jNZC6p7p2b0ym5%2FJ3hs73pZu82EXJ%2BOiDva5M8YEOKV%2BuhI%2BpeqIwPoq5oSh9Tt7MURaDg5TSk0ztsIXu4F52ldHnE2AbAmkUBgAUSl19Xp3u%2Fd%2BIOXX9WwrD3H%2Bc4gNM27oJalc1TT4xuUnbh%2BBVMmYewPIDKn2ZmOSZLFKZTdAzQk0bxk8QtUgYdzHuYgTJG5m9Kt5OpJW4iUP6KvaAG6Zirw9GKkLw0pKzs0SlVPkweHF8wnobNyQY6pgHqzjShvceWWJsqE7ByxZU5n5et6yxXtRPbl2ysEJjj5eaoMkkuiT1aODHmmlYx0oFKOaZAUqR%2BAQKP9riHlnJdjrFs1DSgVpZ7xpKXErraWusBPDEx9WLdvOMX3hSqTiqmnNiOmb0k59jlil4gk7833rtJ6bzvTCeVnhdJXJdK8yg2w3b5f5qUXrft862gjVvvcBJBBO10%2Beto6EmEJIRFecgnc7sz&X-Amz-Signature=6605292a496988c7675bad14c0d2feca50b69ddfab52ec64afc53de8cadbc95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

