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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UIM3EP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx2d0W01aXKMnnZwS3bD81bVlUNJdGfPo%2FqH3BEURJ7QIgFUy5Q60kOUWXb76pSGoU1qUkAH3Y9n0yv0%2B2hP4PjjcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCcgt83VDrjsIpTbCrcA3BDY%2BMTe6rFWBeSKv9%2BGr2KA7MdPF5FaMR7KCKLrCJONg7CHhwFE2ooL1lWZeQPRjs5vl7WVsLKn2AC0BjOtHAslfYeS7%2BscSodqu7Yy44XzbGWX4q%2FKaaAaVl47fR%2BIOpSnAp2fq2cDBnEdmvlNbpd2n98QhhbU8GP%2BcyYcppdvKHtYQff4dTVfR%2BEYYMEJLbHBYNExmzj0XckLSM%2F7e9rKGEhf6EEsdop8n4FFGqSI6yfmglyWEs9aR2N5EpP27UQWfdLJeBZx4rssnifs9LnkdsHfNC3wQS6tJoaj4triyz3NqzejC2OgNCbIaBSJWImzHCnGXK6k%2BatVTN9U8bdSpVi0CQT9yZNrEHNNnc7wqk2VgukBkY1iqRMeXogNOoSTxtVI61FbyoFtbibQDFyW8NQIuG%2ByMtALLTvTsdIMuxSKOBHdOjEhiAuGVqsplIGoUhM8y5bPvgYxOjPF%2BlGZtMy%2B5e4RFkj42VD4osqTkQLv8jUcPJ05zhiZnZr%2FZ0wjoEsxaI%2FIk5x9d0kl%2Bq2y6pbWacjJOH%2FLYiNO7uj78M8CURF%2BLM6mGhQZVY7pKrhOqxVPjVfRHVGlyNvViiw9ZM5bOg5u4ZLk1BOxg0wo8MQx6ylgMwt%2FkiDMMiZ1ckGOqUBivWKasbhRoebNxbndiZ8i8WwoA9CbMwRxDl%2FgWM4rNHVaIARjDBKDukowHz6qCANC%2B7h7Fyx81URD2pbnN3pPllHHF60TBf9zrq2hazUvOibTIRbH9C1lsDq7XkhOolBiLApiNAaySMxI9K9yzsHad1P1ga6pZBqOsokWdvvyV%2BVzeL7dExkWBRzBdaQhvwHLXlR3RS2x3aTEHmM45u0XrnZ8mve&X-Amz-Signature=82e42531e61c5290985e57659359c6ba4fa077edc0b08ccc359642d6b45c591e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UIM3EP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx2d0W01aXKMnnZwS3bD81bVlUNJdGfPo%2FqH3BEURJ7QIgFUy5Q60kOUWXb76pSGoU1qUkAH3Y9n0yv0%2B2hP4PjjcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCcgt83VDrjsIpTbCrcA3BDY%2BMTe6rFWBeSKv9%2BGr2KA7MdPF5FaMR7KCKLrCJONg7CHhwFE2ooL1lWZeQPRjs5vl7WVsLKn2AC0BjOtHAslfYeS7%2BscSodqu7Yy44XzbGWX4q%2FKaaAaVl47fR%2BIOpSnAp2fq2cDBnEdmvlNbpd2n98QhhbU8GP%2BcyYcppdvKHtYQff4dTVfR%2BEYYMEJLbHBYNExmzj0XckLSM%2F7e9rKGEhf6EEsdop8n4FFGqSI6yfmglyWEs9aR2N5EpP27UQWfdLJeBZx4rssnifs9LnkdsHfNC3wQS6tJoaj4triyz3NqzejC2OgNCbIaBSJWImzHCnGXK6k%2BatVTN9U8bdSpVi0CQT9yZNrEHNNnc7wqk2VgukBkY1iqRMeXogNOoSTxtVI61FbyoFtbibQDFyW8NQIuG%2ByMtALLTvTsdIMuxSKOBHdOjEhiAuGVqsplIGoUhM8y5bPvgYxOjPF%2BlGZtMy%2B5e4RFkj42VD4osqTkQLv8jUcPJ05zhiZnZr%2FZ0wjoEsxaI%2FIk5x9d0kl%2Bq2y6pbWacjJOH%2FLYiNO7uj78M8CURF%2BLM6mGhQZVY7pKrhOqxVPjVfRHVGlyNvViiw9ZM5bOg5u4ZLk1BOxg0wo8MQx6ylgMwt%2FkiDMMiZ1ckGOqUBivWKasbhRoebNxbndiZ8i8WwoA9CbMwRxDl%2FgWM4rNHVaIARjDBKDukowHz6qCANC%2B7h7Fyx81URD2pbnN3pPllHHF60TBf9zrq2hazUvOibTIRbH9C1lsDq7XkhOolBiLApiNAaySMxI9K9yzsHad1P1ga6pZBqOsokWdvvyV%2BVzeL7dExkWBRzBdaQhvwHLXlR3RS2x3aTEHmM45u0XrnZ8mve&X-Amz-Signature=3fea2dffbbd2ba40c8f081aff1b7624064c540b845c9d5c6b8ad72b3d82b2c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
