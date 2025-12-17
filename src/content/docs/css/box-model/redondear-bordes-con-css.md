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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB7XZKBU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmjchUTkJ%2BwJfYIwmTTXahJn%2BvLn6lKBVsgFGNl1Mu0gIgM4QZgymzF0ExMWK6ib%2BBm2FfqDtjiCCyysIAjjllpzgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJlfkbYLU9XJko4WkCrcA6jGCN2fFfXWN3ozhH5LCA7bZ9CwqBAKIDvpxDGbklr%2BnIRfDpZKXZcHqWQXnn8mVLDbe4tHUSm2%2FRe8oZGwpVHnQj4oGtjzoDstQCosR2n9B0QqpmvN0w%2BMbFUDqFPEjDhDYwSWPTAmr7N81xhNEULqh8SVUOytBNJrolS9aqgCWOWpcU%2Fxv%2FkCFZyymfzKLSztJBfLbQIXWVkqM5aRLxIxierviWjvHrY2LuX2t%2BrcBIVJ3LmJJQw5I0IzB4RRI4Ol%2FkIUxZoqwYi65ERNQxyjWyWS3OLYvIyS0TA4fjNKhjJx%2FTD1334mimyz8fHGOLTrIjwnSMfJC2e%2BsPTjOsHAK4hrXn7fOmowuF%2F1n7LqSJk8U6f2sbuo%2BZgboDRCM1mcSYpXYQiYrAAELJlcFQl%2FytPoG%2FOnbSmSLeO9Ea7nn1N0AfBmTBYS3n3ZfxVImugnBrAKK%2FBKs3gMxXvax9nm6LC85rTzEKZC8%2Fc0e2EzvR4hgi6N5yq%2FVjpUoEcmnxKQAV7VcOsVmCHRTIJPX7UCb8rXYnLMnXm8CDsicmREaN4y%2FUDTNjXPHo8q9TUOejuAkBoqaMvcX0eJUchTu3uT%2FZRFhEKAqde5HV4Qe3hdB2mIYbYIPvVgm02jMPeWiMoGOqUB8bBN50ZvTi%2FMFuYbuMFSBQDprOwzDjwtbjgspExidQAYUreZtS81nbeuCYnN%2BiOrTXmHoVtiEmjKxGeF76ZFUqC2tUtLsR5wzG7picZTSei5OyHUjO0FyzR9zChEWGHgovqvoIPBWddk9wYC6vBnQuDyacVfhSmFfdEP7noA5EvLC%2FdgTqMPDi3NLLqF6Ha8VtzXF6u6oxIzwoTjuonmD%2Bl8CsSG&X-Amz-Signature=7dfbcdf4dc74e1f497c660d68c7208a35c90d84b09fd95f1399719135851a410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB7XZKBU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmjchUTkJ%2BwJfYIwmTTXahJn%2BvLn6lKBVsgFGNl1Mu0gIgM4QZgymzF0ExMWK6ib%2BBm2FfqDtjiCCyysIAjjllpzgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJlfkbYLU9XJko4WkCrcA6jGCN2fFfXWN3ozhH5LCA7bZ9CwqBAKIDvpxDGbklr%2BnIRfDpZKXZcHqWQXnn8mVLDbe4tHUSm2%2FRe8oZGwpVHnQj4oGtjzoDstQCosR2n9B0QqpmvN0w%2BMbFUDqFPEjDhDYwSWPTAmr7N81xhNEULqh8SVUOytBNJrolS9aqgCWOWpcU%2Fxv%2FkCFZyymfzKLSztJBfLbQIXWVkqM5aRLxIxierviWjvHrY2LuX2t%2BrcBIVJ3LmJJQw5I0IzB4RRI4Ol%2FkIUxZoqwYi65ERNQxyjWyWS3OLYvIyS0TA4fjNKhjJx%2FTD1334mimyz8fHGOLTrIjwnSMfJC2e%2BsPTjOsHAK4hrXn7fOmowuF%2F1n7LqSJk8U6f2sbuo%2BZgboDRCM1mcSYpXYQiYrAAELJlcFQl%2FytPoG%2FOnbSmSLeO9Ea7nn1N0AfBmTBYS3n3ZfxVImugnBrAKK%2FBKs3gMxXvax9nm6LC85rTzEKZC8%2Fc0e2EzvR4hgi6N5yq%2FVjpUoEcmnxKQAV7VcOsVmCHRTIJPX7UCb8rXYnLMnXm8CDsicmREaN4y%2FUDTNjXPHo8q9TUOejuAkBoqaMvcX0eJUchTu3uT%2FZRFhEKAqde5HV4Qe3hdB2mIYbYIPvVgm02jMPeWiMoGOqUB8bBN50ZvTi%2FMFuYbuMFSBQDprOwzDjwtbjgspExidQAYUreZtS81nbeuCYnN%2BiOrTXmHoVtiEmjKxGeF76ZFUqC2tUtLsR5wzG7picZTSei5OyHUjO0FyzR9zChEWGHgovqvoIPBWddk9wYC6vBnQuDyacVfhSmFfdEP7noA5EvLC%2FdgTqMPDi3NLLqF6Ha8VtzXF6u6oxIzwoTjuonmD%2Bl8CsSG&X-Amz-Signature=8fac1a387dd7db323ec46124b2ec641b407462afb4f0ea4d9cd1492610f6b0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
