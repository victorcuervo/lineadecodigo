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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OZVSQDR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Gk0KUy%2FyUMtvUEnJzxd7d%2BDq85a3Iouv4KH7kN22CQIhAIDI4LphjvlS4S5%2FajU9Sf4Pq2mcYF8L3sCMdLuQchE%2FKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx19ciNvgPwkojJzQsq3AOegQk8SD9mVPLRF95rSp4DtC3WHJ%2BDvV4S4ZIfqrkZ68crNCuv3dK4lLhsRNglB%2F73gbXMtOjYWL60p7Rv8DfYBNUtMjfzgBR1S2kEd6ZvMwmEkqBLSQdSq6Ky4VwFLAyCYM6BYyaXZrHLzUbUlsJGyDu0YR4XN7zx0AMedJZTLG84M9urjz8OhzrDhaZPf2nFRT9LC43th6PF0GXq4kNP0gbcn2m9CMp9QAg2jXP9LW3mXP0d%2Btk9wSHZXMphoVv%2BE7dc%2FAAdrFT5M8d%2BvNbjEXaw71x2lUWeAEk9xd8b%2B6do2tSdry5wAFSx4Qk4b%2B3w3waTxl5O22%2FqxftvdwH8UtB01tJJTzAmJ%2FdMjM03gn3ECEgbhEmmADC65GkE0gqIqFFAV1l%2BCC3tnjLYJSF%2FDUiCvufUIouOJd5fIkXVd40LpdyCB3fUYYrOZhIPJjj9ayDcGXiG23Ya%2FW%2FvTRAPfcQHi4jB7ulLnj4Pnv4kN5si0QP9iRaY9PXBTmtc7LoPgvDu4fKtp4w5YCkWXnQdMiZvIxHaG%2FajB2WkAo4rQShWXvFxECcXs9CGeoGydyO2R8F2gy2qs25GzROw5STDrCDDlqy9iAmJZDL55KZgirzDPlSF2IK3sI3WojDTrozKBjqkAe4nv8q6ATZCqfQC9JGOEoR6PCjXorlhs9yS2WOJXEl8zVyN65XAlTi8hsTkj%2B6R9FwkelSQaZ5%2B8gGcenOXGuZ7M9amq9N6fa2zyJ8T33xzcUgNTzcqzAOM8%2BAZJrbTxh%2BfMPBH1kzg5pTj1J5kKEIBePmdBa2nBNDWLsSc32LnJiaYg413v0YFQuwjJhU20YWCQVpNQjlatmnSsGjvlDhhrf4o&X-Amz-Signature=ee5123e791dc90fd09949ccb6f5ab57d62f3da9292883c30c08ab55e2e636953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OZVSQDR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Gk0KUy%2FyUMtvUEnJzxd7d%2BDq85a3Iouv4KH7kN22CQIhAIDI4LphjvlS4S5%2FajU9Sf4Pq2mcYF8L3sCMdLuQchE%2FKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx19ciNvgPwkojJzQsq3AOegQk8SD9mVPLRF95rSp4DtC3WHJ%2BDvV4S4ZIfqrkZ68crNCuv3dK4lLhsRNglB%2F73gbXMtOjYWL60p7Rv8DfYBNUtMjfzgBR1S2kEd6ZvMwmEkqBLSQdSq6Ky4VwFLAyCYM6BYyaXZrHLzUbUlsJGyDu0YR4XN7zx0AMedJZTLG84M9urjz8OhzrDhaZPf2nFRT9LC43th6PF0GXq4kNP0gbcn2m9CMp9QAg2jXP9LW3mXP0d%2Btk9wSHZXMphoVv%2BE7dc%2FAAdrFT5M8d%2BvNbjEXaw71x2lUWeAEk9xd8b%2B6do2tSdry5wAFSx4Qk4b%2B3w3waTxl5O22%2FqxftvdwH8UtB01tJJTzAmJ%2FdMjM03gn3ECEgbhEmmADC65GkE0gqIqFFAV1l%2BCC3tnjLYJSF%2FDUiCvufUIouOJd5fIkXVd40LpdyCB3fUYYrOZhIPJjj9ayDcGXiG23Ya%2FW%2FvTRAPfcQHi4jB7ulLnj4Pnv4kN5si0QP9iRaY9PXBTmtc7LoPgvDu4fKtp4w5YCkWXnQdMiZvIxHaG%2FajB2WkAo4rQShWXvFxECcXs9CGeoGydyO2R8F2gy2qs25GzROw5STDrCDDlqy9iAmJZDL55KZgirzDPlSF2IK3sI3WojDTrozKBjqkAe4nv8q6ATZCqfQC9JGOEoR6PCjXorlhs9yS2WOJXEl8zVyN65XAlTi8hsTkj%2B6R9FwkelSQaZ5%2B8gGcenOXGuZ7M9amq9N6fa2zyJ8T33xzcUgNTzcqzAOM8%2BAZJrbTxh%2BfMPBH1kzg5pTj1J5kKEIBePmdBa2nBNDWLsSc32LnJiaYg413v0YFQuwjJhU20YWCQVpNQjlatmnSsGjvlDhhrf4o&X-Amz-Signature=b9db033599f3c909706b5d7d1a20fe4b40746a0b55c72bec39516ea21b2fb761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
