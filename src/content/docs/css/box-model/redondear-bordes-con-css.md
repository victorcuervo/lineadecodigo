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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5JSQHA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZidSEXSmWWz%2F4%2BPZalRblNfGEMx2nXJ9Nlp7sOk1yGwIgErg1XsPSgsx4Kn8A75NGJOcZ0g5mJmSJZNhf5wfjSLkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIaGD%2FKm6%2F%2FQAzQq8yrcA05%2B1sdJ5TBBnpsH%2FfSscQdlYdR4HKe5enAvKKVqlQLowGfETme8xvcIOf2kMfZM4jFzprMQ492R2MVZ%2FkO%2FsdFS2aYGE150e9ByjSK0KS5EIEHdzjlO5yZ2FCIK6I3wAhNRrsGVLhWzXZ9P%2FfULYuJU9RTlA38HT4i4jcaUleOmhQBbBhCRC9CViUeaox49vCckcR16A%2BIZfZKq6qSKxFACKNBZveOTc6ClSQz9Mru5LwxN4sH3jsaZPTDCb5c9%2FCM3DgoNA9rDdXJFh4o6VvJYHTgQeIZWKpce3eHliVRhG3%2FX2Am8FCqThnQuSWpzYdZNQjjjiLaL6VprzM%2FkS7CDsOJEZ9NlJjr47JdBxNxMMe2CdrJqZRI5OyFPOnHFRyGVcNSp%2FswgZY5Hu7AKml1BO7Un3I9k4bx%2B%2BanhyMsFNZs461vWzO24Z6u8PDC754mIuEdrRMCPClUZmLcMw0eeH%2FLV4lSHOeeD%2BlRR3NVsqhOfxLvS6cYkDFfnIQGWi9VddimC1LTS7TEuk0Htzay8DrKAf1tTpZ1MtT0oZEyIK3vJrgWMt01i0N7PtCD4rb8lmC7QZWV4gOiSwxjBp4MCfrujRqxvT9GIEjMGiVmHclKHmNbucpbTQ8FKMNeyiMoGOqUBjToW5UcacZe%2FKyO8HHX%2BbljK64SEP%2Fk5I6Ekl4K8r3%2BYPR%2B%2BrI120GH8o6wC4O6K4gwmf3S%2FCPGAF%2FNShhK087ym6JMJVrII1QZNG5CCPwoBCOzJ9WqdNjJOujFLUtvUJY7krffNfJRQYA0mWi0lhx2zZqfMSlcVRrAI6mpgMbLHFXpxB8Ax%2FBUGB%2BmY3bVqIwNTPPeQVz%2BvjZ4vF%2BaWP%2FBuBqHg&X-Amz-Signature=a748d18481f35987a594152ad5725e07ba2388582cdb86c2341fdc14f17feeb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5JSQHA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZidSEXSmWWz%2F4%2BPZalRblNfGEMx2nXJ9Nlp7sOk1yGwIgErg1XsPSgsx4Kn8A75NGJOcZ0g5mJmSJZNhf5wfjSLkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIaGD%2FKm6%2F%2FQAzQq8yrcA05%2B1sdJ5TBBnpsH%2FfSscQdlYdR4HKe5enAvKKVqlQLowGfETme8xvcIOf2kMfZM4jFzprMQ492R2MVZ%2FkO%2FsdFS2aYGE150e9ByjSK0KS5EIEHdzjlO5yZ2FCIK6I3wAhNRrsGVLhWzXZ9P%2FfULYuJU9RTlA38HT4i4jcaUleOmhQBbBhCRC9CViUeaox49vCckcR16A%2BIZfZKq6qSKxFACKNBZveOTc6ClSQz9Mru5LwxN4sH3jsaZPTDCb5c9%2FCM3DgoNA9rDdXJFh4o6VvJYHTgQeIZWKpce3eHliVRhG3%2FX2Am8FCqThnQuSWpzYdZNQjjjiLaL6VprzM%2FkS7CDsOJEZ9NlJjr47JdBxNxMMe2CdrJqZRI5OyFPOnHFRyGVcNSp%2FswgZY5Hu7AKml1BO7Un3I9k4bx%2B%2BanhyMsFNZs461vWzO24Z6u8PDC754mIuEdrRMCPClUZmLcMw0eeH%2FLV4lSHOeeD%2BlRR3NVsqhOfxLvS6cYkDFfnIQGWi9VddimC1LTS7TEuk0Htzay8DrKAf1tTpZ1MtT0oZEyIK3vJrgWMt01i0N7PtCD4rb8lmC7QZWV4gOiSwxjBp4MCfrujRqxvT9GIEjMGiVmHclKHmNbucpbTQ8FKMNeyiMoGOqUBjToW5UcacZe%2FKyO8HHX%2BbljK64SEP%2Fk5I6Ekl4K8r3%2BYPR%2B%2BrI120GH8o6wC4O6K4gwmf3S%2FCPGAF%2FNShhK087ym6JMJVrII1QZNG5CCPwoBCOzJ9WqdNjJOujFLUtvUJY7krffNfJRQYA0mWi0lhx2zZqfMSlcVRrAI6mpgMbLHFXpxB8Ax%2FBUGB%2BmY3bVqIwNTPPeQVz%2BvjZ4vF%2BaWP%2FBuBqHg&X-Amz-Signature=0535ae3f59bd29840349af408a2e3aa38f08dcb8982adbcfe05c8de83b4a9936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
