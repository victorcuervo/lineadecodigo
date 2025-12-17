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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHKOUVA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgpjYhQruUs8z8XnKz2gJlT5tYEgDKhHmsp9KrEpA9%2BAiEA2OLLcDkfG7tzSObS9%2FlAkf8Y6keBqKWSRqqVg3wbrUwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK%2FkKTvzbxrRYCmUSrcA608rpOvJrJ%2FoIuo9eskD8Uq%2FUb4Kh2YyS90qXfKMHif3d1FjM8bDMFyupWsd1VhjF0d97BtGfc7zh6SrAenLLLj0Zegsj4i5Whf%2B1AimNO3gPSDhN7Qz9G4ittQh%2FD%2F1p89wqslCx3%2BOZMkrMKZkpUBuFoLHNLruNn9her2hUm%2FkHPqGJAdFQimv6lJ%2B6hSHq28dRySCi7V8NKxEDCV7VEGRXhFm%2Ft0coogGzC41wPsfxEzmO8Xp5q2pqyfWqDXzCAzC7ZDiN%2B%2Fnt9J0mpW6S55wP9a9iShf59gUbnWBQug6bI0b7TzUZXlZ9eXIZFjMcvrXr95SvnZqr4dp9%2FxExICID5FXQOxsQ4iF43wn4x%2FYWWZxK%2Bkd4DcQhq5sz39DfbHkNOLTK792qK8M%2Bs9J98su%2FNAverS6e0fMQe%2BMhc8Wb6E8LuAATNPj0VsgJKpZwfG%2Ff1MJnrGan%2Bb%2FGcFNLxqvT%2FUf83sk1eVg%2FQvBNSv1mLjgwlu4snlP7vpasJTcKJShKIxxpnmIJGpCzIWa5QuQ3ymgOw8yAGD0uqSkQ%2B7h6halzUDGLiBvjquPv0QCH%2F6rUcVDB94m%2Fy1mfiyxuXzcB3fI0IdfzYi1MUpES3tw0B8dAC0b9lFnXfYMKafi8oGOqUBJgZjnWWrU%2F2QTYYzDHj5OJdfMffYfaya6MyCLtpDZPJ3szTq27nvFGxFMFJ%2F5SHF1CTTwqEY8cqKSP1EsipfrgZjUwl3S78iXty7CqoxX2NaMkNarwfwx8AXxpl%2FzHOP%2FNzimoVkfv2zlSB8i6AQGVC8AOHonz6IgiPD1TqM4j12IdaiMdpgehp%2FO1X5yI9oNKNIUCpZPswoi7wQ%2FKrq5mo%2BCsFz&X-Amz-Signature=4af9685b38a747194dc3ff6efe77041fc22e79d4efd94ea191c5a07d3d06aba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHKOUVA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgpjYhQruUs8z8XnKz2gJlT5tYEgDKhHmsp9KrEpA9%2BAiEA2OLLcDkfG7tzSObS9%2FlAkf8Y6keBqKWSRqqVg3wbrUwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK%2FkKTvzbxrRYCmUSrcA608rpOvJrJ%2FoIuo9eskD8Uq%2FUb4Kh2YyS90qXfKMHif3d1FjM8bDMFyupWsd1VhjF0d97BtGfc7zh6SrAenLLLj0Zegsj4i5Whf%2B1AimNO3gPSDhN7Qz9G4ittQh%2FD%2F1p89wqslCx3%2BOZMkrMKZkpUBuFoLHNLruNn9her2hUm%2FkHPqGJAdFQimv6lJ%2B6hSHq28dRySCi7V8NKxEDCV7VEGRXhFm%2Ft0coogGzC41wPsfxEzmO8Xp5q2pqyfWqDXzCAzC7ZDiN%2B%2Fnt9J0mpW6S55wP9a9iShf59gUbnWBQug6bI0b7TzUZXlZ9eXIZFjMcvrXr95SvnZqr4dp9%2FxExICID5FXQOxsQ4iF43wn4x%2FYWWZxK%2Bkd4DcQhq5sz39DfbHkNOLTK792qK8M%2Bs9J98su%2FNAverS6e0fMQe%2BMhc8Wb6E8LuAATNPj0VsgJKpZwfG%2Ff1MJnrGan%2Bb%2FGcFNLxqvT%2FUf83sk1eVg%2FQvBNSv1mLjgwlu4snlP7vpasJTcKJShKIxxpnmIJGpCzIWa5QuQ3ymgOw8yAGD0uqSkQ%2B7h6halzUDGLiBvjquPv0QCH%2F6rUcVDB94m%2Fy1mfiyxuXzcB3fI0IdfzYi1MUpES3tw0B8dAC0b9lFnXfYMKafi8oGOqUBJgZjnWWrU%2F2QTYYzDHj5OJdfMffYfaya6MyCLtpDZPJ3szTq27nvFGxFMFJ%2F5SHF1CTTwqEY8cqKSP1EsipfrgZjUwl3S78iXty7CqoxX2NaMkNarwfwx8AXxpl%2FzHOP%2FNzimoVkfv2zlSB8i6AQGVC8AOHonz6IgiPD1TqM4j12IdaiMdpgehp%2FO1X5yI9oNKNIUCpZPswoi7wQ%2FKrq5mo%2BCsFz&X-Amz-Signature=442bdc552b350fb43ce0304386ab53655f0666c40ca0d32ec57ab758930e6446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
