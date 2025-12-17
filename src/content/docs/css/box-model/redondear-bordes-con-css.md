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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4T3SJ2I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FN3TA7enroBkj%2BBIgFI%2FdWhhOTvY2vILxX5QKq1GKcQIhAOQfmVnBAB7ZUVAigskj0lMzTgisnw%2FuIiT2M0DXngrwKv8DCHcQABoMNjM3NDIzMTgzODA1IgzBbEEdbwkCT%2Fd3ikYq3APUKCyfxsOXMXLIkbUddzdXI%2F6sN6eL6Kqor4Qb1wQigytJ2mf6zUqfLmJpc%2FScC%2BQT6azvS1%2F9rKScgS%2Bitha0ojX8xK%2FQivcywWGPCfRnLAKBJtxdND8yrN0jZ87nca1BcMygvpKSqKPky6QHO8EWiOF1bvXUY2BKKrc6oYOjA6yK9%2BfBRIsM06OfJpGk3bWrSr985TncCVeufEFIITB1ILVhLJMLJr2pY6BN7Nf2xerVo370nu38%2FY4tu5WfDF0Ahg%2BmivJMI9UG5eK6ONFCZoscR2kNJTFUNZDpNJxlgTnOe9gD2X7JmiFAM9SFcB5lJ%2FdQmM1do8PLniNY6zru3Zw%2Bj7txWXB0MBKo40W%2FEszORi1%2Fww7WeEHAqB9dHQa0B2W1R0jCANdKvDmlN%2F0YoKceyLLysp2xLSS51vHg%2BBO3n%2FSM8bAjngJGWD5TPdEprZ6lS93M9UcbuKP7k7D4ZCoLRGMKRMpjyKOpmVqc%2BCM2IVd0AcKgD31g5TSuhkuhDts0F6dZBy7a46hiC6bF9DM1a5CnkNj4Ws3mrM2KO2eLuF256L6HlDx9IOYLQpytGAHmT%2F093vR%2FafZl6%2FsCA%2BgtveQXqSyfNi19WJ%2FAXjJAVo8uzENI1e0QszDag4nKBjqkAa6d3ZQXaC75D7%2FTsC4AyHE%2F8z%2B%2F8XZQJgAKKjE6M1DFsBpziB6XAJbkc9zt%2F3msLwKpsDDCV6X2pRBuEmawv7QApOZCXC9EifzbWU%2Fte0J%2BUio5LC%2Fhx51GhcFIbb6eEpqZyD%2F0%2FPnXF8QFVfWPJ20FkYBoK45%2FBZtA1F5fsvg01Wm1rfkgk1JV90O%2BBGpQ462yR8yqCJA26rqjmnc9oK0nDESl&X-Amz-Signature=3b706fde5d35b6d4f5f0ce2e6cd72ab5aa6117a74e4794f6e99f377ba64521a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4T3SJ2I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FN3TA7enroBkj%2BBIgFI%2FdWhhOTvY2vILxX5QKq1GKcQIhAOQfmVnBAB7ZUVAigskj0lMzTgisnw%2FuIiT2M0DXngrwKv8DCHcQABoMNjM3NDIzMTgzODA1IgzBbEEdbwkCT%2Fd3ikYq3APUKCyfxsOXMXLIkbUddzdXI%2F6sN6eL6Kqor4Qb1wQigytJ2mf6zUqfLmJpc%2FScC%2BQT6azvS1%2F9rKScgS%2Bitha0ojX8xK%2FQivcywWGPCfRnLAKBJtxdND8yrN0jZ87nca1BcMygvpKSqKPky6QHO8EWiOF1bvXUY2BKKrc6oYOjA6yK9%2BfBRIsM06OfJpGk3bWrSr985TncCVeufEFIITB1ILVhLJMLJr2pY6BN7Nf2xerVo370nu38%2FY4tu5WfDF0Ahg%2BmivJMI9UG5eK6ONFCZoscR2kNJTFUNZDpNJxlgTnOe9gD2X7JmiFAM9SFcB5lJ%2FdQmM1do8PLniNY6zru3Zw%2Bj7txWXB0MBKo40W%2FEszORi1%2Fww7WeEHAqB9dHQa0B2W1R0jCANdKvDmlN%2F0YoKceyLLysp2xLSS51vHg%2BBO3n%2FSM8bAjngJGWD5TPdEprZ6lS93M9UcbuKP7k7D4ZCoLRGMKRMpjyKOpmVqc%2BCM2IVd0AcKgD31g5TSuhkuhDts0F6dZBy7a46hiC6bF9DM1a5CnkNj4Ws3mrM2KO2eLuF256L6HlDx9IOYLQpytGAHmT%2F093vR%2FafZl6%2FsCA%2BgtveQXqSyfNi19WJ%2FAXjJAVo8uzENI1e0QszDag4nKBjqkAa6d3ZQXaC75D7%2FTsC4AyHE%2F8z%2B%2F8XZQJgAKKjE6M1DFsBpziB6XAJbkc9zt%2F3msLwKpsDDCV6X2pRBuEmawv7QApOZCXC9EifzbWU%2Fte0J%2BUio5LC%2Fhx51GhcFIbb6eEpqZyD%2F0%2FPnXF8QFVfWPJ20FkYBoK45%2FBZtA1F5fsvg01Wm1rfkgk1JV90O%2BBGpQ462yR8yqCJA26rqjmnc9oK0nDESl&X-Amz-Signature=b8116cbbb2293a21790e606249b98eec4ee2ffb7537d3206cf6130082081dccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
