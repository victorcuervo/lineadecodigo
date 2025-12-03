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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQJV3GP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEzI3L0AZcur5dHwnXApb%2BmeY8LFYq8WEsptvmIziFxkAiB%2FbhibjOpiZypm322HW14AGjZEdh9VTBE%2BWo%2F8fxR3Yyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMb3JxRjGIDuidp7HrKtwDSWhCrxi%2FV2uQsjSJefugdfOIXCax4UP9oEyN9g3dZs8VT74yeg6IageChAQ0bYUX5EFWT5KhiJ2s2dRZ6JgA4RzqaKJAs6Wu7IJ%2FXjSUt3rlGidUeH6pTdLbH5%2BwCNAiY9gitEoClk%2FJ7hct6eB8fvWB8ZihjGHS19h1ds6GCSg1f6g7xa72n5Fon3AvckMN38F4CHO5q2evFJuLC%2FhtCK9OjPW5YqjLaXvyxp6yiiFyravk5E1FRGTdNVHTqDfjk%2FZj5J%2BEDaGEos5m%2Bg8FTm1r8HwCa1IZVLjgsahg%2FgSbyjNCXKvmPmHXqIr8R%2Be2t%2BWw%2FKk4icZCPYYBQrDKb7CHphIcSFvx0KiAGv%2FxMzXf5Asnuzz%2Fgc3Q7FWJCma8pRSw%2BAfTul88jMIhR9U%2FM%2FTHgwpCYo6BTAe3i3nEmeoWS216fdK7ZqOUJhwhNMNhQOy%2BiX9uazkFqjx32DZvdRdZDMDFDamivzmlDahpEltZ6Hh3V2EcXFIjjEd53EgR6bhrPXc%2BoqB8MD6G9T%2BT3HJAdPqi8sIfI%2B6A9%2Bb5dwrwuy8BzF8eSmak9YzTxTzeuzNEXWD1kpk4zEW0ZHnzpp5Nz1xVLVDMOKdFugWhhTRIiXRLSQG9ixB6qyQw55q%2FyQY6pgFl3JPq0I83NWCkQ%2F0FBKvmxPBcGfeSySiQLVa7h%2Byw9Y%2F1wVUtRO1BdBftSal%2FJcD%2FqpUlluE9GNtbDhqgo3LVZaMoqr3ThArFG8OUv633gbx%2Bm0KySAV25FF14RJsvWwAURTCLDsrHMW0S7tVPQ%2Bm53t0q3JKJTt1X39Sphf%2FcGnmBbuRbt7c5BfqG6c0mhsC5SlhrkQZ3IS6yQkG2TZCw7yKK5JX&X-Amz-Signature=6bc5b03c549416d8ac42a699748f51c9b3e4a4142d52cc7cb8e2e9f7f36b49e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQJV3GP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEzI3L0AZcur5dHwnXApb%2BmeY8LFYq8WEsptvmIziFxkAiB%2FbhibjOpiZypm322HW14AGjZEdh9VTBE%2BWo%2F8fxR3Yyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMb3JxRjGIDuidp7HrKtwDSWhCrxi%2FV2uQsjSJefugdfOIXCax4UP9oEyN9g3dZs8VT74yeg6IageChAQ0bYUX5EFWT5KhiJ2s2dRZ6JgA4RzqaKJAs6Wu7IJ%2FXjSUt3rlGidUeH6pTdLbH5%2BwCNAiY9gitEoClk%2FJ7hct6eB8fvWB8ZihjGHS19h1ds6GCSg1f6g7xa72n5Fon3AvckMN38F4CHO5q2evFJuLC%2FhtCK9OjPW5YqjLaXvyxp6yiiFyravk5E1FRGTdNVHTqDfjk%2FZj5J%2BEDaGEos5m%2Bg8FTm1r8HwCa1IZVLjgsahg%2FgSbyjNCXKvmPmHXqIr8R%2Be2t%2BWw%2FKk4icZCPYYBQrDKb7CHphIcSFvx0KiAGv%2FxMzXf5Asnuzz%2Fgc3Q7FWJCma8pRSw%2BAfTul88jMIhR9U%2FM%2FTHgwpCYo6BTAe3i3nEmeoWS216fdK7ZqOUJhwhNMNhQOy%2BiX9uazkFqjx32DZvdRdZDMDFDamivzmlDahpEltZ6Hh3V2EcXFIjjEd53EgR6bhrPXc%2BoqB8MD6G9T%2BT3HJAdPqi8sIfI%2B6A9%2Bb5dwrwuy8BzF8eSmak9YzTxTzeuzNEXWD1kpk4zEW0ZHnzpp5Nz1xVLVDMOKdFugWhhTRIiXRLSQG9ixB6qyQw55q%2FyQY6pgFl3JPq0I83NWCkQ%2F0FBKvmxPBcGfeSySiQLVa7h%2Byw9Y%2F1wVUtRO1BdBftSal%2FJcD%2FqpUlluE9GNtbDhqgo3LVZaMoqr3ThArFG8OUv633gbx%2Bm0KySAV25FF14RJsvWwAURTCLDsrHMW0S7tVPQ%2Bm53t0q3JKJTt1X39Sphf%2FcGnmBbuRbt7c5BfqG6c0mhsC5SlhrkQZ3IS6yQkG2TZCw7yKK5JX&X-Amz-Signature=42524ed975cf365fb3395bf3861938c68ef32c429d02aeda61f55ad5d1f1f420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

