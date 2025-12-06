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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVN6FCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwuLAxjyURBUs3sEGfVTWO2aS0DY5wJ2mc6zmJg5JGvAiEApaVSuIhzlLHX6HeHU1JMblG39CIqOtGLMm91aeL1OfIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOLDxKKjeUNP0C6j6yrcA3FNw%2BEIGz6rgjxR%2BrUx%2By%2FFQ%2BKQ78X%2FVuuHoAVZupR1NiCMHGi0j%2FUazF%2FNZhG%2BTlXvrvKmXfNuMRxEw3xnoI5DvXKP55KzKNPyOK7HBHOCXRFSqnsRuQjMl0XDN4o6J9SkWdubNlBkKXLgy5xD02qlmurJXmZX7cm0Q8EeVUG%2BxA3qLf%2Fi%2BZmGkPQHcVez6KjfBvC1A262b5ks7YliAtUhfbaZXtfqU6PttQLcI9t4elFHibnY0StVhOSIteFbjhKl0sNTjDu9MWa6VlelSlyirkzgD6hQUwT8PTN%2BtRbv3%2B1MEOLYDOpSD%2FSaA2deHUO1l%2FyHa%2Bn00NlnpJRDgWZ623lenzFj0DEY8xf%2FYdFG7l8MKim8HkyDheWDEP0CRQaOUoaNJ6Nr%2FGcbRaTPGNqQB54Au4U9LZ8YOkZUmUweM%2BjZ3sOgm5ouk3OJ8oBoHR56XvptNSnxhTn74yzP9HcLOmd6KdCOan4hxsi2mlF%2FKsQ09aqgmbbYK37Cc5bZY1piZkfStgZAHejw2Xpox9%2B2Klgk5ql8K27Ki7AmfUj7uL6nSxNVgyitkig57fzrSwfoDAWHY8N1yGQx3kw%2FAxcWtYnT2V%2FqtQV8zNFoUO20rrRrkvYCDH9KmphjMNam0MkGOqUB0juyC5P%2Fyi4MLOzOI2YhCvN6VreN%2B2KjX%2FoHV5EvIzaOXiaWPbBmBfb%2FHkFmAe4yymeEW%2BNFg%2FqLL3qFtJpLJwswx4cQ3s%2FuTGcRhWXw9eGX3IrvmLs8vMdMWT4yxWlmcRd%2FTKqlu0QmqOqIZUbLasFLjXFHivXYqadjrnQtPaDIW3R46yGQQfSOn9RMyV3qTieJXguvlR%2FGaAVGYwuef5yIQZE1&X-Amz-Signature=0821b1e900def86281f5eaa58d8b274fc7aff34921dfa44d0408d762ed695144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVN6FCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwuLAxjyURBUs3sEGfVTWO2aS0DY5wJ2mc6zmJg5JGvAiEApaVSuIhzlLHX6HeHU1JMblG39CIqOtGLMm91aeL1OfIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOLDxKKjeUNP0C6j6yrcA3FNw%2BEIGz6rgjxR%2BrUx%2By%2FFQ%2BKQ78X%2FVuuHoAVZupR1NiCMHGi0j%2FUazF%2FNZhG%2BTlXvrvKmXfNuMRxEw3xnoI5DvXKP55KzKNPyOK7HBHOCXRFSqnsRuQjMl0XDN4o6J9SkWdubNlBkKXLgy5xD02qlmurJXmZX7cm0Q8EeVUG%2BxA3qLf%2Fi%2BZmGkPQHcVez6KjfBvC1A262b5ks7YliAtUhfbaZXtfqU6PttQLcI9t4elFHibnY0StVhOSIteFbjhKl0sNTjDu9MWa6VlelSlyirkzgD6hQUwT8PTN%2BtRbv3%2B1MEOLYDOpSD%2FSaA2deHUO1l%2FyHa%2Bn00NlnpJRDgWZ623lenzFj0DEY8xf%2FYdFG7l8MKim8HkyDheWDEP0CRQaOUoaNJ6Nr%2FGcbRaTPGNqQB54Au4U9LZ8YOkZUmUweM%2BjZ3sOgm5ouk3OJ8oBoHR56XvptNSnxhTn74yzP9HcLOmd6KdCOan4hxsi2mlF%2FKsQ09aqgmbbYK37Cc5bZY1piZkfStgZAHejw2Xpox9%2B2Klgk5ql8K27Ki7AmfUj7uL6nSxNVgyitkig57fzrSwfoDAWHY8N1yGQx3kw%2FAxcWtYnT2V%2FqtQV8zNFoUO20rrRrkvYCDH9KmphjMNam0MkGOqUB0juyC5P%2Fyi4MLOzOI2YhCvN6VreN%2B2KjX%2FoHV5EvIzaOXiaWPbBmBfb%2FHkFmAe4yymeEW%2BNFg%2FqLL3qFtJpLJwswx4cQ3s%2FuTGcRhWXw9eGX3IrvmLs8vMdMWT4yxWlmcRd%2FTKqlu0QmqOqIZUbLasFLjXFHivXYqadjrnQtPaDIW3R46yGQQfSOn9RMyV3qTieJXguvlR%2FGaAVGYwuef5yIQZE1&X-Amz-Signature=2542b10318fd9632fc4d6de006dbca5a4b72e207c030ce1a99fc0478fe675a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
