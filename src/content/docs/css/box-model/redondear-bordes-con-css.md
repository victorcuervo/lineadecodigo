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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFJB6GC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmzFI6Cp9KQ6JUcwQ3laXpTQsZIGAhDJkyZw51vaXt3AiA4HbqYEAkGygI9cTEnjDzYOKbI6Dniu%2Foj9i8RKfiIriqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDPDPH244ONX7kxczKtwDsCidw6JFKiJM7JPsY7wjd9RW%2BLrSh0VbqsZI79bFl%2F1W%2B1pHC7DV9XlzqqyXt8FRRTcLZ3fkM33ys3ajFIgEoM7gcz1Mmv37fXB5BxCT7StIMu0%2Bdr6hmS9C4jha5%2BSMxq2498lzD246AW3T8MiE3%2FELd5XhPy1KNZqfkSq0QtDk%2FkG3qVMiYtpFUvLkRqkerLL5cRzfxhaI2q0RC7%2FOwAVTlYovhqm9L3M0PqBdBSdQMv3n3mkfUdlja824BvF1iqKEwRKlRKec4HOyvF2g4aVIAV5boN%2FAfVNZs%2BG2TOMKmEPymGdWZVqd72re3pajXu1VpajdV5zhkPiAiFENtFSnSBx9D4x9miKJyK%2FcQ57eyw86RjDq63KNx8wprWPewFpBO91TUced8I06iPitYo8MrSvXmKZmlVGneE82iP1hUDqSm87jdyBUqQYv3mj0XThpOLZaKyArkjIDNHCB4sBjrMNM2%2Bwz3i9LWoZHnTMouZZwXDlSU2AJVxPBY%2BIbqLW5uXL3gLgMFZFDZhaoMvFQunBXwtqDtmVei9g8wumzK1FxXlyBuv3O%2FI%2FOqwYEQ4gDJQl416zwZHSXIjge4gNyN7HnkTEi1ic17PrrThr0pAv%2B7HyCKC7Hz6Aw0p6LygY6pgGDyQZAAWQiNvO20SN1okFYyKlXmUlVz3YpgxfxoQN9%2B3lWqY0sl2PkjjvacTakeGLx5RXdmFhuF9Ej7pIrvhWwpsumXGaTVWMhDtaGLzoA3xfugusnLPM7yYkAPFmbjbyo75kj5knMwycjN3IlJz9Q8J%2BDKPIWg8vEOH79BkGsFpfgjY%2FirAz6RuYMomy8lljKOQ%2BTuVfrO7%2BPjiSo1XWGVIuw3YTo&X-Amz-Signature=aeac5cf37b7fc6397166e50a3b6ae3a797f0979d6bdae9d34b201a802b663c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFJB6GC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmzFI6Cp9KQ6JUcwQ3laXpTQsZIGAhDJkyZw51vaXt3AiA4HbqYEAkGygI9cTEnjDzYOKbI6Dniu%2Foj9i8RKfiIriqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDPDPH244ONX7kxczKtwDsCidw6JFKiJM7JPsY7wjd9RW%2BLrSh0VbqsZI79bFl%2F1W%2B1pHC7DV9XlzqqyXt8FRRTcLZ3fkM33ys3ajFIgEoM7gcz1Mmv37fXB5BxCT7StIMu0%2Bdr6hmS9C4jha5%2BSMxq2498lzD246AW3T8MiE3%2FELd5XhPy1KNZqfkSq0QtDk%2FkG3qVMiYtpFUvLkRqkerLL5cRzfxhaI2q0RC7%2FOwAVTlYovhqm9L3M0PqBdBSdQMv3n3mkfUdlja824BvF1iqKEwRKlRKec4HOyvF2g4aVIAV5boN%2FAfVNZs%2BG2TOMKmEPymGdWZVqd72re3pajXu1VpajdV5zhkPiAiFENtFSnSBx9D4x9miKJyK%2FcQ57eyw86RjDq63KNx8wprWPewFpBO91TUced8I06iPitYo8MrSvXmKZmlVGneE82iP1hUDqSm87jdyBUqQYv3mj0XThpOLZaKyArkjIDNHCB4sBjrMNM2%2Bwz3i9LWoZHnTMouZZwXDlSU2AJVxPBY%2BIbqLW5uXL3gLgMFZFDZhaoMvFQunBXwtqDtmVei9g8wumzK1FxXlyBuv3O%2FI%2FOqwYEQ4gDJQl416zwZHSXIjge4gNyN7HnkTEi1ic17PrrThr0pAv%2B7HyCKC7Hz6Aw0p6LygY6pgGDyQZAAWQiNvO20SN1okFYyKlXmUlVz3YpgxfxoQN9%2B3lWqY0sl2PkjjvacTakeGLx5RXdmFhuF9Ej7pIrvhWwpsumXGaTVWMhDtaGLzoA3xfugusnLPM7yYkAPFmbjbyo75kj5knMwycjN3IlJz9Q8J%2BDKPIWg8vEOH79BkGsFpfgjY%2FirAz6RuYMomy8lljKOQ%2BTuVfrO7%2BPjiSo1XWGVIuw3YTo&X-Amz-Signature=95dc9c6fc25c24b220ed57d37a5b1c8d9d6b51bb4da57f9adf484e06aa0edc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
