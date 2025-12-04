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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVEIUBCX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Qj%2FJpGEfAdsOFmKerVh08tqTorb%2BYifAhD1DKono%2FgIgEK53Z5uW6P9V%2B2v2KJr%2BBjOpn4J8HEMwl%2BEGFrRi7Coq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGKGN8PelVej1SKZHircAxxAvBCNfL9nMUcIY1LiG8IyQ2uzh2XIHOcIs1%2BuL6hcNavqykZl2hDbV%2FoCugQEZvKzreNF4CHAl1DfcAVBM7reVUTx1B66mWLpf%2B8c2KCq3JT6gXhochZ83YKzt9jY4t43XeZyjxmkRdfalwvxScEJ7Cs5YO60Sy9%2FvOKG5rdqlj70eEyCnx5jXlEUwghzqbwcvwSQW3ydKrxNzeqSEOOfTIlWesUhGhAqs8Etj6i845GT8N4uI0vrdK359t0lKVfkj5pPrK5y%2F7hD2U%2BA55NS3KTVOgwgcuUhoumSRVrOM6BUGtulVjC6bT4qxwGuH%2BTzvsHUDpo48nT0k7Hv5rNQPOGkmT9gACPzVh26HgJN53y3R3i71LCBzm094guEy08Gym%2FevctmYPSulpHaXTX%2FlR931G5u0IjC4xlx9%2BjN4PEwHbW%2BLfEeir5BgWEc9gpHbLXlqjWoioL%2F112FL%2FWIl%2BJ3wRh%2FJPW1hw9Z20rXguEbgCQDTmbGKWbQyrWEF8rKh4C1QK%2FrMLDzRV5Js8csk%2Fl0Vf368%2FBL50uWPWtNF8YjYkRbYGQSRL1HS0mj2pcMBqgLe6OpTb6bEGC0AR40cjrZ86MzFb2HMV6eZD%2BWrteXrebfANmwENvkMNz5xskGOqUBvx%2F8GOW1cqzF6r11EVGxuXUXn5CjLqFjFpq1LhXrHTi8L1Bc4%2BnJp9KVOgRffiv8KZGL%2FYLDVjA9FPTWbCRhNUVImrUNUI5a534pjQKGVarfr9nt4B0fXmp81kDUOTNkOrjdbScjHlKbHw9tH4bnTs%2FyJLd1rqUBDkhzuKcuW3d1dwLTHbJ1k4twA9%2FXcJlxI4QhTsqEACm9bmPNm%2By%2F9Hm15bdn&X-Amz-Signature=bf78287f7a1f5f8df8f9b7ad952ad2794a81ce84e80f97c3d3c01ff4ec4f308a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVEIUBCX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Qj%2FJpGEfAdsOFmKerVh08tqTorb%2BYifAhD1DKono%2FgIgEK53Z5uW6P9V%2B2v2KJr%2BBjOpn4J8HEMwl%2BEGFrRi7Coq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGKGN8PelVej1SKZHircAxxAvBCNfL9nMUcIY1LiG8IyQ2uzh2XIHOcIs1%2BuL6hcNavqykZl2hDbV%2FoCugQEZvKzreNF4CHAl1DfcAVBM7reVUTx1B66mWLpf%2B8c2KCq3JT6gXhochZ83YKzt9jY4t43XeZyjxmkRdfalwvxScEJ7Cs5YO60Sy9%2FvOKG5rdqlj70eEyCnx5jXlEUwghzqbwcvwSQW3ydKrxNzeqSEOOfTIlWesUhGhAqs8Etj6i845GT8N4uI0vrdK359t0lKVfkj5pPrK5y%2F7hD2U%2BA55NS3KTVOgwgcuUhoumSRVrOM6BUGtulVjC6bT4qxwGuH%2BTzvsHUDpo48nT0k7Hv5rNQPOGkmT9gACPzVh26HgJN53y3R3i71LCBzm094guEy08Gym%2FevctmYPSulpHaXTX%2FlR931G5u0IjC4xlx9%2BjN4PEwHbW%2BLfEeir5BgWEc9gpHbLXlqjWoioL%2F112FL%2FWIl%2BJ3wRh%2FJPW1hw9Z20rXguEbgCQDTmbGKWbQyrWEF8rKh4C1QK%2FrMLDzRV5Js8csk%2Fl0Vf368%2FBL50uWPWtNF8YjYkRbYGQSRL1HS0mj2pcMBqgLe6OpTb6bEGC0AR40cjrZ86MzFb2HMV6eZD%2BWrteXrebfANmwENvkMNz5xskGOqUBvx%2F8GOW1cqzF6r11EVGxuXUXn5CjLqFjFpq1LhXrHTi8L1Bc4%2BnJp9KVOgRffiv8KZGL%2FYLDVjA9FPTWbCRhNUVImrUNUI5a534pjQKGVarfr9nt4B0fXmp81kDUOTNkOrjdbScjHlKbHw9tH4bnTs%2FyJLd1rqUBDkhzuKcuW3d1dwLTHbJ1k4twA9%2FXcJlxI4QhTsqEACm9bmPNm%2By%2F9Hm15bdn&X-Amz-Signature=bbb7dec2b8a55b1528f367bedd946ca1eab8229e7b93628da5bc48514d178b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
