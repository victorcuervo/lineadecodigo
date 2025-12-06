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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26UR3TD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9bUIGG94vFiXv23r%2FDZj6p9QNCASG9n%2BPYPcjEoUgAiBfZ%2FJLbcU4BhtnfHlpUsVn5mFk89HhX3ZVQYsWSQvBGyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMmww5%2BJkSyc1783YJKtwDrUje9BLV0Cx9PIJ1B0rNW7RDxYw3ZS8MtDIWWZkX8n7dxvKTspNqkz9cyMeUmRO3t7IYnlcyWq26Rn7p57His6ECcBOMhWfqVImkkKEElLjzLb5BOlO5NHMpqNevm8SUCZH5dspi1QopEIEhZ5PzPJMx1SfMmSr%2Fo5lhkJG24eyjDjOiC6KOUcwfPLkH5pTNMna7sGi6GvyMhGV1XfUMabeNPr7iw0hlYtdGNCE8Jx8LaReV5EFPzqR5aUg9Em9zcJ%2FfJQceawVFuSyKlTwFXjxsVrWFoLWWEKigiXEWxDRWxErFb2XYMuFlDhaR%2FHVuS%2BdoDQt6Fy%2B%2BVwlz6ytuc3t0yzA4DEuEe5cdbAJfipD5j%2F3sfid%2FaXAegtiK7iFyygLGXfWqj7VlL6Bp8TuiI64NbO%2FkFrW8XPebFFhhoaoFABPM7vGeI9eVBZzEH4UzTrJfLBwXmeBFoZKdnpmfpwaLxQALZ08Bn%2BOGbJ4bxSLwH02mGQmIz3ppn1reyV51dPV6OvcIAAfQ3mlW5kJG0LAuUMP51SR2TlmWitmAnOVFxcfZQA7ITeMJF0rggWTXSpzItPXJQDb4wPEbydOlrrqcQjh00FobzHgNSy5N7uNGQ%2FXygfrmVsas9B0wyMLOyQY6pgHJWOhReFS2IyLUYj%2BSaDPXoQluGxgYAC01M%2BSr1LTg%2Fy4NJ5UrApOMWp0hDAPT6pA%2BZnnrJrjGYBSMNfrDOyD3LeJzJ2e26pM8NWl5biS8KvHpcM5c0ouP%2B5NBZL43MSB9ibip1lhTYaJSRaWK1tuc1Nrczctq8QqUQcFpLMn0J%2FcQZf6gjjZQqUQYS5ORWvUvrz7H7HQSm4Dw6qL%2F4xgUxH%2B4XQzU&X-Amz-Signature=f38cef001e3015d256f85e88afe83b8df7d0c1c710bfe6c0bcfe71f2f5de6d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26UR3TD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY9bUIGG94vFiXv23r%2FDZj6p9QNCASG9n%2BPYPcjEoUgAiBfZ%2FJLbcU4BhtnfHlpUsVn5mFk89HhX3ZVQYsWSQvBGyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMmww5%2BJkSyc1783YJKtwDrUje9BLV0Cx9PIJ1B0rNW7RDxYw3ZS8MtDIWWZkX8n7dxvKTspNqkz9cyMeUmRO3t7IYnlcyWq26Rn7p57His6ECcBOMhWfqVImkkKEElLjzLb5BOlO5NHMpqNevm8SUCZH5dspi1QopEIEhZ5PzPJMx1SfMmSr%2Fo5lhkJG24eyjDjOiC6KOUcwfPLkH5pTNMna7sGi6GvyMhGV1XfUMabeNPr7iw0hlYtdGNCE8Jx8LaReV5EFPzqR5aUg9Em9zcJ%2FfJQceawVFuSyKlTwFXjxsVrWFoLWWEKigiXEWxDRWxErFb2XYMuFlDhaR%2FHVuS%2BdoDQt6Fy%2B%2BVwlz6ytuc3t0yzA4DEuEe5cdbAJfipD5j%2F3sfid%2FaXAegtiK7iFyygLGXfWqj7VlL6Bp8TuiI64NbO%2FkFrW8XPebFFhhoaoFABPM7vGeI9eVBZzEH4UzTrJfLBwXmeBFoZKdnpmfpwaLxQALZ08Bn%2BOGbJ4bxSLwH02mGQmIz3ppn1reyV51dPV6OvcIAAfQ3mlW5kJG0LAuUMP51SR2TlmWitmAnOVFxcfZQA7ITeMJF0rggWTXSpzItPXJQDb4wPEbydOlrrqcQjh00FobzHgNSy5N7uNGQ%2FXygfrmVsas9B0wyMLOyQY6pgHJWOhReFS2IyLUYj%2BSaDPXoQluGxgYAC01M%2BSr1LTg%2Fy4NJ5UrApOMWp0hDAPT6pA%2BZnnrJrjGYBSMNfrDOyD3LeJzJ2e26pM8NWl5biS8KvHpcM5c0ouP%2B5NBZL43MSB9ibip1lhTYaJSRaWK1tuc1Nrczctq8QqUQcFpLMn0J%2FcQZf6gjjZQqUQYS5ORWvUvrz7H7HQSm4Dw6qL%2F4xgUxH%2B4XQzU&X-Amz-Signature=8e2585c2c28c109e31254f5f2d0ff7ad6c7b91b5173adf8ed33e32571a9693b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
