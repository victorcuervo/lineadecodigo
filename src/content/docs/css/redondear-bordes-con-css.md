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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF44NPK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4tlEpB3B35Xysr2Gc7P95AQuHjG3uShP0Z1egZ%2FPQiAiEAoXyPOT9qq7htQTNGCzCUELrHqv2qhemNb1VYNxXGIiUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCdO5a9AAO3xZ37OCrcAy4L9q7krGMMJ%2FZ3Hgy0jUDGmd%2Ff1xzlz0Hl7TBZuNsLjeV%2B9a8nJr%2F9vPzFjyfNbIi4d30FoPZOT%2BrrLvC84vM6rZsprBFvNq%2F9qu7h4Ei35WDMeP%2FAFxXGzyf0YZUgVNLbfYzZII5SfT66FYqtX1rIxX3iHSi1D8jgqQuGcr36P3jgrY2Q80Y%2BFCl1tRXjRgANqiv1Y8%2FAKdtKHWFMLZFdypG4HcDdgzHripHT%2BiUfehRuxD2BsQwZYAoRU%2B6OD4O7ZMjfzsLZ09vnEvY%2BVCE%2FDjxqYE1mFILzo0fSNwY%2BoNqVwBOpqimKFvut9dLaCMn2%2FCHx3oj65vmFqVL968h%2FkwXoWBPd5HazBcRk0ihm%2FMW7lGCJSUH1kQ6Rg%2B94Kg36chsU6Si5xH3zsgI0QoosqENgOAjplzCqYTu8fX5asOhYAd8CL%2BA4sk%2BxDSLJADtMHdpoZnYTqjEfGhoFoFsEUaXUkFERuBxb2iLDAS7Up7JPK4JUafChhZkcvpLW%2FJiFtcwf0HPj6LysiNM%2Bz17VpfQoSaTFfA1NblpiD1f4RE6WKycPPsgpQai0HbZKe7H5BdhNFavlec%2FJQnjpvcqTgjNJZPtB%2FrSNUoobwsIm6kCGdwbUgyq5FzodMPrD38kGOqUBpU4i2Cmk1L%2FrY8LmwAHOBsyJAn8OugPHBYhetkgZjZCRFR4BKEJsmG5dBpnuKDYrH5RNGcbYhbRmW8QcFywHrMPwNiDh24qvnazpS4rroL6CYDM2lSAqI4GdtZ%2FlGKBrU8rAzV6bBVTLpgSnbF0k1ig746qtuXxWO%2B0jw1R6GNwmeK6AcpTd8SsEgI17iKcCteI0qB5U59oi%2FG5n76I6nIx3uQqr&X-Amz-Signature=a97a2757a1bb7192ebfe318d7c3f35b82e00d6975cd33991ecb6f19748309cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF44NPK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4tlEpB3B35Xysr2Gc7P95AQuHjG3uShP0Z1egZ%2FPQiAiEAoXyPOT9qq7htQTNGCzCUELrHqv2qhemNb1VYNxXGIiUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCdO5a9AAO3xZ37OCrcAy4L9q7krGMMJ%2FZ3Hgy0jUDGmd%2Ff1xzlz0Hl7TBZuNsLjeV%2B9a8nJr%2F9vPzFjyfNbIi4d30FoPZOT%2BrrLvC84vM6rZsprBFvNq%2F9qu7h4Ei35WDMeP%2FAFxXGzyf0YZUgVNLbfYzZII5SfT66FYqtX1rIxX3iHSi1D8jgqQuGcr36P3jgrY2Q80Y%2BFCl1tRXjRgANqiv1Y8%2FAKdtKHWFMLZFdypG4HcDdgzHripHT%2BiUfehRuxD2BsQwZYAoRU%2B6OD4O7ZMjfzsLZ09vnEvY%2BVCE%2FDjxqYE1mFILzo0fSNwY%2BoNqVwBOpqimKFvut9dLaCMn2%2FCHx3oj65vmFqVL968h%2FkwXoWBPd5HazBcRk0ihm%2FMW7lGCJSUH1kQ6Rg%2B94Kg36chsU6Si5xH3zsgI0QoosqENgOAjplzCqYTu8fX5asOhYAd8CL%2BA4sk%2BxDSLJADtMHdpoZnYTqjEfGhoFoFsEUaXUkFERuBxb2iLDAS7Up7JPK4JUafChhZkcvpLW%2FJiFtcwf0HPj6LysiNM%2Bz17VpfQoSaTFfA1NblpiD1f4RE6WKycPPsgpQai0HbZKe7H5BdhNFavlec%2FJQnjpvcqTgjNJZPtB%2FrSNUoobwsIm6kCGdwbUgyq5FzodMPrD38kGOqUBpU4i2Cmk1L%2FrY8LmwAHOBsyJAn8OugPHBYhetkgZjZCRFR4BKEJsmG5dBpnuKDYrH5RNGcbYhbRmW8QcFywHrMPwNiDh24qvnazpS4rroL6CYDM2lSAqI4GdtZ%2FlGKBrU8rAzV6bBVTLpgSnbF0k1ig746qtuXxWO%2B0jw1R6GNwmeK6AcpTd8SsEgI17iKcCteI0qB5U59oi%2FG5n76I6nIx3uQqr&X-Amz-Signature=63fb449f3aadf24c101b1290ed7d023597a9780a349fce4b299970f3c4c36699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
