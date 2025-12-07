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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJXD722Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMtGkkE9VCxdcDBIQ0Qgym%2FsG7R7l3JKZKPwlJbv%2BQWAIgDlwXmirtdjJywNxCtSJyf%2FkUC%2Bbc%2BuEGQEYLpq3PXY0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBYh8v4LUJZ3MDSuyrcA2qpDVitC%2BcsW5CbBjE%2BjvXElyNRIlHvQ0BR6Q7yWevXcTVv3uhXfpYREMViUCSFEKJ5C0Y1FBFKK%2B8gIOVlpGZu5NbjcMO9ve0BVx7P2SLYKUDk6669QdeT5svVI%2F1qY3szLhw8z5%2FvufCHp8kV2PP3RoVrPuCp1aL28Yr2vctStRK68PuklUG77T6Wz0SVKuAPjl4S72eTe%2BqTfd7tUcKuf4dYZmIUlHWurTFlq9A2pM3uW0Es%2Fvjn1LuN0IjJ%2FiV%2B4aY65vXbjwHGxqvR6jSX7tQH62d9R6dVEbdZI4YZFktZvNhusCCBE78tGf%2BEVMI2rcp7Se8bPriCqvyEUoUuEbyP3%2F%2Fb6mvqu0KLIfGyxxBeHqWPkUTsgd52nkUNCQQH227mjCEDWN2IOHni037HBSMQU3hopcTDRAzjOHQltlMVdy2Ur01S4P%2Fu0P%2FHiTwUmXsY53qIu1mWyFfjvi%2Bervrr6lyDN2ygBvpdrpPU6NMOCiWord8vNw3I8MAE38q2tiQpJ%2FfxDOxfLN0pfRcgDWagh8PzZQTBN4%2B2k5PqLBWQEm8bICpeG8Nr9b8tqJdRrkYfSI2W6dmVEHnImlXeW%2FJA8E9RQMHTiG6P38kIkctcJQbA%2BDBKEIq7MK7%2B0skGOqUBXxqBGXVSPvfwN%2Ff%2FPgnZC9TtYLW0s988%2BCJL6GNMIACQO%2B2mm8bG5JA1pHy0ri12pAGrZNooz%2BsMzUIcYklJ2TMggXVFPRUXjpFi1aWL43yrIWzx%2BQF3qsolV9roFk1yYKD4NCy5pnJjRdfLWyBsNQtaNVpzRxHWjJ%2B%2BFQ3hTcDQDCqXecJYBbSzZhPQu9O7hdwnWSZef2K1if2CGQgTu2Tut12e&X-Amz-Signature=a9ebfd6a9e1d9f79e8320c0c010580c8d510f2f859f2756c1d0e73129d2449f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJXD722Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMtGkkE9VCxdcDBIQ0Qgym%2FsG7R7l3JKZKPwlJbv%2BQWAIgDlwXmirtdjJywNxCtSJyf%2FkUC%2Bbc%2BuEGQEYLpq3PXY0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBYh8v4LUJZ3MDSuyrcA2qpDVitC%2BcsW5CbBjE%2BjvXElyNRIlHvQ0BR6Q7yWevXcTVv3uhXfpYREMViUCSFEKJ5C0Y1FBFKK%2B8gIOVlpGZu5NbjcMO9ve0BVx7P2SLYKUDk6669QdeT5svVI%2F1qY3szLhw8z5%2FvufCHp8kV2PP3RoVrPuCp1aL28Yr2vctStRK68PuklUG77T6Wz0SVKuAPjl4S72eTe%2BqTfd7tUcKuf4dYZmIUlHWurTFlq9A2pM3uW0Es%2Fvjn1LuN0IjJ%2FiV%2B4aY65vXbjwHGxqvR6jSX7tQH62d9R6dVEbdZI4YZFktZvNhusCCBE78tGf%2BEVMI2rcp7Se8bPriCqvyEUoUuEbyP3%2F%2Fb6mvqu0KLIfGyxxBeHqWPkUTsgd52nkUNCQQH227mjCEDWN2IOHni037HBSMQU3hopcTDRAzjOHQltlMVdy2Ur01S4P%2Fu0P%2FHiTwUmXsY53qIu1mWyFfjvi%2Bervrr6lyDN2ygBvpdrpPU6NMOCiWord8vNw3I8MAE38q2tiQpJ%2FfxDOxfLN0pfRcgDWagh8PzZQTBN4%2B2k5PqLBWQEm8bICpeG8Nr9b8tqJdRrkYfSI2W6dmVEHnImlXeW%2FJA8E9RQMHTiG6P38kIkctcJQbA%2BDBKEIq7MK7%2B0skGOqUBXxqBGXVSPvfwN%2Ff%2FPgnZC9TtYLW0s988%2BCJL6GNMIACQO%2B2mm8bG5JA1pHy0ri12pAGrZNooz%2BsMzUIcYklJ2TMggXVFPRUXjpFi1aWL43yrIWzx%2BQF3qsolV9roFk1yYKD4NCy5pnJjRdfLWyBsNQtaNVpzRxHWjJ%2B%2BFQ3hTcDQDCqXecJYBbSzZhPQu9O7hdwnWSZef2K1if2CGQgTu2Tut12e&X-Amz-Signature=058c113dbd4ef47813f77571bf97feac11b1bc89e49279b40dc07e0a677c53d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
