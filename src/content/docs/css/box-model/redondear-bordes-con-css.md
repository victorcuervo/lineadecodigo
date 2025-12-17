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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEY2XRAS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwzVo95WxZXo%2B1L1B6EDig53Uhfb0xR8FN5p1XjsXGJAiAmNwN7lWNJM09bzY7PKu8cjPNRrxb99BCVbYKxJ0xylCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM9Zy%2B4TuB%2B59TIh9sKtwDYlzwPWBOhaYPZZNCPwTufbnx%2FGi8bKJ5wYib48u1z6yFhnUDEnxY4WEyGkVqfF%2BDxV7blWvjhEMsHX%2BDeGKXLThKakdEI9yM38DKfgvHUv6YT9%2B8fjllFDo01OeBgE%2FJdUQ%2BW%2FTrWE2rUZ83wssjDBUxtacBtNDmwnsoPT%2Fq4KDgY73UB0bcGwxUVngVy2pOvQ5xOWzl1X3DUneCrxj1luiZFYoIaCMWXH9yIqGyFX1Fb8zZ%2B2YuuWUlIdZdYzntSE51NXiAIPpH1pEzd%2BogMY0Kn2WydinkykC%2F1gML9pxyu9%2BRPmdba9iydbNXJMlgO5GJjOlnloqcksq44TZLo0zEyKHDQue36aS3WUFkEoFfjgk2pAqJGluuX1M62QZ2Vho4cIHIcesQ%2FTG09eUFXa3N%2BnYFLOtcssBBlCdjXV2UYI2ApPTpyAlIzCVtN1WNGaQPCbmTRw%2FS%2BiWYD7FI0%2FrlaFh6BqHI8wq8fjuyG6P0NfaatAdnI3B4utZnyAXoLfRMNhYmc86dkyhWv3yZyns4aBbo8iE1wJ3lcL5GKkjJtByoGFa7QHLEvcg9KET3I1gg9WZ4yF0aY3uUpUUXVrrIymVV5I%2FAdNFC%2F%2Bx4nLP%2B0434Vqipv10kQVsw75aIygY6pgG0H3p608veipShax8ihE%2BzLnIAcVBJspNIMpQQFqvb%2BTqJdWaEwfwjPXQ8bA%2B%2FW51lhsjn%2Bq9sX5pxWi%2Fn01sggmFpzuOc5QCpOEvfnxzRmR0C0%2F7PUvYIjeUQEaN%2Fknlc8syP6mlC5uK7BAVTpJ3SRUvbuPwUY8JhSZTwHC0v8UxbrzLwoVZd0k1p2yPJQwnPMtG%2FleuYmM%2FfP0qFuT6K0nRmruBG&X-Amz-Signature=be2d6706fc77b1288a92f0bc6690a6577ed18adf0166c64f26309ccada0a1305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEY2XRAS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwzVo95WxZXo%2B1L1B6EDig53Uhfb0xR8FN5p1XjsXGJAiAmNwN7lWNJM09bzY7PKu8cjPNRrxb99BCVbYKxJ0xylCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM9Zy%2B4TuB%2B59TIh9sKtwDYlzwPWBOhaYPZZNCPwTufbnx%2FGi8bKJ5wYib48u1z6yFhnUDEnxY4WEyGkVqfF%2BDxV7blWvjhEMsHX%2BDeGKXLThKakdEI9yM38DKfgvHUv6YT9%2B8fjllFDo01OeBgE%2FJdUQ%2BW%2FTrWE2rUZ83wssjDBUxtacBtNDmwnsoPT%2Fq4KDgY73UB0bcGwxUVngVy2pOvQ5xOWzl1X3DUneCrxj1luiZFYoIaCMWXH9yIqGyFX1Fb8zZ%2B2YuuWUlIdZdYzntSE51NXiAIPpH1pEzd%2BogMY0Kn2WydinkykC%2F1gML9pxyu9%2BRPmdba9iydbNXJMlgO5GJjOlnloqcksq44TZLo0zEyKHDQue36aS3WUFkEoFfjgk2pAqJGluuX1M62QZ2Vho4cIHIcesQ%2FTG09eUFXa3N%2BnYFLOtcssBBlCdjXV2UYI2ApPTpyAlIzCVtN1WNGaQPCbmTRw%2FS%2BiWYD7FI0%2FrlaFh6BqHI8wq8fjuyG6P0NfaatAdnI3B4utZnyAXoLfRMNhYmc86dkyhWv3yZyns4aBbo8iE1wJ3lcL5GKkjJtByoGFa7QHLEvcg9KET3I1gg9WZ4yF0aY3uUpUUXVrrIymVV5I%2FAdNFC%2F%2Bx4nLP%2B0434Vqipv10kQVsw75aIygY6pgG0H3p608veipShax8ihE%2BzLnIAcVBJspNIMpQQFqvb%2BTqJdWaEwfwjPXQ8bA%2B%2FW51lhsjn%2Bq9sX5pxWi%2Fn01sggmFpzuOc5QCpOEvfnxzRmR0C0%2F7PUvYIjeUQEaN%2Fknlc8syP6mlC5uK7BAVTpJ3SRUvbuPwUY8JhSZTwHC0v8UxbrzLwoVZd0k1p2yPJQwnPMtG%2FleuYmM%2FfP0qFuT6K0nRmruBG&X-Amz-Signature=b1ec3ebac2396f9ea1dee7b8a46cb887435857e952004f8d01053e5c566d12f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
