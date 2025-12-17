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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXFKGPV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCXqeVEN08b9HpSSMZLJqUTImjXNu8%2BPVbscRh5hRWyAIhAKGYtLZUAAGSYX%2BngZMVR0YeGs8yunNXSt%2BHq4IXH9AIKv8DCHIQABoMNjM3NDIzMTgzODA1Igwe7lbY07B3lT4etGIq3AMsZQeck9Dh9aeHmZKBK4lexIH%2BfBsr5AUw%2BRrZhLhLOgs6pdgpi8U%2F799wJQCHX79dvr2LpYRrYYGFQrPNT%2Bh8fvb72La1T%2BB3ZRuYvBjfXyaZtH%2F2lURD%2BO5GKLFC91fY2p6jlEd4SD8a4Z%2BR9rG9KXKp7PoQUGyL6%2BA3qzSMufKC6JWLgmnjEIrnDpi2pwFO5%2Bm%2BsySqSZm4x2MggT8%2FZn7A346DNYeU26qyqy37Q8ITdrzcaFd6uy0%2F6b1cU6TIB3CGpiAb6aotheoleazMKDm%2FUigwgx0Nhj0lTEGM4XmIaJXn3HzESoTuL7bxwb1h8tR8gP7ZgEQDDp9A3K%2Fb2%2FTuX%2FXzywukNl8oTrAVygc%2BL4mB991QlnxgNhxMMWtHz4lTefLjtvV7cNfg%2FCO12v%2FrxdeeP4l71DNQOg8OzhttSxZTyIBlZPxhgFypjXVG2QX958rmx8S1EUWINKTocSz%2FHKQE3mKkKo%2F739rNuiu70ysJFZ4wHqqFzdX6eFhZyoY5DXyYI9D6nxpUPuoCOAun9GQsFP7qPyrDndiRfpbqNrebXhpi1dYHsKMwtQJPvGhBtZUby4tGhLGW5IDgs5sKXUStFnX20H4C8hxRgupfBlpsTHE2uMs4%2BjDo%2B4fKBjqkAUvgMVJ8Am1pE0jj8LHmLiANK36wtp%2B9DUZqxdElLA9c2AiOpJh5KeKu5HssXtKuMO9iWcGYb4EOD%2BREEezIGLeTVIANI1Krldl9SQrwSt85zop56wrAD8RaJJ2lQIIj%2Bdnc54RcGb02seoVyvFDkOUg1tvgApyn4tmNaaPBzfHQNayMvyASvzaJUUAJQox8Z8F1Iomh69tnrE6k8E6z3%2Bz5spEC&X-Amz-Signature=223d16f9c308b36c0ac58401bdfbf8d93a3b48fc36c59f3424046e84deb3e15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXFKGPV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCXqeVEN08b9HpSSMZLJqUTImjXNu8%2BPVbscRh5hRWyAIhAKGYtLZUAAGSYX%2BngZMVR0YeGs8yunNXSt%2BHq4IXH9AIKv8DCHIQABoMNjM3NDIzMTgzODA1Igwe7lbY07B3lT4etGIq3AMsZQeck9Dh9aeHmZKBK4lexIH%2BfBsr5AUw%2BRrZhLhLOgs6pdgpi8U%2F799wJQCHX79dvr2LpYRrYYGFQrPNT%2Bh8fvb72La1T%2BB3ZRuYvBjfXyaZtH%2F2lURD%2BO5GKLFC91fY2p6jlEd4SD8a4Z%2BR9rG9KXKp7PoQUGyL6%2BA3qzSMufKC6JWLgmnjEIrnDpi2pwFO5%2Bm%2BsySqSZm4x2MggT8%2FZn7A346DNYeU26qyqy37Q8ITdrzcaFd6uy0%2F6b1cU6TIB3CGpiAb6aotheoleazMKDm%2FUigwgx0Nhj0lTEGM4XmIaJXn3HzESoTuL7bxwb1h8tR8gP7ZgEQDDp9A3K%2Fb2%2FTuX%2FXzywukNl8oTrAVygc%2BL4mB991QlnxgNhxMMWtHz4lTefLjtvV7cNfg%2FCO12v%2FrxdeeP4l71DNQOg8OzhttSxZTyIBlZPxhgFypjXVG2QX958rmx8S1EUWINKTocSz%2FHKQE3mKkKo%2F739rNuiu70ysJFZ4wHqqFzdX6eFhZyoY5DXyYI9D6nxpUPuoCOAun9GQsFP7qPyrDndiRfpbqNrebXhpi1dYHsKMwtQJPvGhBtZUby4tGhLGW5IDgs5sKXUStFnX20H4C8hxRgupfBlpsTHE2uMs4%2BjDo%2B4fKBjqkAUvgMVJ8Am1pE0jj8LHmLiANK36wtp%2B9DUZqxdElLA9c2AiOpJh5KeKu5HssXtKuMO9iWcGYb4EOD%2BREEezIGLeTVIANI1Krldl9SQrwSt85zop56wrAD8RaJJ2lQIIj%2Bdnc54RcGb02seoVyvFDkOUg1tvgApyn4tmNaaPBzfHQNayMvyASvzaJUUAJQox8Z8F1Iomh69tnrE6k8E6z3%2Bz5spEC&X-Amz-Signature=413d9e283e2b5a023eb95b2834a1a87e6cf17987d83776ef8deeb407e62dd91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
