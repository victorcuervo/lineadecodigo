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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNVAG4U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZ99PlRvETRJGPhgFDsCreYNUdsfCrDs7y55uzxsKSuAiB%2Fo2mVRogduCwx5SwuYLyQKF%2Bh5HRphR%2Bo1V1VBtFHCSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMEE7AJR2TkdnCDUOQKtwDdyuTwNhCjk6lgnk9%2F63LIIuMtFn0%2FS1EYcmKFQPAjUlkCLtWWJ4I1OGHLqsRKrQu8v%2BvqpB7sJKfr%2B4PR2Qe2U1CnKyMniti1UpTfAGzbIq%2B%2Fo8v5pOyxK5Wz%2F7DCK06gyLPafLsSbhPMZtBFpelUL1w32qR4NhmdCge%2B7ogigasjfdV00cLeGZ1vuOS8rBPLMhPlJXZjPw5tBxwVpF9yK84pRnN3D2B%2Fbauglp5R%2FDXtIytUaviGDYcY3PUZscvcK18MBTkTsP00C2MhAlxutwU3LCQNTJVib9iTQsQPP5en86MNxB7gwIU0Vyx4T40hO6PstsbN%2FGPADDUCd0%2B2pggiWcMTCDOfxyVY7CEUmM7ecFFWE9SrT4kGwUdiP6Ut20rZtHHy1Fn7V96runZkBzMNW%2BHXgI98EqB28dGoXc908jb%2F1e48kwf%2Fs0yeOpcF66wPwc3p7JOvfxHCdPtNn6gcT6xULJUjm0sGXhu6Q%2BIvmMjtEh%2F2m2yOPYPEwann07t%2FnudEKPjfiuk%2BH0%2FktDYITORWwYw4lhPD9mqNd39Fe02QK1WNyEJTcIuBPLOQCkMNdmKW8j0yRToLUHJHPFn6N8Z4z%2BQqNRSQyfBUW2s4ijC5AN8O3WiM10w9bKIygY6pgHWtzehWuvMsVJ2PItiYQ%2FP1xCZkA1e87ZIdl4dgM57phHj04YQb49kSmAgT7y5g1B21rK3URyXmSbRoMidgBfzH%2Fj3%2B3NrddBZTYvoWjGctf%2Fa1asMtyA19WJvVxQ6L4asW0BZu6pHrf%2B%2FvT6d5soEJRvheuVCcx8cwfe%2FnEe8OEq%2BtG%2F3BplpjDzLTqj6%2FzRkdzNounUkoZOjcq1TV5YbEYSNGjFR&X-Amz-Signature=eddef74d941051cf8f75ea6c4c1fd53319ad2debb720e0770db29d51f0f27cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNVAG4U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZ99PlRvETRJGPhgFDsCreYNUdsfCrDs7y55uzxsKSuAiB%2Fo2mVRogduCwx5SwuYLyQKF%2Bh5HRphR%2Bo1V1VBtFHCSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMEE7AJR2TkdnCDUOQKtwDdyuTwNhCjk6lgnk9%2F63LIIuMtFn0%2FS1EYcmKFQPAjUlkCLtWWJ4I1OGHLqsRKrQu8v%2BvqpB7sJKfr%2B4PR2Qe2U1CnKyMniti1UpTfAGzbIq%2B%2Fo8v5pOyxK5Wz%2F7DCK06gyLPafLsSbhPMZtBFpelUL1w32qR4NhmdCge%2B7ogigasjfdV00cLeGZ1vuOS8rBPLMhPlJXZjPw5tBxwVpF9yK84pRnN3D2B%2Fbauglp5R%2FDXtIytUaviGDYcY3PUZscvcK18MBTkTsP00C2MhAlxutwU3LCQNTJVib9iTQsQPP5en86MNxB7gwIU0Vyx4T40hO6PstsbN%2FGPADDUCd0%2B2pggiWcMTCDOfxyVY7CEUmM7ecFFWE9SrT4kGwUdiP6Ut20rZtHHy1Fn7V96runZkBzMNW%2BHXgI98EqB28dGoXc908jb%2F1e48kwf%2Fs0yeOpcF66wPwc3p7JOvfxHCdPtNn6gcT6xULJUjm0sGXhu6Q%2BIvmMjtEh%2F2m2yOPYPEwann07t%2FnudEKPjfiuk%2BH0%2FktDYITORWwYw4lhPD9mqNd39Fe02QK1WNyEJTcIuBPLOQCkMNdmKW8j0yRToLUHJHPFn6N8Z4z%2BQqNRSQyfBUW2s4ijC5AN8O3WiM10w9bKIygY6pgHWtzehWuvMsVJ2PItiYQ%2FP1xCZkA1e87ZIdl4dgM57phHj04YQb49kSmAgT7y5g1B21rK3URyXmSbRoMidgBfzH%2Fj3%2B3NrddBZTYvoWjGctf%2Fa1asMtyA19WJvVxQ6L4asW0BZu6pHrf%2B%2FvT6d5soEJRvheuVCcx8cwfe%2FnEe8OEq%2BtG%2F3BplpjDzLTqj6%2FzRkdzNounUkoZOjcq1TV5YbEYSNGjFR&X-Amz-Signature=7c0ad3f65e6b3611d246432beea4bd1b0ffbcfb67ba5a8e637dc675eb11f64d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
