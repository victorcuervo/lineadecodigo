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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHY4BIO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1NdYRWts6H3km%2FbXjlCk5exlGiQ%2Ff5lPyU6naieAZQAiEA5Y830NI%2FpDcv9lRZR49k9xCkUt50JKbPPSVstj4W%2B94qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5AXDNOq2%2F297Tg6SrcA6mh9VkgaNytEvWM6PWUOqDiJLfAElr6UZFKw%2F6LL%2F7E3Q6viAWzbZva9qP%2Bc65AQGRs%2BZVA05w7GlYLBQa1KwTGBsFBVKEaUasoqWo80G%2BAQqe0I3h2ZLf7PHv83KdriCsKnNIj2UPltK5v4MTGThJRB44%2BoVx9lc9yxtq1Eu9YMAGg3b8I6mFEmGLWMWZ2xJwFVl%2FxUN0%2BwKPY6CnPjc8vIg3bwZr96vd4EeWcKkFuEhvef6eXrreRzTODGzfIAZ8gco2p4pI7QuDvJ0QdbnqWjIfthPsiMC%2F8jbJuSLvc2JWb3W%2FZitkRiIrP0siDxUF4SrTRNZkXbj%2FbsVJu%2B7F8A7zYeWXHy%2Fn9s%2F8RwF6R5DNKde4Uvh68Tg%2B0aA5RPfQzGWOkLZblZI%2BiD2ghpUF0NvwftRJfynOPAESY5ZuiGRt%2FnX0bKQNoBBaz7DIwy5DXRpMHT9HvuYDqZo5gL6cazkFgrc200ClSkpdNLCLA3tdJFeQgBSI1neQ37JoKDYG44YouCM%2B6XDB6mtlTJYhhETdTN7j81Jbm1QaF3fNmlElVG2iN%2FD98sKy7ComVFdqSsmQ65EXl57Fnshp3fOlvZ%2BG6vB2Lgejm%2FgkDPuAfVBRtlpc%2FXfbyk9rAML%2Fl3skGOqUBvfulywFq8FAnOxHE4dQKc7Q7vHOb5lz6bxgawt9jYEYQZ9kVp9bvLEGZdPUQzuhB9a2pJT49afUxWAP87s0p0nXS%2Bt757zWp3RlR7HA1NPU8Pex8Te%2FqAWE0G9cw0CUgwSzrNpXGAf%2Fj%2BrqbbzFsNjFn%2Fdz5UST%2FKSaZ8c7Eg%2BFrHiZdt4EPav5EsPU7fJcYciulhIBI2hZf6Wk2YL0baJMfFmTo&X-Amz-Signature=c0c2d959d3af4cdff0258eb4285cfbf545dfe44db5d93dbeff4bcd0b0e6d6d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHY4BIO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1NdYRWts6H3km%2FbXjlCk5exlGiQ%2Ff5lPyU6naieAZQAiEA5Y830NI%2FpDcv9lRZR49k9xCkUt50JKbPPSVstj4W%2B94qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5AXDNOq2%2F297Tg6SrcA6mh9VkgaNytEvWM6PWUOqDiJLfAElr6UZFKw%2F6LL%2F7E3Q6viAWzbZva9qP%2Bc65AQGRs%2BZVA05w7GlYLBQa1KwTGBsFBVKEaUasoqWo80G%2BAQqe0I3h2ZLf7PHv83KdriCsKnNIj2UPltK5v4MTGThJRB44%2BoVx9lc9yxtq1Eu9YMAGg3b8I6mFEmGLWMWZ2xJwFVl%2FxUN0%2BwKPY6CnPjc8vIg3bwZr96vd4EeWcKkFuEhvef6eXrreRzTODGzfIAZ8gco2p4pI7QuDvJ0QdbnqWjIfthPsiMC%2F8jbJuSLvc2JWb3W%2FZitkRiIrP0siDxUF4SrTRNZkXbj%2FbsVJu%2B7F8A7zYeWXHy%2Fn9s%2F8RwF6R5DNKde4Uvh68Tg%2B0aA5RPfQzGWOkLZblZI%2BiD2ghpUF0NvwftRJfynOPAESY5ZuiGRt%2FnX0bKQNoBBaz7DIwy5DXRpMHT9HvuYDqZo5gL6cazkFgrc200ClSkpdNLCLA3tdJFeQgBSI1neQ37JoKDYG44YouCM%2B6XDB6mtlTJYhhETdTN7j81Jbm1QaF3fNmlElVG2iN%2FD98sKy7ComVFdqSsmQ65EXl57Fnshp3fOlvZ%2BG6vB2Lgejm%2FgkDPuAfVBRtlpc%2FXfbyk9rAML%2Fl3skGOqUBvfulywFq8FAnOxHE4dQKc7Q7vHOb5lz6bxgawt9jYEYQZ9kVp9bvLEGZdPUQzuhB9a2pJT49afUxWAP87s0p0nXS%2Bt757zWp3RlR7HA1NPU8Pex8Te%2FqAWE0G9cw0CUgwSzrNpXGAf%2Fj%2BrqbbzFsNjFn%2Fdz5UST%2FKSaZ8c7Eg%2BFrHiZdt4EPav5EsPU7fJcYciulhIBI2hZf6Wk2YL0baJMfFmTo&X-Amz-Signature=869763a777d4bbfb7ff91fd2e5eaa09e220da351a0cd9cfc0edb3e5428c0e79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
