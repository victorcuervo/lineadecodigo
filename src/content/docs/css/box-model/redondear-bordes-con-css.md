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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVWCSS5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2H2whwL4wWElSrnAVACP61soZDTGGSgYX3%2BC4xbyxGAiEA3qyyvdD%2FrHgN3fLS17BotYMi9HrWfpo5wAiTk4kgMSYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB8sN7gskTfy6FecCSrcA5y77xP2fuXQnK2S1a%2BKuAVnVFNWwD26QOjNP11EUK8Gdv5MlKz0bttV0kPHdXJfONBoumj1xd50m9xZdmAjXzEFhuFuJTbPqpezaH6eOx%2Bqp450R8kyW%2BZxtraBaG4NNMxN%2BJ2gEVH3gmg9BIyvE2EDCJFImCPVLd1genYb1g7LQBt2olPcAaF4W0Diavphj5HPIzWQC689P0amqXZdYctlDHdwpytDzlxbk9iMUgUXGf1U6M%2FE1NFn6S1CHVgDPVsLpd2vLZnJG4UAswZM9sgcWqSqyJJCUlanEX8R5nG0g%2FiEAPJyiyrhio8DVZ6xlozTrMuQfeWDkSVH3Sd9K46CyHDX7IdFvgt%2FMikHQeGooc4q%2BHgxlL9OpvHNOCEJ2MteASYoMoQCmm%2BLJ67md9eD3MjkX%2BWmDZdpBkydL9fTlcV4FJSwXynGHEfSXEFChvmVGGOLBCZd1sy%2FQSmd0vtIz67325n8job8indQHWL6J13vuiB7nBC8vbnNIt3qaeJbbiXaPm1zWclTHmbOA%2FFfuAD9c3ocJMqQTN6WxnP%2BlU%2FDidq3VTLhZeac3ljPoERBW2caoKjb%2F42XbUTaa2a6Pcmry934xTfaL1ZjVrx2eUcqJP3n4c816nB%2BMLGPisoGOqUBiIGo6fe9KzlEhA%2BYGzI5ws57CiSB7Mk14lbXszCMOKHN1WjdhE2ERGhEHXpBjhNi%2FF9ASrRg2PQB%2BkSb8AjfgwFDE0d9YDviAECImknYVrCoCYqVN1xBUeZPI5zDzry%2FSpS%2BmaM8zN4EOKX%2FjPpMMhk6q69AClBo9vB8ufn%2Fskk5Rw5CeP%2FEhQTYfwkadNNoNsSEUlLJgY8Celot1gtMYmyaeaLX&X-Amz-Signature=ca8127cce799d89b69000b159837f2a3210a04e13e5c0ea863f84ae5978c126f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVWCSS5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2H2whwL4wWElSrnAVACP61soZDTGGSgYX3%2BC4xbyxGAiEA3qyyvdD%2FrHgN3fLS17BotYMi9HrWfpo5wAiTk4kgMSYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB8sN7gskTfy6FecCSrcA5y77xP2fuXQnK2S1a%2BKuAVnVFNWwD26QOjNP11EUK8Gdv5MlKz0bttV0kPHdXJfONBoumj1xd50m9xZdmAjXzEFhuFuJTbPqpezaH6eOx%2Bqp450R8kyW%2BZxtraBaG4NNMxN%2BJ2gEVH3gmg9BIyvE2EDCJFImCPVLd1genYb1g7LQBt2olPcAaF4W0Diavphj5HPIzWQC689P0amqXZdYctlDHdwpytDzlxbk9iMUgUXGf1U6M%2FE1NFn6S1CHVgDPVsLpd2vLZnJG4UAswZM9sgcWqSqyJJCUlanEX8R5nG0g%2FiEAPJyiyrhio8DVZ6xlozTrMuQfeWDkSVH3Sd9K46CyHDX7IdFvgt%2FMikHQeGooc4q%2BHgxlL9OpvHNOCEJ2MteASYoMoQCmm%2BLJ67md9eD3MjkX%2BWmDZdpBkydL9fTlcV4FJSwXynGHEfSXEFChvmVGGOLBCZd1sy%2FQSmd0vtIz67325n8job8indQHWL6J13vuiB7nBC8vbnNIt3qaeJbbiXaPm1zWclTHmbOA%2FFfuAD9c3ocJMqQTN6WxnP%2BlU%2FDidq3VTLhZeac3ljPoERBW2caoKjb%2F42XbUTaa2a6Pcmry934xTfaL1ZjVrx2eUcqJP3n4c816nB%2BMLGPisoGOqUBiIGo6fe9KzlEhA%2BYGzI5ws57CiSB7Mk14lbXszCMOKHN1WjdhE2ERGhEHXpBjhNi%2FF9ASrRg2PQB%2BkSb8AjfgwFDE0d9YDviAECImknYVrCoCYqVN1xBUeZPI5zDzry%2FSpS%2BmaM8zN4EOKX%2FjPpMMhk6q69AClBo9vB8ufn%2Fskk5Rw5CeP%2FEhQTYfwkadNNoNsSEUlLJgY8Celot1gtMYmyaeaLX&X-Amz-Signature=460711d9c345baba48a81332b2c62bf4f516aa2c3ed3fd60fc7486bed6ddf828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
