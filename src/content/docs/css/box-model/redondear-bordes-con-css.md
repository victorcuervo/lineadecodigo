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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SV2JCSJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhdIFGPRYJWIFelD1ET4SsyeMMI3gamy0aOYhwybtiQAIhANCNolh%2BQvCHiVCtfvChBu1vERMcrmyBrHDDWgfBTo%2BIKv8DCH4QABoMNjM3NDIzMTgzODA1Igxd9C2a4mc1b5WL1dUq3AP1bNNWTYo4bLxS82P2O2X2%2B17jigcrIkQS7hAIvr8AfXBdUyzxRzz5lrxgSXu8hhW7toiNd9jc4JI6S1rljP9oql9YZhvo4ph%2B1caikbQ7EZDDeLZNvXRXneZl4AWbtqMGy9l%2F30fmmIaPzAov7LLwiO75Seww3E9orEfEB9PeA%2FsnEx6TBR3kh4V3PFGFvV7Wbj%2Bbmgsf17JeUM%2BUnt%2Bd4sSUBKMv2IXN5%2FX3iLZun6kX9XZpwFfm1QO%2Bz8cqK3JTJZQvZCen7kGDkZTyKPdujmIDawA2Aja9FHxpBemHoiYcMMNUVFBaCxdvZASI%2FzMGDLfswuStmPI3%2FKZMFYGlYBZ4w4oWsOw4d2%2B9%2FHtE25Bglohn10841BkZhxkgQFELE0Ahd15BCcwaSCtZyc01PakZU9NyvYtkr3rPe5UiimvneZjO8gPwNGwtHz2J7DUHkRj3NSFNTAbz6Mh5vfqvGHstXsq8OWg%2FgQT%2FL7xxiaW9H%2FB0cOpYbMXoFygzYhKWjhP2uSYhyksbFT%2BHRlwpSd9cYc4j2COC3dKM7GTrc%2FlhGC86CeJd0ABTf1ETkAlVvE4s17UNU5bQX2DrB7jSDC7YIJmF9j1N%2FHw7l2bO1stg9pN5q9heCv99kzCmxorKBjqkASj9MiApPA0EesYe1YI8MWwMoZqgp9tRUvlBN4SLx52W9GHJaYQxVhlfGFR1vMx7Hs97EsSTL7wpWvhWevUgtuQHROULKMAJOw7e6DWJPXRUpJLowdTIPmzwbLjtXNsbHp8V%2Bfu5bfKY5roFv%2BdUZIkOLO7uP483XgUuDdx4v5Ko4pGtuJdpPRKGhOJ5WCZ48vLrgnJqdEFkOAFy6yh7PLr6rK9D&X-Amz-Signature=10550e543939593d440e6335cc05b83d81af4e10cf2f8c14dd70bc5c0aa111b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SV2JCSJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhdIFGPRYJWIFelD1ET4SsyeMMI3gamy0aOYhwybtiQAIhANCNolh%2BQvCHiVCtfvChBu1vERMcrmyBrHDDWgfBTo%2BIKv8DCH4QABoMNjM3NDIzMTgzODA1Igxd9C2a4mc1b5WL1dUq3AP1bNNWTYo4bLxS82P2O2X2%2B17jigcrIkQS7hAIvr8AfXBdUyzxRzz5lrxgSXu8hhW7toiNd9jc4JI6S1rljP9oql9YZhvo4ph%2B1caikbQ7EZDDeLZNvXRXneZl4AWbtqMGy9l%2F30fmmIaPzAov7LLwiO75Seww3E9orEfEB9PeA%2FsnEx6TBR3kh4V3PFGFvV7Wbj%2Bbmgsf17JeUM%2BUnt%2Bd4sSUBKMv2IXN5%2FX3iLZun6kX9XZpwFfm1QO%2Bz8cqK3JTJZQvZCen7kGDkZTyKPdujmIDawA2Aja9FHxpBemHoiYcMMNUVFBaCxdvZASI%2FzMGDLfswuStmPI3%2FKZMFYGlYBZ4w4oWsOw4d2%2B9%2FHtE25Bglohn10841BkZhxkgQFELE0Ahd15BCcwaSCtZyc01PakZU9NyvYtkr3rPe5UiimvneZjO8gPwNGwtHz2J7DUHkRj3NSFNTAbz6Mh5vfqvGHstXsq8OWg%2FgQT%2FL7xxiaW9H%2FB0cOpYbMXoFygzYhKWjhP2uSYhyksbFT%2BHRlwpSd9cYc4j2COC3dKM7GTrc%2FlhGC86CeJd0ABTf1ETkAlVvE4s17UNU5bQX2DrB7jSDC7YIJmF9j1N%2FHw7l2bO1stg9pN5q9heCv99kzCmxorKBjqkASj9MiApPA0EesYe1YI8MWwMoZqgp9tRUvlBN4SLx52W9GHJaYQxVhlfGFR1vMx7Hs97EsSTL7wpWvhWevUgtuQHROULKMAJOw7e6DWJPXRUpJLowdTIPmzwbLjtXNsbHp8V%2Bfu5bfKY5roFv%2BdUZIkOLO7uP483XgUuDdx4v5Ko4pGtuJdpPRKGhOJ5WCZ48vLrgnJqdEFkOAFy6yh7PLr6rK9D&X-Amz-Signature=66834a52789c3816492ebbc1c47823bbd920b06966f76b142556755245a01424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
