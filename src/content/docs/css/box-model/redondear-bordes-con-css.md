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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNVODBN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnW7tPhVDIY43whfdbLYaVLJy6qT2ag6FbXWx5RlZeWAIhAKJbHL6wVrWVXx3RMKF7xF4EuXuB%2F4aFzjL0aly9EbFtKv8DCH0QABoMNjM3NDIzMTgzODA1IgwbwDEsSGDSlhawWqkq3ANLEtqNjwSxzaNRWF5x5AItjQAFM3ufxiCYn5Hr8ouCOanktS%2F0cCmE2SFEn2xU0u%2FTTRV7Gw%2FWEMIcfe9WNbQ6J9%2BWRGa8782HJeqdLqy%2FT7kkxh1himKdn%2BRLiuBzw3R75ep2FKd3Zl3S3IT8HR%2BY%2Fvq0yGwYT64bQ6NGsLtAtSvbTZBcQo1Y%2BPvNkA7m%2BA53S%2FbVqhAYMzmixiLm1kWRlYvQPSIeL54CLOGD%2BSnL8Mjo3gjd5EtDpLVsKk1oYwwOFqQsrQ0JpLupQn2oHKDE8ZDUZbj1MOU14DKeiTZeF8faopNjHGavi8aWMa4lHnnnvNXrkkcubW3A5x4hg1%2B9UwAeWY7XgKvFZqc4ABBX0eP8uItU8fHzJ1iXwwv%2B3tYu%2B8H0ZBziqE4C%2FHTqEoqEoF%2Bu8uH7aot4AzZldfiIRo3m6q75VVWBOU8DBT3pUbap%2FYWFh9jRH54DN9znhueSu7fxgB3P4NP%2BgbkcKmZ7iwjhO4xlqFOLsrBhpbDYXMJBFeBrSPFpkNKOFdXv6nyPGVDRJfdpN6kibluo1jcQyH1boXi83sndaZDLpC5PgVC61DI9kOa1JOP2UyUZhwNSq%2FMYQiu8Td%2F9RsqZPPCgCZyTRaPizDVIUm1h8TCfqorKBjqkAXcDW56DV%2B%2Blxal8G8PB9qVln%2FxQElv9HQR1n9vNf1LQZifxRpuYgG3LI1sdmKeTETDElNz7dQB2OOeUljURqa5irIxfVnSu7zpW8X444Qrn1iq%2Bee25PhhT9MEaxjkxY8DghWZW2oHNYeogrN%2F5jtJnEgAyHg0EzGC0oJKW5Uaoh49V6L6lVvmyDwM6hAFkPxSL4rmfERX5D1TJHEqFwyTe4Da4&X-Amz-Signature=9bd1d88b6b93347c8659072c0e3a8be53fd4f0643e76947b93fd883054fa01ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNVODBN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnW7tPhVDIY43whfdbLYaVLJy6qT2ag6FbXWx5RlZeWAIhAKJbHL6wVrWVXx3RMKF7xF4EuXuB%2F4aFzjL0aly9EbFtKv8DCH0QABoMNjM3NDIzMTgzODA1IgwbwDEsSGDSlhawWqkq3ANLEtqNjwSxzaNRWF5x5AItjQAFM3ufxiCYn5Hr8ouCOanktS%2F0cCmE2SFEn2xU0u%2FTTRV7Gw%2FWEMIcfe9WNbQ6J9%2BWRGa8782HJeqdLqy%2FT7kkxh1himKdn%2BRLiuBzw3R75ep2FKd3Zl3S3IT8HR%2BY%2Fvq0yGwYT64bQ6NGsLtAtSvbTZBcQo1Y%2BPvNkA7m%2BA53S%2FbVqhAYMzmixiLm1kWRlYvQPSIeL54CLOGD%2BSnL8Mjo3gjd5EtDpLVsKk1oYwwOFqQsrQ0JpLupQn2oHKDE8ZDUZbj1MOU14DKeiTZeF8faopNjHGavi8aWMa4lHnnnvNXrkkcubW3A5x4hg1%2B9UwAeWY7XgKvFZqc4ABBX0eP8uItU8fHzJ1iXwwv%2B3tYu%2B8H0ZBziqE4C%2FHTqEoqEoF%2Bu8uH7aot4AzZldfiIRo3m6q75VVWBOU8DBT3pUbap%2FYWFh9jRH54DN9znhueSu7fxgB3P4NP%2BgbkcKmZ7iwjhO4xlqFOLsrBhpbDYXMJBFeBrSPFpkNKOFdXv6nyPGVDRJfdpN6kibluo1jcQyH1boXi83sndaZDLpC5PgVC61DI9kOa1JOP2UyUZhwNSq%2FMYQiu8Td%2F9RsqZPPCgCZyTRaPizDVIUm1h8TCfqorKBjqkAXcDW56DV%2B%2Blxal8G8PB9qVln%2FxQElv9HQR1n9vNf1LQZifxRpuYgG3LI1sdmKeTETDElNz7dQB2OOeUljURqa5irIxfVnSu7zpW8X444Qrn1iq%2Bee25PhhT9MEaxjkxY8DghWZW2oHNYeogrN%2F5jtJnEgAyHg0EzGC0oJKW5Uaoh49V6L6lVvmyDwM6hAFkPxSL4rmfERX5D1TJHEqFwyTe4Da4&X-Amz-Signature=ba9d0d8e59470d7de7cab6d113ed6c6b553475b5498cb9de1df8693035785c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
