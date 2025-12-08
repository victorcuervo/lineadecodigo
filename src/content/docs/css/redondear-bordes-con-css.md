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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMMDLT6P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4vyz484mxnSjqtjj7ifaf56QCVyjnbL0jbTvTdDotJAiAUnHkaM4kApyc229xrbDLT%2FLFtErRJ2ydumeHJwt5YNSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdEGNy3FfB803fTIGKtwDZ2GMpi9cvC57qPNwgV6WUn%2F%2FmHDrJWunBa10ymHSOaJ1k%2FsnGHS1KnS7moc8woq17qmv066W%2FvCV06LAhcuTbdOKmlmWQ8mu4TWVm49XsVr4S%2F2miZtqRK6Aaiv25pzyG3iJmrClth5OVKwgUNCFLa6DdppnQ5ae6okCndxcZxipEApDDlWw9fGjYnjXK9DaOnZG97XTAsdQU64UokNa29o5BEQm6Ahc%2BnBJKYa5v7byo2zHtLkygpbmL7K2AUvCjp2BZgy26rsYXv6ERihRPDcpOIFrzKauGGSePuLQU1BBQkV6rqGknha9e4hKf%2B4x3%2Bd2NrN%2Fe1R01v7pnT7WOSxAuqGJVOkOMzugQRgccCtkoGBl6syxSaiSGNBX9iIxJ4%2FPJvTh6ZUugbX4FJLwp%2BB33cJVrJJ4HbJu%2BGZ2tNGvxoDMKTLM5gw2srGuPwT9pro9eseTHaM23KBR8c8XLaZtDlpOUfF5lZ%2FEw2ZTM8d5fCB3BofdIdteU0L9SFLMBVnqwMoeMoratY4NVFdKnt9MJzPTsI0jNbvMD2WAqJdIqJKfqBY2%2BaDAjjM3q7z7POpQ53lzFeJC%2Fw2fKWgX3AUlfQWgKgXg7%2FiqcE0O7277uM9Vx0IAUvpVhWIwwYfcyQY6pgHGpVsF%2FWqttSnvetR7fqWx85xbw1z81tdPpZxeM9wxqi4%2BAFyVT2Nnkg67d4zWC5mYBsZdJ2jiZWT%2BYfcVk5KNyrcD2%2BWGV74ipu4cNCcO7jn%2BPsEeNBKGx0Qw1%2FrDjgMCjs%2FXQDnt0YsIto9auO2WN8ZdVmUHJ9JsYlIsUFHbjTsbst5Tg6ZIKpXCityQcFvsVVu%2B4SvB9i9%2BrkY%2FwWqd%2F3%2B95njv&X-Amz-Signature=fb07f4f7eb3f5d4aeb13fbba5fc28761c73bf614b92663bcdb275b7814bbfcb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMMDLT6P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4vyz484mxnSjqtjj7ifaf56QCVyjnbL0jbTvTdDotJAiAUnHkaM4kApyc229xrbDLT%2FLFtErRJ2ydumeHJwt5YNSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdEGNy3FfB803fTIGKtwDZ2GMpi9cvC57qPNwgV6WUn%2F%2FmHDrJWunBa10ymHSOaJ1k%2FsnGHS1KnS7moc8woq17qmv066W%2FvCV06LAhcuTbdOKmlmWQ8mu4TWVm49XsVr4S%2F2miZtqRK6Aaiv25pzyG3iJmrClth5OVKwgUNCFLa6DdppnQ5ae6okCndxcZxipEApDDlWw9fGjYnjXK9DaOnZG97XTAsdQU64UokNa29o5BEQm6Ahc%2BnBJKYa5v7byo2zHtLkygpbmL7K2AUvCjp2BZgy26rsYXv6ERihRPDcpOIFrzKauGGSePuLQU1BBQkV6rqGknha9e4hKf%2B4x3%2Bd2NrN%2Fe1R01v7pnT7WOSxAuqGJVOkOMzugQRgccCtkoGBl6syxSaiSGNBX9iIxJ4%2FPJvTh6ZUugbX4FJLwp%2BB33cJVrJJ4HbJu%2BGZ2tNGvxoDMKTLM5gw2srGuPwT9pro9eseTHaM23KBR8c8XLaZtDlpOUfF5lZ%2FEw2ZTM8d5fCB3BofdIdteU0L9SFLMBVnqwMoeMoratY4NVFdKnt9MJzPTsI0jNbvMD2WAqJdIqJKfqBY2%2BaDAjjM3q7z7POpQ53lzFeJC%2Fw2fKWgX3AUlfQWgKgXg7%2FiqcE0O7277uM9Vx0IAUvpVhWIwwYfcyQY6pgHGpVsF%2FWqttSnvetR7fqWx85xbw1z81tdPpZxeM9wxqi4%2BAFyVT2Nnkg67d4zWC5mYBsZdJ2jiZWT%2BYfcVk5KNyrcD2%2BWGV74ipu4cNCcO7jn%2BPsEeNBKGx0Qw1%2FrDjgMCjs%2FXQDnt0YsIto9auO2WN8ZdVmUHJ9JsYlIsUFHbjTsbst5Tg6ZIKpXCityQcFvsVVu%2B4SvB9i9%2BrkY%2FwWqd%2F3%2B95njv&X-Amz-Signature=c2b9e97737a2f40510445bc54350495be1e54da2ea84794f78f89b822392b11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
