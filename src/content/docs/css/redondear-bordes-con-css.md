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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FO62C6C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfYxZ99IBhiX3sTF6JjIp8%2F2X8IUMpLRRjf5K6m6zBBAiATFNLnX1qQQrkKUSACDHzUR50uBMG3mvHpV%2BwljoBIriqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZxRDP4hQCs4%2FPZ5KtwDHLh517KWXeBXEcfKAAoTHqiAyOtH5eU6LXrHlbjwHiOPx8DCMm%2BcXCl5xb%2BdzHvPUv%2FRhMWFrKhe6A5iBi7A9cB3FmkueMVgE2wD4xVPSMFWZd3%2FkLrvk%2FcsraM1K73NTEU1egX%2FsAVd%2Bf9rGDDYPfSsKphDMAF%2BqcWTVbCvfUSQudPNT6wEBKBC3zvuBtixXrKMD06wrETsEifDQc8uEVPTqG9lqt6mfcthOCzcgY0tgDqMISJ4HnTf2OPTpddP9m0XVOYTJgET4J4s%2BEBEpSTyXjU50tS7a7h%2ByHRDvwlb4EWFZVmrLgPvqfMcMgFPmOKz40RsXUX1SAk1LraCjtxn%2FoCH%2BTWzzWoZcmeMRhVJ6%2BkcFnaH0Av4BYgNqvTqzQWblE75So%2Fe74qhut1nwHBoMkyoBRlbl3dU2VEBG0HekOPrnB24XpueAHtiTiA%2FYqNlIKwK6KyPhm0rrK4mI%2BRteEbaZHa0Qp5PSVf%2FnRNcaeY0QpBEeZfqO1Nf3AfUi8p8O5vpLkGI5aqnByzfFBcWsshwze6G1jeOSikRQZQ5iTXX6vKX1mqeBU0kVRPUzH5yqNSUCeH4CSz168%2B6iIletSyjDhXFcDSP4rquCnhrNHCsnoCGR2S%2FCCEwzqHYyQY6pgGO45oYSF7eVnrJHSMIqJSoQVrcZ8su0OaPAFGuuXmcYKDI%2FxLre08fFK7h1gIpE573tP4CuCjs6s38mdfkgY%2BMFXYaJUn1EeekINIrN93%2F8GzSrkdHpVOIbERrfOEtNp9BNolYEa16gXecVxiIPqPjIxLmDoyB%2Bm4YLw3is46oB%2F%2B%2FVcX3QVkodWfCWyg3pL%2FP%2BckG092oppqeRx9fKplDVdCyUsq%2F&X-Amz-Signature=d0ca7186dbb5f810871e4c084a33a9494e5d2c5a841cfe5233bfdefc2fd97ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FO62C6C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfYxZ99IBhiX3sTF6JjIp8%2F2X8IUMpLRRjf5K6m6zBBAiATFNLnX1qQQrkKUSACDHzUR50uBMG3mvHpV%2BwljoBIriqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZxRDP4hQCs4%2FPZ5KtwDHLh517KWXeBXEcfKAAoTHqiAyOtH5eU6LXrHlbjwHiOPx8DCMm%2BcXCl5xb%2BdzHvPUv%2FRhMWFrKhe6A5iBi7A9cB3FmkueMVgE2wD4xVPSMFWZd3%2FkLrvk%2FcsraM1K73NTEU1egX%2FsAVd%2Bf9rGDDYPfSsKphDMAF%2BqcWTVbCvfUSQudPNT6wEBKBC3zvuBtixXrKMD06wrETsEifDQc8uEVPTqG9lqt6mfcthOCzcgY0tgDqMISJ4HnTf2OPTpddP9m0XVOYTJgET4J4s%2BEBEpSTyXjU50tS7a7h%2ByHRDvwlb4EWFZVmrLgPvqfMcMgFPmOKz40RsXUX1SAk1LraCjtxn%2FoCH%2BTWzzWoZcmeMRhVJ6%2BkcFnaH0Av4BYgNqvTqzQWblE75So%2Fe74qhut1nwHBoMkyoBRlbl3dU2VEBG0HekOPrnB24XpueAHtiTiA%2FYqNlIKwK6KyPhm0rrK4mI%2BRteEbaZHa0Qp5PSVf%2FnRNcaeY0QpBEeZfqO1Nf3AfUi8p8O5vpLkGI5aqnByzfFBcWsshwze6G1jeOSikRQZQ5iTXX6vKX1mqeBU0kVRPUzH5yqNSUCeH4CSz168%2B6iIletSyjDhXFcDSP4rquCnhrNHCsnoCGR2S%2FCCEwzqHYyQY6pgGO45oYSF7eVnrJHSMIqJSoQVrcZ8su0OaPAFGuuXmcYKDI%2FxLre08fFK7h1gIpE573tP4CuCjs6s38mdfkgY%2BMFXYaJUn1EeekINIrN93%2F8GzSrkdHpVOIbERrfOEtNp9BNolYEa16gXecVxiIPqPjIxLmDoyB%2Bm4YLw3is46oB%2F%2B%2FVcX3QVkodWfCWyg3pL%2FP%2BckG092oppqeRx9fKplDVdCyUsq%2F&X-Amz-Signature=54e566abaf7c54c4bce2557ed4042342cf77641632ac390238dadf3af31c4014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
