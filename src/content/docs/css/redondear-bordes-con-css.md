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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3ZTMWG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74jlaLlvnv2Q029XABfj5cxhUB%2F7lo949Y%2FYYm1V0EAiEA24wbA0IhLwnqUe860%2BxIVo5w9yGU3TEllnFQ0a2LmBgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcCrbb5n6IQagTRVSrcAxsoPZYl4otMACR9Ptg5LFNUXC7Ro8II4rlg%2BAlMRiVOaNSZc%2FAzpmlMpbubQ5rCvCjSCw6dlsURqazRnHxGtA2E8J6UOWTL1fX%2FLj81JzSwIYjbBqQ2kdvBKleZNfTqlPNHyLSydKFquL3KIsksXOtndpr7agGmhYVZnHEmHe53t0j1W6%2BpgTX7OHgnDit78xQE4v0yRKQ00QRZBXC%2Br1Hs9vsAYUlbI2F5HJuVTopLc5%2FqVDAwwRa1%2FQT7WUTT%2Fua0S1eruGyEpaZtGEXd2CJtLKOd9VVXtbU0QD59a0m3Y9mFgPCgFEUoBc7DWbza5jPwkwMbqbk06YJuR9ZBs2H1frsgXfJPh%2BN0Vmh1gsGQ2R%2Brp%2FGRpsh2E9Gu39%2BylpvS71XWJ4sFKsapcK97AYqXPHVqJIoxznB1AMyw3Byc3qPM9NgjodvpliIn%2BW9u0oux05%2B4lwXWF8XFlA53GTOlGvWs9kfLIf40hj8tQhv94j91sJgRlyF%2FnFLFTU3DgLQuzcRW1%2FN2cH4YghmHlkRyJ0UDOjolStBT3bfVAlwG0l9QYRGC0Bbg9%2BAV02pOaK36S8Dz%2F7Ckn5IZGSCIdt%2BUHPQVIKoM20j7GdGF%2BpD3QCyJ84apkApVHMTmMIWi3ckGOqUBrQO4bOS8osuYpty7WaF93k2FwWODs4KfgfGUtEhY%2FttUJ4IzRsW3ptie3aw5CeATndsMWnPwUyJIlRm9veXCpOCfmQA7lZjpuiZGx5nD%2BLCJqTbzj4021Lx5rU7PCp6QY92BRN37Ow%2Fe7kFv4AHRvgrEwUDUAxdrEFlxP8CyUCrfaRAwnZA5hH%2FPk7uK1Dxim5Hn9yL89xrLmS7X6uNmjvKOamvA&X-Amz-Signature=0a969188c2eb2fb01165ed4059735f2c349e6251cccc135b80625b1c35bc3b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3ZTMWG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC74jlaLlvnv2Q029XABfj5cxhUB%2F7lo949Y%2FYYm1V0EAiEA24wbA0IhLwnqUe860%2BxIVo5w9yGU3TEllnFQ0a2LmBgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcCrbb5n6IQagTRVSrcAxsoPZYl4otMACR9Ptg5LFNUXC7Ro8II4rlg%2BAlMRiVOaNSZc%2FAzpmlMpbubQ5rCvCjSCw6dlsURqazRnHxGtA2E8J6UOWTL1fX%2FLj81JzSwIYjbBqQ2kdvBKleZNfTqlPNHyLSydKFquL3KIsksXOtndpr7agGmhYVZnHEmHe53t0j1W6%2BpgTX7OHgnDit78xQE4v0yRKQ00QRZBXC%2Br1Hs9vsAYUlbI2F5HJuVTopLc5%2FqVDAwwRa1%2FQT7WUTT%2Fua0S1eruGyEpaZtGEXd2CJtLKOd9VVXtbU0QD59a0m3Y9mFgPCgFEUoBc7DWbza5jPwkwMbqbk06YJuR9ZBs2H1frsgXfJPh%2BN0Vmh1gsGQ2R%2Brp%2FGRpsh2E9Gu39%2BylpvS71XWJ4sFKsapcK97AYqXPHVqJIoxznB1AMyw3Byc3qPM9NgjodvpliIn%2BW9u0oux05%2B4lwXWF8XFlA53GTOlGvWs9kfLIf40hj8tQhv94j91sJgRlyF%2FnFLFTU3DgLQuzcRW1%2FN2cH4YghmHlkRyJ0UDOjolStBT3bfVAlwG0l9QYRGC0Bbg9%2BAV02pOaK36S8Dz%2F7Ckn5IZGSCIdt%2BUHPQVIKoM20j7GdGF%2BpD3QCyJ84apkApVHMTmMIWi3ckGOqUBrQO4bOS8osuYpty7WaF93k2FwWODs4KfgfGUtEhY%2FttUJ4IzRsW3ptie3aw5CeATndsMWnPwUyJIlRm9veXCpOCfmQA7lZjpuiZGx5nD%2BLCJqTbzj4021Lx5rU7PCp6QY92BRN37Ow%2Fe7kFv4AHRvgrEwUDUAxdrEFlxP8CyUCrfaRAwnZA5hH%2FPk7uK1Dxim5Hn9yL89xrLmS7X6uNmjvKOamvA&X-Amz-Signature=f62f91d51607beee6739b9da7c9df62c74ad1e154e9bf90b94d087dca494692c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
