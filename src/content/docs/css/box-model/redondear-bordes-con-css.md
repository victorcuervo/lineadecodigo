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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYBRKQ43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYQo8XET%2BeDlUOrO2SvCQ%2F9EVhVW1XIbRotvbD2tmbjwIhALR0DeFNZCJs05%2BkszatDhxV%2B7uEOM2jTXikyiM7XzWWKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2Bq4%2Bx%2FkUHYi0OYqIq3AMoH34biDsdebXKmKLEjmcW%2FaB9upduEFqOFpdFMU2Oofsmg6K7fJcnp2f%2BQZUOzWHxaPceZ2cTZTowJmqBo0d0J22dzSvEg7hzSjTOG7w39PGFQ2CtiimcA9Zl1p2Lwsxo0ydv1g28CcVjxyMUUerAyew5BfZr4tbFfaQGGIjkG5G5kAAs%2FNUGxvhSdwY0%2BKNTV0Y7ZhidLzfFspQ0j5lG29q3nB9q9r6SLCp2v%2FGwUIuyHJ1Hz7J06b6Gdw7aiKpvPEZMkCiniFmW6Tyfz0BLLivb2Vv0Y3ThWB1suOOXWdG18%2FXPuRHna67yIuvRtwoCdIpdgJOW9lnSUoNblRECFS9Gwgpb27hZN5WM6CnYhO0XmLHV5Mc9LlQdYX863YamfdxRSUsGmHKX1rfyUfsAWx7tyqTYIBjHcse9IDS6OaGOAY5ma554YpusqIa2Zbc7KGF0a0liPgamMKW6xeU1t%2B%2BybQePrMGriHtsLgfl1dzC7KHF0cASgWNMZ5OTjh8%2BSPV2QYfcHFb82KrjtRXhveKvNuGYYh4BRxr7vvI68oktYNk60r0OX30nQOVQwBPfq6Ic3bMRL6a3fHfUjv9twDx%2BZ0ePLc5ARn9pGsNMr66J2jN7NksoiLfSSTCBlojKBjqkAYG9PJnqMnE3PsQnX4G2epHcgdpojM7ktLa5OJQ9j3jSnYUhwmIt2ZxBXc1wz%2Ff06yISF09bgu0uw9jscGVoXyQ%2F8ydNVeUXPpEzxcKOm4XoxKJpXKtNTEPAl1NMeZO5SWRqGQ%2BcOOfXDE8EU5%2FpcpdGjCoUeGAch5O6nTC6bF8e9YO3W7xAVCnAvhpL107eUeFmEFcb2CkiQQUcTD2JGjQOIdRE&X-Amz-Signature=02bdea41181c36626c65f44534ad160e55d7da5035f5ca490bc1c3c8302481bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYBRKQ43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYQo8XET%2BeDlUOrO2SvCQ%2F9EVhVW1XIbRotvbD2tmbjwIhALR0DeFNZCJs05%2BkszatDhxV%2B7uEOM2jTXikyiM7XzWWKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2Bq4%2Bx%2FkUHYi0OYqIq3AMoH34biDsdebXKmKLEjmcW%2FaB9upduEFqOFpdFMU2Oofsmg6K7fJcnp2f%2BQZUOzWHxaPceZ2cTZTowJmqBo0d0J22dzSvEg7hzSjTOG7w39PGFQ2CtiimcA9Zl1p2Lwsxo0ydv1g28CcVjxyMUUerAyew5BfZr4tbFfaQGGIjkG5G5kAAs%2FNUGxvhSdwY0%2BKNTV0Y7ZhidLzfFspQ0j5lG29q3nB9q9r6SLCp2v%2FGwUIuyHJ1Hz7J06b6Gdw7aiKpvPEZMkCiniFmW6Tyfz0BLLivb2Vv0Y3ThWB1suOOXWdG18%2FXPuRHna67yIuvRtwoCdIpdgJOW9lnSUoNblRECFS9Gwgpb27hZN5WM6CnYhO0XmLHV5Mc9LlQdYX863YamfdxRSUsGmHKX1rfyUfsAWx7tyqTYIBjHcse9IDS6OaGOAY5ma554YpusqIa2Zbc7KGF0a0liPgamMKW6xeU1t%2B%2BybQePrMGriHtsLgfl1dzC7KHF0cASgWNMZ5OTjh8%2BSPV2QYfcHFb82KrjtRXhveKvNuGYYh4BRxr7vvI68oktYNk60r0OX30nQOVQwBPfq6Ic3bMRL6a3fHfUjv9twDx%2BZ0ePLc5ARn9pGsNMr66J2jN7NksoiLfSSTCBlojKBjqkAYG9PJnqMnE3PsQnX4G2epHcgdpojM7ktLa5OJQ9j3jSnYUhwmIt2ZxBXc1wz%2Ff06yISF09bgu0uw9jscGVoXyQ%2F8ydNVeUXPpEzxcKOm4XoxKJpXKtNTEPAl1NMeZO5SWRqGQ%2BcOOfXDE8EU5%2FpcpdGjCoUeGAch5O6nTC6bF8e9YO3W7xAVCnAvhpL107eUeFmEFcb2CkiQQUcTD2JGjQOIdRE&X-Amz-Signature=46324b72a02bcf4ca96112d7ab2160cc3c4cf3a468eeac3726d0215834f0b79d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
