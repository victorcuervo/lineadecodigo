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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MUKI6E2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzBJ9B2HcVVwB1q8UHPBN0N%2BdPkvAKT%2Bgg7Nn27TnsVAiEArod2Vy%2BBToeqD7Y3WcBmURjDjGU8RksYDrJZsvyLgisq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMHivdDITWM3ojai0SrcA%2BAQ1qX4zdkV%2F3pB9sH8bHeacpCHwlqDjEWSu3GnRN9V%2Fz%2FGoiuF1FrmwtFXdiWX0hVoSK7Pp7orl46%2Bugr3KlgR0s6Ba7SRPZwevw%2FUfZ6vjxjYB0HBnaI01IWkxv5hsomYD7KpT2LpaAOSAgIBSulnsAWP2cru7sOTZGVhX9%2BE5tIyNTrSMgsZN89Rgl1oP%2Fvohnt%2FhV7iWs6oiwfp3LRxd8%2FG8C%2FgzDq8DIO0UOks1xUAI4tYHfGg9x%2BkGF0x9lBmwuplfx1%2B5Mu%2B3agEE9L8erJOpRydNxZnVowvezoqcDK8YCHTZ2hXDBHAbdA2z%2BWWpmeYAqRPYsrKypNSwZWU40OFV8WKhEvcvTAD%2FaetEzoJDHcEy7ycTswd59p33loRZmhRF%2FIwLBEu4Gl5LrjTFMaSg0flrjYHcD8MQhS34o27Y%2FxBp2YMgDufObgHkmKE6r4i%2FSz%2FBgwma2Xqdk0yDut7IX0XZRSIlf13RiH1NxB4p%2BiBLSsD533dp7ibpsRBSNYFJPmTxVYZ34R29WEPZweQFnBS8GMQzBy9muLX2PYHWUk%2FzJB%2BS4iO67RMS75Zc%2Bd9%2F%2BfZLbBOBbAhN5GTIoqz2hbMaZZQlcPfizKIq4Kx7MvwH%2FfAEc10MM%2Ffh8oGOqUBkZBhAWsQ5duRn21zTvcHIQ2fiCUBfDWrUYY9brhp5IU8vimo9f40V0RJrrCupmTj5I7cb85%2Bfz6Wv759bX%2BvX1wb8CruTFjxD4JklNiH1rpGvS%2FwXdI4F0mBDIcknTfSG9hK%2B3LjFu5PmhvXNRBiwfc1qirEwPGJKQViecNc%2BCLaREaiaI9qqCXCHZ5HdybejkEive41FwK7mq4Ovz5lvREMDNEh&X-Amz-Signature=db825b067b59b68ff41ce0c6ae0c1d89d7129d6530ae20debe262289198b6b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MUKI6E2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzBJ9B2HcVVwB1q8UHPBN0N%2BdPkvAKT%2Bgg7Nn27TnsVAiEArod2Vy%2BBToeqD7Y3WcBmURjDjGU8RksYDrJZsvyLgisq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMHivdDITWM3ojai0SrcA%2BAQ1qX4zdkV%2F3pB9sH8bHeacpCHwlqDjEWSu3GnRN9V%2Fz%2FGoiuF1FrmwtFXdiWX0hVoSK7Pp7orl46%2Bugr3KlgR0s6Ba7SRPZwevw%2FUfZ6vjxjYB0HBnaI01IWkxv5hsomYD7KpT2LpaAOSAgIBSulnsAWP2cru7sOTZGVhX9%2BE5tIyNTrSMgsZN89Rgl1oP%2Fvohnt%2FhV7iWs6oiwfp3LRxd8%2FG8C%2FgzDq8DIO0UOks1xUAI4tYHfGg9x%2BkGF0x9lBmwuplfx1%2B5Mu%2B3agEE9L8erJOpRydNxZnVowvezoqcDK8YCHTZ2hXDBHAbdA2z%2BWWpmeYAqRPYsrKypNSwZWU40OFV8WKhEvcvTAD%2FaetEzoJDHcEy7ycTswd59p33loRZmhRF%2FIwLBEu4Gl5LrjTFMaSg0flrjYHcD8MQhS34o27Y%2FxBp2YMgDufObgHkmKE6r4i%2FSz%2FBgwma2Xqdk0yDut7IX0XZRSIlf13RiH1NxB4p%2BiBLSsD533dp7ibpsRBSNYFJPmTxVYZ34R29WEPZweQFnBS8GMQzBy9muLX2PYHWUk%2FzJB%2BS4iO67RMS75Zc%2Bd9%2F%2BfZLbBOBbAhN5GTIoqz2hbMaZZQlcPfizKIq4Kx7MvwH%2FfAEc10MM%2Ffh8oGOqUBkZBhAWsQ5duRn21zTvcHIQ2fiCUBfDWrUYY9brhp5IU8vimo9f40V0RJrrCupmTj5I7cb85%2Bfz6Wv759bX%2BvX1wb8CruTFjxD4JklNiH1rpGvS%2FwXdI4F0mBDIcknTfSG9hK%2B3LjFu5PmhvXNRBiwfc1qirEwPGJKQViecNc%2BCLaREaiaI9qqCXCHZ5HdybejkEive41FwK7mq4Ovz5lvREMDNEh&X-Amz-Signature=9da934525b6ac24878c739855238d5d9f26442050c85a204f0c83620fdb13330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
