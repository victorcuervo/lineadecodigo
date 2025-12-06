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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZDX6LB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc5582l83aP0CzpsqInVC9l1Gs5lfMFWnyzZ50bWVYTAIgAVmngtMBAZM3t6f95qdodfM8SILnPvttnKelY4cXGrQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDC7ssw0blM3HwtLmxyrcA2KyIkr4M4QN0siTas%2BqmngvFWFxwarrhrK4vQU%2FIYkUGYnD6g1Dea1cLFw7D%2Bw1Cb7EcL0WZGGqJz%2FFfV8cqzfDmj5Pb4MsuN6PUCWWCW%2B9a4Lwi%2B87zfOpTDhgPc6eGVJJyXjBqFujZZpDtA7Td526KL5PXiMEpWaMtN5EJ97AHaaK9khLFa84C2ab48kanaC8nsFNn%2BREIp%2BBctsFsf041FX79QXrCDUABfLG5xHCvfBRXjmufOK8BeLbiYvJlyIxFlGMsnGX5cXSLu8k3UbVmQ2X9qkrr8vRi5lItSOk35YR23prfFLg36toOdeERURIN525abgRrJUbgQIIXntwUdGRtCYakmAyxHRTBboHV35VFowtjSOqG7zN9ndhfEJW73RoDSv48nU%2Bp8iOp2sAlAN1Y7WFzw7sgsI1Vso7n%2BhWcBERQkh%2BDkPuZxCnehkgYji41cnZIWhIYL5Zpol9C%2BFFp%2BPCEfF2iuRt5tgyHbgr6bE%2Bmwm%2FZZ%2F8QbEeOwmQUZ4wFuBgDFJl3Kq2ThuJw3odWbd757foUVcWaD1S4NEvixXnSQ8%2B8D1iB5u4bnztiRBxZcbqb%2F8CgmKzmftY7bHp%2FLhGzojsV%2FSDKyTLsMgvb10Gbd6gwXvGMLLrz8kGOqUBaoqNUe47c96kmZBghWNhJ6PAsl%2F42Xf1fft4X9W6Uun1ndgwydlycU%2FNQr1gnFoMjtGYSJE1gZu1WidBcU2RiCIZSP3rlJlDOaI6VivD36rxal0PaKBrs8KpUnAuwCLpe%2BIFRZ4%2Fx%2FTSeJxjDzQGKs3OGRcvgC7wUjc%2B9KqzRHe9R1Pd6gVNiau5ag5X%2Flew7x1sIG1ZGwy%2BFg3plfjQmUWFxKR8&X-Amz-Signature=e879b06cef0f5320b693d235dc0e2b0ef037e850334539371a4b7dae38e583ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZDX6LB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc5582l83aP0CzpsqInVC9l1Gs5lfMFWnyzZ50bWVYTAIgAVmngtMBAZM3t6f95qdodfM8SILnPvttnKelY4cXGrQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDC7ssw0blM3HwtLmxyrcA2KyIkr4M4QN0siTas%2BqmngvFWFxwarrhrK4vQU%2FIYkUGYnD6g1Dea1cLFw7D%2Bw1Cb7EcL0WZGGqJz%2FFfV8cqzfDmj5Pb4MsuN6PUCWWCW%2B9a4Lwi%2B87zfOpTDhgPc6eGVJJyXjBqFujZZpDtA7Td526KL5PXiMEpWaMtN5EJ97AHaaK9khLFa84C2ab48kanaC8nsFNn%2BREIp%2BBctsFsf041FX79QXrCDUABfLG5xHCvfBRXjmufOK8BeLbiYvJlyIxFlGMsnGX5cXSLu8k3UbVmQ2X9qkrr8vRi5lItSOk35YR23prfFLg36toOdeERURIN525abgRrJUbgQIIXntwUdGRtCYakmAyxHRTBboHV35VFowtjSOqG7zN9ndhfEJW73RoDSv48nU%2Bp8iOp2sAlAN1Y7WFzw7sgsI1Vso7n%2BhWcBERQkh%2BDkPuZxCnehkgYji41cnZIWhIYL5Zpol9C%2BFFp%2BPCEfF2iuRt5tgyHbgr6bE%2Bmwm%2FZZ%2F8QbEeOwmQUZ4wFuBgDFJl3Kq2ThuJw3odWbd757foUVcWaD1S4NEvixXnSQ8%2B8D1iB5u4bnztiRBxZcbqb%2F8CgmKzmftY7bHp%2FLhGzojsV%2FSDKyTLsMgvb10Gbd6gwXvGMLLrz8kGOqUBaoqNUe47c96kmZBghWNhJ6PAsl%2F42Xf1fft4X9W6Uun1ndgwydlycU%2FNQr1gnFoMjtGYSJE1gZu1WidBcU2RiCIZSP3rlJlDOaI6VivD36rxal0PaKBrs8KpUnAuwCLpe%2BIFRZ4%2Fx%2FTSeJxjDzQGKs3OGRcvgC7wUjc%2B9KqzRHe9R1Pd6gVNiau5ag5X%2Flew7x1sIG1ZGwy%2BFg3plfjQmUWFxKR8&X-Amz-Signature=7a49307b099f74ee68d54fb04701177747a4a07e816fd0ec469d07403342c8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
