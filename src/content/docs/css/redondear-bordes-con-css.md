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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCHN7QK3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnVALl4uQrqxX%2BcZyMfN2AvVXjebJr7ZETNmd9pQQj1AiBV7xEfaDHxs0m%2BaXYaBKQ8E6lpFKIWAAVVhAHXjPiZOCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLWTLCyZnXISqfdSgKtwDrEOpNTrs9SZpzuyZ82jt2L2fh3LUQQ3LROKOUZaJa9hTXfJZgBf7vgB4ECtdWqUebTg1554%2B6atusrCf4wWTzYY8fv%2BBPjfQHByVGL608BHgWXy%2F0xVRk%2BjVbCtNe3EYDx8Oex6V9176E0IQZgQEqawD2dkL0Cu1CqFGRY2%2FMC%2BvPPQnV25%2BR1K3hRgL%2FhVo0og4wp3yOR4Iw7bYF49w0FVBIq4MseXo10tGkN5jv0HD%2BTWzVOhFzUxj4qfnyIeyp05O8LBKn5svShus%2Fpm8bjyOPM3W95pD0HEP4I5%2BZ60sX5bur2bNfWeXQnB8rCpIL0dwM5xFfy9b2A%2FbCpShDg6MaHo4wfCEBgOcH%2F%2BFaa6YpdeDgPrPjsKtGXFJVJVKp7%2FOb35GmpmDjDrRkx7gcO914ADUbU9bOPNyvsgY7Wft0tKgwovF%2F0L8gnRSvlLaZf13eJ5xCAtClaXY6XphkdZpXoU41NTcgBp419ZHzN7OVg9nrzKefhHZ%2BCGVOwu8cE1f7PGtW2aNb4Fm9S7z%2BHsnHgapEoRkpj5Sfy1ihKH0YKgvb6TrhTPKi4CTUkvc%2FM2HsZFCa49x7S%2BDBkbA7Pq2kJaWha7RTEN2dib0yBb1Oz7TedVVESjvg8AwpJDbyQY6pgGwVHodMieUUHBAYusiI6PYNL%2BZXyRTMtjTA0Ucrskj7DJC%2FeuAhGbeIL8vLnsEKCTyaqnIzPVipkzJbY8ccDxYyPgsOb2tDlJ8hbGZc1pyvAJIYYuw6wNE9XWQ7M05pugJNdbtUdbNT46hakwtu3tPVYpsu3rgJTGP9ldmYuQxvZxQiN5JJ2296b8Tx46an%2FSAXKz9WXLsHKQEGm7YpxsNVMK6dt4K&X-Amz-Signature=e53f7de3ab2b5f721f3cf115d068d1f5879704f4b10f2bc7d8983f1b5c352b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCHN7QK3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnVALl4uQrqxX%2BcZyMfN2AvVXjebJr7ZETNmd9pQQj1AiBV7xEfaDHxs0m%2BaXYaBKQ8E6lpFKIWAAVVhAHXjPiZOCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLWTLCyZnXISqfdSgKtwDrEOpNTrs9SZpzuyZ82jt2L2fh3LUQQ3LROKOUZaJa9hTXfJZgBf7vgB4ECtdWqUebTg1554%2B6atusrCf4wWTzYY8fv%2BBPjfQHByVGL608BHgWXy%2F0xVRk%2BjVbCtNe3EYDx8Oex6V9176E0IQZgQEqawD2dkL0Cu1CqFGRY2%2FMC%2BvPPQnV25%2BR1K3hRgL%2FhVo0og4wp3yOR4Iw7bYF49w0FVBIq4MseXo10tGkN5jv0HD%2BTWzVOhFzUxj4qfnyIeyp05O8LBKn5svShus%2Fpm8bjyOPM3W95pD0HEP4I5%2BZ60sX5bur2bNfWeXQnB8rCpIL0dwM5xFfy9b2A%2FbCpShDg6MaHo4wfCEBgOcH%2F%2BFaa6YpdeDgPrPjsKtGXFJVJVKp7%2FOb35GmpmDjDrRkx7gcO914ADUbU9bOPNyvsgY7Wft0tKgwovF%2F0L8gnRSvlLaZf13eJ5xCAtClaXY6XphkdZpXoU41NTcgBp419ZHzN7OVg9nrzKefhHZ%2BCGVOwu8cE1f7PGtW2aNb4Fm9S7z%2BHsnHgapEoRkpj5Sfy1ihKH0YKgvb6TrhTPKi4CTUkvc%2FM2HsZFCa49x7S%2BDBkbA7Pq2kJaWha7RTEN2dib0yBb1Oz7TedVVESjvg8AwpJDbyQY6pgGwVHodMieUUHBAYusiI6PYNL%2BZXyRTMtjTA0Ucrskj7DJC%2FeuAhGbeIL8vLnsEKCTyaqnIzPVipkzJbY8ccDxYyPgsOb2tDlJ8hbGZc1pyvAJIYYuw6wNE9XWQ7M05pugJNdbtUdbNT46hakwtu3tPVYpsu3rgJTGP9ldmYuQxvZxQiN5JJ2296b8Tx46an%2FSAXKz9WXLsHKQEGm7YpxsNVMK6dt4K&X-Amz-Signature=e173845b3b27ee284fae7f635bf0c7f68939cd997f35e845ae9e8234a677cb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
