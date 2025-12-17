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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G6MGIWD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQ497eBvzF%2FYSE6hfUskj2Y3FH3n7bPCmfVbqjXe7mXAiEA2jUvqE%2FADFnPaPU8GMyyK7iTB8SPInx0e63sKdNdJ0kq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKVIoazaKjwuWvza%2FCrcA%2BuuubUcME2qNAAs5nXJhf3bj5mM48Boy29AI1zcqsykec9Kmq0Wn9DUU0LpAbvOnRDwP7uBAs2fNVmxOLJf71ceBUZyOjgF6oeKokkNUh3PFRJSLmyIhM2nyb1yfsQykx1bKV5iR1ZZOQfJKT%2Fk0RjTVlJLPk%2FAZYLTIN4EaFSqP%2BB%2ByC%2FwkQZRRVeaz31tVCVI0Zngh%2Ffa0iXAPy%2BbTxDA%2FJvqmw9CLj5IpvQoTxY5mP1GYdq6lMer0ZVJL9m%2FshfXNuB%2BDaJoWUxCmuezYTWqNAfNi0SvKwFmltNGzn5uN6L7d3qjfHSGPEHoN4B9Ohbujapan93xB%2FX%2FRLr0HfFZ0xcZt0kEFNmTcg0F5jA1W5QAteXLWXLVPSGeao4L36Pg1EdZjdEMmNxcWwZxUnm1G%2FXzmOQNOSxuV8viD%2BQYWaUVUHVyQRxMXEFXjuQH215Dw3r35URSrG49ZFCgvYDIchw%2BjQVO8kHuypuUUoC2KmQOjZQUBIFXH6tErFeaqUVevRh6IwYloSw%2FniJIIPB315SnSIxSPFBJTpsjSiQJ4lkbz%2BvGylHqGY5qvJxwVH7fFB394nk3UsaipDsxI6CZ3axLVsfG4qQ6s8S2rPSQi1Ky%2F8kA1Y%2BXEYIRMMaOisoGOqUBJb1LUQF%2B08%2BpscCsCEBSWu2WWb70CkJR1Xuwtgg44pRwrWN%2BjXqtdRzw%2Bj%2BDGp6OTRXSDuKna1U1oNQfx3dmPj%2FXON4vdJ5mcGYV9jmtnzCizatIaBAaNdeTm6Ck2aRniN%2BP3tiSzkO%2BW9b8j2tmX2cz5FqyqKiFaQIbjX0t83ZPrGALS8Ox6tiEuWtysKDUn3pWbfO7gq%2FDvWz1YRUuzPY5mZwx&X-Amz-Signature=8359d12bf5f29e67e1d7665f5322240f557ede933206d815df403361097f9cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G6MGIWD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQ497eBvzF%2FYSE6hfUskj2Y3FH3n7bPCmfVbqjXe7mXAiEA2jUvqE%2FADFnPaPU8GMyyK7iTB8SPInx0e63sKdNdJ0kq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKVIoazaKjwuWvza%2FCrcA%2BuuubUcME2qNAAs5nXJhf3bj5mM48Boy29AI1zcqsykec9Kmq0Wn9DUU0LpAbvOnRDwP7uBAs2fNVmxOLJf71ceBUZyOjgF6oeKokkNUh3PFRJSLmyIhM2nyb1yfsQykx1bKV5iR1ZZOQfJKT%2Fk0RjTVlJLPk%2FAZYLTIN4EaFSqP%2BB%2ByC%2FwkQZRRVeaz31tVCVI0Zngh%2Ffa0iXAPy%2BbTxDA%2FJvqmw9CLj5IpvQoTxY5mP1GYdq6lMer0ZVJL9m%2FshfXNuB%2BDaJoWUxCmuezYTWqNAfNi0SvKwFmltNGzn5uN6L7d3qjfHSGPEHoN4B9Ohbujapan93xB%2FX%2FRLr0HfFZ0xcZt0kEFNmTcg0F5jA1W5QAteXLWXLVPSGeao4L36Pg1EdZjdEMmNxcWwZxUnm1G%2FXzmOQNOSxuV8viD%2BQYWaUVUHVyQRxMXEFXjuQH215Dw3r35URSrG49ZFCgvYDIchw%2BjQVO8kHuypuUUoC2KmQOjZQUBIFXH6tErFeaqUVevRh6IwYloSw%2FniJIIPB315SnSIxSPFBJTpsjSiQJ4lkbz%2BvGylHqGY5qvJxwVH7fFB394nk3UsaipDsxI6CZ3axLVsfG4qQ6s8S2rPSQi1Ky%2F8kA1Y%2BXEYIRMMaOisoGOqUBJb1LUQF%2B08%2BpscCsCEBSWu2WWb70CkJR1Xuwtgg44pRwrWN%2BjXqtdRzw%2Bj%2BDGp6OTRXSDuKna1U1oNQfx3dmPj%2FXON4vdJ5mcGYV9jmtnzCizatIaBAaNdeTm6Ck2aRniN%2BP3tiSzkO%2BW9b8j2tmX2cz5FqyqKiFaQIbjX0t83ZPrGALS8Ox6tiEuWtysKDUn3pWbfO7gq%2FDvWz1YRUuzPY5mZwx&X-Amz-Signature=d5fbc85555aed032d4b9f807c1108182f18ae94e2718be40ba29fb0a6b0a2beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
