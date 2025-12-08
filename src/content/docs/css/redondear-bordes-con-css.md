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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BLDNLX5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBFymNiw5xZuvXV2w1CsGDsvib5fbubS%2Fgixof99pWTAiAQU2cVyC2bhllSxE8Ms96KEktD%2F5p4f3uqjUDwPqdMZyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM85lj7ArbkrpzOtWvKtwDufT7iH4Y0SGL2HzlHCazApAt%2FLL1wQgDvcRy0UpCPu1NqRoDrM4uBgpsrZP8rgBBYo%2BEbWcVr2YFZTvndj1opAT4iB35dJEJCNn5zt41HzngCrrQYP6nj2xqdMZ3Fcbq0fZIZFigaT%2FzAilNhBnrVJe0PxdVqMIcpPhcuK%2FFdlMtVGQLdTBxI2JyNvqyKUBpWNPxuU%2Fgrxsa7f2lxb%2Fff1ZOqc1tpK%2BY09%2BoHxpi6thk7cCFBMd9%2FpHlmNJ9f8cFG6qQOHBv8L%2Fow3RoFfVLha970p5wxK8kFhnKIDzjxhRBKp3wHJEGcnfjK8kp4Dd4toudeYAxiwwX%2FCEFmQ8EtakznPoXnUbwtdKPV2wU%2BYMn4e28JXiEfXF8ztpUyxs7Q%2Bi%2B67XLjjFjuqnKY570P1cL6k2yUWVqEiIPYjGscyiQA0qtJz5CTwDpldNUQUE4v13kb9cQg52mF4POlRUbPWXHecNqKhQ0xbbxYgS5rBz68BvpWD5%2BesRS3%2BeJqKvxxOxvLEX7gmRrrGw8DEW7gFRahGaj95ApR9zAnuEQ%2FJgTzH9KywMUM7O%2FS%2BWSMt%2B0HcCJdWuZ%2F14WTLgRv7HXBp55GWzCZw1bKwH%2BFmSSwLI0e7P4j%2BrJObUue2Uw0ofcyQY6pgEey%2FvAv71VJVRVLKdpzuPuQzxLGCywJpbXwPHxvqB7llF4vyWGNSToxHiGvVZAyEQBbHMzEX7UH9QQACPHeiz62qmMUQblsoFP0dWK%2FzMVWkGqsvsAsaRGuXv%2FxHIHO1KtN3iJt4ZF2tgh4yswAgYO6gEMn31mLQnrNcvogSBg2Y02Eoi7mAGJ%2Fat4poJcGKhOxnOOl9TJ%2BTUfsYGhR1dRONpH3WSc&X-Amz-Signature=9d046fc5f12503561b78a50a94fbf3abf84941422c6b8db14759a36e4c9b0ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BLDNLX5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBFymNiw5xZuvXV2w1CsGDsvib5fbubS%2Fgixof99pWTAiAQU2cVyC2bhllSxE8Ms96KEktD%2F5p4f3uqjUDwPqdMZyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM85lj7ArbkrpzOtWvKtwDufT7iH4Y0SGL2HzlHCazApAt%2FLL1wQgDvcRy0UpCPu1NqRoDrM4uBgpsrZP8rgBBYo%2BEbWcVr2YFZTvndj1opAT4iB35dJEJCNn5zt41HzngCrrQYP6nj2xqdMZ3Fcbq0fZIZFigaT%2FzAilNhBnrVJe0PxdVqMIcpPhcuK%2FFdlMtVGQLdTBxI2JyNvqyKUBpWNPxuU%2Fgrxsa7f2lxb%2Fff1ZOqc1tpK%2BY09%2BoHxpi6thk7cCFBMd9%2FpHlmNJ9f8cFG6qQOHBv8L%2Fow3RoFfVLha970p5wxK8kFhnKIDzjxhRBKp3wHJEGcnfjK8kp4Dd4toudeYAxiwwX%2FCEFmQ8EtakznPoXnUbwtdKPV2wU%2BYMn4e28JXiEfXF8ztpUyxs7Q%2Bi%2B67XLjjFjuqnKY570P1cL6k2yUWVqEiIPYjGscyiQA0qtJz5CTwDpldNUQUE4v13kb9cQg52mF4POlRUbPWXHecNqKhQ0xbbxYgS5rBz68BvpWD5%2BesRS3%2BeJqKvxxOxvLEX7gmRrrGw8DEW7gFRahGaj95ApR9zAnuEQ%2FJgTzH9KywMUM7O%2FS%2BWSMt%2B0HcCJdWuZ%2F14WTLgRv7HXBp55GWzCZw1bKwH%2BFmSSwLI0e7P4j%2BrJObUue2Uw0ofcyQY6pgEey%2FvAv71VJVRVLKdpzuPuQzxLGCywJpbXwPHxvqB7llF4vyWGNSToxHiGvVZAyEQBbHMzEX7UH9QQACPHeiz62qmMUQblsoFP0dWK%2FzMVWkGqsvsAsaRGuXv%2FxHIHO1KtN3iJt4ZF2tgh4yswAgYO6gEMn31mLQnrNcvogSBg2Y02Eoi7mAGJ%2Fat4poJcGKhOxnOOl9TJ%2BTUfsYGhR1dRONpH3WSc&X-Amz-Signature=36d04327b6ccc6228c5eefc32c41c79c1c7504c48de71c8b5033239de36be39e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
