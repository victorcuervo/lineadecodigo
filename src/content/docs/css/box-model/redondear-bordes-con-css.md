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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YNGHS5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx%2Bv7BCMyB%2BK%2BhePJrL84Cz7Oud9L9WGDprch%2FJm%2Fw1AiEAoXy4zbXn6dBPs%2FRtHf%2BavMXerPYT0RYiWWxy6RfckUsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDD9ZaP435rz8fNgmpyrcA3CgV8dT%2BMXzHA8qUfAy%2BpIQcT5iPf5UeFTq%2Fzxb6oPnZyuyay5GBmP0mjdV3LY%2BS%2BFMCXq8jmof6CW3w3Ssctx%2BcwCVgMJFgck9r%2BPqNGQ5QEAbsjpWKhAhfAKH7%2Ff52ARj1CnUDIEmdbUsx9Ljx9piwPF9pxB5r7MekNUgTMe27P4Y1zhhP8uqbcqHNkjoC%2BXTz70i%2BfOo8YTpsebe7WyZ7gsHcd3wG%2FNuGTn9WF4BecdHKgGPoPYkRvLF30nOzzpPaKjRxX%2FCnpvkN296gxU4hagbVoFG6o7mnsmwfcW2z%2BseaKUc5V%2B1e8Mamq7DNd38ChMLxC7X5c3BsZolaJq176iStnoFmmext9uz7J4Qgu%2BqT3c4DlQbg6%2Bnh32coqchkeD3j5ZKBBGq45gxsTs%2BzOa9BENMvRUROxiHrHTm%2FMN1%2BKP9au75ApX1CYu9tcejZWKqRQ%2FI45ecdP957Lag5Nev3UNFdNXI%2Fei946sy5KE%2FKTydOCm3oMRjbeKqgT6%2FqU1F7SaystxaPEQhvX5A1QLRHKWETfZOyYRQ6Jpk7pqBPxvoE1KmUO5D23WekM7VyFldCFQP0xumldwUCLjrbfcw2rW5R5zx%2BEbYJVv6nGPiLGXJlz1vVa0aMIKDicoGOqUBweFIaqkqDMRo3O0rK6WKIKldn0PCwrzNt7JIs5fG2xnSYOD0fPdlghvzD5oBlO73kgtVi5ySp6gvAHR9MVkegwsqIAB5a5nNo%2B2K0zLB%2BSo1i5eordlbhsE9tJsKYGZTP3tRMNd6UDQ%2Fw9cbXVwWYPOWjhHxtX0mdjd%2Bs9dzpBM4jV6DHooQnJZHjHL8pNM1hzDkfQDfFAacCYx3uRDSZ9OgaGhW&X-Amz-Signature=5d98147bc18a1db4102cdc77546a52fe8e0baceedac6e6aebaaa11fa28e110ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YNGHS5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx%2Bv7BCMyB%2BK%2BhePJrL84Cz7Oud9L9WGDprch%2FJm%2Fw1AiEAoXy4zbXn6dBPs%2FRtHf%2BavMXerPYT0RYiWWxy6RfckUsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDD9ZaP435rz8fNgmpyrcA3CgV8dT%2BMXzHA8qUfAy%2BpIQcT5iPf5UeFTq%2Fzxb6oPnZyuyay5GBmP0mjdV3LY%2BS%2BFMCXq8jmof6CW3w3Ssctx%2BcwCVgMJFgck9r%2BPqNGQ5QEAbsjpWKhAhfAKH7%2Ff52ARj1CnUDIEmdbUsx9Ljx9piwPF9pxB5r7MekNUgTMe27P4Y1zhhP8uqbcqHNkjoC%2BXTz70i%2BfOo8YTpsebe7WyZ7gsHcd3wG%2FNuGTn9WF4BecdHKgGPoPYkRvLF30nOzzpPaKjRxX%2FCnpvkN296gxU4hagbVoFG6o7mnsmwfcW2z%2BseaKUc5V%2B1e8Mamq7DNd38ChMLxC7X5c3BsZolaJq176iStnoFmmext9uz7J4Qgu%2BqT3c4DlQbg6%2Bnh32coqchkeD3j5ZKBBGq45gxsTs%2BzOa9BENMvRUROxiHrHTm%2FMN1%2BKP9au75ApX1CYu9tcejZWKqRQ%2FI45ecdP957Lag5Nev3UNFdNXI%2Fei946sy5KE%2FKTydOCm3oMRjbeKqgT6%2FqU1F7SaystxaPEQhvX5A1QLRHKWETfZOyYRQ6Jpk7pqBPxvoE1KmUO5D23WekM7VyFldCFQP0xumldwUCLjrbfcw2rW5R5zx%2BEbYJVv6nGPiLGXJlz1vVa0aMIKDicoGOqUBweFIaqkqDMRo3O0rK6WKIKldn0PCwrzNt7JIs5fG2xnSYOD0fPdlghvzD5oBlO73kgtVi5ySp6gvAHR9MVkegwsqIAB5a5nNo%2B2K0zLB%2BSo1i5eordlbhsE9tJsKYGZTP3tRMNd6UDQ%2Fw9cbXVwWYPOWjhHxtX0mdjd%2Bs9dzpBM4jV6DHooQnJZHjHL8pNM1hzDkfQDfFAacCYx3uRDSZ9OgaGhW&X-Amz-Signature=7a14c93d3775496aa4d65775059416efe1258c81801cd0cab37941bc5ec0cece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
