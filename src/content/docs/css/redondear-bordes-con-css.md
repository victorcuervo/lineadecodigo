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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVXRPV6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm7t99YYZ8f8ybrNtWsTNZthRAIQSo2CzY7Cqa8F9hwgIhAJOoxqDmw2Xp8uWr%2FhcL0BB9xSc6veby13dtItNukQP%2BKv8DCGAQABoMNjM3NDIzMTgzODA1Igyg6f3536Cn%2F767iC4q3ANIwUz1X7LBPYeq0BX24oKxtE6Y2EyqEE3XjXBQR2TaEip32LqVwZG9um3Dmh3gYD2CmlNW3H37XsFu1xze5TQBw3FfzgkXWi6pzMHbi7BzrRZKGuA5FetPqRrOcGLxBSg5V7O92er4aCJP9mO0%2BWH3AMT09ndUKbggT0ZX0z6uXxmRmMU8b6pj6FEMBytAbPheS5jxHbXCe1V7SrCf1F430fgOaNWXoVe8NlNhnCk%2BCRSGx2K9A5FWVn1QbHO52W1epCfarf1VyVzOo2JFSbtzgmrAaHhGeXeKtJIBPdlT%2BHVG%2B2Q%2BYw68znYz4OBiNux6yV%2B4Mg6onqrzqTLY8whIp4ToIHzNH5WzqqmdN76iZv2FQHVtlc%2FaptlxvkrC%2F3av8B5ftaaM3ccjBDLBujvIJrjf7mknidK8%2FFbg8UYZZz2BYvSpF6qw5q4kJLTjc2M2Az%2BM9cKO8q8OhWRRQztiiX2PvtROadA%2BOR6YZPg7A6tFhcq%2Bv5fvsx3h2uEPGcOQlv56A2ozVdHMwgcj3vhtHVYjxEVbamE5pg6X%2F5A3uoENIYVYwN3e%2BG%2BGctcEUcfgWKQqZwnvxUhGFqYHGzbaB7ojrJuA02h3zn16WcAiW6Dq2PlvJXODYtmAdTCW8cvJBjqkAS2MB9uZg6hL78z1MpXXNQ2j0K5B7BQVaYE2%2B%2BtNycWZEio54LCg0mlLW6SvvSLCUB8CsxYOymDgtqgQ7NXxLq%2FNjz2eb%2FTM1cktHL7zSFIYO2aBNBMZpS6EWR66Dvp730aSQ3E0IIOb8X%2B8k0cT9ys1kOZsKJLd%2B5DttwvRLNz%2FWMeDAEm9IxpSvFUx665WXnFq9PyNqycZ7buJMQnRECb9Mgla&X-Amz-Signature=b4a8ea6c3ea59da1d9678bbf638ee43a005e1fd1ad2d2c5c06f9a75b956c928f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVXRPV6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm7t99YYZ8f8ybrNtWsTNZthRAIQSo2CzY7Cqa8F9hwgIhAJOoxqDmw2Xp8uWr%2FhcL0BB9xSc6veby13dtItNukQP%2BKv8DCGAQABoMNjM3NDIzMTgzODA1Igyg6f3536Cn%2F767iC4q3ANIwUz1X7LBPYeq0BX24oKxtE6Y2EyqEE3XjXBQR2TaEip32LqVwZG9um3Dmh3gYD2CmlNW3H37XsFu1xze5TQBw3FfzgkXWi6pzMHbi7BzrRZKGuA5FetPqRrOcGLxBSg5V7O92er4aCJP9mO0%2BWH3AMT09ndUKbggT0ZX0z6uXxmRmMU8b6pj6FEMBytAbPheS5jxHbXCe1V7SrCf1F430fgOaNWXoVe8NlNhnCk%2BCRSGx2K9A5FWVn1QbHO52W1epCfarf1VyVzOo2JFSbtzgmrAaHhGeXeKtJIBPdlT%2BHVG%2B2Q%2BYw68znYz4OBiNux6yV%2B4Mg6onqrzqTLY8whIp4ToIHzNH5WzqqmdN76iZv2FQHVtlc%2FaptlxvkrC%2F3av8B5ftaaM3ccjBDLBujvIJrjf7mknidK8%2FFbg8UYZZz2BYvSpF6qw5q4kJLTjc2M2Az%2BM9cKO8q8OhWRRQztiiX2PvtROadA%2BOR6YZPg7A6tFhcq%2Bv5fvsx3h2uEPGcOQlv56A2ozVdHMwgcj3vhtHVYjxEVbamE5pg6X%2F5A3uoENIYVYwN3e%2BG%2BGctcEUcfgWKQqZwnvxUhGFqYHGzbaB7ojrJuA02h3zn16WcAiW6Dq2PlvJXODYtmAdTCW8cvJBjqkAS2MB9uZg6hL78z1MpXXNQ2j0K5B7BQVaYE2%2B%2BtNycWZEio54LCg0mlLW6SvvSLCUB8CsxYOymDgtqgQ7NXxLq%2FNjz2eb%2FTM1cktHL7zSFIYO2aBNBMZpS6EWR66Dvp730aSQ3E0IIOb8X%2B8k0cT9ys1kOZsKJLd%2B5DttwvRLNz%2FWMeDAEm9IxpSvFUx665WXnFq9PyNqycZ7buJMQnRECb9Mgla&X-Amz-Signature=4e772030c4a665b21bc9e38e9c198cc862baaa75b3229cb0d0c5cf090a1f6712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
