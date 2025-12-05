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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUTC66L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6cClnAdUEpINKD2ZLQD8nwLqa7yW%2F3vOg17tPLOfFQIgVh0zccGmNhMx92iFIJuB6qV3BIigKz%2BKfq1OSMlZ%2Bmkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKoAbt6kJYUB7BsegyrcA5iuoH7BIN1dDjeHjRo%2FHIvdPUAX%2FjPjaUwZBpVpiUQaUdTKk4bK%2FDigjULKcEUJiQ2JujgHNx8URC9Hp19Pkoxd%2BLLx6ZkmHPPL4nqls5t5UpNDdpd1bjLs6CsHd1MJJC5eEEtgJe%2FqbvKmB7B5abSiPG%2F5kbzyIiebfaxTSQjnSeVlO8bK%2F%2FV6XOe3SCJ3OGqj7FbdqngVKukTrCuIQZyl3AfzDRIE4uA%2BkSGUjZm93PrFuzlXdBZsxtiFX2WzJ84l8EFusmb7lg25ZaZZZlatG%2B%2FvJRzxmoB%2B3tGRhyZma7ru9AijKC2YUc7NYxlinmfp8G4YFYML6TIeqZ9ZiRGvZTcQSFRRe%2FSD5bYs4wS0VZHnYq4HxxW19UGDQJFZZFHXU1mgvVvcn2SCqJXSH6OAQXn%2FpYEUSGTa2GvfEQv94fglpHkGHOCOnqWDUFvhQUUe8oEdmDXUTOiQUpMP0abPD%2FxKsNbT9DhFKlH7p78Hb4MGzl25dc%2BvkgWzt5v9Mq0g2I4IubmGrKOjMlC8zKMKc2%2BLqkG4e0IY7RbykxIAZD0olYO0669dIB%2BGOF4N23QNweu5V4wG5Oll0noSyAbuCxIV%2F0WMKI%2BzKvvEON59E0cQbqJBUmm5hOjlMPPMyskGOqUBbpOh00uvYYP6V6aRXVR8KbAZnugiCoDADDz8npkLsP0yQ8Yl4c0s%2FVyGRmMi2OFpNdgjvRaSpL6NL0CGbXJl0RPkn0gY9hq9pe%2Bsy%2FOfICLSuQIHtK74LHgxbq26Q8kbwbYg1dbII2%2Bed2OyZvn47QovYolryeb7cVBs0I5qkAiSPGNZPaN5nl19IBJhHVXjsgZrVTCYpWyY2rDRr8LsUCG9yd2w&X-Amz-Signature=9b60c779f5d5c3bb491ae619347f0214e66ee7c347202969ea4987ff6fab67fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUTC66L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6cClnAdUEpINKD2ZLQD8nwLqa7yW%2F3vOg17tPLOfFQIgVh0zccGmNhMx92iFIJuB6qV3BIigKz%2BKfq1OSMlZ%2Bmkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKoAbt6kJYUB7BsegyrcA5iuoH7BIN1dDjeHjRo%2FHIvdPUAX%2FjPjaUwZBpVpiUQaUdTKk4bK%2FDigjULKcEUJiQ2JujgHNx8URC9Hp19Pkoxd%2BLLx6ZkmHPPL4nqls5t5UpNDdpd1bjLs6CsHd1MJJC5eEEtgJe%2FqbvKmB7B5abSiPG%2F5kbzyIiebfaxTSQjnSeVlO8bK%2F%2FV6XOe3SCJ3OGqj7FbdqngVKukTrCuIQZyl3AfzDRIE4uA%2BkSGUjZm93PrFuzlXdBZsxtiFX2WzJ84l8EFusmb7lg25ZaZZZlatG%2B%2FvJRzxmoB%2B3tGRhyZma7ru9AijKC2YUc7NYxlinmfp8G4YFYML6TIeqZ9ZiRGvZTcQSFRRe%2FSD5bYs4wS0VZHnYq4HxxW19UGDQJFZZFHXU1mgvVvcn2SCqJXSH6OAQXn%2FpYEUSGTa2GvfEQv94fglpHkGHOCOnqWDUFvhQUUe8oEdmDXUTOiQUpMP0abPD%2FxKsNbT9DhFKlH7p78Hb4MGzl25dc%2BvkgWzt5v9Mq0g2I4IubmGrKOjMlC8zKMKc2%2BLqkG4e0IY7RbykxIAZD0olYO0669dIB%2BGOF4N23QNweu5V4wG5Oll0noSyAbuCxIV%2F0WMKI%2BzKvvEON59E0cQbqJBUmm5hOjlMPPMyskGOqUBbpOh00uvYYP6V6aRXVR8KbAZnugiCoDADDz8npkLsP0yQ8Yl4c0s%2FVyGRmMi2OFpNdgjvRaSpL6NL0CGbXJl0RPkn0gY9hq9pe%2Bsy%2FOfICLSuQIHtK74LHgxbq26Q8kbwbYg1dbII2%2Bed2OyZvn47QovYolryeb7cVBs0I5qkAiSPGNZPaN5nl19IBJhHVXjsgZrVTCYpWyY2rDRr8LsUCG9yd2w&X-Amz-Signature=f0b738d6812213dc9ad21bf98f9b37477c400a8e6091f926f4b23373ec512446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
