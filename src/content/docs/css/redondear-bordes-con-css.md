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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVSJNA6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5M6Y30Ycfr5Xwr%2Ftu5o7DGByp9Ub6NtJleN75sjBnsAiEA0xiiGbq2jaGKnxI%2BwU6pbyFgOy9fPWTMt6uidbBfDlIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIS%2FgzvD2duXWAa0dSrcA8VqvlVPR4AZfN1IONtTORrvJzrhX0bktoSmSQ7F7rMxM2PCxHliqyvoVzMuzONhaUaEd%2BoMlZnQSENNRIbeCOdlehhBhkMbv77yzrbbYmGopnrDoMLC%2B%2FPLsuVHAGVVnAxaCavD9avGVvTq6N%2BGmyzU2qF2XnFhY1nhSHUI1zSDjsICo2gkXz84IA8a44nncfm5FE2MBG3EVoBtwFEnMbq8EgQp0TqplEB9svBPMZmTuz2Stk48xkwMobPUBv9k4NUaS8leKP1F%2Bhn6LEx8BmUFSblvjr211O%2FNify5PW22Wp0ubzM5gKRl2N091Kf0SuQxGlxNgHjMoJsdDAdnOUbSH6BeUiDLFV%2BAhUQPDwktSZ%2FLwpwvs4YAhmXB5%2Fb4YVLWdxg0f9iKGgCEO7LeEGv7zcjKs4nlVwQV7JSnEPyRBeUd0HWLf%2Bv61otTPsM0D8L72hNOM2l2bNOBcXpfUJLh%2BpH7VbleFgGmK8aIMjA%2B6aIQ5v%2BwBMWYAE5yNT3KDdVg2x2RmMDOdoBYBypYQcDKtk7O8mVFdsrbdzZEJOumIIPIESvm%2Fco3%2FVJJ4RbHseXcBNvyvJz7ZfGNKJyP3DZGaRDSl6742F3XmA6w48G5X3AyhchcR%2FFtciYeMPKJ0MkGOqUBuyctw1At4%2Fzbxkqxea0EldsLdTxSM%2F7H2RNQaiDqvs%2BzMFP0ioqP6VJ5Vt4QBETN2ajtNdn4rSEcdwMB1jjs1Mn157jrtjckpYiuW7lbzgqk17p2TeL9XghLMjM8Q70CPJ9vI9QG%2BCfbECbtzuxcDqQQur%2FFMlUFeTIrNVU9GkeyKdzsll7CKbo8764N210HRcA3xyiqxQNnpjzvBbG5jAiB3Nqw&X-Amz-Signature=71a556675102091f08947fd15e9a15816db7102dea0cdee6bbfea2031e229458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVSJNA6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5M6Y30Ycfr5Xwr%2Ftu5o7DGByp9Ub6NtJleN75sjBnsAiEA0xiiGbq2jaGKnxI%2BwU6pbyFgOy9fPWTMt6uidbBfDlIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIS%2FgzvD2duXWAa0dSrcA8VqvlVPR4AZfN1IONtTORrvJzrhX0bktoSmSQ7F7rMxM2PCxHliqyvoVzMuzONhaUaEd%2BoMlZnQSENNRIbeCOdlehhBhkMbv77yzrbbYmGopnrDoMLC%2B%2FPLsuVHAGVVnAxaCavD9avGVvTq6N%2BGmyzU2qF2XnFhY1nhSHUI1zSDjsICo2gkXz84IA8a44nncfm5FE2MBG3EVoBtwFEnMbq8EgQp0TqplEB9svBPMZmTuz2Stk48xkwMobPUBv9k4NUaS8leKP1F%2Bhn6LEx8BmUFSblvjr211O%2FNify5PW22Wp0ubzM5gKRl2N091Kf0SuQxGlxNgHjMoJsdDAdnOUbSH6BeUiDLFV%2BAhUQPDwktSZ%2FLwpwvs4YAhmXB5%2Fb4YVLWdxg0f9iKGgCEO7LeEGv7zcjKs4nlVwQV7JSnEPyRBeUd0HWLf%2Bv61otTPsM0D8L72hNOM2l2bNOBcXpfUJLh%2BpH7VbleFgGmK8aIMjA%2B6aIQ5v%2BwBMWYAE5yNT3KDdVg2x2RmMDOdoBYBypYQcDKtk7O8mVFdsrbdzZEJOumIIPIESvm%2Fco3%2FVJJ4RbHseXcBNvyvJz7ZfGNKJyP3DZGaRDSl6742F3XmA6w48G5X3AyhchcR%2FFtciYeMPKJ0MkGOqUBuyctw1At4%2Fzbxkqxea0EldsLdTxSM%2F7H2RNQaiDqvs%2BzMFP0ioqP6VJ5Vt4QBETN2ajtNdn4rSEcdwMB1jjs1Mn157jrtjckpYiuW7lbzgqk17p2TeL9XghLMjM8Q70CPJ9vI9QG%2BCfbECbtzuxcDqQQur%2FFMlUFeTIrNVU9GkeyKdzsll7CKbo8764N210HRcA3xyiqxQNnpjzvBbG5jAiB3Nqw&X-Amz-Signature=3536892ff278cab643f6204927ea09b63d3087846c160a18771bf093a3a07a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
