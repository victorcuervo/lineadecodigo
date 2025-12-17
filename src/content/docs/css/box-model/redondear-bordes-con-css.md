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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPK6ABWC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL4H8Nwst6tQ36W%2FDakwdea4GEEjtovSC8VJQGG2unYAIhAMMeOj2b7L7Ufbj3vvGwtQJqU9MxT1D%2FqSlfXLpl%2BV%2FmKv8DCHUQABoMNjM3NDIzMTgzODA1IgxL4L2DCI10RMeVUJcq3AOyWqzj7vDWUCV%2FM6eKmGJ2F1xmMTQ%2B2dWDyvbZDH4rJ5okX6qtIfoGzSn%2FE9jvNIU6SrlK0ThoBbv3xsX%2BCHBKheSXB353Nu%2BN8wzXXMBnDdmwQwVbMgLFT0PHBIzix9pqWP3nRbH7jRK8NjTnJn%2BATGlah6yBNVslhm5iJP4Zp9%2BPoQ9L9Ln3DrgnfymULwkLXvp3t%2FfFrKpwT7I%2Bb%2F83jqmifilcHDGbbLwxmudTx5NSwAiXfJ1cFRaWF5vx3NnFGyEcB1T86wbchAph0arKVo5sPkRR%2BJSCbkOmH34x1MTySerX8t%2BqhEb7H%2FjXTuzqJXubAS37aQFNdFcHeyxpHTfN3qnj%2FBF8mArmbk3HLd0s0g53Z2WEUs957CtAlOgXvVmYQJRRZPOxyxs1ql5Sh9%2BmBgTihtvSTyUScbU5qajDlQlzDj4WB5Fuv42ZMyqm4zZC68l9Dj88ec5mReYSYTfjew7NIG33fFZNdQTbZG3S9z3V53oMwNSHdedWaV7le3oOnPUi6Yo6dy3xe9rzI3qF3sk%2BVug7esIpV8nZF%2BQhd4%2FQHwS8Enp4MvLfYDw6g0TsRc%2FKQ7VpPHb7mOphXuyZkWHAt9oASRmMfFFVkxDEMwWsxyXgpGicoTCEzojKBjqkAQH%2BjKWPKgsHo3%2BsI07gy2qKaMZIlIybKRKlnpDGz60TQzE1ykh1vB4zO4MH78smSoTdNtc3paxKRq342LdMaU9SP%2FmUoOnQtlbmwT9488iWVhPnNSewX6jKBlg0SFlyEtyYLQRJK3pHA9TKstzNC5C5Y2hGrAtrYFITW1%2BAcVUA0Z2oullqqCnPkFCHPUMm0tS8ntAcxF6Yq%2FVLQ0KVIQP5puz3&X-Amz-Signature=f1f9fa159c4822478d076424226d90cb166184abfb82e54402180fdb2e97d789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPK6ABWC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL4H8Nwst6tQ36W%2FDakwdea4GEEjtovSC8VJQGG2unYAIhAMMeOj2b7L7Ufbj3vvGwtQJqU9MxT1D%2FqSlfXLpl%2BV%2FmKv8DCHUQABoMNjM3NDIzMTgzODA1IgxL4L2DCI10RMeVUJcq3AOyWqzj7vDWUCV%2FM6eKmGJ2F1xmMTQ%2B2dWDyvbZDH4rJ5okX6qtIfoGzSn%2FE9jvNIU6SrlK0ThoBbv3xsX%2BCHBKheSXB353Nu%2BN8wzXXMBnDdmwQwVbMgLFT0PHBIzix9pqWP3nRbH7jRK8NjTnJn%2BATGlah6yBNVslhm5iJP4Zp9%2BPoQ9L9Ln3DrgnfymULwkLXvp3t%2FfFrKpwT7I%2Bb%2F83jqmifilcHDGbbLwxmudTx5NSwAiXfJ1cFRaWF5vx3NnFGyEcB1T86wbchAph0arKVo5sPkRR%2BJSCbkOmH34x1MTySerX8t%2BqhEb7H%2FjXTuzqJXubAS37aQFNdFcHeyxpHTfN3qnj%2FBF8mArmbk3HLd0s0g53Z2WEUs957CtAlOgXvVmYQJRRZPOxyxs1ql5Sh9%2BmBgTihtvSTyUScbU5qajDlQlzDj4WB5Fuv42ZMyqm4zZC68l9Dj88ec5mReYSYTfjew7NIG33fFZNdQTbZG3S9z3V53oMwNSHdedWaV7le3oOnPUi6Yo6dy3xe9rzI3qF3sk%2BVug7esIpV8nZF%2BQhd4%2FQHwS8Enp4MvLfYDw6g0TsRc%2FKQ7VpPHb7mOphXuyZkWHAt9oASRmMfFFVkxDEMwWsxyXgpGicoTCEzojKBjqkAQH%2BjKWPKgsHo3%2BsI07gy2qKaMZIlIybKRKlnpDGz60TQzE1ykh1vB4zO4MH78smSoTdNtc3paxKRq342LdMaU9SP%2FmUoOnQtlbmwT9488iWVhPnNSewX6jKBlg0SFlyEtyYLQRJK3pHA9TKstzNC5C5Y2hGrAtrYFITW1%2BAcVUA0Z2oullqqCnPkFCHPUMm0tS8ntAcxF6Yq%2FVLQ0KVIQP5puz3&X-Amz-Signature=9757ba70c06c521e488c628bc9f904f260b73df38bef537a99c36278c743d8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
