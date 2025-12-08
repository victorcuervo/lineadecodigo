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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECPV4TS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRQS6GtZc7XFsb8RdaYLHOH8rvYuvKgtA7uPPcUA0TzgIhANwwk4kaeMWWRX49%2FcydUDjm%2BWA0O%2FO1pbs4WIUfwTUjKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyyi2xlJM9QLK%2Bb2t8q3APGPTuH4gI3C%2FBjryg7Sb4DSJn1Zy6HehZw3vT4LX5qNvkWfmNIHbCmnIrNglxPyQW6LrMx%2FbYoR%2FlU%2F3%2Fm3uV2jAVxjmpWkOEbOqyiHU2wDXWz9vT%2FwzvnNATPujlcIS4T3y3qJwwGre1PqWqK6kBhP3ggajcZBrsYP3V6C9oIhY%2FtodlSE4GfLc2GlKSBZWJmKmRMNrBK1JNrqAzDyhq1sgXiG0wlwPb6iO3YYtkDlp33xZ9VlhXWY4oZ%2BSUl1xpWmdRH6Ru7ux0JuUa1h%2B1swg3dAjupA6nnTA7Rpq8qL4boNKXE50tFAM3QvkvwPJ55sNOJ5lxLvCOhA3aPLJb5mQrGw0FrZV4WMP2B07GIXs32TjgaFtxkYDGXHE6vhHJ8Q7TDIladlxLbXpaqq%2BXkEOS9HsnfbgwGmuSoH7QC1%2F4MG23eSgA%2FXozqxw3vmoyspIhvpSV%2BbvS%2Fq%2BgZulyMfsRT8bPEzrewXnJAoCHcaWBPtIH2BwYxdvNIaQGB09DlGueUccrdYBeHi1u2rijVqf341Hn73%2BLNNKejHEpSCQaNXvoCGAhlQdXVJZY4rNQCBOe7wENvK0TgAbCURG92mjf6r1pHMHMQ23zRmhYVSkOP7%2ByY1%2FZMkvm6SzDvj9vJBjqkAVY2754CdCWcgE67JhcTvntSoBshfLaXqVpHDU3qmdoQW5RskhlutmtFujD1xEnhhYowD7lNvux6pQCwm8B1U%2F3Vok8CfVQzs6vY4NjTJlvYI1%2FYLq2PdoizjEonEPvVJmdZOPkgBL2eO49JWaET7SV%2BS%2FvgZLNNUeENgT5c02nMO6HcxSLEOHONq%2BlnvaJ0q9AXvAaPbBTBHolWYWZk1pLH5%2Bbx&X-Amz-Signature=b55c222491dedfc6083c1628273b9e11a4db6536a827d87a3119bd3d606efa42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECPV4TS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRQS6GtZc7XFsb8RdaYLHOH8rvYuvKgtA7uPPcUA0TzgIhANwwk4kaeMWWRX49%2FcydUDjm%2BWA0O%2FO1pbs4WIUfwTUjKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyyi2xlJM9QLK%2Bb2t8q3APGPTuH4gI3C%2FBjryg7Sb4DSJn1Zy6HehZw3vT4LX5qNvkWfmNIHbCmnIrNglxPyQW6LrMx%2FbYoR%2FlU%2F3%2Fm3uV2jAVxjmpWkOEbOqyiHU2wDXWz9vT%2FwzvnNATPujlcIS4T3y3qJwwGre1PqWqK6kBhP3ggajcZBrsYP3V6C9oIhY%2FtodlSE4GfLc2GlKSBZWJmKmRMNrBK1JNrqAzDyhq1sgXiG0wlwPb6iO3YYtkDlp33xZ9VlhXWY4oZ%2BSUl1xpWmdRH6Ru7ux0JuUa1h%2B1swg3dAjupA6nnTA7Rpq8qL4boNKXE50tFAM3QvkvwPJ55sNOJ5lxLvCOhA3aPLJb5mQrGw0FrZV4WMP2B07GIXs32TjgaFtxkYDGXHE6vhHJ8Q7TDIladlxLbXpaqq%2BXkEOS9HsnfbgwGmuSoH7QC1%2F4MG23eSgA%2FXozqxw3vmoyspIhvpSV%2BbvS%2Fq%2BgZulyMfsRT8bPEzrewXnJAoCHcaWBPtIH2BwYxdvNIaQGB09DlGueUccrdYBeHi1u2rijVqf341Hn73%2BLNNKejHEpSCQaNXvoCGAhlQdXVJZY4rNQCBOe7wENvK0TgAbCURG92mjf6r1pHMHMQ23zRmhYVSkOP7%2ByY1%2FZMkvm6SzDvj9vJBjqkAVY2754CdCWcgE67JhcTvntSoBshfLaXqVpHDU3qmdoQW5RskhlutmtFujD1xEnhhYowD7lNvux6pQCwm8B1U%2F3Vok8CfVQzs6vY4NjTJlvYI1%2FYLq2PdoizjEonEPvVJmdZOPkgBL2eO49JWaET7SV%2BS%2FvgZLNNUeENgT5c02nMO6HcxSLEOHONq%2BlnvaJ0q9AXvAaPbBTBHolWYWZk1pLH5%2Bbx&X-Amz-Signature=82c6e8b6ab96c66ebea9c8cbdd8a505940fdbe15012667dda96715b18569aba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
