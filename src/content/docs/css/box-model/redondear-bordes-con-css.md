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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZ7NWWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRXvDu%2FUSMhLBGQYZ2ect%2Bz4Gwj71t2jHAO8qhBQzQRgIhAJz%2BOI0Qw55VR8z01uAQ2CM5PWKvgiZ%2B3jHJka0lcmgSKv8DCHgQABoMNjM3NDIzMTgzODA1IgyHBUtTbaF7wKApikQq3AOIimPKt999KLWMCfZsfCz2O%2F5Z7BqFZO6EX4yKGH78fSNqMQVueheQ7LgS3zxwsr3P4BEr2p7h3JM2YfqSsC%2BMDmeb8F5PVuE2%2Fve%2FdQLZLjPH4pSblIF0tfRpu5aRTIvRKBiNOwp3V24G6jvJOwQRwcGSB82fFPW3V5%2F2SxevJLJIxZ2WDFxNISmXehoa7fWzEA8Tft%2BuxSCvN7Y%2BEIabkztLQad4faxulntYYP9JlLrEKkKmEfLscPa2C4hPLBdld%2BpSZsRYNQyu%2BESzdeH%2FGArXHIm7GWpa8eSmHdV5ghQXXochPWJlXH9Xxj%2B2MvG%2BCNFWjsOJ6vlKGgaYKATnxCym2FYVsRd3aXsjlBLZzLbyOfjoA7JO88Bj3J1yFr%2FgXFoFh0%2F7tqJ1iYE00PPvI%2Bvnp33JNo19ikxlMHFd9TqsIO6sGdYLNKz4jUKMkUrf2Rv%2B7UhEA4gM422ED2xtavtkIvaoYM4leCIkEOPamkD7h7q5VaqcpBy5NYpVxu%2BtKR%2F3O2GzCIv9tW20tixEVHxSJ5Wxn%2B19VIFSzP3Gc6x4KhMrkQKrTxZ9CDRsIWwzrC1KoYXILbiUsrmK8%2FGPjAvFQNQyRpABlZKxZ6PopVtY2ljx66mHOOs2HTCduInKBjqkAdy7suubXjGB2to2iHSu7w4PsOFyzR%2Bzjb7qwOHMn19KAtNNtTtXFBtV9CQSj4hU%2FxWT9s1FVzOvxuW55BxRC4x5inHUHub%2BM165fBkPvz1QdMUYYhQ3rYbTZ4sB7z93jLpE7iVrqH2k2gX%2BMoDeWCgbdd1%2F2SAqF8Zc7WnWQxhsleb2mafQ82xFYlYkDYTcguC0Mu1uo4w1cUuYPRKCc5SDK1yv&X-Amz-Signature=ab9afab1310f34ee9090eb91093f962f470545cc7ad2b83d645a842bc4efc061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZ7NWWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRXvDu%2FUSMhLBGQYZ2ect%2Bz4Gwj71t2jHAO8qhBQzQRgIhAJz%2BOI0Qw55VR8z01uAQ2CM5PWKvgiZ%2B3jHJka0lcmgSKv8DCHgQABoMNjM3NDIzMTgzODA1IgyHBUtTbaF7wKApikQq3AOIimPKt999KLWMCfZsfCz2O%2F5Z7BqFZO6EX4yKGH78fSNqMQVueheQ7LgS3zxwsr3P4BEr2p7h3JM2YfqSsC%2BMDmeb8F5PVuE2%2Fve%2FdQLZLjPH4pSblIF0tfRpu5aRTIvRKBiNOwp3V24G6jvJOwQRwcGSB82fFPW3V5%2F2SxevJLJIxZ2WDFxNISmXehoa7fWzEA8Tft%2BuxSCvN7Y%2BEIabkztLQad4faxulntYYP9JlLrEKkKmEfLscPa2C4hPLBdld%2BpSZsRYNQyu%2BESzdeH%2FGArXHIm7GWpa8eSmHdV5ghQXXochPWJlXH9Xxj%2B2MvG%2BCNFWjsOJ6vlKGgaYKATnxCym2FYVsRd3aXsjlBLZzLbyOfjoA7JO88Bj3J1yFr%2FgXFoFh0%2F7tqJ1iYE00PPvI%2Bvnp33JNo19ikxlMHFd9TqsIO6sGdYLNKz4jUKMkUrf2Rv%2B7UhEA4gM422ED2xtavtkIvaoYM4leCIkEOPamkD7h7q5VaqcpBy5NYpVxu%2BtKR%2F3O2GzCIv9tW20tixEVHxSJ5Wxn%2B19VIFSzP3Gc6x4KhMrkQKrTxZ9CDRsIWwzrC1KoYXILbiUsrmK8%2FGPjAvFQNQyRpABlZKxZ6PopVtY2ljx66mHOOs2HTCduInKBjqkAdy7suubXjGB2to2iHSu7w4PsOFyzR%2Bzjb7qwOHMn19KAtNNtTtXFBtV9CQSj4hU%2FxWT9s1FVzOvxuW55BxRC4x5inHUHub%2BM165fBkPvz1QdMUYYhQ3rYbTZ4sB7z93jLpE7iVrqH2k2gX%2BMoDeWCgbdd1%2F2SAqF8Zc7WnWQxhsleb2mafQ82xFYlYkDYTcguC0Mu1uo4w1cUuYPRKCc5SDK1yv&X-Amz-Signature=5e991da51a793bf7f47328fe318cc17e2dd876c6cc751a0c73537ee23047227d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
