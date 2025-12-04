---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZIIAZT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGoEmUzYLtZPsV6N6YSGvq3p12FOqyATo9HTf%2BOKLxeiAiBEE3VUA4XoPGJygNSkfs%2FCqDLN9Gl%2BgT%2FMzpdNUC9n8Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMKbWvKKLqFD%2F8grbUKtwD1yL1KACpnqMlsaqeUMgbCKZ5XV3Hm%2BTMb8j9OmGtwpwEkdUrqzJPu9WPgCtgbDdVbnLge3S%2FJqq9Wtyy5AmwXV%2BmbvQP3Zjwcw4Fy8cPwUuFHsHWTcAGXpX0nh1IlBegRJspkbkT3Qpnj9W6X9FR%2Ftf7DKopRGxWIULOS9SAbvddxUJvJHAnBlBnMIGh13m%2Bi%2FkI2UxOzhJFIpyd%2BrsQeI7xh33D638lHrtyRJKw4ezkH0Z%2BK83RtRJqc0VP0lPzQIyxS%2F1mCq65Sy64voqrPmBYzJZ1HiZaaDCcGHcpqR4tsxE8gVNaewd7Vm6U3tUhPsFZk%2FfAWfXRVNfVEJBhMbWGLkIQH8rZotOWWW0YuBxR4IS6sStD4uvGoM4y5vh7YezIWdl8A51QPF8Xs1BD6%2BU0X4%2Bl9tzhmlxlToKo0JqSAzS2QC6DQlScleRbWHvI%2F9tjIIiOGF6%2FRbZJrZnzZzH1wnRnsm4X7uDyGtTe9%2B6I4g4X4Mx%2FvEFyNhsRUlVo924BFdqXWLz7XJEOFwY6JGOsETUyOmAEoeG82QIUbbNjbfrmyEbzA0qU2t5ihSr673YqQvzhk0l0ZLfu6X3qFMXyUwQz6vyTEwAaI3XGsxC9JtzpKbSvlXgFLb0w2MrEyQY6pgHI%2BN7baDe1yEOBfQxcgqXcdKH%2F9UxRbNqL454Atm8x3ppVW7s0K9UdKrQkmdipZcYXaPvXW7x6A5ZPvN%2BFpAhOv3RQnH8acV7PWSWHmJrMv%2FknvThhfZDtT5IVa%2BTLgG8D8aQIYiBG9Zt6toAWzskGHavmhNOW3TVE5tqy0M1ei%2FTxREhpoC0vIiNlSiSn12DWt267c672F%2BZEdbEXZ%2BWIxy0RsTCQ&X-Amz-Signature=f7f65c1366a19ada9278ea8d30e2f6ba04d089ffd0143758958a1ac3bbf161ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZIIAZT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGoEmUzYLtZPsV6N6YSGvq3p12FOqyATo9HTf%2BOKLxeiAiBEE3VUA4XoPGJygNSkfs%2FCqDLN9Gl%2BgT%2FMzpdNUC9n8Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMKbWvKKLqFD%2F8grbUKtwD1yL1KACpnqMlsaqeUMgbCKZ5XV3Hm%2BTMb8j9OmGtwpwEkdUrqzJPu9WPgCtgbDdVbnLge3S%2FJqq9Wtyy5AmwXV%2BmbvQP3Zjwcw4Fy8cPwUuFHsHWTcAGXpX0nh1IlBegRJspkbkT3Qpnj9W6X9FR%2Ftf7DKopRGxWIULOS9SAbvddxUJvJHAnBlBnMIGh13m%2Bi%2FkI2UxOzhJFIpyd%2BrsQeI7xh33D638lHrtyRJKw4ezkH0Z%2BK83RtRJqc0VP0lPzQIyxS%2F1mCq65Sy64voqrPmBYzJZ1HiZaaDCcGHcpqR4tsxE8gVNaewd7Vm6U3tUhPsFZk%2FfAWfXRVNfVEJBhMbWGLkIQH8rZotOWWW0YuBxR4IS6sStD4uvGoM4y5vh7YezIWdl8A51QPF8Xs1BD6%2BU0X4%2Bl9tzhmlxlToKo0JqSAzS2QC6DQlScleRbWHvI%2F9tjIIiOGF6%2FRbZJrZnzZzH1wnRnsm4X7uDyGtTe9%2B6I4g4X4Mx%2FvEFyNhsRUlVo924BFdqXWLz7XJEOFwY6JGOsETUyOmAEoeG82QIUbbNjbfrmyEbzA0qU2t5ihSr673YqQvzhk0l0ZLfu6X3qFMXyUwQz6vyTEwAaI3XGsxC9JtzpKbSvlXgFLb0w2MrEyQY6pgHI%2BN7baDe1yEOBfQxcgqXcdKH%2F9UxRbNqL454Atm8x3ppVW7s0K9UdKrQkmdipZcYXaPvXW7x6A5ZPvN%2BFpAhOv3RQnH8acV7PWSWHmJrMv%2FknvThhfZDtT5IVa%2BTLgG8D8aQIYiBG9Zt6toAWzskGHavmhNOW3TVE5tqy0M1ei%2FTxREhpoC0vIiNlSiSn12DWt267c672F%2BZEdbEXZ%2BWIxy0RsTCQ&X-Amz-Signature=97b52485748ddb42ff554e3660796bf268729e37a6757860cc8822eae303c9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
