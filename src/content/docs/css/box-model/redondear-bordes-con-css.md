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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKFGOCG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkT5iotViw0T64NmEXNjQAc9RvPQG91rhBqyjlBTwIMAiEAlqVWgyDn8VURue67%2Ff1utbyLNmAEGIdb9dsVTCaZnOIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG7vLE85GUZV%2FWz4HyrcA8LwThFbBOd5UeYGCFrF7U6aA%2BzoTpohmMc3oSD0vIDqjMhqoMAaaGrAy%2F0Aq2f34gz7gdV3CJrRW3sbNZZ0iTDh%2BQlQ9XT6cKSGy5DGxyuIV8r0urmYMxR0GSMUvI0ih98On7t0B8gqa0TgTXYU1iAR75aTCHgz59Ol1ssawxno9hnH%2BWWRt6mZ%2BzOliFIcCZhVlYGS9b2ermMKXg3mbPKOjorem2QiikYv%2FoYgCjPKXt1ZJEa3C1aKLe2oblPnXqRWFGEypfZyYWH5GS3gMrJuYksCWmLaA86VncgLpEtAsflRaDoEwKv6ycg1Mz%2B0hrNk%2FzS82kq3EBoTPGa%2BjeR40tlbltk9yQR65EsWN8zSDaU31e0uQqIAPzzfbw4PXpA4OrPBOzn22pmXy1VtMXUmoENo2z%2Fm7LbX6NFxNXPr6yKfDCNAJhn1WxOq2j%2BmuVZJzNM3Cn%2B7hdFT%2BvoThQzSjR0RUT0WWuCkZ%2FYDXYLIhL6qbkgF6CIR0UdjEKKRWMJCQn6ctqS0pWlpD2PaVFaCZlh0xdkzUgVrxybn%2BZP68juvAtoCwMsYkrN%2FbvCT1wb%2BqSS3XCHp93wj83IzU%2FmiIki5iqeZkFnBcUZk5au9dScc%2FT%2BxyPJLwGF5MMzSicoGOqUBgcUpiHt9xSd7DYtEQ1vBdA8WoN4K8%2FqMc5X11qWJeaAVXS4qTk39csRRiXXam5CYm9PCCdHkoUdWNwCrf%2B5d5pAJGwGv7iTbE95NWaFaJVdWlQ1QEaYis3Eh6HsADQHSfQCuo5hI%2FLWwBb7wpHd425MZ51RNcRX%2BWDR67jnVZIw0LOhIj%2FeIRb17bNpHHu7r5i%2FjaoYqt%2Bzx7zf1VxIOSmKrTt5J&X-Amz-Signature=92e38ca21d9cfe333c06815b4c27fc1940f9dbdc17d878d6dd53e48846ad53f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKFGOCG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkT5iotViw0T64NmEXNjQAc9RvPQG91rhBqyjlBTwIMAiEAlqVWgyDn8VURue67%2Ff1utbyLNmAEGIdb9dsVTCaZnOIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG7vLE85GUZV%2FWz4HyrcA8LwThFbBOd5UeYGCFrF7U6aA%2BzoTpohmMc3oSD0vIDqjMhqoMAaaGrAy%2F0Aq2f34gz7gdV3CJrRW3sbNZZ0iTDh%2BQlQ9XT6cKSGy5DGxyuIV8r0urmYMxR0GSMUvI0ih98On7t0B8gqa0TgTXYU1iAR75aTCHgz59Ol1ssawxno9hnH%2BWWRt6mZ%2BzOliFIcCZhVlYGS9b2ermMKXg3mbPKOjorem2QiikYv%2FoYgCjPKXt1ZJEa3C1aKLe2oblPnXqRWFGEypfZyYWH5GS3gMrJuYksCWmLaA86VncgLpEtAsflRaDoEwKv6ycg1Mz%2B0hrNk%2FzS82kq3EBoTPGa%2BjeR40tlbltk9yQR65EsWN8zSDaU31e0uQqIAPzzfbw4PXpA4OrPBOzn22pmXy1VtMXUmoENo2z%2Fm7LbX6NFxNXPr6yKfDCNAJhn1WxOq2j%2BmuVZJzNM3Cn%2B7hdFT%2BvoThQzSjR0RUT0WWuCkZ%2FYDXYLIhL6qbkgF6CIR0UdjEKKRWMJCQn6ctqS0pWlpD2PaVFaCZlh0xdkzUgVrxybn%2BZP68juvAtoCwMsYkrN%2FbvCT1wb%2BqSS3XCHp93wj83IzU%2FmiIki5iqeZkFnBcUZk5au9dScc%2FT%2BxyPJLwGF5MMzSicoGOqUBgcUpiHt9xSd7DYtEQ1vBdA8WoN4K8%2FqMc5X11qWJeaAVXS4qTk39csRRiXXam5CYm9PCCdHkoUdWNwCrf%2B5d5pAJGwGv7iTbE95NWaFaJVdWlQ1QEaYis3Eh6HsADQHSfQCuo5hI%2FLWwBb7wpHd425MZ51RNcRX%2BWDR67jnVZIw0LOhIj%2FeIRb17bNpHHu7r5i%2FjaoYqt%2Bzx7zf1VxIOSmKrTt5J&X-Amz-Signature=765edb37bdaf46e5e611fa0d7021a730c7f6f0e8f20c7e340a3a3156f5569f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
