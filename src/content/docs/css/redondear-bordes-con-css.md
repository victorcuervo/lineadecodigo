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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSA532V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8aKd3o2Sh1r0bG0a2P3ogdotomAKSBOpNndvHNcwk7AiAc7Y2q9hmmUTEzU03LNYJ%2FXLFuNpGcqzDTGXXRKjbI8CqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvuJW%2BR8rHxsapdiKtwD66WgwYYRqIHpae072%2F3xqOorJEH%2BYwa1wtOum0QQmAgphC7h2obKBNxKtVH4IH4tC5CdDwICNMr8A%2Bkayi9E78i409Rihh6UYx2j2iiqCtsOAndq08XKeXtDIhgZD6twynGJjA8wYIOL15VssGPOIrNYE%2BDs9ZfFIDof1eQ289EKgeoIIa2niba6EkLnlndKkEjf%2FKKXfMpJNXr5l8UYqp5kvameZzIsSv3C13SvVfva4RWZ88F4pKETFxlm%2F7EVKUE%2FiKG%2BkTQzDk%2Fiq%2BbhVcGcx0o%2Fe6cjaei87FYvyCcCkpJLvmmej5lqQf1dqUzm0jyBwvdauneS3u1tjra0QRJKLDknR7xlQUvek6LghP1EX45NWzsZwNAuvWKsPeK%2Flm0qMTTToTgCYXnWRVOOF4I7UgdeSMXQQ3FU6GCDR7Y3Pzd1eXXTxCnOHVOz5ruJfL9vGk7QXIp2uZ0ZW44Wz2g1sjv3QcyWJivPyNBbr3F5PW3eG6LKbzDpTXyyHZBXy4aO5x1T0Op7KnFyYoZekMhJIPlu36Tv9VmcUtzCsQySpcpJSLm8RxRSTcY%2FVsHtpqBVusFk6IkGDl5XUngQgGwHlZhnqLZveY3N9%2BjpHvS20HINNbpl3g2zQmIw9e3ZyQY6pgEluT%2BhoQJtOQ29oe%2BEPvBmmri3ewoKa1WyJbiR1gjUtV8P%2FvqWRFKrCbVQgcJEAPAN6NGvcbV1ZBcDeTcENtKeLvCx4GAffPNUX3DZl8MOZcrWufdwWu9BJ%2FhfUnYwzOF2%2B3HNYKYPCGaiII3wfawKbOO%2BV%2Ft4FgQFA8vfCOJxW0L1CfkR6%2BvQdccIitnQeWI8meT9uNMWvtJXDTX8ntEJMQ3Wd5ak&X-Amz-Signature=2e21ece66f7c6f7ad80c854800a74cca09db720b8721753262f6fc6219faffa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSA532V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8aKd3o2Sh1r0bG0a2P3ogdotomAKSBOpNndvHNcwk7AiAc7Y2q9hmmUTEzU03LNYJ%2FXLFuNpGcqzDTGXXRKjbI8CqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvuJW%2BR8rHxsapdiKtwD66WgwYYRqIHpae072%2F3xqOorJEH%2BYwa1wtOum0QQmAgphC7h2obKBNxKtVH4IH4tC5CdDwICNMr8A%2Bkayi9E78i409Rihh6UYx2j2iiqCtsOAndq08XKeXtDIhgZD6twynGJjA8wYIOL15VssGPOIrNYE%2BDs9ZfFIDof1eQ289EKgeoIIa2niba6EkLnlndKkEjf%2FKKXfMpJNXr5l8UYqp5kvameZzIsSv3C13SvVfva4RWZ88F4pKETFxlm%2F7EVKUE%2FiKG%2BkTQzDk%2Fiq%2BbhVcGcx0o%2Fe6cjaei87FYvyCcCkpJLvmmej5lqQf1dqUzm0jyBwvdauneS3u1tjra0QRJKLDknR7xlQUvek6LghP1EX45NWzsZwNAuvWKsPeK%2Flm0qMTTToTgCYXnWRVOOF4I7UgdeSMXQQ3FU6GCDR7Y3Pzd1eXXTxCnOHVOz5ruJfL9vGk7QXIp2uZ0ZW44Wz2g1sjv3QcyWJivPyNBbr3F5PW3eG6LKbzDpTXyyHZBXy4aO5x1T0Op7KnFyYoZekMhJIPlu36Tv9VmcUtzCsQySpcpJSLm8RxRSTcY%2FVsHtpqBVusFk6IkGDl5XUngQgGwHlZhnqLZveY3N9%2BjpHvS20HINNbpl3g2zQmIw9e3ZyQY6pgEluT%2BhoQJtOQ29oe%2BEPvBmmri3ewoKa1WyJbiR1gjUtV8P%2FvqWRFKrCbVQgcJEAPAN6NGvcbV1ZBcDeTcENtKeLvCx4GAffPNUX3DZl8MOZcrWufdwWu9BJ%2FhfUnYwzOF2%2B3HNYKYPCGaiII3wfawKbOO%2BV%2Ft4FgQFA8vfCOJxW0L1CfkR6%2BvQdccIitnQeWI8meT9uNMWvtJXDTX8ntEJMQ3Wd5ak&X-Amz-Signature=0a0a72ab5e3826e750ca77e85a60899b02367f5422585149346eba31b89a014a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
