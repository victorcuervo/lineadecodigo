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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGJS6EF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9wa7MU0jJr9ymlU2E53W4hq7SSJlTgTSzFQLg3RS6EAiBEl41sAJiSB9d1kINiDEOshlCiEefbpB7e9T8%2Ftrf7wCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXOuRNbcUWXnNiQWfKtwDvh5Y6s1NykXwMiIRHvSTAEAbvREQ%2FozqbiRE52GCoUfRZZ6U43i95UsLBJ2d2SSho8l0iFopq9Mj88nUUyj3HUoe51DrouCN37JcrOVOSqgjbn%2FnUPPdeRjgrMx6Ho1FSBNhZZ77LNQ8BDtllawkhB8YTOKMtntvc%2FtpZNLj8WSdweHIWnhyPiAGNlMWQje7kLcdL0EuCgwT2%2BBMRn5ej3P6Jj6k6OQY49vUArZMjK7wS8A4RytqXqRSxPgBuuDfweCDM%2FMF89BrK4qPOHkKLyGdKCyGdo9kLSlkZNFa18MsUZosU%2FVkGHQz8owWe1yP%2B8TZlmgVauOZPCPr6qqPPVpb%2BWekACQjG8P45Y6ufwZwvlsjiI2jhrQ1yuIoI6TUMhkfDa2PU8437UaZzqAd8VwTIWUUeR003CjtXWXHFm70OpuBhnxAf%2BjbW5lJ0jD04vpMkBpNXGBu3amwaOnJBpCr1E%2FcjC9Edf2sdCzG4eMxq63mnA1ifz59SYOYWFXnBYVAUpM9ghXUCmlsWK%2B3C22RxDc6orB%2BZbN9VSLCebpbuVH4qg02EYBpRWcJidWwHbfTS3a00T6BmBSZEP7VT74%2B%2F%2BQfScYqpaO%2Fh3iP5qkDFetIK9hH9QvR9iwwr7TcyQY6pgH50ktSShu%2BLZtsHRwtbrb4eKwbRsKMyhsBzF41tWKNGmOl%2Byex91ta4dVefXKwCH7JGLDBNNTnUHUWErDn4WLmeloMOmSJnUZH6R1%2Bwm8bs%2BkPb0%2FViUunis9j4ovWWpuzqH9UJ4ic7h1wSY8RpHP%2FZMpdaKy1nJB15glfXRImcGI0is1by3KXzOhSUKcwhkuR60HT2DJUd2XPnB1JYHfU0j7b4Aoe&X-Amz-Signature=b01ab211e52e5b68d9df520377f73fa3405aa3c28339880697f20efc307b664a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGJS6EF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9wa7MU0jJr9ymlU2E53W4hq7SSJlTgTSzFQLg3RS6EAiBEl41sAJiSB9d1kINiDEOshlCiEefbpB7e9T8%2Ftrf7wCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXOuRNbcUWXnNiQWfKtwDvh5Y6s1NykXwMiIRHvSTAEAbvREQ%2FozqbiRE52GCoUfRZZ6U43i95UsLBJ2d2SSho8l0iFopq9Mj88nUUyj3HUoe51DrouCN37JcrOVOSqgjbn%2FnUPPdeRjgrMx6Ho1FSBNhZZ77LNQ8BDtllawkhB8YTOKMtntvc%2FtpZNLj8WSdweHIWnhyPiAGNlMWQje7kLcdL0EuCgwT2%2BBMRn5ej3P6Jj6k6OQY49vUArZMjK7wS8A4RytqXqRSxPgBuuDfweCDM%2FMF89BrK4qPOHkKLyGdKCyGdo9kLSlkZNFa18MsUZosU%2FVkGHQz8owWe1yP%2B8TZlmgVauOZPCPr6qqPPVpb%2BWekACQjG8P45Y6ufwZwvlsjiI2jhrQ1yuIoI6TUMhkfDa2PU8437UaZzqAd8VwTIWUUeR003CjtXWXHFm70OpuBhnxAf%2BjbW5lJ0jD04vpMkBpNXGBu3amwaOnJBpCr1E%2FcjC9Edf2sdCzG4eMxq63mnA1ifz59SYOYWFXnBYVAUpM9ghXUCmlsWK%2B3C22RxDc6orB%2BZbN9VSLCebpbuVH4qg02EYBpRWcJidWwHbfTS3a00T6BmBSZEP7VT74%2B%2F%2BQfScYqpaO%2Fh3iP5qkDFetIK9hH9QvR9iwwr7TcyQY6pgH50ktSShu%2BLZtsHRwtbrb4eKwbRsKMyhsBzF41tWKNGmOl%2Byex91ta4dVefXKwCH7JGLDBNNTnUHUWErDn4WLmeloMOmSJnUZH6R1%2Bwm8bs%2BkPb0%2FViUunis9j4ovWWpuzqH9UJ4ic7h1wSY8RpHP%2FZMpdaKy1nJB15glfXRImcGI0is1by3KXzOhSUKcwhkuR60HT2DJUd2XPnB1JYHfU0j7b4Aoe&X-Amz-Signature=dad1916eaa644f969d2ae13c1cef9a9a89ad8f9f78442ea20b53836e05341be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
