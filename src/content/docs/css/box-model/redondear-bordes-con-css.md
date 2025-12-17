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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3HX4JA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH7WVrluSEN%2Bn0jK6VelP9dj4P3iJlNx%2FP6uzyrPn%2FcAiEA1EAg%2BUfuIlYFmzEwAQF2ADMQWbfXy6jbArf0Tm8f0WMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJv2CLt6XKQBsy6bHSrcA%2B90%2FieO8DWY%2Bi7VyyXf%2FLIPACit%2FvY0PpqcO2CGTK9ql%2BT3jmdtjoftyZ3nedDWtiDS%2FWCvE616ouFyXs%2F9qcQSLiyHkTrG1LNqhf4OZ%2BQJdyYCt668tlugEa5Eyk0bReQ1X5MsBO%2F%2BAb5Fh8dZq0DEn67GblDAKkRN7iL6z3srurPsdD5uD8aLr90R1uBpzb2SGtzCMC0oo7KqDYli8pmywL5gddEbSEjYOENhE%2BaZxGuAhVoSy9nzxzEW18xs9sLwWLPRmhAi2r%2FpHJlFBc9h3CU0sPyqc3x22bUj5GLitieHPvy30VSXUiKkZEj%2FQcxhG%2B93iovAp9LHw877ISw1xT7Dh9K7QyYYhPCmrW4yk4xkLVQVTWxt6etUgxTuxVEcGc%2Buk6euSrNRSmTl7qySd5YMvT4SDniNjBYd95lv0elQovACulQYP7%2B7DtN3dhqfvhTLw5hju3IXtNbKnGKOFozjw5GAtpndv%2B3E7%2FQz0f%2BYlcL3yHFf7yrEs5DTDn6eSmquYf8XoQ%2FBSW0c3%2BcLEnAdbaMwdtTUJx5x%2BvWP820RCROUrsKCSI7RlyjWF9nUGUNtuyGyqhAi8t24ORQbpepzU17k%2FJvOn%2FyKgRzrZ3jwAGG38W%2B5KllmMIW4icoGOqUBpDkHgkV%2Fbd%2FfkKHTNWeBVIdzK4P9RfZqBvsXfgOuGvPMc2w8cqydQjMGmIlNIgHOaf4q%2BIfQLYU3Rq7mSyeb%2BMGxhx9%2B8coHk%2BVllAEtX1lWXsOxZqAwZj1FuINJtoFjS7MBqDVVXbfEVMt23sPwjlJtRgAmXRtdPh73KHah2IsBeF0v0uIfmZxewPAaQZepKcopaQXEW0Zcon4St14lmJ%2FTMTXj&X-Amz-Signature=7290b1fef30817ee00c1f552fbe4407af9e2d2c260532d94c77aee667f5afd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3HX4JA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH7WVrluSEN%2Bn0jK6VelP9dj4P3iJlNx%2FP6uzyrPn%2FcAiEA1EAg%2BUfuIlYFmzEwAQF2ADMQWbfXy6jbArf0Tm8f0WMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJv2CLt6XKQBsy6bHSrcA%2B90%2FieO8DWY%2Bi7VyyXf%2FLIPACit%2FvY0PpqcO2CGTK9ql%2BT3jmdtjoftyZ3nedDWtiDS%2FWCvE616ouFyXs%2F9qcQSLiyHkTrG1LNqhf4OZ%2BQJdyYCt668tlugEa5Eyk0bReQ1X5MsBO%2F%2BAb5Fh8dZq0DEn67GblDAKkRN7iL6z3srurPsdD5uD8aLr90R1uBpzb2SGtzCMC0oo7KqDYli8pmywL5gddEbSEjYOENhE%2BaZxGuAhVoSy9nzxzEW18xs9sLwWLPRmhAi2r%2FpHJlFBc9h3CU0sPyqc3x22bUj5GLitieHPvy30VSXUiKkZEj%2FQcxhG%2B93iovAp9LHw877ISw1xT7Dh9K7QyYYhPCmrW4yk4xkLVQVTWxt6etUgxTuxVEcGc%2Buk6euSrNRSmTl7qySd5YMvT4SDniNjBYd95lv0elQovACulQYP7%2B7DtN3dhqfvhTLw5hju3IXtNbKnGKOFozjw5GAtpndv%2B3E7%2FQz0f%2BYlcL3yHFf7yrEs5DTDn6eSmquYf8XoQ%2FBSW0c3%2BcLEnAdbaMwdtTUJx5x%2BvWP820RCROUrsKCSI7RlyjWF9nUGUNtuyGyqhAi8t24ORQbpepzU17k%2FJvOn%2FyKgRzrZ3jwAGG38W%2B5KllmMIW4icoGOqUBpDkHgkV%2Fbd%2FfkKHTNWeBVIdzK4P9RfZqBvsXfgOuGvPMc2w8cqydQjMGmIlNIgHOaf4q%2BIfQLYU3Rq7mSyeb%2BMGxhx9%2B8coHk%2BVllAEtX1lWXsOxZqAwZj1FuINJtoFjS7MBqDVVXbfEVMt23sPwjlJtRgAmXRtdPh73KHah2IsBeF0v0uIfmZxewPAaQZepKcopaQXEW0Zcon4St14lmJ%2FTMTXj&X-Amz-Signature=fb9ee05a0c731ccd466ce2f3d51a48fc25ed4be3b4c2d05fe73283b30351fccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
