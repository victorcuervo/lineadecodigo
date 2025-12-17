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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRI3ZAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqF6wqfOfRRu1ZSInm%2BrpqgElF8mk4jqCU%2Bfe2Rv2ARAiEA61tElcB68nE6FiNrgs%2BVxH0awLhazRCrCdno%2FtlSK5kqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsu9wPWwAPMscuhHircA3%2BILrdmUODjeSrkIFJWrNm0X6j%2BRaTjz9bu%2BHZRnu0q%2F0%2Fxo71%2BJG2CMobFH3czTgDsw5ev7WHgxTvRwH8Sv%2BsTg%2FQ%2FxIgxdzQ2JP4x2%2BDOBenO86PfcAZLWq5b1lqonwr1mcyHKeVPunu4zLtGYoogTr%2BG5WDSMzoBYhwLHCPpRGw%2BSjs2s%2FnV%2Fkn%2BpROwjK3XHLiZuNq3NcAXTGVt1j4wPStVpfpCie7v8KIwuiouRAv1wuaqgkww7i2tBLSwQW7w7Q915JP63xHWCryBPMbGWX2eJMDg%2B644%2FMhnzqyjPFLX2ZfCDm4k9wGYk%2BU5XUUbVExqlsmU%2F5TvT4MHH%2BinLckaF%2FntbpuQSmfCB0dPcpn4uoHaA%2FA78TAfho%2BYgVr2%2BghdZzGT6k8rhLDROmbkdGgvGnSTwsgucW%2F5avZS3x5ox0fLq%2FdVMDhWZBg2D0CKa%2BVSinEjGGNZdQMHA%2F%2FqO5NkyIh6H7girbPy2IAPHsMfR20uRwH8Zn71xWFavIHbMkh2KqRGHyqIzBhOch3K%2FVI2xg3VeNgVxbBsCFL%2BlhLz1QLil7DX7VyKEMKcvAVe8gO%2BEDjSlYutFgUKXi%2F4gp7CiFh05NOm0ZOo6gUUEAJBzRA1vZEQr%2BeVMIuLjMoGOqUBRnVYU2vacBmoDriVRMtgTqAavDPnDs5URpDI0jrUAKoN5FOjZAoNbQkEBaeEEbnujx0byiEG0Jm%2BJniSrCRA4vMAcH1nycb3JC18vWfrBF58zJOFeLXK%2BGT75%2FSYWtoul9AtSX8qz2FsPEL0cO92g%2BI1gIM2Y6vR6V1Rz%2Bv0sdjcYdYCH%2BrpQvHX62cPjUgWddpN8NNJ18CwBpyFfmv2MWfYxU2d&X-Amz-Signature=321555900a54c0e3f8c646aa41ca3d32f846daa2fde8974ca9b52a17e8de389b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRI3ZAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqF6wqfOfRRu1ZSInm%2BrpqgElF8mk4jqCU%2Bfe2Rv2ARAiEA61tElcB68nE6FiNrgs%2BVxH0awLhazRCrCdno%2FtlSK5kqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsu9wPWwAPMscuhHircA3%2BILrdmUODjeSrkIFJWrNm0X6j%2BRaTjz9bu%2BHZRnu0q%2F0%2Fxo71%2BJG2CMobFH3czTgDsw5ev7WHgxTvRwH8Sv%2BsTg%2FQ%2FxIgxdzQ2JP4x2%2BDOBenO86PfcAZLWq5b1lqonwr1mcyHKeVPunu4zLtGYoogTr%2BG5WDSMzoBYhwLHCPpRGw%2BSjs2s%2FnV%2Fkn%2BpROwjK3XHLiZuNq3NcAXTGVt1j4wPStVpfpCie7v8KIwuiouRAv1wuaqgkww7i2tBLSwQW7w7Q915JP63xHWCryBPMbGWX2eJMDg%2B644%2FMhnzqyjPFLX2ZfCDm4k9wGYk%2BU5XUUbVExqlsmU%2F5TvT4MHH%2BinLckaF%2FntbpuQSmfCB0dPcpn4uoHaA%2FA78TAfho%2BYgVr2%2BghdZzGT6k8rhLDROmbkdGgvGnSTwsgucW%2F5avZS3x5ox0fLq%2FdVMDhWZBg2D0CKa%2BVSinEjGGNZdQMHA%2F%2FqO5NkyIh6H7girbPy2IAPHsMfR20uRwH8Zn71xWFavIHbMkh2KqRGHyqIzBhOch3K%2FVI2xg3VeNgVxbBsCFL%2BlhLz1QLil7DX7VyKEMKcvAVe8gO%2BEDjSlYutFgUKXi%2F4gp7CiFh05NOm0ZOo6gUUEAJBzRA1vZEQr%2BeVMIuLjMoGOqUBRnVYU2vacBmoDriVRMtgTqAavDPnDs5URpDI0jrUAKoN5FOjZAoNbQkEBaeEEbnujx0byiEG0Jm%2BJniSrCRA4vMAcH1nycb3JC18vWfrBF58zJOFeLXK%2BGT75%2FSYWtoul9AtSX8qz2FsPEL0cO92g%2BI1gIM2Y6vR6V1Rz%2Bv0sdjcYdYCH%2BrpQvHX62cPjUgWddpN8NNJ18CwBpyFfmv2MWfYxU2d&X-Amz-Signature=90a1f7efa86db73756e2b5391db01bea921a72c3afce8ce73d2000822255443c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
