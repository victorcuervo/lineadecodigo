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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBQD3CB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx4NnpBik%2BRBUr0owEJZrg8EZCaZTvvk7J8BDaTFnKrgIgJd28xDcRUD%2BgaaMYHwGQ5SSloNrQYcK%2BDRaJ2WAJVwUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK23SSoc7qHKlc%2Bm6CrcAw%2Ba9T4E9HHmgMAbaZ%2B18zYxO2rqH904%2BkOw7nKulX1KrPDLzN3uhA4p0UP1v49ufqAKD9mCmje7oiGEnIkL%2B%2ByWSYYq9HoOQlTeGOe3Pwe2NeGhzLaLsml9E82zBR2SAl4OLDqcG%2FZj9IIzPoa41BV332UGjsHyVNzuqIWvM65qXmb28ZY%2BvyEYwgRlbUTaX9dIJ5EzQI4VUsgTNnzqluweNSNE4sDUQa7hL5U6vaCAeDpWyPby31mzYc4I71cKbW3HQ%2FhURey7tEu5TRU4k%2FbAZYkz8L1yOfxFqu3QpGZ55vFAwo3PFJgmYaNUlLcswcJQxcu5vZkQMT%2Byy7FiXJFBrxLDjlHD6qo%2B5ogxxPegXPuDnj4BPaCKydmIkON9%2BmTeDrwvXcylW82%2BWn%2BHJ0YUAZZjTrJT7xFcBhhJ5fbx2rxw%2B%2FhkX2O9Q7Wbo8Jyb1pmk4Rzel3WH%2Bx4i3Q1pdTc6Ya1NUN%2FQnllIjlnFYd9QsEeaQr8pKxjaBFiVaBXmQgfA0XcbkH561wrG3qT5Q3cGVK4uczAYs1ZJ12LYflO%2BodIJ7i6toD8mi3qUPvFppBiD7xXtYG259LLat0jIOfY8fpQowpCnJoj9qzIYdTgzAODCEUY4FDU2l3XMO%2BU2ckGOqUBNVRtinsSD3ZGvooT6jM1Xixe9nC7xEkIsfFQg1Cag7b403xuldKXIjTngnlQuL8JdC4aJqrJlqcUi4cDgE3exLcJLl6zHK5fhxuUSM6SUN0yh%2BEy4j%2Fygr7GXNuM898zy1U2uKeQ9OU2MRpy5nutioDUSXd0lyNWwmglW0jfGd76OU1oqzQMSOPLCGIJUEP3ItUbzFxAhDbxz4QGC980QF3am4Rn&X-Amz-Signature=df3e2ab5a37836d9b143ac8a76b22f96a7d5b254f20ac546da41aa4a411c2dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBQD3CB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx4NnpBik%2BRBUr0owEJZrg8EZCaZTvvk7J8BDaTFnKrgIgJd28xDcRUD%2BgaaMYHwGQ5SSloNrQYcK%2BDRaJ2WAJVwUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK23SSoc7qHKlc%2Bm6CrcAw%2Ba9T4E9HHmgMAbaZ%2B18zYxO2rqH904%2BkOw7nKulX1KrPDLzN3uhA4p0UP1v49ufqAKD9mCmje7oiGEnIkL%2B%2ByWSYYq9HoOQlTeGOe3Pwe2NeGhzLaLsml9E82zBR2SAl4OLDqcG%2FZj9IIzPoa41BV332UGjsHyVNzuqIWvM65qXmb28ZY%2BvyEYwgRlbUTaX9dIJ5EzQI4VUsgTNnzqluweNSNE4sDUQa7hL5U6vaCAeDpWyPby31mzYc4I71cKbW3HQ%2FhURey7tEu5TRU4k%2FbAZYkz8L1yOfxFqu3QpGZ55vFAwo3PFJgmYaNUlLcswcJQxcu5vZkQMT%2Byy7FiXJFBrxLDjlHD6qo%2B5ogxxPegXPuDnj4BPaCKydmIkON9%2BmTeDrwvXcylW82%2BWn%2BHJ0YUAZZjTrJT7xFcBhhJ5fbx2rxw%2B%2FhkX2O9Q7Wbo8Jyb1pmk4Rzel3WH%2Bx4i3Q1pdTc6Ya1NUN%2FQnllIjlnFYd9QsEeaQr8pKxjaBFiVaBXmQgfA0XcbkH561wrG3qT5Q3cGVK4uczAYs1ZJ12LYflO%2BodIJ7i6toD8mi3qUPvFppBiD7xXtYG259LLat0jIOfY8fpQowpCnJoj9qzIYdTgzAODCEUY4FDU2l3XMO%2BU2ckGOqUBNVRtinsSD3ZGvooT6jM1Xixe9nC7xEkIsfFQg1Cag7b403xuldKXIjTngnlQuL8JdC4aJqrJlqcUi4cDgE3exLcJLl6zHK5fhxuUSM6SUN0yh%2BEy4j%2Fygr7GXNuM898zy1U2uKeQ9OU2MRpy5nutioDUSXd0lyNWwmglW0jfGd76OU1oqzQMSOPLCGIJUEP3ItUbzFxAhDbxz4QGC980QF3am4Rn&X-Amz-Signature=c38a5ff98f3a97c32f4adbfd826f70abb4185d0737f57d1a0668a230648337b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
