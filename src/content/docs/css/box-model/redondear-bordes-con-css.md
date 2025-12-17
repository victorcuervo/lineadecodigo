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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP7XH5TY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRgJKJptmU3IUkQU5n1yscIFr1ALujAu8kZrRjSV1vtQIgDZ0vUS2V6UX%2B5e%2FRVx5TmYiuzWwsizp%2FJJ%2B0Ht5GnTYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMZlT8nTXSlgsZkwwSrcA6aJOaBmzKBDQcePC6xwMuiNEGg%2FLwA8HaYXzx8%2FsCFw8E8j99l3KiZjbEDrKSUxskrVGAD6MGJ%2BaQoo2xwQ5s8S9MhZiUw6EaCKJ0Fo4vZGG%2Be0uuO55jlCsKIiFpHUAXVqE2fI93dj9uRTAo2y1mfX%2BrbShOMpr%2Bus5hPgZ9nKwKXIYToY%2FekoOnjCv3imLgl1MxMK6CwdEpHC526UoZKQ1Jumth1szTcXDOwPmXJ6ASVxzL7%2BpwI5ioNiw%2BcmO%2F95wvviNYSVEcNytLGjN158xXn8kZMRIaFTcVfk23doYTf1mHnknQOAapvijFRFBbLf8qK6HXw7nNznpjOQT8Nxq3Yj1woaZZuncRO8nCXfuzdbAz0nRbx6SmWRy8b57R7bb3rFlJDHhhBsOIAE2Vtqpq%2FCGUrJRgtgntiZkzABZXLNGEVVC0l0Q4mGwFPYnXcf%2FHDM9Ns%2FbQRsdQdrEOcf%2BH21vYGCHIDS%2Fle4hCMMaa%2BsYevL6JiccAayL4utelt8Ckhl8xjhxeh8n0wjaIUM4W5N89qD4NsBbB3PSM2BucEIK9vuuo45RDV4KdfP6sgmqTF43sr%2BSaRkaXpGQaSTKLy29yIUcd9yCEIGYVGVaoh%2FDIp1IqmccqO3MNOyiMoGOqUBu85OxqSYlp3mj9zMrdywU1V4Tjon99OkdN0dgZzgOtXoDizsRBqWDrFyJueWHTXW6ph6%2FNg3q%2FvsAt99VW8y8ZJ%2B0G1xhyqSNnZPg6SvQNmQ8DrGap%2FOUZEhMiHLp53d2WJdDGz6BUuTf4G39LvGP%2FDN6%2B8onJX8pTKHs6X3UJxQ6hTRl6CbLkMivAuyRYCYaLZ%2FHLUlzxd4alaoFve6%2BoXhQ6S5&X-Amz-Signature=8fae8fb44d8741c1709a75ad5935ffd239afc23c82defdd1be30991856e630e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP7XH5TY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRgJKJptmU3IUkQU5n1yscIFr1ALujAu8kZrRjSV1vtQIgDZ0vUS2V6UX%2B5e%2FRVx5TmYiuzWwsizp%2FJJ%2B0Ht5GnTYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMZlT8nTXSlgsZkwwSrcA6aJOaBmzKBDQcePC6xwMuiNEGg%2FLwA8HaYXzx8%2FsCFw8E8j99l3KiZjbEDrKSUxskrVGAD6MGJ%2BaQoo2xwQ5s8S9MhZiUw6EaCKJ0Fo4vZGG%2Be0uuO55jlCsKIiFpHUAXVqE2fI93dj9uRTAo2y1mfX%2BrbShOMpr%2Bus5hPgZ9nKwKXIYToY%2FekoOnjCv3imLgl1MxMK6CwdEpHC526UoZKQ1Jumth1szTcXDOwPmXJ6ASVxzL7%2BpwI5ioNiw%2BcmO%2F95wvviNYSVEcNytLGjN158xXn8kZMRIaFTcVfk23doYTf1mHnknQOAapvijFRFBbLf8qK6HXw7nNznpjOQT8Nxq3Yj1woaZZuncRO8nCXfuzdbAz0nRbx6SmWRy8b57R7bb3rFlJDHhhBsOIAE2Vtqpq%2FCGUrJRgtgntiZkzABZXLNGEVVC0l0Q4mGwFPYnXcf%2FHDM9Ns%2FbQRsdQdrEOcf%2BH21vYGCHIDS%2Fle4hCMMaa%2BsYevL6JiccAayL4utelt8Ckhl8xjhxeh8n0wjaIUM4W5N89qD4NsBbB3PSM2BucEIK9vuuo45RDV4KdfP6sgmqTF43sr%2BSaRkaXpGQaSTKLy29yIUcd9yCEIGYVGVaoh%2FDIp1IqmccqO3MNOyiMoGOqUBu85OxqSYlp3mj9zMrdywU1V4Tjon99OkdN0dgZzgOtXoDizsRBqWDrFyJueWHTXW6ph6%2FNg3q%2FvsAt99VW8y8ZJ%2B0G1xhyqSNnZPg6SvQNmQ8DrGap%2FOUZEhMiHLp53d2WJdDGz6BUuTf4G39LvGP%2FDN6%2B8onJX8pTKHs6X3UJxQ6hTRl6CbLkMivAuyRYCYaLZ%2FHLUlzxd4alaoFve6%2BoXhQ6S5&X-Amz-Signature=957bccdaa37a0a29c458a9346785f8dea7395c5578611240675c57308a3c12ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
