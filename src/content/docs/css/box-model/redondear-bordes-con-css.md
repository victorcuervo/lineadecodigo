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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XALITNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3dF5e6ItBO4ie3LKo2MPnq2zOvfz%2FRBWl4zNwkW7s4gIhAKbMbKTOEm8d4s6h8acKv7%2FdiuISd0yYa9ULVQDTtxieKv8DCHIQABoMNjM3NDIzMTgzODA1IgwlfePLsODyFBjXWi8q3AOgqoo3ge0kSJ%2FQCRDRudFPD3vaxyEXgjTGHY5OBrSRRxuN0FQRfm3ojVABywvofMd6zv915d0S4xBp81%2Bkqm%2BAGDoxVwfd9Wrw1eZaq82thTcLv2y6iOr5YFO65iJxfaz3kqj6vgNmFTnA6oL1vRW%2B%2FOJZU3OIPv86BeZBHT5TikhBlUp60zCZldObpoDtHR%2BwFRYXbrFHAxcxYhnh4QHz8WYEKyyFhpbsVIdctiNxon3epEFGqEKowddHgNo2i9oe5urM1jXrWNcz%2Bt%2BvwywkIje9mFC66YV3wr0JYGfd6kSyWEbbyntjYjI%2F%2BpdU4x%2BiHJRhMZmxdgFcjqaXMwvk3XU7gfwNqn3fTCH3%2BlPzTmD9se4T0bU9odD2MQsCd7x7BLaFavIbmGRLzecnhpH41XCo1bU15Wo7xCWcTGPQxBlvNZCxcbV4b1atVa2fgCIs7tVN2rYDjsyY31bvIBnm%2Bm465YHNLzfwmahhiDOhsS3wpHD%2FiTJwfHnDMbXGdAj6%2F8fA5s556yu49uAZnUEUrm5ZEdUppBXgampkUeeG6xjc9XO3G5035gdpPPOxFaNRrz5F8P7kxsPoFOkqr8C0kfcIqIYHzo8hFrDDNDvIjBhOEJUtiDCYml56SDCw%2BofKBjqkAZErbEd9ahKkFDJFKSjLbJEf2qxR6N85Bcw1PnpxVNydZfwrtdGtq8WMYR1%2BIZ3KT1%2Bfl1zvkCgNtTcNbI4YB7UX9d371lL6E2CmbUw4Zi7Zsjxo0aeRxYgD9cLHipAczgTOwBWJczOtB2gkFCFES5%2B1EpXYU5Mz2mvHhZXZJzCQLO4ozNmYRQ50bUCpALEmbjpN8ZrdChzAuz1z1ie1ijInr83F&X-Amz-Signature=e0daaf577235f295b2bb5814aedf269a676fa1fa759e8b48bd158d15cb953475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XALITNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3dF5e6ItBO4ie3LKo2MPnq2zOvfz%2FRBWl4zNwkW7s4gIhAKbMbKTOEm8d4s6h8acKv7%2FdiuISd0yYa9ULVQDTtxieKv8DCHIQABoMNjM3NDIzMTgzODA1IgwlfePLsODyFBjXWi8q3AOgqoo3ge0kSJ%2FQCRDRudFPD3vaxyEXgjTGHY5OBrSRRxuN0FQRfm3ojVABywvofMd6zv915d0S4xBp81%2Bkqm%2BAGDoxVwfd9Wrw1eZaq82thTcLv2y6iOr5YFO65iJxfaz3kqj6vgNmFTnA6oL1vRW%2B%2FOJZU3OIPv86BeZBHT5TikhBlUp60zCZldObpoDtHR%2BwFRYXbrFHAxcxYhnh4QHz8WYEKyyFhpbsVIdctiNxon3epEFGqEKowddHgNo2i9oe5urM1jXrWNcz%2Bt%2BvwywkIje9mFC66YV3wr0JYGfd6kSyWEbbyntjYjI%2F%2BpdU4x%2BiHJRhMZmxdgFcjqaXMwvk3XU7gfwNqn3fTCH3%2BlPzTmD9se4T0bU9odD2MQsCd7x7BLaFavIbmGRLzecnhpH41XCo1bU15Wo7xCWcTGPQxBlvNZCxcbV4b1atVa2fgCIs7tVN2rYDjsyY31bvIBnm%2Bm465YHNLzfwmahhiDOhsS3wpHD%2FiTJwfHnDMbXGdAj6%2F8fA5s556yu49uAZnUEUrm5ZEdUppBXgampkUeeG6xjc9XO3G5035gdpPPOxFaNRrz5F8P7kxsPoFOkqr8C0kfcIqIYHzo8hFrDDNDvIjBhOEJUtiDCYml56SDCw%2BofKBjqkAZErbEd9ahKkFDJFKSjLbJEf2qxR6N85Bcw1PnpxVNydZfwrtdGtq8WMYR1%2BIZ3KT1%2Bfl1zvkCgNtTcNbI4YB7UX9d371lL6E2CmbUw4Zi7Zsjxo0aeRxYgD9cLHipAczgTOwBWJczOtB2gkFCFES5%2B1EpXYU5Mz2mvHhZXZJzCQLO4ozNmYRQ50bUCpALEmbjpN8ZrdChzAuz1z1ie1ijInr83F&X-Amz-Signature=55c07fb61ef4e65e927bb490a371362fc1ee052a67a72749f6ff52df50394ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
