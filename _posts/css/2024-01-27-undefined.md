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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRW5NST%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEB1cv5fBE6wjsOyQKioa9Bwd%2FVkiyY7Ppp9Wb5GBGxlAiEAr0k8%2FhGpcUFK9p4bZ6%2BfESDhrpDZo7CBRN2vn4UYP8Aq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMVNQo8hzzIRl9PNtyrcAzsG0chS9L5ewmszFPtcAjqT9zyJ3JC5DaSJuI4XaIgmdnCKUNtxoWM1WpPNKX1XueocvspgDjS8YgGmm2txswWeHX0WMW5hpAlai8Z%2FT49usNBp%2BNdUlC%2Fvd3o9kUSz2pT1khvAejAeIKiHvHzW8yPup1NFFIYjK6maCYbfqqB6AAUD1X3mjd8l2upjBolvADn775dJKlzGF8e3nrlhknjX9U4X4LSivy0JHNgarcn%2B7QKILWvceIfDoouqgEpLaC%2FfWWYgH8rOzZ6F7zkV8ZcYZVD2FyDTk%2F94vOP49Wv7UkaMc1lqja5A4VxlOIl%2BOA4L%2BXZixccrqXM5%2F9A%2BMZ%2Fy7m8yxDXYpHpZts17dIVmml%2FsTRYuQPSJC3Cw%2FFu8aCktWOA7BWpLenNehylMUph609fGkAAcWIzvIwwmqANvJo5z965bzOR%2FBtrwrCtaaaLjxvOYBeYs4%2FmzEp54JNOKh6l0KKLjpfSEN%2FvSC9TW%2F1iW536oCk6fhkstiOQP0f3wlSIwwNSwm4NzuGcv428mQDRQsp7nzFIxnWL%2B7kP1Z2E%2BTEGmeA3gF7ecQGMVQ5hJGx3%2F65Un1oN1kYNagKrFogltUURsza9501jH0pGbDs3wRLUOGs5pkLjlMKyHwckGOqUBs%2FWJh9lOWS0b%2FHihoUyojHWuzKfojvNI1NkN4W6DMnEMLg%2B1sxQS50UGLq6cXI8glvhyrOX0zzORxSk%2FbCcnbjy3szwSH1PiTHUJAVM8GpBcEysLPXI6QNinGQuQzSL%2BgDEWcKf2J1Z5cx%2Bq1chzAAQu4M1FHHcs4s6KLJggT3Ox9lPXN60uO2TcH9SEo65LFAqC3Tcv7Uk2z%2Fn639Eqhft7POqi&X-Amz-Signature=e213d46ffa2ca70c42fae62711cb10afdd5a0d02a69b7dffba286dee40a01080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRW5NST%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEB1cv5fBE6wjsOyQKioa9Bwd%2FVkiyY7Ppp9Wb5GBGxlAiEAr0k8%2FhGpcUFK9p4bZ6%2BfESDhrpDZo7CBRN2vn4UYP8Aq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMVNQo8hzzIRl9PNtyrcAzsG0chS9L5ewmszFPtcAjqT9zyJ3JC5DaSJuI4XaIgmdnCKUNtxoWM1WpPNKX1XueocvspgDjS8YgGmm2txswWeHX0WMW5hpAlai8Z%2FT49usNBp%2BNdUlC%2Fvd3o9kUSz2pT1khvAejAeIKiHvHzW8yPup1NFFIYjK6maCYbfqqB6AAUD1X3mjd8l2upjBolvADn775dJKlzGF8e3nrlhknjX9U4X4LSivy0JHNgarcn%2B7QKILWvceIfDoouqgEpLaC%2FfWWYgH8rOzZ6F7zkV8ZcYZVD2FyDTk%2F94vOP49Wv7UkaMc1lqja5A4VxlOIl%2BOA4L%2BXZixccrqXM5%2F9A%2BMZ%2Fy7m8yxDXYpHpZts17dIVmml%2FsTRYuQPSJC3Cw%2FFu8aCktWOA7BWpLenNehylMUph609fGkAAcWIzvIwwmqANvJo5z965bzOR%2FBtrwrCtaaaLjxvOYBeYs4%2FmzEp54JNOKh6l0KKLjpfSEN%2FvSC9TW%2F1iW536oCk6fhkstiOQP0f3wlSIwwNSwm4NzuGcv428mQDRQsp7nzFIxnWL%2B7kP1Z2E%2BTEGmeA3gF7ecQGMVQ5hJGx3%2F65Un1oN1kYNagKrFogltUURsza9501jH0pGbDs3wRLUOGs5pkLjlMKyHwckGOqUBs%2FWJh9lOWS0b%2FHihoUyojHWuzKfojvNI1NkN4W6DMnEMLg%2B1sxQS50UGLq6cXI8glvhyrOX0zzORxSk%2FbCcnbjy3szwSH1PiTHUJAVM8GpBcEysLPXI6QNinGQuQzSL%2BgDEWcKf2J1Z5cx%2Bq1chzAAQu4M1FHHcs4s6KLJggT3Ox9lPXN60uO2TcH9SEo65LFAqC3Tcv7Uk2z%2Fn639Eqhft7POqi&X-Amz-Signature=1977bd7c3b503604323b305bbae7de4510ce82b4c4791b9f47f5f346366118aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

