---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTL4S4F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXOekIrcdyO2AP%2FYVl8J4AGII3zmIGW5BvGX1BmTPrgAiEAuk%2BqAGQYq%2BrzGjDfJIzsqQnedEAp3to6KjZmJO8aXTkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWPreSI0JJaCPvDaSrcA3liGVSoTEB%2FoSRgpVanRtK9dS962fzy31u%2B7qKMRIzgezYX6rX7nbHjDkL90r%2Fr3a4wgB0jUDh6drt6Nt%2BkG%2Bx0P90w8Oyn3le1f55l8%2FsfLEGYrhm7l%2BoKaYFC8ZWsBO%2FloW%2Bqf%2FPHo5hixlSRMUxYPab7AtexDIQtKRUk40ePe3HYb%2FohhmAktPXiHR%2Be5LjY2B1kJBaGfKRpBHN%2BXwhA3tyej5IWI77tEEFh4ZsKgVTQIzhbFo7Q8%2Bimzc%2B8SHk32IlvS9%2FryUxuGr7CHMwdmZvVxkjNw%2BuJtEshKPX%2FzxpPpfUAV%2BkpXXm0lT3pB%2BSvTwCTo1Zc19cWdxdH8A9LttVLR2mA2jS42ODsF3kvHEw10ST1c1c29HSUsShF5r7l0Pocsm30LQ4s7HxVWuajRzucxf9VmpCdmsv9Min8LEZOm81WHo0O4Pi2LKhnL%2FjkqInIkELKuVscGeZMoPDu9JeatV7KZXsmOgu%2BaUMBbG0gRdjhv5jwOv%2FTA4aYLQk7lGJtqHXoAWnCcvug50JOi5i1bI7Gcdxo3auThlxyA46DlHwOoDv1H4BAQ57GXkKFu0FexhfKvjVyd8sobPw5kWlwPb81Iw2vEzi6%2BprIms%2B3V9UAfjTT7iksMPuP28kGOqUB1DmUHPNY3JS26l%2BZT006wX%2FLPYfBAjVXunleVOzUMoFb5xMxInT%2BdEOxxI33Jx%2F2RRWOCCoQWvaiOwH%2FfFjQbXZsOrQeoP2LFqIQHBzH1nZ41QRlJCPTlJKfyEEvg57NEKbrnAjbc93pMRIMJZDmv%2B%2F6NvsllnaT2DH2BQDgv6KjSDmxNhE8AxeVJerm4ctY4g1Qo%2FT9YeOs8W%2B7PujwvlReC4BW&X-Amz-Signature=5f6b4dbcfc4e65dbd1065c18fb9c103f8b67cd1dd8f24ff90f8a18ecc0d46dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTL4S4F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXOekIrcdyO2AP%2FYVl8J4AGII3zmIGW5BvGX1BmTPrgAiEAuk%2BqAGQYq%2BrzGjDfJIzsqQnedEAp3to6KjZmJO8aXTkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWPreSI0JJaCPvDaSrcA3liGVSoTEB%2FoSRgpVanRtK9dS962fzy31u%2B7qKMRIzgezYX6rX7nbHjDkL90r%2Fr3a4wgB0jUDh6drt6Nt%2BkG%2Bx0P90w8Oyn3le1f55l8%2FsfLEGYrhm7l%2BoKaYFC8ZWsBO%2FloW%2Bqf%2FPHo5hixlSRMUxYPab7AtexDIQtKRUk40ePe3HYb%2FohhmAktPXiHR%2Be5LjY2B1kJBaGfKRpBHN%2BXwhA3tyej5IWI77tEEFh4ZsKgVTQIzhbFo7Q8%2Bimzc%2B8SHk32IlvS9%2FryUxuGr7CHMwdmZvVxkjNw%2BuJtEshKPX%2FzxpPpfUAV%2BkpXXm0lT3pB%2BSvTwCTo1Zc19cWdxdH8A9LttVLR2mA2jS42ODsF3kvHEw10ST1c1c29HSUsShF5r7l0Pocsm30LQ4s7HxVWuajRzucxf9VmpCdmsv9Min8LEZOm81WHo0O4Pi2LKhnL%2FjkqInIkELKuVscGeZMoPDu9JeatV7KZXsmOgu%2BaUMBbG0gRdjhv5jwOv%2FTA4aYLQk7lGJtqHXoAWnCcvug50JOi5i1bI7Gcdxo3auThlxyA46DlHwOoDv1H4BAQ57GXkKFu0FexhfKvjVyd8sobPw5kWlwPb81Iw2vEzi6%2BprIms%2B3V9UAfjTT7iksMPuP28kGOqUB1DmUHPNY3JS26l%2BZT006wX%2FLPYfBAjVXunleVOzUMoFb5xMxInT%2BdEOxxI33Jx%2F2RRWOCCoQWvaiOwH%2FfFjQbXZsOrQeoP2LFqIQHBzH1nZ41QRlJCPTlJKfyEEvg57NEKbrnAjbc93pMRIMJZDmv%2B%2F6NvsllnaT2DH2BQDgv6KjSDmxNhE8AxeVJerm4ctY4g1Qo%2FT9YeOs8W%2B7PujwvlReC4BW&X-Amz-Signature=37e03a38df5ca84e85b4a2190a7a759c722b2841494e464b52b0805e94c4aa63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

