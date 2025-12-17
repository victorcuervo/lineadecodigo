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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FAT62A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGt2zAF1M%2BESlSz5gGN0js8%2FNqKcfGy0eXgwNJH4lfSYAiEAzNQ8z3%2BD7K8Z2xRnmjHMdZFSdAqEbYXwoPifHnTNiuUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJbeh9o9OAd30UoNMyrcA2toPIfCmpngD%2FYrcOFj3juPudP7VbW93Fxonu2Gy8CkiDoeTXK6BiAjG39PrJrDugHPMhZq3IRT0VrUDhE2HCWhn7SVBlmvALjVQoCrATjR3SNNFYsJsiz9RzvktgzLCd9a9Eq2cO12908uC7ajMmWV5FMb8vF3oHhRST%2BZCgWg28mxPKzE26ilB19Qn5%2Feamp8uKJB9SfIuRvLcf9vLCYjUE%2B6ltKPTFzpePL%2B9cf7HqBr01c%2FJsN5B4dXkeGXWodM%2Be6blCeB8GS25bsObaKOaw2puVa3zcslIgX2WntONGkI2eSwSX%2BzfrZEtb9XfMtx3ecUwuE9cO8DwPa3v%2FPPic6%2F73lG5R02Ay13gH%2BsUIaItEoA0bKMssnhpuHd7PByacgtf7z5KJywguB0%2B%2BQ0wCNlEj%2F0g%2F0TQ%2Bb480PAAzJ9Y4j1wuk4Q32XAJ3XyTGFHQeNruk%2FEI%2Fx%2FzNGU0bUFn7E8Z5fAnGBEEcJyl6RCGPDvMD4FwPD045GJnI2dnTro%2B5B5UxZAY8hrJ58LormGZJQ9Kb%2BqK4%2F8Jo8mQGsJVUgo5UFCWP9V2c8KEwpPFGbDUobZor97O6Z32kXBvo2AU6kvqfBWrIC2kCgUEZfMaG0MzQmdkvV8IvlMIKPisoGOqUB4OLfXfuw9fQA6%2Bt51u9qOU3ky0HcweUmabLXecuVIkhMuQinN5ZyLpOzW9MHJE%2FEgI9hkIKIM67aPmvC0GG46jBBgmGvSDgHiVB86E%2FIYn5QTM6%2BntcLzi0bRTi%2BG53lgph4%2F6yCHejukgO%2Fj8wXbV8wmj7LPOZgJdqJrUtNUYUR%2F2aHzr3nl1kVZHapdjelm7yVfvZSjV23w6KHVWjf2ZD2bsuQ&X-Amz-Signature=9bde240bcf560857ca09e385dae79f718d67465280e06a9d389e56ee765285d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FAT62A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGt2zAF1M%2BESlSz5gGN0js8%2FNqKcfGy0eXgwNJH4lfSYAiEAzNQ8z3%2BD7K8Z2xRnmjHMdZFSdAqEbYXwoPifHnTNiuUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJbeh9o9OAd30UoNMyrcA2toPIfCmpngD%2FYrcOFj3juPudP7VbW93Fxonu2Gy8CkiDoeTXK6BiAjG39PrJrDugHPMhZq3IRT0VrUDhE2HCWhn7SVBlmvALjVQoCrATjR3SNNFYsJsiz9RzvktgzLCd9a9Eq2cO12908uC7ajMmWV5FMb8vF3oHhRST%2BZCgWg28mxPKzE26ilB19Qn5%2Feamp8uKJB9SfIuRvLcf9vLCYjUE%2B6ltKPTFzpePL%2B9cf7HqBr01c%2FJsN5B4dXkeGXWodM%2Be6blCeB8GS25bsObaKOaw2puVa3zcslIgX2WntONGkI2eSwSX%2BzfrZEtb9XfMtx3ecUwuE9cO8DwPa3v%2FPPic6%2F73lG5R02Ay13gH%2BsUIaItEoA0bKMssnhpuHd7PByacgtf7z5KJywguB0%2B%2BQ0wCNlEj%2F0g%2F0TQ%2Bb480PAAzJ9Y4j1wuk4Q32XAJ3XyTGFHQeNruk%2FEI%2Fx%2FzNGU0bUFn7E8Z5fAnGBEEcJyl6RCGPDvMD4FwPD045GJnI2dnTro%2B5B5UxZAY8hrJ58LormGZJQ9Kb%2BqK4%2F8Jo8mQGsJVUgo5UFCWP9V2c8KEwpPFGbDUobZor97O6Z32kXBvo2AU6kvqfBWrIC2kCgUEZfMaG0MzQmdkvV8IvlMIKPisoGOqUB4OLfXfuw9fQA6%2Bt51u9qOU3ky0HcweUmabLXecuVIkhMuQinN5ZyLpOzW9MHJE%2FEgI9hkIKIM67aPmvC0GG46jBBgmGvSDgHiVB86E%2FIYn5QTM6%2BntcLzi0bRTi%2BG53lgph4%2F6yCHejukgO%2Fj8wXbV8wmj7LPOZgJdqJrUtNUYUR%2F2aHzr3nl1kVZHapdjelm7yVfvZSjV23w6KHVWjf2ZD2bsuQ&X-Amz-Signature=61cbdcc7cb6aa2eb822ca580f29c1691feb071c8e88baa1b8ec2fa5ef0e1885e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
