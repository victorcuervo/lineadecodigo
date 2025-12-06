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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675R5SIC5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR59Tof4lLtr%2FU6CTBJdvhzguDFUN5PlnFvqSkdVDoWAiEAkk%2BIaFeYDeAaoyLJf6SHEBBAI%2FWFDylfZhokmkwbLYYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMoA1ApA6lMfx94GwSrcAxhtLKOq3isd1RtfjbPLZL%2FnLgzAw5w4w8yqBXP8HNR8aMrVo32kxeXXnslJ5rez%2BTAl9sn20T3V70rRpIzxYDSs%2FuK%2FACTNaNtZ2hOOR9DtTOi9oehr1wr%2F%2Fr9q8py4OLicGTcOJQsDZNKgsbERTBDeLR6U45he6tguzk44BE4SDuGmYlXe8RG%2ByJ%2BNByMw%2BloDbvU81t050ccqMky%2BS3nE3eOc2m0eXkqxnxGZe0m6Z7iaNJm6A1c6sX1BZDcR7ejv67NQVE2T9OJfveErqOWKGcvUC3nwepvifHXZ5%2FqZh5nrcCf0cDFjJ2OR2NsBJqvkhgKYZ9y1dClsKScJd6XAt6fSJ36aK1L8VT7ePIo7%2Bevxug5F%2FyZuI2c4V8xMui7H9xCn8tZswf3i77ypTDT4Ku3VEqLChfwReFBksd%2BDkWBXvlreZZHj67kjx1bFMVX1%2BeoN5kTOVzQwT1OA3t9Hi9cYOMV0Z87c2iOGcIowaOIBxslTAaDKhQ2kD3UcC6xkheQ05233eaacVAOUHrCXERxOdMPzuR3swpavhU%2B0QHD7I4DIg0hR5CM3bxF4QSfCjN7hgNp1Ao75ERQE%2BLZON1EyXpdrfJzYSLI0pxJyr6j6h4G9HThpk%2FBMMKjDzskGOqUB02N%2FE0OSyN3c0vZmT4OcdurBuU2chxRtuH78HE%2BnfJOhorjZoJBbCjgikL2v6IU7g%2BOn0XxBCPNfyE249JXv2rbEj1msydHMUHjyVQYQ%2FH%2FUI4r2kc5g0B6c1XD1MpY8qalpHYGmDR%2FDFsrdfakIyx05rrFmT9e0mHfsPh1O%2F5r1p1znor%2BDUrP9nOmA6%2Fq5%2FofD3aaZefuRTEVdBcps1JRGevnJ&X-Amz-Signature=22f442bd16dae59f43861ea75c439803faf84b2fb4609757a57fd3067f28c9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675R5SIC5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR59Tof4lLtr%2FU6CTBJdvhzguDFUN5PlnFvqSkdVDoWAiEAkk%2BIaFeYDeAaoyLJf6SHEBBAI%2FWFDylfZhokmkwbLYYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMoA1ApA6lMfx94GwSrcAxhtLKOq3isd1RtfjbPLZL%2FnLgzAw5w4w8yqBXP8HNR8aMrVo32kxeXXnslJ5rez%2BTAl9sn20T3V70rRpIzxYDSs%2FuK%2FACTNaNtZ2hOOR9DtTOi9oehr1wr%2F%2Fr9q8py4OLicGTcOJQsDZNKgsbERTBDeLR6U45he6tguzk44BE4SDuGmYlXe8RG%2ByJ%2BNByMw%2BloDbvU81t050ccqMky%2BS3nE3eOc2m0eXkqxnxGZe0m6Z7iaNJm6A1c6sX1BZDcR7ejv67NQVE2T9OJfveErqOWKGcvUC3nwepvifHXZ5%2FqZh5nrcCf0cDFjJ2OR2NsBJqvkhgKYZ9y1dClsKScJd6XAt6fSJ36aK1L8VT7ePIo7%2Bevxug5F%2FyZuI2c4V8xMui7H9xCn8tZswf3i77ypTDT4Ku3VEqLChfwReFBksd%2BDkWBXvlreZZHj67kjx1bFMVX1%2BeoN5kTOVzQwT1OA3t9Hi9cYOMV0Z87c2iOGcIowaOIBxslTAaDKhQ2kD3UcC6xkheQ05233eaacVAOUHrCXERxOdMPzuR3swpavhU%2B0QHD7I4DIg0hR5CM3bxF4QSfCjN7hgNp1Ao75ERQE%2BLZON1EyXpdrfJzYSLI0pxJyr6j6h4G9HThpk%2FBMMKjDzskGOqUB02N%2FE0OSyN3c0vZmT4OcdurBuU2chxRtuH78HE%2BnfJOhorjZoJBbCjgikL2v6IU7g%2BOn0XxBCPNfyE249JXv2rbEj1msydHMUHjyVQYQ%2FH%2FUI4r2kc5g0B6c1XD1MpY8qalpHYGmDR%2FDFsrdfakIyx05rrFmT9e0mHfsPh1O%2F5r1p1znor%2BDUrP9nOmA6%2Fq5%2FofD3aaZefuRTEVdBcps1JRGevnJ&X-Amz-Signature=e129c833ca0a3b16b7b851ab13dd7aea3604de8cf41b18f9a06da953cdf94c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
