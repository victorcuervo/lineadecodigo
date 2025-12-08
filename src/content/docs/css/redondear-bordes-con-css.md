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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OER2XU7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjc63tM1fjBOZVGvdXxip5DEr72IiQtj56K9LuRGlN3AiAslRAAnzEMSbLcw%2F53%2FQtayywlGgtY9VBF%2FlFrJSQ%2BdCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxoAfmDCp4uPGgxekKtwDZJ70hpcWze0c74mqzEuj2B6i1nBjrguBwaWlUftpab9O7POWl%2B7ABuwdIJ%2F43foYWa6yBmbYyx9L2AF%2B6U4AtABvFZfJJTd5DOVNuAR%2BqGISoN7ihuI7%2B0mKrGJiNIH6juZ0ueWywnJfpFxJ%2BH8KAcPPT8MKpeQCF3PmggjhrabkxroSUxRkv6VqSL9oytc%2F3Q2UT4CwNXE2%2FrrRl7UyxB%2F4pOYY6XQDYpnrOg9UAh46xyyBifstItx9vweaRNLwMJlPjRf3gNGgUL1xhlbuXfFYqgAMcixRiIVAlwQBJd75qeEsHdJZ5Hhs4mtoHsauqkA7360yQQ0DQuwP4v1OAH%2FOjn7MtlEhP9yDVE4S5XTak7dg9v0XEFZzm37hNjCaz%2BvAXPZazRHx9OL9ZpaxCUqA%2Bqi393jdhVRPSeesoZ3cw%2BRG6Hm7UC%2FiEDh5Vx2PeNB%2F%2FVtq2yFnTNGxQw3yj6hPjr5xwFbwEe6AkScI7Xr8jm2YbPP243gs%2F6GVgBhZEURz3rbXftyXQIgA%2BdEOdZact6GTclidD0PUa%2BQV99OQ6plTzZJfMb5%2B3ATApvxXZ97DX8w%2BmKN4DxWUw4po8Q%2BmDW1be0iOQZYxoykI4%2B58riltXfGOn2%2B1viMw4qHdyQY6pgEVuHpGnOQP9Dg7fue%2F8HBbKDrFlJsbQeO2Viidb2H7aa0hoOtlzJ%2BBFxXtWyJz0ZjrThEpdxeHODx1QS463CSn%2BQjA5fa%2BWbWehATG%2FCCU9VvaieWekZsdrrCkDfoBWkyHBf312trjcUvHpg%2Ba9mLp4Ibi%2FisND6L1znL5jbCqycEtJwY1kW5hmYOJ1lKIycx7BnyQrenedNXZZ1amomJ3CQxXmUmd&X-Amz-Signature=08d63b1b1bf1e80015465a88a54766fc3cf9dd8d59a13bf083c878a9134a87b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OER2XU7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjc63tM1fjBOZVGvdXxip5DEr72IiQtj56K9LuRGlN3AiAslRAAnzEMSbLcw%2F53%2FQtayywlGgtY9VBF%2FlFrJSQ%2BdCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxoAfmDCp4uPGgxekKtwDZJ70hpcWze0c74mqzEuj2B6i1nBjrguBwaWlUftpab9O7POWl%2B7ABuwdIJ%2F43foYWa6yBmbYyx9L2AF%2B6U4AtABvFZfJJTd5DOVNuAR%2BqGISoN7ihuI7%2B0mKrGJiNIH6juZ0ueWywnJfpFxJ%2BH8KAcPPT8MKpeQCF3PmggjhrabkxroSUxRkv6VqSL9oytc%2F3Q2UT4CwNXE2%2FrrRl7UyxB%2F4pOYY6XQDYpnrOg9UAh46xyyBifstItx9vweaRNLwMJlPjRf3gNGgUL1xhlbuXfFYqgAMcixRiIVAlwQBJd75qeEsHdJZ5Hhs4mtoHsauqkA7360yQQ0DQuwP4v1OAH%2FOjn7MtlEhP9yDVE4S5XTak7dg9v0XEFZzm37hNjCaz%2BvAXPZazRHx9OL9ZpaxCUqA%2Bqi393jdhVRPSeesoZ3cw%2BRG6Hm7UC%2FiEDh5Vx2PeNB%2F%2FVtq2yFnTNGxQw3yj6hPjr5xwFbwEe6AkScI7Xr8jm2YbPP243gs%2F6GVgBhZEURz3rbXftyXQIgA%2BdEOdZact6GTclidD0PUa%2BQV99OQ6plTzZJfMb5%2B3ATApvxXZ97DX8w%2BmKN4DxWUw4po8Q%2BmDW1be0iOQZYxoykI4%2B58riltXfGOn2%2B1viMw4qHdyQY6pgEVuHpGnOQP9Dg7fue%2F8HBbKDrFlJsbQeO2Viidb2H7aa0hoOtlzJ%2BBFxXtWyJz0ZjrThEpdxeHODx1QS463CSn%2BQjA5fa%2BWbWehATG%2FCCU9VvaieWekZsdrrCkDfoBWkyHBf312trjcUvHpg%2Ba9mLp4Ibi%2FisND6L1znL5jbCqycEtJwY1kW5hmYOJ1lKIycx7BnyQrenedNXZZ1amomJ3CQxXmUmd&X-Amz-Signature=e7c4db8bc9db245f9c44331a35c9b08f2375a8b0408704b010c044498bc0baf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
