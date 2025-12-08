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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OO7BB4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXPDtox0%2FpmHBtH4lsEIfpkltZWpC8q3jX%2BqVS%2FJrQ3AiEAqY0JVCtXjJkHymRw79NEEMcYIMwpSXT3sx3IJ1YG1yEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOjImU%2FPJvGNHE%2BmSrcAxzokmBWLKQnIp4Et89BsBeoAlpfA%2BOUht2aUM56AJ6oH12sw7VmshFmclAlkDgzjj89prokzFV92IVXZB9IFAgjgm%2F1B4NYI2F7BFncw2G073iqjuxqRZtJsU9G94KPAjyz%2FI4%2FqO8QmR25Qdi4dpw25FYLRMtYlxPNSHn%2BBT%2BZ074ootOvoHa%2FA7FJ2wyt7BrLzC8eDl3zpKJ4caPdXWOXk88U2UIVPoZQt38Vp%2FLEn2lc%2FMB50Vav%2FIM3NqJjsyDhtpjfO1jvtV3VM4LWd2Kpmck1mk2FpwrEKggsz8NvWrR9MBgqOxy%2BXQsEPTlvzx6DLqVtp9VZQqa7Kc6hrNphXq0iYJWIa1haG%2Fi6qYQmJ71T5nW%2Fx0zrxCV8iK3uC7UI2EVzCWI0719M7KApziD2Mv%2FM5ls9oWWHIbgfdWQzoLrdfAE39NP41bst2jRSRdvVxOovpjdGAelbyPzNOpANNUdnbtKXDXiRFU0oWQlkYvgfMbzdzi9XQRb1jDtpC0nglS4qkthdQYI1%2FFTFTJTNMACR5LaGbs8oi9jXs0z24CrHjRH7TOlEmoUwKWb3eJ9mR34e81hgqt3hJecJiSis6cZ6RI3toY6W%2FiXmIAZAOIlndbF34QEc%2Fq91MOz%2F3MkGOqUBKRxcVR12yNgYZReuDF00c6slu6g0bSk8keb4JF0BIsa97lYlCTzPr1ALW9sos89YcJLX3KmrUJNIsMptcdAaP4RN2LkMIerYJ4kp%2FjT%2ByQrNIQtZs3xHEGkeDNDxGZojGPPzPZLYsvwVqLhnLN8%2F1hYM%2FopT253lQNSBuhq8Gemi%2F5oNtx9CmpKe6%2FVzGWvsxjriHKg%2FaVjYF0%2F%2FG%2BXNRObbupii&X-Amz-Signature=3051e44049c74bdb3a1a8830e416189c8d4e9eb26491a602e1d56936be824acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OO7BB4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXPDtox0%2FpmHBtH4lsEIfpkltZWpC8q3jX%2BqVS%2FJrQ3AiEAqY0JVCtXjJkHymRw79NEEMcYIMwpSXT3sx3IJ1YG1yEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOjImU%2FPJvGNHE%2BmSrcAxzokmBWLKQnIp4Et89BsBeoAlpfA%2BOUht2aUM56AJ6oH12sw7VmshFmclAlkDgzjj89prokzFV92IVXZB9IFAgjgm%2F1B4NYI2F7BFncw2G073iqjuxqRZtJsU9G94KPAjyz%2FI4%2FqO8QmR25Qdi4dpw25FYLRMtYlxPNSHn%2BBT%2BZ074ootOvoHa%2FA7FJ2wyt7BrLzC8eDl3zpKJ4caPdXWOXk88U2UIVPoZQt38Vp%2FLEn2lc%2FMB50Vav%2FIM3NqJjsyDhtpjfO1jvtV3VM4LWd2Kpmck1mk2FpwrEKggsz8NvWrR9MBgqOxy%2BXQsEPTlvzx6DLqVtp9VZQqa7Kc6hrNphXq0iYJWIa1haG%2Fi6qYQmJ71T5nW%2Fx0zrxCV8iK3uC7UI2EVzCWI0719M7KApziD2Mv%2FM5ls9oWWHIbgfdWQzoLrdfAE39NP41bst2jRSRdvVxOovpjdGAelbyPzNOpANNUdnbtKXDXiRFU0oWQlkYvgfMbzdzi9XQRb1jDtpC0nglS4qkthdQYI1%2FFTFTJTNMACR5LaGbs8oi9jXs0z24CrHjRH7TOlEmoUwKWb3eJ9mR34e81hgqt3hJecJiSis6cZ6RI3toY6W%2FiXmIAZAOIlndbF34QEc%2Fq91MOz%2F3MkGOqUBKRxcVR12yNgYZReuDF00c6slu6g0bSk8keb4JF0BIsa97lYlCTzPr1ALW9sos89YcJLX3KmrUJNIsMptcdAaP4RN2LkMIerYJ4kp%2FjT%2ByQrNIQtZs3xHEGkeDNDxGZojGPPzPZLYsvwVqLhnLN8%2F1hYM%2FopT253lQNSBuhq8Gemi%2F5oNtx9CmpKe6%2FVzGWvsxjriHKg%2FaVjYF0%2F%2FG%2BXNRObbupii&X-Amz-Signature=0350188a00245bb546f77c55d682df1d325647d94d96a3dbb7da4d39e3578968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
