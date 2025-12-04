---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKGM5IW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEg4y1uQYgPQt2ElUrtv0kDHgwrMYdND8GVo9XdXBochAiAVodiZuMjUxdBLGVQ0h%2BXCDj2TdMaIwC4LycIwWyM3Lyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMisJQeJsxZCWNkl9iKtwDLFbCyfRDd76GXpwWQRIqvSuzBZPXG2%2B0kBBS2Q1d7xigEiV21bbUO3qbfGp1ZgVQJ1nklUBWuI1AHPgFCZvsVIFY2ag4%2B%2Fofpf8YEmIW1NYBFlF6S%2FMKc8uumOTbVJ2jQsZ4hYoZZvWURfiUMQniJhYMbHjmk62odXXTNSC7C3EeHcMZhd7G3U2SztTb%2B6kMtdBs0MYoU3nTKhdgyTADVPjHmVR%2F%2FnI9L5B0Mgp0cvLE%2FV55k1AZ%2F5qzIXlNBWGhyEplELNNRWsThRbkeXbcwFc3aeoddKf5XyWeidHy0CO3nXdTs39ppL%2BZWu56c48BsLzUwQLdJY%2BqlzpKlp%2FR3cGdBQuytVp8N6TGrkHJNDh1PV5r3%2FAySE5Q1w0vIvDC70RIrAE3TO7NfG9G0H087nBQPlu6ZTgdlAWLEI%2FD65%2FEriTUfuR47W7Ck9ZRsLU6unV76TMHppquXfVp%2BMAgwQgl1KGsRqVlqgu%2F0JAuThUcu1o1eeKBH07YSMWJsAaYnUVZurb3SodPV3dfDk0HNoQUu9YWYuzrdhy1airR5%2B48NQlhLcGLPH03WeOrpvEIjoxE1U4kcW%2FxjDkcyKXQWFoHu0hpHHs00eXKV%2Bq8Z2LD9RrvFOjsH3I%2FlMQwpOfFyQY6pgHZlwRjcxTuuzuLx6SqpklYcZ6F5H23Z2DRi69T1ZN9G5TQcPGNjquRW%2FVnLw6c0OXj453mgUJpk8mhltn4m5O4njsmcv2YD%2BqawHArlsDreOSIpH7k%2Fd%2FhhUSO2Etq1jkHIHttPBWHBSlsBLXZ746FZpQ0DiaTqkI25G6NrTm5Dw0SKhWXiLqdoMKDMiHvC%2BTYWS%2FGWwnGLmY81PKX3cv9h8fFXjaa&X-Amz-Signature=c87f5f3cd458da60f0cb3d47cd928c618403e7cf2dcaf989ba3e72208a1b8332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKGM5IW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEg4y1uQYgPQt2ElUrtv0kDHgwrMYdND8GVo9XdXBochAiAVodiZuMjUxdBLGVQ0h%2BXCDj2TdMaIwC4LycIwWyM3Lyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMisJQeJsxZCWNkl9iKtwDLFbCyfRDd76GXpwWQRIqvSuzBZPXG2%2B0kBBS2Q1d7xigEiV21bbUO3qbfGp1ZgVQJ1nklUBWuI1AHPgFCZvsVIFY2ag4%2B%2Fofpf8YEmIW1NYBFlF6S%2FMKc8uumOTbVJ2jQsZ4hYoZZvWURfiUMQniJhYMbHjmk62odXXTNSC7C3EeHcMZhd7G3U2SztTb%2B6kMtdBs0MYoU3nTKhdgyTADVPjHmVR%2F%2FnI9L5B0Mgp0cvLE%2FV55k1AZ%2F5qzIXlNBWGhyEplELNNRWsThRbkeXbcwFc3aeoddKf5XyWeidHy0CO3nXdTs39ppL%2BZWu56c48BsLzUwQLdJY%2BqlzpKlp%2FR3cGdBQuytVp8N6TGrkHJNDh1PV5r3%2FAySE5Q1w0vIvDC70RIrAE3TO7NfG9G0H087nBQPlu6ZTgdlAWLEI%2FD65%2FEriTUfuR47W7Ck9ZRsLU6unV76TMHppquXfVp%2BMAgwQgl1KGsRqVlqgu%2F0JAuThUcu1o1eeKBH07YSMWJsAaYnUVZurb3SodPV3dfDk0HNoQUu9YWYuzrdhy1airR5%2B48NQlhLcGLPH03WeOrpvEIjoxE1U4kcW%2FxjDkcyKXQWFoHu0hpHHs00eXKV%2Bq8Z2LD9RrvFOjsH3I%2FlMQwpOfFyQY6pgHZlwRjcxTuuzuLx6SqpklYcZ6F5H23Z2DRi69T1ZN9G5TQcPGNjquRW%2FVnLw6c0OXj453mgUJpk8mhltn4m5O4njsmcv2YD%2BqawHArlsDreOSIpH7k%2Fd%2FhhUSO2Etq1jkHIHttPBWHBSlsBLXZ746FZpQ0DiaTqkI25G6NrTm5Dw0SKhWXiLqdoMKDMiHvC%2BTYWS%2FGWwnGLmY81PKX3cv9h8fFXjaa&X-Amz-Signature=633e059ca2dead3b6abe631f7277773978c282fb1aa643756ce6543f4660aad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

