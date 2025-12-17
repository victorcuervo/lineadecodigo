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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFRXBAJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF44oZZr95ErluZUzgWvfPQucMXYmuHEjG8mChz7rjF6AiA%2BLUC4ZTXYBwiAeiHMlMsq0ibRUW1DSgId2dHXRrA3NSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMjV4WE%2BSK1W4W9nyKKtwDSpSBX8K8pjCBEdin7IGmdgb4zC43PLa%2Fc%2FsSeT4RZkL1v3KtPqiTkyQGehqo%2FdL8maL0yAT8zEoW6jIYI%2B0tOtsJNPgmFLTDqLAKBjMadGjc2cy7VXuBOC93akmyb5e%2F0kHGzzVqMADLBGCI6lozlC1Bg9c%2FA8Iwfra%2BNXMtAr6OxeMLVqaiXTtmmK8BSZg1lTWTjVFZ8I7VPUViyJF8Bd6cPZmCMbzu9B21CpNZKSKptpg83kSiLuVCYO31%2Fx2p5m6FqjnrfFJf6KzQBjUQCLOTxeH9PAKHhXfvyBDn%2BKV2Vc2Lk7yULQTWYb3S%2F4%2FB%2FL%2Ftahf8dIwNnwqPzs6Yrymb0cimx1%2FjdUfOtl%2BB9oJt6p8mx76c5JJU%2FxHEdg0KmcF1aUFMwh2AudjvU%2BVJ17fhDJrvvrMvAxUbrf8AWqs85zto%2Bxxtqcn2SE%2Fdarre4i8dCGFL0xfaCBjXHiCQ9816tSN%2FhBcyJGHWB%2FXL3V94uK4n2DP8KxYJiyFzy%2BDvvmS5QwiYCh0H%2F2068cZvgH2yPrdV6XbhlUFmf69hBVs%2BqhdkRvmAwfZcO0zRkF99YdM2KSJaxJD7hf2ohPpffMPhaikI%2FxLntANfW%2FGH1Iw0IdmxJfugWf%2F52Ckwuo%2BKygY6pgEmIIVGoXThQ%2FnmVmZoyxAe%2B2bcnwiw%2Fr4gi2lU5VcuT6CT%2Fo4YXyNA2W2c8EptrXQR0QdYhjfVV1hQelJtNCLLf6EzyqLOy1OREmdkhA1%2B2R3u9oAyn7Kjb03pkeOIshcwLSzwQ29euhebgynTqIZMpkIJzwqUcgRaNCfWyJpZUNtNLaWojjB%2BdP16GmZd%2FN2FvCmw2FkDRNE%2BzP6lhHFu83HwSXzo&X-Amz-Signature=12619fc6ff7bacfe5ea546bad105fac4a1819978328af71a69866c71cbc6d4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFRXBAJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF44oZZr95ErluZUzgWvfPQucMXYmuHEjG8mChz7rjF6AiA%2BLUC4ZTXYBwiAeiHMlMsq0ibRUW1DSgId2dHXRrA3NSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMjV4WE%2BSK1W4W9nyKKtwDSpSBX8K8pjCBEdin7IGmdgb4zC43PLa%2Fc%2FsSeT4RZkL1v3KtPqiTkyQGehqo%2FdL8maL0yAT8zEoW6jIYI%2B0tOtsJNPgmFLTDqLAKBjMadGjc2cy7VXuBOC93akmyb5e%2F0kHGzzVqMADLBGCI6lozlC1Bg9c%2FA8Iwfra%2BNXMtAr6OxeMLVqaiXTtmmK8BSZg1lTWTjVFZ8I7VPUViyJF8Bd6cPZmCMbzu9B21CpNZKSKptpg83kSiLuVCYO31%2Fx2p5m6FqjnrfFJf6KzQBjUQCLOTxeH9PAKHhXfvyBDn%2BKV2Vc2Lk7yULQTWYb3S%2F4%2FB%2FL%2Ftahf8dIwNnwqPzs6Yrymb0cimx1%2FjdUfOtl%2BB9oJt6p8mx76c5JJU%2FxHEdg0KmcF1aUFMwh2AudjvU%2BVJ17fhDJrvvrMvAxUbrf8AWqs85zto%2Bxxtqcn2SE%2Fdarre4i8dCGFL0xfaCBjXHiCQ9816tSN%2FhBcyJGHWB%2FXL3V94uK4n2DP8KxYJiyFzy%2BDvvmS5QwiYCh0H%2F2068cZvgH2yPrdV6XbhlUFmf69hBVs%2BqhdkRvmAwfZcO0zRkF99YdM2KSJaxJD7hf2ohPpffMPhaikI%2FxLntANfW%2FGH1Iw0IdmxJfugWf%2F52Ckwuo%2BKygY6pgEmIIVGoXThQ%2FnmVmZoyxAe%2B2bcnwiw%2Fr4gi2lU5VcuT6CT%2Fo4YXyNA2W2c8EptrXQR0QdYhjfVV1hQelJtNCLLf6EzyqLOy1OREmdkhA1%2B2R3u9oAyn7Kjb03pkeOIshcwLSzwQ29euhebgynTqIZMpkIJzwqUcgRaNCfWyJpZUNtNLaWojjB%2BdP16GmZd%2FN2FvCmw2FkDRNE%2BzP6lhHFu83HwSXzo&X-Amz-Signature=e2cea3be2b553f4b0323f30530f7488005af92dec20c90355db47306b171bd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
