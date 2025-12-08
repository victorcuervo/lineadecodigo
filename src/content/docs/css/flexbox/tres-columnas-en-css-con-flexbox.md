---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRJAB4T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFrlIy4Lvb1DPBa%2BUBD4QKG7%2FP%2Bu1QkOTSZsYREpf4jAIhAIudguKnCTDdbSBs5PZL%2Bk8Vky0XtbVw5q0pVf3L4OfkKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxS8HTKUf5duqDduOkq3AMnxeouGZYNHTAbrJ0rfoHq%2F8Z4KtjqkUyfrfJCA7cMQ3JaOBlse3AuGcDl7tjMC%2FufK3GBG6hmDG0SLzocYyFsYqqI6k%2By7eh8KXaWvSp7lfEo40Z2jDRuoC5OUVfBmksIXcp31GzodMeZJYDRitlnlaGAvTtCR9UmSEV4KskUvU%2BOLMoAKKPnQDbMKOxnqNkC8k9lWv8o4q95ZfRH9w38OX5MJGdnUTGWDkrZvszbH6tfIX0ZLI6VHE3QkMBZ04%2F1JSZt1MUI7ZVmNsFq3KYeYjVHEeRt3tzmm0NlJhuKKn8i0UxxRZeapKNLTHOSyuQ3k7sGwQESobU%2BQi8Mb8IyWU2nB%2FJO2s6Tdn%2Bbp9iBfdosO0fNSsxzdPez6E6Eq2iEQUKowK%2FCGAFBPzX8eznJLz%2FebZMpXrDmdsPKZEMh3u8dTCiqkhjTBp6LHoSz0TYjgyRrovLYxQabXA%2B9gNvnpw%2BFI7WO%2BP36r%2FntNtc3%2BjhQiTK0Yw%2BADGcN0ah7GPEcD32ff6EakGVbhkdSt3v5prydm%2Fv8FfP7qepKYq91mq0DCldGmOBMV54%2FSpMFjUraIplh%2Bd9IV6Wc7HsaFcT%2ByetutAYh547yAQ0fy6hwDTtYdFWyMgcBpwploDDk7dnJBjqkARSxqcoX8cJTNm1%2Ft7sGuSUXFdrXAcIRoPMl49by0EvmLpwZ1taNeLa%2FvSVGwCzRaUcJuyTWd7k%2FGkCEkPIVfjWWz6J%2BRLdonQgN9JkljvKLTYwIyW60qCK4p8kYT0K9j7kMPrihBI3CW%2BWejzuoukuH2jZBa%2FxKa2WLK3NN7MfdDXEp%2FXdihPqpNYj%2Bc%2B2SS%2FUozsw7PQFk9YjdIr8KcLrgveKz&X-Amz-Signature=38035442d506e59c6802462de1b6a787f16c511f0054ce5a7f2841f020b3b64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRJAB4T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFrlIy4Lvb1DPBa%2BUBD4QKG7%2FP%2Bu1QkOTSZsYREpf4jAIhAIudguKnCTDdbSBs5PZL%2Bk8Vky0XtbVw5q0pVf3L4OfkKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxS8HTKUf5duqDduOkq3AMnxeouGZYNHTAbrJ0rfoHq%2F8Z4KtjqkUyfrfJCA7cMQ3JaOBlse3AuGcDl7tjMC%2FufK3GBG6hmDG0SLzocYyFsYqqI6k%2By7eh8KXaWvSp7lfEo40Z2jDRuoC5OUVfBmksIXcp31GzodMeZJYDRitlnlaGAvTtCR9UmSEV4KskUvU%2BOLMoAKKPnQDbMKOxnqNkC8k9lWv8o4q95ZfRH9w38OX5MJGdnUTGWDkrZvszbH6tfIX0ZLI6VHE3QkMBZ04%2F1JSZt1MUI7ZVmNsFq3KYeYjVHEeRt3tzmm0NlJhuKKn8i0UxxRZeapKNLTHOSyuQ3k7sGwQESobU%2BQi8Mb8IyWU2nB%2FJO2s6Tdn%2Bbp9iBfdosO0fNSsxzdPez6E6Eq2iEQUKowK%2FCGAFBPzX8eznJLz%2FebZMpXrDmdsPKZEMh3u8dTCiqkhjTBp6LHoSz0TYjgyRrovLYxQabXA%2B9gNvnpw%2BFI7WO%2BP36r%2FntNtc3%2BjhQiTK0Yw%2BADGcN0ah7GPEcD32ff6EakGVbhkdSt3v5prydm%2Fv8FfP7qepKYq91mq0DCldGmOBMV54%2FSpMFjUraIplh%2Bd9IV6Wc7HsaFcT%2ByetutAYh547yAQ0fy6hwDTtYdFWyMgcBpwploDDk7dnJBjqkARSxqcoX8cJTNm1%2Ft7sGuSUXFdrXAcIRoPMl49by0EvmLpwZ1taNeLa%2FvSVGwCzRaUcJuyTWd7k%2FGkCEkPIVfjWWz6J%2BRLdonQgN9JkljvKLTYwIyW60qCK4p8kYT0K9j7kMPrihBI3CW%2BWejzuoukuH2jZBa%2FxKa2WLK3NN7MfdDXEp%2FXdihPqpNYj%2Bc%2B2SS%2FUozsw7PQFk9YjdIr8KcLrgveKz&X-Amz-Signature=e8e1d6bd4c9e03bb25f96a3308cd334ae6479f9074e7bdc34e3d1128678d1834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

