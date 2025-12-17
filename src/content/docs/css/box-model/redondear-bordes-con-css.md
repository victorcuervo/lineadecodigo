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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EKDE6LM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm84QUzKD9nRHt9F1YmMx1vM1f1hVfcz7IJWoq9Fb05AiEA6paHpkF2O5tf8BJom%2F0Nh0y3O6ZlXMnmKa21Ai3neaUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNwLysmxYNucysu7KSrcAxmsKxr2rN03NWIqORlmrp7O%2B2NM6%2FVuUcpWoSA9ScKYdSB76ZvtD0S2%2FmkZrLiS2kpG8dSiD9AXl28w%2FJDebCMNg4NwDAogs4tpNIUjwHAcOTUY7660j6jkYlcPz2g8tLkdX2vDVdoWeXt0kZeFojo1Q9czsoJMOYRYbNQwg%2BwbId1URRZqWDl07AX1IYLZbdg%2ByAH48o6jYiUP%2FiWgy6B8HGFq1O7btlUdecx%2Bx30fwY0R%2F7HMmFh8KAYhzEOkHcDUn%2FSkKJEGX1yvcKg8nsgGvmhfkk9YWdhQMBoQaVnOimReSZspavPdF4U6HTzi%2FdxGN6ZzGg3jyd4gUSx6o7xMvWV9NgAvwMCfoGQaT9SNeklC0r8U99qR23Mf5Tg3YtA7nvmq33F%2FeY6tn5MG1d2wBCzLw6yDkMbPh2gmeSRoh0%2BbyEYwDNMK8FM1CcuIeEe0ipFYoCLGudEkmu6P4xQr2DSXpZDR4Ns6wlRBiX6tXP8HgLmlhi1E6z4dXU%2BdiMrqKzJesxJctF1ljB6V49oufhDWHJSC%2FL%2Fm466Ha8K9xCi73u%2FWqWTyNe2A2omLQEipw2HRBsmvUJcqSFNLTdpBSatJjIKWg8spIltwic7ZOx1XjlFR0iD1F0MJMJ7GisoGOqUBq2zKS7jSyo67lMaBGhcVq8JJachkrycV28mDZ44FgNTKbElWvmymUaZZbmA8dfz%2BsI9WwqqV8e3gLpmEynswR4marEbSJciLd%2B8D2WTiDPDg4PgHevL4xdVW2DYlBril%2FSqxuOuZrN8UJN0gkNyLUugvqYIE0FcxsAWGkqV5MzDNhr%2BNfrqliAd%2BWzFUb0LkzJ6znrvBGOK8cm0YeHKrEnEe6ugx&X-Amz-Signature=731a1a286309307882ee1c3e60d1c8eacead8d2fe57caa67326eae98815a47a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EKDE6LM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm84QUzKD9nRHt9F1YmMx1vM1f1hVfcz7IJWoq9Fb05AiEA6paHpkF2O5tf8BJom%2F0Nh0y3O6ZlXMnmKa21Ai3neaUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNwLysmxYNucysu7KSrcAxmsKxr2rN03NWIqORlmrp7O%2B2NM6%2FVuUcpWoSA9ScKYdSB76ZvtD0S2%2FmkZrLiS2kpG8dSiD9AXl28w%2FJDebCMNg4NwDAogs4tpNIUjwHAcOTUY7660j6jkYlcPz2g8tLkdX2vDVdoWeXt0kZeFojo1Q9czsoJMOYRYbNQwg%2BwbId1URRZqWDl07AX1IYLZbdg%2ByAH48o6jYiUP%2FiWgy6B8HGFq1O7btlUdecx%2Bx30fwY0R%2F7HMmFh8KAYhzEOkHcDUn%2FSkKJEGX1yvcKg8nsgGvmhfkk9YWdhQMBoQaVnOimReSZspavPdF4U6HTzi%2FdxGN6ZzGg3jyd4gUSx6o7xMvWV9NgAvwMCfoGQaT9SNeklC0r8U99qR23Mf5Tg3YtA7nvmq33F%2FeY6tn5MG1d2wBCzLw6yDkMbPh2gmeSRoh0%2BbyEYwDNMK8FM1CcuIeEe0ipFYoCLGudEkmu6P4xQr2DSXpZDR4Ns6wlRBiX6tXP8HgLmlhi1E6z4dXU%2BdiMrqKzJesxJctF1ljB6V49oufhDWHJSC%2FL%2Fm466Ha8K9xCi73u%2FWqWTyNe2A2omLQEipw2HRBsmvUJcqSFNLTdpBSatJjIKWg8spIltwic7ZOx1XjlFR0iD1F0MJMJ7GisoGOqUBq2zKS7jSyo67lMaBGhcVq8JJachkrycV28mDZ44FgNTKbElWvmymUaZZbmA8dfz%2BsI9WwqqV8e3gLpmEynswR4marEbSJciLd%2B8D2WTiDPDg4PgHevL4xdVW2DYlBril%2FSqxuOuZrN8UJN0gkNyLUugvqYIE0FcxsAWGkqV5MzDNhr%2BNfrqliAd%2BWzFUb0LkzJ6znrvBGOK8cm0YeHKrEnEe6ugx&X-Amz-Signature=1b5e891a7e1b5b48d0a23992581110b0e9e0d5decd8903e339dbd3d462aa4e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
