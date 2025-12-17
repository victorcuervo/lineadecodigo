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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWA4VADK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByJ89IYVFcpskXvEa2e1ZZigr19KLQPgJ0Onv6D4ONrAiEAi5HXuH0ukzAOCLr6y57%2B2zFnyX5%2FYr3TLNhZaBUJTbcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJz1jfJ88gcT763DUSrcA4VuhAdAadTO2CwJWo%2FpaYMZUwXNnz1gk%2B4GZffn0ZE8ZJjLQMzrVcv5mugM7lac%2BCTlmgOBsrvMdL%2FTEXxOzz7GFaWffG5Axjuhb4m11dsBw82PUOLPBmw7%2FuejLg0159DF53C81tNJHIXYSWAu0rS7T%2FYIEI6z5sZ0h%2FCJTW3QHAwDxHL6FuE1Toi%2BNTvl%2BPvjoUz12OP%2B4PbzWg02r9sImaXiF0GviFT8fqov8xGvsIKxp0yHJQPZpX8wvM5Siao4Zl1mvy43CrMGN7mBwzzjQ0a7aFp4d905gJ2tNe584HQQ09pbHOHz%2BMN9Qzt3gPBTdVVTFwpxAiTzr9HsuUvskC8Kh2Xa7Qu9lvhK3FdQIY3OgVmlwjV5JCAJ1zDPukiYPWpGPDHcuSrYSaq28wE8h8KggND6y1h1IKoFmldp25n9W6uE%2Brb9pEVQnyDdH8L2l8KzZhdMPyRZezQwi7O4SMUTfgglO70SCnA0%2B1kuY0avsAIN7sSjlSH3SwxzDBFbtYh2c1ptZY%2BM4h1tudAkmmdqNJWsbV95BaWn3R5rbrkEBI2oXl5HHBeMOUr%2F8AQqRMpf0RHerGeJ3JOChKxLVm1wlS%2B38DPotv8wTBpw7yzdifD4lzanI17oMPiBi8oGOqUBibqzdn3FtAJy2fS%2BazOV%2BpOaClGxp5DU6xJjav3X9YHapGI%2FsBeQ2HYcviXWodyBcEmoVUGo7b%2Bx3EW%2FQp5LAZqgwpxIXSLpBtreFkUCef7J%2Fv4FPKfURlmfzFS17c4iYhp8gGyf7q78E6UiUyk49AXVPdXRdiSOhqxEoxh2faVRKJvedaDiry9bah0ozivwlRm0g46sRVADHueNjyeqmYm%2BgCq1&X-Amz-Signature=93b1337ac2f4b95720b301da0b0b89278484f90a858a6ffd50e0c5c21a05ebd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWA4VADK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByJ89IYVFcpskXvEa2e1ZZigr19KLQPgJ0Onv6D4ONrAiEAi5HXuH0ukzAOCLr6y57%2B2zFnyX5%2FYr3TLNhZaBUJTbcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJz1jfJ88gcT763DUSrcA4VuhAdAadTO2CwJWo%2FpaYMZUwXNnz1gk%2B4GZffn0ZE8ZJjLQMzrVcv5mugM7lac%2BCTlmgOBsrvMdL%2FTEXxOzz7GFaWffG5Axjuhb4m11dsBw82PUOLPBmw7%2FuejLg0159DF53C81tNJHIXYSWAu0rS7T%2FYIEI6z5sZ0h%2FCJTW3QHAwDxHL6FuE1Toi%2BNTvl%2BPvjoUz12OP%2B4PbzWg02r9sImaXiF0GviFT8fqov8xGvsIKxp0yHJQPZpX8wvM5Siao4Zl1mvy43CrMGN7mBwzzjQ0a7aFp4d905gJ2tNe584HQQ09pbHOHz%2BMN9Qzt3gPBTdVVTFwpxAiTzr9HsuUvskC8Kh2Xa7Qu9lvhK3FdQIY3OgVmlwjV5JCAJ1zDPukiYPWpGPDHcuSrYSaq28wE8h8KggND6y1h1IKoFmldp25n9W6uE%2Brb9pEVQnyDdH8L2l8KzZhdMPyRZezQwi7O4SMUTfgglO70SCnA0%2B1kuY0avsAIN7sSjlSH3SwxzDBFbtYh2c1ptZY%2BM4h1tudAkmmdqNJWsbV95BaWn3R5rbrkEBI2oXl5HHBeMOUr%2F8AQqRMpf0RHerGeJ3JOChKxLVm1wlS%2B38DPotv8wTBpw7yzdifD4lzanI17oMPiBi8oGOqUBibqzdn3FtAJy2fS%2BazOV%2BpOaClGxp5DU6xJjav3X9YHapGI%2FsBeQ2HYcviXWodyBcEmoVUGo7b%2Bx3EW%2FQp5LAZqgwpxIXSLpBtreFkUCef7J%2Fv4FPKfURlmfzFS17c4iYhp8gGyf7q78E6UiUyk49AXVPdXRdiSOhqxEoxh2faVRKJvedaDiry9bah0ozivwlRm0g46sRVADHueNjyeqmYm%2BgCq1&X-Amz-Signature=5aeb11c9eb7215d4150ff709feb11b11965d53511e4fb8a5805a045731e80a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
