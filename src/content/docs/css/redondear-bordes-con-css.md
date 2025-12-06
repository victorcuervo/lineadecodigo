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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HXD225O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8pkmHJ5IURv0CelAQrN4X4BQ7TouGSWHHYbh2U08aNQIhAISElYVjlwEfv2LTPl6CkYPgwMGMWBhY7yEdXBShmSxcKv8DCHUQABoMNjM3NDIzMTgzODA1IgzaKDPq6UlUrC4O3DMq3AOIW6apsouvCQoOES1PCTIucmW05%2BVj9qZ1NaQhMxopeottLgVmj65K%2BSORKoj1%2FbJj67qHasLOCmHfh5NdfZ4oJsaVDmEpAf1f10Tl%2F9jKKMQukD%2BX5zDf7pAfPIJIA82yZE7gxT7uhwdGxpPTS%2BT%2Bj8k5LjH%2FoP5olWgsHdjU9MrLk0XD3rs%2Fu0nUmPqKHT8fe7yMK76YWo0vPR3OrcuDVFK%2FDSEFSQHBf%2BsKv1rss9w9L68fA%2FkhWtkVnntVJ9Sn77KlGOFZ8tKrtYFy%2BijMtT%2Ft2ITAdpsbDgXNfnPubk3f1R4nyepoe46dy2JdRLGkDCe%2Fgw%2B%2B7iGhoGAyl1QN5GL75st4dY9axLK1c3eSuJl5NIEm%2BlxxDNuuLXE%2Fu%2B0eOG5dwZGCl3NaoluNDMqRf%2BY4ZdAw%2FVg6LDHByBS24vmGl6UXexqv4fOij%2FjHc7vLif5tZ%2BPtcu0qUgRMT0QbiJ3eDaFY%2BswglZT7NkLvSS0AQ76rryUQRA%2BS6xcDoiOcWiRcGi4xM67GzWX0YU7SbrSIevlFv1qpuBJCwX96rmqonrxhFVEjxxS8nqWf8JlUBWXhR%2FUbfG6aF7q%2BSDtEklHJZmJ0tbrFbsnjWJA%2FIytIxqgNU0jZfbJs7zCiptDJBjqkAUkl%2BJWd3kR5GhJWgXGQUXXcuWtYDOXEr%2BdUE0yGHUzBUiVlLLXQBZTq2Wm2nvxMPkcsKtsGCrqYA3TLRE%2FHyUguFIf6q428x8Vb%2BRg9FGjgJhJy2lCU2ZwknhzqBzcTgYH3CCmrxg%2Fdci4P%2BVMp3mEhbbbDHMC20Z29wXIUYRWXYzTgCjkRdM4WraAde0Zaufan9ADtgxRDn9UXxyVTXCV%2F6sVb&X-Amz-Signature=4ccf03fa9f4b3ffdc0ba119e54ddcd941a7d6cbb540b5ebea26698d0631ab248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HXD225O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8pkmHJ5IURv0CelAQrN4X4BQ7TouGSWHHYbh2U08aNQIhAISElYVjlwEfv2LTPl6CkYPgwMGMWBhY7yEdXBShmSxcKv8DCHUQABoMNjM3NDIzMTgzODA1IgzaKDPq6UlUrC4O3DMq3AOIW6apsouvCQoOES1PCTIucmW05%2BVj9qZ1NaQhMxopeottLgVmj65K%2BSORKoj1%2FbJj67qHasLOCmHfh5NdfZ4oJsaVDmEpAf1f10Tl%2F9jKKMQukD%2BX5zDf7pAfPIJIA82yZE7gxT7uhwdGxpPTS%2BT%2Bj8k5LjH%2FoP5olWgsHdjU9MrLk0XD3rs%2Fu0nUmPqKHT8fe7yMK76YWo0vPR3OrcuDVFK%2FDSEFSQHBf%2BsKv1rss9w9L68fA%2FkhWtkVnntVJ9Sn77KlGOFZ8tKrtYFy%2BijMtT%2Ft2ITAdpsbDgXNfnPubk3f1R4nyepoe46dy2JdRLGkDCe%2Fgw%2B%2B7iGhoGAyl1QN5GL75st4dY9axLK1c3eSuJl5NIEm%2BlxxDNuuLXE%2Fu%2B0eOG5dwZGCl3NaoluNDMqRf%2BY4ZdAw%2FVg6LDHByBS24vmGl6UXexqv4fOij%2FjHc7vLif5tZ%2BPtcu0qUgRMT0QbiJ3eDaFY%2BswglZT7NkLvSS0AQ76rryUQRA%2BS6xcDoiOcWiRcGi4xM67GzWX0YU7SbrSIevlFv1qpuBJCwX96rmqonrxhFVEjxxS8nqWf8JlUBWXhR%2FUbfG6aF7q%2BSDtEklHJZmJ0tbrFbsnjWJA%2FIytIxqgNU0jZfbJs7zCiptDJBjqkAUkl%2BJWd3kR5GhJWgXGQUXXcuWtYDOXEr%2BdUE0yGHUzBUiVlLLXQBZTq2Wm2nvxMPkcsKtsGCrqYA3TLRE%2FHyUguFIf6q428x8Vb%2BRg9FGjgJhJy2lCU2ZwknhzqBzcTgYH3CCmrxg%2Fdci4P%2BVMp3mEhbbbDHMC20Z29wXIUYRWXYzTgCjkRdM4WraAde0Zaufan9ADtgxRDn9UXxyVTXCV%2F6sVb&X-Amz-Signature=6645e6bc63bcac2f4725321aaab29b03ae4cb6281c7c0be9227a4e59436f2bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
