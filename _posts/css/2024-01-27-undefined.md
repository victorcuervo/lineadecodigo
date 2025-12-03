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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VRXOD3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDrnOLQc7hZ6ryGmO9Eff8d4UDbEynEW%2FCU5jTh2%2BJ13wIhAOPPthpVIntsJCW8qBxIvTH60wCKedPjWmDzZiayw68mKv8DCDIQABoMNjM3NDIzMTgzODA1IgyGOWRYFuYi4LnHiRUq3AO05zce47eUbZXQIXAMU8NUVb%2BjiVrLdgybs%2FuyATJHnLWO4PtdtbG0DcEmFxMY2Ni3EmrkpW5LNnRLteLobKNEh4irwNGtnGpCM3cGxL16r%2FGMboDsa7MfxJJQPYTMGDNZOE4cI6byoaWQbb3Svp4yfpIxrI4tUJyIuFA%2FExFogx9xAunqXL%2FBusn3dRvre%2BdmNBlmqzglDZdkY%2FDsC%2BPwgukG99bOxQQJ3bdSOAvY6vNs%2BnEHPrLLG150FpeYeGq15vbvaW5hXHstYl7cWHIJlc9QtFVcN0TNIczikvTiP1vjL8NpqCvH0Skp4i5ItavgHotO5cyoVk2KVw06tRkQV%2Bnn%2Fuqbub11E%2F0CiDGux67oN7QJg7pCLYg8CD%2BltHi6MH9WPmVOqOwKfw8BWcqCGhsEJNhzCN5IB2NFVa4dyeyuqJCDHrlAh3I96oieWNYg8S9UE4lpNVZlCXtM%2Fy3v%2FjO3jXQNDne3k9f9%2FmS49lfqXLishBstmUzquYjEievp2JvDUwU3Fh%2Fuz2wlniZMHQkbwTsTg%2BzSyde865ICYYOQQq99Zz6kCGf6aYPmQTWq8yrMxmdyJyK3OXPpeqZIMjqv29%2FB0vU7bRR91fiF4w01rRdjDgnboXaMlDCF28HJBjqkAfcIIuTkRJB4COweWeUXXW7G%2BMsIFBmSAYZZzUQrPuhp28zPWa8SB5oUqAxBPuzlL4Re9iAE4OE1%2FWS7h%2FGaYOjECOW8UxykDjf03bN7YAnNPsYoErNqEPWjResktSEgQWaraMEnSOXnPy8CCzfELjp4f0VdSaNUa6BV%2FIa%2B8OIBBqKC4La3sw9G%2B9%2BC3iQnq3xiME8jaUJ%2FWZn%2BliPMGzCQ4EWV&X-Amz-Signature=4da4fe771f4f61dae5954f88e65cce4f4fe29209f551f2b684f29ff7e91c98bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VRXOD3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDrnOLQc7hZ6ryGmO9Eff8d4UDbEynEW%2FCU5jTh2%2BJ13wIhAOPPthpVIntsJCW8qBxIvTH60wCKedPjWmDzZiayw68mKv8DCDIQABoMNjM3NDIzMTgzODA1IgyGOWRYFuYi4LnHiRUq3AO05zce47eUbZXQIXAMU8NUVb%2BjiVrLdgybs%2FuyATJHnLWO4PtdtbG0DcEmFxMY2Ni3EmrkpW5LNnRLteLobKNEh4irwNGtnGpCM3cGxL16r%2FGMboDsa7MfxJJQPYTMGDNZOE4cI6byoaWQbb3Svp4yfpIxrI4tUJyIuFA%2FExFogx9xAunqXL%2FBusn3dRvre%2BdmNBlmqzglDZdkY%2FDsC%2BPwgukG99bOxQQJ3bdSOAvY6vNs%2BnEHPrLLG150FpeYeGq15vbvaW5hXHstYl7cWHIJlc9QtFVcN0TNIczikvTiP1vjL8NpqCvH0Skp4i5ItavgHotO5cyoVk2KVw06tRkQV%2Bnn%2Fuqbub11E%2F0CiDGux67oN7QJg7pCLYg8CD%2BltHi6MH9WPmVOqOwKfw8BWcqCGhsEJNhzCN5IB2NFVa4dyeyuqJCDHrlAh3I96oieWNYg8S9UE4lpNVZlCXtM%2Fy3v%2FjO3jXQNDne3k9f9%2FmS49lfqXLishBstmUzquYjEievp2JvDUwU3Fh%2Fuz2wlniZMHQkbwTsTg%2BzSyde865ICYYOQQq99Zz6kCGf6aYPmQTWq8yrMxmdyJyK3OXPpeqZIMjqv29%2FB0vU7bRR91fiF4w01rRdjDgnboXaMlDCF28HJBjqkAfcIIuTkRJB4COweWeUXXW7G%2BMsIFBmSAYZZzUQrPuhp28zPWa8SB5oUqAxBPuzlL4Re9iAE4OE1%2FWS7h%2FGaYOjECOW8UxykDjf03bN7YAnNPsYoErNqEPWjResktSEgQWaraMEnSOXnPy8CCzfELjp4f0VdSaNUa6BV%2FIa%2B8OIBBqKC4La3sw9G%2B9%2BC3iQnq3xiME8jaUJ%2FWZn%2BliPMGzCQ4EWV&X-Amz-Signature=09d69df0a116b506b3ac54540b505b01b41e452b315ecb31b1600ffb134f06a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

