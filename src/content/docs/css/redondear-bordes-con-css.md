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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSCPB5QT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcO8UVgEt1wtzmkycQFmo%2BB9o6lEzCxryexckvZDEnAAiAn6FWqGdmMwgbBUq%2Fp4tFd16KBlzV6wIwPqtbAXcymkiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRIasuVWQ3PAWBoMvKtwDuyEvqpDnDGu48Gh2jzSW7LCDnNZ%2BniBmffHgvGhx2bx4L5%2FJjdF2tGhqhSf5rIiLKG9S20oSJNBnOQE2uikXoX5FYW8ZhEPfsRueU9iMeCWpdcq2s%2FC75m5UzTin73t47289El4V8Q38PccIrUW5%2Bpiok5NlsNuKRzAIQg3l9GtImqUVIh%2BoQBuYRMFDLBZv4vTNQElgAGVkrk1zS8dYCJ4G6bNy0hoL6fA%2Bth7Von6sZEkKAASUT1bzgn%2BwOxkD7VQDov9kKw8wkhZ7QL8LKm64TWXcDfzu7I3EVGRf%2Bkf2KMFoLOtvwVPfkYBT%2B797h77fgFdczawmvRvewPIEg4umhMBHD6FTJfeODg8B%2BpiAfoI1uCgTqRu1UW6S9SKVjtzhWYQnYKrfRsPxzJlHIPXXHyqsV%2FdazOre1lTEd1b0mm9E8yeBHI7d2i2E72mKsxK67%2BGkCHO9RJZt3LTtihf6QoSlzoaQ7zX7piGoxWbM0bnONhRT%2FLg4OUgjnbDWkA8%2BQhyg8yLMcRdAEl7nhl0iY7qIDyDIheo%2FavXQCaKmytQX7Me5aYycQfguB8zBepQdAx1aWG8M%2BWt441KO5UAp7TwmedpIj8kQRkJKxe7QuYg50Px93em2Lxkw7NzcyQY6pgFC2JWb2G4K6YX9E%2FpfudPNGTAk7tZxmAesSjqfJf%2Fs%2Bhsj4NNd12h%2F2ojhoAu7%2BSVAofj9YHGPLBkjAcCgt9V%2FNT74C4k2xfj7Bmtmmi6QkPrdCYIFwMY0WbY25FrHr4DeqPGcjC3%2BEWrnsHRXismzLLBz0AStaEKSaB87mxhNSKQl8nAVMukcNJ85jXt9CEjxoNL%2FZByphpc%2Fe6Z4cCbhm18ySnly&X-Amz-Signature=6a5b3b4a1f89bd62e98300766b4f865e28a5d7c5d6dd4ee0bd24e819cb0ecb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSCPB5QT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcO8UVgEt1wtzmkycQFmo%2BB9o6lEzCxryexckvZDEnAAiAn6FWqGdmMwgbBUq%2Fp4tFd16KBlzV6wIwPqtbAXcymkiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRIasuVWQ3PAWBoMvKtwDuyEvqpDnDGu48Gh2jzSW7LCDnNZ%2BniBmffHgvGhx2bx4L5%2FJjdF2tGhqhSf5rIiLKG9S20oSJNBnOQE2uikXoX5FYW8ZhEPfsRueU9iMeCWpdcq2s%2FC75m5UzTin73t47289El4V8Q38PccIrUW5%2Bpiok5NlsNuKRzAIQg3l9GtImqUVIh%2BoQBuYRMFDLBZv4vTNQElgAGVkrk1zS8dYCJ4G6bNy0hoL6fA%2Bth7Von6sZEkKAASUT1bzgn%2BwOxkD7VQDov9kKw8wkhZ7QL8LKm64TWXcDfzu7I3EVGRf%2Bkf2KMFoLOtvwVPfkYBT%2B797h77fgFdczawmvRvewPIEg4umhMBHD6FTJfeODg8B%2BpiAfoI1uCgTqRu1UW6S9SKVjtzhWYQnYKrfRsPxzJlHIPXXHyqsV%2FdazOre1lTEd1b0mm9E8yeBHI7d2i2E72mKsxK67%2BGkCHO9RJZt3LTtihf6QoSlzoaQ7zX7piGoxWbM0bnONhRT%2FLg4OUgjnbDWkA8%2BQhyg8yLMcRdAEl7nhl0iY7qIDyDIheo%2FavXQCaKmytQX7Me5aYycQfguB8zBepQdAx1aWG8M%2BWt441KO5UAp7TwmedpIj8kQRkJKxe7QuYg50Px93em2Lxkw7NzcyQY6pgFC2JWb2G4K6YX9E%2FpfudPNGTAk7tZxmAesSjqfJf%2Fs%2Bhsj4NNd12h%2F2ojhoAu7%2BSVAofj9YHGPLBkjAcCgt9V%2FNT74C4k2xfj7Bmtmmi6QkPrdCYIFwMY0WbY25FrHr4DeqPGcjC3%2BEWrnsHRXismzLLBz0AStaEKSaB87mxhNSKQl8nAVMukcNJ85jXt9CEjxoNL%2FZByphpc%2Fe6Z4cCbhm18ySnly&X-Amz-Signature=67472fc23c139478395b5ff8fcf3db3cbfcd8f212868952caf23f43ab1c2a7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
