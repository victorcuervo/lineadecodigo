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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CE6ZDM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1SO%2BNabPYLdcnuVintLTM%2FyrpSJtxbYBWQ79P3WpEmAiEAmQVYp1woxtD8YOaRmhF%2By2iT6AfGv8c%2BeqTD6qZAyz4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ%2BMFnWltCETdrINyrcA%2Bf98xn24mS9GgZyyozJut3Ky%2FjT755igz72gao0lbuXu%2FGcm4TgP2gqNGmtiWhpgVsQ6yyuehwEybuS2btCxuYgIcdPiSsr6VX7dVeTJU21lOfsD2hJLnZqHRrytSVCzYvL9JNDg%2Fu3wcW9k%2B9rgaqCEV9T3GvDTbD4T4mJVnnAs9eXtlSLfLteFzvbRMpGBZJcTXBP%2FxqjnUsBFip7aERt5B2muqVRZCPZg9WVxmOAs88Byld8vtmzmDiLTxO2qm5jD8Nk3rBB8u2PZAnOjY9i2CO7w%2BOvsD3UfZfr4l%2Bb%2F1zOKmseTrxWDuw%2BMh0mQJYeJCYRmEBGPA3uMmeiBWelhDfgjjlkLoNcdA%2FiszAwyo%2F4uOKhu6alp1Peqfdg5BPWP%2Br2aX9KFR8qHQ85GV5hIPL%2FSCxuUK9GhOrXcBV1VV8ye1yRyzupZYVEVacRZQZrQmFyP0PR7mnJYT%2BtFKcW02jrQVhaX%2FAEmjOOS3b%2FSyN%2F3PYct1PlpYolrA0Nl3%2BOrBvgrNNAFFTqRAukxL5ieAaUv1nq4nyNmd%2BlTgPJjV1aaaE9pKg5x%2F3WcAP1mU6N3Ce98WhILYl%2FFzw4UyDr%2FFn7weASYuR2gwTjEyWS%2FTQJdnzFoCIUWLLuMPvs2ckGOqUBo2RP15%2BOiibqytvawHgkav4KA32uQ0LNS0enzuyRq0SPoMvTBHfmU%2FYPrsvz2GpTWT%2BPETwYWpDftPd7fW4te%2BAkDEcBsMBZ6quv7G6QTfVy4JHs5vWC1ctUVY5euH%2BReokvMS3iTrCHDFNRQUgd760cXBqEc1msXZLK9LUnh6tPToT3PS1ToPZEhFAF5hV%2F29Jgo784kvX7FrIBjn%2F8qzvu1c%2Fv&X-Amz-Signature=64d5f5218bc76ddc3e44dfe4d7b42cfa844701784790b73f78201cc2b2d05321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CE6ZDM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1SO%2BNabPYLdcnuVintLTM%2FyrpSJtxbYBWQ79P3WpEmAiEAmQVYp1woxtD8YOaRmhF%2By2iT6AfGv8c%2BeqTD6qZAyz4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ%2BMFnWltCETdrINyrcA%2Bf98xn24mS9GgZyyozJut3Ky%2FjT755igz72gao0lbuXu%2FGcm4TgP2gqNGmtiWhpgVsQ6yyuehwEybuS2btCxuYgIcdPiSsr6VX7dVeTJU21lOfsD2hJLnZqHRrytSVCzYvL9JNDg%2Fu3wcW9k%2B9rgaqCEV9T3GvDTbD4T4mJVnnAs9eXtlSLfLteFzvbRMpGBZJcTXBP%2FxqjnUsBFip7aERt5B2muqVRZCPZg9WVxmOAs88Byld8vtmzmDiLTxO2qm5jD8Nk3rBB8u2PZAnOjY9i2CO7w%2BOvsD3UfZfr4l%2Bb%2F1zOKmseTrxWDuw%2BMh0mQJYeJCYRmEBGPA3uMmeiBWelhDfgjjlkLoNcdA%2FiszAwyo%2F4uOKhu6alp1Peqfdg5BPWP%2Br2aX9KFR8qHQ85GV5hIPL%2FSCxuUK9GhOrXcBV1VV8ye1yRyzupZYVEVacRZQZrQmFyP0PR7mnJYT%2BtFKcW02jrQVhaX%2FAEmjOOS3b%2FSyN%2F3PYct1PlpYolrA0Nl3%2BOrBvgrNNAFFTqRAukxL5ieAaUv1nq4nyNmd%2BlTgPJjV1aaaE9pKg5x%2F3WcAP1mU6N3Ce98WhILYl%2FFzw4UyDr%2FFn7weASYuR2gwTjEyWS%2FTQJdnzFoCIUWLLuMPvs2ckGOqUBo2RP15%2BOiibqytvawHgkav4KA32uQ0LNS0enzuyRq0SPoMvTBHfmU%2FYPrsvz2GpTWT%2BPETwYWpDftPd7fW4te%2BAkDEcBsMBZ6quv7G6QTfVy4JHs5vWC1ctUVY5euH%2BReokvMS3iTrCHDFNRQUgd760cXBqEc1msXZLK9LUnh6tPToT3PS1ToPZEhFAF5hV%2F29Jgo784kvX7FrIBjn%2F8qzvu1c%2Fv&X-Amz-Signature=19efba4dd626ca7738b02bdfb511b0fae1c96e05acc0aa6371f3bba15085c227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
