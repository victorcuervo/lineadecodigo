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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSYXCT5W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5dzzURuyHxmM5y4aPmOShQk3rlVwa1JDlSeogGKvd0AiANY1%2FvB9sUn4Uz%2BxGCiO8mLRJ3Y5azLIAI0QxPjARIeSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM92rWfHCfbH4R%2FKs6KtwD1ETd9Rcv2RweijMUoAynHGdM0V0N20aKZaUbD%2BvhnUjcbF7PgVgSfW4%2FLDNHpp2N%2B8pNbqYfrPFAndcjhXQo5OgP2zhbgRIZnICkn3pnjEMILaK%2FJLPwVAoWDDBsBG%2FYxKHRFnln1zMIazlZjdMehFdBWcoSBzmu3I5%2FxPZL13RA89w2dUcu9ugQk3bilYw1NqXDQwXOSlNq31NDBujrP1bD8MHpYDCZb1Ig0RyDbOBzPmbQXnV998ZA3BOJuUn%2BjMlnjjG0Sxqhz%2FCDyTXbJSBtEsGFKcMnEF2h3OC8p46wZGkYftRaYwEmFNEBviEDTrF%2BRqqToQDLE1s25F6s2j2KM%2FNenMTMtrLH5kJlEM699omn0kS1clb6ILGndEdOfqJhHWhhREQWUOqoPOXWORf9n9da4fOtJqVQWBH84vpu5%2FfT%2B8d2SIHQRmzCU1zgVom%2FbAoahDuTQW1SGqJ9B30vrqIcfbRnnCkSt%2FNNSpmGiHshl13CAPhrqJ8CqJf2GRic8%2F%2FBsAHCOWBbX5e33etoGnbtg4s5eRJ7p2xPqzYaXnGDNUt6%2FH%2Bm8%2BmIKBlkm3vr0EbQ%2FueSykMHxnNkeJg12MMeYLsXrxkZ4cVCR73usypIoZX52arL6cswz7eJygY6pgEVE0DXPEQBX2ulab9ZgxY%2FNyNtSPosDEBESjeaXeRIfqNk%2F3lYuq9ocnmEkvVx7Zk5kOA2cf1OYEji9Bbz6ZyqkEGldYLqp6zTq%2Fx1tl9oTf%2FfsmF3LiBEhLSI9JjgUT36qon5gv1%2F6lPLHq8j94p%2FiXFPd2z3O3PcZHWestAHPwrFaYpzRIPpBznrGU3Wvlu4vOsSs%2FbpnWRZ3XeVduP%2BrS90M86v&X-Amz-Signature=bf40b25f386b5d05d272c0070640c8fb8711f20e3fcf71e06c66e2d111817764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSYXCT5W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5dzzURuyHxmM5y4aPmOShQk3rlVwa1JDlSeogGKvd0AiANY1%2FvB9sUn4Uz%2BxGCiO8mLRJ3Y5azLIAI0QxPjARIeSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM92rWfHCfbH4R%2FKs6KtwD1ETd9Rcv2RweijMUoAynHGdM0V0N20aKZaUbD%2BvhnUjcbF7PgVgSfW4%2FLDNHpp2N%2B8pNbqYfrPFAndcjhXQo5OgP2zhbgRIZnICkn3pnjEMILaK%2FJLPwVAoWDDBsBG%2FYxKHRFnln1zMIazlZjdMehFdBWcoSBzmu3I5%2FxPZL13RA89w2dUcu9ugQk3bilYw1NqXDQwXOSlNq31NDBujrP1bD8MHpYDCZb1Ig0RyDbOBzPmbQXnV998ZA3BOJuUn%2BjMlnjjG0Sxqhz%2FCDyTXbJSBtEsGFKcMnEF2h3OC8p46wZGkYftRaYwEmFNEBviEDTrF%2BRqqToQDLE1s25F6s2j2KM%2FNenMTMtrLH5kJlEM699omn0kS1clb6ILGndEdOfqJhHWhhREQWUOqoPOXWORf9n9da4fOtJqVQWBH84vpu5%2FfT%2B8d2SIHQRmzCU1zgVom%2FbAoahDuTQW1SGqJ9B30vrqIcfbRnnCkSt%2FNNSpmGiHshl13CAPhrqJ8CqJf2GRic8%2F%2FBsAHCOWBbX5e33etoGnbtg4s5eRJ7p2xPqzYaXnGDNUt6%2FH%2Bm8%2BmIKBlkm3vr0EbQ%2FueSykMHxnNkeJg12MMeYLsXrxkZ4cVCR73usypIoZX52arL6cswz7eJygY6pgEVE0DXPEQBX2ulab9ZgxY%2FNyNtSPosDEBESjeaXeRIfqNk%2F3lYuq9ocnmEkvVx7Zk5kOA2cf1OYEji9Bbz6ZyqkEGldYLqp6zTq%2Fx1tl9oTf%2FfsmF3LiBEhLSI9JjgUT36qon5gv1%2F6lPLHq8j94p%2FiXFPd2z3O3PcZHWestAHPwrFaYpzRIPpBznrGU3Wvlu4vOsSs%2FbpnWRZ3XeVduP%2BrS90M86v&X-Amz-Signature=fc2abfd1f01054a90cbaac4334ea8b8b530e257e924c9bb3d1e58acc26f0c3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
