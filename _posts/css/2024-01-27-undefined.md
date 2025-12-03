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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKNPAOQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFiUJBlMLfSNSxAyUEuyqfwjVL9%2FHIyltfW9uHcGdNTUAiAjI9MJGJQWeY9EY2mMY%2FTG4AnyONTvmPQHaGshlTQ4HCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMTHqwBFwUBMWIZaw2KtwDnme%2FDcG01gmvmxe%2Fsge4ddsGLZaJlzBqhFnJaq1qwfrz8XiCX1MNiPqRzybEKPQbADsNUq2zvI3WEKQ%2BZsBx95soOX3nF6fqLxCY5aoltNKvJy1%2BZcXuV46py4VBh%2FMnCknzT9%2FcE7qfwf3DXHBlBNIUSIUaImXapu3UaQ%2FLPXiCgE1hrUnVVaxx1U7ESGego2J%2BJ3ymYKPrBPR8HtKFIdQPoTuzZ%2B17GZA%2B8vI6JrRuI%2FWUaceJtvSnNi4LHLf19I0QS24fTdBtzn%2BaYyvFN2VDXj9eIcfEQ2x9h5kKtYTvtciH3YROF%2FGMRbytPtgdqTpH%2B9wMVmPKG9zfVo0Cpsp22CUbRpOKR4GOGWCx%2Btk3hnti0%2FTBh8OE91BaRca40WAam37YvWe8of7N0wWVSlmflediylVMtECpodpQBTeGCYEPp%2BGSk4C9bsWhpHIs3gTqO7mFEZ6YCjddi4PoXFbvNzIJSalWVrDigBpdUhKmGd6pHz%2ByehhIZRXnbQTTgeJU75sjIEFG7zTTfUKRPWTCztLaspp1X3PrHjfKzuX8WzX71jY2CYQ8%2F1yFVsv22PxymyJTDunfCd2dMButJJsrxiQiZh%2BWZOEiqcyMJG51%2B31AoXKGxHaUkZEwwtvByQY6pgGj%2BlxnddMwUL%2FlAixEXJLlvVT4kw66U8hpqKHy4hv1qJrOst5ek2tzMFCcFdY3385vLOIcmOiShQSCVoY8txXWa41TU8AIXbA8nSh0vBb%2Bl4yHjF5pjr8qcnMIFyEbWinw1tm%2BN9aNEH63IjTNfjvCtQ2OtJOrx5Ze8dedOaGb%2F1UMB%2B9feUGvXaL1YYFioyUoPDd7JwD5LZ%2Bq9Bw4HcDwk3dRGXe3&X-Amz-Signature=9d42087bd7f02ea510d292a9a89f45dca483d44bb89b8f0810bb0c17e2c1b31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKNPAOQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFiUJBlMLfSNSxAyUEuyqfwjVL9%2FHIyltfW9uHcGdNTUAiAjI9MJGJQWeY9EY2mMY%2FTG4AnyONTvmPQHaGshlTQ4HCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMTHqwBFwUBMWIZaw2KtwDnme%2FDcG01gmvmxe%2Fsge4ddsGLZaJlzBqhFnJaq1qwfrz8XiCX1MNiPqRzybEKPQbADsNUq2zvI3WEKQ%2BZsBx95soOX3nF6fqLxCY5aoltNKvJy1%2BZcXuV46py4VBh%2FMnCknzT9%2FcE7qfwf3DXHBlBNIUSIUaImXapu3UaQ%2FLPXiCgE1hrUnVVaxx1U7ESGego2J%2BJ3ymYKPrBPR8HtKFIdQPoTuzZ%2B17GZA%2B8vI6JrRuI%2FWUaceJtvSnNi4LHLf19I0QS24fTdBtzn%2BaYyvFN2VDXj9eIcfEQ2x9h5kKtYTvtciH3YROF%2FGMRbytPtgdqTpH%2B9wMVmPKG9zfVo0Cpsp22CUbRpOKR4GOGWCx%2Btk3hnti0%2FTBh8OE91BaRca40WAam37YvWe8of7N0wWVSlmflediylVMtECpodpQBTeGCYEPp%2BGSk4C9bsWhpHIs3gTqO7mFEZ6YCjddi4PoXFbvNzIJSalWVrDigBpdUhKmGd6pHz%2ByehhIZRXnbQTTgeJU75sjIEFG7zTTfUKRPWTCztLaspp1X3PrHjfKzuX8WzX71jY2CYQ8%2F1yFVsv22PxymyJTDunfCd2dMButJJsrxiQiZh%2BWZOEiqcyMJG51%2B31AoXKGxHaUkZEwwtvByQY6pgGj%2BlxnddMwUL%2FlAixEXJLlvVT4kw66U8hpqKHy4hv1qJrOst5ek2tzMFCcFdY3385vLOIcmOiShQSCVoY8txXWa41TU8AIXbA8nSh0vBb%2Bl4yHjF5pjr8qcnMIFyEbWinw1tm%2BN9aNEH63IjTNfjvCtQ2OtJOrx5Ze8dedOaGb%2F1UMB%2B9feUGvXaL1YYFioyUoPDd7JwD5LZ%2Bq9Bw4HcDwk3dRGXe3&X-Amz-Signature=a180b42878667b434c0dfe944baf6471da078cca2f709bc7c84fd18692233f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

