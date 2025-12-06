---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB5BPBBM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvogDBUim4ylQc3l%2FfIsI9iMsgw%2BRvA4cuyfoLogVjRQIhAPZCqDfgjm5FSEwKQYhkuC%2Bu4xThJSAZpoB98YdypH4vKv8DCHUQABoMNjM3NDIzMTgzODA1Igx8AJXHt%2BY4POWhGzEq3AM4o8qOIQJqNhMCkJx8Pp9S4gMPMiQhsY6qAG3NfASMaX6e8t6hjWQh4xNEnyPoiEoslaGHOyENHhj4yN6xiouhkzUUUyC4lRAIqOrjQJZ9LP%2BhhncnmpZpMViYx2NkfiuSnZ7YTCuxxaKiAC6rVXGQstF88%2FZ9pnSbK3Tp73dzFaelM5ZMMomdhlLK2sNF3CroqmXr2A9wvYM8Eq9pahFzKsPtYC1WSMsrDKeuOZS5QamqexRpvIMJ6TOcKf1OlUeUbdZ04jhL1OW9N5dZQ9eFYb0nSlIOjj%2FPweLp0glfPBZl7V65NTk289ow8CInlFnV2oJAX2RVyKTTFo%2B5%2FQ0NKwf3fw9L9aW4OFRvg8s6WykfuIKkY4qr%2FR%2FtGj7ljBZntYx3WMw%2Bunp%2FLRbPgabBDYjDt34tgks7F06wk%2Bwvr1Mcbkjhbp%2B57cGe6Mw68K6RjPODBQ3Fw5lKvIUfnfWRL6SBYzZfYYGF1PV%2Frsa8ZZcntjlceRRepsUtUMQ82Akt5LMPqjweKn6mQaa7bROacca146DpYXytdSC47c3pSNqPOwoPtLqKTcvG7mboC0k2Jp4pPF%2B1z0kwFeWk2F906LbARNlugJuarkmI%2F5k6fsNhelRrUfz2M1OMzDD1ptDJBjqkARIy2ALKivP%2B4wmE9Qw4sEiBEk5OWz0bL4K%2BXoFNsDNwhevxLqzSZF3inQK%2B4wldIr2zmCUK0T4T%2BWKrOA4Z41G2ejZpBUi%2FYZ%2FuOv8Q7dbWYaP6YCSWlRtDxvhl3GcEzpAb6VX1FaaC7yYPYPuSHwvsMWnAfl%2Bcu5XxB8fbwqzDkAylP1S34dhTtLtWbZ9743x7%2FJhXYhydmIDJaJTRDnSi3k7y&X-Amz-Signature=954e2fe98c4528c31d0e4a83dcf5b56545614f341e08a1831dddeb948321dcd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB5BPBBM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvogDBUim4ylQc3l%2FfIsI9iMsgw%2BRvA4cuyfoLogVjRQIhAPZCqDfgjm5FSEwKQYhkuC%2Bu4xThJSAZpoB98YdypH4vKv8DCHUQABoMNjM3NDIzMTgzODA1Igx8AJXHt%2BY4POWhGzEq3AM4o8qOIQJqNhMCkJx8Pp9S4gMPMiQhsY6qAG3NfASMaX6e8t6hjWQh4xNEnyPoiEoslaGHOyENHhj4yN6xiouhkzUUUyC4lRAIqOrjQJZ9LP%2BhhncnmpZpMViYx2NkfiuSnZ7YTCuxxaKiAC6rVXGQstF88%2FZ9pnSbK3Tp73dzFaelM5ZMMomdhlLK2sNF3CroqmXr2A9wvYM8Eq9pahFzKsPtYC1WSMsrDKeuOZS5QamqexRpvIMJ6TOcKf1OlUeUbdZ04jhL1OW9N5dZQ9eFYb0nSlIOjj%2FPweLp0glfPBZl7V65NTk289ow8CInlFnV2oJAX2RVyKTTFo%2B5%2FQ0NKwf3fw9L9aW4OFRvg8s6WykfuIKkY4qr%2FR%2FtGj7ljBZntYx3WMw%2Bunp%2FLRbPgabBDYjDt34tgks7F06wk%2Bwvr1Mcbkjhbp%2B57cGe6Mw68K6RjPODBQ3Fw5lKvIUfnfWRL6SBYzZfYYGF1PV%2Frsa8ZZcntjlceRRepsUtUMQ82Akt5LMPqjweKn6mQaa7bROacca146DpYXytdSC47c3pSNqPOwoPtLqKTcvG7mboC0k2Jp4pPF%2B1z0kwFeWk2F906LbARNlugJuarkmI%2F5k6fsNhelRrUfz2M1OMzDD1ptDJBjqkARIy2ALKivP%2B4wmE9Qw4sEiBEk5OWz0bL4K%2BXoFNsDNwhevxLqzSZF3inQK%2B4wldIr2zmCUK0T4T%2BWKrOA4Z41G2ejZpBUi%2FYZ%2FuOv8Q7dbWYaP6YCSWlRtDxvhl3GcEzpAb6VX1FaaC7yYPYPuSHwvsMWnAfl%2Bcu5XxB8fbwqzDkAylP1S34dhTtLtWbZ9743x7%2FJhXYhydmIDJaJTRDnSi3k7y&X-Amz-Signature=7734317cb89b068d9f9f109066eb7dfc52b07d69a736400d0c984cbadde23061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

