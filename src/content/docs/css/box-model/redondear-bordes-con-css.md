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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7FISCZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0qjLFq4yLsdgo0p%2FzKsAoVw4R9V%2BfuPt5X2YT8ZATOQIgMt9O4xRr%2BpWOiJIwZckQrlHHnCgUkS65hbJkZzPst6Qq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG3zJSyxP1h6Ms3ACCrcA8Q292%2FDHkLbyYQkimA5EPO6XymcNgRVce9xt%2BgwfrbUVB%2BshLMZnnXOoJxmFuPWD6P%2BSwG16EdLZqOO9v2Y6tghLLxD3Xbzqk2uSy2xMMO4Jaqcq4AHbNHzYvztMY5QMYupI5jwLVtVK%2F8De5%2Bdsx4%2B4f7P%2BQT2SRao%2B%2FrMjhEdtxaIujCY59T2HnxXjmem5c1y2eZAUtxi99x9AoNvTYLq%2BRv8w9ntQHTojaHzFxlDqsVNKjB5Zic%2F3wruJKE2%2Bv7MBs3%2Bp%2Bct1r0vEQtPIvP9RjLmspGgc9izSDevg4O6dI4%2FsB4OKRiF4ybDa4vvs%2B8yYRbqiF74D8TBuXwGnxWJbZwUgHREDxGjAXYyYfCVK%2FSzN%2F2wY6qle7waCwEk8ajqB9fas1b2fCvMCrPH0jvtlUO8b1KLheZ2Xm%2FGK8uOUfol%2F2GlRAnnZyADGBwD3x95bgW%2BgmkjjL8FqNORvzgehFToQz7y5VsxnsG51bSQxUADfR6Vzdrj%2B16oY9Jvlk2GnwY%2FVUBY%2FBNPj3OqY80s2Or92McqkSyjQusdbGsPUe%2FhODhggDgIaXD%2BgGtQ3NIKSwW5g0ERiTsPUuaoulQFARZLWbSk2%2B5ciFVy0OsyNQg2rcXri7F31mhUMJC3icoGOqUBpMgXLJs5rQtaZpCuw3%2Bj0kZFWxP7VWArvXdX7Y27XN9bTNGZ9NPu7sVDCGMrpBOlTlxaTcwIIThlWsz2qaVK7U9cqgKfGPvh16idz%2FqTsQOfqkAhRcLbR66azBXa%2F8S8Ga2xmQNQBSXEvUPqedOvkLBIVjdrb6CW19yIqB14wrFDka%2FLJHvN0qxRRZm0zK3hZ5P0%2BrS72i%2Fgf90fNuCYk3WD8EBd&X-Amz-Signature=df3d94d535642baf6a5647af7970530ca1e6eccc564a0f67fe0d362ed9b2d7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7FISCZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0qjLFq4yLsdgo0p%2FzKsAoVw4R9V%2BfuPt5X2YT8ZATOQIgMt9O4xRr%2BpWOiJIwZckQrlHHnCgUkS65hbJkZzPst6Qq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG3zJSyxP1h6Ms3ACCrcA8Q292%2FDHkLbyYQkimA5EPO6XymcNgRVce9xt%2BgwfrbUVB%2BshLMZnnXOoJxmFuPWD6P%2BSwG16EdLZqOO9v2Y6tghLLxD3Xbzqk2uSy2xMMO4Jaqcq4AHbNHzYvztMY5QMYupI5jwLVtVK%2F8De5%2Bdsx4%2B4f7P%2BQT2SRao%2B%2FrMjhEdtxaIujCY59T2HnxXjmem5c1y2eZAUtxi99x9AoNvTYLq%2BRv8w9ntQHTojaHzFxlDqsVNKjB5Zic%2F3wruJKE2%2Bv7MBs3%2Bp%2Bct1r0vEQtPIvP9RjLmspGgc9izSDevg4O6dI4%2FsB4OKRiF4ybDa4vvs%2B8yYRbqiF74D8TBuXwGnxWJbZwUgHREDxGjAXYyYfCVK%2FSzN%2F2wY6qle7waCwEk8ajqB9fas1b2fCvMCrPH0jvtlUO8b1KLheZ2Xm%2FGK8uOUfol%2F2GlRAnnZyADGBwD3x95bgW%2BgmkjjL8FqNORvzgehFToQz7y5VsxnsG51bSQxUADfR6Vzdrj%2B16oY9Jvlk2GnwY%2FVUBY%2FBNPj3OqY80s2Or92McqkSyjQusdbGsPUe%2FhODhggDgIaXD%2BgGtQ3NIKSwW5g0ERiTsPUuaoulQFARZLWbSk2%2B5ciFVy0OsyNQg2rcXri7F31mhUMJC3icoGOqUBpMgXLJs5rQtaZpCuw3%2Bj0kZFWxP7VWArvXdX7Y27XN9bTNGZ9NPu7sVDCGMrpBOlTlxaTcwIIThlWsz2qaVK7U9cqgKfGPvh16idz%2FqTsQOfqkAhRcLbR66azBXa%2F8S8Ga2xmQNQBSXEvUPqedOvkLBIVjdrb6CW19yIqB14wrFDka%2FLJHvN0qxRRZm0zK3hZ5P0%2BrS72i%2Fgf90fNuCYk3WD8EBd&X-Amz-Signature=e2265a018cef28d39cac1243280a8d3fa51283c8d99ebd471ed195cf0a17db71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
