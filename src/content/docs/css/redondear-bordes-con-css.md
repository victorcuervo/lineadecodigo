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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZSUIRC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKd%2FvUEKRAvAOD1YOE%2Fexg04hJRqVwe1oZgDCwe9Z3dgIhAI%2F0oJ%2BSZOptppNA7hnQWUtOCDtuHm4BlrB1ln9jbMEdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAP8BBf5IJiwYf8aUq3AMc9dAmbKsrIMMVgMoM7QOd5Whm%2BAIBaoRFmctx8aRPy%2BkGVVdmAIFmudev0IrBNlhybqLpMbUrlgd5LovFjnwMHMSN1msRDyqvBYGBaNqNj%2Fex%2FAIZ1wVrvkYKgHTf49FAkdhIFGp%2FrUU%2B9PoOd1IBD1fSb97n26XccFYUIrC9LaTfPhCPi7l1CMAgt%2FRaLiSdl%2Fyp8DDCxWI725vlCHP5NoogzpzofK8o6%2FcyDB5FWvKUdwLikOT3E3LefprELqI0372pdHZlwUHuxfaBzwey7s3YC9nKAOcdRrjtEU3pFwbcwORhm%2FbpJWfIlBxOt2DY3%2BIyR0YkF89cFdt%2Fvh7jmUvJESpPJBTGjHzuSPcUR0WzQp9noLcya500Jw%2Fr%2B1ZGvOjSttwkdeyRbAcIfWM%2F5B%2FHFhumPgGfuNRYPrDpkcqMWcLy%2F8QtMLQSOWapMSzGKga6oBMF4tIb%2Ff1jlZ60sOG1P4tdf2R4sFD0qzU2pEdKFFi3MZ4G5buAr4zFwZedN%2B75Sjy5AhbLL2771LGACM0LDPTcupq%2BOJOG%2Bi8qpAIzqjFwUWK38ea2KurtDXcu%2BZH5f9wO0NtPiyqDgfhWIXF%2FVBERZ2WF5kdATp7D046CkTPSyvqWlmghhDC05d7JBjqkARp4pi2ex5K4HTEwXj6pz6OQLbiMKQ5mBt%2FtwulI6%2Bmj6vKtXgbPbgoAP9BVMQFtTPPbYob1tJqn8HXZN94iEBeiT0Fa16DwklEOC028qd8kYJVXW8TJ1hZyQtUikYdSctUuQD9FPkSJJ5Y5zGmXvPrzNRAfULRDjWGUclSAVoYB%2BoAoDso%2FBL5zw5rE9hB0%2F2lMk%2B6YKw5CQLrE8V53xmmx6skD&X-Amz-Signature=84b4e9738f6d4ce9b75d17554bb00932d5e5b47e15d3d2425db10346ddf25793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZSUIRC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKd%2FvUEKRAvAOD1YOE%2Fexg04hJRqVwe1oZgDCwe9Z3dgIhAI%2F0oJ%2BSZOptppNA7hnQWUtOCDtuHm4BlrB1ln9jbMEdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAP8BBf5IJiwYf8aUq3AMc9dAmbKsrIMMVgMoM7QOd5Whm%2BAIBaoRFmctx8aRPy%2BkGVVdmAIFmudev0IrBNlhybqLpMbUrlgd5LovFjnwMHMSN1msRDyqvBYGBaNqNj%2Fex%2FAIZ1wVrvkYKgHTf49FAkdhIFGp%2FrUU%2B9PoOd1IBD1fSb97n26XccFYUIrC9LaTfPhCPi7l1CMAgt%2FRaLiSdl%2Fyp8DDCxWI725vlCHP5NoogzpzofK8o6%2FcyDB5FWvKUdwLikOT3E3LefprELqI0372pdHZlwUHuxfaBzwey7s3YC9nKAOcdRrjtEU3pFwbcwORhm%2FbpJWfIlBxOt2DY3%2BIyR0YkF89cFdt%2Fvh7jmUvJESpPJBTGjHzuSPcUR0WzQp9noLcya500Jw%2Fr%2B1ZGvOjSttwkdeyRbAcIfWM%2F5B%2FHFhumPgGfuNRYPrDpkcqMWcLy%2F8QtMLQSOWapMSzGKga6oBMF4tIb%2Ff1jlZ60sOG1P4tdf2R4sFD0qzU2pEdKFFi3MZ4G5buAr4zFwZedN%2B75Sjy5AhbLL2771LGACM0LDPTcupq%2BOJOG%2Bi8qpAIzqjFwUWK38ea2KurtDXcu%2BZH5f9wO0NtPiyqDgfhWIXF%2FVBERZ2WF5kdATp7D046CkTPSyvqWlmghhDC05d7JBjqkARp4pi2ex5K4HTEwXj6pz6OQLbiMKQ5mBt%2FtwulI6%2Bmj6vKtXgbPbgoAP9BVMQFtTPPbYob1tJqn8HXZN94iEBeiT0Fa16DwklEOC028qd8kYJVXW8TJ1hZyQtUikYdSctUuQD9FPkSJJ5Y5zGmXvPrzNRAfULRDjWGUclSAVoYB%2BoAoDso%2FBL5zw5rE9hB0%2F2lMk%2B6YKw5CQLrE8V53xmmx6skD&X-Amz-Signature=e6e8b6eac4689a6577fa391cd38e791bc1b81f36427d0bc4bb944cfe78bad250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
