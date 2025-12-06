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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646D6PLJU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChR801flNrf0bkJh6yveqGrNvjoL2rrarT2hEImMDxogIgaEnC0QNnEzTzUmp%2BxR6497Q3IdfL8y9rakgI2hp%2BbXcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDO5PJN0gIfQ51k6LDCrcAwA8AOuUNx6ulIe6iOZNPCUqF0hBQ%2F3jkfoQrGJ%2F9VIiY7QYW0IgbEi8QCXF6W5SiL0Tv8ukEWvqC4t5n7uy%2FlkrUKDwEHTjedyROpUpCpweDtxVAvEodrBJvnRMr6YSDTmY2ekNAk47FfpaNsrUChdMPhfKGaWVlL4DDnwCNDhq6Km8bon0s6jjJEgYWd%2FPkSaxyAtbtmzuVR7PZpxBH60136%2BpaJ5pDGMQKKFnekHSSFDOG7uPJJ3MW4o1wptxdNtOSIx%2FkC8eEmQLn5KXhwRWNE7R4tNymSiNTkNjHVWyUwj9PEM1IPW6J7wsFn9OdlWPoeXpQAtbHV6cOOboZrGmmaerRH8CjriEFMjuymaDruV6J0P4FAyQeB2Wah6Q5ofhOfFuN7xwt6IPONNE92zploO6GuMYlDRRST0XEsSQifpsdPIJi7OJ%2Fvsz54%2FkPEGPkhPJQ6jh1zK91WsegaSKy0yzcthx7OC1%2FofpO3xu4Gs1lOgmhdz4bEEd7vMVUS163u1YHfHDvFO1QDY5sy%2FSchlvZsNpRbuuMNCl%2Bc3RVZTcjnKD4aKfIewQJEHlbEQs77vvcN9328OUa4MUwGQAMVw8OlaD%2FFp3wSHmUgYUClZ70Iij5kV6%2FDoUMOmez8kGOqUB8LnmO2aqzsLjN2rO7XkFQQyjfsp3J%2BG4kAFDEtntfMlZgrBFAa3p0H6NoO2e4Nm82nR9%2FfvtiYtHDkAZjcY5QElinE%2BAVnm5pN7pYWthH6qoHov6YfQ3ZS62WgkZA4mUSQ0FWS5OhrmNrtwcYumqQWkYnBFqJEpP0dU1U2WsuCgajB1F1MH%2Fq7GGKs9ocetvha8x%2BFz%2BOe3oq1rxB3Gn1C8t5KDy&X-Amz-Signature=c5cf9690d8da8f2f39f47ba052a4929e25ff70b70e178d160e3b90d4cf3c9ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646D6PLJU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChR801flNrf0bkJh6yveqGrNvjoL2rrarT2hEImMDxogIgaEnC0QNnEzTzUmp%2BxR6497Q3IdfL8y9rakgI2hp%2BbXcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDO5PJN0gIfQ51k6LDCrcAwA8AOuUNx6ulIe6iOZNPCUqF0hBQ%2F3jkfoQrGJ%2F9VIiY7QYW0IgbEi8QCXF6W5SiL0Tv8ukEWvqC4t5n7uy%2FlkrUKDwEHTjedyROpUpCpweDtxVAvEodrBJvnRMr6YSDTmY2ekNAk47FfpaNsrUChdMPhfKGaWVlL4DDnwCNDhq6Km8bon0s6jjJEgYWd%2FPkSaxyAtbtmzuVR7PZpxBH60136%2BpaJ5pDGMQKKFnekHSSFDOG7uPJJ3MW4o1wptxdNtOSIx%2FkC8eEmQLn5KXhwRWNE7R4tNymSiNTkNjHVWyUwj9PEM1IPW6J7wsFn9OdlWPoeXpQAtbHV6cOOboZrGmmaerRH8CjriEFMjuymaDruV6J0P4FAyQeB2Wah6Q5ofhOfFuN7xwt6IPONNE92zploO6GuMYlDRRST0XEsSQifpsdPIJi7OJ%2Fvsz54%2FkPEGPkhPJQ6jh1zK91WsegaSKy0yzcthx7OC1%2FofpO3xu4Gs1lOgmhdz4bEEd7vMVUS163u1YHfHDvFO1QDY5sy%2FSchlvZsNpRbuuMNCl%2Bc3RVZTcjnKD4aKfIewQJEHlbEQs77vvcN9328OUa4MUwGQAMVw8OlaD%2FFp3wSHmUgYUClZ70Iij5kV6%2FDoUMOmez8kGOqUB8LnmO2aqzsLjN2rO7XkFQQyjfsp3J%2BG4kAFDEtntfMlZgrBFAa3p0H6NoO2e4Nm82nR9%2FfvtiYtHDkAZjcY5QElinE%2BAVnm5pN7pYWthH6qoHov6YfQ3ZS62WgkZA4mUSQ0FWS5OhrmNrtwcYumqQWkYnBFqJEpP0dU1U2WsuCgajB1F1MH%2Fq7GGKs9ocetvha8x%2BFz%2BOe3oq1rxB3Gn1C8t5KDy&X-Amz-Signature=13652cb1dbd7f25f43ede1237512af6a4b53d4d1cf1bc9c0dac23c28aba37e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
