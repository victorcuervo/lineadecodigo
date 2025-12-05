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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWPOMNZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqiGUpxkItuO4NsFUvcHtMOa4GLDZJiLl8LcMPXxUufAiBB8gfI7VBwKrXW4tGwle%2FEXMgPGfb1MQyrsUUrgOkVNir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMUnxshhC%2B3IiY6c7iKtwDOTP7B2u6Ul%2BQDYvVRIUtNmJKlugZq0Bw7rHvS9gnGiR4ZScwoOrNR6OBH9Lknn%2BKkgKnU1ZGZNqkHtU6lsLMimb5YL%2FpDGRM3RIFkmna9XSFz8jP4qUl2n5jbRoT3PRcZjbH4pY2yd75QcVZnX7ivlZS5aImd5prrcDJ19yZCtB5QDqgVqJo1I%2BQuA1kKKWtAFVdzB%2BL7u2pD4TIwaRLKDvJdS7EDz8bH5wjbsvUDDyZFbWVLSls347PaAWEoimU22ZbhmiQNOiBF0SqTAqjfJeMK%2B4ifpjDVg%2BGwsUWMB2UcodBw8s1bd50YqgoVHg7Z%2BWzaq%2FCrnmFdYEkUNRQj6ROih1U46kjgqcz%2BOW%2Fr0KPaeEsiGE02nVlbkj%2FmQ4X9kzQ%2BPrsr70uilT5taYfhDE4wX7J5rNFwlhpUgjyPGETkBKyo5bvDN0bNVQpTnU2Y9KwPVg2U3mMH1rylG%2FtZ%2FFlEEbVldonetgBb4qxPV6j3gl%2B5%2FCcWrJwN3%2FQKvM39O40Bq6Ktnv7CPlIlop7prm2sPWaw7CNu7wWIm0oVAMI8Msn4wiVflg3pInKLW6mpcpNjCQiTTdPPdUiCdJQdVMVJ68Tu1RrPdel1DGeCpW263UtVWNoJ%2FnuuAUwraXJyQY6pgFVO6qxTXOio6StQ6%2FnNkmWkPQJD%2FAyu5acn%2B6dw6Cc86m4jYR0R%2BQ%2Fvp21sge7Iw03koCj2aNPYUK2UbSHmzaQUCz2egpQRI3yEZ4dmdwCmB5uZjSyfKBOqOq9JPigr5IlNqb0j5NKCt6W%2BJAlFM5Y2IA5%2Fnq7EWA8P5pXoFZAECMGyy76O%2B%2Fqu%2FI6H1MFW%2BqNKgLxMzCEuOr0%2B9xwGVFKKubS6Mkn&X-Amz-Signature=afb1d4ffd0f62c3e30b7f8a6327de28ff036570255978e2b97af476ea344b751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWPOMNZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqiGUpxkItuO4NsFUvcHtMOa4GLDZJiLl8LcMPXxUufAiBB8gfI7VBwKrXW4tGwle%2FEXMgPGfb1MQyrsUUrgOkVNir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMUnxshhC%2B3IiY6c7iKtwDOTP7B2u6Ul%2BQDYvVRIUtNmJKlugZq0Bw7rHvS9gnGiR4ZScwoOrNR6OBH9Lknn%2BKkgKnU1ZGZNqkHtU6lsLMimb5YL%2FpDGRM3RIFkmna9XSFz8jP4qUl2n5jbRoT3PRcZjbH4pY2yd75QcVZnX7ivlZS5aImd5prrcDJ19yZCtB5QDqgVqJo1I%2BQuA1kKKWtAFVdzB%2BL7u2pD4TIwaRLKDvJdS7EDz8bH5wjbsvUDDyZFbWVLSls347PaAWEoimU22ZbhmiQNOiBF0SqTAqjfJeMK%2B4ifpjDVg%2BGwsUWMB2UcodBw8s1bd50YqgoVHg7Z%2BWzaq%2FCrnmFdYEkUNRQj6ROih1U46kjgqcz%2BOW%2Fr0KPaeEsiGE02nVlbkj%2FmQ4X9kzQ%2BPrsr70uilT5taYfhDE4wX7J5rNFwlhpUgjyPGETkBKyo5bvDN0bNVQpTnU2Y9KwPVg2U3mMH1rylG%2FtZ%2FFlEEbVldonetgBb4qxPV6j3gl%2B5%2FCcWrJwN3%2FQKvM39O40Bq6Ktnv7CPlIlop7prm2sPWaw7CNu7wWIm0oVAMI8Msn4wiVflg3pInKLW6mpcpNjCQiTTdPPdUiCdJQdVMVJ68Tu1RrPdel1DGeCpW263UtVWNoJ%2FnuuAUwraXJyQY6pgFVO6qxTXOio6StQ6%2FnNkmWkPQJD%2FAyu5acn%2B6dw6Cc86m4jYR0R%2BQ%2Fvp21sge7Iw03koCj2aNPYUK2UbSHmzaQUCz2egpQRI3yEZ4dmdwCmB5uZjSyfKBOqOq9JPigr5IlNqb0j5NKCt6W%2BJAlFM5Y2IA5%2Fnq7EWA8P5pXoFZAECMGyy76O%2B%2Fqu%2FI6H1MFW%2BqNKgLxMzCEuOr0%2B9xwGVFKKubS6Mkn&X-Amz-Signature=5e987b0b39de2ca5fe3328ced80501a81e1df2c149a0107c45f27a13a72c7465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
