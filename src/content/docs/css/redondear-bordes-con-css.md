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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCZX7A4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeSQAGDTzghuKInus6kc4Gx%2Brq8t4b6ucwBsBYVAZ95gIhAMkTBUj0Etk2Soy89azZ8Gx9MdgsQx2yfH3wNqfmHDKGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLBR%2BOzBZvyGID4%2FEq3APkBzT6NUO%2FBYQFQL3qgMFDQFyG98MghAubej2TQKUv4pkcZ9i4RzM94I8cI8uBw6oeIMpe1pT3Idu9Ik417f0ctDOU0J7HRZYIcc4hPD6WJIQlOhSmtDPD5Way1qyHFUeNTCQ4blatEWYS5Ujv%2FNnu2JEq1%2FnIimmK5IOdVx578%2BtbFHq2B6DUhWvdjCBi%2FYrROSpPs1xvZCydpAvDvZ8WBNLIDh7lQWgYJXMr2o90Q4eCUB39GTCyDrAzwHaSPAgGTfsAcDtBlP9cjAu5taYCIx0UEdYuZNN0V8XGyS%2FNIunVMPI9jpPENLkIHjJYMEnJm3jGgXbu0rE%2FI%2FbdHw21l6nsrdoZepAI0CMdavbgc2wzRJqydGBGqUTDnZ%2Bazhjb7YCdf29fELo8n0XU0p82SJclyIVt8AdSd%2F5EZFVCMvK1tCHD3DaCTLpUwG6O39SrOK2O3G5JNrQeNXfXzqOOz1vRAvCJnEaWl8GLFTV7tQmWLQ%2BFjKovbpwbsFZCB8Kh9Jxl8p0DsLLyhq%2BemiAI17G%2B1E7qxQsMbpAzDNZNf6KpdHq6mNrxVjA9qzFW4cnBnkHXiN%2B8kLRH5iQaxhRpslEdHWH%2FChP1GTl7v1bo2njay%2FsbAxhGDEN51DDg%2FdLJBjqkAc9MitYTXt3mJbM0lMzEpLObKnMOXdP4gG0EuIxmiAlPePHqXhwe5kGfBvjOU%2Fyf%2FKgRajM9bhrMOChEju62fwT65xKmJXnmFn0duqbDGq4vzxJIgbGg7duaf1S1blWiqtnCKlJTBuj2YRka3P4EotLddPJk%2Bp0vsGZBw6j2cMJX7OdZAK7ZXGOHZ%2FZvp3KNlWjYVz0IYS%2BMZsNLB9hzru%2FLBLVk&X-Amz-Signature=44c5c1082a09670c105f889ef8643de16abf53844d6b42470b9a2485d9fcdc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCZX7A4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeSQAGDTzghuKInus6kc4Gx%2Brq8t4b6ucwBsBYVAZ95gIhAMkTBUj0Etk2Soy89azZ8Gx9MdgsQx2yfH3wNqfmHDKGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLBR%2BOzBZvyGID4%2FEq3APkBzT6NUO%2FBYQFQL3qgMFDQFyG98MghAubej2TQKUv4pkcZ9i4RzM94I8cI8uBw6oeIMpe1pT3Idu9Ik417f0ctDOU0J7HRZYIcc4hPD6WJIQlOhSmtDPD5Way1qyHFUeNTCQ4blatEWYS5Ujv%2FNnu2JEq1%2FnIimmK5IOdVx578%2BtbFHq2B6DUhWvdjCBi%2FYrROSpPs1xvZCydpAvDvZ8WBNLIDh7lQWgYJXMr2o90Q4eCUB39GTCyDrAzwHaSPAgGTfsAcDtBlP9cjAu5taYCIx0UEdYuZNN0V8XGyS%2FNIunVMPI9jpPENLkIHjJYMEnJm3jGgXbu0rE%2FI%2FbdHw21l6nsrdoZepAI0CMdavbgc2wzRJqydGBGqUTDnZ%2Bazhjb7YCdf29fELo8n0XU0p82SJclyIVt8AdSd%2F5EZFVCMvK1tCHD3DaCTLpUwG6O39SrOK2O3G5JNrQeNXfXzqOOz1vRAvCJnEaWl8GLFTV7tQmWLQ%2BFjKovbpwbsFZCB8Kh9Jxl8p0DsLLyhq%2BemiAI17G%2B1E7qxQsMbpAzDNZNf6KpdHq6mNrxVjA9qzFW4cnBnkHXiN%2B8kLRH5iQaxhRpslEdHWH%2FChP1GTl7v1bo2njay%2FsbAxhGDEN51DDg%2FdLJBjqkAc9MitYTXt3mJbM0lMzEpLObKnMOXdP4gG0EuIxmiAlPePHqXhwe5kGfBvjOU%2Fyf%2FKgRajM9bhrMOChEju62fwT65xKmJXnmFn0duqbDGq4vzxJIgbGg7duaf1S1blWiqtnCKlJTBuj2YRka3P4EotLddPJk%2Bp0vsGZBw6j2cMJX7OdZAK7ZXGOHZ%2FZvp3KNlWjYVz0IYS%2BMZsNLB9hzru%2FLBLVk&X-Amz-Signature=7ec4d76c42e10fd2a75907f4e79e455f480353f95d7de4e9038767676748701a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
