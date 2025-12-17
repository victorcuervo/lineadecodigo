---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE3AZS2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn9aSa%2FyZkUSn7ioGOUGQtU4ZXVfL3Ayn%2FqTbNmbMp8QIgNQcTVqTiwjsUsnjwnqiO%2FjjmbHcfHqf6UqVdN%2FrWKIgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFiMnOSnYblq7XDoircA2yuuLes%2FF1XscNOH%2BjrO03S3LRTNyYPcIlB2LXSQgVl3smZlDYgPNEXrmucdod4h9P%2BbiXWQZbY5%2BEmvlJRtzfzlmVsL4ptMTXiX1zyckurqVABHOgQwh2a0If2neBSfZq%2FF0s4jzo8V0o%2FLMec8I85m%2FOSPFL8ugmJQZc%2B6gBQR3gb8x3d6VZAY0zheZnPdePYwf4YAZI3xuf%2F1NJoiygZfZzfjizZ3VZqzTZ9%2BQNphLYDGQ1EOl3l%2F4VnJ7iWBXQx9ENBTZOPMZ6KhC%2FOOyqyRHVzWYJNef7aeZ%2BfbaQK9qef0S5WaC41BT%2Bt1DZgWTOCYPT%2BTZHt1LKj6Cs8ep4YiUb%2FojBwpGQHYO%2B%2FgkwSxHWqhA7WMHiZX5jfIYb0VyM5bCaELxjmlbz5XOYbpJd8IyuKiwBLQFvWzAOfg0jZRZmganp%2ByDh71qBfPuXLnR%2BeaIJerUJleNt7V4eGsFP5HSauHsp2LuL1kpYPT%2Bi7kSJw%2BYKhHvSk5GHPVO%2BRhBaoACMg4%2Fp0x6Pn7XFtJVXdHTSzDXTOwyzvtMoWVSxKZqfNnwlrZiVO91eqiwH1EvJ9myVf%2BebfQ1WA3MNsr%2F1ZPaXVTilezxXlPzCUVUB7psCYrzmMOpN7vB20MKCgi8oGOqUBSNl6hRpwqdlMLHS94L3hYz0t7ixZ%2BvRbweDY3YjL08IHtx65j4%2B4%2B6bcDW002rzjpqs0THBwUXSBrXPHxfC4AP9tTCAsJiPx2AWp7AkBiWRABTQSAxi3FTxc000gL2pcCWmMGHyZxGVpsTmHCw1l5pcW7pVWnCGEotZgOj3v6097EtXeHcP8Tv%2BOKZ0CJOkkUrwHVbmJgMN5LSySXcNMpqgIcQ%2Fc&X-Amz-Signature=06d4b20c72ad0b61266d39f2deb55857a0dbb8c602062847cfbea370c7551c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE3AZS2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn9aSa%2FyZkUSn7ioGOUGQtU4ZXVfL3Ayn%2FqTbNmbMp8QIgNQcTVqTiwjsUsnjwnqiO%2FjjmbHcfHqf6UqVdN%2FrWKIgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFiMnOSnYblq7XDoircA2yuuLes%2FF1XscNOH%2BjrO03S3LRTNyYPcIlB2LXSQgVl3smZlDYgPNEXrmucdod4h9P%2BbiXWQZbY5%2BEmvlJRtzfzlmVsL4ptMTXiX1zyckurqVABHOgQwh2a0If2neBSfZq%2FF0s4jzo8V0o%2FLMec8I85m%2FOSPFL8ugmJQZc%2B6gBQR3gb8x3d6VZAY0zheZnPdePYwf4YAZI3xuf%2F1NJoiygZfZzfjizZ3VZqzTZ9%2BQNphLYDGQ1EOl3l%2F4VnJ7iWBXQx9ENBTZOPMZ6KhC%2FOOyqyRHVzWYJNef7aeZ%2BfbaQK9qef0S5WaC41BT%2Bt1DZgWTOCYPT%2BTZHt1LKj6Cs8ep4YiUb%2FojBwpGQHYO%2B%2FgkwSxHWqhA7WMHiZX5jfIYb0VyM5bCaELxjmlbz5XOYbpJd8IyuKiwBLQFvWzAOfg0jZRZmganp%2ByDh71qBfPuXLnR%2BeaIJerUJleNt7V4eGsFP5HSauHsp2LuL1kpYPT%2Bi7kSJw%2BYKhHvSk5GHPVO%2BRhBaoACMg4%2Fp0x6Pn7XFtJVXdHTSzDXTOwyzvtMoWVSxKZqfNnwlrZiVO91eqiwH1EvJ9myVf%2BebfQ1WA3MNsr%2F1ZPaXVTilezxXlPzCUVUB7psCYrzmMOpN7vB20MKCgi8oGOqUBSNl6hRpwqdlMLHS94L3hYz0t7ixZ%2BvRbweDY3YjL08IHtx65j4%2B4%2B6bcDW002rzjpqs0THBwUXSBrXPHxfC4AP9tTCAsJiPx2AWp7AkBiWRABTQSAxi3FTxc000gL2pcCWmMGHyZxGVpsTmHCw1l5pcW7pVWnCGEotZgOj3v6097EtXeHcP8Tv%2BOKZ0CJOkkUrwHVbmJgMN5LSySXcNMpqgIcQ%2Fc&X-Amz-Signature=4ef0380eef756ae01decf3c279f2b030a7811006fc7e17dbf76ea196a8b8c7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
