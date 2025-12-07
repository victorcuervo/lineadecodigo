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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCNOO42%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS%2BqXYCCIUOXZXQuFoxU5NhRu%2BJKzBoaD6k2Fq7eJQdAiBOTtj2O5kBYFEs87ku5fW4GUgMpdYYTusI%2BycqzBqsLyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51y1%2B2%2BrIW4svfLwKtwDmjHZgDlIE39%2FnlQ8vZgPYtWsXeThe3jgGoi91QMCVLBdUdvNfKFbzbsrxZBiCz9XWJRdfXpNUI%2BdGPnAuumlmBbkLy0Q7QvLZONUnoD9C2IeAtONIi1phL7cCxYREcmbe%2F%2FO%2BUdEd7OXWBsKkJMVHtfgwxUwKVQSgOAheepypR3AukwRRwfQhlUPh3IUdqr2vzSxVT71HIBz%2FaTDHyDd13BX2KjU0ZGWC1d8tZuhmglynUr%2BBm42dcGPa42JkQfhKPJBCibIDob0K7RsIuHPvRNCyoYagSXNCo5UFcd0bQLtkCrBgNd7zNTd%2BpbDQX6awseRnxV%2Bz9THRR1R4f2UJMWpOK7S7mX6nZ7uYEXSX%2Bh1bgFsdoELaFMLwmJpX3BjF2eCVnNuVLYrLK0YPjqkAAwEv75fNh5LrgUVkMmqoYapb7SJjk4ZjI0XgCd8w2JuCPy9hoV9QkEDU4xVn%2FPXdRQ4bXKnbCA7PoY31fy3OGW2T6slZn3o8m5JESq20aYDXK6FIL36dL9LO5Ar%2BzCQUtVdGHlPOrcFMqAex%2BHxO8CZBJqd4qRXm0xTl7ywFL1xPVlWYa6%2F0HVHM3VAbksKrTYhnljlMOQMfEUKrtoDNObnKIflaU%2FHQM8q4V8wiL%2FWyQY6pgH5tDcCsSuvOr5rNTdxCNzfKxp4HkmfKYECvxeyIUMzgNaSbmKYb2JALsG7AKILc%2FAtbXl6FiYHYWLZk4Wh8MxxAn6tmnclO8shQLJmGOsG8ZzHw3FMLoasd16K7mDTViTxAEFGpLWHviAjaF95Z0AJdp7a6KIA6TJKAtPNfeoWWvC4n2mZ211KOmgbMu61GfR8y9c6oNw%2B4Lscodji%2F4WU%2FDlTFARu&X-Amz-Signature=ae406df671ad88a8bf153f36ed54d298bc860fb5b77ab4e5b2e8aa2146ff59e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCNOO42%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS%2BqXYCCIUOXZXQuFoxU5NhRu%2BJKzBoaD6k2Fq7eJQdAiBOTtj2O5kBYFEs87ku5fW4GUgMpdYYTusI%2BycqzBqsLyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51y1%2B2%2BrIW4svfLwKtwDmjHZgDlIE39%2FnlQ8vZgPYtWsXeThe3jgGoi91QMCVLBdUdvNfKFbzbsrxZBiCz9XWJRdfXpNUI%2BdGPnAuumlmBbkLy0Q7QvLZONUnoD9C2IeAtONIi1phL7cCxYREcmbe%2F%2FO%2BUdEd7OXWBsKkJMVHtfgwxUwKVQSgOAheepypR3AukwRRwfQhlUPh3IUdqr2vzSxVT71HIBz%2FaTDHyDd13BX2KjU0ZGWC1d8tZuhmglynUr%2BBm42dcGPa42JkQfhKPJBCibIDob0K7RsIuHPvRNCyoYagSXNCo5UFcd0bQLtkCrBgNd7zNTd%2BpbDQX6awseRnxV%2Bz9THRR1R4f2UJMWpOK7S7mX6nZ7uYEXSX%2Bh1bgFsdoELaFMLwmJpX3BjF2eCVnNuVLYrLK0YPjqkAAwEv75fNh5LrgUVkMmqoYapb7SJjk4ZjI0XgCd8w2JuCPy9hoV9QkEDU4xVn%2FPXdRQ4bXKnbCA7PoY31fy3OGW2T6slZn3o8m5JESq20aYDXK6FIL36dL9LO5Ar%2BzCQUtVdGHlPOrcFMqAex%2BHxO8CZBJqd4qRXm0xTl7ywFL1xPVlWYa6%2F0HVHM3VAbksKrTYhnljlMOQMfEUKrtoDNObnKIflaU%2FHQM8q4V8wiL%2FWyQY6pgH5tDcCsSuvOr5rNTdxCNzfKxp4HkmfKYECvxeyIUMzgNaSbmKYb2JALsG7AKILc%2FAtbXl6FiYHYWLZk4Wh8MxxAn6tmnclO8shQLJmGOsG8ZzHw3FMLoasd16K7mDTViTxAEFGpLWHviAjaF95Z0AJdp7a6KIA6TJKAtPNfeoWWvC4n2mZ211KOmgbMu61GfR8y9c6oNw%2B4Lscodji%2F4WU%2FDlTFARu&X-Amz-Signature=5c30b06fdafeb35752ecc7eb0bdff934cccdba6ee88d61e433537050cefc4573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
