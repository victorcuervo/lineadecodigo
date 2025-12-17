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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2S5NTS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2sYnIas9EykbkXvd9b2Dd20DuI1bK425yrCqu8IH%2BuAiBWe8ph1cV422cj1HH8p3yEO0QjUgJ%2Bj7ETRbhORHZrqir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM9pmKfmNekvgPib09KtwDp7ee1FkY59bvAooyvCByZaFnpM6l9yCo8Eoyt8sL1fCPnbqAssNuNtT67V0u2GGB%2FsrQpfWTqrqvEbkyyIx%2B%2By%2BY4m6G9%2BUcI56WlA8Q2F0aRGRASVKjGFK5eU6kKRRsJRwdU2H%2BHUrOK%2FAnGdxtatQFYUExs%2FJMOFl66%2B1sDrn07PUqyD04AGvrzPorN3e8RLE33nNx5rzA2b9XuL7VQ0dEbL2lw0C7%2Br43jrvaXvfUpK%2FnaLVT%2FtpA5R9S7S%2FGooBRXxP%2BlVjAha%2FS4yYHP%2FpIRRD6nbBtiaRIX8Oy7BgMNxQXchr%2BZu2gpo9gDG85i13SP%2FZodkcul8pJ%2B3oZrCZflaGf2KdJNf%2BlsYb0IeDHQPM%2BI2zc7ArIWF1xlJC22ZutxeQjPgjNm4XPEmd487C8Na0IvkAHAZUZb7kXsF2Nq86mFENWDd08zCFx3NqxsNe3xPLN9qjuV3AKdqcnK7bdaUqqIvi%2BEuJEIum%2FrxAFXB1d8Xz13cj6JN0ugSIpUSGEvQdfwi%2B8qOd8r24Il6lFkmbPiySKR0dPFB%2Fv%2BJKFjwH6y8cg%2F8BlfxcZkJoYtRls1aDS0iGI5hYXBDSENHNlNnyOHUZx53yi483hPOJ9dMF8u%2FiO2WY%2Fttswj7iJygY6pgE15goLKyRFU7dV0oMDTTTeksIFFfSUDvtQFuDNIaCPk0pcUpmvVDnT2I%2B1TWF4%2BzXUGEodO5RGtMr87c48SVyoPQKduJA3K1zjtlmakKTru3%2FPh9DWQGmVRJdoX%2BIRvn4um734F7zsvF2lAWPFfFYe82L6Dq2JUYu5RpuUmene%2BMvuekazxNdvqhRLicPvLM%2FLokqOUkAcepHU5STmtD2HNG7C%2F%2B7J&X-Amz-Signature=b12c06613c571d57b285d62a662b6b4c50f3dc0e7b9d81be75a68bf54986f51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2S5NTS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2sYnIas9EykbkXvd9b2Dd20DuI1bK425yrCqu8IH%2BuAiBWe8ph1cV422cj1HH8p3yEO0QjUgJ%2Bj7ETRbhORHZrqir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM9pmKfmNekvgPib09KtwDp7ee1FkY59bvAooyvCByZaFnpM6l9yCo8Eoyt8sL1fCPnbqAssNuNtT67V0u2GGB%2FsrQpfWTqrqvEbkyyIx%2B%2By%2BY4m6G9%2BUcI56WlA8Q2F0aRGRASVKjGFK5eU6kKRRsJRwdU2H%2BHUrOK%2FAnGdxtatQFYUExs%2FJMOFl66%2B1sDrn07PUqyD04AGvrzPorN3e8RLE33nNx5rzA2b9XuL7VQ0dEbL2lw0C7%2Br43jrvaXvfUpK%2FnaLVT%2FtpA5R9S7S%2FGooBRXxP%2BlVjAha%2FS4yYHP%2FpIRRD6nbBtiaRIX8Oy7BgMNxQXchr%2BZu2gpo9gDG85i13SP%2FZodkcul8pJ%2B3oZrCZflaGf2KdJNf%2BlsYb0IeDHQPM%2BI2zc7ArIWF1xlJC22ZutxeQjPgjNm4XPEmd487C8Na0IvkAHAZUZb7kXsF2Nq86mFENWDd08zCFx3NqxsNe3xPLN9qjuV3AKdqcnK7bdaUqqIvi%2BEuJEIum%2FrxAFXB1d8Xz13cj6JN0ugSIpUSGEvQdfwi%2B8qOd8r24Il6lFkmbPiySKR0dPFB%2Fv%2BJKFjwH6y8cg%2F8BlfxcZkJoYtRls1aDS0iGI5hYXBDSENHNlNnyOHUZx53yi483hPOJ9dMF8u%2FiO2WY%2Fttswj7iJygY6pgE15goLKyRFU7dV0oMDTTTeksIFFfSUDvtQFuDNIaCPk0pcUpmvVDnT2I%2B1TWF4%2BzXUGEodO5RGtMr87c48SVyoPQKduJA3K1zjtlmakKTru3%2FPh9DWQGmVRJdoX%2BIRvn4um734F7zsvF2lAWPFfFYe82L6Dq2JUYu5RpuUmene%2BMvuekazxNdvqhRLicPvLM%2FLokqOUkAcepHU5STmtD2HNG7C%2F%2B7J&X-Amz-Signature=a9181eecdaad0c5979b779eef2dfc7233ad4807c025324af45b716e651701098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
