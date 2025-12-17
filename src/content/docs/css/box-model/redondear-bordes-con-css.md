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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RMJFCD5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOoQGEtymaxp44Vm7J0qSLJZMkA%2FuWJwy6wKt04NDruQIgE0bNeYJx45A7r%2FSlCQyHzlk%2Fr2je3Wyj%2FqoAmfK%2BhCQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGH1hcWx4CzM5DYdWSrcA5FY3v25twcGlUMy7WiGc%2FcYECC9TCMGjyEf7iP4fbrKfavQ3pNLRjlZwZL6ozdU9vhcDbYFnksIL%2FIsRQye5IZejyU2Y9bQ09BznfKXb1fIacPkHg%2FrHAwwU38eB%2Fc1CvgxI00XyCpHluNZR5FRoXeSAL3DJF1nhcrBiJJIRVWRwH3B239I5qZHI96D8SpnGVD1jDq9WqdmALHrHp%2FZzMEEFSujFCnPM6QMH89YzOTLydHC2G0%2BbJyV3zrH5J8FbMOQlRG1AjxPMxFzO1CRG0azONrXK2Hg9NEEfqlWzUvKkK6onkWekBcVUa5QxbLFhiRS8y0YxM%2FC%2FpVpBtl58mpJ1Qj7ajUHX5f5zK1yKnUlwgRu1pa%2FIBEh0uGfg2qW0xyeZkomqUB4SQqzhRW0tneFjemyHObVZtl8fQ0itxyVP0mHC9zPmG4xcTg0unyNJ0cw%2FgL4KMPTxuBGvaaT9dMu5vocJHogObVWm9PfbI4%2FVaElOFzR85GerP39PxESdhOgfE4LP319CcCQc442qOR5hK3CDdSmIkZECtjRzR778qEGm8ZPABWmsj%2BxrgJs82f%2Fpy4KWuC%2BIqyHMOwwptaNl%2F%2FBCZmHapfOEhAaw1Ou%2Fhc%2FeIVlqB18GLcPMOX7h8oGOqUBOwWWC%2BRZn4oB2B2MFkhm5Y7xHUjEbrLxqrsxmri2pebeexNG%2Fl6os%2BSYSPfqQhltPiG3HYHK2dREAy0dsJLBDVZr%2FozuiSQSxflN4FHflE%2BS4IDuZ4kH6dKQOECGu%2FDWnrapqegFtkDu5%2Fkxzs5T1GwXulfUMQKMrwEccpYpeangKVKQbVs%2BO2hGkWxWqprkbL3pn8ER14kmm6t6rj0fBj6qvv0Z&X-Amz-Signature=8acb2df73cfdbb292a1881941abeb325fe9d18c2a04dcf94abbe3f7a2f0adf3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RMJFCD5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOoQGEtymaxp44Vm7J0qSLJZMkA%2FuWJwy6wKt04NDruQIgE0bNeYJx45A7r%2FSlCQyHzlk%2Fr2je3Wyj%2FqoAmfK%2BhCQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGH1hcWx4CzM5DYdWSrcA5FY3v25twcGlUMy7WiGc%2FcYECC9TCMGjyEf7iP4fbrKfavQ3pNLRjlZwZL6ozdU9vhcDbYFnksIL%2FIsRQye5IZejyU2Y9bQ09BznfKXb1fIacPkHg%2FrHAwwU38eB%2Fc1CvgxI00XyCpHluNZR5FRoXeSAL3DJF1nhcrBiJJIRVWRwH3B239I5qZHI96D8SpnGVD1jDq9WqdmALHrHp%2FZzMEEFSujFCnPM6QMH89YzOTLydHC2G0%2BbJyV3zrH5J8FbMOQlRG1AjxPMxFzO1CRG0azONrXK2Hg9NEEfqlWzUvKkK6onkWekBcVUa5QxbLFhiRS8y0YxM%2FC%2FpVpBtl58mpJ1Qj7ajUHX5f5zK1yKnUlwgRu1pa%2FIBEh0uGfg2qW0xyeZkomqUB4SQqzhRW0tneFjemyHObVZtl8fQ0itxyVP0mHC9zPmG4xcTg0unyNJ0cw%2FgL4KMPTxuBGvaaT9dMu5vocJHogObVWm9PfbI4%2FVaElOFzR85GerP39PxESdhOgfE4LP319CcCQc442qOR5hK3CDdSmIkZECtjRzR778qEGm8ZPABWmsj%2BxrgJs82f%2Fpy4KWuC%2BIqyHMOwwptaNl%2F%2FBCZmHapfOEhAaw1Ou%2Fhc%2FeIVlqB18GLcPMOX7h8oGOqUBOwWWC%2BRZn4oB2B2MFkhm5Y7xHUjEbrLxqrsxmri2pebeexNG%2Fl6os%2BSYSPfqQhltPiG3HYHK2dREAy0dsJLBDVZr%2FozuiSQSxflN4FHflE%2BS4IDuZ4kH6dKQOECGu%2FDWnrapqegFtkDu5%2Fkxzs5T1GwXulfUMQKMrwEccpYpeangKVKQbVs%2BO2hGkWxWqprkbL3pn8ER14kmm6t6rj0fBj6qvv0Z&X-Amz-Signature=b86a41100375af568a0e1bde6fca5cf4c502bae95c5587a6248cab9eecd8343a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
