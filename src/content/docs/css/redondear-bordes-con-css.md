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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RAKCJQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQzOfWWe13lAvTKCM8eMckA7n7TGHWP%2FPFgOq33uDvpAIgAwQ%2FpqaqDAGknbS4cN0MxIlO4%2BNgCurewqo7lV%2FGlDEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL3Y0A5m2q5TbYwlzircA6Lfpvs9WX25vVxfueU3lp2UxwK4jJrXIW6hxXdPlzewJQsXwjhUB%2BK1OKymDs5zFL1ACOD2k%2FQyn5YhNtZ85d6iYmUQXgQnUnGdE5exprLbChTJU%2BT0NbilBoDB0YMMBp%2BXfYum%2FthdTHfKwrEP7WeknWV21eBb%2BmSdavXkr9vCqDoUlJxIROd9VURknLqX%2FmtyWN9949Sg2XI46a2x5udrzYueMUnWxE9HKOVFSRSit49PwoGz8r8dsUnNWGLSTKVbg9KONU%2FrA0iQVDo%2Fud%2F8a6%2BUwCDoipwDqv9L9TGui%2BihTqB6Spc0DR1sePGjAvkd3oBBjb58gdjXTupie7SBJNH0wtlExTEJgsgmKdYEWOTPYSzSiQ6MInInkymaSHxiaxo2z2JeCrlVZ%2FR37Yz3LNuWXOkOripEakdMzDLTzd5FBtULo%2Fi6g8DEZZ1HUFcJP9LZOyaH7DWRSgwxJA0bR5RhFGFmC6FRpPR4zecX0E95yphI%2FF3Gjv70fgYxoF5Ly8SJv1RauKNU0Rb5dW8lDF4v3uw8hGdZ4oWGnqrtyazNZScmmi04R288AV4wvwA7SbD3%2FNhTfCPK8NQxeaZgCdGi0r9UBzcSimXJQFgOFAzlxM5xN4Y%2BjFeSMJSez8kGOqUBE69YVkLrGl73DS%2BY7MPCInM2gEMssLgrTWvU8dtGp7DrUiuxL4PxGMK1L%2Fz7791D%2BqPqTaaIILGCG%2B6jQJCtdqgjrIRv6tEVJ70PFWHkWvunRv2IJ%2Fhf9rurrk7XMzSdVjWQgV5jyE4rF5eohsIFboYNo04F%2FoCN2lZZ6irYY2FaMtjxaLEsJlXIoBMeTr7B%2FxI%2FWgP4AVveigucg90fKETov7y1&X-Amz-Signature=03cb0c1d3e7abef5c543cb590ce82008a47c6c02806e71ad84a155262b79a5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RAKCJQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQzOfWWe13lAvTKCM8eMckA7n7TGHWP%2FPFgOq33uDvpAIgAwQ%2FpqaqDAGknbS4cN0MxIlO4%2BNgCurewqo7lV%2FGlDEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL3Y0A5m2q5TbYwlzircA6Lfpvs9WX25vVxfueU3lp2UxwK4jJrXIW6hxXdPlzewJQsXwjhUB%2BK1OKymDs5zFL1ACOD2k%2FQyn5YhNtZ85d6iYmUQXgQnUnGdE5exprLbChTJU%2BT0NbilBoDB0YMMBp%2BXfYum%2FthdTHfKwrEP7WeknWV21eBb%2BmSdavXkr9vCqDoUlJxIROd9VURknLqX%2FmtyWN9949Sg2XI46a2x5udrzYueMUnWxE9HKOVFSRSit49PwoGz8r8dsUnNWGLSTKVbg9KONU%2FrA0iQVDo%2Fud%2F8a6%2BUwCDoipwDqv9L9TGui%2BihTqB6Spc0DR1sePGjAvkd3oBBjb58gdjXTupie7SBJNH0wtlExTEJgsgmKdYEWOTPYSzSiQ6MInInkymaSHxiaxo2z2JeCrlVZ%2FR37Yz3LNuWXOkOripEakdMzDLTzd5FBtULo%2Fi6g8DEZZ1HUFcJP9LZOyaH7DWRSgwxJA0bR5RhFGFmC6FRpPR4zecX0E95yphI%2FF3Gjv70fgYxoF5Ly8SJv1RauKNU0Rb5dW8lDF4v3uw8hGdZ4oWGnqrtyazNZScmmi04R288AV4wvwA7SbD3%2FNhTfCPK8NQxeaZgCdGi0r9UBzcSimXJQFgOFAzlxM5xN4Y%2BjFeSMJSez8kGOqUBE69YVkLrGl73DS%2BY7MPCInM2gEMssLgrTWvU8dtGp7DrUiuxL4PxGMK1L%2Fz7791D%2BqPqTaaIILGCG%2B6jQJCtdqgjrIRv6tEVJ70PFWHkWvunRv2IJ%2Fhf9rurrk7XMzSdVjWQgV5jyE4rF5eohsIFboYNo04F%2FoCN2lZZ6irYY2FaMtjxaLEsJlXIoBMeTr7B%2FxI%2FWgP4AVveigucg90fKETov7y1&X-Amz-Signature=93880e3d99595813499dd664ffbf9f8ae5cab98d66377af46d3b429ede41c614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
