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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFQTL25%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0fqIw%2FsqBAfaf%2FXjHXL83%2BvB1vn%2B4%2Br6gcxLuag3v3wIhAPNunfiJT7BrDCay0YuhZmfAfK45PCUpPzARf0uIrRT0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKRUJL9FIeaZRvicoq3AOyRF00jjexMdSXCG0X4vl4rXu0taPVdcssJlxJL6j2M6vmvTxdjgQbrQx965kLxxPyS5NhD6T7B5jTtMWbeaZb2l1yxLIfedF5bA9aECoRF9SwVipvPgRyRPTzeiDYnNaIchaPeb326YNFvnS3wFhpm3EfypVUgwg3ftxXw7ZwknQn25Li5mKfMhGNSLL1E67bZiaw7ncyyTmCbp1ic86EBIugJboDxsqdVOL2eiEvw2Qno1lwm2bkbrkO7g0Biv2M59fuZoWF2D0slDqav5gDh61Lon%2Fp3KRwb99s3sVDIqTbmUsllV6MB9yAd9Upr%2FWmdC%2BVSdG9VfxACoVWh4ZSBe%2FAxGkq8L6EO0QDusO9bH98K4azbZMDr58h6037HTBZ0heOtXgSDvmBQ2TH33KvZpElroumimcFSvrvYKJl84f6lojWpVfFYlvjtHxbOJ7q8ekuK%2BxHwugVU9B1XN%2Bb%2F6pUcs4jIV%2FGBLSSPUBtmKpjaZT3ArV0XWCATk30stXUI1UD%2B6xZ8orREkaBvQ2mpf3BbZUiMrLXnl%2BpVA0BvNi1aVNWY7ccvZoQCJAS5Nb9tstUzQ%2FsiPtbyCkNhx43ASw3a7EjvjFN2mmQmW0sjqzY1aba3T0AB4JUMzCf79jJBjqkAQtJVfUBsqd7u91mssDrWDABA4hft4gTbLf5nh1MOZs9BoCO%2Fype5G26Lipp54jZOrb5dT6vQgbGOlfzttY2l5a49KSblSqzWtCch%2FC51mfV2TelOqVUP0VlN8h942%2BvbtJQQmj1zEdqMSK3RKRFDMBsRpU4d4q3Yw2l5IQL2RzupRm3KtRAD0x0lurdBDksUNv5r%2BqvM1WEHBGAs8MwuDEARuY4&X-Amz-Signature=641d59fee80ca2dfeaa7af0d698e65feaac4957ecdb8aa3e22d6bd037860c7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFQTL25%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0fqIw%2FsqBAfaf%2FXjHXL83%2BvB1vn%2B4%2Br6gcxLuag3v3wIhAPNunfiJT7BrDCay0YuhZmfAfK45PCUpPzARf0uIrRT0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKRUJL9FIeaZRvicoq3AOyRF00jjexMdSXCG0X4vl4rXu0taPVdcssJlxJL6j2M6vmvTxdjgQbrQx965kLxxPyS5NhD6T7B5jTtMWbeaZb2l1yxLIfedF5bA9aECoRF9SwVipvPgRyRPTzeiDYnNaIchaPeb326YNFvnS3wFhpm3EfypVUgwg3ftxXw7ZwknQn25Li5mKfMhGNSLL1E67bZiaw7ncyyTmCbp1ic86EBIugJboDxsqdVOL2eiEvw2Qno1lwm2bkbrkO7g0Biv2M59fuZoWF2D0slDqav5gDh61Lon%2Fp3KRwb99s3sVDIqTbmUsllV6MB9yAd9Upr%2FWmdC%2BVSdG9VfxACoVWh4ZSBe%2FAxGkq8L6EO0QDusO9bH98K4azbZMDr58h6037HTBZ0heOtXgSDvmBQ2TH33KvZpElroumimcFSvrvYKJl84f6lojWpVfFYlvjtHxbOJ7q8ekuK%2BxHwugVU9B1XN%2Bb%2F6pUcs4jIV%2FGBLSSPUBtmKpjaZT3ArV0XWCATk30stXUI1UD%2B6xZ8orREkaBvQ2mpf3BbZUiMrLXnl%2BpVA0BvNi1aVNWY7ccvZoQCJAS5Nb9tstUzQ%2FsiPtbyCkNhx43ASw3a7EjvjFN2mmQmW0sjqzY1aba3T0AB4JUMzCf79jJBjqkAQtJVfUBsqd7u91mssDrWDABA4hft4gTbLf5nh1MOZs9BoCO%2Fype5G26Lipp54jZOrb5dT6vQgbGOlfzttY2l5a49KSblSqzWtCch%2FC51mfV2TelOqVUP0VlN8h942%2BvbtJQQmj1zEdqMSK3RKRFDMBsRpU4d4q3Yw2l5IQL2RzupRm3KtRAD0x0lurdBDksUNv5r%2BqvM1WEHBGAs8MwuDEARuY4&X-Amz-Signature=61820384b28d458edc7da25e8cff41a6c50f37c0d367cd5322734c98b0c348a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
