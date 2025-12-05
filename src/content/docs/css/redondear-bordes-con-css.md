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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOO2UOG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7a4Rd%2FdBRC7z58MjRr8yai3xnnLQIDb87fMdUNyLj5AiAIdAeuYe3W7bapS7QhpBe4rAPkAsKmHnmCLJfNwjaiQyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMRGvC%2BpddOwF1WNLWKtwDJ3OaNW1NiKeWdsxBpqsLy8i0xlZeupsP4WZwFNx9euh2ysSbN6%2F7dVv713K2u0mCsbsvbaQQkLs8JeWe6Q2Ms5qJTXsiFEqErfRaUAnnJxUvqUoQ55krhjcBaaXgzWHGRB1OYA6H5SIR8EgvaMzS7TeJa6TE9mqO0FHqogpN81aNLyv%2BzyibmZYgtaJiLeQzaxqJKOrr9nai7BhdpUJuQN%2F1ZZC8fBpyFE5ecgAAEZ7qBhpErOYMT7T1kBhfKxfnZg7M2hqsdL5ru9ux9VDJ20HWsLb2xy7VC1F6GutrSB4YCQ8tGs1h8d0XeXzqsXpjNYr2mZR4y2Mrtil7T9oyCzrDyb4aOwlQebwZmi4kvnR%2FEnjurCHtb6QL4CQvlbTmBGEAT8RYY41%2F0ivX63t1m0e6HZ1aT1ydQzLrAd0emEvUoctieaGgLVea6HG%2ByhgmdqhKv%2FxdCOak2CyChtZWFDTJboOkSe214sQr%2BM3cIsyUoKrXdSxQwpvbLWyqxSF8bPZZF6Pi3Hbv7fD2m2rtMMooT9TKLCKq36jXnigCdlh3OUUBuU1fuUAR4Ryko6EBRD2kvGUGIPpa0MjVlBOq%2B%2FE5y6ewVOos0uHrib3FC1mK6akJ5Q6Re%2BJx3SAwu%2B3LyQY6pgHXQ%2Fdf48A30ckVvZit77mQCI9X4sJEELsQX5TuPLR54orceh5TMyXOLTQZcxjXYurVrupIlyyprxC6VBZ7DnnkOTfJNQG0DHbJoq3bwvsHuc6eteS%2F8%2FnzPcLHZ0yFQjvwRYG48sRT6oSMYhQuLkGk4TzdXYk%2BLNX%2BtmSMDwB5N3Jn3aa1ah1PdPxUaOZlnuVuHKFYX2v94A1eVFjyLvrrKjSBlhBz&X-Amz-Signature=1562006988d379d882bc988346408b9d1993e804292ca87b0dd8510d3e8c08bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOO2UOG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7a4Rd%2FdBRC7z58MjRr8yai3xnnLQIDb87fMdUNyLj5AiAIdAeuYe3W7bapS7QhpBe4rAPkAsKmHnmCLJfNwjaiQyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMRGvC%2BpddOwF1WNLWKtwDJ3OaNW1NiKeWdsxBpqsLy8i0xlZeupsP4WZwFNx9euh2ysSbN6%2F7dVv713K2u0mCsbsvbaQQkLs8JeWe6Q2Ms5qJTXsiFEqErfRaUAnnJxUvqUoQ55krhjcBaaXgzWHGRB1OYA6H5SIR8EgvaMzS7TeJa6TE9mqO0FHqogpN81aNLyv%2BzyibmZYgtaJiLeQzaxqJKOrr9nai7BhdpUJuQN%2F1ZZC8fBpyFE5ecgAAEZ7qBhpErOYMT7T1kBhfKxfnZg7M2hqsdL5ru9ux9VDJ20HWsLb2xy7VC1F6GutrSB4YCQ8tGs1h8d0XeXzqsXpjNYr2mZR4y2Mrtil7T9oyCzrDyb4aOwlQebwZmi4kvnR%2FEnjurCHtb6QL4CQvlbTmBGEAT8RYY41%2F0ivX63t1m0e6HZ1aT1ydQzLrAd0emEvUoctieaGgLVea6HG%2ByhgmdqhKv%2FxdCOak2CyChtZWFDTJboOkSe214sQr%2BM3cIsyUoKrXdSxQwpvbLWyqxSF8bPZZF6Pi3Hbv7fD2m2rtMMooT9TKLCKq36jXnigCdlh3OUUBuU1fuUAR4Ryko6EBRD2kvGUGIPpa0MjVlBOq%2B%2FE5y6ewVOos0uHrib3FC1mK6akJ5Q6Re%2BJx3SAwu%2B3LyQY6pgHXQ%2Fdf48A30ckVvZit77mQCI9X4sJEELsQX5TuPLR54orceh5TMyXOLTQZcxjXYurVrupIlyyprxC6VBZ7DnnkOTfJNQG0DHbJoq3bwvsHuc6eteS%2F8%2FnzPcLHZ0yFQjvwRYG48sRT6oSMYhQuLkGk4TzdXYk%2BLNX%2BtmSMDwB5N3Jn3aa1ah1PdPxUaOZlnuVuHKFYX2v94A1eVFjyLvrrKjSBlhBz&X-Amz-Signature=478661395fe7ca1b5edb12fb04db3336a10dfb020d982996b945024e725a8867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
