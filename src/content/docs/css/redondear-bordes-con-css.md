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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NV4YIE4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGWIXYTMxJT%2ByIg5K3e0uCEYgdLMCYzqUisj9StD31PAiEA9dbKeDEwRgicsB7%2FeOiy8mE2%2BOJe%2FwhpgV1d%2BE8z9o0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTYubiwK9uCvtvK8ircA65ZSskEK54UOTv%2FvYF3GWh%2FqIl3F7QtJP%2FQeAE9TPip%2FayYnq3nZ0celPDyEJ%2FZc5IrbOWSrIW%2BNcbI%2FBeSlf2cFsaK5IeoVJ%2FGhY0qZ72E%2FQ74gNGUnFSjQC80gzZ87D8KFpmEC9vIZztUSUNXhknoi2a1q2seklpDOr6deJylft5pN4GcL4Zo4fXdk7UueckYY49jOGbXrZOr08pcjXIYTjDZV1uLJKrsNXZHsQpq66G0wSurRy4KamxRP%2B4MWQAQMivdZ8gRSYVK2EMKp6UUZXIOnp9YBXl8TN1xUBAI2BpdCpZ%2Bqsb1w5yMkCXyVr%2BWk3dNPj%2BdsXzuigHdWnBwZ8TKEeJqkEGIiMRmoTDMyxNTCw0WXVgUVDF0HJPv9ou4tEoCiA6osTivIute6LjPnVJit07AXD5GqbLRJyZRrw%2B9tdMLg1vA0MjFa4VVWxYERA6x7eTKx3DI4Ku9YpDNgDYVBWczsF6eSXunDJNpAlCDbDJwL2ZPMm1CsmsjHfBy2wXQR7p6lmqi1ZsqUlCey90HpGldJf6V92F9B8GdBhom1tMQV01wnxd3zg45R5%2FTigcFwE0aqw%2BY50PaD2%2BI%2FligxJaV6d%2F%2BKASN7Rw0pF2SW72h36JYnjARMJeZ1ckGOqUBKhp09ZAwk8WzCq%2B0xtVTr%2FbS44HLMhBUE2baHezth7WJNDvOepYEA8fsd%2FdW7K4af%2BKJGCs8QHg9j2aO3w4k1q2gWPt6%2BzvV6GSA384IGlQsdfzSxRPgTbSjSH8rZbOJ0T9YB9oQNRsCjEuLZXZVbyfo84nNmiNOvcYyh%2FEdQtsEulAGQwmWwwF2XOIvnZa7%2BHlwioVQJFHbyuyle%2BBJjvr96N5U&X-Amz-Signature=61c406fbf5d005b5d93db1b7184836ec789a05ee9d41bb2bcf39736afdbdfec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NV4YIE4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGWIXYTMxJT%2ByIg5K3e0uCEYgdLMCYzqUisj9StD31PAiEA9dbKeDEwRgicsB7%2FeOiy8mE2%2BOJe%2FwhpgV1d%2BE8z9o0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTYubiwK9uCvtvK8ircA65ZSskEK54UOTv%2FvYF3GWh%2FqIl3F7QtJP%2FQeAE9TPip%2FayYnq3nZ0celPDyEJ%2FZc5IrbOWSrIW%2BNcbI%2FBeSlf2cFsaK5IeoVJ%2FGhY0qZ72E%2FQ74gNGUnFSjQC80gzZ87D8KFpmEC9vIZztUSUNXhknoi2a1q2seklpDOr6deJylft5pN4GcL4Zo4fXdk7UueckYY49jOGbXrZOr08pcjXIYTjDZV1uLJKrsNXZHsQpq66G0wSurRy4KamxRP%2B4MWQAQMivdZ8gRSYVK2EMKp6UUZXIOnp9YBXl8TN1xUBAI2BpdCpZ%2Bqsb1w5yMkCXyVr%2BWk3dNPj%2BdsXzuigHdWnBwZ8TKEeJqkEGIiMRmoTDMyxNTCw0WXVgUVDF0HJPv9ou4tEoCiA6osTivIute6LjPnVJit07AXD5GqbLRJyZRrw%2B9tdMLg1vA0MjFa4VVWxYERA6x7eTKx3DI4Ku9YpDNgDYVBWczsF6eSXunDJNpAlCDbDJwL2ZPMm1CsmsjHfBy2wXQR7p6lmqi1ZsqUlCey90HpGldJf6V92F9B8GdBhom1tMQV01wnxd3zg45R5%2FTigcFwE0aqw%2BY50PaD2%2BI%2FligxJaV6d%2F%2BKASN7Rw0pF2SW72h36JYnjARMJeZ1ckGOqUBKhp09ZAwk8WzCq%2B0xtVTr%2FbS44HLMhBUE2baHezth7WJNDvOepYEA8fsd%2FdW7K4af%2BKJGCs8QHg9j2aO3w4k1q2gWPt6%2BzvV6GSA384IGlQsdfzSxRPgTbSjSH8rZbOJ0T9YB9oQNRsCjEuLZXZVbyfo84nNmiNOvcYyh%2FEdQtsEulAGQwmWwwF2XOIvnZa7%2BHlwioVQJFHbyuyle%2BBJjvr96N5U&X-Amz-Signature=08de44856c980c68ce71fa09d5a55d91eb6004a42e57b26df5fc06590d8be00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
