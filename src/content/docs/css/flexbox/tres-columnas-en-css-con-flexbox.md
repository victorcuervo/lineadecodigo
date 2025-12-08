---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5YWAXF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi4dO4meIH4pVRKgtVCIyN1TcMlYbiIeTLHW8IDBZEZAiB3IzpfCvCVeF5tsgMzQSWY28dYXXyz2EpdIOUqvXWf8SqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXp1q9s53YPwViNPZKtwDPqKqdXMpdu%2BFxW8qJDkMrlED4AiJ%2BRM9lut37MZ%2BupkeTknfTRxuTrISBW%2FQnTqyYyHxd%2BYLFpNzWILWu9gE3RX0QQ9BFP7dIujTYBGHyr%2Fj0UT7Lw9CABgnPuhNI5nS%2BlYQi7S%2FcYyH0lVT8DD9RubHLDdnr%2F0tjyiqZ0u3FVxe%2FG%2BkZfHSZ9tRDLXSLtwkdnTOE8X%2B2aMX0VqxC5F0M2G1qp89ssz19kZoomMhXjvNgMWxzH125C4%2FBnxY%2B%2FZOpwdIFz0nl2xnTQ039YF1rGiD%2BYaaVxQwpmJFlwppJrqDSCo9N3k3aHZg7aLoyTQPu%2FPI8wUlRdtVJfHgRNO7MrxrYYI6EtykQg6WF4xAw68P79ZuORT9jQA4Xj54ZvUH4IVXMLh8Dy7crhRYNIY9mDH3mnARPxjqyW%2BA8T1fBElmnD1FO6hQDZz9DLpYQbnOQPwtAWqumHBDHicry%2BWDaISBpwO83YPdJjlc3RDM7J8lIUBImlQWv6ECtCsLdXnTnrwWA2KqWRD%2FZA8KBkVJfZGCi5jRJjMATI5pDWaAmLHRJzGJzOI6LNfyOj7bd32cVm4WTROLpQK%2FFUSDpmE%2Ft%2BVoi09PwzAQ495QEA2IqxRWFKpVjxmF4SV9iZIwsO7ZyQY6pgHnv0N8W25JIymWrwY2y8f38uK1lHH9qZV%2BY4i5R3WUqJLdoYdgPLJ%2Fk3H6ejN7S5OHTojtNejmQVbpeFVP1D2ZBwdzDWqD5qcTWx%2BiUHDNlXMjmglsjghRaghV%2FCIi%2BMjK%2BkXZop4SWa6vpMSXcNx%2FP0XrEGYCKMHHDD%2Fayf7OqPQ2uK7WYS8S1LRoKZmGnyw4Z%2BmOQ18LzyWf%2B0myZ5yf9rpMOANQ&X-Amz-Signature=d43a26d5bc915b4a1adbb05bdc5c1b1c66b1072badd24768db4b611e3d7ffeab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5YWAXF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi4dO4meIH4pVRKgtVCIyN1TcMlYbiIeTLHW8IDBZEZAiB3IzpfCvCVeF5tsgMzQSWY28dYXXyz2EpdIOUqvXWf8SqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXp1q9s53YPwViNPZKtwDPqKqdXMpdu%2BFxW8qJDkMrlED4AiJ%2BRM9lut37MZ%2BupkeTknfTRxuTrISBW%2FQnTqyYyHxd%2BYLFpNzWILWu9gE3RX0QQ9BFP7dIujTYBGHyr%2Fj0UT7Lw9CABgnPuhNI5nS%2BlYQi7S%2FcYyH0lVT8DD9RubHLDdnr%2F0tjyiqZ0u3FVxe%2FG%2BkZfHSZ9tRDLXSLtwkdnTOE8X%2B2aMX0VqxC5F0M2G1qp89ssz19kZoomMhXjvNgMWxzH125C4%2FBnxY%2B%2FZOpwdIFz0nl2xnTQ039YF1rGiD%2BYaaVxQwpmJFlwppJrqDSCo9N3k3aHZg7aLoyTQPu%2FPI8wUlRdtVJfHgRNO7MrxrYYI6EtykQg6WF4xAw68P79ZuORT9jQA4Xj54ZvUH4IVXMLh8Dy7crhRYNIY9mDH3mnARPxjqyW%2BA8T1fBElmnD1FO6hQDZz9DLpYQbnOQPwtAWqumHBDHicry%2BWDaISBpwO83YPdJjlc3RDM7J8lIUBImlQWv6ECtCsLdXnTnrwWA2KqWRD%2FZA8KBkVJfZGCi5jRJjMATI5pDWaAmLHRJzGJzOI6LNfyOj7bd32cVm4WTROLpQK%2FFUSDpmE%2Ft%2BVoi09PwzAQ495QEA2IqxRWFKpVjxmF4SV9iZIwsO7ZyQY6pgHnv0N8W25JIymWrwY2y8f38uK1lHH9qZV%2BY4i5R3WUqJLdoYdgPLJ%2Fk3H6ejN7S5OHTojtNejmQVbpeFVP1D2ZBwdzDWqD5qcTWx%2BiUHDNlXMjmglsjghRaghV%2FCIi%2BMjK%2BkXZop4SWa6vpMSXcNx%2FP0XrEGYCKMHHDD%2Fayf7OqPQ2uK7WYS8S1LRoKZmGnyw4Z%2BmOQ18LzyWf%2B0myZ5yf9rpMOANQ&X-Amz-Signature=5123520c61850b2fa95fa1839d8c1b922cd0740323df846c14ba6c38102d6ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

