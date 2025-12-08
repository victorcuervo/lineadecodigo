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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTJOTDQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2tGTz8LcWZVuFlvcoiHg%2BdAiyVHlPsZ7EvRpLEW9%2FUwIgSGJkMI4TXV0287RER9S%2BJfAy33OOGA3Uek8AuFi7UGMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjFS8NuICDSY4tTJircAwfIMUKvpb2Li%2Bn1JnXWg%2F4Cu1X4z7iGeI3YbDV74AF27t2uZaCtFb5EoEoaJ2oExFN5EHRbWqWjFyu8FK%2Bhk5HdNhi5wDcIkwVcEl3QsvnIev7RZ5mCQqBSuPkwT6wnzubUtIPdlgI0JmKoFqAo%2BT71sNfz9cS%2FHymOcXgoqULk3l7pD%2FlcpW5tRzYdEOvr%2FDBwuO5lw3rycTnuJj6%2FhqjFNZ6LFFiak3hBMJsDvGzjoVtfi2ZLN%2BWL%2B%2BdXcXmQvdXnV0VajRXKqAsBk5vKCOMW4g%2Fn%2FboXD%2BetTFSY7WJZE8d2zLJM9srcDXFNppDX3SOV1unEQDXbBV9Fvjg0K1qcEraJWZMHdTDMaiFxGK%2BHTngWTWBvbGYJ7Kq%2FIR4vUwmMBH06S4beicof7IJg%2FzGTJ3clvl2Sr%2B0PNVzjP2RJqt4xE0OWpriDw606s%2BEUY0onNi5OzEDxs2E5q9oUt9oQM14DoY5gu2ujtLSI5A5use0tRmyxsBLL6aRwrVQPT6odXemtCYDdC4ECU3iEmq9PnbkacjK8KZltv%2BxjqZgblWBWIeaf8DijAr4nX18R8XjjEw%2FMBXCgh2ePgLZur3qvCkjzEJ%2F4%2BnMY3XA3JmhoznxtYZonO3jS89fyMPOU2ckGOqUBN%2FeJ%2F1DrsR8al9t0Tqcrwsmkofi9kGmyfoLdvix6grcQdJgPDXkbgDg7AD%2BXyxnCsvR71dFfR3s%2FiWw4vmXvGfqu3r4pvTW1P7cLD7aZLCEkWeAeX%2FB3BFeyJsKA3vh4%2FTrcasbfPb6MVBkt8GErvcB0wxhzsEbIcgxXBQWOr7oiw4LulhDxhLek3866JY4yC%2FHQnHYxjYAXeA7QEakVT813qcNI&X-Amz-Signature=d81e71923784ec246e0c4028c72454b969200f0010b09b1950f053ec70f7ebbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTJOTDQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2tGTz8LcWZVuFlvcoiHg%2BdAiyVHlPsZ7EvRpLEW9%2FUwIgSGJkMI4TXV0287RER9S%2BJfAy33OOGA3Uek8AuFi7UGMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjFS8NuICDSY4tTJircAwfIMUKvpb2Li%2Bn1JnXWg%2F4Cu1X4z7iGeI3YbDV74AF27t2uZaCtFb5EoEoaJ2oExFN5EHRbWqWjFyu8FK%2Bhk5HdNhi5wDcIkwVcEl3QsvnIev7RZ5mCQqBSuPkwT6wnzubUtIPdlgI0JmKoFqAo%2BT71sNfz9cS%2FHymOcXgoqULk3l7pD%2FlcpW5tRzYdEOvr%2FDBwuO5lw3rycTnuJj6%2FhqjFNZ6LFFiak3hBMJsDvGzjoVtfi2ZLN%2BWL%2B%2BdXcXmQvdXnV0VajRXKqAsBk5vKCOMW4g%2Fn%2FboXD%2BetTFSY7WJZE8d2zLJM9srcDXFNppDX3SOV1unEQDXbBV9Fvjg0K1qcEraJWZMHdTDMaiFxGK%2BHTngWTWBvbGYJ7Kq%2FIR4vUwmMBH06S4beicof7IJg%2FzGTJ3clvl2Sr%2B0PNVzjP2RJqt4xE0OWpriDw606s%2BEUY0onNi5OzEDxs2E5q9oUt9oQM14DoY5gu2ujtLSI5A5use0tRmyxsBLL6aRwrVQPT6odXemtCYDdC4ECU3iEmq9PnbkacjK8KZltv%2BxjqZgblWBWIeaf8DijAr4nX18R8XjjEw%2FMBXCgh2ePgLZur3qvCkjzEJ%2F4%2BnMY3XA3JmhoznxtYZonO3jS89fyMPOU2ckGOqUBN%2FeJ%2F1DrsR8al9t0Tqcrwsmkofi9kGmyfoLdvix6grcQdJgPDXkbgDg7AD%2BXyxnCsvR71dFfR3s%2FiWw4vmXvGfqu3r4pvTW1P7cLD7aZLCEkWeAeX%2FB3BFeyJsKA3vh4%2FTrcasbfPb6MVBkt8GErvcB0wxhzsEbIcgxXBQWOr7oiw4LulhDxhLek3866JY4yC%2FHQnHYxjYAXeA7QEakVT813qcNI&X-Amz-Signature=5ab23bf8fbd002bbe787661fbe367c78d7a7af0abe22192c2e75d0f0e9afff56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
