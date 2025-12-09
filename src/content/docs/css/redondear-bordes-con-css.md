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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKZNBYZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1DZOwzMH%2F%2BD9r9RIGyeyzDNj3l0JckzoQigd67zHr6AiAR3gVQoZQ6Q8H8ccDzWZ0dk6nw1JqjMGUJjbKAFsccaSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU1kwwUWna%2F0z%2FYkOKtwDxHx%2FklAOkTXrwMkaHOCMpdPYXtdW3Ex95X%2Fe7%2FZxrA9NRLFk7stCGEOfxRWQKx3YB7Z8ltwR9o6s6M2O%2Bl5Hwwi3wS3gTjXnuONljRKSeAZAe4JNo4oX4z62IJXARX3wLpQ%2BtwWwBlIE76GeF1r5Kas3OMkBHfjoI8%2F9B7lE5kpumeqImkkqDZJCnDbnn8xYhA%2BLMc%2ByKPwWbEaDB3q8NhkfS%2B8jkGEmv48sP3JogvEP87diHD6wmAP9th73ikm86mfQgKq4L201dSDcmHdzg%2F6rDYsEYZ59hLIex%2FrFl5jx%2Blz56X2jRxn37D03AZmC%2B14VFrzBxzS%2Brgd%2BMPRkL8XKzSC7xwnmZOpmb9pvYWM9suZ3ss8aXm8JbM%2BBvbfYImOntchLCwADu70dCqgu4p3ETyh%2BwCV66%2BQnsO8ug2JGCV5bzj1gZ9EQ16nTyvuy44yLIB7UZxEfATtxvTXwsVYByECwUXXkxZwDeNCaLTQi0KFh1l%2BUHdets5hR7akLiMBgxJTqDiivPmmazF5nA0cZ6Q4UOWLXmh4kiwrhyxFtUeAZwM3omAE5KZ6Co3On8OfwFCltpNwmrosFAXjKv8e4U8AU5FaelAPzRlTaQXtLxjGeBAcLJFl2RO4w2%2BXeyQY6pgHtfUqew2q9uUeCzQZs0HM4781vLEahRVd9dRY16lBD1msjGCfHHM4WLZy1pqlJlFMoSaJdTZA7rK55XZ%2FSXhJURMICTZbFgmrTW%2B7etBjklCkQFJkiA684SzxypJCpekuQfboIPsfRDEO2K6r3chXj7GTlySl0KOyQpD1Uq9D3is1MUf3kljXlejHBbhCprskNZ1K7u03AJGxJt2uVSqNE4F4JUSJq&X-Amz-Signature=92a8589fc4a29017091f2f3986657f1af0d2dad9aadb1cbbbdb8629227d94aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKZNBYZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1DZOwzMH%2F%2BD9r9RIGyeyzDNj3l0JckzoQigd67zHr6AiAR3gVQoZQ6Q8H8ccDzWZ0dk6nw1JqjMGUJjbKAFsccaSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU1kwwUWna%2F0z%2FYkOKtwDxHx%2FklAOkTXrwMkaHOCMpdPYXtdW3Ex95X%2Fe7%2FZxrA9NRLFk7stCGEOfxRWQKx3YB7Z8ltwR9o6s6M2O%2Bl5Hwwi3wS3gTjXnuONljRKSeAZAe4JNo4oX4z62IJXARX3wLpQ%2BtwWwBlIE76GeF1r5Kas3OMkBHfjoI8%2F9B7lE5kpumeqImkkqDZJCnDbnn8xYhA%2BLMc%2ByKPwWbEaDB3q8NhkfS%2B8jkGEmv48sP3JogvEP87diHD6wmAP9th73ikm86mfQgKq4L201dSDcmHdzg%2F6rDYsEYZ59hLIex%2FrFl5jx%2Blz56X2jRxn37D03AZmC%2B14VFrzBxzS%2Brgd%2BMPRkL8XKzSC7xwnmZOpmb9pvYWM9suZ3ss8aXm8JbM%2BBvbfYImOntchLCwADu70dCqgu4p3ETyh%2BwCV66%2BQnsO8ug2JGCV5bzj1gZ9EQ16nTyvuy44yLIB7UZxEfATtxvTXwsVYByECwUXXkxZwDeNCaLTQi0KFh1l%2BUHdets5hR7akLiMBgxJTqDiivPmmazF5nA0cZ6Q4UOWLXmh4kiwrhyxFtUeAZwM3omAE5KZ6Co3On8OfwFCltpNwmrosFAXjKv8e4U8AU5FaelAPzRlTaQXtLxjGeBAcLJFl2RO4w2%2BXeyQY6pgHtfUqew2q9uUeCzQZs0HM4781vLEahRVd9dRY16lBD1msjGCfHHM4WLZy1pqlJlFMoSaJdTZA7rK55XZ%2FSXhJURMICTZbFgmrTW%2B7etBjklCkQFJkiA684SzxypJCpekuQfboIPsfRDEO2K6r3chXj7GTlySl0KOyQpD1Uq9D3is1MUf3kljXlejHBbhCprskNZ1K7u03AJGxJt2uVSqNE4F4JUSJq&X-Amz-Signature=ef6360db2de6148c402553200b501bf7455661e5c30713b94083c94422abc698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
