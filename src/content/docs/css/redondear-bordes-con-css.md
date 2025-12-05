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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7HTKWZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIB710AKSUJD87o65vaOVJYXzP84zjTt48dhKy1rqvnwIgS%2FwfZGPhT79rX1uDYHVhtJJfLjZC4zIiP8FHZsT0Rokq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGclXKpQwfkgdlluhircA0HEZ2xDHaRQNXM%2BOmJbEGefRP5S7WtSEb5sIE9c56jIOkDUdH7UZy60Inl%2FY8Xk%2Fgu9K61fz7VvpYEaQYBWpwYVrKvUMEgy5sbh4QT58lgtZnTJ%2Fotn0%2FJlGRwoAs23mYBzSd7P06g28bdC0HuEey2AsiCZ0SRHlWKJ7W80fAfl9E91cgGZxAicVIGkt%2B3MPeMAehx1aD3v0IAF0CYtcL9qf0R3PPCOBZ%2FWFmy%2BAF9A%2BvpIJefIBO01uABhvoIgq39%2BuCudnB7L2ebnQo6k5ZDuCVMH0p5NHF%2BIVQVfbzBWxMuJWX%2BSaQem6C%2FKau3qXmGzIrK4CNd5kfWey8hUCwqIgEu8A%2BRDFg2mQjDb56K1KrTcZGRy1hIykKLQvqdswvCPm1oh9LUszUC%2BVbXXryLxhXVub%2BostD3A%2BjSVXX9DqFt%2FIDpDzvKj4SXK7IkG3F5FMhFZeokxTrPjFTppRVOy9XSFOd8%2BPexEb5Ajy13A2AyxlZjstsuKOgkeub1zr0KOjt%2FeNFxEfYR8IzeWI3a1J6Mx81QtpvXOd3cYt3xs%2FcNxieaots7%2BbU9sCa%2FoEdKMI4ubnRJYL%2FpSW6hm808pDV5Kde5CB78tz9Ydy0uLhXl10nsrTjSF%2FF93MKiRzckGOqUBDpbIchd%2FevbB%2FIFYUVSnFH1Xop%2B%2FllHJiRI3IWwSgSNofV2%2FVn3lx0dnSQqq6dw3EChXt3GLrSPp72JSgH%2FcqA12oyGIiaZd4tAFZpzdUpRRqVVzVIfrndTkKlgtKve93Wc3D9BiCUq0oeDl%2FUcGWJ5tAiYQ%2BazwVLW1IbUmknC85jb%2Fj%2FiTGahiELVapjJQ2S0w91gYfi688AOPYsrhYBQ3Cwoh&X-Amz-Signature=dc4eae52618f5c2306c1e636b30f03beb43ce01178151b632f69b213dcfbaa14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7HTKWZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIB710AKSUJD87o65vaOVJYXzP84zjTt48dhKy1rqvnwIgS%2FwfZGPhT79rX1uDYHVhtJJfLjZC4zIiP8FHZsT0Rokq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGclXKpQwfkgdlluhircA0HEZ2xDHaRQNXM%2BOmJbEGefRP5S7WtSEb5sIE9c56jIOkDUdH7UZy60Inl%2FY8Xk%2Fgu9K61fz7VvpYEaQYBWpwYVrKvUMEgy5sbh4QT58lgtZnTJ%2Fotn0%2FJlGRwoAs23mYBzSd7P06g28bdC0HuEey2AsiCZ0SRHlWKJ7W80fAfl9E91cgGZxAicVIGkt%2B3MPeMAehx1aD3v0IAF0CYtcL9qf0R3PPCOBZ%2FWFmy%2BAF9A%2BvpIJefIBO01uABhvoIgq39%2BuCudnB7L2ebnQo6k5ZDuCVMH0p5NHF%2BIVQVfbzBWxMuJWX%2BSaQem6C%2FKau3qXmGzIrK4CNd5kfWey8hUCwqIgEu8A%2BRDFg2mQjDb56K1KrTcZGRy1hIykKLQvqdswvCPm1oh9LUszUC%2BVbXXryLxhXVub%2BostD3A%2BjSVXX9DqFt%2FIDpDzvKj4SXK7IkG3F5FMhFZeokxTrPjFTppRVOy9XSFOd8%2BPexEb5Ajy13A2AyxlZjstsuKOgkeub1zr0KOjt%2FeNFxEfYR8IzeWI3a1J6Mx81QtpvXOd3cYt3xs%2FcNxieaots7%2BbU9sCa%2FoEdKMI4ubnRJYL%2FpSW6hm808pDV5Kde5CB78tz9Ydy0uLhXl10nsrTjSF%2FF93MKiRzckGOqUBDpbIchd%2FevbB%2FIFYUVSnFH1Xop%2B%2FllHJiRI3IWwSgSNofV2%2FVn3lx0dnSQqq6dw3EChXt3GLrSPp72JSgH%2FcqA12oyGIiaZd4tAFZpzdUpRRqVVzVIfrndTkKlgtKve93Wc3D9BiCUq0oeDl%2FUcGWJ5tAiYQ%2BazwVLW1IbUmknC85jb%2Fj%2FiTGahiELVapjJQ2S0w91gYfi688AOPYsrhYBQ3Cwoh&X-Amz-Signature=8d7b6ed6a7a23cc0caff0b8bf55d6467ba71ee1ec9e1029463343275c3df52b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
