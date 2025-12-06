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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQE7ZAYO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMD1UHdZn5NwXrtXjJx3ev0jDWRbS3zkiqpG2qjxCdwAIgYGar1vUvg5Tk2KC4BwiYRRaTvxSGL5S6CPI%2BpsfvIkIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAqKTo9o6uXHRcX2yCrcAy%2BLHkAFfrzCCohb2AT6x2sGGV2GDRQKrjO5D8LFB9gM2AX3IqdpOqAydryPQU%2FTVI2VzHLYyr4XZddBvnz0es2BGHvqVPfGIpnbrFapUze039zW%2BZyoVioamNw9fYc6wmJXhivJ5uRtJkSS7h%2FGsHVfYBjX4%2FB1aW%2BMGDd5dm2EHD5fVdZ%2BXiNOAf%2FSMoIU6mVzWLYQcaj1%2FUBJb4AOQHSUtXj8CAsOjDfHjzIUTs3Bcebcec2mXtlFTXhi%2BXO8udavEpZwdQn45D1G5TAPpwVozCGURLLOomfhBreuQ1nZ1HoYhTdRJzv8qjauP5f0C6Bf4K%2BVX9vEjsKwCgBZg6yg48qEWNg6%2B%2FqZTjJlzGBOVu0X%2FYT0wEvJTnKjpdDT%2FXltGx5rx%2F95CaYevMiXghvTKms8vJ0RWgiPXaQ9WfWMDV8gpuaq8MouoOWklGef7icZPa8DLj6KIpoTBnFk51mHTo41GvTmIytJoitGVGfrXAR4r75738WIj5%2BK8ia57xX2odbm%2F3u%2F4rJBvSPtpKbz%2FnewVKnenxnCWDDS03Xwz1BQkiSZsueAPHV%2BDHIc%2B6a9j6km6wm11oRhFwRrTdQhXf1v5AVEnvFaegMNZBU5pRNGNkd%2FJFZ3XDzmMKDL0ckGOqUBEtJANOeL%2BV2OWcVi0vCWB3W%2BFPAMkbKtdV4DSOmT2%2FqHtMxKLLZ3tHQ6ZAGtKWnuRTOZSn3NTGokdKDibvUzNtlorN1ZDUmLfsRbhYrHjTB9fl0gfJrGLjfPQjsYbDPfG5UNo3WSts0g7Ym%2FSXTqb6F1y8x23fbG%2FHNWA1rTsOYLOl1AdNr4dXK5N%2FkYcnQTxPEG85QTrC%2Fv841YmVBx%2F2Cdz8VZ&X-Amz-Signature=6ded15ed147b0a9492e41c621a647861a380f1e11a4fd29219adbd631dc0380a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQE7ZAYO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMD1UHdZn5NwXrtXjJx3ev0jDWRbS3zkiqpG2qjxCdwAIgYGar1vUvg5Tk2KC4BwiYRRaTvxSGL5S6CPI%2BpsfvIkIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAqKTo9o6uXHRcX2yCrcAy%2BLHkAFfrzCCohb2AT6x2sGGV2GDRQKrjO5D8LFB9gM2AX3IqdpOqAydryPQU%2FTVI2VzHLYyr4XZddBvnz0es2BGHvqVPfGIpnbrFapUze039zW%2BZyoVioamNw9fYc6wmJXhivJ5uRtJkSS7h%2FGsHVfYBjX4%2FB1aW%2BMGDd5dm2EHD5fVdZ%2BXiNOAf%2FSMoIU6mVzWLYQcaj1%2FUBJb4AOQHSUtXj8CAsOjDfHjzIUTs3Bcebcec2mXtlFTXhi%2BXO8udavEpZwdQn45D1G5TAPpwVozCGURLLOomfhBreuQ1nZ1HoYhTdRJzv8qjauP5f0C6Bf4K%2BVX9vEjsKwCgBZg6yg48qEWNg6%2B%2FqZTjJlzGBOVu0X%2FYT0wEvJTnKjpdDT%2FXltGx5rx%2F95CaYevMiXghvTKms8vJ0RWgiPXaQ9WfWMDV8gpuaq8MouoOWklGef7icZPa8DLj6KIpoTBnFk51mHTo41GvTmIytJoitGVGfrXAR4r75738WIj5%2BK8ia57xX2odbm%2F3u%2F4rJBvSPtpKbz%2FnewVKnenxnCWDDS03Xwz1BQkiSZsueAPHV%2BDHIc%2B6a9j6km6wm11oRhFwRrTdQhXf1v5AVEnvFaegMNZBU5pRNGNkd%2FJFZ3XDzmMKDL0ckGOqUBEtJANOeL%2BV2OWcVi0vCWB3W%2BFPAMkbKtdV4DSOmT2%2FqHtMxKLLZ3tHQ6ZAGtKWnuRTOZSn3NTGokdKDibvUzNtlorN1ZDUmLfsRbhYrHjTB9fl0gfJrGLjfPQjsYbDPfG5UNo3WSts0g7Ym%2FSXTqb6F1y8x23fbG%2FHNWA1rTsOYLOl1AdNr4dXK5N%2FkYcnQTxPEG85QTrC%2Fv841YmVBx%2F2Cdz8VZ&X-Amz-Signature=42f0d134063cdc90e97adf2c458cee06ac999d2ae9b67236851c26dcd07f8dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
