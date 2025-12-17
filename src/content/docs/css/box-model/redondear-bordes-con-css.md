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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBXGZOS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh6U4i7qZ02odzB6bvgzAWXrxl1TjN2eiQuUkmBgiJDAIgbLQlUYxxmKUeoe0TRuyon30aX%2FsInp6oV3yEDm%2BZy38q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEx%2BctY1glPo5TWeZCrcA6jcS3pwZmz9a%2FCpWvVV6mhTsSRZqmXaaEXGWL%2F3CWEWxwSpYoPwE1Yq5EvgwrYM%2FFMbufuzUGbum8LIDKTTjNIbbrEJnL2uzpAE7BZ56ubB1225yuv%2BSwVVdACtfmEFBu2F%2B8QwbQ%2FZBxswiabEeX3ii%2BpVYMetM9jnwzHv5Y6iKULt0K8tj4Y4%2Fly4qehQaXLOXgNrC3qRbtUFflYnvVomiTwMeDDZqPLNrFwfIzd8U%2BTo0G9fesbhvxyZNvFQMCxvWeIef9Blh3z7Iul0Ndf7WKDtNsFPI69941qJnSrt3pnldUZao04tvg9oZ%2BTTbNAsF3rwzk5MjxLynngfY2CNOsVGcMA3L6JXDy%2BAfTi9q4era47mRo%2BcdbkiYGGsElrLgNCgYwTVICUOuhfC8x4RiwqukBXDDnnbYk4E8fohJGeVdLyTRdIqQvEtijwnPHw7lF%2BGQUh9vfMq%2FR5oWHrt5D%2FPyvUjbiYJ4g5aqVmt%2F1pneaXQjPE7hCtoi3gAv7V68eErszmLdY7MW%2FYCxO0IPo4BD5w5QLXXdxt6PqTzuleapdH44Nt3zXXS97aLLfyZWw3Q5HFFqvO66Zqw9Xp6G5H5wNqVUR4e6kjp1gIonZOR6fvMjV7cpYslMPeqisoGOqUBkKOPZh1cBrA5VPJyP7dzd3fkpfLGVkGMtzuNthVxHoxNUEgA%2BneKZDEn3h2RXIBjeHFsKVlQMuYD%2BXABqUYwpx263TealQZ27WxfwiZTPBtJ3r47bUkjyv7hiSGMbtnJZ1rB01GgtaZflgg7p%2Bbvsoa7fwEzXfp9nKY4OSGhjusb%2BhPteCjWnsjGE8NCyHBQ1ge%2FMFTuJE9SqOy1A%2FpUgI874S1j&X-Amz-Signature=850db3c1210fb91cd259f6d601eeabb93beab1f360eb517d689cef3ac7e9b822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBXGZOS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh6U4i7qZ02odzB6bvgzAWXrxl1TjN2eiQuUkmBgiJDAIgbLQlUYxxmKUeoe0TRuyon30aX%2FsInp6oV3yEDm%2BZy38q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEx%2BctY1glPo5TWeZCrcA6jcS3pwZmz9a%2FCpWvVV6mhTsSRZqmXaaEXGWL%2F3CWEWxwSpYoPwE1Yq5EvgwrYM%2FFMbufuzUGbum8LIDKTTjNIbbrEJnL2uzpAE7BZ56ubB1225yuv%2BSwVVdACtfmEFBu2F%2B8QwbQ%2FZBxswiabEeX3ii%2BpVYMetM9jnwzHv5Y6iKULt0K8tj4Y4%2Fly4qehQaXLOXgNrC3qRbtUFflYnvVomiTwMeDDZqPLNrFwfIzd8U%2BTo0G9fesbhvxyZNvFQMCxvWeIef9Blh3z7Iul0Ndf7WKDtNsFPI69941qJnSrt3pnldUZao04tvg9oZ%2BTTbNAsF3rwzk5MjxLynngfY2CNOsVGcMA3L6JXDy%2BAfTi9q4era47mRo%2BcdbkiYGGsElrLgNCgYwTVICUOuhfC8x4RiwqukBXDDnnbYk4E8fohJGeVdLyTRdIqQvEtijwnPHw7lF%2BGQUh9vfMq%2FR5oWHrt5D%2FPyvUjbiYJ4g5aqVmt%2F1pneaXQjPE7hCtoi3gAv7V68eErszmLdY7MW%2FYCxO0IPo4BD5w5QLXXdxt6PqTzuleapdH44Nt3zXXS97aLLfyZWw3Q5HFFqvO66Zqw9Xp6G5H5wNqVUR4e6kjp1gIonZOR6fvMjV7cpYslMPeqisoGOqUBkKOPZh1cBrA5VPJyP7dzd3fkpfLGVkGMtzuNthVxHoxNUEgA%2BneKZDEn3h2RXIBjeHFsKVlQMuYD%2BXABqUYwpx263TealQZ27WxfwiZTPBtJ3r47bUkjyv7hiSGMbtnJZ1rB01GgtaZflgg7p%2Bbvsoa7fwEzXfp9nKY4OSGhjusb%2BhPteCjWnsjGE8NCyHBQ1ge%2FMFTuJE9SqOy1A%2FpUgI874S1j&X-Amz-Signature=36a139d49c993a8ee18406aca7c66dc33424f7637cd4b30e04f8af8884a69046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
