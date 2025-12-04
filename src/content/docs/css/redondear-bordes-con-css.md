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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKMUQTLM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCCnM78mV0d9oFVv6M%2FztZQMRzweHZ9P0BA%2BQWJMH5jAiBmjP0TlGoUHZl0E82a4m6X2lE2WLXKYXyWaCZoMJxO7Sr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMjHHV1lq8%2BDLUi6JxKtwD2%2BArKshK1hNhr%2BgwbLuFO%2BBDKVa6o69P1VRwrZYiSCNrAveP0aYA6qAZ%2BwQsNX1M2e1Bw43oPUbFGXuDX37Xi4N4kvymm%2B%2BK%2B6B0ANe2Mgwyvc5ev8XuleDTe5E3L08LSGGNyJCkAg%2BZRA11Xiw%2FjotBGbwfGFsB5RT7lR%2B5OUP8dGsl7BhVdLikugs%2F2ZG9XeWYPRVzgpo2J59m4ix9Zon7iKpSBbjVyQwOE1dxpqakF7wLZykwtkMSevLQFCCvi2n7jJg3EwzZgTGSPtmWCwuVct5xvrsVwWH9PVQroRn4hlDCRxXPjuFNLPvzDrh7%2BWgHmrwDHtTOzQOt0tZzdButieWRk86lEozTI%2FC5AwOq03leK6T7tf2Kx%2BfJhAGEUuUlToStf%2Fyq3QLhXYtavf%2FAu8ktdJ3oHrh33BOdRVS7DSRwWVVv%2BUqBFWSsyANPl60qNkB9aMFAhBQ3wlrOqhmO9HYRNvmAEdhpEUdrn8yyeb8ZHSge1AEmBmxGDhQOjL64h%2BzYdMszMcH1zS85VKQMNAjum2VWJ7t%2B8IjD9Uuab%2BIIY6tfxSKJM7x6S3PDoHFnl%2BfS%2F%2FB3syZEsLXaedT64wRk6T%2FKzMwCPoPqvloH9WaVjKOxvmkW6C4w4NvGyQY6pgH0AaXpqNzesm9zTEStICzaOKI0acWv%2BllVyTMdqfSGybCQXFkRpLhmsE4MVyt59NQTX5f6XXGQ3%2FX8SJt%2Bh%2F3QnXnibMLpqb27GYolUiw7aQzm4GfDJFekcniW2zVflwSQAgIogYmIAxWpuo%2Fuzv0XtWpHu1UiJFHwR9xDLcMKfZRiU5dlTgE7MfYkfR28HeWjX0QSPMJ280CUHOTwWg5YQIXv4i38&X-Amz-Signature=7e5a672c07c8c12d86695c00cc9bb5452b972d0576cc27329e48344c96983ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKMUQTLM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCCnM78mV0d9oFVv6M%2FztZQMRzweHZ9P0BA%2BQWJMH5jAiBmjP0TlGoUHZl0E82a4m6X2lE2WLXKYXyWaCZoMJxO7Sr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMjHHV1lq8%2BDLUi6JxKtwD2%2BArKshK1hNhr%2BgwbLuFO%2BBDKVa6o69P1VRwrZYiSCNrAveP0aYA6qAZ%2BwQsNX1M2e1Bw43oPUbFGXuDX37Xi4N4kvymm%2B%2BK%2B6B0ANe2Mgwyvc5ev8XuleDTe5E3L08LSGGNyJCkAg%2BZRA11Xiw%2FjotBGbwfGFsB5RT7lR%2B5OUP8dGsl7BhVdLikugs%2F2ZG9XeWYPRVzgpo2J59m4ix9Zon7iKpSBbjVyQwOE1dxpqakF7wLZykwtkMSevLQFCCvi2n7jJg3EwzZgTGSPtmWCwuVct5xvrsVwWH9PVQroRn4hlDCRxXPjuFNLPvzDrh7%2BWgHmrwDHtTOzQOt0tZzdButieWRk86lEozTI%2FC5AwOq03leK6T7tf2Kx%2BfJhAGEUuUlToStf%2Fyq3QLhXYtavf%2FAu8ktdJ3oHrh33BOdRVS7DSRwWVVv%2BUqBFWSsyANPl60qNkB9aMFAhBQ3wlrOqhmO9HYRNvmAEdhpEUdrn8yyeb8ZHSge1AEmBmxGDhQOjL64h%2BzYdMszMcH1zS85VKQMNAjum2VWJ7t%2B8IjD9Uuab%2BIIY6tfxSKJM7x6S3PDoHFnl%2BfS%2F%2FB3syZEsLXaedT64wRk6T%2FKzMwCPoPqvloH9WaVjKOxvmkW6C4w4NvGyQY6pgH0AaXpqNzesm9zTEStICzaOKI0acWv%2BllVyTMdqfSGybCQXFkRpLhmsE4MVyt59NQTX5f6XXGQ3%2FX8SJt%2Bh%2F3QnXnibMLpqb27GYolUiw7aQzm4GfDJFekcniW2zVflwSQAgIogYmIAxWpuo%2Fuzv0XtWpHu1UiJFHwR9xDLcMKfZRiU5dlTgE7MfYkfR28HeWjX0QSPMJ280CUHOTwWg5YQIXv4i38&X-Amz-Signature=31d958b7f6c7baf19f183ba03de3ae9b18a30d64e927f8c089be76e1e6713720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
