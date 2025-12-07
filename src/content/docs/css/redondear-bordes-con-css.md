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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOQ42ME%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW3sxBiB7EzzPyAgRAXIekRygjkt0z9TMf9%2BQE%2Bso%2B0QIgeq63a6LFcquhvbHcRTg8K6BJhi%2F3Q0rh390qPTBhQ3UqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSN3AEPfjxfItmgyyrcA6SrdW4VIwt71eGZTqyzGrWKJkp1LruBqNJzbNl7almxrR24py8dDXOvlJy%2F6SqJfrC7pzEtuNWqMgyF6MzVlhHx0KSXaY3yBLm7sXskxvD5ZCT4JlYEhyZygeZ8hbYa1KdV%2FHXN0MZXTfzh0DIJK%2FVLVLsGEQZjmtiogNTecrH7zT0VjJV%2FcRa83BtjjlS9BVfp7UfQp%2BeErwoPC%2BBHkj%2BQQVvGdBha1C9NLw41y%2FMeg4hD2N0GLaSsl4uzcf6%2B2c0QMyWKJbYWawG9WrcvejzuSYJIqpaKzCTHCWtKBu54PxLWvDoKo3ES%2BJVnmaU7TuFPYzFYZ%2BfwvB9tu5DtRhOTkgGpx2R6x43IXQB6OKWXKE2iSrzbtIpUV9LlwXkkafaoMcm%2BiAF0AhuBi3TWJpkCweVWf6TRMhrZDIrnIuHifib1dwxfBsWaRgAEqDGsxnlIMLPa7pODMZ9E1uqiZp5rrVz3LoKeb1zCiG9ZUa4HZAaYrOj0zfBM138rc2WiyfPlcRk1drw0QWSBeY8wlp1wGB2dWcxXtYHm8v0rpe3NcB8LqjvL49VwV9bfuepUvXL5tgMan%2Fcno19yXDBxFvfOQyjGX2zbJ8BAB1x5TFdQ4L6XfU%2BebhoXJxKZMOOa1MkGOqUBMrQqfDbghnA%2Ffvr05y%2FmGB2eAzYYSupSlrDtSJQogTeS2ZTxuS9fwmXovrZZZehNG58FYZyU%2F%2FCjPFu72nvC1cBYymQZHC3XUxi1Q%2FpOmQg9Z0I1DBfHdy2igV0U9vDi4%2BeZPUD5UQt%2Fi64tS3XWh4exOBcKGdq%2FTv%2F976Sxw269jbGTjVPunZR7OHzLLIx%2BIxCm2yNYZp9pFem%2BGy%2FW%2BP3sCD2Z&X-Amz-Signature=6e76ad854903c986e39e81b691f34dcd0c2e2a35763692d8fa4a81861fcdead1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOQ42ME%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW3sxBiB7EzzPyAgRAXIekRygjkt0z9TMf9%2BQE%2Bso%2B0QIgeq63a6LFcquhvbHcRTg8K6BJhi%2F3Q0rh390qPTBhQ3UqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSN3AEPfjxfItmgyyrcA6SrdW4VIwt71eGZTqyzGrWKJkp1LruBqNJzbNl7almxrR24py8dDXOvlJy%2F6SqJfrC7pzEtuNWqMgyF6MzVlhHx0KSXaY3yBLm7sXskxvD5ZCT4JlYEhyZygeZ8hbYa1KdV%2FHXN0MZXTfzh0DIJK%2FVLVLsGEQZjmtiogNTecrH7zT0VjJV%2FcRa83BtjjlS9BVfp7UfQp%2BeErwoPC%2BBHkj%2BQQVvGdBha1C9NLw41y%2FMeg4hD2N0GLaSsl4uzcf6%2B2c0QMyWKJbYWawG9WrcvejzuSYJIqpaKzCTHCWtKBu54PxLWvDoKo3ES%2BJVnmaU7TuFPYzFYZ%2BfwvB9tu5DtRhOTkgGpx2R6x43IXQB6OKWXKE2iSrzbtIpUV9LlwXkkafaoMcm%2BiAF0AhuBi3TWJpkCweVWf6TRMhrZDIrnIuHifib1dwxfBsWaRgAEqDGsxnlIMLPa7pODMZ9E1uqiZp5rrVz3LoKeb1zCiG9ZUa4HZAaYrOj0zfBM138rc2WiyfPlcRk1drw0QWSBeY8wlp1wGB2dWcxXtYHm8v0rpe3NcB8LqjvL49VwV9bfuepUvXL5tgMan%2Fcno19yXDBxFvfOQyjGX2zbJ8BAB1x5TFdQ4L6XfU%2BebhoXJxKZMOOa1MkGOqUBMrQqfDbghnA%2Ffvr05y%2FmGB2eAzYYSupSlrDtSJQogTeS2ZTxuS9fwmXovrZZZehNG58FYZyU%2F%2FCjPFu72nvC1cBYymQZHC3XUxi1Q%2FpOmQg9Z0I1DBfHdy2igV0U9vDi4%2BeZPUD5UQt%2Fi64tS3XWh4exOBcKGdq%2FTv%2F976Sxw269jbGTjVPunZR7OHzLLIx%2BIxCm2yNYZp9pFem%2BGy%2FW%2BP3sCD2Z&X-Amz-Signature=f0764fdb432149888010aa184b502a3341ef276d781c118c676c5c5c4072de12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
