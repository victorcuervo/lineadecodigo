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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277PKHJD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdZ1DdMTb2jEPg5Q%2FQe8pfDTod%2BSw%2BON6QtE0rp327qAiEAzD4Ep9TIzGEgbAaXv5SUJtPGwY9Y3Ez%2BJAnMmGdmrAMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FPWSqsNU10RRn18yrcA6IYU%2BYq7xO9PXVpQ217Qufus7w42RJW3CDDtZjl11Sf%2Bwae4WHCSSv0pJ0NHamCFaOUQdebpXXioH2Fvk2N681loD%2BRO4B3wYgcifT%2F%2FfXnifmnMAbe3WEaoBPPX1xSCU3TZ1QdypT8sqCb5Ox8N9%2FTCdx9OGjWq9qbor2OsqgHueMP1CnIC2sjvgV%2B6XRN4m6aaZ6m5AfCZ05BlQSqwDmf%2FT4iZvcZ6QCwr%2FPVj5SC5ADhc%2Fz70yvrh56C9MhirinOdq%2FsCl2%2F90Xs0PMpmFkuibQJGIEqJYM9hXlL8PbhOYrUZ8vQ5GylAmOxvRjP7wU0BzzRUcpZkzWAlx2PhCi%2Bn9%2Ftmx4QIi%2FIRRmVEaz4qIRI%2BNAhbMiZNHlMYLwjh78aoVe%2B5ts%2FSXonchte8XLe1KLqBI3y%2BdESHQGddvbZxlb5mMdU1GrJJcsimIBHzQOGXA%2FZ1Dl3xW7G9sYmoIqz1YcI9qw3rEm1CYqf0GrIUJEaZX1g4XQ6PlVRtq6yghYlFA7QI4b9MIuVBwIQ5SbBaebFDqnbYfs9vbod%2BPRXjc6Dto2HASEUfiosindINl%2FC6akzLjoKhsNbsWwFIbCNr1P4nfoVG0h6Ikhi5XnZVZ%2BfNNHE4I%2BmIMRSMP6V1MkGOqUBPSmqA95Mg2kIniEsjxeUzE0jjw%2Blf8ZUu11pqgxf2pSS9M2RIzF4TfvaugUT%2BYTqp7Y8zWViE%2Fa80lxgFwSHvv5h%2B2aMax94%2F%2FteV%2BtYz5XfyLh9I%2FFaWgOm55tUYO7ehBoNQbCD6KQE7NB8O3gF%2BFF%2F4n1%2FuRI4o9V%2B%2FT%2BQ9Ud7Y5W9A49wG6ypGopwJBc6%2BX5NLF8g4924qxKk3rsPOaQXafUP&X-Amz-Signature=8d1d0292455984a6a09d709fc04dd02bf0f04fdaba489cd8ec43ecc6ff1dd58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277PKHJD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdZ1DdMTb2jEPg5Q%2FQe8pfDTod%2BSw%2BON6QtE0rp327qAiEAzD4Ep9TIzGEgbAaXv5SUJtPGwY9Y3Ez%2BJAnMmGdmrAMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FPWSqsNU10RRn18yrcA6IYU%2BYq7xO9PXVpQ217Qufus7w42RJW3CDDtZjl11Sf%2Bwae4WHCSSv0pJ0NHamCFaOUQdebpXXioH2Fvk2N681loD%2BRO4B3wYgcifT%2F%2FfXnifmnMAbe3WEaoBPPX1xSCU3TZ1QdypT8sqCb5Ox8N9%2FTCdx9OGjWq9qbor2OsqgHueMP1CnIC2sjvgV%2B6XRN4m6aaZ6m5AfCZ05BlQSqwDmf%2FT4iZvcZ6QCwr%2FPVj5SC5ADhc%2Fz70yvrh56C9MhirinOdq%2FsCl2%2F90Xs0PMpmFkuibQJGIEqJYM9hXlL8PbhOYrUZ8vQ5GylAmOxvRjP7wU0BzzRUcpZkzWAlx2PhCi%2Bn9%2Ftmx4QIi%2FIRRmVEaz4qIRI%2BNAhbMiZNHlMYLwjh78aoVe%2B5ts%2FSXonchte8XLe1KLqBI3y%2BdESHQGddvbZxlb5mMdU1GrJJcsimIBHzQOGXA%2FZ1Dl3xW7G9sYmoIqz1YcI9qw3rEm1CYqf0GrIUJEaZX1g4XQ6PlVRtq6yghYlFA7QI4b9MIuVBwIQ5SbBaebFDqnbYfs9vbod%2BPRXjc6Dto2HASEUfiosindINl%2FC6akzLjoKhsNbsWwFIbCNr1P4nfoVG0h6Ikhi5XnZVZ%2BfNNHE4I%2BmIMRSMP6V1MkGOqUBPSmqA95Mg2kIniEsjxeUzE0jjw%2Blf8ZUu11pqgxf2pSS9M2RIzF4TfvaugUT%2BYTqp7Y8zWViE%2Fa80lxgFwSHvv5h%2B2aMax94%2F%2FteV%2BtYz5XfyLh9I%2FFaWgOm55tUYO7ehBoNQbCD6KQE7NB8O3gF%2BFF%2F4n1%2FuRI4o9V%2B%2FT%2BQ9Ud7Y5W9A49wG6ypGopwJBc6%2BX5NLF8g4924qxKk3rsPOaQXafUP&X-Amz-Signature=d117bdc3a3ce553322541360120ebdc3b88192d17edc21d9e1b06a5138b90604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
