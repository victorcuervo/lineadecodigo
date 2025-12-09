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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BIKIEM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuz8eNmlEzAtKHRXEgeLJQv3MooDMrdiTiEFEkH1hS7AiEAnsl1m0lFaaXX2kSi2E6zvm9n06I5xqDadnQz8dg8y%2BcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETH2WwulKDLSh3PnSrcA0Maq1Fl65fUKHJLiUEPFVA7wbbJONmhA7p8qBS7plsSmD6PYWyq8gFi%2BRXoYZP5CwPXzxtPkYA5DrVYwx%2BQYcYwPALLzDE3xnuRDULXwYmbBvzm%2BJyZhcpyMvjkwMwKXDCXP40l649f2SoiE34OuDfTlkmDYHCetbno9L6%2BXMZOcrVcJbHerjK0yTqCA0zee%2BJiWF8hB%2FrQesrXmnnk%2Fltgpwpk0h9G28wBncjLwAbYDtN4qR1Li9Pexp5WnLkGc2N1jAVKYZk3j4NfzUDdsU4YHkCH8U%2BCvdD64y1i%2BOEU46fY6Pk0pqmPu6MzIOBOomgvEFo%2Fkg3xcl3Mbs6OFRyTHjwnBOcRCkpIqiKBgSJmMhjTsk3dKTfBN%2BK8Ndo6IlKf8yMgzOghDRvqjhwWYFg40LOdb7tGpl7VYu90a%2F8vwJAB3MiodnSz22i7zwtaIOvXR1pdAG4X1rKj1omy1lSECFcWKM6%2FYwZZCWi3IpHiBYqgMldcriW6CbB52qWoyDgIFpnLPUsTzVZNepiysU9YRYRnOluxXCNxENwjuClv8O%2Byn9JM%2BmUY8dpdhCjmHsT4vKfndRKc6Dbgecwe6kDLyxymnXEHoamIDc4aDXfuTXFxYeEMIIu3J8AmMJHK3skGOqUB0KHUFLUIDN4UFSpR7jDCmHxvQwKWzyhrVHGL%2BqU3zBieMHXyqjQNqkzd6jROXnlGzxcbXjtFGANow0WNfHQOV05IuUcLbSWxtpcoUGQBJMMYpfeltnO8AI3kGDX2YR4w1%2FdX%2FAC6qj23En4AbkkVkWuQE67VK6ZNOh%2B4zVsZZ%2BmQFTlupDhMMTdl9C3I8IYEbHkthehib6icpj5OqaN27oOLNTE6&X-Amz-Signature=dd51e067506e672f2ae7619bbd31ba2e240bc43e5d89a1d0b5d67127117cc337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BIKIEM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuz8eNmlEzAtKHRXEgeLJQv3MooDMrdiTiEFEkH1hS7AiEAnsl1m0lFaaXX2kSi2E6zvm9n06I5xqDadnQz8dg8y%2BcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETH2WwulKDLSh3PnSrcA0Maq1Fl65fUKHJLiUEPFVA7wbbJONmhA7p8qBS7plsSmD6PYWyq8gFi%2BRXoYZP5CwPXzxtPkYA5DrVYwx%2BQYcYwPALLzDE3xnuRDULXwYmbBvzm%2BJyZhcpyMvjkwMwKXDCXP40l649f2SoiE34OuDfTlkmDYHCetbno9L6%2BXMZOcrVcJbHerjK0yTqCA0zee%2BJiWF8hB%2FrQesrXmnnk%2Fltgpwpk0h9G28wBncjLwAbYDtN4qR1Li9Pexp5WnLkGc2N1jAVKYZk3j4NfzUDdsU4YHkCH8U%2BCvdD64y1i%2BOEU46fY6Pk0pqmPu6MzIOBOomgvEFo%2Fkg3xcl3Mbs6OFRyTHjwnBOcRCkpIqiKBgSJmMhjTsk3dKTfBN%2BK8Ndo6IlKf8yMgzOghDRvqjhwWYFg40LOdb7tGpl7VYu90a%2F8vwJAB3MiodnSz22i7zwtaIOvXR1pdAG4X1rKj1omy1lSECFcWKM6%2FYwZZCWi3IpHiBYqgMldcriW6CbB52qWoyDgIFpnLPUsTzVZNepiysU9YRYRnOluxXCNxENwjuClv8O%2Byn9JM%2BmUY8dpdhCjmHsT4vKfndRKc6Dbgecwe6kDLyxymnXEHoamIDc4aDXfuTXFxYeEMIIu3J8AmMJHK3skGOqUB0KHUFLUIDN4UFSpR7jDCmHxvQwKWzyhrVHGL%2BqU3zBieMHXyqjQNqkzd6jROXnlGzxcbXjtFGANow0WNfHQOV05IuUcLbSWxtpcoUGQBJMMYpfeltnO8AI3kGDX2YR4w1%2FdX%2FAC6qj23En4AbkkVkWuQE67VK6ZNOh%2B4zVsZZ%2BmQFTlupDhMMTdl9C3I8IYEbHkthehib6icpj5OqaN27oOLNTE6&X-Amz-Signature=70fb87f2879ce26d7d340322832403b92ce0f6bc4da83d882d47b3ea20ef855b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
