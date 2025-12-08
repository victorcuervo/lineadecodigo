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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAMGVA3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Cmjvt2%2F1OotXC6o8NgT%2FYwLgLqKmHRDYBEhAVEMvuQIgAZlvD%2F%2By5Ry7BDampdjarDS%2BKpX3DC2730t3BFieCcEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6O%2BLVWxcDuPzqq8ircA91fYqmvgpPwidyFWYF%2BotzpGjH7tnnAm5Ma6pQt1d%2F8uDbpXw3XjrUPcRw66t7Ao21Ia98FINTAW%2FeaeOi2NIPFoowTvvNZqUI4CF5veVf7yFDNJBzwYxAdPeK2YnQed8Cn68%2FnWmke88N6VcRs5g9K%2FbAyNBYghgYaOAdZjsOCxLjx6m5fC0dCiBTYwy2OFqFWNJ0jJtK9mbcD78K%2FnnNSF0yJ8C6zvp6Nd39IexXgwZxBaAVySwTn6AXOc8sC%2BpDk5cxOE%2FCqrLuRWfhL0ZAHD5q1neEFFygI7RXE7tLlCZnBV%2BvrzxT5K2wT00kvp%2BEVNaL3x3ppzp1Xn3Iax1%2BVO48yFEkobXJlWt2N9IwldbS4s7GHAuVLr6EKUk%2F3ayVXnVDArMdITIGmY9pWO1fJEPYetKLQfl1Uhz6PEBaOC3%2FuGPClIIjBguT3eYr4QT2s2ja%2FUHBOCGaEsxHMPneBs%2Fxl9M9D3d4yTHd6qDr2RSusEsl%2Fz8%2FUTR6LNf48f303HyJgXnCaRGVHMq%2BMLI3vXiDo0eO9viEFyCev7aTpSoXrKgUgvxDGj49Tp4jUdwMPXLUzG5fV4VHZJUZ4Y%2BkCnuoTLO6R1BHqtTZ6AATsyp9Ff7H2lBlq%2Ft2qMKLt2ckGOqUBubqx1y58MgdmvTsO42fMNZGxD61yuYBD%2FoYJbV84k6qVuiiUgXIvkBJHloaBkg33R7vqixiwMuB6g8eqFNa1tv1ulFqQ4bL7H2%2FqyWjaVL%2BC4HGzekEuANrJE3%2FIDD%2BSpTvEoH1rVMk%2FILLfP%2ByNg0CuH%2FCDtF7zzlNU9IO1PHBGRVL2bM0dCCbYVy4nH9Ppzv6V%2BQs%2BbRkzdwwKsIQOXooUXbDH&X-Amz-Signature=964ed7223498a07cbb278a04d7bdb54821608b2c8e9085ad51641a02cc5e9ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAMGVA3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Cmjvt2%2F1OotXC6o8NgT%2FYwLgLqKmHRDYBEhAVEMvuQIgAZlvD%2F%2By5Ry7BDampdjarDS%2BKpX3DC2730t3BFieCcEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6O%2BLVWxcDuPzqq8ircA91fYqmvgpPwidyFWYF%2BotzpGjH7tnnAm5Ma6pQt1d%2F8uDbpXw3XjrUPcRw66t7Ao21Ia98FINTAW%2FeaeOi2NIPFoowTvvNZqUI4CF5veVf7yFDNJBzwYxAdPeK2YnQed8Cn68%2FnWmke88N6VcRs5g9K%2FbAyNBYghgYaOAdZjsOCxLjx6m5fC0dCiBTYwy2OFqFWNJ0jJtK9mbcD78K%2FnnNSF0yJ8C6zvp6Nd39IexXgwZxBaAVySwTn6AXOc8sC%2BpDk5cxOE%2FCqrLuRWfhL0ZAHD5q1neEFFygI7RXE7tLlCZnBV%2BvrzxT5K2wT00kvp%2BEVNaL3x3ppzp1Xn3Iax1%2BVO48yFEkobXJlWt2N9IwldbS4s7GHAuVLr6EKUk%2F3ayVXnVDArMdITIGmY9pWO1fJEPYetKLQfl1Uhz6PEBaOC3%2FuGPClIIjBguT3eYr4QT2s2ja%2FUHBOCGaEsxHMPneBs%2Fxl9M9D3d4yTHd6qDr2RSusEsl%2Fz8%2FUTR6LNf48f303HyJgXnCaRGVHMq%2BMLI3vXiDo0eO9viEFyCev7aTpSoXrKgUgvxDGj49Tp4jUdwMPXLUzG5fV4VHZJUZ4Y%2BkCnuoTLO6R1BHqtTZ6AATsyp9Ff7H2lBlq%2Ft2qMKLt2ckGOqUBubqx1y58MgdmvTsO42fMNZGxD61yuYBD%2FoYJbV84k6qVuiiUgXIvkBJHloaBkg33R7vqixiwMuB6g8eqFNa1tv1ulFqQ4bL7H2%2FqyWjaVL%2BC4HGzekEuANrJE3%2FIDD%2BSpTvEoH1rVMk%2FILLfP%2ByNg0CuH%2FCDtF7zzlNU9IO1PHBGRVL2bM0dCCbYVy4nH9Ppzv6V%2BQs%2BbRkzdwwKsIQOXooUXbDH&X-Amz-Signature=c473b3b2d4c813f0305b26ef9b4a5d4e5cb80bc9cb5e4cd26d4ecd21429d1394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
