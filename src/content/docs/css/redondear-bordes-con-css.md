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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMXNLWKB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIJlU3kB%2B14HELeFo4ptyVYWFfMMfcmz5LNBQpPnoKSQIhANaROQu3uCF99yd3vpcyaEK%2Ffk1oggg0P%2FpUba9rfP1HKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2maWvmekUaRXDtE8q3AOc0SwILs%2BWMPhjfsJLs04MkFqTsAg31co6OuGbLoQZw%2B6FpNQWKYIO4v0N4ns06GVRzl8GSE4X4lAF4n74GWpM4OJROdhzrNUGXIwsV9uwoP6jlaqw1KzhZB5TYhbWF1nCLAdT17p4o%2FMD%2BNHTXeVqdMKJH5JioN6qpBNmZwK%2BlBDfm7FGdvO8NsmRdyeldTDln8oyR2DbjdVm%2BSQS%2FI405ybO5LWYvooT13lOPKATfIVeg93TS3Y666D4Lld0GJvt%2FwbsCpKk0i%2FyE6y2tJvgggAhowKI9JOD1rYllMHeQHJBiN%2BlXFj3oUaZV7rB2oI3Lwlpb4MBtN8%2FF99bIozIXWSi%2Fjw3P0C2ddM1aRTosKvZ20pdubtFm6Rf3t8sPpaeeqbZcGI4BtR0zaHEAw%2BPhJCLqNmMFMTmxA9y0K70R96xmAX8lQ%2BGmxNk2fIptQrs%2BkrQziOtiriYzriCGp5%2Bj6XqrH2rYW4qzKK6%2BWh5d1dMbRqKlb9p2QXdeUKdO7WGrUjGl06pmfDQn1RrMYy2aYfyKKURC0QQCBxynAFG9krFy73k3KZuUK%2BxwdzsjUUiP8A33Zmxdn%2Fg4bAkBJGguG8v4l3HDsx5UomhCiy%2FJGc0pxAXyw%2BDO0pQszCFxN%2FJBjqkAZLOer9NqnnNbz4a4MsUY2yuXbkeIfFxQC4xLtUsdDvKUleljHGUxBtLhXbKlych0DYBdBFL3aa%2Bq2OD2hLMtm%2Bre2OqKzNwMptujxTD1JZs0rBUuLx6KTIpfPn9KZ5jhWUu2MPFUNevfLSNHme4V7OM35zKWqUaa0HAY5qOr4XWN%2BfXHhQuBAYCMHJqGnFA%2BBRJrmrWQ2IdaLaNwYQ5%2FkvggrY9&X-Amz-Signature=22876449c600e229f2e8c849945bfee419dcd51eb5d9a257547cad9097364f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMXNLWKB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIJlU3kB%2B14HELeFo4ptyVYWFfMMfcmz5LNBQpPnoKSQIhANaROQu3uCF99yd3vpcyaEK%2Ffk1oggg0P%2FpUba9rfP1HKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2maWvmekUaRXDtE8q3AOc0SwILs%2BWMPhjfsJLs04MkFqTsAg31co6OuGbLoQZw%2B6FpNQWKYIO4v0N4ns06GVRzl8GSE4X4lAF4n74GWpM4OJROdhzrNUGXIwsV9uwoP6jlaqw1KzhZB5TYhbWF1nCLAdT17p4o%2FMD%2BNHTXeVqdMKJH5JioN6qpBNmZwK%2BlBDfm7FGdvO8NsmRdyeldTDln8oyR2DbjdVm%2BSQS%2FI405ybO5LWYvooT13lOPKATfIVeg93TS3Y666D4Lld0GJvt%2FwbsCpKk0i%2FyE6y2tJvgggAhowKI9JOD1rYllMHeQHJBiN%2BlXFj3oUaZV7rB2oI3Lwlpb4MBtN8%2FF99bIozIXWSi%2Fjw3P0C2ddM1aRTosKvZ20pdubtFm6Rf3t8sPpaeeqbZcGI4BtR0zaHEAw%2BPhJCLqNmMFMTmxA9y0K70R96xmAX8lQ%2BGmxNk2fIptQrs%2BkrQziOtiriYzriCGp5%2Bj6XqrH2rYW4qzKK6%2BWh5d1dMbRqKlb9p2QXdeUKdO7WGrUjGl06pmfDQn1RrMYy2aYfyKKURC0QQCBxynAFG9krFy73k3KZuUK%2BxwdzsjUUiP8A33Zmxdn%2Fg4bAkBJGguG8v4l3HDsx5UomhCiy%2FJGc0pxAXyw%2BDO0pQszCFxN%2FJBjqkAZLOer9NqnnNbz4a4MsUY2yuXbkeIfFxQC4xLtUsdDvKUleljHGUxBtLhXbKlych0DYBdBFL3aa%2Bq2OD2hLMtm%2Bre2OqKzNwMptujxTD1JZs0rBUuLx6KTIpfPn9KZ5jhWUu2MPFUNevfLSNHme4V7OM35zKWqUaa0HAY5qOr4XWN%2BfXHhQuBAYCMHJqGnFA%2BBRJrmrWQ2IdaLaNwYQ5%2FkvggrY9&X-Amz-Signature=0ea48c5a62ed922757252d5cdc59e31db4e1fa3f0952e649acaee3cfc4265e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
