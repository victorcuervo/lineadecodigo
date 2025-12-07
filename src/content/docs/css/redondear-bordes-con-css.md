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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTKWSIT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdO6xJeFGy1zqaDFmZe6h9ZVmVnXr72Ttr8tVa3kypnwIgZDPV4GhAzLogpMqwrmteKQCiBCEm6trOBkvhwgukYOgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYMx2Kr0gtuciLFQCrcA%2BJrwpKl3xJe2s32kODL%2FGCwtshiOntA8o9H%2Bl44HAyx%2B6P94Hkp6UUwObVOcOq0nmR%2FmyhZEmugPsBt0qdWYwOHEmWVZrB1MtBGqhTgw%2FNqn1mZ%2FAAVJj08xtxmTeL3GEiYlLmAhyYfXXf2r57aMPGg11C%2BzbY73iwI5RwBObXO%2Fu6fMei%2Bo659Q96zGMHeOz6Nhiwrf8OpsG6TfGPU6dGTVtvGnFd1mXLDL3xtyv8T9HnM7Ta%2BCMkGN7xe4lFGSjYPQ9muhOY%2B7N5p3ru1c4vc2HW0%2FE32mYpGiztPtEZ3IzJxTkzrQduLrNSzjQGbwcL%2Bw0OV06mU6zbOYPxZcXj5oYAtFvT8THbRQUh8qUJKPhsphFbKzeKElIS5MJjbdDefq7l8MohDXdx0QAAHsI67y%2FQaUboLRFVxFbiOBiEcPHmMDvB6v4FYWG5oyUeWimHyaVyGNObwWhAOfA8T6Pxc1SzdT2jngcNK53Va%2Fi7zXE09BD34s5OR6Kl3WHswGLNzwMcL815k1WKy0tKXj45EUtCqb26g4hkR5IEHHYEHTqAmNPu4Lr0xk5hFDjBTcW8bBVNk3JZ%2FeY%2FnMKQwKaH00sImdPt7CfyrdKUGJezFyYVtfJLlEYfkj5knMMqY1MkGOqUBYB5MhCIyubjs%2FNiz4GLUkSLndzj6o1qjtLFj3078Cb%2B7SJpsNIUQDK%2B7K29Bi2xo6NK9YfHdeIGjYgPyYR7HLlaURMMWE5ij7Zry09Ad2KGKkt2lIkPSCWCa1h6%2BP%2BhluYtVvUfiPeISMJHxPN9EwK6QA7NDxc1NDUlHXag33gU4GLcyzVTB0k4xJ0gkDQW9e6wmsyMhWqLS%2F3p%2FQs7IX71%2FcnQH&X-Amz-Signature=0d567e572f5aa5cb74ccd97183c724b7c33f5d97bc75e32137eaeafd79b0e7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTKWSIT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdO6xJeFGy1zqaDFmZe6h9ZVmVnXr72Ttr8tVa3kypnwIgZDPV4GhAzLogpMqwrmteKQCiBCEm6trOBkvhwgukYOgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYMx2Kr0gtuciLFQCrcA%2BJrwpKl3xJe2s32kODL%2FGCwtshiOntA8o9H%2Bl44HAyx%2B6P94Hkp6UUwObVOcOq0nmR%2FmyhZEmugPsBt0qdWYwOHEmWVZrB1MtBGqhTgw%2FNqn1mZ%2FAAVJj08xtxmTeL3GEiYlLmAhyYfXXf2r57aMPGg11C%2BzbY73iwI5RwBObXO%2Fu6fMei%2Bo659Q96zGMHeOz6Nhiwrf8OpsG6TfGPU6dGTVtvGnFd1mXLDL3xtyv8T9HnM7Ta%2BCMkGN7xe4lFGSjYPQ9muhOY%2B7N5p3ru1c4vc2HW0%2FE32mYpGiztPtEZ3IzJxTkzrQduLrNSzjQGbwcL%2Bw0OV06mU6zbOYPxZcXj5oYAtFvT8THbRQUh8qUJKPhsphFbKzeKElIS5MJjbdDefq7l8MohDXdx0QAAHsI67y%2FQaUboLRFVxFbiOBiEcPHmMDvB6v4FYWG5oyUeWimHyaVyGNObwWhAOfA8T6Pxc1SzdT2jngcNK53Va%2Fi7zXE09BD34s5OR6Kl3WHswGLNzwMcL815k1WKy0tKXj45EUtCqb26g4hkR5IEHHYEHTqAmNPu4Lr0xk5hFDjBTcW8bBVNk3JZ%2FeY%2FnMKQwKaH00sImdPt7CfyrdKUGJezFyYVtfJLlEYfkj5knMMqY1MkGOqUBYB5MhCIyubjs%2FNiz4GLUkSLndzj6o1qjtLFj3078Cb%2B7SJpsNIUQDK%2B7K29Bi2xo6NK9YfHdeIGjYgPyYR7HLlaURMMWE5ij7Zry09Ad2KGKkt2lIkPSCWCa1h6%2BP%2BhluYtVvUfiPeISMJHxPN9EwK6QA7NDxc1NDUlHXag33gU4GLcyzVTB0k4xJ0gkDQW9e6wmsyMhWqLS%2F3p%2FQs7IX71%2FcnQH&X-Amz-Signature=0fbbd6e36a2c98d2211f7d7d52fe801871b3fae87488a359ac732da48328f693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
