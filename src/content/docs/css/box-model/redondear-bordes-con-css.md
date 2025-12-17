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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OPYTEIX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCOwkZ7YH8OwPW4Ng9myQZ9FcrWiP7eQz40c4QpjuLoAiAUXKNFrJQwTXJIbJ0ZfG5vB2CTJc6Sl%2FZYr4J7v7RRIyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMNoXspd7y5sNnfmiAKtwDhYkSu%2Bq4CNM2pGV08zoRsBRLcpQrI%2F5C%2F%2BVLTpl3ehKbcSRGDkmpBPHM2YhJYZUcJL2nSDsOtiijEQVYdrNPhfOaZNDLyqenvUB64C%2FswtdmWSOK9%2FuRVby3u7W9QSpbcsKZByih8hEghnbO%2BPpA0aF0Bd4WJk7YS4ATZyVAXUaCnx0rrqlCcdnuOPDEjCCGuAhgp1RoFKCYBaXdR4k0s1r6Tw3OC1rQEtjL%2B8M7LUb8cqdv3vP80evjrUBVgf7UhfBeoEB6v9CIg2vzVsmrhrPu6fl8RE29QgFhjs%2BRG4S14qsJOX6cRSBoUs4UqH1q1OYTv1BKvqfI9LDyKv1p2gh4eusn7Iy3UU7kvT4gTtdeZy7eZ4b8RtmUFP9eks%2Fou2fyQIcwCh391v%2BeXp1AoedO8dP9oP8btpT8jqi05Xyy6fFgh5A%2FoXJeAw8yayOnU%2FHSExjOOuUrH0fgeBDgkeHscuyKzKPPymBHamOGp5Ok%2FWpFd00pOkg5f6EM19NmVgKy3bZPhLBIKKF4v77GXn8XDnMGDYtvT089rEwhjW5%2FlaLp5TZsU8HjslITt62BM1NoWJ1tTEeRpTV5MMIAURBJUbg%2BwZFA5FOfXyHemzDrkMJbaw5Q9%2BTh1ecwntKJygY6pgFRlF1Lbi0QyNZBBqSAfWYclyau2PzsSvpZhg1tXGppxyPLaoFvD8VJEPpQCd%2FbdyzusVwvVk3%2B44gGGeJIGf4eVZ%2BqjKImxRqfQSia9xKQVLU5OQTXIwZwPLBiUzt%2F4hh9%2FC4X%2FpcBC3nDnUKPM10FLy9ZLY9jkgmGYOoDcGVt2Hjg%2FxRvirEdLUXL%2FLa36JMFogdBumxlkv9zNNXNNNJvAptFQJrC&X-Amz-Signature=85e69695c185de30ac5811e9ed4081f785789cd5db1123a6642be0f7b14767e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OPYTEIX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCOwkZ7YH8OwPW4Ng9myQZ9FcrWiP7eQz40c4QpjuLoAiAUXKNFrJQwTXJIbJ0ZfG5vB2CTJc6Sl%2FZYr4J7v7RRIyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMNoXspd7y5sNnfmiAKtwDhYkSu%2Bq4CNM2pGV08zoRsBRLcpQrI%2F5C%2F%2BVLTpl3ehKbcSRGDkmpBPHM2YhJYZUcJL2nSDsOtiijEQVYdrNPhfOaZNDLyqenvUB64C%2FswtdmWSOK9%2FuRVby3u7W9QSpbcsKZByih8hEghnbO%2BPpA0aF0Bd4WJk7YS4ATZyVAXUaCnx0rrqlCcdnuOPDEjCCGuAhgp1RoFKCYBaXdR4k0s1r6Tw3OC1rQEtjL%2B8M7LUb8cqdv3vP80evjrUBVgf7UhfBeoEB6v9CIg2vzVsmrhrPu6fl8RE29QgFhjs%2BRG4S14qsJOX6cRSBoUs4UqH1q1OYTv1BKvqfI9LDyKv1p2gh4eusn7Iy3UU7kvT4gTtdeZy7eZ4b8RtmUFP9eks%2Fou2fyQIcwCh391v%2BeXp1AoedO8dP9oP8btpT8jqi05Xyy6fFgh5A%2FoXJeAw8yayOnU%2FHSExjOOuUrH0fgeBDgkeHscuyKzKPPymBHamOGp5Ok%2FWpFd00pOkg5f6EM19NmVgKy3bZPhLBIKKF4v77GXn8XDnMGDYtvT089rEwhjW5%2FlaLp5TZsU8HjslITt62BM1NoWJ1tTEeRpTV5MMIAURBJUbg%2BwZFA5FOfXyHemzDrkMJbaw5Q9%2BTh1ecwntKJygY6pgFRlF1Lbi0QyNZBBqSAfWYclyau2PzsSvpZhg1tXGppxyPLaoFvD8VJEPpQCd%2FbdyzusVwvVk3%2B44gGGeJIGf4eVZ%2BqjKImxRqfQSia9xKQVLU5OQTXIwZwPLBiUzt%2F4hh9%2FC4X%2FpcBC3nDnUKPM10FLy9ZLY9jkgmGYOoDcGVt2Hjg%2FxRvirEdLUXL%2FLa36JMFogdBumxlkv9zNNXNNNJvAptFQJrC&X-Amz-Signature=dee3cca11cf1ae69a199aaf170946016b4834a0b50a91efc336e2d2cdc3279ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
