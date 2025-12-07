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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6RL2E6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt9k%2BfN4cEZCRRhHPspPh5vvqDHq7Igqw1OCi1nffH8AiAcPPs%2B4IsBMQlO2YIdFgozGtT8ev%2FWX2WWqqafXo%2BIwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1oemzdo2SUwRSa22KtwDQ0UMbSi1JP3JzO9UDTql2i%2FMKoL6EITBDRFVMRpZ17xdtikr9a%2BaDf6ExdJWQ6uDoJM8Tw0j6z8sZo4%2B4UJnLwzqSIz%2FJv%2BSyH5R2h48eGNM6sLJQ4Q74ProCiVNbdpKGd%2FXjUuS7EbiM%2BWp%2BUJna4h6GH4h3%2Bcu2SLPBl1PBy641EVr1sNMCvIpvg5fhs6AtZL70ULosuLVc7XOZCRHNVFLvGaHecCAusDFLFL782PrV%2FPQGpHHzm627GauVYGe7OYrceo%2BOydHZ6Kagit4ZauWDlQ8kcSdS2fxjKmV0eDRK%2Fu5xbfHqM59mvggWcB6I1i8IOE1ZxYTPLqlopP8pS%2B5dfdXWke%2Brq1hOVxDx2xNZ3XSnyCEirQuUtGmvhP7jWQcErQbWeqKRR3sgXZwXnGMHkhOVWW1s9kB1XSKP8irv%2BmLY99BVayDnG58aRtVwfWD2mIZDgT8jd5G%2B7LMrLLC3puffxHe5FdeRmgcdRzxF6CfQ8BTFCPR1Hcin9GIo9j1Dr3tJFTCMUcWzw0AeI1gpyWawemWnbO6RguK%2BX0%2FY1biFa5A59cmdcuj%2F0CEeYfCWjEJElJC34PZUmYeLCIkd27K%2B0vRMuLrDV79Q%2BFSyd19D%2BrQdyWobaUwvJrVyQY6pgFVBcyexdBTRa7BrygTyz7a2zwY3yQ1n7TSeT0QZkOSTlJgYTvQfBS1ggFwyUvnLyOrAwQvKmKnAOdzFUTf%2F2ckFpBfSSXqv1YsSH9FKg84pN4MGJ%2B0puS8QFrpaHRjgqMpD6wIuNmO6kNaestR0BbUzcSbkvQ2GFu7H3LXGchsYVwkXyEqmcomRhGwJvDHtBs%2FZ12bcm5iWIhNOUvs7LB7WoNLA%2BLl&X-Amz-Signature=721e339d5c74ffba213d0d0849c28629ce31379113d49bfb9c3a95211c214e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6RL2E6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt9k%2BfN4cEZCRRhHPspPh5vvqDHq7Igqw1OCi1nffH8AiAcPPs%2B4IsBMQlO2YIdFgozGtT8ev%2FWX2WWqqafXo%2BIwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1oemzdo2SUwRSa22KtwDQ0UMbSi1JP3JzO9UDTql2i%2FMKoL6EITBDRFVMRpZ17xdtikr9a%2BaDf6ExdJWQ6uDoJM8Tw0j6z8sZo4%2B4UJnLwzqSIz%2FJv%2BSyH5R2h48eGNM6sLJQ4Q74ProCiVNbdpKGd%2FXjUuS7EbiM%2BWp%2BUJna4h6GH4h3%2Bcu2SLPBl1PBy641EVr1sNMCvIpvg5fhs6AtZL70ULosuLVc7XOZCRHNVFLvGaHecCAusDFLFL782PrV%2FPQGpHHzm627GauVYGe7OYrceo%2BOydHZ6Kagit4ZauWDlQ8kcSdS2fxjKmV0eDRK%2Fu5xbfHqM59mvggWcB6I1i8IOE1ZxYTPLqlopP8pS%2B5dfdXWke%2Brq1hOVxDx2xNZ3XSnyCEirQuUtGmvhP7jWQcErQbWeqKRR3sgXZwXnGMHkhOVWW1s9kB1XSKP8irv%2BmLY99BVayDnG58aRtVwfWD2mIZDgT8jd5G%2B7LMrLLC3puffxHe5FdeRmgcdRzxF6CfQ8BTFCPR1Hcin9GIo9j1Dr3tJFTCMUcWzw0AeI1gpyWawemWnbO6RguK%2BX0%2FY1biFa5A59cmdcuj%2F0CEeYfCWjEJElJC34PZUmYeLCIkd27K%2B0vRMuLrDV79Q%2BFSyd19D%2BrQdyWobaUwvJrVyQY6pgFVBcyexdBTRa7BrygTyz7a2zwY3yQ1n7TSeT0QZkOSTlJgYTvQfBS1ggFwyUvnLyOrAwQvKmKnAOdzFUTf%2F2ckFpBfSSXqv1YsSH9FKg84pN4MGJ%2B0puS8QFrpaHRjgqMpD6wIuNmO6kNaestR0BbUzcSbkvQ2GFu7H3LXGchsYVwkXyEqmcomRhGwJvDHtBs%2FZ12bcm5iWIhNOUvs7LB7WoNLA%2BLl&X-Amz-Signature=eed25b37cf45030cb5bfae80cb6410cbb862621d2b8a183a6ca8215d980c09e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
