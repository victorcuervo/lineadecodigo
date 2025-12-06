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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673B4Y43B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2h605vQYhVUoZDyrgVg0TczogRxwpZGcIqOrhIAKE0AiAU7kNtdRp%2FkPzOyyhlKEL4EBXGHcIWbUB47PZNOV1z1Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMekPw2ZcFPqsmWEM8KtwD9n%2BxDeYaVNL7eIbA7xlyxZKMXKJpY2kiluhVSHKEvpfmBYilkGGVyb0d%2FBSQrBZ0Y5lK%2F%2FQ%2Fyx3mJU2h8pBzOUR4i0uyUGqXyjbbTW1vJ2so8Be3n39dXuzepCgotblRL2%2BlYP2qbsrGCVUAAn7BmbHcmtoHNbeRs66fDlWx0oWm1nrrqj4YNS0wChYABqc4i42jMGaVyVmhgIL3eenBVRgLyqS4ky1dij%2FuSR1VmKesnpTdWv2kuWFimL1qrzLh8DBpWPgdCgdIIwau0d90biyERPRVHslAflRb0lA9cGgfOP3U8NzMGlyV%2BzCPj7BGe7QaMniiIj0no%2FtR1Rz%2Fg0lrSxbBznw3YRnYEDHAiC21VXhSdhEGOCIAI4CwuiLuU26aP2zUmFsSUCFTBGaudyhaid3PBqQTJTdaTBwd22Nvx79Ryl726sP%2BnO8RLpThZM6p8wlyTHqTFF8BrxB9zxXvhbKh6X96if%2BajWG3R5U3C0wFapu%2B5KBhk9JM0DsPdz%2B9YBf%2BiS2uAiVVRkVtjnPI9Nx3gVhLmD268py4xTQyYlqt%2B7Jn2xq4dU7TCB5O1XWmd%2FJdDbV3yT%2BDmM%2FrjiK3GfdfcNUWcwzaEYD4WR5pYA8D%2BLCsLV6HEM8w0MPOyQY6pgEUYy%2BHhUs6%2BNYrhk2CA%2B5OAdbbpvLn%2BgbRGcWHlsNQny%2BRvUeq5uUTgC3Vgp3xveXcFO%2FzMuvgycEj7Xauyc0lKulL4MvI8pRgy48p29zXiCWwoGqSd5vzeJohnzxgodZelogFh%2Fi82x8IzuPu66kflnZWGRnqFuceoGckNcDZBstoiZz9jQHJp5hAJqGowCOcREWEkCVYLoYPXK41DO25oTC1xiPZ&X-Amz-Signature=24f91f7c35571dcf728a58d9815c6a9d089b36beb45cc64ecc521ab50d0bab39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673B4Y43B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2h605vQYhVUoZDyrgVg0TczogRxwpZGcIqOrhIAKE0AiAU7kNtdRp%2FkPzOyyhlKEL4EBXGHcIWbUB47PZNOV1z1Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMekPw2ZcFPqsmWEM8KtwD9n%2BxDeYaVNL7eIbA7xlyxZKMXKJpY2kiluhVSHKEvpfmBYilkGGVyb0d%2FBSQrBZ0Y5lK%2F%2FQ%2Fyx3mJU2h8pBzOUR4i0uyUGqXyjbbTW1vJ2so8Be3n39dXuzepCgotblRL2%2BlYP2qbsrGCVUAAn7BmbHcmtoHNbeRs66fDlWx0oWm1nrrqj4YNS0wChYABqc4i42jMGaVyVmhgIL3eenBVRgLyqS4ky1dij%2FuSR1VmKesnpTdWv2kuWFimL1qrzLh8DBpWPgdCgdIIwau0d90biyERPRVHslAflRb0lA9cGgfOP3U8NzMGlyV%2BzCPj7BGe7QaMniiIj0no%2FtR1Rz%2Fg0lrSxbBznw3YRnYEDHAiC21VXhSdhEGOCIAI4CwuiLuU26aP2zUmFsSUCFTBGaudyhaid3PBqQTJTdaTBwd22Nvx79Ryl726sP%2BnO8RLpThZM6p8wlyTHqTFF8BrxB9zxXvhbKh6X96if%2BajWG3R5U3C0wFapu%2B5KBhk9JM0DsPdz%2B9YBf%2BiS2uAiVVRkVtjnPI9Nx3gVhLmD268py4xTQyYlqt%2B7Jn2xq4dU7TCB5O1XWmd%2FJdDbV3yT%2BDmM%2FrjiK3GfdfcNUWcwzaEYD4WR5pYA8D%2BLCsLV6HEM8w0MPOyQY6pgEUYy%2BHhUs6%2BNYrhk2CA%2B5OAdbbpvLn%2BgbRGcWHlsNQny%2BRvUeq5uUTgC3Vgp3xveXcFO%2FzMuvgycEj7Xauyc0lKulL4MvI8pRgy48p29zXiCWwoGqSd5vzeJohnzxgodZelogFh%2Fi82x8IzuPu66kflnZWGRnqFuceoGckNcDZBstoiZz9jQHJp5hAJqGowCOcREWEkCVYLoYPXK41DO25oTC1xiPZ&X-Amz-Signature=c3435601646417e3ce8129111bdb2d210969ea0015125eab2d3ce79002dae539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
