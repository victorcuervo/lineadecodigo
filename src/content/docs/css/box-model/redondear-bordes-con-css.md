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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y6KQY4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECJaZi5jBI5lw1xn6RgVGUIIUF%2BxOjjpQdpWehTbOdQAiB4ifKHQtd1lqW%2F%2BNAFQPTSqNUDGEoYVXTc76qvAjTYFSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFARBFB4n8Nlff48yKtwDfCX%2FN7XXKzWZ3ZWVsiHxqgo6Gh3qhmBEA0Pz3a2IBYURvbIAkqbwK2lLMbUDOhZGARJ%2F%2BQsQrldsj2tNin6%2BdpXppSvt%2B7nPAp527wEY%2FMt22AUHVGlbIYSBgwZQZZykJLISCMfQ5MYcG2Yp3JaipcSfhH9WZOGE7I%2BZ%2BquC6ejFooKkYWwYTbJmbCiIsnjIN7%2F4jifUuL4eVPNGnLzYI0hbm%2B2Tq%2FlA0aXV1oUUYfktEbwy73J6PaVaGBzQ%2Bxi30OaMepDv0zr%2Bday%2BFk7ZVSSxla5OOfYdLTcvuaM4iE0fwlwE31KyvQ2QfY33kr3obzNfgSQJgWMijpBP3y1kjkibt%2B5w%2FlfeXA7MO7Asl4d1MSkerE3Q3KUBCAD%2FGCXD9Duzh1ojxY2JmX4W2fTiyzR8lhAUNyZPh0OrfnsgJae595iWHDVk5ZOQaSOBV826xRnBSgPfyMEwqsUJd1RPa7aGAb7jkkpxJbju63FraD4p0JbvS5RN%2FzCOKergIfbW6rYe06WWmFuKHlzRHb5WuvzACxRXoBJImyLt6xeFtXvJj4daIUaAxed98Lqy9Biji7iQ9qutnSWmH9InBTGTRtOEcfVXyJqfED3GXoYfEhhXV%2Fedf5dSoUxYj9cwiq6MygY6pgHMRlPZbd%2B3GetuowxpStUTFNWafrQpSStndOsZHzBNL9WC0RR%2BQiWWMvQtJAx0XMq2zlCYn%2B47kNA6QKVUpCRLDNdlqe9zc0X%2BJ60WuV7SB5fZZxLnaELzo%2FKk8Mo%2Fn8lrpj%2BoVBryn2BWXRX8Aa2hPPiHOQEg4wSv2gMwbSmoFDVQ5ZScH50MeyEY53ikK%2BrT%2BXPYqyvrcmh46RM6jGNy%2F9EJc%2BRu&X-Amz-Signature=092476cba908b65a5a5995e20f51ab4aeeed963cd58b5421f4cea9515e5977ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y6KQY4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECJaZi5jBI5lw1xn6RgVGUIIUF%2BxOjjpQdpWehTbOdQAiB4ifKHQtd1lqW%2F%2BNAFQPTSqNUDGEoYVXTc76qvAjTYFSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFARBFB4n8Nlff48yKtwDfCX%2FN7XXKzWZ3ZWVsiHxqgo6Gh3qhmBEA0Pz3a2IBYURvbIAkqbwK2lLMbUDOhZGARJ%2F%2BQsQrldsj2tNin6%2BdpXppSvt%2B7nPAp527wEY%2FMt22AUHVGlbIYSBgwZQZZykJLISCMfQ5MYcG2Yp3JaipcSfhH9WZOGE7I%2BZ%2BquC6ejFooKkYWwYTbJmbCiIsnjIN7%2F4jifUuL4eVPNGnLzYI0hbm%2B2Tq%2FlA0aXV1oUUYfktEbwy73J6PaVaGBzQ%2Bxi30OaMepDv0zr%2Bday%2BFk7ZVSSxla5OOfYdLTcvuaM4iE0fwlwE31KyvQ2QfY33kr3obzNfgSQJgWMijpBP3y1kjkibt%2B5w%2FlfeXA7MO7Asl4d1MSkerE3Q3KUBCAD%2FGCXD9Duzh1ojxY2JmX4W2fTiyzR8lhAUNyZPh0OrfnsgJae595iWHDVk5ZOQaSOBV826xRnBSgPfyMEwqsUJd1RPa7aGAb7jkkpxJbju63FraD4p0JbvS5RN%2FzCOKergIfbW6rYe06WWmFuKHlzRHb5WuvzACxRXoBJImyLt6xeFtXvJj4daIUaAxed98Lqy9Biji7iQ9qutnSWmH9InBTGTRtOEcfVXyJqfED3GXoYfEhhXV%2Fedf5dSoUxYj9cwiq6MygY6pgHMRlPZbd%2B3GetuowxpStUTFNWafrQpSStndOsZHzBNL9WC0RR%2BQiWWMvQtJAx0XMq2zlCYn%2B47kNA6QKVUpCRLDNdlqe9zc0X%2BJ60WuV7SB5fZZxLnaELzo%2FKk8Mo%2Fn8lrpj%2BoVBryn2BWXRX8Aa2hPPiHOQEg4wSv2gMwbSmoFDVQ5ZScH50MeyEY53ikK%2BrT%2BXPYqyvrcmh46RM6jGNy%2F9EJc%2BRu&X-Amz-Signature=4cefb3e7d120527816586e220a166ddf65aa88ede3032fcd404dfbbcccb105b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
