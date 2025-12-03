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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NICPUC5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDDAFE9%2B6g64Bsq581A39W3t0%2Bh%2FXIX5Es%2BRkcx42%2FuHAIhAIF9XP2PV2arBiz%2FjZZs2ODggRRTcL5ZhXk7fy%2Fbv8axKv8DCCcQABoMNjM3NDIzMTgzODA1IgwxkE0JEPkikJB4jXoq3AMup%2BwrDb4Smug7vnos4neL5cTqND%2Fos%2FeARaqFpWNqe1RqMa8a8ZGIml8bX8N47kFXBnrOPnBwOQsnR4iHlTKGq5Y58sVrp2DW3SKwv0zCYJJyag8ksMW5oi4dXuSM5nrveUVCic2yKfJEpkIsb%2Bdwo8p7V%2FeXto8FgdjgNbucGt5j78QR08oFXOkV8XMTSBJZzASIfAGNLc2BS%2BAJJSKOYZfLKZ5mn1XIkEkeRMdQqq4lPIgOa%2BIuriuLUWEuqSdQA%2BXFuixsG4YnXc0kdWbmkQmxguaZBiZhnFWBm5bTC7jxSr9nFJXdB6gCEUV%2FNOzMtDmcv99zsQpN8RcFrV7UhM1csLMiSdeO4oTIPk0VSz3Mpgj4e3OpIXk1d3KQzBNTtrKJjXIUs%2Fda1rp4mRxTATjf0q4%2FrZqnMGWacsEaSp4EKpuEMKmxgxUK9OSiVay8hzrhu0Dc7KkF3e%2F6ANpJkdmJlyPTarXeBlT4ZsNOOqGlvR4I1cRy%2BZrxDLMz2mAy1%2BaUnGC2viwwz9cRV4l%2BV4CfupSDYObYz%2FCZ9rUKF6HaxEPta4GHWMsEZGAsPsIixZjIEp%2BumwnV6p7nVU2Yr3bZI5p6h8AUonSueBHkMHUea4axnu7np9Q4fDCbm7%2FJBjqkAfYlMX7lGX5UtibWAL9G3Xu%2FZ%2Fa9R5wbmrlSyDeJNT4gVznEteAO5Q7sziJUVempOqoLeVB6E4d62pUPrnXHhb8yUUsKIu1Ark78ow6kDe0EgDpFpMLS37NKRlX6cEu7Ugl68atYPZ9sCgnPLvY2ztyH7NBsBNrVz%2FWh3947FWd9bFdl8ylLzGugSo%2BCeC90mr5KAIU4tOfyd42K1UVNyDPzLK5x&X-Amz-Signature=b27f2f48f647af0e1577b0bc9998fb465c8abbc45b7f1e61067e9bd5b35baba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NICPUC5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDDAFE9%2B6g64Bsq581A39W3t0%2Bh%2FXIX5Es%2BRkcx42%2FuHAIhAIF9XP2PV2arBiz%2FjZZs2ODggRRTcL5ZhXk7fy%2Fbv8axKv8DCCcQABoMNjM3NDIzMTgzODA1IgwxkE0JEPkikJB4jXoq3AMup%2BwrDb4Smug7vnos4neL5cTqND%2Fos%2FeARaqFpWNqe1RqMa8a8ZGIml8bX8N47kFXBnrOPnBwOQsnR4iHlTKGq5Y58sVrp2DW3SKwv0zCYJJyag8ksMW5oi4dXuSM5nrveUVCic2yKfJEpkIsb%2Bdwo8p7V%2FeXto8FgdjgNbucGt5j78QR08oFXOkV8XMTSBJZzASIfAGNLc2BS%2BAJJSKOYZfLKZ5mn1XIkEkeRMdQqq4lPIgOa%2BIuriuLUWEuqSdQA%2BXFuixsG4YnXc0kdWbmkQmxguaZBiZhnFWBm5bTC7jxSr9nFJXdB6gCEUV%2FNOzMtDmcv99zsQpN8RcFrV7UhM1csLMiSdeO4oTIPk0VSz3Mpgj4e3OpIXk1d3KQzBNTtrKJjXIUs%2Fda1rp4mRxTATjf0q4%2FrZqnMGWacsEaSp4EKpuEMKmxgxUK9OSiVay8hzrhu0Dc7KkF3e%2F6ANpJkdmJlyPTarXeBlT4ZsNOOqGlvR4I1cRy%2BZrxDLMz2mAy1%2BaUnGC2viwwz9cRV4l%2BV4CfupSDYObYz%2FCZ9rUKF6HaxEPta4GHWMsEZGAsPsIixZjIEp%2BumwnV6p7nVU2Yr3bZI5p6h8AUonSueBHkMHUea4axnu7np9Q4fDCbm7%2FJBjqkAfYlMX7lGX5UtibWAL9G3Xu%2FZ%2Fa9R5wbmrlSyDeJNT4gVznEteAO5Q7sziJUVempOqoLeVB6E4d62pUPrnXHhb8yUUsKIu1Ark78ow6kDe0EgDpFpMLS37NKRlX6cEu7Ugl68atYPZ9sCgnPLvY2ztyH7NBsBNrVz%2FWh3947FWd9bFdl8ylLzGugSo%2BCeC90mr5KAIU4tOfyd42K1UVNyDPzLK5x&X-Amz-Signature=749e755502200fd393e2f1407395c3b9e7a8f10f34070eca099f7f633b8b86f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

