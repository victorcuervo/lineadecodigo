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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7X53252%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwOcfcj8TU%2Fi5tmkmwPy3UbhnceWL39yt1lkW22zDzLwIgfQ7Y0bFva51VAjk7VK2K6eWRhO0%2FBRBwyJ0m%2B51duKUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZdKuhqDM7abiTzrSrcA4vhbK6UCh%2FFcqC3NMZmeTzlykbNL4sxbpluShQzV8gd%2F1p0M7V1TX0wJ3pacQ5BWO9WgV8puG0vEPASVpr8w4Qn4TjaqzM%2FxGviBEto7SQltUqn0z1fpO%2Bf5JS%2F7qTSbi63srgtK7zc%2B6r7nmFvnfdmdj0ak3wNkrgP0jZE0AB7tY4oKO9rQMPlDZ%2FFVnIFWd0RUAyqsnk3IlJd0FO1KSMMmplFndhwrXJBclIuyfQxL1k7as25BcU2Y447iLcHnL0FBew5Myq%2BoxtV2d3WXk%2FTaXz8Sm9llcWPhwBVkJ%2FhnSlk3RhWmI7z9GN5yibc3ja79Gi3ZT2CUOda2XGUK0CcdCvzMZQGDpB6QT1uG0MlDBVe9e7EcnM3mkfot4%2B2a5gZIuOcpht1Y6u1WpBv6mBTklfYURUqIePobluz3%2Fvl0irVLIK91e91C15Oa%2FsKImtkkoAsyxuCVXKnV1ujG%2FmglT143kkKW23xu7JahooK8D2v0MAyXqZUPqgg%2BvzMVKKNzDoThLR614d%2B980egxA4vJKv%2F0SSWTeKYILp29s9IKvB%2BF45yJXHJowLo749NZwWz%2F0Y7ZXwlE4lHWBPif59G6o697M%2FUhiO1sb6OXHMmqoiF9uw9Xs3YoDZMJO61skGOqUBbtQFxd%2BoSTRsHUQDSmKmMupsfDdS3YeVsQ1mC0To8Qx%2Fy5Y0srXFJor6yfpX0yxP5KZxmgwKPlN0%2FBEmuPjunDbdaJ2uYLkntEM6xZ%2B97s0ZCE2iClec8nPNgJldc%2F81r73UvCEbgGUXLm10yH2C1kgEKLntjU65V1Zhm77D1oLaAGXkKNyDRImUvxhHZ7hM8O18PLs1nns0R08VUWWrduVpNc3B&X-Amz-Signature=bf57da884c88221297c660f478af28a1da607b3072dd25a7dc1567ec0ff58059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7X53252%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwOcfcj8TU%2Fi5tmkmwPy3UbhnceWL39yt1lkW22zDzLwIgfQ7Y0bFva51VAjk7VK2K6eWRhO0%2FBRBwyJ0m%2B51duKUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZdKuhqDM7abiTzrSrcA4vhbK6UCh%2FFcqC3NMZmeTzlykbNL4sxbpluShQzV8gd%2F1p0M7V1TX0wJ3pacQ5BWO9WgV8puG0vEPASVpr8w4Qn4TjaqzM%2FxGviBEto7SQltUqn0z1fpO%2Bf5JS%2F7qTSbi63srgtK7zc%2B6r7nmFvnfdmdj0ak3wNkrgP0jZE0AB7tY4oKO9rQMPlDZ%2FFVnIFWd0RUAyqsnk3IlJd0FO1KSMMmplFndhwrXJBclIuyfQxL1k7as25BcU2Y447iLcHnL0FBew5Myq%2BoxtV2d3WXk%2FTaXz8Sm9llcWPhwBVkJ%2FhnSlk3RhWmI7z9GN5yibc3ja79Gi3ZT2CUOda2XGUK0CcdCvzMZQGDpB6QT1uG0MlDBVe9e7EcnM3mkfot4%2B2a5gZIuOcpht1Y6u1WpBv6mBTklfYURUqIePobluz3%2Fvl0irVLIK91e91C15Oa%2FsKImtkkoAsyxuCVXKnV1ujG%2FmglT143kkKW23xu7JahooK8D2v0MAyXqZUPqgg%2BvzMVKKNzDoThLR614d%2B980egxA4vJKv%2F0SSWTeKYILp29s9IKvB%2BF45yJXHJowLo749NZwWz%2F0Y7ZXwlE4lHWBPif59G6o697M%2FUhiO1sb6OXHMmqoiF9uw9Xs3YoDZMJO61skGOqUBbtQFxd%2BoSTRsHUQDSmKmMupsfDdS3YeVsQ1mC0To8Qx%2Fy5Y0srXFJor6yfpX0yxP5KZxmgwKPlN0%2FBEmuPjunDbdaJ2uYLkntEM6xZ%2B97s0ZCE2iClec8nPNgJldc%2F81r73UvCEbgGUXLm10yH2C1kgEKLntjU65V1Zhm77D1oLaAGXkKNyDRImUvxhHZ7hM8O18PLs1nns0R08VUWWrduVpNc3B&X-Amz-Signature=fe82e22ec975bfe942c836b7aa7d8918e133debe86ae3a1e5917a802a87b6a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
