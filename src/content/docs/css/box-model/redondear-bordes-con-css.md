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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3JFD55%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5g8IXnNJFbNGjVuRg%2FWajDvUaeCTB2tfkaDZED5sYKQIgCdIP3TG2tnhxU76BnMP4Loa0EaTB3650LHgQdONyGC8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCVhemYe9ug9P%2FuXcyrcA7x%2FD1ORNy90%2FAe604a29VqtE4wIpYVU6F1YXOAx9BQfYN9KyzSo%2BhT7E4yEVWtmnMrlAg47aFm9gtJ4bVwQWFLoDD5o3lwM3J6ZpaILHHMb9yZHfOr1ee3ZP8moaGCfgNsmH%2B3jeLNod4x%2BsUpWsyGZ0Pk6zkgcHc1JZBHLkDz1Flyxk7SMxUen5ZVuIfLvyp%2BrAP781%2FCINr9GgA%2Bc5%2F2%2ByO1oCBgJhB1khZCyKJBuHK01B2SbxMvolAZhNNSILYY%2BhB6YZd3V5vdWXRBB%2BFpzxjF33InGa0flv9dARD4avNtVMoW%2Fdocq%2FQiLXCXKh%2FCpoD4%2FsF1FcBSsL52Ra1zQauWe%2FVWUs24Mtxpg%2BFtEbEKkB3AcfSp%2BQfsoK1p6omQuhCHKO9IGnjQHw8uQLW2rFk9VW7MdSK8tNX0d%2Fi62UjkCSLm0AioOp7Z1GcMQSWrZoGjZcnZx%2FUZSH82uC6PrR2jSCjRtDdW%2FWXvlg0XhyMP4DIgTSrBMciy1eG0lyOvCf40WCnRdJHwzRd9rtaaKt4i1xEOMQffIrwKfz2AH52kVyeH36rxNLAuqTshP4nM24P5R0kigDYw3aogYlJoAySCaBqXnBljxQaZ6J%2BHiWxTINUhNO5pNALJOMO3vicoGOqUBGzjhZjbthS4zrMHpmuEfm9y62nzhO62mbOvdedZV7wU6aMgCE7B6QoLzQWSbhrNoUEl9M1r4C%2F3CV%2Bq7cO6LIpWD91Ad9mhVFkr4H4bnxHt2D4UWYYkvsjRYcZBz0%2Fld0vlLJoh7goNwC5QNHX%2B%2F7dhHDFbGo%2FmGCisRX51gyzQl1oSh0wxSg%2BeLD46DjLRZZLMORoCEQVkCGpb%2B3po9k%2BxduaZR&X-Amz-Signature=a3ff5f5099d22532da9e8b9737405112d7a41a64e2a585e44e69aa8d71aaac80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3JFD55%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5g8IXnNJFbNGjVuRg%2FWajDvUaeCTB2tfkaDZED5sYKQIgCdIP3TG2tnhxU76BnMP4Loa0EaTB3650LHgQdONyGC8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCVhemYe9ug9P%2FuXcyrcA7x%2FD1ORNy90%2FAe604a29VqtE4wIpYVU6F1YXOAx9BQfYN9KyzSo%2BhT7E4yEVWtmnMrlAg47aFm9gtJ4bVwQWFLoDD5o3lwM3J6ZpaILHHMb9yZHfOr1ee3ZP8moaGCfgNsmH%2B3jeLNod4x%2BsUpWsyGZ0Pk6zkgcHc1JZBHLkDz1Flyxk7SMxUen5ZVuIfLvyp%2BrAP781%2FCINr9GgA%2Bc5%2F2%2ByO1oCBgJhB1khZCyKJBuHK01B2SbxMvolAZhNNSILYY%2BhB6YZd3V5vdWXRBB%2BFpzxjF33InGa0flv9dARD4avNtVMoW%2Fdocq%2FQiLXCXKh%2FCpoD4%2FsF1FcBSsL52Ra1zQauWe%2FVWUs24Mtxpg%2BFtEbEKkB3AcfSp%2BQfsoK1p6omQuhCHKO9IGnjQHw8uQLW2rFk9VW7MdSK8tNX0d%2Fi62UjkCSLm0AioOp7Z1GcMQSWrZoGjZcnZx%2FUZSH82uC6PrR2jSCjRtDdW%2FWXvlg0XhyMP4DIgTSrBMciy1eG0lyOvCf40WCnRdJHwzRd9rtaaKt4i1xEOMQffIrwKfz2AH52kVyeH36rxNLAuqTshP4nM24P5R0kigDYw3aogYlJoAySCaBqXnBljxQaZ6J%2BHiWxTINUhNO5pNALJOMO3vicoGOqUBGzjhZjbthS4zrMHpmuEfm9y62nzhO62mbOvdedZV7wU6aMgCE7B6QoLzQWSbhrNoUEl9M1r4C%2F3CV%2Bq7cO6LIpWD91Ad9mhVFkr4H4bnxHt2D4UWYYkvsjRYcZBz0%2Fld0vlLJoh7goNwC5QNHX%2B%2F7dhHDFbGo%2FmGCisRX51gyzQl1oSh0wxSg%2BeLD46DjLRZZLMORoCEQVkCGpb%2B3po9k%2BxduaZR&X-Amz-Signature=946875985016248716fe6167f2cea5d47d54be4e50dc76c8f51d26b2f5f22d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
