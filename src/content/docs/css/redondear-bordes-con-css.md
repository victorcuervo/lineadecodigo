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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXCOWFE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmD0Rjw%2Fmp0b0a%2BWUBDmS%2FbqwPlw2bpt6H7AVLe2E5OAiByPF40V3JfxJANoZWkjWN0207Mebnbu8RNpc63IjI%2F4CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZrSCQituLy9yZ5sZKtwDWPCmo%2BcsJ4NcYFLeH30lAmEMLRRg%2BaMMbz75qsaGfzEhuuXetBlDABcp3Onh5MPrElIyQDZFOPvqkzXt5j5acar2iJzHk5wzM8AXoevU5pqfuLPcBbxlJoHU8%2BPdwA%2FqMWFaGfNUgkPH9JDtumNAAEYGkD9uRqOrUH9tqwhBXB3PtF%2FmXgMimWKyzlF4cu%2F%2FSLaPWS9pznDOqsHVRvpOsaHi9pcJtz4j0QHqmOQSucZbrs1IJVGW1n%2FzkjnL2eDRypUhOJHrTz%2Fb8rkk6uROdCY5Dqrvu5NFkY5Yd7HsmjuhEAM%2F5rRM%2BEjuKUAKf1rxJ7Dh5R%2BgsiKqDK7I3jeeDu0Nf%2Fiu7XDiqqdUJgSfoS02MUQreDFSP27L7q6mPaZXdk2kodv%2BZepYy1ePxJjL%2BUdgX51D9xCkFTb9fBPt7wxnsMwQTdH0Oy5tMglVkLa%2F%2BAQwL74pWLrJy7nYw%2BZ7OznAdHM4hDHHh2h1IJCEZALDTPdBI7f6tuyS3Uzsbk9Dq9uzSYBi1FF51d48eLYz192tCZI637SmPlNTuYALq1ZN233vQBktMa%2FCBcAxoAG3dw3DGhZ60jIknhQPr7Som8xM6mWQOnxs%2FUDmtAypWkz3hhN7SVZVzxQ7Zq4wvdzcyQY6pgHQupZXr%2BYuCvfHxGM4HkMowWPo4mYcoeMnvBLXXKbTuPaRSf6B8SqdVXE4pGJUcd5%2FWRASLcsT0xg7KdSoZ6%2BIlMmVGshp%2FR4c7qoWxJptjpRegTckOAQPcTlvMQHSZWXLdD088OupwzqZiGzu2Eq0gZs1cXZxUVUv3WZ3MPUQk4wKzwdo61V30ddbyuBJpkzELcQ9WTUqV%2FDrLju7%2FSs94qkWwCbX&X-Amz-Signature=1fa8698933dddd868f9fc28bb593c0c805ff013cacca73b1ec3059465c004381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXCOWFE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmD0Rjw%2Fmp0b0a%2BWUBDmS%2FbqwPlw2bpt6H7AVLe2E5OAiByPF40V3JfxJANoZWkjWN0207Mebnbu8RNpc63IjI%2F4CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZrSCQituLy9yZ5sZKtwDWPCmo%2BcsJ4NcYFLeH30lAmEMLRRg%2BaMMbz75qsaGfzEhuuXetBlDABcp3Onh5MPrElIyQDZFOPvqkzXt5j5acar2iJzHk5wzM8AXoevU5pqfuLPcBbxlJoHU8%2BPdwA%2FqMWFaGfNUgkPH9JDtumNAAEYGkD9uRqOrUH9tqwhBXB3PtF%2FmXgMimWKyzlF4cu%2F%2FSLaPWS9pznDOqsHVRvpOsaHi9pcJtz4j0QHqmOQSucZbrs1IJVGW1n%2FzkjnL2eDRypUhOJHrTz%2Fb8rkk6uROdCY5Dqrvu5NFkY5Yd7HsmjuhEAM%2F5rRM%2BEjuKUAKf1rxJ7Dh5R%2BgsiKqDK7I3jeeDu0Nf%2Fiu7XDiqqdUJgSfoS02MUQreDFSP27L7q6mPaZXdk2kodv%2BZepYy1ePxJjL%2BUdgX51D9xCkFTb9fBPt7wxnsMwQTdH0Oy5tMglVkLa%2F%2BAQwL74pWLrJy7nYw%2BZ7OznAdHM4hDHHh2h1IJCEZALDTPdBI7f6tuyS3Uzsbk9Dq9uzSYBi1FF51d48eLYz192tCZI637SmPlNTuYALq1ZN233vQBktMa%2FCBcAxoAG3dw3DGhZ60jIknhQPr7Som8xM6mWQOnxs%2FUDmtAypWkz3hhN7SVZVzxQ7Zq4wvdzcyQY6pgHQupZXr%2BYuCvfHxGM4HkMowWPo4mYcoeMnvBLXXKbTuPaRSf6B8SqdVXE4pGJUcd5%2FWRASLcsT0xg7KdSoZ6%2BIlMmVGshp%2FR4c7qoWxJptjpRegTckOAQPcTlvMQHSZWXLdD088OupwzqZiGzu2Eq0gZs1cXZxUVUv3WZ3MPUQk4wKzwdo61V30ddbyuBJpkzELcQ9WTUqV%2FDrLju7%2FSs94qkWwCbX&X-Amz-Signature=d31600e799863567906324cd038933a399291f12d1284702cf580c602125b2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
