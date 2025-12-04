---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRET2FG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDR8cbTX3fksFz%2F7E%2BKToUIi3XgRCDlvFMtC56BT0iwAwIhAODCJIRByzph7yC8STDWe3PeXrQbH4a9ZP82ddpmMx%2ByKv8DCEMQABoMNjM3NDIzMTgzODA1IgxRHtj%2B%2FKbQg3rAcNQq3AOA58bzCNx9tFK%2B1KB%2FZxksjkuzMfV9RgGPy9cmLk31qnDYTV5KaHJgkRFdu8uuiv9ix9wj1xjwEzs5DYho%2BijpgTNkid1HNotstcNzF3kDXQSdE3tyk0OK65NEPL7WJk6ZCJH0fGmjZ9Uo0PZs8T2d%2FQAsKD0VsW8H0tyC62WQnf69OffuialcFYVqCQ9U5SaAFrvHmYJbIamq1toIgqr4339xjUBNt%2Bw5vSDF5NVchfmS0q7tXlWYGBPb9AOKagL2a%2FR8i5CIIXuGtTYZlC3GoL%2Bdbq1yeweEMOdrIwCfZ2C6e4AMSYsE7yMqSYv81mVXPuiwj9PpxpmriRIhEbNN8ytHa%2F4DPf3zVZ0ECWZfy8ZIcaiGS%2FT59i5sfhCXGluRcXGMnPSur1Ph00kIjAee7HqsF8PpkgMaIvyyy%2FR%2Fhk1zJwX4RIUkHu24XN%2BiHLJrKzmSBbHN1J0RGws9RYz%2F2o8NR766Fs0OmLm43JWTzQRqyPdzVnMOrt8pm1xEHhxauKvsjG%2B5Jcg7w7rhEGzYR6kHU3I8elM8f2hj8EKvuGFoQMZyv82%2BlEZbIwY8%2FTVQoBSLNvQlXIJO6sfhvU6xn8%2FCc9RDuYjnZMsh35FW3pf6K%2BU6FvP%2BYx4FNjD3qsXJBjqkAaWIYI%2FluN3ksFlSW%2BWATLcM4yIHi%2BdXA17BIpoe6Ast0nqzdrRWGa4SV0end8LqYE89H7sdTHNlNisEHdAjTunTwd%2BFdE7KMyLM7nR3Y3j3xdADZgifkPvmuLBrbfriykUHJwoLfbLdfatIiagSAFzeq9s2xK06sT4QVVvMRlwFul9yuNymPrmwgL6bnoaFv3v0btIQrJOLDvY7JXjvKfEbswW4&X-Amz-Signature=a84594fc03face63fc82fe0bdbd3402a3fd39bc5204931953975876ce7069b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRET2FG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDR8cbTX3fksFz%2F7E%2BKToUIi3XgRCDlvFMtC56BT0iwAwIhAODCJIRByzph7yC8STDWe3PeXrQbH4a9ZP82ddpmMx%2ByKv8DCEMQABoMNjM3NDIzMTgzODA1IgxRHtj%2B%2FKbQg3rAcNQq3AOA58bzCNx9tFK%2B1KB%2FZxksjkuzMfV9RgGPy9cmLk31qnDYTV5KaHJgkRFdu8uuiv9ix9wj1xjwEzs5DYho%2BijpgTNkid1HNotstcNzF3kDXQSdE3tyk0OK65NEPL7WJk6ZCJH0fGmjZ9Uo0PZs8T2d%2FQAsKD0VsW8H0tyC62WQnf69OffuialcFYVqCQ9U5SaAFrvHmYJbIamq1toIgqr4339xjUBNt%2Bw5vSDF5NVchfmS0q7tXlWYGBPb9AOKagL2a%2FR8i5CIIXuGtTYZlC3GoL%2Bdbq1yeweEMOdrIwCfZ2C6e4AMSYsE7yMqSYv81mVXPuiwj9PpxpmriRIhEbNN8ytHa%2F4DPf3zVZ0ECWZfy8ZIcaiGS%2FT59i5sfhCXGluRcXGMnPSur1Ph00kIjAee7HqsF8PpkgMaIvyyy%2FR%2Fhk1zJwX4RIUkHu24XN%2BiHLJrKzmSBbHN1J0RGws9RYz%2F2o8NR766Fs0OmLm43JWTzQRqyPdzVnMOrt8pm1xEHhxauKvsjG%2B5Jcg7w7rhEGzYR6kHU3I8elM8f2hj8EKvuGFoQMZyv82%2BlEZbIwY8%2FTVQoBSLNvQlXIJO6sfhvU6xn8%2FCc9RDuYjnZMsh35FW3pf6K%2BU6FvP%2BYx4FNjD3qsXJBjqkAaWIYI%2FluN3ksFlSW%2BWATLcM4yIHi%2BdXA17BIpoe6Ast0nqzdrRWGa4SV0end8LqYE89H7sdTHNlNisEHdAjTunTwd%2BFdE7KMyLM7nR3Y3j3xdADZgifkPvmuLBrbfriykUHJwoLfbLdfatIiagSAFzeq9s2xK06sT4QVVvMRlwFul9yuNymPrmwgL6bnoaFv3v0btIQrJOLDvY7JXjvKfEbswW4&X-Amz-Signature=7a14103cbbad62a41e47b7feaa3e89f48124ee2689960173b5e124f085c1cb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
