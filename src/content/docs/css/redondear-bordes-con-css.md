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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJA34VW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyqc8PQchv45OY6Ojvi4NUF3h9PL%2BQwbm8%2FQ9RvEhgsQIgP1gAZBMBmVbZTpAsNOetFHt9k1hhxGTHjC3MfcUFNKsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwOHQBeYOP2u2IIiCrcA7eIDdyH6jpo6KkkDO%2F30Qm%2FpErBXgjb8qwmSR2VkXCKdxUhDAXGUmP6dRaLuPV5D8JAI6KWfiyjSsbBvYMBGhJomvJYpsaUDPMw5NDvgN69q4XThvCLVkYiLA7uPkYWkJimS942wp3THwWzgSwr7xksDUjvAmD8vdaLJuToSkcoKY%2Bud15Tduj3R0fSliRE9eBJ6sAB9Ugh431nToTEPQ9RMXgjTCWI37uimsQK%2Fh%2Bx8QX0PDtxseCX5AkHEkujWrieM7tiL3etYctBbU7OgKugPjgt%2BZXoJ18KAU0ZibiaZoc%2FYAMGSrO%2FTLPFoLlbP9nGnW0pRgFE%2B5Lo0kZl3L8Eqkt5POmpDXJFJBY5eDMa3YqoLzlPvgWgRkFbQPnROfjFmjGoQgqO6ZfjToXNd8bu%2BgGLG22Mz74Qcnj5CWqOuA7yrTzZW%2B0%2B4xNwqGNTr2rX6%2B8mbaJ5sgA4KXucIp9XN7r8vNAwSxnUqvKS7kU5r36xSXM1BPZRK0nL5m8aKShGidGVb85Af%2Bm6NYTrFVoskdNNkuC6H7L3IgAZKphIx48yWTW8Fq535vQIKDfv7pJTzCCnIErvSacTws2lyxB0G%2FcjQyi%2BoqtbncwHmvB2WkSOZMJg81lS7S%2FvMIzv2MkGOqUBtkj0IZu9TOlk%2BmmkZeppkeyFhjz910tMkSoun9zbzevJoqWblNl7bJCiJ7y7jOBunY2yupTp6fGN6jOr03XsSe5bDCwZwde6EZYqVffHMUdu0CYTu069KzCXKT0TGaqWWn9KF6UlECqb4y6HD0Erpdnymi%2BMJbhkTxqmgSP2IOSEcmqWj%2Fc1nj8zgw%2FlczG9T23Dfl%2BWEjF4tLozIPsEGKay4WTj&X-Amz-Signature=ee5946f6c4118e2194d09d4065e8a5b68feb0fec91089afbeb4520a4209e8b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJA34VW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyqc8PQchv45OY6Ojvi4NUF3h9PL%2BQwbm8%2FQ9RvEhgsQIgP1gAZBMBmVbZTpAsNOetFHt9k1hhxGTHjC3MfcUFNKsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwOHQBeYOP2u2IIiCrcA7eIDdyH6jpo6KkkDO%2F30Qm%2FpErBXgjb8qwmSR2VkXCKdxUhDAXGUmP6dRaLuPV5D8JAI6KWfiyjSsbBvYMBGhJomvJYpsaUDPMw5NDvgN69q4XThvCLVkYiLA7uPkYWkJimS942wp3THwWzgSwr7xksDUjvAmD8vdaLJuToSkcoKY%2Bud15Tduj3R0fSliRE9eBJ6sAB9Ugh431nToTEPQ9RMXgjTCWI37uimsQK%2Fh%2Bx8QX0PDtxseCX5AkHEkujWrieM7tiL3etYctBbU7OgKugPjgt%2BZXoJ18KAU0ZibiaZoc%2FYAMGSrO%2FTLPFoLlbP9nGnW0pRgFE%2B5Lo0kZl3L8Eqkt5POmpDXJFJBY5eDMa3YqoLzlPvgWgRkFbQPnROfjFmjGoQgqO6ZfjToXNd8bu%2BgGLG22Mz74Qcnj5CWqOuA7yrTzZW%2B0%2B4xNwqGNTr2rX6%2B8mbaJ5sgA4KXucIp9XN7r8vNAwSxnUqvKS7kU5r36xSXM1BPZRK0nL5m8aKShGidGVb85Af%2Bm6NYTrFVoskdNNkuC6H7L3IgAZKphIx48yWTW8Fq535vQIKDfv7pJTzCCnIErvSacTws2lyxB0G%2FcjQyi%2BoqtbncwHmvB2WkSOZMJg81lS7S%2FvMIzv2MkGOqUBtkj0IZu9TOlk%2BmmkZeppkeyFhjz910tMkSoun9zbzevJoqWblNl7bJCiJ7y7jOBunY2yupTp6fGN6jOr03XsSe5bDCwZwde6EZYqVffHMUdu0CYTu069KzCXKT0TGaqWWn9KF6UlECqb4y6HD0Erpdnymi%2BMJbhkTxqmgSP2IOSEcmqWj%2Fc1nj8zgw%2FlczG9T23Dfl%2BWEjF4tLozIPsEGKay4WTj&X-Amz-Signature=72354588afb57d9c637096040214564e02d36358c7e4831447c71bcceea10fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
