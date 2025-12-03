---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KK3PZ6S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDVyUO3dgtIn8hQgrfnbWWDdAkEC3ETcPdhYtOen46ZOQIhAKxVp%2FSVC2VyhdUSHSeWg%2F7FyBzeEaABkE9CtUiSBkeUKv8DCDQQABoMNjM3NDIzMTgzODA1Igy%2BuGN5OZ6G8fMW%2BToq3AMoZU7SVP1HI96Evtg%2BtYEHy4lEvs2JYGcNEztqOmgoy0HtlX8P5oMWwbZBWYGkUp3sZBTmcKQJDEwSnYqN1RWYWmQMYVDqyNJ3MmOnDcV75mQ4LR%2Fl2zDiKSbgwR0aq%2BFTId0WB%2B0in%2F2TBeLtkFqOj5U9R8jVRfpNb7E%2FYUojFFcTAcIwtIq%2BLYyEujlaaYujieGC0ck1KqRFlpw1Pxo5wUWpTQv6br%2B9F3%2FLGgDxJN4GSTVV14oFUwDbyOP8a62U0DG2Uwsk1kT%2Bjj6Eyp6HxxKOsCGDP2%2F4hWfy4xcYQSWWX392SksWO8cbmcw2WFjX09lXtZ7gy7tAp%2B8h%2FYSyJLfUwY6ImF86eTFhag9adE0ad%2BL%2BNE0Y%2BvNjQFbEcTcukmHitafzZtB858pvd%2BBLJ9spXd%2BHsejXGbQUOHrLzMbvS7kTCTaRe7sl3FYtUSR4JN%2FGw6zdwICoUYkFxFuHAkL2xKfyHIxeHyO7UUjWKkOdFlEKD3SdOBXTTiTogq9u58masW4eju4HKQmhsAmU%2BfjfrfLa2rCV10y4PSpdOW8U83T6xD3vEU2TK00rqxE5DIUqgIZSUvFjhLLVYSQD1ptWWjh1uZBcSA4OeYJo%2BgEDC1ZVQfEeELDbazC0kcLJBjqkAeaw9HmXPwmGnOSB7JO9y00KtFivYAX2O1bEzrwrrfrS%2FF2N0jeEV507Ofgz8JuD2RCBHiUrtOXd4YLIOomAWPS4O81nrCJtcYTcYCPR0qyMW1wsLBM%2F6wfDLIv9t4QGaVPMNeCSfwPeUaYMoEBuGS2r%2BsKntfNtPYWvhliOWKQCvVWBYak%2BhkS9deGzq4q8w9gc%2Fwwb63%2BnpHh5WexRsMK%2FD750&X-Amz-Signature=ce22a277382d47612cdbe7f25d1555d0fc402272bf8ea5514070ec7640e9a253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KK3PZ6S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDVyUO3dgtIn8hQgrfnbWWDdAkEC3ETcPdhYtOen46ZOQIhAKxVp%2FSVC2VyhdUSHSeWg%2F7FyBzeEaABkE9CtUiSBkeUKv8DCDQQABoMNjM3NDIzMTgzODA1Igy%2BuGN5OZ6G8fMW%2BToq3AMoZU7SVP1HI96Evtg%2BtYEHy4lEvs2JYGcNEztqOmgoy0HtlX8P5oMWwbZBWYGkUp3sZBTmcKQJDEwSnYqN1RWYWmQMYVDqyNJ3MmOnDcV75mQ4LR%2Fl2zDiKSbgwR0aq%2BFTId0WB%2B0in%2F2TBeLtkFqOj5U9R8jVRfpNb7E%2FYUojFFcTAcIwtIq%2BLYyEujlaaYujieGC0ck1KqRFlpw1Pxo5wUWpTQv6br%2B9F3%2FLGgDxJN4GSTVV14oFUwDbyOP8a62U0DG2Uwsk1kT%2Bjj6Eyp6HxxKOsCGDP2%2F4hWfy4xcYQSWWX392SksWO8cbmcw2WFjX09lXtZ7gy7tAp%2B8h%2FYSyJLfUwY6ImF86eTFhag9adE0ad%2BL%2BNE0Y%2BvNjQFbEcTcukmHitafzZtB858pvd%2BBLJ9spXd%2BHsejXGbQUOHrLzMbvS7kTCTaRe7sl3FYtUSR4JN%2FGw6zdwICoUYkFxFuHAkL2xKfyHIxeHyO7UUjWKkOdFlEKD3SdOBXTTiTogq9u58masW4eju4HKQmhsAmU%2BfjfrfLa2rCV10y4PSpdOW8U83T6xD3vEU2TK00rqxE5DIUqgIZSUvFjhLLVYSQD1ptWWjh1uZBcSA4OeYJo%2BgEDC1ZVQfEeELDbazC0kcLJBjqkAeaw9HmXPwmGnOSB7JO9y00KtFivYAX2O1bEzrwrrfrS%2FF2N0jeEV507Ofgz8JuD2RCBHiUrtOXd4YLIOomAWPS4O81nrCJtcYTcYCPR0qyMW1wsLBM%2F6wfDLIv9t4QGaVPMNeCSfwPeUaYMoEBuGS2r%2BsKntfNtPYWvhliOWKQCvVWBYak%2BhkS9deGzq4q8w9gc%2Fwwb63%2BnpHh5WexRsMK%2FD750&X-Amz-Signature=58a66f33fcb226a461aaf1f4c4aa26d20016cee706b3a4f287ac440caa5abd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
