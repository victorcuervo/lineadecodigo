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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDA5632%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpHWAyIu%2BPjQ3L3sBQtznLYz1iG%2BQ4Suxqv4QBog7O5AiEAsbqRQeqpl%2FUEjFwbebbl1O6fuH3SlagpsXTa9ftNpuwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BXM%2Frvp6xo5OrRcircA3ZeOeBTBtTiZ2xDHRbuWXDBOP8azxCKxgRNI1IbLuPfSCmH6%2Fh%2FN8QzWfblEVrRc1TRThYX2FOch88VpXIN6espDDQLZ%2FnjKayrqWBb4KbGjvFE5iRMSBuXQ2a8Xk666mFu0S%2FhlxgoGThyQUNotZ%2FSzJOEHnR4ZkDHcDVb%2Btd5TLQpGmyY060f0Zez1Rs%2Fds8f%2F5wa6Gsf87DrGeZsUChn17jq2%2BB9eJvzcogZia8Cr9cWgXSeIK3ex2fM70yAFJUOo13sJfWpCxnnEJZVrirp7JscxMAk5RCjIm3qZ20%2FLFMkC0MRDzlCkRbx4spLc7pNkrp30QsdxC08XaITmwTOJVyoL47v%2FX2n0oLcJ9aQ3SaEgVAYZWYWS0%2ByJAmRrIJ45HfWtvSpfjKrVLnhlULfoBwJvE09tT9KqI29q8s5rPxMheXPjkhfQW4aX2XziR%2BQUL7K9KesNnG18ps9ZZl5r18AQX7CO2WLSnwpGc94LZ%2BGcGoC7w%2FEJOj%2FYro9Doz0TIId04dHV47bSH6B1vyGNx4BLgS6WexMOfhl0JABUmL44izOa%2BE%2FWjWW4OqkxIlrekAY9zN0tC1Eii7XNMkgYeTTymcmhhP3VbQq6YQNHvB5Fa0rKoehlVwWMJ7H18kGOqUBfsCoNEPZx2yGsqOJTkw%2BMY%2FxzLlbQY2sYL%2F%2Br7Jq2VPpM2GHPvKZfCsJy%2BBgJnbiD2tUFDCFHAlcW2rKwBUhSachupqDpjdAcDxFHomiSHlntFyZjyaqArAc1CtCIj3PK%2Bx%2Fj13YXDlm50vFCY%2BfkAknoU6Sx2ZbcUHghhOWU3ECQpVKEHtGEdgXboc2X84rhwrg2dm2O1cBvLdKo3bHmKsMNZtt&X-Amz-Signature=3fa78b4c5ac8781f227ff5184966fa1d45aa3e158e2348481af14e6458de6e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDA5632%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpHWAyIu%2BPjQ3L3sBQtznLYz1iG%2BQ4Suxqv4QBog7O5AiEAsbqRQeqpl%2FUEjFwbebbl1O6fuH3SlagpsXTa9ftNpuwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BXM%2Frvp6xo5OrRcircA3ZeOeBTBtTiZ2xDHRbuWXDBOP8azxCKxgRNI1IbLuPfSCmH6%2Fh%2FN8QzWfblEVrRc1TRThYX2FOch88VpXIN6espDDQLZ%2FnjKayrqWBb4KbGjvFE5iRMSBuXQ2a8Xk666mFu0S%2FhlxgoGThyQUNotZ%2FSzJOEHnR4ZkDHcDVb%2Btd5TLQpGmyY060f0Zez1Rs%2Fds8f%2F5wa6Gsf87DrGeZsUChn17jq2%2BB9eJvzcogZia8Cr9cWgXSeIK3ex2fM70yAFJUOo13sJfWpCxnnEJZVrirp7JscxMAk5RCjIm3qZ20%2FLFMkC0MRDzlCkRbx4spLc7pNkrp30QsdxC08XaITmwTOJVyoL47v%2FX2n0oLcJ9aQ3SaEgVAYZWYWS0%2ByJAmRrIJ45HfWtvSpfjKrVLnhlULfoBwJvE09tT9KqI29q8s5rPxMheXPjkhfQW4aX2XziR%2BQUL7K9KesNnG18ps9ZZl5r18AQX7CO2WLSnwpGc94LZ%2BGcGoC7w%2FEJOj%2FYro9Doz0TIId04dHV47bSH6B1vyGNx4BLgS6WexMOfhl0JABUmL44izOa%2BE%2FWjWW4OqkxIlrekAY9zN0tC1Eii7XNMkgYeTTymcmhhP3VbQq6YQNHvB5Fa0rKoehlVwWMJ7H18kGOqUBfsCoNEPZx2yGsqOJTkw%2BMY%2FxzLlbQY2sYL%2F%2Br7Jq2VPpM2GHPvKZfCsJy%2BBgJnbiD2tUFDCFHAlcW2rKwBUhSachupqDpjdAcDxFHomiSHlntFyZjyaqArAc1CtCIj3PK%2Bx%2Fj13YXDlm50vFCY%2BfkAknoU6Sx2ZbcUHghhOWU3ECQpVKEHtGEdgXboc2X84rhwrg2dm2O1cBvLdKo3bHmKsMNZtt&X-Amz-Signature=c2123f80d80903b012dfb02e46abe9a9a6dacaa16fcbea52f12e1b28487c7385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
