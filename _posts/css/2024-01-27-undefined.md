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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNS2N3Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDlRM%2BCIbBGgVGQqGe1UNq0W0BgvG6OckIvoGUBmuzKCQIhAL72Z4YbKKvt2VyUPJ0UpHyZ8bNL7Ti76i0CRKAjv%2FAkKv8DCCIQABoMNjM3NDIzMTgzODA1IgwMLauBlwVltocrOdcq3AM1aJxAU9Y1GbYutqBNd47zLUejVOcSkm7ejonp31BLj2GJxs1jWj2i%2F6AcaScWr9RMM0R24fFl7uE8R3wiads%2BhOKoxq9%2BIM%2F0auGIqICxdaRPcX2y041WJYo5X%2FG62fRaMDxju3C3YZrPzKM42Pa1wMimOccZDDS6D5bvWK8QSkv%2BS2AaSn8%2BAczfScDCCpNCqilKgMbcZcvht0prR9PoXCs9f%2B8ONo9Tpe4%2FtOKDyIJf8A%2Fk8SmXeh7qz6DbFWeXLThm236k39nrSrnZ2bBkmw4QtaUfe2v3xu5xcIaozAl0MQUH0RCRfQdZHljVBNIBVgb0JRl1vCmuWDX4%2F86F0ltDegv%2FyXgtb2hH01nAxW9riFzIYIPMm2K%2BobnKGS2SLc%2FS0MeaHnWkrBZ%2FS%2F2YXV6f8vS0PjdgDGH667Jiygf7ScWNQUVr08KsAwMMzDHhTgmAAQyc6F0nCnC2ferEGAzVm0fZdsB03Wz9g5nI3WqM6qQWh1q4ss5C%2FVaV6RDdCroZ2MxkBfv%2B%2BbhOSpXfkX02eeSwk0%2B7F49F662%2FX1eeZXTKQaTNlr2D2qNeNngrhHSF7psc0EW%2B0OjaF%2FSDb3K1JrGIaWtuh43NPT2S%2B8DujyDo5uC4QcunFTD2lb7JBjqkAUhbnkL2WRT9aXM2jRNfpfmRtXEiVjmLPmE7WmGXay0aSIPQXKt4hACWY6Bb6HDFE0goWAPSy4ZqHEiT4P7p%2Bp7BySRa1eVYS6kTjsXPp8YOAuO9KKfaRSYHMxyUBYnVBmnW%2FZRRQn0zNrKFtx%2B4xU6raflFdGLZlXtQpcb402FwYMzALFIa6kKmCDXdMVHYDSM71cGlLivfYJqLRJXC3BAo%2Bw0%2B&X-Amz-Signature=3d8a01bed1cb68997d3baac79e0ba3fb20182621a0776cb68b2c306175e46f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNS2N3Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDlRM%2BCIbBGgVGQqGe1UNq0W0BgvG6OckIvoGUBmuzKCQIhAL72Z4YbKKvt2VyUPJ0UpHyZ8bNL7Ti76i0CRKAjv%2FAkKv8DCCIQABoMNjM3NDIzMTgzODA1IgwMLauBlwVltocrOdcq3AM1aJxAU9Y1GbYutqBNd47zLUejVOcSkm7ejonp31BLj2GJxs1jWj2i%2F6AcaScWr9RMM0R24fFl7uE8R3wiads%2BhOKoxq9%2BIM%2F0auGIqICxdaRPcX2y041WJYo5X%2FG62fRaMDxju3C3YZrPzKM42Pa1wMimOccZDDS6D5bvWK8QSkv%2BS2AaSn8%2BAczfScDCCpNCqilKgMbcZcvht0prR9PoXCs9f%2B8ONo9Tpe4%2FtOKDyIJf8A%2Fk8SmXeh7qz6DbFWeXLThm236k39nrSrnZ2bBkmw4QtaUfe2v3xu5xcIaozAl0MQUH0RCRfQdZHljVBNIBVgb0JRl1vCmuWDX4%2F86F0ltDegv%2FyXgtb2hH01nAxW9riFzIYIPMm2K%2BobnKGS2SLc%2FS0MeaHnWkrBZ%2FS%2F2YXV6f8vS0PjdgDGH667Jiygf7ScWNQUVr08KsAwMMzDHhTgmAAQyc6F0nCnC2ferEGAzVm0fZdsB03Wz9g5nI3WqM6qQWh1q4ss5C%2FVaV6RDdCroZ2MxkBfv%2B%2BbhOSpXfkX02eeSwk0%2B7F49F662%2FX1eeZXTKQaTNlr2D2qNeNngrhHSF7psc0EW%2B0OjaF%2FSDb3K1JrGIaWtuh43NPT2S%2B8DujyDo5uC4QcunFTD2lb7JBjqkAUhbnkL2WRT9aXM2jRNfpfmRtXEiVjmLPmE7WmGXay0aSIPQXKt4hACWY6Bb6HDFE0goWAPSy4ZqHEiT4P7p%2Bp7BySRa1eVYS6kTjsXPp8YOAuO9KKfaRSYHMxyUBYnVBmnW%2FZRRQn0zNrKFtx%2B4xU6raflFdGLZlXtQpcb402FwYMzALFIa6kKmCDXdMVHYDSM71cGlLivfYJqLRJXC3BAo%2Bw0%2B&X-Amz-Signature=41425e4dab2d0a58c15381aa51e4d15fc4422e5b21949fc60404513089c36005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

