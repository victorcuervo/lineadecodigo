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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MABUKV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGvTgQjD7MEN5OfTi2NS1bAzMZJiEYG5Rcr5kW3xKPZ5AiEAzXKvwqSfHhWC69ILOJNlRt5mPztT%2FrzxragTfqn023Qq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJGYBBPWT%2FbOk38CgyrcA6zZErHdwnmLPakWAOprWE7Ix%2BrnMRdzyzx5lUTmxkxFVmbbYT4XkF3EK6heweY1xQ259AUbg8ufD06pHAEy4t7wm4Kn3Zm%2FM91uW3zifNw2XHe95gYSIrKTqw2Bp7hMvB7cb4gyHFJOTXyLQJ1k1voy0KPKOpvgQ4Q5AJrDSVHY33wq2yi%2FPuuuMMNZ4DcwKS7w2cdxNtTqwc6rZd0qEoZnKFF1dr6tpcFrZYdYF8Mz7dkudKwmwtMDsv7NwrW7zEVrb%2Bx3uWgbcQvVC195BiHIkk5y18Xx5ESN4r1081DyczQQ9i9CJSy17xQ3wqQv7mjwJ1LRmc%2BjuMpT3Xc%2FSqAx7zPqb2FGnxPbu7baV%2FgTB%2FCyWYmOkRkgt6tA2fcKn44748YG85WbJrrdIhtd6%2BLRuuxTXUtUaBJbYAw4H3IIJKlMko8v99x%2FJDIeEOTCuQ7GcZgdtyNzvReKm%2FBf7KgkGubBpwNl0aeglLuNN5pEV9wDiMjWXUaGel%2BeGxa3YEgUkwkH%2B9xRtWbt6AQplNQOxlmBSZdm28EteBOkHmF%2Bnvnzzh%2BzNHq6itWiRQOqWQNUeKb%2FWSh1qbTnxcJ5KQFmXaOBRRH%2FvqytFkXqTNEzqH9mUaS2TV8t7muYMLWuwMkGOqUBpruJPqxsGRciuDisC%2BMuHTmcpYewIBgJotIAL7fyktg9%2BWkiQoJHqKjSo9BgK%2FF2L1TIfUz1c%2BXKtJb2m6dLLpVFMN0zYMJ3fYUj0%2F81YFKqFgcuIIa4CZd21IzrEN2ywk7BPKtq24yZbsiR4rZBU4JAQP%2B4GqAIgYOInKAFpY8Df6e%2FWNpDhHjwt2%2F90QXn9NhVKk9O%2FOYzGCM5jOabmfyQD1%2FS&X-Amz-Signature=fb67fbbf84b6446afb5d262c2526e59c64a6d617f7cc2c9f4ab35773aedc0097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MABUKV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGvTgQjD7MEN5OfTi2NS1bAzMZJiEYG5Rcr5kW3xKPZ5AiEAzXKvwqSfHhWC69ILOJNlRt5mPztT%2FrzxragTfqn023Qq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJGYBBPWT%2FbOk38CgyrcA6zZErHdwnmLPakWAOprWE7Ix%2BrnMRdzyzx5lUTmxkxFVmbbYT4XkF3EK6heweY1xQ259AUbg8ufD06pHAEy4t7wm4Kn3Zm%2FM91uW3zifNw2XHe95gYSIrKTqw2Bp7hMvB7cb4gyHFJOTXyLQJ1k1voy0KPKOpvgQ4Q5AJrDSVHY33wq2yi%2FPuuuMMNZ4DcwKS7w2cdxNtTqwc6rZd0qEoZnKFF1dr6tpcFrZYdYF8Mz7dkudKwmwtMDsv7NwrW7zEVrb%2Bx3uWgbcQvVC195BiHIkk5y18Xx5ESN4r1081DyczQQ9i9CJSy17xQ3wqQv7mjwJ1LRmc%2BjuMpT3Xc%2FSqAx7zPqb2FGnxPbu7baV%2FgTB%2FCyWYmOkRkgt6tA2fcKn44748YG85WbJrrdIhtd6%2BLRuuxTXUtUaBJbYAw4H3IIJKlMko8v99x%2FJDIeEOTCuQ7GcZgdtyNzvReKm%2FBf7KgkGubBpwNl0aeglLuNN5pEV9wDiMjWXUaGel%2BeGxa3YEgUkwkH%2B9xRtWbt6AQplNQOxlmBSZdm28EteBOkHmF%2Bnvnzzh%2BzNHq6itWiRQOqWQNUeKb%2FWSh1qbTnxcJ5KQFmXaOBRRH%2FvqytFkXqTNEzqH9mUaS2TV8t7muYMLWuwMkGOqUBpruJPqxsGRciuDisC%2BMuHTmcpYewIBgJotIAL7fyktg9%2BWkiQoJHqKjSo9BgK%2FF2L1TIfUz1c%2BXKtJb2m6dLLpVFMN0zYMJ3fYUj0%2F81YFKqFgcuIIa4CZd21IzrEN2ywk7BPKtq24yZbsiR4rZBU4JAQP%2B4GqAIgYOInKAFpY8Df6e%2FWNpDhHjwt2%2F90QXn9NhVKk9O%2FOYzGCM5jOabmfyQD1%2FS&X-Amz-Signature=4bb824a629d206da118a6834acd965808e1cf8e7c1747c0276119067baee9435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

