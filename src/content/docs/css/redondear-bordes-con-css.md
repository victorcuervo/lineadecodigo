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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75ZSUCH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNGbk0jR8rU3YDTktNP0bCWg%2FP%2BFT8vGWNhbipJ1i4mQIhAMq53NYx%2FDzUjLLke6ir1K%2BCltlNls8vuMpRfuxa%2BqaWKv8DCFUQABoMNjM3NDIzMTgzODA1IgwFcpwnf4Jd9xE9E9Eq3APzVw8qxnpyyKzpUc%2F%2FkQbhswBAAkQVlkGx6OX%2BRtC9Mubpm8k4sfXgs8QN7fv4%2B%2FonIZNIF1iQm8PU1bnjtzywLZGf30dFIRg54vKCsKep3mlCs%2B1nRAS2%2FujXZSaMJ0deBcih2LSr%2BiVOcgXMNWACWJXIWQVw8dJvpndgrZ6oI592T39d1OtbKmH%2F2M9dDWC76OaZn%2FsOV%2FlwKFBe4pXonIMoZz0JYwyytMNy4MEsvV9c8HBqp%2FodbQ3K%2F0D8vSEhQcvUHKP7oUGHOZ6cXoV7cEM8ofaTO4%2Fuo5GQnhj2MSFSxjxOUwe1q6XFJAZw1ebCfJ8jgWDXn6u%2F%2Bth3px0DOUF4%2BP1LFXezgH2U6sAeGfJPhBjJdSirqYmU4rQK7OLD19wpEPkLYv9YPkQ05XqUmpkwOZqaBAcKFA9p3BMuXs86jvWjQRUZ3%2FEJmAbSRYC8UmahBYmbqPeLn%2BH7Ic%2BIZiPSPfjH6hrGkBiRynGVWx0wpFKe2muTd7HYFVliH3rAskh6AfVbMb1kvLva43%2FnyZtdUjTOCOGg40YQQmJ%2F2%2F0I1FN05I%2Bpqss7b3tgHW1jkgNANKXAYCUoK4mBtfD9dTbC9YRyX0pS8grh7dxNhzDtlusPjJal%2BDWxwjDcrcnJBjqkAWAwQyHI87p5mwgDN%2FG7%2BcCauv5Jr8epxpRqEVZyrvGVW%2FVmDtxUqo80UWrN34CRkgRXE0yHSw%2FuLAS5ZNiE%2FTfUbvC%2BErStEUmWxF8bezZXouGww4SC8BwQDVCK0I%2BAG82Yt3%2BVrPXIDO%2BkMM8aL6ZjfJ9KM5JbXSx1kwdBcjkQ5WOiqc6HoqEtr0hnT480VvutFzWxdwNjpJHs1XBNdSHdoDgI&X-Amz-Signature=a64a2bc5b2ab3495ebcf21f6bbe1b1f9fca49f1a26d5fc9ff087e664a860370c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75ZSUCH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNGbk0jR8rU3YDTktNP0bCWg%2FP%2BFT8vGWNhbipJ1i4mQIhAMq53NYx%2FDzUjLLke6ir1K%2BCltlNls8vuMpRfuxa%2BqaWKv8DCFUQABoMNjM3NDIzMTgzODA1IgwFcpwnf4Jd9xE9E9Eq3APzVw8qxnpyyKzpUc%2F%2FkQbhswBAAkQVlkGx6OX%2BRtC9Mubpm8k4sfXgs8QN7fv4%2B%2FonIZNIF1iQm8PU1bnjtzywLZGf30dFIRg54vKCsKep3mlCs%2B1nRAS2%2FujXZSaMJ0deBcih2LSr%2BiVOcgXMNWACWJXIWQVw8dJvpndgrZ6oI592T39d1OtbKmH%2F2M9dDWC76OaZn%2FsOV%2FlwKFBe4pXonIMoZz0JYwyytMNy4MEsvV9c8HBqp%2FodbQ3K%2F0D8vSEhQcvUHKP7oUGHOZ6cXoV7cEM8ofaTO4%2Fuo5GQnhj2MSFSxjxOUwe1q6XFJAZw1ebCfJ8jgWDXn6u%2F%2Bth3px0DOUF4%2BP1LFXezgH2U6sAeGfJPhBjJdSirqYmU4rQK7OLD19wpEPkLYv9YPkQ05XqUmpkwOZqaBAcKFA9p3BMuXs86jvWjQRUZ3%2FEJmAbSRYC8UmahBYmbqPeLn%2BH7Ic%2BIZiPSPfjH6hrGkBiRynGVWx0wpFKe2muTd7HYFVliH3rAskh6AfVbMb1kvLva43%2FnyZtdUjTOCOGg40YQQmJ%2F2%2F0I1FN05I%2Bpqss7b3tgHW1jkgNANKXAYCUoK4mBtfD9dTbC9YRyX0pS8grh7dxNhzDtlusPjJal%2BDWxwjDcrcnJBjqkAWAwQyHI87p5mwgDN%2FG7%2BcCauv5Jr8epxpRqEVZyrvGVW%2FVmDtxUqo80UWrN34CRkgRXE0yHSw%2FuLAS5ZNiE%2FTfUbvC%2BErStEUmWxF8bezZXouGww4SC8BwQDVCK0I%2BAG82Yt3%2BVrPXIDO%2BkMM8aL6ZjfJ9KM5JbXSx1kwdBcjkQ5WOiqc6HoqEtr0hnT480VvutFzWxdwNjpJHs1XBNdSHdoDgI&X-Amz-Signature=64ca1d8e770a4161e0b1b4ab00e9f2fda451a92b4fe47082e3d44616115fe39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
