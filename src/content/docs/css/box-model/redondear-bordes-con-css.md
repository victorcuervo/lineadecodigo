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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUADNJ62%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEArCFTX3RMAl2SJ9q%2FWf7a%2F%2BD07I6Qbsho1TC5PRT3BAiAoWlBmDZnGuZtT%2FbDLhPtCujjuCd%2F%2FhjgX4z9rvPmqcir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM8bD8T7EyZmvo7k4IKtwDM6rdHY2q7tXA0P%2Fi72VDrY%2FUQkJx4mu4Zxp5%2ByRCs1KbnAG%2B%2Fzt3ECD0w4yt25HG785sq0u46GnitO5MCadCKeAsUhEwmUPjs4iZ9yotPy9STqleqVfmQIPZeyEWAujG0A02hACsz27x1uuSzQH9TLEHRVL6pRj165wF14qgzR5FTn9z3QfbqFyNRZg%2Be%2B3RRNmlrVdrzjq8fpvyGN4NOpJVmTlSYH%2FNmkFQEIat833S%2F8IAIiMo4sI1wdiWn3UXxuRQkSyr4%2FO8eQPVM4MV6Y1C78Zn9PbIksrDX4EajRlWjmL37JLdWsFBM5RWABbsPGxKNO7QweuggbHOM63ZPKw8JI3ZIHomXKoiEFwY6zDHPII4GuRCq5sAEd1CL8vweRxngumY7pCh8uhJjzXUYoleSybo%2F6BY%2F2hw0gesRbYDFA9H7vhIvrQcPxWxoniz88yxZ2xDMZTdGHPGVzM0yAS6GFVjfCO3XWQJQ03mZi1F3DfnH7sXrHHSmDPvs96mqWJ8mrzhS1wsgJ2QOJgizrqTNCQ8IKreCaO1oTeTHQaATXTfJf7g8ejzca8W%2BnVmK7JUnpEZF0bNg9ZZWTSipYqdG6JAwXtvZidAAidct4be1xAvSp%2FFpN6ui8Mw9%2BmIygY6pgFmG2nkjBiI7bMvIYKE1lBS1sub6t48eY33p7l0s0%2BNXTMw%2BwGSQ60I9HfIplA5ty5WSVlpJiznr%2F20Afy6nBmqyWn%2Fp%2BMvd1hk68s%2BVBQ0DDYXwdt9xp5%2BhL2p%2FuyDQh%2BGnwC4XuncOAUR6wg1Hh3GmOoysesxt0X2rCoQFbv%2F9X5gAty9LQdFQxQ5RaDMroVFeuVW9UJraSJHuSjoXoyzpwZk0fBB&X-Amz-Signature=2d8d9d2efaa695781c0122b9a9a509d35714ec5234370d704f5e63d21de0cfac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUADNJ62%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEArCFTX3RMAl2SJ9q%2FWf7a%2F%2BD07I6Qbsho1TC5PRT3BAiAoWlBmDZnGuZtT%2FbDLhPtCujjuCd%2F%2FhjgX4z9rvPmqcir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM8bD8T7EyZmvo7k4IKtwDM6rdHY2q7tXA0P%2Fi72VDrY%2FUQkJx4mu4Zxp5%2ByRCs1KbnAG%2B%2Fzt3ECD0w4yt25HG785sq0u46GnitO5MCadCKeAsUhEwmUPjs4iZ9yotPy9STqleqVfmQIPZeyEWAujG0A02hACsz27x1uuSzQH9TLEHRVL6pRj165wF14qgzR5FTn9z3QfbqFyNRZg%2Be%2B3RRNmlrVdrzjq8fpvyGN4NOpJVmTlSYH%2FNmkFQEIat833S%2F8IAIiMo4sI1wdiWn3UXxuRQkSyr4%2FO8eQPVM4MV6Y1C78Zn9PbIksrDX4EajRlWjmL37JLdWsFBM5RWABbsPGxKNO7QweuggbHOM63ZPKw8JI3ZIHomXKoiEFwY6zDHPII4GuRCq5sAEd1CL8vweRxngumY7pCh8uhJjzXUYoleSybo%2F6BY%2F2hw0gesRbYDFA9H7vhIvrQcPxWxoniz88yxZ2xDMZTdGHPGVzM0yAS6GFVjfCO3XWQJQ03mZi1F3DfnH7sXrHHSmDPvs96mqWJ8mrzhS1wsgJ2QOJgizrqTNCQ8IKreCaO1oTeTHQaATXTfJf7g8ejzca8W%2BnVmK7JUnpEZF0bNg9ZZWTSipYqdG6JAwXtvZidAAidct4be1xAvSp%2FFpN6ui8Mw9%2BmIygY6pgFmG2nkjBiI7bMvIYKE1lBS1sub6t48eY33p7l0s0%2BNXTMw%2BwGSQ60I9HfIplA5ty5WSVlpJiznr%2F20Afy6nBmqyWn%2Fp%2BMvd1hk68s%2BVBQ0DDYXwdt9xp5%2BhL2p%2FuyDQh%2BGnwC4XuncOAUR6wg1Hh3GmOoysesxt0X2rCoQFbv%2F9X5gAty9LQdFQxQ5RaDMroVFeuVW9UJraSJHuSjoXoyzpwZk0fBB&X-Amz-Signature=b631d6fcea306bcf4c8d509a5fc3cc8654bd1f70d754766dd8c55e488196b211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
