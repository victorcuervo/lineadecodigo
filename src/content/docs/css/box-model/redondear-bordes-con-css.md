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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFABAS4L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuB0G6BkQs9ziIJjQrYKmIrKASUllXTdz%2BbqCGW%2BfbeAiEArs8a%2BwKriwMspF3rHF6a7gUtYGxdmJpsjkTHxnYax%2Fgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEn%2FsZ1zElxtAw621yrcA48UjpiVL%2BFiSdJ3EnEgTPX4M3CPL75K7hU5z%2FXn01UFdwDbJLYebxhaIuDsFNj52AzG9T8WQVAXWf929vLbZ7jiObN2y21kBTv3jH7UoyM7HvwgB1l1ow7MnyR8%2B2X%2BVEted9faQurPLyS5QH0HsicZ1fpYFMTBk3PGyWZZyqXJinbmQ9opVdSyDPC8370K89BMwaOLNk4mkgf3sEEen79SPlmEOQr7bX9Jkua1FUuQnklKAKKmevSyRplqbkBarGbDM8DnhUr1D4egNA0JJ%2F1M3nuiFKKmS7h8mx88lPlJpnaxqEW2VXmjII8wGf8uop7H3cpbbry4a6knl6lW1HgMOtum1Og55fmbGavvsdbOiLmFRWdYGgWBOQfF5EDMYEVwCuQiamABtXc6wQ7b5OIQFv3%2FVo1TvGo3NshHLUfzgj6miJiFuZMeVvLf5NM9GvAb9mMkSNBc6DsvNyfHc0jjaOINtaq3307wrqcl1ugRlGGlUSjFZ3JDVEYEwIKVgIp%2FgsF2J2yRgR8o9Bam8A0Z2UBmhMyP37Md7V%2Bc7bLBkkVn71SQ8H3omV4A9iHA%2BYzW%2F%2FG5ywSH40P5Y0YT6ALzGL%2FtbEKuspFqEzExRxnVYEJXPVD9QgjE%2BCVvMObpiMoGOqUBX0zHRDo%2B%2F1HnhovlSonOTAFVMVUGVXTaB7QcEDjrhvaLlWavDzZTjQoU24XcrPoua8dSlGVRCLhunN4U59mM0afcLWmtRPUdeZm%2BXiqbQv28qUaaiWPxGzdYXuB6ZanZu8Nb84WvX%2F3OdtYi6iM31mbeiwdkK9kT5HmVdzQrNYzdL175iR20hIZniQJC%2FFd9QMWQlIJilJrV60svYXO5V4QaHAxo&X-Amz-Signature=54bafcd555a3ae4b288405d2d14633e52c8e840d0f0f40251cfab9c382eae991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFABAS4L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuB0G6BkQs9ziIJjQrYKmIrKASUllXTdz%2BbqCGW%2BfbeAiEArs8a%2BwKriwMspF3rHF6a7gUtYGxdmJpsjkTHxnYax%2Fgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEn%2FsZ1zElxtAw621yrcA48UjpiVL%2BFiSdJ3EnEgTPX4M3CPL75K7hU5z%2FXn01UFdwDbJLYebxhaIuDsFNj52AzG9T8WQVAXWf929vLbZ7jiObN2y21kBTv3jH7UoyM7HvwgB1l1ow7MnyR8%2B2X%2BVEted9faQurPLyS5QH0HsicZ1fpYFMTBk3PGyWZZyqXJinbmQ9opVdSyDPC8370K89BMwaOLNk4mkgf3sEEen79SPlmEOQr7bX9Jkua1FUuQnklKAKKmevSyRplqbkBarGbDM8DnhUr1D4egNA0JJ%2F1M3nuiFKKmS7h8mx88lPlJpnaxqEW2VXmjII8wGf8uop7H3cpbbry4a6knl6lW1HgMOtum1Og55fmbGavvsdbOiLmFRWdYGgWBOQfF5EDMYEVwCuQiamABtXc6wQ7b5OIQFv3%2FVo1TvGo3NshHLUfzgj6miJiFuZMeVvLf5NM9GvAb9mMkSNBc6DsvNyfHc0jjaOINtaq3307wrqcl1ugRlGGlUSjFZ3JDVEYEwIKVgIp%2FgsF2J2yRgR8o9Bam8A0Z2UBmhMyP37Md7V%2Bc7bLBkkVn71SQ8H3omV4A9iHA%2BYzW%2F%2FG5ywSH40P5Y0YT6ALzGL%2FtbEKuspFqEzExRxnVYEJXPVD9QgjE%2BCVvMObpiMoGOqUBX0zHRDo%2B%2F1HnhovlSonOTAFVMVUGVXTaB7QcEDjrhvaLlWavDzZTjQoU24XcrPoua8dSlGVRCLhunN4U59mM0afcLWmtRPUdeZm%2BXiqbQv28qUaaiWPxGzdYXuB6ZanZu8Nb84WvX%2F3OdtYi6iM31mbeiwdkK9kT5HmVdzQrNYzdL175iR20hIZniQJC%2FFd9QMWQlIJilJrV60svYXO5V4QaHAxo&X-Amz-Signature=5da7288743e570daa45750b32b996df915983aa81255eb25bd0168bd8fd0407f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
