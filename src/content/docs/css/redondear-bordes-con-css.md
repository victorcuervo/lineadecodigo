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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IATODCA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFi2iBTbkZqr%2FRgnBJAkRRLlblgwgWkoesA6myKy8tmQIhAOJ0BiC5R%2BK%2BHTzxZvy0l3NL9U6lfLNU2AeNB86rn%2FhpKv8DCGAQABoMNjM3NDIzMTgzODA1IgzTZkzfXbWQ2a4AmW4q3AM%2Bss7WyQqISh4mw8lYwKr72uo23gjh%2Bkf3EkFTedWy841MoMQexFz8IkdKFKKMjMBAgU%2BnAEhfxMJNRkppAoaa64lXmZEcBxnHVNYWoquJGDdjs3Qe8400H2LyDRKcLUNeiW0HBa7M1xBKBHP8rn3ddiOCHXo2l5B3dg7wW6CRXbH4MNXQxTnPgJwg4rGFvdOnv9gMv91R1iQ1EIyGWnyykW9hPwRJ4ixrcOdbJu6DJ2bU8SBGgw4zjqI%2BToVmpKVP0AKqCJ2d9FZ%2FRiMHpqpO9zlfno0wUYIu3iT%2FD98PwAbQc%2FVleiGyQMOw%2FZUwlEerivzEGg6FeRfQus93vZJWY0yWaX%2FUoEcZzzACG4aKlu%2BXM86gXmvsKg%2FaahRfCbcFrMoHIMh%2FhpOembeZpoSfzHFilhZJDTcL9WwOtq9YS9GC0RTypV3tD6KZhRVb%2FHSiYU5U0edKLcV53H9c82yCdOZm6fabSkAHtByReWj9wYK6rIqNm%2FlpqiMdsk%2Fnp5C6ILcuEZVIknLZiU1Ei1%2FH9XVZQggVorgmmQbiLYZfFELDQaUWhOc4YGl0lCeZqH5CLYPljwq1CXqt8jew6M9A6nLOn5vzphx6CWSSIY3qDuiS203IGrp1Y3bFrDC978vJBjqkASitZ5qwOh6kqizKKr3POj5rIaN84zm4qhLMBA0SX0LJ3QYzzJIetIFgYSeY08dF8gTUS0%2BjV5NoSi9PFPcfvTgXG7PYC09t0wmijAYEWc1ZCYn52v27YWh9vd6cnf7kawzm%2B6ltgkJGRrSkYoMg1rYc0jCCJZxT3XV9GexDbefjjNem6bYOMaLShJgSxg9zKKwR7ZYdvqgF52EX15rl1ETVwnMG&X-Amz-Signature=50d20c166500a976a3a24913fba800555f52619ccee91a05a79d3f259f402bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IATODCA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFi2iBTbkZqr%2FRgnBJAkRRLlblgwgWkoesA6myKy8tmQIhAOJ0BiC5R%2BK%2BHTzxZvy0l3NL9U6lfLNU2AeNB86rn%2FhpKv8DCGAQABoMNjM3NDIzMTgzODA1IgzTZkzfXbWQ2a4AmW4q3AM%2Bss7WyQqISh4mw8lYwKr72uo23gjh%2Bkf3EkFTedWy841MoMQexFz8IkdKFKKMjMBAgU%2BnAEhfxMJNRkppAoaa64lXmZEcBxnHVNYWoquJGDdjs3Qe8400H2LyDRKcLUNeiW0HBa7M1xBKBHP8rn3ddiOCHXo2l5B3dg7wW6CRXbH4MNXQxTnPgJwg4rGFvdOnv9gMv91R1iQ1EIyGWnyykW9hPwRJ4ixrcOdbJu6DJ2bU8SBGgw4zjqI%2BToVmpKVP0AKqCJ2d9FZ%2FRiMHpqpO9zlfno0wUYIu3iT%2FD98PwAbQc%2FVleiGyQMOw%2FZUwlEerivzEGg6FeRfQus93vZJWY0yWaX%2FUoEcZzzACG4aKlu%2BXM86gXmvsKg%2FaahRfCbcFrMoHIMh%2FhpOembeZpoSfzHFilhZJDTcL9WwOtq9YS9GC0RTypV3tD6KZhRVb%2FHSiYU5U0edKLcV53H9c82yCdOZm6fabSkAHtByReWj9wYK6rIqNm%2FlpqiMdsk%2Fnp5C6ILcuEZVIknLZiU1Ei1%2FH9XVZQggVorgmmQbiLYZfFELDQaUWhOc4YGl0lCeZqH5CLYPljwq1CXqt8jew6M9A6nLOn5vzphx6CWSSIY3qDuiS203IGrp1Y3bFrDC978vJBjqkASitZ5qwOh6kqizKKr3POj5rIaN84zm4qhLMBA0SX0LJ3QYzzJIetIFgYSeY08dF8gTUS0%2BjV5NoSi9PFPcfvTgXG7PYC09t0wmijAYEWc1ZCYn52v27YWh9vd6cnf7kawzm%2B6ltgkJGRrSkYoMg1rYc0jCCJZxT3XV9GexDbefjjNem6bYOMaLShJgSxg9zKKwR7ZYdvqgF52EX15rl1ETVwnMG&X-Amz-Signature=f7e9e92051a0dfdb692c0e75699055d4e92ad06b1ed4d8552a8bf388502e2a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
