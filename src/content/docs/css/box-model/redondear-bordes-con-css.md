---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJLGLQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAypW8l9MvxeXqQ6DKq5OOci4JKdnwRgyJh7TSuOkOUAiBNGByBBbkeI6JG8tBsaXE8%2BecTpv1zoQXW2%2F%2BmEZnK5yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMaTeURbo%2Fgt1XN3ScKtwD3MNfrAdahPQjEQX%2BauE0iFtZzzKsa52F1b0CjFB5mrQBSONdeJmHz8sq6St6QQhEg9BVnN0BIvf04asUzBFGR8Q0odFH1lFvNJFCb2ENxp4BNtEfoyWGfqPd0ZYffqxWcdmp7op5%2FgGQOnJ7Rdxh8BIAJyrTfprjuWQgy5%2FMQM5w4Oo%2BpRfA66UJF8lziBlrtBBPydnr%2BiOliESnZfHHaIv8QlSoduOFYop3k%2BIpjgw2%2BDqDWV8O18Znxd7IBwOfV73O6yyP%2F%2Bd2Iih4FxWhn5AnwCQSYdKsZQM6ouqirfPth%2Fuqy8vwqQHven8kL%2B9qn0oPTk4akwtq8PzhhGMi%2BfXLxY0i78iwnXdUlQ5zFLbDhvMIfv7o5GleaWXAEkreUVFYFlCLgnL9TMX8hwoFGkSVobg6ignPfdeGnRY1AhgdqQv4gmCf2uOXY2Uq9P0bbymjNf%2B3%2FsW6jszdetPuEn17vBPUb%2BWZFM76b9SlSUCMtEnHbomXEY0KnTWH%2FqEgde4E31NhnRdunAKYp3ccY0YH8CMLw%2FhHRMn1CyN0CQ9ViK7GTfwlpqfjh4donuPS8St7Ftzo1IpDAxIkKd6UIPDMlRlk2996y1ThfpanMnvJ2Xkkmc0gk0VoZSgwzpWIygY6pgFKFRS4qoOtgx1af4QuApRApFtpLa1cRjBRQF5RmNUaYxg1pI8MHoVaXXDbZ9S2wirAb%2FwMTmPRhWWC%2FMaydgmEyLVlWcq%2Bry62FG2qdjukByoxEJId8G%2B1rXypgMVclIRUye8Pw4SivH6mznPEgB5mzC0A%2BKGgt9%2BKPcPQ1lIK3yUmlcTJRl7XTO%2BC5VuILARX5DNhYRji3k9mxrhtuiB7HBQAllf8&X-Amz-Signature=9062dbf924c0c2adf8e3dc507fd6765fbb25849e50343b2dfaf4f91f41926344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJLGLQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAypW8l9MvxeXqQ6DKq5OOci4JKdnwRgyJh7TSuOkOUAiBNGByBBbkeI6JG8tBsaXE8%2BecTpv1zoQXW2%2F%2BmEZnK5yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMaTeURbo%2Fgt1XN3ScKtwD3MNfrAdahPQjEQX%2BauE0iFtZzzKsa52F1b0CjFB5mrQBSONdeJmHz8sq6St6QQhEg9BVnN0BIvf04asUzBFGR8Q0odFH1lFvNJFCb2ENxp4BNtEfoyWGfqPd0ZYffqxWcdmp7op5%2FgGQOnJ7Rdxh8BIAJyrTfprjuWQgy5%2FMQM5w4Oo%2BpRfA66UJF8lziBlrtBBPydnr%2BiOliESnZfHHaIv8QlSoduOFYop3k%2BIpjgw2%2BDqDWV8O18Znxd7IBwOfV73O6yyP%2F%2Bd2Iih4FxWhn5AnwCQSYdKsZQM6ouqirfPth%2Fuqy8vwqQHven8kL%2B9qn0oPTk4akwtq8PzhhGMi%2BfXLxY0i78iwnXdUlQ5zFLbDhvMIfv7o5GleaWXAEkreUVFYFlCLgnL9TMX8hwoFGkSVobg6ignPfdeGnRY1AhgdqQv4gmCf2uOXY2Uq9P0bbymjNf%2B3%2FsW6jszdetPuEn17vBPUb%2BWZFM76b9SlSUCMtEnHbomXEY0KnTWH%2FqEgde4E31NhnRdunAKYp3ccY0YH8CMLw%2FhHRMn1CyN0CQ9ViK7GTfwlpqfjh4donuPS8St7Ftzo1IpDAxIkKd6UIPDMlRlk2996y1ThfpanMnvJ2Xkkmc0gk0VoZSgwzpWIygY6pgFKFRS4qoOtgx1af4QuApRApFtpLa1cRjBRQF5RmNUaYxg1pI8MHoVaXXDbZ9S2wirAb%2FwMTmPRhWWC%2FMaydgmEyLVlWcq%2Bry62FG2qdjukByoxEJId8G%2B1rXypgMVclIRUye8Pw4SivH6mznPEgB5mzC0A%2BKGgt9%2BKPcPQ1lIK3yUmlcTJRl7XTO%2BC5VuILARX5DNhYRji3k9mxrhtuiB7HBQAllf8&X-Amz-Signature=4067658f17e57e60c5be685169668818b1d9650d46680afc8c4d2e1fd65359e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
