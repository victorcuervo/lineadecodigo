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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5PYLA7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjUkScoypX%2BS%2FoqKxP1Bj1dQYmofTlJfQC%2F1Fea11zUAIhALnmL%2F7fqiBu5FNNRpwaPQr3aBC1lyTsaWM3NtjZrSyIKv8DCHoQABoMNjM3NDIzMTgzODA1Igzrl42EMaxtr87gvxUq3AM5b4dqPFC3tL5cLqtJ0jvP44CWwR%2BD%2BBtXzY1JYGPQSiJvllfcjrJMdbKH33BOUItAmInUEAwwqFtvLxNGObj0qpFQ6gtmqteGdGQS2zHOo2QJZdJHMx64ItFL6EsV8txVVB%2BrPTVZfvMphkrmXNVI9G4Q9Cpu4P1XDHWeaUfeVUBwZmyrrqlkosWjWO3G%2FtOvOxkrNITyItzD1rEIehhEmF5HUsIJTxTEyIo6drh6bkreHXrHoU1B4MlYCrRFvi9Gs%2F1FNhImHNVLfkDWFIdK1s3eu%2Fh2VZ7f6ofOVmF8qiD90f5YnDeHdnjfg67pDnH39cl4hU4S6WHKH5vX12lUq73w3cyLdfTiwwAqo5f5OBBfyEhZ5xx7LnEHPW%2Bl8%2BY1uUZy2Lu1FggcNrd5vn9OOngwRxG03WBrqozHzrC6lsNUocIJG2T5irVaOPjnIjBp8YH3P0sH33yZQqmZR97WgEhF4y1OYKD%2BCDtn7qlgZE9Tmpe7sLmitSZQT%2Bhu7Yz7rJmSYlp3Fwut%2BaR%2BPPQnTiQMtZEjvhrf0Pqs94BXsWEou9SAj%2FuI7WCnu6eqGf4vt4Y7l%2B7CxBSkAvqQK0ywVHd4uoi1J%2FLGT2%2BFGEqJOHcksVT%2BRoDcQue3VTD2w9HJBjqkAdZoNtKo0yqLKUSG%2BCiiGMI%2BkPoH66LdZcnWvz9rPYBgu2Qt3iyIkpvAoKZRBe9eQiEIooOhpwJd3NhpAu%2B9ACIGESxP55DSjNbyEtUHt%2BpBDkDLHFQB3BV68cK7i1H6SQCKr%2B6bNXMEnQCFWign%2Bx9CnEW7rKFgEMBG%2FEiDHCxfhHsXIzR3MKEy4Y%2FgLKntZ5sjKCd7jzflcdPK8g4txwaY%2B32l&X-Amz-Signature=95ff2a01b39e6c95290cea404d77494318dd97f379f30c5dba9b50a93e95920f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5PYLA7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjUkScoypX%2BS%2FoqKxP1Bj1dQYmofTlJfQC%2F1Fea11zUAIhALnmL%2F7fqiBu5FNNRpwaPQr3aBC1lyTsaWM3NtjZrSyIKv8DCHoQABoMNjM3NDIzMTgzODA1Igzrl42EMaxtr87gvxUq3AM5b4dqPFC3tL5cLqtJ0jvP44CWwR%2BD%2BBtXzY1JYGPQSiJvllfcjrJMdbKH33BOUItAmInUEAwwqFtvLxNGObj0qpFQ6gtmqteGdGQS2zHOo2QJZdJHMx64ItFL6EsV8txVVB%2BrPTVZfvMphkrmXNVI9G4Q9Cpu4P1XDHWeaUfeVUBwZmyrrqlkosWjWO3G%2FtOvOxkrNITyItzD1rEIehhEmF5HUsIJTxTEyIo6drh6bkreHXrHoU1B4MlYCrRFvi9Gs%2F1FNhImHNVLfkDWFIdK1s3eu%2Fh2VZ7f6ofOVmF8qiD90f5YnDeHdnjfg67pDnH39cl4hU4S6WHKH5vX12lUq73w3cyLdfTiwwAqo5f5OBBfyEhZ5xx7LnEHPW%2Bl8%2BY1uUZy2Lu1FggcNrd5vn9OOngwRxG03WBrqozHzrC6lsNUocIJG2T5irVaOPjnIjBp8YH3P0sH33yZQqmZR97WgEhF4y1OYKD%2BCDtn7qlgZE9Tmpe7sLmitSZQT%2Bhu7Yz7rJmSYlp3Fwut%2BaR%2BPPQnTiQMtZEjvhrf0Pqs94BXsWEou9SAj%2FuI7WCnu6eqGf4vt4Y7l%2B7CxBSkAvqQK0ywVHd4uoi1J%2FLGT2%2BFGEqJOHcksVT%2BRoDcQue3VTD2w9HJBjqkAdZoNtKo0yqLKUSG%2BCiiGMI%2BkPoH66LdZcnWvz9rPYBgu2Qt3iyIkpvAoKZRBe9eQiEIooOhpwJd3NhpAu%2B9ACIGESxP55DSjNbyEtUHt%2BpBDkDLHFQB3BV68cK7i1H6SQCKr%2B6bNXMEnQCFWign%2Bx9CnEW7rKFgEMBG%2FEiDHCxfhHsXIzR3MKEy4Y%2FgLKntZ5sjKCd7jzflcdPK8g4txwaY%2B32l&X-Amz-Signature=a29f188c164349538d20a7f957166b1e4e02c566404916b5fdffb3265759a391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
