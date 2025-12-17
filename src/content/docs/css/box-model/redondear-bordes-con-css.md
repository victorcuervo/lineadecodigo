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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KS6PDO7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIckEYNjxIXTVF%2Bmo96VjaD6m9wF3iWMcAupPN8DfNvAiB76V25utfFh8ygVsxLidgOPEGXKv%2FvR6s1SDsCFtxbBCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMy9PSw381Rb4weIkfKtwDEZdKwmT1W6t%2Bkkq7i18Ki8X%2B9O%2FM75riqDAzJjg6MeRJk5vFXHeU5KWvjc6QpbrMwfkW%2FaO%2F5TredR35pTCiyI2VzeINk8zInkUFt8eABw4NGC4XakThbQyCgZc9la0rgtUCVa%2Bbpp6Lf8ikJH1xF6sC9dyU4%2BnR8jkUdVnJI9GRztxmjyAWop87qkyz%2FJB4pgvMq1elYVuDWqyZEIEVn5Vfft6T3f0pbRvyJrLYEiiSdYPgs91ObdP%2Bj5IBV4pBqRoBei1GkcgHDbzjTnu%2B1NTOR1SS2NvbvkrtiD%2BZN2ti5N7bj%2BZZqFQNNIPEX6K%2BSAPRmd3aRn12opBpDaNxdHmbmBXuMwl2ePUKdobQAWL0wamgFnzukC2v%2BARL%2BKY%2FqmC19vYJk%2FJ2uhgS5q8qkS0nBI2U%2BKQELvY05TTpR5YsIxWcKP0mPZhmv26PIHxJB4EUOZM262BXW3qtAI56smPCJgN%2FuRupgINL5dTRbtEaunNmsTWgDcY2v4rcUbq2KCJ5yb0ZoZmkg10REykyFrtbRzBRo%2Fgg0qD1bc2GtdUyyyLUfuIh06RGlixSS4VIa%2BzB6%2FTtFYVUKgAXxCGIwxMno54OPXK5p8YzxGV5kf%2BivFKVKfsTQVSq0hUwxMaKygY6pgE6g8D%2F44Kf8NeY4i%2BfBTYMyHIyeLTCewKOdFHAP9kvzTIFGPuliJplU4FImF%2Bp%2FD0nVQ%2BwvONZEU69ka8z%2BuFRCstlILj%2FKccSB5HfZ3uaHorDapFl%2FFGVM18U1ycFs23MQefe3LZDQebERavYmZctuOprtSLoDUgL%2FhsnUriGH%2F6EG2xvBdqn3YqqkIgSk%2Bx5iQbHFMZqG6UHUmFPDMSkcoVmobYO&X-Amz-Signature=93e1eed2b6dce5c24bedc6fc580bf892bc9301361cf0e0bb2b0d7136ac2229fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KS6PDO7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIckEYNjxIXTVF%2Bmo96VjaD6m9wF3iWMcAupPN8DfNvAiB76V25utfFh8ygVsxLidgOPEGXKv%2FvR6s1SDsCFtxbBCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMy9PSw381Rb4weIkfKtwDEZdKwmT1W6t%2Bkkq7i18Ki8X%2B9O%2FM75riqDAzJjg6MeRJk5vFXHeU5KWvjc6QpbrMwfkW%2FaO%2F5TredR35pTCiyI2VzeINk8zInkUFt8eABw4NGC4XakThbQyCgZc9la0rgtUCVa%2Bbpp6Lf8ikJH1xF6sC9dyU4%2BnR8jkUdVnJI9GRztxmjyAWop87qkyz%2FJB4pgvMq1elYVuDWqyZEIEVn5Vfft6T3f0pbRvyJrLYEiiSdYPgs91ObdP%2Bj5IBV4pBqRoBei1GkcgHDbzjTnu%2B1NTOR1SS2NvbvkrtiD%2BZN2ti5N7bj%2BZZqFQNNIPEX6K%2BSAPRmd3aRn12opBpDaNxdHmbmBXuMwl2ePUKdobQAWL0wamgFnzukC2v%2BARL%2BKY%2FqmC19vYJk%2FJ2uhgS5q8qkS0nBI2U%2BKQELvY05TTpR5YsIxWcKP0mPZhmv26PIHxJB4EUOZM262BXW3qtAI56smPCJgN%2FuRupgINL5dTRbtEaunNmsTWgDcY2v4rcUbq2KCJ5yb0ZoZmkg10REykyFrtbRzBRo%2Fgg0qD1bc2GtdUyyyLUfuIh06RGlixSS4VIa%2BzB6%2FTtFYVUKgAXxCGIwxMno54OPXK5p8YzxGV5kf%2BivFKVKfsTQVSq0hUwxMaKygY6pgE6g8D%2F44Kf8NeY4i%2BfBTYMyHIyeLTCewKOdFHAP9kvzTIFGPuliJplU4FImF%2Bp%2FD0nVQ%2BwvONZEU69ka8z%2BuFRCstlILj%2FKccSB5HfZ3uaHorDapFl%2FFGVM18U1ycFs23MQefe3LZDQebERavYmZctuOprtSLoDUgL%2FhsnUriGH%2F6EG2xvBdqn3YqqkIgSk%2Bx5iQbHFMZqG6UHUmFPDMSkcoVmobYO&X-Amz-Signature=8a8500401d0177439c43946f35679b35a6bf4f9f93cc229918056c53dd982975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
