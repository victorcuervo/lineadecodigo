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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSILI7K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPhDhhq9oJgwnTfbF4u%2BCEa8%2F%2FLbCAhmI4BlWLiVBtNwIhAPZLD9JKNUL3X%2FcBLyQI4yYOvJ4wtuEtX6cK83Ew69MQKv8DCH8QABoMNjM3NDIzMTgzODA1IgxzfxOojlH5d%2Bto0mEq3APp9DhzC2DtvgP5yJcNvJagQ1v3503gkARdazuJmAzf05ZLcQKHwDgyipkaX%2FSlVEaj2xnZNqBkI9n9OG37E%2BG%2F3kjLIqTbJJFSamScgbybDluFbzuQaHhCY%2B0%2Bg9RlWFa7iwyy6NbUL0b4Rm4jDMctFY2sr1uDWkPhQn4deg4HzUqechZ0os9%2FgZ235wQU%2B3WkUya1Ygu9yV6ol5P6E7Cv5o1dM4Ioc%2FeG913V4pYsiixRvXNkp%2BmW6Qzh8pLRZG2o4HeKZdK9u8ol%2BurWe7vL92rHv8reIhP8tay%2BQWoJTA%2Fdov1Zo%2FTqe6JCNea8kp97x5ICjb9YI6tKP%2FiDalxWKXG1OUMyN%2Fzmfs34FgTlkVoBPb%2BssnjdkBdwpOvYvFQA1fN0IlTkZ885yUNiP4d%2BCsibnAiXaX3aeqZGKiLl%2F1DDDnKa5CeJbzMsUmv84TeqRuowmeEkX3fsBMCghuR6dD7tHmDeryWS22%2BdDCQobm3VvpLU9IOW4QE4gR7rKYbP%2BNhbQ%2BylRWOAyeebSi%2BNYr%2B3lHb7xmdX2bNNdwZ6nRuaVcoHH%2Bd8zxs8iTwcNKRGosM1%2FPMp0XG9zxAwbXI3eLaNCGUqcWeDw70zvQxT%2F30%2FFKXG0v0OwGWA1zCV09LJBjqkAQAE%2F0gqBNU9FIL%2FRNd0rUNzl7OlVBVH6Ov2WJq94eEHynMiVReZJmJgM3XVzxDh%2F3U6LKj8xz8f4nOXDwZHC%2FQVVlRQZ73AHRbdyroD7LyIaAR7BsdL2rF4JhxAt5fvCXboWK494nlVqI5M0XnKEVcJvZUtDfbPx%2FtBBlq1r5fMv5Th5UgdfyQPLO53OZ3i9mXcswNUgJtdfI%2F7T4yK6GTdtZuy&X-Amz-Signature=81b143be4341beb40117105bf605597061b17797fe08d6d2421f9a1fcbdd2e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSILI7K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPhDhhq9oJgwnTfbF4u%2BCEa8%2F%2FLbCAhmI4BlWLiVBtNwIhAPZLD9JKNUL3X%2FcBLyQI4yYOvJ4wtuEtX6cK83Ew69MQKv8DCH8QABoMNjM3NDIzMTgzODA1IgxzfxOojlH5d%2Bto0mEq3APp9DhzC2DtvgP5yJcNvJagQ1v3503gkARdazuJmAzf05ZLcQKHwDgyipkaX%2FSlVEaj2xnZNqBkI9n9OG37E%2BG%2F3kjLIqTbJJFSamScgbybDluFbzuQaHhCY%2B0%2Bg9RlWFa7iwyy6NbUL0b4Rm4jDMctFY2sr1uDWkPhQn4deg4HzUqechZ0os9%2FgZ235wQU%2B3WkUya1Ygu9yV6ol5P6E7Cv5o1dM4Ioc%2FeG913V4pYsiixRvXNkp%2BmW6Qzh8pLRZG2o4HeKZdK9u8ol%2BurWe7vL92rHv8reIhP8tay%2BQWoJTA%2Fdov1Zo%2FTqe6JCNea8kp97x5ICjb9YI6tKP%2FiDalxWKXG1OUMyN%2Fzmfs34FgTlkVoBPb%2BssnjdkBdwpOvYvFQA1fN0IlTkZ885yUNiP4d%2BCsibnAiXaX3aeqZGKiLl%2F1DDDnKa5CeJbzMsUmv84TeqRuowmeEkX3fsBMCghuR6dD7tHmDeryWS22%2BdDCQobm3VvpLU9IOW4QE4gR7rKYbP%2BNhbQ%2BylRWOAyeebSi%2BNYr%2B3lHb7xmdX2bNNdwZ6nRuaVcoHH%2Bd8zxs8iTwcNKRGosM1%2FPMp0XG9zxAwbXI3eLaNCGUqcWeDw70zvQxT%2F30%2FFKXG0v0OwGWA1zCV09LJBjqkAQAE%2F0gqBNU9FIL%2FRNd0rUNzl7OlVBVH6Ov2WJq94eEHynMiVReZJmJgM3XVzxDh%2F3U6LKj8xz8f4nOXDwZHC%2FQVVlRQZ73AHRbdyroD7LyIaAR7BsdL2rF4JhxAt5fvCXboWK494nlVqI5M0XnKEVcJvZUtDfbPx%2FtBBlq1r5fMv5Th5UgdfyQPLO53OZ3i9mXcswNUgJtdfI%2F7T4yK6GTdtZuy&X-Amz-Signature=70115e16ced2ab907b408e45e162753a89a98c1ebd06d96c260da496d487c2e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
