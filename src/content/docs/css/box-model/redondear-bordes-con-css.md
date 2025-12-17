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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL55B7HV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMQaG7vSYIDAKoRNR3JkhqMZhacLUpL6QHLYmytuToFAiAMNLgRCCSEy8Oged2pI6t1lDonlXZh8ID46GxtASskxCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmDvgkmn6%2FFvTl0xKtwDdQ0RPtrFng49U3T5r%2FOwU%2BK0hUWnAIcN%2B4DTpTyhVuI82hsZP7X2z4hxe09UUE3COR91yN%2BvZf3oSMGxqx1AfOxu6AaqeyJVQhZ2O%2BnoPj4l85rx1wOiIiiA3WK4LoGI72pDs4HoeI6KXzafwAFkWI6YN%2BY9QkCQUaWTO2awQT7YfGhJpyIJLcODx33woEpXPAZGX5nyr5W6WkkvFQdK1Y7aqLjCsMkDMtCT77ZHMjhP%2F%2Fp1M%2BcIaq64Ed%2FQYPIs3LEXoEHn7XokDygncOtwnU%2BW6cL1u5u871A7avIm6CkeC9z%2BmYdBD1NXI9JXnzgpa3At%2BmRYk2g%2BZam%2BypnnpenBw1QE9iZhglVtjmvqvW5iAE3yjbaK0Glt4YUgj5Ag79iSBYz8wpwDlKTjHonmqoNr%2Bb8BGZ82E%2BZjV%2FaDaPOaE8axMLoXx1ZwCPBuXT6Gje8MoSxx2gs8ytyzFTmVkkZojJjKqGc3Bfe0WEj8ClbJ01LSMO22cdWJuAgXyij3oEsmEb3URwTWgyI6G4%2BEHNwFAuIvp8DgV7hZMm9BQwSnBwYRU8MGuaY5iUY2%2BDnbXOgKWKHXfGWAlYHIfAKI2ekCFNykvH7d7JqatESAIfQ4LjP%2B1pc%2B8A7RUAAwmp%2BLygY6pgEe4AmiT8yNZReTy2xd2brt2Szmdu00J2DLRjmIGAmm32hHPZ2c2gla47NisdqzqbpnjVZARCipf90xkFyjbuj8W3teCyHRbThTIz%2FryiLmjO6Fcr4b3f1mcV0ekoYsXZx3kSv1fwf2G%2BhI7aJiHOCqOvHQwZkXJHjSHTIQvUwaoaxzRrZR9UqdpK5r%2BavmV6LVAfyBeHdlWzznLiQuxN2hcUXUhSJ6&X-Amz-Signature=33214cc219e2f02f86c2d3ec870f40bc1323a2212582d7cb33f3ac10ceca29f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL55B7HV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMQaG7vSYIDAKoRNR3JkhqMZhacLUpL6QHLYmytuToFAiAMNLgRCCSEy8Oged2pI6t1lDonlXZh8ID46GxtASskxCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmDvgkmn6%2FFvTl0xKtwDdQ0RPtrFng49U3T5r%2FOwU%2BK0hUWnAIcN%2B4DTpTyhVuI82hsZP7X2z4hxe09UUE3COR91yN%2BvZf3oSMGxqx1AfOxu6AaqeyJVQhZ2O%2BnoPj4l85rx1wOiIiiA3WK4LoGI72pDs4HoeI6KXzafwAFkWI6YN%2BY9QkCQUaWTO2awQT7YfGhJpyIJLcODx33woEpXPAZGX5nyr5W6WkkvFQdK1Y7aqLjCsMkDMtCT77ZHMjhP%2F%2Fp1M%2BcIaq64Ed%2FQYPIs3LEXoEHn7XokDygncOtwnU%2BW6cL1u5u871A7avIm6CkeC9z%2BmYdBD1NXI9JXnzgpa3At%2BmRYk2g%2BZam%2BypnnpenBw1QE9iZhglVtjmvqvW5iAE3yjbaK0Glt4YUgj5Ag79iSBYz8wpwDlKTjHonmqoNr%2Bb8BGZ82E%2BZjV%2FaDaPOaE8axMLoXx1ZwCPBuXT6Gje8MoSxx2gs8ytyzFTmVkkZojJjKqGc3Bfe0WEj8ClbJ01LSMO22cdWJuAgXyij3oEsmEb3URwTWgyI6G4%2BEHNwFAuIvp8DgV7hZMm9BQwSnBwYRU8MGuaY5iUY2%2BDnbXOgKWKHXfGWAlYHIfAKI2ekCFNykvH7d7JqatESAIfQ4LjP%2B1pc%2B8A7RUAAwmp%2BLygY6pgEe4AmiT8yNZReTy2xd2brt2Szmdu00J2DLRjmIGAmm32hHPZ2c2gla47NisdqzqbpnjVZARCipf90xkFyjbuj8W3teCyHRbThTIz%2FryiLmjO6Fcr4b3f1mcV0ekoYsXZx3kSv1fwf2G%2BhI7aJiHOCqOvHQwZkXJHjSHTIQvUwaoaxzRrZR9UqdpK5r%2BavmV6LVAfyBeHdlWzznLiQuxN2hcUXUhSJ6&X-Amz-Signature=c7aa120183c3eeb07c198021d67e928c42105e1717a1fcefdb9e56e61d3201d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
