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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3F6OKPT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBafjDpDsim7hFvJqvzTGSkd%2BgMrqrgz0R%2FTgcvLslF3AiEA85TnWxxbvNMSILxgscl1fzXnpl8ZHMfsY31nb0St8O4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDABT0yTyk8tWF3JJWircAwTAByMZmzHu2GyZcby%2Bzvl350HThxF%2BPNCqwYP8%2ByIMZdJa6gE8XhRbmKcw9XVKve%2BvBaMojZVplEypalYLzKORMRr57ViJvoobKWj9yOo61b%2BtBMEGz1wQVFiEH4t94zq%2ByUgwu%2FFrPK3zy1VZ7jIffIXAGxeXNmOqoj%2FUS3irPE%2BqaOLE6eZYlKM6UL2YmgSl4hoC4Q%2FYjnOLwi7mYTDlD4%2FJ3OHhiD2hITVNpGYUXqLPYOOykEUU8QDyym6gOaWLj2m38Eri9Rerr7pnAah6Fl3G1HdiQBsZM35atx8NPuVca9V%2BTOS4Dmdn11eBot42CXg%2FnN9DliJV7ex8i%2FUr5NiKYjLqya5t3De7W5GwIsHH%2BXXpLyxl%2BWrNGC1l%2Beg8FGZ9cwF8tJzvydFgS6MZ9j5UCpOZcuaPodW6jwDZW7dDFgss8ixDVB%2FJUC%2BIDmSU0mh6isqtx6vvOYtyzrdYeATsVrVmVSOhonIgTOb98qzq3DD%2B0OiEuSN9y1V1tQRlygH5ytusp0vpUO3JWaSF9HBTcBpPVgHY%2BuyS2J2rorxk8SYRYrPpv8kEAPLoqn2pBsCK2a6uP7YYnS3l293leKFU%2FOnvHo78ef3eyAKWz1kHjO0NAPzRdXJsMKqMyMkGOqUBVjIec5bZXe4faHlcGGmbSyzJdi%2F7fk8vTEOVJS8J0Gc7wQh1zF2vHXyvmG3PSPAhSpNpTGlMzTyBpr%2BdzC5ig2LlJkPiCbHbXbeUKNMaStrZWt%2F3BANIwhKXVXi%2FOQYP9BHDteTDYy43Ig4HRORv9F9%2FHN%2BflcrwPhKwVNZvQP1YQ%2B24VXOu3H2Sb49hGInAMBOWorCbwX8Zo72OaEMgi9rU%2F26b&X-Amz-Signature=008b78b0046f14694526143a5d640c1b552c3657751f59fe659f2fab16793c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3F6OKPT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBafjDpDsim7hFvJqvzTGSkd%2BgMrqrgz0R%2FTgcvLslF3AiEA85TnWxxbvNMSILxgscl1fzXnpl8ZHMfsY31nb0St8O4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDABT0yTyk8tWF3JJWircAwTAByMZmzHu2GyZcby%2Bzvl350HThxF%2BPNCqwYP8%2ByIMZdJa6gE8XhRbmKcw9XVKve%2BvBaMojZVplEypalYLzKORMRr57ViJvoobKWj9yOo61b%2BtBMEGz1wQVFiEH4t94zq%2ByUgwu%2FFrPK3zy1VZ7jIffIXAGxeXNmOqoj%2FUS3irPE%2BqaOLE6eZYlKM6UL2YmgSl4hoC4Q%2FYjnOLwi7mYTDlD4%2FJ3OHhiD2hITVNpGYUXqLPYOOykEUU8QDyym6gOaWLj2m38Eri9Rerr7pnAah6Fl3G1HdiQBsZM35atx8NPuVca9V%2BTOS4Dmdn11eBot42CXg%2FnN9DliJV7ex8i%2FUr5NiKYjLqya5t3De7W5GwIsHH%2BXXpLyxl%2BWrNGC1l%2Beg8FGZ9cwF8tJzvydFgS6MZ9j5UCpOZcuaPodW6jwDZW7dDFgss8ixDVB%2FJUC%2BIDmSU0mh6isqtx6vvOYtyzrdYeATsVrVmVSOhonIgTOb98qzq3DD%2B0OiEuSN9y1V1tQRlygH5ytusp0vpUO3JWaSF9HBTcBpPVgHY%2BuyS2J2rorxk8SYRYrPpv8kEAPLoqn2pBsCK2a6uP7YYnS3l293leKFU%2FOnvHo78ef3eyAKWz1kHjO0NAPzRdXJsMKqMyMkGOqUBVjIec5bZXe4faHlcGGmbSyzJdi%2F7fk8vTEOVJS8J0Gc7wQh1zF2vHXyvmG3PSPAhSpNpTGlMzTyBpr%2BdzC5ig2LlJkPiCbHbXbeUKNMaStrZWt%2F3BANIwhKXVXi%2FOQYP9BHDteTDYy43Ig4HRORv9F9%2FHN%2BflcrwPhKwVNZvQP1YQ%2B24VXOu3H2Sb49hGInAMBOWorCbwX8Zo72OaEMgi9rU%2F26b&X-Amz-Signature=f8f40a561871c3cfdc3edc1ddb5d9184dcff53c12a8e1da0a144f6f1fa2a6c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
