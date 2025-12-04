---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKMIVRD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBIEyQeBUBlz8dYgvhpaSbZd%2Fbh8pU2ZrwGKMsnevW74AiAk9MQic%2BNr%2BVLk5gD0tvtwgaepQLDhVugKVKo%2B7gCaJSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMr5cUHVNxtZXS8DyjKtwD9ML85OeKi5bFpinAXwy7gplyVp1%2BpvdP7Ss%2B%2Ba%2B6IIj83cG%2BOjKCul9L4YmzLrjtpVGqkKnkXHwO3sqWZ%2BYuJxCKrkiyTU6Wr2moD27dNKI7u5psff9lkw5VscMosFdHliNwA9ATI2EYq3%2F00c9%2FYwEZrtbMK8q4bSEHoMhwWjy9Qndc7eavDDjICVp0ZTBfwGKgSIoaVdP5XZayMpcf%2Bq8UqI9K7h7JQhnvoHXnfYGul5dyrfd2v67AzmvGWzPOvcUixQ%2B6tdO%2FpgDrvEGzq2Lo8GIoCgP2mWjaxM3bS4e16M3Wig0DjM7sw90R59heMo8M9LaYFPqYH9P741O%2BQxUKcIsO06zMhiuhTDIBGPZA%2BF%2FD5gRCx0sffc5rArEbl4LtiyvhZaPYEi5kkd6QA3OPCgZX7kKRU7qLF7t1bBSWE7tYl%2BkBRTqFwg0DdzeS0tC5gh4D89RdITnpXf23JKwl9uXiLaE3HzzF3yrjOuSHIK4grg5U1q4MCygHWYpKc0YNssNmBOYXfvDTW05Yd05%2BVyHDYXKqFfnqxboAs5HwGJ8dKBJANmImgs7qMxr4o1dNWsNXh%2BYPQTdBPRSfL1FDtZ3rpVoAVu5IJ%2Ftc0RoR7zioeX%2FzgGhtQXYw%2FYXFyQY6pgHF20pCuLvZkkfxsb1tJAdpRnnnvFFMsvp%2B7qmSL4kzUPsgd5zy%2FrBkO7R6OgetozEomJCMPY5LCTVguIdSgLCaV7w7kLFKjOvxkFWeJKfgANaMYl1HFy2SiOaoDI3NZ01CErHrIc%2B8%2FXW%2FHrS3OHnR6HQK4aakTQp5nxkfPMI%2BkP2FIrQ1BmreH4eqzQa5UtyRdx2xMfofzmZpXcEQKF7nIgQR%2B5Rr&X-Amz-Signature=d7ca17ba097942ca8b9dfb3ee75c7cff7f0b5b1118b05f204142e9e21cc4b2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKMIVRD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBIEyQeBUBlz8dYgvhpaSbZd%2Fbh8pU2ZrwGKMsnevW74AiAk9MQic%2BNr%2BVLk5gD0tvtwgaepQLDhVugKVKo%2B7gCaJSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMr5cUHVNxtZXS8DyjKtwD9ML85OeKi5bFpinAXwy7gplyVp1%2BpvdP7Ss%2B%2Ba%2B6IIj83cG%2BOjKCul9L4YmzLrjtpVGqkKnkXHwO3sqWZ%2BYuJxCKrkiyTU6Wr2moD27dNKI7u5psff9lkw5VscMosFdHliNwA9ATI2EYq3%2F00c9%2FYwEZrtbMK8q4bSEHoMhwWjy9Qndc7eavDDjICVp0ZTBfwGKgSIoaVdP5XZayMpcf%2Bq8UqI9K7h7JQhnvoHXnfYGul5dyrfd2v67AzmvGWzPOvcUixQ%2B6tdO%2FpgDrvEGzq2Lo8GIoCgP2mWjaxM3bS4e16M3Wig0DjM7sw90R59heMo8M9LaYFPqYH9P741O%2BQxUKcIsO06zMhiuhTDIBGPZA%2BF%2FD5gRCx0sffc5rArEbl4LtiyvhZaPYEi5kkd6QA3OPCgZX7kKRU7qLF7t1bBSWE7tYl%2BkBRTqFwg0DdzeS0tC5gh4D89RdITnpXf23JKwl9uXiLaE3HzzF3yrjOuSHIK4grg5U1q4MCygHWYpKc0YNssNmBOYXfvDTW05Yd05%2BVyHDYXKqFfnqxboAs5HwGJ8dKBJANmImgs7qMxr4o1dNWsNXh%2BYPQTdBPRSfL1FDtZ3rpVoAVu5IJ%2Ftc0RoR7zioeX%2FzgGhtQXYw%2FYXFyQY6pgHF20pCuLvZkkfxsb1tJAdpRnnnvFFMsvp%2B7qmSL4kzUPsgd5zy%2FrBkO7R6OgetozEomJCMPY5LCTVguIdSgLCaV7w7kLFKjOvxkFWeJKfgANaMYl1HFy2SiOaoDI3NZ01CErHrIc%2B8%2FXW%2FHrS3OHnR6HQK4aakTQp5nxkfPMI%2BkP2FIrQ1BmreH4eqzQa5UtyRdx2xMfofzmZpXcEQKF7nIgQR%2B5Rr&X-Amz-Signature=c49a5f07f05e56bc59c2376ffdf14a9ae31bff00818865a1fdf6c7e16dfece1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

