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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFV7HTIV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHlrmXruRTJE0vcOT%2F48fmcfxv9qn9u0oiiVrQqprPcDAiB5Z3ld8A1Aa0iyZioNOcDifUS9q8NTLcIBWXbkwd7c2yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMvu7ww%2FTMDzWBqIYmKtwD2qFCMqw0nfp7dpnGBwfdmOtfTi3N8qZK%2Bf1ehTwYho%2BSLO79RROfGhWRM5TVR0EoMRsvuPgzQjAo0MEMGog0wdGKeSoRuy6Pde7KGuom0KdnTA0GqtlL8iT%2FYbVD%2BLb7KPh6OUnsLUK8m64Zg6wYyHMSEWiZgXNuHOnn87lZNyX0zwqFViYa1%2FlZ15PQ0inp6tOJAfCtaEY0cPhq23vyy8DJsgXQN1LIVIyqjpXfRXVM8KprNaNRK%2BMboaV433T7kJM9zv4ghvTV98%2FZDYNGUqhXoOOscck8kX9BrMIiamBj45daD9q5JuudvGgJc0k%2BopbwOzk19pMVcepTZEMBtgADUT%2B45gYlr15G5tjH5X0eXH0vJcmJw%2FGgymUTxKVZCQ3kzkCVH5aj9gRyXobn9vxeheHSc4ZUxn2ve6bMVDBMzlREE17btXq1fB5I85LlrB2s%2FydodTEoAGZpkkZXgE55JcQJamvRxOOWhqFMKMuYJjqCoEfaX6XfQ2%2FpBebblpjx7YflHEd7Likk2zoysIXxQ20i3CVWKu7Qp8jDBk5ULyged3zaBJXEL0baBE0x2ZmrtRzQWVegCW5kZ6yYcQTqKP%2BG%2BSTgl52gj78hIK5NKnfxeSCWCW3Bj8MwyYbFyQY6pgHzvTZQySFZGs9F6th%2BDDcDf8IaOVBDJ1sNfE4GM9tQeznSy5lTQtrGNJ4rPCFO2JCL%2FW0crfR8AQRwT5834y8htBbMcj8Zd3AnWmk77N1zDNNTVNi7A%2Fsq09l9FUy2CG3iX3PXHSBDYDoT9938kuRsmCMfrhK4%2FclV5N5PekB%2BUhCd7Qf5sUyQ6BHUvK2sYLk0w5grwf4UajDek7XC%2BRlrY219mpen&X-Amz-Signature=90fdd83a252f9879674edc94c2cb2621adf5370c92132d2bccd1dacb87e6c328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFV7HTIV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHlrmXruRTJE0vcOT%2F48fmcfxv9qn9u0oiiVrQqprPcDAiB5Z3ld8A1Aa0iyZioNOcDifUS9q8NTLcIBWXbkwd7c2yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMvu7ww%2FTMDzWBqIYmKtwD2qFCMqw0nfp7dpnGBwfdmOtfTi3N8qZK%2Bf1ehTwYho%2BSLO79RROfGhWRM5TVR0EoMRsvuPgzQjAo0MEMGog0wdGKeSoRuy6Pde7KGuom0KdnTA0GqtlL8iT%2FYbVD%2BLb7KPh6OUnsLUK8m64Zg6wYyHMSEWiZgXNuHOnn87lZNyX0zwqFViYa1%2FlZ15PQ0inp6tOJAfCtaEY0cPhq23vyy8DJsgXQN1LIVIyqjpXfRXVM8KprNaNRK%2BMboaV433T7kJM9zv4ghvTV98%2FZDYNGUqhXoOOscck8kX9BrMIiamBj45daD9q5JuudvGgJc0k%2BopbwOzk19pMVcepTZEMBtgADUT%2B45gYlr15G5tjH5X0eXH0vJcmJw%2FGgymUTxKVZCQ3kzkCVH5aj9gRyXobn9vxeheHSc4ZUxn2ve6bMVDBMzlREE17btXq1fB5I85LlrB2s%2FydodTEoAGZpkkZXgE55JcQJamvRxOOWhqFMKMuYJjqCoEfaX6XfQ2%2FpBebblpjx7YflHEd7Likk2zoysIXxQ20i3CVWKu7Qp8jDBk5ULyged3zaBJXEL0baBE0x2ZmrtRzQWVegCW5kZ6yYcQTqKP%2BG%2BSTgl52gj78hIK5NKnfxeSCWCW3Bj8MwyYbFyQY6pgHzvTZQySFZGs9F6th%2BDDcDf8IaOVBDJ1sNfE4GM9tQeznSy5lTQtrGNJ4rPCFO2JCL%2FW0crfR8AQRwT5834y8htBbMcj8Zd3AnWmk77N1zDNNTVNi7A%2Fsq09l9FUy2CG3iX3PXHSBDYDoT9938kuRsmCMfrhK4%2FclV5N5PekB%2BUhCd7Qf5sUyQ6BHUvK2sYLk0w5grwf4UajDek7XC%2BRlrY219mpen&X-Amz-Signature=1d39e09683c87bf69ef691ad2b0af173fbfa35c19bc3ec35ce7048be4c5bee95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
