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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TTBMH7J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FaX8TMx6m168vw00JBGROwBUyxxcDyuXQKFqupagB9gIgAu7JlRRDzc%2FBGd91YrXZmiwikUYsIqUnO8BVCWLPgYcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo9hi9kHCdlDeI%2BCyrcA%2BKmasjGzPKOcl6sDf93W0Z2%2BMuGL0t5AgsfrH2bJTNnHHB5FtuosfssR%2BuvgUspXNJJVRzBq7nWWTpHHtTQsoqbNCFVTFCdR5HoqPvX3%2BIqznRumL95%2FXid5W0LxQ7BV4vzD%2B4DOJRszEc7gksqiLBBamw0bzAWrCu%2FCPEBAFWR1El2mpK8IxrkEntAeiLyHiSUoQnVxy3WG4h4CZAcJ0Tn7Irk1a7Pb8nLnXbAZAIK8rXjkQslUkSEfytj1Op7UgeeNVBjSsi%2Fdgw4aLC9Mtc8gfs52P48Fn1xowK4sdsvmwGs0wPzkgN4WOrD4EytlZYBVryYl9dMpT0%2F3I5xMM4PTw%2FVbnXbMNCQOAOs9gU568kdpg5k4wVNk%2F7mFeMMvaXLSRtKvm%2BKG5s8f%2Bb8giH%2B6JxSuvDnHfK3HKpstI2qcxdECr5tDJ3gRToh0NvEvTpj42L0Ch80Mw%2BtgpL4VMsDrDARMYPcapRHvpJ06Myj52KheOQScqWkeNHi8JjnNcQ5bIhg4S6MHM7Rm0YkcvviQ8nmENgNAO4I36HLQBVcBg3Yu0EdxnmiTCdy%2FtMbVn8wewezaRh%2FGMSlS8%2Fm1a3Bz4syj1cpWPw6%2BRhHTl8VI1a5P5vHWUqy%2FxD3MJ3R2MkGOqUBKBiy7abORTRi5RlmTJial99ozWLfuhBJpB%2FPaw9qt5iPxAgJOaXZgUiNOw7RkjCcSzdRQ7Xp2tuBDiCxrqmk%2B2rEPwCTTzUp%2B67pxcQ6TBAL8MGlWOQ%2F3b1gDuo%2BGI6SdVU7TCLsoRnzwEVkxxmjct3IhBmHM40aMqB72MxSsF%2Fntw54ouOoaCyy%2BBDO5cueRUVFbsYqNng1nJ5RUg7LwH%2FNlJqr&X-Amz-Signature=076a99f79145981618a17e2a72cd842b3d21c5949ba29cf194b67ac7eafd0df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TTBMH7J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FaX8TMx6m168vw00JBGROwBUyxxcDyuXQKFqupagB9gIgAu7JlRRDzc%2FBGd91YrXZmiwikUYsIqUnO8BVCWLPgYcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo9hi9kHCdlDeI%2BCyrcA%2BKmasjGzPKOcl6sDf93W0Z2%2BMuGL0t5AgsfrH2bJTNnHHB5FtuosfssR%2BuvgUspXNJJVRzBq7nWWTpHHtTQsoqbNCFVTFCdR5HoqPvX3%2BIqznRumL95%2FXid5W0LxQ7BV4vzD%2B4DOJRszEc7gksqiLBBamw0bzAWrCu%2FCPEBAFWR1El2mpK8IxrkEntAeiLyHiSUoQnVxy3WG4h4CZAcJ0Tn7Irk1a7Pb8nLnXbAZAIK8rXjkQslUkSEfytj1Op7UgeeNVBjSsi%2Fdgw4aLC9Mtc8gfs52P48Fn1xowK4sdsvmwGs0wPzkgN4WOrD4EytlZYBVryYl9dMpT0%2F3I5xMM4PTw%2FVbnXbMNCQOAOs9gU568kdpg5k4wVNk%2F7mFeMMvaXLSRtKvm%2BKG5s8f%2Bb8giH%2B6JxSuvDnHfK3HKpstI2qcxdECr5tDJ3gRToh0NvEvTpj42L0Ch80Mw%2BtgpL4VMsDrDARMYPcapRHvpJ06Myj52KheOQScqWkeNHi8JjnNcQ5bIhg4S6MHM7Rm0YkcvviQ8nmENgNAO4I36HLQBVcBg3Yu0EdxnmiTCdy%2FtMbVn8wewezaRh%2FGMSlS8%2Fm1a3Bz4syj1cpWPw6%2BRhHTl8VI1a5P5vHWUqy%2FxD3MJ3R2MkGOqUBKBiy7abORTRi5RlmTJial99ozWLfuhBJpB%2FPaw9qt5iPxAgJOaXZgUiNOw7RkjCcSzdRQ7Xp2tuBDiCxrqmk%2B2rEPwCTTzUp%2B67pxcQ6TBAL8MGlWOQ%2F3b1gDuo%2BGI6SdVU7TCLsoRnzwEVkxxmjct3IhBmHM40aMqB72MxSsF%2Fntw54ouOoaCyy%2BBDO5cueRUVFbsYqNng1nJ5RUg7LwH%2FNlJqr&X-Amz-Signature=92c19dc69e21db0fb80bd238e411b1d1627ba79149c6e35861d057cf67dda5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
