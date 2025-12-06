---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYGSZ437%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgcdTCLCg5IQT1qJ7FXnY1eDbqkn51AoEIX%2FH7J8qqAAiA%2FTKSgLhB1iRCOXyrwLDGiTV8aU1qaiqtAXoUkBC00fir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMjhKSumhsgzxed7uGKtwDGUYChZXXyQhnl5GuwhDB3tqmFDjbqN%2FT3WMxXRJqU137vDm3aHFKadozUwfCCK9ROnXpLtD9fKwEYcP6qbQzN9zavjE3qODEgvutuvYUB2usOyuPppHKFW71lW7%2B08D2ip%2FoB%2BtQf9%2FQeDVK4B3QLzfXtCCQFa31wHFTVIm58clB9prOtEEmKoEPD3uH4mhbDN%2BQujtR%2BHGZlkV55HGoWQqs3ih6end%2BBWxbkPcUf4UGB5sdB%2F4Tu6aqsItpDNztvlgZIfhIvE8INoy73N%2FOmu5DGbtWKSCaCAzzyoWA4b2ttia8sy3jF%2BgPzhUCh3Iw35say8pCOMXXYfx9zzauLIv%2F3RRBa7mSF1gKR5HRSZ%2B4oV86jA4Or5MThC0Q76cCY0rsWuw95oVL05%2BbrF7r3PmHjn%2BOgTLWDdiYZyok1PSdSsm9LSQWZrAcQRx4sultyRrUEJjMDu%2BZHrqsuoVtYGX1f%2FjrIAW%2F7ATsb2k%2BMmnjrlyiJGAOnd2z0GsyJ5VbVy0YD8O7ZJe7gobmbU1V%2FlhvkUVBCzIudZkNM2%2BSdO7iSYrUeI4U7EdHrWtIOZ7%2FOmkQN8yw39ou4FLcLWSHvAlhmS56fAwL8seqL7HxWNoX1T7KgG0CIHatCx4wwKfOyQY6pgFnOzJYPeWUMqbP1Ytz7%2BWLEwTbKaNDf3RnMXaiPTVIDnUInXSbTTY%2FjJNbAwxv0jeNwIqSXd5uVhno3pInas1oSmA4OoaQ9pIltWhkNMkG%2BYdqibydKkS3qbxHkWb2GGKCo30X%2BYitT7y2FPDZTNZRpW0dBm9l9Iq6uD6SkLRPUMOr3wHjz9busw27othxSIjke6V1%2BDv5QZGL%2FilZDIRBwzmxmJYB&X-Amz-Signature=83bc5e73dbe07a5d7fd466e9c8cc70e702c26a584b0b12c803a6f7f33e287d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYGSZ437%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgcdTCLCg5IQT1qJ7FXnY1eDbqkn51AoEIX%2FH7J8qqAAiA%2FTKSgLhB1iRCOXyrwLDGiTV8aU1qaiqtAXoUkBC00fir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMjhKSumhsgzxed7uGKtwDGUYChZXXyQhnl5GuwhDB3tqmFDjbqN%2FT3WMxXRJqU137vDm3aHFKadozUwfCCK9ROnXpLtD9fKwEYcP6qbQzN9zavjE3qODEgvutuvYUB2usOyuPppHKFW71lW7%2B08D2ip%2FoB%2BtQf9%2FQeDVK4B3QLzfXtCCQFa31wHFTVIm58clB9prOtEEmKoEPD3uH4mhbDN%2BQujtR%2BHGZlkV55HGoWQqs3ih6end%2BBWxbkPcUf4UGB5sdB%2F4Tu6aqsItpDNztvlgZIfhIvE8INoy73N%2FOmu5DGbtWKSCaCAzzyoWA4b2ttia8sy3jF%2BgPzhUCh3Iw35say8pCOMXXYfx9zzauLIv%2F3RRBa7mSF1gKR5HRSZ%2B4oV86jA4Or5MThC0Q76cCY0rsWuw95oVL05%2BbrF7r3PmHjn%2BOgTLWDdiYZyok1PSdSsm9LSQWZrAcQRx4sultyRrUEJjMDu%2BZHrqsuoVtYGX1f%2FjrIAW%2F7ATsb2k%2BMmnjrlyiJGAOnd2z0GsyJ5VbVy0YD8O7ZJe7gobmbU1V%2FlhvkUVBCzIudZkNM2%2BSdO7iSYrUeI4U7EdHrWtIOZ7%2FOmkQN8yw39ou4FLcLWSHvAlhmS56fAwL8seqL7HxWNoX1T7KgG0CIHatCx4wwKfOyQY6pgFnOzJYPeWUMqbP1Ytz7%2BWLEwTbKaNDf3RnMXaiPTVIDnUInXSbTTY%2FjJNbAwxv0jeNwIqSXd5uVhno3pInas1oSmA4OoaQ9pIltWhkNMkG%2BYdqibydKkS3qbxHkWb2GGKCo30X%2BYitT7y2FPDZTNZRpW0dBm9l9Iq6uD6SkLRPUMOr3wHjz9busw27othxSIjke6V1%2BDv5QZGL%2FilZDIRBwzmxmJYB&X-Amz-Signature=916803c23e6a239dd56c480de94b6af00229a2cfffd19256901b66578bdee9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

