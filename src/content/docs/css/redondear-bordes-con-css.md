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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBAZETF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpRBI911dW709yjEyKDNWXOYvGmsQ9Ufg8AdkbsU0gNAiEAp5edyQNdKqoHccLq8TnXvh%2FlsX75H15Z8OwuKYOCuqIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLZmgB3FzL2l7XJaircA3bTLmrjJHF57T8ay9QdlBYnyc27rCXI4ddk6YVdr7aSiO7n2pOiC2ZxzNUf2SJwGXRtkMTSMH32Se2jw27ANCRFv07MuPA%2FLsmBY9xWcXbjglLF36C%2FJXANR8GFzZht2GJRRo6486z5lLqQGNx2jxJwRfo2bq7vIlJxyTIwbpL5mql9XwRwP%2F%2FaaNay1yrpuyKqTiSKIJUCYKeqIYv7aJH7FYYs%2Fgc9KUsln6Tgk1Ptfoi2G9b0yK9LRZ3qULOHmcoz1jBZMxnYP0kM4%2Fq01yDwgJsT0gNtor8GO3O%2BZdV5HKmMZRRkXfqOzq2l1cmCONaYluu8Ub%2FKvPrjpMR7LcMBjeiLxZu%2BIsTeTUSOTJIm0ygJht4rM8b2V3%2BYGdtnPzn%2FFr55VGwLhL7kPDnk0yuEG5rksz6OkLcijiwCMGopdMwfZvG6weMS7aVRbfCwitOyx2yBE1kdAtXg4fVWpPGTzCAIAt86z5%2Ftl2s9CV1k%2F4FD7kcxad8%2BErdz5p4%2B9yKTFiAHMw3jpu%2Fx4xizrsFINvW20YOcA4JlQklPaPDKTXXoFUUpwj49pg1zm33ek0xD%2Bro%2BWihkWECA%2FooZCqat7drvclEZVDOjHVBjeRFn9k%2BK3XS7m1hP%2Ffy%2FMKDJ3skGOqUBw%2BqVZf1QFCHviasLBcum4%2BJJ8DDyudWegjs4zSqYvlVTI1f1ZzyCvWQFM6C26Fg1czYr%2FnsnI%2FtFG40ngkhZdQHoGXul66o5NR8DSzCWrplEaUGiUSeeSdjhP7vjGiDKIYOFxppiIWyoy3PiBpIAJK0xkarXgzTta4jrPFP6Q8XDfGDQ7jFl4TaayjDtrVDPUZhGqug6CgecHWG%2BYJnJgPm%2BJEUO&X-Amz-Signature=aa8249fc06b8a17e860453cdae46f894e4a24b32e623716008773f1dbba8e875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBAZETF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpRBI911dW709yjEyKDNWXOYvGmsQ9Ufg8AdkbsU0gNAiEAp5edyQNdKqoHccLq8TnXvh%2FlsX75H15Z8OwuKYOCuqIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLZmgB3FzL2l7XJaircA3bTLmrjJHF57T8ay9QdlBYnyc27rCXI4ddk6YVdr7aSiO7n2pOiC2ZxzNUf2SJwGXRtkMTSMH32Se2jw27ANCRFv07MuPA%2FLsmBY9xWcXbjglLF36C%2FJXANR8GFzZht2GJRRo6486z5lLqQGNx2jxJwRfo2bq7vIlJxyTIwbpL5mql9XwRwP%2F%2FaaNay1yrpuyKqTiSKIJUCYKeqIYv7aJH7FYYs%2Fgc9KUsln6Tgk1Ptfoi2G9b0yK9LRZ3qULOHmcoz1jBZMxnYP0kM4%2Fq01yDwgJsT0gNtor8GO3O%2BZdV5HKmMZRRkXfqOzq2l1cmCONaYluu8Ub%2FKvPrjpMR7LcMBjeiLxZu%2BIsTeTUSOTJIm0ygJht4rM8b2V3%2BYGdtnPzn%2FFr55VGwLhL7kPDnk0yuEG5rksz6OkLcijiwCMGopdMwfZvG6weMS7aVRbfCwitOyx2yBE1kdAtXg4fVWpPGTzCAIAt86z5%2Ftl2s9CV1k%2F4FD7kcxad8%2BErdz5p4%2B9yKTFiAHMw3jpu%2Fx4xizrsFINvW20YOcA4JlQklPaPDKTXXoFUUpwj49pg1zm33ek0xD%2Bro%2BWihkWECA%2FooZCqat7drvclEZVDOjHVBjeRFn9k%2BK3XS7m1hP%2Ffy%2FMKDJ3skGOqUBw%2BqVZf1QFCHviasLBcum4%2BJJ8DDyudWegjs4zSqYvlVTI1f1ZzyCvWQFM6C26Fg1czYr%2FnsnI%2FtFG40ngkhZdQHoGXul66o5NR8DSzCWrplEaUGiUSeeSdjhP7vjGiDKIYOFxppiIWyoy3PiBpIAJK0xkarXgzTta4jrPFP6Q8XDfGDQ7jFl4TaayjDtrVDPUZhGqug6CgecHWG%2BYJnJgPm%2BJEUO&X-Amz-Signature=000a8d08654a79bb55af9ffe0d218d0078ceb857d77171c99d525cbbe3253161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
