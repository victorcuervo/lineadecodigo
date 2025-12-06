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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPOVLL5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvWJg%2FLOkvcSmvd%2BaJaALhXvxIzQVrr%2Fa2dy%2BfgcQylAiBdkOgatL7kj6RBV0wfXjF4LBu6LeQhX6qBjhY4Ti63Air%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMyO166%2F4vWFXBgVb9KtwDm3rs4RzQd3CPRUQoNXa2js96ZgXBNSSADjDvIbqh0c3n%2BbvuvZkB31%2BJfVDNZRPPCKK%2Bohz7xREdZGQWGHJL12T55hPkNCEQhopIx4quF7MsbxNg6h%2FM3ndby26wup52mmaqv4kHGl31WKiI8dT89VtKnjtU4fTxDbd%2FQxlf%2FEonZd6TA20cg9ukPaCqi0%2FcqD5ywVjlck9eoGFKWMDd4yyWU5FC8y2mgIxF2SgKzwCnBkkk%2B%2B39YYl4DWpaO1tu5gPXrzSKwCvdfX6we9IPXZi4VJlNw2h4am6dXX%2FOAF%2BreV3%2BGpQZRSt8%2BBY%2FXym1JYhQLlpF5xLO3OGHaIsGU9Nw6Q1GLapwYMa0CgWKFqifCJeevbbDkXRwYF8tfGtGR0soN%2BNcOvOoxzRZuPuH%2FcczNJwDvqIYIGXVZjsOULX77xHiygLK0fUFc87uvDay7WUSiwaNApTm5ZH89CQM6ra0rm2aIjgcMXhKGKR9598maq%2FgQcYIuhjjeZ6scLv9kqix%2FfNYYvlKMbTrI%2FDba9C%2Bphvrq2UHTVkiGqBS%2BDtvAWUqzpdL79uIvznMHdZh1zEDpX0arS7RAgLR9wbArPsGv28KDQIJee9eHVamb%2BKvlBMBVcnbAp67MHcwjsbRyQY6pgE2RVH1IIjRi8oRzKJK57FLaZu%2Fvjr4s6VK73RZinPGnoqNVEKAb1zx0I3BfbRBXvPZVerSCSFkUW9WMInQ2LX51bU%2FwtLbf%2B1Uf%2BiEEuL5xaNm%2BVB6ZTpp92B9jgiC9z%2B304x7%2FqUHue2yWJvcvGVk4%2FSOeeAHiF5Lt8ECdjfS9VdjqNt2%2Filn7Xnm54BHz0PNrhjEyJpqVfee0uRC8VhVRMK126fr&X-Amz-Signature=149389bce1f0d7605ea18b4d9844ace853b17947dabf225f6d6569eed219e254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPOVLL5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvWJg%2FLOkvcSmvd%2BaJaALhXvxIzQVrr%2Fa2dy%2BfgcQylAiBdkOgatL7kj6RBV0wfXjF4LBu6LeQhX6qBjhY4Ti63Air%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMyO166%2F4vWFXBgVb9KtwDm3rs4RzQd3CPRUQoNXa2js96ZgXBNSSADjDvIbqh0c3n%2BbvuvZkB31%2BJfVDNZRPPCKK%2Bohz7xREdZGQWGHJL12T55hPkNCEQhopIx4quF7MsbxNg6h%2FM3ndby26wup52mmaqv4kHGl31WKiI8dT89VtKnjtU4fTxDbd%2FQxlf%2FEonZd6TA20cg9ukPaCqi0%2FcqD5ywVjlck9eoGFKWMDd4yyWU5FC8y2mgIxF2SgKzwCnBkkk%2B%2B39YYl4DWpaO1tu5gPXrzSKwCvdfX6we9IPXZi4VJlNw2h4am6dXX%2FOAF%2BreV3%2BGpQZRSt8%2BBY%2FXym1JYhQLlpF5xLO3OGHaIsGU9Nw6Q1GLapwYMa0CgWKFqifCJeevbbDkXRwYF8tfGtGR0soN%2BNcOvOoxzRZuPuH%2FcczNJwDvqIYIGXVZjsOULX77xHiygLK0fUFc87uvDay7WUSiwaNApTm5ZH89CQM6ra0rm2aIjgcMXhKGKR9598maq%2FgQcYIuhjjeZ6scLv9kqix%2FfNYYvlKMbTrI%2FDba9C%2Bphvrq2UHTVkiGqBS%2BDtvAWUqzpdL79uIvznMHdZh1zEDpX0arS7RAgLR9wbArPsGv28KDQIJee9eHVamb%2BKvlBMBVcnbAp67MHcwjsbRyQY6pgE2RVH1IIjRi8oRzKJK57FLaZu%2Fvjr4s6VK73RZinPGnoqNVEKAb1zx0I3BfbRBXvPZVerSCSFkUW9WMInQ2LX51bU%2FwtLbf%2B1Uf%2BiEEuL5xaNm%2BVB6ZTpp92B9jgiC9z%2B304x7%2FqUHue2yWJvcvGVk4%2FSOeeAHiF5Lt8ECdjfS9VdjqNt2%2Filn7Xnm54BHz0PNrhjEyJpqVfee0uRC8VhVRMK126fr&X-Amz-Signature=e98debb49361e24349fca66452fc93a1f2d5df315cc49494d6ff9a578026b380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
