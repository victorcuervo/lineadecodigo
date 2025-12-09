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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDBNXB3N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHq%2FzDGv8GYyS0IKHo2WI8oopj8ycdno9OE%2FfJB9au6NAiBw87V%2B4Yb2ug9sur2zTs7Njq5SYQHs%2Bejc%2FfJcFqNKjCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMes%2FY%2B%2F9ztCfzpT%2F9KtwDvnZvqaTw0EvgeoxJmHYTCvguHJ1A7Az1UXzTZbCbUfCwj5OEd8oRPGBwkkghkDf1qSCBC3jDtF85yj3TUBflHLhU9FSYtBnbZ8SQOlSi0pXo0VMIsvKVyJnpCxvIP8j2VC4LLU47YkbadvpFgXvzALpJRLOjqjkgnogO%2FH%2BPYOBJtgas2abJiK4oHCzVuXJm3JQhcKVihRB4%2BNBFx0tc6oYlzU7wKo2DEx8XWJ%2FJEiRBsA24phB22GpOooDtMmYD4qR7oulGsfvxPg%2BaKRhY4Fo9HIgAlNvwPBA1p8Q%2FlKMpgFcQuHumzFIgAQW4peaKevE0OBheghwiACyINdSjgtrfP%2BT4JDn7DkvHiLIoUsn%2BplG3epLzffdL%2BUCh%2FPuW6r20Wt%2FbuhEHpK20HMfG2dNH%2B11vOZavEOAsCYGym9MvmlQpYT6Ov628%2FIX%2F2CtMgggtqlIM9wsaXJ2yfls7HTbPhaD8DMOKZPB8grtNMcGsgmhXuqDTQxpvHX6FKRqBhWgI34UlATs2SChdURzFDggG1flIAwh2FJ8T9U9gUgdpF7NPA%2FyVDOXlER6uQ21nZ4POg5LW84z1vjthf8TqQ8G0nBh2rI9Ui0sFGQTeV2GEOWyGgEuAulWI4V8wka7eyQY6pgFmuKqsGNNj1gqEAFy0ytAq2HhkuBsYiRFoO%2FGZlP1InZweFxFbDerSOF%2BkJqZZN5hKy69%2FiK5yhAFpIj5h%2Bla6E9LD%2FVslVo6a7uVuXKFSfdf%2BqOCHzdeyOZfBhUvcEdlmqa9%2BlMH5ZSPeGW%2BDX7Sn4A4MPjPjsc%2FeIKgkPovTwMYvqNWyoT1LLBkVCRTgjwWXNYQqYL%2Bw2gfh%2BxfrT42WdAC4VqaR&X-Amz-Signature=701120678aafe904a46ac7e10a6af014107ad0ab9134985a6375daccd28acb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDBNXB3N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHq%2FzDGv8GYyS0IKHo2WI8oopj8ycdno9OE%2FfJB9au6NAiBw87V%2B4Yb2ug9sur2zTs7Njq5SYQHs%2Bejc%2FfJcFqNKjCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMes%2FY%2B%2F9ztCfzpT%2F9KtwDvnZvqaTw0EvgeoxJmHYTCvguHJ1A7Az1UXzTZbCbUfCwj5OEd8oRPGBwkkghkDf1qSCBC3jDtF85yj3TUBflHLhU9FSYtBnbZ8SQOlSi0pXo0VMIsvKVyJnpCxvIP8j2VC4LLU47YkbadvpFgXvzALpJRLOjqjkgnogO%2FH%2BPYOBJtgas2abJiK4oHCzVuXJm3JQhcKVihRB4%2BNBFx0tc6oYlzU7wKo2DEx8XWJ%2FJEiRBsA24phB22GpOooDtMmYD4qR7oulGsfvxPg%2BaKRhY4Fo9HIgAlNvwPBA1p8Q%2FlKMpgFcQuHumzFIgAQW4peaKevE0OBheghwiACyINdSjgtrfP%2BT4JDn7DkvHiLIoUsn%2BplG3epLzffdL%2BUCh%2FPuW6r20Wt%2FbuhEHpK20HMfG2dNH%2B11vOZavEOAsCYGym9MvmlQpYT6Ov628%2FIX%2F2CtMgggtqlIM9wsaXJ2yfls7HTbPhaD8DMOKZPB8grtNMcGsgmhXuqDTQxpvHX6FKRqBhWgI34UlATs2SChdURzFDggG1flIAwh2FJ8T9U9gUgdpF7NPA%2FyVDOXlER6uQ21nZ4POg5LW84z1vjthf8TqQ8G0nBh2rI9Ui0sFGQTeV2GEOWyGgEuAulWI4V8wka7eyQY6pgFmuKqsGNNj1gqEAFy0ytAq2HhkuBsYiRFoO%2FGZlP1InZweFxFbDerSOF%2BkJqZZN5hKy69%2FiK5yhAFpIj5h%2Bla6E9LD%2FVslVo6a7uVuXKFSfdf%2BqOCHzdeyOZfBhUvcEdlmqa9%2BlMH5ZSPeGW%2BDX7Sn4A4MPjPjsc%2FeIKgkPovTwMYvqNWyoT1LLBkVCRTgjwWXNYQqYL%2Bw2gfh%2BxfrT42WdAC4VqaR&X-Amz-Signature=b65f366942bba039f33e4fb39c816adf1bfa49f2eb4284f74d2c1095b365ee8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
