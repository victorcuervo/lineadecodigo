---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIEXE23%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDP7t8qW7RGB2tJYM6dD6OBuUqT5Lrog5rEeX16Kj5sTgIgBIHhdSMnUnJONXc05HlxafuLqpG9FQzR3JSa9qqz%2F4Qq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBGyI3uI4Qb8qaHoXSrcA9EnmPLvffhiGd77DUFtLHDQHjZYwSNMX5amFLIDl0q3VSTuMzIb3On07woD6maWL%2Bj9lal1dgYreTJGW%2F89w7SKDK2rSiQCAB1bROHIZq1r9%2BHPelf8foUV0yXWGKXaQjfluXWuATscp87K7IHpqH8HpARiQUZBj5T4orCCEHNFYLHYZwCeT8lVuMyOpU3yTclK14S26sS%2FpD65Y029TqzAYuQWtY1pd31e4yZIH2VJ4ZMvd%2FiINfX0UIiQ1%2BhsQNVzfn%2FGPfrTsx%2B4hxRwCfqjAIWx5LJe3k9ylyCuboGWMKUZXxby%2BEdSFMnxEvzl2RmSqi5ihXynwEh5Mc2Lr4s%2FR28nT4%2B0WD7l2c%2B3OWMgL3ubhepH%2F0EtKINr6e4stxKL%2Bh9HopGqPx4ovVAsY3csAoGZrtGAAVpq4GaNDmn9%2FoBz03GI0Sgx7vPYSe8MlMUJz%2F5aR8NMk%2FGQvL9r8LZiQWxqXEpSVUY2AZpK0UbWbljXCG7VR0jiruHa%2FLd7HI7h%2FCQLrR6VMO9A%2BebWFeSOzeMeRIG4%2B5Fmu%2FyzwruRpRZi2C%2FQlV3BZDVY2lq49dSHhMxr4ZIeysZ%2FWo2HD6PGAST9AY0krX26zBupVClQygqH2mEVOAJfGq3cMNu%2BxskGOqUB2Vk0WlxbdDFaOXEnI0ZaI4U3oYhU0GsOHEGHg9XWZ3%2F3%2FRpyLftYQCOS%2FESFF%2F%2BmYNug8BaJ5pBhqk3PEi6JSPiPTIO5AvNaWGUqCz7ZuASwV2hDyB2hcYszdyxkGtqF9aRH9ppX%2FQbpKyz2%2FKRTROeowju9EZZMBbVWliMtJ%2B9z1Q6HRNVLv5WZQxy35tJNxhbYpm3sNhe38cn%2BZut%2B1dZ3qfNH&X-Amz-Signature=afec9d4aea0e2cffba75561a12f325f803859df6503e8e03de509130f38d4d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIEXE23%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDP7t8qW7RGB2tJYM6dD6OBuUqT5Lrog5rEeX16Kj5sTgIgBIHhdSMnUnJONXc05HlxafuLqpG9FQzR3JSa9qqz%2F4Qq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBGyI3uI4Qb8qaHoXSrcA9EnmPLvffhiGd77DUFtLHDQHjZYwSNMX5amFLIDl0q3VSTuMzIb3On07woD6maWL%2Bj9lal1dgYreTJGW%2F89w7SKDK2rSiQCAB1bROHIZq1r9%2BHPelf8foUV0yXWGKXaQjfluXWuATscp87K7IHpqH8HpARiQUZBj5T4orCCEHNFYLHYZwCeT8lVuMyOpU3yTclK14S26sS%2FpD65Y029TqzAYuQWtY1pd31e4yZIH2VJ4ZMvd%2FiINfX0UIiQ1%2BhsQNVzfn%2FGPfrTsx%2B4hxRwCfqjAIWx5LJe3k9ylyCuboGWMKUZXxby%2BEdSFMnxEvzl2RmSqi5ihXynwEh5Mc2Lr4s%2FR28nT4%2B0WD7l2c%2B3OWMgL3ubhepH%2F0EtKINr6e4stxKL%2Bh9HopGqPx4ovVAsY3csAoGZrtGAAVpq4GaNDmn9%2FoBz03GI0Sgx7vPYSe8MlMUJz%2F5aR8NMk%2FGQvL9r8LZiQWxqXEpSVUY2AZpK0UbWbljXCG7VR0jiruHa%2FLd7HI7h%2FCQLrR6VMO9A%2BebWFeSOzeMeRIG4%2B5Fmu%2FyzwruRpRZi2C%2FQlV3BZDVY2lq49dSHhMxr4ZIeysZ%2FWo2HD6PGAST9AY0krX26zBupVClQygqH2mEVOAJfGq3cMNu%2BxskGOqUB2Vk0WlxbdDFaOXEnI0ZaI4U3oYhU0GsOHEGHg9XWZ3%2F3%2FRpyLftYQCOS%2FESFF%2F%2BmYNug8BaJ5pBhqk3PEi6JSPiPTIO5AvNaWGUqCz7ZuASwV2hDyB2hcYszdyxkGtqF9aRH9ppX%2FQbpKyz2%2FKRTROeowju9EZZMBbVWliMtJ%2B9z1Q6HRNVLv5WZQxy35tJNxhbYpm3sNhe38cn%2BZut%2B1dZ3qfNH&X-Amz-Signature=77f725f7679bf482182ff9636287755a08caac5353ac75b7b527bfe982b0705f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
