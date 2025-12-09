---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGLDZK6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXikvLjqdouwXxC2HYDIIFqPcSkyE2LELcWWqUsaVEEAiEAhazWo9%2FM%2Fw%2FGjQPBxHWqzBYZCzBOM7%2FC%2FjdxMy6mRv8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyff2zsCetEdsthkCrcA6%2BUxSvvo9u8OtASXlYcL32lsw%2FmKmCuH77s%2FMkiGs1d6cyL%2Bc8R%2FAx7duqlj2wdW%2FTYBJKcWH6v3vJBEOQlTTgxIwWJJgM0CW97MDp6Z%2B2JTuKI54kReai214gug4QtHEJw%2F8%2B0e78iDvRboqvxOJxUgPryyFzYESD0hQR4Y6f6N3fb36KVroqFgZiBNn6j1Gwmo1revUVXE9ik7TsfusQmygEH2MObwkyY1NGqs7gn1bEOnxn5tGtVHZPW0mqlmlhEjmUjgh87zpWPSSl5MTLFbWFzJ8EqEQfEnI72LobnRs0%2Bhck5pxKhooTApw8x2VwKsI7wlINRVy7j8sPyBDJd0LxQevhf%2FMphcHpxIxMzgo6PJs9XDCJaB6fYWvpVWJNjoTs1mYXPg%2BaKPMU916PQrSWhOCE%2BNrpH9UKyibJwod3CoForcBMOxMuDn%2BbHMYktdzujcmx2tuHlQxjpf%2FT9tjHx2mwmBpfsSnsLDRk9u6cZkjc01YDzVlniM2Ddhs%2FFTIq%2F8w3vY4whcicVck4mfSxPLJHddZqmpVnV0CK2BqhTKvbntOu4jFngQC3AC%2FLbHvOUuolClnD2JDepKa9rgAkPJkf775TegZ%2BZq4KPN18jSmnsRA1ywqazMLuO3skGOqUB5PO1ov78TMt4Rp0n09iCmretxU2Bj5LE2pInRD00gHjgii4AdQyTq%2FGW4%2BErD5NwxxAp1gKvTWX5H1HHuUAFw84qm2502LFGcahgM%2FbRQGwT3NO%2Br8zNTcRMBJ3YwHACrI%2BOYSstQaPZipAp4de4NgPI1aCZij0KpS0RbTEptwHNtprWH%2Be7a63zw0mNEBtGIAkUrwfqDb7NtaOehuuuX7UfSFhp&X-Amz-Signature=ee211a4fd9bb38049581549f8b4868fae7ff7edda829163f5259e182a30cdb41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGLDZK6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXikvLjqdouwXxC2HYDIIFqPcSkyE2LELcWWqUsaVEEAiEAhazWo9%2FM%2Fw%2FGjQPBxHWqzBYZCzBOM7%2FC%2FjdxMy6mRv8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyff2zsCetEdsthkCrcA6%2BUxSvvo9u8OtASXlYcL32lsw%2FmKmCuH77s%2FMkiGs1d6cyL%2Bc8R%2FAx7duqlj2wdW%2FTYBJKcWH6v3vJBEOQlTTgxIwWJJgM0CW97MDp6Z%2B2JTuKI54kReai214gug4QtHEJw%2F8%2B0e78iDvRboqvxOJxUgPryyFzYESD0hQR4Y6f6N3fb36KVroqFgZiBNn6j1Gwmo1revUVXE9ik7TsfusQmygEH2MObwkyY1NGqs7gn1bEOnxn5tGtVHZPW0mqlmlhEjmUjgh87zpWPSSl5MTLFbWFzJ8EqEQfEnI72LobnRs0%2Bhck5pxKhooTApw8x2VwKsI7wlINRVy7j8sPyBDJd0LxQevhf%2FMphcHpxIxMzgo6PJs9XDCJaB6fYWvpVWJNjoTs1mYXPg%2BaKPMU916PQrSWhOCE%2BNrpH9UKyibJwod3CoForcBMOxMuDn%2BbHMYktdzujcmx2tuHlQxjpf%2FT9tjHx2mwmBpfsSnsLDRk9u6cZkjc01YDzVlniM2Ddhs%2FFTIq%2F8w3vY4whcicVck4mfSxPLJHddZqmpVnV0CK2BqhTKvbntOu4jFngQC3AC%2FLbHvOUuolClnD2JDepKa9rgAkPJkf775TegZ%2BZq4KPN18jSmnsRA1ywqazMLuO3skGOqUB5PO1ov78TMt4Rp0n09iCmretxU2Bj5LE2pInRD00gHjgii4AdQyTq%2FGW4%2BErD5NwxxAp1gKvTWX5H1HHuUAFw84qm2502LFGcahgM%2FbRQGwT3NO%2Br8zNTcRMBJ3YwHACrI%2BOYSstQaPZipAp4de4NgPI1aCZij0KpS0RbTEptwHNtprWH%2Be7a63zw0mNEBtGIAkUrwfqDb7NtaOehuuuX7UfSFhp&X-Amz-Signature=0ef8099fea8bc36090ae8b8f8d4007eb591b9243f6603d0e665a41566e75b73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

