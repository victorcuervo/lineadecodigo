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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LELURKF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2DKktHovSuHNDOsxkeU8szNKhv8PnOb1WPJaFUdZfGAiAUBnL6cjwqAED9nvKM9d1zHtG0UVdNIuVEbJ2NN1g1HSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMVpBu2660zkYilR2wKtwDqVczFz6NzRHx0vM6gh2aOtg99NvLySRl64HfAuP09RagkV%2FZCn%2BaLtIXo4GB5i9JIrbvThe0udEDIXnHl6P%2B5vgRbVloCb%2B3pO%2FKYG0knV5pCbtDQhG5PSwhWUfRJ86AAYy2L8DCZTXUFMLS6SGNPCcFBF6ZXewm0fufFC0VH4jZYSXF18e4vJ3IeU2XnSSuemtXJM2Lot%2FVQNx5JD6SfuBOo%2Bxzt%2Bv9GNpSJfbJLD4QmdqXVrjDEtsCJRk4HmvwEd25EB76uXr4N3mPnGSCajUDT8jVf6l8J1hrWY9Eb4fU23RYUb373wYQLSKXsU7FZ7sAmbdLHoZVYy4R3eosJ9Fz08ZNEi5bj3spmupcV3QIE7QqOfY%2BnFyukKISAPLcN6ytJWhUNeL8pwhxyHLlwTscyKTkBfOGNkAlIsSEkwUXNWHN8c1%2F9ftXyPjzyYQj0D2Vx1rqxdKMNDykSfQeH5DpNB%2FT9mpE%2BMwBB0h1Tle3iOhBHDsZqf%2F2eGxIwpepXkbKOrajARj26ddTHtxFsIcZqrnaFz5HtG28PCn6Uju1jTayEDuDHaARq9gu17KYFjFCzGK9I%2Fe8rQkCTEgOPFfZVhI65nha%2BfbjgF1CLejXi%2BcdamX33ryIj%2BUwzP3OyQY6pgFMalj6VuYXURbBA7dUoqz2ff7kKzcEL%2FAnkk0Hz1WubbiTVYbHMFADJZKI3JJZMHpVmb%2Bw9u%2F7JhLZAGi6sHuvPFhtmrQECVeW19p1%2BxMtHjAdvLzgYQTmuGsY8UmPKBZe1wdmCWI72qOuNvbo6GQZc3RatBQ6iLiWLRX2ECLaALjUklfpO0RDpHazhnmnRKFwqDAyFnT5oKtZKAk1wo%2FTUulkbwzy&X-Amz-Signature=7150c2084690b922c6bfb47e4b71c4b0a3016ed0f5831c53860bd58a5938307a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LELURKF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2DKktHovSuHNDOsxkeU8szNKhv8PnOb1WPJaFUdZfGAiAUBnL6cjwqAED9nvKM9d1zHtG0UVdNIuVEbJ2NN1g1HSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMVpBu2660zkYilR2wKtwDqVczFz6NzRHx0vM6gh2aOtg99NvLySRl64HfAuP09RagkV%2FZCn%2BaLtIXo4GB5i9JIrbvThe0udEDIXnHl6P%2B5vgRbVloCb%2B3pO%2FKYG0knV5pCbtDQhG5PSwhWUfRJ86AAYy2L8DCZTXUFMLS6SGNPCcFBF6ZXewm0fufFC0VH4jZYSXF18e4vJ3IeU2XnSSuemtXJM2Lot%2FVQNx5JD6SfuBOo%2Bxzt%2Bv9GNpSJfbJLD4QmdqXVrjDEtsCJRk4HmvwEd25EB76uXr4N3mPnGSCajUDT8jVf6l8J1hrWY9Eb4fU23RYUb373wYQLSKXsU7FZ7sAmbdLHoZVYy4R3eosJ9Fz08ZNEi5bj3spmupcV3QIE7QqOfY%2BnFyukKISAPLcN6ytJWhUNeL8pwhxyHLlwTscyKTkBfOGNkAlIsSEkwUXNWHN8c1%2F9ftXyPjzyYQj0D2Vx1rqxdKMNDykSfQeH5DpNB%2FT9mpE%2BMwBB0h1Tle3iOhBHDsZqf%2F2eGxIwpepXkbKOrajARj26ddTHtxFsIcZqrnaFz5HtG28PCn6Uju1jTayEDuDHaARq9gu17KYFjFCzGK9I%2Fe8rQkCTEgOPFfZVhI65nha%2BfbjgF1CLejXi%2BcdamX33ryIj%2BUwzP3OyQY6pgFMalj6VuYXURbBA7dUoqz2ff7kKzcEL%2FAnkk0Hz1WubbiTVYbHMFADJZKI3JJZMHpVmb%2Bw9u%2F7JhLZAGi6sHuvPFhtmrQECVeW19p1%2BxMtHjAdvLzgYQTmuGsY8UmPKBZe1wdmCWI72qOuNvbo6GQZc3RatBQ6iLiWLRX2ECLaALjUklfpO0RDpHazhnmnRKFwqDAyFnT5oKtZKAk1wo%2FTUulkbwzy&X-Amz-Signature=d13cc793feac8a3bcd2e60d5fc62b0aece6b289762d3ecd51a3c6ef5ee235b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
