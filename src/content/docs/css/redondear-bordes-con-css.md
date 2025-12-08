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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4JCPYO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F6iWOCKqym3iYgcU95R7qsCdFu2%2BmvnRmaqmo8yithAiACc5%2FxM7WtNd8901J0Myxylu8ZkHEC7ojOK%2FH33PP6bCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMihsgMNPStLjuYWeFKtwDfV5yYB%2BCle8e7qaRqAYPV%2BSPvJawE3l%2F%2BqmiWULiEucNpEHoOgQHEGakvN2BDFtw%2FSfWVBC%2FNES2SIRvSMiv9bHtQlBpAPbjgfckt1%2FRNoYvB7Mzu%2FZxSvAOtMbcxAcXUSYD%2FYyxHFoI0tn3sZdVj0gySOItNdw6AblmWyAKw92r5a9qrV1LRMgatEZ%2BnyTiuehddXko0AQB0QufNaMI%2FIo8tKDWdq60DH7f4PlAp7xksGGPUki4CDu%2BT8y5QjMmjZOUcmLong1C0ChUSEe9xhRma5Ecnoa8VCRIA6miIixtqRVaMz0hq4p8c1dkszGDdqmYSPl%2FcFakVawTUTtIv75e55WpErIQWOWqk221Rh%2B%2Biabbr1NDP9jZiWnibECQAM6DGQVr5cxmRTn1IHTYi7S%2FOS05XJBPsze9wNC0wc7L7xlYYy5ssLF7qxJy5kzJsI5OLRTy9Rrtd0u75tfOFfqSlFCGMjdo3Eg8yPJgnnwxYNdXIEgdNGQ8y8wu30OeQH6IxRKTeQ%2FAUj7hdOqaX%2FZNOKZZZ6a1pBrfX1ARtBI8ffaMNKCsU0nGuXS9sErjxh9%2BzTs9o5%2FNP7hnWtkmXnUta7RefqCSQAL8Qy5EaaDyFNoTiHvJQa3lbHswuu7ZyQY6pgEfv7eg8GcCDkP8jDBOx7wdTda8hgj0yiNihgu16j5OQLzIfoSAOVpesS0%2B59pCmQ3GSbUF5Hezk3fkxfT97pMJ%2FMsV7tCqSLb75TofRxgzZRGcmF3xLqjJbVgJC%2BFkPHA%2Bo3i3pt57ZxFOVNAdHAFvpUWOMpmEL9gBssbCM0noHVeu%2Fe4i4cvqKbIltZd1PavU4Z%2FNZKY45vNW4oDs3eS7R5UCyRPq&X-Amz-Signature=93ad6a4c58826584e46c3b12b22f944ee46a660eef16c72ffd71b3185e3993e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4JCPYO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F6iWOCKqym3iYgcU95R7qsCdFu2%2BmvnRmaqmo8yithAiACc5%2FxM7WtNd8901J0Myxylu8ZkHEC7ojOK%2FH33PP6bCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMihsgMNPStLjuYWeFKtwDfV5yYB%2BCle8e7qaRqAYPV%2BSPvJawE3l%2F%2BqmiWULiEucNpEHoOgQHEGakvN2BDFtw%2FSfWVBC%2FNES2SIRvSMiv9bHtQlBpAPbjgfckt1%2FRNoYvB7Mzu%2FZxSvAOtMbcxAcXUSYD%2FYyxHFoI0tn3sZdVj0gySOItNdw6AblmWyAKw92r5a9qrV1LRMgatEZ%2BnyTiuehddXko0AQB0QufNaMI%2FIo8tKDWdq60DH7f4PlAp7xksGGPUki4CDu%2BT8y5QjMmjZOUcmLong1C0ChUSEe9xhRma5Ecnoa8VCRIA6miIixtqRVaMz0hq4p8c1dkszGDdqmYSPl%2FcFakVawTUTtIv75e55WpErIQWOWqk221Rh%2B%2Biabbr1NDP9jZiWnibECQAM6DGQVr5cxmRTn1IHTYi7S%2FOS05XJBPsze9wNC0wc7L7xlYYy5ssLF7qxJy5kzJsI5OLRTy9Rrtd0u75tfOFfqSlFCGMjdo3Eg8yPJgnnwxYNdXIEgdNGQ8y8wu30OeQH6IxRKTeQ%2FAUj7hdOqaX%2FZNOKZZZ6a1pBrfX1ARtBI8ffaMNKCsU0nGuXS9sErjxh9%2BzTs9o5%2FNP7hnWtkmXnUta7RefqCSQAL8Qy5EaaDyFNoTiHvJQa3lbHswuu7ZyQY6pgEfv7eg8GcCDkP8jDBOx7wdTda8hgj0yiNihgu16j5OQLzIfoSAOVpesS0%2B59pCmQ3GSbUF5Hezk3fkxfT97pMJ%2FMsV7tCqSLb75TofRxgzZRGcmF3xLqjJbVgJC%2BFkPHA%2Bo3i3pt57ZxFOVNAdHAFvpUWOMpmEL9gBssbCM0noHVeu%2Fe4i4cvqKbIltZd1PavU4Z%2FNZKY45vNW4oDs3eS7R5UCyRPq&X-Amz-Signature=8d9f90b2d19a14528c07fbd98832ec37e9a7bffbd9891ab73cb54f0a6a873729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
