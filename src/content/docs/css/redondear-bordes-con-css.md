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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5M3IZG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8uA5bZ%2FwVAwTi0h7bZgoJsSV2ABV%2FOVC0h912Jf7EBAiA3ctUyoRgSuSP8N31qljokNSllQalicgeG%2B2vg7hBKIir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMBLlHHQjD8CotBl5LKtwDntvs%2FfuGzp1QH02dk65qnpKi9Xn48SVy%2BvqccCy0xksHD7P1jfeeCQUwFh7LiPaCejVmwjHdEtRc5nNa4dftIhKF%2F%2BD6oaDnjqV2EnyRxzMQX%2Bdpn1FjIzcXXd6FNV8i6RmMgGyB%2F%2FR38iy3pZQQnNUwxM9LQ%2BmCrPYD0IGDqseHQO1uH6kHqJPY9pjLG5lSHZ0vwvhC6QlvAbajMhKMzYi0t8s%2FvhlyNYSyvdyM%2BTIJx7YJWi7LNlPuhWQhQGWebntiH5SwKNxZEFRZt4rxJMFvQ0Pc5r1DvLHAGeVXxb2jlS%2BZbVtqlbmXlv0gU5d3ixpWbSegmc7DXyegPpYHLklNZjfYoZWbglX2dRH19Wahu0HjpCLtVyzFCR0AAYXqxmKNCki0tetN6d8KsU8kOf19t2ltSrCGHhf8idAEctnRadg%2BYcouPeabIX3f1lyTD3XCLRCoLhe2v4sq3q4xCgSiHuMmAho%2BMfy4laiK1qhI3F9a4ErXahFgNod9crz6dC5yYRPcYk3PFp9RMbsvw8JisDrfQvFGOjw0i0DF5FAwEJjJrMOkGnyQ6bPKeWIK2Zu2wbQBi7Xv%2BcyOKp0R9ya32REf%2BPU%2BKLF550wgANg0T2w9HsjLV%2BGHW0swosfRyQY6pgFQL4SBKPL0eFbNGAhzYlrBK7WC6JKXSgLZNE84B2GPHAv8NuSxfnwOQlg1s9yaNXmT3XPOyCjeT%2B0ssQC9cKsfNewJbeVZlUnyQxugpOVn90TXyHbgfAQjErMvFkbIv0y9Xv5Xlzh2P1jN7li2kHdVIxvoFf1RVNe7cW80egVcoSjF%2BIHan%2FGoOqEnGZ2sXFPOovvOjh4tJkrRkHUVKu%2FDocKytHxq&X-Amz-Signature=2fce4e0603bcd3e7feff09b265000a81613e44a103fee96536310d9dcc8483cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5M3IZG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8uA5bZ%2FwVAwTi0h7bZgoJsSV2ABV%2FOVC0h912Jf7EBAiA3ctUyoRgSuSP8N31qljokNSllQalicgeG%2B2vg7hBKIir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMBLlHHQjD8CotBl5LKtwDntvs%2FfuGzp1QH02dk65qnpKi9Xn48SVy%2BvqccCy0xksHD7P1jfeeCQUwFh7LiPaCejVmwjHdEtRc5nNa4dftIhKF%2F%2BD6oaDnjqV2EnyRxzMQX%2Bdpn1FjIzcXXd6FNV8i6RmMgGyB%2F%2FR38iy3pZQQnNUwxM9LQ%2BmCrPYD0IGDqseHQO1uH6kHqJPY9pjLG5lSHZ0vwvhC6QlvAbajMhKMzYi0t8s%2FvhlyNYSyvdyM%2BTIJx7YJWi7LNlPuhWQhQGWebntiH5SwKNxZEFRZt4rxJMFvQ0Pc5r1DvLHAGeVXxb2jlS%2BZbVtqlbmXlv0gU5d3ixpWbSegmc7DXyegPpYHLklNZjfYoZWbglX2dRH19Wahu0HjpCLtVyzFCR0AAYXqxmKNCki0tetN6d8KsU8kOf19t2ltSrCGHhf8idAEctnRadg%2BYcouPeabIX3f1lyTD3XCLRCoLhe2v4sq3q4xCgSiHuMmAho%2BMfy4laiK1qhI3F9a4ErXahFgNod9crz6dC5yYRPcYk3PFp9RMbsvw8JisDrfQvFGOjw0i0DF5FAwEJjJrMOkGnyQ6bPKeWIK2Zu2wbQBi7Xv%2BcyOKp0R9ya32REf%2BPU%2BKLF550wgANg0T2w9HsjLV%2BGHW0swosfRyQY6pgFQL4SBKPL0eFbNGAhzYlrBK7WC6JKXSgLZNE84B2GPHAv8NuSxfnwOQlg1s9yaNXmT3XPOyCjeT%2B0ssQC9cKsfNewJbeVZlUnyQxugpOVn90TXyHbgfAQjErMvFkbIv0y9Xv5Xlzh2P1jN7li2kHdVIxvoFf1RVNe7cW80egVcoSjF%2BIHan%2FGoOqEnGZ2sXFPOovvOjh4tJkrRkHUVKu%2FDocKytHxq&X-Amz-Signature=55fdb795fd72cdd9c87ac9ce089c91e201d7e06a9924ed568d16973ad88662cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
