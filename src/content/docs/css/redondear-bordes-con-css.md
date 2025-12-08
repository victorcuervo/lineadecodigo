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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECHCM4Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW0n%2BBGleK1zl9vukDkctDTKfUKWnv5aA5PRXJh1MX4wIhAKbs0OsXj61OXloR%2FujZKbj%2Bg%2B%2FRCc%2BFGRkqKAGNbiKhKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycMmnFF3N2MPweb1Eq3AN77p3wx0CqW7T2YjZjen5E86cQ2U%2BFOp%2Bc8CNnqSJHy3mVUPI6oSkq%2BGYW6pyrJ2nv7Gw4CaroffajsR0pMUmk9E8DaxiAE0jj8631s4UKMUQs%2B9BoANzEaQVkLKTBi5G2R9fD3u9XNFTuhESctLzSuZIMmcK0Ie9qDsdY3bispeibWhYDrZHNU6ZGXC%2FqCw0pFDF7cUTLvSYiCIML0WlV4wR3s1WbDfZVMcxdzvYMX%2FC0hiL4wB%2BRHLWZSg3SM%2FYYJMpfij2B%2F4XjR%2FvPgIRyokQ7U5R6nkAYJOGEqn1X1CdFyfeRoH14iwFUJ1ZtIL%2BMTbOC1MZESUBWMubC150JBUNkbD0W02NIxBwmDxisn%2FhJIfyTzUdyxenKJdCieMC%2FJKTZ7t8veRuoBI3l2QPEQrRGWmwF4XBCUasVxesq37mNeUyu5w5be7bMG8GaB4GA%2FCeLASdxi4h13Qx6DYKIYNZBEoJ6CcggfKJFeNGXpsDUKQd8AogUrFoTWYh0RQE8s1eI2W1CBYefSEy8Fhb8HffwDzoFaSdb%2B9CggLHGKcG8zG5jsHRG%2BxXcTQhvvSR%2BjjJ3sB7dMEa7MgQQuP643oZZNhxjgnl1qBiLm%2FWZPV2bC80TKdbxmkmCLzDd0djJBjqkAXctYeF5prex%2FGT%2BKMmKaT0j8G3%2Fu9Ms0q97AUJFSF36Z3OuZghrX2g%2BlyiH9YOlLU%2BM1K%2F0VxTCRYPj7e0pLAWsEgOaybZpJ4xhL2IsnmYion8fl6Qd0rlmOXQfB13g5ECL8K%2BmQE7eBPeLIBMV33JjytZEwpT5tHcmqxuTx7f3EHdor9nCjsVzzCR%2Fw%2BaolhfHSurk%2BqpnuI%2BHn7MsEJyfaNR2&X-Amz-Signature=17fa03d785c3408a4e2ccf5ad049ea945c9ef8590d30c49846e10f2422ccb433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECHCM4Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW0n%2BBGleK1zl9vukDkctDTKfUKWnv5aA5PRXJh1MX4wIhAKbs0OsXj61OXloR%2FujZKbj%2Bg%2B%2FRCc%2BFGRkqKAGNbiKhKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycMmnFF3N2MPweb1Eq3AN77p3wx0CqW7T2YjZjen5E86cQ2U%2BFOp%2Bc8CNnqSJHy3mVUPI6oSkq%2BGYW6pyrJ2nv7Gw4CaroffajsR0pMUmk9E8DaxiAE0jj8631s4UKMUQs%2B9BoANzEaQVkLKTBi5G2R9fD3u9XNFTuhESctLzSuZIMmcK0Ie9qDsdY3bispeibWhYDrZHNU6ZGXC%2FqCw0pFDF7cUTLvSYiCIML0WlV4wR3s1WbDfZVMcxdzvYMX%2FC0hiL4wB%2BRHLWZSg3SM%2FYYJMpfij2B%2F4XjR%2FvPgIRyokQ7U5R6nkAYJOGEqn1X1CdFyfeRoH14iwFUJ1ZtIL%2BMTbOC1MZESUBWMubC150JBUNkbD0W02NIxBwmDxisn%2FhJIfyTzUdyxenKJdCieMC%2FJKTZ7t8veRuoBI3l2QPEQrRGWmwF4XBCUasVxesq37mNeUyu5w5be7bMG8GaB4GA%2FCeLASdxi4h13Qx6DYKIYNZBEoJ6CcggfKJFeNGXpsDUKQd8AogUrFoTWYh0RQE8s1eI2W1CBYefSEy8Fhb8HffwDzoFaSdb%2B9CggLHGKcG8zG5jsHRG%2BxXcTQhvvSR%2BjjJ3sB7dMEa7MgQQuP643oZZNhxjgnl1qBiLm%2FWZPV2bC80TKdbxmkmCLzDd0djJBjqkAXctYeF5prex%2FGT%2BKMmKaT0j8G3%2Fu9Ms0q97AUJFSF36Z3OuZghrX2g%2BlyiH9YOlLU%2BM1K%2F0VxTCRYPj7e0pLAWsEgOaybZpJ4xhL2IsnmYion8fl6Qd0rlmOXQfB13g5ECL8K%2BmQE7eBPeLIBMV33JjytZEwpT5tHcmqxuTx7f3EHdor9nCjsVzzCR%2Fw%2BaolhfHSurk%2BqpnuI%2BHn7MsEJyfaNR2&X-Amz-Signature=003b7131cf69a721fce2676acf78fdc58536fa54e56573155d816b7de397e450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
