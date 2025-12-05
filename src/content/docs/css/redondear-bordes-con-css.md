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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGRW5NO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKxsTseD21kCfoHBPcut1qXSmr4i6sx3APUZjSBWrpBAiA4mS4EErinSbtmTML5oVCDcHOfxB%2BcZ%2BdPWhuzdb1ANir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMZMJkz0ZrowCCVsGGKtwDBYZCpHWCuZnNkEG83ZEkLRmPr1Go0QYQSpOGCvP%2FYojAB7oPV2U9mXJ73blWq89OKwVggUyz1vWOYAMsZmfv2hfiEnZbunfUXqGBoUK9WiuNfjHSPSY%2Fye5eVd951U383vpMK0VIh14iCs3N4SrDaX%2Budx%2FdaHzMma016ggqBGT%2By%2F1z2BHo4JfG0lGYG%2F7wErH1maSh7PT1InZP9bKfmvQSs8raaNV%2BPFSIjX2%2FfwN5J1fBMnKtHERUy3yhZEe6XR0pRyPFXSvfXVLV2929eUcobfTPmZZHX1iZNTs3e7vcbYVE0uJ8YO%2F%2Bcyt3oGshhHEbYXZOQXPAbOZhsZxox%2BWRYU%2Bl9225x9cNJOpdxxvlvlswLUdC7Zk4iJnxskDu4Ea98xWTmlKOEB4Yqf5fBFl3zF097DN97CT8uzyp4WDBRzPSS17%2Fgn2FMcCt4SLLYrS2X19xs4bb7mo3KwHWxEL9WUCmPNRMeu%2BKfMDlZQdF70x0FEu82GXhJdUxApUr9pffxHa12D29tjOaHtqgThDOXoV2igxe9wGCr3wQMKoLFtGE3YgsIBJo2x67elVGPVy5C1g1JzZ5ku3NqN1XllOzcdRPZszLTBAkHpWNx0A3F7rEQ5ZRbgf5CeYwlozIyQY6pgGB42xzsKC7oWJGXBWkD%2B%2FGwGmbahf08WT5ua2O9IA4LsCE1B5KQTmZohX2ZaenZ3NAC1uQT%2Bv34cc2SM652%2BVzoM%2Fy3XRRS4RE4noJhmEv%2BSQV77apEbR3N%2BkNxqMn6oQemXGIF%2BPQLeYMDhiydXdf7JjtJRZamumIovhyd9R0XqnXoVLHynX5w5qZxKer%2Fhqn3n8DOb%2FucUCQGAvC5iMo7zJAeemi&X-Amz-Signature=c1824c81e9e52f38960d7ea962f6833839584e7639fab71d8d5fb7cf09b0a8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGRW5NO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKxsTseD21kCfoHBPcut1qXSmr4i6sx3APUZjSBWrpBAiA4mS4EErinSbtmTML5oVCDcHOfxB%2BcZ%2BdPWhuzdb1ANir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMZMJkz0ZrowCCVsGGKtwDBYZCpHWCuZnNkEG83ZEkLRmPr1Go0QYQSpOGCvP%2FYojAB7oPV2U9mXJ73blWq89OKwVggUyz1vWOYAMsZmfv2hfiEnZbunfUXqGBoUK9WiuNfjHSPSY%2Fye5eVd951U383vpMK0VIh14iCs3N4SrDaX%2Budx%2FdaHzMma016ggqBGT%2By%2F1z2BHo4JfG0lGYG%2F7wErH1maSh7PT1InZP9bKfmvQSs8raaNV%2BPFSIjX2%2FfwN5J1fBMnKtHERUy3yhZEe6XR0pRyPFXSvfXVLV2929eUcobfTPmZZHX1iZNTs3e7vcbYVE0uJ8YO%2F%2Bcyt3oGshhHEbYXZOQXPAbOZhsZxox%2BWRYU%2Bl9225x9cNJOpdxxvlvlswLUdC7Zk4iJnxskDu4Ea98xWTmlKOEB4Yqf5fBFl3zF097DN97CT8uzyp4WDBRzPSS17%2Fgn2FMcCt4SLLYrS2X19xs4bb7mo3KwHWxEL9WUCmPNRMeu%2BKfMDlZQdF70x0FEu82GXhJdUxApUr9pffxHa12D29tjOaHtqgThDOXoV2igxe9wGCr3wQMKoLFtGE3YgsIBJo2x67elVGPVy5C1g1JzZ5ku3NqN1XllOzcdRPZszLTBAkHpWNx0A3F7rEQ5ZRbgf5CeYwlozIyQY6pgGB42xzsKC7oWJGXBWkD%2B%2FGwGmbahf08WT5ua2O9IA4LsCE1B5KQTmZohX2ZaenZ3NAC1uQT%2Bv34cc2SM652%2BVzoM%2Fy3XRRS4RE4noJhmEv%2BSQV77apEbR3N%2BkNxqMn6oQemXGIF%2BPQLeYMDhiydXdf7JjtJRZamumIovhyd9R0XqnXoVLHynX5w5qZxKer%2Fhqn3n8DOb%2FucUCQGAvC5iMo7zJAeemi&X-Amz-Signature=809ae32f1c9f94629edd2b981012983cb006fb9f36cd59d273d4a5c710ab4cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
