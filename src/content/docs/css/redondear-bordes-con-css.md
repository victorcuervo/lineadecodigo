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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAEGRW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDIf6%2FH2xqcQGjhxtbA7jBQrgS5lW20B6T%2BMt%2FZeAlsIwIgOZgLTONojHaBh5XK6grT01EVqhwczrAFPoRwUSzCMWsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEHF%2FpgnUhVc5WKCoyrcAzTVCgteBEzC7Tb7G%2B8SLWNOoquj72SZ3fzPF9i6inMNrSzwJ5rfCHtuyneS5B5SMJt2zejFFxfPPIKoWSopaufZG0wxrsM3BsAkx2%2BMwTcS3Gnjlf5XozHitiYba6mBd76VuG%2Fx%2FYXEFLHUK%2BOp%2Bmf0cvs7Iwwt4QBVrsVvjCmhlA%2FShsg4sYnguBhI8%2FOWwHqeqnjVK2LCbrXrJudm5KcZU8qDfTLast60MLy0Om9rUK3bb5XYKolZBdtwzg5HfmPvMeBvxiZ3KWUlfdR%2F4pyJo%2BSs9fqeezwt8gmDIybkaPtqn5Y5bdUDjoU4%2BLIIsP%2Fe1fj467yc%2FEh1uSNSQ1lxj80g7EHl5B6E4a%2F9WevzLqZqVBMxoVor%2B1oxJSv5bVtGGDE7yP0tZFBF7V0cGWjj%2BjKa7tYYZ6lyk8tJ2wlWSOqDMcA5%2BmwBI5JCEqIw0aY7M%2B5laDVK9NHJsN8m4lG4FL2m5jgn0xMVktQHmeFi25ks8rYQeMILIfJlYpu0EqLtd41IUmj80u%2BZgHrBy6UaV2SrKcitcThxvcsp2lfOpAFinoxM3JaU63O4oK6iYmX2zFMQuLEeHTkwbIOQh8rThbOCGKOXX9g3yC4VyvGtpSHrxyBAsHBrjk9oMMTmxckGOqUBheiTxeX%2FASSSqfdoyhyOdaCJ6qLeyBbM88MIyjCTrqKGPqc3lVK7cN8Nm%2Bwo2yW%2Bp7LBCrNyLlfYdrVQqMg00IO1atKMH%2B8eMrWhpma5pFpmBIEPl1R6BP3u%2BhZYIz1Bk1Cl7O%2FkBSWSMGNWJ%2FyHr9qmuuTlPImlG%2BZXO2rHSBzmbncN%2Fo%2BbeCY5Eu2zgSp15BnUCy%2Fj6V3l3DM4QP785ywlJpFw&X-Amz-Signature=ccf7e3b99df88d1abbf19b6452b336da1b1fc574eec6b433631a888d5cfbcbd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAEGRW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDIf6%2FH2xqcQGjhxtbA7jBQrgS5lW20B6T%2BMt%2FZeAlsIwIgOZgLTONojHaBh5XK6grT01EVqhwczrAFPoRwUSzCMWsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEHF%2FpgnUhVc5WKCoyrcAzTVCgteBEzC7Tb7G%2B8SLWNOoquj72SZ3fzPF9i6inMNrSzwJ5rfCHtuyneS5B5SMJt2zejFFxfPPIKoWSopaufZG0wxrsM3BsAkx2%2BMwTcS3Gnjlf5XozHitiYba6mBd76VuG%2Fx%2FYXEFLHUK%2BOp%2Bmf0cvs7Iwwt4QBVrsVvjCmhlA%2FShsg4sYnguBhI8%2FOWwHqeqnjVK2LCbrXrJudm5KcZU8qDfTLast60MLy0Om9rUK3bb5XYKolZBdtwzg5HfmPvMeBvxiZ3KWUlfdR%2F4pyJo%2BSs9fqeezwt8gmDIybkaPtqn5Y5bdUDjoU4%2BLIIsP%2Fe1fj467yc%2FEh1uSNSQ1lxj80g7EHl5B6E4a%2F9WevzLqZqVBMxoVor%2B1oxJSv5bVtGGDE7yP0tZFBF7V0cGWjj%2BjKa7tYYZ6lyk8tJ2wlWSOqDMcA5%2BmwBI5JCEqIw0aY7M%2B5laDVK9NHJsN8m4lG4FL2m5jgn0xMVktQHmeFi25ks8rYQeMILIfJlYpu0EqLtd41IUmj80u%2BZgHrBy6UaV2SrKcitcThxvcsp2lfOpAFinoxM3JaU63O4oK6iYmX2zFMQuLEeHTkwbIOQh8rThbOCGKOXX9g3yC4VyvGtpSHrxyBAsHBrjk9oMMTmxckGOqUBheiTxeX%2FASSSqfdoyhyOdaCJ6qLeyBbM88MIyjCTrqKGPqc3lVK7cN8Nm%2Bwo2yW%2Bp7LBCrNyLlfYdrVQqMg00IO1atKMH%2B8eMrWhpma5pFpmBIEPl1R6BP3u%2BhZYIz1Bk1Cl7O%2FkBSWSMGNWJ%2FyHr9qmuuTlPImlG%2BZXO2rHSBzmbncN%2Fo%2BbeCY5Eu2zgSp15BnUCy%2Fj6V3l3DM4QP785ywlJpFw&X-Amz-Signature=6da164a880cd976e4a9b4b46bc53673a50d5a6c62e5015c5dd3b5212e49c6cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
