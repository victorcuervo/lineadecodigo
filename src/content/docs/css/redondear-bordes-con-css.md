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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKK6VHW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv3ZR4X%2BpNqVe1IVDeL6AQ6V%2Fc4b9UX78vscZ6%2FDH8WQIhAPJQVNgp3Ci6orjAowaFUtEsopJmf6J7pE7qowbctoGsKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVzLh6dEJqR8Sfid4q3APiGteS1Wmdcs6uI9brIzVV8yUEprbTTo%2FtxLUxfMJQvrZMVB2wj4wP0TQ252df3oicweNnaQVYjmq48Zmzc1ldb5RNScbLN6SSHw27zmS5SdfZ3BD6bMWMYKl5eSJqxtkoc44YvEZXTGCcmQ08r2Qh78YPkX5rQL1ylg0gO5mxhprMIs%2BeIupiFyOnbfEeN%2BxpXofz6H%2FjQxHqlsx2%2BsI1BNEKfc8Eg%2FR%2B5ckn9EPG6GKFFC6ZT3tODSOaDFibQtdTUyOYvhL5IsKgnDzmNLHBHjxG%2Fjh0dddnQbzKdFEkQG2hsPhy0CWef4F2WhahRB1DouMkM2QlfOWmkXw9FrFowoKybgH8dEaB6u9WYzUN0HHTEcj7xs5WNmNL3ZELTxQ%2FCuZJdMBcuMutAXxfwUDN1Ce5MRd5Hx5rqKpYZfXuEur8QXSLaDLxJz7S1TmhkuXx0cRfJ0qxCslvJTW8fgiFkxt%2FSEbGd02zqtLcP5BCZC%2BA%2FtHlz9YzFEePP%2BJ3utK9ZH4hEvFWFwmil4XWXtJZ39x%2B1J2MGI6OHEKPgNJpl0ebYIvUdP8cG0aK1%2BztqCCvFshkoo%2FtLL%2FiZiVYHELG0qAAMg%2B%2FIMwMTzX7YVP6nrrx5voKOCboJEzkTzCLh9zJBjqkAVcAV%2BxWliCZfxVJIB%2FS%2FceC7qWOLE6pbyatiajVcy2818E8NfkuYxSklcLgzMFYWKqj9lFSS72GEoMmdWQRQHKck8Vkqp9P8Hr1ekm1NkRpEG720IFYN%2F8BsG4uJ3O99zDj%2BkgSkYeh2zrSr2FqXwbYhEMFY7k7tL6f%2Fa4LnnlXvGYKuUll8PyRhvVeaNK%2BopOhKkOwTy45EUrvy%2FGuNlfYmEBq&X-Amz-Signature=c4d5e0f6ec0870e4a6f6e8a83d267ca79641d0b839e63e32cba421825f834a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKK6VHW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv3ZR4X%2BpNqVe1IVDeL6AQ6V%2Fc4b9UX78vscZ6%2FDH8WQIhAPJQVNgp3Ci6orjAowaFUtEsopJmf6J7pE7qowbctoGsKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVzLh6dEJqR8Sfid4q3APiGteS1Wmdcs6uI9brIzVV8yUEprbTTo%2FtxLUxfMJQvrZMVB2wj4wP0TQ252df3oicweNnaQVYjmq48Zmzc1ldb5RNScbLN6SSHw27zmS5SdfZ3BD6bMWMYKl5eSJqxtkoc44YvEZXTGCcmQ08r2Qh78YPkX5rQL1ylg0gO5mxhprMIs%2BeIupiFyOnbfEeN%2BxpXofz6H%2FjQxHqlsx2%2BsI1BNEKfc8Eg%2FR%2B5ckn9EPG6GKFFC6ZT3tODSOaDFibQtdTUyOYvhL5IsKgnDzmNLHBHjxG%2Fjh0dddnQbzKdFEkQG2hsPhy0CWef4F2WhahRB1DouMkM2QlfOWmkXw9FrFowoKybgH8dEaB6u9WYzUN0HHTEcj7xs5WNmNL3ZELTxQ%2FCuZJdMBcuMutAXxfwUDN1Ce5MRd5Hx5rqKpYZfXuEur8QXSLaDLxJz7S1TmhkuXx0cRfJ0qxCslvJTW8fgiFkxt%2FSEbGd02zqtLcP5BCZC%2BA%2FtHlz9YzFEePP%2BJ3utK9ZH4hEvFWFwmil4XWXtJZ39x%2B1J2MGI6OHEKPgNJpl0ebYIvUdP8cG0aK1%2BztqCCvFshkoo%2FtLL%2FiZiVYHELG0qAAMg%2B%2FIMwMTzX7YVP6nrrx5voKOCboJEzkTzCLh9zJBjqkAVcAV%2BxWliCZfxVJIB%2FS%2FceC7qWOLE6pbyatiajVcy2818E8NfkuYxSklcLgzMFYWKqj9lFSS72GEoMmdWQRQHKck8Vkqp9P8Hr1ekm1NkRpEG720IFYN%2F8BsG4uJ3O99zDj%2BkgSkYeh2zrSr2FqXwbYhEMFY7k7tL6f%2Fa4LnnlXvGYKuUll8PyRhvVeaNK%2BopOhKkOwTy45EUrvy%2FGuNlfYmEBq&X-Amz-Signature=19c7b2422a81dc80854d04e06ced2ffa52b297b87677a412bd6c0e34274c7f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
