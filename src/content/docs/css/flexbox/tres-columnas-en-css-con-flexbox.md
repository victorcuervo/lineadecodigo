---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4JCPYO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F6iWOCKqym3iYgcU95R7qsCdFu2%2BmvnRmaqmo8yithAiACc5%2FxM7WtNd8901J0Myxylu8ZkHEC7ojOK%2FH33PP6bCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMihsgMNPStLjuYWeFKtwDfV5yYB%2BCle8e7qaRqAYPV%2BSPvJawE3l%2F%2BqmiWULiEucNpEHoOgQHEGakvN2BDFtw%2FSfWVBC%2FNES2SIRvSMiv9bHtQlBpAPbjgfckt1%2FRNoYvB7Mzu%2FZxSvAOtMbcxAcXUSYD%2FYyxHFoI0tn3sZdVj0gySOItNdw6AblmWyAKw92r5a9qrV1LRMgatEZ%2BnyTiuehddXko0AQB0QufNaMI%2FIo8tKDWdq60DH7f4PlAp7xksGGPUki4CDu%2BT8y5QjMmjZOUcmLong1C0ChUSEe9xhRma5Ecnoa8VCRIA6miIixtqRVaMz0hq4p8c1dkszGDdqmYSPl%2FcFakVawTUTtIv75e55WpErIQWOWqk221Rh%2B%2Biabbr1NDP9jZiWnibECQAM6DGQVr5cxmRTn1IHTYi7S%2FOS05XJBPsze9wNC0wc7L7xlYYy5ssLF7qxJy5kzJsI5OLRTy9Rrtd0u75tfOFfqSlFCGMjdo3Eg8yPJgnnwxYNdXIEgdNGQ8y8wu30OeQH6IxRKTeQ%2FAUj7hdOqaX%2FZNOKZZZ6a1pBrfX1ARtBI8ffaMNKCsU0nGuXS9sErjxh9%2BzTs9o5%2FNP7hnWtkmXnUta7RefqCSQAL8Qy5EaaDyFNoTiHvJQa3lbHswuu7ZyQY6pgEfv7eg8GcCDkP8jDBOx7wdTda8hgj0yiNihgu16j5OQLzIfoSAOVpesS0%2B59pCmQ3GSbUF5Hezk3fkxfT97pMJ%2FMsV7tCqSLb75TofRxgzZRGcmF3xLqjJbVgJC%2BFkPHA%2Bo3i3pt57ZxFOVNAdHAFvpUWOMpmEL9gBssbCM0noHVeu%2Fe4i4cvqKbIltZd1PavU4Z%2FNZKY45vNW4oDs3eS7R5UCyRPq&X-Amz-Signature=68d58c8e936bb5b79d0a0f9d36af32fdf47e3da82e5dde1d2db68bea4b33b8ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4JCPYO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F6iWOCKqym3iYgcU95R7qsCdFu2%2BmvnRmaqmo8yithAiACc5%2FxM7WtNd8901J0Myxylu8ZkHEC7ojOK%2FH33PP6bCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMihsgMNPStLjuYWeFKtwDfV5yYB%2BCle8e7qaRqAYPV%2BSPvJawE3l%2F%2BqmiWULiEucNpEHoOgQHEGakvN2BDFtw%2FSfWVBC%2FNES2SIRvSMiv9bHtQlBpAPbjgfckt1%2FRNoYvB7Mzu%2FZxSvAOtMbcxAcXUSYD%2FYyxHFoI0tn3sZdVj0gySOItNdw6AblmWyAKw92r5a9qrV1LRMgatEZ%2BnyTiuehddXko0AQB0QufNaMI%2FIo8tKDWdq60DH7f4PlAp7xksGGPUki4CDu%2BT8y5QjMmjZOUcmLong1C0ChUSEe9xhRma5Ecnoa8VCRIA6miIixtqRVaMz0hq4p8c1dkszGDdqmYSPl%2FcFakVawTUTtIv75e55WpErIQWOWqk221Rh%2B%2Biabbr1NDP9jZiWnibECQAM6DGQVr5cxmRTn1IHTYi7S%2FOS05XJBPsze9wNC0wc7L7xlYYy5ssLF7qxJy5kzJsI5OLRTy9Rrtd0u75tfOFfqSlFCGMjdo3Eg8yPJgnnwxYNdXIEgdNGQ8y8wu30OeQH6IxRKTeQ%2FAUj7hdOqaX%2FZNOKZZZ6a1pBrfX1ARtBI8ffaMNKCsU0nGuXS9sErjxh9%2BzTs9o5%2FNP7hnWtkmXnUta7RefqCSQAL8Qy5EaaDyFNoTiHvJQa3lbHswuu7ZyQY6pgEfv7eg8GcCDkP8jDBOx7wdTda8hgj0yiNihgu16j5OQLzIfoSAOVpesS0%2B59pCmQ3GSbUF5Hezk3fkxfT97pMJ%2FMsV7tCqSLb75TofRxgzZRGcmF3xLqjJbVgJC%2BFkPHA%2Bo3i3pt57ZxFOVNAdHAFvpUWOMpmEL9gBssbCM0noHVeu%2Fe4i4cvqKbIltZd1PavU4Z%2FNZKY45vNW4oDs3eS7R5UCyRPq&X-Amz-Signature=e6c01110cc6085788acb1e703a0991cdb95f9625025ad9e526ed98f80cceeb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

