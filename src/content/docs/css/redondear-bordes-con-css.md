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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDGHPI7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAel%2BtHBoKs3x5YM1vQvuM5bzPkqiW1pgCoev6eayXJeAiEAp3ep8BMYe1NJnPibuQ%2FMkxlP4qSzWA0nGEMf0jimBTwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQq0Za7Ue8m76MdKCrcA8Z8UC5%2FDAceh7zqLpUjlVlL%2FVlKtF6A%2FAl%2BFtsJvhwqO00nslNLkmn87wEUZhL6uKngSZMA5Dfi02wO9B4sd4mzP0Y5qyq5aCc0WKdl6xUgmnZWgWQupbvMo8ZLRtMqOf7riZ3mbdy5V%2FEyTF7qXgSK7JBolWJkYkDTVQEgRyJ0d15At30rdqp0Ogk6%2BO2vts4xRP3GXOJC2zPFa4ojAjY3HTIeV%2FUEFkMU0EOYUO%2Bzloyq7Q1xZ5pN2Wb1BbXuBG6j7uH8yL1i8ZIjltp%2Fdxwl%2BBO8ruVlYohLb5hxsWRrMoRwnbgs9QUXcXDBTk2Nuklus3kHCJNmBMNwuhmw4xv7uJ0602UvCROF0Ua4c1Mnv5I2oPtf3pIAYg8RFvr5O4TjDPapSOPJrRchwkbzB0lrF189RocT8JE6USGj5ENi%2Fco3vhsMVSgPQWanTYcqh%2BzdLfCHmtzafTdzI4LGXHr0D%2BHdoaSVbNpXm3UgK057zRP5c%2FSbprVxrhV35JQ6SrHc%2Ff1Cg8OchN6y3F9zD7SH5NmhlMX%2BywZ4x%2BaJteow9SJWYqGTXetu4alyJf7iLTr1Vi%2FnIydtUSN66pZKGCLxipfz0ciVN%2FjsUzud3PDesXsN1sDPO7eFP69EMJih2MkGOqUBmevufkdlph2le7YaWF5d0jgntVi63n4C9yfINpDX%2F19PGOJjFQ%2F0C9gO4keA4BKsQssV%2FqbixJ8ZKFDDXHB0Me4UAy%2BvtRw%2BhURPGPs5VEe48qtRBiJE05cWv%2FsYrjgG8aaZVWqrs1ZXQOtdh46yRiezkAcfVxtxtj10ngvkcfj2hjNnEklRZAscEMzQGgb7tAbu3nC0vItXDFGOfJNCPEtUnIPk&X-Amz-Signature=65ed2b4d75312052f77815d6ab2239516a04dc59cc87c945ed673fa841801ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDGHPI7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAel%2BtHBoKs3x5YM1vQvuM5bzPkqiW1pgCoev6eayXJeAiEAp3ep8BMYe1NJnPibuQ%2FMkxlP4qSzWA0nGEMf0jimBTwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQq0Za7Ue8m76MdKCrcA8Z8UC5%2FDAceh7zqLpUjlVlL%2FVlKtF6A%2FAl%2BFtsJvhwqO00nslNLkmn87wEUZhL6uKngSZMA5Dfi02wO9B4sd4mzP0Y5qyq5aCc0WKdl6xUgmnZWgWQupbvMo8ZLRtMqOf7riZ3mbdy5V%2FEyTF7qXgSK7JBolWJkYkDTVQEgRyJ0d15At30rdqp0Ogk6%2BO2vts4xRP3GXOJC2zPFa4ojAjY3HTIeV%2FUEFkMU0EOYUO%2Bzloyq7Q1xZ5pN2Wb1BbXuBG6j7uH8yL1i8ZIjltp%2Fdxwl%2BBO8ruVlYohLb5hxsWRrMoRwnbgs9QUXcXDBTk2Nuklus3kHCJNmBMNwuhmw4xv7uJ0602UvCROF0Ua4c1Mnv5I2oPtf3pIAYg8RFvr5O4TjDPapSOPJrRchwkbzB0lrF189RocT8JE6USGj5ENi%2Fco3vhsMVSgPQWanTYcqh%2BzdLfCHmtzafTdzI4LGXHr0D%2BHdoaSVbNpXm3UgK057zRP5c%2FSbprVxrhV35JQ6SrHc%2Ff1Cg8OchN6y3F9zD7SH5NmhlMX%2BywZ4x%2BaJteow9SJWYqGTXetu4alyJf7iLTr1Vi%2FnIydtUSN66pZKGCLxipfz0ciVN%2FjsUzud3PDesXsN1sDPO7eFP69EMJih2MkGOqUBmevufkdlph2le7YaWF5d0jgntVi63n4C9yfINpDX%2F19PGOJjFQ%2F0C9gO4keA4BKsQssV%2FqbixJ8ZKFDDXHB0Me4UAy%2BvtRw%2BhURPGPs5VEe48qtRBiJE05cWv%2FsYrjgG8aaZVWqrs1ZXQOtdh46yRiezkAcfVxtxtj10ngvkcfj2hjNnEklRZAscEMzQGgb7tAbu3nC0vItXDFGOfJNCPEtUnIPk&X-Amz-Signature=9828b4644539607fcd2b2291bcf6b420050ce8aea3bf98877cfac6f0a39afac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
