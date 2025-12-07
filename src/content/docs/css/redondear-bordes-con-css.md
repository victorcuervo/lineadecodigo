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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X272VXJC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf8y5unZt5kVm2mc80jsnbhnRgD0IlqwOMfh6mFh4GPwIgBKDw6aJ4LzgJB5zVNbFRAk6AZMWGzRW6iOLByz0MZSsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeakB%2Bq%2BjmK0YOSvircA1MwEFBfuXy5r4ylW74up3TbSUyM7iOwEBg1jqjL0L60OGlXSMfMGNU3aJdPnSwJgcAUG%2Bru97%2F8a6zQiFPp0Vdt4EQ4dcvaUMCNia0KIP3qkbKeGrG0HVQ2SZ9g5rH2OJSmAof538gv9W2GrxD%2Bz%2F1Dk7lRlVPBqBaN7hFNa8Zvt41IznncJ4Xkg5F0jmIkxthBUHSK4uOmsejbeQlis66fDuw35jFsqgApvinEJheJOCAB%2FvtVjPtfTC7FMTvRY%2FnLRcJq0gMj4qI9mXJRsFiPRh1m6EKwSOvWVhxT%2BND6ZYgYkiZycU%2FA8XzTk2C5ihPtffV50s6gflrJyBJgismjlOOFXYdONlA9vIIajkK5L48%2BFnOLkseabhLpK07wGJayUp%2FLR87mCwnMXYg03Fhufb7o4L2tZFbwBBrIkV3RZDiic%2FFWzohXp8c288n7kdWEkATcaUuFUgNz2%2BjO6ILCTmaxfJ9HvHGlPG8LvM%2Fyfu8XH3RQRkvqMT1GbYfPcKw5K56Fd6BBchlccORJtJiol5aYWRGIW9btdq54XWHr27vaDZkHVTDd8BwL4BTCCCbsCMxfXjzfMzv0e34RCmTWEmllDhD2InPjxqJBUQhTowJRhJNi6Cu%2BAM0xMMa91skGOqUBz5ThP1nhVzg2T2gUTkkt61rFAzFy6VBV22konL406et9xLmJ3du06MAl6%2BeDk5rtSF4kr2FyByu5jGJWKAcXtqpTxBra%2BKDwn3ft3%2FfgQamfKKcXw9lxJasPPqjCGIFX2mkFkManfwX9F14dae9%2BERiIzryR1orhQC7bzIjklljq0xCoF30Kzz6thVekiuG37t%2FfyDVUvWppZ1yaX9wuNnZyijFg&X-Amz-Signature=7ddc0b12c57cd1d6853e3b323e3f4770c04408578537290825bc1d7d40a7a3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X272VXJC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf8y5unZt5kVm2mc80jsnbhnRgD0IlqwOMfh6mFh4GPwIgBKDw6aJ4LzgJB5zVNbFRAk6AZMWGzRW6iOLByz0MZSsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeakB%2Bq%2BjmK0YOSvircA1MwEFBfuXy5r4ylW74up3TbSUyM7iOwEBg1jqjL0L60OGlXSMfMGNU3aJdPnSwJgcAUG%2Bru97%2F8a6zQiFPp0Vdt4EQ4dcvaUMCNia0KIP3qkbKeGrG0HVQ2SZ9g5rH2OJSmAof538gv9W2GrxD%2Bz%2F1Dk7lRlVPBqBaN7hFNa8Zvt41IznncJ4Xkg5F0jmIkxthBUHSK4uOmsejbeQlis66fDuw35jFsqgApvinEJheJOCAB%2FvtVjPtfTC7FMTvRY%2FnLRcJq0gMj4qI9mXJRsFiPRh1m6EKwSOvWVhxT%2BND6ZYgYkiZycU%2FA8XzTk2C5ihPtffV50s6gflrJyBJgismjlOOFXYdONlA9vIIajkK5L48%2BFnOLkseabhLpK07wGJayUp%2FLR87mCwnMXYg03Fhufb7o4L2tZFbwBBrIkV3RZDiic%2FFWzohXp8c288n7kdWEkATcaUuFUgNz2%2BjO6ILCTmaxfJ9HvHGlPG8LvM%2Fyfu8XH3RQRkvqMT1GbYfPcKw5K56Fd6BBchlccORJtJiol5aYWRGIW9btdq54XWHr27vaDZkHVTDd8BwL4BTCCCbsCMxfXjzfMzv0e34RCmTWEmllDhD2InPjxqJBUQhTowJRhJNi6Cu%2BAM0xMMa91skGOqUBz5ThP1nhVzg2T2gUTkkt61rFAzFy6VBV22konL406et9xLmJ3du06MAl6%2BeDk5rtSF4kr2FyByu5jGJWKAcXtqpTxBra%2BKDwn3ft3%2FfgQamfKKcXw9lxJasPPqjCGIFX2mkFkManfwX9F14dae9%2BERiIzryR1orhQC7bzIjklljq0xCoF30Kzz6thVekiuG37t%2FfyDVUvWppZ1yaX9wuNnZyijFg&X-Amz-Signature=e99e369a04a6c6f14848dae92f5834a3667e328244164d617977a316effbfcec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
