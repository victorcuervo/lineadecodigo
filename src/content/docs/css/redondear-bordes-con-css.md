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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5QUXZI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK5O31KpwSZIWU6qme3%2FhavemoDFUTXvaK0JnCE%2FG5GAiBWGMpXWBL%2FmuxyHvC3NfGytiJ%2Bhly9lnHXt4FoEp5q3yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7Bu7ZkEgGi1%2BvziKtwDgGsX0PfJ4xtC7e5GUI0TbRkoMDhSa41EJGV2WFYJCN0IPICvwCTKPQW68lZtti63IrIQdw7wXkryf219ouNUrMot5PVVoXY0RPi5QbxZv22i2q3neC6HtAvy7k9bATKI3zDmJik7%2BMciDJ8QevM4p6Lqiv1RrxTKcHTGOtUbT%2FuSyw3tYgim9tBKrZxnO9hd1c4wPRg9nt3GtNlICMHs9dV%2BQksY9rLugK3mr8phXcWpgR6hCQuZgkR0alB7hr%2FQzA%2FHnJLLtrkMa6P5j%2FfsiCtzustpP6P1D0ofq%2Bj2WMj1I7GDcWllaviYiPyylN54t3nEz6Tv0Zq61%2BkiWW5Jcm8c9GUDL3klLKhBR7E%2FuKZ45qr0SrIurq6QBVtIpJHxKFh35kAQQ%2FIcV5jgRAEe%2F3qa6rkiGRER9zTlY89xyNN68u%2FLnRx2tiY9SJoJidY63Bq88B8GtiWnCJfvt2CFDqnBAvSyRHGIlDLQQtHWnqqxvcC5Nk1W5UeRQO6Jx6ccPKT0emyKK3yMrg%2FUQaz2FkRRk1uAvopZZwxo1NU52HoFfayd3SaTfNtKKZDVky7lSaKg0adHuHH9QhLTT%2BGffaxX3%2B89en9CuYzMQyPPTLaANJBpa%2BR9mVhjd1gwjeXeyQY6pgGk63EySKSBUHctAxNR2xw%2FkfznrKGg8NjpbSI442QAPZErCKErA%2FcEhocf1%2B0MdbQS1c7HkK%2FSK6paRnhltZQckWrOexgYKMlsV0GOvVzQuBAjxirM0LPCiViLKX3b5%2B6aRdv5By5Y6XwNTGcomlupEOGpjKzvB0qDjSk%2FMa2Jig6qQewpldJiWJbMZjXS29EPOFx%2BK6j%2BpOgwABMAueNGxn81oNW%2B&X-Amz-Signature=c0a1c4bf1663e6952864bf982a07a0780ee527e5f74dbfcbd38aa3144a3e60bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5QUXZI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK5O31KpwSZIWU6qme3%2FhavemoDFUTXvaK0JnCE%2FG5GAiBWGMpXWBL%2FmuxyHvC3NfGytiJ%2Bhly9lnHXt4FoEp5q3yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7Bu7ZkEgGi1%2BvziKtwDgGsX0PfJ4xtC7e5GUI0TbRkoMDhSa41EJGV2WFYJCN0IPICvwCTKPQW68lZtti63IrIQdw7wXkryf219ouNUrMot5PVVoXY0RPi5QbxZv22i2q3neC6HtAvy7k9bATKI3zDmJik7%2BMciDJ8QevM4p6Lqiv1RrxTKcHTGOtUbT%2FuSyw3tYgim9tBKrZxnO9hd1c4wPRg9nt3GtNlICMHs9dV%2BQksY9rLugK3mr8phXcWpgR6hCQuZgkR0alB7hr%2FQzA%2FHnJLLtrkMa6P5j%2FfsiCtzustpP6P1D0ofq%2Bj2WMj1I7GDcWllaviYiPyylN54t3nEz6Tv0Zq61%2BkiWW5Jcm8c9GUDL3klLKhBR7E%2FuKZ45qr0SrIurq6QBVtIpJHxKFh35kAQQ%2FIcV5jgRAEe%2F3qa6rkiGRER9zTlY89xyNN68u%2FLnRx2tiY9SJoJidY63Bq88B8GtiWnCJfvt2CFDqnBAvSyRHGIlDLQQtHWnqqxvcC5Nk1W5UeRQO6Jx6ccPKT0emyKK3yMrg%2FUQaz2FkRRk1uAvopZZwxo1NU52HoFfayd3SaTfNtKKZDVky7lSaKg0adHuHH9QhLTT%2BGffaxX3%2B89en9CuYzMQyPPTLaANJBpa%2BR9mVhjd1gwjeXeyQY6pgGk63EySKSBUHctAxNR2xw%2FkfznrKGg8NjpbSI442QAPZErCKErA%2FcEhocf1%2B0MdbQS1c7HkK%2FSK6paRnhltZQckWrOexgYKMlsV0GOvVzQuBAjxirM0LPCiViLKX3b5%2B6aRdv5By5Y6XwNTGcomlupEOGpjKzvB0qDjSk%2FMa2Jig6qQewpldJiWJbMZjXS29EPOFx%2BK6j%2BpOgwABMAueNGxn81oNW%2B&X-Amz-Signature=4fe7b384aa3f218bb1277373f279709c2b7171031f34aca16c4ddfb93fe4934c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
