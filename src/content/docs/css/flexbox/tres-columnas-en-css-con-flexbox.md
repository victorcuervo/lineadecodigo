---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KTWKI3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQb0o14IOD6YAxQLgLCWC%2FVR7HCgdSrZnBfQxV%2BY1j%2FgIhAKpSabCG2ad%2FWymaMWRjZZJ0eH74f6gierR0caA8%2FxKMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx7ZMZ7bxkOSU0PMLsq3ANxWja%2FuWLD%2B0zfAKoKmGIYo2izZESQgIk1mI0g5Wsn6%2BXJNTbI%2FKz4HyWDXXA1AgmT6BXHFg%2BL%2Fto%2BJr6PBRIdRXDzCy0l9htl1eYMWgLdZnj4Pn%2B7xr%2BqQA7u9MQRETphN%2BZVHzJv395N3RMFBPPFyL8TKr16WbvxyLxX73eVZ%2BHr8rtVopeAZUEVdj%2B1dipbafIv8z4p9aeFwEd5jRKxQueVObepC0f%2Fmzj4IZqjFAC%2BcsE6OwEVobHARvRENJ3LylIjr0mJTJ%2Bj3W%2FFHjVa0okQwVDRfpL89TAQ3ravwbgS3ZSw24O7Jx0j2PGGrPTeFh9q%2Fz2ovMRnUnDk9TJ2%2Fb%2FKcZZbu2pJGOn%2FJgihC8zq4mlaBZIpku1fkXFNbAwutUrhAz71Va12W166nc8CMklwJyVSpwiKrRXmK33tzw7l755x0nnn%2BBUppReFW9GNMEPlWE5AJ8GRGTHdPlTVnL7RFLS3GLsp59zjU2y2YXZehf0Cn9V43N5I2jtCrVTsuNndiuqA9veAsn6kkM3tPGKqJXL1anBddM0zbiaZdJ0ZyIYzezT8hGQUPUDPDmixjnBJV1UqZagVDZiTCm3kOQIkU0h7TpGiMKjj%2Bd3Y6r4%2FuICNVqLYUlKiCzCHidDJBjqkAdk5dWILny282S6r714Ns4%2BIpoK00MQbhF%2F1dED62%2F9RkPuuFIwfB5NdXjTyfOMUB14vfc6OvLJVLlo%2FHuQEFhx%2FnCd3u6Cuusa8a%2BXIqm%2BTunojOI6qnqR%2B4r1bm0ZrxyZ2X5NetaBuk5evlZuoIs%2BN%2F2QzoTpNkrwd6Lw4WyFT5xYw9awqvvhJ%2BCQsuJupK8M2y2ks9F88Qgim%2FDEfp8ooLwpM&X-Amz-Signature=af22f55eb653f31a4a59e2a26c4fda3da8a732a4cbc22211f4812d23b4a903d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KTWKI3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQb0o14IOD6YAxQLgLCWC%2FVR7HCgdSrZnBfQxV%2BY1j%2FgIhAKpSabCG2ad%2FWymaMWRjZZJ0eH74f6gierR0caA8%2FxKMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx7ZMZ7bxkOSU0PMLsq3ANxWja%2FuWLD%2B0zfAKoKmGIYo2izZESQgIk1mI0g5Wsn6%2BXJNTbI%2FKz4HyWDXXA1AgmT6BXHFg%2BL%2Fto%2BJr6PBRIdRXDzCy0l9htl1eYMWgLdZnj4Pn%2B7xr%2BqQA7u9MQRETphN%2BZVHzJv395N3RMFBPPFyL8TKr16WbvxyLxX73eVZ%2BHr8rtVopeAZUEVdj%2B1dipbafIv8z4p9aeFwEd5jRKxQueVObepC0f%2Fmzj4IZqjFAC%2BcsE6OwEVobHARvRENJ3LylIjr0mJTJ%2Bj3W%2FFHjVa0okQwVDRfpL89TAQ3ravwbgS3ZSw24O7Jx0j2PGGrPTeFh9q%2Fz2ovMRnUnDk9TJ2%2Fb%2FKcZZbu2pJGOn%2FJgihC8zq4mlaBZIpku1fkXFNbAwutUrhAz71Va12W166nc8CMklwJyVSpwiKrRXmK33tzw7l755x0nnn%2BBUppReFW9GNMEPlWE5AJ8GRGTHdPlTVnL7RFLS3GLsp59zjU2y2YXZehf0Cn9V43N5I2jtCrVTsuNndiuqA9veAsn6kkM3tPGKqJXL1anBddM0zbiaZdJ0ZyIYzezT8hGQUPUDPDmixjnBJV1UqZagVDZiTCm3kOQIkU0h7TpGiMKjj%2Bd3Y6r4%2FuICNVqLYUlKiCzCHidDJBjqkAdk5dWILny282S6r714Ns4%2BIpoK00MQbhF%2F1dED62%2F9RkPuuFIwfB5NdXjTyfOMUB14vfc6OvLJVLlo%2FHuQEFhx%2FnCd3u6Cuusa8a%2BXIqm%2BTunojOI6qnqR%2B4r1bm0ZrxyZ2X5NetaBuk5evlZuoIs%2BN%2F2QzoTpNkrwd6Lw4WyFT5xYw9awqvvhJ%2BCQsuJupK8M2y2ks9F88Qgim%2FDEfp8ooLwpM&X-Amz-Signature=04b2c1ed38e438ce024e86cceeb6aac808c3f95e61946d48ef49615d730826ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

