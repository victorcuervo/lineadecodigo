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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U33ITOMF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeXHFm6TTYcqmZkQEoYoAP7OP%2B5yNxnTvPRhNgiKk8QgIgZoY81myohqwUOVEHX1eG3b9A3GcvFuUNns%2FzoA70rngq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBW99PJ%2BeTyqQQ1J4ircA66VSrRD6RRl7bCaTJZGgKshmpfjOJ7Y61dBavv2JWLK%2Be41m%2F%2FxrN29sWImUOX%2Fsfiu68JrMJYirkZPY4ExG0OKIJ0%2Bv7exaki%2FZaO1CVRgu%2FTU6UefKFn%2BreSz1tbj50q4znwzkNcI9OxaJmWE0jeJhpZ%2BqpswCF46Adq2MwOf5yFQq262syBrQD4kcfnxfiSfthTnZaysdTT1gUSz1Ps66k4pgIUmJm8Xe7n2vuaQByV90FFZ8TEUDcp03A0aq%2FdjhfDs3CjD67PKtKjZi0R%2F5QiN7GOVo%2BOeLkYLofJ0A976SwgDOe0rXTTse7bOOY5Tg5%2FdSkvsxm95hekP640WJVqXefu%2BRNvOTokv9mSvWaGtX13xyvkIuZ9fQbV8wruLKbSRtZP4BTCt74%2F%2B3wF65t34Zu1YBa6tfIV682bqXXg5CkGff4QP5fmQARbFYRvitWtLpep42pX%2BsGHu6JBBUYB9I%2FC21henNf%2BRX1P7%2BvW3307dtqvhuyM1slmQkr%2BflLAyG8SfZapZ7YaoXAwaK%2BLzYxM%2FE83bC71UuayWqSHm9ETg%2Beb%2FsUk5BzLue9tWGJpa5XOQDZHuXU3pS3UECbwvLvqK1nflGtO6n%2FtnztMNSE8LigePZwTUMOanzskGOqUBOB8bmmEWb2nRrNbZFEVjgIrla2CRiTEHogFUyjKYCZzf8013m%2BCgndg8PpCDd4kf9LCQShLC8jSiyz4iMhZ4aP%2BPX%2Fu0O7E%2BG6Rp0dYpGAwRizASquFssJ5qpg5FofEdi13vXyBnu%2F74%2FjNOE6PsWwTd6EZopGk4txmK2YHXjnswmpdnMtnPcCBl3YIQd2JRzAqlzEQP5WIxTolYu7n78NZl2LKb&X-Amz-Signature=c1721bfd8936fe1058da58595897d651acd29afc7f52196fdf0ccddf31014ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U33ITOMF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeXHFm6TTYcqmZkQEoYoAP7OP%2B5yNxnTvPRhNgiKk8QgIgZoY81myohqwUOVEHX1eG3b9A3GcvFuUNns%2FzoA70rngq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBW99PJ%2BeTyqQQ1J4ircA66VSrRD6RRl7bCaTJZGgKshmpfjOJ7Y61dBavv2JWLK%2Be41m%2F%2FxrN29sWImUOX%2Fsfiu68JrMJYirkZPY4ExG0OKIJ0%2Bv7exaki%2FZaO1CVRgu%2FTU6UefKFn%2BreSz1tbj50q4znwzkNcI9OxaJmWE0jeJhpZ%2BqpswCF46Adq2MwOf5yFQq262syBrQD4kcfnxfiSfthTnZaysdTT1gUSz1Ps66k4pgIUmJm8Xe7n2vuaQByV90FFZ8TEUDcp03A0aq%2FdjhfDs3CjD67PKtKjZi0R%2F5QiN7GOVo%2BOeLkYLofJ0A976SwgDOe0rXTTse7bOOY5Tg5%2FdSkvsxm95hekP640WJVqXefu%2BRNvOTokv9mSvWaGtX13xyvkIuZ9fQbV8wruLKbSRtZP4BTCt74%2F%2B3wF65t34Zu1YBa6tfIV682bqXXg5CkGff4QP5fmQARbFYRvitWtLpep42pX%2BsGHu6JBBUYB9I%2FC21henNf%2BRX1P7%2BvW3307dtqvhuyM1slmQkr%2BflLAyG8SfZapZ7YaoXAwaK%2BLzYxM%2FE83bC71UuayWqSHm9ETg%2Beb%2FsUk5BzLue9tWGJpa5XOQDZHuXU3pS3UECbwvLvqK1nflGtO6n%2FtnztMNSE8LigePZwTUMOanzskGOqUBOB8bmmEWb2nRrNbZFEVjgIrla2CRiTEHogFUyjKYCZzf8013m%2BCgndg8PpCDd4kf9LCQShLC8jSiyz4iMhZ4aP%2BPX%2Fu0O7E%2BG6Rp0dYpGAwRizASquFssJ5qpg5FofEdi13vXyBnu%2F74%2FjNOE6PsWwTd6EZopGk4txmK2YHXjnswmpdnMtnPcCBl3YIQd2JRzAqlzEQP5WIxTolYu7n78NZl2LKb&X-Amz-Signature=8041ab09abb6b77ed298f4ccdaa902e6533c72d75ecd16f1edd0ef69855225f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
