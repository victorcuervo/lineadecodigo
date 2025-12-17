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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EKFUISM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRkMhNDMLL%2BNc1AWpEkU024f%2Fj7HhQAchJWx0WWlNpMAiBBW3xyup9wVrRUzrAiq6orfzGnZVwOGE%2BfkO0vHyVS4yr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2DMLdSwfT%2FP7gsHMKtwDIVgSVoSL8q7nlS2z%2BK5GLyOnYx%2Bf8TNYtx3ZVjGLDAieiM8bdoQyOm%2F5tgUtcTXmQicvEp8xzhVJfxz%2F4FuYjEQaYm3baQ21fVOjOpwK9oWvmo5cXikOjhvMQTXRhzb5ca67SMPa8x7bP1hEp8qe7wPM8ALuruycT0YB97a430tf5eIhRiFMFJjGK%2BpKRZonBMXhTgR%2FE%2BfbxOT%2FZOI%2BvG4YwW6uo57w87WgkuEEdWeTMKC09Wi7zss9oGEccthUnduTzGoFcgTpTeohJH8L9VSx6JRhZ4VRacbwtYkw1OsHyuiQKDesB4EtMNmgcoihZFct5H3PMLcckD08K1Ax0osfYZHy5FzLDXludYOo2%2FjNTA79zJMgpA6C%2FbsV97CnfLIXAbB7MEYSbC0WptAg2EyMIEGU7Zzh2IYIPlKFFr42F7AYM2c%2FPKkxJqUjpOuCXaW8o50MSIxshwUhH3WTe4Xnk6ljALgT5Hb%2Fa23UrxnCOoLRSILEALsBueDkxBveJBcCotcvbeLhRmJIcw6VvMuNDQ2pRgUaXSD9%2FP0hzQXHpSCkBAkavhgMtbaWH5aN2GVhTHy%2BKoxlknN2VTgbB5%2BRlwkJIbCGWJLo53ZyOcMCc5p2acIfdRkPrmUwxJ2JygY6pgH42xlX5T2BSVoSJJd7Us%2Fm9kRwg%2FUfbnsvYYLZ0Elluhqw%2FB7gY6AL95apfCT56df%2F4ifgDLyrnoUBj5Fj%2FFmOuHpj2%2FZS0oWkf2ju99jWPmLKdIPyfpIpOJgAuczheZbOcoXoVXDXCmPuYCDJr74DFuZXE89%2B22oZYAOmhyxyrQRJFZc4HxnJNXJWD1OyXmtMP%2B2yHktFt623p5xZL5QHX2D8qkFD&X-Amz-Signature=fb4f04f24888260ad896db1618f2d34c950911badeb87ff02fec3fae7a0a1c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EKFUISM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRkMhNDMLL%2BNc1AWpEkU024f%2Fj7HhQAchJWx0WWlNpMAiBBW3xyup9wVrRUzrAiq6orfzGnZVwOGE%2BfkO0vHyVS4yr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2DMLdSwfT%2FP7gsHMKtwDIVgSVoSL8q7nlS2z%2BK5GLyOnYx%2Bf8TNYtx3ZVjGLDAieiM8bdoQyOm%2F5tgUtcTXmQicvEp8xzhVJfxz%2F4FuYjEQaYm3baQ21fVOjOpwK9oWvmo5cXikOjhvMQTXRhzb5ca67SMPa8x7bP1hEp8qe7wPM8ALuruycT0YB97a430tf5eIhRiFMFJjGK%2BpKRZonBMXhTgR%2FE%2BfbxOT%2FZOI%2BvG4YwW6uo57w87WgkuEEdWeTMKC09Wi7zss9oGEccthUnduTzGoFcgTpTeohJH8L9VSx6JRhZ4VRacbwtYkw1OsHyuiQKDesB4EtMNmgcoihZFct5H3PMLcckD08K1Ax0osfYZHy5FzLDXludYOo2%2FjNTA79zJMgpA6C%2FbsV97CnfLIXAbB7MEYSbC0WptAg2EyMIEGU7Zzh2IYIPlKFFr42F7AYM2c%2FPKkxJqUjpOuCXaW8o50MSIxshwUhH3WTe4Xnk6ljALgT5Hb%2Fa23UrxnCOoLRSILEALsBueDkxBveJBcCotcvbeLhRmJIcw6VvMuNDQ2pRgUaXSD9%2FP0hzQXHpSCkBAkavhgMtbaWH5aN2GVhTHy%2BKoxlknN2VTgbB5%2BRlwkJIbCGWJLo53ZyOcMCc5p2acIfdRkPrmUwxJ2JygY6pgH42xlX5T2BSVoSJJd7Us%2Fm9kRwg%2FUfbnsvYYLZ0Elluhqw%2FB7gY6AL95apfCT56df%2F4ifgDLyrnoUBj5Fj%2FFmOuHpj2%2FZS0oWkf2ju99jWPmLKdIPyfpIpOJgAuczheZbOcoXoVXDXCmPuYCDJr74DFuZXE89%2B22oZYAOmhyxyrQRJFZc4HxnJNXJWD1OyXmtMP%2B2yHktFt623p5xZL5QHX2D8qkFD&X-Amz-Signature=31eab377b9ba6c6cecdd1919f2463f763f23fe28bed40cb4d71d18d3d707fc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
