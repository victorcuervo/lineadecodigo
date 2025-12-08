---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECPV4TS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRQS6GtZc7XFsb8RdaYLHOH8rvYuvKgtA7uPPcUA0TzgIhANwwk4kaeMWWRX49%2FcydUDjm%2BWA0O%2FO1pbs4WIUfwTUjKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyyi2xlJM9QLK%2Bb2t8q3APGPTuH4gI3C%2FBjryg7Sb4DSJn1Zy6HehZw3vT4LX5qNvkWfmNIHbCmnIrNglxPyQW6LrMx%2FbYoR%2FlU%2F3%2Fm3uV2jAVxjmpWkOEbOqyiHU2wDXWz9vT%2FwzvnNATPujlcIS4T3y3qJwwGre1PqWqK6kBhP3ggajcZBrsYP3V6C9oIhY%2FtodlSE4GfLc2GlKSBZWJmKmRMNrBK1JNrqAzDyhq1sgXiG0wlwPb6iO3YYtkDlp33xZ9VlhXWY4oZ%2BSUl1xpWmdRH6Ru7ux0JuUa1h%2B1swg3dAjupA6nnTA7Rpq8qL4boNKXE50tFAM3QvkvwPJ55sNOJ5lxLvCOhA3aPLJb5mQrGw0FrZV4WMP2B07GIXs32TjgaFtxkYDGXHE6vhHJ8Q7TDIladlxLbXpaqq%2BXkEOS9HsnfbgwGmuSoH7QC1%2F4MG23eSgA%2FXozqxw3vmoyspIhvpSV%2BbvS%2Fq%2BgZulyMfsRT8bPEzrewXnJAoCHcaWBPtIH2BwYxdvNIaQGB09DlGueUccrdYBeHi1u2rijVqf341Hn73%2BLNNKejHEpSCQaNXvoCGAhlQdXVJZY4rNQCBOe7wENvK0TgAbCURG92mjf6r1pHMHMQ23zRmhYVSkOP7%2ByY1%2FZMkvm6SzDvj9vJBjqkAVY2754CdCWcgE67JhcTvntSoBshfLaXqVpHDU3qmdoQW5RskhlutmtFujD1xEnhhYowD7lNvux6pQCwm8B1U%2F3Vok8CfVQzs6vY4NjTJlvYI1%2FYLq2PdoizjEonEPvVJmdZOPkgBL2eO49JWaET7SV%2BS%2FvgZLNNUeENgT5c02nMO6HcxSLEOHONq%2BlnvaJ0q9AXvAaPbBTBHolWYWZk1pLH5%2Bbx&X-Amz-Signature=d4dfe0134f331028c884d3cba081b2a8efcb540d945c72c99bf69e109f0e3fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECPV4TS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRQS6GtZc7XFsb8RdaYLHOH8rvYuvKgtA7uPPcUA0TzgIhANwwk4kaeMWWRX49%2FcydUDjm%2BWA0O%2FO1pbs4WIUfwTUjKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyyi2xlJM9QLK%2Bb2t8q3APGPTuH4gI3C%2FBjryg7Sb4DSJn1Zy6HehZw3vT4LX5qNvkWfmNIHbCmnIrNglxPyQW6LrMx%2FbYoR%2FlU%2F3%2Fm3uV2jAVxjmpWkOEbOqyiHU2wDXWz9vT%2FwzvnNATPujlcIS4T3y3qJwwGre1PqWqK6kBhP3ggajcZBrsYP3V6C9oIhY%2FtodlSE4GfLc2GlKSBZWJmKmRMNrBK1JNrqAzDyhq1sgXiG0wlwPb6iO3YYtkDlp33xZ9VlhXWY4oZ%2BSUl1xpWmdRH6Ru7ux0JuUa1h%2B1swg3dAjupA6nnTA7Rpq8qL4boNKXE50tFAM3QvkvwPJ55sNOJ5lxLvCOhA3aPLJb5mQrGw0FrZV4WMP2B07GIXs32TjgaFtxkYDGXHE6vhHJ8Q7TDIladlxLbXpaqq%2BXkEOS9HsnfbgwGmuSoH7QC1%2F4MG23eSgA%2FXozqxw3vmoyspIhvpSV%2BbvS%2Fq%2BgZulyMfsRT8bPEzrewXnJAoCHcaWBPtIH2BwYxdvNIaQGB09DlGueUccrdYBeHi1u2rijVqf341Hn73%2BLNNKejHEpSCQaNXvoCGAhlQdXVJZY4rNQCBOe7wENvK0TgAbCURG92mjf6r1pHMHMQ23zRmhYVSkOP7%2ByY1%2FZMkvm6SzDvj9vJBjqkAVY2754CdCWcgE67JhcTvntSoBshfLaXqVpHDU3qmdoQW5RskhlutmtFujD1xEnhhYowD7lNvux6pQCwm8B1U%2F3Vok8CfVQzs6vY4NjTJlvYI1%2FYLq2PdoizjEonEPvVJmdZOPkgBL2eO49JWaET7SV%2BS%2FvgZLNNUeENgT5c02nMO6HcxSLEOHONq%2BlnvaJ0q9AXvAaPbBTBHolWYWZk1pLH5%2Bbx&X-Amz-Signature=57ac93b1e4d2e86702ead654f1b30e2436dd3147cec22a047d7a0f22a9fea8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

