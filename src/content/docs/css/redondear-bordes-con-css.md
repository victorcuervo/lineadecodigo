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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXA7JDG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1bQyORcC%2B8ctCxAAWuSui2ycBSzMbX%2FZZwmcWQlrjwQIgQ1YC7kIQmRydLWIofTk31lDok6QFauNaXMee68W8xFgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHXNFnhlhCSMnNSuSrcAzJUaT751cUewp6f9A33sKu1G%2FWBBUONMQbWkx0Aw%2FS52eirgD5jM0X36Df36REPEs2j8%2BLLqdOr88GZsHHytU%2Fc5CDGNaz7%2BygNR3jDBHaBZfEJ4RUEwkzNXKmy%2FJQFrJxY2WNWugsj2DHR10%2BjQITRONz6H9iX9kmPgBi5BMx80hXccm0mPRoQ%2B5aShvobSd09qqO9gDDtbnujZRuZdkrEHXk08VOrOgvfTCjU1z1QHYTG0pVy869nFymy6gIESeWGiK3%2BEo37HQjextjiYjcSoRmQ2Q%2FzibkEohGVFbcPK3P8xUAZSwhsh3jmgEThqqf1%2BxiPgTXYDV8B8TPz2VzDfpzmRbC2FaduVzORp2rig669w9pMrNu46V3y5q%2Bje3gA%2FSaymAUgZUCu4tri2JbGN7dt2ru31eRAD%2Bs9v4%2FMXbWE6q7Oi9eKl3EDOGvdDFzlcNcmzXugzY98sltaI%2B9tKioTNOKeFWXvALscrnVIKDSY1jNXTVCVzL71sAF1PIGhNwatU%2Fktgc6j5cTy9W%2FmrN08c%2BtiEV2FIphsFaziB2kobyUTjDyxneeBd8A3JSsLtrp8NAxiJYIGKO8TqZbFoqZKKvWMuXGDueFR3v5dmyobVbx7KgTys%2BN0MOzc3MkGOqUBBDpflu6zYZgo2b7S%2FfyOqcNwdjbwG%2BoVzcTdpMl%2FzxcHkVF7DkYdb%2FxGehBxnYQTJ%2FWpguJTtgIs86cYqo6wsdHDku%2FWqRn8vfZWBM0Q%2F0GMfOZNhCYH0%2B%2BSQarvgKZTtW0jR5HkBdVYyXaf9wz0YOeT1tCE0bPi1jBQwXqWQ0L3zBbNQvdzdeXEOCBqBHrLZI4tVuID1xVnYW4gvqrESZ%2Fzap93&X-Amz-Signature=544092f7fb3221e87ddf9aa1ad541030c25151fcc74edd469466ecb379401b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXA7JDG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1bQyORcC%2B8ctCxAAWuSui2ycBSzMbX%2FZZwmcWQlrjwQIgQ1YC7kIQmRydLWIofTk31lDok6QFauNaXMee68W8xFgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHXNFnhlhCSMnNSuSrcAzJUaT751cUewp6f9A33sKu1G%2FWBBUONMQbWkx0Aw%2FS52eirgD5jM0X36Df36REPEs2j8%2BLLqdOr88GZsHHytU%2Fc5CDGNaz7%2BygNR3jDBHaBZfEJ4RUEwkzNXKmy%2FJQFrJxY2WNWugsj2DHR10%2BjQITRONz6H9iX9kmPgBi5BMx80hXccm0mPRoQ%2B5aShvobSd09qqO9gDDtbnujZRuZdkrEHXk08VOrOgvfTCjU1z1QHYTG0pVy869nFymy6gIESeWGiK3%2BEo37HQjextjiYjcSoRmQ2Q%2FzibkEohGVFbcPK3P8xUAZSwhsh3jmgEThqqf1%2BxiPgTXYDV8B8TPz2VzDfpzmRbC2FaduVzORp2rig669w9pMrNu46V3y5q%2Bje3gA%2FSaymAUgZUCu4tri2JbGN7dt2ru31eRAD%2Bs9v4%2FMXbWE6q7Oi9eKl3EDOGvdDFzlcNcmzXugzY98sltaI%2B9tKioTNOKeFWXvALscrnVIKDSY1jNXTVCVzL71sAF1PIGhNwatU%2Fktgc6j5cTy9W%2FmrN08c%2BtiEV2FIphsFaziB2kobyUTjDyxneeBd8A3JSsLtrp8NAxiJYIGKO8TqZbFoqZKKvWMuXGDueFR3v5dmyobVbx7KgTys%2BN0MOzc3MkGOqUBBDpflu6zYZgo2b7S%2FfyOqcNwdjbwG%2BoVzcTdpMl%2FzxcHkVF7DkYdb%2FxGehBxnYQTJ%2FWpguJTtgIs86cYqo6wsdHDku%2FWqRn8vfZWBM0Q%2F0GMfOZNhCYH0%2B%2BSQarvgKZTtW0jR5HkBdVYyXaf9wz0YOeT1tCE0bPi1jBQwXqWQ0L3zBbNQvdzdeXEOCBqBHrLZI4tVuID1xVnYW4gvqrESZ%2Fzap93&X-Amz-Signature=7dde50e29d0df6dccef8151fb61b89dc2df25cff41a79a51035d6f28e785e537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
