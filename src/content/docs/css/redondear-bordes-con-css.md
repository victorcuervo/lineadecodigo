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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJVCYCE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDuC95dKZbcWnvWsNOSgGrW6DU%2Bbfo2RDW5OqC%2FsDw5tAiA%2FH%2FFAL5IPvFjNbpMDffDoiuY%2BmcXdUUFTfOT%2B8NZUhir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtaHp8NjiuAevAgeCKtwD6EwiRoXmBtJrHRIlsDRblLDJMSapgQi%2FtsrPCTi1uuCA3wapnpfx8DjItycDOK1RthW%2F4qE0LD58uevok8veTs6d%2BH9iVRTjMUBQeKVxzTSeiiWmLtkw9F2EQsnnTD5YGUlmcnVTHpQuY1fK9VTqoAlwlltSUC1SdqKVa6X83CXjyqr%2FDuCTlxI9fl9NLR6sxM90Ue0ErArwjW9dS9iCpqfga0YEuOMG3PAinl5L3z%2FD4FBUIsOH7wjAVhin%2Fe6w8X3yp54k47r%2BBPDwlywbrCA1XcpErHI7g4IMw24%2BWzYqOq2cgiud592GoJN0BMmQCuGe8%2Br70mP1z93oxJUE9qGrKv%2F7TEgffP0Hdhccz%2FTVyTYcTOjZZZvYWN1dT0V3k%2BdTSTwldE3PaDG%2FTcdm1KCn2SIt%2ByWYn5u7BHawf347%2F6xZlqueX6IYa9%2Bk8cLi%2F4qXGgOXr3Y0sPFGk9zwRbkxF6HX2NSJXBZM%2BfEAwrnveIy50rVtYx3p3rvrWOG52R2DU6lGUUmRpdJdcHuZj5qZv7jMpO3xOjBi2mcbPSqVaNXV5M%2FUOnY6cYKdjxt1ZXtuTxn3Ark%2FdgjlQ4q%2FYhrlx7EbM0TO1c%2BDjnH%2BYdMU%2BMqmQ7tbOYX2PYMw257PyQY6pgHWUwiJ4JoqwTx5Bmwak%2BXr8HznXIFyasSJzHCHHGHj52%2FQNy0J4jGJoUSFdHiJiUpkObukISWWe5wt%2BUwJRpNvlYvG%2Bn%2FkqsHNoBVS5ghEPiKuV%2F8LynjB2m2G8Gt%2FVg%2B%2BNVQ3RrgVM8xHCp78%2FWexNW1B6%2Bq6XiXX9pIzQPnPqmANEHABNbEyImaO4IumjkamXXg%2F8x1I5gCtYM86imnsB9JF9wOF&X-Amz-Signature=e7af68bcad942e1db66f2a1a37210486fe739269011f7c9afb864b01c095a41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJVCYCE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDuC95dKZbcWnvWsNOSgGrW6DU%2Bbfo2RDW5OqC%2FsDw5tAiA%2FH%2FFAL5IPvFjNbpMDffDoiuY%2BmcXdUUFTfOT%2B8NZUhir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtaHp8NjiuAevAgeCKtwD6EwiRoXmBtJrHRIlsDRblLDJMSapgQi%2FtsrPCTi1uuCA3wapnpfx8DjItycDOK1RthW%2F4qE0LD58uevok8veTs6d%2BH9iVRTjMUBQeKVxzTSeiiWmLtkw9F2EQsnnTD5YGUlmcnVTHpQuY1fK9VTqoAlwlltSUC1SdqKVa6X83CXjyqr%2FDuCTlxI9fl9NLR6sxM90Ue0ErArwjW9dS9iCpqfga0YEuOMG3PAinl5L3z%2FD4FBUIsOH7wjAVhin%2Fe6w8X3yp54k47r%2BBPDwlywbrCA1XcpErHI7g4IMw24%2BWzYqOq2cgiud592GoJN0BMmQCuGe8%2Br70mP1z93oxJUE9qGrKv%2F7TEgffP0Hdhccz%2FTVyTYcTOjZZZvYWN1dT0V3k%2BdTSTwldE3PaDG%2FTcdm1KCn2SIt%2ByWYn5u7BHawf347%2F6xZlqueX6IYa9%2Bk8cLi%2F4qXGgOXr3Y0sPFGk9zwRbkxF6HX2NSJXBZM%2BfEAwrnveIy50rVtYx3p3rvrWOG52R2DU6lGUUmRpdJdcHuZj5qZv7jMpO3xOjBi2mcbPSqVaNXV5M%2FUOnY6cYKdjxt1ZXtuTxn3Ark%2FdgjlQ4q%2FYhrlx7EbM0TO1c%2BDjnH%2BYdMU%2BMqmQ7tbOYX2PYMw257PyQY6pgHWUwiJ4JoqwTx5Bmwak%2BXr8HznXIFyasSJzHCHHGHj52%2FQNy0J4jGJoUSFdHiJiUpkObukISWWe5wt%2BUwJRpNvlYvG%2Bn%2FkqsHNoBVS5ghEPiKuV%2F8LynjB2m2G8Gt%2FVg%2B%2BNVQ3RrgVM8xHCp78%2FWexNW1B6%2Bq6XiXX9pIzQPnPqmANEHABNbEyImaO4IumjkamXXg%2F8x1I5gCtYM86imnsB9JF9wOF&X-Amz-Signature=c9d978b9f91970a20fa02d805622c13551bae8c35195eeeb560f4aaa9b2f12ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
