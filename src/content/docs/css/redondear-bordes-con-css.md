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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OL6MTGE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOcKslAYhVVZZdGo2f6C8bZZJ0uA40ZtXEPYqMo6ZngIhAMbCaTYl5OhpIGAZ3Fx3YHsNna0kWG0s5P00HBj3RRIuKv8DCG0QABoMNjM3NDIzMTgzODA1Igzv1oSBp4nr9yMH8jEq3AO9%2FTTrbWCOFh8%2FLYLxNWIn2SB5dkBI7KjeJljRaqZDf%2B11SZq4yE6Eyu0Tz452%2B4MIczd%2FX02%2F1XUIrk9IRa1fpjrgU16JwzYVYTjbc%2B2hKqsxMfmKCHqQxBYBcDt%2F6mthMRnF9wuEjtgTMP6QUpw7MK6xBC4I77PfCNGk%2BAu%2BJCtZJ8Tz1yM32wced0TBpxEwnAKH8vkrjZoz3KfQiDsh0GHqsU%2FQuOrUyPXW7aMvHRsz9cZrDYQzt4Kv7p0lVs9QN%2FrlEhw97BR9eiPbMUq0TBLuz8vTkndtHgJc3YInV2MgXgkXQgMw64TK7ZVABDX7x4%2B1THD7lF7irlJ4VbW2gMb7NCpL2LKYdE0Y8lTV26GGgTuiiKgTG48IR%2FfCUmYVPLebNAAewXFSlNkomcTfYU8R952hLZbD1HoC%2BPYGqvJbmNtj0crwJFKXhd7szHNyI%2Fazyu%2BRd1wz%2FOjKC7PyxVpizJpNzm6kbqodk3hj5JDdmjGlDlIXz3Jl6QtjrKACwLC1ha528gpSuY4Mea75bNsds5qB95F1rNZcDf0klMAK4ZroxlPtnhCx2hkTQqM%2BgIkk7J1me%2BLkrjvpnbe%2BV85lDX5RkKC5b0ka%2FPyBCkS9nDhQX9CMwDfeFDDU3s7JBjqkAc8HYCn5Bvna0CDlD4BuVl3%2B2T9QQ1J9QfJ9TsVSqZywihbV8u6%2FA8NZouqFCnwKVPIjuTKbXxUvYrsJ1Vsvs%2FH8iHkUZ26U6jworKZ3ZGzbt6s0nXCdDCStqN58pNKXBDdByS9Tl9n6WBMsQUXRgHxjSalWz9kdnwGgQ%2BIW7oCJj6S1L4uplas4t5SZSeEKxtsFaO%2Bk3OmNOkBWjzxYp5WJSwy7&X-Amz-Signature=430a41768c689cf230ca183f5f20fd694f2ba97a20cf9d3b2677c64a565ba923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OL6MTGE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOcKslAYhVVZZdGo2f6C8bZZJ0uA40ZtXEPYqMo6ZngIhAMbCaTYl5OhpIGAZ3Fx3YHsNna0kWG0s5P00HBj3RRIuKv8DCG0QABoMNjM3NDIzMTgzODA1Igzv1oSBp4nr9yMH8jEq3AO9%2FTTrbWCOFh8%2FLYLxNWIn2SB5dkBI7KjeJljRaqZDf%2B11SZq4yE6Eyu0Tz452%2B4MIczd%2FX02%2F1XUIrk9IRa1fpjrgU16JwzYVYTjbc%2B2hKqsxMfmKCHqQxBYBcDt%2F6mthMRnF9wuEjtgTMP6QUpw7MK6xBC4I77PfCNGk%2BAu%2BJCtZJ8Tz1yM32wced0TBpxEwnAKH8vkrjZoz3KfQiDsh0GHqsU%2FQuOrUyPXW7aMvHRsz9cZrDYQzt4Kv7p0lVs9QN%2FrlEhw97BR9eiPbMUq0TBLuz8vTkndtHgJc3YInV2MgXgkXQgMw64TK7ZVABDX7x4%2B1THD7lF7irlJ4VbW2gMb7NCpL2LKYdE0Y8lTV26GGgTuiiKgTG48IR%2FfCUmYVPLebNAAewXFSlNkomcTfYU8R952hLZbD1HoC%2BPYGqvJbmNtj0crwJFKXhd7szHNyI%2Fazyu%2BRd1wz%2FOjKC7PyxVpizJpNzm6kbqodk3hj5JDdmjGlDlIXz3Jl6QtjrKACwLC1ha528gpSuY4Mea75bNsds5qB95F1rNZcDf0klMAK4ZroxlPtnhCx2hkTQqM%2BgIkk7J1me%2BLkrjvpnbe%2BV85lDX5RkKC5b0ka%2FPyBCkS9nDhQX9CMwDfeFDDU3s7JBjqkAc8HYCn5Bvna0CDlD4BuVl3%2B2T9QQ1J9QfJ9TsVSqZywihbV8u6%2FA8NZouqFCnwKVPIjuTKbXxUvYrsJ1Vsvs%2FH8iHkUZ26U6jworKZ3ZGzbt6s0nXCdDCStqN58pNKXBDdByS9Tl9n6WBMsQUXRgHxjSalWz9kdnwGgQ%2BIW7oCJj6S1L4uplas4t5SZSeEKxtsFaO%2Bk3OmNOkBWjzxYp5WJSwy7&X-Amz-Signature=4814f4849bc6b38e37151525f30e85f3bf4ebc802b8e945fcb76e29c69989292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
