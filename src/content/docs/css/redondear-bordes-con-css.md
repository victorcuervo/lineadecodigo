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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QWXJUM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMhCaz8Q5BONN%2FL9zkndxzaJK2K7%2B7YSIRMuOMTGcKQIgaDcPqT5GUr2NTU6Ev6VUL1euGF67fx2aJCjR4XKnt%2FIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcRGL3kJpwpP%2FYBXircA8YgLdR4%2FGrNLBpLPHD3dmfdlPaplhalDLbPqeYRTbwamqHjeHMOv%2FQQXsArS%2FPM51OgT3l3zPe5kvkdHDraVbBIxqovZfpqHH9iOpwpnnczKJTTOMncLJX21jv7UoQTom7Aw4q7C1SJD3VKNV3R5RlN%2BxDTHjii6Lujv3TvWnBGnea%2FaEe61d3Mh3lhyCIoRrCdb81le4xJD5pU1whp8u24PhUs0Tl6zDhDZ6%2FgpufJ5oXtgbG%2FuEOEG2M4oh3wvPrr0dE6bQ9E6xU1V8XeoyDEtodJmf%2BPyY8%2FBak5kk7vaZfCWnXJoO8uImTqAyZYqjr66WjWkZ3CD%2Fw2IeqR2O4CthRouQCFCcwYipQkx2%2BKOhYxf2jZl2SdpCOUyi6olq%2FcSy%2FWeI5XLlI1gLGehFBldeP40pOyrJzT%2BERpGaNb97m0K4r97Uv0e6maf3VoPugmaJnNRidTq9NjS5A2%2BbHKKAqcwW9qsbHECNJYZwT%2FZkpx8JydNE2hdV1IOfcUQM34s6cVEG%2FXOzlIaKrSAWphx7xlQtsy%2FLULZTrtVLX637E0QEjSSvZqmEjggKCO9YoD26sUKAFJgvVqzOtxUlf9JSM1N8F4L1G6Fpnz2LpMQvGOar8dvDRJJwTIMPDB28kGOqUBwrGOhwOTJLZ%2BU8MKiuhXXJ7%2BhLfXqYw8wqChkGBqwMi%2BBhH0t2sYElFB8BHCMmlzCAOZVE3mSzRVeIAqM%2F5CiJ1dj%2BtiUugSs8AC9Nu%2FkDl8LaPpMn8Nke58FkzLAo5NHxv62sd%2FGd4a8GvOXKHjo9TUAweWaPKnV6Nw7hGYcZmQYDQQXWH5GZpmWHRzIRUlynKhrkJorLDMl5DGDzv1MQWn18sA&X-Amz-Signature=8f2a0d75973b3b64f255930e8dd96771ee47c9b1bf88a3bb4bfb27e9ec7c317c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QWXJUM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMhCaz8Q5BONN%2FL9zkndxzaJK2K7%2B7YSIRMuOMTGcKQIgaDcPqT5GUr2NTU6Ev6VUL1euGF67fx2aJCjR4XKnt%2FIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcRGL3kJpwpP%2FYBXircA8YgLdR4%2FGrNLBpLPHD3dmfdlPaplhalDLbPqeYRTbwamqHjeHMOv%2FQQXsArS%2FPM51OgT3l3zPe5kvkdHDraVbBIxqovZfpqHH9iOpwpnnczKJTTOMncLJX21jv7UoQTom7Aw4q7C1SJD3VKNV3R5RlN%2BxDTHjii6Lujv3TvWnBGnea%2FaEe61d3Mh3lhyCIoRrCdb81le4xJD5pU1whp8u24PhUs0Tl6zDhDZ6%2FgpufJ5oXtgbG%2FuEOEG2M4oh3wvPrr0dE6bQ9E6xU1V8XeoyDEtodJmf%2BPyY8%2FBak5kk7vaZfCWnXJoO8uImTqAyZYqjr66WjWkZ3CD%2Fw2IeqR2O4CthRouQCFCcwYipQkx2%2BKOhYxf2jZl2SdpCOUyi6olq%2FcSy%2FWeI5XLlI1gLGehFBldeP40pOyrJzT%2BERpGaNb97m0K4r97Uv0e6maf3VoPugmaJnNRidTq9NjS5A2%2BbHKKAqcwW9qsbHECNJYZwT%2FZkpx8JydNE2hdV1IOfcUQM34s6cVEG%2FXOzlIaKrSAWphx7xlQtsy%2FLULZTrtVLX637E0QEjSSvZqmEjggKCO9YoD26sUKAFJgvVqzOtxUlf9JSM1N8F4L1G6Fpnz2LpMQvGOar8dvDRJJwTIMPDB28kGOqUBwrGOhwOTJLZ%2BU8MKiuhXXJ7%2BhLfXqYw8wqChkGBqwMi%2BBhH0t2sYElFB8BHCMmlzCAOZVE3mSzRVeIAqM%2F5CiJ1dj%2BtiUugSs8AC9Nu%2FkDl8LaPpMn8Nke58FkzLAo5NHxv62sd%2FGd4a8GvOXKHjo9TUAweWaPKnV6Nw7hGYcZmQYDQQXWH5GZpmWHRzIRUlynKhrkJorLDMl5DGDzv1MQWn18sA&X-Amz-Signature=9eb9905b0b5066bdb3d7bae2394c41d2d1bbf62a0b2e5dfabe941983e6a6b7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
