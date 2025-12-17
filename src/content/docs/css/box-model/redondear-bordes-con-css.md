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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRDFK4I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJsuksA3VSXeReRYpyntNnc222q6LqngNNqrj3Z22xtAiB4Qgcd5N%2FSGEii5eL9jjK5zEZAe%2BB69tU%2BWkpRP1AAlyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIklS2N%2BBXNIXs5uYKtwDoIMA%2BTaHT0ja5MlwZqJ5utX%2Bu3XeSVaGbLG1aK8M01qbFoJgxNJu17pVUfbYs1DEJ3Tn0uUZ%2FwLQt6JwCLgNYyARMhNqdAUbuxX3ZWwCUDrIbmdIH6qm8TnVKJG1oKGU98W4FWml%2B6zYrx2mDNY8YPBzSm3kkH1PlbRU%2B9b5kLb1tAQrx1i3e3nj4VdAz%2BlCJqD1vhnwZbdyXamLoBC34Irhr%2FVev%2FUYehlY5l4VBuhE%2FEFAhSjtEnQ%2FahERJmASuCGlQyyIld24hg2kVodaOUciVi87UdVNv5BtdodwFwIX6MiNw15dmF%2BREwAopQqCpaBCZabCFnxghLLOXtYX%2BwyK0C00cZ%2BIqoLF8QTTMJYoyncO4peqBKgyWkd8VgqQNixqRIh0AMc91bTrQPWFDLVE7mrATYlQHltjsHBU3vhNmK2HrmAWDkN7AnsyRAz7igaNYqnZQ%2FCaovIAf1AvUKlS32Y5qMLTQtAVsEGixFIEvwi17tp6O0tY5zUdBZY%2BGoJqAJ3DwL9%2F%2BYSotQmyXrzCytk1u8QoMomPvn69z6xtuEghJXIbcGnyBFJVfcj6AUZrobIySvK3I19a37mPi86fZJbHgsYAC9fKGKFAcZxAgpS0KpqRNBIBsSww3q2MygY6pgEZ5tzJf3bh73kAJyN35xPtSXV9mrt919jxuYrtjeFz2Spf9Ri%2F%2FYJQZaKhX0xuMBtRrRubcumqi5ozPXtpu75hlHc%2FQgc5ILmSUbP6b%2FEEu4XDeRqD%2F2mNqKsjgixHsV4Okjm79%2F6R%2FW5E12994aN40sG2LYUrwNn8kkQVjY4A%2FZXlMZ9rTzKTjDBPlplaxyRzp5%2BEjMpJ5PrZD2QcdAOrGZY1NCuV&X-Amz-Signature=691580507d502e6c1aa7f5fc306709409358ee7e1b87621f564150c36f19a206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRDFK4I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJsuksA3VSXeReRYpyntNnc222q6LqngNNqrj3Z22xtAiB4Qgcd5N%2FSGEii5eL9jjK5zEZAe%2BB69tU%2BWkpRP1AAlyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIklS2N%2BBXNIXs5uYKtwDoIMA%2BTaHT0ja5MlwZqJ5utX%2Bu3XeSVaGbLG1aK8M01qbFoJgxNJu17pVUfbYs1DEJ3Tn0uUZ%2FwLQt6JwCLgNYyARMhNqdAUbuxX3ZWwCUDrIbmdIH6qm8TnVKJG1oKGU98W4FWml%2B6zYrx2mDNY8YPBzSm3kkH1PlbRU%2B9b5kLb1tAQrx1i3e3nj4VdAz%2BlCJqD1vhnwZbdyXamLoBC34Irhr%2FVev%2FUYehlY5l4VBuhE%2FEFAhSjtEnQ%2FahERJmASuCGlQyyIld24hg2kVodaOUciVi87UdVNv5BtdodwFwIX6MiNw15dmF%2BREwAopQqCpaBCZabCFnxghLLOXtYX%2BwyK0C00cZ%2BIqoLF8QTTMJYoyncO4peqBKgyWkd8VgqQNixqRIh0AMc91bTrQPWFDLVE7mrATYlQHltjsHBU3vhNmK2HrmAWDkN7AnsyRAz7igaNYqnZQ%2FCaovIAf1AvUKlS32Y5qMLTQtAVsEGixFIEvwi17tp6O0tY5zUdBZY%2BGoJqAJ3DwL9%2F%2BYSotQmyXrzCytk1u8QoMomPvn69z6xtuEghJXIbcGnyBFJVfcj6AUZrobIySvK3I19a37mPi86fZJbHgsYAC9fKGKFAcZxAgpS0KpqRNBIBsSww3q2MygY6pgEZ5tzJf3bh73kAJyN35xPtSXV9mrt919jxuYrtjeFz2Spf9Ri%2F%2FYJQZaKhX0xuMBtRrRubcumqi5ozPXtpu75hlHc%2FQgc5ILmSUbP6b%2FEEu4XDeRqD%2F2mNqKsjgixHsV4Okjm79%2F6R%2FW5E12994aN40sG2LYUrwNn8kkQVjY4A%2FZXlMZ9rTzKTjDBPlplaxyRzp5%2BEjMpJ5PrZD2QcdAOrGZY1NCuV&X-Amz-Signature=cd7746faba956cf36c9e3880e4b0274d93485af39993fc89107a4d2d90490c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
