---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KZD4H7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDQsphwLXiaX%2FNeEIOXK9%2FnsRgrusaiXHT5UWBv6T%2F00AiAFyGNK3rDGsfO6MJSv3HFRMgxxeh520GeOI9PA7EayMir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMe%2Bwbn5wQBVeU0JglKtwDAnIAaNtDVfGJEmC41u6uLQOXa20r9TXiYFF7TJgaPOOjNsIUnrraSl8J8b%2BuUYCGKwqcsr0%2F7O4qJ3WKhCRojySZaPxhYbYYFcf%2BGomh%2FSz0etdXZotl25BUsZzlBAFOGVn%2Bxwxz5yhJqu9XbapLdHWiYjJ7yegSsAZ4kyApFxFZGy6BKeTA9x%2B1lI%2BHB%2Br09hqreCwON86SXe8WXxSsnTS2MXzNvnoedKT8Y2uKF30Bdq5ypzVl5nIrqimC59%2Fn3v9Qlmz8xSj06%2Fp2q2%2BSCn3%2FLQwo%2FCtSN3C7gqTQEBQwfdobSSeQzQ2Zv%2BNneuNNKqcQ8bF8ch5KZ7RQyXTqDEpIe%2F8REmc01itvcInDpMihgBCoC8VNxrYbiqZx6W%2BXmKTqWnNscbIff%2FIEp%2Bv1mW%2BWzbGULqzl0qh9bi%2BD33BbGx1LAsVeocqio8P1cZELfQYSzLBchpPVSiN%2BOA6NcFhbEHbjXZ310Pamsx1ectG74bYsxUzFqqeOBRPwJfyYGW%2Fkk%2FLywG8s%2FoR6W5i7kEW4ZcB7Q4xFT3EATWp6w8%2FAaOxMl9lHe9GTkpBMCVe3Heyl56%2B%2BBUcogFn4%2BrVPz5UFkCnKBy1BOEydiag%2BeVcS1SNF0V60Eb%2FfF8wwm93CyQY6pgHYswYS%2Bu2lP3U8CJ84J1VHNaZRjJ%2FqQvEKKyp4%2B8rvx1LXO4jvZ4IGI992ZKlQ2cTPGFoqqQFxqn1euJ6xL7HyyAUdPf3k7VxXB0D1pAZaOPntc1z%2B%2B0Z0Ny7B5CQqAPgzp%2F44IaZdVaL5SBKfXOYAP69KvhnCGTSY0DjW8RzYkEAb3nwCgZCuRjDrIGuGxC3FOZeUiLtkk9VgjNAuWidalt27VC9e&X-Amz-Signature=e81f926848ae71d1810ffb23e2b67b6c3fc7f176f891abbd2bb4660724703cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KZD4H7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDQsphwLXiaX%2FNeEIOXK9%2FnsRgrusaiXHT5UWBv6T%2F00AiAFyGNK3rDGsfO6MJSv3HFRMgxxeh520GeOI9PA7EayMir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMe%2Bwbn5wQBVeU0JglKtwDAnIAaNtDVfGJEmC41u6uLQOXa20r9TXiYFF7TJgaPOOjNsIUnrraSl8J8b%2BuUYCGKwqcsr0%2F7O4qJ3WKhCRojySZaPxhYbYYFcf%2BGomh%2FSz0etdXZotl25BUsZzlBAFOGVn%2Bxwxz5yhJqu9XbapLdHWiYjJ7yegSsAZ4kyApFxFZGy6BKeTA9x%2B1lI%2BHB%2Br09hqreCwON86SXe8WXxSsnTS2MXzNvnoedKT8Y2uKF30Bdq5ypzVl5nIrqimC59%2Fn3v9Qlmz8xSj06%2Fp2q2%2BSCn3%2FLQwo%2FCtSN3C7gqTQEBQwfdobSSeQzQ2Zv%2BNneuNNKqcQ8bF8ch5KZ7RQyXTqDEpIe%2F8REmc01itvcInDpMihgBCoC8VNxrYbiqZx6W%2BXmKTqWnNscbIff%2FIEp%2Bv1mW%2BWzbGULqzl0qh9bi%2BD33BbGx1LAsVeocqio8P1cZELfQYSzLBchpPVSiN%2BOA6NcFhbEHbjXZ310Pamsx1ectG74bYsxUzFqqeOBRPwJfyYGW%2Fkk%2FLywG8s%2FoR6W5i7kEW4ZcB7Q4xFT3EATWp6w8%2FAaOxMl9lHe9GTkpBMCVe3Heyl56%2B%2BBUcogFn4%2BrVPz5UFkCnKBy1BOEydiag%2BeVcS1SNF0V60Eb%2FfF8wwm93CyQY6pgHYswYS%2Bu2lP3U8CJ84J1VHNaZRjJ%2FqQvEKKyp4%2B8rvx1LXO4jvZ4IGI992ZKlQ2cTPGFoqqQFxqn1euJ6xL7HyyAUdPf3k7VxXB0D1pAZaOPntc1z%2B%2B0Z0Ny7B5CQqAPgzp%2F44IaZdVaL5SBKfXOYAP69KvhnCGTSY0DjW8RzYkEAb3nwCgZCuRjDrIGuGxC3FOZeUiLtkk9VgjNAuWidalt27VC9e&X-Amz-Signature=e14bf3814231562692484db473fbf134782b4155cf2502044dc4ba2fa8756a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
