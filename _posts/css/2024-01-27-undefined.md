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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOXEKUN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDyNi69RBnJeMOhAWJeStgif%2BiAf7bztBPlIIurxFzQjgIhAK5oKd%2BNyqfDyiHHpSUVihJz7HdczmFe2SdJQv4Wjc%2BGKv8DCCwQABoMNjM3NDIzMTgzODA1IgzBY2BSmvFW9KflHpIq3APBJ1kl%2BNyXNzLyFMx%2Bdkbar50eJFhxM9vIDnEnyWiPZ1vtRAl9a924Z8IfwsYB%2F9F31k0TDEsU1JYfO9VPKaMrLk%2B2T1fyn1BqPDE22MXJubQ35DeokVQNioELiYtT2nGVd12Oc7w71iyFPjcwJQhtqKiNIuXm2xH3AuBQlZKHXGrbmriV2z8%2B%2FNkr1nFz4QnFUayG7jK86pCa3B1ZWStkSmsNwd%2BZcbQ%2FQCVeyL8GW%2BqQhJGxItBw7%2ByO8S%2BuqT4ikw47evzb9aTYs8czgEidfdTfM%2FQ7LreWOFBOWyJV0NJFOtdaX7YD3PhBjIXhYO18Rva9iGLPHkZFY1r1ocyJFFevw1N4L0kTZZzZRs9XSJvOWHCXgp2pvje1NOdGpBS2wBVcXXmjjsTLs56iHLwR4cD9lU3deIOsqHhFwuURKmXUUdb6PIYNcoQ9NpxE1eAuBRuyVRbEggiLNEU4jWoCH3RJCN0MfTdb9SKnR%2FoA%2FRExl%2F44c%2BTPh%2Bw3BL5eETHG%2F%2BIuOKXBt93AAfUy0LcJ1Nfn6TBNZT7n%2BgAHLaosMZRaxOaRsCuaAR1IThdWR2YYZMgQ8jihMJKnaS85iSVzkYFoCIVThcGiUd3VKzmHItOBwkRK0jocC%2FYwyTCMr8DJBjqkAbrj84MJTAmnetK9xJ47LVoEieYqKL06sBOi23LulWDfPDNCGxdTiCgan96Vn8dO7UxgJ801NwroIw1cyPnePGGN50C%2B%2BEIDkSz84ah4e4ToMim3eoz9at2v73EcVhSKF3cBXM9%2FQNDf2doy5cZIMAKt2VJsLnB1f%2B4Gf2kgX0%2BIfAi58YW5yIl4dCnysk9EphDyrfHf3B0OM3YnBoVVx8r5EcwH&X-Amz-Signature=afcecb9ca43571ef166393a2c3fa222edb54852bcb67c26f4798710b06c65d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOXEKUN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDyNi69RBnJeMOhAWJeStgif%2BiAf7bztBPlIIurxFzQjgIhAK5oKd%2BNyqfDyiHHpSUVihJz7HdczmFe2SdJQv4Wjc%2BGKv8DCCwQABoMNjM3NDIzMTgzODA1IgzBY2BSmvFW9KflHpIq3APBJ1kl%2BNyXNzLyFMx%2Bdkbar50eJFhxM9vIDnEnyWiPZ1vtRAl9a924Z8IfwsYB%2F9F31k0TDEsU1JYfO9VPKaMrLk%2B2T1fyn1BqPDE22MXJubQ35DeokVQNioELiYtT2nGVd12Oc7w71iyFPjcwJQhtqKiNIuXm2xH3AuBQlZKHXGrbmriV2z8%2B%2FNkr1nFz4QnFUayG7jK86pCa3B1ZWStkSmsNwd%2BZcbQ%2FQCVeyL8GW%2BqQhJGxItBw7%2ByO8S%2BuqT4ikw47evzb9aTYs8czgEidfdTfM%2FQ7LreWOFBOWyJV0NJFOtdaX7YD3PhBjIXhYO18Rva9iGLPHkZFY1r1ocyJFFevw1N4L0kTZZzZRs9XSJvOWHCXgp2pvje1NOdGpBS2wBVcXXmjjsTLs56iHLwR4cD9lU3deIOsqHhFwuURKmXUUdb6PIYNcoQ9NpxE1eAuBRuyVRbEggiLNEU4jWoCH3RJCN0MfTdb9SKnR%2FoA%2FRExl%2F44c%2BTPh%2Bw3BL5eETHG%2F%2BIuOKXBt93AAfUy0LcJ1Nfn6TBNZT7n%2BgAHLaosMZRaxOaRsCuaAR1IThdWR2YYZMgQ8jihMJKnaS85iSVzkYFoCIVThcGiUd3VKzmHItOBwkRK0jocC%2FYwyTCMr8DJBjqkAbrj84MJTAmnetK9xJ47LVoEieYqKL06sBOi23LulWDfPDNCGxdTiCgan96Vn8dO7UxgJ801NwroIw1cyPnePGGN50C%2B%2BEIDkSz84ah4e4ToMim3eoz9at2v73EcVhSKF3cBXM9%2FQNDf2doy5cZIMAKt2VJsLnB1f%2B4Gf2kgX0%2BIfAi58YW5yIl4dCnysk9EphDyrfHf3B0OM3YnBoVVx8r5EcwH&X-Amz-Signature=7f4b41e8f716cc1b44633ef3eed28cc013c476fe2fcdd30effa572cac96fe122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

