---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4SDD5H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBik1yHXwjbtbdg6qOPERB3%2FZX8AhDXq8850SgjZL7LHAiBZ%2BN4mflQdhDoJOR1XFlz5DGog4k9Iso1rjzXkPoqRbir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMH%2FUKUuL%2BRzQXAtM%2BKtwDHoZ9yKe6esGUE8jAMutatrfYMbc8b1RvUDHmtNXBtdTgBqtP6ioWVcq1P06qH4K4u8WxF7pomIHBHVPN3RBU0YNGxQ%2BSXKn7te2S9%2Bu2pFkq3EMWTNk%2F7%2F05FgI5jmdW12ntS4sSMy94QakElPKx%2Fbw0lOvbMpp%2BlMMwYZColcDRu%2FPwFxFyf7jaP4%2F6G75dXJrebuFDGOwY%2B56DiPYQatJGGsBZSUY%2BnfHaHV5OJHTcyWDuINHH77hZxKgN5Sm7Ot%2Bew7oHoPsyh3oUmO4BNt9jsbVFD39OmgMSZKaENqLMdVq40ymn3uEx%2Bmx03KW%2BOUNl2xgYgvhcME2JnugnYhnGyLGA%2FBP89KLUU7NezCfdLH0dQ0yLLmTT%2BP%2BYOq%2BGMK7CnNlnyLCgeJ9Basz%2FoBRmiwJhMF9NSl%2FyU%2FIoUqX5ysMTX7tRf5Do5UUzs113V%2FOKTg6NvIKOZAK4KZiY92EdSkfneZAK%2BIfzW%2FCybGJvtjXieIVly0ayqcorNcBXWdMhbB22UiqxvUGc0rAVehDMa29ckgZMHjMfEXnFBNGjcGL2EzbD2ih8SETBXKItHaHcco6%2F3HFMrP04VYJYvA%2Bpk3mKT56hXgre4mu%2FcA6dFJ0pBmhMBz1cDFAwwtzGyQY6pgFondRsAEPh6QqsLfop6sx3O%2FPh6TY6JOHcWjt3orCJ6zhhSSp1ggnFtj1javGOvoWM2ghiyAKuQj%2B24aBXrzLsioy8DTUG%2FMbnd8Mitz0wkFKQvY42JLyUOfaCLHg0gk1p%2B9aOZDzPLJYIyYknJyW0Ypsx89q%2FBFhjGc6w4b2fSZL3rso4HZPSA7gClJMghqMpMHQylSnrA%2Fch%2FbI1eqDfia5v%2BWdS&X-Amz-Signature=2a038ac0f13dc9cc8a3ee615bb979b0d7c5a6e9e3f2baa1b21136ce1386e9506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4SDD5H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBik1yHXwjbtbdg6qOPERB3%2FZX8AhDXq8850SgjZL7LHAiBZ%2BN4mflQdhDoJOR1XFlz5DGog4k9Iso1rjzXkPoqRbir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMH%2FUKUuL%2BRzQXAtM%2BKtwDHoZ9yKe6esGUE8jAMutatrfYMbc8b1RvUDHmtNXBtdTgBqtP6ioWVcq1P06qH4K4u8WxF7pomIHBHVPN3RBU0YNGxQ%2BSXKn7te2S9%2Bu2pFkq3EMWTNk%2F7%2F05FgI5jmdW12ntS4sSMy94QakElPKx%2Fbw0lOvbMpp%2BlMMwYZColcDRu%2FPwFxFyf7jaP4%2F6G75dXJrebuFDGOwY%2B56DiPYQatJGGsBZSUY%2BnfHaHV5OJHTcyWDuINHH77hZxKgN5Sm7Ot%2Bew7oHoPsyh3oUmO4BNt9jsbVFD39OmgMSZKaENqLMdVq40ymn3uEx%2Bmx03KW%2BOUNl2xgYgvhcME2JnugnYhnGyLGA%2FBP89KLUU7NezCfdLH0dQ0yLLmTT%2BP%2BYOq%2BGMK7CnNlnyLCgeJ9Basz%2FoBRmiwJhMF9NSl%2FyU%2FIoUqX5ysMTX7tRf5Do5UUzs113V%2FOKTg6NvIKOZAK4KZiY92EdSkfneZAK%2BIfzW%2FCybGJvtjXieIVly0ayqcorNcBXWdMhbB22UiqxvUGc0rAVehDMa29ckgZMHjMfEXnFBNGjcGL2EzbD2ih8SETBXKItHaHcco6%2F3HFMrP04VYJYvA%2Bpk3mKT56hXgre4mu%2FcA6dFJ0pBmhMBz1cDFAwwtzGyQY6pgFondRsAEPh6QqsLfop6sx3O%2FPh6TY6JOHcWjt3orCJ6zhhSSp1ggnFtj1javGOvoWM2ghiyAKuQj%2B24aBXrzLsioy8DTUG%2FMbnd8Mitz0wkFKQvY42JLyUOfaCLHg0gk1p%2B9aOZDzPLJYIyYknJyW0Ypsx89q%2FBFhjGc6w4b2fSZL3rso4HZPSA7gClJMghqMpMHQylSnrA%2Fch%2FbI1eqDfia5v%2BWdS&X-Amz-Signature=6f4d343d7fb74f3ff054f7c5ce7c27bde4df48dab607ca680daa18d28c08323a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
