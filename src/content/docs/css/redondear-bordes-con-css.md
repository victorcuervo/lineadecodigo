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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSD24CYP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEFYfVYm%2Bqq6mWdTAcJrcGTHiUEF63YZ0bEF82b%2FbXSgIgJJOBpQDC%2FMWhtSY5xNnUiIMoP9hcW7yAv5lM1ZG64d0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIziD5t%2BmGodSXSRJyrcA7MV76TiRthbqNKPRM6Ng5Qu%2BAz5eVDCGAHs6G8lTjaPuN%2BfmXahUIzxRvVkOgmhd0ZCI1a8%2BYCuuqLAibidP%2F6jcBPI9sqKInLyZWoj3fJ4mtil0p3K4ekTNMnNNZn1TbKr5ZfTuB5g0Xc89RPSe0DyO7Uy3fSc8gDMG%2Bjdy%2Fc2NQMMf3HXI%2B8eR3J4UOzA848w3SfBMYl86uIRvvVfx3MDIx7iQEHEhEGpsgtglttyiO1XhDZasjsWC0Z%2BIxD3xAu5s6ttw%2FMi0ZfF8LGdpcy5E1B9%2FWV0EpTlTlLRgxYe3IdQXa0CYmqJoewMgVsKqbPKlFc%2B5rl%2BM4cqgndMWqQQK7kN40%2BNDPRluHRV0AtUIgFV8NPG8XRm3s41NAZ320PBr7bqIi4AIvNwnSiUW6RljDjwmL5O4S2ojYIvkOflmUrp%2B1%2FqfAaMMNauDdcJgvkh3wK3TocWWHEcf2aUpaI5OadETogUhxg5M7lVV23%2BftTpHTgJT%2BNs9F4vcHZsyYoyF3qM7h83PEBWiR6fFov6067%2FPN%2Bcl707t0gKnQlRRv2sbHI%2BGamHbR6xAH9f4PzqIyYuc5JGxMyr9kdlmXs9c18XvQHemg77UwN%2FYFKukJIjpSeoNdkaYj37MNbJ3skGOqUBBUE%2BCgmnztse3cdGOGSHjISKx4OP4K9Xm86GPLuoeyS0zhcIEzPqzcWQf%2Bsy0KJDIsCyqAvpxhhzs9IRX7ftIJ0e7J5myu3fVhXqRp%2BBjzaJ1%2Fckw9EKsy9UTOWgO4Mlxs4ip2DTFFM0NQHN8gjhtUD5xcLScNyYsVDoKaTYegr0HwSumCocc6qgBwrukp6u9aA0J3CXgCz%2BZcxmukMMP1gwf0Eo&X-Amz-Signature=4542085aa32f248b7995d3cd9c320d329e7891d3a706fd4745b0a02037660868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSD24CYP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEFYfVYm%2Bqq6mWdTAcJrcGTHiUEF63YZ0bEF82b%2FbXSgIgJJOBpQDC%2FMWhtSY5xNnUiIMoP9hcW7yAv5lM1ZG64d0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIziD5t%2BmGodSXSRJyrcA7MV76TiRthbqNKPRM6Ng5Qu%2BAz5eVDCGAHs6G8lTjaPuN%2BfmXahUIzxRvVkOgmhd0ZCI1a8%2BYCuuqLAibidP%2F6jcBPI9sqKInLyZWoj3fJ4mtil0p3K4ekTNMnNNZn1TbKr5ZfTuB5g0Xc89RPSe0DyO7Uy3fSc8gDMG%2Bjdy%2Fc2NQMMf3HXI%2B8eR3J4UOzA848w3SfBMYl86uIRvvVfx3MDIx7iQEHEhEGpsgtglttyiO1XhDZasjsWC0Z%2BIxD3xAu5s6ttw%2FMi0ZfF8LGdpcy5E1B9%2FWV0EpTlTlLRgxYe3IdQXa0CYmqJoewMgVsKqbPKlFc%2B5rl%2BM4cqgndMWqQQK7kN40%2BNDPRluHRV0AtUIgFV8NPG8XRm3s41NAZ320PBr7bqIi4AIvNwnSiUW6RljDjwmL5O4S2ojYIvkOflmUrp%2B1%2FqfAaMMNauDdcJgvkh3wK3TocWWHEcf2aUpaI5OadETogUhxg5M7lVV23%2BftTpHTgJT%2BNs9F4vcHZsyYoyF3qM7h83PEBWiR6fFov6067%2FPN%2Bcl707t0gKnQlRRv2sbHI%2BGamHbR6xAH9f4PzqIyYuc5JGxMyr9kdlmXs9c18XvQHemg77UwN%2FYFKukJIjpSeoNdkaYj37MNbJ3skGOqUBBUE%2BCgmnztse3cdGOGSHjISKx4OP4K9Xm86GPLuoeyS0zhcIEzPqzcWQf%2Bsy0KJDIsCyqAvpxhhzs9IRX7ftIJ0e7J5myu3fVhXqRp%2BBjzaJ1%2Fckw9EKsy9UTOWgO4Mlxs4ip2DTFFM0NQHN8gjhtUD5xcLScNyYsVDoKaTYegr0HwSumCocc6qgBwrukp6u9aA0J3CXgCz%2BZcxmukMMP1gwf0Eo&X-Amz-Signature=27de25f3ccbb3368668597bc1de8c3d5674aed900d5c8c03b79617c65b087eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
