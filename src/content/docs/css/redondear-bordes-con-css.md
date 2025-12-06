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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642AVYTM2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCenZtx62hVfUwXIBJ2NzaAGoF03XbR9%2BHI2RoInd4FMwIhAIJaHn8bkFTAxELZk%2F7CUHDPrqzJEwCWoaIpmvBGAmybKv8DCHUQABoMNjM3NDIzMTgzODA1IgyKEGQSVmh6caEGj3Aq3ANFOReufJrKF8GvIo9TsWcYTWoS%2BuRNOUdh%2Fl7dn0OZXO7Cqi2c%2FkU3cRkI4fOrvxlbdFS7DFYbEem0CVmmdb2WHe8zQg5UF1z519wYzVt%2BmhJRjoWSJD7uE4PEcrO14AtpPAxW%2FzC7JReUjkdQ%2Frg7CUXX0%2BjvyiYwtfMJd4QA494AfrkacDRHid6WZeADEddaSBwZQ%2Bdt6sqJgXgE2GEeft2gftyTSqYam19f5SjwQcttbJJltovodxdwUJWF009poXJQCWXJlhL4wFoCZZk6Muuo%2F84slLielCUGgheTaoXcIrOan6TY95aSL8uoHsrMLcwG14UDnnFeQNBGwIuPgPiCajtKXCJUFCp27Q%2FdnZT%2BWnFgxQERu%2BnQhi0TSx30aJ5LTOYJMBKEG9t5XfHekYl1ek8YSVFrir%2FSpI6Noxmhk%2B87Jpg0sZmgD1Vnj7FltM2F6AGm9FnoxQWf3XK3OCNStmgSj7YdswTjJUACvxuadxcocZ7np4ex%2FsoDdg5YKqI0Fl%2B%2FSXwzqMRUAWE0%2FAW4IlEQm016bVFGoyPuZGev%2B3VdLJqu2hoi8LR%2B3Q8SeMkEjIU4d2Sp46EDDw0RN2gIROFLgVs6nRF%2BKh9YiCvA03pBrB1fIuCsMTDtptDJBjqkAbso94bHzTz%2BYtGdPPv8kpcwt0QPDE5egi%2B2S2Xx1GultbhUJrSys1NdwP01JKb24oqAZuEzhceOZ3GvVgXC02enha%2FITViuOlytaVy18XyR2ry6sgVybovSjjwnopFiANHLyrA%2F3Un%2F4qf1%2F21fgc48P8As6ZQLxta4BfOBa6wKOx3X7KUI%2BeeHHEYBjBzfB%2B38HvZ5mefT0czJTkFzULbE%2BO5h&X-Amz-Signature=fe5d68973cc355fabac5bbea20fbfc7b93fab85b1fb4acdbb547f04509e6a213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642AVYTM2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCenZtx62hVfUwXIBJ2NzaAGoF03XbR9%2BHI2RoInd4FMwIhAIJaHn8bkFTAxELZk%2F7CUHDPrqzJEwCWoaIpmvBGAmybKv8DCHUQABoMNjM3NDIzMTgzODA1IgyKEGQSVmh6caEGj3Aq3ANFOReufJrKF8GvIo9TsWcYTWoS%2BuRNOUdh%2Fl7dn0OZXO7Cqi2c%2FkU3cRkI4fOrvxlbdFS7DFYbEem0CVmmdb2WHe8zQg5UF1z519wYzVt%2BmhJRjoWSJD7uE4PEcrO14AtpPAxW%2FzC7JReUjkdQ%2Frg7CUXX0%2BjvyiYwtfMJd4QA494AfrkacDRHid6WZeADEddaSBwZQ%2Bdt6sqJgXgE2GEeft2gftyTSqYam19f5SjwQcttbJJltovodxdwUJWF009poXJQCWXJlhL4wFoCZZk6Muuo%2F84slLielCUGgheTaoXcIrOan6TY95aSL8uoHsrMLcwG14UDnnFeQNBGwIuPgPiCajtKXCJUFCp27Q%2FdnZT%2BWnFgxQERu%2BnQhi0TSx30aJ5LTOYJMBKEG9t5XfHekYl1ek8YSVFrir%2FSpI6Noxmhk%2B87Jpg0sZmgD1Vnj7FltM2F6AGm9FnoxQWf3XK3OCNStmgSj7YdswTjJUACvxuadxcocZ7np4ex%2FsoDdg5YKqI0Fl%2B%2FSXwzqMRUAWE0%2FAW4IlEQm016bVFGoyPuZGev%2B3VdLJqu2hoi8LR%2B3Q8SeMkEjIU4d2Sp46EDDw0RN2gIROFLgVs6nRF%2BKh9YiCvA03pBrB1fIuCsMTDtptDJBjqkAbso94bHzTz%2BYtGdPPv8kpcwt0QPDE5egi%2B2S2Xx1GultbhUJrSys1NdwP01JKb24oqAZuEzhceOZ3GvVgXC02enha%2FITViuOlytaVy18XyR2ry6sgVybovSjjwnopFiANHLyrA%2F3Un%2F4qf1%2F21fgc48P8As6ZQLxta4BfOBa6wKOx3X7KUI%2BeeHHEYBjBzfB%2B38HvZ5mefT0czJTkFzULbE%2BO5h&X-Amz-Signature=b4a99412131fb259906ad1c8f9acd0848ecbaece7819789f85b0ec234fbdb875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
