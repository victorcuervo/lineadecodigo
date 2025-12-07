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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLBGSNJE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE11Ds1hqWqzm68Yc3cBEeaI2LytmqzfAxmfduTReb5%2FAiEAjwnsZswTax%2FTLOgZn%2BY6UjYWYiwIZb8bO49eFi7lZ34qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAGNtfVgDnSlFv5gircAxBPzpFeInjYW2Dgbyvaizfcad%2Bkof64XvsHAABYoUrMcJSTum88Jk4v2sCUVX2iKDD%2BPwWQHB6kvz1wgxE9xcc%2BNpkx7IgqQ8%2Fp4OT2KxPpAo5vtZ%2BPwmIPhpMsAFxb1tiqrhte5prjPJT4xMO%2Fm0HEyTWXbGevRAsQ2QfcDRqq4n1R5aXU4xkh4Y51rFq%2FhgqjxdATMFVQyUStL1M5bsMIHJDJDGaP4V1YP2PPW0uVt3XYDW2%2FZz2f3cKu6rshPYxQWsFVSFJQlRzmo1x6P2NXHEgAQobVgYUKYD2JZGOtObpxlxzCh6BFK5l9VLVTiZRvo%2Bb2FakD3ay0tp48E%2BM34PKxeXuIL98KfFpo272DYl7ZjNQxAlMysdYErxxjNY8IskH6u%2F5Ha4OxxX%2FTMdmclJEuOFTVknUcO%2BSYysy6wWtH7NkV3lwFJlMfRFRCiaUrxIjt0Z2v4nhyQBVk8xREm0Jd8yoSd1PifEw%2BCeganF5vrZcTAqEnB%2F3KBJOcWdwTTJmLa7L7tDME4rBOovN%2F%2Bl4qF0ykBcRWE2YzWd5LY3V4eTWSEfDFdBOV0rDfhWafthobKB90VjCCOz2C32VrYB3Vq6QRAgQSl6O0wBHYSHzZsDX8g43WG1sAMNvH18kGOqUBCtQdMZ%2Fo70djsCrhe69ZU9eaeqNjYTyuSfi1%2Fs6YqY4N5MgSXnLMUb7qPdm55GiPufixx%2BAomWk0k5fRmBHRoFOL8euOmZr1HzIdfPtSceJdkt%2BJZjoeH5EqDw8e%2FNed2alu7Skh9PJVccdjO3iBtrxwerTSLOEn05whzGsvZcfYt4iEWBJp9Opf%2FOy4firYymtu2isBfQ18aISeqTC6ehYbarXY&X-Amz-Signature=19ded650c3f814d0af6989aeaaa7d4667fa5004a02d8dfcc6adeddaec8d69f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLBGSNJE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE11Ds1hqWqzm68Yc3cBEeaI2LytmqzfAxmfduTReb5%2FAiEAjwnsZswTax%2FTLOgZn%2BY6UjYWYiwIZb8bO49eFi7lZ34qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAGNtfVgDnSlFv5gircAxBPzpFeInjYW2Dgbyvaizfcad%2Bkof64XvsHAABYoUrMcJSTum88Jk4v2sCUVX2iKDD%2BPwWQHB6kvz1wgxE9xcc%2BNpkx7IgqQ8%2Fp4OT2KxPpAo5vtZ%2BPwmIPhpMsAFxb1tiqrhte5prjPJT4xMO%2Fm0HEyTWXbGevRAsQ2QfcDRqq4n1R5aXU4xkh4Y51rFq%2FhgqjxdATMFVQyUStL1M5bsMIHJDJDGaP4V1YP2PPW0uVt3XYDW2%2FZz2f3cKu6rshPYxQWsFVSFJQlRzmo1x6P2NXHEgAQobVgYUKYD2JZGOtObpxlxzCh6BFK5l9VLVTiZRvo%2Bb2FakD3ay0tp48E%2BM34PKxeXuIL98KfFpo272DYl7ZjNQxAlMysdYErxxjNY8IskH6u%2F5Ha4OxxX%2FTMdmclJEuOFTVknUcO%2BSYysy6wWtH7NkV3lwFJlMfRFRCiaUrxIjt0Z2v4nhyQBVk8xREm0Jd8yoSd1PifEw%2BCeganF5vrZcTAqEnB%2F3KBJOcWdwTTJmLa7L7tDME4rBOovN%2F%2Bl4qF0ykBcRWE2YzWd5LY3V4eTWSEfDFdBOV0rDfhWafthobKB90VjCCOz2C32VrYB3Vq6QRAgQSl6O0wBHYSHzZsDX8g43WG1sAMNvH18kGOqUBCtQdMZ%2Fo70djsCrhe69ZU9eaeqNjYTyuSfi1%2Fs6YqY4N5MgSXnLMUb7qPdm55GiPufixx%2BAomWk0k5fRmBHRoFOL8euOmZr1HzIdfPtSceJdkt%2BJZjoeH5EqDw8e%2FNed2alu7Skh9PJVccdjO3iBtrxwerTSLOEn05whzGsvZcfYt4iEWBJp9Opf%2FOy4firYymtu2isBfQ18aISeqTC6ehYbarXY&X-Amz-Signature=3126fa2b7c0b1f0febd40b5fc242c6d172830a3d1cd9dd05a19dbf102d9878f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
