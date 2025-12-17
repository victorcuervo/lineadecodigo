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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N7YECIA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjiqJLuS4tA62nXwsErDxPkPLvswdrmia4TNIdvRI3bAIhAJcKLSH0xVBuYNiO5WcgPXD%2FOU2Bm2GJEZ4Dsn2YRdXuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlvI3MfjIW8CqlAOkq3APw7vq06n0jwyb%2BvP8zTMt9iKLCOZ0fqfVhTM%2Fn4xDpCuLjD3PSxwBeo3FSrrnJCkYDQkapW3EwN%2BYaH%2BODDuswzlkwvhFRAUxaX%2FriWUkJUgAjTdrinVYw56o9yroobyolXiCFTeuLRwAJsPIj19qjbCKfS%2BuuX3oolwuBrcyjqzv7T7sGxEkPu5QpL2ce0fDQdg6zAfkemKd3RTmnSAio9EnOi%2FEJrPhgldhol%2FtquGnnkbnSzWQ6f1EjfqRpoGzmT2XRfdmbtOZlz4fSe6eEUjbFCVjZSmZ0aM7k3QZ%2Fd5wwLWNZwTt1cAb8NMBTMR3PWyKzd9cTTTDH5nlcu7S9%2FnwEWsRk6zZQjh%2F5az%2BNs453apgrFnc7gpQaHxvXdMt5HihI4e1kJpuEjQWXn3ZgHigjSYSmMS8l%2BK2B5GoNlB3KcpC3Nf4OftnMJYoK0jQTFdcQyy3D7FvFujMZrh2u9Hatjs1YyiTdgObXjYSXoWKYiXtFuXOlapv8BGjZeR2oc9VQFQFdKCHxLVMqq0ZMiyS6JKa22syyC%2BCaYq7zf7LPrdr3X6GI8Nrxdc8J6NFAsMixclAk4kl%2B7WBKhIju7%2FqsAFPGGDvivMOYBy%2BiPYhSAw6Zeow9%2Bi2HUDCfoIvKBjqkAT%2BJ5qPbwlFmdCi%2BiRXv0pPO8OAb%2BSiUMmSO%2BXQloBqq8EkFEDl0XY4lN1cDmJh9iv3Po4XICk%2B6CoLcrBJ8Ilk1ZiiU1%2BgOptmcM1tUdSZHoYJ2CR7RwBccMy318izQvRCB5GCBvrgNxwmZgh4ihVt8z3Z9YKdmh7KxYIYCPMM8AxjgZ6SPiZBMjRWa1TA%2FmbINauT1Wtg8EHbPUGYDBwC5JcsA&X-Amz-Signature=84a2a6fbaa2e04b33fac23b32c9a377654fa74286413dd46bdbf5c5a951cf6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N7YECIA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjiqJLuS4tA62nXwsErDxPkPLvswdrmia4TNIdvRI3bAIhAJcKLSH0xVBuYNiO5WcgPXD%2FOU2Bm2GJEZ4Dsn2YRdXuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlvI3MfjIW8CqlAOkq3APw7vq06n0jwyb%2BvP8zTMt9iKLCOZ0fqfVhTM%2Fn4xDpCuLjD3PSxwBeo3FSrrnJCkYDQkapW3EwN%2BYaH%2BODDuswzlkwvhFRAUxaX%2FriWUkJUgAjTdrinVYw56o9yroobyolXiCFTeuLRwAJsPIj19qjbCKfS%2BuuX3oolwuBrcyjqzv7T7sGxEkPu5QpL2ce0fDQdg6zAfkemKd3RTmnSAio9EnOi%2FEJrPhgldhol%2FtquGnnkbnSzWQ6f1EjfqRpoGzmT2XRfdmbtOZlz4fSe6eEUjbFCVjZSmZ0aM7k3QZ%2Fd5wwLWNZwTt1cAb8NMBTMR3PWyKzd9cTTTDH5nlcu7S9%2FnwEWsRk6zZQjh%2F5az%2BNs453apgrFnc7gpQaHxvXdMt5HihI4e1kJpuEjQWXn3ZgHigjSYSmMS8l%2BK2B5GoNlB3KcpC3Nf4OftnMJYoK0jQTFdcQyy3D7FvFujMZrh2u9Hatjs1YyiTdgObXjYSXoWKYiXtFuXOlapv8BGjZeR2oc9VQFQFdKCHxLVMqq0ZMiyS6JKa22syyC%2BCaYq7zf7LPrdr3X6GI8Nrxdc8J6NFAsMixclAk4kl%2B7WBKhIju7%2FqsAFPGGDvivMOYBy%2BiPYhSAw6Zeow9%2Bi2HUDCfoIvKBjqkAT%2BJ5qPbwlFmdCi%2BiRXv0pPO8OAb%2BSiUMmSO%2BXQloBqq8EkFEDl0XY4lN1cDmJh9iv3Po4XICk%2B6CoLcrBJ8Ilk1ZiiU1%2BgOptmcM1tUdSZHoYJ2CR7RwBccMy318izQvRCB5GCBvrgNxwmZgh4ihVt8z3Z9YKdmh7KxYIYCPMM8AxjgZ6SPiZBMjRWa1TA%2FmbINauT1Wtg8EHbPUGYDBwC5JcsA&X-Amz-Signature=da24a9f2c603d988fe6507cff1ba2d57b2cc239b6981b55ff957f13ceaf2f4bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
