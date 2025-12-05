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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6M4QJAZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2G2I98nigznF%2BQ3YMXGw8oiQpTa9FyttAaD8Nr8EIxQIgdJp%2FnMQLM8KYrxpwl89RXs8VnDx1NV2ycP19BIKRZ5wq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFRAGg3mSWhv2lBL%2ByrcA85xKWm0gtB6Sp008ElkLAa2dPHVPt3aGHjsz%2BF6e%2BaU%2BcUubLCSHs7DpYWUHJTAD5oNUbakkbQTxleErjrUxbxKrGy4Hj%2FXQuxCdciK2tax5C1bHJkQSqwlYDpotuWKpuOBSHVYj3Ese5RVTHkcAhZvmVMr%2FVeHjtEcBx6pUE5EvZWi0Thm%2B5trX5Rd821bPXtM28kmPiVGjWCu9TMcRi5DDQiwZRcpmauqKDtcoik6k7r558Ry83EfwvvhdmCewYA7rLt2JOtYnA5bgVZ2316O1OUpSJiSpUb8jwRyz8Yk60IqPIr73DPa91M5PeEuPCyCTVW3EN%2FiqeUPg1wdXD%2BQS9syUDtQ4n9qyyUWjyIewzkJeNiLPSCx6HawWBgSoCzyobOtKS13gi08iHvoRGZInKRKPdoAzXN9B7kzjNh4fcqB2xoB550QFZ7lK6OcezPIjWzCuUV%2Fy%2F%2FXhZsZIrLCXdpQow7LYqdHBsH7lDhvDH5hmU2STrzcaBxvhCcRt9i4GhCezVPQkp8PJAa5gMZ05ECIti1JdG3lcsnz%2BI25RZCAqYAm01ox1lTw3T8zDHNYgU1TF1t0wOyQUuLTszxKy7tzb%2B2IL6fpWHB5Y6jOGVLWJsFrUpo3bSFXMJDSyskGOqUB3qtRdNMyvZOQBfwqDfOGmhe65APeCtuO2wtcdDv0J%2B4%2F4ZeyfB6EUtQ81LnGOKsCW5dpzcLNfWVf2a8SOtXk%2FuTQ6YzrkHb9d5wb63v4i2QQU3u%2FecXfombyle0gga28bv1igN%2B6MXsYLb7a5D1fH%2F0nYcOWpeNfetZcwgwXqa80ddyXSO3pOszBuHBFGH%2FlfaLFlcQEJqj%2FS6gPoa%2B3gTB7yctL&X-Amz-Signature=3a870c98a7fd090c61b73d4bdc75e9e23dca4693e33115c129c82cbd94ec73ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6M4QJAZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2G2I98nigznF%2BQ3YMXGw8oiQpTa9FyttAaD8Nr8EIxQIgdJp%2FnMQLM8KYrxpwl89RXs8VnDx1NV2ycP19BIKRZ5wq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFRAGg3mSWhv2lBL%2ByrcA85xKWm0gtB6Sp008ElkLAa2dPHVPt3aGHjsz%2BF6e%2BaU%2BcUubLCSHs7DpYWUHJTAD5oNUbakkbQTxleErjrUxbxKrGy4Hj%2FXQuxCdciK2tax5C1bHJkQSqwlYDpotuWKpuOBSHVYj3Ese5RVTHkcAhZvmVMr%2FVeHjtEcBx6pUE5EvZWi0Thm%2B5trX5Rd821bPXtM28kmPiVGjWCu9TMcRi5DDQiwZRcpmauqKDtcoik6k7r558Ry83EfwvvhdmCewYA7rLt2JOtYnA5bgVZ2316O1OUpSJiSpUb8jwRyz8Yk60IqPIr73DPa91M5PeEuPCyCTVW3EN%2FiqeUPg1wdXD%2BQS9syUDtQ4n9qyyUWjyIewzkJeNiLPSCx6HawWBgSoCzyobOtKS13gi08iHvoRGZInKRKPdoAzXN9B7kzjNh4fcqB2xoB550QFZ7lK6OcezPIjWzCuUV%2Fy%2F%2FXhZsZIrLCXdpQow7LYqdHBsH7lDhvDH5hmU2STrzcaBxvhCcRt9i4GhCezVPQkp8PJAa5gMZ05ECIti1JdG3lcsnz%2BI25RZCAqYAm01ox1lTw3T8zDHNYgU1TF1t0wOyQUuLTszxKy7tzb%2B2IL6fpWHB5Y6jOGVLWJsFrUpo3bSFXMJDSyskGOqUB3qtRdNMyvZOQBfwqDfOGmhe65APeCtuO2wtcdDv0J%2B4%2F4ZeyfB6EUtQ81LnGOKsCW5dpzcLNfWVf2a8SOtXk%2FuTQ6YzrkHb9d5wb63v4i2QQU3u%2FecXfombyle0gga28bv1igN%2B6MXsYLb7a5D1fH%2F0nYcOWpeNfetZcwgwXqa80ddyXSO3pOszBuHBFGH%2FlfaLFlcQEJqj%2FS6gPoa%2B3gTB7yctL&X-Amz-Signature=7519fcb593e55db6d1c60e97bc2a124ac4c802d022b4726061e80729be6d45e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
