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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNW2HRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsYVIqRVejG6My8SAhkhuE8%2FoAGRU4GVZOYHNvctbScQIgW5RU57Qm2Q9UKro%2FCntv%2BznyotBeuuicEiXyZ9zKwE8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJorBXVmz0ARfQPMSircA7HlaiFN0JuKMNErWBplcpg5OTt3g1OyEUhOY2D3bu7Xzp0pBxS9sra6zqT0p%2FkctzdksTjaFQe1ADo8JRk14oNRW2HQeG4ZomxKWPFtVE8xUKlJwmuHDUGoXi6gr%2B21ltrMSFv4OGIq6PBIA4oVKlLKdKa1czM27GTnfHjKyDoz%2B5YSbe1zT%2BP88lv1f%2FtnWNEPjWJkoyuQar0XPYqKox5N%2Fq7iONj5MJRuhaCWgWpMrgMGeKe5eISigiYlh%2FXrWRHm5YIfYA0%2Bql4tCLTQ48wF9uAdr5TvnbjoGJPcxTYwYzWRRe0CKAbGmSgw2cSqa9oDCw3I%2FEJAYS4Yh0vpMKV7hcQkDjNNu2OMHcxOHbn88mW6VBhQj%2Ba8x%2FFRrxpMG3xNjG2k1IyPqKMeVoblc5VbWNn2%2BRvyWs9gkao5dmxSoNBGaPv7Sd1ZgyDYL0g0kPh23aty5%2FjFtKY0t7GJRvVr%2FXiWA84fvhKPHIkdiWTxU1I2385cWzanfWC6SoxoEkScf81ZsSf893nnDKOPMnKv1qkH59AMVnYbKz9ITBPy%2BpZy04GBj9E8fNih00hh1saFsyvjt6zwvIfq3RINL6u8jj%2BrEw%2Bg5CnGonltr7BoVpR4X%2BdmlLJD6wJyMJmqisoGOqUB9suVet3dZkD5JyVu5r1pk9THu7j9fYF2GG1cJOZlVmIZBGXKNX7XC0zo0aFD7tXKWlBDaPN%2Bzt0FQlvbHbpr06AsxVXgAScuVouwthNQEeTsV%2BWT88hoFpzju5F8GPhgSE1MALvC5RGImblSm1LixVUeO0iXtlvwtQqVHyhxXer648TzIC9rDz6xO7hYK4miz2gg5wHKiLVknbQeNC9ntzr1Hq80&X-Amz-Signature=d3c2a2f53071933f28bece95b5b1d15d2c0980ee2b64d0a647de970783e2d168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXNW2HRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsYVIqRVejG6My8SAhkhuE8%2FoAGRU4GVZOYHNvctbScQIgW5RU57Qm2Q9UKro%2FCntv%2BznyotBeuuicEiXyZ9zKwE8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJorBXVmz0ARfQPMSircA7HlaiFN0JuKMNErWBplcpg5OTt3g1OyEUhOY2D3bu7Xzp0pBxS9sra6zqT0p%2FkctzdksTjaFQe1ADo8JRk14oNRW2HQeG4ZomxKWPFtVE8xUKlJwmuHDUGoXi6gr%2B21ltrMSFv4OGIq6PBIA4oVKlLKdKa1czM27GTnfHjKyDoz%2B5YSbe1zT%2BP88lv1f%2FtnWNEPjWJkoyuQar0XPYqKox5N%2Fq7iONj5MJRuhaCWgWpMrgMGeKe5eISigiYlh%2FXrWRHm5YIfYA0%2Bql4tCLTQ48wF9uAdr5TvnbjoGJPcxTYwYzWRRe0CKAbGmSgw2cSqa9oDCw3I%2FEJAYS4Yh0vpMKV7hcQkDjNNu2OMHcxOHbn88mW6VBhQj%2Ba8x%2FFRrxpMG3xNjG2k1IyPqKMeVoblc5VbWNn2%2BRvyWs9gkao5dmxSoNBGaPv7Sd1ZgyDYL0g0kPh23aty5%2FjFtKY0t7GJRvVr%2FXiWA84fvhKPHIkdiWTxU1I2385cWzanfWC6SoxoEkScf81ZsSf893nnDKOPMnKv1qkH59AMVnYbKz9ITBPy%2BpZy04GBj9E8fNih00hh1saFsyvjt6zwvIfq3RINL6u8jj%2BrEw%2Bg5CnGonltr7BoVpR4X%2BdmlLJD6wJyMJmqisoGOqUB9suVet3dZkD5JyVu5r1pk9THu7j9fYF2GG1cJOZlVmIZBGXKNX7XC0zo0aFD7tXKWlBDaPN%2Bzt0FQlvbHbpr06AsxVXgAScuVouwthNQEeTsV%2BWT88hoFpzju5F8GPhgSE1MALvC5RGImblSm1LixVUeO0iXtlvwtQqVHyhxXer648TzIC9rDz6xO7hYK4miz2gg5wHKiLVknbQeNC9ntzr1Hq80&X-Amz-Signature=400f715d343d437586c9d5523ead5288a11684c04c58c28bb3e4284c7f54b30b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
