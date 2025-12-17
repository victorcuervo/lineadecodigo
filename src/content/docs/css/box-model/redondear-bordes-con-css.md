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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIIJKWH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfBYCmvDLUBe7R%2BF6802BuyO7oBCMrl9g%2BMS5zWKL2vAiA7DjKALi06PbSzkkoHW2ZD7SJES2AP2UuHKCxVGyzfOSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMVYUzwqs4yvIsnKuSKtwDZ2QPeKO%2FfFrMj8tAbioV1jAHjBVcy5j2vL%2Fp0Ggr%2FBVTbVLceDgxkYOXqP9BG10tK%2FM9Al8XSZFcT21oAP4H8HiikawVwwPgkSMkWbCzeWSbs1WGbYVcTtQlJo5%2BqPELc7c9qu2FVQFi1SG6aI2Cihd22yo8Umzhk0ly7a1sXPtPaV9BUjzl%2Bma2jtI3qiVeCTDHCZlbv%2Fs1lChBI1b8yVTAe49EgXrBxyRRm1uJRUJq631xptO9M0MNmkvEq6oXb4tao29j5TGRTi%2FswhNc3CktdaeeNJZ13Y9wjdLCMGCXUFr7GdsWsjIY65Ph8rtMk6hyrPfK54yQi3ojYQ3MtgESXOHPZC6ZNR053BiShfTmV5gtRIqJDoKR7INId2l0NqHz%2FI2MhHmvzzcW51q4ECareNy%2Fj2D8Bhh5fi8yHX%2FFzPy0iDP1LRLoaiZslPoESDjkiPEr2Vorb%2Fv8UDjRYzjSRuF5xMj8c0AmD2uHyMRAvDrU%2FYddxfizI7iFl3ADIfkj3d7GM1y%2Fa7Youm1OHu6vYWZ%2Fe9LRCwQs1yhNy3dBkmiavnatsk7MQYeuuLNsu4uAvqHwZ3h%2FOoPaok5bjhf78pFwAA8xXuA%2FAz21VztDmiY2X%2BPohmZ4wIMw6KqKygY6pgEP4nh0LO1iqUxdyUYVBzEAOuY3dFm3E76yNixj9YknMWImgbmgHhSvwE3uBK5OKoUMIPWsyMEEM%2FWMjyb3GqXahqqwDj0X%2BZ2w6%2BageyfMz86fXIIufFFx9wZGjvE1%2BtUof5dhej6fwpyRFuAjSS6Qq0k9Nhg0mWUtQu8yWO6VwUQ3Qnic%2BPI09vPfuor9FtvlPf%2FJvaeGF%2BwovGd0cB%2BFxOE4pJyG&X-Amz-Signature=45a895afbd138586e018b6e5dcd5e67786eb8e38630c112343206e718112e318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIIJKWH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfBYCmvDLUBe7R%2BF6802BuyO7oBCMrl9g%2BMS5zWKL2vAiA7DjKALi06PbSzkkoHW2ZD7SJES2AP2UuHKCxVGyzfOSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMVYUzwqs4yvIsnKuSKtwDZ2QPeKO%2FfFrMj8tAbioV1jAHjBVcy5j2vL%2Fp0Ggr%2FBVTbVLceDgxkYOXqP9BG10tK%2FM9Al8XSZFcT21oAP4H8HiikawVwwPgkSMkWbCzeWSbs1WGbYVcTtQlJo5%2BqPELc7c9qu2FVQFi1SG6aI2Cihd22yo8Umzhk0ly7a1sXPtPaV9BUjzl%2Bma2jtI3qiVeCTDHCZlbv%2Fs1lChBI1b8yVTAe49EgXrBxyRRm1uJRUJq631xptO9M0MNmkvEq6oXb4tao29j5TGRTi%2FswhNc3CktdaeeNJZ13Y9wjdLCMGCXUFr7GdsWsjIY65Ph8rtMk6hyrPfK54yQi3ojYQ3MtgESXOHPZC6ZNR053BiShfTmV5gtRIqJDoKR7INId2l0NqHz%2FI2MhHmvzzcW51q4ECareNy%2Fj2D8Bhh5fi8yHX%2FFzPy0iDP1LRLoaiZslPoESDjkiPEr2Vorb%2Fv8UDjRYzjSRuF5xMj8c0AmD2uHyMRAvDrU%2FYddxfizI7iFl3ADIfkj3d7GM1y%2Fa7Youm1OHu6vYWZ%2Fe9LRCwQs1yhNy3dBkmiavnatsk7MQYeuuLNsu4uAvqHwZ3h%2FOoPaok5bjhf78pFwAA8xXuA%2FAz21VztDmiY2X%2BPohmZ4wIMw6KqKygY6pgEP4nh0LO1iqUxdyUYVBzEAOuY3dFm3E76yNixj9YknMWImgbmgHhSvwE3uBK5OKoUMIPWsyMEEM%2FWMjyb3GqXahqqwDj0X%2BZ2w6%2BageyfMz86fXIIufFFx9wZGjvE1%2BtUof5dhej6fwpyRFuAjSS6Qq0k9Nhg0mWUtQu8yWO6VwUQ3Qnic%2BPI09vPfuor9FtvlPf%2FJvaeGF%2BwovGd0cB%2BFxOE4pJyG&X-Amz-Signature=989f60e0ed534c2fdb614d22c5885e13bd3ed849832f80bb03cf5037a8af2a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
