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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL76GM4Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXh5GOuDdznNrFStK3gIqlhi7C%2FsN4hrafaV6xlDcQYAiAzoF%2F%2FZd%2B0nIcCh8zfFIBwXq%2BqQ41h0%2FLgZpA42Ka9iSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMujEyEicGxWGlszVHKtwDjRZkvkX%2BstBLca4e4wempYLiALYG5umBtnqDXjZ8FRbZBHGhJPZubqqQkEkXOd5%2B%2ByEBLp9w3Sszp8HUTZpEampYjSGQRFiokE%2Fs4S%2FavONy14ngMHO2Rndxxxi5DPjL%2BGq9w3EFKiT%2Bh7lZjwe8pzqluuuDrjc5piI9hpZmzfM39Gl83HAbCgwkwsBZBoNLvCvxCRl%2BXLzwPz9lf%2BRoEQSQK8ocrzEejB67xXJkpb8JpTb%2BwAYZ1R0C1IOlxG319HxSGpRu9o7whr5BwZCpMyhZ7jDbb0mkL2vEQdLxvFgZ1lVO0nGSd2GbqCOH8fgAU8ZIO35pEKiZlDgJfWq19LzSiSrn0mcg59ajZ4FVKU%2F1L76h%2FzrY0yp11v9sZxGwK72AswImfVJX8kwHxO6LVlh5qR9EBCf%2FBZKNQYPtAblyf6f50J4nwMSmQW%2FynTDkEJuZ1K7xpXSIvn5A2mXKDiPyW%2BW%2FgojeEC0oMEvE3NMp6OoxIB3OjUcoOW9Gcim9HxOrExqJrkXhPO%2B5jBwn2d8y712w2sKW45g8Y0Neue6VzynKwqEGd4DuGCSclGlOSUQaXVV1hHmGbmJH9YuwKQZUP%2BJr%2B%2F0r5xERNpzOa0BplD4dt8wpeGAnf6IwoMHbyQY6pgHxwXMc9IXX3ejPnE2zCvgTI%2F3sC9oFSHxBzveNFKnrO%2BRmMDzN%2FkogR0nIR6piDuNHuqH9a8jjSD9l3Myy4nhqPLgIimjZ2R9Or8jx%2FD2mvTYqu8ATSRXBupZ0w7LuVnKDIn5T0NWVISkec%2FwKCAbfcb%2FAV0jL1aK4Q%2F4S9HguHshjbYZKrxDPAt31DIwWR8lFMHy5WtZ9l5ftvAMCzdDkRwIwExZm&X-Amz-Signature=6363e791046904aa6731829be84b41ab85625254fe597e2dbec71c42a283ea8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL76GM4Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXh5GOuDdznNrFStK3gIqlhi7C%2FsN4hrafaV6xlDcQYAiAzoF%2F%2FZd%2B0nIcCh8zfFIBwXq%2BqQ41h0%2FLgZpA42Ka9iSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMujEyEicGxWGlszVHKtwDjRZkvkX%2BstBLca4e4wempYLiALYG5umBtnqDXjZ8FRbZBHGhJPZubqqQkEkXOd5%2B%2ByEBLp9w3Sszp8HUTZpEampYjSGQRFiokE%2Fs4S%2FavONy14ngMHO2Rndxxxi5DPjL%2BGq9w3EFKiT%2Bh7lZjwe8pzqluuuDrjc5piI9hpZmzfM39Gl83HAbCgwkwsBZBoNLvCvxCRl%2BXLzwPz9lf%2BRoEQSQK8ocrzEejB67xXJkpb8JpTb%2BwAYZ1R0C1IOlxG319HxSGpRu9o7whr5BwZCpMyhZ7jDbb0mkL2vEQdLxvFgZ1lVO0nGSd2GbqCOH8fgAU8ZIO35pEKiZlDgJfWq19LzSiSrn0mcg59ajZ4FVKU%2F1L76h%2FzrY0yp11v9sZxGwK72AswImfVJX8kwHxO6LVlh5qR9EBCf%2FBZKNQYPtAblyf6f50J4nwMSmQW%2FynTDkEJuZ1K7xpXSIvn5A2mXKDiPyW%2BW%2FgojeEC0oMEvE3NMp6OoxIB3OjUcoOW9Gcim9HxOrExqJrkXhPO%2B5jBwn2d8y712w2sKW45g8Y0Neue6VzynKwqEGd4DuGCSclGlOSUQaXVV1hHmGbmJH9YuwKQZUP%2BJr%2B%2F0r5xERNpzOa0BplD4dt8wpeGAnf6IwoMHbyQY6pgHxwXMc9IXX3ejPnE2zCvgTI%2F3sC9oFSHxBzveNFKnrO%2BRmMDzN%2FkogR0nIR6piDuNHuqH9a8jjSD9l3Myy4nhqPLgIimjZ2R9Or8jx%2FD2mvTYqu8ATSRXBupZ0w7LuVnKDIn5T0NWVISkec%2FwKCAbfcb%2FAV0jL1aK4Q%2F4S9HguHshjbYZKrxDPAt31DIwWR8lFMHy5WtZ9l5ftvAMCzdDkRwIwExZm&X-Amz-Signature=5cf808b57c65143effd3bddb308272205e8c3c4314694492c5e66c8aa73c08be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
