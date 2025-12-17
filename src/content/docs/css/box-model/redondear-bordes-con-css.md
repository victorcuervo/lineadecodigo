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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642CFIGXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2%2B5YiU75Ey%2F9all5MIMzYDvSl1XoEgx%2Beky5mYqS8cAiA1EMB1PgQSmK26cCmPFHdGxhD5vSPjxC2wqu4ywFZENiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJN6hwa%2FQydf30U1oKtwD3II5hoCKlek5M85sB97H7nIEc6QiJ98Uku9CsicrbPr1%2Beh6nK3GLjDaTkmgazVTVhcZ3f2ZfjuOGn5isNW60Q48e5vUOIa3KYOjtBrn2JqUEB%2BVUF6wksvK3VPlZn%2BRzTuijON04I0Bqxd7EBbDSoKyI%2B%2FCKaQ3N7XDRiI44YNZEmDi%2F2PDXbBwBqwwx7dE3tjV4CQfS6NAEKaG0yYWFbPL77wGTCcATrqA0R%2Fcv%2F4TB00uOpvL4DH5qBKpI6IlHMR%2FsUOaHF2Lk94oh7ocxaovgksilE3AeZ5svvMI%2BwIHACYGQxY%2BZ0eEF2akP6a4RhLawZ7GWOgNU0JrLvgpdE4XGqSCUcEThN5eud3FNaAvNNloiJAfdgIuvQ4uNJqxy6zWj6sRGilj8MfltN2qS8uOqE2sqOWLKBuBsYHSHEZz6UWFsYBDKIhAH%2F%2BXnOQiJwxj27Sg810dy4F%2BjlrpZpyYpDs9XsD2TWRTVapcWiJkg5rswqAEhpJSNv77Kx7E3Z%2FCiy9rOYXVmvwzfAIjsi%2FTIcGxWOUk3yimUulWDKOZhrc0GBQjfwWXO4IZwU4QJ8ATu8XbaknbSyEQhLebz%2BprZCW1Y8o5T1B2KZax6NBdtVq0iZgFOOzE3Aow4aCLygY6pgFfOHVs7G1QqtQbGHP%2BFElrfUzbUe2xshgT4FDoL8xul8aHFb61iMhY8bCe5DdU2c0q6pG%2BAi342us%2FeasXiYb122UOeG6J8x0VJluO6E%2FzMwJjwEgJE4rIedpzUY8o9dnZZgoE7ta85yYpLPNo14YCIR28clx76Aj0BHSa6TfUD41974Dc%2BFIGtnowafjehq9SklCP7dXjQcqYVcu%2F3ICpntVy9dbL&X-Amz-Signature=67d9e1b0c0183dc4a16cf7e83cec8447621f778d9c81c558c61fa60323f9d027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642CFIGXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2%2B5YiU75Ey%2F9all5MIMzYDvSl1XoEgx%2Beky5mYqS8cAiA1EMB1PgQSmK26cCmPFHdGxhD5vSPjxC2wqu4ywFZENiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJN6hwa%2FQydf30U1oKtwD3II5hoCKlek5M85sB97H7nIEc6QiJ98Uku9CsicrbPr1%2Beh6nK3GLjDaTkmgazVTVhcZ3f2ZfjuOGn5isNW60Q48e5vUOIa3KYOjtBrn2JqUEB%2BVUF6wksvK3VPlZn%2BRzTuijON04I0Bqxd7EBbDSoKyI%2B%2FCKaQ3N7XDRiI44YNZEmDi%2F2PDXbBwBqwwx7dE3tjV4CQfS6NAEKaG0yYWFbPL77wGTCcATrqA0R%2Fcv%2F4TB00uOpvL4DH5qBKpI6IlHMR%2FsUOaHF2Lk94oh7ocxaovgksilE3AeZ5svvMI%2BwIHACYGQxY%2BZ0eEF2akP6a4RhLawZ7GWOgNU0JrLvgpdE4XGqSCUcEThN5eud3FNaAvNNloiJAfdgIuvQ4uNJqxy6zWj6sRGilj8MfltN2qS8uOqE2sqOWLKBuBsYHSHEZz6UWFsYBDKIhAH%2F%2BXnOQiJwxj27Sg810dy4F%2BjlrpZpyYpDs9XsD2TWRTVapcWiJkg5rswqAEhpJSNv77Kx7E3Z%2FCiy9rOYXVmvwzfAIjsi%2FTIcGxWOUk3yimUulWDKOZhrc0GBQjfwWXO4IZwU4QJ8ATu8XbaknbSyEQhLebz%2BprZCW1Y8o5T1B2KZax6NBdtVq0iZgFOOzE3Aow4aCLygY6pgFfOHVs7G1QqtQbGHP%2BFElrfUzbUe2xshgT4FDoL8xul8aHFb61iMhY8bCe5DdU2c0q6pG%2BAi342us%2FeasXiYb122UOeG6J8x0VJluO6E%2FzMwJjwEgJE4rIedpzUY8o9dnZZgoE7ta85yYpLPNo14YCIR28clx76Aj0BHSa6TfUD41974Dc%2BFIGtnowafjehq9SklCP7dXjQcqYVcu%2F3ICpntVy9dbL&X-Amz-Signature=058314fa0cef0cf0d1672c85a6fb72024a12ac6047120a997c3cadbafc68f155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
