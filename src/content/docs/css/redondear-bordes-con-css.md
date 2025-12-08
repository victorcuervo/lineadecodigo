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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLHFO2D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzk7CvTyzMVVjM6bGm12l3XdgaNcO5barOW%2Bj44LIFeAiEApYhEhX4mzIfuJ7ztCM9sxjWd9mQv0B5YG6MM8F2AfTMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS5OluSK1vcPGbPeyrcAxvtlCZ4sCOK%2BD4LC8Y%2BnzHUDAJE7GIXrIGS4u6dnEIZ75vHfbz2XtOTDglonRxlxbseo1QOTflvJM2Dke63xZl3CaxsSExPu10CJJmJBQKrR34E9I4Nm519qKGyDas0fsxkM4HEIMWGhDuRXf5sCEXhRD1IlIfy658UdK6rW34enm2hz8a0VotMIQKc1NTOoVrB5tfVeeEQsh9z8K9oEhjTNH2gT7ljt9L%2BynGMgCF9EFmwr0MAMTqa7RWns2rnibL5DhwErcy7gFhu3zc8BE66Z%2FryemLA6RFue7gAe%2BIh6iJLGa3LkiiJjnoHq9SNaNnLZttnV35FG0oIaErBgOXN5X0IGhnhuEVZ17WHm07l3GEseqG3gwqt9UfGp4WOj2ZH8W4kNVXWi1aEdYKHREpejDfs2FUNO2X4mLbfKZznKCpjpYeCgMkWdCogozcl0zzi%2BQ9pi7sM3mvIkQwfpdF6uf2qvvhtb9nfeIE6FfO%2B3BtbgviHeNWCE4BTyEtIA96T9NqHlTzLmu1pbmBqWG6F8FOHlX6hkQmJE%2BFZL1rH6M4uDE4g1EQgK%2FdU5TYqDyw9koWm2YpSvjdmBWqpSqAFuJsq8iCbyHnTNsEmuSq1uZllDHGt1gXwTO6eMN%2Ft2ckGOqUB1%2FEMrdMSGtmdAdEnz8LnrZzJFFWSn8YqxxCu6w%2F9iQnvH0mo6QHYx5oq1JK%2BcEOyR6RPa14MII23kyMlpyKAt3IYI3YFaXy7kr9ywpjq58sroNhp37JCjWkCqn%2Fqn7rDdNbz8kKUqXVQ4R8u7McTGHKj8HnHDS0ZAluOqFmXVf7Gq1p%2FbHbwPh910JKnjJU%2B%2BLdwf%2FlQQRdxD%2FNO0hEiVHfw4hFi&X-Amz-Signature=ad188e07c185593623f5d69d9f6104d66075e08f7777818044cf6d638eb9fcd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLHFO2D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzk7CvTyzMVVjM6bGm12l3XdgaNcO5barOW%2Bj44LIFeAiEApYhEhX4mzIfuJ7ztCM9sxjWd9mQv0B5YG6MM8F2AfTMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS5OluSK1vcPGbPeyrcAxvtlCZ4sCOK%2BD4LC8Y%2BnzHUDAJE7GIXrIGS4u6dnEIZ75vHfbz2XtOTDglonRxlxbseo1QOTflvJM2Dke63xZl3CaxsSExPu10CJJmJBQKrR34E9I4Nm519qKGyDas0fsxkM4HEIMWGhDuRXf5sCEXhRD1IlIfy658UdK6rW34enm2hz8a0VotMIQKc1NTOoVrB5tfVeeEQsh9z8K9oEhjTNH2gT7ljt9L%2BynGMgCF9EFmwr0MAMTqa7RWns2rnibL5DhwErcy7gFhu3zc8BE66Z%2FryemLA6RFue7gAe%2BIh6iJLGa3LkiiJjnoHq9SNaNnLZttnV35FG0oIaErBgOXN5X0IGhnhuEVZ17WHm07l3GEseqG3gwqt9UfGp4WOj2ZH8W4kNVXWi1aEdYKHREpejDfs2FUNO2X4mLbfKZznKCpjpYeCgMkWdCogozcl0zzi%2BQ9pi7sM3mvIkQwfpdF6uf2qvvhtb9nfeIE6FfO%2B3BtbgviHeNWCE4BTyEtIA96T9NqHlTzLmu1pbmBqWG6F8FOHlX6hkQmJE%2BFZL1rH6M4uDE4g1EQgK%2FdU5TYqDyw9koWm2YpSvjdmBWqpSqAFuJsq8iCbyHnTNsEmuSq1uZllDHGt1gXwTO6eMN%2Ft2ckGOqUB1%2FEMrdMSGtmdAdEnz8LnrZzJFFWSn8YqxxCu6w%2F9iQnvH0mo6QHYx5oq1JK%2BcEOyR6RPa14MII23kyMlpyKAt3IYI3YFaXy7kr9ywpjq58sroNhp37JCjWkCqn%2Fqn7rDdNbz8kKUqXVQ4R8u7McTGHKj8HnHDS0ZAluOqFmXVf7Gq1p%2FbHbwPh910JKnjJU%2B%2BLdwf%2FlQQRdxD%2FNO0hEiVHfw4hFi&X-Amz-Signature=8c207db884d7d2cb351c4b21237a2a9bee1c7f3e7beb0a579ff246c28136228e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
