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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAFXCG6R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6Ttd%2FdC%2Fgm8%2BpPI9J4DUpLrLwnWyLA6LSoVhB9uqkgIhAMPp1UgNyYahR0kZLyxkoZZPKQo1DKCdGkJsFuF3eK4bKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzssBi9%2BIdSzrJYvEwq3ANzkTfT3dkQn%2Fl4l21vGTl6xV8Fj8ru9fdw%2FjRI2Nn9YUWe8C%2FOQvaqjF8nec%2Fcui%2FDSp45ioyEIZiTXHvG011A%2FXnuHXoBtHHAMBR78GhAb2yIHm6vvIPGgwg4JQpIszJFWv3V4W3ed9x%2FwmtA9JptWBHW4vAau9v2bPXIgX410UUwrk5VmCnIqPVIGZTDD9ZNNOt5gVlnOQdwePsw6ThchpHZk0%2Fxs70tffJ7bFChSjPe8P2q4buzhwH8rv5HIUNYfh0TTP9HSwEQpX8AeZ8YM6f2dzsJuAlXGwvOob09snHu8x3kNXojTpoN8Jzq8BZ6gqhK8gzMkDngfEY5PVuHR7d%2BC21BxGGYTt2wrACpS92KRUrAJg7EJdj74A2hd%2BLSJ2nA7hj9FF9Q6D255zgCSjGodf5FMGk3Pu1y3ARvtObe8YwKOrc0eyiot%2BEacVPfYyfDKKsyqxeaPkpsISNcVfsOai63JUeF5PpoARk%2FaIhmoCbmtKQuQg8dJ3gVwdMrmK6Gt0OPgv1nCtTrDsD2e8ec2m574N0EYewBWxT97DfFA6ZYZB%2BOA%2FQHPqddr5axcFyziIJHo8u4Fmbsw0xXaNAB2WafQGe2DCm%2FzJFby5%2Fns2MqlODA2Se0DjDTnovKBjqkAYY8DvdtucDb6x1xuMHWOel2ojRKKFMZ0207euJJxu0PQ1UuQoQDBG3mYDYgc14L5WIWMS%2F5qCk2yG%2FzA2VYeOcOoed3DjE2GxoWd1jdLeIOpWXD%2FeZAIpnKUGTEeM7bcSa1H9oUsA1%2FhsM5A5lMJvgubOXkfY11V7EOzZT2gpOnY0vuus0Z9q2btLKQfp4Y1KMBqYq4dyKQPiQf35d9NaOtBOUh&X-Amz-Signature=ef6596618d5fae10efde66e9624bce1821b0a1bbf55b652014345f5f6f584510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAFXCG6R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6Ttd%2FdC%2Fgm8%2BpPI9J4DUpLrLwnWyLA6LSoVhB9uqkgIhAMPp1UgNyYahR0kZLyxkoZZPKQo1DKCdGkJsFuF3eK4bKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzssBi9%2BIdSzrJYvEwq3ANzkTfT3dkQn%2Fl4l21vGTl6xV8Fj8ru9fdw%2FjRI2Nn9YUWe8C%2FOQvaqjF8nec%2Fcui%2FDSp45ioyEIZiTXHvG011A%2FXnuHXoBtHHAMBR78GhAb2yIHm6vvIPGgwg4JQpIszJFWv3V4W3ed9x%2FwmtA9JptWBHW4vAau9v2bPXIgX410UUwrk5VmCnIqPVIGZTDD9ZNNOt5gVlnOQdwePsw6ThchpHZk0%2Fxs70tffJ7bFChSjPe8P2q4buzhwH8rv5HIUNYfh0TTP9HSwEQpX8AeZ8YM6f2dzsJuAlXGwvOob09snHu8x3kNXojTpoN8Jzq8BZ6gqhK8gzMkDngfEY5PVuHR7d%2BC21BxGGYTt2wrACpS92KRUrAJg7EJdj74A2hd%2BLSJ2nA7hj9FF9Q6D255zgCSjGodf5FMGk3Pu1y3ARvtObe8YwKOrc0eyiot%2BEacVPfYyfDKKsyqxeaPkpsISNcVfsOai63JUeF5PpoARk%2FaIhmoCbmtKQuQg8dJ3gVwdMrmK6Gt0OPgv1nCtTrDsD2e8ec2m574N0EYewBWxT97DfFA6ZYZB%2BOA%2FQHPqddr5axcFyziIJHo8u4Fmbsw0xXaNAB2WafQGe2DCm%2FzJFby5%2Fns2MqlODA2Se0DjDTnovKBjqkAYY8DvdtucDb6x1xuMHWOel2ojRKKFMZ0207euJJxu0PQ1UuQoQDBG3mYDYgc14L5WIWMS%2F5qCk2yG%2FzA2VYeOcOoed3DjE2GxoWd1jdLeIOpWXD%2FeZAIpnKUGTEeM7bcSa1H9oUsA1%2FhsM5A5lMJvgubOXkfY11V7EOzZT2gpOnY0vuus0Z9q2btLKQfp4Y1KMBqYq4dyKQPiQf35d9NaOtBOUh&X-Amz-Signature=f3acd7bed67b1578f5d4650890150d65a3b263daf314c889d2b6f8b21596f02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
