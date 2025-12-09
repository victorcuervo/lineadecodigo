---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRZGROU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv2BJxzczeplqS32%2FsXNvbMJ60PDRjQliAhN%2B8UO%2Ft8AiEAzp4eKjFNUNWFt%2FS%2FsHoqZY77JSJivc2Sayt4JIIOhWYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSdh8wdzIpAuXtiiircA4JRMD7gnSdm8GRwgAfOx3TuSVyYI9Wjw%2BYt%2F8aAa2u6jPge55oNfB9l5WVUjaQlL8WMoMPI9eME5aSpo3GspXxvFYedoiSbWGcpym2Gh3ZN%2FmFf5rMirClqnC%2BGp7Xybo8Nhvwm99F0qBA9nIQfIm2mKxpaRN9%2Bt1wgpahEPgKtkFpCCaYFTJIYRBo7VYgdT6kyg4IeSAMnwgb5yKo39o6OW4hMjNVYPIyJ6eedL27nOxhQGCSWmeKw3DwcDYzP0UNjWbBjdg2pZodNPg7eRNxftihQphQiB%2Fg%2BjUE3zSb7BidGokoWYbg5dzHioYIpgKsfJ2SOafvZi6qU%2BCrwxUsShs9IgpbNz8G%2FIhvf818yGPtTwCdMM4teNyHYPvNbZTxz6Q02d6jc1VZy%2BJPsIRyIcZEcESL4wa6xsdHT2e0xxFenJ2GZXJ1r9AImQLdSDFdgcxM0s%2BkpoQsXMOH0AlfX53TUwT23xetsvcrdgi013JRa6Cy%2FCBSxgUlRMl9jL2OSdEBbZu1wrlbTOsvMy%2BP8EN%2FUIVdcm0MPuL6Uc%2Bbg4kejloqdG1ZTsyKvryirc0PtukVdNvqWVRcs%2FA3YNPfv8SKJC%2FsfnvAPfStMWe9CeZr2GZ53BHpgAR3TMNaO3skGOqUBoNdmN%2BDjpQGcL9D1pIxftu4na90t1pSNLrPaQa5d5uk%2FZuH1HUfWaHLh2Y4rEGIV3H1269LHHmqsIQSl4GdoL9dcQhTOm0me0nS3mqoFyA%2FqVdqlJ9XJLqZEy17XqRfIRwDwb106jHgIZN5x21XVmlKjgngY5Nhf6ZWIBB%2FjL7INsFl8cYXI4GpqApNkynfCD4cJEzIcxJdX2HnPpFdB6By%2F5mx1&X-Amz-Signature=aa4daf6f9c046e6b141a10ce7b303c2fd9d77d25b00e8afaf9fcca50acb185b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRZGROU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv2BJxzczeplqS32%2FsXNvbMJ60PDRjQliAhN%2B8UO%2Ft8AiEAzp4eKjFNUNWFt%2FS%2FsHoqZY77JSJivc2Sayt4JIIOhWYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSdh8wdzIpAuXtiiircA4JRMD7gnSdm8GRwgAfOx3TuSVyYI9Wjw%2BYt%2F8aAa2u6jPge55oNfB9l5WVUjaQlL8WMoMPI9eME5aSpo3GspXxvFYedoiSbWGcpym2Gh3ZN%2FmFf5rMirClqnC%2BGp7Xybo8Nhvwm99F0qBA9nIQfIm2mKxpaRN9%2Bt1wgpahEPgKtkFpCCaYFTJIYRBo7VYgdT6kyg4IeSAMnwgb5yKo39o6OW4hMjNVYPIyJ6eedL27nOxhQGCSWmeKw3DwcDYzP0UNjWbBjdg2pZodNPg7eRNxftihQphQiB%2Fg%2BjUE3zSb7BidGokoWYbg5dzHioYIpgKsfJ2SOafvZi6qU%2BCrwxUsShs9IgpbNz8G%2FIhvf818yGPtTwCdMM4teNyHYPvNbZTxz6Q02d6jc1VZy%2BJPsIRyIcZEcESL4wa6xsdHT2e0xxFenJ2GZXJ1r9AImQLdSDFdgcxM0s%2BkpoQsXMOH0AlfX53TUwT23xetsvcrdgi013JRa6Cy%2FCBSxgUlRMl9jL2OSdEBbZu1wrlbTOsvMy%2BP8EN%2FUIVdcm0MPuL6Uc%2Bbg4kejloqdG1ZTsyKvryirc0PtukVdNvqWVRcs%2FA3YNPfv8SKJC%2FsfnvAPfStMWe9CeZr2GZ53BHpgAR3TMNaO3skGOqUBoNdmN%2BDjpQGcL9D1pIxftu4na90t1pSNLrPaQa5d5uk%2FZuH1HUfWaHLh2Y4rEGIV3H1269LHHmqsIQSl4GdoL9dcQhTOm0me0nS3mqoFyA%2FqVdqlJ9XJLqZEy17XqRfIRwDwb106jHgIZN5x21XVmlKjgngY5Nhf6ZWIBB%2FjL7INsFl8cYXI4GpqApNkynfCD4cJEzIcxJdX2HnPpFdB6By%2F5mx1&X-Amz-Signature=81900d2161701182806c02c88744300f944672f1b49345af10fb437a5e698810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

