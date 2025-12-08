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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDURDYM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMey9HK36JeT7q6ejvuQFrTra2Kf3CH1GjY5dJ3zJ2iQIhAMRo%2Bw6WL6lT1EYAXXeCuWxxoQWgSfX53NGltPNMxqLcKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ5S99kGAPksxZRSQq3AMZqvudcjAurYcDoAVS5xRF9SA4vbxxkjqooKwxqIRKBHu4LT1q%2B82dDb0Ea%2FEyzcpCektc4AODxjf%2FIIFW7Bs2OPfeUTfb4QjU7K0VxhfpBMq4gWK%2FlMWcr9KdztGc9mZBCqTs61sFG2h38bAGwKboI8iGD%2BASEnYIh6osgtaBPQHRWH87C8HFR4FCbBFzfE9Aa4cy8fsyeZvJjt5hyyorCjcXBW4NTei3ZgcbIOOs%2BuLH4W7gZHGjQaufM9Fue1IXG%2Fwz0xqB7rQabnZwYqL1iI9tosFp%2BS8h%2FiyaHmHKndfYNYgngXsgSoWcIH9Hmkt9LXLJqbeMs5wSO5iYJGUbp%2B66swHkZMCTxAhHqf4VcdM1HCuJxSWCJoVkAzR7hN71xi2gIaKIlq7qAa5tZQH1TKfy7SUb7y8kGIcbgpd33UVsv2TySEcb2e8ZyByK0rqVwIYJShKDJaINUjJ6nsty8y130NP4v2FNDY3zkXqOOYcQS%2F0xHhbzbBdzaNqGhZS24gm2UmdiSLT74joxw8qSqBkcpbOfkKTosh2z02XbTKiUydQr%2F6wMKkCri4chmeIKEEk%2B7WAfhypQurAQ5vdjO8dqH9s46nuv1NSHFcTE04nNoEWK8HUWN3QpfDCJtNzJBjqkAQdlZrkGhHJwXJej3ymnnzeDu57%2FgRBUowhTLrZ8kh8S%2BnoBBC2x5ikJxznrUO9CzbWjxpuFckaJLJShcAB1XQnh2WBA%2FMUDawAuhY27Yvz6SWiO7D4040lUMDAA5G69Hmv0Shj03r3jZbW3A4mhcISwL9ZczZdZkMV6PSOKXkt%2FR6nVrVc9wP%2FX1JPhi%2FeSIz0Q1rAsl7dQJiLjZL2EsPe0%2FlKj&X-Amz-Signature=26db420dd718efb2ff224d5791b7d4c4f83e8aeee00daaffe3ecbaac8d2946c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDURDYM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMey9HK36JeT7q6ejvuQFrTra2Kf3CH1GjY5dJ3zJ2iQIhAMRo%2Bw6WL6lT1EYAXXeCuWxxoQWgSfX53NGltPNMxqLcKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ5S99kGAPksxZRSQq3AMZqvudcjAurYcDoAVS5xRF9SA4vbxxkjqooKwxqIRKBHu4LT1q%2B82dDb0Ea%2FEyzcpCektc4AODxjf%2FIIFW7Bs2OPfeUTfb4QjU7K0VxhfpBMq4gWK%2FlMWcr9KdztGc9mZBCqTs61sFG2h38bAGwKboI8iGD%2BASEnYIh6osgtaBPQHRWH87C8HFR4FCbBFzfE9Aa4cy8fsyeZvJjt5hyyorCjcXBW4NTei3ZgcbIOOs%2BuLH4W7gZHGjQaufM9Fue1IXG%2Fwz0xqB7rQabnZwYqL1iI9tosFp%2BS8h%2FiyaHmHKndfYNYgngXsgSoWcIH9Hmkt9LXLJqbeMs5wSO5iYJGUbp%2B66swHkZMCTxAhHqf4VcdM1HCuJxSWCJoVkAzR7hN71xi2gIaKIlq7qAa5tZQH1TKfy7SUb7y8kGIcbgpd33UVsv2TySEcb2e8ZyByK0rqVwIYJShKDJaINUjJ6nsty8y130NP4v2FNDY3zkXqOOYcQS%2F0xHhbzbBdzaNqGhZS24gm2UmdiSLT74joxw8qSqBkcpbOfkKTosh2z02XbTKiUydQr%2F6wMKkCri4chmeIKEEk%2B7WAfhypQurAQ5vdjO8dqH9s46nuv1NSHFcTE04nNoEWK8HUWN3QpfDCJtNzJBjqkAQdlZrkGhHJwXJej3ymnnzeDu57%2FgRBUowhTLrZ8kh8S%2BnoBBC2x5ikJxznrUO9CzbWjxpuFckaJLJShcAB1XQnh2WBA%2FMUDawAuhY27Yvz6SWiO7D4040lUMDAA5G69Hmv0Shj03r3jZbW3A4mhcISwL9ZczZdZkMV6PSOKXkt%2FR6nVrVc9wP%2FX1JPhi%2FeSIz0Q1rAsl7dQJiLjZL2EsPe0%2FlKj&X-Amz-Signature=12df1283f72c9ac51a542dfa29c407980b930aa29a8b4f357c4a11249126a710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
