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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBFYUGB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc1RsSI0E42GWckj4jK1JAeUKQZGbr9SGo7Pd3gpCTbAiBpt5WFnyDymENLKc%2Fxfi0hojhT00jrHzmVJdJkKlxFZCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomqpGZBfwj43hPnIKtwDr33dt0StTAW0hicx3gLh1e3pgv0VGcKkir93XfLzOOkt5W4L9jspirqATY8ICluOoWAaG%2B4LDJ9SBAPiUbex9sCZZFsDoi4yyLnr3zbd4fAiDQVsqlGOXI0lk7E%2BmZ49CVXTrm2s4roVD46uODo5mwPChMnZVP9wcftrEEr1ItSzJY1u%2BmvkhmNlIrNBsfF112AgYatalzkJ2DaQ3K4x%2Fdch0LmTq%2FQ050GpOUUcaU9kGYpXNAv6dsmf4Z0%2FiHVYcBWvw8fl%2Fh6FOzAHl4%2BHJf3VPZr93h%2BiDyHO7U2V35VbnxaN4wJLI7DdhWsSBnHXE8hyjJu5n3307v31bDVhViyPlfgxvfDEMudtceW2rUucq2H9vMAv0%2B32DdDMe8DGJw5UCvoqiXqb7qSOoujsl5XrfFWk5SK39K9jwtGgOnDyxaD2DcYgUwCn06CNrT%2BS95gEyuW7XlDjfVav1iU4nXKtI44bnvwaJ8Eoq5jK%2BNQKXUNpIqa6Wjifwuaie2lQtGAOLEoJaTZISHE9qiABAsobaBI%2FU4wlGujC3YGE%2FJGUS%2FvGHSoZBLSUARz409gdrJYNE9%2BFIsFeQ3EQU6LnZR3zboLJQq8Oq%2FzbI01e02lNlm5QPm9N0d6QXIgw0%2F3SyQY6pgHnED8U3ChhOaEUBBZxd4fDq1IQiRsV5CaEodQ6nsnTL9ZlZNZ25dhvjqEiyAaJj%2BR4zv2FSPi1QB%2FpUFOOHEPFbl4%2FqhApg%2BAfB4Cjnw8zMguu1Vk5sRygzX988WdTcDVe1qqgNsvRTbssjyk5VmN4YXJ3MtiA6rtxQ9RZj%2B46wl23ZcACdr5wUFnaPKZ7fi3kTOpj6JrO5TVVQhA7dV0AdafBpQ4C&X-Amz-Signature=b9bba0fa56ffe4ed686e38c2512a6b015b5d00dbcfe0c7b1a89033065680059c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBFYUGB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc1RsSI0E42GWckj4jK1JAeUKQZGbr9SGo7Pd3gpCTbAiBpt5WFnyDymENLKc%2Fxfi0hojhT00jrHzmVJdJkKlxFZCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomqpGZBfwj43hPnIKtwDr33dt0StTAW0hicx3gLh1e3pgv0VGcKkir93XfLzOOkt5W4L9jspirqATY8ICluOoWAaG%2B4LDJ9SBAPiUbex9sCZZFsDoi4yyLnr3zbd4fAiDQVsqlGOXI0lk7E%2BmZ49CVXTrm2s4roVD46uODo5mwPChMnZVP9wcftrEEr1ItSzJY1u%2BmvkhmNlIrNBsfF112AgYatalzkJ2DaQ3K4x%2Fdch0LmTq%2FQ050GpOUUcaU9kGYpXNAv6dsmf4Z0%2FiHVYcBWvw8fl%2Fh6FOzAHl4%2BHJf3VPZr93h%2BiDyHO7U2V35VbnxaN4wJLI7DdhWsSBnHXE8hyjJu5n3307v31bDVhViyPlfgxvfDEMudtceW2rUucq2H9vMAv0%2B32DdDMe8DGJw5UCvoqiXqb7qSOoujsl5XrfFWk5SK39K9jwtGgOnDyxaD2DcYgUwCn06CNrT%2BS95gEyuW7XlDjfVav1iU4nXKtI44bnvwaJ8Eoq5jK%2BNQKXUNpIqa6Wjifwuaie2lQtGAOLEoJaTZISHE9qiABAsobaBI%2FU4wlGujC3YGE%2FJGUS%2FvGHSoZBLSUARz409gdrJYNE9%2BFIsFeQ3EQU6LnZR3zboLJQq8Oq%2FzbI01e02lNlm5QPm9N0d6QXIgw0%2F3SyQY6pgHnED8U3ChhOaEUBBZxd4fDq1IQiRsV5CaEodQ6nsnTL9ZlZNZ25dhvjqEiyAaJj%2BR4zv2FSPi1QB%2FpUFOOHEPFbl4%2FqhApg%2BAfB4Cjnw8zMguu1Vk5sRygzX988WdTcDVe1qqgNsvRTbssjyk5VmN4YXJ3MtiA6rtxQ9RZj%2B46wl23ZcACdr5wUFnaPKZ7fi3kTOpj6JrO5TVVQhA7dV0AdafBpQ4C&X-Amz-Signature=6feea3ab794c1090e16e18db836c00ac0e091e5af8ee414c555468400880f774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
