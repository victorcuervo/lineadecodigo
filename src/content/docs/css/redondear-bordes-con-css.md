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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPJM2BQY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKZT4k7d7BMeqwUwO3dtInfvORPRBVYXT%2BPwxoN%2FFKQAiEA9MdJ18VeuAQMUP3gfoZSdcp1PhuBxngvqcX97%2Bx%2FVscqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXmgTF1aK50RCb0EircA88iy4ib1uZW08X4Oz4RZvSVsUJe%2Fox3K3T3bsGjcJHOwjxW%2BQ6KZWtfmQe3aab2d3mfoMC5asTLxHK4hYuLaoyuDuKuHUihvtNXU180lK7nN4QbZKqyQ7x4Njq106YydQLzrZCmY85bKQG8EqZa07WN%2FlcvvTBzcTTG%2BoA344LaFBMIF7OQGtMqk1O57cdzj80NvASS1ldG%2FjhRZxeeNacAl4IxwKRWB6SHYZPe5tcGIpwEPkVfJZLolBBP4Bz%2FY5s4TkLAHFuDbtDtYk79fHVuJsUA7JXSQTfqNADDeYMS389Ohpi3VdroqJZUj2hIrHRHzXNGtH6MZHC7zRX%2BaWSC9JT%2F2TkFPnSSpNh3kz6G6en5ozelmTWk8QiBBld888ZkfbS3PabzchI9BH4ur17c7zgt8V0LGyG7MoAcKS3UB1VBJSYzOuFhEqHYfUjsy6%2FFKC%2BDRrwVTHfvM1zL01nLjZqGdHF4il3KhcmTxYeOW9l43OX3lc9K6rprr6qMRX8ASi7S5602%2FO%2B3Satl6s4Y4smJEIps67s6UWcoxNx2FOJU6b290khOx1Kokp%2Bzg3Shxc%2BQKBdNDiaPti8TWx%2BuMEGcoCeCduUR509lG%2F3FWB4L68OOQJ3CRtV%2BMPal38kGOqUB%2FWRVNSBQE2eQjYMsBEKjH45MqrRgxUYAr9vJG7RkMiE%2BAtRv4vsOHHGNAUefnNdVWnIiUDyW8ehHdBPqAy9mqKabO6JfrZt5PGFMBSnfG%2F5fTI1pkQFNpVn42%2ByT9dF7m20ePx9EVB%2BoMtauLsrXVnQOAbjRQQFpAQTiD4t0mnNigCGB3Ae4Y9iz5nghlqff7Fc9vhKE18bas%2FS7tnVFllrSmMuY&X-Amz-Signature=a074ef019b4ce90f7756657bcce5c1a1c5d5ec7f59f1531061e8d45d9e29163d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPJM2BQY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKZT4k7d7BMeqwUwO3dtInfvORPRBVYXT%2BPwxoN%2FFKQAiEA9MdJ18VeuAQMUP3gfoZSdcp1PhuBxngvqcX97%2Bx%2FVscqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXmgTF1aK50RCb0EircA88iy4ib1uZW08X4Oz4RZvSVsUJe%2Fox3K3T3bsGjcJHOwjxW%2BQ6KZWtfmQe3aab2d3mfoMC5asTLxHK4hYuLaoyuDuKuHUihvtNXU180lK7nN4QbZKqyQ7x4Njq106YydQLzrZCmY85bKQG8EqZa07WN%2FlcvvTBzcTTG%2BoA344LaFBMIF7OQGtMqk1O57cdzj80NvASS1ldG%2FjhRZxeeNacAl4IxwKRWB6SHYZPe5tcGIpwEPkVfJZLolBBP4Bz%2FY5s4TkLAHFuDbtDtYk79fHVuJsUA7JXSQTfqNADDeYMS389Ohpi3VdroqJZUj2hIrHRHzXNGtH6MZHC7zRX%2BaWSC9JT%2F2TkFPnSSpNh3kz6G6en5ozelmTWk8QiBBld888ZkfbS3PabzchI9BH4ur17c7zgt8V0LGyG7MoAcKS3UB1VBJSYzOuFhEqHYfUjsy6%2FFKC%2BDRrwVTHfvM1zL01nLjZqGdHF4il3KhcmTxYeOW9l43OX3lc9K6rprr6qMRX8ASi7S5602%2FO%2B3Satl6s4Y4smJEIps67s6UWcoxNx2FOJU6b290khOx1Kokp%2Bzg3Shxc%2BQKBdNDiaPti8TWx%2BuMEGcoCeCduUR509lG%2F3FWB4L68OOQJ3CRtV%2BMPal38kGOqUB%2FWRVNSBQE2eQjYMsBEKjH45MqrRgxUYAr9vJG7RkMiE%2BAtRv4vsOHHGNAUefnNdVWnIiUDyW8ehHdBPqAy9mqKabO6JfrZt5PGFMBSnfG%2F5fTI1pkQFNpVn42%2ByT9dF7m20ePx9EVB%2BoMtauLsrXVnQOAbjRQQFpAQTiD4t0mnNigCGB3Ae4Y9iz5nghlqff7Fc9vhKE18bas%2FS7tnVFllrSmMuY&X-Amz-Signature=e7d033524947911f2b51b894af90dca4b63354f1e14a9cc95933016fa65dc375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
