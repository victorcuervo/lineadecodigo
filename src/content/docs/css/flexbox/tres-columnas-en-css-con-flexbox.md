---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXK5AEAI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwYcu%2F2iVceANXlVHvELH%2F1Hc00DyKKJXKyop0ZqyidAiAc8RhRE0fZrRLz9hl%2FNasc0p8StgEWIr3AaM3BkuWTbCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmD2LdzwhJY5rZXb1KtwD%2FM2ocLYXOq6DSLKKdKfPiIKDSSyroOXmRAT08xOOcB2cYUpePJ7KpGjWkuBcVr4niB4u80wD0g%2FHl3ip2Sfoz%2FuGfncFgQfv5IIv7V5oD2eQD3AEw7dSGx6X3WqHwwKivwXtXyy2SX8hnwQ1Mhx9ah5c0WHNpQUvzoLY04Nb%2FCmhAc2dBe0NELODEzLEBjzdFHnGcSqspWcFLW1TFcQUm0dbNAYB%2FLjHGWmy4fDGCqDPh9yJBKMS9vJCb4pH9CkpxYT5x2JRYmkHGYLgrZohXDy9dBoGLB9vayobc077haHAC5MEXyEmqayjiClVZ3I3NPo1cIINzCYymERpyiVs5X%2BGJd%2FcJXmspYD8x%2B6xpdVkgl8roWyumnau0SIsoDJqCWI1EPoyQxK1lpUA7IZBlWqe%2FAKRHWFkVoBVSU3e9zw2cvu9%2BN%2FNrvZ2uHYnxkfv3CxnrtxBcRhrHdj%2BmQjIEzwSL%2Bn0%2B7DrBDDiEbTSjSPL3E4FFbCshaQo589yuOdCMm74U8Jo%2BWohXqB9JSLnVJvhUxscCzg1mLi%2F2abcTNQXtbbx8%2B05pf2wt58rFaJyNXubeYeymMaGSSKMYBLJ1iZh1WvA0oXiR33UmwNUJhCVhxLNrV9ngvUlsSIwrv7SyQY6pgFXz0mwH58aVSaU5ESpABpv6blH0wPGtgermGTS8ePD6WODNPe%2F5f9iNOGY82f6ExCRYvMvm%2Bv1QP028%2FHIN%2B0xwLNxFL8jj6yyDHZhH%2Fe%2BsDliXpVZmgh8%2F6qPEf3hYQrxrrdHMz4arBkVFv%2FzOvd9rusMWbhh%2FXGd0yfwp%2FH%2B8m1%2FTTwSERIW1tUU%2FcGwAF1%2Br4JL1ZHE7c7cTZCcWV6Jf8c9fEEq&X-Amz-Signature=fd41da4852382e710a19711ad8da8f182538147d0cd6a02ef5986f6b9a44557c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXK5AEAI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwYcu%2F2iVceANXlVHvELH%2F1Hc00DyKKJXKyop0ZqyidAiAc8RhRE0fZrRLz9hl%2FNasc0p8StgEWIr3AaM3BkuWTbCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmD2LdzwhJY5rZXb1KtwD%2FM2ocLYXOq6DSLKKdKfPiIKDSSyroOXmRAT08xOOcB2cYUpePJ7KpGjWkuBcVr4niB4u80wD0g%2FHl3ip2Sfoz%2FuGfncFgQfv5IIv7V5oD2eQD3AEw7dSGx6X3WqHwwKivwXtXyy2SX8hnwQ1Mhx9ah5c0WHNpQUvzoLY04Nb%2FCmhAc2dBe0NELODEzLEBjzdFHnGcSqspWcFLW1TFcQUm0dbNAYB%2FLjHGWmy4fDGCqDPh9yJBKMS9vJCb4pH9CkpxYT5x2JRYmkHGYLgrZohXDy9dBoGLB9vayobc077haHAC5MEXyEmqayjiClVZ3I3NPo1cIINzCYymERpyiVs5X%2BGJd%2FcJXmspYD8x%2B6xpdVkgl8roWyumnau0SIsoDJqCWI1EPoyQxK1lpUA7IZBlWqe%2FAKRHWFkVoBVSU3e9zw2cvu9%2BN%2FNrvZ2uHYnxkfv3CxnrtxBcRhrHdj%2BmQjIEzwSL%2Bn0%2B7DrBDDiEbTSjSPL3E4FFbCshaQo589yuOdCMm74U8Jo%2BWohXqB9JSLnVJvhUxscCzg1mLi%2F2abcTNQXtbbx8%2B05pf2wt58rFaJyNXubeYeymMaGSSKMYBLJ1iZh1WvA0oXiR33UmwNUJhCVhxLNrV9ngvUlsSIwrv7SyQY6pgFXz0mwH58aVSaU5ESpABpv6blH0wPGtgermGTS8ePD6WODNPe%2F5f9iNOGY82f6ExCRYvMvm%2Bv1QP028%2FHIN%2B0xwLNxFL8jj6yyDHZhH%2Fe%2BsDliXpVZmgh8%2F6qPEf3hYQrxrrdHMz4arBkVFv%2FzOvd9rusMWbhh%2FXGd0yfwp%2FH%2B8m1%2FTTwSERIW1tUU%2FcGwAF1%2Br4JL1ZHE7c7cTZCcWV6Jf8c9fEEq&X-Amz-Signature=f44d1d038736bc38e89f7a7052e35fac8bae88cd7da24dc26aa1453f6e582e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

