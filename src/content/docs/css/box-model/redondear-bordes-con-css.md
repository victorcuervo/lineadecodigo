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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QWL2KD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtR%2FHTwlh%2FxKqR4DgBSefty8w%2BDojCzBMdD8YpZII9DAiALIHTtk%2FZ87bm66dziwDqhXmT5OmDvVK4oFlRqieHEjSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1IXRVgRcROxJ%2F7JvKtwD%2BDWVDF8rZoJyGiUEDFNvXiLWyHppCs9fofRdWq%2FSucfd0vAhVj6DOLsCIlyeCfZvvlsp%2B05YqKDqax9%2FkTdk35lqyF%2FWYOIULsHmyZ4e7eP%2BPoT0OEMtYdR8rOvzZs2hnw6aNEyL%2B%2FfxAThSKr5isOUEB6uxS8BGb0asxMEnN5YcSfE3BDOyuWrZx33O0nv0N6rv4X0tkybQcsvp%2BV9wNsrkIb8%2FIl64de5Z%2B0jSHQQicaynXOtRakcWf8oZ9RpAG%2BPlLZXLQ1kZrKWlVLw9n%2BcwnhRrUaG2r%2BV8GhqXFlMTbAIfkApsYFNHUIg%2BybDAGcsV0DRljV833n2Jc1bePggNRilO8hoQGdfg%2BsNLhdbjJ7S%2BMLrwRQUbkYN9eGHVGYxVJgicsN8ljzbIxQaAfrNUGYmB0HskYk%2B5Tvvr9e4gez5ECbXPoafNhOEuL6WOEjHhJOAvgNwtWXNyGzdFdcKzVPbA1iHb9O1COCviq15jG5GvRi7UxYczA5okrvny%2FV2%2FdEmPjgmrQ9hhxu2YYNKvQOfEh4v%2BuFBYT20CESddVxQA9mzHDPPnyz5Wf3UVsUOwc3MYpVdh1eG7fLkvZ%2FRHgSRFaQIFxYLWH6bJTnuHXfxEfwTV%2FdY5pdQw78WKygY6pgGfm0C6Uj2l%2FNU9U5hePHaRciW5lQ%2FD3eCOYw0d5P9v9SMzqutzlvv1%2FIfAoS%2BWhFcptv9FfoEcbcTTHOHYZCQMWqvczHR%2FTmTV9kxqoNwqYk1y%2FD9Bv2S2GqjAyjW%2FVuIyF9ZMuPULHgVFRCAFN5T6ftCs%2FZDMsIkjddft20V%2Fv6xv3fX3LrA8Xn4w9Z4nvwmMu9858uqStoCwKYo%2FVzF2XAWYlye3&X-Amz-Signature=ec5690eaabde902534cbedc111ae851275a2c00801abbd11c7cb068d8deb95fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QWL2KD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtR%2FHTwlh%2FxKqR4DgBSefty8w%2BDojCzBMdD8YpZII9DAiALIHTtk%2FZ87bm66dziwDqhXmT5OmDvVK4oFlRqieHEjSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1IXRVgRcROxJ%2F7JvKtwD%2BDWVDF8rZoJyGiUEDFNvXiLWyHppCs9fofRdWq%2FSucfd0vAhVj6DOLsCIlyeCfZvvlsp%2B05YqKDqax9%2FkTdk35lqyF%2FWYOIULsHmyZ4e7eP%2BPoT0OEMtYdR8rOvzZs2hnw6aNEyL%2B%2FfxAThSKr5isOUEB6uxS8BGb0asxMEnN5YcSfE3BDOyuWrZx33O0nv0N6rv4X0tkybQcsvp%2BV9wNsrkIb8%2FIl64de5Z%2B0jSHQQicaynXOtRakcWf8oZ9RpAG%2BPlLZXLQ1kZrKWlVLw9n%2BcwnhRrUaG2r%2BV8GhqXFlMTbAIfkApsYFNHUIg%2BybDAGcsV0DRljV833n2Jc1bePggNRilO8hoQGdfg%2BsNLhdbjJ7S%2BMLrwRQUbkYN9eGHVGYxVJgicsN8ljzbIxQaAfrNUGYmB0HskYk%2B5Tvvr9e4gez5ECbXPoafNhOEuL6WOEjHhJOAvgNwtWXNyGzdFdcKzVPbA1iHb9O1COCviq15jG5GvRi7UxYczA5okrvny%2FV2%2FdEmPjgmrQ9hhxu2YYNKvQOfEh4v%2BuFBYT20CESddVxQA9mzHDPPnyz5Wf3UVsUOwc3MYpVdh1eG7fLkvZ%2FRHgSRFaQIFxYLWH6bJTnuHXfxEfwTV%2FdY5pdQw78WKygY6pgGfm0C6Uj2l%2FNU9U5hePHaRciW5lQ%2FD3eCOYw0d5P9v9SMzqutzlvv1%2FIfAoS%2BWhFcptv9FfoEcbcTTHOHYZCQMWqvczHR%2FTmTV9kxqoNwqYk1y%2FD9Bv2S2GqjAyjW%2FVuIyF9ZMuPULHgVFRCAFN5T6ftCs%2FZDMsIkjddft20V%2Fv6xv3fX3LrA8Xn4w9Z4nvwmMu9858uqStoCwKYo%2FVzF2XAWYlye3&X-Amz-Signature=849b3f48ac93563692c694253abfab6cbef3fdd61e1cdc7f9ca493cce4057c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
