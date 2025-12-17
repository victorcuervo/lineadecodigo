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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WILFF5SX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6D0Jso3UvHdGYJqHIKS0sTHgog9HqNYezZL6IpS%2BQ4AiEA3YBiUgXxgT38L56529rNaTvMZJ4rr3MGFWYi8QHw9Hwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCpGDOod2fLNW2066CrcA6l57kuBTr95t7uQ1K31AzeddfoC1usqAsX2fM2I0Fook4zlmYlDwiWuXqX4gaP3zBc%2BwSF4IUNy5tm4ggM5n3Kw1rkkzltaBfMHpH5kFLlcM9QxzlYdE1FoJv9EA%2BXsvHx%2FvRUdRjh2D0qmEfh2XM1BB2u%2BZhGHhImFCDOqliEdfT9z5WIxac1GQDZ5xo3B902k%2F8kDXjuoFZH9%2F7XEAtgMdrtFyR4PrEABbTuo276NH%2BNKcPS8YypfHpa%2BUPqU4kElWhFHOPPAab1xy%2BEyZPc8r%2BPeF9livzOdSjt6mgJy1kvb6shJWuG7TxyV%2FEhaRUu8Isdqw5XL20U9PgCudqq2rK7UfUfveStiUb%2B%2F%2FujRw9gH%2FSg6yU%2BFry6ZiDIosr7ZWgrJQAKL%2FpHLSTdwmKxlGR6WYOgLzLqr7rgEV8eGvpw4B2BvZboMfGa07yuzyDAfMEfuZr1uG2WMOLc0RnM1FZpG8Zm5zNhuG7Ph0qcRx5ChhCvswaMlLbJx%2BSg0fCRSohd9KMJrc2ITtWOmK1ne%2BmGXrve1CZKT9l8wQ8QDc1U9lfCYtDSEe1JK9IImQzA2IluIIycvB96mXk80f2ujpOPokhdpNASsqAWlCZRLldVhAyH%2ByUAhFmUDMMydicoGOqUB6BZom5ubwmSFq84jic5IRhh08RvSCFlKQf%2Bevx3wFYiR%2FUhBOiFR1OgJrhN0iWM8uGmdD9HrPK1a9P2UOV%2FJWkEwX1JjH34Dy%2FrxdGYv%2FhzhAi4E9njVSoBzNbGmMCOYrxWLeK%2F2ats2yRNwVfsCGmyzU9ZE%2Be3Si%2FcUFiOWXm7bWGB2It6aVs601BuCHM8l5mqiVkCurYZJyxxIiLqAmq88GdLC&X-Amz-Signature=d2e33990f1cfd27623318f7c6f7fb8c71355db243ccf0c46e5dc97e5931175c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WILFF5SX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6D0Jso3UvHdGYJqHIKS0sTHgog9HqNYezZL6IpS%2BQ4AiEA3YBiUgXxgT38L56529rNaTvMZJ4rr3MGFWYi8QHw9Hwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCpGDOod2fLNW2066CrcA6l57kuBTr95t7uQ1K31AzeddfoC1usqAsX2fM2I0Fook4zlmYlDwiWuXqX4gaP3zBc%2BwSF4IUNy5tm4ggM5n3Kw1rkkzltaBfMHpH5kFLlcM9QxzlYdE1FoJv9EA%2BXsvHx%2FvRUdRjh2D0qmEfh2XM1BB2u%2BZhGHhImFCDOqliEdfT9z5WIxac1GQDZ5xo3B902k%2F8kDXjuoFZH9%2F7XEAtgMdrtFyR4PrEABbTuo276NH%2BNKcPS8YypfHpa%2BUPqU4kElWhFHOPPAab1xy%2BEyZPc8r%2BPeF9livzOdSjt6mgJy1kvb6shJWuG7TxyV%2FEhaRUu8Isdqw5XL20U9PgCudqq2rK7UfUfveStiUb%2B%2F%2FujRw9gH%2FSg6yU%2BFry6ZiDIosr7ZWgrJQAKL%2FpHLSTdwmKxlGR6WYOgLzLqr7rgEV8eGvpw4B2BvZboMfGa07yuzyDAfMEfuZr1uG2WMOLc0RnM1FZpG8Zm5zNhuG7Ph0qcRx5ChhCvswaMlLbJx%2BSg0fCRSohd9KMJrc2ITtWOmK1ne%2BmGXrve1CZKT9l8wQ8QDc1U9lfCYtDSEe1JK9IImQzA2IluIIycvB96mXk80f2ujpOPokhdpNASsqAWlCZRLldVhAyH%2ByUAhFmUDMMydicoGOqUB6BZom5ubwmSFq84jic5IRhh08RvSCFlKQf%2Bevx3wFYiR%2FUhBOiFR1OgJrhN0iWM8uGmdD9HrPK1a9P2UOV%2FJWkEwX1JjH34Dy%2FrxdGYv%2FhzhAi4E9njVSoBzNbGmMCOYrxWLeK%2F2ats2yRNwVfsCGmyzU9ZE%2Be3Si%2FcUFiOWXm7bWGB2It6aVs601BuCHM8l5mqiVkCurYZJyxxIiLqAmq88GdLC&X-Amz-Signature=207b3a692845c2fefd20ba958c364535d0545df8bdc4872e41c6b949af5150d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
