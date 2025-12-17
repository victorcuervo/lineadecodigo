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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLAMH3M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzMcQ%2B8hO3zqsemiDwe1YalHMXU2ang1ntr8P38AIh3AiEAl6jTB4LRyM3tzQ0nvB2AB3c%2B77R8mBIv5gKVkV6oKU4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBxFswvXqOS%2F6glpRCrcA8XKpuxMd8%2FdqI1%2Fm3hLcd2ezbyHXpBfxsdqEby4uPOTtuFLSS3FFg3BJej4GbziFw1IERBhReWHO20bRfwT%2F7PoGZYMAnPoUIvF2kjhFR2hG29yH7b7BDRzfBYAWLvCdMucjkAB3%2FAJxOz5o4lsihj8Oljqc2HrFD0Cds2x8mxp8jcG7rpaSxpt%2BoiXy5Af59mu3iHvqzGsBFULeojqUO6xVG4NyPM%2FOj7CiwR4aK47IeXLtzqY6Sk3JnyboYOe5doagRMhuK8DwL50%2B9UE4q4ivVqmh43DR%2Fz1za03CoeyuGEMMXsGD8I8JIaTAK8uLy4zP%2FGzMvO9yyWU9W%2BHzrUn%2BQmFRLrDOCPQQZadUTNGX2KcCMkF8MOMWhny6otIeQKxz2bOQWofnAGHEK2ra4YYVecyIRI78WSXEuaIpDuk1Ox3ER5FpuxZZX2FxI7ewGOAFJLPh9sgn9m4gZQmNfY4N9OhTgk8F6s38CPd8oes%2FjH7Rc6z04Y22T9WexJvEG4sfOKWIPIgvZU%2B6vZFnhEuXOPQ3f%2FIJzCMkTve5WP4gvGWbsBMtU943ggIpNVV4paUgLVWPGn2l0M9bRQwrZXypMJ6DjBhaKDh8BbKh2j8IxjQH9aq%2FZkQuBXuMObGisoGOqUBWpbXzqdpACZoWvPE8InW06%2BDWd1qR4jCPqjS0qWr4kRDq1H2MkoZ6Kgd3gL8zyZdFGIaJABvWKpDx7RtDR2ZzMfcxqMErpZk5oUfjBAHiM3wKgAGkFkLTRrP8XxUAzAK6yhCklCEteCLRYfWJO00anP%2BuaicuN%2BxingQvHm1lnZLy5AZO2CjpVN1cxCr8DA7DEYfFU%2BiffouyJi7bVoM4n3ureKn&X-Amz-Signature=377fae167230266abe11c4d1cd4c1c17d0808ba61da39df1c8bc8934c104044d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLAMH3M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzMcQ%2B8hO3zqsemiDwe1YalHMXU2ang1ntr8P38AIh3AiEAl6jTB4LRyM3tzQ0nvB2AB3c%2B77R8mBIv5gKVkV6oKU4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBxFswvXqOS%2F6glpRCrcA8XKpuxMd8%2FdqI1%2Fm3hLcd2ezbyHXpBfxsdqEby4uPOTtuFLSS3FFg3BJej4GbziFw1IERBhReWHO20bRfwT%2F7PoGZYMAnPoUIvF2kjhFR2hG29yH7b7BDRzfBYAWLvCdMucjkAB3%2FAJxOz5o4lsihj8Oljqc2HrFD0Cds2x8mxp8jcG7rpaSxpt%2BoiXy5Af59mu3iHvqzGsBFULeojqUO6xVG4NyPM%2FOj7CiwR4aK47IeXLtzqY6Sk3JnyboYOe5doagRMhuK8DwL50%2B9UE4q4ivVqmh43DR%2Fz1za03CoeyuGEMMXsGD8I8JIaTAK8uLy4zP%2FGzMvO9yyWU9W%2BHzrUn%2BQmFRLrDOCPQQZadUTNGX2KcCMkF8MOMWhny6otIeQKxz2bOQWofnAGHEK2ra4YYVecyIRI78WSXEuaIpDuk1Ox3ER5FpuxZZX2FxI7ewGOAFJLPh9sgn9m4gZQmNfY4N9OhTgk8F6s38CPd8oes%2FjH7Rc6z04Y22T9WexJvEG4sfOKWIPIgvZU%2B6vZFnhEuXOPQ3f%2FIJzCMkTve5WP4gvGWbsBMtU943ggIpNVV4paUgLVWPGn2l0M9bRQwrZXypMJ6DjBhaKDh8BbKh2j8IxjQH9aq%2FZkQuBXuMObGisoGOqUBWpbXzqdpACZoWvPE8InW06%2BDWd1qR4jCPqjS0qWr4kRDq1H2MkoZ6Kgd3gL8zyZdFGIaJABvWKpDx7RtDR2ZzMfcxqMErpZk5oUfjBAHiM3wKgAGkFkLTRrP8XxUAzAK6yhCklCEteCLRYfWJO00anP%2BuaicuN%2BxingQvHm1lnZLy5AZO2CjpVN1cxCr8DA7DEYfFU%2BiffouyJi7bVoM4n3ureKn&X-Amz-Signature=2d48b63d0b1322ccb9c012fec50905056da1e24990589d99d63b033fc1271437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
