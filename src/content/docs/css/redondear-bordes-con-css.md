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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXHJE3BA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZTHxQ8SmxGTTQy%2FMlG0X87jw3v8wrhVHRmRQXXY0LRAIgAZCKxGOQVUgrr9rs8urDzT2vx5uezEgkJjQ0TX2eBw8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9DwTzKpNUwkbtXiircAyU9FiUvK1FfqnvGgHJ%2FVdzmxo%2FYuTNQOIwY8fUM%2B%2FLfjcbmr7vsgTTjMA7IamwjP%2BVL0pDDbeMccJXawPqCPCArY0d3vcAF0mBNluJWgomSleL%2FJGZGYRvT3%2BrcqpUSYvdCskMg7aK63LhaXZE2Z0BQjLRz5ZWcfIHAVbpZoGR5dZFhpSrLd9eNGLZgCoTkuVgg2eke3jCxp7KW%2BMjsDQN2nMNWSxuQ885xukGMcpT5V%2F3ZFv2QbvgheIofQyXEJ%2FsvQ2t9B%2FF1cqt%2BchHoeHCVEz882EPzs15hcVDDnJ1DhAMnrKHRAyKGYnpSTtdGJaYtbdo0fX5b9QBvOgXF9aPMiRBpL1sNmY0aou2X1CWpwIPgxnUHgVlaJMKue%2FM3VRZNYWb9oER2RTsldctc0e692MkQ998GD5w7%2FwBdj4QmaYksBrMThBlMnPS%2B%2F9Jy7nXCmRLKStRuutFVxU5O5Vuv5wZJNsV7dm1scFFasHQZPbLoZawI00v2LfqLyM4evp7clrd83ox0kTZU2316yO081WJq5YiQF0xzcj9FdTbgQBdF88n4AhujtGjxUxiBAQZt008xder6TnCbdSfITNTki%2BKDLY99FAO6iusZFZEyGkI9opFKA%2FdIj8DtMJn90skGOqUBx%2BlXxlv1PkhRmWv2vJJEhieDlsYdapa1toSi4TIMY8zZiiJul%2F4BZqchKmZ3ccVwzJvvMhUHrmEpLUQ9l%2BjI0Z%2Bqvpl0RTol2cn%2BoAGMV1%2BSxyI6Slj4W145yKjVIWoYSlGjrsLjJ9TP8v6QQnp22bB13um%2BNk9yBgfM7S9gYOnWDcdkaUE2WcilEW20T%2Bx2ZjHFr%2B%2FZmPWc9Wx74PEFZ7Hz7fwk&X-Amz-Signature=41f53ae4d94f5fbb4bdeebe1373d2b725c0466d291ca7d3c743f5c03f19a0c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXHJE3BA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZTHxQ8SmxGTTQy%2FMlG0X87jw3v8wrhVHRmRQXXY0LRAIgAZCKxGOQVUgrr9rs8urDzT2vx5uezEgkJjQ0TX2eBw8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9DwTzKpNUwkbtXiircAyU9FiUvK1FfqnvGgHJ%2FVdzmxo%2FYuTNQOIwY8fUM%2B%2FLfjcbmr7vsgTTjMA7IamwjP%2BVL0pDDbeMccJXawPqCPCArY0d3vcAF0mBNluJWgomSleL%2FJGZGYRvT3%2BrcqpUSYvdCskMg7aK63LhaXZE2Z0BQjLRz5ZWcfIHAVbpZoGR5dZFhpSrLd9eNGLZgCoTkuVgg2eke3jCxp7KW%2BMjsDQN2nMNWSxuQ885xukGMcpT5V%2F3ZFv2QbvgheIofQyXEJ%2FsvQ2t9B%2FF1cqt%2BchHoeHCVEz882EPzs15hcVDDnJ1DhAMnrKHRAyKGYnpSTtdGJaYtbdo0fX5b9QBvOgXF9aPMiRBpL1sNmY0aou2X1CWpwIPgxnUHgVlaJMKue%2FM3VRZNYWb9oER2RTsldctc0e692MkQ998GD5w7%2FwBdj4QmaYksBrMThBlMnPS%2B%2F9Jy7nXCmRLKStRuutFVxU5O5Vuv5wZJNsV7dm1scFFasHQZPbLoZawI00v2LfqLyM4evp7clrd83ox0kTZU2316yO081WJq5YiQF0xzcj9FdTbgQBdF88n4AhujtGjxUxiBAQZt008xder6TnCbdSfITNTki%2BKDLY99FAO6iusZFZEyGkI9opFKA%2FdIj8DtMJn90skGOqUBx%2BlXxlv1PkhRmWv2vJJEhieDlsYdapa1toSi4TIMY8zZiiJul%2F4BZqchKmZ3ccVwzJvvMhUHrmEpLUQ9l%2BjI0Z%2Bqvpl0RTol2cn%2BoAGMV1%2BSxyI6Slj4W145yKjVIWoYSlGjrsLjJ9TP8v6QQnp22bB13um%2BNk9yBgfM7S9gYOnWDcdkaUE2WcilEW20T%2Bx2ZjHFr%2B%2FZmPWc9Wx74PEFZ7Hz7fwk&X-Amz-Signature=6d456ceb8e8e728531db82469fcdd294648a24b7c5736db1f461a9796e4096a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
