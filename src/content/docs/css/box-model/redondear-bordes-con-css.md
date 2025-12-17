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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRUEACP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtHNauYh%2BbWpB8%2F9Lj8N3R5ypKDpepm4y4KTrYqEec%2FAiEA44kXImYxuO0eQ2aNbXQENMLJKA9DsThswad71KAf%2F%2BQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHrAmWug1AGcW%2BBQuCrcAy2V9azVezzGEjGEMXfIPZ91jt9gne6YARKb3vdpVxELQg%2FAO7bvyyglEvKcOUoX6KfHmV%2BnSDpP0T%2BFHPzgIoG4BDlEhufx9ky9C7MdQqGk1g4lkzI8J4X75r%2BDLwR6CW8%2FlJfL16IAApRibfPPCGRc%2BnurQUcoeetSt0kGg51F0Tw0jPLSW74mGgVNscwsXtOjUAuX4ETTflkIdOtvpeqR1GxIoPyE2%2Bbbjz0feZA%2FuKeCHjythL6k%2BoPVAWnwOV4CKkLBGWMZngclzuPb%2Flbq8pU%2BZeKzOfTDMPQcuebRdcQWqGPQa5rYmPSY4Zapc5JxUXTjv%2F16elilubCEfM%2B%2Fm%2Buip8XSVjxLyZuw4M7AUR38Y6aPlpqwwtDAUo%2F27GJAkvZYgT4QbFbUmumvyVBMM0i8rNVviwuFULYgWpa6daDuHdltKxljiKDpk%2F9ewrPwebZ2GyfO%2FMDyHzuZ1l%2ByS4mSfyLuM4R3pCb0%2ByuSOmGeInPk9PQQgTPHBUyEhfCrIiHZPBQNAvd5kTiSqWLwy%2BYKCYpeDVfyFBYfriGMn0pW5oC2OleWx%2F7VbRHEkNULj1zxNpKsHgSgypFGVdZoVjgfBmoSnU1CufGQom4TBOmBp1%2FQz4n94sq%2BMMT7h8oGOqUBIu4YaY3aeexHR1aOTk%2BdeAe7Ucq4E7xGblu1D%2BXC1DpqbNWYxcLL2Pyj7zNoeQ2gdBDbkjYoWmZquYewW08%2F5YYKdzHctwdWxZAGM9VKK9ik2SdTHij2zcYbRx3zleThbj6lIfPu1w3GpRQW7arLX5iyZwMU10R5tqGHReXFRTuutGCMYjIRnF4JUa5utKzsTTio4RepKFpzbjyEWfw7pfK%2BR5VT&X-Amz-Signature=7e1e4271819372d82caa3170518d9436af107add6d75da7385297671f7412d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRUEACP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtHNauYh%2BbWpB8%2F9Lj8N3R5ypKDpepm4y4KTrYqEec%2FAiEA44kXImYxuO0eQ2aNbXQENMLJKA9DsThswad71KAf%2F%2BQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHrAmWug1AGcW%2BBQuCrcAy2V9azVezzGEjGEMXfIPZ91jt9gne6YARKb3vdpVxELQg%2FAO7bvyyglEvKcOUoX6KfHmV%2BnSDpP0T%2BFHPzgIoG4BDlEhufx9ky9C7MdQqGk1g4lkzI8J4X75r%2BDLwR6CW8%2FlJfL16IAApRibfPPCGRc%2BnurQUcoeetSt0kGg51F0Tw0jPLSW74mGgVNscwsXtOjUAuX4ETTflkIdOtvpeqR1GxIoPyE2%2Bbbjz0feZA%2FuKeCHjythL6k%2BoPVAWnwOV4CKkLBGWMZngclzuPb%2Flbq8pU%2BZeKzOfTDMPQcuebRdcQWqGPQa5rYmPSY4Zapc5JxUXTjv%2F16elilubCEfM%2B%2Fm%2Buip8XSVjxLyZuw4M7AUR38Y6aPlpqwwtDAUo%2F27GJAkvZYgT4QbFbUmumvyVBMM0i8rNVviwuFULYgWpa6daDuHdltKxljiKDpk%2F9ewrPwebZ2GyfO%2FMDyHzuZ1l%2ByS4mSfyLuM4R3pCb0%2ByuSOmGeInPk9PQQgTPHBUyEhfCrIiHZPBQNAvd5kTiSqWLwy%2BYKCYpeDVfyFBYfriGMn0pW5oC2OleWx%2F7VbRHEkNULj1zxNpKsHgSgypFGVdZoVjgfBmoSnU1CufGQom4TBOmBp1%2FQz4n94sq%2BMMT7h8oGOqUBIu4YaY3aeexHR1aOTk%2BdeAe7Ucq4E7xGblu1D%2BXC1DpqbNWYxcLL2Pyj7zNoeQ2gdBDbkjYoWmZquYewW08%2F5YYKdzHctwdWxZAGM9VKK9ik2SdTHij2zcYbRx3zleThbj6lIfPu1w3GpRQW7arLX5iyZwMU10R5tqGHReXFRTuutGCMYjIRnF4JUa5utKzsTTio4RepKFpzbjyEWfw7pfK%2BR5VT&X-Amz-Signature=a22a8ffe5e28dd784f412de825d72c69b693b5ff69def6f11d60d6d886b2f5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
