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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RUWPBO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiqyOd8V1AV3kBm85RoHHTtuuG%2B3jUn1z6gJxxT1K1zAiBX9R89D02inL0ZsuGlkCo9NGBwizSwXNjENb7fDotESCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0Q%2FtK9yCMk1GRme6KtwDXQsFaq%2B2IABjs4%2BkIg5R3O1AHz9EnLiB8sEko0o04HHxP6sEAO5Tzi71r0RCJJ4TY72C96Co3V7Jbczmzb53N81%2FWKgHG1bTduUM2a2y2GYT171cV1uEI4q0jK%2F9VzgPmcgXlZ%2BRfIm1AYjjaQPTe5R0nTpTuajzcVN%2FS9xWT%2F7Man%2BKdAMcw5CdDwbqtq1IT4T%2FM3BR%2FTVyzvj9h7%2Fo2Bnq68GAp2A51qqzskPR4Ih9BE2EDYmgUc%2BqfMtLFMyi9PDa2t2scwHUIR2h%2B2wgcSUxfTZhTqeZHiOyCHTFLapZY02TOOG9CPyoBIfSSfM4KOh6wS%2F1SJa8JFooCxll%2BJMrKvQTHXP1XSgjYZ%2Bso9dsXXhCjt%2BV7xcFRDVmNDq3MnonCl52%2FnJHOUED6h53EATANQR4xeb6r70jj56KflwoTveZF0o8Pj20zcrXQEiIWO5jjZtLfTz%2B9ZpbKJdccR94XNf67auSnCn8fzOb%2By8bETBWrQwx0CJwrjSybQn8duTLR9yU%2BV0aLzShppMD3XdnzTRIpTnoQCG4Q43gTUOA1sY5FWEg7YD5iArzTUe%2FjSB5JUlaxiOwqjXYyT4KUkmY0e6ZPupotFQKc%2B8yD9mxnv%2B%2FnjasApfJDPIwi%2BKKygY6pgG1IaxGvHA2JvHF%2BSPViRkK3hL%2BiQ6J%2BWphTuimEPkv5RgHK%2F6b%2Btvx7yeUgN9%2BFlF5Me%2FMZ0L%2FhPX1TdygIPS3OLxxKziSu6pIc3t2ZEJJxM62Mv%2B05yxDMLgX2UVnqttJGqI8NYLbU4nsSAUsV6ITYcQ3VHXW3M%2F4imqGDZrJquDZqa%2FU4WTDz4Sm1O26%2FFuqKI5YUNuQi7QoA0R1by8JbzM4myLI&X-Amz-Signature=95cce5a3279015b13c4fde55b9eb21fee2840670d0ccc2f3a795ebe4d8350551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RUWPBO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiqyOd8V1AV3kBm85RoHHTtuuG%2B3jUn1z6gJxxT1K1zAiBX9R89D02inL0ZsuGlkCo9NGBwizSwXNjENb7fDotESCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0Q%2FtK9yCMk1GRme6KtwDXQsFaq%2B2IABjs4%2BkIg5R3O1AHz9EnLiB8sEko0o04HHxP6sEAO5Tzi71r0RCJJ4TY72C96Co3V7Jbczmzb53N81%2FWKgHG1bTduUM2a2y2GYT171cV1uEI4q0jK%2F9VzgPmcgXlZ%2BRfIm1AYjjaQPTe5R0nTpTuajzcVN%2FS9xWT%2F7Man%2BKdAMcw5CdDwbqtq1IT4T%2FM3BR%2FTVyzvj9h7%2Fo2Bnq68GAp2A51qqzskPR4Ih9BE2EDYmgUc%2BqfMtLFMyi9PDa2t2scwHUIR2h%2B2wgcSUxfTZhTqeZHiOyCHTFLapZY02TOOG9CPyoBIfSSfM4KOh6wS%2F1SJa8JFooCxll%2BJMrKvQTHXP1XSgjYZ%2Bso9dsXXhCjt%2BV7xcFRDVmNDq3MnonCl52%2FnJHOUED6h53EATANQR4xeb6r70jj56KflwoTveZF0o8Pj20zcrXQEiIWO5jjZtLfTz%2B9ZpbKJdccR94XNf67auSnCn8fzOb%2By8bETBWrQwx0CJwrjSybQn8duTLR9yU%2BV0aLzShppMD3XdnzTRIpTnoQCG4Q43gTUOA1sY5FWEg7YD5iArzTUe%2FjSB5JUlaxiOwqjXYyT4KUkmY0e6ZPupotFQKc%2B8yD9mxnv%2B%2FnjasApfJDPIwi%2BKKygY6pgG1IaxGvHA2JvHF%2BSPViRkK3hL%2BiQ6J%2BWphTuimEPkv5RgHK%2F6b%2Btvx7yeUgN9%2BFlF5Me%2FMZ0L%2FhPX1TdygIPS3OLxxKziSu6pIc3t2ZEJJxM62Mv%2B05yxDMLgX2UVnqttJGqI8NYLbU4nsSAUsV6ITYcQ3VHXW3M%2F4imqGDZrJquDZqa%2FU4WTDz4Sm1O26%2FFuqKI5YUNuQi7QoA0R1by8JbzM4myLI&X-Amz-Signature=ff008c0f94d64f876aafa809c400a2fbeb2b343f902d9646c00d971d027ba2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
