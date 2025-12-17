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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIDKEVB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIt7FX2%2B9mAr67twY9uZE4wDAs2Xbxazb5pVYF%2F34dzAiB6o7ATumQwv4L5S6jn%2FrGmKttL4qR6wRDQmHT%2F%2FS4NISr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM63%2F%2FlHJjfenX%2FxqKKtwDVPCmjCUxep45ST8DDnBPyxTRTk8mHIsjJkTAGK1S8TYTLykjog4%2BcDiALntU3fD0lrZXY2pGq%2F3fn4HJVhEX63M6VBKAvQjlvcMv12bbsze33JkGXx%2BoxgAsOhtA381YUUGWfwyOhbyyTViS0QjTaVElUec62l9BWs0lyGujUuK%2B%2F%2BqbxXyzmPzJNhyaPy0ioM7%2BoFQ63aNZFbOnIHbbMnlfxFIhnrZ%2BGLzABRmDqBmeUNpzmX6nla5Wegbg5uXqm3IdBtpU8xOO4Ve1ktGOu7VjAw2nXOY6zPd3yRwxP%2BE2WfD%2FiFnIhzqj8GePsBxCph9gzYZlkmwJ1lV1VBa6oClQSHENrlBvY5WoWTVlTOCTVsAMRnb%2BiZ5ab5opR0KrWY9cZgN0QjYlc1qkVqlDj%2BqHUoNlCdDq21l3O%2Bz8TfTtp7OSdbPala2CL8c%2Fv0Qv%2BMQqbj3K3ZQ%2FGpEF6xZ%2Fr5%2BMzlLk2e9T6PRUf9v0xvJtoXaVUrevW87L%2BVCamBL05G9n%2F%2B1AUYuTpI9ul%2BZKSae9WsZrBaccMYW1axw4v7FGE9iV8j691Dr57m5tJc4LqnZHbun%2FlFOWh0b2ISpWBNqLENEfe%2FRoIZisT5CqIkgZzuD8x7Tk4l5yXlcw%2FLGIygY6pgEDvCgF1KIanW8a83c6Dc0zDLbJ3H%2BUXQ0PCOvSGjicd4TtU0utDy6POE23dz2UjHwT4G6OPE1qFSDJkCoaNC4reN76Hib7WWsqN4Vy8W9jZ1yKItoCFTVVmR70UN5%2ByAfY6c7kA295B5rhISQrE5zvmbEou9Ovl9fCrYlGpSSNJ8bI4M1xaKUm1iB9yI4cZyrg08aIMzPYBCiTusrDy0eRU5vGnF2O&X-Amz-Signature=e80abc4224bcb0d327a9cb6b0fdc26a199ff5892b84cb1752a331bd7c65d93e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIDKEVB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIt7FX2%2B9mAr67twY9uZE4wDAs2Xbxazb5pVYF%2F34dzAiB6o7ATumQwv4L5S6jn%2FrGmKttL4qR6wRDQmHT%2F%2FS4NISr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM63%2F%2FlHJjfenX%2FxqKKtwDVPCmjCUxep45ST8DDnBPyxTRTk8mHIsjJkTAGK1S8TYTLykjog4%2BcDiALntU3fD0lrZXY2pGq%2F3fn4HJVhEX63M6VBKAvQjlvcMv12bbsze33JkGXx%2BoxgAsOhtA381YUUGWfwyOhbyyTViS0QjTaVElUec62l9BWs0lyGujUuK%2B%2F%2BqbxXyzmPzJNhyaPy0ioM7%2BoFQ63aNZFbOnIHbbMnlfxFIhnrZ%2BGLzABRmDqBmeUNpzmX6nla5Wegbg5uXqm3IdBtpU8xOO4Ve1ktGOu7VjAw2nXOY6zPd3yRwxP%2BE2WfD%2FiFnIhzqj8GePsBxCph9gzYZlkmwJ1lV1VBa6oClQSHENrlBvY5WoWTVlTOCTVsAMRnb%2BiZ5ab5opR0KrWY9cZgN0QjYlc1qkVqlDj%2BqHUoNlCdDq21l3O%2Bz8TfTtp7OSdbPala2CL8c%2Fv0Qv%2BMQqbj3K3ZQ%2FGpEF6xZ%2Fr5%2BMzlLk2e9T6PRUf9v0xvJtoXaVUrevW87L%2BVCamBL05G9n%2F%2B1AUYuTpI9ul%2BZKSae9WsZrBaccMYW1axw4v7FGE9iV8j691Dr57m5tJc4LqnZHbun%2FlFOWh0b2ISpWBNqLENEfe%2FRoIZisT5CqIkgZzuD8x7Tk4l5yXlcw%2FLGIygY6pgEDvCgF1KIanW8a83c6Dc0zDLbJ3H%2BUXQ0PCOvSGjicd4TtU0utDy6POE23dz2UjHwT4G6OPE1qFSDJkCoaNC4reN76Hib7WWsqN4Vy8W9jZ1yKItoCFTVVmR70UN5%2ByAfY6c7kA295B5rhISQrE5zvmbEou9Ovl9fCrYlGpSSNJ8bI4M1xaKUm1iB9yI4cZyrg08aIMzPYBCiTusrDy0eRU5vGnF2O&X-Amz-Signature=2cb1af3a6446e4f372770519804d6494a2e35677a7dd64f00a82f27c20b3b4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
