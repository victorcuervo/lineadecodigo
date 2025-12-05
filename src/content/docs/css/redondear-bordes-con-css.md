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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLEYNRY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtm0iSkafh151pMMrx%2BKBlbIrEVdpTNn2hBTRpW9PlPAiA0GaCBzZajDrp%2F5M9WTR7JWtsP%2BN180flgwssN%2F0ndTir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMyBAyDj0zL9j46yGKKtwDW9e6VnocX2roORG8F9Br%2FJJASWxD0t9oP%2BbM1hqCc5E5sil257pC1njY%2FsTm1S1a76r0beV80eTMfFIV9G2oJzFW%2Fo0gX83mV3QSLpMqhmN4x5C5EYP4ukhranBYEaWgjVSTwA%2FYROGt7zZVVqQcfY%2BWuYXLhLhhGilM5HzNiY1nxSw0YSao4STfbCYO8ogwAxb9hfm6Mz8ozqrzc2pctmrzl%2Bvm1YznBQHZv6BhiZvhKe02vi6KC3GrJg0bATxDretdPi%2FqlFF7Xj%2BKmV3jyWzvGkfQPYsOT%2B1dATzrkNDY2cFYvE9QhC5kUSZdrC%2B%2Fh6wQMOPBY6sfRe6Jm8gWaBQDezFTXWjxfmf59o%2BSHQgX%2Fm6hudNXtWzGagVwTTkV%2BUyDE5%2FzQ4b%2BFVG6Up92yButjndyNqIjsmGzIGjHSHOG0p8L%2BKpQQnoMggh6upmMgZOrqXaGwhYtZPTam72yDmTo%2FwBxyM4RfpAX2mIpYpOEbh%2BxdXfvPH6kwQPckxwIGM%2B%2Bw0WX7BiMHvBUYWncccV2QwS2eMK032jAJqzT9sPoo1tnUicwKd0p11ZHmJfap%2BsMgR%2BTsQBXyxfm0Ns42WAEjk5lAbNsr7WXxJmkmIfujMAFusPNggHd8QUwqsbNyQY6pgFQYtqeL0GO0rh5uqaHL57TRailOnNHcLjPbMBRljkW0LxR%2BvlEZpv%2BsooZf%2FnJ1nYu%2Bt1JdPXhe7APe3zzBvxCZF7Me2toEev4x%2BPQUh8Y7BCcjL%2B0%2Fsyj3O5TBZ47b74zfSYodbPpZ0PZysR7Gd%2FoXf%2B6kASQV3d7DPE8O3vdSHGtmrt%2F1IDTui5BXJYg9X69imw%2FtuP3iNvy9fTSr98ll%2BIkAvMb&X-Amz-Signature=50b81321ce7cb7e59f72e2ee54464dfe136282afd62cdbdb8916595160b59e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLEYNRY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtm0iSkafh151pMMrx%2BKBlbIrEVdpTNn2hBTRpW9PlPAiA0GaCBzZajDrp%2F5M9WTR7JWtsP%2BN180flgwssN%2F0ndTir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMyBAyDj0zL9j46yGKKtwDW9e6VnocX2roORG8F9Br%2FJJASWxD0t9oP%2BbM1hqCc5E5sil257pC1njY%2FsTm1S1a76r0beV80eTMfFIV9G2oJzFW%2Fo0gX83mV3QSLpMqhmN4x5C5EYP4ukhranBYEaWgjVSTwA%2FYROGt7zZVVqQcfY%2BWuYXLhLhhGilM5HzNiY1nxSw0YSao4STfbCYO8ogwAxb9hfm6Mz8ozqrzc2pctmrzl%2Bvm1YznBQHZv6BhiZvhKe02vi6KC3GrJg0bATxDretdPi%2FqlFF7Xj%2BKmV3jyWzvGkfQPYsOT%2B1dATzrkNDY2cFYvE9QhC5kUSZdrC%2B%2Fh6wQMOPBY6sfRe6Jm8gWaBQDezFTXWjxfmf59o%2BSHQgX%2Fm6hudNXtWzGagVwTTkV%2BUyDE5%2FzQ4b%2BFVG6Up92yButjndyNqIjsmGzIGjHSHOG0p8L%2BKpQQnoMggh6upmMgZOrqXaGwhYtZPTam72yDmTo%2FwBxyM4RfpAX2mIpYpOEbh%2BxdXfvPH6kwQPckxwIGM%2B%2Bw0WX7BiMHvBUYWncccV2QwS2eMK032jAJqzT9sPoo1tnUicwKd0p11ZHmJfap%2BsMgR%2BTsQBXyxfm0Ns42WAEjk5lAbNsr7WXxJmkmIfujMAFusPNggHd8QUwqsbNyQY6pgFQYtqeL0GO0rh5uqaHL57TRailOnNHcLjPbMBRljkW0LxR%2BvlEZpv%2BsooZf%2FnJ1nYu%2Bt1JdPXhe7APe3zzBvxCZF7Me2toEev4x%2BPQUh8Y7BCcjL%2B0%2Fsyj3O5TBZ47b74zfSYodbPpZ0PZysR7Gd%2FoXf%2B6kASQV3d7DPE8O3vdSHGtmrt%2F1IDTui5BXJYg9X69imw%2FtuP3iNvy9fTSr98ll%2BIkAvMb&X-Amz-Signature=8cd299803e860a118d4a59a870faca70e87bf1d7e119776499b74750f778d9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
