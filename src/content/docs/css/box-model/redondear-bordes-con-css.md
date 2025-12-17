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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOM4LYB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVq7%2FvIQ6cSy96G9QGqANsuQzFDqj5P%2Fgfvwg%2BUi8wiAiBhl5NhkiHpuxPvyUdrILSY344jjtev1JrBR22RiZQueSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IvzXbEWqT4g3YYpKtwDtUBsaMqNds3U54QNQRpBaTdbTnn1hEpYsIb5Z8vv0xIm6MdYw%2FJYJ1UgBrbmyAAgl5TVpAYcpaaZ1zkOdk%2BbZuy0S0Ekrlr4nCRH0REy7YyEwkILz5jYSOWmVPEuIEilQ243e9xcFAVj1KhBPcjrfTk5aKX3XmVudtpD5vxSwtfy4dpPCNwaitq7HscKqFs6wmW8RgXc6r0FwOsW8FoIELOdgzv8kqpBIAAIm7Bj7Ki2ya9IATrqqoBeB30dlpgYsxjM4sNMyfT9pf0xwInomILzzrIuX3TqSDsma9HFC6%2B84sVBhbKykQRS%2F2lqWdo57gzUv3%2FlP8sO99O95LbM8f7vHf0Wy8eWA2jgtxK3akC2PTnMXTIgOryLJWMCLa59edrekXSzvGsrmURGLktylir5TPV3ayJJRNLd1QjPxXVpx4kuZVEl2Fr%2FkRclQ0KGClK4PlkQ14kmDIa%2BfgYq3nJ52KBHH4Dn4Zy%2Fh4iEIYSMyflW6NZRJonVM7x3pShgPFYFoQWRi7EP%2FyQuyna5QHMNpm61eM6%2FtNTW7YQhRaO3rJ9rqBr0iIQMYqy3Ur796PYOhoh%2FJxUUyKS2aEJFBWYg9My4U9iSXfbafC6iYAuExR65D2E9wwYAHUowsq6MygY6pgGpNJ4A%2Fnt9Ao6%2Bmm03mGJQFznRH3lNs6rXNX6gMVJxDVHZtulEyNtAxl7bSAmfJ8%2FOvFjtOyS47CBlntUy%2F1fkWDLmFMF0NpZYogngC8fGeBk6XkBaYS6KN0TMITsY0p7P74NPkNbArqSzQ6b9acIlhVbXTIexMWG%2F0iXizRsWaOGpmBj7k1CTaqTEooKcMd1rBoO8M1%2BLHHpz6L25LbdF0Nvsa0Nh&X-Amz-Signature=fc25be26f55de495a39e0df357c456db94c59854e39dcbd6d65c17e8def142e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOM4LYB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVq7%2FvIQ6cSy96G9QGqANsuQzFDqj5P%2Fgfvwg%2BUi8wiAiBhl5NhkiHpuxPvyUdrILSY344jjtev1JrBR22RiZQueSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IvzXbEWqT4g3YYpKtwDtUBsaMqNds3U54QNQRpBaTdbTnn1hEpYsIb5Z8vv0xIm6MdYw%2FJYJ1UgBrbmyAAgl5TVpAYcpaaZ1zkOdk%2BbZuy0S0Ekrlr4nCRH0REy7YyEwkILz5jYSOWmVPEuIEilQ243e9xcFAVj1KhBPcjrfTk5aKX3XmVudtpD5vxSwtfy4dpPCNwaitq7HscKqFs6wmW8RgXc6r0FwOsW8FoIELOdgzv8kqpBIAAIm7Bj7Ki2ya9IATrqqoBeB30dlpgYsxjM4sNMyfT9pf0xwInomILzzrIuX3TqSDsma9HFC6%2B84sVBhbKykQRS%2F2lqWdo57gzUv3%2FlP8sO99O95LbM8f7vHf0Wy8eWA2jgtxK3akC2PTnMXTIgOryLJWMCLa59edrekXSzvGsrmURGLktylir5TPV3ayJJRNLd1QjPxXVpx4kuZVEl2Fr%2FkRclQ0KGClK4PlkQ14kmDIa%2BfgYq3nJ52KBHH4Dn4Zy%2Fh4iEIYSMyflW6NZRJonVM7x3pShgPFYFoQWRi7EP%2FyQuyna5QHMNpm61eM6%2FtNTW7YQhRaO3rJ9rqBr0iIQMYqy3Ur796PYOhoh%2FJxUUyKS2aEJFBWYg9My4U9iSXfbafC6iYAuExR65D2E9wwYAHUowsq6MygY6pgGpNJ4A%2Fnt9Ao6%2Bmm03mGJQFznRH3lNs6rXNX6gMVJxDVHZtulEyNtAxl7bSAmfJ8%2FOvFjtOyS47CBlntUy%2F1fkWDLmFMF0NpZYogngC8fGeBk6XkBaYS6KN0TMITsY0p7P74NPkNbArqSzQ6b9acIlhVbXTIexMWG%2F0iXizRsWaOGpmBj7k1CTaqTEooKcMd1rBoO8M1%2BLHHpz6L25LbdF0Nvsa0Nh&X-Amz-Signature=27973d0def4fd0deb924149e4dd32d378d27a5106687a86b4245f2c402b22782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
