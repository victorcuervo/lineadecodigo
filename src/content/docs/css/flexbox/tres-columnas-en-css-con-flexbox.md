---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO57PAC6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWIsYl%2FLC1zhbA9Wv2tBuW2SN3kzzfxXeMiFnBtGW3AIgaVjseCOwUWln3%2FHbl5GMYU%2B54u1IkNjQrWu4k1tuuSUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBJNF6GEgxghgpGxoircA3IS2GxJVu54zNA9491XuX25Mv45CvcRWEYxHe27YYEwwcwnraYdefN4ktNMElQlS6MLE9Igwil9x5blEZkXrKMTaUoDowsnpOZFt0drA7z7aO8miZb%2Fr7vYb30fItN3EG0VR8ljdW%2ByF%2BrdrUoq2w5gzu85Ahc4exWqcab80Uy%2FXsmd38rkpC%2FKRQKyWK%2Bg8Kq7RelwVaUn2y9LvtP1umsQu5rMEpszk05SJjyqhvLVeZeDMRLiuNr1Sc2bE0%2FEcSBr%2BG0MVaCkwCb6rGPid7PFjRR%2B9OiPLo1OD2wB%2FOb4xCjlalM1JZ2%2BbpTZDFVg3xjROuBJgXJSb5r0flHCeOMBfMsu5IxpsSQpDLosxARUBn8TQz3cyALPsqyN1uY%2FogeScd%2Fwnm6Pt%2BYFqf3EUoCqY%2BBrOeCRHZ3ScRegP%2B8f6CemSpkr6cTd%2FApoGOTyhmWt3N8TSyXhO91%2Fhq6tY5Mum7i9Nbxe1O0vbkOkhowmnduI2m30%2Fwg19Vli6C0jGxg549a7aPQ8tfBr%2B4ZHoCqrgQwA75DnS1dEOdKlJ7L%2B52qTLPdu9wdlxAjLaZBOlo72X%2BNK52aTbSkwb0qty59u%2BBA3C3C6j063OYab97dgdkZWeQyXhqUTSxPmMMKm0MkGOqUBVPNYTHLhvTVdWl0vM0vPzaJJeePs8x5ygUdbPo2NcJKw4dTBE9b2L6Sim5a9Hq%2FD4%2FYSbu7A5QtLdVsvz%2BAeNkBAzRGoc35ra3mcIhvpvLUDHbrK73a%2FDGXTypVCxoHqeI3pVgdze7TfZ1HkjjrzHFTJ4iUcNDSlh%2BPJdExW0fy3z8KHLntv3cmH2NpcVXj8u5T21bdmdUl82dZ3WyyIeB%2BQPZe9&X-Amz-Signature=51eeb0f3246f6fea5b80245bceab01fe6058344741b83e0d15b42349d7424487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO57PAC6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWIsYl%2FLC1zhbA9Wv2tBuW2SN3kzzfxXeMiFnBtGW3AIgaVjseCOwUWln3%2FHbl5GMYU%2B54u1IkNjQrWu4k1tuuSUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBJNF6GEgxghgpGxoircA3IS2GxJVu54zNA9491XuX25Mv45CvcRWEYxHe27YYEwwcwnraYdefN4ktNMElQlS6MLE9Igwil9x5blEZkXrKMTaUoDowsnpOZFt0drA7z7aO8miZb%2Fr7vYb30fItN3EG0VR8ljdW%2ByF%2BrdrUoq2w5gzu85Ahc4exWqcab80Uy%2FXsmd38rkpC%2FKRQKyWK%2Bg8Kq7RelwVaUn2y9LvtP1umsQu5rMEpszk05SJjyqhvLVeZeDMRLiuNr1Sc2bE0%2FEcSBr%2BG0MVaCkwCb6rGPid7PFjRR%2B9OiPLo1OD2wB%2FOb4xCjlalM1JZ2%2BbpTZDFVg3xjROuBJgXJSb5r0flHCeOMBfMsu5IxpsSQpDLosxARUBn8TQz3cyALPsqyN1uY%2FogeScd%2Fwnm6Pt%2BYFqf3EUoCqY%2BBrOeCRHZ3ScRegP%2B8f6CemSpkr6cTd%2FApoGOTyhmWt3N8TSyXhO91%2Fhq6tY5Mum7i9Nbxe1O0vbkOkhowmnduI2m30%2Fwg19Vli6C0jGxg549a7aPQ8tfBr%2B4ZHoCqrgQwA75DnS1dEOdKlJ7L%2B52qTLPdu9wdlxAjLaZBOlo72X%2BNK52aTbSkwb0qty59u%2BBA3C3C6j063OYab97dgdkZWeQyXhqUTSxPmMMKm0MkGOqUBVPNYTHLhvTVdWl0vM0vPzaJJeePs8x5ygUdbPo2NcJKw4dTBE9b2L6Sim5a9Hq%2FD4%2FYSbu7A5QtLdVsvz%2BAeNkBAzRGoc35ra3mcIhvpvLUDHbrK73a%2FDGXTypVCxoHqeI3pVgdze7TfZ1HkjjrzHFTJ4iUcNDSlh%2BPJdExW0fy3z8KHLntv3cmH2NpcVXj8u5T21bdmdUl82dZ3WyyIeB%2BQPZe9&X-Amz-Signature=b969379181610a87741cca08b77005758f14ea33de58369d5df475ba270035dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

