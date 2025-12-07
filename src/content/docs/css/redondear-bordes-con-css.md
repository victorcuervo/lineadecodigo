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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MJJQWVO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvBTUk496tS22hfy3cZSLATSlEM85G6TYcIZ8DIseHqwIhAMlNmYWi7tUbOqaYoYYT%2Bq00zQ3MA5yKZlk2VB5272MaKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Am7H5pnw1fH7yLcq3ANDTKwpqiIoTBobNOvGQiBWRjTQzQxBNMDyKpYImNJddEhY7eIPbSPuRZ0GxaalpD33oDa9sZBagw%2FjZSReK%2BbHb3pcX23cgccw3f1A%2FtS8DbFAm5%2BQ8NiiG3s8OFsQa8jNaZirtvGfV99h20cITAaPA1ocZX%2BeiXh%2BP3hixhELd7QvUglQCm91Y4NLY1rOGSDCkkXF5pFhII1v1MOowcGinRPAsR6txhefCdMk683UBzSFZp1CLPcPk5Y8iBJWk9xxNMAcYa8wrA%2Bbv%2F4kr3Ftr2eVup4Q3Ca%2F1WNziaf7hWZ%2FODmVzksL2BZq0C16JwXYCHnEHS6eVZpC7tDywJfsp5oZD2eSB5R8ns%2FbGVZF8kpYr3aQ0bEpxWExb7zgcFXsjsQKLT9TAwQdgYuiedYwz2v4rTQs3HH1SZyQo04jg8Zk%2FgJ5bLH1dpxcNEHm2c4t%2F%2FuvA7WCZRcW3g1tflPZgIXPzL1aY9CMCNefWQUSlG2zQ%2BEWawCC6LwRofuDwzUkBJ10rMliTLrP9y%2BTUms%2FrIZd9N19Ps9xc320iApT3HM7xe6tdnaT4IejvB%2FvewqeGcE4IKeXJJDRV3%2FganiO5mqQWAqO9GgHNCcYBKQDuelihzTrFZ9c%2FwCdaDDsxtfJBjqkAY7SJV0%2FTeJFWPwx5zuJ8Dck3amHNjTgBByfi3%2B%2F%2BYSpw6MAZ64oY4Ecbt1XmnLnJ4hRGOBA86e%2BRSjAa3sEeNwbDtFFDwaSy4rZBLsNBfBV60rvPr7yfsWgXaHHJs4NeVmHG0qAvCVaqPJwY31oAD%2FyfKABiB5L93BfJjBXYlYM3vAgkALCc%2FQQX3vtA18CjrFA1j1TQKSRel3o1AOG%2BA7PEIgp&X-Amz-Signature=48758eb0f8729a1bc4f8652d0fa5044ce4f98a32f42854d0d0ce7263b61b970a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MJJQWVO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvBTUk496tS22hfy3cZSLATSlEM85G6TYcIZ8DIseHqwIhAMlNmYWi7tUbOqaYoYYT%2Bq00zQ3MA5yKZlk2VB5272MaKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Am7H5pnw1fH7yLcq3ANDTKwpqiIoTBobNOvGQiBWRjTQzQxBNMDyKpYImNJddEhY7eIPbSPuRZ0GxaalpD33oDa9sZBagw%2FjZSReK%2BbHb3pcX23cgccw3f1A%2FtS8DbFAm5%2BQ8NiiG3s8OFsQa8jNaZirtvGfV99h20cITAaPA1ocZX%2BeiXh%2BP3hixhELd7QvUglQCm91Y4NLY1rOGSDCkkXF5pFhII1v1MOowcGinRPAsR6txhefCdMk683UBzSFZp1CLPcPk5Y8iBJWk9xxNMAcYa8wrA%2Bbv%2F4kr3Ftr2eVup4Q3Ca%2F1WNziaf7hWZ%2FODmVzksL2BZq0C16JwXYCHnEHS6eVZpC7tDywJfsp5oZD2eSB5R8ns%2FbGVZF8kpYr3aQ0bEpxWExb7zgcFXsjsQKLT9TAwQdgYuiedYwz2v4rTQs3HH1SZyQo04jg8Zk%2FgJ5bLH1dpxcNEHm2c4t%2F%2FuvA7WCZRcW3g1tflPZgIXPzL1aY9CMCNefWQUSlG2zQ%2BEWawCC6LwRofuDwzUkBJ10rMliTLrP9y%2BTUms%2FrIZd9N19Ps9xc320iApT3HM7xe6tdnaT4IejvB%2FvewqeGcE4IKeXJJDRV3%2FganiO5mqQWAqO9GgHNCcYBKQDuelihzTrFZ9c%2FwCdaDDsxtfJBjqkAY7SJV0%2FTeJFWPwx5zuJ8Dck3amHNjTgBByfi3%2B%2F%2BYSpw6MAZ64oY4Ecbt1XmnLnJ4hRGOBA86e%2BRSjAa3sEeNwbDtFFDwaSy4rZBLsNBfBV60rvPr7yfsWgXaHHJs4NeVmHG0qAvCVaqPJwY31oAD%2FyfKABiB5L93BfJjBXYlYM3vAgkALCc%2FQQX3vtA18CjrFA1j1TQKSRel3o1AOG%2BA7PEIgp&X-Amz-Signature=3f713295812fba7cbe9af2863999580c1550b8acd9cfc7a9daf3b3326f321dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
