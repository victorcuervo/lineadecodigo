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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GOH2QV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDi%2Bi3nfCksinm3hBHEvM9IsalEfE5CYkMl6SnGlI0a0wIhAKwnugC4upd040TXdAeLPkLddpWToGwCdz02xb%2Fwkk1QKv8DCEYQABoMNjM3NDIzMTgzODA1Igw84FkDyVqup7VOxgkq3AMi2ke6Zy6emH0CmkBEQaVf0iUyGuqWCxPkvIG6hSF6DXAbJqYgAShojc%2Bfhonc9lmjOVVrDewgjzSLCfnKPqrQZIHvY1prmaMm4MS5Scubz%2BPFQdZpT2%2FgoUIrpo4QuqLqS%2BviA6p0%2BNC6CWfjCUDlwvsgt26IrgDH7yGFSbja3CPQIkJzgQMS0p4QwRS67Aya5K59kS6%2BPnw18vIKzQzNHc9icHHtbXca5Ysb3H0f4k%2Fq2u0VXnbO7DyVa7tCMDRdOaU7Dzb4j1KZd76yONCGvaNRwQHf%2F8SFrb6MuEeKlGKfRLHBTkrF0SWFZQBRkFFySqgycR9OUgzf9u6j%2BYhurhxJLxJp2l1dxzFqM%2FKQL6GjR5hpD52gkPyPLN9j9yQXfW6Sdc759HyZddopj6MYJJ9nEWqG2vqfEk6wnxAHSoyxtoj%2Bgmmn8zXEmn9QirYvQciVOlEenJ9LmW9YT49z3H7cNJWI6sW78ZsajO4bbttAFQlYl%2BV%2Bz%2BfyMzM8khFhRB64mWglaCkqI2gyOmR3W%2BwAiRuOxkp8HZrSEBRormvibj8LPfhXX6ZFkXAQlPEDuv1Pi1rs9IZNruAuYFKPnqRrbzyIpExk2IEzKM5suhV0alyuDhh4W2XAnzD5g8bJBjqkAZo2wmno2ZDU0lV3XAhS0ukVBXEe9ne2yWeckWkQYvPmSf5TAm%2Fdi8CQrS6BR1sMZ6jI9wFRepR31tKXC17I6pXGWw%2BPCjyb4TDUTO3%2F5jEJDvM4MOAFFT6%2BRe%2FQD8ihkFlUEPL%2B1BQZXEkJs1LzVSd55UIZfxuW1IFa5DjTrcPRIu249FtPe3tfiDbnoZOVoOaDLtNISc8TCBn0BF%2BgTv5hIFDW&X-Amz-Signature=f72850afff40423128f1700920faa64e1f676bca6e313a21b52b9a122159b5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GOH2QV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDi%2Bi3nfCksinm3hBHEvM9IsalEfE5CYkMl6SnGlI0a0wIhAKwnugC4upd040TXdAeLPkLddpWToGwCdz02xb%2Fwkk1QKv8DCEYQABoMNjM3NDIzMTgzODA1Igw84FkDyVqup7VOxgkq3AMi2ke6Zy6emH0CmkBEQaVf0iUyGuqWCxPkvIG6hSF6DXAbJqYgAShojc%2Bfhonc9lmjOVVrDewgjzSLCfnKPqrQZIHvY1prmaMm4MS5Scubz%2BPFQdZpT2%2FgoUIrpo4QuqLqS%2BviA6p0%2BNC6CWfjCUDlwvsgt26IrgDH7yGFSbja3CPQIkJzgQMS0p4QwRS67Aya5K59kS6%2BPnw18vIKzQzNHc9icHHtbXca5Ysb3H0f4k%2Fq2u0VXnbO7DyVa7tCMDRdOaU7Dzb4j1KZd76yONCGvaNRwQHf%2F8SFrb6MuEeKlGKfRLHBTkrF0SWFZQBRkFFySqgycR9OUgzf9u6j%2BYhurhxJLxJp2l1dxzFqM%2FKQL6GjR5hpD52gkPyPLN9j9yQXfW6Sdc759HyZddopj6MYJJ9nEWqG2vqfEk6wnxAHSoyxtoj%2Bgmmn8zXEmn9QirYvQciVOlEenJ9LmW9YT49z3H7cNJWI6sW78ZsajO4bbttAFQlYl%2BV%2Bz%2BfyMzM8khFhRB64mWglaCkqI2gyOmR3W%2BwAiRuOxkp8HZrSEBRormvibj8LPfhXX6ZFkXAQlPEDuv1Pi1rs9IZNruAuYFKPnqRrbzyIpExk2IEzKM5suhV0alyuDhh4W2XAnzD5g8bJBjqkAZo2wmno2ZDU0lV3XAhS0ukVBXEe9ne2yWeckWkQYvPmSf5TAm%2Fdi8CQrS6BR1sMZ6jI9wFRepR31tKXC17I6pXGWw%2BPCjyb4TDUTO3%2F5jEJDvM4MOAFFT6%2BRe%2FQD8ihkFlUEPL%2B1BQZXEkJs1LzVSd55UIZfxuW1IFa5DjTrcPRIu249FtPe3tfiDbnoZOVoOaDLtNISc8TCBn0BF%2BgTv5hIFDW&X-Amz-Signature=111d7096e5dd0b733a22fc45619d9323727ca145459619a99b2f3d4da36b896d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
