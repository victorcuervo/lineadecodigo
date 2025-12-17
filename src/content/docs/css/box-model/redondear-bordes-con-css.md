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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMITGHFJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaZf0KP%2Fuvhk4hy6YoUb3j1736H2jAR17Ox638qvJ3BAiEAlG2AxF4MeoHtwvam7XY6%2Fv%2B0JzhA12shzNKMJUb7e4cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmw2rZSX9TQevocjSrcA2ME6xE%2Bjz2XYFrO1aSl0F2pMVYMblO2CSsv%2BUEpLwimDqKh%2Fhx5SpP%2FaglI1lbdG9sxAUWyPbdCEC9UGW%2BgNV0uCijQB1DFWgDyBh7meSZACzb0WXqyFgnfaqJS1uPtuA5QbA11mk6lK2NVE3GVqbqrk%2Bc8REyz8cae1Kz5WYfFa12zPAgmPkqrAdTSOzAqMjfkdifLnejhKONb3QsYvqqlI8b4jN7j1p%2BhNW6mFHaSY5zslLGcCc%2BJSr%2FK9zR6BxhLpyVEL1%2FIsP%2B1siKKetm7leB0PtN9S29ZDxpmLfb4GekSuL42lVykeiHIxXxkOm0dlJj5ccGs7uyrMWxbo9mCgeLyssZ9B42dABror%2FrGuC95jStixgH6H9E5iIp2gNBjOop1owhoK8%2FM%2BBVIKqk1%2FOJrGJ7%2FWrAzeDzyrX4Zfb2vheu%2BeY06v1G4cTXmrnk8HgIcvumPxsgeStv6pIj5o3G3VI1AEWDCE2KGxkzPXk1LdfCvvzo4kgSIa2dNU8IpMTYinvjFl8SqZ60HMtNKzvPHqpqfjeD4U5aLT3noj9bS6PVKb3gg7W5IequPxkgUiN38pQMcHhhXG7bvWfYEj9%2FMHCtuvCGeuwQsUClDF6Sa1F1R6QztAzg8MKWgi8oGOqUB6hAYXor6WWLzwH5gKVQMonXWsHIWHVw9uPYEcCuGpP0svu11By9ZBuivUwBP4kBi%2BcObzyqoKAb7ee3V2CkkG2fkc2X16d8vGZIAwUGodyIuxFo%2F4eSnT4AAIkHRbUL1Lf2vL5deIiTokb3GBuHGGLyQkKG3S6S%2FQnlv0ypFnWKyl2uLZnYQvfpF9nB7gN40uKup5b8W1STMk5LJdygEQpL9koI1&X-Amz-Signature=345300f863ddbf1c304cc50d5dc1e09048556e897222c4d37953d74e69248f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMITGHFJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaZf0KP%2Fuvhk4hy6YoUb3j1736H2jAR17Ox638qvJ3BAiEAlG2AxF4MeoHtwvam7XY6%2Fv%2B0JzhA12shzNKMJUb7e4cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmw2rZSX9TQevocjSrcA2ME6xE%2Bjz2XYFrO1aSl0F2pMVYMblO2CSsv%2BUEpLwimDqKh%2Fhx5SpP%2FaglI1lbdG9sxAUWyPbdCEC9UGW%2BgNV0uCijQB1DFWgDyBh7meSZACzb0WXqyFgnfaqJS1uPtuA5QbA11mk6lK2NVE3GVqbqrk%2Bc8REyz8cae1Kz5WYfFa12zPAgmPkqrAdTSOzAqMjfkdifLnejhKONb3QsYvqqlI8b4jN7j1p%2BhNW6mFHaSY5zslLGcCc%2BJSr%2FK9zR6BxhLpyVEL1%2FIsP%2B1siKKetm7leB0PtN9S29ZDxpmLfb4GekSuL42lVykeiHIxXxkOm0dlJj5ccGs7uyrMWxbo9mCgeLyssZ9B42dABror%2FrGuC95jStixgH6H9E5iIp2gNBjOop1owhoK8%2FM%2BBVIKqk1%2FOJrGJ7%2FWrAzeDzyrX4Zfb2vheu%2BeY06v1G4cTXmrnk8HgIcvumPxsgeStv6pIj5o3G3VI1AEWDCE2KGxkzPXk1LdfCvvzo4kgSIa2dNU8IpMTYinvjFl8SqZ60HMtNKzvPHqpqfjeD4U5aLT3noj9bS6PVKb3gg7W5IequPxkgUiN38pQMcHhhXG7bvWfYEj9%2FMHCtuvCGeuwQsUClDF6Sa1F1R6QztAzg8MKWgi8oGOqUB6hAYXor6WWLzwH5gKVQMonXWsHIWHVw9uPYEcCuGpP0svu11By9ZBuivUwBP4kBi%2BcObzyqoKAb7ee3V2CkkG2fkc2X16d8vGZIAwUGodyIuxFo%2F4eSnT4AAIkHRbUL1Lf2vL5deIiTokb3GBuHGGLyQkKG3S6S%2FQnlv0ypFnWKyl2uLZnYQvfpF9nB7gN40uKup5b8W1STMk5LJdygEQpL9koI1&X-Amz-Signature=3210c06d70eaec70892879f0fbb9bf1d04fe8fbc98a402d8d25812e757dd59f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
