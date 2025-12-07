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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCGO6ZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJK4SVzs8t5SNyd3kD4U9f7yX70%2FZ3bkJMlHTtrefyAiEApsYqsB8JAkYsr53Gw%2Bm3B0oUfC%2F4oITL7L4mcka9UPQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7sfVWqzu49sKKxgircAyhrLIgHqSoAEIL%2BWcbn3h8uvVla6fg9O5NHS%2BnAu7RgkSKNGXbZ3dgKRjpl%2FcykW03Zz1XcwkNoFyoJ3kHrJhKeZ%2BE0gZ7XoNXDaArS9N5M8UJW8aiHAak9iv9wLDV2sRxFa6qLaYtCz8W%2Fl6Nk9V0e10Uqp7Q8p7i5GwpWB8dIFgcXVYX0K6v4bRlpy9Q8ohV%2B1RZB5ELqTH%2F0fP9w97sFCtoYfHmQ6oG1lt%2B7fi%2F8Mo28kEOuZQCc61s334BLnGeUKqWR4NNRu%2BTfGSkkJU6evdMBi%2FBTUfekC0wu%2B0qggukdTgKPU%2FZYoYJF1O7FF4WOc7WGnIv906KFA%2Bz9cd7WJBE1msisdERFdY99kMez4oi2yiH5CogReiRF8YQDDTvoYUAHc2qryO9diN53AEXeuNqNaE2U108E3tUggKcTCFZvg3zfjt90vvAD8oyiGlMm89QBOa%2BLFnYM6JkuGYCrLU9PyMEOjVudqgFIQ6HWE%2BCUEm5UT8eMvDtCI5DqddMRc%2B8mH7b7uJvzFlkwXm3frzclEgGz8NaiWye5U6fBndITgh8bzOUG9db4NXWnoDkC7SHCMjNrX1BqmamCj9XifJ7obzzwVNIDCMMF7pFHbVOloSr6xgHpNNUgMJqa1MkGOqUB3Qwgbc3GFUQK7iRKOSLJdStAm5oyBqj%2B1u7jeX5p7%2F7vEMgYrAJaJ%2BqLg%2FZZ4Sz0rdPdc%2FcHhTl%2FsSJ0hQlSZqRqQ4RvLZlZdRIYrRLjeuPgHOG84UEf0zRaiMh6DpevvmynoSNWbo60152%2B8AvNHWqJQXlWfEZ%2ByEhBC7svPPnHREKTYO8nuDt8F50cZPAztGCMfQ3wjeSCYBcvqnUJS%2FKjHrDk&X-Amz-Signature=e98225cb83de2faa29fdca5a026a92b36a1b69df22235bda68a9c69da9c575d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCGO6ZZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElJK4SVzs8t5SNyd3kD4U9f7yX70%2FZ3bkJMlHTtrefyAiEApsYqsB8JAkYsr53Gw%2Bm3B0oUfC%2F4oITL7L4mcka9UPQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7sfVWqzu49sKKxgircAyhrLIgHqSoAEIL%2BWcbn3h8uvVla6fg9O5NHS%2BnAu7RgkSKNGXbZ3dgKRjpl%2FcykW03Zz1XcwkNoFyoJ3kHrJhKeZ%2BE0gZ7XoNXDaArS9N5M8UJW8aiHAak9iv9wLDV2sRxFa6qLaYtCz8W%2Fl6Nk9V0e10Uqp7Q8p7i5GwpWB8dIFgcXVYX0K6v4bRlpy9Q8ohV%2B1RZB5ELqTH%2F0fP9w97sFCtoYfHmQ6oG1lt%2B7fi%2F8Mo28kEOuZQCc61s334BLnGeUKqWR4NNRu%2BTfGSkkJU6evdMBi%2FBTUfekC0wu%2B0qggukdTgKPU%2FZYoYJF1O7FF4WOc7WGnIv906KFA%2Bz9cd7WJBE1msisdERFdY99kMez4oi2yiH5CogReiRF8YQDDTvoYUAHc2qryO9diN53AEXeuNqNaE2U108E3tUggKcTCFZvg3zfjt90vvAD8oyiGlMm89QBOa%2BLFnYM6JkuGYCrLU9PyMEOjVudqgFIQ6HWE%2BCUEm5UT8eMvDtCI5DqddMRc%2B8mH7b7uJvzFlkwXm3frzclEgGz8NaiWye5U6fBndITgh8bzOUG9db4NXWnoDkC7SHCMjNrX1BqmamCj9XifJ7obzzwVNIDCMMF7pFHbVOloSr6xgHpNNUgMJqa1MkGOqUB3Qwgbc3GFUQK7iRKOSLJdStAm5oyBqj%2B1u7jeX5p7%2F7vEMgYrAJaJ%2BqLg%2FZZ4Sz0rdPdc%2FcHhTl%2FsSJ0hQlSZqRqQ4RvLZlZdRIYrRLjeuPgHOG84UEf0zRaiMh6DpevvmynoSNWbo60152%2B8AvNHWqJQXlWfEZ%2ByEhBC7svPPnHREKTYO8nuDt8F50cZPAztGCMfQ3wjeSCYBcvqnUJS%2FKjHrDk&X-Amz-Signature=a3af19cba4b75bd8a2d7d44b669f82838023cc6e3246a3cff018643baf0f9578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
