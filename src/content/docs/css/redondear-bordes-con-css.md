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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WNWIXX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMHLoi6SC0iHT5LvvZjxHXHNiCInrQMkI%2FtOBYS0AxUgIhAOTjFIcHTFspjdp22RYZo%2B4WaHTClpGFkZe%2B%2FSva2nWqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaoH2LAxYqiAFmdWgq3APOYAl%2Be3rstMtMRsrgwoHXalZSQQvBLsxjaxLNxowLsaGGSi9FmNZdxSq3Fe7S8aYdYgT%2Fna8ry3q%2BCTW4r3zbJ94UjkVoBGG0SZy5VY2BHT%2B%2FgrSdAz%2BTBe6WuAyqnKjYqXQhBN8TYe4HJsJw539JVSH1uDT4%2B5b14LWtpNGyLqMPN31d%2FKB0isBnK15OZIE%2Bf%2BmXhxaPTTwGRLH7qUVL8iy2E2Q1f0970acQPzeAKudD4n7iBlj4UQ3D0UKV59YqZTY5ZCy0hJlsBglos7aSEVwkAWf78iFQNPNwiLx6b4zPI5TB5rXfYWAlC2%2F8hY4o2YBYgJ50J%2BWCYrsBr5sNbfVOwCmWYWfcwVzFz608JVYx3erw6ir26MWGGARzoVbSMfj3H8EmZJw8lT%2Bted3mHmOg9p8zcZuaH6E4BEx6BVRRAd1300dg1AILiWBn00KgSkF0zxNphhBL%2BzKPVCVDdCFaCQbA1rJ2zW%2BtGuptreJUCkguAoLmyF5eEOrlo3ZdJ5V%2BSu9Sp4o6YGSvbYmbNlDxpqHbD3qfQak1Q0QhTp2B8IzhJcpoNbATo1U8QXCULD%2BqVPvJNHQxC4IGP%2BeL7scd6Dr%2BxkV7U022s0BwbnGW52oX7lvLWvxIRjDrs9nJBjqkAb3KBL8TZx%2Fu79SMpZijplgJQNWzTBLzhwy9zdUTW6h9iOpvLc%2BHqk%2BvCm6LKh7wpJBNwsL7izpfqc%2F7Fn9pjEo004Fw0JqYSwmWUS%2BVC13obN4bacICTR%2B9RU5Xt%2BJ1jNNRWqut%2F4Qi1pbFHcm%2FGMFM4GcB%2BF2DwjCsTNczjXv86a00XElt8Sik1WQPPwwapT%2FLzZjOz7M3SRRw%2FA1bI%2B0bcPnI&X-Amz-Signature=26b2d946b3db787a06f84c32b535f0888aafa60d8ac37f2703290885ed93dac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WNWIXX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMHLoi6SC0iHT5LvvZjxHXHNiCInrQMkI%2FtOBYS0AxUgIhAOTjFIcHTFspjdp22RYZo%2B4WaHTClpGFkZe%2B%2FSva2nWqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaoH2LAxYqiAFmdWgq3APOYAl%2Be3rstMtMRsrgwoHXalZSQQvBLsxjaxLNxowLsaGGSi9FmNZdxSq3Fe7S8aYdYgT%2Fna8ry3q%2BCTW4r3zbJ94UjkVoBGG0SZy5VY2BHT%2B%2FgrSdAz%2BTBe6WuAyqnKjYqXQhBN8TYe4HJsJw539JVSH1uDT4%2B5b14LWtpNGyLqMPN31d%2FKB0isBnK15OZIE%2Bf%2BmXhxaPTTwGRLH7qUVL8iy2E2Q1f0970acQPzeAKudD4n7iBlj4UQ3D0UKV59YqZTY5ZCy0hJlsBglos7aSEVwkAWf78iFQNPNwiLx6b4zPI5TB5rXfYWAlC2%2F8hY4o2YBYgJ50J%2BWCYrsBr5sNbfVOwCmWYWfcwVzFz608JVYx3erw6ir26MWGGARzoVbSMfj3H8EmZJw8lT%2Bted3mHmOg9p8zcZuaH6E4BEx6BVRRAd1300dg1AILiWBn00KgSkF0zxNphhBL%2BzKPVCVDdCFaCQbA1rJ2zW%2BtGuptreJUCkguAoLmyF5eEOrlo3ZdJ5V%2BSu9Sp4o6YGSvbYmbNlDxpqHbD3qfQak1Q0QhTp2B8IzhJcpoNbATo1U8QXCULD%2BqVPvJNHQxC4IGP%2BeL7scd6Dr%2BxkV7U022s0BwbnGW52oX7lvLWvxIRjDrs9nJBjqkAb3KBL8TZx%2Fu79SMpZijplgJQNWzTBLzhwy9zdUTW6h9iOpvLc%2BHqk%2BvCm6LKh7wpJBNwsL7izpfqc%2F7Fn9pjEo004Fw0JqYSwmWUS%2BVC13obN4bacICTR%2B9RU5Xt%2BJ1jNNRWqut%2F4Qi1pbFHcm%2FGMFM4GcB%2BF2DwjCsTNczjXv86a00XElt8Sik1WQPPwwapT%2FLzZjOz7M3SRRw%2FA1bI%2B0bcPnI&X-Amz-Signature=9bcc816314d99c4939a94cd51512d41d9ced6085be4b35846f5ceb69b0d4ff03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
