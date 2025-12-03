---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U426FQA2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD4yNs0o28QdFuWOs%2F%2BUXdm2E7VDwfBn5MLhAKCr06T%2BQIgfKwzcPVC1FPD1XYmolqByqJTJ4C2jo2Q1Wb2umOYyXsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDL6mjk1UIpCd1YneuSrcA0k2J4qT4R%2FRjW%2BEG4bRkJ1c8nXORr2rJHUc%2BpLiOY03gCEyyfeiIIEAlDTO12l2YGWvL6Mj%2BU1dEsXR8vhU4WLrpbeUBWLnnQdCvF%2FwDCr0QRW8Zgo4gQaiXpez2f7YQtiTNuIY8Wnn3cqlPRSjS4kpXSVl8MV9AI57JozHJOW1jKhdKJKI%2BOWobGdYzT5%2FPjopNRTbWvrqhbCB5u0ny%2FmTRW2totsgyWECyCFK4sTlO%2BVMvcb2u%2BtKTJEG2qlk9U2WWyJohsPDJm7BgABxMMwDaex2KxwQjVI%2FYfbDpPaAh9kqxSeiy5lMB6%2BadkfbsYVaxhKPmE94UJkz36LhiPPyFsxkEZ4pCK7ab1e4nIvN3e5OdDcRl9lLMP82F1%2FpfSztHJYUkmzBzNuTBSd1GBXTtJYy7ndvDEqJeOKfiJq7POJ2dDnY3PQZPhwAZVatU0TgzN1qf6s6%2BpllphmUKUcnaO8RQKcUtI5NhlOTbJthFjuZmorwDSz%2BYuPahnGhItcR4ioa%2B1YuUeLQfaRYKkhaWxNhWyKXLNRLxjUP8kNMchQmexdoxDho4LEQVOjaZBij%2Bmcg5e93OXPRoh%2BZD4HXVqxB5ggQxIOay4uCyRBVzPBdOX%2BNObccr7hbMOiRwskGOqUBsgHVe3EX%2FGu9KfZqGCnKS76NzGbpwjUY2bl%2BDLUV2he8sJlXB1%2Bqz%2FTpWeFZ2i0%2FrvVs55decgaE%2BSbgCKoDPKjs3rR7DpHEWzFM1eBbGZsmu8re%2B63A26L9En3HS6Lu7vAA6W%2Bz7FX9pVu1bsXyCK4ezAlAi%2Fu7cTgT13OOGK4Axh05NahfeZfVcmGw1fAXvX5jA4cHoLimEnyakFMNTAwdFADi&X-Amz-Signature=3ece021c64a4eb4c830496dd1335254fa844a18d8d3c633803c0329383c3b3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U426FQA2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD4yNs0o28QdFuWOs%2F%2BUXdm2E7VDwfBn5MLhAKCr06T%2BQIgfKwzcPVC1FPD1XYmolqByqJTJ4C2jo2Q1Wb2umOYyXsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDL6mjk1UIpCd1YneuSrcA0k2J4qT4R%2FRjW%2BEG4bRkJ1c8nXORr2rJHUc%2BpLiOY03gCEyyfeiIIEAlDTO12l2YGWvL6Mj%2BU1dEsXR8vhU4WLrpbeUBWLnnQdCvF%2FwDCr0QRW8Zgo4gQaiXpez2f7YQtiTNuIY8Wnn3cqlPRSjS4kpXSVl8MV9AI57JozHJOW1jKhdKJKI%2BOWobGdYzT5%2FPjopNRTbWvrqhbCB5u0ny%2FmTRW2totsgyWECyCFK4sTlO%2BVMvcb2u%2BtKTJEG2qlk9U2WWyJohsPDJm7BgABxMMwDaex2KxwQjVI%2FYfbDpPaAh9kqxSeiy5lMB6%2BadkfbsYVaxhKPmE94UJkz36LhiPPyFsxkEZ4pCK7ab1e4nIvN3e5OdDcRl9lLMP82F1%2FpfSztHJYUkmzBzNuTBSd1GBXTtJYy7ndvDEqJeOKfiJq7POJ2dDnY3PQZPhwAZVatU0TgzN1qf6s6%2BpllphmUKUcnaO8RQKcUtI5NhlOTbJthFjuZmorwDSz%2BYuPahnGhItcR4ioa%2B1YuUeLQfaRYKkhaWxNhWyKXLNRLxjUP8kNMchQmexdoxDho4LEQVOjaZBij%2Bmcg5e93OXPRoh%2BZD4HXVqxB5ggQxIOay4uCyRBVzPBdOX%2BNObccr7hbMOiRwskGOqUBsgHVe3EX%2FGu9KfZqGCnKS76NzGbpwjUY2bl%2BDLUV2he8sJlXB1%2Bqz%2FTpWeFZ2i0%2FrvVs55decgaE%2BSbgCKoDPKjs3rR7DpHEWzFM1eBbGZsmu8re%2B63A26L9En3HS6Lu7vAA6W%2Bz7FX9pVu1bsXyCK4ezAlAi%2Fu7cTgT13OOGK4Axh05NahfeZfVcmGw1fAXvX5jA4cHoLimEnyakFMNTAwdFADi&X-Amz-Signature=803287b834388aed9ebecbcaf67c1c8a1ed1775ee793b10b33a187efbd683969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

