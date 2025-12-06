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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOZNCK3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG%2FQVpuGfMLCz%2F5n%2FqJBv4widqYLGOT5vBStZ5ybJfHAiAtqI5Doi44m0BMM10PSROrj8fm3zoQST4rBOZIu1L9XCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMQngeDNE9%2FKWX2GOmKtwDoSgCW5N5e91MX9vn6OINRPGMR%2B9gjgNV6V0yFoIIDvzH1F9qlt82DdpfizsERwaevb1nnDLVHkxLDSQFwhV%2FcKux0cAVjj0PvKLJZtKen0HxZprDmXHiEp24rYKfZjxsVQTEOV%2Fio6KjBB861aaf6WpIZNMJ3uzovHGo3X%2BnGzI9ket0ITwEusC7RGZb%2FKLy6K9kAM%2Bxx5IdQ9A0CERLUNQviQK0%2FIaVVfKLPsNwvghS65HfqtElIZhGNUHlmMi3flbH3KRE%2B168BZaprFtYLmEE1pjlb1Li%2FkVpSf1JVF4KxOM1YNZviyDG4Yepi0QzpAdb1RNoxUrmpfQ6K3mVpb%2BfpaTmMP0Xlc0UvLYR0JB8PlSHvjj5RPur9%2F4c%2B%2F2GoKdstis8aUppm%2FNDeqt3%2BiLXWoRFdz1%2BrS6iZ2Ub1pvmw4l2fWz3QFUFvOCR36VFmBIfaVGq6jfdLXfXm29a%2FXXXot6jpsSD9Xsv0IlLW7e84s%2FlBIQ8tkQcWNxFixTUdZ8yyDI3drXkgJRSv2K7%2BoQCzhiBYrDMFmmbKwn%2BTFEZwgWPO13r1i%2B3laxxLz4VVPJ8t3y8tK9oMXgeHW9GhgOfIHj%2FdWOq7IoWnnuZcGTPAljSQASLu%2F1HOAowh4rQyQY6pgH4ika3EgjicdBY50BZzuey536ngJ1tQD4ZQbKf%2FyEUOHympl%2BJPT4asHIHciFqJbjSLW%2BfB91BDlBCtk2iiaoyvy2yrV1%2FnQ6yBMOLX1zTuBb4mAlglaW3fTfjOG%2BNQGDeZJfv0MJoHEs0zPpWdHvEWcbZ4zbJzSQGrUHvuPBWJsNyiLvTpGgMXOph%2BsdRO99svZcArr4Lni5ssOo60KWcvCoXZrIV&X-Amz-Signature=e85c5d54240f5dc437af24e4eb9aa8a54fee471dafcce58132cb343423f2967f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOZNCK3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG%2FQVpuGfMLCz%2F5n%2FqJBv4widqYLGOT5vBStZ5ybJfHAiAtqI5Doi44m0BMM10PSROrj8fm3zoQST4rBOZIu1L9XCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMQngeDNE9%2FKWX2GOmKtwDoSgCW5N5e91MX9vn6OINRPGMR%2B9gjgNV6V0yFoIIDvzH1F9qlt82DdpfizsERwaevb1nnDLVHkxLDSQFwhV%2FcKux0cAVjj0PvKLJZtKen0HxZprDmXHiEp24rYKfZjxsVQTEOV%2Fio6KjBB861aaf6WpIZNMJ3uzovHGo3X%2BnGzI9ket0ITwEusC7RGZb%2FKLy6K9kAM%2Bxx5IdQ9A0CERLUNQviQK0%2FIaVVfKLPsNwvghS65HfqtElIZhGNUHlmMi3flbH3KRE%2B168BZaprFtYLmEE1pjlb1Li%2FkVpSf1JVF4KxOM1YNZviyDG4Yepi0QzpAdb1RNoxUrmpfQ6K3mVpb%2BfpaTmMP0Xlc0UvLYR0JB8PlSHvjj5RPur9%2F4c%2B%2F2GoKdstis8aUppm%2FNDeqt3%2BiLXWoRFdz1%2BrS6iZ2Ub1pvmw4l2fWz3QFUFvOCR36VFmBIfaVGq6jfdLXfXm29a%2FXXXot6jpsSD9Xsv0IlLW7e84s%2FlBIQ8tkQcWNxFixTUdZ8yyDI3drXkgJRSv2K7%2BoQCzhiBYrDMFmmbKwn%2BTFEZwgWPO13r1i%2B3laxxLz4VVPJ8t3y8tK9oMXgeHW9GhgOfIHj%2FdWOq7IoWnnuZcGTPAljSQASLu%2F1HOAowh4rQyQY6pgH4ika3EgjicdBY50BZzuey536ngJ1tQD4ZQbKf%2FyEUOHympl%2BJPT4asHIHciFqJbjSLW%2BfB91BDlBCtk2iiaoyvy2yrV1%2FnQ6yBMOLX1zTuBb4mAlglaW3fTfjOG%2BNQGDeZJfv0MJoHEs0zPpWdHvEWcbZ4zbJzSQGrUHvuPBWJsNyiLvTpGgMXOph%2BsdRO99svZcArr4Lni5ssOo60KWcvCoXZrIV&X-Amz-Signature=66b531b5130b064465905cbfe722d0fdd677202a895375091b85bcf590edb0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
