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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFUYVRO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJxnlZOHV5sEK5IKTuniNse7Mmo8P9D5JCYBrR9aUBfAiEA%2Bwp5OUs53ksSLzDE1n%2BKY5wCgEAK%2BascIp39WEp%2F4t4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIRyRkixeOkLJ0Yx3yrcAwyLiwtfbNoB9HoaRAPglc0%2F%2FOMuXLJa%2BbqqqDGkY0BbqBqFsQ70jzYXTQvUZosoX8EEDFf5vmmMB3h96JhFLoh2Q6pNIFomWJYc5UV91oiSX9S92aVPqplQTSe2iiiIbmUsxUk4FrKV0LEHISaaA61qaNkF0DBlXm4uwc5f9rCe0d8bGZIWANw0ySFnfS9S9jFh8sUnC7%2FiqTBTkoxNbXZa43BgCGBk2lchFeTA3Q5KgZYT6Oq%2BB1jBcQBLxFARSWdkaFn9ZpdAiIqLT2ehmETuqjHta6advOPhPFiY7uK3zogXm2%2FZ4hShoAPQc4%2BE7mfH6plFY%2BRjFlkdHjGVrJtFT8z0mOTynvT4sRipP5mx036cwXzyMcqxth76FhfbQZFuz%2BO%2BDHbgAxRGVNQ%2FGF%2BvWxHqf4dABf5LezxQwhUcb5Ql462g7JtS%2FG5SLp9gb%2B5uRjhInbwUpFLyCYXj62sooDFln7%2FmwU%2BNlt21MFrtVQ8v7g1ALgZM3q25KB286r07ULFzukeQH78nAZARQ8OddwogoTVN%2FCLdNdlqvjVTiNPyENDN0QjfOQIv6KpnkapYUpzAvsII%2BXaRRl9dxkld3eOsadWxIGBsrxKxd6mpZLVzEOEEQS%2B1m1sFMO2OisoGOqUBx4s%2BRHHM5IGwsBN8kd8fD4Wqs4sDyLJKYDQ86h2PLpftDCULgEMuZjpa3P4m9f7MwdAelLi5KqU45EiFw7AHpY4%2BuPbZSg5tLx68nRMiC55b2vJKVlVZQypsa9oBRgJUxAXIQP4YTg%2F2cY8Z3Ye32DMAzsLb%2FsltEVd9DXib0A4PK0mhZ51d9f%2FwJ390NrSloOVyQoEpOKqqax9BKeMqb2VMTX81&X-Amz-Signature=14c7ddc4d32eab6428bb44e8f9210060dedd1d5aee43a5ec46c4faa7f3d3837b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFUYVRO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJxnlZOHV5sEK5IKTuniNse7Mmo8P9D5JCYBrR9aUBfAiEA%2Bwp5OUs53ksSLzDE1n%2BKY5wCgEAK%2BascIp39WEp%2F4t4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIRyRkixeOkLJ0Yx3yrcAwyLiwtfbNoB9HoaRAPglc0%2F%2FOMuXLJa%2BbqqqDGkY0BbqBqFsQ70jzYXTQvUZosoX8EEDFf5vmmMB3h96JhFLoh2Q6pNIFomWJYc5UV91oiSX9S92aVPqplQTSe2iiiIbmUsxUk4FrKV0LEHISaaA61qaNkF0DBlXm4uwc5f9rCe0d8bGZIWANw0ySFnfS9S9jFh8sUnC7%2FiqTBTkoxNbXZa43BgCGBk2lchFeTA3Q5KgZYT6Oq%2BB1jBcQBLxFARSWdkaFn9ZpdAiIqLT2ehmETuqjHta6advOPhPFiY7uK3zogXm2%2FZ4hShoAPQc4%2BE7mfH6plFY%2BRjFlkdHjGVrJtFT8z0mOTynvT4sRipP5mx036cwXzyMcqxth76FhfbQZFuz%2BO%2BDHbgAxRGVNQ%2FGF%2BvWxHqf4dABf5LezxQwhUcb5Ql462g7JtS%2FG5SLp9gb%2B5uRjhInbwUpFLyCYXj62sooDFln7%2FmwU%2BNlt21MFrtVQ8v7g1ALgZM3q25KB286r07ULFzukeQH78nAZARQ8OddwogoTVN%2FCLdNdlqvjVTiNPyENDN0QjfOQIv6KpnkapYUpzAvsII%2BXaRRl9dxkld3eOsadWxIGBsrxKxd6mpZLVzEOEEQS%2B1m1sFMO2OisoGOqUBx4s%2BRHHM5IGwsBN8kd8fD4Wqs4sDyLJKYDQ86h2PLpftDCULgEMuZjpa3P4m9f7MwdAelLi5KqU45EiFw7AHpY4%2BuPbZSg5tLx68nRMiC55b2vJKVlVZQypsa9oBRgJUxAXIQP4YTg%2F2cY8Z3Ye32DMAzsLb%2FsltEVd9DXib0A4PK0mhZ51d9f%2FwJ390NrSloOVyQoEpOKqqax9BKeMqb2VMTX81&X-Amz-Signature=956e8389e81c70a971af4769f537ec162fc7d09e76a1b1310df71c2281de580c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
