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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYOJAG5W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FWH%2FVfId5gjOFWOIntiqBriyQjNYb%2BrKgDugDEypIIgIhAI5GY3gq9R4ilXNkQ8BIbWI4%2Fa12%2FqCH60LIsTFwKQ9qKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLV%2F%2FvhGUu2UMnYAUq3AMJt1bfaVArKwPcuYd2yXcPGrNKP6Dhiqf9KdHw%2Bup%2FEe1zwN5z66FyMN1cG%2Bu%2BPLArluULTtBKvS50Bwg%2Fs%2BNSLsG0wgDnwPvu9fxYBgD36Dg5MEdSdFHXtVbFMJm5EDQL136LvJ8%2FysiVXM0%2BnOQYS04WivSOnRo1TQ9nTDST4TJvcCiiHVhDIJ3ZXxz%2BFKyTRxSCnDGkXTc9mW1uqLWNt1LKvcJvJPNXbmGn8eA6dCLGvTyyM17gB3732Cf%2FyOdxn5F1IYsPYt2sQ9jRbTWf8DssCDGwgpFeVzhUKZBsKP6KGtbInaL1G4lF9b%2FqQF8BhPzYa9lVvdE0WArEQZ7ticVNVROmSJOJIEZaYxsveyNqnrKHr0HHf4yqy3%2FSP5Ks6g7EnfQTXLrlwWWzu1bPCv5VMux79UqJGDc45kVBVNrVKpGGVUP5nowY%2FKyKL8BBK%2FvQDxTvKDVLMTD5scxED8uuCUbCxYjflQ2ke6Em5WS0iNcYlU9cjcA5A3WYKfg5gOVck75oNqFVcDDrBjSQ2CyHZ%2FyfAjxiTqb2Eu%2B8XxZoOrqYjHYzIIQUhZsFGvk6d5%2BOsv8afjRhcr6zGd1vwfrSbq0OTJXqxBgFrUT2D5NzjWqH%2FqNiiIW5fzCfmdXJBjqkAUAqe6H3d5pu8YfLNfnA6%2FIAsxNT1g0trjxBnLCOYvOHnGbLwWSUpZlfy9ai5Y71ZPPURBai2cMyMlQ%2BMHdrj%2BBs06YD7ujMSQVHi9jAIpGfaJRTKCluWg4O2uaYg9zBQpSKcf%2FRFBNn3peFtBwpByk5BAEU3wYl4v1praP82LKFUpTEwaYJdyy7kk8mZ5BYcvlYxZ9AO9bmMKG9TzW%2Bdro9WqWY&X-Amz-Signature=5091f2300a494dfc9ad7223174289b1e847ab3a922a5113cce48e271e029aa02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYOJAG5W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FWH%2FVfId5gjOFWOIntiqBriyQjNYb%2BrKgDugDEypIIgIhAI5GY3gq9R4ilXNkQ8BIbWI4%2Fa12%2FqCH60LIsTFwKQ9qKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLV%2F%2FvhGUu2UMnYAUq3AMJt1bfaVArKwPcuYd2yXcPGrNKP6Dhiqf9KdHw%2Bup%2FEe1zwN5z66FyMN1cG%2Bu%2BPLArluULTtBKvS50Bwg%2Fs%2BNSLsG0wgDnwPvu9fxYBgD36Dg5MEdSdFHXtVbFMJm5EDQL136LvJ8%2FysiVXM0%2BnOQYS04WivSOnRo1TQ9nTDST4TJvcCiiHVhDIJ3ZXxz%2BFKyTRxSCnDGkXTc9mW1uqLWNt1LKvcJvJPNXbmGn8eA6dCLGvTyyM17gB3732Cf%2FyOdxn5F1IYsPYt2sQ9jRbTWf8DssCDGwgpFeVzhUKZBsKP6KGtbInaL1G4lF9b%2FqQF8BhPzYa9lVvdE0WArEQZ7ticVNVROmSJOJIEZaYxsveyNqnrKHr0HHf4yqy3%2FSP5Ks6g7EnfQTXLrlwWWzu1bPCv5VMux79UqJGDc45kVBVNrVKpGGVUP5nowY%2FKyKL8BBK%2FvQDxTvKDVLMTD5scxED8uuCUbCxYjflQ2ke6Em5WS0iNcYlU9cjcA5A3WYKfg5gOVck75oNqFVcDDrBjSQ2CyHZ%2FyfAjxiTqb2Eu%2B8XxZoOrqYjHYzIIQUhZsFGvk6d5%2BOsv8afjRhcr6zGd1vwfrSbq0OTJXqxBgFrUT2D5NzjWqH%2FqNiiIW5fzCfmdXJBjqkAUAqe6H3d5pu8YfLNfnA6%2FIAsxNT1g0trjxBnLCOYvOHnGbLwWSUpZlfy9ai5Y71ZPPURBai2cMyMlQ%2BMHdrj%2BBs06YD7ujMSQVHi9jAIpGfaJRTKCluWg4O2uaYg9zBQpSKcf%2FRFBNn3peFtBwpByk5BAEU3wYl4v1praP82LKFUpTEwaYJdyy7kk8mZ5BYcvlYxZ9AO9bmMKG9TzW%2Bdro9WqWY&X-Amz-Signature=8fd7b2d45778cd8dbd3e157c38c9e52def0921185f2d37dd16917aed384686c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
