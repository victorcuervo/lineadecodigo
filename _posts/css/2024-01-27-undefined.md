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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6T5LND%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDSJGsXVdcr3jAS8voQCs%2FY9hYGCLH7yyxzR7t8zbTQcgIgESO0ecpwC2ju3se9Auj6W%2BTXn35pgxnBJp5eihY9xgAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJxPqXYpBaAaSE6KjyrcA1XB9lLJS3brW58GPFowGAUYxzO6oJxYRTRNaCBbSvUbtjigxj1WnfGAO6P0z%2B4z6xpinjAqK1jAxTbQHSnKnLXY7pGAXHVOePV9iWmYTEKwudpPM8veX3I%2FCKUdXN%2FS5E664ykqABRcxDhgwnVCLNFNhRby7QrPEnHzqgelUYrqz0o4vghJIGj%2B3Vf%2Bo%2FmVsFgDhKGNhf8WvQGWAGXWichq7l0IGneQNr962MnjCqVb1F2A%2F5QTfONdb%2BDU8KxZd%2BRB2DcPLDDmHwAwkTNjiVlFm0psaT9EQEKNbemCBIW5sn%2Fhb1ag1XBdC1HSFC4KYTQXKzqBQs9ZHOCyARZVkV%2FQA3UeZ5vSg8qlglyLnvsd0wYc4%2F%2BT820%2FIVJlCD9k8UR7FvuOO0sdnZoc%2F4woErWrhKF40%2Bmt2yJ3jhnEROdxJ5T%2FLz9W64jImUoX3oeBWdYT1jO9wS%2BNIWuLNstvsE2Lwtt1NRoR2EdK%2BxEzkHE8HsHlbGmDsNq90UUM6GWnGcGkjyBo0BsYjda7K4ky%2FB98M4W%2BN%2B%2Ft6BWfH%2BuovXJY7vUiJUn6FDs1ciuT%2FZF%2FT%2BIiljVj%2Bbw0%2BgDxnPf220b5FHff86zBqAul0hfXOW%2BKw8RFxXGtqxj4%2BDsqMKvMwMkGOqUBpNUSylhQvspAMWQJOmzRx2F6XGRF6LbDFyfuqVfBBtETjPlKtszvoV5Iga34fzQUobw9IqvUjuCbRHi4fw8njVmBtPeDL3ciGyWXwp34GiY22cWLscZUzpvPLvtGAY%2BYL4bElpUHGAmZsjztlZmJsRAYD70gTPA0%2FT%2FfLCFbWceW21TVbtllKHLL4DRLhpRrVlYT8P0mprO7nMGim1Ip%2FTmVdHpl&X-Amz-Signature=a29db1be7f52bbac5757ab140a2d21bec56f45241aae67b21bda72fa42fed301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6T5LND%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDSJGsXVdcr3jAS8voQCs%2FY9hYGCLH7yyxzR7t8zbTQcgIgESO0ecpwC2ju3se9Auj6W%2BTXn35pgxnBJp5eihY9xgAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJxPqXYpBaAaSE6KjyrcA1XB9lLJS3brW58GPFowGAUYxzO6oJxYRTRNaCBbSvUbtjigxj1WnfGAO6P0z%2B4z6xpinjAqK1jAxTbQHSnKnLXY7pGAXHVOePV9iWmYTEKwudpPM8veX3I%2FCKUdXN%2FS5E664ykqABRcxDhgwnVCLNFNhRby7QrPEnHzqgelUYrqz0o4vghJIGj%2B3Vf%2Bo%2FmVsFgDhKGNhf8WvQGWAGXWichq7l0IGneQNr962MnjCqVb1F2A%2F5QTfONdb%2BDU8KxZd%2BRB2DcPLDDmHwAwkTNjiVlFm0psaT9EQEKNbemCBIW5sn%2Fhb1ag1XBdC1HSFC4KYTQXKzqBQs9ZHOCyARZVkV%2FQA3UeZ5vSg8qlglyLnvsd0wYc4%2F%2BT820%2FIVJlCD9k8UR7FvuOO0sdnZoc%2F4woErWrhKF40%2Bmt2yJ3jhnEROdxJ5T%2FLz9W64jImUoX3oeBWdYT1jO9wS%2BNIWuLNstvsE2Lwtt1NRoR2EdK%2BxEzkHE8HsHlbGmDsNq90UUM6GWnGcGkjyBo0BsYjda7K4ky%2FB98M4W%2BN%2B%2Ft6BWfH%2BuovXJY7vUiJUn6FDs1ciuT%2FZF%2FT%2BIiljVj%2Bbw0%2BgDxnPf220b5FHff86zBqAul0hfXOW%2BKw8RFxXGtqxj4%2BDsqMKvMwMkGOqUBpNUSylhQvspAMWQJOmzRx2F6XGRF6LbDFyfuqVfBBtETjPlKtszvoV5Iga34fzQUobw9IqvUjuCbRHi4fw8njVmBtPeDL3ciGyWXwp34GiY22cWLscZUzpvPLvtGAY%2BYL4bElpUHGAmZsjztlZmJsRAYD70gTPA0%2FT%2FfLCFbWceW21TVbtllKHLL4DRLhpRrVlYT8P0mprO7nMGim1Ip%2FTmVdHpl&X-Amz-Signature=082c5b9a1246b7e989495b6a383b455f4563a0ba91c14d60ecf4aeeaf91084b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

