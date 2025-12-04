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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZI4FZQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD%2BtPrO542bYmbAfiKytPzY8yhuhzUywk5v51MN%2FDzRKQIhAK3fhqQlzltMdwd1aIMNtA4oK9z9Gx8lqy7HUwziqYgiKv8DCEgQABoMNjM3NDIzMTgzODA1IgyrU30iI8zMZ08%2FsH4q3AMd9sVQfNC4uOs95K1PG%2FPcPk4gZn3oJR0ZBUD%2FCfFdcZ%2FTIHphI05IXmfVk%2BVRPgchSLSLkd%2F%2FIlA%2BCoBkbyfBKUOmLHBNLfRRxq6I1RhOtsv0f3JV4ueEeuRc%2BiAZDimteYOIV3cng1RiKq7qW6%2B0wmCFQOSERvotJrhjw3mQtFFqKoiKfPPCc%2BMP9ZXWBDtJdgTNKEyg3QpSGLtFC21fPyr294f4OfRVIfCIURUSZl2eBSIgpUSLsku%2BiQ5NE2uBBD6X3WDEFstTG1haZCNP66%2FLcx7QhuvSE0e9HUdttbzbBV8Z%2BEICs21E3vtuE8P2%2BV6rfiarnYUlMFx%2B1Um7ROMufRXIrXvp0vMtbg%2Fbk7ct18cQ6vm6eqqy9G%2BUAQsrvEUyFAHIgdf%2B0mx7NuzXysjXk7ITVUAx3q7zLOvpG9UL5SQitk06D6FFlN4AAspc8DVug9DLAJTyJpYyUtB0Pvq%2BTFWZw1RJ2roGRhG5l6wwrlZgDOHHAOJQzW%2FqSOC7MGlQnmGO8Glie4RstX%2Bn51nZEGYr39GIY%2Fqn2v%2FVadf1g2dE9etgs7UqLx7RkSpLpiGULsOcU5aAFP5ohnh9R4lZyLbbW7PLrfEdjJioslwe3Ju5H991A2veBTCav8bJBjqkAd0vbr83Wuv9%2BWwWeYcxunMtfJGsMkzTg5iiJVXa9wxqhAN6%2BZGX5WTKYky0frrEi7C9%2Fc3HcADJYAcS8HdwRz2zlpGtf3RC1Uk42IL8cn3JNjVmiTosvDMmaAqx93akf3EUKyHpR21wWlAeh0hBu2Z%2F38ERh0b3FTARnYcieSJtkbW0kTo8bzlViiDSw750OZ%2ByxRb3RlrO%2FX9pG9XzYwd1KiU3&X-Amz-Signature=d24a627487c3b8841ab2ce0f74c9ef9fd830403e58e91047f46ed17898d40203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZI4FZQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD%2BtPrO542bYmbAfiKytPzY8yhuhzUywk5v51MN%2FDzRKQIhAK3fhqQlzltMdwd1aIMNtA4oK9z9Gx8lqy7HUwziqYgiKv8DCEgQABoMNjM3NDIzMTgzODA1IgyrU30iI8zMZ08%2FsH4q3AMd9sVQfNC4uOs95K1PG%2FPcPk4gZn3oJR0ZBUD%2FCfFdcZ%2FTIHphI05IXmfVk%2BVRPgchSLSLkd%2F%2FIlA%2BCoBkbyfBKUOmLHBNLfRRxq6I1RhOtsv0f3JV4ueEeuRc%2BiAZDimteYOIV3cng1RiKq7qW6%2B0wmCFQOSERvotJrhjw3mQtFFqKoiKfPPCc%2BMP9ZXWBDtJdgTNKEyg3QpSGLtFC21fPyr294f4OfRVIfCIURUSZl2eBSIgpUSLsku%2BiQ5NE2uBBD6X3WDEFstTG1haZCNP66%2FLcx7QhuvSE0e9HUdttbzbBV8Z%2BEICs21E3vtuE8P2%2BV6rfiarnYUlMFx%2B1Um7ROMufRXIrXvp0vMtbg%2Fbk7ct18cQ6vm6eqqy9G%2BUAQsrvEUyFAHIgdf%2B0mx7NuzXysjXk7ITVUAx3q7zLOvpG9UL5SQitk06D6FFlN4AAspc8DVug9DLAJTyJpYyUtB0Pvq%2BTFWZw1RJ2roGRhG5l6wwrlZgDOHHAOJQzW%2FqSOC7MGlQnmGO8Glie4RstX%2Bn51nZEGYr39GIY%2Fqn2v%2FVadf1g2dE9etgs7UqLx7RkSpLpiGULsOcU5aAFP5ohnh9R4lZyLbbW7PLrfEdjJioslwe3Ju5H991A2veBTCav8bJBjqkAd0vbr83Wuv9%2BWwWeYcxunMtfJGsMkzTg5iiJVXa9wxqhAN6%2BZGX5WTKYky0frrEi7C9%2Fc3HcADJYAcS8HdwRz2zlpGtf3RC1Uk42IL8cn3JNjVmiTosvDMmaAqx93akf3EUKyHpR21wWlAeh0hBu2Z%2F38ERh0b3FTARnYcieSJtkbW0kTo8bzlViiDSw750OZ%2ByxRb3RlrO%2FX9pG9XzYwd1KiU3&X-Amz-Signature=35a416caba5f01764f30daa1fa99db9d07934ee78fdfc84ae7e1ac051c90fbf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
