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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQT5XVO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDNPFr2dU873Fe%2B73xSzUxULmwrKjwQMmRNaYGgNPl3AiBQeasv%2ByShCcClPAWoZpZP5puZjDEH52qXRIyOP3o9aSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMB6ZPjd%2F%2FJgjhFuRsKtwDUA7J%2FmbeaB5rQXWKUSoqlbq9ajBqvz9QYR%2F0Tm8tB1zPoO1Mdn9bEICxRHb6HnKH9Sjje278LZN1QauJUnVGv%2B5TM27p0HeOPGL023QK%2F0rG5JGEmhX1wDN2gWmj3KMjf0ZFXNF0Kqjjjm%2F7Em8f%2F6j1SueK360MCrhJ0lm80JeLVKvTCoBjR4dFp5oLTMIuMXHaa%2BGlyqwT628lRFWmSMUneubKboIztfJuTKroJ3KGLtlPuRiAPnsDrAcjb2I5pksxriiIGxpI3cz6q8wNETWgF4gDYIElNLXolKx5H7LRnctfuxE%2FkkYAC%2BiMaWHIJ%2FoG3qk%2FaGpUh4trThYGmIdRw4CqUv3bYIj%2BDp8JQRfPyV5bUjsuDRb7mEWv9xjhE%2BxqS9Yb8VGCEojk0toRzDJEe2ctRvuIXYf21lHHfFCthZPDorgkD1YOdaaH23t7Pe7jQSISWfJ5ukXcbSW9fCwq6vJAomKYawwaxf%2B4qkye15RYtgFYL7zqEVsuw8A8thr%2BUjRq2dsYIuQcKZ%2Bu%2B%2Bl8rCRhyACfiB20vRVdPHo3UJEsFNevLyf%2BD%2BPrR%2B10XN%2Fex%2Faln%2BfBz83N%2BuS8fPwoD%2FybSKLKJ6v77AtbrpEvOL%2BxmifD7d95ktIwlIzIyQY6pgHb6avd%2F0dQ2Sw36vcMURwI77O1iO4qntbNWF0FkVXaX%2FnXw5PCaELnOGq5Px9kcaQX0nbOOsSitXypFH9EYsKGVDiOS%2BjKdV8M1TTEYjxXxuvsx7GvQYv%2FPlmNZ3VJDQh3tbH%2FfbvcW80k7LlqihWSNzZjemIKe5ti0SNeKD4n6I1BwTGyP6vahSeAlUq4sf7YhAgkgnKkvq2xU%2FcAl3SEOWDq2V3j&X-Amz-Signature=9c04be78d514c9902ba9eebacd38cc2fb006adda6e249f50e74e0447a245b66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQT5XVO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDNPFr2dU873Fe%2B73xSzUxULmwrKjwQMmRNaYGgNPl3AiBQeasv%2ByShCcClPAWoZpZP5puZjDEH52qXRIyOP3o9aSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMB6ZPjd%2F%2FJgjhFuRsKtwDUA7J%2FmbeaB5rQXWKUSoqlbq9ajBqvz9QYR%2F0Tm8tB1zPoO1Mdn9bEICxRHb6HnKH9Sjje278LZN1QauJUnVGv%2B5TM27p0HeOPGL023QK%2F0rG5JGEmhX1wDN2gWmj3KMjf0ZFXNF0Kqjjjm%2F7Em8f%2F6j1SueK360MCrhJ0lm80JeLVKvTCoBjR4dFp5oLTMIuMXHaa%2BGlyqwT628lRFWmSMUneubKboIztfJuTKroJ3KGLtlPuRiAPnsDrAcjb2I5pksxriiIGxpI3cz6q8wNETWgF4gDYIElNLXolKx5H7LRnctfuxE%2FkkYAC%2BiMaWHIJ%2FoG3qk%2FaGpUh4trThYGmIdRw4CqUv3bYIj%2BDp8JQRfPyV5bUjsuDRb7mEWv9xjhE%2BxqS9Yb8VGCEojk0toRzDJEe2ctRvuIXYf21lHHfFCthZPDorgkD1YOdaaH23t7Pe7jQSISWfJ5ukXcbSW9fCwq6vJAomKYawwaxf%2B4qkye15RYtgFYL7zqEVsuw8A8thr%2BUjRq2dsYIuQcKZ%2Bu%2B%2Bl8rCRhyACfiB20vRVdPHo3UJEsFNevLyf%2BD%2BPrR%2B10XN%2Fex%2Faln%2BfBz83N%2BuS8fPwoD%2FybSKLKJ6v77AtbrpEvOL%2BxmifD7d95ktIwlIzIyQY6pgHb6avd%2F0dQ2Sw36vcMURwI77O1iO4qntbNWF0FkVXaX%2FnXw5PCaELnOGq5Px9kcaQX0nbOOsSitXypFH9EYsKGVDiOS%2BjKdV8M1TTEYjxXxuvsx7GvQYv%2FPlmNZ3VJDQh3tbH%2FfbvcW80k7LlqihWSNzZjemIKe5ti0SNeKD4n6I1BwTGyP6vahSeAlUq4sf7YhAgkgnKkvq2xU%2FcAl3SEOWDq2V3j&X-Amz-Signature=52c13370d539e1fbc6fcfde79708f4d0a3fe7d2b979b170b9c15e42f51fb9672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
