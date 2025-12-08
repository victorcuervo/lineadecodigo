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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFWWXAP5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrcguD4v9UrPlp7edCa%2BmHjAsEFkyWdeFQlB2xh7UoWAiB0e8UYevOj5kGUeBkCYogfg%2FWn2WqBNI8ZfxF%2BcejIaSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqojWD%2F4MJlU8rdekKtwDcMlptWBGy0JGlEMj0xJdDzGNGl1%2Brxc4WJyCCEsq2DjKxoSXjxym%2BT0DME9y7TK%2Bv8ccFfvgUZknfUawmju4tu0FfJPkrZMIg8nlchqkxNZDr9o6cniaJWSscZRKHRVheIZDpTITtD4%2FMft9CIK6G5WOdcx0GTB9I1VUcV9%2FC988MuZZ%2BZx1qz2Lzk%2FqFjoYq2D97FYuERtoRn3BbVvts2z1Zn7SUF3X4b1hLpZTyIEKkKwvlYocnHM6L2sb5jC5kXvf4faQTF%2FOhnj6kBMPGzrqEv3unK7x%2BrqBV7bsOGd8fUvlivS1bZ9VJc%2FkuIsYOYJYGGsyIExR3qDohcyCt7c4oWdDMH3DFbnFx4EjLK0GqipB4r8dGIebvPG2mzYX3R%2F6jABBiv9CQchwGaExlu%2BEemMg5PivEx7VI%2FxxWssnMdwgKhR5PbIl3ghFk13bMXB52a4JmpK%2F22VNtKsm7xImp7z24PRAoFdoKToWwGIaXJPgdMINoAqaag1sdDbrrjpCAocd%2FRWh6EL%2B8%2Bv%2FxIzGuBrS%2BW%2Bk4iqPXBbokrbZh3BctX0ZgTBcgY1B1BcjJ0qjgRel82XUN2hRlexI%2FhihIj3KIHSE9o9tzU7UGcHEFMz0z7ktdt3KmYcwsaLYyQY6pgFeDP6ik3ksGndn0eN%2F6MeRSqUKfpgumH7KWgJz%2B2hGDm85zLRqfdFR2%2FJJQwWC%2FtInZlRkBlAoc%2FQMyw8TOfEYHzMWBtfdNhP%2FPon9m1z5ErGVhHfeYl8N1lz1JdROUhlyRRTDm8l7SU0LnP5FqZ4bT26rElnZHGEsNNhSBQSHydxJWxUT8e4RlKq6dp6bziK2ZjANFhkGUY6bVVAMubkyypVX%2FWu5&X-Amz-Signature=a00ce0f169f443ef218b045c21adb03cd83ca75643c0222a0ed2effa9da09be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFWWXAP5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrcguD4v9UrPlp7edCa%2BmHjAsEFkyWdeFQlB2xh7UoWAiB0e8UYevOj5kGUeBkCYogfg%2FWn2WqBNI8ZfxF%2BcejIaSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqojWD%2F4MJlU8rdekKtwDcMlptWBGy0JGlEMj0xJdDzGNGl1%2Brxc4WJyCCEsq2DjKxoSXjxym%2BT0DME9y7TK%2Bv8ccFfvgUZknfUawmju4tu0FfJPkrZMIg8nlchqkxNZDr9o6cniaJWSscZRKHRVheIZDpTITtD4%2FMft9CIK6G5WOdcx0GTB9I1VUcV9%2FC988MuZZ%2BZx1qz2Lzk%2FqFjoYq2D97FYuERtoRn3BbVvts2z1Zn7SUF3X4b1hLpZTyIEKkKwvlYocnHM6L2sb5jC5kXvf4faQTF%2FOhnj6kBMPGzrqEv3unK7x%2BrqBV7bsOGd8fUvlivS1bZ9VJc%2FkuIsYOYJYGGsyIExR3qDohcyCt7c4oWdDMH3DFbnFx4EjLK0GqipB4r8dGIebvPG2mzYX3R%2F6jABBiv9CQchwGaExlu%2BEemMg5PivEx7VI%2FxxWssnMdwgKhR5PbIl3ghFk13bMXB52a4JmpK%2F22VNtKsm7xImp7z24PRAoFdoKToWwGIaXJPgdMINoAqaag1sdDbrrjpCAocd%2FRWh6EL%2B8%2Bv%2FxIzGuBrS%2BW%2Bk4iqPXBbokrbZh3BctX0ZgTBcgY1B1BcjJ0qjgRel82XUN2hRlexI%2FhihIj3KIHSE9o9tzU7UGcHEFMz0z7ktdt3KmYcwsaLYyQY6pgFeDP6ik3ksGndn0eN%2F6MeRSqUKfpgumH7KWgJz%2B2hGDm85zLRqfdFR2%2FJJQwWC%2FtInZlRkBlAoc%2FQMyw8TOfEYHzMWBtfdNhP%2FPon9m1z5ErGVhHfeYl8N1lz1JdROUhlyRRTDm8l7SU0LnP5FqZ4bT26rElnZHGEsNNhSBQSHydxJWxUT8e4RlKq6dp6bziK2ZjANFhkGUY6bVVAMubkyypVX%2FWu5&X-Amz-Signature=572af5552047ddee14356776f28e62567cac95dfbc3bcb847ec9df7cd3c9e151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
