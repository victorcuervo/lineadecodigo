---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZD35KYF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLGtRHolx9OvEUjM0hmptsgKGEkMN%2FY%2FpcaCT%2FOsEZkAIhAOBLCs%2F5F%2FmEKV0KBLkm4h7QnsynaiC159Vq3d1ArFpOKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtYOL5boHpoLBDxC4q3ANoiuOovCct9BSDrFf1ZOP3j6%2ByMbbEnuiVN1kIt5enPNBjxiWngVh%2BpW9yeTVLyGEQOpJYnPkaf%2FpzNym1%2BCz8MWwJM0kClV8naInLzcQj1vG%2FUosR0W9O%2BMsqIg3WZcTKHAKdvvX46OHAJufulLpcm2uXNyJNNgqRHetkhT%2F7LGPbrvEOmrgHuVQ1hLo7TPCFJ2WOyYqb6HqXBa%2Fucznx7qp6hZK4eORmuDZDGblnN2PEHxrIROh17tqburOlhKmkOGraTlnSUW%2BIk%2FFTtrB2xE1mD28u8FagwWd1OuyObxeVWRBh0uDtRD2oZJfbdBQsOncPvlkMmWK5iWCw0xakUisUXnFycW%2FgKVU%2BHoEj5Dt39RQw%2BAMSAUwCXjKaB4uK18390A5cEwIrIoZyp4ov%2FbnAdBTYktUtB%2Fj39B11njLEp3lBJ0vjng7JfSyLyHwdVBE8XIrf2kWcj3NyRH24g5q43pUrMhobfe6qnEs9OD8qpDgg2%2B6FLgNjmjM40Q5NB7dCLOqWSe%2BPDo7kbkDdk3AtysgZGRLgJugts2Hzz3jiYepGHblC0rC6%2BKALQSzy9tS8LtT2aQS%2FhQfYrOE8ye9kOB5iDHypzHnkXnGUkKqGiSxYaCq%2FIpQoBzCgodjJBjqkAR43JKJKafqf6Wl3ebRfPI0xTwBIs6f95Zl3YCFR%2BCvSnf71%2F%2FIs6tleIRK0VX85tXHdAspOVtdg%2FWU5ueX3WeqcwtGb7bjGjxWaleDRuUkKt2k3Zk%2BGZWRAfu1db4AMjQwamJuyHskbyKj3BpGoFTivVGRSofFkQxuZC8GheMjtFrF%2BNIPY37p6TR0%2Fgj2q8N5EMTfVHFDZyqtblr9SbD5WyWSB&X-Amz-Signature=b128315d02f6b35547961858a3bc8e3545517bbc28b31aa62897eddca8291b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZD35KYF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLGtRHolx9OvEUjM0hmptsgKGEkMN%2FY%2FpcaCT%2FOsEZkAIhAOBLCs%2F5F%2FmEKV0KBLkm4h7QnsynaiC159Vq3d1ArFpOKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtYOL5boHpoLBDxC4q3ANoiuOovCct9BSDrFf1ZOP3j6%2ByMbbEnuiVN1kIt5enPNBjxiWngVh%2BpW9yeTVLyGEQOpJYnPkaf%2FpzNym1%2BCz8MWwJM0kClV8naInLzcQj1vG%2FUosR0W9O%2BMsqIg3WZcTKHAKdvvX46OHAJufulLpcm2uXNyJNNgqRHetkhT%2F7LGPbrvEOmrgHuVQ1hLo7TPCFJ2WOyYqb6HqXBa%2Fucznx7qp6hZK4eORmuDZDGblnN2PEHxrIROh17tqburOlhKmkOGraTlnSUW%2BIk%2FFTtrB2xE1mD28u8FagwWd1OuyObxeVWRBh0uDtRD2oZJfbdBQsOncPvlkMmWK5iWCw0xakUisUXnFycW%2FgKVU%2BHoEj5Dt39RQw%2BAMSAUwCXjKaB4uK18390A5cEwIrIoZyp4ov%2FbnAdBTYktUtB%2Fj39B11njLEp3lBJ0vjng7JfSyLyHwdVBE8XIrf2kWcj3NyRH24g5q43pUrMhobfe6qnEs9OD8qpDgg2%2B6FLgNjmjM40Q5NB7dCLOqWSe%2BPDo7kbkDdk3AtysgZGRLgJugts2Hzz3jiYepGHblC0rC6%2BKALQSzy9tS8LtT2aQS%2FhQfYrOE8ye9kOB5iDHypzHnkXnGUkKqGiSxYaCq%2FIpQoBzCgodjJBjqkAR43JKJKafqf6Wl3ebRfPI0xTwBIs6f95Zl3YCFR%2BCvSnf71%2F%2FIs6tleIRK0VX85tXHdAspOVtdg%2FWU5ueX3WeqcwtGb7bjGjxWaleDRuUkKt2k3Zk%2BGZWRAfu1db4AMjQwamJuyHskbyKj3BpGoFTivVGRSofFkQxuZC8GheMjtFrF%2BNIPY37p6TR0%2Fgj2q8N5EMTfVHFDZyqtblr9SbD5WyWSB&X-Amz-Signature=1919f94bbddc060f9807c25d18370b59afae26917db9483327955f74675af239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

