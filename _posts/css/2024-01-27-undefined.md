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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSG2QXG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD2Z%2Ft15nENap0AJim13H3%2Blwt%2Fyxfa0F6wvZMMzexzHAIgTfV6G%2B0JWuJ9MSnqDs8snYFSyh2akDniIPvu0HvcmIoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPcSHhOPXgSf4sIoHSrcA%2B4Bx6%2Fr8qvZUkZymBDj8HGHmrLLdnwBc1GuJ%2BYyA9AKRk7yKlGfcpk40QWzPPajkvxzo4JqgZmnFB324qSLP2ThsRSyNvXxDUJHuIj8Z7rnbPEL7X5B9uLMIhf6vHNNBRugVZzkQRZGnS5NtV2bAvy%2FSfulrV1h6nDlPW%2BFBQ%2FbZ4jTc9kI88Ow5xV5CxD9UAJmZI9sRzp8gk%2BUeCEBRJDa3VBY3MTsYOL%2Bd2YXHmx%2FlwvlasH0EpYdwk0i1QMzj73xiI8vqOTNbOfs4eJw1hyvggKpgriOfjuLIV1RIuH40i2cd7UGVTHq7x68sBDvB6Pj5hVoUX9vzYE%2Fy1xs2NnucRmw2fDqNB9d9dStijiL9EbffOwc87lYtI42kWXYiz%2Fwue6%2F6WsA4krTFfMasOT8jGOtDG6KQpsNv3QnJ9BnXAJMcN1mB4ilhYp71x18U30nfI2B2D05IG3uWHEZuVw%2FpiDVI5hEhU9a2WnN4bYDlOa2cpkqc2v7M3vQARmC8gvNo0uv79SRN9qfDXVmADqnIGeVBb98m6tI5hc41%2Bdqse3XSp3yyf7nSxK9KDZKFnMGuUqQYlWrkzvMehPfG4ycGkd%2FqZQ%2B04M4%2BHQDitsRM88yWM7jezsu2bVgMIe5v8kGOqUBZ6xeq0TN6ntP1Y%2FXCd9IhIN7pnaJIVNWKbgxU69ZxS1pq%2FMPrVJEu2CmPcGR3uE7z3v2at15N3PxzTha0rngQb2Tb1GGBbFzWVhZKQaG4wirlUldtvBTT0RGAftEvF3T6L3rO%2BzEU7TYlRtkuctE90dT%2BX4gLETRCYkfVnAWuGwwLAczWEipNixPLzGWihshMg7KsQoBAgBuGaP8DH%2Fnys5XnsFZ&X-Amz-Signature=130acbbf2a24afede01714a9897611c593b6d581341e4621c406f02125c0f2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQSG2QXG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD2Z%2Ft15nENap0AJim13H3%2Blwt%2Fyxfa0F6wvZMMzexzHAIgTfV6G%2B0JWuJ9MSnqDs8snYFSyh2akDniIPvu0HvcmIoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPcSHhOPXgSf4sIoHSrcA%2B4Bx6%2Fr8qvZUkZymBDj8HGHmrLLdnwBc1GuJ%2BYyA9AKRk7yKlGfcpk40QWzPPajkvxzo4JqgZmnFB324qSLP2ThsRSyNvXxDUJHuIj8Z7rnbPEL7X5B9uLMIhf6vHNNBRugVZzkQRZGnS5NtV2bAvy%2FSfulrV1h6nDlPW%2BFBQ%2FbZ4jTc9kI88Ow5xV5CxD9UAJmZI9sRzp8gk%2BUeCEBRJDa3VBY3MTsYOL%2Bd2YXHmx%2FlwvlasH0EpYdwk0i1QMzj73xiI8vqOTNbOfs4eJw1hyvggKpgriOfjuLIV1RIuH40i2cd7UGVTHq7x68sBDvB6Pj5hVoUX9vzYE%2Fy1xs2NnucRmw2fDqNB9d9dStijiL9EbffOwc87lYtI42kWXYiz%2Fwue6%2F6WsA4krTFfMasOT8jGOtDG6KQpsNv3QnJ9BnXAJMcN1mB4ilhYp71x18U30nfI2B2D05IG3uWHEZuVw%2FpiDVI5hEhU9a2WnN4bYDlOa2cpkqc2v7M3vQARmC8gvNo0uv79SRN9qfDXVmADqnIGeVBb98m6tI5hc41%2Bdqse3XSp3yyf7nSxK9KDZKFnMGuUqQYlWrkzvMehPfG4ycGkd%2FqZQ%2B04M4%2BHQDitsRM88yWM7jezsu2bVgMIe5v8kGOqUBZ6xeq0TN6ntP1Y%2FXCd9IhIN7pnaJIVNWKbgxU69ZxS1pq%2FMPrVJEu2CmPcGR3uE7z3v2at15N3PxzTha0rngQb2Tb1GGBbFzWVhZKQaG4wirlUldtvBTT0RGAftEvF3T6L3rO%2BzEU7TYlRtkuctE90dT%2BX4gLETRCYkfVnAWuGwwLAczWEipNixPLzGWihshMg7KsQoBAgBuGaP8DH%2Fnys5XnsFZ&X-Amz-Signature=0887231ba970d02e9e119877ca36256fcb573b5ccf614a8562f1cf02d9f867f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

