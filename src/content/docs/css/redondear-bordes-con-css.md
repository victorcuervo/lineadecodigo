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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P6DWET%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXyRv9KisNGQ95NN4VnUMKEUKuRpdheBuTWQJVs68%2FggIhALAhyDC04etHOYqDQKwZyZ4ZFgMNdQDFgxt5VJVv%2BC9cKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIV%2FIAFOcCH9dRfiQq3AMjCaGpTJX3ee8rVOn%2Fv0%2BK86aTsDZ9v%2Fkl9aQezCk3hqfOL5T66WpUZFpvl6VYW2CwPtjZA%2FGufgqDP5ydykToltvCP%2Bg6Bj5UYeqgyoLICKFJB63BdPxUTU3QeJHSfYzxVTo%2B9SgKg%2FjXe0%2FZSkcm0uGgQ3I3BVuiznI8U9fmWRW%2BUNFknbEcSWHtbBLsuHOxyL%2BraJBdbz0g0AJkFfBDakX5VYw5v4%2BLeo8kGpIex338eESGoaFYazfsA7CfU6szooUacFvKtpBGAenra7aCp%2B0hqpTxTKZX2EpJel9FL6tqWZZZWxzx%2B3t%2BtNcNnw0rNgYsmrHam4N3Ksu5m0SLJtbUEBo7AZxLPCkiZ1YwngTcD0ItUzu79m1DAu4ylA0WFjQgt1c67ecf54FIQ9NrrcnpNK9%2FKfHb88sZ9rNmxSjN0tJQKC2BiSsm2pqbMEHfcpcrbh9kSAcnL4%2Bz3zA6SqxH%2Bvy%2F0WQaCN1tDeKHjCiwBAtluwwZORA12Qsr3cwK5df0OcJ61VhhVekDpY93ZUWyj%2B%2BrzwjIkMmqWibYTwVYG31eY5CaNn21HPQoVKwDkDClgi0QmwS5PfRb8NCJOwH64cnGuUKW9jPG2pAQ%2Fenv%2FH4taxruUpPgITD%2B6d3JBjqkAfQB8owl7%2FiaOO19wHg8vTb8EBrkIMnQzDGfezNXVBFdqZVMHh6CM7urpQ%2BI9anKS28R%2BwFOwQs2FEO%2Fw6%2FLYpl1gP5eS61L5HnflLHrpDvAe37cvsnS%2FPCaiqTKzYuOXY5brdm9Io9XE6rGayJwYTm3hbePBdMj6o%2FypxCFUjYWJ5Q4TzRijdiDAU5kYdDqsN7MGITMaUeV1HN%2Ba3v4r1A9CpCm&X-Amz-Signature=b5b41a5899f4a3567e14689c42286bb057ee64712b086aa05a223e6a5f5e0927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P6DWET%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXyRv9KisNGQ95NN4VnUMKEUKuRpdheBuTWQJVs68%2FggIhALAhyDC04etHOYqDQKwZyZ4ZFgMNdQDFgxt5VJVv%2BC9cKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIV%2FIAFOcCH9dRfiQq3AMjCaGpTJX3ee8rVOn%2Fv0%2BK86aTsDZ9v%2Fkl9aQezCk3hqfOL5T66WpUZFpvl6VYW2CwPtjZA%2FGufgqDP5ydykToltvCP%2Bg6Bj5UYeqgyoLICKFJB63BdPxUTU3QeJHSfYzxVTo%2B9SgKg%2FjXe0%2FZSkcm0uGgQ3I3BVuiznI8U9fmWRW%2BUNFknbEcSWHtbBLsuHOxyL%2BraJBdbz0g0AJkFfBDakX5VYw5v4%2BLeo8kGpIex338eESGoaFYazfsA7CfU6szooUacFvKtpBGAenra7aCp%2B0hqpTxTKZX2EpJel9FL6tqWZZZWxzx%2B3t%2BtNcNnw0rNgYsmrHam4N3Ksu5m0SLJtbUEBo7AZxLPCkiZ1YwngTcD0ItUzu79m1DAu4ylA0WFjQgt1c67ecf54FIQ9NrrcnpNK9%2FKfHb88sZ9rNmxSjN0tJQKC2BiSsm2pqbMEHfcpcrbh9kSAcnL4%2Bz3zA6SqxH%2Bvy%2F0WQaCN1tDeKHjCiwBAtluwwZORA12Qsr3cwK5df0OcJ61VhhVekDpY93ZUWyj%2B%2BrzwjIkMmqWibYTwVYG31eY5CaNn21HPQoVKwDkDClgi0QmwS5PfRb8NCJOwH64cnGuUKW9jPG2pAQ%2Fenv%2FH4taxruUpPgITD%2B6d3JBjqkAfQB8owl7%2FiaOO19wHg8vTb8EBrkIMnQzDGfezNXVBFdqZVMHh6CM7urpQ%2BI9anKS28R%2BwFOwQs2FEO%2Fw6%2FLYpl1gP5eS61L5HnflLHrpDvAe37cvsnS%2FPCaiqTKzYuOXY5brdm9Io9XE6rGayJwYTm3hbePBdMj6o%2FypxCFUjYWJ5Q4TzRijdiDAU5kYdDqsN7MGITMaUeV1HN%2Ba3v4r1A9CpCm&X-Amz-Signature=523a478e7270918d4ed9494ce6df4974222cc88c7cb387e8c188bf4095ddab9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
