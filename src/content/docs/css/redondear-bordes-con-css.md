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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NUFWUZR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALub5Lw6kLulvaq%2B9d0R2g60mM%2FXkpDReTm1z%2FCaEgWAiANEplalPzIBgEz4Fz8CsyweUYx8sdUblWIkbXwJPsAiCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVHJbDjaTucaVIxEKtwD%2FSIL4zlHKBTUAw%2BwlwUGbyNjfyd%2FHuooY3VWNW9X%2FDb7vgiKw5BFtv5REe1KZm%2BtvEXZ5u%2Be%2FmT26RWoZLhw2DtucEUl3X52pnREVSj8hUH8Sdg6CveNQOrzP9KPHgM3elYvUld75LY1jsAdT2XWBPws%2Ft2PVnEkJZkhT%2FDVBfzXzddqPXex7Tk13Q8rTdH1qFzCS5x6TnfHg95PqgEoJWnHTM4geRxVQRLHEh9JlyPYvlRPRTzde72aDfwW2Nnoy%2Fadyq5AzHKZ7gSUGYtQdbhXsNPRLyQ6GtQHhjCr4B8AXCRu9Abx1IE1rmMQpKr8jxzM8CgHz8FwaUmDhOPiJLNQJjbReuC6sBB4fms8PUIKeVrwnJ5stxYnfSEagDvKniIllcqhhbdqDxnG6UMm5%2FAygz58APNrIlXX9EPGBe7IDJ14JOBSv4rURME8en5qK3PWcJYFpoTQo2Y2x0t487%2Fb4EPV4LcNjC0MYEZFfDV3lX%2FBRWb%2FJKMqJJHNCI4sAPioRXEw9GWaAXjJAI%2F3MaZ6AZzN94jyErmz1Z%2BYHtd86sEB1F4m6Pc2MiqzDJpuVgLGu46BrMdu%2FwmfK46SHCk3VTslVPo6lnih3MloorwvIWKAKbR45qD1XIMwn8reyQY6pgFXLbw0eUYUQ2MKXiw3tCasMs1ayZSWjmnv5ruEnSc0puXu%2Fx7J4Ol4lFZrCFh98c4zQg1nxOEabeynOlqI3chiMS%2FbmDGufqP1uW4pVifTEurs%2FJ6DtjuLCx0ZMM%2F%2BpYKC3IIWvefSDC4fFs6IRzoDvXQtZeO%2BkFZRnJstOFWZhBWSI8DIM1zdNR%2Fv7RtqdFfmb8sjYJ%2FKOf7ozf56X2cMZbUHmvKW&X-Amz-Signature=b0046874121c90dcca47d31d3074b98db04d5ffbd64fe63f3e72b29c46097620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NUFWUZR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALub5Lw6kLulvaq%2B9d0R2g60mM%2FXkpDReTm1z%2FCaEgWAiANEplalPzIBgEz4Fz8CsyweUYx8sdUblWIkbXwJPsAiCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVHJbDjaTucaVIxEKtwD%2FSIL4zlHKBTUAw%2BwlwUGbyNjfyd%2FHuooY3VWNW9X%2FDb7vgiKw5BFtv5REe1KZm%2BtvEXZ5u%2Be%2FmT26RWoZLhw2DtucEUl3X52pnREVSj8hUH8Sdg6CveNQOrzP9KPHgM3elYvUld75LY1jsAdT2XWBPws%2Ft2PVnEkJZkhT%2FDVBfzXzddqPXex7Tk13Q8rTdH1qFzCS5x6TnfHg95PqgEoJWnHTM4geRxVQRLHEh9JlyPYvlRPRTzde72aDfwW2Nnoy%2Fadyq5AzHKZ7gSUGYtQdbhXsNPRLyQ6GtQHhjCr4B8AXCRu9Abx1IE1rmMQpKr8jxzM8CgHz8FwaUmDhOPiJLNQJjbReuC6sBB4fms8PUIKeVrwnJ5stxYnfSEagDvKniIllcqhhbdqDxnG6UMm5%2FAygz58APNrIlXX9EPGBe7IDJ14JOBSv4rURME8en5qK3PWcJYFpoTQo2Y2x0t487%2Fb4EPV4LcNjC0MYEZFfDV3lX%2FBRWb%2FJKMqJJHNCI4sAPioRXEw9GWaAXjJAI%2F3MaZ6AZzN94jyErmz1Z%2BYHtd86sEB1F4m6Pc2MiqzDJpuVgLGu46BrMdu%2FwmfK46SHCk3VTslVPo6lnih3MloorwvIWKAKbR45qD1XIMwn8reyQY6pgFXLbw0eUYUQ2MKXiw3tCasMs1ayZSWjmnv5ruEnSc0puXu%2Fx7J4Ol4lFZrCFh98c4zQg1nxOEabeynOlqI3chiMS%2FbmDGufqP1uW4pVifTEurs%2FJ6DtjuLCx0ZMM%2F%2BpYKC3IIWvefSDC4fFs6IRzoDvXQtZeO%2BkFZRnJstOFWZhBWSI8DIM1zdNR%2Fv7RtqdFfmb8sjYJ%2FKOf7ozf56X2cMZbUHmvKW&X-Amz-Signature=c2977dd881d8877fd50cfe779be42c4aad611fde940481c43ba6b29f2a997ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
