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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFEB6QAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnWxVnLlmHPA%2Bb8of28T%2FwcJEuZR%2BVJMFpdODJ8r45pAiB5z6GbRoFQQX2ydHaMpTwjUBsNRD2hADnRJCEW5VCHASr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM17WKxWWuui%2FKaBhSKtwDhxtdLjIqQ%2BNRUWJVztnQP19E6%2B430Wk%2BJGHhdFopcag0DUULeNCkLL5n897edaKPahSeMolUtpOheox2H87tM%2B%2B67IPXZB81h2Au6PVoaha%2FSCThZ3jMYE%2FMQMVeKHaBjl2QT%2BxQMT9fqDx%2Fq2CLAsxn4tHOC1woId8ysePXxnGo7fETQ0Wue7Cm6iv7Hr%2BTL%2FF6rlG%2BtDhxsXZChuqp6XHgRiuhguDjF11%2FSRy8dOA%2BUcHG7IT0tVwUPcD1srCXbQwr9r6EFWoEWJR200Bd0BEhW7FSE64mXTJSB%2FGZGIp%2BPNQF4IJMe9XzbYO1Kd2yKCxIAEqRvmTwq7sYriMzSitDce49%2FE2NOiEK6kB1hNCk5xveFnY%2BjmnRqKRUIbNCyJdx7Z6QRanEBoP6%2F49wyous8Ni3Rr4o3GkbVeZtB9x2h0yv95q9U3fN2Ropitwq%2Bq39EWki%2FWmpo4jSx6B2MuFdu%2FXnwW%2BiAenzFaq6KbKUt%2BbYVJr9B98Rr3U0694EMZQHFXbNxZ%2Bqk1molqKSibuXCzdMjI65B9WKxO11t43G74QH1IeBQvrMScA8xVLBHILQQgqDmT5nRkbraLfE%2BBjf99AEqJoF6GGT8cXmaA2EQoncq%2BuWg2egUekwi4%2BKygY6pgHlha3NfDejCJq%2FiFrR5v%2F6J%2FVhmPGvHT7ZGQCfDhnMO6HzAW%2FJdHPwYYul6NmEF7SJ6e5RWhw8reJeQkuAx%2BVOUovJ0RGNP0hQSDOgRvX9KiBqsCXDm3C7AKd9f4uMHwkxx%2Bwgj0eA2CuAXMJzSgzh3xsqml%2BiMzxlcI%2F%2FLPya6NaJbdYVrK1oBrpKUDUQtES42LoAK0S1U7wP%2BY4%2FZXcP0pkHNHuj&X-Amz-Signature=50ce9ef6628262ba6d751bb03bdee211633976b49f2a21d6aab9e77606417579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFEB6QAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnWxVnLlmHPA%2Bb8of28T%2FwcJEuZR%2BVJMFpdODJ8r45pAiB5z6GbRoFQQX2ydHaMpTwjUBsNRD2hADnRJCEW5VCHASr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM17WKxWWuui%2FKaBhSKtwDhxtdLjIqQ%2BNRUWJVztnQP19E6%2B430Wk%2BJGHhdFopcag0DUULeNCkLL5n897edaKPahSeMolUtpOheox2H87tM%2B%2B67IPXZB81h2Au6PVoaha%2FSCThZ3jMYE%2FMQMVeKHaBjl2QT%2BxQMT9fqDx%2Fq2CLAsxn4tHOC1woId8ysePXxnGo7fETQ0Wue7Cm6iv7Hr%2BTL%2FF6rlG%2BtDhxsXZChuqp6XHgRiuhguDjF11%2FSRy8dOA%2BUcHG7IT0tVwUPcD1srCXbQwr9r6EFWoEWJR200Bd0BEhW7FSE64mXTJSB%2FGZGIp%2BPNQF4IJMe9XzbYO1Kd2yKCxIAEqRvmTwq7sYriMzSitDce49%2FE2NOiEK6kB1hNCk5xveFnY%2BjmnRqKRUIbNCyJdx7Z6QRanEBoP6%2F49wyous8Ni3Rr4o3GkbVeZtB9x2h0yv95q9U3fN2Ropitwq%2Bq39EWki%2FWmpo4jSx6B2MuFdu%2FXnwW%2BiAenzFaq6KbKUt%2BbYVJr9B98Rr3U0694EMZQHFXbNxZ%2Bqk1molqKSibuXCzdMjI65B9WKxO11t43G74QH1IeBQvrMScA8xVLBHILQQgqDmT5nRkbraLfE%2BBjf99AEqJoF6GGT8cXmaA2EQoncq%2BuWg2egUekwi4%2BKygY6pgHlha3NfDejCJq%2FiFrR5v%2F6J%2FVhmPGvHT7ZGQCfDhnMO6HzAW%2FJdHPwYYul6NmEF7SJ6e5RWhw8reJeQkuAx%2BVOUovJ0RGNP0hQSDOgRvX9KiBqsCXDm3C7AKd9f4uMHwkxx%2Bwgj0eA2CuAXMJzSgzh3xsqml%2BiMzxlcI%2F%2FLPya6NaJbdYVrK1oBrpKUDUQtES42LoAK0S1U7wP%2BY4%2FZXcP0pkHNHuj&X-Amz-Signature=d9a9d87094a296b3ab6e76ef10d3c3c5cebee57a3aa675b08d274685e5eda1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
