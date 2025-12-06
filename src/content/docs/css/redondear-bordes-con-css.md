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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73Q4QJ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf1%2BiN6ftrMXzar4Wkh1tLznGdHvR5UFchlwKo%2BTArWAIgKQoXjlW%2BnnCbPPgfaQtX6qR08C7uM4ajZwxWdqUKLGsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDP4Nhr4gKrup5hrPOircA3gCRC7%2BqoYzz9fNGS%2BLq6uSbECgLpf2wvb%2FkEEdqeK7b8x3q%2BRBBmfoEaN9uTYK6QvDdjNMP9InxcdAB05CrdIRBkcFHfijdNs82G%2BW5yZ1uXInKVDqvd37jRLeReMtxPHum9xoiFMXbLvaau9a0OtRuh20Q3q1mE0leEqq2%2FD5U2Ku3N2zLInk77PAi1%2FsXFPgki4KaP56EmmgNERZKt9HizyJXLWxwAY2GWWh4XUPLy4yttnlTdzbR39gYNhlioqFr7X67bV3QBq8i3zM%2BUgvtrIgZZGOXXlmc3tqZ9Dgr89oEb%2BGkPJYOPu5JDePQvytwJ0L5T8vjz3BX%2FeA7BP5TBfQVjybDzlovX1WazsbHdyOT2A%2Br2X%2FS8uH%2FsLSFEEdYtwyX7djKWbnabNPz8oSMfmxSZQs9%2FtmMS2ev%2FqgMRr5pio8VH0HG%2FQEonlWSBTow4RA0kxVzGIRVelUW%2BIKf3y4nRd8SZTw%2Bpm1e84wEmMAKyXC7KTloMOu2Wm8UOXssNeQq3OwcofKw7eg8WvY62Lq%2FXQN4PXta2pVcuZw2XjVA2BuvxJTfDEBQPltV7tby%2Bkf%2FjF7M8MSZefQvN0LijS4DYzzRgbLzR88rhtvsuSryYxhFvZWu0HcMMD9zskGOqUBairmLiRvTiAKb1WuQJ0ns5VkvwgUklV1q%2BvbYONW09TIwpG6kR9xhvCEi%2Fx2n37ZfI5vbna0FPlog0fUVtVXCbiTPXgPLtkpqjUJ2wikDbz96DxMTWsVu6eAaLxqyOB1H2AAcIC0Xam39XI3TQUu4tLTr0OXoB88L4SsojULpjjODUZ3TJIKLridLqRRYeYbXcULH9PLTHBIYilRS8miEnIIX1I3&X-Amz-Signature=9d2a1fae9be9630ded2a1037450c1fc9af4d82801d9498e9ee2560cca9e0bd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73Q4QJ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf1%2BiN6ftrMXzar4Wkh1tLznGdHvR5UFchlwKo%2BTArWAIgKQoXjlW%2BnnCbPPgfaQtX6qR08C7uM4ajZwxWdqUKLGsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDP4Nhr4gKrup5hrPOircA3gCRC7%2BqoYzz9fNGS%2BLq6uSbECgLpf2wvb%2FkEEdqeK7b8x3q%2BRBBmfoEaN9uTYK6QvDdjNMP9InxcdAB05CrdIRBkcFHfijdNs82G%2BW5yZ1uXInKVDqvd37jRLeReMtxPHum9xoiFMXbLvaau9a0OtRuh20Q3q1mE0leEqq2%2FD5U2Ku3N2zLInk77PAi1%2FsXFPgki4KaP56EmmgNERZKt9HizyJXLWxwAY2GWWh4XUPLy4yttnlTdzbR39gYNhlioqFr7X67bV3QBq8i3zM%2BUgvtrIgZZGOXXlmc3tqZ9Dgr89oEb%2BGkPJYOPu5JDePQvytwJ0L5T8vjz3BX%2FeA7BP5TBfQVjybDzlovX1WazsbHdyOT2A%2Br2X%2FS8uH%2FsLSFEEdYtwyX7djKWbnabNPz8oSMfmxSZQs9%2FtmMS2ev%2FqgMRr5pio8VH0HG%2FQEonlWSBTow4RA0kxVzGIRVelUW%2BIKf3y4nRd8SZTw%2Bpm1e84wEmMAKyXC7KTloMOu2Wm8UOXssNeQq3OwcofKw7eg8WvY62Lq%2FXQN4PXta2pVcuZw2XjVA2BuvxJTfDEBQPltV7tby%2Bkf%2FjF7M8MSZefQvN0LijS4DYzzRgbLzR88rhtvsuSryYxhFvZWu0HcMMD9zskGOqUBairmLiRvTiAKb1WuQJ0ns5VkvwgUklV1q%2BvbYONW09TIwpG6kR9xhvCEi%2Fx2n37ZfI5vbna0FPlog0fUVtVXCbiTPXgPLtkpqjUJ2wikDbz96DxMTWsVu6eAaLxqyOB1H2AAcIC0Xam39XI3TQUu4tLTr0OXoB88L4SsojULpjjODUZ3TJIKLridLqRRYeYbXcULH9PLTHBIYilRS8miEnIIX1I3&X-Amz-Signature=1d3bcd83cb2696924a710a22b8bf983a8c1b62adfabbc3a96e060dfc6ec4590a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
