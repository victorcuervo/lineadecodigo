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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUHRM7E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3iqAuebxUsrBkbhM%2BAJCmKXWWGfAkD5UUHlWQUYyXOwIhANzmPsQX4AjycATO0apyLdIwjZXj5UtYsKTJ3rKpcMnqKv8DCHYQABoMNjM3NDIzMTgzODA1Igx%2B61N4mmH8Ak6ARZ0q3ANv7X25StxdH0txkBuYrJ2w5l0d5jaOCn7JRd3M5J8mJnhnvAw1hXJ5RMSx0HyUlhkM4bJpdbAODG%2B8jyJSM9Y4Dt5eB2ndOtMOvyXI4uM8JyXFQswgYBOvi08tyAyip6UXVu1zi56w73PsryFqYNUd1P%2BX70oeO5PB7fJJpDrdN%2F7o%2FgjgxYkSF%2FMAVtm0malE8%2F3N%2FwvXq1ztMOYRkg83l4VZPwbWXA67Mp9aFIJ0%2FvuhJd5%2FaUGWV3erOZq92MHHBDj6RV8d1n8CK1c0rTl%2BAQqkbO4xWasY%2BFcTmLMyqEU0S93LYVaSQo7%2Bh7puMX%2F8ghHc40WpRdJ18VWfh79pZf4WAIByFIxEYTmtLPFsPfFRoZvtRcgkhgwOraPV4k%2F7plqVYUqeKcpecz%2FMb08BTkx6ULU3639XOB1WKjBooONEPrA756tlFBaqieGLrSlvAwEGbZWg%2BS%2Fffrk3Rt9Esi4IJUpg5Pt8FxikTahIl5VfLc2Qu4v5pql03m6bWoLmpqgp46ulzirvJiehmAjRPGgz9WIsr7lNVYO%2F0LEL1dBQw1ZM7X4WW%2FEyLOlH0%2FNvJfskvN98Udw5TBnQuOeppYDZ654XqBtPdG%2FnZ%2B09DJ1sgce5Oxs24a%2BS6jC%2F6YjKBjqkARWFMD8PnPL%2BMmFOMqhM2or6xnZMDcdnUb1Xtn264pMlwzgxOqxsYU6M95fAPo4uwbnMvKnY7rnEve5m6WjIxFAjIep%2F5pAmO%2Bg5ofDnGIkzzYSLFEKGngeMLZdZ3Kgdjq4qieEeoJ9s1T%2B0MpR%2FcBqQKvBvHzoFaUSbeefnkqYuWZHhc%2B6jmWQssGhD8YckUFQoaNl8Gyr4qVPO4yts7xI%2FHhlI&X-Amz-Signature=94c7c9d8cdf866ee80a20da9f5ff9e62ac6ba9fe41b21c9c55729ab66e1ff1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUHRM7E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3iqAuebxUsrBkbhM%2BAJCmKXWWGfAkD5UUHlWQUYyXOwIhANzmPsQX4AjycATO0apyLdIwjZXj5UtYsKTJ3rKpcMnqKv8DCHYQABoMNjM3NDIzMTgzODA1Igx%2B61N4mmH8Ak6ARZ0q3ANv7X25StxdH0txkBuYrJ2w5l0d5jaOCn7JRd3M5J8mJnhnvAw1hXJ5RMSx0HyUlhkM4bJpdbAODG%2B8jyJSM9Y4Dt5eB2ndOtMOvyXI4uM8JyXFQswgYBOvi08tyAyip6UXVu1zi56w73PsryFqYNUd1P%2BX70oeO5PB7fJJpDrdN%2F7o%2FgjgxYkSF%2FMAVtm0malE8%2F3N%2FwvXq1ztMOYRkg83l4VZPwbWXA67Mp9aFIJ0%2FvuhJd5%2FaUGWV3erOZq92MHHBDj6RV8d1n8CK1c0rTl%2BAQqkbO4xWasY%2BFcTmLMyqEU0S93LYVaSQo7%2Bh7puMX%2F8ghHc40WpRdJ18VWfh79pZf4WAIByFIxEYTmtLPFsPfFRoZvtRcgkhgwOraPV4k%2F7plqVYUqeKcpecz%2FMb08BTkx6ULU3639XOB1WKjBooONEPrA756tlFBaqieGLrSlvAwEGbZWg%2BS%2Fffrk3Rt9Esi4IJUpg5Pt8FxikTahIl5VfLc2Qu4v5pql03m6bWoLmpqgp46ulzirvJiehmAjRPGgz9WIsr7lNVYO%2F0LEL1dBQw1ZM7X4WW%2FEyLOlH0%2FNvJfskvN98Udw5TBnQuOeppYDZ654XqBtPdG%2FnZ%2B09DJ1sgce5Oxs24a%2BS6jC%2F6YjKBjqkARWFMD8PnPL%2BMmFOMqhM2or6xnZMDcdnUb1Xtn264pMlwzgxOqxsYU6M95fAPo4uwbnMvKnY7rnEve5m6WjIxFAjIep%2F5pAmO%2Bg5ofDnGIkzzYSLFEKGngeMLZdZ3Kgdjq4qieEeoJ9s1T%2B0MpR%2FcBqQKvBvHzoFaUSbeefnkqYuWZHhc%2B6jmWQssGhD8YckUFQoaNl8Gyr4qVPO4yts7xI%2FHhlI&X-Amz-Signature=eeee756912484fc22f427d26ccaa1d106f60d4671b93eac8dde4de758212f86d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
