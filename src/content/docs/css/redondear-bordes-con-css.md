---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VORCOFA3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHk2T2454cCHMt0CW%2FurZG5Z9zNJbAZfn2zz7AD6%2FGYWAiAzDgLz716ftZB3MWwbQRit4xk4fUpTcqDz9DjdVpFaCir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXGGpYkPtv2%2FZ0hCLKtwDALdoKlUSvAsVC7faMA0JxdAX24v1Ws36rcWWaCsoGMcTF%2FhCZCw4YgPDp8ItfFNSGVJjsjURcyALFXZ5bwEosQOu3skknS4DAzEJmQYR1VFA9EwipGlsuNCYmDLSPxLGA1pNLSatTGS2%2BpT144ptUARGK4HIOOzncOSYKgg7DZJ0YoQyI2mVsdGjulD%2BTi3JVjwGCQGvN8vzi744Ms00QVNqDspYl3OiyqMjR%2B%2BPQ2WIxfYX%2BGCNI80LSMT2v1mO%2BqR6%2FsWkA4ur%2BcN8QrCUjuwArGJulWHDhTO75IODoASYl%2Fnt3G1MQ%2BWcgAJ14qeBoL6Jq71uxs9sU8oD2LXwdDSfjdEykCKGHcJKzWtPyKmAQK16Krw1eKBnLkHFFKGBDM%2F4murWuTMkWu4PkieMpSszxHdQ%2BlcDlWB8m1zDXW51unGzCyHlaw5sB8A1GHNIEdyI0Q70PPzEuTizAqbx054z%2F5nGCN11ma6k3txemjAdhDbLL0QTnuO1eI9%2BfmMYSBMR08KgvYnwhqJc15g78T22CTXg6rpAu4KJbrTgZ5MhwE5aK19LsjoUvvSoHF%2BpRlTLEVWWk59fWLzHXArE0xGmM2U7s9fgT4Ns1YRABBmAa5RszkjNKHVJB60wi5HCyQY6pgE9ZiCvKYSis1xZEUynyF4aHNihCiIYpm0RtsnVdBgOo0nVY04P%2F6hHPz6p27MiZ%2FiEIecyw2reYls0YHSQKtJxNPjTgl%2FKT6xcoNbMG6neVPFNHQkIze%2FMOx6QLqqNn19ujUzB4pLX4CrSPSM3YsUc%2FakLqLQmwbXYaGYnqqWHWf8yqpEKJnIWLv1ko4gSB2o7oasn%2FJo%2BMSrKSCFRXPzvd8GnD8TV&X-Amz-Signature=220a8bfc80a0264d167eabab32ddb12bde284bbfbe1c35c8ed578e2665d06bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VORCOFA3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHk2T2454cCHMt0CW%2FurZG5Z9zNJbAZfn2zz7AD6%2FGYWAiAzDgLz716ftZB3MWwbQRit4xk4fUpTcqDz9DjdVpFaCir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXGGpYkPtv2%2FZ0hCLKtwDALdoKlUSvAsVC7faMA0JxdAX24v1Ws36rcWWaCsoGMcTF%2FhCZCw4YgPDp8ItfFNSGVJjsjURcyALFXZ5bwEosQOu3skknS4DAzEJmQYR1VFA9EwipGlsuNCYmDLSPxLGA1pNLSatTGS2%2BpT144ptUARGK4HIOOzncOSYKgg7DZJ0YoQyI2mVsdGjulD%2BTi3JVjwGCQGvN8vzi744Ms00QVNqDspYl3OiyqMjR%2B%2BPQ2WIxfYX%2BGCNI80LSMT2v1mO%2BqR6%2FsWkA4ur%2BcN8QrCUjuwArGJulWHDhTO75IODoASYl%2Fnt3G1MQ%2BWcgAJ14qeBoL6Jq71uxs9sU8oD2LXwdDSfjdEykCKGHcJKzWtPyKmAQK16Krw1eKBnLkHFFKGBDM%2F4murWuTMkWu4PkieMpSszxHdQ%2BlcDlWB8m1zDXW51unGzCyHlaw5sB8A1GHNIEdyI0Q70PPzEuTizAqbx054z%2F5nGCN11ma6k3txemjAdhDbLL0QTnuO1eI9%2BfmMYSBMR08KgvYnwhqJc15g78T22CTXg6rpAu4KJbrTgZ5MhwE5aK19LsjoUvvSoHF%2BpRlTLEVWWk59fWLzHXArE0xGmM2U7s9fgT4Ns1YRABBmAa5RszkjNKHVJB60wi5HCyQY6pgE9ZiCvKYSis1xZEUynyF4aHNihCiIYpm0RtsnVdBgOo0nVY04P%2F6hHPz6p27MiZ%2FiEIecyw2reYls0YHSQKtJxNPjTgl%2FKT6xcoNbMG6neVPFNHQkIze%2FMOx6QLqqNn19ujUzB4pLX4CrSPSM3YsUc%2FakLqLQmwbXYaGYnqqWHWf8yqpEKJnIWLv1ko4gSB2o7oasn%2FJo%2BMSrKSCFRXPzvd8GnD8TV&X-Amz-Signature=2b3892f6433d7fd8835176725b1d3b11b1d4c6e97412daa9e4ebe23bc5390ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
