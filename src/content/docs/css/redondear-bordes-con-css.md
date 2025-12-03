---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPGXTVEI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDAS2WU%2B1ZVOouhtZaOM97hcuxDoSCZ3fVDyxUG%2B5AGlAiATbK4FkimObiU2n9QApAQ3M9kJqvgSzHoLyIvfSWlD7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMRBFHQE4t9hfSK7ESKtwDfTxbS3ExDRrPgVi7yyaiqwCuekr10EClfXWqJvadOzjA2Seqisr5JkISK%2BQSqfL1iPlpLtOzN3vmInnSz674IQLpwKXNfniBESuX7Yf3El8z9m0uxTcP4d4e7v8SS%2FZtOgPEyK5r6UUexsWJ3CyqYOdGQzGjj%2B%2B4Mj7ZYxNSnufhEOaOqsH364vAU9GD3J2AyWS1cOGJmLs55ECEugN3IJHsrXhMRGUWv6pP3zsvVeYI41Qj0kma043hc9VIm1M2D67L67rqbU%2FhXW6JSL7qnjaHTdyVkRN%2BPwzT6Bw57tgsS%2BNe9ySbHrWcXcAql6mRpDef0%2FCC%2FZDo%2F08pJSEJf5MFhtjiqwWQmxRtvTDzg7c3Qksnba3VEuY0YKWtxWpJaEgxcVAPEowipgqHuqOukGi8vZlgKlSLJ3OtcLdLyWQQ8Zv6LVHkKbUZn5xkNVAXCHZaQzuQrf5XhqvR4ccD47a97ThWBnxS0fKPUZp5r9omPET4209RzJo09TkDtJXm46CBfdY%2BGm5nidk8ummR4cCnBPHqF4ZCiuGxeKDUClbeF0Ij9eQU9xPA3f8I1hm6HBjMXvaYO%2Bw%2BaNN%2FWvJWYNU9UHEvTjcfhhZQzSDnCtg4k9D9kdwnSX4c4TMwj9zCyQY6pgH6fFxXfh3OOpI4niWCddxhLk%2FKNxAX%2BzqOSgfwzc8GXK%2BdssWw%2BPYvP3HVlDiAQBsFpt5SZO1QaS5a15gPxmDJGDjLzyobLmruXH9fiU6QadDN1DBfbcGiizQDmP%2BRGqTULJ6%2BhFz0gQ9tcVr5rMJX%2BYxooXUIVNZgLRyWaot4xOpYaMWw7C37%2FGGJ1RKQRGT%2Frp%2FGLD5SEveEYTTxSqSLr4bq2Dph&X-Amz-Signature=7daaf292c9032f42634e7d7abbdcba4f7080b21815f593ae74fec0bee0a9b216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPGXTVEI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDAS2WU%2B1ZVOouhtZaOM97hcuxDoSCZ3fVDyxUG%2B5AGlAiATbK4FkimObiU2n9QApAQ3M9kJqvgSzHoLyIvfSWlD7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMRBFHQE4t9hfSK7ESKtwDfTxbS3ExDRrPgVi7yyaiqwCuekr10EClfXWqJvadOzjA2Seqisr5JkISK%2BQSqfL1iPlpLtOzN3vmInnSz674IQLpwKXNfniBESuX7Yf3El8z9m0uxTcP4d4e7v8SS%2FZtOgPEyK5r6UUexsWJ3CyqYOdGQzGjj%2B%2B4Mj7ZYxNSnufhEOaOqsH364vAU9GD3J2AyWS1cOGJmLs55ECEugN3IJHsrXhMRGUWv6pP3zsvVeYI41Qj0kma043hc9VIm1M2D67L67rqbU%2FhXW6JSL7qnjaHTdyVkRN%2BPwzT6Bw57tgsS%2BNe9ySbHrWcXcAql6mRpDef0%2FCC%2FZDo%2F08pJSEJf5MFhtjiqwWQmxRtvTDzg7c3Qksnba3VEuY0YKWtxWpJaEgxcVAPEowipgqHuqOukGi8vZlgKlSLJ3OtcLdLyWQQ8Zv6LVHkKbUZn5xkNVAXCHZaQzuQrf5XhqvR4ccD47a97ThWBnxS0fKPUZp5r9omPET4209RzJo09TkDtJXm46CBfdY%2BGm5nidk8ummR4cCnBPHqF4ZCiuGxeKDUClbeF0Ij9eQU9xPA3f8I1hm6HBjMXvaYO%2Bw%2BaNN%2FWvJWYNU9UHEvTjcfhhZQzSDnCtg4k9D9kdwnSX4c4TMwj9zCyQY6pgH6fFxXfh3OOpI4niWCddxhLk%2FKNxAX%2BzqOSgfwzc8GXK%2BdssWw%2BPYvP3HVlDiAQBsFpt5SZO1QaS5a15gPxmDJGDjLzyobLmruXH9fiU6QadDN1DBfbcGiizQDmP%2BRGqTULJ6%2BhFz0gQ9tcVr5rMJX%2BYxooXUIVNZgLRyWaot4xOpYaMWw7C37%2FGGJ1RKQRGT%2Frp%2FGLD5SEveEYTTxSqSLr4bq2Dph&X-Amz-Signature=722f326c6c808518295234e6173e4333db297879ee936d26ef75f94f949a40c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
