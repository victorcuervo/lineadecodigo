---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4GRLMEF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC86%2BUhatcOCIjLAPNZD3NqbTbHblwg2l8UmI8Ba9OrxgIhAODL2GXwthkxNNU9mFGCfXiOT3bzbg8m%2FnBz7Xb9gWF3Kv8DCDkQABoMNjM3NDIzMTgzODA1IgyTmv8aBGy79aXWJP4q3ANDeevVazLukLpl9J4p3jzSLJDUYFn7mkqVq%2FogqfD1SiTjyvG6tPca2ascXnaB8EEGCm2kgySbaTdPTg8bF9D3%2B1U0V9Ao7zfQF5ywTM51WBYCAYQo5OyYag5TYqneSZpzrGa8UGSuTs07NI9aFdifc4vZIZIco4adNXHSLrPYYg3Ou5PMWNv71qufcxpwLzqktionkmNLXJ5O6yWX2fwCZxS3e9vXLPRLESOjxY9GeDAiIlhBVjXH8Vt0zGd1mY%2FBtbPH9rZAoUAZ980kR0LbClSfSs2Bu%2FXnsIXwRqHhuUR0FfLfn3ekiZlgWfZNx%2BfEkyT1STOJabD1dxU4ka52oBCcdifgXPk16UBCBeTttwNilOf%2BZcYdB6HbGMGOdw0c2Xulgsba0YIyGjRoeHcFkdwrdaGXm8MDzfMvFGJMlSdlExUzcD9ZD%2FNCXRS4gmC4XUpLupTOOjvbGkKi0Tclf%2FH%2BeZEl4awSTPYRpiWP6lHEiqE2v7u74iXjNbiyGFDpB2psf%2FXlEsadK7Udq7tGwYnypYzxpomHrk04ROE2GDvPhz%2B9s1xvRiuLQLL%2BYzs9KWA7dxC8qcCO5Thw8e%2BrPzIUQ4EgM7WrKOoRcyCDkd4WZ6gMkemNJYQMFzDLlMPJBjqkAVGJOq2MBImfXHriRHfWxyWXmx1kwHSirlBAIeeklQv7bZwgVLDBrDWteHuFMpKvqkLc%2Fdk20r0bqMY2BaIBcwtsja%2FD0GWN%2FdsMPozBrpbFT4zYaOXEBljBhdBeq41Nyay6VA6Uio0W3ilF4jgTQ0Vix6SuOYC%2BE%2BXTD3KF%2FHl9ARweQa8y8MqtIQCm6%2FTx8x19HHGtJ7H5b68hXtu3%2BHX%2BgUEX&X-Amz-Signature=f39be6e0c01ab155bacc239e555a73cb5a08db9f1a5512b8cc2925bfc75b5349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4GRLMEF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC86%2BUhatcOCIjLAPNZD3NqbTbHblwg2l8UmI8Ba9OrxgIhAODL2GXwthkxNNU9mFGCfXiOT3bzbg8m%2FnBz7Xb9gWF3Kv8DCDkQABoMNjM3NDIzMTgzODA1IgyTmv8aBGy79aXWJP4q3ANDeevVazLukLpl9J4p3jzSLJDUYFn7mkqVq%2FogqfD1SiTjyvG6tPca2ascXnaB8EEGCm2kgySbaTdPTg8bF9D3%2B1U0V9Ao7zfQF5ywTM51WBYCAYQo5OyYag5TYqneSZpzrGa8UGSuTs07NI9aFdifc4vZIZIco4adNXHSLrPYYg3Ou5PMWNv71qufcxpwLzqktionkmNLXJ5O6yWX2fwCZxS3e9vXLPRLESOjxY9GeDAiIlhBVjXH8Vt0zGd1mY%2FBtbPH9rZAoUAZ980kR0LbClSfSs2Bu%2FXnsIXwRqHhuUR0FfLfn3ekiZlgWfZNx%2BfEkyT1STOJabD1dxU4ka52oBCcdifgXPk16UBCBeTttwNilOf%2BZcYdB6HbGMGOdw0c2Xulgsba0YIyGjRoeHcFkdwrdaGXm8MDzfMvFGJMlSdlExUzcD9ZD%2FNCXRS4gmC4XUpLupTOOjvbGkKi0Tclf%2FH%2BeZEl4awSTPYRpiWP6lHEiqE2v7u74iXjNbiyGFDpB2psf%2FXlEsadK7Udq7tGwYnypYzxpomHrk04ROE2GDvPhz%2B9s1xvRiuLQLL%2BYzs9KWA7dxC8qcCO5Thw8e%2BrPzIUQ4EgM7WrKOoRcyCDkd4WZ6gMkemNJYQMFzDLlMPJBjqkAVGJOq2MBImfXHriRHfWxyWXmx1kwHSirlBAIeeklQv7bZwgVLDBrDWteHuFMpKvqkLc%2Fdk20r0bqMY2BaIBcwtsja%2FD0GWN%2FdsMPozBrpbFT4zYaOXEBljBhdBeq41Nyay6VA6Uio0W3ilF4jgTQ0Vix6SuOYC%2BE%2BXTD3KF%2FHl9ARweQa8y8MqtIQCm6%2FTx8x19HHGtJ7H5b68hXtu3%2BHX%2BgUEX&X-Amz-Signature=f9653392a7db74dd208cd81206c71dd9e98b00dcb133bdc3d75447cf603a932a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
