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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XADOOYY4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2TYGta18IOa0p%2FO%2F8eRkgpmhycCY7vPRkAOuPZVst8wIhANqEuYMQDONE0jDMmX%2BMzkRjuJjLzxvoBf5xobilIgC8KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxH9a6W5DiFePEfPAq3ANbzBwx3R3uh%2FPfVnILE6AGLuk9O0OqD6cO9XN1vN7b2acxmw3l0XUW2brPfee0KQlRvuowq2Ibn5UyMmBIt11FF9efVww8cm2uU3mMc%2By3nyz3P6ajyRujz0%2BM%2FuIQ%2FpMrcFpZ4goHTgpTHqlg%2BpBZdHwOPSKrm2YpSwDjp2JYoYEp2w7g47xiEXhvI7b8Pmgw6TqUsXhDQr5vmfg6GIHpO4mXHl%2B9YC3iBabzUYQYyAr6SJHC4ERqfmoFipSv28eocpVkLbRW%2F4emoPCqJq7Ci1ZGYCOzTScXnOxKQKX24cGoI3auo8Nj8YMwTXlHvvTl17BtwL7mpiYW7c8Je0jv5DdGecnh6zGtS07%2BkqiAg3mN6j9CYnhe4FGy%2FvnfwhDBRSi%2BqlJ1AfbDri0AmyFZGlx6cposLPBs1jZOUzr9P7h0npZxd8A7oea%2FwbOHjlWdKWLgnQ7hRGq%2FPnR3fzFcLYlWsLiJLMCKWk3kOgTFOYPaesWVzLrI9XC1RJmcmNWAZymkh%2BZDtm8fDn9hzegb7Q%2FwgABbBzE2AeXUKWLINYz5si9HdCxp3Rx7qsbluacMTmnq2muua5gvqK5HikL8pZ4bPesiIBHgvvfnyoLO6thq%2F9JifqfXt0iE2TClkNvJBjqkAR3RXmH8TQXWT8MjP3g9A3p0XWrNTQNqJq8lne4c82KCLNudAjeINTb00X8pVYet30e6e4%2FB2%2FG%2B%2Btb00oq0FjmLh1dfJ11UlP9hFPhEF%2FSUSf%2F%2FDhR94vwsEQNIR96y6wymvQN9VK4fVhgj6%2F42s2C%2Fjb3%2FmXEorJyvyDrSjCJJVPkWkvYxOEiOEVv97RiXMannXSJPYRGXVQs6fb5RyIk1Nsop&X-Amz-Signature=9b59abe9866e537965bac5433b3fbd97dc8b9f4a80d374d2fd901c8185e51608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XADOOYY4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2TYGta18IOa0p%2FO%2F8eRkgpmhycCY7vPRkAOuPZVst8wIhANqEuYMQDONE0jDMmX%2BMzkRjuJjLzxvoBf5xobilIgC8KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxH9a6W5DiFePEfPAq3ANbzBwx3R3uh%2FPfVnILE6AGLuk9O0OqD6cO9XN1vN7b2acxmw3l0XUW2brPfee0KQlRvuowq2Ibn5UyMmBIt11FF9efVww8cm2uU3mMc%2By3nyz3P6ajyRujz0%2BM%2FuIQ%2FpMrcFpZ4goHTgpTHqlg%2BpBZdHwOPSKrm2YpSwDjp2JYoYEp2w7g47xiEXhvI7b8Pmgw6TqUsXhDQr5vmfg6GIHpO4mXHl%2B9YC3iBabzUYQYyAr6SJHC4ERqfmoFipSv28eocpVkLbRW%2F4emoPCqJq7Ci1ZGYCOzTScXnOxKQKX24cGoI3auo8Nj8YMwTXlHvvTl17BtwL7mpiYW7c8Je0jv5DdGecnh6zGtS07%2BkqiAg3mN6j9CYnhe4FGy%2FvnfwhDBRSi%2BqlJ1AfbDri0AmyFZGlx6cposLPBs1jZOUzr9P7h0npZxd8A7oea%2FwbOHjlWdKWLgnQ7hRGq%2FPnR3fzFcLYlWsLiJLMCKWk3kOgTFOYPaesWVzLrI9XC1RJmcmNWAZymkh%2BZDtm8fDn9hzegb7Q%2FwgABbBzE2AeXUKWLINYz5si9HdCxp3Rx7qsbluacMTmnq2muua5gvqK5HikL8pZ4bPesiIBHgvvfnyoLO6thq%2F9JifqfXt0iE2TClkNvJBjqkAR3RXmH8TQXWT8MjP3g9A3p0XWrNTQNqJq8lne4c82KCLNudAjeINTb00X8pVYet30e6e4%2FB2%2FG%2B%2Btb00oq0FjmLh1dfJ11UlP9hFPhEF%2FSUSf%2F%2FDhR94vwsEQNIR96y6wymvQN9VK4fVhgj6%2F42s2C%2Fjb3%2FmXEorJyvyDrSjCJJVPkWkvYxOEiOEVv97RiXMannXSJPYRGXVQs6fb5RyIk1Nsop&X-Amz-Signature=e01535ff1d6f0f76b0315932299eba9fde4213b30dcf389c2364a1de9b9f3d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
