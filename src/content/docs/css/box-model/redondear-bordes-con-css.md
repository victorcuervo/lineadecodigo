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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6RG46UF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpUg18LYvkPFrd3L8kKnpj12bFqprfyCu9lI1y3EuABAiEA9wzoWMjKomydTp6Xj8PYEOHMbwuPYjawMyHUTLwctmoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAqG3jjJzwxow0YkCrcAxi4upgv3zlJWjJ1n7EyU0S6NeDZeFJLbLJF60JKHjzK3ZcAFB0ovyWCT%2FIzy1xa5o6x%2FQZP3T8Fq2z4OfOd9lvCvRpZC7TcLYPSOglqB0xDxTt%2BVDKzF6735Y7TMjigiE86BzI2fHanhYJE9iyCYktNYsNr8%2FO%2FaZJQKZpQ21oTo3kKHHGZfpwMC13iNkjQVPHp%2B3L1QA4UzYV32iRconIzFdcO%2B5PbuQu5h8knRpFlcngpR6Zk95wzulRnjHQupQcr%2BEeKI5qPix8icIegSTza8Cw2yewEGgrnGv82%2FyXvXJf1R%2FclT%2FFPkFbwN5LKTLlX%2FpKDf4StRKKvF03GqdooaCL9XE0tyzEmPseuzBaE7piqsVKdgm8H%2FQ7%2FQxDRWLH7LMGNQjX2HMKuCLnYgbGM6g%2B7jkKMKwWgGhFbPm4SKqUL4SYkMvxZGftUlXIHzu3%2FTCMmGUxMkkDoXQqxzOOAr1krd5htOy4tpZALKPXf0XX1v74cfxgTCi%2BA2BDlYXnfGfbHAceArvGyTPLmpxSXmqYUQGe5kho4MK99DOIHiHJeA3vE2PhAdHt%2BMtPVgGhcoN%2Bkh1py5ACT6RGX08012WDguKJciPgKOmPy6u%2FYyS0%2BBpopU2eOqmbGMPL%2FisoGOqUBWUD8RARudOLQmqeC9ZAW8HbSuCS99wdRvz53V7ed0huN4qNvSY%2By9tr9mUFWeZgLV%2Bujn4ZqTlDPgndCoRBqbTDfWZuJNhuCaLTkZ%2B3GW5IN2ktw7WKw7G6h4m4dDaA62RuWUmH8gBSma0dsva5qrA7sUbPTrTWjYApxcLdtLLawFaV%2FLfn2b%2BM7Jm5mI5%2B9lIM1ccT5T01IdefsTLs%2F4%2Bapjy67&X-Amz-Signature=3899ac69cffec8c8a885e6a9b0a10c7366b5e0537815ef2acc90d26cc36fcd38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6RG46UF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpUg18LYvkPFrd3L8kKnpj12bFqprfyCu9lI1y3EuABAiEA9wzoWMjKomydTp6Xj8PYEOHMbwuPYjawMyHUTLwctmoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAqG3jjJzwxow0YkCrcAxi4upgv3zlJWjJ1n7EyU0S6NeDZeFJLbLJF60JKHjzK3ZcAFB0ovyWCT%2FIzy1xa5o6x%2FQZP3T8Fq2z4OfOd9lvCvRpZC7TcLYPSOglqB0xDxTt%2BVDKzF6735Y7TMjigiE86BzI2fHanhYJE9iyCYktNYsNr8%2FO%2FaZJQKZpQ21oTo3kKHHGZfpwMC13iNkjQVPHp%2B3L1QA4UzYV32iRconIzFdcO%2B5PbuQu5h8knRpFlcngpR6Zk95wzulRnjHQupQcr%2BEeKI5qPix8icIegSTza8Cw2yewEGgrnGv82%2FyXvXJf1R%2FclT%2FFPkFbwN5LKTLlX%2FpKDf4StRKKvF03GqdooaCL9XE0tyzEmPseuzBaE7piqsVKdgm8H%2FQ7%2FQxDRWLH7LMGNQjX2HMKuCLnYgbGM6g%2B7jkKMKwWgGhFbPm4SKqUL4SYkMvxZGftUlXIHzu3%2FTCMmGUxMkkDoXQqxzOOAr1krd5htOy4tpZALKPXf0XX1v74cfxgTCi%2BA2BDlYXnfGfbHAceArvGyTPLmpxSXmqYUQGe5kho4MK99DOIHiHJeA3vE2PhAdHt%2BMtPVgGhcoN%2Bkh1py5ACT6RGX08012WDguKJciPgKOmPy6u%2FYyS0%2BBpopU2eOqmbGMPL%2FisoGOqUBWUD8RARudOLQmqeC9ZAW8HbSuCS99wdRvz53V7ed0huN4qNvSY%2By9tr9mUFWeZgLV%2Bujn4ZqTlDPgndCoRBqbTDfWZuJNhuCaLTkZ%2B3GW5IN2ktw7WKw7G6h4m4dDaA62RuWUmH8gBSma0dsva5qrA7sUbPTrTWjYApxcLdtLLawFaV%2FLfn2b%2BM7Jm5mI5%2B9lIM1ccT5T01IdefsTLs%2F4%2Bapjy67&X-Amz-Signature=f212cf9654c348562fa6fa4d27c527f230b77f2130f5e52218a0ee2e87d542d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
