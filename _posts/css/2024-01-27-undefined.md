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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKL36KW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIDWZocDYWvnUtdfaZJK09%2FpLboZEgHC198gym3ItMbd2AiAphUIZLjkbdD74j%2B7YZG8h5v%2Bq%2FSSadAP6wPUKXJMWmir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM70NnKHtZFD2WqfAvKtwDJAdPEjkbxIsBOVxHL6nox5SDitehegSi0rg2u%2FPzyA4mh%2BXHHH44mF5scm5B31XsropAb6Wgj6BTLlt8VR75p%2FwWtkyrQUMIlGwbwUsnqrsSfHHATBwoZ7m5bEKfdndqaeEmow0C%2FYG4%2Fr6GtLar7RoDDKR%2BliEac%2FYTxbJUAlzpPs4hnv%2F63Ir%2F%2BQC8m5E%2Bz5U8ctAvcgUNwTYRTYvvET2rJL8O06DcHNoAUxrdeaHm5z23bxuFjj%2B52jQG4892A1%2FSpE%2BZy%2F%2FOdNVjJIQbsHoa%2Feoj9Iedlij9JXvnwn9NTVxT1a2VmeO8HqVAwlY3eNxTyklftT2mSPcNpDGog4O6FTfCIufwok8sZtI9Fbg7vHwmWaIojo2ln8bsGPRsXk1c12e7OBK3KP3H6F3JlGoBqISTTfPtzbNxieU1CJb0rM3pNRIy9VIKl9MsoYX1wpN4LBIU%2BaxwwjwzaoxWOGhFNWtoJV4uan2EjIkUoZUAQ6ZMwdfNFPYQsi7km%2FK6n6CBpPNANNNg4vaq5RSZOj4JubOI1lsl6uDswofLnVVeWbvVwGyhiwtuAavrFLOJ%2BfqvGQbRZ7m%2FtH8g7MrI1v9MbkIKLnNTdpHtC%2BX7uXont68ZOAxndbROtwEw%2FeS9yQY6pgHdz6f%2Fwul1V0sT3SYSpVG1MgoIzD3F5%2BlGU0ZWpIQQ9FnlBeI1jubWrE5PMfrql8ioYyG00tscpDmhqgDVUXUHqdlZuoLu2JO0tIXGjqwcHxXdPqo6N82IF%2FzOOZn77NcNd7Pm5GemQG9HQBzuyzXmm6RnwvN4Z6%2BvMmbg7ZWRz09J530%2BSYMwejHbN3U1mH5JP5%2FTORkgxJRXKUowZmddaTQldOyw&X-Amz-Signature=5b40cb1eb131dc100126badeea0a2b79970f3c54d2a470b633d35129d9262148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKL36KW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIDWZocDYWvnUtdfaZJK09%2FpLboZEgHC198gym3ItMbd2AiAphUIZLjkbdD74j%2B7YZG8h5v%2Bq%2FSSadAP6wPUKXJMWmir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM70NnKHtZFD2WqfAvKtwDJAdPEjkbxIsBOVxHL6nox5SDitehegSi0rg2u%2FPzyA4mh%2BXHHH44mF5scm5B31XsropAb6Wgj6BTLlt8VR75p%2FwWtkyrQUMIlGwbwUsnqrsSfHHATBwoZ7m5bEKfdndqaeEmow0C%2FYG4%2Fr6GtLar7RoDDKR%2BliEac%2FYTxbJUAlzpPs4hnv%2F63Ir%2F%2BQC8m5E%2Bz5U8ctAvcgUNwTYRTYvvET2rJL8O06DcHNoAUxrdeaHm5z23bxuFjj%2B52jQG4892A1%2FSpE%2BZy%2F%2FOdNVjJIQbsHoa%2Feoj9Iedlij9JXvnwn9NTVxT1a2VmeO8HqVAwlY3eNxTyklftT2mSPcNpDGog4O6FTfCIufwok8sZtI9Fbg7vHwmWaIojo2ln8bsGPRsXk1c12e7OBK3KP3H6F3JlGoBqISTTfPtzbNxieU1CJb0rM3pNRIy9VIKl9MsoYX1wpN4LBIU%2BaxwwjwzaoxWOGhFNWtoJV4uan2EjIkUoZUAQ6ZMwdfNFPYQsi7km%2FK6n6CBpPNANNNg4vaq5RSZOj4JubOI1lsl6uDswofLnVVeWbvVwGyhiwtuAavrFLOJ%2BfqvGQbRZ7m%2FtH8g7MrI1v9MbkIKLnNTdpHtC%2BX7uXont68ZOAxndbROtwEw%2FeS9yQY6pgHdz6f%2Fwul1V0sT3SYSpVG1MgoIzD3F5%2BlGU0ZWpIQQ9FnlBeI1jubWrE5PMfrql8ioYyG00tscpDmhqgDVUXUHqdlZuoLu2JO0tIXGjqwcHxXdPqo6N82IF%2FzOOZn77NcNd7Pm5GemQG9HQBzuyzXmm6RnwvN4Z6%2BvMmbg7ZWRz09J530%2BSYMwejHbN3U1mH5JP5%2FTORkgxJRXKUowZmddaTQldOyw&X-Amz-Signature=6caeda792a5f06252c2d14806ede9b12cddb0f2f8f1128df36199494f469859b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

