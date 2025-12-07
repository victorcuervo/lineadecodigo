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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USH22OPQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmZ4EFD9Bky1XekJvPAhhHh%2FDseHlgHhEPn3r3UnTlNAiEAwA9zKxgdj%2Bh66zJGTKSwGUW9oWBZiLX52gUcQ2tmx2cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLGau1LGKfovKOx0yrcA%2BS2H2Ktl%2FNVDuN0xyOv6zicpRUZAz8gf1v624BMXDyVpyFyFDHS0zBJupVIDSG6YJKBueQ1wsvqACMJiImE8AkyvE%2F8sobXHaGBbxdOZsOoiFWerrPMX3dvG0cavOLkrd2YhVdj8IHNtBwS6QI16NYztW5YVb75zGVFr%2BMKliW5HK6wDF2ZuxeJPblNIyQ%2F0H8iWgKhMgZsg8VhRqTgkWzvvCZkj2OIHDJjZZ5lm0VpksV%2F50zUe6ZoVY91SbHHKvZtkHqDi%2FWEp41vWuuQUEcGUmgCmv6ZlqlVDcBPNS79GWKuE3Q2%2FxoFnD6qm24fQiMPzSDAt44jSn5Uin9x1K0344ZHMNIwsOcGby%2BAc%2FnoqFe3EvuVhLcI%2FVkSC0rhf%2FXz%2BH8w7XQbPdwYwshFoFT0TO9RgFUZiTM4y%2FOOreL0YqIn3S3oCu5hKFeMPLZ7iRhp6ao%2FAGhBQEQBRSeHD8n9CzRK1%2FZLwQ0dq6rJP3Xszn2QVEVyfgAKvaoGbGXtJqx6OqgsFdKv3%2FGP8E7kZABG3J3woJEYpBt1rzeuWOcO1CcicWpIndHlT6dK5EcDpOz7VPpJsLTBwa3xNDyZHLpZiKxp1ovYXid3yMT6w5yGyCBBgovQIjqkXBq5MJOb1MkGOqUBLITCNVeZ3R9SvMdmkspLfMJak9orRN0cmV8AjiQkoFxy6mTdZoDzJK6Bcvf8BlyUMbzq9EaIhEUInhXAl%2F%2FRS7Nwl0Gevlfd10dH4JdWZNC5FZU1nKgqsxnYMX0l76rV9WsmPV6Ejq4Ls97wqYBlJunhKHid%2BzVtoRVIM9HMejci213ryt9iHS%2FxG5V4T9aZZ5TFhZ1dfje5BvkHC%2F4vnePYZQ0K&X-Amz-Signature=75b00e86e41c0a997472db5204b4f10cc020adbfdd42d630a34e4cca6bd32ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USH22OPQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmZ4EFD9Bky1XekJvPAhhHh%2FDseHlgHhEPn3r3UnTlNAiEAwA9zKxgdj%2Bh66zJGTKSwGUW9oWBZiLX52gUcQ2tmx2cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLGau1LGKfovKOx0yrcA%2BS2H2Ktl%2FNVDuN0xyOv6zicpRUZAz8gf1v624BMXDyVpyFyFDHS0zBJupVIDSG6YJKBueQ1wsvqACMJiImE8AkyvE%2F8sobXHaGBbxdOZsOoiFWerrPMX3dvG0cavOLkrd2YhVdj8IHNtBwS6QI16NYztW5YVb75zGVFr%2BMKliW5HK6wDF2ZuxeJPblNIyQ%2F0H8iWgKhMgZsg8VhRqTgkWzvvCZkj2OIHDJjZZ5lm0VpksV%2F50zUe6ZoVY91SbHHKvZtkHqDi%2FWEp41vWuuQUEcGUmgCmv6ZlqlVDcBPNS79GWKuE3Q2%2FxoFnD6qm24fQiMPzSDAt44jSn5Uin9x1K0344ZHMNIwsOcGby%2BAc%2FnoqFe3EvuVhLcI%2FVkSC0rhf%2FXz%2BH8w7XQbPdwYwshFoFT0TO9RgFUZiTM4y%2FOOreL0YqIn3S3oCu5hKFeMPLZ7iRhp6ao%2FAGhBQEQBRSeHD8n9CzRK1%2FZLwQ0dq6rJP3Xszn2QVEVyfgAKvaoGbGXtJqx6OqgsFdKv3%2FGP8E7kZABG3J3woJEYpBt1rzeuWOcO1CcicWpIndHlT6dK5EcDpOz7VPpJsLTBwa3xNDyZHLpZiKxp1ovYXid3yMT6w5yGyCBBgovQIjqkXBq5MJOb1MkGOqUBLITCNVeZ3R9SvMdmkspLfMJak9orRN0cmV8AjiQkoFxy6mTdZoDzJK6Bcvf8BlyUMbzq9EaIhEUInhXAl%2F%2FRS7Nwl0Gevlfd10dH4JdWZNC5FZU1nKgqsxnYMX0l76rV9WsmPV6Ejq4Ls97wqYBlJunhKHid%2BzVtoRVIM9HMejci213ryt9iHS%2FxG5V4T9aZZ5TFhZ1dfje5BvkHC%2F4vnePYZQ0K&X-Amz-Signature=44f5fbcd0a315478c0588319faef1b5ce87a780213528f171c1bf05eb2127ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
