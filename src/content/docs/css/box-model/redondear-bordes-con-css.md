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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDMDYQM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx4LbPE2hETKqq%2BMDKCGRYs%2BBDN7XsvWaU69qBA8tUhAiEA%2FDrJSeT5IdUkz33QU2i79oeqlH%2Fc%2B3MAeRrXRn2GXREqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkmCalBeTfCbupEQyrcA29cuYU2Q%2Bx2dHYXH1NNyZhliZaXDub8Nt5rCAPD1scSGma7yXoa82nwXBCEwHbZ7DkS5f8PKUXePc1g9HhSK04CHPHiW8NhgfVS8hCoIC%2FpCpDtRh43EkwngqGKUb41YaytZ9H6cYH8h9e9VT7GsWnf0kkPB3TWOUznjmD%2B54rub3nx7G55VHHJo4n2wI5l2v%2BsHcx63aAOGjuJvqteaW5B5zvTRyDxE%2B71TaPe5jMIUyHuY%2FRVJJVHMengadXGvvcmE%2BwpJy%2Bs%2B6F0u2GY2SWoHSFO9hWuXLduCbcquiEzPlfKeAlF9VdKGhxFrPcEaXmdnipZQbee0f3TynSItz8eV9kcImmqJTGfjgAO3G9Q3rtC%2Bkubx2Is1BBB2RfBTVlxKTbZ34maH1JH4SX30%2FGG5rDV1V3iZu3upfTl8aqOrj%2Fo0mhmEPymYEGbnzoXBRH9sDPvTV0%2BXDx%2F4CmQy%2FoXmoqStZ7gmL7EMIKaut8qGaIPNWpAJJMtj8CQ6Ha0JWDRgPJuwqArOOWsRSjUbusspstHLRja6YoOa7hZzsmWE0ja%2FaFEUSnTaodS0RuvlwwOUxy44TNYX%2BREnQH%2Fa%2B5uImq4JFy7N3iv0Xgfc%2FJSut8pJPVZfvOfy8h2MLCfi8oGOqUBYHUbfIyGWaLqtaFqjb4SdCrF8YkUx6nnwwP5xrHQhqcDm9aKiNBNWEopjtdXF0qatTt2oULOjZtuCiibuXahXiEaGPkhXPR74LbSLiPKxJRM9G1Szz5LC6VOmnjdP5oEuie8m1j1I5FOKDZYkFpEijSc0Y1yDe%2FoUrdQtGw7NIoCe24P3mnTd7eGXu%2B1X5n3Gw2e37bHio5q4vTVDZfNTOxZ0hDU&X-Amz-Signature=c06c1eacd63142ce2d3a14222590a96a34d0f138e8547e46598e25d20359b7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDMDYQM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx4LbPE2hETKqq%2BMDKCGRYs%2BBDN7XsvWaU69qBA8tUhAiEA%2FDrJSeT5IdUkz33QU2i79oeqlH%2Fc%2B3MAeRrXRn2GXREqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkmCalBeTfCbupEQyrcA29cuYU2Q%2Bx2dHYXH1NNyZhliZaXDub8Nt5rCAPD1scSGma7yXoa82nwXBCEwHbZ7DkS5f8PKUXePc1g9HhSK04CHPHiW8NhgfVS8hCoIC%2FpCpDtRh43EkwngqGKUb41YaytZ9H6cYH8h9e9VT7GsWnf0kkPB3TWOUznjmD%2B54rub3nx7G55VHHJo4n2wI5l2v%2BsHcx63aAOGjuJvqteaW5B5zvTRyDxE%2B71TaPe5jMIUyHuY%2FRVJJVHMengadXGvvcmE%2BwpJy%2Bs%2B6F0u2GY2SWoHSFO9hWuXLduCbcquiEzPlfKeAlF9VdKGhxFrPcEaXmdnipZQbee0f3TynSItz8eV9kcImmqJTGfjgAO3G9Q3rtC%2Bkubx2Is1BBB2RfBTVlxKTbZ34maH1JH4SX30%2FGG5rDV1V3iZu3upfTl8aqOrj%2Fo0mhmEPymYEGbnzoXBRH9sDPvTV0%2BXDx%2F4CmQy%2FoXmoqStZ7gmL7EMIKaut8qGaIPNWpAJJMtj8CQ6Ha0JWDRgPJuwqArOOWsRSjUbusspstHLRja6YoOa7hZzsmWE0ja%2FaFEUSnTaodS0RuvlwwOUxy44TNYX%2BREnQH%2Fa%2B5uImq4JFy7N3iv0Xgfc%2FJSut8pJPVZfvOfy8h2MLCfi8oGOqUBYHUbfIyGWaLqtaFqjb4SdCrF8YkUx6nnwwP5xrHQhqcDm9aKiNBNWEopjtdXF0qatTt2oULOjZtuCiibuXahXiEaGPkhXPR74LbSLiPKxJRM9G1Szz5LC6VOmnjdP5oEuie8m1j1I5FOKDZYkFpEijSc0Y1yDe%2FoUrdQtGw7NIoCe24P3mnTd7eGXu%2B1X5n3Gw2e37bHio5q4vTVDZfNTOxZ0hDU&X-Amz-Signature=765a88d6048a39b274352f2d3dabdf8fb601535489249e8a1ccfc9dcde60614d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
