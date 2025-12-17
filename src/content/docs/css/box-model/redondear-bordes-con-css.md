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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3TOABT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7LcgGvNFSKKBwW%2FukqtWq9gXZfjWaNrQ8QnIg7kYCugIhAOV4SJ2X8UEfN5Ko%2F%2BJDIvihM1p6C6rk%2FeW2JYX2sQ8%2FKv8DCHoQABoMNjM3NDIzMTgzODA1IgxGrdYrdT6z2NbA%2Fb8q3ANbTEEwhCbY2P6ne07tri33iCkn6LMRgm%2FT%2FHZNNSmI8n0STxFsgugkGl9eBf9gSy5N6isu9QyfX90LIJgxBeCx7noEZmukXDfQXJDTgjiMnVzca7ntXQGuL5zvwQnktwRyBB9uX%2FmdF8qpUeBmLAwCDCXkoMcUcYUQr%2BMa48OpCr8%2BLD%2F4An8TTxZDUbtn8QOhK%2BLIpCT7rCFYi%2BqEy8%2BknZ59H9KVa%2BdNv6ASwPYV27%2BY9kXfD3ucQgr%2F5nwo4YzTnLNHxyT6JLreOkwiYHJbwM8qq2borzflePoRgyLetBgKn%2FVxjLs0GniWYnylhreUnK3WIipP50sxigaCeQzIHp2nhRtPXiuNiFdG8TaZibnmjBXfvhT7oe69Ufi6DQ0OUfN%2FqDRv3Sa05ESw8YqLL%2FncwFENMzg10kEu9xG%2BSMHCFAiREvccGeA3Jdcf0agq9GM2K%2BzihXXcCdMzmtO8UvjAzT6BQ5lw4cOIMbWzDhMKKb1VnhYCSbaTsG6syPLGLCTzlrXZqIAVB%2BuSS3rKIrmxcukdhokHCfHaJhxLrYZ%2FGcDZ77Wh2E9INTUDZSC2N5rn20mYnkbyjGkWn7X2Ea3igqReqbTC5kLeb4gRIkiZaxv3%2FKDXQkmkRDDh0onKBjqkAcjT9%2BONNWK7k7gjYxx1fon6Z4huYH69ryYEUdGIG3TDB%2Fc5WE5T1AQ3DrgdbyUs%2F7yTde5UFdBv4okXIBDc1TjUVXq7hKZidK1zEAPoh8yhvb8Eb2C98bK%2BXA6lIrVHYhdwzzm9Wn7kHIQECYQiqur357zG0fHa4XnIMwqYlQ6RSFfvtiC%2FZqu3r9bsA%2FVTH%2FyWEAMvRsIOpYTH58a3fVmsiL3Y&X-Amz-Signature=71567025a4e881883f10164017f19dd556c61c4a4ff50184407033d3f390e279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3TOABT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7LcgGvNFSKKBwW%2FukqtWq9gXZfjWaNrQ8QnIg7kYCugIhAOV4SJ2X8UEfN5Ko%2F%2BJDIvihM1p6C6rk%2FeW2JYX2sQ8%2FKv8DCHoQABoMNjM3NDIzMTgzODA1IgxGrdYrdT6z2NbA%2Fb8q3ANbTEEwhCbY2P6ne07tri33iCkn6LMRgm%2FT%2FHZNNSmI8n0STxFsgugkGl9eBf9gSy5N6isu9QyfX90LIJgxBeCx7noEZmukXDfQXJDTgjiMnVzca7ntXQGuL5zvwQnktwRyBB9uX%2FmdF8qpUeBmLAwCDCXkoMcUcYUQr%2BMa48OpCr8%2BLD%2F4An8TTxZDUbtn8QOhK%2BLIpCT7rCFYi%2BqEy8%2BknZ59H9KVa%2BdNv6ASwPYV27%2BY9kXfD3ucQgr%2F5nwo4YzTnLNHxyT6JLreOkwiYHJbwM8qq2borzflePoRgyLetBgKn%2FVxjLs0GniWYnylhreUnK3WIipP50sxigaCeQzIHp2nhRtPXiuNiFdG8TaZibnmjBXfvhT7oe69Ufi6DQ0OUfN%2FqDRv3Sa05ESw8YqLL%2FncwFENMzg10kEu9xG%2BSMHCFAiREvccGeA3Jdcf0agq9GM2K%2BzihXXcCdMzmtO8UvjAzT6BQ5lw4cOIMbWzDhMKKb1VnhYCSbaTsG6syPLGLCTzlrXZqIAVB%2BuSS3rKIrmxcukdhokHCfHaJhxLrYZ%2FGcDZ77Wh2E9INTUDZSC2N5rn20mYnkbyjGkWn7X2Ea3igqReqbTC5kLeb4gRIkiZaxv3%2FKDXQkmkRDDh0onKBjqkAcjT9%2BONNWK7k7gjYxx1fon6Z4huYH69ryYEUdGIG3TDB%2Fc5WE5T1AQ3DrgdbyUs%2F7yTde5UFdBv4okXIBDc1TjUVXq7hKZidK1zEAPoh8yhvb8Eb2C98bK%2BXA6lIrVHYhdwzzm9Wn7kHIQECYQiqur357zG0fHa4XnIMwqYlQ6RSFfvtiC%2FZqu3r9bsA%2FVTH%2FyWEAMvRsIOpYTH58a3fVmsiL3Y&X-Amz-Signature=6eba91676fc2ede536b1bef42d18cf5eb33fade075df58635e6e9c51746a1178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
