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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG6EIFZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCliW%2F5Fkuc5FVe5T4bybgrNAzibxCRrtjt%2FRN3U8U5zwIgBv7MKq4R8WpgLqiZlyYVTCbIyCubhzbyNH5ymjfDLg8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ08z4NPlnWKK1ZxGCrcA7d5wH%2Bqzuyo6OWzaLi%2FO96pYcDQDChF%2FqghvYTkZw2c%2BzL41UX9CpQEcBAu4PykQ5jfGGfIzIBFi%2BsCQtwfirM%2BR3b7J3W2wcdwOO%2FSyZLuZ%2FQNQ8LVEgeUG3xI%2BgzhvtN5Us%2BCHB0JYsfn2FWPpYFj1pjpM0Z%2BmKAMp4SLJrxrtZVFheytRuC%2Bl8T0RZ4abaZbNcjVWoFfQ8bgkEX09S2o8KG2DN0gh92XH0xaTuvnxgFPTrIvcanLj4rpqOiNOFCGtU5z5uetZTZpwdDS2LF0j%2FR3O4GstfJ3dwYBVnjaP%2FVpZuL2C2wZtYgnNi6gfUG29yO63dD4lAbmc9j5wF9p%2Fey6HIsnDSz2%2BNF4SlohpNPs5OAvHZsleu3XUjoEY%2BjlaVZnJrOogdI8I%2B%2BhbYf6VVAeRtrCwQeJovGEK1hYssOE8wIt8N2V%2BZmADsXspafU39D0A%2BUhAUv8RIZAypU0rLHSoJveVEZaePhrc46B84kk5NFLpbKJWQaTnVZII%2BCErQqRyDzgvMHnGBKXU6d8CNc5uw7uRHv9Nc9E5q9L8Mvr%2B0Hok1kgwqB0xa51RR0e45WULeCH4SR3%2B%2FRdjyaMN4QUX6rf9i6lDKSVrE%2FExl9IN8xpCghWWu8TMMmfi8oGOqUBwVSXVAJU7rkH%2B1P3%2BsatltxSrJ5WN1lP5%2BcmK1oaRffK9VNLkCkXcUWqfJV3shXgzv6paiefrotOv1TravZdaUqKDyrGObpG6niKsthTEZOQ98rB9ePLdc2Rleg9vD%2F6Rh6BfkBaI2EmKJCBkhwQVTWL%2BsRfu7ONzd4wMfLnn1ZGI6liOoRisiqAbOPlYpKwr4D7N4rsSl2VpRxNYoPI3NbYXciI&X-Amz-Signature=5068de57daf9b9b100fb2325d81daef2bc53e17a8c96e08d280aed80a3b0c708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG6EIFZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCliW%2F5Fkuc5FVe5T4bybgrNAzibxCRrtjt%2FRN3U8U5zwIgBv7MKq4R8WpgLqiZlyYVTCbIyCubhzbyNH5ymjfDLg8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ08z4NPlnWKK1ZxGCrcA7d5wH%2Bqzuyo6OWzaLi%2FO96pYcDQDChF%2FqghvYTkZw2c%2BzL41UX9CpQEcBAu4PykQ5jfGGfIzIBFi%2BsCQtwfirM%2BR3b7J3W2wcdwOO%2FSyZLuZ%2FQNQ8LVEgeUG3xI%2BgzhvtN5Us%2BCHB0JYsfn2FWPpYFj1pjpM0Z%2BmKAMp4SLJrxrtZVFheytRuC%2Bl8T0RZ4abaZbNcjVWoFfQ8bgkEX09S2o8KG2DN0gh92XH0xaTuvnxgFPTrIvcanLj4rpqOiNOFCGtU5z5uetZTZpwdDS2LF0j%2FR3O4GstfJ3dwYBVnjaP%2FVpZuL2C2wZtYgnNi6gfUG29yO63dD4lAbmc9j5wF9p%2Fey6HIsnDSz2%2BNF4SlohpNPs5OAvHZsleu3XUjoEY%2BjlaVZnJrOogdI8I%2B%2BhbYf6VVAeRtrCwQeJovGEK1hYssOE8wIt8N2V%2BZmADsXspafU39D0A%2BUhAUv8RIZAypU0rLHSoJveVEZaePhrc46B84kk5NFLpbKJWQaTnVZII%2BCErQqRyDzgvMHnGBKXU6d8CNc5uw7uRHv9Nc9E5q9L8Mvr%2B0Hok1kgwqB0xa51RR0e45WULeCH4SR3%2B%2FRdjyaMN4QUX6rf9i6lDKSVrE%2FExl9IN8xpCghWWu8TMMmfi8oGOqUBwVSXVAJU7rkH%2B1P3%2BsatltxSrJ5WN1lP5%2BcmK1oaRffK9VNLkCkXcUWqfJV3shXgzv6paiefrotOv1TravZdaUqKDyrGObpG6niKsthTEZOQ98rB9ePLdc2Rleg9vD%2F6Rh6BfkBaI2EmKJCBkhwQVTWL%2BsRfu7ONzd4wMfLnn1ZGI6liOoRisiqAbOPlYpKwr4D7N4rsSl2VpRxNYoPI3NbYXciI&X-Amz-Signature=17b4f8f3ce1ca81d970284ba428eb9518a83fccd345d6d4808b5452d068c643d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
