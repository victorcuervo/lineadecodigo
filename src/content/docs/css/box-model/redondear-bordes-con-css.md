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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUYJ6VCA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF4P5NxHrc5uBDvZOWEWBdyRjMyq0DVQTOPHv3QmzPiwIhALkzNvMXZHABl5%2BXJw8V7tBO6VJZorQepuPAO%2FfdoIE3KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzT8K%2Bqn%2Bquz0yPRkq3APuiF%2Fl2sjXJOyxNgG2AE7SyUke6u%2BAmo0lcE9VLhbZCmXq5ii05OOllV7zfo7eGKlzFKSRea07aVGkKdVfnqyWjsKlIFEJfsougINV3E%2ByYV3RQGQU5y6qNffSW9pnbhl28vtSxkq3OaapRapD62ea6O1eOapdJmm6tZmkRATe9%2FpfSHiOpeUvOFlCbJXdwmzjqnfhHj8FwfQdCWNtm5a8rN45itbL28WfI8yitIJKI%2FJFR3OyK1q6uScJBAfcaNU8S%2FV%2Fs%2F7K9S9U5aFz%2FCkzYiqUXwMlty0cMRVPd9BOACjuwXsyDUQTcfhXa9rO9bDPyE3Oug%2FUjmx1sAq62N2FikzuDCQKbJ7zcWThHHYYzV2DUC5Byjo4qY6tOV7RfrB0BGECoY%2FhOeYrikKwmDlVENtuuxpZQIMu8azvOmyLbGHB%2FSthd3%2BfAWaUZoxaT%2B7nYBrOx3URPGhm2jO%2BPCM%2BjcCFhQg40h%2FoMRhxNWSIQ4%2BMhVUqHPdfz29AVoBtiGPk5LO1cVKhGF1PzN7TGc64CLSEvrIadpGBl5pzpIVXBdAWMUGlYy9ZIBs4KWverRNypXlGdaleCoinTjWtsiHVtroaBF5Q8y%2B%2BZXwk3rjSZ2KeU6nI%2F66xVmbFwjDQgIvKBjqkAQtaCcZXfhiHim6NyOxymmlMmeXczriRSennU9vl0j%2BkKZBm5XGgzfwVY931M1lrPwor8lfON4rhLH5ZrSm9CVL3bWuvsNSj5OQc9nuXXEoEBS97NZPYDThk%2FFu8W7CY7%2Bxtri92Chgbp4VF5XluDJvSS%2FKZ%2FtpOVxurj4%2Bf27Y1k7RXF0S46pJ56QtBNOD00Wv2hBVowu2pGOvRsMt1sp865IbI&X-Amz-Signature=e89329e2186e5247973453b7857627226d07412c383d122e7a544d842c720dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUYJ6VCA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF4P5NxHrc5uBDvZOWEWBdyRjMyq0DVQTOPHv3QmzPiwIhALkzNvMXZHABl5%2BXJw8V7tBO6VJZorQepuPAO%2FfdoIE3KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzT8K%2Bqn%2Bquz0yPRkq3APuiF%2Fl2sjXJOyxNgG2AE7SyUke6u%2BAmo0lcE9VLhbZCmXq5ii05OOllV7zfo7eGKlzFKSRea07aVGkKdVfnqyWjsKlIFEJfsougINV3E%2ByYV3RQGQU5y6qNffSW9pnbhl28vtSxkq3OaapRapD62ea6O1eOapdJmm6tZmkRATe9%2FpfSHiOpeUvOFlCbJXdwmzjqnfhHj8FwfQdCWNtm5a8rN45itbL28WfI8yitIJKI%2FJFR3OyK1q6uScJBAfcaNU8S%2FV%2Fs%2F7K9S9U5aFz%2FCkzYiqUXwMlty0cMRVPd9BOACjuwXsyDUQTcfhXa9rO9bDPyE3Oug%2FUjmx1sAq62N2FikzuDCQKbJ7zcWThHHYYzV2DUC5Byjo4qY6tOV7RfrB0BGECoY%2FhOeYrikKwmDlVENtuuxpZQIMu8azvOmyLbGHB%2FSthd3%2BfAWaUZoxaT%2B7nYBrOx3URPGhm2jO%2BPCM%2BjcCFhQg40h%2FoMRhxNWSIQ4%2BMhVUqHPdfz29AVoBtiGPk5LO1cVKhGF1PzN7TGc64CLSEvrIadpGBl5pzpIVXBdAWMUGlYy9ZIBs4KWverRNypXlGdaleCoinTjWtsiHVtroaBF5Q8y%2B%2BZXwk3rjSZ2KeU6nI%2F66xVmbFwjDQgIvKBjqkAQtaCcZXfhiHim6NyOxymmlMmeXczriRSennU9vl0j%2BkKZBm5XGgzfwVY931M1lrPwor8lfON4rhLH5ZrSm9CVL3bWuvsNSj5OQc9nuXXEoEBS97NZPYDThk%2FFu8W7CY7%2Bxtri92Chgbp4VF5XluDJvSS%2FKZ%2FtpOVxurj4%2Bf27Y1k7RXF0S46pJ56QtBNOD00Wv2hBVowu2pGOvRsMt1sp865IbI&X-Amz-Signature=bba59e07b51a31fb46c684c87d9be38045e2f4cace6f7d8312699a79b32e3d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
