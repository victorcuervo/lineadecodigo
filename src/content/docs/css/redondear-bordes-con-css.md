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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF4VTQU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99%2FMYsST458gQmPJ2xylqVGCDsCISyk1S%2FrGDGk3cNwIhALrZAK2iCD295wGZznNNXqegSR%2BPFCJdL5p8i5eNAHuXKv8DCHEQABoMNjM3NDIzMTgzODA1IgyNdoqnhKvk9JVBZjkq3AOafMJ8HByqNsKLngm0l8lyWchh7sLo%2BQ9eu8TuDQQNUvnscS5T1Nj1r9%2FZIfv2kvoZAxastjUSaWwa7Pm8rJbLosVNAcmFz7lkBWaviuHIQAl%2BONw8bsarT%2FqRwiKacxrk%2FNO5eVlrcgU5A9WC0rIJnwbFdAqchjjteYIbBnPMa0bEubZEeVXRd9vO%2BUQDIwTP7pHRvM6MR5EzOIwO7IU4BQ6AU9vW1Th15QRbk2N7j7cIQ%2BllA0UVwRtDc8ASUU8CqUiB7QBiJxC%2FGrLm0%2Br9bXXO4YAB06oIap6s73OJZCH1kCJgKLZurJ5O3G0brQ3f0354k6imjGK35MpcLut1o6XPboTchUJBvexHero%2F97zl1itVH9Pq1PuvB00WO4t4TrW1f5AiQ6gr62mAfwNPpyPizzph4PluzojeG9YPN2q5OuAkjnvcFJAVmExVY5ijyBZMht9BAvwbS0%2Fcrl%2BOvdud9oEJ40ey15IcLvISohRjf3z%2B3Say1GHzS6bCX0O1cHe52Dzj8CcgMRtYz%2BkxlEYMVi7LuRn%2BJoN1rr7cya6xXfcdPhLvGjddld25PdtqDOOFeApeUemEK0nLloB0QmySB2f%2B1oXSu3hcV%2FNVjLIV8nuGMs9Jv9N9sDC8vM%2FJBjqkAZC%2BN466g6VLQggmXRIVjfkaGzDL2bUEeQq1tzmS2VRVZxEUstDJyhkDkj7nduH9H0%2F8%2FS0HVWaAuOcjbt2K9UqWd3BVQURpxuDqOGlsPAGKZ%2FTtqwnvOcyF3O1PusJ6ZZzIA4UgEY4ulZoFuG%2BEEH92%2FnsuQQQnVYNCwnb8FEG05rRtnb7PxdUYwW%2FE4kU%2Fdyg%2B83yt9FP6q1Vl26V24Bqu9uQD&X-Amz-Signature=26fa403240e0ea6cdfe191e79436c06703c1184d65176fd67531b9ebe37a9699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOF4VTQU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99%2FMYsST458gQmPJ2xylqVGCDsCISyk1S%2FrGDGk3cNwIhALrZAK2iCD295wGZznNNXqegSR%2BPFCJdL5p8i5eNAHuXKv8DCHEQABoMNjM3NDIzMTgzODA1IgyNdoqnhKvk9JVBZjkq3AOafMJ8HByqNsKLngm0l8lyWchh7sLo%2BQ9eu8TuDQQNUvnscS5T1Nj1r9%2FZIfv2kvoZAxastjUSaWwa7Pm8rJbLosVNAcmFz7lkBWaviuHIQAl%2BONw8bsarT%2FqRwiKacxrk%2FNO5eVlrcgU5A9WC0rIJnwbFdAqchjjteYIbBnPMa0bEubZEeVXRd9vO%2BUQDIwTP7pHRvM6MR5EzOIwO7IU4BQ6AU9vW1Th15QRbk2N7j7cIQ%2BllA0UVwRtDc8ASUU8CqUiB7QBiJxC%2FGrLm0%2Br9bXXO4YAB06oIap6s73OJZCH1kCJgKLZurJ5O3G0brQ3f0354k6imjGK35MpcLut1o6XPboTchUJBvexHero%2F97zl1itVH9Pq1PuvB00WO4t4TrW1f5AiQ6gr62mAfwNPpyPizzph4PluzojeG9YPN2q5OuAkjnvcFJAVmExVY5ijyBZMht9BAvwbS0%2Fcrl%2BOvdud9oEJ40ey15IcLvISohRjf3z%2B3Say1GHzS6bCX0O1cHe52Dzj8CcgMRtYz%2BkxlEYMVi7LuRn%2BJoN1rr7cya6xXfcdPhLvGjddld25PdtqDOOFeApeUemEK0nLloB0QmySB2f%2B1oXSu3hcV%2FNVjLIV8nuGMs9Jv9N9sDC8vM%2FJBjqkAZC%2BN466g6VLQggmXRIVjfkaGzDL2bUEeQq1tzmS2VRVZxEUstDJyhkDkj7nduH9H0%2F8%2FS0HVWaAuOcjbt2K9UqWd3BVQURpxuDqOGlsPAGKZ%2FTtqwnvOcyF3O1PusJ6ZZzIA4UgEY4ulZoFuG%2BEEH92%2FnsuQQQnVYNCwnb8FEG05rRtnb7PxdUYwW%2FE4kU%2Fdyg%2B83yt9FP6q1Vl26V24Bqu9uQD&X-Amz-Signature=2720eea3110d406da2057aa315f9f3b8ece47abb4256dd80505492714c19b0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
