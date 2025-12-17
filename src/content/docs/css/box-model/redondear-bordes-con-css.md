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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPUGMKYV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUW8ZgdGYUoJGbxmylwV%2F2eT%2BBbVvXx2AfttQBEbHEUAiB5MEyUwVd6Ejl%2FzSFo8Sa8vXCkZPEmlFUwHGCDe3j1aSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuF8RcL%2BI2l%2FTjyMgKtwDaZU4QJFjoBO44dxIVokWG4Ww8%2BywUC5IxvRrxUAJcrnVe%2FdDcHNEsk52UEkYYKmq7UZgs01h3azaXm25VdL9XOYzBj6D5%2FAyKxyzvfF2C3Yk7KBJcSYwk%2FKvHR5DnhX2B29rkwh6koGaYKxl3w6etqo%2B0PTZnFINE547DpGUO3lRj9fb%2BrQ41fAZajUKeSSw4fjUhF7CzHor9hYCG4zIhyPEDLXFm%2Fn2GobPpid3GS6ny9TRqr%2FaVOndP%2FMtZAdn5IANP3ifoeWjHgeym0DJ0LEA30bpLJfLC0X6EUuYUR8k1AFRBpUA6rzpwM5zr3gG5bcRJxRoD11%2F15yr%2FktzMPMmakNV7smkh9ylIX85ujqa9XRU8fXBgC2KNRUj2ENSeCDGvN9%2BoKhgML7a5GcHyQG3BkVamRCBMDKUq%2FNX%2FSrT7w4FmYKBjfSSodN7U%2FH4FBx9Lk0B5UjxY2ht6BinKBhRvdsGRNZDvn%2FCMjfV0N%2BWvoz%2Fctul4%2FmBTIPHfJOMrpkSdyfXiLa6p4z8oYjVhkP5JEaYkkVakePy%2BaJxlhq8iiEufkUtCfdubemQibE5InDAdHU1xAZHPA%2BZQ8Qoy9fu4XamPrnKCCVui%2Bhv60fRE2SUWEB516Ih2fwwnqCLygY6pgErcSTXkFPlmuzYmK5JbgNiwIox%2BhlLuZ792WryJq7qs9VoeXB%2BTvQJdi82pMCS9GuLor3GZIKyHrSdR9utyzVDL0qM5qmiDqUe2oUukFgXCfe47dSEG6ZPIm6rx2WuPR8smkWBsInLcoSB5V1PDOs1AZagUKVV9Yhs3JqSnTxRv%2BPyeDs%2F4bn7JlbFo96Gbk0U%2BBmmC5CGqjH1kbbOZzCim9btwdIV&X-Amz-Signature=3a65ab93f08346dce5bbc496dd0964c28d972402677f5d53f4b6622e75307ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPUGMKYV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUW8ZgdGYUoJGbxmylwV%2F2eT%2BBbVvXx2AfttQBEbHEUAiB5MEyUwVd6Ejl%2FzSFo8Sa8vXCkZPEmlFUwHGCDe3j1aSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuF8RcL%2BI2l%2FTjyMgKtwDaZU4QJFjoBO44dxIVokWG4Ww8%2BywUC5IxvRrxUAJcrnVe%2FdDcHNEsk52UEkYYKmq7UZgs01h3azaXm25VdL9XOYzBj6D5%2FAyKxyzvfF2C3Yk7KBJcSYwk%2FKvHR5DnhX2B29rkwh6koGaYKxl3w6etqo%2B0PTZnFINE547DpGUO3lRj9fb%2BrQ41fAZajUKeSSw4fjUhF7CzHor9hYCG4zIhyPEDLXFm%2Fn2GobPpid3GS6ny9TRqr%2FaVOndP%2FMtZAdn5IANP3ifoeWjHgeym0DJ0LEA30bpLJfLC0X6EUuYUR8k1AFRBpUA6rzpwM5zr3gG5bcRJxRoD11%2F15yr%2FktzMPMmakNV7smkh9ylIX85ujqa9XRU8fXBgC2KNRUj2ENSeCDGvN9%2BoKhgML7a5GcHyQG3BkVamRCBMDKUq%2FNX%2FSrT7w4FmYKBjfSSodN7U%2FH4FBx9Lk0B5UjxY2ht6BinKBhRvdsGRNZDvn%2FCMjfV0N%2BWvoz%2Fctul4%2FmBTIPHfJOMrpkSdyfXiLa6p4z8oYjVhkP5JEaYkkVakePy%2BaJxlhq8iiEufkUtCfdubemQibE5InDAdHU1xAZHPA%2BZQ8Qoy9fu4XamPrnKCCVui%2Bhv60fRE2SUWEB516Ih2fwwnqCLygY6pgErcSTXkFPlmuzYmK5JbgNiwIox%2BhlLuZ792WryJq7qs9VoeXB%2BTvQJdi82pMCS9GuLor3GZIKyHrSdR9utyzVDL0qM5qmiDqUe2oUukFgXCfe47dSEG6ZPIm6rx2WuPR8smkWBsInLcoSB5V1PDOs1AZagUKVV9Yhs3JqSnTxRv%2BPyeDs%2F4bn7JlbFo96Gbk0U%2BBmmC5CGqjH1kbbOZzCim9btwdIV&X-Amz-Signature=b5df13be070bc4be5ad533a5182bd82080286923f0cf9553c5dcf23f62d9fba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
