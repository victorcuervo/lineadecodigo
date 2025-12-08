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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPY2WYN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGacXZW1g8B90avMlmD4v2CFSDFzRmFNg1Nby8kkdSOyAiEAk71BSSgF%2B96Z20DaKXrjfnVktlE1WTLk7GHyDkEWWGcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqu77o8qmoqS9TwDircAxeZaRAkD5ZJhMq6wYLOGaMoI8XLp5Dv%2BE1lzkEFBJFrsDJbG3Xw1lToX%2BmQujTeGyoWH7%2FEQMkVTNm2Sup1V%2B9xUPFAcXgT0O222pesgHehPicpoH0RVrU8JA%2F171w5%2BSbQoLIQUYSsHO43t5W6792No1JITmLWzYuLAmI%2BrHbgimAu%2Fz85%2Bd%2Fb6FMGqhM%2Bv4H%2FCnSBuAHZzvmco7yPVjZN70l1fld8k2rfgL7hvGsP11bPKhEtWO98BbirBdClnKHnn0d8kL2gmHjVYVEI9fax9zvGKc4a0wGQy6%2FRuxMecMBR9G3%2FL6XMxTB%2FQbOe35XnuJcJWGQ8LA%2BXgNCh4iDtqjorBvCKnSwx4Z4xU8MntZZi4mxdDH9wLt%2B7zfRn3l88OmybLeRJ8RZmcANs4CX%2BdsvWnQkiG8ERDOVtkNd%2FYNocJbOv6TR8Wyxp8Ygq3fbTKd4wrtMsF%2FQ%2BNPvC69KyTBBqBLSXiAJmlSHX401QibGMSRmjUy8eDxAsNX%2FzOuK0fDANYjGcyGPWz%2FBcMY0XSA%2BTcz9GYk5qbdxGbEVznWwFND1jhXhiC8%2FKQvEA7LlA3pVpui%2Bsrzq5JbAG3sARViZ6iD13nWisAU2gKxgZpJOV9YgJzdyh2wiLMJeU2ckGOqUBC%2BflSIMtaP1tBrMCK%2FJq0bRFtubrwbXB3vewTBA7sLjkHJORexfnVbC%2BmBZrvzo3cUj3s71vzW9%2B71VTe7%2B6HpaAj3J1t28ni4bQqpNtkUyE1lrz9fCHCn18cUXg985e9%2BY51iauEnlZ4QC2Jz1o5m8XWjOS%2BWCKmFt3raAzm6WUgM%2FpRaY0RK48sAYPUZnvChilE1df8oHXkYNiIuEutZyw6XEh&X-Amz-Signature=b6a9b7b2a60e30f102eca826c6dd006d20e84f89ca3302cb8d424c2cadf81656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPY2WYN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGacXZW1g8B90avMlmD4v2CFSDFzRmFNg1Nby8kkdSOyAiEAk71BSSgF%2B96Z20DaKXrjfnVktlE1WTLk7GHyDkEWWGcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqu77o8qmoqS9TwDircAxeZaRAkD5ZJhMq6wYLOGaMoI8XLp5Dv%2BE1lzkEFBJFrsDJbG3Xw1lToX%2BmQujTeGyoWH7%2FEQMkVTNm2Sup1V%2B9xUPFAcXgT0O222pesgHehPicpoH0RVrU8JA%2F171w5%2BSbQoLIQUYSsHO43t5W6792No1JITmLWzYuLAmI%2BrHbgimAu%2Fz85%2Bd%2Fb6FMGqhM%2Bv4H%2FCnSBuAHZzvmco7yPVjZN70l1fld8k2rfgL7hvGsP11bPKhEtWO98BbirBdClnKHnn0d8kL2gmHjVYVEI9fax9zvGKc4a0wGQy6%2FRuxMecMBR9G3%2FL6XMxTB%2FQbOe35XnuJcJWGQ8LA%2BXgNCh4iDtqjorBvCKnSwx4Z4xU8MntZZi4mxdDH9wLt%2B7zfRn3l88OmybLeRJ8RZmcANs4CX%2BdsvWnQkiG8ERDOVtkNd%2FYNocJbOv6TR8Wyxp8Ygq3fbTKd4wrtMsF%2FQ%2BNPvC69KyTBBqBLSXiAJmlSHX401QibGMSRmjUy8eDxAsNX%2FzOuK0fDANYjGcyGPWz%2FBcMY0XSA%2BTcz9GYk5qbdxGbEVznWwFND1jhXhiC8%2FKQvEA7LlA3pVpui%2Bsrzq5JbAG3sARViZ6iD13nWisAU2gKxgZpJOV9YgJzdyh2wiLMJeU2ckGOqUBC%2BflSIMtaP1tBrMCK%2FJq0bRFtubrwbXB3vewTBA7sLjkHJORexfnVbC%2BmBZrvzo3cUj3s71vzW9%2B71VTe7%2B6HpaAj3J1t28ni4bQqpNtkUyE1lrz9fCHCn18cUXg985e9%2BY51iauEnlZ4QC2Jz1o5m8XWjOS%2BWCKmFt3raAzm6WUgM%2FpRaY0RK48sAYPUZnvChilE1df8oHXkYNiIuEutZyw6XEh&X-Amz-Signature=9f7a5f5ba6bfdde34370653bf28214a6314b2b1ee87c9e19a7698fa572345590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
