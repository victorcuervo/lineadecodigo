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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMXP2U6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJiqXwk2UtecOsCwYf2wacW%2FkLXTREP2iAr6yvmqAzPAiBMsD9r1ZfN17mYYsEluaBElKbfozU5onwY98C96uL6FyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F31W6tj0D1925LIgKtwDuS5Tgt2mS6%2FgDVteF7ioiyXiSKJb6HHsWIoRUI4lZiTlpqjXNMd%2FGhqKGrrF5mqwDGtFqEOWYS2NHwu00GQ3AqvdhYld0y2yJNWIWdQoJq3FXNbhzAVSGB2nQqXQQ7lJ7sDjMWEQXGE7upven%2F3b%2FEI98JX1gUo%2Bjx9HucDlQi2GJqrdYXZX3GyzyRsz9l8%2B%2FZKGaQaDzBbFhoyivA3bh4t6IqBVhtpGcY5UzVGgljUIZVQloJLW38Zc77zBE%2BkgXknsmh3BNrv2ng8dg%2FQo0Hm%2F7hkvwkfmyZfGvzZocSEyC%2F9JeRsHQGIEM7sjUFXsKSHG9gUC6LpLn9TkxPwKuiE1dKrezO4bpmYjLZdPlSE%2B4zK%2BzuYqwSyHI2EjAy3CHDi5x%2B4yvODW2kU%2BCIevbm554J2n1HmN%2BKuv3FTGlkPCNVifbbfWUXkcziz2a0zMCQQp12I4gntFL%2BeQyvRmri3VxGRWVWCVgzXWw3%2BcsyzLk3UY6ZJQIISyGeFeusag%2BbBKprFfl%2BAjxd277dZwmHlqayx%2F6e3%2FtUgmukU9bBqNFsqFRZDoXh%2Fv%2BkTSC60Vdc8wRYWejULpBIY2Lmoj%2Br9AMHYjhld%2B1MCo09uGlwiWqFk7vqvyVAOCIt0wp47eyQY6pgHMRR7mG%2Fm58toVz77OYxL0nNRFWja0GLsdReZXKKNFYG%2FQrZ7if%2FAmfhOJDfclIpBSSuvFGzIV9JfYWsplMjFgap%2BeLoL7s%2B6QL1oPHD%2Ft01GF%2F2sDnXANdh7iU5O9MosnVWrj%2BGYhAIICq9rkU4tSZBAQnxhJ7cWP%2BrYb0u1ss%2BEbg8fTk0YGbt0CbwkBUTEkbMl7PGXXTxKcVdCQNgOIxHZyjvSj&X-Amz-Signature=111bfbfa8bf62866f1ef431050f6c02e1973e13f993bb84c4093b6f520bfe7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMXP2U6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJiqXwk2UtecOsCwYf2wacW%2FkLXTREP2iAr6yvmqAzPAiBMsD9r1ZfN17mYYsEluaBElKbfozU5onwY98C96uL6FyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F31W6tj0D1925LIgKtwDuS5Tgt2mS6%2FgDVteF7ioiyXiSKJb6HHsWIoRUI4lZiTlpqjXNMd%2FGhqKGrrF5mqwDGtFqEOWYS2NHwu00GQ3AqvdhYld0y2yJNWIWdQoJq3FXNbhzAVSGB2nQqXQQ7lJ7sDjMWEQXGE7upven%2F3b%2FEI98JX1gUo%2Bjx9HucDlQi2GJqrdYXZX3GyzyRsz9l8%2B%2FZKGaQaDzBbFhoyivA3bh4t6IqBVhtpGcY5UzVGgljUIZVQloJLW38Zc77zBE%2BkgXknsmh3BNrv2ng8dg%2FQo0Hm%2F7hkvwkfmyZfGvzZocSEyC%2F9JeRsHQGIEM7sjUFXsKSHG9gUC6LpLn9TkxPwKuiE1dKrezO4bpmYjLZdPlSE%2B4zK%2BzuYqwSyHI2EjAy3CHDi5x%2B4yvODW2kU%2BCIevbm554J2n1HmN%2BKuv3FTGlkPCNVifbbfWUXkcziz2a0zMCQQp12I4gntFL%2BeQyvRmri3VxGRWVWCVgzXWw3%2BcsyzLk3UY6ZJQIISyGeFeusag%2BbBKprFfl%2BAjxd277dZwmHlqayx%2F6e3%2FtUgmukU9bBqNFsqFRZDoXh%2Fv%2BkTSC60Vdc8wRYWejULpBIY2Lmoj%2Br9AMHYjhld%2B1MCo09uGlwiWqFk7vqvyVAOCIt0wp47eyQY6pgHMRR7mG%2Fm58toVz77OYxL0nNRFWja0GLsdReZXKKNFYG%2FQrZ7if%2FAmfhOJDfclIpBSSuvFGzIV9JfYWsplMjFgap%2BeLoL7s%2B6QL1oPHD%2Ft01GF%2F2sDnXANdh7iU5O9MosnVWrj%2BGYhAIICq9rkU4tSZBAQnxhJ7cWP%2BrYb0u1ss%2BEbg8fTk0YGbt0CbwkBUTEkbMl7PGXXTxKcVdCQNgOIxHZyjvSj&X-Amz-Signature=3076322434e196ebfdb639bb8af1a67d5f740755cf777d374fae2d7c3b8a7ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
