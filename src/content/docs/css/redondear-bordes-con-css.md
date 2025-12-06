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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YF37EL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmLEvxj6zvpl%2F6Hi%2Fad2OvQuMFI%2Bb4JALqsTAm3AtrHAiEA3lVWy9SpuBCxZNvUBMox8h4uA04TcbbA9M56%2Bin7aBoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLx3T9h11%2FOagkMTsircAxwvl5ywSKNjDxXXIOfoEpZrJVDIpIwF8OD2XixhXhX02gbIXf40GdRLsYMfq3qtU2BgO%2BUkwZM9skmYR6NTOcZlWSmAj%2FyyYT7pqy0wRWHhUhp06gIHlZ%2FwLTq%2F2K5or6n3lQd0V2smCtZRv6a2zP6h1v%2FzkKyJ1p03Xg1y8sC3SzQwS9sK907TTAABCDlM3aSW%2F%2Bl4D%2BhCyvdWybSaCiQeiFqFhSmk%2FH4Df5vEpoF%2BdBl3FYcySQeEv4o4SjgOQGOge7NIreOt9h7QR4PKdWH2Yq11YnU8AUBQ47gsnqhyYRuWwRoEq%2BO570QA%2FxufzTbvIa8KVuX5HA0wEmdpM1p4orrSsxShyRuef%2BgiqoVzZGX3u%2F0A24DHssRUgF2ixVZx55BIKqFOIfEmJ8Js1pQH%2FFCe%2BHhujjbG46HU3IRMDqURlaQ%2FkrZdp4I81YYyoYpvbRYkBmvz3gI5iws5M62ohFC8hwXZASqfn8YKfimqBr97n%2FDWQgEy14If%2BV5eanvK8DyAteSrZV%2FNEu9tk%2FNzGpvtEdwIcWnbDhE8e%2By69YcRjT%2F8wowfsgEXkSQphKHklx2Yqz9ujZ8GqmW%2FXLeKnLMGmj2KPRQzR1jJndtAavK8jLzVLPPSvvXTMLXrz8kGOqUBGWBkyVewcNhWHDSSoX7q4QpDJvGkkNK8Y3P2arMRFBcU8GIM9UUu689DVnXAJIaJN%2BfPcv3If6CqQX6cOAUrQ6Pb0rEkMoLSPwabYKWsIM3dkmIf8GPemx0hq8OXyoMBv%2BR%2FVNxhWDM9rhdMzlmiEBIZGUdPMZ8a8vFN6SWqRYiQ5QtmA9xpBnZyYfAXL%2BfAMEzEy9nAtMFsZqXOiytIts4LXZIr&X-Amz-Signature=734468662314bd5f8e668332d88d51860d6484fc9ccf10a80a98e1c16cd8d092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YF37EL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmLEvxj6zvpl%2F6Hi%2Fad2OvQuMFI%2Bb4JALqsTAm3AtrHAiEA3lVWy9SpuBCxZNvUBMox8h4uA04TcbbA9M56%2Bin7aBoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLx3T9h11%2FOagkMTsircAxwvl5ywSKNjDxXXIOfoEpZrJVDIpIwF8OD2XixhXhX02gbIXf40GdRLsYMfq3qtU2BgO%2BUkwZM9skmYR6NTOcZlWSmAj%2FyyYT7pqy0wRWHhUhp06gIHlZ%2FwLTq%2F2K5or6n3lQd0V2smCtZRv6a2zP6h1v%2FzkKyJ1p03Xg1y8sC3SzQwS9sK907TTAABCDlM3aSW%2F%2Bl4D%2BhCyvdWybSaCiQeiFqFhSmk%2FH4Df5vEpoF%2BdBl3FYcySQeEv4o4SjgOQGOge7NIreOt9h7QR4PKdWH2Yq11YnU8AUBQ47gsnqhyYRuWwRoEq%2BO570QA%2FxufzTbvIa8KVuX5HA0wEmdpM1p4orrSsxShyRuef%2BgiqoVzZGX3u%2F0A24DHssRUgF2ixVZx55BIKqFOIfEmJ8Js1pQH%2FFCe%2BHhujjbG46HU3IRMDqURlaQ%2FkrZdp4I81YYyoYpvbRYkBmvz3gI5iws5M62ohFC8hwXZASqfn8YKfimqBr97n%2FDWQgEy14If%2BV5eanvK8DyAteSrZV%2FNEu9tk%2FNzGpvtEdwIcWnbDhE8e%2By69YcRjT%2F8wowfsgEXkSQphKHklx2Yqz9ujZ8GqmW%2FXLeKnLMGmj2KPRQzR1jJndtAavK8jLzVLPPSvvXTMLXrz8kGOqUBGWBkyVewcNhWHDSSoX7q4QpDJvGkkNK8Y3P2arMRFBcU8GIM9UUu689DVnXAJIaJN%2BfPcv3If6CqQX6cOAUrQ6Pb0rEkMoLSPwabYKWsIM3dkmIf8GPemx0hq8OXyoMBv%2BR%2FVNxhWDM9rhdMzlmiEBIZGUdPMZ8a8vFN6SWqRYiQ5QtmA9xpBnZyYfAXL%2BfAMEzEy9nAtMFsZqXOiytIts4LXZIr&X-Amz-Signature=adc33f8183ca0b5fc292f9161b62dd2eee392cb8e4db0b1d181bf9f258389d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
