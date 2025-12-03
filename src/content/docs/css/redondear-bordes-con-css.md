---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5MCLY7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDJgE9i48VTdjmhw5x9dSMizvBoODFMlhId2E3uFXNVQQIgO7IGifCdRZQ5aoERr0hkCQlAtGrWRZW4oCaXYnPARZMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFSulyYx4sP5KwIAayrcAxY3WJByJu01VsrhmzU1PO0%2BsVo3KQ0yWQVTqajNzDk8WiB8KaCgtesiqYsxcz7L%2B%2FOeMbXE8Rs44Zlc4SfZPfKfxMhzE1pUHRmTIYs9cMz1W1uYsueoqFuF0bXzq7qbp31tZ%2Ft9MDMMGcPsQHwHmD%2FqjOsggjLW8dZJZKw9Fsvo%2BAYJ3W0HYULNLJncYyMT5T0hvmuR%2BeZrriEnFXm6Nine7mnTmYFRjMQ4yH9TXYnSA0gLdsOCGtF8pF26FLEiwA383Fu6yRIAPQOmk4uwyBDrdFtOM%2F6TPJwEtCI2wOaILmckWRSKpHrN57ypesABA9iMO83rq35ctukMhwBq2HT%2BfyYKVOAtkmpFPuOQ6C3EM%2Fm%2BhinQYQ7uWAyvRhDyie1OYMlmhOBaOb07DNzzlirqtoAtxY4lSuy8RQw9hd9xmIwaBnVyNeBsnYTZ3eEX%2FBQRqIQT%2FzyOabORXzNyTarbzhZUzgNURCsik7rZ0OLp6W0ym1KVen5EjSLcN95gbR8ji7cdcJJ2NjiE5ISdV1hFQ%2Bp6RBAPrUaMCHeGIcfx5awFf6nUw1%2BsHP5CWcivyxR6cdhufSuU%2BZl1W2ByNXLI9FKT02bEZ%2FL0h16PIj6RbZdLL7sNLbq3ksnZMN6RwskGOqUB8BDcYN0p%2BcJu%2F1JZLvgbb5QdR5DO%2BRHiItyj1%2FFrEyU4SALAF1OetM108YoAjPOxTskwIcas1tM9CWTqrPo%2FjCn9iYuEm%2BwLs%2BsDLag6ntcWzlnx4xF04hjpm66To2xMdDsMJ5Bz7z91%2FaB2uRG4kNaka3xtH0sal2TA96Nefef3iDPmlc6yJ%2FcIg%2BiojOpDYg1%2FFJT1pb9vH%2FPBB%2BW3ezNvhfcG&X-Amz-Signature=d029ef7af888d8e21534ac24174a9552bbe52b4e57d1bef49303d2e9aba75795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5MCLY7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDJgE9i48VTdjmhw5x9dSMizvBoODFMlhId2E3uFXNVQQIgO7IGifCdRZQ5aoERr0hkCQlAtGrWRZW4oCaXYnPARZMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFSulyYx4sP5KwIAayrcAxY3WJByJu01VsrhmzU1PO0%2BsVo3KQ0yWQVTqajNzDk8WiB8KaCgtesiqYsxcz7L%2B%2FOeMbXE8Rs44Zlc4SfZPfKfxMhzE1pUHRmTIYs9cMz1W1uYsueoqFuF0bXzq7qbp31tZ%2Ft9MDMMGcPsQHwHmD%2FqjOsggjLW8dZJZKw9Fsvo%2BAYJ3W0HYULNLJncYyMT5T0hvmuR%2BeZrriEnFXm6Nine7mnTmYFRjMQ4yH9TXYnSA0gLdsOCGtF8pF26FLEiwA383Fu6yRIAPQOmk4uwyBDrdFtOM%2F6TPJwEtCI2wOaILmckWRSKpHrN57ypesABA9iMO83rq35ctukMhwBq2HT%2BfyYKVOAtkmpFPuOQ6C3EM%2Fm%2BhinQYQ7uWAyvRhDyie1OYMlmhOBaOb07DNzzlirqtoAtxY4lSuy8RQw9hd9xmIwaBnVyNeBsnYTZ3eEX%2FBQRqIQT%2FzyOabORXzNyTarbzhZUzgNURCsik7rZ0OLp6W0ym1KVen5EjSLcN95gbR8ji7cdcJJ2NjiE5ISdV1hFQ%2Bp6RBAPrUaMCHeGIcfx5awFf6nUw1%2BsHP5CWcivyxR6cdhufSuU%2BZl1W2ByNXLI9FKT02bEZ%2FL0h16PIj6RbZdLL7sNLbq3ksnZMN6RwskGOqUB8BDcYN0p%2BcJu%2F1JZLvgbb5QdR5DO%2BRHiItyj1%2FFrEyU4SALAF1OetM108YoAjPOxTskwIcas1tM9CWTqrPo%2FjCn9iYuEm%2BwLs%2BsDLag6ntcWzlnx4xF04hjpm66To2xMdDsMJ5Bz7z91%2FaB2uRG4kNaka3xtH0sal2TA96Nefef3iDPmlc6yJ%2FcIg%2BiojOpDYg1%2FFJT1pb9vH%2FPBB%2BW3ezNvhfcG&X-Amz-Signature=e2b40d2a26f8c71b605ee8e11cc40c0f45e5a34b506e2105f9bb072279e71673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
