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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSOPRTLS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7oMmgAW26FyCd9E%2BECi1ieAJlpSl9X%2BJkogy%2FRyhktAiEA%2Fc1UMMA98%2BJLlQvIcxayqZzrtLk5EAM5GvRtdrXpoAYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJHQGaV83jLsefs3BSrcA9LOh2eslOK6R%2FmG%2BJn0Ey2bnBgYTNiR78L191ejdJGgS1ez0DMWD%2BUDBB9zjAlvSMMSDMOcQjIPwx6JwalfOPxoXxCjjoIYLxD%2FdOY8EQXbKQJl%2Bo5xkE6CPOjGwbiAczWixjtBoZkW%2BTldsDHNw6qmZ8N1lRfCrTVmcH6vUujCMii4WvHwsAzOMEdNafBtyzD%2Bb4lUaB0TXnFLE4ilHlynkqb9%2FkTjq0s0lRiZsXWtTpzpDEr%2BEhTd2yo4rq1xPoNIVaLFpBobWS4t0B2wJaIn0oRyRC051MUSiYozP%2F%2B%2B%2B08QM5MkFy0OBkQREsS7FeSsAqGwQRw2aqMgvvED8534JkPrHs7Jd4zbEPHJtUMp1B0orJzLiT%2Fvv8rz3SedmCkEsayBYceoyk3j5G0t8L6YKh5fbkJ%2Fof6Lg7gK1eFZaef0rsG7cT1JrKOaWV3%2BBWRScwdtwwKnWEktWepIog5nnAPHxsmNLn5V3RZ1DVBnrKKC27mtQRfGdkJNKYTYwVIPmwC0PUI2BBuMT9Vo%2FnyGCL7z11APCXOPiKon2dCbi%2FiTtvbCk4CVdz6uzDz0vmlI2mx2p%2Bv1amSolODCcBmiD7qMql6ULGY5sJKYlrYegR6u49f1feXWgo2IMIPF0ckGOqUBSN3f2wFmMHRTTLbLnkJQ4h%2BiqwYXoJT0JF6%2F8zA2pYe3CcZvuqwToCfcFlALBg26hhoyCYUgDc2nthRcYRKs40ty9TDArQF6L7sokzU3ieHEYoEwvzNHQaVjQSbyhlBaB6T%2BMYpScY9DslaDZEUbePM5e1dz9PxI%2BIfv0f%2BnmTOgH8AoErFGwUdor09noHrbQJ8xxZkL37w%2B173KlfLafpzFvI8h&X-Amz-Signature=1edb72b28847e98f4dd82d5341f0193096feaf48f89b4075c14cef16c1c5b07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSOPRTLS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7oMmgAW26FyCd9E%2BECi1ieAJlpSl9X%2BJkogy%2FRyhktAiEA%2Fc1UMMA98%2BJLlQvIcxayqZzrtLk5EAM5GvRtdrXpoAYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJHQGaV83jLsefs3BSrcA9LOh2eslOK6R%2FmG%2BJn0Ey2bnBgYTNiR78L191ejdJGgS1ez0DMWD%2BUDBB9zjAlvSMMSDMOcQjIPwx6JwalfOPxoXxCjjoIYLxD%2FdOY8EQXbKQJl%2Bo5xkE6CPOjGwbiAczWixjtBoZkW%2BTldsDHNw6qmZ8N1lRfCrTVmcH6vUujCMii4WvHwsAzOMEdNafBtyzD%2Bb4lUaB0TXnFLE4ilHlynkqb9%2FkTjq0s0lRiZsXWtTpzpDEr%2BEhTd2yo4rq1xPoNIVaLFpBobWS4t0B2wJaIn0oRyRC051MUSiYozP%2F%2B%2B%2B08QM5MkFy0OBkQREsS7FeSsAqGwQRw2aqMgvvED8534JkPrHs7Jd4zbEPHJtUMp1B0orJzLiT%2Fvv8rz3SedmCkEsayBYceoyk3j5G0t8L6YKh5fbkJ%2Fof6Lg7gK1eFZaef0rsG7cT1JrKOaWV3%2BBWRScwdtwwKnWEktWepIog5nnAPHxsmNLn5V3RZ1DVBnrKKC27mtQRfGdkJNKYTYwVIPmwC0PUI2BBuMT9Vo%2FnyGCL7z11APCXOPiKon2dCbi%2FiTtvbCk4CVdz6uzDz0vmlI2mx2p%2Bv1amSolODCcBmiD7qMql6ULGY5sJKYlrYegR6u49f1feXWgo2IMIPF0ckGOqUBSN3f2wFmMHRTTLbLnkJQ4h%2BiqwYXoJT0JF6%2F8zA2pYe3CcZvuqwToCfcFlALBg26hhoyCYUgDc2nthRcYRKs40ty9TDArQF6L7sokzU3ieHEYoEwvzNHQaVjQSbyhlBaB6T%2BMYpScY9DslaDZEUbePM5e1dz9PxI%2BIfv0f%2BnmTOgH8AoErFGwUdor09noHrbQJ8xxZkL37w%2B173KlfLafpzFvI8h&X-Amz-Signature=6feff59aa43091cf2e7c2394146536180370da79dfe52c22db7ec1fa27337845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
