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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DKEI4H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEs77p9z5pyDa0%2BbbnwtX4WQsPv3tazSp6LKKq5%2FOBtgAiEA6UXBOxOsOUAWQiVhc4%2FbkENaN1RXb9yNGuYrGnJ8RXIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEBdpF99nhLDkuJLyrcA9NwcG7%2BoJ09om%2FOGeVxv6KXXUi3pZxYJqGqaImo8gVC0cVEGZxA7gA08mKsDzgexXPR%2BYjViuZdjaxYbQ36IL9tspSqLjr%2Bj4DZV37qyOBAdbipIB6Yv91rs3acXKJkFESUgLbcvzW4CNKon2ctUEgxi6QGi2z4VPrRXLASFrd5igaEGtrJ8Sgj47zAzZVC7l5%2BDdfXN5Jj%2FtEnmXuua31TBN25xoaI2XUv3fN%2BHmElJTd1VHjDpTg0krmIKM36GpqlzAJv6B1BB3xdK%2BEJ629pqj5lgoGZ5TE%2FbG08f34f683g%2BboH44sAQN2CO%2FNt10pwdrpmgAXiyHiAcNOJlOqYocGCZUDtU2MfV%2BVWhkKLg7p6fIhLhBi9xFtgHaB%2BK971HvTaZH6Qt6VxKjMuJPTnnUoNBnyHvyZMj5I2s4DzLdLIkAlYDaQGopC1nurSPT3RqqpY0F6zYpl%2Fzz%2F82str%2FQtLn4ERVY4iFga1WC4H2TcBp7AStIkypIjxD42NAbpyD9LsZdfOAZHHuycrdveNKZlumluKoIHgLDhlE2Mx%2BXY3owxRkPIcaOjc6oVIaUsOuhJXE55c3EmnASp%2BC%2B5zwcXoOf%2Bs4I%2FMUkIghgj9XbljlcKc34g5GbS0MLqKjMoGOqUBjP3wifisI9V377imYKs2r3N2OLHaxxuoXD4aWs3Y2RFzzpeql6rKB6EDglketdmrvqRMq4aZ8b5y8rxXb8%2FjPHktSLzbLLRL6o2DKGj4AVo%2FNxMxkQlZYBGZWdNvVn0RzF9fCbLBI8W%2Fqe02U%2F85cERYKNh6ns9SWQwzsYvfOGt3ltYKP9x0ll4rEWAe68aeckmbpAc7SKSTWgNsHdWYlU0dm9Gb&X-Amz-Signature=600fec27ad2e79b0b58d11d0b6b910d3e7b223db3fe80f4c7dcc5632fef66fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DKEI4H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEs77p9z5pyDa0%2BbbnwtX4WQsPv3tazSp6LKKq5%2FOBtgAiEA6UXBOxOsOUAWQiVhc4%2FbkENaN1RXb9yNGuYrGnJ8RXIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEBdpF99nhLDkuJLyrcA9NwcG7%2BoJ09om%2FOGeVxv6KXXUi3pZxYJqGqaImo8gVC0cVEGZxA7gA08mKsDzgexXPR%2BYjViuZdjaxYbQ36IL9tspSqLjr%2Bj4DZV37qyOBAdbipIB6Yv91rs3acXKJkFESUgLbcvzW4CNKon2ctUEgxi6QGi2z4VPrRXLASFrd5igaEGtrJ8Sgj47zAzZVC7l5%2BDdfXN5Jj%2FtEnmXuua31TBN25xoaI2XUv3fN%2BHmElJTd1VHjDpTg0krmIKM36GpqlzAJv6B1BB3xdK%2BEJ629pqj5lgoGZ5TE%2FbG08f34f683g%2BboH44sAQN2CO%2FNt10pwdrpmgAXiyHiAcNOJlOqYocGCZUDtU2MfV%2BVWhkKLg7p6fIhLhBi9xFtgHaB%2BK971HvTaZH6Qt6VxKjMuJPTnnUoNBnyHvyZMj5I2s4DzLdLIkAlYDaQGopC1nurSPT3RqqpY0F6zYpl%2Fzz%2F82str%2FQtLn4ERVY4iFga1WC4H2TcBp7AStIkypIjxD42NAbpyD9LsZdfOAZHHuycrdveNKZlumluKoIHgLDhlE2Mx%2BXY3owxRkPIcaOjc6oVIaUsOuhJXE55c3EmnASp%2BC%2B5zwcXoOf%2Bs4I%2FMUkIghgj9XbljlcKc34g5GbS0MLqKjMoGOqUBjP3wifisI9V377imYKs2r3N2OLHaxxuoXD4aWs3Y2RFzzpeql6rKB6EDglketdmrvqRMq4aZ8b5y8rxXb8%2FjPHktSLzbLLRL6o2DKGj4AVo%2FNxMxkQlZYBGZWdNvVn0RzF9fCbLBI8W%2Fqe02U%2F85cERYKNh6ns9SWQwzsYvfOGt3ltYKP9x0ll4rEWAe68aeckmbpAc7SKSTWgNsHdWYlU0dm9Gb&X-Amz-Signature=0f8a6ef39e31712968c06dd1df9a92c1eba974d5983f2aa931f6180ef7c9fe16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
