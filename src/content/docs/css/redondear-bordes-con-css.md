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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPBVSOG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQZh6KdaDVy4dut0FmLXfR6QnvnF4EPGeiy0Qmcf4KHAiAFyCEG2jc%2FTPyz%2FA4EuQQ6r3GYqx7LnPXXAMS0gIWTCyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMHaC7FamPrhT%2BsFD4KtwD33lO72Y9iNVSBz4d2wKUtMCyOdvCgEBAgqaoGRrz8M3%2FsoHAW832gsFNYHzxk7phxCADyJNRAioUWpM3xfeqlOEPdKo0rdZsCMHKsB6feg4eGw2WiGlchUFdYMkMAlKH0kUbq2q1nIJrZDSCDTigwFMtYCiea%2F%2FW44MTjVQXS1MQ3kST9e46TPEZLbh%2BGdHjwevDF6qBW4gML4eGS6g86B0ARLv44RbOlzUPci4CdVXAz53oZF2bBp0bXOrDs3%2BJDKejFXvt1BzcYcBwQQjIZLhyd1NRrU7V9KarTYyaRljYmfrzyh%2FF%2FenNK4z2%2FR1GATMND2j8oPs3y8gTcNcIGttxByUlp0f%2B5rrLGyf8cjhAT3h8o4n4jpJqv%2ByC%2BUU8DdAo6xfNWSsgvGcHbR1L7I13nocs0d0FSSEP0GVIm%2FmFHixc99CLlB7c3WI2tbec4q0lsJ5ZGCyDxtWbtRpNti0CNWJtiJkZc4VtNEXifkf1R8PolnfilcbgP5kYBDG%2B5HIfL%2B4QqeLTLEGndHy52o%2FUhkcTm1sU9R6GZ3uc8BSbw9okxt1E57wWmNiGim59gcrQCGfuXMY9caZGhwUYoBWH4%2F6%2F4s87k58QvHnr7hqHGCGzqqBtANF5UPsw%2FtXKyQY6pgFHt%2BgPoN2iOa6ncZd2C4YYlRjCt9%2FSrX8m1oELEF6DE%2B%2BjOt8xXQuIx5WUuWbGqGgNg6n4e%2B95lNrC5zSj1tQQbN2l40kjKBUwlD84hAG%2BY6QIxDQAdLrs2Ko16GFoWr8bq4AwFGeRLYknnxLQ1SOpJPePDeVXGCLBEhSM%2FEjcT9lXBqlF11Fsx8qOLn6DYL8QAv%2F8WZUOtGJ1FIVuXiHKqEOJeXSa&X-Amz-Signature=8d9c3ce4b182b147cc9a9bb3c1f1b9500f9c4abd7913601ac753327d02b726d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPBVSOG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQZh6KdaDVy4dut0FmLXfR6QnvnF4EPGeiy0Qmcf4KHAiAFyCEG2jc%2FTPyz%2FA4EuQQ6r3GYqx7LnPXXAMS0gIWTCyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMHaC7FamPrhT%2BsFD4KtwD33lO72Y9iNVSBz4d2wKUtMCyOdvCgEBAgqaoGRrz8M3%2FsoHAW832gsFNYHzxk7phxCADyJNRAioUWpM3xfeqlOEPdKo0rdZsCMHKsB6feg4eGw2WiGlchUFdYMkMAlKH0kUbq2q1nIJrZDSCDTigwFMtYCiea%2F%2FW44MTjVQXS1MQ3kST9e46TPEZLbh%2BGdHjwevDF6qBW4gML4eGS6g86B0ARLv44RbOlzUPci4CdVXAz53oZF2bBp0bXOrDs3%2BJDKejFXvt1BzcYcBwQQjIZLhyd1NRrU7V9KarTYyaRljYmfrzyh%2FF%2FenNK4z2%2FR1GATMND2j8oPs3y8gTcNcIGttxByUlp0f%2B5rrLGyf8cjhAT3h8o4n4jpJqv%2ByC%2BUU8DdAo6xfNWSsgvGcHbR1L7I13nocs0d0FSSEP0GVIm%2FmFHixc99CLlB7c3WI2tbec4q0lsJ5ZGCyDxtWbtRpNti0CNWJtiJkZc4VtNEXifkf1R8PolnfilcbgP5kYBDG%2B5HIfL%2B4QqeLTLEGndHy52o%2FUhkcTm1sU9R6GZ3uc8BSbw9okxt1E57wWmNiGim59gcrQCGfuXMY9caZGhwUYoBWH4%2F6%2F4s87k58QvHnr7hqHGCGzqqBtANF5UPsw%2FtXKyQY6pgFHt%2BgPoN2iOa6ncZd2C4YYlRjCt9%2FSrX8m1oELEF6DE%2B%2BjOt8xXQuIx5WUuWbGqGgNg6n4e%2B95lNrC5zSj1tQQbN2l40kjKBUwlD84hAG%2BY6QIxDQAdLrs2Ko16GFoWr8bq4AwFGeRLYknnxLQ1SOpJPePDeVXGCLBEhSM%2FEjcT9lXBqlF11Fsx8qOLn6DYL8QAv%2F8WZUOtGJ1FIVuXiHKqEOJeXSa&X-Amz-Signature=439b91ebe98f4ff9c3dd602d9ff6ac670eee74af90e01ddc319c0d72974f40cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
