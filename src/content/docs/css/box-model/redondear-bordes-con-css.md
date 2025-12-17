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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MDFVZAX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsB%2FCCCbCjdwo2nFxFUU0uUuQvOFyJWX0OGxCycidcZAiEAu%2FptPFeWth5fbNW4%2FA8iMJYCkWYMuWtazlRStIFekB8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMW9L2o86yjzrBeSgyrcA6tJBXeiYMeRnWpuGjob4ncuTErlFrd4W9jGO0HJonv%2BT%2B5PeAwBMexMoe6z%2FTsxplBYWN4P9LeqhOH2w54a3%2FXSk3x%2FKYLh6hQ6UFnc5e4rP8eK0yBXRKI%2B5gO%2F%2Fg%2BSnGTi3AGz55cQNb62kjhI%2BODTGE3NOXaAtCdBc%2FjJ2OvHTTAm8pPhx3VQcXiymjtWZoqrL%2FHdRteKQb7ig0QDRH9uDGZQqaTITqknKNeYO4N4%2BQriXxLYtrfTZ5R%2F%2BL6nQx1%2B%2BnTTlTE0I%2FMzWYrR2ZDj3Aq7lNDl8V9Cb7cGvgO8GlCks1%2FFnI2eInS%2F3TZidfK2Y6J5%2Byq0sFyK6xexD4XyYeIgiEW3fAU23lhU73nDuBLe%2F7jq9e3vFaex1j8irHDdS7jSNmdqbm6RYF3Jgd6wM32CJqKzbTBKWBVBvm6%2BiUJz1refO3GrNcoliI5rMN4lzj4qyQHAQT7Mq9xooMk4gvtBprqow47RTMfo66vu8zGA63mebxLIwQ89KDiw1DXgYOu8qb5usS%2FdEgxcAU1eR3kWqA2afxt29rOdc%2Bese%2FmUSPITunFbq%2F1npqrzkG9KDyxWJx1WSm34tlOMmsNLZXFvaHJjq8KjQlzyb4jnOSPt5V7oRrcPnEtNMNyqisoGOqUB7kfLkLdN0m03F07h5f0FEJJ0qW8FI%2F%2FJxRdAq%2BUXXTjayF1GPX8dHWt62N5g9FiaqMAwc3DFgaB9ZCyMqwIsFB%2BjM3%2B4ZHXxL2phtKa%2FpjtD2EEgC5L2NPSDyCwPbRKiEurMYEeBx4zDgC5PbmafKiaEQ0kjRNyeykavpAe1tS3Myt8IK6cXhHZe%2BnatnAgnuVSMn39073Nd%2FAExWzTUNfBxKRkt&X-Amz-Signature=2623174ff59be3a3ccae74861eb4c58b544a428d5198898d813d3416252d0b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MDFVZAX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsB%2FCCCbCjdwo2nFxFUU0uUuQvOFyJWX0OGxCycidcZAiEAu%2FptPFeWth5fbNW4%2FA8iMJYCkWYMuWtazlRStIFekB8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMW9L2o86yjzrBeSgyrcA6tJBXeiYMeRnWpuGjob4ncuTErlFrd4W9jGO0HJonv%2BT%2B5PeAwBMexMoe6z%2FTsxplBYWN4P9LeqhOH2w54a3%2FXSk3x%2FKYLh6hQ6UFnc5e4rP8eK0yBXRKI%2B5gO%2F%2Fg%2BSnGTi3AGz55cQNb62kjhI%2BODTGE3NOXaAtCdBc%2FjJ2OvHTTAm8pPhx3VQcXiymjtWZoqrL%2FHdRteKQb7ig0QDRH9uDGZQqaTITqknKNeYO4N4%2BQriXxLYtrfTZ5R%2F%2BL6nQx1%2B%2BnTTlTE0I%2FMzWYrR2ZDj3Aq7lNDl8V9Cb7cGvgO8GlCks1%2FFnI2eInS%2F3TZidfK2Y6J5%2Byq0sFyK6xexD4XyYeIgiEW3fAU23lhU73nDuBLe%2F7jq9e3vFaex1j8irHDdS7jSNmdqbm6RYF3Jgd6wM32CJqKzbTBKWBVBvm6%2BiUJz1refO3GrNcoliI5rMN4lzj4qyQHAQT7Mq9xooMk4gvtBprqow47RTMfo66vu8zGA63mebxLIwQ89KDiw1DXgYOu8qb5usS%2FdEgxcAU1eR3kWqA2afxt29rOdc%2Bese%2FmUSPITunFbq%2F1npqrzkG9KDyxWJx1WSm34tlOMmsNLZXFvaHJjq8KjQlzyb4jnOSPt5V7oRrcPnEtNMNyqisoGOqUB7kfLkLdN0m03F07h5f0FEJJ0qW8FI%2F%2FJxRdAq%2BUXXTjayF1GPX8dHWt62N5g9FiaqMAwc3DFgaB9ZCyMqwIsFB%2BjM3%2B4ZHXxL2phtKa%2FpjtD2EEgC5L2NPSDyCwPbRKiEurMYEeBx4zDgC5PbmafKiaEQ0kjRNyeykavpAe1tS3Myt8IK6cXhHZe%2BnatnAgnuVSMn39073Nd%2FAExWzTUNfBxKRkt&X-Amz-Signature=4a9ae0dc3a2339483909aa868246d52ce5225d1e494af0d6e7c47ba454670b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
