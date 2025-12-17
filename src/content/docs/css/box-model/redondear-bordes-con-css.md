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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67RGMHY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF6uBjaAy%2FCuYF%2Flfsg3U3Ys1u01kFYUu4fqMfJtaxBwIhANNKTEzWi5rrcj1Y9bDh2rfk%2FtA0W8X5NwCE%2Fi5ed9tqKv8DCH0QABoMNjM3NDIzMTgzODA1Igx13Qbpu9NkfbMR%2FbYq3AMOwmiCQ5o6PwUQB83d0heQp3FC16ojgOb37UXQpfz5yNzocPKtElXtBOw0zweTAqzBW8bVslSsp4kaEHSP4LjYVFlVzelmRjL8boP91jcoNJjylWO0vd%2FMETbWrdR5fgWUjSFAX4MqyiZ7QtYewFZZuE3KfoGcvmtbKTUBZGcFNAjhLizk%2BJ7sLg%2BHCHdBimQW%2B%2FqFW9AAinO1j5DjdNFdWebgqpig6iONbhb8p2yZpjBEvwUvR532etcrUKN%2Fq7MBKNiQNKTiKRalQqdHFw8WzVhp0Ggg4SdmmLwiUGpURQfO5LIBxZ4cT3832bJsNnFSNrYtQUmdmArCQeW3x4XDQfheehFFitmsGgy4XYEQOwBPRJ8dHOzmxK6mQMVre0d3O2UuIkBXkC2vPKKdZ518jgAvPYY3bekDdS68hVCNIk9DokW9ERVU48VzXezFnQtVZGxrGoTc%2BZ9X%2BtcsA5xeQQGNH9d7wNdIaK595v0HUozxACqLeboX6f6QevU1Vt%2FIUpZ%2FJ66dHKG2jk%2BC3CRAwcvMLYRW4xrNU88YblWfp86N8YHBOSX0ogs7R1Y19zIeuWuQ5PUTgCdJpx4u5acRuRvMKY2kzoICf%2FHUL%2BwWYuGB0q2XAALe%2BuwZuDCIq4rKBjqkAcD2uvTfKxnNVOEi2DCsULuvPAYXs4BGIAxRVFWdVxz4PnBFg9Hcp6E0GCDCxhq0EwUtob%2BqpmQ4gP1YIMt93Bvl%2Bj8zU8mjOtAXalL0fUREd%2BKCtzra8MqXJvlGX9aSKzX3aNK1ICNc0J3aXxzppnpesOfnxvkbmLZSTJY5W4DIMXLcsQeLXHnxvLRItKDQOJJuR4MHTL%2BN0vZIzkqF6yFcKj0c&X-Amz-Signature=8a89fc3d3c76a93e397cf23c35b648260d96b0e88d685e40eff56ced1f4d0eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67RGMHY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF6uBjaAy%2FCuYF%2Flfsg3U3Ys1u01kFYUu4fqMfJtaxBwIhANNKTEzWi5rrcj1Y9bDh2rfk%2FtA0W8X5NwCE%2Fi5ed9tqKv8DCH0QABoMNjM3NDIzMTgzODA1Igx13Qbpu9NkfbMR%2FbYq3AMOwmiCQ5o6PwUQB83d0heQp3FC16ojgOb37UXQpfz5yNzocPKtElXtBOw0zweTAqzBW8bVslSsp4kaEHSP4LjYVFlVzelmRjL8boP91jcoNJjylWO0vd%2FMETbWrdR5fgWUjSFAX4MqyiZ7QtYewFZZuE3KfoGcvmtbKTUBZGcFNAjhLizk%2BJ7sLg%2BHCHdBimQW%2B%2FqFW9AAinO1j5DjdNFdWebgqpig6iONbhb8p2yZpjBEvwUvR532etcrUKN%2Fq7MBKNiQNKTiKRalQqdHFw8WzVhp0Ggg4SdmmLwiUGpURQfO5LIBxZ4cT3832bJsNnFSNrYtQUmdmArCQeW3x4XDQfheehFFitmsGgy4XYEQOwBPRJ8dHOzmxK6mQMVre0d3O2UuIkBXkC2vPKKdZ518jgAvPYY3bekDdS68hVCNIk9DokW9ERVU48VzXezFnQtVZGxrGoTc%2BZ9X%2BtcsA5xeQQGNH9d7wNdIaK595v0HUozxACqLeboX6f6QevU1Vt%2FIUpZ%2FJ66dHKG2jk%2BC3CRAwcvMLYRW4xrNU88YblWfp86N8YHBOSX0ogs7R1Y19zIeuWuQ5PUTgCdJpx4u5acRuRvMKY2kzoICf%2FHUL%2BwWYuGB0q2XAALe%2BuwZuDCIq4rKBjqkAcD2uvTfKxnNVOEi2DCsULuvPAYXs4BGIAxRVFWdVxz4PnBFg9Hcp6E0GCDCxhq0EwUtob%2BqpmQ4gP1YIMt93Bvl%2Bj8zU8mjOtAXalL0fUREd%2BKCtzra8MqXJvlGX9aSKzX3aNK1ICNc0J3aXxzppnpesOfnxvkbmLZSTJY5W4DIMXLcsQeLXHnxvLRItKDQOJJuR4MHTL%2BN0vZIzkqF6yFcKj0c&X-Amz-Signature=a29160c6d6fbd219b86e952e869e6ebf4569bebda223304df24f81e5aa1568fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
