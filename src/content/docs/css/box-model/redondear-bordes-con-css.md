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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTYIYK3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBw%2FFML9TWpSI%2FdxYlc085wk8%2BqUPlNsfQb%2BegJggnx8AiB0KbGFYbgACRAUfLEymDH98z9iJyVLnvBzX6uG8zLzZSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0gaYFhl4rOPGaEQ7KtwDm9utcwjq5N8aGA2Zj2J8TKyJOModc9R8EUNECk1Ntp9gibLMVdQqLXwAa0xA4dklsdPDg1%2BakfDwSUyagci39BmlxZQN6ZAkOhepRU9%2FgL7jDCv4G6IM3jnHcxkZBwEuap7kTdvaVtF60RcVyeLDOrBk7ilf64etGeObodTTczE8dBi85LdAP9Megm%2F5tEiF68JdbNVrH%2FQ7LVBPAS9KEtVN6Q61lPt1Vw0fAPXQRwSRFdIkVbT9%2F6IOHU6NO6Ew1lUNu0m6MWksV2oPiIEBGml8TtGpCUX%2F22zli9BLKuM20yKurDjFgO3RH%2BHg7nekPTsXIxzjpJV%2FLTgnSMg1%2Fh1B1Qr8uXdJ9n9ja5fmuFO2%2FdhSIECuzhkvevb%2FuHh7mnF5JqxrsyZpG0dbMrAfN5c1dvsLK%2FLPwxWgEizMscisKfOuBo%2BHCSi0bdO46gFrakuIhbTbtxP5AZ0XNFYFCOqsSMkoCEkEZ9YYzcHSp3rk6aXJuzFJB3Jt92DgmO%2FSEQmUSlpnu5hjURGc8bRQ17VNg3hZfPjTIv77oZP8%2BzsEV5hhUNqvnUTQi8qVWO7pKTf%2Fxt5xCi0EWTE5WicFkZwy7edxP4li1qnvwVbtob0xzkO9dsjmf%2BfKnacwv%2BGKygY6pgGL2WO%2FrqMBdFRglaIsaraIdCd8oqjNTdqO0cMhxkV96i%2B0mG6z4gCjo263oR%2FRN8tjk5Tqk%2BfxJJQGVBhVQ%2BElget020It1ANnjMPpWmOQ1o9CxPb2eHtkznq021SMfG2w06mfKTIAXz6%2B8ktqTjie%2FcTWxBdi8gNhQ1pO93By%2BZmtZ3Gl02RjD2L1Swc%2FYZSUgDx9RxLwjMWAcl8EItsf%2B7lLfQw3&X-Amz-Signature=5f7085e056667d3a073f63fd37dc09f6ebaea52c6198e759f26c6f2f4fa615b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTYIYK3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBw%2FFML9TWpSI%2FdxYlc085wk8%2BqUPlNsfQb%2BegJggnx8AiB0KbGFYbgACRAUfLEymDH98z9iJyVLnvBzX6uG8zLzZSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0gaYFhl4rOPGaEQ7KtwDm9utcwjq5N8aGA2Zj2J8TKyJOModc9R8EUNECk1Ntp9gibLMVdQqLXwAa0xA4dklsdPDg1%2BakfDwSUyagci39BmlxZQN6ZAkOhepRU9%2FgL7jDCv4G6IM3jnHcxkZBwEuap7kTdvaVtF60RcVyeLDOrBk7ilf64etGeObodTTczE8dBi85LdAP9Megm%2F5tEiF68JdbNVrH%2FQ7LVBPAS9KEtVN6Q61lPt1Vw0fAPXQRwSRFdIkVbT9%2F6IOHU6NO6Ew1lUNu0m6MWksV2oPiIEBGml8TtGpCUX%2F22zli9BLKuM20yKurDjFgO3RH%2BHg7nekPTsXIxzjpJV%2FLTgnSMg1%2Fh1B1Qr8uXdJ9n9ja5fmuFO2%2FdhSIECuzhkvevb%2FuHh7mnF5JqxrsyZpG0dbMrAfN5c1dvsLK%2FLPwxWgEizMscisKfOuBo%2BHCSi0bdO46gFrakuIhbTbtxP5AZ0XNFYFCOqsSMkoCEkEZ9YYzcHSp3rk6aXJuzFJB3Jt92DgmO%2FSEQmUSlpnu5hjURGc8bRQ17VNg3hZfPjTIv77oZP8%2BzsEV5hhUNqvnUTQi8qVWO7pKTf%2Fxt5xCi0EWTE5WicFkZwy7edxP4li1qnvwVbtob0xzkO9dsjmf%2BfKnacwv%2BGKygY6pgGL2WO%2FrqMBdFRglaIsaraIdCd8oqjNTdqO0cMhxkV96i%2B0mG6z4gCjo263oR%2FRN8tjk5Tqk%2BfxJJQGVBhVQ%2BElget020It1ANnjMPpWmOQ1o9CxPb2eHtkznq021SMfG2w06mfKTIAXz6%2B8ktqTjie%2FcTWxBdi8gNhQ1pO93By%2BZmtZ3Gl02RjD2L1Swc%2FYZSUgDx9RxLwjMWAcl8EItsf%2B7lLfQw3&X-Amz-Signature=f1553e22ab82fc11d7ec52ae58b083f4c9531d1b7fba076e0d34780812ba78dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
