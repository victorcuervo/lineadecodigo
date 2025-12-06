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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PISW3RF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEhDWdDNgNb6qjdyI6kDxMPsidX65eyVd5K1n2AVtSaAiEA7OgklNGt1sRbG9m%2BpodFWX9ARH8WvPk34nQpJ%2BNm13sq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKR1lgUAqmZ06L4HSSrcA3%2Bhut%2BfKFdgqb5CO3v2szZ9p3%2BYmcaZMG%2BrTTEk5gIUrKYL65H8e4pvWrNmvi8t%2BBKSNFxf5kOgLnMVYkJtV10IGpFRTR%2FERotxw1cvKlDbakbC6OXNUgFq9kWoRL4ZXVv6UPzityD5Yp%2FdTeUoFZbEdJUl4R3344fP%2B1%2FOdwN67KZO3uFuHodGleyeCWUJ5A8TtLzBwfOHeEFTpskM591Da8FJY9KZXvmxqjdvEXt6tkBeB4M%2B3ZrJHHw2%2BczbnBgGWz2hyomcFeFHCf3sfpokpbiePWkpg5YDfniptGb7gw3%2B5iRYQxAgK8PuHmqIDRsuJX8l8l0AxsIzrBwrtejB%2FkSGcawMPrX14cZx0KlY37woEYQK%2BCi27tO3OBaccBzAfVLtZSrI2JYBmnt%2FAtdCcWcWj5pWZkzQrHqawHSDskxXqrpoSz7rS7uj5fonKD1xSQUmznRDrbEX72nYvzkWAWubRzWDIonVoy6lMJuTHtL0ruQraAH7FP5ir5w17wsoZ4HPFdMf7xUAq3%2BoQqUdf468c8QM903tzVwZ3gyBTENZ2ecFpHAQDf41OW8Dev0ZrajICDAEAZHRE0on%2B08PjE39y2fWJrnUGKWgk3ciAVb0o60jVyLY75HkMN38zskGOqUBMOtOQCxjV%2FfUpEmDehSgRfmhdwXAo8HlJg8EK13Dw1ycEpCu7vVKtlgQC1FRLXtSmmkadhdI2z9W0OLVrsdlH1o7meYTlmCRdlIChFj5w%2Bt7qVEde5doSSi0nNnTcG6aaPwxbUZ3VQpbxkONLjyvgVcQOqhICmHptbTHSj%2B2AShv2%2FHGF0pTTn1dWx0kLgBykSAP3r1p8GCXunS0qpMGKj%2F8loVO&X-Amz-Signature=b14b6ed2edf064f7e35d0a2df960bcde1abd3dbc0bde57c1684387d7474e55bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PISW3RF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEhDWdDNgNb6qjdyI6kDxMPsidX65eyVd5K1n2AVtSaAiEA7OgklNGt1sRbG9m%2BpodFWX9ARH8WvPk34nQpJ%2BNm13sq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKR1lgUAqmZ06L4HSSrcA3%2Bhut%2BfKFdgqb5CO3v2szZ9p3%2BYmcaZMG%2BrTTEk5gIUrKYL65H8e4pvWrNmvi8t%2BBKSNFxf5kOgLnMVYkJtV10IGpFRTR%2FERotxw1cvKlDbakbC6OXNUgFq9kWoRL4ZXVv6UPzityD5Yp%2FdTeUoFZbEdJUl4R3344fP%2B1%2FOdwN67KZO3uFuHodGleyeCWUJ5A8TtLzBwfOHeEFTpskM591Da8FJY9KZXvmxqjdvEXt6tkBeB4M%2B3ZrJHHw2%2BczbnBgGWz2hyomcFeFHCf3sfpokpbiePWkpg5YDfniptGb7gw3%2B5iRYQxAgK8PuHmqIDRsuJX8l8l0AxsIzrBwrtejB%2FkSGcawMPrX14cZx0KlY37woEYQK%2BCi27tO3OBaccBzAfVLtZSrI2JYBmnt%2FAtdCcWcWj5pWZkzQrHqawHSDskxXqrpoSz7rS7uj5fonKD1xSQUmznRDrbEX72nYvzkWAWubRzWDIonVoy6lMJuTHtL0ruQraAH7FP5ir5w17wsoZ4HPFdMf7xUAq3%2BoQqUdf468c8QM903tzVwZ3gyBTENZ2ecFpHAQDf41OW8Dev0ZrajICDAEAZHRE0on%2B08PjE39y2fWJrnUGKWgk3ciAVb0o60jVyLY75HkMN38zskGOqUBMOtOQCxjV%2FfUpEmDehSgRfmhdwXAo8HlJg8EK13Dw1ycEpCu7vVKtlgQC1FRLXtSmmkadhdI2z9W0OLVrsdlH1o7meYTlmCRdlIChFj5w%2Bt7qVEde5doSSi0nNnTcG6aaPwxbUZ3VQpbxkONLjyvgVcQOqhICmHptbTHSj%2B2AShv2%2FHGF0pTTn1dWx0kLgBykSAP3r1p8GCXunS0qpMGKj%2F8loVO&X-Amz-Signature=df9a5a94b6ce02c039aa67cb4b6ad1cd88cc7c68d9090e3d2f49772814d869a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
