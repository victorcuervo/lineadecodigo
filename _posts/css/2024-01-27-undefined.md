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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WW226U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBGdoxn%2FoMxXV%2FlJbVK8CEKqsMrq0o8WF3o2uUgmoyGiAiAN9VrnCTa4VbIeJz9or3yU31ABNIKaAn%2Fjaxv%2FkrfP0ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMq0easXhTSQwbUKBHKtwD2z9yGZWmEJRxonqcZmfB18WoJgDExK%2B4XAelvwcUkSF8ACOjrAsZdIrCqwFsSl9hf%2BU2cfR2GpESsrTti6gZSzF4T0tXhB0ZfBcUsdEjWFv35pOV79GZ4cCi1%2Bg4TrFLGf3KJXrk87GzRMqHYvlVnet1OCR5d2%2FXa%2F1hI15CPJpJm4svCWpb3o%2BC3QKf9uXRuQlubk90vQcmp8XmGcDDOExN6fG3OrW9A1CinbrYMbz0JmgUlknGvInQbVCv2StV%2BoJLwh885Z8kXQr8x3Mh%2BIvm3pWP9XgdN6izFPitpu55WgPqnQEOVm0sEwfg0aUvKmIiBgwuTCHrsgV6mKU7LITwOlMAFJgoiH4XOOkItwkG2nQBuVHb5a0UsionnAhU4bOdV49J1r2401GLPXpxFU1r0OQLKuxpz8O2C7bmJCOfK2k7ihB9yN8zc72qKRVskPYDuwwzJmEgaEyw7CX5o%2FP5b2rAnyYvow87M9mekiX9wu8XxxupJyM2%2BF3oJlG4BdcErAeqqj0yboEVeTVTv38dQN9Nt4xQCsv0HA6kI0gXJWSqaGa1qTayhw1iqLbvO%2BajnifB2IMX5R0nmOGCUyzilmTF5UAqOydFCOHok4ZkyFNDGdX7w1Ugl7gwsojByQY6pgGjzAxRk5VRRhwUqLV5A1u%2F0nDpj3gKlxepi%2B3rYcgt3lG%2FCj3JzlhoMKOMx2jMg6jCNbjN9vSKUjudvKBz4%2BADpxGVEiwR1XKTCTTsOIX2nKalIxqHR39vVYin4uH1PuHqpnpkswYyPQ90Y5BheCJzIOF40JzltqtrZ9wvdUf2jgWzsIZFtQey2m7JCt2uuqMWFZHztO4IQaxjOB9es0aG0DgNo7C0&X-Amz-Signature=7d54ff4b2f273194198689637a5c95a6b02da29869c629e59adcac3b2410d2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WW226U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBGdoxn%2FoMxXV%2FlJbVK8CEKqsMrq0o8WF3o2uUgmoyGiAiAN9VrnCTa4VbIeJz9or3yU31ABNIKaAn%2Fjaxv%2FkrfP0ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMq0easXhTSQwbUKBHKtwD2z9yGZWmEJRxonqcZmfB18WoJgDExK%2B4XAelvwcUkSF8ACOjrAsZdIrCqwFsSl9hf%2BU2cfR2GpESsrTti6gZSzF4T0tXhB0ZfBcUsdEjWFv35pOV79GZ4cCi1%2Bg4TrFLGf3KJXrk87GzRMqHYvlVnet1OCR5d2%2FXa%2F1hI15CPJpJm4svCWpb3o%2BC3QKf9uXRuQlubk90vQcmp8XmGcDDOExN6fG3OrW9A1CinbrYMbz0JmgUlknGvInQbVCv2StV%2BoJLwh885Z8kXQr8x3Mh%2BIvm3pWP9XgdN6izFPitpu55WgPqnQEOVm0sEwfg0aUvKmIiBgwuTCHrsgV6mKU7LITwOlMAFJgoiH4XOOkItwkG2nQBuVHb5a0UsionnAhU4bOdV49J1r2401GLPXpxFU1r0OQLKuxpz8O2C7bmJCOfK2k7ihB9yN8zc72qKRVskPYDuwwzJmEgaEyw7CX5o%2FP5b2rAnyYvow87M9mekiX9wu8XxxupJyM2%2BF3oJlG4BdcErAeqqj0yboEVeTVTv38dQN9Nt4xQCsv0HA6kI0gXJWSqaGa1qTayhw1iqLbvO%2BajnifB2IMX5R0nmOGCUyzilmTF5UAqOydFCOHok4ZkyFNDGdX7w1Ugl7gwsojByQY6pgGjzAxRk5VRRhwUqLV5A1u%2F0nDpj3gKlxepi%2B3rYcgt3lG%2FCj3JzlhoMKOMx2jMg6jCNbjN9vSKUjudvKBz4%2BADpxGVEiwR1XKTCTTsOIX2nKalIxqHR39vVYin4uH1PuHqpnpkswYyPQ90Y5BheCJzIOF40JzltqtrZ9wvdUf2jgWzsIZFtQey2m7JCt2uuqMWFZHztO4IQaxjOB9es0aG0DgNo7C0&X-Amz-Signature=1de056cb374949b4a65fb6552a0f665bb23834adc1c50f1f0961ab283c551d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

