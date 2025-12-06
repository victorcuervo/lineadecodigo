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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHSH72T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGmd87MTUEDWvWBJRcxcvLauReFEZLSoXefS7X%2F%2Bv6KAiA%2B1QIvYSlX26VXQjpXLzdT5xFVgwQwCI%2BsHVknlv%2FSGCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLnxE3G4UNmISAA3hKtwDfcaofdFHAJEa0U9UBjUWajL2STMoswMVwRvlBgeJu1sLwN2KY0kYyzmyTQVqhoBJBM5mk%2Bh9VIO0EtpVNEt3He13LWpJBejMvUjUssf29lTMzjZcyBU3eh6vPoxvCixx8L1TpW16UOI8O5akIJRzfXykL4r2XD2HzEzVUVJF4dBEqIpCQGzM45BV4gX%2BS%2FOfmdG0TznyqPPn9pmczJ4sBKgh8T33izGKAYGWnf0ap4URZlY4x8Rtd1%2FebRNvYV2NosCPK8XkK8N%2BTUfUBqC0EWWan29Hh%2BQDnhf8r5l9cJKdd6iahnjkqTXqRlKV9dgXOHNkBZo%2BL7XxQgJp5B6nEI3RA6HpjmDOWRfzudWHjRAt1fWtCYaCdK4GGPvitvWeWAvfF5tpv0MiEorAOihhUM5HVj8eeOjAKQnYMtlkYx6HuQq0jjuqo93IZO6oKpt9GnNl96bnxlVHaUGKkJ82kvwaUog3WXCHoP9M8MYvJVIJapq9Tilsbc1yAmzhgOCYFvyyTFSbQoDkAvTGwumHAq9QsoQItcJywkn%2BCr26g8dDtXTMm0lc7dihAIQaWSXAWmgnXqhpjxjAxFjGJ9NaBepyeYZKOhR7Uxr%2BdAQ%2Fn4eysxHOENaP0NeFhEgw5KbQyQY6pgGAiuousrSf4oQ5iB%2FAIZANrplZ41ArO7hjgr%2BeO6vQAXVdZcnWHJ9Vz78J8KSecAdcqVJLItcP3KWFYokYQtJjV2fFkDdHlcm9voA53cmAUtxMpQb6QaFpmTdu9TlzhiaRxN1SyjMbSh8Cn2axpoJGVj4ckyYdHnuDQzSE8kqetChfT137DQmj1Zy%2Bq9TCzK0cV%2FG8vauSPTBdoHeHSk1xZtTJDLvI&X-Amz-Signature=f40fbfcbf1ec5edeb2cba8aba7e17026b6280f889bdb6fdcbeb8b46f74babdef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHSH72T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGmd87MTUEDWvWBJRcxcvLauReFEZLSoXefS7X%2F%2Bv6KAiA%2B1QIvYSlX26VXQjpXLzdT5xFVgwQwCI%2BsHVknlv%2FSGCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLnxE3G4UNmISAA3hKtwDfcaofdFHAJEa0U9UBjUWajL2STMoswMVwRvlBgeJu1sLwN2KY0kYyzmyTQVqhoBJBM5mk%2Bh9VIO0EtpVNEt3He13LWpJBejMvUjUssf29lTMzjZcyBU3eh6vPoxvCixx8L1TpW16UOI8O5akIJRzfXykL4r2XD2HzEzVUVJF4dBEqIpCQGzM45BV4gX%2BS%2FOfmdG0TznyqPPn9pmczJ4sBKgh8T33izGKAYGWnf0ap4URZlY4x8Rtd1%2FebRNvYV2NosCPK8XkK8N%2BTUfUBqC0EWWan29Hh%2BQDnhf8r5l9cJKdd6iahnjkqTXqRlKV9dgXOHNkBZo%2BL7XxQgJp5B6nEI3RA6HpjmDOWRfzudWHjRAt1fWtCYaCdK4GGPvitvWeWAvfF5tpv0MiEorAOihhUM5HVj8eeOjAKQnYMtlkYx6HuQq0jjuqo93IZO6oKpt9GnNl96bnxlVHaUGKkJ82kvwaUog3WXCHoP9M8MYvJVIJapq9Tilsbc1yAmzhgOCYFvyyTFSbQoDkAvTGwumHAq9QsoQItcJywkn%2BCr26g8dDtXTMm0lc7dihAIQaWSXAWmgnXqhpjxjAxFjGJ9NaBepyeYZKOhR7Uxr%2BdAQ%2Fn4eysxHOENaP0NeFhEgw5KbQyQY6pgGAiuousrSf4oQ5iB%2FAIZANrplZ41ArO7hjgr%2BeO6vQAXVdZcnWHJ9Vz78J8KSecAdcqVJLItcP3KWFYokYQtJjV2fFkDdHlcm9voA53cmAUtxMpQb6QaFpmTdu9TlzhiaRxN1SyjMbSh8Cn2axpoJGVj4ckyYdHnuDQzSE8kqetChfT137DQmj1Zy%2Bq9TCzK0cV%2FG8vauSPTBdoHeHSk1xZtTJDLvI&X-Amz-Signature=070adcd80815025c5b843bc96b662c1d22cb28a375dffea2d45a2c278fbb7e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
