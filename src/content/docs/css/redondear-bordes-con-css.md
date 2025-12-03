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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAZAYVZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGc98JLEaPiBdKkT6tUstd2bB%2BIh%2Fdia46XaUqjpRrl9AiB8k2aKG%2F%2FtiErx6P7ckJKByECvR9CaCKxyH%2BAnsVTIyCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMQL1Utwk9UegF7WGEKtwDBGiFVUofDMThFENCLVc8xXkiiJjyjXGinYDiYjOl33BzYpbrUl7BvnsuM6a%2FklnQ41pqnl%2FFoayjkfUBVrDi%2FOUHrsNCgewNKKyssTPp5bvETFffkG3jKf%2BS2jH3rGNYrgK29PKHM5Skt9TXfsUIw4%2BzHFzl59pcz6UdnS2LO0fmaDLoS7yBzNF0oRqaLj6CcPN5tn9r8ScCtmX1siSVAkM7Z1vJL37SbhufSC86hC250LY0zOzMa182YGGhQHealz%2FKi70%2Be9FMoYGZT7l5dHTeFUAnNoUJaXDko5tOju3GTX6uibA8utxSzp%2Fq13%2FtYehWlMQpvTCbpPXbjj%2FP3%2BVzHFBP3T%2FEZMTtLmsjaUph6CUeqFM4E%2BbeICzfJatuZZxpyUG7W%2FaBT1e%2Bt7Ackbv%2FYp4jTbNu055ajltTMwM7nJ2ix0K8kgFKYLIVURkN8qBrvza00yMCWKWtx3Kkwy3EBevkrJ3IDnok%2BSXK4uUK%2B0S7ZoSn0rgRou23wn9l5Q4MU4Q2%2B%2FuwYNkCoB5VDm1AhQT%2FQWPoe6HmdPiUIaPPmtd2ccAwv8URiEYWuAxwtZi7LwTwRUgNybuRI%2BkF0LEeof3ZTADI2F1UhoIraz%2FoRyrBkymU7uB7b0Qw%2BNzCyQY6pgHOlu9arLaA1jztd9V7r97%2Bp%2FRvGFzKmhe588RUCbnojgAvdUjJi1PspPsVIWoxsXqbewdvIiSQSjiI9toiFhTEu1PV5Gx2LI1nIbROsK6k7QrTrg0VjsSRTwO7ofSjTLAG1D4bgbu9gz2CyF2pcOR9YJrVMseASWbF%2B1%2FmEPDj5nGR9Ky1PxkewAB8oj9JWLXA1czYo%2FX9FT%2BTwqFAiKqjgu0M0Ivm&X-Amz-Signature=89665e7bdaf338e8ae88e46ed27bfbbabf716f1586cf04938da55bf77be7fd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAZAYVZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGc98JLEaPiBdKkT6tUstd2bB%2BIh%2Fdia46XaUqjpRrl9AiB8k2aKG%2F%2FtiErx6P7ckJKByECvR9CaCKxyH%2BAnsVTIyCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMQL1Utwk9UegF7WGEKtwDBGiFVUofDMThFENCLVc8xXkiiJjyjXGinYDiYjOl33BzYpbrUl7BvnsuM6a%2FklnQ41pqnl%2FFoayjkfUBVrDi%2FOUHrsNCgewNKKyssTPp5bvETFffkG3jKf%2BS2jH3rGNYrgK29PKHM5Skt9TXfsUIw4%2BzHFzl59pcz6UdnS2LO0fmaDLoS7yBzNF0oRqaLj6CcPN5tn9r8ScCtmX1siSVAkM7Z1vJL37SbhufSC86hC250LY0zOzMa182YGGhQHealz%2FKi70%2Be9FMoYGZT7l5dHTeFUAnNoUJaXDko5tOju3GTX6uibA8utxSzp%2Fq13%2FtYehWlMQpvTCbpPXbjj%2FP3%2BVzHFBP3T%2FEZMTtLmsjaUph6CUeqFM4E%2BbeICzfJatuZZxpyUG7W%2FaBT1e%2Bt7Ackbv%2FYp4jTbNu055ajltTMwM7nJ2ix0K8kgFKYLIVURkN8qBrvza00yMCWKWtx3Kkwy3EBevkrJ3IDnok%2BSXK4uUK%2B0S7ZoSn0rgRou23wn9l5Q4MU4Q2%2B%2FuwYNkCoB5VDm1AhQT%2FQWPoe6HmdPiUIaPPmtd2ccAwv8URiEYWuAxwtZi7LwTwRUgNybuRI%2BkF0LEeof3ZTADI2F1UhoIraz%2FoRyrBkymU7uB7b0Qw%2BNzCyQY6pgHOlu9arLaA1jztd9V7r97%2Bp%2FRvGFzKmhe588RUCbnojgAvdUjJi1PspPsVIWoxsXqbewdvIiSQSjiI9toiFhTEu1PV5Gx2LI1nIbROsK6k7QrTrg0VjsSRTwO7ofSjTLAG1D4bgbu9gz2CyF2pcOR9YJrVMseASWbF%2B1%2FmEPDj5nGR9Ky1PxkewAB8oj9JWLXA1czYo%2FX9FT%2BTwqFAiKqjgu0M0Ivm&X-Amz-Signature=72c6d58aff00e3ad7727b3beee69f2bd9a0cacf9dc6b3e93035b471b375b7520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
