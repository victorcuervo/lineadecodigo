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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGC3A47%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNr%2F2yzxwtLcAzraIHdvdn38bqUONzO5bQbNUGt1TjeAiBW4mFlkkXHsJJ%2FC4yCFO8zXcYJyFGzIxgXJmXLPv0qUiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBs18qq%2FTliGiZJ1%2BKtwDmnRwF%2F7AXdSpd4oKEG17ONupgiImLpS1NsySKmaBG3f2dmHRylpS9IGxruKyhnuSIRLgN4yZ119qEDEjQXXnbcXCNxDTEc9g%2BGybprhHglkprGSYMlvWjkwx%2BqhZzAqMXT%2FHxluxyVhaSNZj8EsbYqy%2B%2FVEjIXgjmfa94FV797mt%2Fl6RN%2BD3kW61hZREBuGv6XIShNDVjUO%2FMUq8fP%2FSfjbXIHZzSGk3Hr5GdKFnwasUVpb1xUbtogYQpoa1e%2FteL8tRUKS4Btzlm8bHc%2FGFeSEBmccdLvif8TvOAt1LgD9bfPhi8AmqAjpiY4li487STRq14w6dXY%2BC3ZpFH4LRLOe5pS20DyvdpAGOOaUz3GwYoCj8gQZsTtpWRZjOFxsyUVxhc6%2BAXFpZRADU2Z%2BUGSK7d0of81JR%2FiZwggmb%2Bmv0FOdChxzs2TpcZQ6QOCtwUNFSu8iCMnNUpo%2Bjfe721iQBCTSOWa4ClUWTj%2FCMHIZKVflTZHungKyWNSmSWnjDxtsjOYlb382Ux0%2F2bg7kv311rN3SLXNp5CWbVbLBLJgr8djmXc8WlYnsngxifBHNKZBE%2BLzEb66yAXA3pvEpDygjpPvuPMSbqWFT928bp2wtOIQZiSyHgojp92EwxJrVyQY6pgG2%2B48aYgfPNT%2FLftTeF5maB%2FUmKo6n6Ls0AoNL3ZXVVWOKWLJTC2QpVCFblnY2xzz7BsnGvJeg242EcM5PhfxMRqR%2F3MWO2qn3pM%2FOmv3qWZXVVmZlFnQnlLM3Yk0U7jtA9tdQ0%2FnmP3hnjVv%2B8VfQILZsYON0VRI1I8pPvS3LZ3t9eao4xF3CjdOl%2BiqxDbEHG3%2BTXJFw42YDEW8gAIm151uEWAY%2B&X-Amz-Signature=7d227b0b9778e0694478afddc367774929db12bf3a49f4d502dd35c025d1c200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGC3A47%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNr%2F2yzxwtLcAzraIHdvdn38bqUONzO5bQbNUGt1TjeAiBW4mFlkkXHsJJ%2FC4yCFO8zXcYJyFGzIxgXJmXLPv0qUiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBs18qq%2FTliGiZJ1%2BKtwDmnRwF%2F7AXdSpd4oKEG17ONupgiImLpS1NsySKmaBG3f2dmHRylpS9IGxruKyhnuSIRLgN4yZ119qEDEjQXXnbcXCNxDTEc9g%2BGybprhHglkprGSYMlvWjkwx%2BqhZzAqMXT%2FHxluxyVhaSNZj8EsbYqy%2B%2FVEjIXgjmfa94FV797mt%2Fl6RN%2BD3kW61hZREBuGv6XIShNDVjUO%2FMUq8fP%2FSfjbXIHZzSGk3Hr5GdKFnwasUVpb1xUbtogYQpoa1e%2FteL8tRUKS4Btzlm8bHc%2FGFeSEBmccdLvif8TvOAt1LgD9bfPhi8AmqAjpiY4li487STRq14w6dXY%2BC3ZpFH4LRLOe5pS20DyvdpAGOOaUz3GwYoCj8gQZsTtpWRZjOFxsyUVxhc6%2BAXFpZRADU2Z%2BUGSK7d0of81JR%2FiZwggmb%2Bmv0FOdChxzs2TpcZQ6QOCtwUNFSu8iCMnNUpo%2Bjfe721iQBCTSOWa4ClUWTj%2FCMHIZKVflTZHungKyWNSmSWnjDxtsjOYlb382Ux0%2F2bg7kv311rN3SLXNp5CWbVbLBLJgr8djmXc8WlYnsngxifBHNKZBE%2BLzEb66yAXA3pvEpDygjpPvuPMSbqWFT928bp2wtOIQZiSyHgojp92EwxJrVyQY6pgG2%2B48aYgfPNT%2FLftTeF5maB%2FUmKo6n6Ls0AoNL3ZXVVWOKWLJTC2QpVCFblnY2xzz7BsnGvJeg242EcM5PhfxMRqR%2F3MWO2qn3pM%2FOmv3qWZXVVmZlFnQnlLM3Yk0U7jtA9tdQ0%2FnmP3hnjVv%2B8VfQILZsYON0VRI1I8pPvS3LZ3t9eao4xF3CjdOl%2BiqxDbEHG3%2BTXJFw42YDEW8gAIm151uEWAY%2B&X-Amz-Signature=5fa16c78296caa439690fade4c9d2ebe97984831f5b5b145072648714a7f23a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
