---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDIVTKEV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICag%2F9UsxscBK982zZWjtRIqy%2FPwG9Mw%2FpkIVuN%2FXTX8AiBQeg%2BmS%2FwFOwihyq5%2F8bgmnQwYH5OyfKusM65lRc7eqSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMFHCQJWYD0P7xrKifKtwD%2FOYwmdL2nT5MLh1x5fUfzjwvKuDA3LPgJIhyNzEiBzejGa1DfIsW2W5gqtUWWXsqUpnPVg0m66sPwDrfOrnYSBP4kYTfUXWL0jO0vpGzqLnEmTBBlfZqXbJRuNabZEN4xYj8Mgzylr3YHedNyqoAmaFpnCCOqkOxEEzZD2%2FU6uSz5030RGHEhsJM%2BG8zT%2F272mDV23bKoa1HzpPuAXrfzoRixkguLqNYzE4YWsBN8YqMlYa2Z4drC5UK%2FOlQu%2B%2FAJxj1m5hHU1d%2BSDj%2B0OuHxhxGqJLWFCNx%2FtTLFjPVoC%2Fgj5ln6p89ijQuvZkIMQuHbp4TiuH8AT%2F%2FZsK2pzwKRURfYCtw9LsYKVHk7A%2Bvxbbs%2FS2VT9MfMf3e9dYJ%2FkPlwyoysnh%2BV48WTgDTViCa0P%2F9kjqnrsd034ME4HTFWM6HREGZKkFfHCbpw7PrPHHvN8qIevXBkuV4B7%2Bw3WwnIb1ZX3OHWwj6uihXsT0zCXjqRSEGKkkeTocCJLfngLB%2B2Dd01%2BGS0jbc2mi2DE4i1gI72AWWwNkYzdik7XgMMqDLK%2F8nVQk%2B0lwSS2VokoldgBfmtXPb%2Bhod9AJqWV2nHdlL1ffk0MO1rPnYp76hSIY2AFFueRLC0apm4N0w7IPGyQY6pgFZhUoQbgaa82AWSXpc2GYpqCCxVUIbkgtXXzPIGS5b9MzYYvWUHQeO4yz%2F4uRYnXhy%2FK7WaHmxAjvCnCXpWFDLgHU3FJDay5dIwxeCwsWvDlSFy0tE%2B%2BiuDB7Etc%2BK%2FxFjm7XAxPiiYyPOJVqdwfYiJ%2FpJnSPOAw%2FmkWcDCTfA5%2BALQ8yet6a1CqFwNBbzEbX%2FNeeSZCzgqIOv83s4xa8D7wDDCbQv&X-Amz-Signature=ea0b7d158034d1b7522a3bfa4fab1570adc7d4abec11509e954d6960016523f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDIVTKEV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICag%2F9UsxscBK982zZWjtRIqy%2FPwG9Mw%2FpkIVuN%2FXTX8AiBQeg%2BmS%2FwFOwihyq5%2F8bgmnQwYH5OyfKusM65lRc7eqSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMFHCQJWYD0P7xrKifKtwD%2FOYwmdL2nT5MLh1x5fUfzjwvKuDA3LPgJIhyNzEiBzejGa1DfIsW2W5gqtUWWXsqUpnPVg0m66sPwDrfOrnYSBP4kYTfUXWL0jO0vpGzqLnEmTBBlfZqXbJRuNabZEN4xYj8Mgzylr3YHedNyqoAmaFpnCCOqkOxEEzZD2%2FU6uSz5030RGHEhsJM%2BG8zT%2F272mDV23bKoa1HzpPuAXrfzoRixkguLqNYzE4YWsBN8YqMlYa2Z4drC5UK%2FOlQu%2B%2FAJxj1m5hHU1d%2BSDj%2B0OuHxhxGqJLWFCNx%2FtTLFjPVoC%2Fgj5ln6p89ijQuvZkIMQuHbp4TiuH8AT%2F%2FZsK2pzwKRURfYCtw9LsYKVHk7A%2Bvxbbs%2FS2VT9MfMf3e9dYJ%2FkPlwyoysnh%2BV48WTgDTViCa0P%2F9kjqnrsd034ME4HTFWM6HREGZKkFfHCbpw7PrPHHvN8qIevXBkuV4B7%2Bw3WwnIb1ZX3OHWwj6uihXsT0zCXjqRSEGKkkeTocCJLfngLB%2B2Dd01%2BGS0jbc2mi2DE4i1gI72AWWwNkYzdik7XgMMqDLK%2F8nVQk%2B0lwSS2VokoldgBfmtXPb%2Bhod9AJqWV2nHdlL1ffk0MO1rPnYp76hSIY2AFFueRLC0apm4N0w7IPGyQY6pgFZhUoQbgaa82AWSXpc2GYpqCCxVUIbkgtXXzPIGS5b9MzYYvWUHQeO4yz%2F4uRYnXhy%2FK7WaHmxAjvCnCXpWFDLgHU3FJDay5dIwxeCwsWvDlSFy0tE%2B%2BiuDB7Etc%2BK%2FxFjm7XAxPiiYyPOJVqdwfYiJ%2FpJnSPOAw%2FmkWcDCTfA5%2BALQ8yet6a1CqFwNBbzEbX%2FNeeSZCzgqIOv83s4xa8D7wDDCbQv&X-Amz-Signature=b99ac17d2c29a1ff6c1d01cd62d13c9a646501a5cc1d1ff3fcaf332a9aa926f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
