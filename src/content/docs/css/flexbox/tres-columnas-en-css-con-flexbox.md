---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUD67U5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyWfPcOR8LDmWZ873KWclkbPUXuk97b5XmwM%2B1dWqfFAiB0fWCVnI9NUldlXPWcefBASWx1y1E%2FTmqPEHJ9CFrFUSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMw2w6YFJDMyxWz55LKtwDvGVglL95lw4pWoRFVeZCAJVZcGrIrgZtU3LXzxeWFsAg2woskqPxIzohHn77ruZ9gRaTmm9LR3JLL%2F2iDUOVziovCMzkclIia6Lh7WqQDKkAh1D4q2nDvjj4m6WwCWCrkzqrsdgAJhocQTNLiZt4zC8af8QJDDb1AGgZWqhPGGS%2F0GBeMEjkjuS8mFyHcZ0w%2BBJ7ksiSW7ztri8L0v8OJwSt0R8YINc%2FZvZYvb%2F2cBFdGTWONuVJV%2FHWKr2UP79m0qUwQsrUxey3%2BkR3TpMnjovAqqK9t%2Fd21aqVPerj7hFFKNShd1koLsFYHDaL2gD3o%2F3mnWEyMIQV%2FyZTUsG5b%2FpqpuI40KyYBsAzs1QnNtgYD7EYHa4XMS%2BFQEBVdQ%2Ba%2B2W1EpKZLH%2FD8pXJZ%2B2NBOClODYd0Jm1FTnqUCbPfjOTLJJ84hEPsQEiBMulMnhz4sBLqq0BT2TELLBSzA4ATruenuVgkfrBst4ksuaTEqlV4PA64j6gj1RlR1do4KZAwEqumZ%2FtD4Fre8qCprktpgsUOcIjNWUCwQIDhebLOZDvS%2BnCOn1UElKeURKjKLmsNv7X%2FLhHl2C2A9Cp6JcAXabF74evnG%2FyGWKciM6LINnF2aqp%2BdZBgqjZ0Ygw2fzOyQY6pgHcZymyITwI7JoNWw0qhRLrLwUoxsvkwbsIHQOrbE1JobV8J4S7ya29%2BmkPovQodxegdcJ9TRhKjMqnImPH2oFAztG33jVdIYKO8lJiuXNeqfzZRll%2F0Z3MW5RJqRXjFtq1XKpJzl4oAsJmpme73vYcxCC8yGPZNq7RX7Yr5KPnvoKUX1ge40gyTrw4O1D9qAd2ODlLt0WIXS9DzcEAjoqWBWDxneby&X-Amz-Signature=1f679dd9b9cd5557f1c79fcc1442b34e6cd55f9c8b4b8a8d47fb7118e7af56f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUD67U5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyWfPcOR8LDmWZ873KWclkbPUXuk97b5XmwM%2B1dWqfFAiB0fWCVnI9NUldlXPWcefBASWx1y1E%2FTmqPEHJ9CFrFUSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMw2w6YFJDMyxWz55LKtwDvGVglL95lw4pWoRFVeZCAJVZcGrIrgZtU3LXzxeWFsAg2woskqPxIzohHn77ruZ9gRaTmm9LR3JLL%2F2iDUOVziovCMzkclIia6Lh7WqQDKkAh1D4q2nDvjj4m6WwCWCrkzqrsdgAJhocQTNLiZt4zC8af8QJDDb1AGgZWqhPGGS%2F0GBeMEjkjuS8mFyHcZ0w%2BBJ7ksiSW7ztri8L0v8OJwSt0R8YINc%2FZvZYvb%2F2cBFdGTWONuVJV%2FHWKr2UP79m0qUwQsrUxey3%2BkR3TpMnjovAqqK9t%2Fd21aqVPerj7hFFKNShd1koLsFYHDaL2gD3o%2F3mnWEyMIQV%2FyZTUsG5b%2FpqpuI40KyYBsAzs1QnNtgYD7EYHa4XMS%2BFQEBVdQ%2Ba%2B2W1EpKZLH%2FD8pXJZ%2B2NBOClODYd0Jm1FTnqUCbPfjOTLJJ84hEPsQEiBMulMnhz4sBLqq0BT2TELLBSzA4ATruenuVgkfrBst4ksuaTEqlV4PA64j6gj1RlR1do4KZAwEqumZ%2FtD4Fre8qCprktpgsUOcIjNWUCwQIDhebLOZDvS%2BnCOn1UElKeURKjKLmsNv7X%2FLhHl2C2A9Cp6JcAXabF74evnG%2FyGWKciM6LINnF2aqp%2BdZBgqjZ0Ygw2fzOyQY6pgHcZymyITwI7JoNWw0qhRLrLwUoxsvkwbsIHQOrbE1JobV8J4S7ya29%2BmkPovQodxegdcJ9TRhKjMqnImPH2oFAztG33jVdIYKO8lJiuXNeqfzZRll%2F0Z3MW5RJqRXjFtq1XKpJzl4oAsJmpme73vYcxCC8yGPZNq7RX7Yr5KPnvoKUX1ge40gyTrw4O1D9qAd2ODlLt0WIXS9DzcEAjoqWBWDxneby&X-Amz-Signature=70b26bb1dcfe3645b50618d1afa48208d13d4501785827575776ad7d537f8716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

