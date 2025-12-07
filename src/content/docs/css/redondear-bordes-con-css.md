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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCN5ZGTA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3wBaMHad%2FeEBTGkoFlx99syPWIwOVEG%2F2qJMp4j0MaAIhAK4jxfKAVJ7hRi7jiikruer7FFC0YeGsZKARbB9t5WhJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuc7rdBbgRufarXhgq3AMVerhrhQb7D4gOSbVv9U0%2BOutHjEFCai3qvWEvarVQhFctIIo0A5rMdtIfMDyDqyfQXnZEMS6rzeSiVnKKT4M74H1anX1HgRXV%2FZT3w4lZDWjny3ds195DZBMfYP9%2FLRFYqZ4litwn1m2I8SjxH6VyaDOLQl3n%2B1W8z1oT0wevDe6v44a1sLQIe2XiUNbduOUnWhQbhW3v7pwRYhrHrVoBtFvhD7egjG1a%2BYBMmm9cR%2B1nO16AZpwtjPWjl0TkB0KLB5qfks7zuNe88Uaz%2FVmFtBZxeke8CBXaXoQi97%2FKkMQRrCqvrIVeHtWa3C0qXYRgO31RsLRzbpyBusX6kHmv6HXySMIraC0rAvwK6ATxMsoY3lUXVkyLFYOFooGNApBnBewn%2FSv5SnWQS9BRob29y9pNW7VF5NyvN0dwn0PhG76fMQrUw%2Fsu8SFaBW3Hhz357Mk0H2y6R7z8PQUPCzqKU2GJK7m%2Bri9BUn25CwvNPB5Ib8xd327ql0MDkkBptwg93SiHUGYx2jq1Fu7z%2Bd3ezkUjb7H5MMVHNOg4zq6yk%2BuJ8H5uALZDHY6muYBaqmXLg4ZXPoXpn3Y7305grKs5bOrsLpWiGN05%2FmmZyX5vMI7y%2BIRHaAVtwzBH%2FDCO%2FdLJBjqkAWRxCn7ZreVxXfdGBLXIc7rcW6bvez41XgiPT5%2FI0WOI24QmTByi3Fx%2Flsurknb9PpJOUKZz6jOHIFRAtdT91XiM9O%2Bo4qqosj7HjbutYps6Zlk5wBv3QHKzmEIqR2t0RpPqrQjD%2BuRXtOlUyvaSdp0nzjqggdABUW88HJc9OTVUi0C2QxMxJN0OFjobxiwRdj4rZ%2FYL1n0yCK3zTP27oQSL5hJL&X-Amz-Signature=9bbc30cac3e8a781a7141ced09ed91cfb438261f2c8d6236bf89122a0c4ef894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCN5ZGTA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3wBaMHad%2FeEBTGkoFlx99syPWIwOVEG%2F2qJMp4j0MaAIhAK4jxfKAVJ7hRi7jiikruer7FFC0YeGsZKARbB9t5WhJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuc7rdBbgRufarXhgq3AMVerhrhQb7D4gOSbVv9U0%2BOutHjEFCai3qvWEvarVQhFctIIo0A5rMdtIfMDyDqyfQXnZEMS6rzeSiVnKKT4M74H1anX1HgRXV%2FZT3w4lZDWjny3ds195DZBMfYP9%2FLRFYqZ4litwn1m2I8SjxH6VyaDOLQl3n%2B1W8z1oT0wevDe6v44a1sLQIe2XiUNbduOUnWhQbhW3v7pwRYhrHrVoBtFvhD7egjG1a%2BYBMmm9cR%2B1nO16AZpwtjPWjl0TkB0KLB5qfks7zuNe88Uaz%2FVmFtBZxeke8CBXaXoQi97%2FKkMQRrCqvrIVeHtWa3C0qXYRgO31RsLRzbpyBusX6kHmv6HXySMIraC0rAvwK6ATxMsoY3lUXVkyLFYOFooGNApBnBewn%2FSv5SnWQS9BRob29y9pNW7VF5NyvN0dwn0PhG76fMQrUw%2Fsu8SFaBW3Hhz357Mk0H2y6R7z8PQUPCzqKU2GJK7m%2Bri9BUn25CwvNPB5Ib8xd327ql0MDkkBptwg93SiHUGYx2jq1Fu7z%2Bd3ezkUjb7H5MMVHNOg4zq6yk%2BuJ8H5uALZDHY6muYBaqmXLg4ZXPoXpn3Y7305grKs5bOrsLpWiGN05%2FmmZyX5vMI7y%2BIRHaAVtwzBH%2FDCO%2FdLJBjqkAWRxCn7ZreVxXfdGBLXIc7rcW6bvez41XgiPT5%2FI0WOI24QmTByi3Fx%2Flsurknb9PpJOUKZz6jOHIFRAtdT91XiM9O%2Bo4qqosj7HjbutYps6Zlk5wBv3QHKzmEIqR2t0RpPqrQjD%2BuRXtOlUyvaSdp0nzjqggdABUW88HJc9OTVUi0C2QxMxJN0OFjobxiwRdj4rZ%2FYL1n0yCK3zTP27oQSL5hJL&X-Amz-Signature=828f65998f446fc29391d5f98885fd0ea79c5e3aadc2f79d87eee8898f77b339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
