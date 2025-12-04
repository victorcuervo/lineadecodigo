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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGJK4KZK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEA4rio5BTUzZ%2F7iMVDCME8PWfe15zZ5mfrleM08Uj6SAiBcEfq98L9PeNiQSud7fFbxdqU9zFm7V7rI82iRhIoRmir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7BMNP2%2FxIgtDgH8FKtwDf7%2BANAQ7qLsq5IhgELeeJNz1H7nipmQfFgz66uctnrIErqBIN6xOSmOXTloMKgM89HMskMPUrwslqCOZmpLs5WtnSCXwlfI%2F%2FChEXh0TPSQ7P8yHCuF%2F7UA0GzxrRWk%2FxcoYMxHonZoLTXhKHkwGhY%2FJ0qisrgAK42%2FtVF5BFlbcN%2BNai3viDyFjQ1%2ByW%2F9OnNqX%2BEakRFkX3%2FVWFiNNbx1I55Q7WDrmMDwT0fgYCQ%2Ftpp3BkdAvW%2FdK2FqqYPHqQQzp0fQzDMc89yggELB0KmIgUMtbhCXfej7u6m%2Bq6kZ8Jaifj5gp%2Bx4qPjUqtLdRPCnuPOPW21mfmclZmGx31PIdpULryfTUa6AIkfRyOcsFyaKxgiaQXGWguBik7cQCLd86dQ1GS1ALvlrHgIalPxfkaKQwmdzFvOGXqMhEGxoddPa50JPWshBm3MTdUjMmfVLgAMTrRpNAeO6AJHo4PUW0OKUTa5MA2ytVzP5auIjePg%2FOamEpZH1OHviBE%2F9kPw%2FXGI4aMAQCC78DwbyMubdBVSRKTCndJXVcGdt2fB32gyAVPC%2B%2BHKsS7lECRwvPiAYYqkX%2FS9SD0oLdzKTzDeZfGWVl0kUo0YUx9Xn%2FZNCyM2HZ%2FFUNSzIq2QMw7ebFyQY6pgEkiuSZ2sNKbKu0QYv1uArq3toTPyF0YLz8bnmfaan3EWj49Hqf3Sio1HT1M7QuF7bn0gAg88fmS5VjuDUScl7Wb9sXtAqljqs2OWuV428G28kF8B2pO9CsV3Tioeb50%2B2dD%2BnMWTMm3q4ohw1NTyva5f1EOFet99YjXHOgdUlH7BQZfbAowPhR8haLUfL%2Fvk9RXqJtV5sotH1z66lfyP6Hx00E02dO&X-Amz-Signature=8a228aecb58fdd6e9bf38e83e06cccd099ce0603a56c58d6a4cf4b4c1c252941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGJK4KZK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEA4rio5BTUzZ%2F7iMVDCME8PWfe15zZ5mfrleM08Uj6SAiBcEfq98L9PeNiQSud7fFbxdqU9zFm7V7rI82iRhIoRmir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7BMNP2%2FxIgtDgH8FKtwDf7%2BANAQ7qLsq5IhgELeeJNz1H7nipmQfFgz66uctnrIErqBIN6xOSmOXTloMKgM89HMskMPUrwslqCOZmpLs5WtnSCXwlfI%2F%2FChEXh0TPSQ7P8yHCuF%2F7UA0GzxrRWk%2FxcoYMxHonZoLTXhKHkwGhY%2FJ0qisrgAK42%2FtVF5BFlbcN%2BNai3viDyFjQ1%2ByW%2F9OnNqX%2BEakRFkX3%2FVWFiNNbx1I55Q7WDrmMDwT0fgYCQ%2Ftpp3BkdAvW%2FdK2FqqYPHqQQzp0fQzDMc89yggELB0KmIgUMtbhCXfej7u6m%2Bq6kZ8Jaifj5gp%2Bx4qPjUqtLdRPCnuPOPW21mfmclZmGx31PIdpULryfTUa6AIkfRyOcsFyaKxgiaQXGWguBik7cQCLd86dQ1GS1ALvlrHgIalPxfkaKQwmdzFvOGXqMhEGxoddPa50JPWshBm3MTdUjMmfVLgAMTrRpNAeO6AJHo4PUW0OKUTa5MA2ytVzP5auIjePg%2FOamEpZH1OHviBE%2F9kPw%2FXGI4aMAQCC78DwbyMubdBVSRKTCndJXVcGdt2fB32gyAVPC%2B%2BHKsS7lECRwvPiAYYqkX%2FS9SD0oLdzKTzDeZfGWVl0kUo0YUx9Xn%2FZNCyM2HZ%2FFUNSzIq2QMw7ebFyQY6pgEkiuSZ2sNKbKu0QYv1uArq3toTPyF0YLz8bnmfaan3EWj49Hqf3Sio1HT1M7QuF7bn0gAg88fmS5VjuDUScl7Wb9sXtAqljqs2OWuV428G28kF8B2pO9CsV3Tioeb50%2B2dD%2BnMWTMm3q4ohw1NTyva5f1EOFet99YjXHOgdUlH7BQZfbAowPhR8haLUfL%2Fvk9RXqJtV5sotH1z66lfyP6Hx00E02dO&X-Amz-Signature=51501c0256e69880f008c664e609096296224fb5c1d40fdf9732072522c0302a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
