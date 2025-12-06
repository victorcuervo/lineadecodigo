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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGTBUQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxdRZQYfxS7jWJH32PWwcXrEUIWghq98fA%2BMLb1ijgNAiBAlMGUS6AUW4zvy9KmiBsAk1tnxYVHYfATvvhTo9dr3yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM7CTUlHUYqcqQg3WkKtwDePpG8fwr6UKR3cdSpODbMW8mDGUkwCEnmaIAj8xkPmebTphw34HuU12eAqRfQF8%2FFBEsJiDcEgnYLM2zMe7YRq9XpbCs4zdHct%2BffgSU%2F6ojd%2FW4%2FV4h8ltryvvR9vMM%2FdPR42qn4QlfZB0yLwrGMn5ZmRuukiIs%2BH0D%2BxgfXQcKyfikv1tAuL13Pb%2BZWx0Sk60Z2sLQzYXF5jnwA44jSwYrXDTUjCfzIgqVbSWLCN%2Fa6rwq0Qsr2YwEG154Ib%2BoNcOTF0aNDti7Slt2UZjENbF9xfFW91tGMkEB0pt8B%2FuJqAvQezEGWh1DGjs6ddfBC3bnDlXpHmAit2%2FN3Et1MQ%2FV1oWSxGVYvcp%2FB2He24mJn1JO4vNBuexAxEHJCJpXXVJ1ZnIxgqTZOCXW6FnJraRW2GF4b9pJ8vJJIGgEXrYFRGkpuR3tCrGF06GVgB4tcGRMFWdmrY5Zf22OhbgF969kV%2FyTdvPJmwJXXZD1K2x3nGGzFlQrEMs7YZFTHnoZsSMF%2BvtnzlTctKx7fbJtqJFeyaq3A0z7NtEpOKs1FDt8jGF4TkMp5AGEyt8d8IeR3hMNpTjml9jFHScz%2B9EhmtOvNYf2JErXRnBZkD3ji4plBgy0%2FGKdwGUSot8wgsbRyQY6pgGQ44pScd4n4pjnBTVJ2IJzVCsFkYf74bcWEfCvtLRP3SRnjaNXR%2BqCI3vunwNboDPCKqOAzLui7NBjQ1ABLUPqWhQfnUcbgPU6SxB8HnhClz2D%2BqmvwU4lv7BYyh9wbvU1iFgdCDx1Lq%2F%2BLilkEZB6ybROBnFhxftLWbrh6X0x7AMRiXNUqKFlzAt2%2By9SnXMAF80Pft%2BL9Qmo0rWsmOAbsIPspF4%2F&X-Amz-Signature=093ded57db2f6893d07d0d36ea64685003c13775deae7bad39efe087b847dae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGTBUQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxdRZQYfxS7jWJH32PWwcXrEUIWghq98fA%2BMLb1ijgNAiBAlMGUS6AUW4zvy9KmiBsAk1tnxYVHYfATvvhTo9dr3yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM7CTUlHUYqcqQg3WkKtwDePpG8fwr6UKR3cdSpODbMW8mDGUkwCEnmaIAj8xkPmebTphw34HuU12eAqRfQF8%2FFBEsJiDcEgnYLM2zMe7YRq9XpbCs4zdHct%2BffgSU%2F6ojd%2FW4%2FV4h8ltryvvR9vMM%2FdPR42qn4QlfZB0yLwrGMn5ZmRuukiIs%2BH0D%2BxgfXQcKyfikv1tAuL13Pb%2BZWx0Sk60Z2sLQzYXF5jnwA44jSwYrXDTUjCfzIgqVbSWLCN%2Fa6rwq0Qsr2YwEG154Ib%2BoNcOTF0aNDti7Slt2UZjENbF9xfFW91tGMkEB0pt8B%2FuJqAvQezEGWh1DGjs6ddfBC3bnDlXpHmAit2%2FN3Et1MQ%2FV1oWSxGVYvcp%2FB2He24mJn1JO4vNBuexAxEHJCJpXXVJ1ZnIxgqTZOCXW6FnJraRW2GF4b9pJ8vJJIGgEXrYFRGkpuR3tCrGF06GVgB4tcGRMFWdmrY5Zf22OhbgF969kV%2FyTdvPJmwJXXZD1K2x3nGGzFlQrEMs7YZFTHnoZsSMF%2BvtnzlTctKx7fbJtqJFeyaq3A0z7NtEpOKs1FDt8jGF4TkMp5AGEyt8d8IeR3hMNpTjml9jFHScz%2B9EhmtOvNYf2JErXRnBZkD3ji4plBgy0%2FGKdwGUSot8wgsbRyQY6pgGQ44pScd4n4pjnBTVJ2IJzVCsFkYf74bcWEfCvtLRP3SRnjaNXR%2BqCI3vunwNboDPCKqOAzLui7NBjQ1ABLUPqWhQfnUcbgPU6SxB8HnhClz2D%2BqmvwU4lv7BYyh9wbvU1iFgdCDx1Lq%2F%2BLilkEZB6ybROBnFhxftLWbrh6X0x7AMRiXNUqKFlzAt2%2By9SnXMAF80Pft%2BL9Qmo0rWsmOAbsIPspF4%2F&X-Amz-Signature=b2a83ea906ba3d69aeb6742dabb3c8c05d8e44efe39a1d82dfe0254c1bfe8461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
