---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTNE525%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgkrflo2GnO26fHMoog4JV1m%2FeHRjiEwtPr2PKX%2Bv5ZAiBM54nhRCDKemg63v4394Oc0hmFRvB09SHlBGBcS4xsdyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMCQhAH95XVHdlkCFDKtwDvwyLZH%2FS0gqlnJiTC3GAFhrR4Ah3LIaXOpGDHwFq1ksB5oXCZ9zzm4nNCqivUGaGRrIClzfZYCvT%2FnW4caRef16vpneroVninwTxXQVtc%2B%2FipxQH91m9lN%2FlmXEcvp1InL%2FyB%2BVbBJ%2BsnMr6MnNX8Lb9cOlSWofpvjuZhT2iJ%2Fi4s89AzDtdUcnhbrEask8jcFPOkkTtzcRgea9vxG7JPvG0ghyjRzs9gtxMSg%2BcrIq5wEzoLRkLLEnJiZIrPf8jSB9EPHrJ8UbcYrYiK%2BorAD62qnRyD5MNbmia57GFHTxnyc786DNJc%2F4VDLPz1x9MP%2F1MlsaYCVT1Zgz8O8aT34g%2B1KsI9yCVbFHjKw4WJOyr4TD0akriyqfHRsyADSPD8qyYePgSqN8aTc32hJljFDt6FH2iuOYiUpAWd%2BQph%2BCVx5IFxvEoYzZe2Qh%2BP0H%2Bzgqrch0BJ96GSQt0QYgZjs6YEnI4pVSI6LzJ%2FveBBk048JzAkVP1lgopyYyytHV3JUzFQRCs2ehLot3CO3aAvgp8GOb3XEa74Q4hshR7RxVxkilld9XYDTl7VWbr%2BhGYuGXfSgrLtS%2BF9wZejtNZXXDm54YipFYlRNMal2WPTT5R8Zem7dWNWkk12Tkw6f3OyQY6pgEUpMYs%2Fyrb9Tbt3xKwNp3CmXvTvDtcD0FgRpIgWF9alp%2B072ydjX6iCinvI5lUM1Ghmo5Bb4GG%2F1DkBKWqu1YD02OwMbwRHtrdBcHNjutUSPpudC23aexHPFJhs3UwYRzFhNLlrRy0dlBV2C8aLojZe%2FLlIDgCm96OCT4jwcNOychILhUkspAPAEQQTHBFxUtJQCAUjrfOYq%2BayLIRkowcLXIIwySE&X-Amz-Signature=3654ca1ff1acef7d2e17e6c818dba1bf298fbcbe669f4bad58f28f196d3bab33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTNE525%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgkrflo2GnO26fHMoog4JV1m%2FeHRjiEwtPr2PKX%2Bv5ZAiBM54nhRCDKemg63v4394Oc0hmFRvB09SHlBGBcS4xsdyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMCQhAH95XVHdlkCFDKtwDvwyLZH%2FS0gqlnJiTC3GAFhrR4Ah3LIaXOpGDHwFq1ksB5oXCZ9zzm4nNCqivUGaGRrIClzfZYCvT%2FnW4caRef16vpneroVninwTxXQVtc%2B%2FipxQH91m9lN%2FlmXEcvp1InL%2FyB%2BVbBJ%2BsnMr6MnNX8Lb9cOlSWofpvjuZhT2iJ%2Fi4s89AzDtdUcnhbrEask8jcFPOkkTtzcRgea9vxG7JPvG0ghyjRzs9gtxMSg%2BcrIq5wEzoLRkLLEnJiZIrPf8jSB9EPHrJ8UbcYrYiK%2BorAD62qnRyD5MNbmia57GFHTxnyc786DNJc%2F4VDLPz1x9MP%2F1MlsaYCVT1Zgz8O8aT34g%2B1KsI9yCVbFHjKw4WJOyr4TD0akriyqfHRsyADSPD8qyYePgSqN8aTc32hJljFDt6FH2iuOYiUpAWd%2BQph%2BCVx5IFxvEoYzZe2Qh%2BP0H%2Bzgqrch0BJ96GSQt0QYgZjs6YEnI4pVSI6LzJ%2FveBBk048JzAkVP1lgopyYyytHV3JUzFQRCs2ehLot3CO3aAvgp8GOb3XEa74Q4hshR7RxVxkilld9XYDTl7VWbr%2BhGYuGXfSgrLtS%2BF9wZejtNZXXDm54YipFYlRNMal2WPTT5R8Zem7dWNWkk12Tkw6f3OyQY6pgEUpMYs%2Fyrb9Tbt3xKwNp3CmXvTvDtcD0FgRpIgWF9alp%2B072ydjX6iCinvI5lUM1Ghmo5Bb4GG%2F1DkBKWqu1YD02OwMbwRHtrdBcHNjutUSPpudC23aexHPFJhs3UwYRzFhNLlrRy0dlBV2C8aLojZe%2FLlIDgCm96OCT4jwcNOychILhUkspAPAEQQTHBFxUtJQCAUjrfOYq%2BayLIRkowcLXIIwySE&X-Amz-Signature=65d50182b7bc8f5e1ae35eb9c059ee52b1a827657110b5c56f6f4ceb9348335a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

