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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CQIJX6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmWJR%2BXz2yuj3%2F1q379Ma5bq5A%2FNCKiHd6N3p4IXrX9AiA9g1ipCAbRf%2FgNBxrZ%2FiD1jajJRlNigYEKx5QqcQe36Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMtRSKeChgachnsHnLKtwD7CQEHKA9TkI8YCCny2HzeGdmSqzr8wbtsSqzXZC%2F%2FDubtO3Ouc2xHGhpjyYJi4xLUXFP0VA40PmFCKgPm6gI62TGTQ4D1Df7F3W0jGhA%2F1IcDqMNugfW9pryOPPAnW51aO1JZ0r%2FcXxxw01WEf67TkakRTRwzb42EaSYUtnDC0m0A7HMvpm3yv46cPImhKTla5MBq8UQdYG34HyuVaMNKPwy9ljJnsqCO3BbckrKn6%2BzNpv1mKDALe1%2F4JvIfmq9bakfAulgcdOzjUgtR%2Fr2wgYa7ip%2F4WUgTH%2B5FM6ID99OlVZ9rUy6QkG6u2HtWgofoc0NbCHYdG4Dh3WF6TskeLf%2BTXRC5lodQZ%2BkFUoxACuvIz3ybLguMARH01FWPHL8fzETxKaEM%2FI9yfP1obXoAQPUfpA36YzMXsBAYgq5fqpFg3Nft2IM2hEGOEHolxBr4JjO3I6BOOIbaXIWvwAbr8O6i637YyKUbMo633Ef00XfkoYnx5mi9hhrcWgViIZm9EoFUNGp78kc4YGfvpl8JPRa8K5UjJNjx%2F7yByyaTFgz9CNdlwoqUjG4ZpJ9u7J5%2F6iBbJOSUMJzmIYAmmju8FqJ6R7a48AP8KCnJytgUM%2B%2FszhSJBXJnLWLArIwxd7OyQY6pgFv7C7bUYzQs934RQD6PYkATspZ7pqbjFblWYj1jlXLee6%2BQIVbn%2BMTuGeP5Lx8tDPATTjJmoNRx1PCzqmQ%2F%2BiK9kpc7ybWYH6n0ki5c574QkS1JvhT%2Fu%2FGG%2BTDVkACktyfXDdlbyygGvAyY09ErvxKOt7rYqcCkSRFVlpPvEx2t%2BPMG4bOAfMNomaEqUVbSMMm%2FkvFaLMbbW2llRRJSGmxZRO%2BdhEg&X-Amz-Signature=9e8d697c412da9376eb0d6ce7a74a86721397367120262c014984cf46a3d3c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CQIJX6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmWJR%2BXz2yuj3%2F1q379Ma5bq5A%2FNCKiHd6N3p4IXrX9AiA9g1ipCAbRf%2FgNBxrZ%2FiD1jajJRlNigYEKx5QqcQe36Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMtRSKeChgachnsHnLKtwD7CQEHKA9TkI8YCCny2HzeGdmSqzr8wbtsSqzXZC%2F%2FDubtO3Ouc2xHGhpjyYJi4xLUXFP0VA40PmFCKgPm6gI62TGTQ4D1Df7F3W0jGhA%2F1IcDqMNugfW9pryOPPAnW51aO1JZ0r%2FcXxxw01WEf67TkakRTRwzb42EaSYUtnDC0m0A7HMvpm3yv46cPImhKTla5MBq8UQdYG34HyuVaMNKPwy9ljJnsqCO3BbckrKn6%2BzNpv1mKDALe1%2F4JvIfmq9bakfAulgcdOzjUgtR%2Fr2wgYa7ip%2F4WUgTH%2B5FM6ID99OlVZ9rUy6QkG6u2HtWgofoc0NbCHYdG4Dh3WF6TskeLf%2BTXRC5lodQZ%2BkFUoxACuvIz3ybLguMARH01FWPHL8fzETxKaEM%2FI9yfP1obXoAQPUfpA36YzMXsBAYgq5fqpFg3Nft2IM2hEGOEHolxBr4JjO3I6BOOIbaXIWvwAbr8O6i637YyKUbMo633Ef00XfkoYnx5mi9hhrcWgViIZm9EoFUNGp78kc4YGfvpl8JPRa8K5UjJNjx%2F7yByyaTFgz9CNdlwoqUjG4ZpJ9u7J5%2F6iBbJOSUMJzmIYAmmju8FqJ6R7a48AP8KCnJytgUM%2B%2FszhSJBXJnLWLArIwxd7OyQY6pgFv7C7bUYzQs934RQD6PYkATspZ7pqbjFblWYj1jlXLee6%2BQIVbn%2BMTuGeP5Lx8tDPATTjJmoNRx1PCzqmQ%2F%2BiK9kpc7ybWYH6n0ki5c574QkS1JvhT%2Fu%2FGG%2BTDVkACktyfXDdlbyygGvAyY09ErvxKOt7rYqcCkSRFVlpPvEx2t%2BPMG4bOAfMNomaEqUVbSMMm%2FkvFaLMbbW2llRRJSGmxZRO%2BdhEg&X-Amz-Signature=5ed4210b805847e65e7e99ed09ea498f22670ec3069e2c30cceaa54746b85b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
