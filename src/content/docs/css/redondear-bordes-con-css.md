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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LG6UMH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEWuEEWQOxOPosDreYL2fgoo%2B%2BS22HWzdm9k9kAYJwiHAiAnxgw%2FEuQzjLzSBUholVGJqvJgJkV%2F0RMglXnSPKhWdSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMwiloRTpwFsycZ6ApKtwDHBX5XdxFbr2S0vemKIJazOsctw4KFptzLVH1aKev8nNglXi3qqJcHgXQ6bfefwMLD3bC7QzYWPSf3NuLfSvImotCfGKIb7Llv0FGrwjCK2MQnNb50YmcxsXiQGLstEFq8%2FiDJYsdu9UA6NnuSqeJMbG1S0gbbAxmkH%2BpPJ3Ms0JdOqYx15pacJc63FI03z7Tooe%2FYRHGj1qBAHnLDAHlr3ahCIasaYUbT3gOverBYYd3zjzdih04O9AT6cRfZCrjJJGkBUwOp29GQbhTQaw83DbgeBJdqTioWrarf%2F2rBLlLeO6Rc51LaQY3SRwF4R5Xfep0HEPROUdEooftO9SbhjoOs%2Bnm94QVOqou3EjfyssRi8NrbEIjABNpvirm2JwP9BTSZRR97aA9K21XCGp3ERLQPwmR%2FweyLQ5euJNx5kyns1%2FphR%2FknP02069Ac%2Flv5MiGbi0bpd1TsLfRM0a0aQgjE%2BcnnFS0O9V%2BwKYSAHqYkiyUKeSRQm7y9FRiDv5kV6tgA7ObgjjgFbxQ2U38CZ0qd6dE0TElv5%2Bniwj9lGPFiSyDP9n5vRaR7xJ7Dj3IVpC%2BXlFWYA%2F3OR9rQW4sou%2BnL%2Famgk5D7VCK8nquCBbwXMRdxx%2BgxQr5ZYwwu8vEyQY6pgFaY5TkZoZF4Nb3J2jZBRRiS63Yd4NbBSflr4WBOHpWzxIXTYoJ%2Fef1JJxM4TvW04XDr%2FU6lhpfZeVWAQjyNhTyV%2FdDbejD8Eo4ZRUYJeOlj0iXwJBr1VyM9yTKKQMAWqlfBMzwXWNQ7g8tzbI1f4k7%2BDNV9rGa6MQnEEEmbuT4nGenFUZqmoCNqpgX7n3fKC77nMZQlmdgHa5NrycxIdlXfiI26ywG&X-Amz-Signature=0aba3ba093a0140cd735ca60dee450d8a8e0180ddc2d3aece528a44649306861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LG6UMH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEWuEEWQOxOPosDreYL2fgoo%2B%2BS22HWzdm9k9kAYJwiHAiAnxgw%2FEuQzjLzSBUholVGJqvJgJkV%2F0RMglXnSPKhWdSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMwiloRTpwFsycZ6ApKtwDHBX5XdxFbr2S0vemKIJazOsctw4KFptzLVH1aKev8nNglXi3qqJcHgXQ6bfefwMLD3bC7QzYWPSf3NuLfSvImotCfGKIb7Llv0FGrwjCK2MQnNb50YmcxsXiQGLstEFq8%2FiDJYsdu9UA6NnuSqeJMbG1S0gbbAxmkH%2BpPJ3Ms0JdOqYx15pacJc63FI03z7Tooe%2FYRHGj1qBAHnLDAHlr3ahCIasaYUbT3gOverBYYd3zjzdih04O9AT6cRfZCrjJJGkBUwOp29GQbhTQaw83DbgeBJdqTioWrarf%2F2rBLlLeO6Rc51LaQY3SRwF4R5Xfep0HEPROUdEooftO9SbhjoOs%2Bnm94QVOqou3EjfyssRi8NrbEIjABNpvirm2JwP9BTSZRR97aA9K21XCGp3ERLQPwmR%2FweyLQ5euJNx5kyns1%2FphR%2FknP02069Ac%2Flv5MiGbi0bpd1TsLfRM0a0aQgjE%2BcnnFS0O9V%2BwKYSAHqYkiyUKeSRQm7y9FRiDv5kV6tgA7ObgjjgFbxQ2U38CZ0qd6dE0TElv5%2Bniwj9lGPFiSyDP9n5vRaR7xJ7Dj3IVpC%2BXlFWYA%2F3OR9rQW4sou%2BnL%2Famgk5D7VCK8nquCBbwXMRdxx%2BgxQr5ZYwwu8vEyQY6pgFaY5TkZoZF4Nb3J2jZBRRiS63Yd4NbBSflr4WBOHpWzxIXTYoJ%2Fef1JJxM4TvW04XDr%2FU6lhpfZeVWAQjyNhTyV%2FdDbejD8Eo4ZRUYJeOlj0iXwJBr1VyM9yTKKQMAWqlfBMzwXWNQ7g8tzbI1f4k7%2BDNV9rGa6MQnEEEmbuT4nGenFUZqmoCNqpgX7n3fKC77nMZQlmdgHa5NrycxIdlXfiI26ywG&X-Amz-Signature=73b84b7a52e22181378ba2171686e8e9e0b5e0b0f7af8e039321b9a83a8e9c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
