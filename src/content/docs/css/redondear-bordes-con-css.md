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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIO5DOGK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKaqk9g%2Fpu7%2FvGlFievm3TZiGyFVami6UdsV2zh13AzAiBXNICP9dDeyuaXcB3SJ3vTEjwkh1h76zi7uHN7eMbJbCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI1qnbGqeQCrsnEQKKtwD15N4Gc93v8uc33AaHbg67HlseDejIgbKeJHFSNvVTlm7Y5vMnU%2BfaPCHF%2Bw%2FJ%2BG%2FPzq8R1DnD99JTO4jnEui9%2B7g5%2FfgIGr4HOmcf8b11XaSNQuOs2uO1TCclLWnppRzY7eLOQbbs2qoL6l9RcXhQQnm94x8zRYFbzRt%2Fhnb9FNqfywhHrZYvMnDKG0hX1zoimxnhUYW2KMJ4mY0GxrCiahmB1kbbkjw98WHi11I7uitltyv0fetzXFSS3nuBN%2B8aN6g8TStg3PnwP5pgQXPnbETtUiunOTAqlfRfBOXvxQc82xDlUqLnM4fx9qk3UzagegJRaKq54d%2BJNeIgpXM%2BSPIIvy0bph6iEkmg6lfK%2FCToU47yFes4Lq%2BRvLBkKXo0INLxC5Mfn%2FMxOcaCh1%2BpVn0ptSVnOwIhfoDvKCMl5FYl1Edc46Rqa74y20bRkDGnqUtNUNWkP%2FA5f%2FkGlI3O2L2aIVjicJsfnIe%2BVunbUFNIXP8oTiHZOSFR0HBz1uPZ6NBhKvV0NTTAwE5hpuWZ7ppSDBQZJpXPZ0e%2BO6AZv3RX%2BD5P%2F23%2BefPORFzddco77Nv24EmL5y1VBnSEUN5OYIc3tO6PVvkPQcXC5WYA3Ir1RpjaeMxtTwY6Psw4LTZyQY6pgES09OZwCenAFSyz1RutjcbYELeEHu1ekDmvLEGqK2GUNU4iGfBXNBqmNorR3PtEMTCbs6tTaYX%2BLC0OaFjGnhsgL47wr2ZSFGU%2BO%2B%2FiQT00ZNRy8sX%2FbUhQTvPYkaOoyLsisT9WB04XuhZGG9COv7mVfmLIYLBdlAFi1cUewZQoRsvb%2BzF34ScS%2FhtE7iFnTfcX0l2CHQoFxBBGDrs9RAfDCQUdz20&X-Amz-Signature=abae74929e93583194faa15d9a82ddb893b526111b3a336c0146b27c67a480cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIO5DOGK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKaqk9g%2Fpu7%2FvGlFievm3TZiGyFVami6UdsV2zh13AzAiBXNICP9dDeyuaXcB3SJ3vTEjwkh1h76zi7uHN7eMbJbCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI1qnbGqeQCrsnEQKKtwD15N4Gc93v8uc33AaHbg67HlseDejIgbKeJHFSNvVTlm7Y5vMnU%2BfaPCHF%2Bw%2FJ%2BG%2FPzq8R1DnD99JTO4jnEui9%2B7g5%2FfgIGr4HOmcf8b11XaSNQuOs2uO1TCclLWnppRzY7eLOQbbs2qoL6l9RcXhQQnm94x8zRYFbzRt%2Fhnb9FNqfywhHrZYvMnDKG0hX1zoimxnhUYW2KMJ4mY0GxrCiahmB1kbbkjw98WHi11I7uitltyv0fetzXFSS3nuBN%2B8aN6g8TStg3PnwP5pgQXPnbETtUiunOTAqlfRfBOXvxQc82xDlUqLnM4fx9qk3UzagegJRaKq54d%2BJNeIgpXM%2BSPIIvy0bph6iEkmg6lfK%2FCToU47yFes4Lq%2BRvLBkKXo0INLxC5Mfn%2FMxOcaCh1%2BpVn0ptSVnOwIhfoDvKCMl5FYl1Edc46Rqa74y20bRkDGnqUtNUNWkP%2FA5f%2FkGlI3O2L2aIVjicJsfnIe%2BVunbUFNIXP8oTiHZOSFR0HBz1uPZ6NBhKvV0NTTAwE5hpuWZ7ppSDBQZJpXPZ0e%2BO6AZv3RX%2BD5P%2F23%2BefPORFzddco77Nv24EmL5y1VBnSEUN5OYIc3tO6PVvkPQcXC5WYA3Ir1RpjaeMxtTwY6Psw4LTZyQY6pgES09OZwCenAFSyz1RutjcbYELeEHu1ekDmvLEGqK2GUNU4iGfBXNBqmNorR3PtEMTCbs6tTaYX%2BLC0OaFjGnhsgL47wr2ZSFGU%2BO%2B%2FiQT00ZNRy8sX%2FbUhQTvPYkaOoyLsisT9WB04XuhZGG9COv7mVfmLIYLBdlAFi1cUewZQoRsvb%2BzF34ScS%2FhtE7iFnTfcX0l2CHQoFxBBGDrs9RAfDCQUdz20&X-Amz-Signature=bfeba57f6d367d6d0b1e1ad4815209c46d21e3fc654231d6f769d3e5390b492a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
