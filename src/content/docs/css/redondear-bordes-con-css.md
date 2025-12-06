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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV3QQ5VL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2njgAff%2B9ZJ29OD6EpfcpYSWl6opvwmo5gNZnv84osAiEA%2BpDfOSKQxaq86CxLBWmI4Kr40KlZoSs8smjuJTW3DwUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPuu6M0YMJ5qJVxyiCrcA6YGtY3Pdwk0wXmsxLVU2uyw5A6ZtIV08Rk6Avqst1I6wCq%2Fo%2F%2FAf05rqlc6XjHYkcrn2eD97EUq0p17YGv3LOwB3gtxYNsY%2BIfFh%2BCzLak52fwCr7buQNcPvi%2BWnXe0xpis3veCfp4JRUCUpb9QsRYRV%2FMdqcA%2FOqq6sSk5zIexUmcw1wwbdh4kCsDEppbXHAA98tQ2R8dXa94YPQOWpUGluh%2Bugd3%2BiBZJZLZ%2BzB9cvfySxFkX2HJ9pWM3ipqXI6RiYYieGm7cgGPbpisfSRrs1iIF%2FlnIYjhCeCuWDkTXtxotWDE1%2BVuAMeaMVmelsycwXWqa%2BYbc%2BL60OuuaX1f547XPqnwZfjz7yZxeq0sFAmeGFkrO0y3R5tz9B%2BayLWD%2Bn0zBLbuVhDAdGFDbESXmgCMbrNUVCyuyfhxU6n7ZdWBpQ8NVN5hmaSqLAOXrJsVe17oBvdc40MycoKp2Jlhr6ygq%2BpgnzCa5Z8PlNiQ59SJEINK5n3aYYfakI6%2B6TWx%2BuGmp3PlgjNfMpW45BVR8LpmaDXP%2FYJv7OGGwVyxIdk5%2FoCUesTR18fjoJNAaL0xqxwdiIiifluwmasxqBItLXq4pxg5BLNtBPPrHUeCM0atTRyY0QVaN5TxUMLum0MkGOqUBCweGM0cluzeFlHiCCTReKbWASY3HGAJUeVAjrn49v71XFLVwRGvd3ApekFKP4dC8vvVKD2eeDwiMhtOE3jRoTesd9VZCjfrkd%2Fpdeq8%2FX%2BcVKrHaT8AU%2BoVEj4krb7%2Fwzsqcmb6CYGRtKMQOyP1ZH9mPg3tQU3RqsGXEo3642efqCQWRqusDUowwbE6HZ0bGa5OIUVBaKHTjQa1F3KUdyUK6QI9L&X-Amz-Signature=677e7d0a3e60587dd0fa1bf9f5cec35ebb2f5c5cc93876e1282d58478e10ec5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV3QQ5VL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2njgAff%2B9ZJ29OD6EpfcpYSWl6opvwmo5gNZnv84osAiEA%2BpDfOSKQxaq86CxLBWmI4Kr40KlZoSs8smjuJTW3DwUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPuu6M0YMJ5qJVxyiCrcA6YGtY3Pdwk0wXmsxLVU2uyw5A6ZtIV08Rk6Avqst1I6wCq%2Fo%2F%2FAf05rqlc6XjHYkcrn2eD97EUq0p17YGv3LOwB3gtxYNsY%2BIfFh%2BCzLak52fwCr7buQNcPvi%2BWnXe0xpis3veCfp4JRUCUpb9QsRYRV%2FMdqcA%2FOqq6sSk5zIexUmcw1wwbdh4kCsDEppbXHAA98tQ2R8dXa94YPQOWpUGluh%2Bugd3%2BiBZJZLZ%2BzB9cvfySxFkX2HJ9pWM3ipqXI6RiYYieGm7cgGPbpisfSRrs1iIF%2FlnIYjhCeCuWDkTXtxotWDE1%2BVuAMeaMVmelsycwXWqa%2BYbc%2BL60OuuaX1f547XPqnwZfjz7yZxeq0sFAmeGFkrO0y3R5tz9B%2BayLWD%2Bn0zBLbuVhDAdGFDbESXmgCMbrNUVCyuyfhxU6n7ZdWBpQ8NVN5hmaSqLAOXrJsVe17oBvdc40MycoKp2Jlhr6ygq%2BpgnzCa5Z8PlNiQ59SJEINK5n3aYYfakI6%2B6TWx%2BuGmp3PlgjNfMpW45BVR8LpmaDXP%2FYJv7OGGwVyxIdk5%2FoCUesTR18fjoJNAaL0xqxwdiIiifluwmasxqBItLXq4pxg5BLNtBPPrHUeCM0atTRyY0QVaN5TxUMLum0MkGOqUBCweGM0cluzeFlHiCCTReKbWASY3HGAJUeVAjrn49v71XFLVwRGvd3ApekFKP4dC8vvVKD2eeDwiMhtOE3jRoTesd9VZCjfrkd%2Fpdeq8%2FX%2BcVKrHaT8AU%2BoVEj4krb7%2Fwzsqcmb6CYGRtKMQOyP1ZH9mPg3tQU3RqsGXEo3642efqCQWRqusDUowwbE6HZ0bGa5OIUVBaKHTjQa1F3KUdyUK6QI9L&X-Amz-Signature=26d0c6eb6337fa9791f3947d212803eefed095cc7d97f033d0cf8beb47e8429c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
