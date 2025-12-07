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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7X5NB2F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdzHURVgZE9JkS2d1NnUKgMHGqX3mukWvH%2BiMIrxlxIAiBMR5a8ECbnqaNBdynKCgkscTx0wq4TqADiX6BekCt%2BeiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2atun7%2Fni%2BQwf8EKtwDmY6KcQgdkEhP44haYUluTjpX9aMw8RTGwUOueqVsCY47XJTLKNkkcZwH8IPD0bUTJPwYUnRj%2BtXofD0H6FQV6f%2B8kellTG%2BLtpjba1AVVZQEoDevq6fXqYYMRFyAaF2M5vLDaP8T2PXYQDzzZB15K8VpI60aIg%2FE%2FAksyZonsGgCmzFXsbvWEfodwTvWDIaO3TxD%2BMympAz%2BiisjK5FAtvBmaVfbKe%2FJv20p65BBXpMLphEFIdzFmYNF8xqUcTUo898i5jVNRYB%2BWt1%2BodQ2FU8ctGB6elkvsqt%2BWnjyvlq46WDsaCre7uzfYJFAu%2FExXwUUkGoHNudlQF05u71UMqoawoO2D8lv71LV0Qmm6FrjyGQ%2BebbZsTEFpnZa0cvq0m6LAvDkUMWf2ujjD0X0rUhqpOw0FyJHxqLgDXFFzldGPjw4cao%2BRoZJq0dLtzjvfUYcwlaJZIIENzv6dz3eJLJ04BkVh1p9Wz4iiEsLM5czO%2BrxB9DSWjfcYAn6Iq3FAXxJYdA3rulRJ%2FhQKAzft%2F06%2FFK9V2PbjrpOnaevRSXrVshHPVY278kYqRQGQeCf2IdNZMyhjEUn66jmALIw5VI5lLgc%2F50Ifa%2FeTwJlmcpY0UN47eYWTIT3dL8w05nVyQY6pgEeFjJdZ89y8DOrHoKImcXeFpzmYCkNuEqWK6GWHc4yHECMO57qLO%2FGDnd%2FX4pi2LJ0oiJ%2Bxr9unuxS6WpusX0QBCmtbn%2FsHfegg3r16GK8xPMMkZNFGsI0ojjK2QCsJ4PMU48GdzYyO0dyCiIcEXYdZyBFkkCSLkTX6gBDiIQ1qmkcjWeffNxZi3ADT6WQfUjjMBBBJkcwnWiEsycbRg6vvpPDh5wE&X-Amz-Signature=87db31468af1715f77e3973bf46ae538c16396e51f00b84865f2261e78392add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7X5NB2F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdzHURVgZE9JkS2d1NnUKgMHGqX3mukWvH%2BiMIrxlxIAiBMR5a8ECbnqaNBdynKCgkscTx0wq4TqADiX6BekCt%2BeiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2atun7%2Fni%2BQwf8EKtwDmY6KcQgdkEhP44haYUluTjpX9aMw8RTGwUOueqVsCY47XJTLKNkkcZwH8IPD0bUTJPwYUnRj%2BtXofD0H6FQV6f%2B8kellTG%2BLtpjba1AVVZQEoDevq6fXqYYMRFyAaF2M5vLDaP8T2PXYQDzzZB15K8VpI60aIg%2FE%2FAksyZonsGgCmzFXsbvWEfodwTvWDIaO3TxD%2BMympAz%2BiisjK5FAtvBmaVfbKe%2FJv20p65BBXpMLphEFIdzFmYNF8xqUcTUo898i5jVNRYB%2BWt1%2BodQ2FU8ctGB6elkvsqt%2BWnjyvlq46WDsaCre7uzfYJFAu%2FExXwUUkGoHNudlQF05u71UMqoawoO2D8lv71LV0Qmm6FrjyGQ%2BebbZsTEFpnZa0cvq0m6LAvDkUMWf2ujjD0X0rUhqpOw0FyJHxqLgDXFFzldGPjw4cao%2BRoZJq0dLtzjvfUYcwlaJZIIENzv6dz3eJLJ04BkVh1p9Wz4iiEsLM5czO%2BrxB9DSWjfcYAn6Iq3FAXxJYdA3rulRJ%2FhQKAzft%2F06%2FFK9V2PbjrpOnaevRSXrVshHPVY278kYqRQGQeCf2IdNZMyhjEUn66jmALIw5VI5lLgc%2F50Ifa%2FeTwJlmcpY0UN47eYWTIT3dL8w05nVyQY6pgEeFjJdZ89y8DOrHoKImcXeFpzmYCkNuEqWK6GWHc4yHECMO57qLO%2FGDnd%2FX4pi2LJ0oiJ%2Bxr9unuxS6WpusX0QBCmtbn%2FsHfegg3r16GK8xPMMkZNFGsI0ojjK2QCsJ4PMU48GdzYyO0dyCiIcEXYdZyBFkkCSLkTX6gBDiIQ1qmkcjWeffNxZi3ADT6WQfUjjMBBBJkcwnWiEsycbRg6vvpPDh5wE&X-Amz-Signature=ee11dbbbbb1b36329edfcff6eb3662ad8f87bcbec11500599236a4e4d077eb3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
