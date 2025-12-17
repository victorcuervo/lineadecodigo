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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENHV7LK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1rQ%2BqF8WS0A4fZFaRZl3ASe6G7nAQo%2FevTWYdRSnK%2BAiEArOVftlVFdDy3di0T7m1HkF5clSensJxyrxTGZQ6SbiMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDD1e%2FbRgwR8EcYOgHCrcA%2FgVPBHe3lKk9SVl1KpA9VJzNwCdeuNqFTJ61hz1EOmdPnMcyEgLP6BHBEGMtUM9kzIy%2BdWuVUo9q%2BDXzOHxcZ7deP11ND96xC7oGuN%2BFu%2Bd3KSy16R43tNETGDXXlyoa7p6GLm9jqfFyewWq8OA7axl6epBHXpDHVphC8vy9M%2BMSaakgHiM5IZhQM97JnHQ%2FHqNxHeAGNCG48ysA5MhUyO2oMwKMW4PQoZIcTdigPvbr8YxR24A0YX3%2FMh67TAZWXTnulV3GNg%2By3EqkoO2A9sYJ9SJ3IoGEIUaME24qUwj%2FsQgE%2FZgtCTbesv%2FbIiKVemT%2FK%2FSG1VRZyrwnTRu%2FoJm1eWuU4nFEyb%2FSpIot2dvEElXerYQyYXmhyD8WGyMVXGD0UZ4t9RFNygcEbKzxzsNi5YD2uKH5kIDsI%2BpnXofV5C6QoxlGaGsHbarlhjlJPrQllFlqn3QkhNdSeUJuNJyqqGpU%2FkLKpoayz4V%2FXXdCn7PhiZYf2FjgcURdLN0N2Jna4fNRDccOZYQfpW1k%2BSDq0mmXz6TEjSVxf6Yrgh4LN6phEgdedFgT0kOFZcaxnOhXRtdtkmQzcqS6561OSdvxif9GuIbwU1ekMdmxZ60IgyZYPe8LpFZ%2BTWcMPaBicoGOqUB4gy9eqk3EggP%2F3vgQi%2BmIyD1GtZT6msOHmwfabchPPwrMf9Sj4pxK%2BUMML4hKom5Uljy8c5OTKR1H4azdB8IQUUZRITf4zCcmTJwt%2B8xYCuKqRTQUovNX4S47%2FFAAkTQUmi2xzNfRr4ltd0AoycXCoFfj7C5T8tU4P4YaeMVEJ0NJbF94LuIQyyqkqwuHLpjUgZiRuYZ6qJzMhc5Tzxze%2Bt9Np3x&X-Amz-Signature=3839cd7baeef5c99dac1c6277249b0f204ea94f18cc18fc8942907241e9fa121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENHV7LK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1rQ%2BqF8WS0A4fZFaRZl3ASe6G7nAQo%2FevTWYdRSnK%2BAiEArOVftlVFdDy3di0T7m1HkF5clSensJxyrxTGZQ6SbiMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDD1e%2FbRgwR8EcYOgHCrcA%2FgVPBHe3lKk9SVl1KpA9VJzNwCdeuNqFTJ61hz1EOmdPnMcyEgLP6BHBEGMtUM9kzIy%2BdWuVUo9q%2BDXzOHxcZ7deP11ND96xC7oGuN%2BFu%2Bd3KSy16R43tNETGDXXlyoa7p6GLm9jqfFyewWq8OA7axl6epBHXpDHVphC8vy9M%2BMSaakgHiM5IZhQM97JnHQ%2FHqNxHeAGNCG48ysA5MhUyO2oMwKMW4PQoZIcTdigPvbr8YxR24A0YX3%2FMh67TAZWXTnulV3GNg%2By3EqkoO2A9sYJ9SJ3IoGEIUaME24qUwj%2FsQgE%2FZgtCTbesv%2FbIiKVemT%2FK%2FSG1VRZyrwnTRu%2FoJm1eWuU4nFEyb%2FSpIot2dvEElXerYQyYXmhyD8WGyMVXGD0UZ4t9RFNygcEbKzxzsNi5YD2uKH5kIDsI%2BpnXofV5C6QoxlGaGsHbarlhjlJPrQllFlqn3QkhNdSeUJuNJyqqGpU%2FkLKpoayz4V%2FXXdCn7PhiZYf2FjgcURdLN0N2Jna4fNRDccOZYQfpW1k%2BSDq0mmXz6TEjSVxf6Yrgh4LN6phEgdedFgT0kOFZcaxnOhXRtdtkmQzcqS6561OSdvxif9GuIbwU1ekMdmxZ60IgyZYPe8LpFZ%2BTWcMPaBicoGOqUB4gy9eqk3EggP%2F3vgQi%2BmIyD1GtZT6msOHmwfabchPPwrMf9Sj4pxK%2BUMML4hKom5Uljy8c5OTKR1H4azdB8IQUUZRITf4zCcmTJwt%2B8xYCuKqRTQUovNX4S47%2FFAAkTQUmi2xzNfRr4ltd0AoycXCoFfj7C5T8tU4P4YaeMVEJ0NJbF94LuIQyyqkqwuHLpjUgZiRuYZ6qJzMhc5Tzxze%2Bt9Np3x&X-Amz-Signature=25f2c18cbb3555ed49bdacd496f9536801c3e77cd866aa2c689c765dec9dc06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
