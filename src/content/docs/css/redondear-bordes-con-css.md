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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55G26J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGYAxdttkpNwjrKc2x2bjwh2%2Fn2mCwwnE%2BML8A8dPN5AiAp9RpMAMrR1KouTiu6Gry3u93%2B0jz%2Bnb7bZxWgSrReuir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM0efGYr7w%2BRHMAwToKtwDi5ZU%2FNwizggC5RbwjDWEIpVHK%2FqhtMhchRSK%2FfKH9gU8FenXSWipSG0BZYbo6fmQmLOOEh9OSRQKOiitPj%2FmkZUGZOr5egoqQYyEMThKSP06hDVkd%2B8vSopr2jbmjQ1hWqkIFB6b3VI0eN%2FPI5gi%2FuIic3%2FYnfQEjiyynrPSiP27oiA6WZpE%2BbBITJhSnxwSyjBryWTq%2Fm57xsVFPPSm%2BtpdQCvBDE2Vne5o9V8O1JmSiUZSvnHjM5poDWD5kO%2FJ9CjINiB%2B%2B138QBryQXfxGVT%2BRE%2FmvfabEwXbGvoXFkduAW9L2vUxn2ocO9i%2FcN9fRYMOQW9yaFWwDNUCkceu1vXJCmneAzh1VjyuvdE0phpl7EeTcJlmrNg%2B7xoe9u7dHGKKBIMIGAzhGAyv0uSr4jqpKELId1pT7AkbnjJJLvGVm927ZBkFuR9a5vZiR5FMyYBIZe9DgPAj2EK9uyDFc%2FoiZmvdvB5%2FQEBBNpL1MCOEC7rS2Ku%2F90OrY0sMSg6rFTKmkVyzjSRCMrbs0B9fBGIlXa0d1Vz2Iq3RAUq8iquJ7ourk858erO6hDY%2F4kwH%2FSVz12TiQmBkY9iUxlhLS4dXHrXGTnowqOt1ANvgHBZEJB6TBa5GzEUwizkw2MTRyQY6pgFTqzlK9gUPROUgqB05Zb4ocFD9LNhoU626Rr0pVOWBa2wG6z%2BULqTFR0ZcqA8thGn7REMLeecXYEMjihjMpD459H6ay3dOWwnqDfYfKmKzhOQR0%2By7Qiykpy6d0XkmNKAgP5gTYhuNC6o%2BuxlKVqB1lE84Y0YWWFqGaURGPmBJzXbc8uSXBiP1lcKDPWlev9ezjiSedkaodIKVEIbqAtrnkoDjbI1Y&X-Amz-Signature=5e7a4db7713ca25d521e47352652dad5cb0479b9c97342731fbf20e3c7188506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55G26J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGYAxdttkpNwjrKc2x2bjwh2%2Fn2mCwwnE%2BML8A8dPN5AiAp9RpMAMrR1KouTiu6Gry3u93%2B0jz%2Bnb7bZxWgSrReuir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM0efGYr7w%2BRHMAwToKtwDi5ZU%2FNwizggC5RbwjDWEIpVHK%2FqhtMhchRSK%2FfKH9gU8FenXSWipSG0BZYbo6fmQmLOOEh9OSRQKOiitPj%2FmkZUGZOr5egoqQYyEMThKSP06hDVkd%2B8vSopr2jbmjQ1hWqkIFB6b3VI0eN%2FPI5gi%2FuIic3%2FYnfQEjiyynrPSiP27oiA6WZpE%2BbBITJhSnxwSyjBryWTq%2Fm57xsVFPPSm%2BtpdQCvBDE2Vne5o9V8O1JmSiUZSvnHjM5poDWD5kO%2FJ9CjINiB%2B%2B138QBryQXfxGVT%2BRE%2FmvfabEwXbGvoXFkduAW9L2vUxn2ocO9i%2FcN9fRYMOQW9yaFWwDNUCkceu1vXJCmneAzh1VjyuvdE0phpl7EeTcJlmrNg%2B7xoe9u7dHGKKBIMIGAzhGAyv0uSr4jqpKELId1pT7AkbnjJJLvGVm927ZBkFuR9a5vZiR5FMyYBIZe9DgPAj2EK9uyDFc%2FoiZmvdvB5%2FQEBBNpL1MCOEC7rS2Ku%2F90OrY0sMSg6rFTKmkVyzjSRCMrbs0B9fBGIlXa0d1Vz2Iq3RAUq8iquJ7ourk858erO6hDY%2F4kwH%2FSVz12TiQmBkY9iUxlhLS4dXHrXGTnowqOt1ANvgHBZEJB6TBa5GzEUwizkw2MTRyQY6pgFTqzlK9gUPROUgqB05Zb4ocFD9LNhoU626Rr0pVOWBa2wG6z%2BULqTFR0ZcqA8thGn7REMLeecXYEMjihjMpD459H6ay3dOWwnqDfYfKmKzhOQR0%2By7Qiykpy6d0XkmNKAgP5gTYhuNC6o%2BuxlKVqB1lE84Y0YWWFqGaURGPmBJzXbc8uSXBiP1lcKDPWlev9ezjiSedkaodIKVEIbqAtrnkoDjbI1Y&X-Amz-Signature=13c845573f1cc088aa77414941d3eccc3f2012ad40f60240a313e2e6b70b0678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
