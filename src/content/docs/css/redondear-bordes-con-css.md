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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QUQTGXV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgDOXIppOSEPO1r1UcgVsidmyMrnvy7LOOxhpEX8tAVAiEAmDi45kKFj0YgKP90%2B7IrOg72KNgGQnwbG9I0gLtjc5wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ0b4aFuDXQha3z2yrcA1Q7q4BXoH%2FOi8OpY6brtMxmFy79zR%2FcOh8FCwkPgBEO9YFhMZWBSTgTS88JRUGfcscnxB%2B%2BV%2FK50A7uHo2EUV6Xp6Ux657%2BNgascPjwj35zOv2PvCnRcACOwhbaArnWeGrcngjE08Et18JYyyfn%2B2JSMSf7t4j2%2BGFhUm503GQHutdTrEoDSnUh7kNgsYUlV%2BwhY%2BPWokz1fOVJFiwceYGOCYJ6GNSs45%2FCv%2FJo%2BI3uRWFFy1xaWQ99YpljnNq4gLHWllYzSo46xIsNrrBFZBMV%2BwYinXMqqfSCzIxTMcBpxw%2FKU%2Be2D0W2g2ccFS3TMq8lbN5vxfsWVUPPr5bH6GNGu8Qphtp6U5szgjmXRl3%2B2xzlMRnBpyKqmGyKQLK28Di%2FL5%2BBMylj4xHYswQde07%2ByqB9V65HHe57IjK2ckHC2jX5S%2FM9NKuH1gxZvCxr80DNOycSCT7e7xfdhXmyp4eK95opsdw7gggIW%2FHp0f1dl3OAvvBjCLTYvvx%2BhEI311aEFVnOXSk5Ci%2F55s%2F%2FUpQMnTcz35kkbUq%2B1nRCUJ3Xx%2BAfvfjbHAn1i3EMNyyCmYoHqTuOy39d1LPmpbbf5%2B%2BK24hDpPoVjVvLsJxIrYVaKJwM%2FxBt1vVQaailMLbt2ckGOqUBc30qyYA86AJ52igiSSXztNWCTsF6m9llHzs%2FJ%2FowlWuryEFPm%2BzBeXzAhWQyN1itZdp2zntmfoZOgOKF5pTqd%2B6Hx1DUSYpkL0s00LP6uX6BK7x01lj2tHm7Os%2BODlanv44uR12Kue%2BNtXzHi218H2yvAsAOpMPR44DCny0zlRtkVFxL%2BTmSzcLVhtdEcIJRuARrKynb%2BpzzJqn1j0VXSu5wmxca&X-Amz-Signature=d1b82d2fda1f16007aef78b0403a9b14d9b0570153748456f5f5f8f4c9dcd196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QUQTGXV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgDOXIppOSEPO1r1UcgVsidmyMrnvy7LOOxhpEX8tAVAiEAmDi45kKFj0YgKP90%2B7IrOg72KNgGQnwbG9I0gLtjc5wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ0b4aFuDXQha3z2yrcA1Q7q4BXoH%2FOi8OpY6brtMxmFy79zR%2FcOh8FCwkPgBEO9YFhMZWBSTgTS88JRUGfcscnxB%2B%2BV%2FK50A7uHo2EUV6Xp6Ux657%2BNgascPjwj35zOv2PvCnRcACOwhbaArnWeGrcngjE08Et18JYyyfn%2B2JSMSf7t4j2%2BGFhUm503GQHutdTrEoDSnUh7kNgsYUlV%2BwhY%2BPWokz1fOVJFiwceYGOCYJ6GNSs45%2FCv%2FJo%2BI3uRWFFy1xaWQ99YpljnNq4gLHWllYzSo46xIsNrrBFZBMV%2BwYinXMqqfSCzIxTMcBpxw%2FKU%2Be2D0W2g2ccFS3TMq8lbN5vxfsWVUPPr5bH6GNGu8Qphtp6U5szgjmXRl3%2B2xzlMRnBpyKqmGyKQLK28Di%2FL5%2BBMylj4xHYswQde07%2ByqB9V65HHe57IjK2ckHC2jX5S%2FM9NKuH1gxZvCxr80DNOycSCT7e7xfdhXmyp4eK95opsdw7gggIW%2FHp0f1dl3OAvvBjCLTYvvx%2BhEI311aEFVnOXSk5Ci%2F55s%2F%2FUpQMnTcz35kkbUq%2B1nRCUJ3Xx%2BAfvfjbHAn1i3EMNyyCmYoHqTuOy39d1LPmpbbf5%2B%2BK24hDpPoVjVvLsJxIrYVaKJwM%2FxBt1vVQaailMLbt2ckGOqUBc30qyYA86AJ52igiSSXztNWCTsF6m9llHzs%2FJ%2FowlWuryEFPm%2BzBeXzAhWQyN1itZdp2zntmfoZOgOKF5pTqd%2B6Hx1DUSYpkL0s00LP6uX6BK7x01lj2tHm7Os%2BODlanv44uR12Kue%2BNtXzHi218H2yvAsAOpMPR44DCny0zlRtkVFxL%2BTmSzcLVhtdEcIJRuARrKynb%2BpzzJqn1j0VXSu5wmxca&X-Amz-Signature=e4b1f6e8efed1d537fc7d27721be64d293b2e8b127255e32c7d8707f566ecb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
