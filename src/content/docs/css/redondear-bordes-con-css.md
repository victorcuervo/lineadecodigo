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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGC44NKQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYtrYE2KhK3mVZDb6yPj1ggbawosr4j7RjDhTKdEETgAiAj%2BopBsMU7B5R0xumw3hRgERvhU%2F4I23d5yQZ8UiprgiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv7eBCehtNNfV3FuBKtwD%2FBsiNQ4Rn8mO9NC0BG2pgdhYXjn%2F8DO92Rsr9RcWR4V8%2F6Kieiwy%2BIVflNC4DPfuiX%2F6MYfAIjy2c7yIPjz8zsvsNZlIaauQoIF41diQisrXm3UmU3NeWCA3z3R7O87xw%2BZyCRwgsxgyo69ab05J%2FT25tJ6ltALOXRB65PyJIvKWz%2FYGGGShtGE4%2FMeihO76DM87qlhxuSX1oC9%2B0x2pJjEICfKIWNDmcsxIEfzuF6tsntG9DDR0tzEL5POtADEyTminYWucGp3PoyJF33OtUjfmakVRlKFf%2BD%2Fyx%2BZZG%2BI6BnFuZFNkDMs3u9PZkSyWvSv%2B7SfbWMuW4KotdfHca4xeCOL2QS7eKn62T7N2Jzbj48y2%2BDyd63%2B8OzpJu%2BHXOj7lfM%2Bx8uuI%2FkPWG4BA78If5uGG1JZpnSlh8H%2B8OgXjA8DM3jMoqwyW8mnM%2F595ysSWzdrZ%2FXdTrG3F4uLj3acGt%2B2VG%2Fqxhbrsjoq8xu5%2BUtoV0M3e2ZGXZ3MaIRTX%2BnS5A3yqkz1JP9PRqqdmWa0uneF%2BHImwWYRw4YkuA76YyctK6LttQn6CDgoNuUWri9iE7hOeY730G7HX5fBhLvD5fodHA7SrRLP2ynPgfZ5GzlNYlDmTkS5qw7swn8reyQY6pgHjWcF9p8RCXquezvMA5Uco0KZh%2BWiSnQRfgV3Dke3hBngsEvvugA4%2BiNpOXzYZ%2F0Dzb1rfB5gkJh2ty0R%2FSYKnnlLkK49WKHwVmXNEkoiTNIQnCMmTruw21nbObqolrgiVB8MQpMbnn1IiDKq%2FzdHjx7t0g9wN02QxE5yAfdJJHK%2F7LFuCFyGZHyjP6aeGIkYeNSnboRWciYDD4%2Bupuvam8G1KMIoN&X-Amz-Signature=4e03f79e2d75680b52db6c2920ebecb4d1bb28faf72cb5846f0dd20ac6a58c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGC44NKQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYtrYE2KhK3mVZDb6yPj1ggbawosr4j7RjDhTKdEETgAiAj%2BopBsMU7B5R0xumw3hRgERvhU%2F4I23d5yQZ8UiprgiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv7eBCehtNNfV3FuBKtwD%2FBsiNQ4Rn8mO9NC0BG2pgdhYXjn%2F8DO92Rsr9RcWR4V8%2F6Kieiwy%2BIVflNC4DPfuiX%2F6MYfAIjy2c7yIPjz8zsvsNZlIaauQoIF41diQisrXm3UmU3NeWCA3z3R7O87xw%2BZyCRwgsxgyo69ab05J%2FT25tJ6ltALOXRB65PyJIvKWz%2FYGGGShtGE4%2FMeihO76DM87qlhxuSX1oC9%2B0x2pJjEICfKIWNDmcsxIEfzuF6tsntG9DDR0tzEL5POtADEyTminYWucGp3PoyJF33OtUjfmakVRlKFf%2BD%2Fyx%2BZZG%2BI6BnFuZFNkDMs3u9PZkSyWvSv%2B7SfbWMuW4KotdfHca4xeCOL2QS7eKn62T7N2Jzbj48y2%2BDyd63%2B8OzpJu%2BHXOj7lfM%2Bx8uuI%2FkPWG4BA78If5uGG1JZpnSlh8H%2B8OgXjA8DM3jMoqwyW8mnM%2F595ysSWzdrZ%2FXdTrG3F4uLj3acGt%2B2VG%2Fqxhbrsjoq8xu5%2BUtoV0M3e2ZGXZ3MaIRTX%2BnS5A3yqkz1JP9PRqqdmWa0uneF%2BHImwWYRw4YkuA76YyctK6LttQn6CDgoNuUWri9iE7hOeY730G7HX5fBhLvD5fodHA7SrRLP2ynPgfZ5GzlNYlDmTkS5qw7swn8reyQY6pgHjWcF9p8RCXquezvMA5Uco0KZh%2BWiSnQRfgV3Dke3hBngsEvvugA4%2BiNpOXzYZ%2F0Dzb1rfB5gkJh2ty0R%2FSYKnnlLkK49WKHwVmXNEkoiTNIQnCMmTruw21nbObqolrgiVB8MQpMbnn1IiDKq%2FzdHjx7t0g9wN02QxE5yAfdJJHK%2F7LFuCFyGZHyjP6aeGIkYeNSnboRWciYDD4%2Bupuvam8G1KMIoN&X-Amz-Signature=79995fe7a91ebfb35bde67edc89136e780d02279e16f02719ea0457a9e62ffc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
