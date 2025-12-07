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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTXPHMB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj9rDZXc1iiI4dsT1M51jPUFbeuzdosX%2FQ8B7sjmxa%2BwIgA4JZihSNE%2BvQ%2FfRQV16GPRbHfX4fGpOVz1id3%2BLG5UUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBUz5dTrEjy5dw0oircA11ffak9Q60Ag%2FBsaMJvaNwAxuFbNQrFaCRw0Fx2NQNJztx89qs5o4uniw8Nq1XJo5U%2B%2Fu022hrd4GD9u95s28J5DnRvcfoiA9XEm1YbxYKgqmOBC4Pow0%2BucoIqwTidGCNGPuZ9ag2zt2ir8P1TgYe7xtbOIXY0M4eulJ1T%2FgHNddHaQXoxz4a1%2B13JnNPonXde7hdfNm67Db9pBLfcnOBQOvxjfmqLwS%2FiSiso2ueJ6y3XBj%2BpwsPpgXhEmdEIvPLxFig%2BnLf7jqXzf2AqLrJvfY%2BbYDHjS56WNM7Tl8krnvGn%2Bzk2iyhxa0I5PVtpJU7PlLgalvlqIdEcxZhHxvD5NP5NZwlj5cE1r93gURX6swwonLyF9JwJGv4odeBATBMdWel5PeP%2B%2FoxX55yZ0zdT%2B%2Fr%2BTv0EzToc%2BBWk2C4JPsYSsieAlNcvABBVhwIegddBEuj3ylV7iBpokzS3gg7bN7Uvj%2FJPtYcBE4%2FjfEe0ygVAi0sBkuP7zX5iSgk%2BZUkKnQkghhFzXvWG0%2Fj6QaEcHijKVWDVWs%2F81XY8uojE3I7qbXzUg44J3EewieHnx9CUz2DTHL5yIo6iRc4lY8%2FswNqKtQa0CAeuJXB47s3Fp%2BAvp3gu4COVmkhYMKWZ1MkGOqUBugcLjQfu64oOQb1DSBv4VD%2F7%2BTTOk8oQJkd%2FgOV8ufvkBdT6zs5CKxmG2a7AjdsnEjs29lydIa8D4Jtc5rIPf7dX9PuS3bC1IEEAqn8A8PN7dW9kmk1pTG2XIPbCdhGx2uwtmDXUcnbhmVE9pYfJsKpD5IkrrQK89RONP6KlzoCtTzPvFqngf1F8N%2F4Rs0K7ALoAngSvjSrNu5xGY0d1rIUqxY14&X-Amz-Signature=88eb6ea3f030199441a51836a82505aa2194f354df2f73a5ae3f07e1c8404e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTXPHMB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj9rDZXc1iiI4dsT1M51jPUFbeuzdosX%2FQ8B7sjmxa%2BwIgA4JZihSNE%2BvQ%2FfRQV16GPRbHfX4fGpOVz1id3%2BLG5UUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBUz5dTrEjy5dw0oircA11ffak9Q60Ag%2FBsaMJvaNwAxuFbNQrFaCRw0Fx2NQNJztx89qs5o4uniw8Nq1XJo5U%2B%2Fu022hrd4GD9u95s28J5DnRvcfoiA9XEm1YbxYKgqmOBC4Pow0%2BucoIqwTidGCNGPuZ9ag2zt2ir8P1TgYe7xtbOIXY0M4eulJ1T%2FgHNddHaQXoxz4a1%2B13JnNPonXde7hdfNm67Db9pBLfcnOBQOvxjfmqLwS%2FiSiso2ueJ6y3XBj%2BpwsPpgXhEmdEIvPLxFig%2BnLf7jqXzf2AqLrJvfY%2BbYDHjS56WNM7Tl8krnvGn%2Bzk2iyhxa0I5PVtpJU7PlLgalvlqIdEcxZhHxvD5NP5NZwlj5cE1r93gURX6swwonLyF9JwJGv4odeBATBMdWel5PeP%2B%2FoxX55yZ0zdT%2B%2Fr%2BTv0EzToc%2BBWk2C4JPsYSsieAlNcvABBVhwIegddBEuj3ylV7iBpokzS3gg7bN7Uvj%2FJPtYcBE4%2FjfEe0ygVAi0sBkuP7zX5iSgk%2BZUkKnQkghhFzXvWG0%2Fj6QaEcHijKVWDVWs%2F81XY8uojE3I7qbXzUg44J3EewieHnx9CUz2DTHL5yIo6iRc4lY8%2FswNqKtQa0CAeuJXB47s3Fp%2BAvp3gu4COVmkhYMKWZ1MkGOqUBugcLjQfu64oOQb1DSBv4VD%2F7%2BTTOk8oQJkd%2FgOV8ufvkBdT6zs5CKxmG2a7AjdsnEjs29lydIa8D4Jtc5rIPf7dX9PuS3bC1IEEAqn8A8PN7dW9kmk1pTG2XIPbCdhGx2uwtmDXUcnbhmVE9pYfJsKpD5IkrrQK89RONP6KlzoCtTzPvFqngf1F8N%2F4Rs0K7ALoAngSvjSrNu5xGY0d1rIUqxY14&X-Amz-Signature=ae518a7d30a998b02920cb715411d4e9d02a9932d341004665d52c9c4c511d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
