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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XWVLY7T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelPuFTAB3J1SuzJZ7QMsZju3KT33%2Bt6As9zQDFJl1UQIgQ9l9i7ZqnNKmon9gg761Jn21Kgq32SOpjNqEEtYyZV4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA6Ddem26BiFMLJOpSrcA38XB6gP8aWKML2gCxMDdTgUSgy4zzfkHzE8IHJAjsfRMLH3jJYEJmHFiURVkh2P0QHnmCO8HrmHgaFM24hjLJF8MK7u0zlmq6k7QPsWyKQ6TLXxjJ2KJR6c25SgbPXKt8yzdJAn3KVAsd0F59ipuEa%2FE88BiX%2BIfI61jb16yR6z%2BHGhd6SaBFpEm3U9N9eTSY610L1tvJiiGCL77hnxFhlzetvaRHTAcHZeuZrQ7z0fzxw68OzzX2gG1sf90OjEVcei6loSN%2F%2FRrypM7FSHo6Wth4z9pJLhwfufHACHGrQS76DQaFjSAmpSzRjrps8P9DuM1dPnEHkWLlE9Vs0lMUBGPP90gb4IEbyWnhOPyhO8dtcw0nDpjI%2BJUKshDpJqH9Yd3C%2B8KuHGklQGAYmaNzCaBekd8DLcT%2FR4%2Fvw4KVyy1BthheOIyWr%2BBl2HTPZtzLZwbWgGN%2BP7QeY2L5Pg077JgJYbL1xK4EVbjj%2B7es8kYVLeWp1Lbqh5lcbJZujOs4ekasXz2TXwFbAFt3ZwQXCbf0zEbGDkhMO0ZauBlsLOMkBR91NiO1tARbCeDdPdWahu9yEF3nuA%2BZZJpG9bHY84k1RZ0o8aZEb2it%2BC1HCvqHFxWnf9Ch0dRnw%2FMMnezskGOqUBKnsbE%2BvgJsicZfPhR1hvXeKCG7Df0mhktKQG%2B8zZbcJ8fvUBwoS1BT9KBWRjNjuZX7Qh5q17gEI6bGqiojSC0R%2FLLJ5HmQswr1uosYLQhu%2Fxy6Er9Nk8EFy8ELIDCdX1%2B6LqonbW2tYGuaTnt6cQhI4hzjMboZ9ptX89%2B7WT6x5sHxaiTXH4zQb8hkO3gQM7VxbWQknzCH7fSA6CX5igL505mzBe&X-Amz-Signature=bead8a28a501bf80c9ea522b0bdaa21bdb449c1f0ccebccd3fd6816b9075f33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XWVLY7T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelPuFTAB3J1SuzJZ7QMsZju3KT33%2Bt6As9zQDFJl1UQIgQ9l9i7ZqnNKmon9gg761Jn21Kgq32SOpjNqEEtYyZV4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA6Ddem26BiFMLJOpSrcA38XB6gP8aWKML2gCxMDdTgUSgy4zzfkHzE8IHJAjsfRMLH3jJYEJmHFiURVkh2P0QHnmCO8HrmHgaFM24hjLJF8MK7u0zlmq6k7QPsWyKQ6TLXxjJ2KJR6c25SgbPXKt8yzdJAn3KVAsd0F59ipuEa%2FE88BiX%2BIfI61jb16yR6z%2BHGhd6SaBFpEm3U9N9eTSY610L1tvJiiGCL77hnxFhlzetvaRHTAcHZeuZrQ7z0fzxw68OzzX2gG1sf90OjEVcei6loSN%2F%2FRrypM7FSHo6Wth4z9pJLhwfufHACHGrQS76DQaFjSAmpSzRjrps8P9DuM1dPnEHkWLlE9Vs0lMUBGPP90gb4IEbyWnhOPyhO8dtcw0nDpjI%2BJUKshDpJqH9Yd3C%2B8KuHGklQGAYmaNzCaBekd8DLcT%2FR4%2Fvw4KVyy1BthheOIyWr%2BBl2HTPZtzLZwbWgGN%2BP7QeY2L5Pg077JgJYbL1xK4EVbjj%2B7es8kYVLeWp1Lbqh5lcbJZujOs4ekasXz2TXwFbAFt3ZwQXCbf0zEbGDkhMO0ZauBlsLOMkBR91NiO1tARbCeDdPdWahu9yEF3nuA%2BZZJpG9bHY84k1RZ0o8aZEb2it%2BC1HCvqHFxWnf9Ch0dRnw%2FMMnezskGOqUBKnsbE%2BvgJsicZfPhR1hvXeKCG7Df0mhktKQG%2B8zZbcJ8fvUBwoS1BT9KBWRjNjuZX7Qh5q17gEI6bGqiojSC0R%2FLLJ5HmQswr1uosYLQhu%2Fxy6Er9Nk8EFy8ELIDCdX1%2B6LqonbW2tYGuaTnt6cQhI4hzjMboZ9ptX89%2B7WT6x5sHxaiTXH4zQb8hkO3gQM7VxbWQknzCH7fSA6CX5igL505mzBe&X-Amz-Signature=1e8b22da5f0700b772882441b6990672455dea22226b336dc5945ee6dbea491e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
