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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZRRCIF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDckuJC5kVnRnkSBgI32%2FuM86hlx3TxEMd6nLbbH8Va%2BAIhAKQPSp5nYYFxBsUQTxbZj5kIyM9Hxln5pclK6aOq1g8FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwid2kE2AsazMrgVh4q3AM9XltIfvrTpiq%2FZyxyYwfbtvlQyWj0TC0OwWUcyKYWuDA9tl4713cIKqtZWba3R9B5SWjUnMnZhoOI42IbI3hgtTf9HYnDnplXTSNhlBF8pUhGuAWG5EgzjsXd1F%2BI11ki1ihKjTnpsMFmIUGxQEIWw0w2oMhIf9dTzLQcqoXQtO6SiG68ITJ%2BXuMTGdV7KexsNkOSu73vd1SGykyQYezI6Fjv%2FmLqm4RW2%2FPDFmVP497IS2isypwRR0UM%2BYbTBdYXmml%2BX%2FkFdhoh4u%2F77uBGYBqft4xHR7ERoaDHJaQ%2BFpA5Hh5Vn1Pq%2FgjUs%2BSnFalH1HeJzDL5umKQPTXQFwZGQvqc0o8PSOErNwp46us5QxvoN%2BhYbsPNmmGHOo4vwhKUFlOCwY19VDDY4x5AE9rFggWYLzjwvC1LoWumq%2F8Vc5XKkVQe%2Bk6uEg5AXTcfV55jPYInQgvfALfXcI3rITO2kZBkPcRi%2BH13SJy8K83DmHMwGTmmnNJZ9egDBUGzysZD92w26EF0zP2rNw37BpBVgOZIRTm3uKyuclw91jZW%2FaCX7qYKXwByggTxcIE%2BStSJiQxnCCkjNBzJUF0s%2BtS7wkotT1hnp4mUTVf%2BhXpMbC6wccakcMydufVTjjCT7tnJBjqkAZ1zG0Ohc%2FoVRNZl%2BZRXTTBVnSS0WwtGNQTw9s6TKQo4ta2ym7h%2FAFmOdui4w%2FAnw8V836Y7PSSlUmJS132FnoDlIcF0JbLd3fsRI2gB2x%2Bjrbqqd4g4dZxZKP8qgbYKvs50QhZYJestYCYHcDkB%2BgaePPDxhc7FziN4gqMkRuWr%2BzETkGqBSDWQQ4i2prhNGtW0Uy3Qeg16YWZEqebQJyypexiJ&X-Amz-Signature=f807f35211420d63bc3cb4246c70292a2a1a4f4079ac680c3b3686bd3801a263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZRRCIF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDckuJC5kVnRnkSBgI32%2FuM86hlx3TxEMd6nLbbH8Va%2BAIhAKQPSp5nYYFxBsUQTxbZj5kIyM9Hxln5pclK6aOq1g8FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwid2kE2AsazMrgVh4q3AM9XltIfvrTpiq%2FZyxyYwfbtvlQyWj0TC0OwWUcyKYWuDA9tl4713cIKqtZWba3R9B5SWjUnMnZhoOI42IbI3hgtTf9HYnDnplXTSNhlBF8pUhGuAWG5EgzjsXd1F%2BI11ki1ihKjTnpsMFmIUGxQEIWw0w2oMhIf9dTzLQcqoXQtO6SiG68ITJ%2BXuMTGdV7KexsNkOSu73vd1SGykyQYezI6Fjv%2FmLqm4RW2%2FPDFmVP497IS2isypwRR0UM%2BYbTBdYXmml%2BX%2FkFdhoh4u%2F77uBGYBqft4xHR7ERoaDHJaQ%2BFpA5Hh5Vn1Pq%2FgjUs%2BSnFalH1HeJzDL5umKQPTXQFwZGQvqc0o8PSOErNwp46us5QxvoN%2BhYbsPNmmGHOo4vwhKUFlOCwY19VDDY4x5AE9rFggWYLzjwvC1LoWumq%2F8Vc5XKkVQe%2Bk6uEg5AXTcfV55jPYInQgvfALfXcI3rITO2kZBkPcRi%2BH13SJy8K83DmHMwGTmmnNJZ9egDBUGzysZD92w26EF0zP2rNw37BpBVgOZIRTm3uKyuclw91jZW%2FaCX7qYKXwByggTxcIE%2BStSJiQxnCCkjNBzJUF0s%2BtS7wkotT1hnp4mUTVf%2BhXpMbC6wccakcMydufVTjjCT7tnJBjqkAZ1zG0Ohc%2FoVRNZl%2BZRXTTBVnSS0WwtGNQTw9s6TKQo4ta2ym7h%2FAFmOdui4w%2FAnw8V836Y7PSSlUmJS132FnoDlIcF0JbLd3fsRI2gB2x%2Bjrbqqd4g4dZxZKP8qgbYKvs50QhZYJestYCYHcDkB%2BgaePPDxhc7FziN4gqMkRuWr%2BzETkGqBSDWQQ4i2prhNGtW0Uy3Qeg16YWZEqebQJyypexiJ&X-Amz-Signature=68d934bcb119e6ceb5bf53a200913d1ba25cf11ae74f529ff9cbe06f9500230e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
