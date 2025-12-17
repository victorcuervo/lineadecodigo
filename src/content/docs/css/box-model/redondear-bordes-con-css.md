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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOQUTRJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo1Ji6UUJXf0uiI37jemnRyZSXGN%2FImKqaPwAK3AiaAAiByL2EkFaxOrawfjTaSH1bXxkbC4v5o3A8iEOlGzHIyHir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMXxRkmhVV8ryeDZ5NKtwDjjHkrNaYtcKHe6UTW%2BTbdAYS80CDO8ss1vMkx3YMPjbQzSK%2BpvNs%2BBlLvZc%2F1o1cdohc4%2Btmt9kPq0ZlAzEZSF2WZ5KjcTxu%2FJ4we72C0Ckg20KGcDccN%2BwuR6n5mwEYii0lQ%2FvMCQKJkpQKrhPOMptl%2FpB340crWSddlzWwxupfo7EAfhLFGj2KHUHaPkNGVj2QRXWuxCqJB%2BQ9GCOJ6los5On4cRcq3aNFeZVmeGbg4%2BsSxQ%2Bi0pwY8SlQPtERshNz%2BLTUgdiY2zlYYycpMmg2b2N%2Bcs2hl8vPpoIMsQbPrQO0mhsZUEIFr1Cg2bESC5ofmeYe3RAeg%2BlsZfP5I56d9Wypjbb%2BXIVK5vHqTWJge27CjDg%2FsNJLjK0I16m%2F7bW%2BY2NQcj1E2BFSn7yzBWo%2Fw0%2FsJ0gzj2PcSmCr8hEupuVu5V%2FLaeRbDzjIitPPZab17Ka9AuZ6RlmgIkkIrAOo96BRBTwPUf%2BcdCf4K5nSV1Disz6R9r4mkVQOJqPFvRHsMwDST%2FjS09hoMGK2yHDofzSraSUgT%2FUJZ3WY2ETyukI9vZD6r1J6OGNXo%2BF%2Ff5M8u7BKh9gBXr%2BtMHZalKnMEea4lzT3L5RpThZqWgssNWgyjkeS3%2FDT%2Fk4w%2BJaIygY6pgEpYf%2BI6VfaZerb5xuRydPjWkuQIX8gYgkBmPFBWV4QLlSis7oG6gSoHl71WueUtkMpuNBBFLZpSGOEtS%2FeUONesnVd2Qk9Tt3FPtsBXUMqeuwmjxQovq8iSJrY1zNK8y2hii3bNc%2BUAL8dewzgvbD2%2BmHE1I1GUT17JC31h%2FMXFzmS83j02Ss9FoPPkKhIGHP9PRZaq8v2vh96nCI1wsIUPiWH9Ixq&X-Amz-Signature=bfa6ea1dce8e61276365d4ce5e550f03848ca28527da7ebc237d92d695874719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOQUTRJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo1Ji6UUJXf0uiI37jemnRyZSXGN%2FImKqaPwAK3AiaAAiByL2EkFaxOrawfjTaSH1bXxkbC4v5o3A8iEOlGzHIyHir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMXxRkmhVV8ryeDZ5NKtwDjjHkrNaYtcKHe6UTW%2BTbdAYS80CDO8ss1vMkx3YMPjbQzSK%2BpvNs%2BBlLvZc%2F1o1cdohc4%2Btmt9kPq0ZlAzEZSF2WZ5KjcTxu%2FJ4we72C0Ckg20KGcDccN%2BwuR6n5mwEYii0lQ%2FvMCQKJkpQKrhPOMptl%2FpB340crWSddlzWwxupfo7EAfhLFGj2KHUHaPkNGVj2QRXWuxCqJB%2BQ9GCOJ6los5On4cRcq3aNFeZVmeGbg4%2BsSxQ%2Bi0pwY8SlQPtERshNz%2BLTUgdiY2zlYYycpMmg2b2N%2Bcs2hl8vPpoIMsQbPrQO0mhsZUEIFr1Cg2bESC5ofmeYe3RAeg%2BlsZfP5I56d9Wypjbb%2BXIVK5vHqTWJge27CjDg%2FsNJLjK0I16m%2F7bW%2BY2NQcj1E2BFSn7yzBWo%2Fw0%2FsJ0gzj2PcSmCr8hEupuVu5V%2FLaeRbDzjIitPPZab17Ka9AuZ6RlmgIkkIrAOo96BRBTwPUf%2BcdCf4K5nSV1Disz6R9r4mkVQOJqPFvRHsMwDST%2FjS09hoMGK2yHDofzSraSUgT%2FUJZ3WY2ETyukI9vZD6r1J6OGNXo%2BF%2Ff5M8u7BKh9gBXr%2BtMHZalKnMEea4lzT3L5RpThZqWgssNWgyjkeS3%2FDT%2Fk4w%2BJaIygY6pgEpYf%2BI6VfaZerb5xuRydPjWkuQIX8gYgkBmPFBWV4QLlSis7oG6gSoHl71WueUtkMpuNBBFLZpSGOEtS%2FeUONesnVd2Qk9Tt3FPtsBXUMqeuwmjxQovq8iSJrY1zNK8y2hii3bNc%2BUAL8dewzgvbD2%2BmHE1I1GUT17JC31h%2FMXFzmS83j02Ss9FoPPkKhIGHP9PRZaq8v2vh96nCI1wsIUPiWH9Ixq&X-Amz-Signature=7713eb5241afecde64aaca1054732840e06404bf30ee96b809237bc305e0ebcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
