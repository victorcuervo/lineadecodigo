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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITLXAG5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICliUOxhCuuONATKZCdoxdNAsML2k5GY%2F%2BBL9f55yU%2BzAiA8LusSLzFl8k6K6XQ2Rmk%2FX0ov7tvnZ%2BSu8JfW6K%2B2Eyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM0ZXC5HNOToNbuS81KtwDOr8TdXRFAcCINHWgc%2BStWpXYjnnAHqHIL5Kn08QfGUikpOotlbOjdK5bYiEMgsKp8zZP6fwCNSXotTWyuvZYTyrGcMW6HEK73UuS4OeJvavygKQO5AM%2FLTgVupA1Jkc0B5zWIoVV%2F5b2nidnENR5peQC%2BDmqeLYvVVMyJQAc%2BVJyZFrPqU9wz%2FYq5yiyGeC6AR4aDb%2BsiU9J2BLuQpXOjO%2F%2Fl0MvwJgtSbLl3s2Ou%2BffWbyb%2FcdLLfJHJqUNjsI%2F6H%2FT7nvtdQvxNsrWKuuGg8YAQTyi4BZk1SGQv75LJEDV8QDVpDLS05QZisJqVkmmedKM0VQSod4CFcsI5WtdbpZZskjoIYMcI%2BnZ6kxt%2BEvgdloDOO8TdhwP8F6PCoH6x%2FSUBSDAz4WrlsdsL65SwfO%2F%2F76xrGRKKaWyZVgoNKpriZ%2FA6MZX7Eap%2FJt%2F83%2Bo8GrgMIbLj%2BQ9fULoH5PhwLVdcckR%2BherWRj5fwLv5PhmDTs2LafFOqj%2BKlc61ys6xMY8FgrgtNIBAG0FSoOxF01AIGfALTkGUMT1wbbOCtK9Mqu%2Fd3P95deoAsdjOqjEYFw%2B%2Fz6aTwift0%2FFTUn6dsHkqCgebI59a2lIeNglX8UvwpdQ4Rfs3mDahtIwvOjNyQY6pgFXRURdJPXCg81DUfgS0V6r3%2FbjIyD3Shf7uiH5WF%2FGobbnkW%2FgrwSLUaPj40f5PKgJP712%2BhYJHZbLFhWk%2BEINJ0j6qZEtxnEQIFVmJlQQDb4pSdIMMbbgtOgaQ9yVKjO5S1QqsEDpAf656Uw6eLAPWNkW6M%2BUuzTSjZHSkDuJY5egwyx%2BObiIsda2bvlyWRaTEJqCdvksHYkhfPQD65mdk8uk%2BVRQ&X-Amz-Signature=4b9d8517d25dc0a482891af58095c3d83040acd1adf6f0d86867551197fb3478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITLXAG5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICliUOxhCuuONATKZCdoxdNAsML2k5GY%2F%2BBL9f55yU%2BzAiA8LusSLzFl8k6K6XQ2Rmk%2FX0ov7tvnZ%2BSu8JfW6K%2B2Eyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM0ZXC5HNOToNbuS81KtwDOr8TdXRFAcCINHWgc%2BStWpXYjnnAHqHIL5Kn08QfGUikpOotlbOjdK5bYiEMgsKp8zZP6fwCNSXotTWyuvZYTyrGcMW6HEK73UuS4OeJvavygKQO5AM%2FLTgVupA1Jkc0B5zWIoVV%2F5b2nidnENR5peQC%2BDmqeLYvVVMyJQAc%2BVJyZFrPqU9wz%2FYq5yiyGeC6AR4aDb%2BsiU9J2BLuQpXOjO%2F%2Fl0MvwJgtSbLl3s2Ou%2BffWbyb%2FcdLLfJHJqUNjsI%2F6H%2FT7nvtdQvxNsrWKuuGg8YAQTyi4BZk1SGQv75LJEDV8QDVpDLS05QZisJqVkmmedKM0VQSod4CFcsI5WtdbpZZskjoIYMcI%2BnZ6kxt%2BEvgdloDOO8TdhwP8F6PCoH6x%2FSUBSDAz4WrlsdsL65SwfO%2F%2F76xrGRKKaWyZVgoNKpriZ%2FA6MZX7Eap%2FJt%2F83%2Bo8GrgMIbLj%2BQ9fULoH5PhwLVdcckR%2BherWRj5fwLv5PhmDTs2LafFOqj%2BKlc61ys6xMY8FgrgtNIBAG0FSoOxF01AIGfALTkGUMT1wbbOCtK9Mqu%2Fd3P95deoAsdjOqjEYFw%2B%2Fz6aTwift0%2FFTUn6dsHkqCgebI59a2lIeNglX8UvwpdQ4Rfs3mDahtIwvOjNyQY6pgFXRURdJPXCg81DUfgS0V6r3%2FbjIyD3Shf7uiH5WF%2FGobbnkW%2FgrwSLUaPj40f5PKgJP712%2BhYJHZbLFhWk%2BEINJ0j6qZEtxnEQIFVmJlQQDb4pSdIMMbbgtOgaQ9yVKjO5S1QqsEDpAf656Uw6eLAPWNkW6M%2BUuzTSjZHSkDuJY5egwyx%2BObiIsda2bvlyWRaTEJqCdvksHYkhfPQD65mdk8uk%2BVRQ&X-Amz-Signature=488b8d36a1f242baa49057e3fda72ab3e7f7ce880fba7bbb14a471ed3d0f044c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
