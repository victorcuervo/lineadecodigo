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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNA72PN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FWeClO1bntocET%2BuUx%2BEMOplqk9j7w1UY3%2FI%2BGXUupAiAVH6%2BdJ9nZDi6F%2BOG%2FeNjkH4qusLwTVAGf%2BEpegLyPxCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0XLc0XZTtMlh3aZFKtwD%2BIjzGIMucyRymN48whduj5zXtH%2B9uOfJwHrQI37pHSf4%2FFrp5dFcZpFxv01rBlH%2F0PLNvVvI617hQkNN2PJ4xduMe9RiEJ5tt%2FJ3ihkxX2erFisZe%2BA6tRhREjloZLz3usR3KiTTNW9n0r2rODChjfJ%2BMH5U9JENVpHPRum2sElMVsPJD4dDnlvb3mfuq00hwYJ8aauSg2o17YS%2Bh8UI%2B3LPtmbQr6YghiYLxyaTTQWYw3PCqDAuBJyiGRhrMgeFGzbcs9WWUTRCuv9Vknuav%2Fs7efEM5Mqckn0QPZepHJJxsScYjfKl6qPP6BQ5vsZlQ20uDaI5M5ARUltdkhj0b4vet94qR8OlCwprp7oyMbEY8IAOFteMsggNoHZUuJujRKJ6GOHijmN64tx1coj6N4rSKDeNQuU5uzNZ%2BV2RNXr62idYoIGR1GOFkUEOtKNRj721o7zb9JXLhiaQrZGtRvvIHDJQ5ArLWzcY28OX%2FGVmzu7La1UGHmRXwP8C1%2BhmegU%2FW%2BfJAe1Tpcc0r%2Fe1dMAAzO2u6LJtmLBXdye8oOEsqEcSN1DCOQFQ%2BoSVdTQSjVazuHXAcNDADfRhEkPShAkzMOFCkPBPhIFvR10ZDA2L8Z151wct4S3cYY8w1qbQyQY6pgE2lnsaKjYVdIKElBeXxJ5FJoVVjFJzWF%2FAem9CenkR6%2B5CgytnSRbMCmezs31c3rJFzAG%2FxjmeCaW9A2azsUnpPAGyNd0jZmI0%2Fidl4Jke5b9Wk73uvbXvnCkHLK5ZEoxCPDPjQ6wqMnKJqSZwQ97nxtOLijLbG43BoJxBvJ0asWERCP0c5BS%2BMnmopaAA0M21hfjA5qyaTzB7%2B89eMHTESDYUVUqD&X-Amz-Signature=286c1756e8113d22a3cd0629b49813543dc228fafdfac3c79b8d8e6787c53925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNA72PN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FWeClO1bntocET%2BuUx%2BEMOplqk9j7w1UY3%2FI%2BGXUupAiAVH6%2BdJ9nZDi6F%2BOG%2FeNjkH4qusLwTVAGf%2BEpegLyPxCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0XLc0XZTtMlh3aZFKtwD%2BIjzGIMucyRymN48whduj5zXtH%2B9uOfJwHrQI37pHSf4%2FFrp5dFcZpFxv01rBlH%2F0PLNvVvI617hQkNN2PJ4xduMe9RiEJ5tt%2FJ3ihkxX2erFisZe%2BA6tRhREjloZLz3usR3KiTTNW9n0r2rODChjfJ%2BMH5U9JENVpHPRum2sElMVsPJD4dDnlvb3mfuq00hwYJ8aauSg2o17YS%2Bh8UI%2B3LPtmbQr6YghiYLxyaTTQWYw3PCqDAuBJyiGRhrMgeFGzbcs9WWUTRCuv9Vknuav%2Fs7efEM5Mqckn0QPZepHJJxsScYjfKl6qPP6BQ5vsZlQ20uDaI5M5ARUltdkhj0b4vet94qR8OlCwprp7oyMbEY8IAOFteMsggNoHZUuJujRKJ6GOHijmN64tx1coj6N4rSKDeNQuU5uzNZ%2BV2RNXr62idYoIGR1GOFkUEOtKNRj721o7zb9JXLhiaQrZGtRvvIHDJQ5ArLWzcY28OX%2FGVmzu7La1UGHmRXwP8C1%2BhmegU%2FW%2BfJAe1Tpcc0r%2Fe1dMAAzO2u6LJtmLBXdye8oOEsqEcSN1DCOQFQ%2BoSVdTQSjVazuHXAcNDADfRhEkPShAkzMOFCkPBPhIFvR10ZDA2L8Z151wct4S3cYY8w1qbQyQY6pgE2lnsaKjYVdIKElBeXxJ5FJoVVjFJzWF%2FAem9CenkR6%2B5CgytnSRbMCmezs31c3rJFzAG%2FxjmeCaW9A2azsUnpPAGyNd0jZmI0%2Fidl4Jke5b9Wk73uvbXvnCkHLK5ZEoxCPDPjQ6wqMnKJqSZwQ97nxtOLijLbG43BoJxBvJ0asWERCP0c5BS%2BMnmopaAA0M21hfjA5qyaTzB7%2B89eMHTESDYUVUqD&X-Amz-Signature=38c6e155265c51c70c8fe5bdb315223d0c19d3239d57983befb293a5efda3986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
