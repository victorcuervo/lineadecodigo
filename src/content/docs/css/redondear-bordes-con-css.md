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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBJJ73U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP3ecGlrj%2B8xv8IwhEyg2kBCFGipgz34wmfIrPC0%2BU4AIgJvBIfX66CRz2xJyJvsT%2FLsd6KM%2FDUZHzesk%2Bj1YIJ0EqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO82k0RUYrfRp%2BuQSrcAwil6%2FvVG23STPSxqGhQ8%2BqEzzxQw2Otf9Yv5FiaGEVVOwBbqo%2Bp71h%2FVegMPEGaQbf4Y8p1zRf3NIAa%2FfsU0QK4D4ImLjPSwjHjerDIc9zWZdtOnP%2BZOxkb%2BWZw%2BnU2N4obwQEEXgNsK6oOkhuwtj50175EPNsArH67Do3UhnIKSakyTJ9LZ8YCFmzmHcynwJWQqJ3Rg3uQI0oX%2FRu3lzckCYkphUKz2ZPe9afKXSWcSuS0zVNXmD7mLQyaItmanCjRbJ33CwgAwL4MMLzcoeZnyn%2B%2BmkHclk9FytQ0xEuGMJ6%2FtxyZVr1WOyMYT12jwBecSS6kOUYibyN5chltngAyk6eDfhDfC9iOf%2BX3U81%2FwJU2%2B3bPgRBzzZ25Fwkn7%2FgcXfVOoG90EOI6xq2z6ta22s%2FwatW21VcqDqxc7LhZvc3HrEwitKxq09vFBKOTyPXV%2BZGXVYsJAIi7vQNBWb5%2FjSfj7ljh8pIEghZbxo7fETRS2klx2JUjIiXrrtx0D%2BW7ouRqvnb58Y3psW2U9BOsS9ex58teFB20y4OkEpUbex9L9PcrAwqnL74W2WxN0Loi6gEk3bHmquIEdR0U7N8kNSOhZBRhj9kR98qeqJXx5LYulQm7S4%2BFDSTkML%2Fl3skGOqUBcdduKi1FEimWKV6CNRpuQaqcKLjxUdR%2FJcoa3Ak5MZri2JKOOkapeLwagTgnb3Xe%2F1dUqFx7edtK%2BXE9Y2Wnz2vdfgHRG6xftsFpJDe5VOT2KYRHiMnLbYn%2FTq4N9nobdvo1qao9cobKcIGE5SRzOUHj3YXqpAYK9DlXH09jKVH3mkpkgJu0m6Ar%2F0lEFzFauupEr7tqaYDJoLt1FTLWSYrMuLWm&X-Amz-Signature=6e313b75753b3b5c9f747eeed8dfeefc9395642bdc597ecb18bca9e141da16b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBJJ73U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP3ecGlrj%2B8xv8IwhEyg2kBCFGipgz34wmfIrPC0%2BU4AIgJvBIfX66CRz2xJyJvsT%2FLsd6KM%2FDUZHzesk%2Bj1YIJ0EqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO82k0RUYrfRp%2BuQSrcAwil6%2FvVG23STPSxqGhQ8%2BqEzzxQw2Otf9Yv5FiaGEVVOwBbqo%2Bp71h%2FVegMPEGaQbf4Y8p1zRf3NIAa%2FfsU0QK4D4ImLjPSwjHjerDIc9zWZdtOnP%2BZOxkb%2BWZw%2BnU2N4obwQEEXgNsK6oOkhuwtj50175EPNsArH67Do3UhnIKSakyTJ9LZ8YCFmzmHcynwJWQqJ3Rg3uQI0oX%2FRu3lzckCYkphUKz2ZPe9afKXSWcSuS0zVNXmD7mLQyaItmanCjRbJ33CwgAwL4MMLzcoeZnyn%2B%2BmkHclk9FytQ0xEuGMJ6%2FtxyZVr1WOyMYT12jwBecSS6kOUYibyN5chltngAyk6eDfhDfC9iOf%2BX3U81%2FwJU2%2B3bPgRBzzZ25Fwkn7%2FgcXfVOoG90EOI6xq2z6ta22s%2FwatW21VcqDqxc7LhZvc3HrEwitKxq09vFBKOTyPXV%2BZGXVYsJAIi7vQNBWb5%2FjSfj7ljh8pIEghZbxo7fETRS2klx2JUjIiXrrtx0D%2BW7ouRqvnb58Y3psW2U9BOsS9ex58teFB20y4OkEpUbex9L9PcrAwqnL74W2WxN0Loi6gEk3bHmquIEdR0U7N8kNSOhZBRhj9kR98qeqJXx5LYulQm7S4%2BFDSTkML%2Fl3skGOqUBcdduKi1FEimWKV6CNRpuQaqcKLjxUdR%2FJcoa3Ak5MZri2JKOOkapeLwagTgnb3Xe%2F1dUqFx7edtK%2BXE9Y2Wnz2vdfgHRG6xftsFpJDe5VOT2KYRHiMnLbYn%2FTq4N9nobdvo1qao9cobKcIGE5SRzOUHj3YXqpAYK9DlXH09jKVH3mkpkgJu0m6Ar%2F0lEFzFauupEr7tqaYDJoLt1FTLWSYrMuLWm&X-Amz-Signature=3a7463c801f1975763f62012fa4136c5cca531307f716754fcf9f081751506ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
