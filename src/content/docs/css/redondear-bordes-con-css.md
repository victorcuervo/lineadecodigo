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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7L6LQU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4bdmI7infT%2FGusO2BUEV2PkHl9zMRfYYdIfD9oYbH8gIgOuqBlywy6kvuxudUYrnWx1QfQef4ZKtsbuplYO8LRJUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcV7f7aiCqQBhoXbyrcA5os1%2BJ%2FyPNKWr7MAylP7IY6GPI9v28lPbatFYjaQoArcUVRsqJUFAovQuPTTaYiwfwAGl%2B5xGDWDbfYpfcSSznszFKS3zi1eUddvXI%2BKMxRdJUBDX3pw%2FwHG7gL%2ByaZ5py%2Bq9HtaBUbycZHxQink4iS%2B%2FqTtcHMOcBoulGMqJ043gZEzgPTeA8RUExegvyk3Q5DUY0keY9SNeUuugCXx8g1ruE%2FWE3v7Y4yqICMR0ec251GfluQ2vXHrX9jdgSD2MosJb4cI2M5%2BfVITbK7wDarfyiRK%2BAiyPxOypfMm4Nm9POTYgHuboBjae%2B3PCBG29piA7LNhJF6fK%2Bej5A2FtM4Ruum1pYLUuC4XR3pRwO2BGs%2BqYlutlgtaIlShKktevZG7L5OUnaXRv1Ye6%2FmVE4CdJxGuEK4rrsmwL1ZHp5R7NQGCSWE4ffiVTTM5yanUZT4eHK5ZSOABErnFbI1mRFtkZL4WKXgpikjreVZnCm4IfPDUWfjnUL%2B6kKZw95KtO7x7f6gwU59mcC5xVrmw3fefO%2F72181kVwMgCVRFxv7j8iJBzSaAMTqj2uxOQmAx2I7FU5Ar6%2B9Ea%2BimzmkMvfzotUdylO5IEhawYpbaQCRG8DTBVn5dsaRS5sCMOj%2F3MkGOqUBXHQarpK5gb1iramV6%2FVLjg9ZrXenIiBGqFb%2BK9A87gFrzIL%2FOj5V8%2BL7INSmMjuLgSucPurSe2pEveBOJr9vprr8ko2vje2%2B%2BqyGawyE3SB50qgv94TrcIyGkgpBSIm77ZvgxkIEvttqXvR0G52b7Y4GHLLCQsQKkzCkXMNJBMYG6X1%2Fl6GPVbZhtMLPVWt2RdxE9wqyzCgf27GZjQtyMjJD8ujC&X-Amz-Signature=f5f3fca9f31c5a8c189322595f1568ba11982c3bff05d4dc8fb6bc852c4f94a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7L6LQU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4bdmI7infT%2FGusO2BUEV2PkHl9zMRfYYdIfD9oYbH8gIgOuqBlywy6kvuxudUYrnWx1QfQef4ZKtsbuplYO8LRJUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcV7f7aiCqQBhoXbyrcA5os1%2BJ%2FyPNKWr7MAylP7IY6GPI9v28lPbatFYjaQoArcUVRsqJUFAovQuPTTaYiwfwAGl%2B5xGDWDbfYpfcSSznszFKS3zi1eUddvXI%2BKMxRdJUBDX3pw%2FwHG7gL%2ByaZ5py%2Bq9HtaBUbycZHxQink4iS%2B%2FqTtcHMOcBoulGMqJ043gZEzgPTeA8RUExegvyk3Q5DUY0keY9SNeUuugCXx8g1ruE%2FWE3v7Y4yqICMR0ec251GfluQ2vXHrX9jdgSD2MosJb4cI2M5%2BfVITbK7wDarfyiRK%2BAiyPxOypfMm4Nm9POTYgHuboBjae%2B3PCBG29piA7LNhJF6fK%2Bej5A2FtM4Ruum1pYLUuC4XR3pRwO2BGs%2BqYlutlgtaIlShKktevZG7L5OUnaXRv1Ye6%2FmVE4CdJxGuEK4rrsmwL1ZHp5R7NQGCSWE4ffiVTTM5yanUZT4eHK5ZSOABErnFbI1mRFtkZL4WKXgpikjreVZnCm4IfPDUWfjnUL%2B6kKZw95KtO7x7f6gwU59mcC5xVrmw3fefO%2F72181kVwMgCVRFxv7j8iJBzSaAMTqj2uxOQmAx2I7FU5Ar6%2B9Ea%2BimzmkMvfzotUdylO5IEhawYpbaQCRG8DTBVn5dsaRS5sCMOj%2F3MkGOqUBXHQarpK5gb1iramV6%2FVLjg9ZrXenIiBGqFb%2BK9A87gFrzIL%2FOj5V8%2BL7INSmMjuLgSucPurSe2pEveBOJr9vprr8ko2vje2%2B%2BqyGawyE3SB50qgv94TrcIyGkgpBSIm77ZvgxkIEvttqXvR0G52b7Y4GHLLCQsQKkzCkXMNJBMYG6X1%2Fl6GPVbZhtMLPVWt2RdxE9wqyzCgf27GZjQtyMjJD8ujC&X-Amz-Signature=c2d849b897f69697f5514b8ed3b7da3dd05d5b8813235762e573243a0b91bc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
