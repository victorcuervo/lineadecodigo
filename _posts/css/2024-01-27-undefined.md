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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNTO4EV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCG1%2FIVCjQgr%2F57DPLX2RIFN1Ota8avhwep3t%2F6%2BtJw9gIhAP4VrkJoz7X44quOZJ2WMAFxNKx5z89%2BI5CkrSbpH1W9Kv8DCCsQABoMNjM3NDIzMTgzODA1Igzqjf2OP%2Bf5kEKY6ZQq3AOp8upvWu199SIGYTQDSOtN0RtuxvtOqtWV50Nl6uS7s6SoryRRh1GBXKZEEPRZFpfPGXON1BBSQbFrwGcrLKZJ%2Bvx4bFDdWQ%2FeRbb6tElqjnApHMIvcl75RuGKQQn0Le%2BNnF1Uv2buvwU1%2FqnPdujlmW1riqOvor%2FZnjgApE2C2YNqNBqKkRGJULAxZlMlimsjHRnD3s1FWQCFXL2XzmZarHsEDGRN6W37QOEkxE3A0A%2B458311eRt5JkAZiaLDptZ%2B%2FqnUX9E%2F49CihQ%2FmMIeTr1WLHwqP0nhuImdhunfX%2F9q1hpntr9%2FGe1mLdW4Ukd8y%2BT2znyrS2OqD6j%2BhsscMP8DfAgedy7A4n93N%2B2ydlRyU1YTswaUazZ3VIoJs3BwFrZ5Jlc1%2B4Js3ohAu2aVvcmIH7sdpC%2BgefpvplIhgR9Q%2Bfp6ZjJeai%2B%2FV7z9D3zENIoJ7%2BFVSuD4YV2ubvZEE5UDHtOZCvV4TZl6kir1FNtKgA2rrPlVPq8h3%2BCAs0vr%2BsYB8N7TgNxYtwdIeqAM2clM76993LBrQG9f8Bv%2FLT5WiDwxcHMuL8ckPFqClV4r3Tli5%2FDGlUk%2F3JtdAnyhK7i2f0KpmRx8XickzZZc27olSyODn9EiJ6XisjDjksDJBjqkAbJ5I5EdI2RqeApGmsIhaiho6eOlhHS6lcBITIjdma4d1T%2F%2Fy%2BZvjyKI2mJD%2FzuRLIYGy2osWPTvyAonNjT7u0Qne5KJ8BTIbUSf1hNlPAR2Sl8leDlkUtm0XR11gJuanQvi4Dx4%2BJYw8t2S6N2NXda84tAVJBMPc5w39UW%2FRYUZ4E8XhQyJ3w%2F%2BjAgCQCPnEHAdHUUQ7zTRiuvkS94BGleJuHTf&X-Amz-Signature=6861bc948c66212d902b3b64b2f4017a5162219f203e2c5fed7351fc7214e080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNTO4EV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCG1%2FIVCjQgr%2F57DPLX2RIFN1Ota8avhwep3t%2F6%2BtJw9gIhAP4VrkJoz7X44quOZJ2WMAFxNKx5z89%2BI5CkrSbpH1W9Kv8DCCsQABoMNjM3NDIzMTgzODA1Igzqjf2OP%2Bf5kEKY6ZQq3AOp8upvWu199SIGYTQDSOtN0RtuxvtOqtWV50Nl6uS7s6SoryRRh1GBXKZEEPRZFpfPGXON1BBSQbFrwGcrLKZJ%2Bvx4bFDdWQ%2FeRbb6tElqjnApHMIvcl75RuGKQQn0Le%2BNnF1Uv2buvwU1%2FqnPdujlmW1riqOvor%2FZnjgApE2C2YNqNBqKkRGJULAxZlMlimsjHRnD3s1FWQCFXL2XzmZarHsEDGRN6W37QOEkxE3A0A%2B458311eRt5JkAZiaLDptZ%2B%2FqnUX9E%2F49CihQ%2FmMIeTr1WLHwqP0nhuImdhunfX%2F9q1hpntr9%2FGe1mLdW4Ukd8y%2BT2znyrS2OqD6j%2BhsscMP8DfAgedy7A4n93N%2B2ydlRyU1YTswaUazZ3VIoJs3BwFrZ5Jlc1%2B4Js3ohAu2aVvcmIH7sdpC%2BgefpvplIhgR9Q%2Bfp6ZjJeai%2B%2FV7z9D3zENIoJ7%2BFVSuD4YV2ubvZEE5UDHtOZCvV4TZl6kir1FNtKgA2rrPlVPq8h3%2BCAs0vr%2BsYB8N7TgNxYtwdIeqAM2clM76993LBrQG9f8Bv%2FLT5WiDwxcHMuL8ckPFqClV4r3Tli5%2FDGlUk%2F3JtdAnyhK7i2f0KpmRx8XickzZZc27olSyODn9EiJ6XisjDjksDJBjqkAbJ5I5EdI2RqeApGmsIhaiho6eOlhHS6lcBITIjdma4d1T%2F%2Fy%2BZvjyKI2mJD%2FzuRLIYGy2osWPTvyAonNjT7u0Qne5KJ8BTIbUSf1hNlPAR2Sl8leDlkUtm0XR11gJuanQvi4Dx4%2BJYw8t2S6N2NXda84tAVJBMPc5w39UW%2FRYUZ4E8XhQyJ3w%2F%2BjAgCQCPnEHAdHUUQ7zTRiuvkS94BGleJuHTf&X-Amz-Signature=f96254491dd119b9b658f2ef24c3e15a7a5beed20d2ad98630f2769cf6cd3455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

