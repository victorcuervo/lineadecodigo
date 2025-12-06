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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4BLTJX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpZj2rs8YXtIyqu9j5ZfzulEcbrslm3SCdRMq5BPBtgIhAOG4lDIl%2FdhawxMbHpYId%2FaOPhXrUTj2kiF7%2FWADifyPKv8DCG4QABoMNjM3NDIzMTgzODA1Igzc9lO1QJu6bG2BaTUq3AO60V46CGWEXlvtiEvDA%2BNfJWwUPxcvs2M%2B0oJRRok%2Bj2JXu0dAE%2Bno2YyZLp1ZY3GVsRqwuvVzeaEQf5InvX8edDE0rAi6r35Y%2FdzzY705BvbU22gFMNRDTW5AmBWA6n%2BAP25Qat3cB6pUvb9WM%2BgwtzhU%2BaZbDKLgTssehpzOY9Eu2JWfOecZImqQLC5D6%2B23aKXgw03Gxeg0Aa39GMgIwtre4QYdvJb06K%2FwtN%2FhUzABQJC6w9IBl5xTCrnxaan4JQbUom6l6vUn4GNzI8NXNgLXR5NIt%2FvDz9VsdAWPxtmuPfR43TJyZ9V%2FqGv6pSy1w1cbOIgYHnhDHH7MG5ymSK2sEndc5soFs6tPqeGUBO6x%2FcKqH1KPq8RdsajB39i896LcUZD9k%2FQNTOCVMRajoDN4ZWb5NPP4s7%2FNKNleN%2FFG4t%2Bcy8SRQGnWOmOnnvbv3Q2G%2BBptCSs%2Bly%2Fvm4A57p5wlFmbOpSOD7KFPyPTRKd9tCUjyT8Oq3eO%2FTUODY7vVkH5wed%2FIcaoGAVEAgf5sTNSCcXb9wlZWXRjehabxdTWPLu9wh3BY5jAsfygpFyrJ2L5NaZjAGaI7qWEstGeJ6nCpHRBJ8Mes%2FgjMewrPIUVUF3EW5Gu5ZkhnTCv%2Fc7JBjqkAcbVrqj3NCcnnru0ra5F%2B0x84PPCAi8EI3j2i8A0cwOZSorHwwWsM8oqyu3VR9We1co5kmQVjzP%2FKbQ6xGSOQbmw74TnYXAXjczOal03M9ppCbmrH1Wc8L2w5ufG6sVYtRC629LsYI7M4k4gOWHyAyD5%2F4%2BmR3lNk8eU85ylexgFCidWienI1ASfhgBUVuVSnKOB%2Blv8TISTzp4e3Ai8h40udPfo&X-Amz-Signature=beea8fb7d893c9f60e2fd8a8e91b6134dfdd7bec1b8cb12813823defe568c131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4BLTJX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpZj2rs8YXtIyqu9j5ZfzulEcbrslm3SCdRMq5BPBtgIhAOG4lDIl%2FdhawxMbHpYId%2FaOPhXrUTj2kiF7%2FWADifyPKv8DCG4QABoMNjM3NDIzMTgzODA1Igzc9lO1QJu6bG2BaTUq3AO60V46CGWEXlvtiEvDA%2BNfJWwUPxcvs2M%2B0oJRRok%2Bj2JXu0dAE%2Bno2YyZLp1ZY3GVsRqwuvVzeaEQf5InvX8edDE0rAi6r35Y%2FdzzY705BvbU22gFMNRDTW5AmBWA6n%2BAP25Qat3cB6pUvb9WM%2BgwtzhU%2BaZbDKLgTssehpzOY9Eu2JWfOecZImqQLC5D6%2B23aKXgw03Gxeg0Aa39GMgIwtre4QYdvJb06K%2FwtN%2FhUzABQJC6w9IBl5xTCrnxaan4JQbUom6l6vUn4GNzI8NXNgLXR5NIt%2FvDz9VsdAWPxtmuPfR43TJyZ9V%2FqGv6pSy1w1cbOIgYHnhDHH7MG5ymSK2sEndc5soFs6tPqeGUBO6x%2FcKqH1KPq8RdsajB39i896LcUZD9k%2FQNTOCVMRajoDN4ZWb5NPP4s7%2FNKNleN%2FFG4t%2Bcy8SRQGnWOmOnnvbv3Q2G%2BBptCSs%2Bly%2Fvm4A57p5wlFmbOpSOD7KFPyPTRKd9tCUjyT8Oq3eO%2FTUODY7vVkH5wed%2FIcaoGAVEAgf5sTNSCcXb9wlZWXRjehabxdTWPLu9wh3BY5jAsfygpFyrJ2L5NaZjAGaI7qWEstGeJ6nCpHRBJ8Mes%2FgjMewrPIUVUF3EW5Gu5ZkhnTCv%2Fc7JBjqkAcbVrqj3NCcnnru0ra5F%2B0x84PPCAi8EI3j2i8A0cwOZSorHwwWsM8oqyu3VR9We1co5kmQVjzP%2FKbQ6xGSOQbmw74TnYXAXjczOal03M9ppCbmrH1Wc8L2w5ufG6sVYtRC629LsYI7M4k4gOWHyAyD5%2F4%2BmR3lNk8eU85ylexgFCidWienI1ASfhgBUVuVSnKOB%2Blv8TISTzp4e3Ai8h40udPfo&X-Amz-Signature=48e04172b7e848096804ccb373d4ba2ce555b3e4173fc58919972e1958730583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
