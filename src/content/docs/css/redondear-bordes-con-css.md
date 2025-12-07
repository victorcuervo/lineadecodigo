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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OKMU44%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQDdP8%2F%2BYUN4wOXtgRXHzuKUJdJYwoj6OC0YT%2B0QYxLAiBcKAb5dSoVaKWRUanjZoxhxzVascoXrDyK27rs%2FLxiGiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA2XP07bX3QDJ8RQKtwDN59gnxbs07aJ4wKnIm1kMsPCuqt%2FkJX8fRM2cIF1GR2CMv796yeOf%2FOz9nY0ShtTMQOThegfgEOocPR7vTOroWS182SpN2A%2F6b%2F5fJ1Z%2FsetcP0qLvIHycL5aNppGljciSash0fpxoZyysOEFWyJhCR6Yyw3leKiOSLYO29XB3UiOJ4bMHxQ70v1pVE5YNB7%2Btpoexvi2NyHcvTleILtHRZss1KiAmC9s5ZYCi1C1%2FO1Flg9WCHqaNLYxCHJNVkT3sFh5AonF3Z9f%2Fu9o3rGpXYaSgtHwjysZ8c2uT6q%2FFoqyMp6d%2F3ggDjj8H0j2OXyH5PWgEUelhy2OzrkrLUonloODizisCDz1oOYopHqZZCcxG4cck825iZvBsIwr%2FJGU%2Bj7lTc3hzW94yhtXOg%2F7DYjGLNEN6dUDzete41BJdaH%2FXvKdkrqcLfddmXzT%2BHldhFTvCHYRqG2TPk%2F3sKW3C%2Bm9xqWNij%2Btb3r6jyq9U1oWSTqPT%2B%2B%2FO5eFKUtzQHkNWNmp1FiPyDf5M7E%2FmF2tL7vdWlnYifNUsr0S1JxamNxut0mql2qSdEYJJPP5GAEKdBKCfiS7aEl%2FomahQu%2B2zd3d9aJHHrZPmSKFUombrqcCkuUXhz%2B7Tpx2Aww0LrWyQY6pgFkVG1qwyQY7dFLi%2BBUKGG0sRjtG2BRlN3Fl%2BRZKBGKSgPuyKY9JmuyLrG%2BYU2ortffzY%2Blae2l44UHK4sJe7Hg72sTQ%2BtME2VTCDzA7ITK4mq5pRS%2BTRJbiwMdwlMNZmisdsnFqBgrng51fK9omBbQRqzqjMFF9EMRtMBdFv0%2Fk%2FXETeGDCy1YK6Y2xIcmhUuZcjvmSrkftkvg9rLjDanww1T37LJ%2B&X-Amz-Signature=d720e644c5f0e247715e43e0b06bb8a3562ef562adcb3fcc59a374022cacbaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OKMU44%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQDdP8%2F%2BYUN4wOXtgRXHzuKUJdJYwoj6OC0YT%2B0QYxLAiBcKAb5dSoVaKWRUanjZoxhxzVascoXrDyK27rs%2FLxiGiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA2XP07bX3QDJ8RQKtwDN59gnxbs07aJ4wKnIm1kMsPCuqt%2FkJX8fRM2cIF1GR2CMv796yeOf%2FOz9nY0ShtTMQOThegfgEOocPR7vTOroWS182SpN2A%2F6b%2F5fJ1Z%2FsetcP0qLvIHycL5aNppGljciSash0fpxoZyysOEFWyJhCR6Yyw3leKiOSLYO29XB3UiOJ4bMHxQ70v1pVE5YNB7%2Btpoexvi2NyHcvTleILtHRZss1KiAmC9s5ZYCi1C1%2FO1Flg9WCHqaNLYxCHJNVkT3sFh5AonF3Z9f%2Fu9o3rGpXYaSgtHwjysZ8c2uT6q%2FFoqyMp6d%2F3ggDjj8H0j2OXyH5PWgEUelhy2OzrkrLUonloODizisCDz1oOYopHqZZCcxG4cck825iZvBsIwr%2FJGU%2Bj7lTc3hzW94yhtXOg%2F7DYjGLNEN6dUDzete41BJdaH%2FXvKdkrqcLfddmXzT%2BHldhFTvCHYRqG2TPk%2F3sKW3C%2Bm9xqWNij%2Btb3r6jyq9U1oWSTqPT%2B%2B%2FO5eFKUtzQHkNWNmp1FiPyDf5M7E%2FmF2tL7vdWlnYifNUsr0S1JxamNxut0mql2qSdEYJJPP5GAEKdBKCfiS7aEl%2FomahQu%2B2zd3d9aJHHrZPmSKFUombrqcCkuUXhz%2B7Tpx2Aww0LrWyQY6pgFkVG1qwyQY7dFLi%2BBUKGG0sRjtG2BRlN3Fl%2BRZKBGKSgPuyKY9JmuyLrG%2BYU2ortffzY%2Blae2l44UHK4sJe7Hg72sTQ%2BtME2VTCDzA7ITK4mq5pRS%2BTRJbiwMdwlMNZmisdsnFqBgrng51fK9omBbQRqzqjMFF9EMRtMBdFv0%2Fk%2FXETeGDCy1YK6Y2xIcmhUuZcjvmSrkftkvg9rLjDanww1T37LJ%2B&X-Amz-Signature=fcf968748bdc690a7b7834ff2ea543b109c5938a336edcd613b18c0638bfe2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
