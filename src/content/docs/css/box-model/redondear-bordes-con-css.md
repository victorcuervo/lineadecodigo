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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYME42K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8DQS0xy0B6fFSlBMP2TWZ6DLouDgit2TV6JOmvbX0sgIhAKCDOI9Dn0kXTItBE90vvIkD4JgqGwoja1h9sVFMMZtnKv8DCHEQABoMNjM3NDIzMTgzODA1Igy54UPu4IoDjkiC9GQq3APwyH%2B42pOVHNDNqL4o5ugW8I0tWOaC%2FlDPSvy24L7mCPeoKR7xtc%2F%2F0bKL%2BfN85y7%2BT1rx6PQpUP60nWkkiWhDMVrUKIC0CleMwZgf8BqDb4Zt0kQSdVjtyFzNjaP1Dg05sv1hV8TS4Ztlf82A0t8%2BRFkZaavX38E64BWCmCYNH9fQdOPJ7NCYav%2F2p68DCRiOb%2F8imKJkgwC8Er4Wmogzjut%2BbzKx5rG0zPY99XMijsOusNmvv3hLt6r33rnygTfGdjRarsKKr349pCkBzbkWXNJNglBt5SYfaFkLdHnJUZtRTk1DY6qpjEh9hKb013oMtedJpLRPm7GnGtl2%2F5PJ3USLJHcx4Jyfe8cjm6%2F6BFaCIVf4M4KbjsMKsa0unhrCpzVR1%2B6Ayupo85og1yyLYMwdUo%2F%2FNnlPxaVw4LmtC45a%2By6wZoeW%2BqnCV8ctUHjRJXrNqXb6sLVQegojFbH5DwBGDZA5f5ImDC1fnMgXEIrfNlk5vJc3lUABzdH%2BmPGWLZw0arXTIXtBmVhxRbKkQZItbJlNp4Aqwau04kmKfZDlu5djNp2AyveXucfRjZPXjfipsp%2BNPiOygT5prtiqjkGeJ%2BjHreOuLC%2FD787FbpDaxwdKwutiI9VBuDD33ofKBjqkAVIJHfavt00psdIxuqssDyaXaaj8Ev0MRwLo%2FuzrDPz42U42DK9DvhFrzVukFVrx6d2oua%2BSeQC%2BF%2Bwdl%2FUrKDaPz35xbMSayGtVfakqQdSL3XDaIFMARTch5LxqiURI9AAmshSaMqkdAvrAZ36rkFzka0OKJIHtKjWRjLuHK5XG4RRFwoMpDwYpkDe%2BNJkUZ7%2B3pvpywx2l%2FYACpuFPyLH9gNZR&X-Amz-Signature=d287bb298037d10b06041bdaa67ab6981ea34fa39466287a44661046b2712911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYME42K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8DQS0xy0B6fFSlBMP2TWZ6DLouDgit2TV6JOmvbX0sgIhAKCDOI9Dn0kXTItBE90vvIkD4JgqGwoja1h9sVFMMZtnKv8DCHEQABoMNjM3NDIzMTgzODA1Igy54UPu4IoDjkiC9GQq3APwyH%2B42pOVHNDNqL4o5ugW8I0tWOaC%2FlDPSvy24L7mCPeoKR7xtc%2F%2F0bKL%2BfN85y7%2BT1rx6PQpUP60nWkkiWhDMVrUKIC0CleMwZgf8BqDb4Zt0kQSdVjtyFzNjaP1Dg05sv1hV8TS4Ztlf82A0t8%2BRFkZaavX38E64BWCmCYNH9fQdOPJ7NCYav%2F2p68DCRiOb%2F8imKJkgwC8Er4Wmogzjut%2BbzKx5rG0zPY99XMijsOusNmvv3hLt6r33rnygTfGdjRarsKKr349pCkBzbkWXNJNglBt5SYfaFkLdHnJUZtRTk1DY6qpjEh9hKb013oMtedJpLRPm7GnGtl2%2F5PJ3USLJHcx4Jyfe8cjm6%2F6BFaCIVf4M4KbjsMKsa0unhrCpzVR1%2B6Ayupo85og1yyLYMwdUo%2F%2FNnlPxaVw4LmtC45a%2By6wZoeW%2BqnCV8ctUHjRJXrNqXb6sLVQegojFbH5DwBGDZA5f5ImDC1fnMgXEIrfNlk5vJc3lUABzdH%2BmPGWLZw0arXTIXtBmVhxRbKkQZItbJlNp4Aqwau04kmKfZDlu5djNp2AyveXucfRjZPXjfipsp%2BNPiOygT5prtiqjkGeJ%2BjHreOuLC%2FD787FbpDaxwdKwutiI9VBuDD33ofKBjqkAVIJHfavt00psdIxuqssDyaXaaj8Ev0MRwLo%2FuzrDPz42U42DK9DvhFrzVukFVrx6d2oua%2BSeQC%2BF%2Bwdl%2FUrKDaPz35xbMSayGtVfakqQdSL3XDaIFMARTch5LxqiURI9AAmshSaMqkdAvrAZ36rkFzka0OKJIHtKjWRjLuHK5XG4RRFwoMpDwYpkDe%2BNJkUZ7%2B3pvpywx2l%2FYACpuFPyLH9gNZR&X-Amz-Signature=9b91d6e93bd5115c49a2de6d014ed579994c603fa855259a0954e5c8393c5a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
