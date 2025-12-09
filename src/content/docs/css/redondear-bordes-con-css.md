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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466674PJKJF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4z0xtYhJVNxb1hA8P4vB%2FKlX004yYTUhZIloak%2BIEnAiA6glmw4z3PEB5qTwe3WdV%2FOb9iaO8jU%2BkNcJeOlyrZgyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMacn%2F4Oqq%2F1DIHwcqKtwDQM6taAo2Sc0%2FmCz9VKrJpDtvqrCgv8u98knrcJaHiL2gwxvC1xVG2fcsdSQpgCm4uU5ERbHRmbBFgGdhaBAcQRbkNv7nJM37XH97bD%2BWaPl6cePsyCFYCrHKBw4x1Pye2OMDWXxM4dJm3%2FXjpQsaiarMhn9ejVpB15K6lLkF5ZpGVwg7uRFbXWTPfxkpJF6IF3EZ2TFfZkRNuJIohH3cva1y7UWY%2BSkiGYPcguOC8Y6xhJpQQGTaR2B9UZb7Kh1F7lIl0hXvsCYJhdrOzXHPCi%2FWdvujj3T8IPRqYVfcKT5fIsFBrST2uFbzFrkBikALmJqOiZPzZStT%2B5Hr7uhss3M2bUoYZGo9X9nw7NMCbM%2FvixJHk4hxZU9Rd2%2FMBB2NV9z5ewmNWUn85Y7XNSu%2BamFVyDGGBCskx53NTPsQCgXt%2F58I7gbydpYnAJezfu3xGV4lACIInL3%2FLKH31Zk1XXfpCC8tWwAdmCq3giYvvJHRtvx4NvzdyRwBy%2FmDWlkVm9O%2B5%2FuAgg%2FAgMX1NkFCdE33Xa8oVftko8hEVAAXMfZ34iLOS9mc3pfJnwb0fr9dbdY83hKx25GMcyr5zNlm7lTZgel2eF0iw%2BpC1UNBGSiRKHgwnUMDd5o0B4kwvZDeyQY6pgHUtgJeDQKaoH%2Be%2Ff0F7WMyivsMxC9Tv6SAZGOFJ6MeJDLQ6mal%2FqXhBmD4YTSn18rLPwlPgEXfRCZNlYgTXnMR7%2FTgn%2B0s0p7av1yJrNrZXUI5j%2BSrYiLd%2BMjV5jgHBd9Fw4VM%2BF7jk0A2%2FTaD4xwP7T%2BJ6abLspJIACO5Vvb5%2FdEgH5drQKSFER1OU9YKBrFV2RB%2F2YwCXxnBS7N4m1lQcBU5SgV9&X-Amz-Signature=19a896581fde0a0a298689cfe15709b0cf42d851e00736f8e156c244881d88bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466674PJKJF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4z0xtYhJVNxb1hA8P4vB%2FKlX004yYTUhZIloak%2BIEnAiA6glmw4z3PEB5qTwe3WdV%2FOb9iaO8jU%2BkNcJeOlyrZgyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMacn%2F4Oqq%2F1DIHwcqKtwDQM6taAo2Sc0%2FmCz9VKrJpDtvqrCgv8u98knrcJaHiL2gwxvC1xVG2fcsdSQpgCm4uU5ERbHRmbBFgGdhaBAcQRbkNv7nJM37XH97bD%2BWaPl6cePsyCFYCrHKBw4x1Pye2OMDWXxM4dJm3%2FXjpQsaiarMhn9ejVpB15K6lLkF5ZpGVwg7uRFbXWTPfxkpJF6IF3EZ2TFfZkRNuJIohH3cva1y7UWY%2BSkiGYPcguOC8Y6xhJpQQGTaR2B9UZb7Kh1F7lIl0hXvsCYJhdrOzXHPCi%2FWdvujj3T8IPRqYVfcKT5fIsFBrST2uFbzFrkBikALmJqOiZPzZStT%2B5Hr7uhss3M2bUoYZGo9X9nw7NMCbM%2FvixJHk4hxZU9Rd2%2FMBB2NV9z5ewmNWUn85Y7XNSu%2BamFVyDGGBCskx53NTPsQCgXt%2F58I7gbydpYnAJezfu3xGV4lACIInL3%2FLKH31Zk1XXfpCC8tWwAdmCq3giYvvJHRtvx4NvzdyRwBy%2FmDWlkVm9O%2B5%2FuAgg%2FAgMX1NkFCdE33Xa8oVftko8hEVAAXMfZ34iLOS9mc3pfJnwb0fr9dbdY83hKx25GMcyr5zNlm7lTZgel2eF0iw%2BpC1UNBGSiRKHgwnUMDd5o0B4kwvZDeyQY6pgHUtgJeDQKaoH%2Be%2Ff0F7WMyivsMxC9Tv6SAZGOFJ6MeJDLQ6mal%2FqXhBmD4YTSn18rLPwlPgEXfRCZNlYgTXnMR7%2FTgn%2B0s0p7av1yJrNrZXUI5j%2BSrYiLd%2BMjV5jgHBd9Fw4VM%2BF7jk0A2%2FTaD4xwP7T%2BJ6abLspJIACO5Vvb5%2FdEgH5drQKSFER1OU9YKBrFV2RB%2F2YwCXxnBS7N4m1lQcBU5SgV9&X-Amz-Signature=405eccb7af5c207cd2ab77fbb1c6b5815d80eb0538659fbd46e9620d29cad41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
