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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYRJG6K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFi1dB2oOwPRt60FdH9OPbjgBzo6f0tAxyosu4DMzVtAiBMPT%2BgNUKf611nsgfhR26vr6n5IYrfwK0NUsqGNGBa%2FCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMXcEcz88CctKMI3t7KtwDewEpZUmxR7q6BU6MqEf0ulm3OpqYLRXEMXiL37qzC4pudELcSekdljijD3eTVQmUP7yv9W5rh%2Bd%2BnS%2FaUYSnNxf45xvsqvk52M%2F6sGKAz2249piFpBsjr3sg1QBvQbAd94920WFiyfHlPi7dWzOjGT80apiPy5y2nI7yZPEirG2Al%2B814qu76yfsgpE3YTnt4AouW8WhtDjfuKfwA07%2FWlRBRLQpNX894M0fE2E2%2BIj5erptdTORiTIzMeq%2FX%2Bo%2BYcYKoq5XCd9wzMIik%2B3mJeeEsh1VjGIuHDrr8xwK7EqOJCg4jjU6VpSPjVJ9IKIdNq8a01SjNBPvuYkifD1n8h1xCUDLS7YbY%2BLeIoEnovUbRfYLW1N2NfOok54PbeXf%2FEuWMvgXys2zfFxIsijVKpI9lQleZj5oFkGacoXxz%2FqhJ%2Fmbfq7Swwx3R90LfoC79D0I6%2FZd3K2iaZS7iDPc%2Bz0dVg6axSNwRDM4HnULYLsXnZ56uVVCSIkY8I5bnlGJNaoivEr6zO6ZGID5I36upq37mY1xYpHWMv2qt0yCXCWNRbSwizly3SC2jFnpQ6jAPXspJii1cDqTWyRO%2F%2F5J5rd7RbggqtRkDWUQPFA0l6JVw8r57brdSSQ767ww3K3JyQY6pgHRFaddT1PzjhFaaOgJ2qDAS7QTEuTqRWF0fDNjBb8fLqeVY9ZBKAQV39XzElhLat%2BPLEB2VPRbfEFNTC%2FGSICEmntSMxEKWZjm2hXVB6hcVcDGzifaVhmTvXO9jhbOUhOEdNQYT9oQRL3iz9gIlY043%2BRLvFtvTNtKfk4NS%2FVtt65Qbw91gUPzqI%2BBqJUXGvRTUrykXBSqUfmzzNh9P3kmgJjzptgH&X-Amz-Signature=bf5ebbd4df6fc87760ed6815e67312035cc00d98fdd6731f42b33bc17b112168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYRJG6K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFi1dB2oOwPRt60FdH9OPbjgBzo6f0tAxyosu4DMzVtAiBMPT%2BgNUKf611nsgfhR26vr6n5IYrfwK0NUsqGNGBa%2FCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMXcEcz88CctKMI3t7KtwDewEpZUmxR7q6BU6MqEf0ulm3OpqYLRXEMXiL37qzC4pudELcSekdljijD3eTVQmUP7yv9W5rh%2Bd%2BnS%2FaUYSnNxf45xvsqvk52M%2F6sGKAz2249piFpBsjr3sg1QBvQbAd94920WFiyfHlPi7dWzOjGT80apiPy5y2nI7yZPEirG2Al%2B814qu76yfsgpE3YTnt4AouW8WhtDjfuKfwA07%2FWlRBRLQpNX894M0fE2E2%2BIj5erptdTORiTIzMeq%2FX%2Bo%2BYcYKoq5XCd9wzMIik%2B3mJeeEsh1VjGIuHDrr8xwK7EqOJCg4jjU6VpSPjVJ9IKIdNq8a01SjNBPvuYkifD1n8h1xCUDLS7YbY%2BLeIoEnovUbRfYLW1N2NfOok54PbeXf%2FEuWMvgXys2zfFxIsijVKpI9lQleZj5oFkGacoXxz%2FqhJ%2Fmbfq7Swwx3R90LfoC79D0I6%2FZd3K2iaZS7iDPc%2Bz0dVg6axSNwRDM4HnULYLsXnZ56uVVCSIkY8I5bnlGJNaoivEr6zO6ZGID5I36upq37mY1xYpHWMv2qt0yCXCWNRbSwizly3SC2jFnpQ6jAPXspJii1cDqTWyRO%2F%2F5J5rd7RbggqtRkDWUQPFA0l6JVw8r57brdSSQ767ww3K3JyQY6pgHRFaddT1PzjhFaaOgJ2qDAS7QTEuTqRWF0fDNjBb8fLqeVY9ZBKAQV39XzElhLat%2BPLEB2VPRbfEFNTC%2FGSICEmntSMxEKWZjm2hXVB6hcVcDGzifaVhmTvXO9jhbOUhOEdNQYT9oQRL3iz9gIlY043%2BRLvFtvTNtKfk4NS%2FVtt65Qbw91gUPzqI%2BBqJUXGvRTUrykXBSqUfmzzNh9P3kmgJjzptgH&X-Amz-Signature=f0ddcfdd90df5340724eec4c02286195c14d5dc847c450ef7b63d79e107a661a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
