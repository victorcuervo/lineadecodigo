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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3SUJTC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdkUXjL7jbDkmUvaYha3oLlVth75eT2Heeids5QHjjQIgakfs0E36zNzNC%2FzYutLnzMBVhdroxxiJo4irWUxj7sEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT7Q7t%2F3FfsmKAKUyrcA2rBEqNcMKemRlQni17TE4t7QGqbyut6L67D3IEoUnc%2BF3ghQI%2FxZnEiK30h4AbEHeuY5cfvuKPTne811o%2B%2Bwj2okeRYhT2fkcF4aE23DHswlsFhYl91%2FA6PgdBNAY1fuvBD%2BFyDEh%2BTXX0gGAWwN1tvYLoeJ4BoA5s25MtgoTCFj2OVgvumEgeYGQMJ3pLTQdErAnbdRSTK6dgrtlNcmTqjCPWs4ySjiGvkkRlhMFJeE9axIop8RXwPxC8R7%2FKApQ6gNz%2FuZg%2BUDOFiPs9pF%2B0T%2FqNon%2BzEgXe7I%2FXVogr8sR8TFgSTpdGqIJrveN5E9xqfwVJkGauwRDGx%2F8kK%2FIuB%2FNpxHqdgLMltoYtSiFGLIO6Mi24biNBICgwvizCOocQFj%2FBWDDJF2JRHNw11ZJV8rjpqbVhZLxsqPcQPDGy9z7NtaIfjiyDLJTKB3EJbeg%2BLFi9GOJitqrM2kUKDdm0RC24BRvpi7LGjS9q80qtIS9jAG3Sezv6%2FxCPRo3x6jeU4kU%2FgtJNgYiy8t1m85ZOSZvwI4vguT6vvaTOxPHlaVj97JH8EOE8l4WGGLWixL60UPgYJyb7HO4Mxe%2BT%2FYKwEfZQ%2B%2FtYl%2FrrExcubrObTIrW7yzVP1n7hufPnMM2fi8oGOqUBe0TQ1vdyhdq4qCYAa3WZz6AeT1ZgkPQ%2FqH7mCkb%2BN8BYfZP6Sn6bGj4wqiEe%2FaN6CgOkwCahXVVUExqXgV8P1L4EwW5P3EyezzCABcA%2FhUjIAXbn4hw0q%2FNdVdy9DIZCjJkZEPiLQh%2BXb1Ona%2Bmo61Ncl1djUaw77Bep%2FXnACviEMlqq4H3Uc71Z%2FWpFFy49IwYFPxbR1F5kDrZe7Wccx7aaTz0q&X-Amz-Signature=f3bff8bdc1e77b26f4bbeedac709aab277c8b305f0927b535584d8d4671abaf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3SUJTC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdkUXjL7jbDkmUvaYha3oLlVth75eT2Heeids5QHjjQIgakfs0E36zNzNC%2FzYutLnzMBVhdroxxiJo4irWUxj7sEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT7Q7t%2F3FfsmKAKUyrcA2rBEqNcMKemRlQni17TE4t7QGqbyut6L67D3IEoUnc%2BF3ghQI%2FxZnEiK30h4AbEHeuY5cfvuKPTne811o%2B%2Bwj2okeRYhT2fkcF4aE23DHswlsFhYl91%2FA6PgdBNAY1fuvBD%2BFyDEh%2BTXX0gGAWwN1tvYLoeJ4BoA5s25MtgoTCFj2OVgvumEgeYGQMJ3pLTQdErAnbdRSTK6dgrtlNcmTqjCPWs4ySjiGvkkRlhMFJeE9axIop8RXwPxC8R7%2FKApQ6gNz%2FuZg%2BUDOFiPs9pF%2B0T%2FqNon%2BzEgXe7I%2FXVogr8sR8TFgSTpdGqIJrveN5E9xqfwVJkGauwRDGx%2F8kK%2FIuB%2FNpxHqdgLMltoYtSiFGLIO6Mi24biNBICgwvizCOocQFj%2FBWDDJF2JRHNw11ZJV8rjpqbVhZLxsqPcQPDGy9z7NtaIfjiyDLJTKB3EJbeg%2BLFi9GOJitqrM2kUKDdm0RC24BRvpi7LGjS9q80qtIS9jAG3Sezv6%2FxCPRo3x6jeU4kU%2FgtJNgYiy8t1m85ZOSZvwI4vguT6vvaTOxPHlaVj97JH8EOE8l4WGGLWixL60UPgYJyb7HO4Mxe%2BT%2FYKwEfZQ%2B%2FtYl%2FrrExcubrObTIrW7yzVP1n7hufPnMM2fi8oGOqUBe0TQ1vdyhdq4qCYAa3WZz6AeT1ZgkPQ%2FqH7mCkb%2BN8BYfZP6Sn6bGj4wqiEe%2FaN6CgOkwCahXVVUExqXgV8P1L4EwW5P3EyezzCABcA%2FhUjIAXbn4hw0q%2FNdVdy9DIZCjJkZEPiLQh%2BXb1Ona%2Bmo61Ncl1djUaw77Bep%2FXnACviEMlqq4H3Uc71Z%2FWpFFy49IwYFPxbR1F5kDrZe7Wccx7aaTz0q&X-Amz-Signature=2b3e8dce821a6e188147fa204e8963a6ba90722536727ca5d48c120aaa1c4879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
