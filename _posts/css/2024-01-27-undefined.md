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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPGX5BC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEuDyCaGyX6ceOFv9Iv8YMZKhmOVMXw9ndOEVtEqVqW%2FAiEA3ycjxDY9v5nClImsLKuBtE6wFD5qHbenWVINKa3Nbpsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCVCohWC6zliKMRzeSrcA%2BMHQSWZr%2BcW42y9ZGgG7Heuqp%2Bwi%2F5UP%2Faun09MdnUIEzHWxPLcX8AgTI3mybY00wW9TFmKuVzU%2BgY%2FxqcCp%2BWM8f6GkVNFJ9cTmacrs1J%2F8ObioLzVDu2VlTlGIWxz5elz%2FMAr0sWjrZibvSRK22yOTuSCbe%2FNjC4EY604WyuzeWhD%2FXTjdGvcEUN71buy6CqV%2FL6x8HNBdNbz%2Bh95AyT9qy1lSRZ9FzffXqdv%2FfLq5HqiKpBRFSZDEmw3YxUOelWzDP0f%2FyzB4dAMER5szCpAF3ODDva6DgAkN36VOm78KUWQL%2Flnd43h7I5ItYGbQpFwOKyzByCnTOStJtgxGukS55xR6fLnutiu4BVuqdsKtdkXT9DxN0yBQtGXuyAKBCH0zXazg4eTF2YTii%2Fb%2FFKtky17eFQG29EEqX6TxaMulcIfhtLRy2hdO%2Bf2YGmVjpAfpEjACWMO7mRiVAxadTkIY8VfbmHFuPHZJQK%2F34LvuqWAqLg3BvJ8hM74WXBYTIn2AaPJwBhQce1TU26ylsWi24oz4%2FOKEXHbQ5jEHPSQj1wyqOfL1dwrq2RZGyA7lshj33pvlaAwCI3en4EpNtNqd1N%2FopwO3%2FJZIfeMxO%2F5etvIMuhN2SmpkuWrMPLawckGOqUBmCAfy9oc4UQK4JOdRmrAwgKaa4Kqy39QqUmBe0MoPk78YYbRqvgBAcXCJQvBAupVfj5NwcKyX33EXgo8zwggEbte%2BM%2F94hwuQmBZTIg2MzebG3SEp0RSPtPWuTzUHAfkiB5tdqDEHjK1mWkjb5zG%2F9Y%2BMdjDiZym6AVR2x69UrwQjYov3HLs8EKbWkRev6zoSlc25n0EiWAAhTi94K7SJUOxX0so&X-Amz-Signature=bb49dfd637784b11db08d57b65cac541b1d52af82af26e18335c3f813f00138e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPGX5BC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEuDyCaGyX6ceOFv9Iv8YMZKhmOVMXw9ndOEVtEqVqW%2FAiEA3ycjxDY9v5nClImsLKuBtE6wFD5qHbenWVINKa3Nbpsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCVCohWC6zliKMRzeSrcA%2BMHQSWZr%2BcW42y9ZGgG7Heuqp%2Bwi%2F5UP%2Faun09MdnUIEzHWxPLcX8AgTI3mybY00wW9TFmKuVzU%2BgY%2FxqcCp%2BWM8f6GkVNFJ9cTmacrs1J%2F8ObioLzVDu2VlTlGIWxz5elz%2FMAr0sWjrZibvSRK22yOTuSCbe%2FNjC4EY604WyuzeWhD%2FXTjdGvcEUN71buy6CqV%2FL6x8HNBdNbz%2Bh95AyT9qy1lSRZ9FzffXqdv%2FfLq5HqiKpBRFSZDEmw3YxUOelWzDP0f%2FyzB4dAMER5szCpAF3ODDva6DgAkN36VOm78KUWQL%2Flnd43h7I5ItYGbQpFwOKyzByCnTOStJtgxGukS55xR6fLnutiu4BVuqdsKtdkXT9DxN0yBQtGXuyAKBCH0zXazg4eTF2YTii%2Fb%2FFKtky17eFQG29EEqX6TxaMulcIfhtLRy2hdO%2Bf2YGmVjpAfpEjACWMO7mRiVAxadTkIY8VfbmHFuPHZJQK%2F34LvuqWAqLg3BvJ8hM74WXBYTIn2AaPJwBhQce1TU26ylsWi24oz4%2FOKEXHbQ5jEHPSQj1wyqOfL1dwrq2RZGyA7lshj33pvlaAwCI3en4EpNtNqd1N%2FopwO3%2FJZIfeMxO%2F5etvIMuhN2SmpkuWrMPLawckGOqUBmCAfy9oc4UQK4JOdRmrAwgKaa4Kqy39QqUmBe0MoPk78YYbRqvgBAcXCJQvBAupVfj5NwcKyX33EXgo8zwggEbte%2BM%2F94hwuQmBZTIg2MzebG3SEp0RSPtPWuTzUHAfkiB5tdqDEHjK1mWkjb5zG%2F9Y%2BMdjDiZym6AVR2x69UrwQjYov3HLs8EKbWkRev6zoSlc25n0EiWAAhTi94K7SJUOxX0so&X-Amz-Signature=7bc07fbe59aa9349b7bdf7a8fc110ae6d25c01e2969036a4ddae287174041535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

