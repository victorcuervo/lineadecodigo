---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN6DOIM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDpKslzMjIrMaeid%2B2b9wo6Ks%2FrvdaFKxOq5MV%2FRWD6mAiB51N6Bm%2BoTuF3up5hVnwajcXFNEB3s1%2BjF6HTv5L5IlSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMus16IdKwJyxkeSAzKtwDTKJsOJS%2B3V5pvtu6jc2CoqG4EDdiBRAvJuFC9mxwlX1HYpgJOBd%2Bs4M3VhtF6LklZNMhXQKjmG4kPqpILSTGyg0ICc2xbEUzCs7XMRLDeNsm1ILawIuIx8BQY8yDdGTstYInYYgv%2FuqlGqQVTogtwPvPTUgWkOJfrtpW%2BjsPTdKtT2Ls8fLbfRxn1hE%2FOJNcq6aKLYxpFXKdeWHnZ1%2FQwdFoD6eJ1eCDOU52t2TLlfhuLSMC%2BQMmAMriXJudf%2FKjLaz6cBwhcy5J3rONjRXVwk6m4o4bScrsqfoqVQnJjAuw%2BGyN9FOpWEQ7j0xfEQMfdLjV3d%2BUGH%2BjzOEpYvTsW2R8RMjekrl60V9qkOexi4Q1e%2FMWzdnQdkUQdsWCmVx%2FeNk4v85ZzRkS4ZbRR3RrrUq%2FrYygAGXxKgyzEiP6rk9hYNhiJJ1i0GCaRI5JTcnxN4t6MlB%2BmmDiJUv%2BVNAcGelYMSbXn9DDr7A9kRX9MGsZuz7l%2Fvx%2FjMrGG5UuBaUI2LOGSgVygC3LoISkoNzD0y9W9isj7PGnLQhAPDQLCnTI%2BwemScAwaKkChNsXn%2Bg0Z74SD0YoQpxKKvbzsYjsr5u5Ts1sgVj8sjKwzn82FtAJdPoZzHpRCXfPjGQw2fPDyQY6pgHkesh%2Fmge0xY1jjgGceL8oLyBZpfJVRBKwG8vksiIxPOZ%2FPkHTC4hdEMD96AiveLsitdBJ4gjKoOrTJ44%2BiFP331fA2eYoLB78DIsIRSjd2QOafcjA2QIsyAknTsefZXkTdSxIM%2BETHQ5GntY%2BbrAR9eE%2BnsfbTMcYMPb4Jr%2F%2FBM6ILg2iqFbqR%2FqM2VLZDZDir7VKiMcgXHwr9xkEWNs%2Flab1Uuh%2F&X-Amz-Signature=2859d9fd289a7c5a560196c37beb97c360fff550e352acfa29397fdad51c3e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN6DOIM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDpKslzMjIrMaeid%2B2b9wo6Ks%2FrvdaFKxOq5MV%2FRWD6mAiB51N6Bm%2BoTuF3up5hVnwajcXFNEB3s1%2BjF6HTv5L5IlSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMus16IdKwJyxkeSAzKtwDTKJsOJS%2B3V5pvtu6jc2CoqG4EDdiBRAvJuFC9mxwlX1HYpgJOBd%2Bs4M3VhtF6LklZNMhXQKjmG4kPqpILSTGyg0ICc2xbEUzCs7XMRLDeNsm1ILawIuIx8BQY8yDdGTstYInYYgv%2FuqlGqQVTogtwPvPTUgWkOJfrtpW%2BjsPTdKtT2Ls8fLbfRxn1hE%2FOJNcq6aKLYxpFXKdeWHnZ1%2FQwdFoD6eJ1eCDOU52t2TLlfhuLSMC%2BQMmAMriXJudf%2FKjLaz6cBwhcy5J3rONjRXVwk6m4o4bScrsqfoqVQnJjAuw%2BGyN9FOpWEQ7j0xfEQMfdLjV3d%2BUGH%2BjzOEpYvTsW2R8RMjekrl60V9qkOexi4Q1e%2FMWzdnQdkUQdsWCmVx%2FeNk4v85ZzRkS4ZbRR3RrrUq%2FrYygAGXxKgyzEiP6rk9hYNhiJJ1i0GCaRI5JTcnxN4t6MlB%2BmmDiJUv%2BVNAcGelYMSbXn9DDr7A9kRX9MGsZuz7l%2Fvx%2FjMrGG5UuBaUI2LOGSgVygC3LoISkoNzD0y9W9isj7PGnLQhAPDQLCnTI%2BwemScAwaKkChNsXn%2Bg0Z74SD0YoQpxKKvbzsYjsr5u5Ts1sgVj8sjKwzn82FtAJdPoZzHpRCXfPjGQw2fPDyQY6pgHkesh%2Fmge0xY1jjgGceL8oLyBZpfJVRBKwG8vksiIxPOZ%2FPkHTC4hdEMD96AiveLsitdBJ4gjKoOrTJ44%2BiFP331fA2eYoLB78DIsIRSjd2QOafcjA2QIsyAknTsefZXkTdSxIM%2BETHQ5GntY%2BbrAR9eE%2BnsfbTMcYMPb4Jr%2F%2FBM6ILg2iqFbqR%2FqM2VLZDZDir7VKiMcgXHwr9xkEWNs%2Flab1Uuh%2F&X-Amz-Signature=af9202a6d0abf824efc548cd8c037cc08289af7dc9ce61225f5eb3cf2f4b45c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
