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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL56EP5O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCR1cXvmd9PbGCvloWoinKdmqRuTNPosZ2Iesv9tsLKzAIgb6a9URCCil1vBrd3ug5mfPUUyVuG2GwldMzczW%2FxVBcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLMy3EJLlynakkuRJyrcAyCKWfuJyqV5iMlYTMmGPVB6MDQeGbdMuKDhre5xLYY4ocCurWieVzDyKodqdubYvo1pP%2FTrmDUZ6MO7GEXIU%2BLvkMA%2FrIoRPJ4ZsKCOU3nlDLF5RFpOwkKegRxTNQNU%2BrcSptV8B8XLXKfMy1khnPzlsaWU19PUg33VBg4qvWzJfQV8CscBCz%2FGjoqStxIVpXQCT7SD3PCX3IFlUWarLIueKNeyWNS4kQ4zeAaR9eXKhjT%2BBMmXODsHhY1l5wvBEJNqqC8yh6KRU%2BoQ2EtccrBnYrVOcZfN2LFgo%2Fyr%2FiS%2BlmrBgnGKGqkj1s6hfvLLNoEELDal1%2B%2FuZ8byQI96m%2BOmH3Dcxd%2F0I30Np5I0sNXOdlJnSzqzFh09Di4oTrJD8p8BIZvFJE6qPOH1%2Beck6SxtTj1iOS0umBiB5HVDvUGzIVi%2BPVUF0KfOuCmyE6lL71CNQhfojR%2BJDLlf24Y8Rxlt1KY%2B2XBtBwax8346Q79eSM5Ur%2FUxlAQC6JEI%2BcyEf2vylFFU68%2FS0VTyhBgPCy1sbBkeDalOTyzMfFayEv7%2BVYkROAEJR8%2Bb07TZ4Hx5zW0uezQdCU52oDdwHPPV058ko1HD4czAbiF1H6jRiLLIfATcMCKiinLUZvRyMM3BwckGOqUBpdlZAESrYeDCcuccFij5acKLT6aSntE8JG4vm%2FaQ3mpxbSg3fuDfxZKYcl7SDm59y5bmjuYK1B7l%2ByaXJFbKl4FTSP0fwE265f9D64KnfSXtWHU6zMFDmXlM9tjKfaNi%2Fx65VNAPBE0pQm5lhzdpHB3E2owj9DuhY0JGEeJCUPvYY2GHNBiNQYukqOng4eu6EEyWNGKR4hyu4diRAiVMhp1krNTg&X-Amz-Signature=c527c99eb89fc96dd9e4572c1fd9cbc950e7152ec899f817d9b1666340cdbda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL56EP5O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCR1cXvmd9PbGCvloWoinKdmqRuTNPosZ2Iesv9tsLKzAIgb6a9URCCil1vBrd3ug5mfPUUyVuG2GwldMzczW%2FxVBcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLMy3EJLlynakkuRJyrcAyCKWfuJyqV5iMlYTMmGPVB6MDQeGbdMuKDhre5xLYY4ocCurWieVzDyKodqdubYvo1pP%2FTrmDUZ6MO7GEXIU%2BLvkMA%2FrIoRPJ4ZsKCOU3nlDLF5RFpOwkKegRxTNQNU%2BrcSptV8B8XLXKfMy1khnPzlsaWU19PUg33VBg4qvWzJfQV8CscBCz%2FGjoqStxIVpXQCT7SD3PCX3IFlUWarLIueKNeyWNS4kQ4zeAaR9eXKhjT%2BBMmXODsHhY1l5wvBEJNqqC8yh6KRU%2BoQ2EtccrBnYrVOcZfN2LFgo%2Fyr%2FiS%2BlmrBgnGKGqkj1s6hfvLLNoEELDal1%2B%2FuZ8byQI96m%2BOmH3Dcxd%2F0I30Np5I0sNXOdlJnSzqzFh09Di4oTrJD8p8BIZvFJE6qPOH1%2Beck6SxtTj1iOS0umBiB5HVDvUGzIVi%2BPVUF0KfOuCmyE6lL71CNQhfojR%2BJDLlf24Y8Rxlt1KY%2B2XBtBwax8346Q79eSM5Ur%2FUxlAQC6JEI%2BcyEf2vylFFU68%2FS0VTyhBgPCy1sbBkeDalOTyzMfFayEv7%2BVYkROAEJR8%2Bb07TZ4Hx5zW0uezQdCU52oDdwHPPV058ko1HD4czAbiF1H6jRiLLIfATcMCKiinLUZvRyMM3BwckGOqUBpdlZAESrYeDCcuccFij5acKLT6aSntE8JG4vm%2FaQ3mpxbSg3fuDfxZKYcl7SDm59y5bmjuYK1B7l%2ByaXJFbKl4FTSP0fwE265f9D64KnfSXtWHU6zMFDmXlM9tjKfaNi%2Fx65VNAPBE0pQm5lhzdpHB3E2owj9DuhY0JGEeJCUPvYY2GHNBiNQYukqOng4eu6EEyWNGKR4hyu4diRAiVMhp1krNTg&X-Amz-Signature=b909d0ddf6947c19271348c7f9fcde0e92609e16088a3dbfb9dbc81476a4bdbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

