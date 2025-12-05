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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETDJYIU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwXTZg7CtN1BlAb%2BT0ZmuY9prqvK%2BSKlmLyQFM3wHf2AiEAsuUP1qHzdarWPcFlGkwNv5ku%2BGySFs7VF3u4Eg7%2BYRIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAgTaAS731UKZYdb1ircA51t8pBHA0XII7mKIqRGmlNttPyw%2FvuuWeq5tax8ERLj%2BGHkJvJ3IESxI6aCr6nDPpKhxHWBsXNgOR3ceZ%2BGpCUtIUH7YMpcoOeXD4wQmBPKi%2BH9go0HhVTSXe9HhpwccujYlFxuxea2ZlFUXxFKlKDsqgDs7mxP3THEVLIyIBIEwDnc5ZWYApxJ9rLy9DkgW1UgiWHpAzbGip5lzIiiTBHKgxA4h6VHuHavZ6BWjkU1W9AtGuo002rvhBbX1Y0twVHpgVsAdQwb1Gug3BKdZBpYP%2BlBk2s0WjFfUiZ1As9acHEgrx%2Bqhn8wAB5q3z64e2q11RaApg3ZcpVOngwpKuWrzdKDoGeNrCNYgsvNX%2FocJg3%2FcTxgpZ4iOEeYijxhCYxYFEE32dneO1VwR1jEqjFJrP9qYTjDBc%2BZVRVtsrOvDuY1USy0xJe10TZGvS%2BaARXjBP%2B%2BvLKptnF5OvSTvSgcwIsj8aSMpv0UcOMT5lEMVm7C4xUJyx7%2BsDUS1%2BVsA%2Br5wmUIR12%2BKS%2Ba3M%2BFTXqjZX3geVfHiOQhl7iJiojUnhLJ2Or9ViVuD6BJl2E0xQ9ky8rJ3oCkk6JzxDlhMVjtfsSTlIVx8PebUW1ijYjvQUN0qPIuT1gyUfJoMNWMyMkGOqUBTgLSEtrI0TPOvk2OCKQdNlgShofnXku57oRTMi17cK4LD%2BkAkjGxetmoWYAPTrqLlIoDGAS1An1ENKLp9gV1He7hN3wjy5qoFOhYIes5sQKPZYieqkbEITG8SIB3vZM7DX0PvnqHqr2NXlZ29nsu7%2FaIOyNn%2BXg%2F5AInays1ghvSMNbbvhdnIb9h8ZltL7iF39u96HlQw3rcbLo6NExorMzv%2FRoq&X-Amz-Signature=ba0cc1dedbaf3008199c5ab502d887e80e0d871956eed4780c7e69e62543fb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETDJYIU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwXTZg7CtN1BlAb%2BT0ZmuY9prqvK%2BSKlmLyQFM3wHf2AiEAsuUP1qHzdarWPcFlGkwNv5ku%2BGySFs7VF3u4Eg7%2BYRIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAgTaAS731UKZYdb1ircA51t8pBHA0XII7mKIqRGmlNttPyw%2FvuuWeq5tax8ERLj%2BGHkJvJ3IESxI6aCr6nDPpKhxHWBsXNgOR3ceZ%2BGpCUtIUH7YMpcoOeXD4wQmBPKi%2BH9go0HhVTSXe9HhpwccujYlFxuxea2ZlFUXxFKlKDsqgDs7mxP3THEVLIyIBIEwDnc5ZWYApxJ9rLy9DkgW1UgiWHpAzbGip5lzIiiTBHKgxA4h6VHuHavZ6BWjkU1W9AtGuo002rvhBbX1Y0twVHpgVsAdQwb1Gug3BKdZBpYP%2BlBk2s0WjFfUiZ1As9acHEgrx%2Bqhn8wAB5q3z64e2q11RaApg3ZcpVOngwpKuWrzdKDoGeNrCNYgsvNX%2FocJg3%2FcTxgpZ4iOEeYijxhCYxYFEE32dneO1VwR1jEqjFJrP9qYTjDBc%2BZVRVtsrOvDuY1USy0xJe10TZGvS%2BaARXjBP%2B%2BvLKptnF5OvSTvSgcwIsj8aSMpv0UcOMT5lEMVm7C4xUJyx7%2BsDUS1%2BVsA%2Br5wmUIR12%2BKS%2Ba3M%2BFTXqjZX3geVfHiOQhl7iJiojUnhLJ2Or9ViVuD6BJl2E0xQ9ky8rJ3oCkk6JzxDlhMVjtfsSTlIVx8PebUW1ijYjvQUN0qPIuT1gyUfJoMNWMyMkGOqUBTgLSEtrI0TPOvk2OCKQdNlgShofnXku57oRTMi17cK4LD%2BkAkjGxetmoWYAPTrqLlIoDGAS1An1ENKLp9gV1He7hN3wjy5qoFOhYIes5sQKPZYieqkbEITG8SIB3vZM7DX0PvnqHqr2NXlZ29nsu7%2FaIOyNn%2BXg%2F5AInays1ghvSMNbbvhdnIb9h8ZltL7iF39u96HlQw3rcbLo6NExorMzv%2FRoq&X-Amz-Signature=8554d643f6e49392b1bd92210c1da9e3ccf06672edafec8b45f94aed62ff260a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
