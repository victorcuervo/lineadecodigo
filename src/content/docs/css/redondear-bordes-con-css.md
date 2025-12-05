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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LN2A6V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK5lRN26DWOtUEt%2FGB%2BcdTieIuRc4xHwrjw1JfYsLYnAiEAuJTc%2BSt6oPPiSn4x73knl0iZHyq9UMB%2B2VSnfUyj%2FCYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNR%2BhV6Vsd%2FqLRAGhSrcAzFlg6bR%2Fkao5QUZOAdKwKCAvEmLqGf3cj5usWSJBzb%2FPlfyRSO4BPDj1nUfYmkU2N%2B8QsMdr0hdlwpmgv5NFuiHw3SgwEiNX6dTWn35zjipO%2BRAYeixCFqBk5k28niK%2BwZ9QDgJWN6ZFAYl0xC4KfJ3eJa1V7ZMlfZpMUE8N1evoXdzV2O12zKabj4LJ2Vx%2BxCdGVD0ggSVg8hulHDYcN7pAFlqBmiSf8aeae%2B6W4TV1jtGtCUlg6Wj3rCZeWs5Yv%2BOokCBr3gKymgUXQrVoJGo%2BV6Tw9a8HgKiievhZyWqjmPf6Szda0mpqrbzOD%2BCj4KamSrfcBQp%2FioUkybfmrwR%2FDfQvJqFKi4WKVC11MAGWta01XkxgLLrs%2BegP3NoODbuRxAA%2BajPoqVfKgTr466DAcMxDWOE9STkLPIMyeL12yJoydK0batf5%2FFQ4v1q7U%2F3bHxKAYR%2F6cEwSnn4ZK%2FufIhzFAu9Am8vO6xz4up1gB3EG3tuKbEARyndq1%2BXNEImpBW%2B%2BNFJEoW9pyeL9z6EWM4VqrPEYqajYSM1Kq%2F2qHFdF%2F2yWFvzZowNgzgjvQjMAihCuzd3FI08Fy95C64lDJjnuzGoyqBUdYUxIxtmHzEQzbe4nsm7EP42MP6MyMkGOqUBAM%2B9nd2DXD2pw2QTWm05aOb%2Fn9HtIN%2BF4i%2FcUbqfntGNzpm%2FFpxCGrlzQdH%2B8lY2qFGX3STXyEQXGNPEmITpiv0nuYBlRDDnM9AOxTnCWd7MK%2FSR8xH%2FAM0WuCv6zBINgTCE9KE%2BKW5cyGJcmfJdbS0Zv%2F4eLYdgF7Q7br8wjPk7IiNghNaABrlHNJHc33k7bDCP7llni5z1w3lCMVaxhgMyy1mO&X-Amz-Signature=c1e6fee8af7edfd962224336df449ca2ff1cbb3caf56cdf399b46d621fdde3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LN2A6V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK5lRN26DWOtUEt%2FGB%2BcdTieIuRc4xHwrjw1JfYsLYnAiEAuJTc%2BSt6oPPiSn4x73knl0iZHyq9UMB%2B2VSnfUyj%2FCYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNR%2BhV6Vsd%2FqLRAGhSrcAzFlg6bR%2Fkao5QUZOAdKwKCAvEmLqGf3cj5usWSJBzb%2FPlfyRSO4BPDj1nUfYmkU2N%2B8QsMdr0hdlwpmgv5NFuiHw3SgwEiNX6dTWn35zjipO%2BRAYeixCFqBk5k28niK%2BwZ9QDgJWN6ZFAYl0xC4KfJ3eJa1V7ZMlfZpMUE8N1evoXdzV2O12zKabj4LJ2Vx%2BxCdGVD0ggSVg8hulHDYcN7pAFlqBmiSf8aeae%2B6W4TV1jtGtCUlg6Wj3rCZeWs5Yv%2BOokCBr3gKymgUXQrVoJGo%2BV6Tw9a8HgKiievhZyWqjmPf6Szda0mpqrbzOD%2BCj4KamSrfcBQp%2FioUkybfmrwR%2FDfQvJqFKi4WKVC11MAGWta01XkxgLLrs%2BegP3NoODbuRxAA%2BajPoqVfKgTr466DAcMxDWOE9STkLPIMyeL12yJoydK0batf5%2FFQ4v1q7U%2F3bHxKAYR%2F6cEwSnn4ZK%2FufIhzFAu9Am8vO6xz4up1gB3EG3tuKbEARyndq1%2BXNEImpBW%2B%2BNFJEoW9pyeL9z6EWM4VqrPEYqajYSM1Kq%2F2qHFdF%2F2yWFvzZowNgzgjvQjMAihCuzd3FI08Fy95C64lDJjnuzGoyqBUdYUxIxtmHzEQzbe4nsm7EP42MP6MyMkGOqUBAM%2B9nd2DXD2pw2QTWm05aOb%2Fn9HtIN%2BF4i%2FcUbqfntGNzpm%2FFpxCGrlzQdH%2B8lY2qFGX3STXyEQXGNPEmITpiv0nuYBlRDDnM9AOxTnCWd7MK%2FSR8xH%2FAM0WuCv6zBINgTCE9KE%2BKW5cyGJcmfJdbS0Zv%2F4eLYdgF7Q7br8wjPk7IiNghNaABrlHNJHc33k7bDCP7llni5z1w3lCMVaxhgMyy1mO&X-Amz-Signature=1ae8c9acc6f4b6d39ef2c7c787c66b426d3a262e63b9829e549ee19da7df133a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
