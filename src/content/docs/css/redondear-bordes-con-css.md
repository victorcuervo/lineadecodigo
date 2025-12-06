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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBY4YJBE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL86Q6V95xu3iEdl%2BsIHUaveITgYI8LD%2FsN%2FwkfrCSLwIgX43pEShRgRirzRnBJzdXJDlobIIxgu2YkM8IJpC1vo8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHEoGvoX4FaXoOt4NCrcA9hcPqtGUu9Zu%2B6kRvLhcHKjTQp1l6PxhyVLd30Y060%2Fly8V0DE%2FXBl%2B1gpDnba6RKuyd0%2Bspa%2BYdc0L55ycHWEgEXXP8by7fe1uHCEX1NJ%2BKhplRTqM1%2F8Xlvk4Vraf3aM%2B31OC%2BgjxE%2BFccYlvoVuq3%2FfUrb4ZydGgJrUJOyqCGuVFF1pEUvzkXcNyHaZk8HY%2BqfZoDxDpCNPfKzk3PHQ7FL3id4Hc4hM%2FvnCA1Qutugry8xYCRBJQUNtjNR4KeGHze4HlAzm%2F9thsgVC%2FBE408YkKUse4BezxxdYXhYjpxfsyxj29QBi5UE523DHr8nTWG2Up7VexShYmW8715bObqDSO7OcIGlkjOcu%2FAR8ccnnKK%2BJiXVUtF6S9AmUUZAQ9dh5UO%2BO4ZMHgzht9sqR%2BekpmzFBPof4%2BGgbMzhO4dJ3EtHiXxe2ynf8b%2BcWxp%2BoKwFzLrLk1vNOxm88gH53RUf4K0k%2BnE0HZI0az1WTaeDafuSOWo2%2BO2rPacgBchrU1Ppb771y50YySKMpecQJhWNvBDk0igdWu4RNBS3wfsUmRII%2BfmgfGw2wTDX%2F1QYSZI%2FjKilAdhpjuZ%2B6XqoZL3dIHxkL%2Fs4ChjgG6g0XHOR11KNtC72AQKiyJMPTH0ckGOqUBIQ3X0c93p8XGoTWOmahvoAttdRoyt%2B0xZ8%2F4vZLkhaCZ29sY0XkxsrOuBPZc%2FKFCMvETshTmxDEdFvuX2Cj0xzOY0BQ5V0mzZeVs8lGyDZkJXmh6Xnzmv8mjwj72PfardAB6kBlXBU0lt8dyTI4iTVI%2B6Ii7OHePU%2BHX1bhAtXdkLSCRDd3cIyokjhUf4Tl2do1dwudmvQZQF7A%2Fh7RD5JLsvWZv&X-Amz-Signature=608663d9ce3da7ee8be2ed4e3355af8998d014e73f860d7c0cda405878973f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBY4YJBE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL86Q6V95xu3iEdl%2BsIHUaveITgYI8LD%2FsN%2FwkfrCSLwIgX43pEShRgRirzRnBJzdXJDlobIIxgu2YkM8IJpC1vo8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHEoGvoX4FaXoOt4NCrcA9hcPqtGUu9Zu%2B6kRvLhcHKjTQp1l6PxhyVLd30Y060%2Fly8V0DE%2FXBl%2B1gpDnba6RKuyd0%2Bspa%2BYdc0L55ycHWEgEXXP8by7fe1uHCEX1NJ%2BKhplRTqM1%2F8Xlvk4Vraf3aM%2B31OC%2BgjxE%2BFccYlvoVuq3%2FfUrb4ZydGgJrUJOyqCGuVFF1pEUvzkXcNyHaZk8HY%2BqfZoDxDpCNPfKzk3PHQ7FL3id4Hc4hM%2FvnCA1Qutugry8xYCRBJQUNtjNR4KeGHze4HlAzm%2F9thsgVC%2FBE408YkKUse4BezxxdYXhYjpxfsyxj29QBi5UE523DHr8nTWG2Up7VexShYmW8715bObqDSO7OcIGlkjOcu%2FAR8ccnnKK%2BJiXVUtF6S9AmUUZAQ9dh5UO%2BO4ZMHgzht9sqR%2BekpmzFBPof4%2BGgbMzhO4dJ3EtHiXxe2ynf8b%2BcWxp%2BoKwFzLrLk1vNOxm88gH53RUf4K0k%2BnE0HZI0az1WTaeDafuSOWo2%2BO2rPacgBchrU1Ppb771y50YySKMpecQJhWNvBDk0igdWu4RNBS3wfsUmRII%2BfmgfGw2wTDX%2F1QYSZI%2FjKilAdhpjuZ%2B6XqoZL3dIHxkL%2Fs4ChjgG6g0XHOR11KNtC72AQKiyJMPTH0ckGOqUBIQ3X0c93p8XGoTWOmahvoAttdRoyt%2B0xZ8%2F4vZLkhaCZ29sY0XkxsrOuBPZc%2FKFCMvETshTmxDEdFvuX2Cj0xzOY0BQ5V0mzZeVs8lGyDZkJXmh6Xnzmv8mjwj72PfardAB6kBlXBU0lt8dyTI4iTVI%2B6Ii7OHePU%2BHX1bhAtXdkLSCRDd3cIyokjhUf4Tl2do1dwudmvQZQF7A%2Fh7RD5JLsvWZv&X-Amz-Signature=f7ae5ca6c97929f8a6ea0da101404b08a1b4a0cbd57356a1a6bfe1c01858952d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
