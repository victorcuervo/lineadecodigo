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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XNLG7Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXV3FvP9%2BuVOlTEC0a%2BmLCH6sNVV3ITpIbu0vvVNJDzAiBMHbweXNRP3yz9fiBJ5Y107PyKw8m4UUBWquza3fEU1Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMMALNKlMoAUL5kSepKtwDgAH1Vz1%2FCFwqdVJ6FqUOcJBKP3HtOxgcUwjLnluVcvQcusJwXRfEWw6VjZcK4Ql0ACStFlbBlpyZ2jhenn8XQxDNrjbfcAMkCDCfi06YSEq8qWAcE7QyLVKcrj7MA2jX5EZkTejQ7K3hMW%2BWz2AS5oOUGn5%2BjtVXVSnNttTyDpZDcHorZySFJlW7JvhxeQSzHv3pOguKWPELlJ%2F7XyYmyXSHB8%2F4522jLZhUHRzFwucGp%2FSwrBjhkNCLfH2vP5Np%2FRM%2By%2BpQoQ8hpMPyWG5elmvqdtYIfAmFcdVvystjejMta7b5OS1uOh%2Fz%2BrZRSaGp87Wc6l7JpDRDcIISDO8hI8znNLqNWSZcp32vafLUu%2FGnwql886FHCFnhP9O44Q1y0dWT7%2FgDeM1eKn5bg7DDHWfDit3JhnxHC%2BglwZHFHaH6X%2BdyG89eVOtH8TP9SQg%2F37%2BAyMNpapRH8oZKh%2FvU5%2F%2F5QQRTsPH3Yghev5uPT9ccmLEZQEubK21fmPNj6YgmVFj5wxNv2KTLuTCBXX1n6iIu%2B5z4%2FzIRVY3klprUytiuPxzmmX4oMz4ICpQYx3jn1rUGH%2Bxy%2FnarCJJ5L1HVNUbeXAHscHnTO3yJUoxx41WX%2BPqX63aaS4s74KAwrYzIyQY6pgEBBsf06anznxIrqxn3d5DheK9Efiq1y2DeOpA2X%2BL7EVBKy%2BjC2WZEnU%2BbMKKH%2F817vwEqbVQ58f6K%2BIVghhYgEFzRxKCKkpzIXCpfQdW%2BRPEw0nt38kjT2qll1wINTcGaLl3SGQMsBTWs7KNjTt4t8NKL35XlY5mFqDW%2BQ3htmdwmNXdmmv329V9b7IgOAbTnZQ3%2BVT7P4rKTryPQfPapn1aa2NTn&X-Amz-Signature=d8e7136ad7b1ef014214f20eaec72a0e27bdc3df383580eb04f379069e3d7570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XNLG7Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXV3FvP9%2BuVOlTEC0a%2BmLCH6sNVV3ITpIbu0vvVNJDzAiBMHbweXNRP3yz9fiBJ5Y107PyKw8m4UUBWquza3fEU1Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMMALNKlMoAUL5kSepKtwDgAH1Vz1%2FCFwqdVJ6FqUOcJBKP3HtOxgcUwjLnluVcvQcusJwXRfEWw6VjZcK4Ql0ACStFlbBlpyZ2jhenn8XQxDNrjbfcAMkCDCfi06YSEq8qWAcE7QyLVKcrj7MA2jX5EZkTejQ7K3hMW%2BWz2AS5oOUGn5%2BjtVXVSnNttTyDpZDcHorZySFJlW7JvhxeQSzHv3pOguKWPELlJ%2F7XyYmyXSHB8%2F4522jLZhUHRzFwucGp%2FSwrBjhkNCLfH2vP5Np%2FRM%2By%2BpQoQ8hpMPyWG5elmvqdtYIfAmFcdVvystjejMta7b5OS1uOh%2Fz%2BrZRSaGp87Wc6l7JpDRDcIISDO8hI8znNLqNWSZcp32vafLUu%2FGnwql886FHCFnhP9O44Q1y0dWT7%2FgDeM1eKn5bg7DDHWfDit3JhnxHC%2BglwZHFHaH6X%2BdyG89eVOtH8TP9SQg%2F37%2BAyMNpapRH8oZKh%2FvU5%2F%2F5QQRTsPH3Yghev5uPT9ccmLEZQEubK21fmPNj6YgmVFj5wxNv2KTLuTCBXX1n6iIu%2B5z4%2FzIRVY3klprUytiuPxzmmX4oMz4ICpQYx3jn1rUGH%2Bxy%2FnarCJJ5L1HVNUbeXAHscHnTO3yJUoxx41WX%2BPqX63aaS4s74KAwrYzIyQY6pgEBBsf06anznxIrqxn3d5DheK9Efiq1y2DeOpA2X%2BL7EVBKy%2BjC2WZEnU%2BbMKKH%2F817vwEqbVQ58f6K%2BIVghhYgEFzRxKCKkpzIXCpfQdW%2BRPEw0nt38kjT2qll1wINTcGaLl3SGQMsBTWs7KNjTt4t8NKL35XlY5mFqDW%2BQ3htmdwmNXdmmv329V9b7IgOAbTnZQ3%2BVT7P4rKTryPQfPapn1aa2NTn&X-Amz-Signature=202d8eca242ed43cb8b765bc205031d9fcf6015c85c460a9a46ec3ca09ee13fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
