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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXDKGLZA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZIV73sPu4R0PQy7TcLIwOPY0R%2FJGFNRtUSdHqV16YwIhANxkiJdya1xq1JsmHfo2k1QrR0dFHLhI4RfR0%2FU%2BsGfuKv8DCHkQABoMNjM3NDIzMTgzODA1Igxue1wi3tPbTRCMSJ0q3APwRmYzqmSOGege%2B8D7MeJg%2B5fo27zTsswvviZG%2BI7JP6tuhrzRh8cz58TCHb3ZWd0IaM3q63kR1QZdeYmH1YRr%2FIM7Q5WRSa3JVb8rRNvideZEWJ0xjOKS2H2%2BPgSYxbRvPmjdtIsBD0I0Nwu02XXb4Lhu9CdyE5EfpaPXY1mFJhWy8xNZteO%2B2hQxbGuHRIUPOOXGW%2BfIB6ubFzs7%2Bb5StmBhswmd1yrz1m%2B6vQNXo1NHclJAvWzPOZGJXmR4Vfkng%2BWqctILMgKKjqBk3qa1WhzMrvWITEcH1hat3ROy1zGZ8jH%2FQ5TA4jSPCRSbl7CUh0K2r8iPGcOPAnzFFB1%2FapU%2FxycM4lvDsfqcBJ3gTeLQy8g2Lvk4WWuOeQyzZySQz14DIb2P0HB8d%2BW5KrVP%2FH03BnqBxMgKV7kfxqKutVEBtXQ02ctHZIMt51JNr%2BjclZCJC3R%2BI%2Fp6l5RPOuStHYubUVPVQebUqqQ3edzPGCwxfnamPiG32Hm%2FUtuIne4VHuQuWGEd8VKvRjI%2F8Jwd7oBqSv73uhHZwaf5X1x1WgC%2F0xmuwukKW6F9IbUG8Q4HgkeSyhra4vGAxcZzmc27fYs60F%2FDOiiLTq3vdieA9KYer00O92LymxAXvDCKuInKBjqkAXrQP5J1W3n3EA9iTl0itqQGHZQQm8NQNnwr5yE7vHdNeOqr7%2Bqae1ttD5wD0hhdLY2pqeKeo2tpArCkLTsEcValt61ziOXI5rR3XwUxG9TX8ilsiPIhWUMXvlMPy7ZwoO9lD63bikM1gEp1EJSqj2mC%2FjvddkO3Kyy4v0QfOoJ1SJ8tlJSux%2FTTw8pLU%2FE0M6hvPKJFMbPqmU8InJYUF6l1s6yw&X-Amz-Signature=17c2624af30267485768e532a224f25ecd98363c4e9074d3558d02bb9c115810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXDKGLZA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZIV73sPu4R0PQy7TcLIwOPY0R%2FJGFNRtUSdHqV16YwIhANxkiJdya1xq1JsmHfo2k1QrR0dFHLhI4RfR0%2FU%2BsGfuKv8DCHkQABoMNjM3NDIzMTgzODA1Igxue1wi3tPbTRCMSJ0q3APwRmYzqmSOGege%2B8D7MeJg%2B5fo27zTsswvviZG%2BI7JP6tuhrzRh8cz58TCHb3ZWd0IaM3q63kR1QZdeYmH1YRr%2FIM7Q5WRSa3JVb8rRNvideZEWJ0xjOKS2H2%2BPgSYxbRvPmjdtIsBD0I0Nwu02XXb4Lhu9CdyE5EfpaPXY1mFJhWy8xNZteO%2B2hQxbGuHRIUPOOXGW%2BfIB6ubFzs7%2Bb5StmBhswmd1yrz1m%2B6vQNXo1NHclJAvWzPOZGJXmR4Vfkng%2BWqctILMgKKjqBk3qa1WhzMrvWITEcH1hat3ROy1zGZ8jH%2FQ5TA4jSPCRSbl7CUh0K2r8iPGcOPAnzFFB1%2FapU%2FxycM4lvDsfqcBJ3gTeLQy8g2Lvk4WWuOeQyzZySQz14DIb2P0HB8d%2BW5KrVP%2FH03BnqBxMgKV7kfxqKutVEBtXQ02ctHZIMt51JNr%2BjclZCJC3R%2BI%2Fp6l5RPOuStHYubUVPVQebUqqQ3edzPGCwxfnamPiG32Hm%2FUtuIne4VHuQuWGEd8VKvRjI%2F8Jwd7oBqSv73uhHZwaf5X1x1WgC%2F0xmuwukKW6F9IbUG8Q4HgkeSyhra4vGAxcZzmc27fYs60F%2FDOiiLTq3vdieA9KYer00O92LymxAXvDCKuInKBjqkAXrQP5J1W3n3EA9iTl0itqQGHZQQm8NQNnwr5yE7vHdNeOqr7%2Bqae1ttD5wD0hhdLY2pqeKeo2tpArCkLTsEcValt61ziOXI5rR3XwUxG9TX8ilsiPIhWUMXvlMPy7ZwoO9lD63bikM1gEp1EJSqj2mC%2FjvddkO3Kyy4v0QfOoJ1SJ8tlJSux%2FTTw8pLU%2FE0M6hvPKJFMbPqmU8InJYUF6l1s6yw&X-Amz-Signature=5f816f671ccf4f63caf880d35d474fbb012b68fb89c65125188b412c5f4ba757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
