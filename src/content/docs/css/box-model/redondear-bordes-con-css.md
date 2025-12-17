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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRROTNM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4fxRcIMI8JlG6pHBQDZ0%2BjijhvBnUDMFWY6nkswLtvAiAfT%2Ba%2BM9TIvV4NMABWBJo3skkw7xJWKQr03yOp2%2FRUWCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsV9uNhlu4Ar5NoJsKtwDpT7fxADCHIzSbeUtjp8KBN0bzzqlSmcv20XMQBJxDvuDsqK3lKfgtykCnVtmnWvU%2BniIiU0MHXtQHV4gfeffiz2GIMeinIJbug4DLiI4jNwuh4g1xDx1O%2FtRQYqhksYeEpvc%2FhJBmDgEbxPUo6dC9hOfFv70SGduMrA7C7dX5shbaou5RMEGwK7NHGNzYYtwMMCK%2Fo2RIJ5cdotG2aqi%2Blzb30B3IZVVJDTQYm2N6jkKSYa3%2FTTvX9opPI20jN%2FZr6r03uI5NU5TmeiOHwda9edTbImyUoY4XVlG3JmWow%2BRhT5%2BX9KhbdwAvuIcSyloBlZCazJmtkTDZD66hw2WJTH9ohErQRYwDRydaDY5NW0Y12DgrJ2DwGSqW38OREbx8CUdeGRpO4EAIlQIdzMc9oIIhDKR4GH3taf%2B%2FdTmgxzP%2FJZzmZJQRLzs9twiGNwJ4p5rkEOzzgfqReVesLvTn1fyGJByjTBhJuoVcjIwwufpbMACSZxxU4iBPr%2BhsmoqKgcTzadSCXmkd1byBlBFROP0OUShS%2B8W7vQGe49hDQ36I5Q7XJHsNBQ4NwUigV%2FWVq%2F8RpFIr6vjEIVeFvUET5EoexOfyg5%2Bv4fHwxNEYt3uasdw5IqWGIrbO2Yw2ouMygY6pgEFHszexD0f4WXbpDHowG5YzFdEVH8yi8a%2F%2BoEvZNIkQDyTSh%2B9fmIC6T7sUEXpz7sqH6XyilQQqFBemU3%2BedcyHqP0cmS1%2BLyPC0UcVlsPGRo7wP%2FLoTnrgBPKueM5vfoK0ldMGd59kOj6s3ZrZ89CwnViBYCPr0dF%2FQIljPfV%2BytYdN5y2hQwySoANKF4pQwbQuF8fCJeu7YhgMhClr0sVSKtztAP&X-Amz-Signature=a6e3b6c764f95b1e39d04ce7cc453f98ee4c97a275f4e922f11277c6e2ae850e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRROTNM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4fxRcIMI8JlG6pHBQDZ0%2BjijhvBnUDMFWY6nkswLtvAiAfT%2Ba%2BM9TIvV4NMABWBJo3skkw7xJWKQr03yOp2%2FRUWCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsV9uNhlu4Ar5NoJsKtwDpT7fxADCHIzSbeUtjp8KBN0bzzqlSmcv20XMQBJxDvuDsqK3lKfgtykCnVtmnWvU%2BniIiU0MHXtQHV4gfeffiz2GIMeinIJbug4DLiI4jNwuh4g1xDx1O%2FtRQYqhksYeEpvc%2FhJBmDgEbxPUo6dC9hOfFv70SGduMrA7C7dX5shbaou5RMEGwK7NHGNzYYtwMMCK%2Fo2RIJ5cdotG2aqi%2Blzb30B3IZVVJDTQYm2N6jkKSYa3%2FTTvX9opPI20jN%2FZr6r03uI5NU5TmeiOHwda9edTbImyUoY4XVlG3JmWow%2BRhT5%2BX9KhbdwAvuIcSyloBlZCazJmtkTDZD66hw2WJTH9ohErQRYwDRydaDY5NW0Y12DgrJ2DwGSqW38OREbx8CUdeGRpO4EAIlQIdzMc9oIIhDKR4GH3taf%2B%2FdTmgxzP%2FJZzmZJQRLzs9twiGNwJ4p5rkEOzzgfqReVesLvTn1fyGJByjTBhJuoVcjIwwufpbMACSZxxU4iBPr%2BhsmoqKgcTzadSCXmkd1byBlBFROP0OUShS%2B8W7vQGe49hDQ36I5Q7XJHsNBQ4NwUigV%2FWVq%2F8RpFIr6vjEIVeFvUET5EoexOfyg5%2Bv4fHwxNEYt3uasdw5IqWGIrbO2Yw2ouMygY6pgEFHszexD0f4WXbpDHowG5YzFdEVH8yi8a%2F%2BoEvZNIkQDyTSh%2B9fmIC6T7sUEXpz7sqH6XyilQQqFBemU3%2BedcyHqP0cmS1%2BLyPC0UcVlsPGRo7wP%2FLoTnrgBPKueM5vfoK0ldMGd59kOj6s3ZrZ89CwnViBYCPr0dF%2FQIljPfV%2BytYdN5y2hQwySoANKF4pQwbQuF8fCJeu7YhgMhClr0sVSKtztAP&X-Amz-Signature=04bbe59c6cd956ba972a80a32639d557c3d373e638c5b423755e725a00875e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
