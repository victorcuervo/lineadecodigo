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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U257JGR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4YXAwrCRrKSanemigYuBiqssb%2F%2B5C%2FtQpklS7y2bUdAiEAoBoPnWUoAzRtn0pILZ8nY9lLgYlkW6s%2FqAOpzyswi3Yq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIz6oDW2SSP49gPuvCrcAyar4CRvqP1%2Bl8M5Yc1i%2BBRAdkzRHjP%2FeyML7nqTMDevjcKjjntTjm2ul8kf6bCZRv8psHNeHhTVOn%2Fr4wi%2FeXs25bNC%2FGXMiG0QFuDbXrNUpdiI3pwjXLb1%2BDK%2F5LNmGq7QutxxWM8ZOfoGi3zOxiyFJjXB5y9ocFzmKmLm2%2B5ZHjc%2BQwteAiHM%2FejkFFsrxWEpTZQAtX2Q%2FWmFigak%2BgSWrGjexI9hyfvVEC21URBxbC4mRkFHQAINMWLanqC0sK7wnSHUAqGyu%2FLzXIjcjs3idrNrB9RI73moFSOMbNW1NiPkcEjDuFJ3NnAIWgg9wqdLN8lk7wboR3ledb4Sz0DboseYR0rIM5JG1GnDfmzwkxrULWqnp4YE6caJ9Ce6QFm6Rj8bdSnrlSgaBPjQMHiWuAInCez%2BKhm53Ru%2B5w4rLE517tHrOv6dBGk06mzcu%2FPhn9Cvec%2BXTSTWovOO3jgf7HACLPxI3jRAPAuOwYvQTOYfQ5TnvkOnEvY9gfTCGdvsh6to%2BjKTl14%2BfH9q9VYtI%2BHn5Mcgku4onz1bXtAJZMbZpAFOjqP018wnYLz%2B2YgBmtVtc1voXuC6mKgrf9OYHEpMpdlebMGPvZ3xIOKKFOoWMOea7V53kMsdMNjKyskGOqUBA96uA8XrKXIx0j9mlOeAOX8YKTws88geQmxjidoyYawyLCbbcaqY94FigZSYo8olHxXvlfdn6t0Vnft0YiRacvqbJmcNrWH0bLmo45bTEEaoN%2BumF6IxiJHGq%2BVBT2JlGWciB978urIBkZn5qwa110U6aTFugq7mOrtkDZ4strP57uVHZj3aWfKfTEmXtBsfffO4PbLAi6uhliqdJvXi49zaei2d&X-Amz-Signature=0905219c3b1af388c40316c68ae54b3535b5d383fe89beeb879cc3992877861f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U257JGR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4YXAwrCRrKSanemigYuBiqssb%2F%2B5C%2FtQpklS7y2bUdAiEAoBoPnWUoAzRtn0pILZ8nY9lLgYlkW6s%2FqAOpzyswi3Yq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIz6oDW2SSP49gPuvCrcAyar4CRvqP1%2Bl8M5Yc1i%2BBRAdkzRHjP%2FeyML7nqTMDevjcKjjntTjm2ul8kf6bCZRv8psHNeHhTVOn%2Fr4wi%2FeXs25bNC%2FGXMiG0QFuDbXrNUpdiI3pwjXLb1%2BDK%2F5LNmGq7QutxxWM8ZOfoGi3zOxiyFJjXB5y9ocFzmKmLm2%2B5ZHjc%2BQwteAiHM%2FejkFFsrxWEpTZQAtX2Q%2FWmFigak%2BgSWrGjexI9hyfvVEC21URBxbC4mRkFHQAINMWLanqC0sK7wnSHUAqGyu%2FLzXIjcjs3idrNrB9RI73moFSOMbNW1NiPkcEjDuFJ3NnAIWgg9wqdLN8lk7wboR3ledb4Sz0DboseYR0rIM5JG1GnDfmzwkxrULWqnp4YE6caJ9Ce6QFm6Rj8bdSnrlSgaBPjQMHiWuAInCez%2BKhm53Ru%2B5w4rLE517tHrOv6dBGk06mzcu%2FPhn9Cvec%2BXTSTWovOO3jgf7HACLPxI3jRAPAuOwYvQTOYfQ5TnvkOnEvY9gfTCGdvsh6to%2BjKTl14%2BfH9q9VYtI%2BHn5Mcgku4onz1bXtAJZMbZpAFOjqP018wnYLz%2B2YgBmtVtc1voXuC6mKgrf9OYHEpMpdlebMGPvZ3xIOKKFOoWMOea7V53kMsdMNjKyskGOqUBA96uA8XrKXIx0j9mlOeAOX8YKTws88geQmxjidoyYawyLCbbcaqY94FigZSYo8olHxXvlfdn6t0Vnft0YiRacvqbJmcNrWH0bLmo45bTEEaoN%2BumF6IxiJHGq%2BVBT2JlGWciB978urIBkZn5qwa110U6aTFugq7mOrtkDZ4strP57uVHZj3aWfKfTEmXtBsfffO4PbLAi6uhliqdJvXi49zaei2d&X-Amz-Signature=6d96b502fabca625b1e4cd2a8b8b6aff5fdf87f7c709f69ec1e5f1a7b8a3e9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
