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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4FZ26DA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNl35ziNb69OSgmfwJZUOw0TQgeX1J6wKCzVYAe3xIFwIhAMii%2F1e9jEgcHsTC%2FtQodNp%2BT6GhKhrvHzGyRelib9kIKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfOSSKXbVXnT0P%2FpIq3ANKQPtA4WTW6lSnkrAZliNQfF8nKN3sTazX1%2BrqjI2JQCuKieUg2K8Ceg3CUttEOJ6%2FCEouNZs39skkiivv6aw9OBjy3fBdXoksVrsL4tcE4vD7H70xx6wxyXDezrV2D1LWGtJsem3foAGfRNcGs7KnkyLCWrBaCwSgXXsj4LnRF%2BtthjtVgmbFlKxsJkOD15ofiYdGKFkUfeRYs21WjRPAxOK9wJIW%2FhJ8wr9wrIJnq%2FFTemimx2AmsypPuKKT3Rts%2F5SpzFs3SmcPIMGcbSXE4pY%2FTE6lrbYcjVzDLbZjexDMK5LrXdn9OdhvWMXsfVIcnY7C9fwAb2VaCplHNLMHi9%2F3Scf8lYbwzrxaMCKk3RZc7hJ53n%2BoLG4z3IDxIXjWKZvOMajkS%2B1XUZt%2B9l9vYgXCLxPpFAoR4FdlvjA9kZ1TUNMuUJ6VWmwuPKXmgFH8Pk72R5bXag1pR%2B2XEaUb9BtdTr63s71lxsa5BrpTUUmlx0%2F44JaPwkE7xMF%2F8CQZrHgOQiCUzv2lM0LJuNDAxrForOX1D8lmv%2F5vYS4TZpf5Mpe7SXbYw5sjBg%2FIXIPVzT9sDfmrFOT%2FUuEhPI95xB7%2Fp28EmwrwcIM%2BA0JiaVrCEkobhyyLEasukzCs6d3JBjqkAWCODzCqY6UPN05ceOK5%2FcgxhVi9K1VKpxz4kELqbEJYo6C7%2F6OeEv%2BO8AfoAqliUnPF7GgP9Gl1BC6Hn7WSGj5WOqQ65jHwWmS%2B4rWD3KzGboHMqK0LH76jUlIWUJBuvHyIwTAn4fum8PGCFWujCebvACHIdyQJIDOmtk%2FeK4dBv94SdOQ%2Bc4JcWauRedMHding6UwAu%2B3I8zzxginBwmLf9Btq&X-Amz-Signature=01550a9428ee24e5e9ca50a69ad559aec4bf9ff3169fc6522c8cb79f7a79f16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4FZ26DA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNl35ziNb69OSgmfwJZUOw0TQgeX1J6wKCzVYAe3xIFwIhAMii%2F1e9jEgcHsTC%2FtQodNp%2BT6GhKhrvHzGyRelib9kIKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfOSSKXbVXnT0P%2FpIq3ANKQPtA4WTW6lSnkrAZliNQfF8nKN3sTazX1%2BrqjI2JQCuKieUg2K8Ceg3CUttEOJ6%2FCEouNZs39skkiivv6aw9OBjy3fBdXoksVrsL4tcE4vD7H70xx6wxyXDezrV2D1LWGtJsem3foAGfRNcGs7KnkyLCWrBaCwSgXXsj4LnRF%2BtthjtVgmbFlKxsJkOD15ofiYdGKFkUfeRYs21WjRPAxOK9wJIW%2FhJ8wr9wrIJnq%2FFTemimx2AmsypPuKKT3Rts%2F5SpzFs3SmcPIMGcbSXE4pY%2FTE6lrbYcjVzDLbZjexDMK5LrXdn9OdhvWMXsfVIcnY7C9fwAb2VaCplHNLMHi9%2F3Scf8lYbwzrxaMCKk3RZc7hJ53n%2BoLG4z3IDxIXjWKZvOMajkS%2B1XUZt%2B9l9vYgXCLxPpFAoR4FdlvjA9kZ1TUNMuUJ6VWmwuPKXmgFH8Pk72R5bXag1pR%2B2XEaUb9BtdTr63s71lxsa5BrpTUUmlx0%2F44JaPwkE7xMF%2F8CQZrHgOQiCUzv2lM0LJuNDAxrForOX1D8lmv%2F5vYS4TZpf5Mpe7SXbYw5sjBg%2FIXIPVzT9sDfmrFOT%2FUuEhPI95xB7%2Fp28EmwrwcIM%2BA0JiaVrCEkobhyyLEasukzCs6d3JBjqkAWCODzCqY6UPN05ceOK5%2FcgxhVi9K1VKpxz4kELqbEJYo6C7%2F6OeEv%2BO8AfoAqliUnPF7GgP9Gl1BC6Hn7WSGj5WOqQ65jHwWmS%2B4rWD3KzGboHMqK0LH76jUlIWUJBuvHyIwTAn4fum8PGCFWujCebvACHIdyQJIDOmtk%2FeK4dBv94SdOQ%2Bc4JcWauRedMHding6UwAu%2B3I8zzxginBwmLf9Btq&X-Amz-Signature=9da242cd54ebfefc87f204813c160e7d4352297a66c596dd2968959676e8cc14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
