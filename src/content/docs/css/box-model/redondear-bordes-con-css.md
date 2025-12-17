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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LYZKND%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOVxBwBKSOaFmnKvl4Q1eHjBBSO0RNTrlmkxciBuRQdAiAigdybxXV%2B82zC0aKTWuemKAtEQTOfyBRApPoifqPy5Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMfJMvE8khqx9OuOEZKtwDOlXRbXKTzQkFwPZE9Y%2BaFwU%2BS%2BKmxmE42DFgQIj5Nl1U7mlvFSa24Poesg7CkgYj%2BAWRugn3lbUGSNS9fv4b%2B9XQSKrYa2M8be2%2BQnKnzw09zT7YIxGt9PsertKLI3qbFT9ZkTstwlnXxpj86%2FyQeMOXgmWWCSfvYMxI2EpsxBwNxNgZqZIE2Ed8n%2FUU7Hp%2B7SVDvCrX%2BEKog82tpsrKUcgJJLO8KWOkUUcJFrK%2BnIaqKlqNrh9YFHb7Er8BuXf3mZSc7As8Yd9tJ3INQsUO8CPAP0wNbdGp%2FjxIMbmlxNSMVFaSXZ6helnMOWSa5RYSjvsRYTtKKGGmk%2Ftn%2BwGpi0F2Sb9GcljpoYSDGw4BokMTTuIAYJLAhNyZ3ifIBi022IwS%2F28ssHg5vhvqrMz08antR7BvYrCez5fHwADLj2zdA%2BWPvofPzbUBKJ1tA%2BB4BVFSch%2FATp3Y6SIQzpMstydlsGBluW0DzU%2BWmB3%2BjeXEMR72O6HonvHU5npnZcUaJQn2m%2FQsAv9vUohkHnptIo36y7kaLSVC%2FeC7sXFYHfW03hkBvuHjLaMaBMeErTi%2F6hjvrJDi0t%2FBiDClQTl2%2FSHDFVlE%2BfNeASarjZfER4I2rTwDzMPV1xdClcowoZyJygY6pgF%2ByvOI5dvfieWCg8c%2B8u090efT1QA0ORUx%2F%2Flmof%2FOQrf1HQOGoLYDjpa4n9ovYgDf9Sqi%2BdzSLYe1OfoQYWL4TPzqL2KBbz8FoPEiNT66pYqyI6EYN6XXbhwVxHODGu5YUnvsQHkU5kGqHMYpRQKN8bprs3xrz%2BJLaxid5rr01FC9z4HVfnFXQctoWNaqDvKJtcdWl2j6T53YDAxfgcFRu7LCIC96&X-Amz-Signature=8af91bd73d91a8c893763dc8adfabde1c4ad4456da7a11a3afaeb8cd5a78826a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LYZKND%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOVxBwBKSOaFmnKvl4Q1eHjBBSO0RNTrlmkxciBuRQdAiAigdybxXV%2B82zC0aKTWuemKAtEQTOfyBRApPoifqPy5Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMfJMvE8khqx9OuOEZKtwDOlXRbXKTzQkFwPZE9Y%2BaFwU%2BS%2BKmxmE42DFgQIj5Nl1U7mlvFSa24Poesg7CkgYj%2BAWRugn3lbUGSNS9fv4b%2B9XQSKrYa2M8be2%2BQnKnzw09zT7YIxGt9PsertKLI3qbFT9ZkTstwlnXxpj86%2FyQeMOXgmWWCSfvYMxI2EpsxBwNxNgZqZIE2Ed8n%2FUU7Hp%2B7SVDvCrX%2BEKog82tpsrKUcgJJLO8KWOkUUcJFrK%2BnIaqKlqNrh9YFHb7Er8BuXf3mZSc7As8Yd9tJ3INQsUO8CPAP0wNbdGp%2FjxIMbmlxNSMVFaSXZ6helnMOWSa5RYSjvsRYTtKKGGmk%2Ftn%2BwGpi0F2Sb9GcljpoYSDGw4BokMTTuIAYJLAhNyZ3ifIBi022IwS%2F28ssHg5vhvqrMz08antR7BvYrCez5fHwADLj2zdA%2BWPvofPzbUBKJ1tA%2BB4BVFSch%2FATp3Y6SIQzpMstydlsGBluW0DzU%2BWmB3%2BjeXEMR72O6HonvHU5npnZcUaJQn2m%2FQsAv9vUohkHnptIo36y7kaLSVC%2FeC7sXFYHfW03hkBvuHjLaMaBMeErTi%2F6hjvrJDi0t%2FBiDClQTl2%2FSHDFVlE%2BfNeASarjZfER4I2rTwDzMPV1xdClcowoZyJygY6pgF%2ByvOI5dvfieWCg8c%2B8u090efT1QA0ORUx%2F%2Flmof%2FOQrf1HQOGoLYDjpa4n9ovYgDf9Sqi%2BdzSLYe1OfoQYWL4TPzqL2KBbz8FoPEiNT66pYqyI6EYN6XXbhwVxHODGu5YUnvsQHkU5kGqHMYpRQKN8bprs3xrz%2BJLaxid5rr01FC9z4HVfnFXQctoWNaqDvKJtcdWl2j6T53YDAxfgcFRu7LCIC96&X-Amz-Signature=892c972023b4969452cc981ca14dc4b8ffb9de9abfa5ec12d994fdeb2cca6033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
