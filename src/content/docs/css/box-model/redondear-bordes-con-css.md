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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BP5SRJO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8nkWDDvGyjlu978vDXBI6uQLbprNcGJAOzJi7%2BQsQcQIgEuJ78W3%2FLisXzLJeT%2BchrwaoaowzPR27xwdhCSHZOEIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKPtXpDgt79W4mh4yCrcA3yl8YSHiSSOhZlrZc13MAwSEGX06uCLQZqTk4oQKFp1tvv2%2BN%2BSWqcGglpnUPOc29Eeg00Zrff%2FDQ5XUxkDTZ%2FB4r96MQ1cNeN4Q0Yy0eY4vtXZ3daglCup1p9dJ7%2BZhSTaPhfvVGSjZ%2FnitUQ6CV1kssiRO58z45DRG8HRYF7OWz9MMykJcWc1qJRgO7WxYy8Jdxa764I2MwKNhx7R63%2BYwZPILMHELmw88DobJulq3Lo%2B1UnNwDFnY8BBohzjzZ3ajLHq0yk1YNwZdiCg7WsqGY9vfIVn%2FFRKXgipPlIOIxF5jz6%2F6n5Y14f7AaSqE5dPH4VrvPmz6wiW%2FgbofNDQenEBJvvTkAmu2MHYKAvlt%2FMyjqMC3msvB%2F0ITXiJDgPqhLQmflo%2BiEdxVkKfcGUJ5OOQSe%2BOTqTLFhMYrMggiyY7UOvNVfHSQ7seq4Kgts5HkOpBVc6waoC20V0wFMeSZkq2yNOh1Vv9u4VhDCoUYkWZQjn9gOhm0HbW8yxmGCzdbIpZDmWP%2BZeFAhWZrXpqNtSk4G9%2FcdBpOa7H0U%2BzEOiAy%2FLxGSK0YrAOU8g9MJjJUi%2FhC4plz%2Fg7A5voLB4HPqGOJYLspdP%2FBQWbMqwHD2b1%2Fed5B2PYcH%2BaMMX7h8oGOqUBjfA6GeuoFR5QafnFXkaVfRf4KbbM1m%2FAYerIkbyfVoc1chLtVN4nLfhfUg0ULVM%2BLcEsgv4kLDh%2F4GF0GPo%2B5yYW5wDXGQAzUJTq1uQwSW%2BYFdkRgsM9a4v9dcXNYJtHMr96nwZqKr9XsDsdJXYi0617HPX%2Bg6HYiDY7KNhPgf0zvdOAIgBs1D368QVi2m%2BGKd7m%2Fi6hb113syJRNd4qdRVfJFS6&X-Amz-Signature=8b3c763a23b01ee2a503fceea04323fc8faf276b54b439b72edbab4e87fdbf6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BP5SRJO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8nkWDDvGyjlu978vDXBI6uQLbprNcGJAOzJi7%2BQsQcQIgEuJ78W3%2FLisXzLJeT%2BchrwaoaowzPR27xwdhCSHZOEIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKPtXpDgt79W4mh4yCrcA3yl8YSHiSSOhZlrZc13MAwSEGX06uCLQZqTk4oQKFp1tvv2%2BN%2BSWqcGglpnUPOc29Eeg00Zrff%2FDQ5XUxkDTZ%2FB4r96MQ1cNeN4Q0Yy0eY4vtXZ3daglCup1p9dJ7%2BZhSTaPhfvVGSjZ%2FnitUQ6CV1kssiRO58z45DRG8HRYF7OWz9MMykJcWc1qJRgO7WxYy8Jdxa764I2MwKNhx7R63%2BYwZPILMHELmw88DobJulq3Lo%2B1UnNwDFnY8BBohzjzZ3ajLHq0yk1YNwZdiCg7WsqGY9vfIVn%2FFRKXgipPlIOIxF5jz6%2F6n5Y14f7AaSqE5dPH4VrvPmz6wiW%2FgbofNDQenEBJvvTkAmu2MHYKAvlt%2FMyjqMC3msvB%2F0ITXiJDgPqhLQmflo%2BiEdxVkKfcGUJ5OOQSe%2BOTqTLFhMYrMggiyY7UOvNVfHSQ7seq4Kgts5HkOpBVc6waoC20V0wFMeSZkq2yNOh1Vv9u4VhDCoUYkWZQjn9gOhm0HbW8yxmGCzdbIpZDmWP%2BZeFAhWZrXpqNtSk4G9%2FcdBpOa7H0U%2BzEOiAy%2FLxGSK0YrAOU8g9MJjJUi%2FhC4plz%2Fg7A5voLB4HPqGOJYLspdP%2FBQWbMqwHD2b1%2Fed5B2PYcH%2BaMMX7h8oGOqUBjfA6GeuoFR5QafnFXkaVfRf4KbbM1m%2FAYerIkbyfVoc1chLtVN4nLfhfUg0ULVM%2BLcEsgv4kLDh%2F4GF0GPo%2B5yYW5wDXGQAzUJTq1uQwSW%2BYFdkRgsM9a4v9dcXNYJtHMr96nwZqKr9XsDsdJXYi0617HPX%2Bg6HYiDY7KNhPgf0zvdOAIgBs1D368QVi2m%2BGKd7m%2Fi6hb113syJRNd4qdRVfJFS6&X-Amz-Signature=ba7075a6a9a4358148c01d44ad226eae35a54a31533935f491ae76b2e5308bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
