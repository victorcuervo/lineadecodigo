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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHGANUV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl1vzJcCBNN0AuXhRV6S05Mjpbr4SHmX%2BgEQYz4%2F0J1AIhAPb4G%2Bm7qT%2BDiJ6OQ3JwyOMp524CwePoTM5OWdawR3xqKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZKykVS94l%2BQY%2FihEq3AMWTR%2B5lg3L%2FKXRCqEbhzFdjNDrvAqAtJ19VZclMTzXZ%2Bz%2FD%2B6pSmCpQZIHol0guPnc0lbfg9KY9KLb5jlYskO4T73n9lTFIwUTKGvv2SjfxTC5aPlfwrQe76DllO4gjJmF4WNHWbvuzd511D57jVd5aawRinHk4VqCUWHnj3mQcgCaX6HEYpxQiGBQuJBt%2FTCBCSmUE%2BCVlVo4am2I72%2FwPrNGoq61Hs%2BelnE0jCTWvcn2gYg0zgMECRc5rKOY8grBnsVaR6PC5geLfbxWTtc4%2BwPlQrwNgK%2Fi93r8NfHdjQd%2Fw87pp9xPqPUToVc0F%2Fubivwe37i89Wf6m1dJ8kmsJBbXNBytyWR2%2BOFQ06e7PiOFOPoa%2Bzo4o9k88oGxMTyd8pXAL3SaOjZd3oUC5gy8Eis99LFVXgOnWwL1EbRiQRpEMvd%2B3kp%2FqdKdF8I4%2BNMNoa3mCDfbvPTS1dDgwkL6eswN8AtdZ5eVR7JdEYmQE3ThYsrE9llQSTe9wjIb4QvDgPCdRpgCbyxT9chrhr%2Fw8qOzRD175oTp6qlraDQ1Cg%2FgO6tx6aKKofMsnaoL6ggPAvpbMvD9G9ZrCQzz%2BWzqa1Q8ep410BzfQ7QlrR4ujta2F3q8b2HqitEPuDDC%2B4fKBjqkAYN3DJDBLi2RiBWz3XR1c413zwl5Y7ZQd%2BtgAMyX0%2BjBH%2FNbGaWFT1O3%2BNKRAV0vshxAsKBQqO0i0fXoSjj%2BUATMf3zGP0jAjgM96XC6FbjjCKLe1qAMKhcAyU0H0anSvKsYrl4OZ1GXPgpl1S8pN%2BzUN6GDJr%2FkWB2SxKJhyL4b0Az0XFuMvUF9Fa%2Ba2rVXPPhte%2F6FXy0MbSlXjBfnw3dN%2FR9e&X-Amz-Signature=93b30f1e01439fbfb908b098ca683eb7a8b41285a597fed3ac67277c445c42c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHGANUV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl1vzJcCBNN0AuXhRV6S05Mjpbr4SHmX%2BgEQYz4%2F0J1AIhAPb4G%2Bm7qT%2BDiJ6OQ3JwyOMp524CwePoTM5OWdawR3xqKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZKykVS94l%2BQY%2FihEq3AMWTR%2B5lg3L%2FKXRCqEbhzFdjNDrvAqAtJ19VZclMTzXZ%2Bz%2FD%2B6pSmCpQZIHol0guPnc0lbfg9KY9KLb5jlYskO4T73n9lTFIwUTKGvv2SjfxTC5aPlfwrQe76DllO4gjJmF4WNHWbvuzd511D57jVd5aawRinHk4VqCUWHnj3mQcgCaX6HEYpxQiGBQuJBt%2FTCBCSmUE%2BCVlVo4am2I72%2FwPrNGoq61Hs%2BelnE0jCTWvcn2gYg0zgMECRc5rKOY8grBnsVaR6PC5geLfbxWTtc4%2BwPlQrwNgK%2Fi93r8NfHdjQd%2Fw87pp9xPqPUToVc0F%2Fubivwe37i89Wf6m1dJ8kmsJBbXNBytyWR2%2BOFQ06e7PiOFOPoa%2Bzo4o9k88oGxMTyd8pXAL3SaOjZd3oUC5gy8Eis99LFVXgOnWwL1EbRiQRpEMvd%2B3kp%2FqdKdF8I4%2BNMNoa3mCDfbvPTS1dDgwkL6eswN8AtdZ5eVR7JdEYmQE3ThYsrE9llQSTe9wjIb4QvDgPCdRpgCbyxT9chrhr%2Fw8qOzRD175oTp6qlraDQ1Cg%2FgO6tx6aKKofMsnaoL6ggPAvpbMvD9G9ZrCQzz%2BWzqa1Q8ep410BzfQ7QlrR4ujta2F3q8b2HqitEPuDDC%2B4fKBjqkAYN3DJDBLi2RiBWz3XR1c413zwl5Y7ZQd%2BtgAMyX0%2BjBH%2FNbGaWFT1O3%2BNKRAV0vshxAsKBQqO0i0fXoSjj%2BUATMf3zGP0jAjgM96XC6FbjjCKLe1qAMKhcAyU0H0anSvKsYrl4OZ1GXPgpl1S8pN%2BzUN6GDJr%2FkWB2SxKJhyL4b0Az0XFuMvUF9Fa%2Ba2rVXPPhte%2F6FXy0MbSlXjBfnw3dN%2FR9e&X-Amz-Signature=7264a87ce63d7f3029687ca326d0f3ba068c9ec18ada7bc8464ec73c5acb0305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
