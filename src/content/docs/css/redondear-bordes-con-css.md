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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH36XK6S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbMGsgFCfJL1b4LyUZ2UD%2BCexfbqjpEO49arcgtkKrkAiBQVYOtod2IniCXjSz84MxIVNFeLTaiJDXRRF2n6jsI3ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2FLEj1TXm6A3uMZyXKtwDERdARxYNxxE6gGbW4Csa%2ByemqU%2F7HHko8J%2BuaFS7Hp3VyPvdkD6a1HhDOjku5xKNsYe0VSkuen0UeEWeUeMLgXesg58LWSvyqWtRAqn9iFqY7bgjB%2FFIq85vHpNhg2dpwAzSVqUImHaMvVwem0w3CvscweLHoD7jr2bxvoXcCP%2FhEZfZ%2BhCUecutuM7DsvXDGKChZrZ%2BOPRD9cdO6fNU5zUccmcs1WJJIDEQcR99lV0j8BeTUsqgALj0eRy9%2BnUgzQSGNTTTtolQA%2FgxBEeWX29bIf5tIwtItWOjbLm4t5DoA4Mzh%2F3UT0WYxQGkrYAhLPXNonmkG83cQSxvVhcNNS8%2BTfvkYwVBcOJAHYGd1QK1eL04rOQlhgNLEbl0Gp0uWUK0io264firiQw1L%2FPrrQ57tvlW%2B66dQc5jmXf8oP60AvuhZUcmjLw5iEGtcv75LcTpjUqqe%2Fv%2B2MDvFXZjPR%2Ff0Gz43k52TM1Wp3IXnee1PoRe%2FOWr1RGZWvrC16xDh21v9Ypatg59xoXwkPCNmQMP1fRGIwWOolaG5k3kBuw9a%2F7qyE1DccvDkZbRrc3TvE4FBfmrRqyeuMI1hwlGYyy%2FQzo8kchgKoJTHCN1Zvhz4Jg%2FCmefVohR5rcw3uPLyQY6pgHq%2FnJMySNGkZeqUAb%2Fr6A4p9WR99avNG0Usrkmu4nGLid1z4pr2JIllOz%2BMRr1i4Mls2tF%2F93YBASMPrpVGeAOQnt9b%2BMmhdtIi4b7icnFAkfHvBYPQHidgVaH%2BWQ5hTXgeQaIrZIMIObfcLF7%2FQoFXdV7qVZ0y8elswXckdF%2FvDU%2FY6HpOHf9t6ey1cEvAUWWxW4pdhHPILeeGSSXeE3s56g9y6ij&X-Amz-Signature=b506d7c47a991fa4ceadc021408b1fd778e798b46d8c1ee092f6dfc0f4cc0986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH36XK6S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbMGsgFCfJL1b4LyUZ2UD%2BCexfbqjpEO49arcgtkKrkAiBQVYOtod2IniCXjSz84MxIVNFeLTaiJDXRRF2n6jsI3ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2FLEj1TXm6A3uMZyXKtwDERdARxYNxxE6gGbW4Csa%2ByemqU%2F7HHko8J%2BuaFS7Hp3VyPvdkD6a1HhDOjku5xKNsYe0VSkuen0UeEWeUeMLgXesg58LWSvyqWtRAqn9iFqY7bgjB%2FFIq85vHpNhg2dpwAzSVqUImHaMvVwem0w3CvscweLHoD7jr2bxvoXcCP%2FhEZfZ%2BhCUecutuM7DsvXDGKChZrZ%2BOPRD9cdO6fNU5zUccmcs1WJJIDEQcR99lV0j8BeTUsqgALj0eRy9%2BnUgzQSGNTTTtolQA%2FgxBEeWX29bIf5tIwtItWOjbLm4t5DoA4Mzh%2F3UT0WYxQGkrYAhLPXNonmkG83cQSxvVhcNNS8%2BTfvkYwVBcOJAHYGd1QK1eL04rOQlhgNLEbl0Gp0uWUK0io264firiQw1L%2FPrrQ57tvlW%2B66dQc5jmXf8oP60AvuhZUcmjLw5iEGtcv75LcTpjUqqe%2Fv%2B2MDvFXZjPR%2Ff0Gz43k52TM1Wp3IXnee1PoRe%2FOWr1RGZWvrC16xDh21v9Ypatg59xoXwkPCNmQMP1fRGIwWOolaG5k3kBuw9a%2F7qyE1DccvDkZbRrc3TvE4FBfmrRqyeuMI1hwlGYyy%2FQzo8kchgKoJTHCN1Zvhz4Jg%2FCmefVohR5rcw3uPLyQY6pgHq%2FnJMySNGkZeqUAb%2Fr6A4p9WR99avNG0Usrkmu4nGLid1z4pr2JIllOz%2BMRr1i4Mls2tF%2F93YBASMPrpVGeAOQnt9b%2BMmhdtIi4b7icnFAkfHvBYPQHidgVaH%2BWQ5hTXgeQaIrZIMIObfcLF7%2FQoFXdV7qVZ0y8elswXckdF%2FvDU%2FY6HpOHf9t6ey1cEvAUWWxW4pdhHPILeeGSSXeE3s56g9y6ij&X-Amz-Signature=6c5e4c2c405f52bd1ecbbdc5f136076f58161a72022f8e38cf24eaf5af36342b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
