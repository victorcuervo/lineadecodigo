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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GK5FDJQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTVyPP28KcQN%2FdFBXY05%2FYW2ZTTKk9wwc5iyW9SZEN9QIhAM68l7EdhLbMY9ndRAv5Ep%2FM1G2UWA%2FFLB5TV0YB67WrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPThOSwY4OO27uV8wq3APXBcoD9FU6jcnHbeP1c%2BCdBUfpqqRB0qIsrD3nzWG3T0Jt7xY4lZwg5q2Ta%2BQYuhhKUtJH6qTEGH%2FIwvTXhX97U9SnZNtK8qoJMR84feP%2FjZGSjEt0j6uWichAlPDAyQ6kE7nDNocp0kJjAc0gnSaURXSlqlskHMD7qa75BsBM4EQHwsCBD2%2BGd49JNQbzoNJ2Gx45ffXATs3cZKO8x5H%2FMpCdy7GjtNkrqARAPEV4N66KrGbZW%2BDV%2FwRBfJnnYIwLrHQwrX5iYssb9N3amNXy8Ggb%2FPQfo%2BvjXd%2F2wYBN7cngFoYaqMy4Drx3poNDwv5NjrT6KZ3Fvt1zBtCDvxvzQ0DH9LFNh2M6%2B28QQFYjAyLBM2yL3ylhtJVEH1YpqcATahXS2pY1LiiQDNkinPgpiIfAaZpCLeExp%2Bu2AFmMoTeNxBm2zzF3xZAwZQ46ZvcS2jSnPy559NNlv9YDv8XaMsxJT8ZR8tsyPbRCD1n96oadNZtzpC7p1OJHLfLwCn4p796V6Dn03F0m5GILVrV68hl%2Fso%2FGbxRJcP1OJktT8pygABpoa3TLVMUWI%2F7nvlZJeFD0Ck%2FSoaVve%2Fs%2FfRRDBkzhdsO1y34V%2F8WQUIcBD6pzTqa5x8kTUgJMGDCeoIvKBjqkAef6ndRGxkNJ4O1ZLAv%2BwP%2FRbAEgvzFG8O%2FWDcJf%2BgwQR735ex8qodqM4iH%2F%2BdDAphuTD%2BNLKDNAdqOiapCDwNIHi408B04%2BblZPbqxuqrgc3C%2F3TQJK6QoFC5L%2FbJX%2FpRaqxIHYBwaYg3XmiCGp29eX1lAc5bTAxdaiWl3Ah6KqCYsDkWUaHua06zXnIZVeaEqrcDx40j2ScBAEZVud9G60UTWd&X-Amz-Signature=c309adb4bb9b636e5e6835dda0d00092c6a47060838063833572aebb398c7193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GK5FDJQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTVyPP28KcQN%2FdFBXY05%2FYW2ZTTKk9wwc5iyW9SZEN9QIhAM68l7EdhLbMY9ndRAv5Ep%2FM1G2UWA%2FFLB5TV0YB67WrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPThOSwY4OO27uV8wq3APXBcoD9FU6jcnHbeP1c%2BCdBUfpqqRB0qIsrD3nzWG3T0Jt7xY4lZwg5q2Ta%2BQYuhhKUtJH6qTEGH%2FIwvTXhX97U9SnZNtK8qoJMR84feP%2FjZGSjEt0j6uWichAlPDAyQ6kE7nDNocp0kJjAc0gnSaURXSlqlskHMD7qa75BsBM4EQHwsCBD2%2BGd49JNQbzoNJ2Gx45ffXATs3cZKO8x5H%2FMpCdy7GjtNkrqARAPEV4N66KrGbZW%2BDV%2FwRBfJnnYIwLrHQwrX5iYssb9N3amNXy8Ggb%2FPQfo%2BvjXd%2F2wYBN7cngFoYaqMy4Drx3poNDwv5NjrT6KZ3Fvt1zBtCDvxvzQ0DH9LFNh2M6%2B28QQFYjAyLBM2yL3ylhtJVEH1YpqcATahXS2pY1LiiQDNkinPgpiIfAaZpCLeExp%2Bu2AFmMoTeNxBm2zzF3xZAwZQ46ZvcS2jSnPy559NNlv9YDv8XaMsxJT8ZR8tsyPbRCD1n96oadNZtzpC7p1OJHLfLwCn4p796V6Dn03F0m5GILVrV68hl%2Fso%2FGbxRJcP1OJktT8pygABpoa3TLVMUWI%2F7nvlZJeFD0Ck%2FSoaVve%2Fs%2FfRRDBkzhdsO1y34V%2F8WQUIcBD6pzTqa5x8kTUgJMGDCeoIvKBjqkAef6ndRGxkNJ4O1ZLAv%2BwP%2FRbAEgvzFG8O%2FWDcJf%2BgwQR735ex8qodqM4iH%2F%2BdDAphuTD%2BNLKDNAdqOiapCDwNIHi408B04%2BblZPbqxuqrgc3C%2F3TQJK6QoFC5L%2FbJX%2FpRaqxIHYBwaYg3XmiCGp29eX1lAc5bTAxdaiWl3Ah6KqCYsDkWUaHua06zXnIZVeaEqrcDx40j2ScBAEZVud9G60UTWd&X-Amz-Signature=7c8f96eb335e2790f015540a52908f24b5096eba839cacde52a07746206b02a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
