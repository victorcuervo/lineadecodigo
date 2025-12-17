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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7RG5LS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuT4Y7ObUk13ciAvk3JbRe4nOIrjVZAtLWdE4JA92QVAiAfOAukvej%2BIuENwD9Ix%2Fc7eSpaWbt%2Fg%2BouOL64FJKeeSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMD1ALgPTRzh79WYJdKtwDOxVtuzQ2iPdyT6eC3a0ZDm3oK%2B7rQVY63XSKo0L5hX5c1BHePlxBqUHo4Q1G0IWl8xv6lR9qJ8bSxVuFebQlswca0jH%2BeCnxIh3jl9Dt9eI3LCY1bEW6Ew7E6UfstlGJ5vr1lpWTLkHYsRjZ26KESEeQ2KrUiHnGX9UobOnWDjtiboS4gYwHe8LN64Ma7PMPxj1pNKbHe7F6xKnxJrtlWtQAt%2FZBmblFa5gOUV0SsrUkOAt4bdTeL6IbvW1iYExNyrRUeDHkLB1YXnW1iEovWkGx9IFM%2FE8fh5EBJ84HM1%2Bvb6C%2B0C3n3Q9duxh%2BPWWt6aB%2FfBE2U1tIl1zjoEYXbOXhV2E1Z9XauS%2B%2FrjP8KgklI1%2FHxWeR9oa5LyUUPBxF7rXsXDfSqWK2kFZ0C1UnS5o8qMQibpsJ4NJ8TL7sut%2BmU7hdX00XddGq%2F7rd7uye46klSuFnGcG4CeJ5eeQRpo%2Fng1KI8w%2BTZMQ9s2wJcr1OR%2BJ0G1e%2F4GDBlhhmSWYh97DdLRqf3830nZE8JNaLJIxDzj%2Bum8lNbTX2J6rbj2pf39eErEbqknyRw9ZDJqmsZk4%2F5VZehFeye3jXVyMTw%2FmOi%2Bl9kcajbQwULvj7ivFXHpU44IHvFy0%2B1yYwlI%2BKygY6pgFSjwlBuu8fZLbJgNzUmF0ErvVD%2Fqp%2FePrFF2sKdHlWu%2BHZyFqarhusehYpNxrrA%2FfMhqja8qZgr8CjVgIrr%2BONVplNhNyygkpin4mbcdQ8E3Yi7HMZU9norKvzeI%2FjAqdJ4D923dh20pLiEdrLP8UdZX1QeOm8tFmNhY5DTUIoKTqiXayZuOqKk21IwB%2BCyvmCVRfFd6K8%2FXNEz36Paz3ODrW0jGTA&X-Amz-Signature=14f61db0fcfe23e3f9778d6b297bba4a812958b335ec8d094431e00a69642e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7RG5LS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuT4Y7ObUk13ciAvk3JbRe4nOIrjVZAtLWdE4JA92QVAiAfOAukvej%2BIuENwD9Ix%2Fc7eSpaWbt%2Fg%2BouOL64FJKeeSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMD1ALgPTRzh79WYJdKtwDOxVtuzQ2iPdyT6eC3a0ZDm3oK%2B7rQVY63XSKo0L5hX5c1BHePlxBqUHo4Q1G0IWl8xv6lR9qJ8bSxVuFebQlswca0jH%2BeCnxIh3jl9Dt9eI3LCY1bEW6Ew7E6UfstlGJ5vr1lpWTLkHYsRjZ26KESEeQ2KrUiHnGX9UobOnWDjtiboS4gYwHe8LN64Ma7PMPxj1pNKbHe7F6xKnxJrtlWtQAt%2FZBmblFa5gOUV0SsrUkOAt4bdTeL6IbvW1iYExNyrRUeDHkLB1YXnW1iEovWkGx9IFM%2FE8fh5EBJ84HM1%2Bvb6C%2B0C3n3Q9duxh%2BPWWt6aB%2FfBE2U1tIl1zjoEYXbOXhV2E1Z9XauS%2B%2FrjP8KgklI1%2FHxWeR9oa5LyUUPBxF7rXsXDfSqWK2kFZ0C1UnS5o8qMQibpsJ4NJ8TL7sut%2BmU7hdX00XddGq%2F7rd7uye46klSuFnGcG4CeJ5eeQRpo%2Fng1KI8w%2BTZMQ9s2wJcr1OR%2BJ0G1e%2F4GDBlhhmSWYh97DdLRqf3830nZE8JNaLJIxDzj%2Bum8lNbTX2J6rbj2pf39eErEbqknyRw9ZDJqmsZk4%2F5VZehFeye3jXVyMTw%2FmOi%2Bl9kcajbQwULvj7ivFXHpU44IHvFy0%2B1yYwlI%2BKygY6pgFSjwlBuu8fZLbJgNzUmF0ErvVD%2Fqp%2FePrFF2sKdHlWu%2BHZyFqarhusehYpNxrrA%2FfMhqja8qZgr8CjVgIrr%2BONVplNhNyygkpin4mbcdQ8E3Yi7HMZU9norKvzeI%2FjAqdJ4D923dh20pLiEdrLP8UdZX1QeOm8tFmNhY5DTUIoKTqiXayZuOqKk21IwB%2BCyvmCVRfFd6K8%2FXNEz36Paz3ODrW0jGTA&X-Amz-Signature=95bf8331e83c22c22470293ad958ad989dfc2d99058397e0486f57914cb59287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
