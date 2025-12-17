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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKM2S2W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP34AK%2BI6Zq061Xx7aTFcVD3vsuISqjFuaGGrMXOVohQIhAKnJyLlp2%2BWc2oHpT5Y8nJ0HEPIeq2sMTgAMhmTifcTlKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2mpJHtXwT9rIpX3Uq3AM48QJo87NfHuUXBjP3v28Z0wp%2Fjly5PGZFHle9PNJj7MATPfnPOn4lG0%2BqdeoRCkMQB6%2FDEjxUx1gfnsxuUV2rfexZNZkI7hnaD1%2F8EwLMme8mmMc3i7RrhrnA8SN755SeWYopA1gkq2FOlKvTiAoWMaE6RGN4NNn%2Fs0KAueg95IKfQjaVhFz8eLuFxapuVQRepQtj38rbSinxpmHuDHyduUDC0TpLRrwvkFOp9qhDgWxHk129pN5EfZIegMbWX%2Fmh63HKo9SKfsoIrUqMW%2FNb0U1%2F9xHF6mo6nmn3VaKv3zPfF2oW8TgVVrm12%2B3HdP2AHRtLdvgXwnWG3NOuN%2F78OQWFgPuPSqvF2ss2VQfJ%2FJ%2F%2Fd3uEUXTw1u9l9UrSM3HfmxVV%2BTJZ4%2FR748sCYnbJsNPiXLpXsLpLbCapLb60PTSrr2RlBQPRJ4nji7aeuZSgW8E2zSgdyi3r9YQA%2BuzTx3k0L4eRXSo1ZLwTUiF50Hw%2BXzsi6wDMkoHDKXQ17MCS10Qu6XxstG1W9zOR%2B1aewNGrT%2F%2FOKQa6eIi2yKUcr%2BljMAL%2B%2Fbpt2wZeWDLySiYkUWsdxveY%2FbC5FXOnpOEWG%2FDREIAvtIpzDNW1exgB7s%2BNpXocpszSEiCrRTDvrYzKBjqkAZdJ0Y9K3a2ODGQAoV%2BtYlvS2l6LiiE9NjtSPnZZ7LU3SL968PjeTer9iL4tLiqKN7kJa%2B641bMqufMgyCpAoAFpdXIZG%2FBIik1CqE1xwDIbOMcIwZgjYhqYhbY6hmyQGKF%2FZCmlFvmlYQ5na8CX%2FAo%2FvxiW7rWmEqN464BM%2FpfSQYpOaClNflV7kqeN9pmQW85n%2BUcN3c%2BPBRVtgb9qctVh6KyW&X-Amz-Signature=6bcfacdee63905d2a3283553aad6831fe3b3cbe81840545836c32c4ab4fde241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKM2S2W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP34AK%2BI6Zq061Xx7aTFcVD3vsuISqjFuaGGrMXOVohQIhAKnJyLlp2%2BWc2oHpT5Y8nJ0HEPIeq2sMTgAMhmTifcTlKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2mpJHtXwT9rIpX3Uq3AM48QJo87NfHuUXBjP3v28Z0wp%2Fjly5PGZFHle9PNJj7MATPfnPOn4lG0%2BqdeoRCkMQB6%2FDEjxUx1gfnsxuUV2rfexZNZkI7hnaD1%2F8EwLMme8mmMc3i7RrhrnA8SN755SeWYopA1gkq2FOlKvTiAoWMaE6RGN4NNn%2Fs0KAueg95IKfQjaVhFz8eLuFxapuVQRepQtj38rbSinxpmHuDHyduUDC0TpLRrwvkFOp9qhDgWxHk129pN5EfZIegMbWX%2Fmh63HKo9SKfsoIrUqMW%2FNb0U1%2F9xHF6mo6nmn3VaKv3zPfF2oW8TgVVrm12%2B3HdP2AHRtLdvgXwnWG3NOuN%2F78OQWFgPuPSqvF2ss2VQfJ%2FJ%2F%2Fd3uEUXTw1u9l9UrSM3HfmxVV%2BTJZ4%2FR748sCYnbJsNPiXLpXsLpLbCapLb60PTSrr2RlBQPRJ4nji7aeuZSgW8E2zSgdyi3r9YQA%2BuzTx3k0L4eRXSo1ZLwTUiF50Hw%2BXzsi6wDMkoHDKXQ17MCS10Qu6XxstG1W9zOR%2B1aewNGrT%2F%2FOKQa6eIi2yKUcr%2BljMAL%2B%2Fbpt2wZeWDLySiYkUWsdxveY%2FbC5FXOnpOEWG%2FDREIAvtIpzDNW1exgB7s%2BNpXocpszSEiCrRTDvrYzKBjqkAZdJ0Y9K3a2ODGQAoV%2BtYlvS2l6LiiE9NjtSPnZZ7LU3SL968PjeTer9iL4tLiqKN7kJa%2B641bMqufMgyCpAoAFpdXIZG%2FBIik1CqE1xwDIbOMcIwZgjYhqYhbY6hmyQGKF%2FZCmlFvmlYQ5na8CX%2FAo%2FvxiW7rWmEqN464BM%2FpfSQYpOaClNflV7kqeN9pmQW85n%2BUcN3c%2BPBRVtgb9qctVh6KyW&X-Amz-Signature=a07c3a63ca78ce7fe3c1a50ab271609c664a0c01ecba0e9ffb99b1fbf898fd83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
