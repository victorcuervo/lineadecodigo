---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAJIOTM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVXJqhVhv1AIJFjhMrkdNw%2FXF3SHY%2BsOzafkRB1GPqQAiEAp4FRwRJ0khi2fmGXhYEB6nEJSVWyzRmIf0gmeCLQMWkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAlHwTz%2FhQEfolhBAyrcAysuBkgbyoFhKXYHW%2Bd6k0gxvTZPUAsryV4gNmwWRZJAVao40cm4Sp2%2BHWGTljZP65DWJpBigtA1t0Jqib8h5TBVEv9HU7s3PoSxgFYZz1tFHxhA9zKBAIKYQB0nu7msyu36dcEYE1wytsCN1srJgzRgG096aPjyHqT6jVPknucjbTdtNJNCphGTcGsrb%2BskfcWWQon8U0%2Blo1t%2F189WAWgvVqRHIB0c7xcAr7ky9jBkhn9zAejBfhrmQEoNrPX3Ktkmzv9n5wXhDM2GYd7HvSzAWh1QHV%2B8kiDwx9ZOS86Z2oV7xRpMC9sGw11tRt9wB%2FMEFM%2B2outUQr2TZWorZ2tnjTDS7LQyizcv9KnIzxcFi6PgHnrms3e0gWAd5%2Fq47bAKchlyBveB5WRYH6VVpBfAALgWIKT5DLsKHWrEb%2BxzfXxHWpPa2FZIlCKil%2Bz7sqsdwx1cru3Tx2Kx4OzC9IbAFCsBocwDqKH%2FjUB7ATABRgOAnYwXtnGpbHHTCM4Hh2iv1clvDiziUHDC7zsVEZQrju2NzcBJFMaKtYTY2r9oiuBC%2BgkWBUvy21i6VlOQofEw2DVJTqJfwF1rGAtRLxCJOcQGpCoYSQdvo1dnFnqPZDmKIQq4yf9GB04aMI6n0MkGOqUBWFYRgtPQrwWpNArBQz3mufMzvXzJftNMEOAU7aeUGm8b%2Fuvowv4auN2wPxFCwqT9i1OmDZsGiJLHyizMgK%2F7uzH09BMp35eaF%2FR77SKnuiYcNcdqBBbU9cEd915WxFX5%2Bc73rDKikoZ7PcGXJuouL8aQWNJKi22o5ulp60rkeCWAv8l8UJeQcFtPGciLqLW3BXEj3Rju%2F%2B06B5R6suikFOhh2oaA&X-Amz-Signature=79773d85b86f382159ff9188d1f534aa5205c80b9899348fbe9cbac51afd7a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAJIOTM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVXJqhVhv1AIJFjhMrkdNw%2FXF3SHY%2BsOzafkRB1GPqQAiEAp4FRwRJ0khi2fmGXhYEB6nEJSVWyzRmIf0gmeCLQMWkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAlHwTz%2FhQEfolhBAyrcAysuBkgbyoFhKXYHW%2Bd6k0gxvTZPUAsryV4gNmwWRZJAVao40cm4Sp2%2BHWGTljZP65DWJpBigtA1t0Jqib8h5TBVEv9HU7s3PoSxgFYZz1tFHxhA9zKBAIKYQB0nu7msyu36dcEYE1wytsCN1srJgzRgG096aPjyHqT6jVPknucjbTdtNJNCphGTcGsrb%2BskfcWWQon8U0%2Blo1t%2F189WAWgvVqRHIB0c7xcAr7ky9jBkhn9zAejBfhrmQEoNrPX3Ktkmzv9n5wXhDM2GYd7HvSzAWh1QHV%2B8kiDwx9ZOS86Z2oV7xRpMC9sGw11tRt9wB%2FMEFM%2B2outUQr2TZWorZ2tnjTDS7LQyizcv9KnIzxcFi6PgHnrms3e0gWAd5%2Fq47bAKchlyBveB5WRYH6VVpBfAALgWIKT5DLsKHWrEb%2BxzfXxHWpPa2FZIlCKil%2Bz7sqsdwx1cru3Tx2Kx4OzC9IbAFCsBocwDqKH%2FjUB7ATABRgOAnYwXtnGpbHHTCM4Hh2iv1clvDiziUHDC7zsVEZQrju2NzcBJFMaKtYTY2r9oiuBC%2BgkWBUvy21i6VlOQofEw2DVJTqJfwF1rGAtRLxCJOcQGpCoYSQdvo1dnFnqPZDmKIQq4yf9GB04aMI6n0MkGOqUBWFYRgtPQrwWpNArBQz3mufMzvXzJftNMEOAU7aeUGm8b%2Fuvowv4auN2wPxFCwqT9i1OmDZsGiJLHyizMgK%2F7uzH09BMp35eaF%2FR77SKnuiYcNcdqBBbU9cEd915WxFX5%2Bc73rDKikoZ7PcGXJuouL8aQWNJKi22o5ulp60rkeCWAv8l8UJeQcFtPGciLqLW3BXEj3Rju%2F%2B06B5R6suikFOhh2oaA&X-Amz-Signature=65931d1f4198b5ed45ab0f9f2c1da84a1fad5f02a5c813276da62e627f5744c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

