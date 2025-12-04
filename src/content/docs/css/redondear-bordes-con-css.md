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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGMRJA4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIQC%2B9%2FXwJo9uC8pPqBBiBvGq%2FahRO9S6G3v2hBRqUqIEuAIfDcxVHpeIhGsaOl8z8EIpuNcEdG4N0Bj1Rjqe6ZYqBCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMzA90HtTQEWuyOJc3KtwDdo%2Fw%2F%2BesMvEXBrdQC1kjVx5buZpt4AaB8XwxC%2FZh6ODROIqHGxsn%2Fq5Pjqt36pzaDgGqQxHNVskMHX9jyVm8VAmVmzXnA02QmEz%2FyduSDYQZLHLMAECSeavPmeEoiFrX7nSELLzLjeroPd7fGIUSDX59L3j4oQg5Ac9bpPRCUe6TAunBzeY128%2BbR9CCVX696Y7Bl8ONLsNJmCo9xSL9HhPsFGlPrpD8WqlmKidB%2B6tZ5prEFAwmXA8ihyOz4XdZSlT6MOVsM3bHahu994l0KPdDjhVvIbionMHA7sS7KQXGXzjOJscATB%2BCCwnicgrVXF3p%2BB7h82R3ZfFseZFElAfH4xmoOmh%2ByjveRHiKGezhO%2FKGtzKdQwgb48YM%2FYvJHRuN3SHN569pTwEZ5m23YfpE9VKKn1YnyXKb%2BZuJpOjpgJx2bUQ9WtxQAxtSEIlCkV868jbgPJcO7y1Vqcsg9t12aFHb%2FRejMs%2F4WvS2mrX85%2Bxw8mUnnv%2BGBfE0RrgdZEEJKHUDiBnQCZxVOBbOHQ%2FtzBXxFraSqKbyHhTmKiirpVE6v%2B7qVt6tXfh7OpRn0OTAoJI1UENroaBT%2B4H%2FptGJxdmyVcW5x7pCAAgBIxQw8P1hZfp7qKiztfcwjZDEyQY6pgEWCcxbscf2kDHUlpUdSk0h2ibqbO8lWxa4sE%2FQc%2Fj4i37nxwP27QDYSN3c%2F5tIy0XnVzUY%2Bu1kvyVSLUk8GFA%2BbO5RVrA4QJhaV0jTjoCXTUW3A4sWbXutBAsDkVlulDbV5hzBbN%2BbZUP4gFJEortAQGCpW5rXNEFqLAKNaXN9DsY6mCQ6MA9lVv0a%2BpN%2FH1ygb%2FZhI0nu9lJ5gsDXSEzTsjKTxCl1&X-Amz-Signature=9da13ad8852025b2fdb2285092689e3730743b2f66c47ee840f916e088ba8b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGMRJA4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIQC%2B9%2FXwJo9uC8pPqBBiBvGq%2FahRO9S6G3v2hBRqUqIEuAIfDcxVHpeIhGsaOl8z8EIpuNcEdG4N0Bj1Rjqe6ZYqBCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMzA90HtTQEWuyOJc3KtwDdo%2Fw%2F%2BesMvEXBrdQC1kjVx5buZpt4AaB8XwxC%2FZh6ODROIqHGxsn%2Fq5Pjqt36pzaDgGqQxHNVskMHX9jyVm8VAmVmzXnA02QmEz%2FyduSDYQZLHLMAECSeavPmeEoiFrX7nSELLzLjeroPd7fGIUSDX59L3j4oQg5Ac9bpPRCUe6TAunBzeY128%2BbR9CCVX696Y7Bl8ONLsNJmCo9xSL9HhPsFGlPrpD8WqlmKidB%2B6tZ5prEFAwmXA8ihyOz4XdZSlT6MOVsM3bHahu994l0KPdDjhVvIbionMHA7sS7KQXGXzjOJscATB%2BCCwnicgrVXF3p%2BB7h82R3ZfFseZFElAfH4xmoOmh%2ByjveRHiKGezhO%2FKGtzKdQwgb48YM%2FYvJHRuN3SHN569pTwEZ5m23YfpE9VKKn1YnyXKb%2BZuJpOjpgJx2bUQ9WtxQAxtSEIlCkV868jbgPJcO7y1Vqcsg9t12aFHb%2FRejMs%2F4WvS2mrX85%2Bxw8mUnnv%2BGBfE0RrgdZEEJKHUDiBnQCZxVOBbOHQ%2FtzBXxFraSqKbyHhTmKiirpVE6v%2B7qVt6tXfh7OpRn0OTAoJI1UENroaBT%2B4H%2FptGJxdmyVcW5x7pCAAgBIxQw8P1hZfp7qKiztfcwjZDEyQY6pgEWCcxbscf2kDHUlpUdSk0h2ibqbO8lWxa4sE%2FQc%2Fj4i37nxwP27QDYSN3c%2F5tIy0XnVzUY%2Bu1kvyVSLUk8GFA%2BbO5RVrA4QJhaV0jTjoCXTUW3A4sWbXutBAsDkVlulDbV5hzBbN%2BbZUP4gFJEortAQGCpW5rXNEFqLAKNaXN9DsY6mCQ6MA9lVv0a%2BpN%2FH1ygb%2FZhI0nu9lJ5gsDXSEzTsjKTxCl1&X-Amz-Signature=9d553a7e6346a483e8c1ec904b3ddec5fcfbebac8975e5253202ee2cf09bb88f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
