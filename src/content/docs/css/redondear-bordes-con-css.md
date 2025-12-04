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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNVKSBZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFJKRH2qsV7I%2F6SXGcxLROB3zPqLFOwr%2F7xYGvxnlK9iAiAOwyy0AOTQoDaNS3hL4JldGYK7WxSdsRLoVBP53FI00ir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMmml5n%2BN4X10T50lmKtwDLnkkScFpoVqkdF1Qx6QP4UtZwR8msPS8OZT9XYoA0ZfVxm6Pcs8Ahoj2LyuSp9sG1KhJunnJXXuSacphrJstYADQWPhPQz9iVqmhYQkO0SdwMi0g7%2FiQsEJqEHCHoDDklSDRliM3LVgomh6a8VOIamw7u5eFYr8xHrIDrTPqZnY4GwYCo6MeWFMjN7g3%2F1CSNkBFFoRfoJJZGcnkbFJHNDo5IML0sRyQtpUb6PskO8NRSTxB%2F6qApflv4Ld6Bx%2FtBWgJmRmagNSuhOcR5zxWxbhmZ4jtGv%2BoEkftmwsmnFKdea3mIcTPs0%2FzHjP8Sqr3PNNRfTgQA3fFabjw0mPWCgybC9f%2F6ZclFRHi8opn%2FX7T4rbBM9B9k6bUIdOlFB0Ts1KSUnaX%2BlJ7r1jFxN0v4tYKw9CakI%2FgLi13RMAvQpNxtZqGCnwcFTW9YBwd3VrfDUVOUUxoLXppYFVR3e%2BhbVTClm%2FSCBS3X9FZ34BBRIVzvLQbaAXt8ScqHh1kHrqza8d%2FiE4IIkkQ%2FB8SOEOBN2%2FUFE3gReITJDqanoprGixNOhhJf5fZ3xbEVFFmY8X4Tc8OPfVw8gC4vIuqeSyhFR6S1oWRc2rgmb30U9r2rdyMUGXxGgCh3pTPtJ0wiaLGyQY6pgEUNwa%2Feb6%2FQJTpYM301BOTclWaSe6s8ahXibwig4MhiyhSbJYvea7DhfToJiVK7NXZKlxC%2FE9WE7Qtu6HkB90co8mwvvIrChWFS1RMcrqldknXuNj%2Bku3CKA9z79xYrejOHC4NEdzSJ0pt4UjRsyxHf8jzK8ZwlKIKivV8ejelJgRLP8l8Y7WJ38euaDe4fy0OeUsoO7TZ2m9suy%2B2gNBmyWFV0UEQ&X-Amz-Signature=b39a914b279f732651e776e5c35e2a0c54f5810386e0c8532ead4474b516b308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNVKSBZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFJKRH2qsV7I%2F6SXGcxLROB3zPqLFOwr%2F7xYGvxnlK9iAiAOwyy0AOTQoDaNS3hL4JldGYK7WxSdsRLoVBP53FI00ir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMmml5n%2BN4X10T50lmKtwDLnkkScFpoVqkdF1Qx6QP4UtZwR8msPS8OZT9XYoA0ZfVxm6Pcs8Ahoj2LyuSp9sG1KhJunnJXXuSacphrJstYADQWPhPQz9iVqmhYQkO0SdwMi0g7%2FiQsEJqEHCHoDDklSDRliM3LVgomh6a8VOIamw7u5eFYr8xHrIDrTPqZnY4GwYCo6MeWFMjN7g3%2F1CSNkBFFoRfoJJZGcnkbFJHNDo5IML0sRyQtpUb6PskO8NRSTxB%2F6qApflv4Ld6Bx%2FtBWgJmRmagNSuhOcR5zxWxbhmZ4jtGv%2BoEkftmwsmnFKdea3mIcTPs0%2FzHjP8Sqr3PNNRfTgQA3fFabjw0mPWCgybC9f%2F6ZclFRHi8opn%2FX7T4rbBM9B9k6bUIdOlFB0Ts1KSUnaX%2BlJ7r1jFxN0v4tYKw9CakI%2FgLi13RMAvQpNxtZqGCnwcFTW9YBwd3VrfDUVOUUxoLXppYFVR3e%2BhbVTClm%2FSCBS3X9FZ34BBRIVzvLQbaAXt8ScqHh1kHrqza8d%2FiE4IIkkQ%2FB8SOEOBN2%2FUFE3gReITJDqanoprGixNOhhJf5fZ3xbEVFFmY8X4Tc8OPfVw8gC4vIuqeSyhFR6S1oWRc2rgmb30U9r2rdyMUGXxGgCh3pTPtJ0wiaLGyQY6pgEUNwa%2Feb6%2FQJTpYM301BOTclWaSe6s8ahXibwig4MhiyhSbJYvea7DhfToJiVK7NXZKlxC%2FE9WE7Qtu6HkB90co8mwvvIrChWFS1RMcrqldknXuNj%2Bku3CKA9z79xYrejOHC4NEdzSJ0pt4UjRsyxHf8jzK8ZwlKIKivV8ejelJgRLP8l8Y7WJ38euaDe4fy0OeUsoO7TZ2m9suy%2B2gNBmyWFV0UEQ&X-Amz-Signature=fc0c5da686ce439231363da8086756e60a507cd2648e48fc1e3259b6ece64134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
