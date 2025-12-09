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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUTDNAU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRfEyKNUJmpHKPW%2BdwQeAZl1vHFXTrneZhlcRM1J9HZAiAx%2BfWn6ff8hUuZ5APwmt3kKjGnDYrpfrGcKp3bfuLyDCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95kFJ%2B%2FMEDZA%2F8yQKtwD4EIcvtNHkpitWf%2FPDslFoL%2FxE%2FMdKLm04JkRq4JrAJeQOteC8BrRVGAVcqv8d%2BglfWJqhWDu49%2BTEi4rqozMHGpRnJs%2FMr5PB2LzuxGNvfZYCOABRVQ3kvUPdOtoIu5aM5AZoLIULVSLcga0S2BlvEhtLFVgWkVm8qKeIZp%2BsZeCkf51%2FDG504bPH2Q%2B6EqNXRzerrQ1aoSH%2BvEfZCxxadodld48ahPTNOGUCB8JrXZBmM5erf9cYfRNNAupFnbZCXWIQY7w5U1GNh99kjxqbyTchUVegCO8pLrHzTK5Twoan9bBsr%2BmKpLcgebjF0emWkdKvxO5qJUvLPIq20BD98UO7z6qFL3CuEgg3QlSs2kryk9MjvY0tv%2BMQNS%2BEE9jmTJweT%2ByoDyfwpOx9PVRFE0bhLSllHp6gDk0FCslJJIMve87JfWBfCFrW1Ux1idH6ttNAXwnQtxmkRk04rW8peNIrk3ODkKyDjHNO%2BqrqIpYRy%2BHY6PPvwhPxLOPpAGH78L%2F%2BRD3rJqWLPurDpw63b6%2Fdh10oz5feozrxrrJ%2BG746NFHR%2B%2Bfc2QFUh2FDj1SNFOm1GGH6iUXGoZ2l6t40xLwBFjTj9C%2FB3fjipAqFsMQPtWEHiC%2FD4y9igcwvKTfyQY6pgFNqyUn6kGHLWLhAI3gcIKmUP90t8gUVetE0NH8qNifnf%2FA94pAWWpr4hyh0WQZjKSd2bjiPKRAQVGe1xw0aehD%2BVlGa%2BZUOPyG28OJn0qlxhlzAbtfvd19igV7rLQ3j4EMFB19LIyWEIs%2BS54z2l6IZr7aks32sROJOEAa1vzhAMIGi9P4O05nOqka7zmb2mG%2Br%2FVcSRVefnqIgboyDNO1gUKPlA8H&X-Amz-Signature=412d8b3aa4c13e742e7fdb5151fce23c546ff8324b2ada0bb97cfe267b0f003d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUTDNAU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRfEyKNUJmpHKPW%2BdwQeAZl1vHFXTrneZhlcRM1J9HZAiAx%2BfWn6ff8hUuZ5APwmt3kKjGnDYrpfrGcKp3bfuLyDCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95kFJ%2B%2FMEDZA%2F8yQKtwD4EIcvtNHkpitWf%2FPDslFoL%2FxE%2FMdKLm04JkRq4JrAJeQOteC8BrRVGAVcqv8d%2BglfWJqhWDu49%2BTEi4rqozMHGpRnJs%2FMr5PB2LzuxGNvfZYCOABRVQ3kvUPdOtoIu5aM5AZoLIULVSLcga0S2BlvEhtLFVgWkVm8qKeIZp%2BsZeCkf51%2FDG504bPH2Q%2B6EqNXRzerrQ1aoSH%2BvEfZCxxadodld48ahPTNOGUCB8JrXZBmM5erf9cYfRNNAupFnbZCXWIQY7w5U1GNh99kjxqbyTchUVegCO8pLrHzTK5Twoan9bBsr%2BmKpLcgebjF0emWkdKvxO5qJUvLPIq20BD98UO7z6qFL3CuEgg3QlSs2kryk9MjvY0tv%2BMQNS%2BEE9jmTJweT%2ByoDyfwpOx9PVRFE0bhLSllHp6gDk0FCslJJIMve87JfWBfCFrW1Ux1idH6ttNAXwnQtxmkRk04rW8peNIrk3ODkKyDjHNO%2BqrqIpYRy%2BHY6PPvwhPxLOPpAGH78L%2F%2BRD3rJqWLPurDpw63b6%2Fdh10oz5feozrxrrJ%2BG746NFHR%2B%2Bfc2QFUh2FDj1SNFOm1GGH6iUXGoZ2l6t40xLwBFjTj9C%2FB3fjipAqFsMQPtWEHiC%2FD4y9igcwvKTfyQY6pgFNqyUn6kGHLWLhAI3gcIKmUP90t8gUVetE0NH8qNifnf%2FA94pAWWpr4hyh0WQZjKSd2bjiPKRAQVGe1xw0aehD%2BVlGa%2BZUOPyG28OJn0qlxhlzAbtfvd19igV7rLQ3j4EMFB19LIyWEIs%2BS54z2l6IZr7aks32sROJOEAa1vzhAMIGi9P4O05nOqka7zmb2mG%2Br%2FVcSRVefnqIgboyDNO1gUKPlA8H&X-Amz-Signature=d604e3eb1a946de79f38816d7b1b56b880c2175ead6bb3f79ae8672428d75894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
