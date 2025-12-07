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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3WGN2J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMqvGfJW5bRoydQvV1uEl2Q2CzvUz3JbTnyHTVGeSCCAiAtwvhRNbPKbnoiODn1Ppsy%2BB%2FiRDRKz%2FCVXK%2Fchk7StSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxlZg7xBppkEalBXhKtwDhoVP2wP4Oe5StjFyIZEq95Ipszi10lPoRwf9BM9gOpUkRdppOvEjqrioSnbxHe%2B3zIiTwXA5SLp2Q8kBsdirLUfgiGGHdGRimDPC6ZEuF%2BBPh9VcR6DjhSbIGkb%2FJ2heEbk8R9EwqOp0xY%2F2h0xeCMmfHCotJTiy6jzZgG%2BCdJVE7h3DLI1py94UB7AcHZzRsUA7j3xXYRKWLWoO7knaDpjnNOaov4sWPXYp0v1l1ZzuOmSvPceiKEUmVcqYf%2FZ1rthFql1ZwkTfxPEMp6yAuBNg0yLnD4D4LNme9Y54vu8UBF%2BtaUN0R7zZeFVianCuHzZFwR5lX194cDgUZ%2BlubO2ni%2FigN0C%2FBg09Z2fUfAGG48Cqmz1b4g12f%2FB62Fi1e7h910a5%2BdeSUQAYn%2FNJO%2BEB%2F2%2B9dKkVZ%2FEQq9VfpVTRc7X%2Bv3i0BqPQtM5O7YNN5cK5RlbXctzL9f4GgiSJK8wg3n5SUn%2F%2F8J9A6WODGgGVlao0hKvXFnpdFHMTtICN5mxvfoWRQ5JoDdSXx%2BZZWF6%2FxGyuktblG7xRJuHbW%2B5Kph%2BKBjdXnk%2B7%2B0hNeNywsHDhQG5oijFXacSy%2B0kRVH%2Fe8X%2FyLW%2Fn6rdMMRWtZ%2FI3Jy3drw8DrNSapZUw%2Fb%2FWyQY6pgEPdt5aPTShfxYR5IXkPLUOWjDIUCt77gfomFQ1jxYPQBet1MsQ50YbFLA%2Ffja6tzkDkBxQz%2FqJrpG47bUrosZ8tcb77IFUVcU6bXslT2tmu1r8RjCCAAMqdxVjKU2qlEE5grTommXsBkXolY%2FnFMcfpBe8rd35h7uFXrU2cS8wE%2BePQX7HicJgCdTW5CXyFYC9haju2aWe4y6%2B79FOcGs6TitMRt7b&X-Amz-Signature=abf7737ee508f1a34f8b5b82a02f724da4ff2170fa7a3c65a0819fa0c0651370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3WGN2J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMqvGfJW5bRoydQvV1uEl2Q2CzvUz3JbTnyHTVGeSCCAiAtwvhRNbPKbnoiODn1Ppsy%2BB%2FiRDRKz%2FCVXK%2Fchk7StSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxlZg7xBppkEalBXhKtwDhoVP2wP4Oe5StjFyIZEq95Ipszi10lPoRwf9BM9gOpUkRdppOvEjqrioSnbxHe%2B3zIiTwXA5SLp2Q8kBsdirLUfgiGGHdGRimDPC6ZEuF%2BBPh9VcR6DjhSbIGkb%2FJ2heEbk8R9EwqOp0xY%2F2h0xeCMmfHCotJTiy6jzZgG%2BCdJVE7h3DLI1py94UB7AcHZzRsUA7j3xXYRKWLWoO7knaDpjnNOaov4sWPXYp0v1l1ZzuOmSvPceiKEUmVcqYf%2FZ1rthFql1ZwkTfxPEMp6yAuBNg0yLnD4D4LNme9Y54vu8UBF%2BtaUN0R7zZeFVianCuHzZFwR5lX194cDgUZ%2BlubO2ni%2FigN0C%2FBg09Z2fUfAGG48Cqmz1b4g12f%2FB62Fi1e7h910a5%2BdeSUQAYn%2FNJO%2BEB%2F2%2B9dKkVZ%2FEQq9VfpVTRc7X%2Bv3i0BqPQtM5O7YNN5cK5RlbXctzL9f4GgiSJK8wg3n5SUn%2F%2F8J9A6WODGgGVlao0hKvXFnpdFHMTtICN5mxvfoWRQ5JoDdSXx%2BZZWF6%2FxGyuktblG7xRJuHbW%2B5Kph%2BKBjdXnk%2B7%2B0hNeNywsHDhQG5oijFXacSy%2B0kRVH%2Fe8X%2FyLW%2Fn6rdMMRWtZ%2FI3Jy3drw8DrNSapZUw%2Fb%2FWyQY6pgEPdt5aPTShfxYR5IXkPLUOWjDIUCt77gfomFQ1jxYPQBet1MsQ50YbFLA%2Ffja6tzkDkBxQz%2FqJrpG47bUrosZ8tcb77IFUVcU6bXslT2tmu1r8RjCCAAMqdxVjKU2qlEE5grTommXsBkXolY%2FnFMcfpBe8rd35h7uFXrU2cS8wE%2BePQX7HicJgCdTW5CXyFYC9haju2aWe4y6%2B79FOcGs6TitMRt7b&X-Amz-Signature=d51c6249e66bc37a685ba5eca0883cca11469585cb9aa5e666e5aa394670ccf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
