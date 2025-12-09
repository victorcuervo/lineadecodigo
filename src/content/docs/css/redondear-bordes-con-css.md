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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7OJOVZW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSRj9fmnqr3S9ZE1m87DOdz0Cg5wyesKJ6wDJxy8vcxAiAjo4G9LmN3zHN%2FqB45UPjTdWDvTpXIYIowWb%2BS9u2DPiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMElwJomU5frH6QO0BKtwDhUN%2BTykCXZS1xfml2C%2BxtztJmU4tHjCX9Xe%2Fpf8XgO0ieEsNFYj6vjiuX45Oh7zBtwrqoaz8j5RC239pd%2B32CIlL2UXcSQSpbKlqfD%2Fzgnnp61atPjiHJa7lXiqt85Ub1p6c4iV9vjAFmtKmxSPKT4%2BY7pDUjfzRvjLnAHpuqVLm7poWL0A%2FBn3iYGjS0O1OTu6K41Niv9rqRSLgD5fZeTA8Z1gP6whD9nciF8e6uyBoYLt1604SA%2BOGhLdMt40l7YACPfOIEDr1NoTGD%2FHr6vDZLmNs6oojdP8NrLBz3TSFvYa2PG%2FWm86QDlax0tO0TvBJC9cCL7df%2F9MvtnHLT6xyTynq28Hma%2Bf%2Fu%2FftLlBp82K6Ud7Q%2FZy2WmoVo%2BoVifkY2w95S5O4e6GIgoWYUtltTo5Z1tBCGV8d4X%2FB7CxyzBGKF8QopWU7ZAVVI6%2BBtOJWMOKWiH9LIBRjIDKgzXQb0CITshUUwK9ctghDLpZBoJx%2BAOlSCuPooMNX3QtcrSB29jz8M3yiHpqY%2B%2FKhGW2j7lWJWWYN7PUV7cNMC9%2BNHoWD7ok5apUVqHMpS6h6oENGLa3rkhLJkLdW3eJfZZYU1WbVz42Oz8ZGB1BCBuvQLAi0TQi7xCDakugw5undyQY6pgET50w9QsAkzWZJ4IamacFkZhB7uAF6TMV8dRfcS6jho6%2BkjJSRdc4YRdcl%2FW2aSZiu5sAn8woqeSwGstB7I5HMCmNVceKDsD7Rwt9yfk7J6E6FzCbS4RN1cxXyen4OPT%2Bkixfuptj3Ez3ARUul8iy1Y%2FAkMKdSxAqjooX2BZXQ%2FNwB6wz5Md5veSaXRBCqmsVKTvCumI3bK%2FWkQvoOJ1NSoboVOHb5&X-Amz-Signature=775f6fc5b8d3195a4742490e4212b261bfd6980bd6798354fa99aef85b433ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7OJOVZW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSRj9fmnqr3S9ZE1m87DOdz0Cg5wyesKJ6wDJxy8vcxAiAjo4G9LmN3zHN%2FqB45UPjTdWDvTpXIYIowWb%2BS9u2DPiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMElwJomU5frH6QO0BKtwDhUN%2BTykCXZS1xfml2C%2BxtztJmU4tHjCX9Xe%2Fpf8XgO0ieEsNFYj6vjiuX45Oh7zBtwrqoaz8j5RC239pd%2B32CIlL2UXcSQSpbKlqfD%2Fzgnnp61atPjiHJa7lXiqt85Ub1p6c4iV9vjAFmtKmxSPKT4%2BY7pDUjfzRvjLnAHpuqVLm7poWL0A%2FBn3iYGjS0O1OTu6K41Niv9rqRSLgD5fZeTA8Z1gP6whD9nciF8e6uyBoYLt1604SA%2BOGhLdMt40l7YACPfOIEDr1NoTGD%2FHr6vDZLmNs6oojdP8NrLBz3TSFvYa2PG%2FWm86QDlax0tO0TvBJC9cCL7df%2F9MvtnHLT6xyTynq28Hma%2Bf%2Fu%2FftLlBp82K6Ud7Q%2FZy2WmoVo%2BoVifkY2w95S5O4e6GIgoWYUtltTo5Z1tBCGV8d4X%2FB7CxyzBGKF8QopWU7ZAVVI6%2BBtOJWMOKWiH9LIBRjIDKgzXQb0CITshUUwK9ctghDLpZBoJx%2BAOlSCuPooMNX3QtcrSB29jz8M3yiHpqY%2B%2FKhGW2j7lWJWWYN7PUV7cNMC9%2BNHoWD7ok5apUVqHMpS6h6oENGLa3rkhLJkLdW3eJfZZYU1WbVz42Oz8ZGB1BCBuvQLAi0TQi7xCDakugw5undyQY6pgET50w9QsAkzWZJ4IamacFkZhB7uAF6TMV8dRfcS6jho6%2BkjJSRdc4YRdcl%2FW2aSZiu5sAn8woqeSwGstB7I5HMCmNVceKDsD7Rwt9yfk7J6E6FzCbS4RN1cxXyen4OPT%2Bkixfuptj3Ez3ARUul8iy1Y%2FAkMKdSxAqjooX2BZXQ%2FNwB6wz5Md5veSaXRBCqmsVKTvCumI3bK%2FWkQvoOJ1NSoboVOHb5&X-Amz-Signature=cd3a9fe74ed0bd2a95ac404cd6a33515c4ea424874f0080e9a992efc417fe588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
