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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVUZIHP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBB2CIJKfDp6zTRxaBPuBTWtEj%2FSvd2ZY%2F78dAC%2BPBDAiBbkEZXqE8aaaHYTKITgubPCh4Hr2bRLEiZPZTCEaMfqir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMFMEu69BX5DGPeq0eKtwDLGJBLzySkeaT%2BNjTujofS4KlhybAhO2LrguTMgTVm3jUL9fZP%2Bp7YsN35%2FmYR7euOVuJEKg6JOU%2FoyW%2BRblWo%2Bg3pdcITH3rW%2B8AlJgBWe65yDXEaSwgPfFf7M5b0qOwbu4Qqb%2BgD83ZhL7daDmOkIcsE9TWIPhiDsDfPcGMrtk1dvZSHiWkQuEB%2B2hkZWP%2FK1a6gyq7iIvRb86btB1hEFJlUkWgwQ3RYFvTaln0tOQEF0vyN3fg4Qc6dkoIHee%2Bzu8HLwH%2FJY1HdgUxzrg1tgjv6FvRFJUZuXrd1jdVBp09TU3xeB54poyg%2Fo8CEmol91jFStT8CxBqnU4GpO%2FjYIaYwCuSpFCcbsxZSykSeA8vhUwyFKxIK2D0ETnFCYcXxDtdqG1WX6QEXRIB6nWevahBWVCFSbm04Ii0%2Fy30FAzOsoTd0minMrzHsHFbPSbWTRzcTaurzsP68Bjd3K8aWdSPUTJHXao%2FEQNkfk%2FhmHoMsPD7tdnOXp4fmNKjcSioDzePt7lIN6V1AhZcb8qsjRzaZ5Qm%2B8wzF072Nwgwq3qd1gttMy0ObRwaEBC8oO9rBmYTaJO1ynaDgYJA0qeizMPSqOGA4%2BO5A3KBN4uS%2BMssjDVpCSetZ1ITo%2Bsw16bQyQY6pgFLom3bhSpoZLDsKKX%2BlHUehJ3IZN7MV%2FW2HE7Hk0mdeqLcoibEHCAV07UZy3s6%2BSBRHF1Jsqm%2Fhhl7WDtjQFNmZ8y6Ywl5pOLjo7KKptFujBtGKbNL9VJGUwQG7nlgv8dbufLKTTOJvo%2Fbwr8eZh27LivXznnAJbfFQOa4GhYZ%2BUouNBtd%2FPHC8DP82EmxmNTOCrP97Y4mmvmihqOGnZiT4VK%2FKvb2&X-Amz-Signature=accfd8773d11f864faf36ca9d7f6ac9f0a60d078451ab86ca131a4f174e9cc37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVUZIHP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBB2CIJKfDp6zTRxaBPuBTWtEj%2FSvd2ZY%2F78dAC%2BPBDAiBbkEZXqE8aaaHYTKITgubPCh4Hr2bRLEiZPZTCEaMfqir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMFMEu69BX5DGPeq0eKtwDLGJBLzySkeaT%2BNjTujofS4KlhybAhO2LrguTMgTVm3jUL9fZP%2Bp7YsN35%2FmYR7euOVuJEKg6JOU%2FoyW%2BRblWo%2Bg3pdcITH3rW%2B8AlJgBWe65yDXEaSwgPfFf7M5b0qOwbu4Qqb%2BgD83ZhL7daDmOkIcsE9TWIPhiDsDfPcGMrtk1dvZSHiWkQuEB%2B2hkZWP%2FK1a6gyq7iIvRb86btB1hEFJlUkWgwQ3RYFvTaln0tOQEF0vyN3fg4Qc6dkoIHee%2Bzu8HLwH%2FJY1HdgUxzrg1tgjv6FvRFJUZuXrd1jdVBp09TU3xeB54poyg%2Fo8CEmol91jFStT8CxBqnU4GpO%2FjYIaYwCuSpFCcbsxZSykSeA8vhUwyFKxIK2D0ETnFCYcXxDtdqG1WX6QEXRIB6nWevahBWVCFSbm04Ii0%2Fy30FAzOsoTd0minMrzHsHFbPSbWTRzcTaurzsP68Bjd3K8aWdSPUTJHXao%2FEQNkfk%2FhmHoMsPD7tdnOXp4fmNKjcSioDzePt7lIN6V1AhZcb8qsjRzaZ5Qm%2B8wzF072Nwgwq3qd1gttMy0ObRwaEBC8oO9rBmYTaJO1ynaDgYJA0qeizMPSqOGA4%2BO5A3KBN4uS%2BMssjDVpCSetZ1ITo%2Bsw16bQyQY6pgFLom3bhSpoZLDsKKX%2BlHUehJ3IZN7MV%2FW2HE7Hk0mdeqLcoibEHCAV07UZy3s6%2BSBRHF1Jsqm%2Fhhl7WDtjQFNmZ8y6Ywl5pOLjo7KKptFujBtGKbNL9VJGUwQG7nlgv8dbufLKTTOJvo%2Fbwr8eZh27LivXznnAJbfFQOa4GhYZ%2BUouNBtd%2FPHC8DP82EmxmNTOCrP97Y4mmvmihqOGnZiT4VK%2FKvb2&X-Amz-Signature=fa18b5d2bad89a972822a798245f95dda1e2441b199f95ab0e093186df669c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
