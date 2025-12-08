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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTX2ED5X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlpL5Q1JcsM1%2BiRkocJasGATp9qOEzST7yn7GCgf9JwgIgaFFQcVlZUXg00g7uEkYalxrmxEuwJPVF3ELezKoeARsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZRj1o9aGX5IhUAIyrcA6dstoJ8QhMNkZS8JcoVh2whF8vm83o7Ws343p%2B4u2JpVdUm7Esx3oTQKi0wBrNnqA6IvUUHWyrjcQ5a6HFfQeJH8PH3jgElOnhxCzVfUaJxAhhMBnoqLbRCfdU5TGQtqrXOx%2BbySqM6wpDvJof0Mgd6R08pNNAi26zk1Kd%2FbQ%2BdXeNpRUR04OxzkQNof3jO8uREx6GmdtLIZw6EUZHcGg%2FOKGjIdHF7GOFmW%2FNyOT%2B7BdAgQkleggY77XIUjUxLDX5YVP2m%2FhORV4flDhDhlnk8Sep8kjE%2BmL5sFISEm98bmqr8RiSG%2FXEtteOBU31Ta%2BITmZ0TkLNCb2GQ276CF3cHpIEezAuogrwni6SKzYjwsSfcONeJdeL6GJZIInn%2BYxldpCKHcj2%2BHrrfVKUzvu4sLav5jLXTZGvu3bi6JMMl0elliDJVY2%2BpWVrwOBaduL00DraSs3oI5HJ4Je%2FFD98QjEPpMUU%2FBFNnjiICnn4Do%2BcIoeaZi0qgRdTiY7tNsiGIsn66HWaxW%2FTv6GKRsOnS5OCpZkhV%2BrTL89jkuVVNUPlNxcIMyny3NczywjFiGbd4wBuFOMwg1URS4i%2FnxPH2l0I8P70umg6lQdxdivMLAubgYbcWfYnLgUHnMI7B28kGOqUBWkLahfBzqhbji%2Fr0Gw93YDSbvADaRXCyzrfUc8cHKfugzWhF2fpo3cic0YfeQAd%2FNpbOPqqhHOmGQg009UMqMY%2FuzH5Gii%2FFQQIjjt4OB4QbiFUrzqS7U9cfTGt6S2Auvh9TkSHJJOucnNyw2%2Bno6oX7xBBjFT1YlI6culdOJrzzLqwyuMHjqOb3iGjKihvLFLTdNXwLc01oSLyaqFlh6BvDvPg5&X-Amz-Signature=e9541cdf0ce2fd954ffc52dec34541fdaa12154cfab472e00cbf2e249f3ea500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTX2ED5X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlpL5Q1JcsM1%2BiRkocJasGATp9qOEzST7yn7GCgf9JwgIgaFFQcVlZUXg00g7uEkYalxrmxEuwJPVF3ELezKoeARsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZRj1o9aGX5IhUAIyrcA6dstoJ8QhMNkZS8JcoVh2whF8vm83o7Ws343p%2B4u2JpVdUm7Esx3oTQKi0wBrNnqA6IvUUHWyrjcQ5a6HFfQeJH8PH3jgElOnhxCzVfUaJxAhhMBnoqLbRCfdU5TGQtqrXOx%2BbySqM6wpDvJof0Mgd6R08pNNAi26zk1Kd%2FbQ%2BdXeNpRUR04OxzkQNof3jO8uREx6GmdtLIZw6EUZHcGg%2FOKGjIdHF7GOFmW%2FNyOT%2B7BdAgQkleggY77XIUjUxLDX5YVP2m%2FhORV4flDhDhlnk8Sep8kjE%2BmL5sFISEm98bmqr8RiSG%2FXEtteOBU31Ta%2BITmZ0TkLNCb2GQ276CF3cHpIEezAuogrwni6SKzYjwsSfcONeJdeL6GJZIInn%2BYxldpCKHcj2%2BHrrfVKUzvu4sLav5jLXTZGvu3bi6JMMl0elliDJVY2%2BpWVrwOBaduL00DraSs3oI5HJ4Je%2FFD98QjEPpMUU%2FBFNnjiICnn4Do%2BcIoeaZi0qgRdTiY7tNsiGIsn66HWaxW%2FTv6GKRsOnS5OCpZkhV%2BrTL89jkuVVNUPlNxcIMyny3NczywjFiGbd4wBuFOMwg1URS4i%2FnxPH2l0I8P70umg6lQdxdivMLAubgYbcWfYnLgUHnMI7B28kGOqUBWkLahfBzqhbji%2Fr0Gw93YDSbvADaRXCyzrfUc8cHKfugzWhF2fpo3cic0YfeQAd%2FNpbOPqqhHOmGQg009UMqMY%2FuzH5Gii%2FFQQIjjt4OB4QbiFUrzqS7U9cfTGt6S2Auvh9TkSHJJOucnNyw2%2Bno6oX7xBBjFT1YlI6culdOJrzzLqwyuMHjqOb3iGjKihvLFLTdNXwLc01oSLyaqFlh6BvDvPg5&X-Amz-Signature=a7d3697d1488b6912bf4b2b840c9fc9ff1df92da288c1c63c53153171b0725f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
