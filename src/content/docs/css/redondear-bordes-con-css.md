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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVRUKVMT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwyIKK9fONrvgvWR0vmYvkHfU9TlRfe2FbtPm8Sko6RAiA6KdH8lgT04eXHg3YFw%2BiPihTKnHyrob4jP4C1a6gjZiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMximIh5oYlVp5P0IOKtwDdr0MWTBfFSZXF76eG5Gx66ZOoQDfTHHEIhKvNaEVkocqcbomLWa6F0vUhCU1Fca8O1%2FyxwABIX%2BeDj6Zfxnl5gK1Qp1gfdkHJb7esHoTIwAr0yDzETEXOAjv9jgpNVNlN40vKcQHalNGJdfC1TFKWdidkQpHOpR1bIIASFHPdmI9Ez2d2ltpnOak%2FdYOqzU0gHmlpoP9R54q4m%2FukENULTIM4vL%2F0oMjrXMcjnubNsKUXk5r3MNsMX1NpCZVIjwQ04gmL20FDFZakuPKyBr5Wv8cEaWoZ3WNQy3tGFa%2B3XHR2lbW5pu0DgnRR6n0wgjkNIpbjfTFJtDlPwT8n%2FYv%2FNLl40Q3BiURS8FclPElQPKZlVWmxrMsA1xeW%2BkSfMDDpKcNY3MwjkkUJZwrNfJGhvernaefQswH3QEtXrZXGMzB1fNy7P%2BZdqW0TzP6VQMzIVx1j41hJDary%2Boh6YRB0I48V049dVTsskk2Kr%2FzXA7P9y1Y2lmAR4AXVtA%2B65dt1BTkkkkYGh0PoBNZoC%2FJOQJeBRH5JRpkgJ%2BAvq7X4xy%2Fbwyz5EO5%2BnF4SzzpMqDjytdf77TJNutrVe8zZ3eH8zA9PCC6tRP6jm%2Fnzo3HCkSoAqlB8lWtlEFOEFowtq7eyQY6pgHZx2FCbssDKVOvg1NcWGhbwFqXyNTQRq%2B5KBlniRyd6pjfAqf6litpS3zcY%2BXTu8qmitBjxW8gTl%2F%2BP44HOI7jyh1gQtMDRXJWL5QXBZ695qJYupI1bYdLi8IZAuVf70MMwQ0swIm0%2B6A9r8O56x0onbvYmvNbfTFP12%2F9ymira%2Bmxq5W0Zwp28N1A1EEHxbTLoJcIHHHTZgYW%2FwQNEu%2FpP4bWz5dh&X-Amz-Signature=5c0785adc3c0b1e14bd1d6e21f25456666f8c45e3a292abf2c373403a3a70211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVRUKVMT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwyIKK9fONrvgvWR0vmYvkHfU9TlRfe2FbtPm8Sko6RAiA6KdH8lgT04eXHg3YFw%2BiPihTKnHyrob4jP4C1a6gjZiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMximIh5oYlVp5P0IOKtwDdr0MWTBfFSZXF76eG5Gx66ZOoQDfTHHEIhKvNaEVkocqcbomLWa6F0vUhCU1Fca8O1%2FyxwABIX%2BeDj6Zfxnl5gK1Qp1gfdkHJb7esHoTIwAr0yDzETEXOAjv9jgpNVNlN40vKcQHalNGJdfC1TFKWdidkQpHOpR1bIIASFHPdmI9Ez2d2ltpnOak%2FdYOqzU0gHmlpoP9R54q4m%2FukENULTIM4vL%2F0oMjrXMcjnubNsKUXk5r3MNsMX1NpCZVIjwQ04gmL20FDFZakuPKyBr5Wv8cEaWoZ3WNQy3tGFa%2B3XHR2lbW5pu0DgnRR6n0wgjkNIpbjfTFJtDlPwT8n%2FYv%2FNLl40Q3BiURS8FclPElQPKZlVWmxrMsA1xeW%2BkSfMDDpKcNY3MwjkkUJZwrNfJGhvernaefQswH3QEtXrZXGMzB1fNy7P%2BZdqW0TzP6VQMzIVx1j41hJDary%2Boh6YRB0I48V049dVTsskk2Kr%2FzXA7P9y1Y2lmAR4AXVtA%2B65dt1BTkkkkYGh0PoBNZoC%2FJOQJeBRH5JRpkgJ%2BAvq7X4xy%2Fbwyz5EO5%2BnF4SzzpMqDjytdf77TJNutrVe8zZ3eH8zA9PCC6tRP6jm%2Fnzo3HCkSoAqlB8lWtlEFOEFowtq7eyQY6pgHZx2FCbssDKVOvg1NcWGhbwFqXyNTQRq%2B5KBlniRyd6pjfAqf6litpS3zcY%2BXTu8qmitBjxW8gTl%2F%2BP44HOI7jyh1gQtMDRXJWL5QXBZ695qJYupI1bYdLi8IZAuVf70MMwQ0swIm0%2B6A9r8O56x0onbvYmvNbfTFP12%2F9ymira%2Bmxq5W0Zwp28N1A1EEHxbTLoJcIHHHTZgYW%2FwQNEu%2FpP4bWz5dh&X-Amz-Signature=c5b974a897328e184a2f5d8bac0ef4551c07a4cc49d9e8006fa38b0f812f8241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
