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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBOMML6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDu%2FD%2FS%2B4H7UAn2TDo8rPpL9XXLS74HYnrtt3ZYInOncAIgMyAywjweQrRFqR%2F%2FhKrGfFQ1UiT1b0Bar6khxg0Nm2Qq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFInqpf5skhr70nUuSrcA1r8vTcwRwW0MnNZbnYolDHWqITOOsR40Ty18PjSsGt2ZmYQKTKP73rFX9QjDSaIvocvch7L7hhlxH3eoIRZyfQCgZ5etvn43K2kBL94JKo7%2BDGR0wn4ouF1FWlngBQopx90VnJ99fhH2WksDj6sB5kziIOZrqZYsh2HC4OYAk%2B3HxYw52iOX4UXD%2FOB6msCWU1YAvNQSHT%2B%2FZ3TIcenatBPX9vYzSR3k2%2BbxPWHO%2FMMQGOXa%2FKq%2BQlN7lExEZuhoqH0bzFHKjP1JcZes9dNkdka7CS4C5OoQAvV4CU%2BQR5pSqBmMJtKj8i%2FzfCo163Hk%2BwY%2FPqYzpOEvKvTVAS1T6j2lVL68QOLlxf3Ci1V6V38CBPpS99F7AXqfzPPLaz4tZe3nybvgZoNUYJyTdNB0O9wml7Upzj0ADWop3j41%2FBoqme%2F79KwXdtwxweDzipwocclphYV%2F%2BIhSTkgdvbFohE9BOonmYG9HpK8W4BXOc7%2FhRwIy6Yx%2F4nYh%2FyRG9brPR4KUopC2T5R6jttmlyGoaMINPbtEMqjyd%2FBsfuO1JBBLdsyCDAgdJqOOJOJYec5LQEGylVWfQXbGG7HjIkK5VDAScICJoE3teuyyWIdeEsWqOini%2BXxawZb2INnMP6Uw8kGOqUBps97E%2FcVE%2B9rlMv0eUsg55mpOgt1FORUTgzzUvoTdWgU2pOIj1xN1XGKzcYPTKBrMvMkAlFEECE9EWW%2B%2F2pbaIq%2FlHlNo82h9n9y13Knj34B%2F7GiRfvSobKmDlXqs98NoFMqc%2FocMC6gXyslEn76DhBH8A4S0VVsWZEEBHXF7LlrF512TmGYgZckv1sY%2F6u7f7x68IJ46P1qz2hbClv4JVnQGw%2FL&X-Amz-Signature=52b11bcb0e31813d8cad04e83e0ea278afe5a3d6a8279632544cbbe6cced3185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBOMML6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDu%2FD%2FS%2B4H7UAn2TDo8rPpL9XXLS74HYnrtt3ZYInOncAIgMyAywjweQrRFqR%2F%2FhKrGfFQ1UiT1b0Bar6khxg0Nm2Qq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFInqpf5skhr70nUuSrcA1r8vTcwRwW0MnNZbnYolDHWqITOOsR40Ty18PjSsGt2ZmYQKTKP73rFX9QjDSaIvocvch7L7hhlxH3eoIRZyfQCgZ5etvn43K2kBL94JKo7%2BDGR0wn4ouF1FWlngBQopx90VnJ99fhH2WksDj6sB5kziIOZrqZYsh2HC4OYAk%2B3HxYw52iOX4UXD%2FOB6msCWU1YAvNQSHT%2B%2FZ3TIcenatBPX9vYzSR3k2%2BbxPWHO%2FMMQGOXa%2FKq%2BQlN7lExEZuhoqH0bzFHKjP1JcZes9dNkdka7CS4C5OoQAvV4CU%2BQR5pSqBmMJtKj8i%2FzfCo163Hk%2BwY%2FPqYzpOEvKvTVAS1T6j2lVL68QOLlxf3Ci1V6V38CBPpS99F7AXqfzPPLaz4tZe3nybvgZoNUYJyTdNB0O9wml7Upzj0ADWop3j41%2FBoqme%2F79KwXdtwxweDzipwocclphYV%2F%2BIhSTkgdvbFohE9BOonmYG9HpK8W4BXOc7%2FhRwIy6Yx%2F4nYh%2FyRG9brPR4KUopC2T5R6jttmlyGoaMINPbtEMqjyd%2FBsfuO1JBBLdsyCDAgdJqOOJOJYec5LQEGylVWfQXbGG7HjIkK5VDAScICJoE3teuyyWIdeEsWqOini%2BXxawZb2INnMP6Uw8kGOqUBps97E%2FcVE%2B9rlMv0eUsg55mpOgt1FORUTgzzUvoTdWgU2pOIj1xN1XGKzcYPTKBrMvMkAlFEECE9EWW%2B%2F2pbaIq%2FlHlNo82h9n9y13Knj34B%2F7GiRfvSobKmDlXqs98NoFMqc%2FocMC6gXyslEn76DhBH8A4S0VVsWZEEBHXF7LlrF512TmGYgZckv1sY%2F6u7f7x68IJ46P1qz2hbClv4JVnQGw%2FL&X-Amz-Signature=3e92f822a2da62432906d355bb1be425abcc33d3008439ae2ba5604480da8606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
