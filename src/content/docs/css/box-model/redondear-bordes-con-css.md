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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEMVN4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu%2Bse4OoHW5Jc0a7YKozYh%2F1Mlg9LV3x6sC4GpqrEJnAiEA3Fcc96XygIlq7xiVc5w5BlxK4UKtzEjUVqFGKUmkzpQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlaRFepGeZbQ0%2Bn3yrcA%2F9SjH5jSw%2BVC7Za49YAxCyTVMIkizBd%2BePWRhMr0CjYoLaLANrnX0cX%2BGPWtykLvMyi9x%2FnR5%2BCua%2BaUM9zSEevPNhGv%2FdneLQ1ckMEIPAL1FMxhiiT0PoTrTm8wqcZ4EoqUlxGD0m1cMuGl%2BroN%2BXAKzKj32OJUOuPVBT5qp70QgdPapVaB6q7SgWsacTIWrjtlsU6QnMT1WC6GhoZzdp8TouQcII54PuR%2BKugLC5FaRbEOyBTOPPEEMh%2BACK7MWBBugZBMIofoqSsd7YOqZhRBG8JfpzFU0mqkGZ4WKJhSBMEIbpvSp4Y23TMiutVct%2FFHlhwe7izL2fI9v5beuvPdmFKyFqC6BHGrARgvnj97VZ21igi%2FOqZCS6pCSMo2BbO2FhjcefYlD4%2F000n2U27oSYPjE223c27Md0gNewrKf5VvR6CZ%2BsPyv%2BygUM6dVAvOOs4%2FgrOzDevuOmAVzODtVsRVuUUX0Pvxtzz%2BcAjVTNcyz5iDB%2Fl%2B4xJXcEElMQEq1olrmbu%2BtRjvQ7qzW00MlZxzWxxNUbR%2Bg%2B5IQmb3rtognHbz6Qp6Hq46xYCfqNTvioeozTwcNy4qoRDl3i4Hm82kvdE77WW8vhrm3oULY%2BoBtqkBLZShIJnMPSei8oGOqUBlehbJKDCj7zHHTp5aEd0FIf0zPsXYybWHhLxtLmi2%2BmzXjzewR2qbCrwpTZFIFOEGiZVaVCxzlx2hewP1fJpG7Yc4%2FZpjQI9%2FOmiczs%2F96rylYcGtd5LrXzsWSA3AxGtQTkXGK02Jh3nhV%2FOopFSWCnf4OTPkopLP1j1iBfPn0wVbkYrbEF1G54%2FZ%2FEIGyE74idYy3vfOd4xMYkruWAHtHePfpmz&X-Amz-Signature=2e7104672db46b00f467f8af22e0e5c6f069510fb37cc71a1c7d50abb2868b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEMVN4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu%2Bse4OoHW5Jc0a7YKozYh%2F1Mlg9LV3x6sC4GpqrEJnAiEA3Fcc96XygIlq7xiVc5w5BlxK4UKtzEjUVqFGKUmkzpQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlaRFepGeZbQ0%2Bn3yrcA%2F9SjH5jSw%2BVC7Za49YAxCyTVMIkizBd%2BePWRhMr0CjYoLaLANrnX0cX%2BGPWtykLvMyi9x%2FnR5%2BCua%2BaUM9zSEevPNhGv%2FdneLQ1ckMEIPAL1FMxhiiT0PoTrTm8wqcZ4EoqUlxGD0m1cMuGl%2BroN%2BXAKzKj32OJUOuPVBT5qp70QgdPapVaB6q7SgWsacTIWrjtlsU6QnMT1WC6GhoZzdp8TouQcII54PuR%2BKugLC5FaRbEOyBTOPPEEMh%2BACK7MWBBugZBMIofoqSsd7YOqZhRBG8JfpzFU0mqkGZ4WKJhSBMEIbpvSp4Y23TMiutVct%2FFHlhwe7izL2fI9v5beuvPdmFKyFqC6BHGrARgvnj97VZ21igi%2FOqZCS6pCSMo2BbO2FhjcefYlD4%2F000n2U27oSYPjE223c27Md0gNewrKf5VvR6CZ%2BsPyv%2BygUM6dVAvOOs4%2FgrOzDevuOmAVzODtVsRVuUUX0Pvxtzz%2BcAjVTNcyz5iDB%2Fl%2B4xJXcEElMQEq1olrmbu%2BtRjvQ7qzW00MlZxzWxxNUbR%2Bg%2B5IQmb3rtognHbz6Qp6Hq46xYCfqNTvioeozTwcNy4qoRDl3i4Hm82kvdE77WW8vhrm3oULY%2BoBtqkBLZShIJnMPSei8oGOqUBlehbJKDCj7zHHTp5aEd0FIf0zPsXYybWHhLxtLmi2%2BmzXjzewR2qbCrwpTZFIFOEGiZVaVCxzlx2hewP1fJpG7Yc4%2FZpjQI9%2FOmiczs%2F96rylYcGtd5LrXzsWSA3AxGtQTkXGK02Jh3nhV%2FOopFSWCnf4OTPkopLP1j1iBfPn0wVbkYrbEF1G54%2FZ%2FEIGyE74idYy3vfOd4xMYkruWAHtHePfpmz&X-Amz-Signature=c175013ec6ca469eb139e9c49a7fdf040c29dcb4533f0fbfed478b0f7b2580e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
