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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMEQJ5P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx1luUHYcKVY1YcXjTw%2FkKCAbuK4RvuOaJIpw1XYpWWAiBzNDfK7IEmToMD0caR5AhP87CbmwW2O0xBYl3%2F%2BJ2QiSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWkX0oBOZz34kCd7KtwDYaDPdRVmbCknZ9Ln3JN3%2BSxLDhQOlaRv635gQk%2F9%2FhIK%2B88mxpjvnUcLfsV7nG%2FzSlhj8RscQtQyJG2amSuJko1n9GDLdTEdzA5z3iQ2M8fnLLh6ZlLiMILDo37b9k29FPJYnMA9KfwZRvzzyHWtyXydX8U7Wbx5p7gUoLD1yZ8%2BXime%2BJHX2CrwqGyUVdLgjG5A4QkgF0AMCjbMkEhKKR89%2Fe%2F9tAy0qrJbmxliePThImaSe64oS23RLZJbVcJJs5JlMLQuo6cxj7Xzxn0IA1hJyfyIwufZFisTyJvvAOaXQIkHeLNBcNVyBoo7H95QcAqtNfftFtm6z1fdVxDUyEw0e3a3O6hjMt32vXbYHO1p6aLf7Fu8hd%2BYy8OMX333gaa4ROoIjwk%2BBSeusb1PBXyVR14RzN0LRZP1Djkn89jmqYB86gspyjD3CnN9TB1O%2Byz0aoZacR7CEYE4S%2FaZKauPM%2Fy%2BgFzlViYMEJ8L4Dui0E7rUJDYHt4ityX3XAJdvHfbX8Hn1aT6Wi1cg2f%2Bwp9xCbZX8Lhaow4zn%2Fbis%2FzKoCUgK16UGFs8PXbTcsjRlXPaJU8yqb7TMSF7sB65J003ek%2Bnz%2FejD2%2BkOZ42knnvyeyhm3mKI0MW8cYws4GLygY6pgEO0lDVxhQa2zOxJPUGy08HlxUiSy8vtNUodL7k6Kq2N6TorWhOs5Z57qNDUbmmY5roXOEkF6J43G9Use219RduQPAKwbvwxA%2FuuABY8gU%2FZYUQSyZqGrQtAzvAXKwG2TwLo548WzgZEId%2FeZZfscit%2BHQ1j1rGUn5ZjovkQ0C5PmtTlDobhfyZmPcwcdPmNPy95gPMNHafSbOJrA6p3ftjrxZG%2FpuW&X-Amz-Signature=854e7795f84c38ae1ed1b6e87dcc298cff0146fae189b2fdc7cc029031780d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMEQJ5P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx1luUHYcKVY1YcXjTw%2FkKCAbuK4RvuOaJIpw1XYpWWAiBzNDfK7IEmToMD0caR5AhP87CbmwW2O0xBYl3%2F%2BJ2QiSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWkX0oBOZz34kCd7KtwDYaDPdRVmbCknZ9Ln3JN3%2BSxLDhQOlaRv635gQk%2F9%2FhIK%2B88mxpjvnUcLfsV7nG%2FzSlhj8RscQtQyJG2amSuJko1n9GDLdTEdzA5z3iQ2M8fnLLh6ZlLiMILDo37b9k29FPJYnMA9KfwZRvzzyHWtyXydX8U7Wbx5p7gUoLD1yZ8%2BXime%2BJHX2CrwqGyUVdLgjG5A4QkgF0AMCjbMkEhKKR89%2Fe%2F9tAy0qrJbmxliePThImaSe64oS23RLZJbVcJJs5JlMLQuo6cxj7Xzxn0IA1hJyfyIwufZFisTyJvvAOaXQIkHeLNBcNVyBoo7H95QcAqtNfftFtm6z1fdVxDUyEw0e3a3O6hjMt32vXbYHO1p6aLf7Fu8hd%2BYy8OMX333gaa4ROoIjwk%2BBSeusb1PBXyVR14RzN0LRZP1Djkn89jmqYB86gspyjD3CnN9TB1O%2Byz0aoZacR7CEYE4S%2FaZKauPM%2Fy%2BgFzlViYMEJ8L4Dui0E7rUJDYHt4ityX3XAJdvHfbX8Hn1aT6Wi1cg2f%2Bwp9xCbZX8Lhaow4zn%2Fbis%2FzKoCUgK16UGFs8PXbTcsjRlXPaJU8yqb7TMSF7sB65J003ek%2Bnz%2FejD2%2BkOZ42knnvyeyhm3mKI0MW8cYws4GLygY6pgEO0lDVxhQa2zOxJPUGy08HlxUiSy8vtNUodL7k6Kq2N6TorWhOs5Z57qNDUbmmY5roXOEkF6J43G9Use219RduQPAKwbvwxA%2FuuABY8gU%2FZYUQSyZqGrQtAzvAXKwG2TwLo548WzgZEId%2FeZZfscit%2BHQ1j1rGUn5ZjovkQ0C5PmtTlDobhfyZmPcwcdPmNPy95gPMNHafSbOJrA6p3ftjrxZG%2FpuW&X-Amz-Signature=1f95589b0f173f882e732c6cb25ef4d42a280cbddbf46e39d95422d3a9cf9e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
