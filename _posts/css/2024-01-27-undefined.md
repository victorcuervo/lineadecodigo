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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVYPRWD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCDHmNBhQgQ4qjI7G2zjbf6Mkmna5n6wU%2FqGvARUT3WigIgdKVf8zxK5Lkd3IgevA%2FJP9qquP4S9zt%2Fprts9fZdMmoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFFer43lJnEUQeUmqCrcA9NtsYiuhQUsZWBTopdDlWhepPLOt7MBLOM2xzyv%2FK0hYXfu0h7z1YcrqbHtCSMzYxo6Lpx%2FZXgjj4yr9HrFG9EmxGPa9dhDrnVg3UFHdgAIXILhkdjWYeeG3Dlvz3rtDZ83ZcJG%2F%2FHuCvwP3JaOauVrwnc4bgTAaX4SFD%2BDw7Z9WkT2Z729P8KEKrht4F0sJIEorkJQJ42nzWiOWmBToIT%2FoFx3G6U53E0CSE%2FmdfVhp0asjtCFEwxbblVf6XeixwLc4l0QUbGuAOoMpzei0%2FZ8LGpsTsDFcSCXcQq7cN3y%2FvI4roKRPzgd5m5T8POGL%2F7lc68HvdAwRMwdt5x8sHA5XpqX2bR9tCi9mBUtYQbKVA43fKjndGmO2x5c6TMDsB2R5oauqyeLEDxWsnMuHvE2nhoFl8R2TcGuMfhJcrwzDekejw9CQq271yc6liH%2BbgYXWe6pQV4PduIHO41puhOViRl0A8LdUB%2FZjCGiyXqVBCrzbO0%2Bkq5E9ZZIDvdb2HF0S4i5KbLBW4imvGMMNyFLUQi6jpQ9ckXGSTxQJn6PH%2FcYWZzE3Uedxi1E04ZIp0O3li97mRYBY4Bxu8xnQGcY7vGQ7sVYI%2BswG%2BROHOT8sieNc0nMK8jvgekuMJiIwckGOqUBpVxdq9KPcciXM8DrqEwjIdGpieN%2BZf0Y%2BIWNp8AwTM4zO3EARyQG0Ei4aybOV6vHjfsuYlBaQF%2FwLDNf4Y9UFWy%2BbAoI7coKkwjHKS%2B6TjNLNBPDPvyG5EX0mGWlqpfTPti5EQIxiXWgVLfwc8S9A2XNsJZ7F9mZo96ba8FTP%2FCdpmlec6TrzJwy0%2B%2Bair%2FFwfWCZA%2B5U%2FAEw10oBrN8k8q9Dyw4&X-Amz-Signature=e4dfc5c03d7647b71fb9a202c788227671fda267a8c4f3d18ab64d1f40642ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVYPRWD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCDHmNBhQgQ4qjI7G2zjbf6Mkmna5n6wU%2FqGvARUT3WigIgdKVf8zxK5Lkd3IgevA%2FJP9qquP4S9zt%2Fprts9fZdMmoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFFer43lJnEUQeUmqCrcA9NtsYiuhQUsZWBTopdDlWhepPLOt7MBLOM2xzyv%2FK0hYXfu0h7z1YcrqbHtCSMzYxo6Lpx%2FZXgjj4yr9HrFG9EmxGPa9dhDrnVg3UFHdgAIXILhkdjWYeeG3Dlvz3rtDZ83ZcJG%2F%2FHuCvwP3JaOauVrwnc4bgTAaX4SFD%2BDw7Z9WkT2Z729P8KEKrht4F0sJIEorkJQJ42nzWiOWmBToIT%2FoFx3G6U53E0CSE%2FmdfVhp0asjtCFEwxbblVf6XeixwLc4l0QUbGuAOoMpzei0%2FZ8LGpsTsDFcSCXcQq7cN3y%2FvI4roKRPzgd5m5T8POGL%2F7lc68HvdAwRMwdt5x8sHA5XpqX2bR9tCi9mBUtYQbKVA43fKjndGmO2x5c6TMDsB2R5oauqyeLEDxWsnMuHvE2nhoFl8R2TcGuMfhJcrwzDekejw9CQq271yc6liH%2BbgYXWe6pQV4PduIHO41puhOViRl0A8LdUB%2FZjCGiyXqVBCrzbO0%2Bkq5E9ZZIDvdb2HF0S4i5KbLBW4imvGMMNyFLUQi6jpQ9ckXGSTxQJn6PH%2FcYWZzE3Uedxi1E04ZIp0O3li97mRYBY4Bxu8xnQGcY7vGQ7sVYI%2BswG%2BROHOT8sieNc0nMK8jvgekuMJiIwckGOqUBpVxdq9KPcciXM8DrqEwjIdGpieN%2BZf0Y%2BIWNp8AwTM4zO3EARyQG0Ei4aybOV6vHjfsuYlBaQF%2FwLDNf4Y9UFWy%2BbAoI7coKkwjHKS%2B6TjNLNBPDPvyG5EX0mGWlqpfTPti5EQIxiXWgVLfwc8S9A2XNsJZ7F9mZo96ba8FTP%2FCdpmlec6TrzJwy0%2B%2Bair%2FFwfWCZA%2B5U%2FAEw10oBrN8k8q9Dyw4&X-Amz-Signature=0bdbedba1670c08331239a160902eaed1ea4db04228d04aad8b965f2e518ed30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

