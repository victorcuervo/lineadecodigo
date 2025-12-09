---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTWFYKF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwv3sysCHkiq4jMVv4JuMhs9x5%2ByR9L3DASb8%2Fr1JB%2BAIgAvUOiTdkPvq8owj24Saw175Ydmajw6shSsJIjgot28YqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1DPuqTCn0TIOsoiSrcA6Dbf%2BhFvLddKgfZABpUocdsnqyWRzmmrJ%2FARFyeFmpsJQv887In9cgrFZc2AnzRALI%2FxveE1vFeOXIK30HkZAuzXmgfzGtUd8L5smclYgsxamUh6j1Dgr%2FfbqBee9lrLolD6H775vqj0YXlqYFnekvLtFv%2FIcoRKttCKnJCutRdXGXaOdDC4fq2VlmSrnXM4iXMYiqp9SNmOsAhLjQFjEYcqRug11FJ%2F7S19oQ8JDG9Jr7NfaYIb%2FaFBNydmeL3PMgyrX5eBFcurYdaoULAmt5bCivgunFoWxlr6F4OLS%2FcIbkUB2UTtLpQVIJeAB59m1rS3CTb9iqvINnf3G%2BGnXUrDTZBIH9ZG1Ksjcv4%2Flrnooq%2FHzB4qjdCpHmqoUhEGpBAmlrBtI0opZvUiB2xkYeEfADoItjKoPh0k6hX%2FVNbG6HURpPBKIpehHbmJw6spt%2FfvZRoWsxIOLwWo6gfJqFQmgRHrWyrp2kVFO3CZ0bSeX0Wl490XwBysGEbZviHooyV61e%2BQSIz37jmagYc0lMb5PHzgrfnq9Xh35M5t6z2jTF950wliY%2Bs5siREOxVaDi%2Bs7bDvRZeURjJzSUU7H7A7M4BgngU6RrwYbUj2wuC8KEnHIQ0sUwLLA6CMPqN3skGOqUBOBdz8EvI%2FsHRaR3EPhuHejNOW1wBJZz0YAERXJS5u54rTJv929260X2eoV44Al8SlcQsL%2BiT7mrpEEOpR0eWdx4O8rNrX3SoNA%2FJuzk8wKTlzIJUuvoE%2BupKQpyYdBCB1ol%2BD%2Fkn6YPreO%2BjuUZrbVyJfuUiW7B8wMFFyXh%2BFAZ2xy4eKbwrGQ0pZvxSa76uaHIc%2B5crRhbE8odrlA9yH4tGtrTS&X-Amz-Signature=6d8519e2ee0a4ed18521c71b5e5689bbbec083d8fa59bb2f57277e7ed690e949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTWFYKF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwv3sysCHkiq4jMVv4JuMhs9x5%2ByR9L3DASb8%2Fr1JB%2BAIgAvUOiTdkPvq8owj24Saw175Ydmajw6shSsJIjgot28YqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1DPuqTCn0TIOsoiSrcA6Dbf%2BhFvLddKgfZABpUocdsnqyWRzmmrJ%2FARFyeFmpsJQv887In9cgrFZc2AnzRALI%2FxveE1vFeOXIK30HkZAuzXmgfzGtUd8L5smclYgsxamUh6j1Dgr%2FfbqBee9lrLolD6H775vqj0YXlqYFnekvLtFv%2FIcoRKttCKnJCutRdXGXaOdDC4fq2VlmSrnXM4iXMYiqp9SNmOsAhLjQFjEYcqRug11FJ%2F7S19oQ8JDG9Jr7NfaYIb%2FaFBNydmeL3PMgyrX5eBFcurYdaoULAmt5bCivgunFoWxlr6F4OLS%2FcIbkUB2UTtLpQVIJeAB59m1rS3CTb9iqvINnf3G%2BGnXUrDTZBIH9ZG1Ksjcv4%2Flrnooq%2FHzB4qjdCpHmqoUhEGpBAmlrBtI0opZvUiB2xkYeEfADoItjKoPh0k6hX%2FVNbG6HURpPBKIpehHbmJw6spt%2FfvZRoWsxIOLwWo6gfJqFQmgRHrWyrp2kVFO3CZ0bSeX0Wl490XwBysGEbZviHooyV61e%2BQSIz37jmagYc0lMb5PHzgrfnq9Xh35M5t6z2jTF950wliY%2Bs5siREOxVaDi%2Bs7bDvRZeURjJzSUU7H7A7M4BgngU6RrwYbUj2wuC8KEnHIQ0sUwLLA6CMPqN3skGOqUBOBdz8EvI%2FsHRaR3EPhuHejNOW1wBJZz0YAERXJS5u54rTJv929260X2eoV44Al8SlcQsL%2BiT7mrpEEOpR0eWdx4O8rNrX3SoNA%2FJuzk8wKTlzIJUuvoE%2BupKQpyYdBCB1ol%2BD%2Fkn6YPreO%2BjuUZrbVyJfuUiW7B8wMFFyXh%2BFAZ2xy4eKbwrGQ0pZvxSa76uaHIc%2B5crRhbE8odrlA9yH4tGtrTS&X-Amz-Signature=ea1d4d3e2e97ab1016057d0113082b4371048adc64aab860bc0100579dc8e59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

