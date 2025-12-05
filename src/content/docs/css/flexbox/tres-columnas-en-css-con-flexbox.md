---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYE6PMQJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY9wWSUOtRhqPtURLVAAAsoDugthGNohaNJI2WsUAJsAiEAn9jB%2F%2FUmXLsdKX65EeltXkW3aaUG%2BJ5Rg65FQ0rMyt8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDK7suoGCF8%2BbwKX0iyrcA6vycmb0VnDcrN5VrFv3K0ak%2F60rTLBEEpq47Dkt1W9YDT6VPyIcjJI255mqeE994K98G9wrJ3%2Bh4T%2Fk5JNrH3aqjVRkDWoKR9J1pg9iTvXlgfDGUwoGIYCN1VI69QzFMLYlIClSTrKUIbnWwkPyIRGOmeeoGY34lNdlE3TctiuoiuKTdMGsLLbWfUm7gBIS9HoinvboG9b8%2FmBz8pH8PjvaD0y%2ByuKRqMuG2%2FAGu8sLuRIBUeQJGc802csIQJoZxkl41fNGYjGDhK1ATtFPaUv5vwCNTiiSphfahmhmCv%2Fkaesq2kSpc4zl3%2BuRRe0uB6BWULOc%2FnzJC1TRds0aRrJoz36Seudq2GW%2F8%2FTVlPzMghm%2Bc1l1zRatc2Y3F9pRK4OXB3Zl%2F8KpJoJEESA5%2BMcLM%2FizEFw3SNstL6s3AlvwjxiihCKj9fEUGJLPxwkWWJRrV0JwfMf2v6iCUWzC7EmCydXcDIavSjnkF%2FohCfKQrytCWMyg3psYV7AlIRTet5PaEczaY5aMqJfHVUuLga0nuptkpW4cjNdacoCq7xpg9wASfkQpLQ1mhuDw2yUkqMk1cLMTincJ7ewyI7Zgj89GkCCzriFce0mAQlpQEV2MDoZGOl%2Bmq2GcCh8ZMK7vy8kGOqUB7Ha3xw7mgBTomNyNVY75rTubVm80FnwxBdUpfu4M6cTqR%2FHp%2BE3%2FkLGldgx0KLc2mM4mwpFTbfaL1DweIN6FLS8uo%2FvClErL5f6Ix00yXdDpOXEq8SfbgJfifT8Jmt4YOZRYoeUrSVdA3jeHtzbMNa1l2jtpx0mlYyoTPE%2Bg4Hw7d%2FaYorHF4dyTTWDaVFNaS2hgCLqlFjtGFGC9%2Bit1QGcIbhx%2B&X-Amz-Signature=79a2b30945a0a14658156011a54cafffed183248f94a96342be6a9747a18bcd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYE6PMQJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY9wWSUOtRhqPtURLVAAAsoDugthGNohaNJI2WsUAJsAiEAn9jB%2F%2FUmXLsdKX65EeltXkW3aaUG%2BJ5Rg65FQ0rMyt8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDK7suoGCF8%2BbwKX0iyrcA6vycmb0VnDcrN5VrFv3K0ak%2F60rTLBEEpq47Dkt1W9YDT6VPyIcjJI255mqeE994K98G9wrJ3%2Bh4T%2Fk5JNrH3aqjVRkDWoKR9J1pg9iTvXlgfDGUwoGIYCN1VI69QzFMLYlIClSTrKUIbnWwkPyIRGOmeeoGY34lNdlE3TctiuoiuKTdMGsLLbWfUm7gBIS9HoinvboG9b8%2FmBz8pH8PjvaD0y%2ByuKRqMuG2%2FAGu8sLuRIBUeQJGc802csIQJoZxkl41fNGYjGDhK1ATtFPaUv5vwCNTiiSphfahmhmCv%2Fkaesq2kSpc4zl3%2BuRRe0uB6BWULOc%2FnzJC1TRds0aRrJoz36Seudq2GW%2F8%2FTVlPzMghm%2Bc1l1zRatc2Y3F9pRK4OXB3Zl%2F8KpJoJEESA5%2BMcLM%2FizEFw3SNstL6s3AlvwjxiihCKj9fEUGJLPxwkWWJRrV0JwfMf2v6iCUWzC7EmCydXcDIavSjnkF%2FohCfKQrytCWMyg3psYV7AlIRTet5PaEczaY5aMqJfHVUuLga0nuptkpW4cjNdacoCq7xpg9wASfkQpLQ1mhuDw2yUkqMk1cLMTincJ7ewyI7Zgj89GkCCzriFce0mAQlpQEV2MDoZGOl%2Bmq2GcCh8ZMK7vy8kGOqUB7Ha3xw7mgBTomNyNVY75rTubVm80FnwxBdUpfu4M6cTqR%2FHp%2BE3%2FkLGldgx0KLc2mM4mwpFTbfaL1DweIN6FLS8uo%2FvClErL5f6Ix00yXdDpOXEq8SfbgJfifT8Jmt4YOZRYoeUrSVdA3jeHtzbMNa1l2jtpx0mlYyoTPE%2Bg4Hw7d%2FaYorHF4dyTTWDaVFNaS2hgCLqlFjtGFGC9%2Bit1QGcIbhx%2B&X-Amz-Signature=a8926f2c0a7793e870f8b2708374e472949de04d158c56c52a7a69f6067f757f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

