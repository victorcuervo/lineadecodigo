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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRB4DVU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4KNZnUjEshHWGddlp37AlRfp7LEAskQ%2F17UJP8ao5zAIhALDhSmJg%2Bd9pYq4ndp953sKiDt0cHZCLtShKgSU3pzlIKv8DCHAQABoMNjM3NDIzMTgzODA1Igw9peb6gU4PSTC45zYq3AMH48Te0K%2FZv%2Be4AkZcX9DiIHO0N8rPR5DJ0gIonW5PK94i%2FDK3il4Zb3B%2FapEeLlmn1F%2F7HiiJf2eR0nQgWqS%2BYD%2BzB4EAs5UKgySZ2OiqWZFX82%2FAsbJCuWQYjspjR1k795eY%2FhKPVorDEzZ6VYRI4CtzlvCb9RA0n6Iu9OshNJWvJka8Ae3CIh5lK32eV9MM2SbKgj744qIxaFBoglKgVQT2nS0khwO26odPVRAm%2BQWdYh%2BAZZpl9C%2FM3hwIceXqs33gU1UMuloh7gJxrgAmr%2F%2FYGJJPn78HJ1dsZXoFYmt8RR59RErcaolGCH72CdgPWaNMJHTLsiRNdZZiE5DPoPgLI6iTtuck5onu725EgeoBol83%2FlZCVxKse7%2F1WukcgN1Xa5shliwhrmlussrB0k70P%2B5EZ2O1rtXmL7pNykLC6UWJRVQpUyUfW1aDxF4cuetxerQED%2BlMYsnTgzOjYmL2LmedqY%2BEym85FuaqZP8g3UHPODV63hsHMk4650dYhBvXtFNa%2FevUY7MX24igZBZEUIayRoAftcIuKv9GMCOlKiQVQap2zIogWOdkfa6%2BF3t6oPu1tHz7H0gnkrXZAwccLktM8Xza04U4Ets2wKeCI0R6cEFV9T%2BhCzCPn8%2FJBjqkAU4ap0r6qUo22rbwX6XpoznVdF%2F2TGZttH1L3XYZXhqotgy79sUV4D6KrJYIbeA9cpOU8jNrj8NqrKYuGTWnBTqYTVwQrHNUh0BzPoRNa7l5KkCPIYy34qAeEpRSER28Ad%2FcPDnEEzGyKFEpG3dhemBuRyWqUoJNNIV6JhnzOZPngrz%2F5ilgkecpQDw4lO5qj6iKT%2FZUGFk9uzHeSjs%2BZ2Fj%2BgDP&X-Amz-Signature=12cb0ef4ab5a432420dc486908d27a98cf381961f6268526a1e6b9eba79b4878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRB4DVU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4KNZnUjEshHWGddlp37AlRfp7LEAskQ%2F17UJP8ao5zAIhALDhSmJg%2Bd9pYq4ndp953sKiDt0cHZCLtShKgSU3pzlIKv8DCHAQABoMNjM3NDIzMTgzODA1Igw9peb6gU4PSTC45zYq3AMH48Te0K%2FZv%2Be4AkZcX9DiIHO0N8rPR5DJ0gIonW5PK94i%2FDK3il4Zb3B%2FapEeLlmn1F%2F7HiiJf2eR0nQgWqS%2BYD%2BzB4EAs5UKgySZ2OiqWZFX82%2FAsbJCuWQYjspjR1k795eY%2FhKPVorDEzZ6VYRI4CtzlvCb9RA0n6Iu9OshNJWvJka8Ae3CIh5lK32eV9MM2SbKgj744qIxaFBoglKgVQT2nS0khwO26odPVRAm%2BQWdYh%2BAZZpl9C%2FM3hwIceXqs33gU1UMuloh7gJxrgAmr%2F%2FYGJJPn78HJ1dsZXoFYmt8RR59RErcaolGCH72CdgPWaNMJHTLsiRNdZZiE5DPoPgLI6iTtuck5onu725EgeoBol83%2FlZCVxKse7%2F1WukcgN1Xa5shliwhrmlussrB0k70P%2B5EZ2O1rtXmL7pNykLC6UWJRVQpUyUfW1aDxF4cuetxerQED%2BlMYsnTgzOjYmL2LmedqY%2BEym85FuaqZP8g3UHPODV63hsHMk4650dYhBvXtFNa%2FevUY7MX24igZBZEUIayRoAftcIuKv9GMCOlKiQVQap2zIogWOdkfa6%2BF3t6oPu1tHz7H0gnkrXZAwccLktM8Xza04U4Ets2wKeCI0R6cEFV9T%2BhCzCPn8%2FJBjqkAU4ap0r6qUo22rbwX6XpoznVdF%2F2TGZttH1L3XYZXhqotgy79sUV4D6KrJYIbeA9cpOU8jNrj8NqrKYuGTWnBTqYTVwQrHNUh0BzPoRNa7l5KkCPIYy34qAeEpRSER28Ad%2FcPDnEEzGyKFEpG3dhemBuRyWqUoJNNIV6JhnzOZPngrz%2F5ilgkecpQDw4lO5qj6iKT%2FZUGFk9uzHeSjs%2BZ2Fj%2BgDP&X-Amz-Signature=b3c3d3ef498bb1776bf4ea298b0137190ac184fc7f032ca213155349a5d059a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
