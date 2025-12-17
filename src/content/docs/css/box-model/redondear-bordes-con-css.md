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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWLWSUD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLnNs%2BbqR2dR9AeKSrfttAbs2AzwA%2FecG6c9ci2wkxYAiEAww9f14YZrUYuP3i2OPnqRvxo8x36LidNGzVWiS2ba9cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq0XywrT4E4qUcdTSrcA4yFoEWgzTFyEKAG0aYx3yNMfxA74jdBDcYmYIPSSL7qiwLaCZScy2qQgspzoC8ZSkc5MOfwdssHFYIkxylg64c5EmftHb%2BedJpj1fXoTVakIQQxD6OUI9OE3uXSxgMMo9LbfcstnMCyRfAsOt9cbri%2BrKOFa33smohBFAuE1sy7M7PUTXMV12q9IvTSidkOqhpFJUGusMzsOtBs%2BpM4lM6ieaGXb09EzZ40prKAzzbRTTCaA8s8kvfzMz0AoUZhg%2B9vkvuc1olNF7nTyxWbu%2FuivXUS8%2Fc%2B9hkGnS7LrCp2%2BnKcvosRNLBZOKpxXAxc482You31Kb6ODYViFlMnXnd6q2LqZk3QOoCGDFythTQWMm3U%2BVMQDBWuvMl0znxY5DIMVT%2FuOw4IxaDAKabk0OA6htDB4SWB9vGU%2BsdFoisO6iBgUpB83mMS0ZOF3CZvVL%2FotlGqEDV5t%2BY4s6kegjiaL2y8qRPKDy%2B0M%2BBSWEl63jhVHN5QHlc7DgQUUyqDlh1eCUNeuFTJFu4PoYxPgRfHGgHfzaKr9gpe6Mr49fkfCsMf4B37slcXGJyF8%2BbwkkKeX%2FU%2B33dTqMRdHhDMeUh4jKs7hC5igUr7IzpqppjB64tvhEz%2FqR3wKmiHMKmujMoGOqUBM6F7vssTxI1fX81A1InirTslmjV%2BqXN8vKyShOTgRuqIgxiQXol6bqgwzusX0l6PIx4hTNDZ7SgwM3Rsxy7tsryfd9JqJqvpWGhSsYwLDqSe3160%2BLyRYdzDLHhcLSZvAmTF99xsPe6p1pVbekZM2%2B8aMB8jlPHiJ24arSOwbheUbDBBEiuTVQUsGRAwHqUqUCLmxBOyJddkyoNP%2FE8i2wPUBLkC&X-Amz-Signature=baacf9d918591c6e40a25266f0cf7562cd4f6219de43d00739af903af26b68dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWLWSUD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLnNs%2BbqR2dR9AeKSrfttAbs2AzwA%2FecG6c9ci2wkxYAiEAww9f14YZrUYuP3i2OPnqRvxo8x36LidNGzVWiS2ba9cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq0XywrT4E4qUcdTSrcA4yFoEWgzTFyEKAG0aYx3yNMfxA74jdBDcYmYIPSSL7qiwLaCZScy2qQgspzoC8ZSkc5MOfwdssHFYIkxylg64c5EmftHb%2BedJpj1fXoTVakIQQxD6OUI9OE3uXSxgMMo9LbfcstnMCyRfAsOt9cbri%2BrKOFa33smohBFAuE1sy7M7PUTXMV12q9IvTSidkOqhpFJUGusMzsOtBs%2BpM4lM6ieaGXb09EzZ40prKAzzbRTTCaA8s8kvfzMz0AoUZhg%2B9vkvuc1olNF7nTyxWbu%2FuivXUS8%2Fc%2B9hkGnS7LrCp2%2BnKcvosRNLBZOKpxXAxc482You31Kb6ODYViFlMnXnd6q2LqZk3QOoCGDFythTQWMm3U%2BVMQDBWuvMl0znxY5DIMVT%2FuOw4IxaDAKabk0OA6htDB4SWB9vGU%2BsdFoisO6iBgUpB83mMS0ZOF3CZvVL%2FotlGqEDV5t%2BY4s6kegjiaL2y8qRPKDy%2B0M%2BBSWEl63jhVHN5QHlc7DgQUUyqDlh1eCUNeuFTJFu4PoYxPgRfHGgHfzaKr9gpe6Mr49fkfCsMf4B37slcXGJyF8%2BbwkkKeX%2FU%2B33dTqMRdHhDMeUh4jKs7hC5igUr7IzpqppjB64tvhEz%2FqR3wKmiHMKmujMoGOqUBM6F7vssTxI1fX81A1InirTslmjV%2BqXN8vKyShOTgRuqIgxiQXol6bqgwzusX0l6PIx4hTNDZ7SgwM3Rsxy7tsryfd9JqJqvpWGhSsYwLDqSe3160%2BLyRYdzDLHhcLSZvAmTF99xsPe6p1pVbekZM2%2B8aMB8jlPHiJ24arSOwbheUbDBBEiuTVQUsGRAwHqUqUCLmxBOyJddkyoNP%2FE8i2wPUBLkC&X-Amz-Signature=a92a022f4beadbe016951dd848db878672cbaa2cde20ab5dbff6444e0dfbf17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
