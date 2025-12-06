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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJJIISRP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdK7cnLuzfdHLpdh58zTWaBYoGCc5giakCy3qqk8%2BBrgIhAKXtM7kqKuVnLrcDONiZf7Jv4M0ax2oJcSam5YXoim0RKv8DCG0QABoMNjM3NDIzMTgzODA1IgzNgKph9LYAyLQQx2gq3AOGwzc%2FYxsJubSJZ%2F8gFBmfQ5cwFf2FUPSNZO8fe%2Fa1RYbC8CoIB5O5RtK8H1f7fHpx270BxTmCMz%2FG7EHTlbuMTtWPQYZUz45Q1Q2Aa2eG5FXYKdzNGyevqV%2FlBIMj5s6y5YcbixCw9LmKOCEtxuW4VN6W3i6GcOQELBR%2FkFuMkqc3gcMm9yocflLFmMNamSSllb1PfN5TbuKI6BnSxPC6iwJf7t03G%2Bmo2yuqQXdZzhNFZvKC%2Bes8DpQMDnG3w%2Bkm60xrNAx5mI3xgwwhsM1EtBsdJFAbXm2iUEfU5aq0DtayMxUpsRtO8bx%2Fuo4Jb%2Fb2gRmf55vegH7VGBDGZPl%2Fv5ZAjTTlG28J3pOKMyqM74Ye4X6EPFHU0r4mD9YMDpBvWydGC2%2FTNgR3AVXEvFkFaaKN4p2Z9s040dVkXnx%2BZXF0dMYxiZefGIDx1CNXIWp040L%2BUP4mgyATW7pTgGi4KJVao%2BjB5AkuUk%2FrLxRIBtKe0HhGgypxYsMiO1Pkza7Omq%2BvR3GQiywh7Dt0lNvsVS2qzoRgD4lPRyS2qBlFhIEDEdA5cwUnUjUeuqMYxx%2Bp33fSfHBze1bFKZP4Rlf%2BbinP5GBCDQTCPFo3ZtUysAZUW5%2FpIRFJbK5n2zCQ3s7JBjqkARpvtOhggIw1ATxIh9AxAjDyz7PrfPJxl%2BkJxXUcukq0x8eV1TtjXGHBhzl3zjXeFmS9%2FsLS2o0qKNs6o7yvbZXgKUnGXI1zJUD2PV2ovBmbD8nSP9Jxik4tYgJh%2FYX0c6jTFRJUFm3C9KLY7xJsKCd5ffLL9tmMaNUE6p8JWAsKV7XgNwof7ym2hSBzP09tVDwCO5FGjHlCY2%2BmylHZmHu27wAz&X-Amz-Signature=5b17983a55e35f1d862ef3eded3c1fbdd25bf1223ac6e8b89fe1d84474f4ba05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJJIISRP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdK7cnLuzfdHLpdh58zTWaBYoGCc5giakCy3qqk8%2BBrgIhAKXtM7kqKuVnLrcDONiZf7Jv4M0ax2oJcSam5YXoim0RKv8DCG0QABoMNjM3NDIzMTgzODA1IgzNgKph9LYAyLQQx2gq3AOGwzc%2FYxsJubSJZ%2F8gFBmfQ5cwFf2FUPSNZO8fe%2Fa1RYbC8CoIB5O5RtK8H1f7fHpx270BxTmCMz%2FG7EHTlbuMTtWPQYZUz45Q1Q2Aa2eG5FXYKdzNGyevqV%2FlBIMj5s6y5YcbixCw9LmKOCEtxuW4VN6W3i6GcOQELBR%2FkFuMkqc3gcMm9yocflLFmMNamSSllb1PfN5TbuKI6BnSxPC6iwJf7t03G%2Bmo2yuqQXdZzhNFZvKC%2Bes8DpQMDnG3w%2Bkm60xrNAx5mI3xgwwhsM1EtBsdJFAbXm2iUEfU5aq0DtayMxUpsRtO8bx%2Fuo4Jb%2Fb2gRmf55vegH7VGBDGZPl%2Fv5ZAjTTlG28J3pOKMyqM74Ye4X6EPFHU0r4mD9YMDpBvWydGC2%2FTNgR3AVXEvFkFaaKN4p2Z9s040dVkXnx%2BZXF0dMYxiZefGIDx1CNXIWp040L%2BUP4mgyATW7pTgGi4KJVao%2BjB5AkuUk%2FrLxRIBtKe0HhGgypxYsMiO1Pkza7Omq%2BvR3GQiywh7Dt0lNvsVS2qzoRgD4lPRyS2qBlFhIEDEdA5cwUnUjUeuqMYxx%2Bp33fSfHBze1bFKZP4Rlf%2BbinP5GBCDQTCPFo3ZtUysAZUW5%2FpIRFJbK5n2zCQ3s7JBjqkARpvtOhggIw1ATxIh9AxAjDyz7PrfPJxl%2BkJxXUcukq0x8eV1TtjXGHBhzl3zjXeFmS9%2FsLS2o0qKNs6o7yvbZXgKUnGXI1zJUD2PV2ovBmbD8nSP9Jxik4tYgJh%2FYX0c6jTFRJUFm3C9KLY7xJsKCd5ffLL9tmMaNUE6p8JWAsKV7XgNwof7ym2hSBzP09tVDwCO5FGjHlCY2%2BmylHZmHu27wAz&X-Amz-Signature=9f7b2b09dc9c3f87445e1afad8193eb738c2c03c01445eff50a954e00f9fe09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
