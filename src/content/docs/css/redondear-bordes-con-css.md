---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G434EZM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdJzJWRVBjQlxRIOYNPV7CAFdzVr00CSa%2BXEfnsDVciAIhAJW70d4WjySmLtHUxACYqCizh3e9Huh%2Fl9RhrTA%2FeITNKv8DCHUQABoMNjM3NDIzMTgzODA1IgyffwawurssyAL%2BPSsq3AMpsvtj21GaZm6Wuu2wwpzDUt%2FgEMyw4p5idBwDz99mwvOEuHnMIGJFNSryeRc608eWx0Uq2u9o6e6nh4HANOhqOri6aPrxEGr0ewsFFWwc4Y9hcGB4cO1zIjgEsDcVPz7wWHsrcByeTA9yNBkwDVKHIlqxzNceMI%2FsgLer0YywWlSvBYaoXbdZ%2BQt4W96%2BNFUjyEiZUTT%2BWlS6p1IJpZG0A3z9WZHKbFQ%2BGgBJXUrS5cy%2FQd9S3LlqKhriHsOnvuvadXUxF02wtAMTDHJYS%2FgOpN2jHDXMn9iIB37iOU67LAMaMUaYA993oMl6zCr8fRl93bN1QJxdV8LOMSucjh3ZyCM74YMexTDRTk7lijlHyHlASLlcUAYV%2BxPMWCHv6HnMSydIXBx2Y%2BRN3cvDdnopg9wVBNyIVXwOiQFmVm2g47PwS6EdOcm%2FXBGTwI%2B0cLgS%2FzWw5cVqrbYjY7RqrFHvp3XHT0m7AtzuYA7Y7e9jrokHD4Xt%2BHqqYmd%2F33wCo8VknqydxQC0Nu67Rx7uxrS2jAABCvNAS1g064fGs1wBu6%2BVtgvRumJQYjV33oVAg7JbJF6tQRVxR35fW7yZie%2FPDvQ%2Ba51commep7vukfrVEM11cGZ4NLC%2F%2B9ZxQTDNptDJBjqkAXT948kIh6mySBKmkAybthGQJgsTBI2%2FJFr0SbDfIQKk24hja4Z4JFf0ms7iyvd7xnritgkR110lZn4qhdh0oDnNb%2BiUWvNvO8XmsS3Zu8vpeus%2B6r6SMdI6J4gN5ceLN8TED%2BVgbisGMisvBt1sdqfkrFs98sysLT9qnLC8AGI2EBru1cFhQieVz%2BXvAto9TSbmhosn75NvDhtjlLo0Eqd4NuDY&X-Amz-Signature=8f6eb9952f95049980bb5892ca0f793355cb57658e58408d4d6449a034530776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G434EZM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdJzJWRVBjQlxRIOYNPV7CAFdzVr00CSa%2BXEfnsDVciAIhAJW70d4WjySmLtHUxACYqCizh3e9Huh%2Fl9RhrTA%2FeITNKv8DCHUQABoMNjM3NDIzMTgzODA1IgyffwawurssyAL%2BPSsq3AMpsvtj21GaZm6Wuu2wwpzDUt%2FgEMyw4p5idBwDz99mwvOEuHnMIGJFNSryeRc608eWx0Uq2u9o6e6nh4HANOhqOri6aPrxEGr0ewsFFWwc4Y9hcGB4cO1zIjgEsDcVPz7wWHsrcByeTA9yNBkwDVKHIlqxzNceMI%2FsgLer0YywWlSvBYaoXbdZ%2BQt4W96%2BNFUjyEiZUTT%2BWlS6p1IJpZG0A3z9WZHKbFQ%2BGgBJXUrS5cy%2FQd9S3LlqKhriHsOnvuvadXUxF02wtAMTDHJYS%2FgOpN2jHDXMn9iIB37iOU67LAMaMUaYA993oMl6zCr8fRl93bN1QJxdV8LOMSucjh3ZyCM74YMexTDRTk7lijlHyHlASLlcUAYV%2BxPMWCHv6HnMSydIXBx2Y%2BRN3cvDdnopg9wVBNyIVXwOiQFmVm2g47PwS6EdOcm%2FXBGTwI%2B0cLgS%2FzWw5cVqrbYjY7RqrFHvp3XHT0m7AtzuYA7Y7e9jrokHD4Xt%2BHqqYmd%2F33wCo8VknqydxQC0Nu67Rx7uxrS2jAABCvNAS1g064fGs1wBu6%2BVtgvRumJQYjV33oVAg7JbJF6tQRVxR35fW7yZie%2FPDvQ%2Ba51commep7vukfrVEM11cGZ4NLC%2F%2B9ZxQTDNptDJBjqkAXT948kIh6mySBKmkAybthGQJgsTBI2%2FJFr0SbDfIQKk24hja4Z4JFf0ms7iyvd7xnritgkR110lZn4qhdh0oDnNb%2BiUWvNvO8XmsS3Zu8vpeus%2B6r6SMdI6J4gN5ceLN8TED%2BVgbisGMisvBt1sdqfkrFs98sysLT9qnLC8AGI2EBru1cFhQieVz%2BXvAto9TSbmhosn75NvDhtjlLo0Eqd4NuDY&X-Amz-Signature=6a17cd8ce07662cad4db941828782870bc29f60c20e77b904523f491fc8afbaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
