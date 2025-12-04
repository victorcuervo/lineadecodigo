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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBUSXH6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCgdOMw6eCwkFafThNc1cIHhnFzqdR3LtEIoPF94N4HnQIhAO0nVfkTIjhEIvI16skGiRS5%2Ba%2B0duwFQCpyuBSUeCpAKv8DCEgQABoMNjM3NDIzMTgzODA1IgyyUdiaHNhetD5T5xUq3APVs%2BAZcX058nbSlqO91TyBRR3ZnInjaig0DtqFyTY8F2Dhfo0ONWIS2dt1sb72Z1QGPMynXoYO6pcW5Qjn6h7w5Sq3r2yeSrfStaxxCMS8uiUdH%2F6oZrLNUfeHIwvdmzc8yf45COq9uyXdgeAnAD2726AD1dBkUWQbjJLWb0mQ53lqnVO6Z5l2CN9ycTxixTY7lGwj%2Bx9RObwCKtgsg5uYlEjBu3R9YTibGI3u9%2BxFHkQpfogbNm%2BQHvhjlh0FmnQjPO9jxsercw%2FM4COSB2xFRuiVQEE2fnAPYCgNOReT2EVvyv8rG50%2BnaB4JOKrjEgyNMwrqE1b97p0DmFV8oGOQhxkDjgpHZWJ%2F0ueDp2Qxvy%2FBxp1xIFdKpDGGdV1m1ln4keiEqG3OY6CF8AWHClC18UW7Br9OSGSyUo2UaAESfL1RUPUOWAo0IcMe6eBFchfphQuJn3fCQDa06nO%2BN3glqTnpaLCtR40J7W94eUPHImgICNl4gL930l8zGqYNPcYv71256clahghImcYxovP9xE5smOkdxWvT54W%2FMGZw7e%2FDeEGpQX3J8NioY%2BzqeOSNSbUbUPm%2Fcc2kiEoxpcx5QwCzBEN55fUgea2w%2FHDP8cz2I3RaLPtPHhcizDovsbJBjqkAYooeVs8kW%2FGsDqcrZdsBdwLRirmWpyAGt%2FtIkN5ls7AILFgqfXrJhmwgjdUFGwX2kMH9MqDpab8ObdVMEe99W8LKgDqMroDV4BVyMZNb8wKqnAATubpudBq6yq7rwRCnUjSeYDWnjpjKREoOvVpfBRuYscYZNmG1JRyeQoj0zvm798dN4QxKe2Vq8TBItXGqkExWyvXeshU7pWE7CR3K7xcqEZn&X-Amz-Signature=39f6460efd72f076098b8fae4b5ac31ae3a6b3e44b86ffa1565ab4b37c9b49ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBUSXH6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCgdOMw6eCwkFafThNc1cIHhnFzqdR3LtEIoPF94N4HnQIhAO0nVfkTIjhEIvI16skGiRS5%2Ba%2B0duwFQCpyuBSUeCpAKv8DCEgQABoMNjM3NDIzMTgzODA1IgyyUdiaHNhetD5T5xUq3APVs%2BAZcX058nbSlqO91TyBRR3ZnInjaig0DtqFyTY8F2Dhfo0ONWIS2dt1sb72Z1QGPMynXoYO6pcW5Qjn6h7w5Sq3r2yeSrfStaxxCMS8uiUdH%2F6oZrLNUfeHIwvdmzc8yf45COq9uyXdgeAnAD2726AD1dBkUWQbjJLWb0mQ53lqnVO6Z5l2CN9ycTxixTY7lGwj%2Bx9RObwCKtgsg5uYlEjBu3R9YTibGI3u9%2BxFHkQpfogbNm%2BQHvhjlh0FmnQjPO9jxsercw%2FM4COSB2xFRuiVQEE2fnAPYCgNOReT2EVvyv8rG50%2BnaB4JOKrjEgyNMwrqE1b97p0DmFV8oGOQhxkDjgpHZWJ%2F0ueDp2Qxvy%2FBxp1xIFdKpDGGdV1m1ln4keiEqG3OY6CF8AWHClC18UW7Br9OSGSyUo2UaAESfL1RUPUOWAo0IcMe6eBFchfphQuJn3fCQDa06nO%2BN3glqTnpaLCtR40J7W94eUPHImgICNl4gL930l8zGqYNPcYv71256clahghImcYxovP9xE5smOkdxWvT54W%2FMGZw7e%2FDeEGpQX3J8NioY%2BzqeOSNSbUbUPm%2Fcc2kiEoxpcx5QwCzBEN55fUgea2w%2FHDP8cz2I3RaLPtPHhcizDovsbJBjqkAYooeVs8kW%2FGsDqcrZdsBdwLRirmWpyAGt%2FtIkN5ls7AILFgqfXrJhmwgjdUFGwX2kMH9MqDpab8ObdVMEe99W8LKgDqMroDV4BVyMZNb8wKqnAATubpudBq6yq7rwRCnUjSeYDWnjpjKREoOvVpfBRuYscYZNmG1JRyeQoj0zvm798dN4QxKe2Vq8TBItXGqkExWyvXeshU7pWE7CR3K7xcqEZn&X-Amz-Signature=d60e86380055fcad81f6dce829575d7743aca3b3461624d4e1fe870a71ab6fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
