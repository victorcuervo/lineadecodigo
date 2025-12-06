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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3WRSVD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWffIZaAWMGC4UufMKPqySwzyWTMjuA52fGtTm%2FgW%2BHAIgXXYl92r3oSV220ePKxwGO68Kz9U6eyRHrISBkRc8U34q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFCF1tfe7uBPXsagtSrcA0QzEr%2BjJ0X32qAm3ilXlfTJtmGGOa8zfNLoqebL5XpJKgvJdUWm94DEoOOVjhBJcZJT4by0Eu1iQJ6cfpQUikCcezpt5hjOTvY2WQBvY09Rdby53FOKvOSZdtT1nATPt%2FkP%2Boto6dDwAcOC29%2Bapbkc3ZtGB8qS9BLNKtuwWcCbV3f3GtQjz5CVbeuwBr9J%2FaelhzA3eIoyuuKxJJ6YvA4FnauayPZw8sENVRWtFa%2FOC2tQYHiY3fPf%2FwvhfcXwDo%2BogFrS%2BxkhLyg7e9nZIZu8P00I1TuMhxoPsBitHjfEP0pZUYsnVT5fUtXzFfrPph%2BbZ5y2ZltJFgcUXjh1qhRvxD0JH5qvl15Lk4AmWflzqmugQamPGeZn4%2Bvvai92IL2xEFe02ZAqG94ZIdMZxnM3rc9eva4FJyorW0NKK%2BA%2BL9lqSK7v11ucP3u9Tk4JmwNeCTOtQ9UgGIVznsrB9AXX2UJYbUHlKyvO6D2a%2B%2BS070skrfcMFGmLMz68%2F3d85avrNrLNyWZuJHrWNL%2FFFRm%2FW8brqgULJnZ%2F7PI7ANt70%2FPVNvGL29eAVSFaWw1GXGwt2jm61Wi8s%2B2uWWeTJGT%2FsJAHzeHH8FNShnjejXeToxsjZw3wNNdLCJUFMPam0MkGOqUBVOnLH%2FWziQ4RkIbnKCrVmYZfY3f%2B9%2FtIL6Xscp57MNZtjeXHdsvH82XMcqZ9JBRMkMC2l5uOuZWv6lJmw%2FW0pd6PBeNLkYsavNSF1N5ooAFoFn2qbRNtXL%2FZ017m7t8HZ%2B4%2BlswIWlq0nbOS%2B8nm%2FmiEl%2FsMln3eJkwm8JnpvpOscTOU0rs5Ekw0%2BQOcAyCO%2BokR38aQ%2FDhAdPAM9pE6Y7m%2BhuPi&X-Amz-Signature=65c6142d5a39dbb86fd354c0e4800ef085808732aa6b58ec03b1ed1f9f47ffd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3WRSVD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWffIZaAWMGC4UufMKPqySwzyWTMjuA52fGtTm%2FgW%2BHAIgXXYl92r3oSV220ePKxwGO68Kz9U6eyRHrISBkRc8U34q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFCF1tfe7uBPXsagtSrcA0QzEr%2BjJ0X32qAm3ilXlfTJtmGGOa8zfNLoqebL5XpJKgvJdUWm94DEoOOVjhBJcZJT4by0Eu1iQJ6cfpQUikCcezpt5hjOTvY2WQBvY09Rdby53FOKvOSZdtT1nATPt%2FkP%2Boto6dDwAcOC29%2Bapbkc3ZtGB8qS9BLNKtuwWcCbV3f3GtQjz5CVbeuwBr9J%2FaelhzA3eIoyuuKxJJ6YvA4FnauayPZw8sENVRWtFa%2FOC2tQYHiY3fPf%2FwvhfcXwDo%2BogFrS%2BxkhLyg7e9nZIZu8P00I1TuMhxoPsBitHjfEP0pZUYsnVT5fUtXzFfrPph%2BbZ5y2ZltJFgcUXjh1qhRvxD0JH5qvl15Lk4AmWflzqmugQamPGeZn4%2Bvvai92IL2xEFe02ZAqG94ZIdMZxnM3rc9eva4FJyorW0NKK%2BA%2BL9lqSK7v11ucP3u9Tk4JmwNeCTOtQ9UgGIVznsrB9AXX2UJYbUHlKyvO6D2a%2B%2BS070skrfcMFGmLMz68%2F3d85avrNrLNyWZuJHrWNL%2FFFRm%2FW8brqgULJnZ%2F7PI7ANt70%2FPVNvGL29eAVSFaWw1GXGwt2jm61Wi8s%2B2uWWeTJGT%2FsJAHzeHH8FNShnjejXeToxsjZw3wNNdLCJUFMPam0MkGOqUBVOnLH%2FWziQ4RkIbnKCrVmYZfY3f%2B9%2FtIL6Xscp57MNZtjeXHdsvH82XMcqZ9JBRMkMC2l5uOuZWv6lJmw%2FW0pd6PBeNLkYsavNSF1N5ooAFoFn2qbRNtXL%2FZ017m7t8HZ%2B4%2BlswIWlq0nbOS%2B8nm%2FmiEl%2FsMln3eJkwm8JnpvpOscTOU0rs5Ekw0%2BQOcAyCO%2BokR38aQ%2FDhAdPAM9pE6Y7m%2BhuPi&X-Amz-Signature=59b13dc97e71553198cdfb97c945f7f4d2b430782741b14a551af5942ddea2d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
