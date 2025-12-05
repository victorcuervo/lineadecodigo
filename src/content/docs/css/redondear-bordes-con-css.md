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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWRWIQ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVFE8uCiUWzHbWM1AuXspkW5hH8mtQpsfEz1JAqzJcSAiAtQsL6nJQz9wRrceBAg2ZvPZ0FL0HnwmB6Fw3iUl77gCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMUO3OBsIUWlzi1e8PKtwDr8zpeP7UT6YO31ql3qXokR1Tz3CiQe69UbTOVSltTMXpGHIixnqZsv%2F01Jhf6aCHi6Rwjf%2FMlotQ0Gxshq7ctaCglOp%2FDHWu%2BZarGE%2BNQD0lOUjorpHy9nrkAQ9xrxTwsv5bqAhf44RnFYDUhCxugvT%2FZQQolDnHUBG4j8edu6FwDasOD0Iwdvq%2BsNRDEwSFgthSTSj01og90OB4wPFnpr2gZPtxZIKzGpas4JOniaE2Ay4yUpwd%2FV1LCTHUjGiC3v831sRXv4d%2BoTYRynmebceRerXKGtjf3%2BtKRcLkwGRffq6ahBP1CIY76R%2BbiRLZPykkHMrNClL7l7PETdDzdnmZ9a2sLtBTkw%2BlHxSyPG8w1UorKauiGKSysZ9BeI3iBZEvuHdgewSZ76U9EPpmPFAr4tZJ60gPn3Cc0ygA4em6Os%2FX2l1yP0F5FrtWPquV%2BBszM9Z%2FKEGxwMH387mkmAOfvFsSXVAUziXYNfkEQBPb%2Fiui7GjVSyoSjTTuZ5b0cIYOUr9Yfda0%2Bzq1oaSl8WG6t%2BG1mav7clVvkj%2FUKPveBrQ%2Bir6yazv%2BvhDTbLTqLYTmHW4grN5422HAqYXxYv%2BZtkW%2BEjFnHlLQuw0A64pJf1HO0%2BT99DEM2%2Fsw3%2BzLyQY6pgEyNI0%2BVfcLTMpUv%2BA2szVFekrilj5i0OGtQcILQhAneHEF4pxDoYijXO5WkPo3nKDj8M7UPYIXsSeznIvSo183eA1las4M0Paxqgk2Brc3JkaP5yJfqMZqrKip13qHtTWdSh11YkYr6o8kzuME2rUoAPq2muec0d4ZGLRMc260D88yynYz%2FknEes%2Bfs600eeM5KYSlbUT7WxI2sJL%2FJ%2BGIBfi2aok3&X-Amz-Signature=68c86d60699ff5063d7bc12284ee928d0b4b9c62d5f21bdb7fd196daa2b9a1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWRWIQ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVFE8uCiUWzHbWM1AuXspkW5hH8mtQpsfEz1JAqzJcSAiAtQsL6nJQz9wRrceBAg2ZvPZ0FL0HnwmB6Fw3iUl77gCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMUO3OBsIUWlzi1e8PKtwDr8zpeP7UT6YO31ql3qXokR1Tz3CiQe69UbTOVSltTMXpGHIixnqZsv%2F01Jhf6aCHi6Rwjf%2FMlotQ0Gxshq7ctaCglOp%2FDHWu%2BZarGE%2BNQD0lOUjorpHy9nrkAQ9xrxTwsv5bqAhf44RnFYDUhCxugvT%2FZQQolDnHUBG4j8edu6FwDasOD0Iwdvq%2BsNRDEwSFgthSTSj01og90OB4wPFnpr2gZPtxZIKzGpas4JOniaE2Ay4yUpwd%2FV1LCTHUjGiC3v831sRXv4d%2BoTYRynmebceRerXKGtjf3%2BtKRcLkwGRffq6ahBP1CIY76R%2BbiRLZPykkHMrNClL7l7PETdDzdnmZ9a2sLtBTkw%2BlHxSyPG8w1UorKauiGKSysZ9BeI3iBZEvuHdgewSZ76U9EPpmPFAr4tZJ60gPn3Cc0ygA4em6Os%2FX2l1yP0F5FrtWPquV%2BBszM9Z%2FKEGxwMH387mkmAOfvFsSXVAUziXYNfkEQBPb%2Fiui7GjVSyoSjTTuZ5b0cIYOUr9Yfda0%2Bzq1oaSl8WG6t%2BG1mav7clVvkj%2FUKPveBrQ%2Bir6yazv%2BvhDTbLTqLYTmHW4grN5422HAqYXxYv%2BZtkW%2BEjFnHlLQuw0A64pJf1HO0%2BT99DEM2%2Fsw3%2BzLyQY6pgEyNI0%2BVfcLTMpUv%2BA2szVFekrilj5i0OGtQcILQhAneHEF4pxDoYijXO5WkPo3nKDj8M7UPYIXsSeznIvSo183eA1las4M0Paxqgk2Brc3JkaP5yJfqMZqrKip13qHtTWdSh11YkYr6o8kzuME2rUoAPq2muec0d4ZGLRMc260D88yynYz%2FknEes%2Bfs600eeM5KYSlbUT7WxI2sJL%2FJ%2BGIBfi2aok3&X-Amz-Signature=4fbc82ce81433e25fddcef17e19c2cd39c620cdefd99b4d051d789c8f93fde06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
