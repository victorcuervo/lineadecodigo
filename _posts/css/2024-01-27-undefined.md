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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEUAS77%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD4gukMIRSLjmMrR%2Faq2kpAknRxQukAVIjcqssoVj5bNQIhANEI9uHLwQqmcmgZ7ZUMuOhUfTUZS9g7Xoxu0lwhQwd%2BKv8DCCIQABoMNjM3NDIzMTgzODA1IgyzciMOwRMa7yzykOwq3AOe%2FjAy09d3sB6iDtod4aRn%2FwbDCY3q27dBBBdQWgVao%2BROCcOFbeX8NFITi8VMDVYAEYtoj7hu5xV%2BuZMlMn3toE7ffGTZR5Pj6IY9E1m%2FGg24YfQltmxErLtPwymWOrfjn%2FR3hq7pqG3GvHngO6yKOa%2F8Wpbm9QQLppQKpZF5Etmlg8do9erX5%2FRE1fUYNDC%2FE2dgRs4F9IPLqfSajgVIowiZXDAp3S%2BmjpVxp3I6pnpNDtmQtRD5Agof6RMI%2FnoiqKvVc3euhR8PNReD1g67Tf9ziCjFhuIKMkxIm6GUT0i9zV0nNv%2Fa4jM21HT21I4IVYJy5Wcx2zxS%2BTpAuugZ88LAGdyxbnv5zl6Z%2B1u3r5ZlqLEb7Cv2Na5omkgtYpoOItUWjOCeIkNyoJwV%2BedJSkegzvnH3tL7CNFRJ0dep7gXIkIaL8%2Bs%2Flvy%2BtOxpw93w77b4XAoOSX1t4o48wCEaQn02es1h9rAM%2FIgaO9GU3CZOCLlTttE1GKH%2FoGsOYX3waZUVUbNXo3f0CgCyzUJ9euNyqk%2BqajHepHqf6Tkdho6SZOdYfRqCEkIrEN41cgF%2B92fvviC11Av8fAna%2BHQTU%2Fmd90Gr0XoMtJF6C9X6LSQmFm0Uypa9i1umjDJlL7JBjqkATHrpWZkbtl3TqWaGdTMEU11dvg6bdsxxvI2X%2FM9zLUlqYcceAzsH8do%2F17e69CnFLU9tiS4Byz4CZCbUoClxWQhbJ6PxY8BfFWC0T%2BK9Ky0%2BDLDGbeALkgK2FooQ88mrlQLGx%2BzatGxER%2FLO4amccT9EV9TU79OUabcdYJFPd%2B6XLAWXZALD1pCth3sDkEb2Nk3vj1wBxYUeuqjXAj7q88n5nCO&X-Amz-Signature=217af4d99320790ff4541985b22a9fa2304f45da4bc75cde17239c11baa3eae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEUAS77%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD4gukMIRSLjmMrR%2Faq2kpAknRxQukAVIjcqssoVj5bNQIhANEI9uHLwQqmcmgZ7ZUMuOhUfTUZS9g7Xoxu0lwhQwd%2BKv8DCCIQABoMNjM3NDIzMTgzODA1IgyzciMOwRMa7yzykOwq3AOe%2FjAy09d3sB6iDtod4aRn%2FwbDCY3q27dBBBdQWgVao%2BROCcOFbeX8NFITi8VMDVYAEYtoj7hu5xV%2BuZMlMn3toE7ffGTZR5Pj6IY9E1m%2FGg24YfQltmxErLtPwymWOrfjn%2FR3hq7pqG3GvHngO6yKOa%2F8Wpbm9QQLppQKpZF5Etmlg8do9erX5%2FRE1fUYNDC%2FE2dgRs4F9IPLqfSajgVIowiZXDAp3S%2BmjpVxp3I6pnpNDtmQtRD5Agof6RMI%2FnoiqKvVc3euhR8PNReD1g67Tf9ziCjFhuIKMkxIm6GUT0i9zV0nNv%2Fa4jM21HT21I4IVYJy5Wcx2zxS%2BTpAuugZ88LAGdyxbnv5zl6Z%2B1u3r5ZlqLEb7Cv2Na5omkgtYpoOItUWjOCeIkNyoJwV%2BedJSkegzvnH3tL7CNFRJ0dep7gXIkIaL8%2Bs%2Flvy%2BtOxpw93w77b4XAoOSX1t4o48wCEaQn02es1h9rAM%2FIgaO9GU3CZOCLlTttE1GKH%2FoGsOYX3waZUVUbNXo3f0CgCyzUJ9euNyqk%2BqajHepHqf6Tkdho6SZOdYfRqCEkIrEN41cgF%2B92fvviC11Av8fAna%2BHQTU%2Fmd90Gr0XoMtJF6C9X6LSQmFm0Uypa9i1umjDJlL7JBjqkATHrpWZkbtl3TqWaGdTMEU11dvg6bdsxxvI2X%2FM9zLUlqYcceAzsH8do%2F17e69CnFLU9tiS4Byz4CZCbUoClxWQhbJ6PxY8BfFWC0T%2BK9Ky0%2BDLDGbeALkgK2FooQ88mrlQLGx%2BzatGxER%2FLO4amccT9EV9TU79OUabcdYJFPd%2B6XLAWXZALD1pCth3sDkEb2Nk3vj1wBxYUeuqjXAj7q88n5nCO&X-Amz-Signature=55353e44235b7ae09c429173270b4abb95cff6e12ca4e12fdc3a0f82ff2967a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

