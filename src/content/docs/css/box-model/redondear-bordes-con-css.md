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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGLYYRZL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyhkSQIbslk%2BV%2FUexglsLzAcxA3U8%2Fk6ptDMArBoy9RAIgT0DYkJOs7Okwv1f0dh5Qv5Z2uIB36LqvSjI%2BaiV3p7oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmBE2s3W%2FhWTgdL7SrcA5p0BP0Y6ql46T26FlZRH0aVkCV3br1xehOxQ2qba9UHkg25S3ppZaMpqbW%2BddJ8T4m9Lzko6kpeZjiuIKfBjyTvjspD%2FTUJaXvIm2ttAaFHX10Swi85DAG2WxrD%2BUGYQTp%2FiLwKoonPiImN%2BDS4R9PDSIuIve28pHIZa0jpddlIxArrENHfahEs0ks%2BLC%2FVpXjZYLlDMmhlq6WKIHuTw6wjpKkT%2FoSh3MPd7Be%2BSLsKzLKwYNvFToskDEz4fjdz47Frb4VgNaHNh53ZwT1xWsp%2FSTPXNAUv5qqW5lzkbV5vexS11leKxJAlhHVKHjBOWexg9K8GKMITp7SP53l04N2xsujnxUrn6qmmQva0Bv8x56PUDU7%2F37cpUiAs0P5gsIAsbqAZ3jQgROWXlqt3pdvGKHB15je0czEU8DsC2BMcdWhUtZmE0TAuV7MGkxt8I3UitK%2F%2FEwIBvPk8hEEZGfN5RyRZ5NON3cxutwDKtxdHOjZu7Hi6SBhlYPld%2BLBPQ1o2D9RNuY7q8U1IHE6C2op5%2BnB1uXCr09B3i2QIOo6BpXmYxclSt%2B3gYy2PCdLTHCEBQWrm6NSq4JlQEcs4cbOATDDAFsVLj7RNgJ2Kq%2BKe4Wejd48aNfjIGIjRMLKujMoGOqUByG1LJtUxSCzCOqiYPwxs3QuCKWkNrOD9g9RzRCmg5cEYWz5VNNwXy4amMBYwBTMCQaoZAD4iIzqnuKS0V1zIMjgfsXetNfHntkjQJG3%2FADVFgxiHE7rCqI2LXyc6rYu5yog81nm04r8ErVOp4aOZiig4qjxOLik30OBLSaJoxYGdSoSlUn01GtL7hSQZCS3QYjZws%2B1K67GviKDU4YT5GRg5fRTr&X-Amz-Signature=f76e6dd2db9e73398c8a17afc839975261b912087a440f73854a15acfb51a6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGLYYRZL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyhkSQIbslk%2BV%2FUexglsLzAcxA3U8%2Fk6ptDMArBoy9RAIgT0DYkJOs7Okwv1f0dh5Qv5Z2uIB36LqvSjI%2BaiV3p7oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmBE2s3W%2FhWTgdL7SrcA5p0BP0Y6ql46T26FlZRH0aVkCV3br1xehOxQ2qba9UHkg25S3ppZaMpqbW%2BddJ8T4m9Lzko6kpeZjiuIKfBjyTvjspD%2FTUJaXvIm2ttAaFHX10Swi85DAG2WxrD%2BUGYQTp%2FiLwKoonPiImN%2BDS4R9PDSIuIve28pHIZa0jpddlIxArrENHfahEs0ks%2BLC%2FVpXjZYLlDMmhlq6WKIHuTw6wjpKkT%2FoSh3MPd7Be%2BSLsKzLKwYNvFToskDEz4fjdz47Frb4VgNaHNh53ZwT1xWsp%2FSTPXNAUv5qqW5lzkbV5vexS11leKxJAlhHVKHjBOWexg9K8GKMITp7SP53l04N2xsujnxUrn6qmmQva0Bv8x56PUDU7%2F37cpUiAs0P5gsIAsbqAZ3jQgROWXlqt3pdvGKHB15je0czEU8DsC2BMcdWhUtZmE0TAuV7MGkxt8I3UitK%2F%2FEwIBvPk8hEEZGfN5RyRZ5NON3cxutwDKtxdHOjZu7Hi6SBhlYPld%2BLBPQ1o2D9RNuY7q8U1IHE6C2op5%2BnB1uXCr09B3i2QIOo6BpXmYxclSt%2B3gYy2PCdLTHCEBQWrm6NSq4JlQEcs4cbOATDDAFsVLj7RNgJ2Kq%2BKe4Wejd48aNfjIGIjRMLKujMoGOqUByG1LJtUxSCzCOqiYPwxs3QuCKWkNrOD9g9RzRCmg5cEYWz5VNNwXy4amMBYwBTMCQaoZAD4iIzqnuKS0V1zIMjgfsXetNfHntkjQJG3%2FADVFgxiHE7rCqI2LXyc6rYu5yog81nm04r8ErVOp4aOZiig4qjxOLik30OBLSaJoxYGdSoSlUn01GtL7hSQZCS3QYjZws%2B1K67GviKDU4YT5GRg5fRTr&X-Amz-Signature=c96f605bbc271d26e38f4440e1e53f53d4b225a9baf2cb06ddb5d58be1960fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
