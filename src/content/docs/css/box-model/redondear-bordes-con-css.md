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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HLXL7VB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkhoqmWUO0EdVGAxghB4u0jizxey%2BUdvay5gAaDDSyZQIhAMGYnUvCsdvBWh2KdoxuwpLxZEGO1U18oD6jER9sV2YpKv8DCHIQABoMNjM3NDIzMTgzODA1IgyLO2OFPxtbhZ%2BXh%2B8q3ANecIfnqy9NZGxzhSshgTeQJbi43FqE9XQbnvMcQRI18PMBODjWWilqJqoj%2BBeGSwJKMKkQiP5jfUlwmOvRp3QKjBWBQLfVdBM4u9rduVC00khD2ibDWp%2FA8%2BdnvHTGmmZFwcW9cCQz%2Fo4eD%2BkgK%2BZl8SJENwfi2tyZtvkRgHh%2B7Hh5SPFAAyi6h2Z6Kuc%2ByP06UjzCgvqnTfHFXqWg8ti6mhWMKa2b3TjPeYPL5Abgf0N0BjkjTCcCDN0Wd41NBP2j01uIfHK7v1u9AkuN9Uf%2Bt4cPjnWGsByLSapLGYOVL3pFtFsCx3lAYS9RqESqAqzL7fil7sOA9dVmd9rBO3IeIW%2F7GbkNjIIyUqdXYOJLTQW%2BMmqWz3L1YPTA%2BpgkpHjzmVcg6N277gKBLd0P9WDN8TOYBXFMuMShViJ8uTWl%2BVrSyk4REYe0iL5TYwy94eb9lfmb922vg7ApY0IyxWXoqxGrCbU2om1wWZ%2B%2ByzItN2PUpzfXFSY2lSD8qPfJ38q7pjt9oP9nc4zKPUwT%2Bvmj5g7Q92feVYhEPJHZblAPthTvxczsSRmTUsbwgidNLPQz4CrHYMskphqQIzb1FqACtrtgBTYY9%2BGK6VHsa9VwbGwU0yJEB4YKgO2VYDDm%2B4fKBjqkAQ8uhn3pKfaxZRIVZoXK4%2F3f7hLuXXQxtM2W2xj5PxRVEbFCCNyRy4GsuS43fCgNaklofmh6Fy0N1v3FZYGK%2Bc0zUoa2a9o4oPdNnXeY04VJhP6tHPhyDYLVX%2FovnZVVhaT4kHUmZvwxUjp2S5XDXNBElZFdLqdROC76CiPsV2dUeqppNpJmKo7M7yCiSwWrTIzhmkqsIXi4EKA2C87SeNDnUZkM&X-Amz-Signature=a2bd170cd7371598428d929596b106fd0492e24d4d35fa09024802a5364e5f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HLXL7VB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkhoqmWUO0EdVGAxghB4u0jizxey%2BUdvay5gAaDDSyZQIhAMGYnUvCsdvBWh2KdoxuwpLxZEGO1U18oD6jER9sV2YpKv8DCHIQABoMNjM3NDIzMTgzODA1IgyLO2OFPxtbhZ%2BXh%2B8q3ANecIfnqy9NZGxzhSshgTeQJbi43FqE9XQbnvMcQRI18PMBODjWWilqJqoj%2BBeGSwJKMKkQiP5jfUlwmOvRp3QKjBWBQLfVdBM4u9rduVC00khD2ibDWp%2FA8%2BdnvHTGmmZFwcW9cCQz%2Fo4eD%2BkgK%2BZl8SJENwfi2tyZtvkRgHh%2B7Hh5SPFAAyi6h2Z6Kuc%2ByP06UjzCgvqnTfHFXqWg8ti6mhWMKa2b3TjPeYPL5Abgf0N0BjkjTCcCDN0Wd41NBP2j01uIfHK7v1u9AkuN9Uf%2Bt4cPjnWGsByLSapLGYOVL3pFtFsCx3lAYS9RqESqAqzL7fil7sOA9dVmd9rBO3IeIW%2F7GbkNjIIyUqdXYOJLTQW%2BMmqWz3L1YPTA%2BpgkpHjzmVcg6N277gKBLd0P9WDN8TOYBXFMuMShViJ8uTWl%2BVrSyk4REYe0iL5TYwy94eb9lfmb922vg7ApY0IyxWXoqxGrCbU2om1wWZ%2B%2ByzItN2PUpzfXFSY2lSD8qPfJ38q7pjt9oP9nc4zKPUwT%2Bvmj5g7Q92feVYhEPJHZblAPthTvxczsSRmTUsbwgidNLPQz4CrHYMskphqQIzb1FqACtrtgBTYY9%2BGK6VHsa9VwbGwU0yJEB4YKgO2VYDDm%2B4fKBjqkAQ8uhn3pKfaxZRIVZoXK4%2F3f7hLuXXQxtM2W2xj5PxRVEbFCCNyRy4GsuS43fCgNaklofmh6Fy0N1v3FZYGK%2Bc0zUoa2a9o4oPdNnXeY04VJhP6tHPhyDYLVX%2FovnZVVhaT4kHUmZvwxUjp2S5XDXNBElZFdLqdROC76CiPsV2dUeqppNpJmKo7M7yCiSwWrTIzhmkqsIXi4EKA2C87SeNDnUZkM&X-Amz-Signature=ca456a0373773447cffc8511c8bc9233717ef92835d6453b271ee495bb4f2c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
