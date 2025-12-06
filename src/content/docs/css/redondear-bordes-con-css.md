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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EVICVSS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxNGKt9dgn91ur2XWx5OxibbNE%2FCahpge%2BHleE1TDOBAiEAlUA1xSfg6LQ5H%2FnRXCnV%2For3XaGWWNE7i9tbmG%2BYc6kq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDOmPquAmYnS2oJb9ISrcA5X1NlR1xIIYelAHXeyLQFlhJP%2F033x1HswZtomQlYM9RdWuXucZLLvRq6gsyweDdC3voVdygYrs%2FIJdwj7U8mxjezZdt%2F8inK97v09S0qSaUXB8mDMs4EZA8ncFq5pWeQQwq7%2F1OhrhvNUChj8g2KZu3%2Fc2jhUhgTzEWU%2FVvrLrdWF%2BlMlrv%2FWBaG4aLTLAf5tUIaPgTXWIGzipSTiiemHOdDtPQgjhJS8oJTLlBCQZTdXXOavIE9lG2zErtNhMLZ1Ey9lXa2%2BolJywQfRY%2Bf1P9A1N%2FzC%2FdIst1X54f1kKyntcmwR43zS%2FUGX2bNZPA1dQP%2FaUnkaerFSTfyjUl80xT4QnvL9xv9GbqXCtqNUh0kPvMoRBw0wKfDaNXBlBfE%2BZu8wW2maxjWYMHkAxpypBh9bKeXKYqeD1AEnYzFxVR1VuMvLPINwwtQWDA8n57GjM9%2FlCJXOUPB5Q2dZP3ptc1Hp6Os91bIgigLQoyaRWyovzl6rxBYMDfdmQfIBHxLyA96a1ZioqKWlqlFtB6hA2u9hhxs7x32Shnje9o%2F5mFhCpKEBQPmX20ve%2F60xD5k3pxiw8xBJvRW3IhKZIRnMFNHFSujYkbg3j9ITdSqWA%2FbiriNHb9YbBXE7VMKGnzskGOqUBMvPfP5jHT0jzKkD8A5K8W8ewOX%2FfKspHxKx1mFQhn8t%2BgiMwtv7FUOE2a3DZWgs%2BEURjE8a3OBtoYMnmvWgZw4rDLp4XisiCUVheY40EvZCLpEMIB3sa3rIJLvZNozDlYUOU46n9j48h2bBPxG%2BbgqQ7QGd6MbuA9pIeqTKhux7DIZEEoq6tG%2FCXytrAvhZ83%2FffFeWnokPpZO0JwOnXHeEhcF9w&X-Amz-Signature=b2cd0e0a4ac686b4253734707aa381222da337b1bf52dbedd9da44bd8862b0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EVICVSS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxNGKt9dgn91ur2XWx5OxibbNE%2FCahpge%2BHleE1TDOBAiEAlUA1xSfg6LQ5H%2FnRXCnV%2For3XaGWWNE7i9tbmG%2BYc6kq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDOmPquAmYnS2oJb9ISrcA5X1NlR1xIIYelAHXeyLQFlhJP%2F033x1HswZtomQlYM9RdWuXucZLLvRq6gsyweDdC3voVdygYrs%2FIJdwj7U8mxjezZdt%2F8inK97v09S0qSaUXB8mDMs4EZA8ncFq5pWeQQwq7%2F1OhrhvNUChj8g2KZu3%2Fc2jhUhgTzEWU%2FVvrLrdWF%2BlMlrv%2FWBaG4aLTLAf5tUIaPgTXWIGzipSTiiemHOdDtPQgjhJS8oJTLlBCQZTdXXOavIE9lG2zErtNhMLZ1Ey9lXa2%2BolJywQfRY%2Bf1P9A1N%2FzC%2FdIst1X54f1kKyntcmwR43zS%2FUGX2bNZPA1dQP%2FaUnkaerFSTfyjUl80xT4QnvL9xv9GbqXCtqNUh0kPvMoRBw0wKfDaNXBlBfE%2BZu8wW2maxjWYMHkAxpypBh9bKeXKYqeD1AEnYzFxVR1VuMvLPINwwtQWDA8n57GjM9%2FlCJXOUPB5Q2dZP3ptc1Hp6Os91bIgigLQoyaRWyovzl6rxBYMDfdmQfIBHxLyA96a1ZioqKWlqlFtB6hA2u9hhxs7x32Shnje9o%2F5mFhCpKEBQPmX20ve%2F60xD5k3pxiw8xBJvRW3IhKZIRnMFNHFSujYkbg3j9ITdSqWA%2FbiriNHb9YbBXE7VMKGnzskGOqUBMvPfP5jHT0jzKkD8A5K8W8ewOX%2FfKspHxKx1mFQhn8t%2BgiMwtv7FUOE2a3DZWgs%2BEURjE8a3OBtoYMnmvWgZw4rDLp4XisiCUVheY40EvZCLpEMIB3sa3rIJLvZNozDlYUOU46n9j48h2bBPxG%2BbgqQ7QGd6MbuA9pIeqTKhux7DIZEEoq6tG%2FCXytrAvhZ83%2FffFeWnokPpZO0JwOnXHeEhcF9w&X-Amz-Signature=d5717cdc3dd04cecd3b3e798600d62b0ff819508c154785ccfc340e0e65fcbb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
