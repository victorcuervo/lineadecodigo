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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466672AWHAD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9C5lq0olkUIXQ59Goa%2BIldO6lVopHOmWSX%2BBuz5FkwgIgMqQOJ7UngZiot7uouTj8daJHPqlkd5zk4juWovKzkcoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDqavFdlfr8%2FutpGjyrcA3g6f5VRyJAK6pHn756r4TiCYgsRmWGsx5bSC4%2BXEBggXILaR1hS2K6UTJIj9qmQl0L2AITRceuHcwywI35mNSRIWWab2ror2IsYj4zDEKc76OYwJsTzDAbZWv%2FutAogOr6vRiRLE%2FO2Mh7I%2BZtCeRbCbDGb28EORFiDtYxevpanejQlNHK0B%2BGwK6E%2B4cpYby1oxrMUVbcLG%2BDt25b2d0D9Um0PSdsBOnr4lqw7b7uCxJuZ77ZM4QeWoRGh8qpOHNS%2Bo4dTDnjApLsrtjcHjpEgohK4PEXNxId%2BfUPBjp1JXfstzIxLum%2BaUSn3WQLF4vyDKEYbb%2FjuZkpih09WhB7Eg%2BRhy6acTGisteaJ7DvwHv3RxUwy1mDnjIRDDbb4LoJssOCdObzINXewJk1Y2ZUIKNlwHunf1%2B48ymNp5d7lJfIhy9a9ESOCieUdB6HwF0R13%2Fj35anAI6KZRbBQePWXxcVEqnIcs9jOqEvsdhSW0FEE74ec7IYE4xvdeu9hCp5uXaehqQsFoll3UySXzNH9JXIbOjCn61qA6n4ZjPsS1UTA8qZbX1Ygu6QIDEwZ7%2BjQ3p0HUNPKHthJX9ghe83qLtZ75lSwndHOhKt3ht98%2Bz%2BEEvs6BBVp8sboMJPSicoGOqUBnltoLb0voWFBuwm3WrUJFMqxPtqgEwx2O9az5mbvlwJUsJAMXnWWdQfbga4mAEI8aRSn6Of%2BI8lv6dpnaBvMp%2Bv3VB6esFno6P0je2cgfhnvIiZUfF7Zc2zKkDJaL8wTAVCqoaGE3V1mxmlGKfdStIL3puPaeJzJrhCAiMVWtxsv%2FD07bA39g2vKUbUtlpD92C7Ec0OQN620SbTpQcCEdl10aw%2Fi&X-Amz-Signature=c056b242515b7cb8d668a8fb0855c699b622024ba8777907eee247550292d454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466672AWHAD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9C5lq0olkUIXQ59Goa%2BIldO6lVopHOmWSX%2BBuz5FkwgIgMqQOJ7UngZiot7uouTj8daJHPqlkd5zk4juWovKzkcoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDqavFdlfr8%2FutpGjyrcA3g6f5VRyJAK6pHn756r4TiCYgsRmWGsx5bSC4%2BXEBggXILaR1hS2K6UTJIj9qmQl0L2AITRceuHcwywI35mNSRIWWab2ror2IsYj4zDEKc76OYwJsTzDAbZWv%2FutAogOr6vRiRLE%2FO2Mh7I%2BZtCeRbCbDGb28EORFiDtYxevpanejQlNHK0B%2BGwK6E%2B4cpYby1oxrMUVbcLG%2BDt25b2d0D9Um0PSdsBOnr4lqw7b7uCxJuZ77ZM4QeWoRGh8qpOHNS%2Bo4dTDnjApLsrtjcHjpEgohK4PEXNxId%2BfUPBjp1JXfstzIxLum%2BaUSn3WQLF4vyDKEYbb%2FjuZkpih09WhB7Eg%2BRhy6acTGisteaJ7DvwHv3RxUwy1mDnjIRDDbb4LoJssOCdObzINXewJk1Y2ZUIKNlwHunf1%2B48ymNp5d7lJfIhy9a9ESOCieUdB6HwF0R13%2Fj35anAI6KZRbBQePWXxcVEqnIcs9jOqEvsdhSW0FEE74ec7IYE4xvdeu9hCp5uXaehqQsFoll3UySXzNH9JXIbOjCn61qA6n4ZjPsS1UTA8qZbX1Ygu6QIDEwZ7%2BjQ3p0HUNPKHthJX9ghe83qLtZ75lSwndHOhKt3ht98%2Bz%2BEEvs6BBVp8sboMJPSicoGOqUBnltoLb0voWFBuwm3WrUJFMqxPtqgEwx2O9az5mbvlwJUsJAMXnWWdQfbga4mAEI8aRSn6Of%2BI8lv6dpnaBvMp%2Bv3VB6esFno6P0je2cgfhnvIiZUfF7Zc2zKkDJaL8wTAVCqoaGE3V1mxmlGKfdStIL3puPaeJzJrhCAiMVWtxsv%2FD07bA39g2vKUbUtlpD92C7Ec0OQN620SbTpQcCEdl10aw%2Fi&X-Amz-Signature=c1a309def181bbb848407dd91461f16eb7b3f51c4b7b1028eab2fc39a1524b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
