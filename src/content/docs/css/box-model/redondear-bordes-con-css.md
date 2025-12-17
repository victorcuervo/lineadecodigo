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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRIZHTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdVjkJDgJlxZxfLPsosZNzt2DpYYjIri%2F3XhuOmxkooAiAPZNmvtZ95oqmk5uOyducNnMWMkWyw3OolRkBcbLOQcSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM8ZpvVGsujNFCynwkKtwDMUcp4LT1EyDGCVTiBrfyp2kQZKyi0tVgEXWu4GjHE65PekpFjlG9YwD4ZCB8TADK2L%2BosBm%2BpQELsqWAJ4SAE2%2FbKVeRwlnCU28ocLoHzd2yz5XUY8huasnKLnojRJqB1hE2Ex0QgI%2FgqheOVqCVABIaz4wLJKo8x8Z4fE1exKniK86v8d1kDS6ULdVJfwFBJXoAyjcqnz0%2FnKPsyyBLdEhMfEpDiMqn%2BilYpI7ThDezx7D46P5e8Zv%2Ffn2LaaGJA%2FUpuJmE4puT2QXXqrVq87btDQHIJItOFnGkajgv4kYJKQJn%2BrIMnZSOP1DBfs%2FCzH7yE3HYAxAvoSe%2BTy2SmJThgLWF7%2FiUlf9grkxXxeIe%2BOBlzuoNhcQlllSq5hzP0kmDXAUGHx9are0TDIqsBA4D3kCMXlL5nIBewtCQnRQXPdkIzq%2BGj3zm%2BUIRiqGJNpNJkVR7PHZI6urBSeq3uNSTw3E2D%2FobMAWygLeUba%2FP2pwWLjzrix%2BO996%2BJUCMvpk%2FrjgEvIfcNehjmemUBN4AQ0cli75VefgdFysorO2iaOxvN8C0if%2BWs3EJJFnvSv6EYWeJMCygfPh7i2%2Bl5eXW7BZIvSfB1xqrDZc9uBhT9DhVlNyPwSoK%2FoQwyLGIygY6pgFQotc6sF12KH4MBkUSfZ%2BvEg8Mj5xg%2F3JIdqajhj%2FTHIMb4NpamEoakVblkxOZe9Kc7CxIN6DN5vHQq%2FDL5BSDaExhaBGITiupyas87Kz%2FyT%2F%2Fpaq0SHrUB9FEimw26B6w7hh76RNVMoAiM8ajpcj4yBHqoe5YF4iSPNeJhlbM9J2%2FFgifBwtCozEwVp83WvTBVdBrMjk4cGbdYBmo6k7n5sO8OE1a&X-Amz-Signature=20d312e09b499feca14c777cd3cc7bd96023474dc754652531cbec10d1441573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRIZHTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdVjkJDgJlxZxfLPsosZNzt2DpYYjIri%2F3XhuOmxkooAiAPZNmvtZ95oqmk5uOyducNnMWMkWyw3OolRkBcbLOQcSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM8ZpvVGsujNFCynwkKtwDMUcp4LT1EyDGCVTiBrfyp2kQZKyi0tVgEXWu4GjHE65PekpFjlG9YwD4ZCB8TADK2L%2BosBm%2BpQELsqWAJ4SAE2%2FbKVeRwlnCU28ocLoHzd2yz5XUY8huasnKLnojRJqB1hE2Ex0QgI%2FgqheOVqCVABIaz4wLJKo8x8Z4fE1exKniK86v8d1kDS6ULdVJfwFBJXoAyjcqnz0%2FnKPsyyBLdEhMfEpDiMqn%2BilYpI7ThDezx7D46P5e8Zv%2Ffn2LaaGJA%2FUpuJmE4puT2QXXqrVq87btDQHIJItOFnGkajgv4kYJKQJn%2BrIMnZSOP1DBfs%2FCzH7yE3HYAxAvoSe%2BTy2SmJThgLWF7%2FiUlf9grkxXxeIe%2BOBlzuoNhcQlllSq5hzP0kmDXAUGHx9are0TDIqsBA4D3kCMXlL5nIBewtCQnRQXPdkIzq%2BGj3zm%2BUIRiqGJNpNJkVR7PHZI6urBSeq3uNSTw3E2D%2FobMAWygLeUba%2FP2pwWLjzrix%2BO996%2BJUCMvpk%2FrjgEvIfcNehjmemUBN4AQ0cli75VefgdFysorO2iaOxvN8C0if%2BWs3EJJFnvSv6EYWeJMCygfPh7i2%2Bl5eXW7BZIvSfB1xqrDZc9uBhT9DhVlNyPwSoK%2FoQwyLGIygY6pgFQotc6sF12KH4MBkUSfZ%2BvEg8Mj5xg%2F3JIdqajhj%2FTHIMb4NpamEoakVblkxOZe9Kc7CxIN6DN5vHQq%2FDL5BSDaExhaBGITiupyas87Kz%2FyT%2F%2Fpaq0SHrUB9FEimw26B6w7hh76RNVMoAiM8ajpcj4yBHqoe5YF4iSPNeJhlbM9J2%2FFgifBwtCozEwVp83WvTBVdBrMjk4cGbdYBmo6k7n5sO8OE1a&X-Amz-Signature=0691b8fbaf454bb70e6f85bf7234555326f6e9e7a4c942e9908ef90ced69db27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
