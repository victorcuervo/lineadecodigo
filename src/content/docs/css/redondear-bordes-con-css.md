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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLN3DV5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeWR4EwbONyDpMFgB4DuDisEMIzjn2TxW7pnp5BR7AiAiEApf89i3w3Nv5VjQyMoDWFtPJ2GanLL6dh3m4BMCMCQMkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFMPwO3d7PkeCgfYQircA1reymTk6MfZtsGVL8oKilMhRYVstNNbrE92btm8Le%2Fxx%2F98Gxlc9Vr8Btfoaz5GbzNQ0YMY3xLuH70arQeDv0orFGaAo84UoEhMCRullu2p5mT0R66D1hg6%2BXicJyllBu%2BvjnIEnVxNoSwE%2FkwIeyLsoexwzNV9Jxl8kucnmiJduOaDSvy27nKQ9QqtSHBXRy8fjkm9V6sdZgfC66EXsdNZ2frSUVIBMW3WEHq5TbG7m%2FWx%2Bmb70AHwtUexWlr7hU6U6nk2RJnmHQj8G1UPv0Gt68sFwLJXPMWDJ9OoVHm7gWhalBtQNtxKGTe15MpeK4Jks2UHPzXa6%2FHaSVO3UCIu4a9wsSnakffue8%2Bgc018FKy0jHoXaoVloiG2unHXajc%2F6s0YLH2fRvYi1qB3Q4BZVJTX21RrkOtf8%2B7gpL6FRq3J6ITVmJz0CXgHpKmpKbgJqs%2B9aU%2BV6NonE3tsQ1unzWYHjspV%2B0z4yY3pJ0I4AjPv0zYXY4Gs8RPNECx9VGMpT2QNYSBzuu46cpsXDb%2Bt1p9wpyQcC8Z1GH3Q1LGaMfL3oYdQ%2FnYORE47CK3ozJ%2B%2BRCojCzcHBWiMalnBPtZgD7o%2F0uXrqpt%2FGQBoBugIqXNqL5KMPwzAGiikMMHK0ckGOqUBGG6tFYdkZ5T3bqVInO8j6siqQONGF546SqSjixYe0ZqSIAsar352lQR%2Fcx8KbpdIrBr5CUAMHkI723zaovV07AYeN8Bdz%2FSgQQF5BhOM4IpqZuy2UFTCTtcUQCuLW%2BNXJ9FbY5nC6UgRKkqKbg8ppEGza6tKN4vr7wdoulxSBXGsnqhujN8j4eIm13IW4ZLTWJeL39lanKV9f9Rcj%2FVGjrUIk7PI&X-Amz-Signature=dca39cb14e4e88aadf7dcea46b4d9e734f89fe55e67281d18d678b3a6f4894c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLN3DV5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeWR4EwbONyDpMFgB4DuDisEMIzjn2TxW7pnp5BR7AiAiEApf89i3w3Nv5VjQyMoDWFtPJ2GanLL6dh3m4BMCMCQMkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFMPwO3d7PkeCgfYQircA1reymTk6MfZtsGVL8oKilMhRYVstNNbrE92btm8Le%2Fxx%2F98Gxlc9Vr8Btfoaz5GbzNQ0YMY3xLuH70arQeDv0orFGaAo84UoEhMCRullu2p5mT0R66D1hg6%2BXicJyllBu%2BvjnIEnVxNoSwE%2FkwIeyLsoexwzNV9Jxl8kucnmiJduOaDSvy27nKQ9QqtSHBXRy8fjkm9V6sdZgfC66EXsdNZ2frSUVIBMW3WEHq5TbG7m%2FWx%2Bmb70AHwtUexWlr7hU6U6nk2RJnmHQj8G1UPv0Gt68sFwLJXPMWDJ9OoVHm7gWhalBtQNtxKGTe15MpeK4Jks2UHPzXa6%2FHaSVO3UCIu4a9wsSnakffue8%2Bgc018FKy0jHoXaoVloiG2unHXajc%2F6s0YLH2fRvYi1qB3Q4BZVJTX21RrkOtf8%2B7gpL6FRq3J6ITVmJz0CXgHpKmpKbgJqs%2B9aU%2BV6NonE3tsQ1unzWYHjspV%2B0z4yY3pJ0I4AjPv0zYXY4Gs8RPNECx9VGMpT2QNYSBzuu46cpsXDb%2Bt1p9wpyQcC8Z1GH3Q1LGaMfL3oYdQ%2FnYORE47CK3ozJ%2B%2BRCojCzcHBWiMalnBPtZgD7o%2F0uXrqpt%2FGQBoBugIqXNqL5KMPwzAGiikMMHK0ckGOqUBGG6tFYdkZ5T3bqVInO8j6siqQONGF546SqSjixYe0ZqSIAsar352lQR%2Fcx8KbpdIrBr5CUAMHkI723zaovV07AYeN8Bdz%2FSgQQF5BhOM4IpqZuy2UFTCTtcUQCuLW%2BNXJ9FbY5nC6UgRKkqKbg8ppEGza6tKN4vr7wdoulxSBXGsnqhujN8j4eIm13IW4ZLTWJeL39lanKV9f9Rcj%2FVGjrUIk7PI&X-Amz-Signature=d51c44f8833120e01149a55c368e9747a8ab3f35a26278ec145c66cb4f2b9fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
