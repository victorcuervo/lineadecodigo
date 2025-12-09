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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3J2CZM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEifqtyScNGvLVVfNPwx7Zl59mtNdqad1lO9A3pTTicZAiBBJMYdqW9o3GQJ343TQqgFVJfisBqeaAx6zDt6k8mjtCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaHpFF7FXeFHLyxFrKtwD5pOEQUrwNa6rPxazfYQbRxRZW6MBW%2FjN5tHN8fOYbRdSXWFjq1fV8eUYLS3yeXifQjb2p6p2u3%2F0IsWPxi0H0tT18sl%2B%2F6NBJ8ohNgQU%2F929JjWs1Vf51mIO1Db9ej69yNxiPSHQxFZEj1qnyKnRqDbwy8rCkkzuNc9LpDAm3rt%2FQQSO9XDiIw2jj6FQFzbOFrXwGITjnLllPjtCsWQ67ZKVzfBhygfD8Prov96GmRM0n6rtNtYwMBdVDFuTrkv02wXJFga9Zr2CvvOYP4k9TLmOL%2FMqc1vEEIsdER202vPO4HVXAisloIatoEA57s1QQ5Ry31rqXez3cLAh6GgNyu0Xg6rfF29Cig4j3Zfy3mS2R96XpBP2VsnWdFfQqdFfDvHs%2BwOnzjFs73h62rwVinHKv%2BqPiBM4hZx6DS1X7z8%2BprumBkk924Bwr0sDtKjc6GHJeAcYRscDGOnHvnLcLGQD4wdOF7CbkqM0vnQQFP2r4tD6%2BlQX2g6c7LfjJHtVYCYl9hjwbAFhoLQFzVoam1%2Flw7%2Bb%2FFcP39pBsYSJnDaOdigtXW4clT8bbwaITJqn%2BqDyJikzAtYk57%2BS5BlyyZcqD2a5Q7SQfW3mdezGsk4xLpsjr2h1R0z%2BU7cw8K3eyQY6pgEDK47l8rAemP1HVQ%2FN9Po%2F40CYljIha9aPadduv7Db%2FU97Ib1XdoRkrIYD4lmtB7fzXmgSHRuzpzZW6mW3ZTgAbjpKBouGcmYDXc%2F5wJfWfDhcj0NPoF50rOF4YDoYA2uAByEanTVEqHqjHhObaIUXpOp6oBlog62FJT3qWyNtethHiBF2X3mOAz4QMkGqduj%2FtNdz90R8ZinO%2FNiTGY5LplfLPeix&X-Amz-Signature=12257bb093e30f4f3a4dc6793bd4b7aed84869f70d9fb0270de9d6f434e6c209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3J2CZM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEifqtyScNGvLVVfNPwx7Zl59mtNdqad1lO9A3pTTicZAiBBJMYdqW9o3GQJ343TQqgFVJfisBqeaAx6zDt6k8mjtCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaHpFF7FXeFHLyxFrKtwD5pOEQUrwNa6rPxazfYQbRxRZW6MBW%2FjN5tHN8fOYbRdSXWFjq1fV8eUYLS3yeXifQjb2p6p2u3%2F0IsWPxi0H0tT18sl%2B%2F6NBJ8ohNgQU%2F929JjWs1Vf51mIO1Db9ej69yNxiPSHQxFZEj1qnyKnRqDbwy8rCkkzuNc9LpDAm3rt%2FQQSO9XDiIw2jj6FQFzbOFrXwGITjnLllPjtCsWQ67ZKVzfBhygfD8Prov96GmRM0n6rtNtYwMBdVDFuTrkv02wXJFga9Zr2CvvOYP4k9TLmOL%2FMqc1vEEIsdER202vPO4HVXAisloIatoEA57s1QQ5Ry31rqXez3cLAh6GgNyu0Xg6rfF29Cig4j3Zfy3mS2R96XpBP2VsnWdFfQqdFfDvHs%2BwOnzjFs73h62rwVinHKv%2BqPiBM4hZx6DS1X7z8%2BprumBkk924Bwr0sDtKjc6GHJeAcYRscDGOnHvnLcLGQD4wdOF7CbkqM0vnQQFP2r4tD6%2BlQX2g6c7LfjJHtVYCYl9hjwbAFhoLQFzVoam1%2Flw7%2Bb%2FFcP39pBsYSJnDaOdigtXW4clT8bbwaITJqn%2BqDyJikzAtYk57%2BS5BlyyZcqD2a5Q7SQfW3mdezGsk4xLpsjr2h1R0z%2BU7cw8K3eyQY6pgEDK47l8rAemP1HVQ%2FN9Po%2F40CYljIha9aPadduv7Db%2FU97Ib1XdoRkrIYD4lmtB7fzXmgSHRuzpzZW6mW3ZTgAbjpKBouGcmYDXc%2F5wJfWfDhcj0NPoF50rOF4YDoYA2uAByEanTVEqHqjHhObaIUXpOp6oBlog62FJT3qWyNtethHiBF2X3mOAz4QMkGqduj%2FtNdz90R8ZinO%2FNiTGY5LplfLPeix&X-Amz-Signature=21f6ad4b811086aad9e9f19974fb364789ec8e3872d63933b77d52d319a41e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
