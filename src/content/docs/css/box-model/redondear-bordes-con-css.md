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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJMNU63%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAIuLRspLRGsA99vUm4XdQ5z2OawBjcsmGtZAYK1ljXgIhAPSe%2BcwTzGCKjWS8co20T94DUUVyG8xcke%2BqI%2BEkXI5VKv8DCHsQABoMNjM3NDIzMTgzODA1IgyRExcP14P%2FUIziDkAq3AOuQ9LwnPifLuh7lMDBVBYUBN9yLUaIJiPfaj41JTMvPDvsGgOg3EaCghgPIv6B7Kje1qD%2BeoNNU8p9iKBvrYITMQPEJyTaeD%2FJ82xQXkbzGs3%2F0aDX5r3S%2Bu6X32FvLjWUrl9lOyrgxoSVLGc%2Ff7xsovrxPtNzM92WgsmwdzEqeYhOrPdRxt1mT%2BXW4ainuBrqWN70S2tWp2y9d91H%2BBgYKYJztjf5JTB2R82CszPrT8yOI%2FfnpvZCUM9QIdC8vLzjhrtRtdXO%2B3T4ZRjuUVlXU1u0M9DY3qeI3%2Bo0gPq85jG5ODvnAlbpkCTOGUL5R5di7OJwI1OPNELBxUHLFnzajg5BsCfek2uh7N8MLfyQUOMY%2BaQ%2FEH3riv4%2FkRug%2FdOCjYjzTtaShA0P93AwHJzA5a63Pvs1JXdpa6r21R9a4GzwgysoT6ZSdd7wmNi4wHao5nQasArFgHbRuTSZpOJBYQy%2FQ5DPqUsoCnKEFh8eal26DZbMs3N0FNUtEyUjvhL96vtAxfGFjh7xjqh3qzHk0ZOD6fz15t2M2eUJTzSjwKXnYISW3OyM8aYt%2FHMlTeh%2B8nqV57h8sMrmwh%2FKNL7c2YpylKc30UoDjQYm9w43MFiGY7Fs1TASUOZsajDr8InKBjqkAb7NQEoHNqHwkUAPInOLV7Ew4Aogx4yNPmLf9RhVl3Cw%2FJc0i7p7DfXohoUMePg40eugy1bkDiclwLEpgGp3LKWZSsJTbWGbdNgH6pECsWhsN092EE66TIjN49sJIHqkP1p0HZqy6kOGSfeps9GUdjO9WuEQo55zmSsHrJTIyH%2Bo1tfusvyB1Drna13N9rkwxnwjrcIj3cXDGOPl3knzmkGmbygZ&X-Amz-Signature=59a9aa6ada099c3de6a9831e5150a46cc3f2c7960e9b9080071171df4527f486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJMNU63%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAIuLRspLRGsA99vUm4XdQ5z2OawBjcsmGtZAYK1ljXgIhAPSe%2BcwTzGCKjWS8co20T94DUUVyG8xcke%2BqI%2BEkXI5VKv8DCHsQABoMNjM3NDIzMTgzODA1IgyRExcP14P%2FUIziDkAq3AOuQ9LwnPifLuh7lMDBVBYUBN9yLUaIJiPfaj41JTMvPDvsGgOg3EaCghgPIv6B7Kje1qD%2BeoNNU8p9iKBvrYITMQPEJyTaeD%2FJ82xQXkbzGs3%2F0aDX5r3S%2Bu6X32FvLjWUrl9lOyrgxoSVLGc%2Ff7xsovrxPtNzM92WgsmwdzEqeYhOrPdRxt1mT%2BXW4ainuBrqWN70S2tWp2y9d91H%2BBgYKYJztjf5JTB2R82CszPrT8yOI%2FfnpvZCUM9QIdC8vLzjhrtRtdXO%2B3T4ZRjuUVlXU1u0M9DY3qeI3%2Bo0gPq85jG5ODvnAlbpkCTOGUL5R5di7OJwI1OPNELBxUHLFnzajg5BsCfek2uh7N8MLfyQUOMY%2BaQ%2FEH3riv4%2FkRug%2FdOCjYjzTtaShA0P93AwHJzA5a63Pvs1JXdpa6r21R9a4GzwgysoT6ZSdd7wmNi4wHao5nQasArFgHbRuTSZpOJBYQy%2FQ5DPqUsoCnKEFh8eal26DZbMs3N0FNUtEyUjvhL96vtAxfGFjh7xjqh3qzHk0ZOD6fz15t2M2eUJTzSjwKXnYISW3OyM8aYt%2FHMlTeh%2B8nqV57h8sMrmwh%2FKNL7c2YpylKc30UoDjQYm9w43MFiGY7Fs1TASUOZsajDr8InKBjqkAb7NQEoHNqHwkUAPInOLV7Ew4Aogx4yNPmLf9RhVl3Cw%2FJc0i7p7DfXohoUMePg40eugy1bkDiclwLEpgGp3LKWZSsJTbWGbdNgH6pECsWhsN092EE66TIjN49sJIHqkP1p0HZqy6kOGSfeps9GUdjO9WuEQo55zmSsHrJTIyH%2Bo1tfusvyB1Drna13N9rkwxnwjrcIj3cXDGOPl3knzmkGmbygZ&X-Amz-Signature=d6024fba2878c095bc65e5b291d1a18e53825177d886a6efe9083cd14a2a5a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
