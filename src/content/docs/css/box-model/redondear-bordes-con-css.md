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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LX2MXTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7EqFh65G9%2FWx60U8Znn98RTfrVhJ7Ob4H5OQNY3I2RgIhAM9Ona8ckosQZbCCJDiBAebB1MXlCV%2Fsle57xAnTSiwNKv8DCH8QABoMNjM3NDIzMTgzODA1IgxZTVwxcs6hdCquUDkq3AOUkUhav3LMSNdUqRS8kJISRQ2aW9I%2B2atC6dbruqGtqEUB74LgXGOF9paEzWO65XlT5wkYbvNIL5jQL7tJVII7pfbynRbO73SLg5sPym5hV3i4Q%2FXNz5POUoq2Wkdq5drCxjckxtT9V%2FHc6usXtHtcKQ8Tn5nlNfnBC6c940mvjAS2nPsYpq0sX%2FcxhOCrdAEfBoobdqzUUbhGBvXL9S6C6deUTcc%2BcvhbL%2F489GcoUvOnYf%2BS1M5IsRBKUVDJHz8msW1JEFg2WVs9H41K3y9PfWMrvBHweCDrtMxVpQmsuXDNOtU6M8MkL%2BmBKe2D4GtIUVunIyxx26SB0KBMHL6kIoRGJarJRjoaDqSpYEqV%2BlV6SKfsQGrCDxnHLsg9yIvxnZ6IodjvpdUXM5rsaSUW%2BOH0XL9kIezaNAo2Mp6i%2FcFXoffwzhfuXKNmKDYeUFi0L7lO9CG1jYuO8Wk2pWNrCnHQK4ayF3S9viBIarz0c2PhXxaE4ustxtq4KtsrV8i%2FIoc8qKjtaqS2W25%2BOsGS0TpDrhhLNN3oOIO7lx5e%2FqWwbpsCoQiRcrAF2ohxaTYR6ZURNna%2Fjr%2F4f%2FBuZ4ZRVcOknH5rebKQfq8F37WScoFCeHRLhmS2pjax4zDB4YrKBjqkAf9eR1EuimUjpfz0s30t79CIQk3%2BmmaLKgAoTaAdG%2B1SSVrIPHvP4kaFw1P8lRNmXmwU%2BDW1MgwKsFJq5hrgVlyLxY%2FbJ7tyuTet2yZtxV%2Fa1AughcFiSnIEbj%2F2Tk30gHnbTHAXAiAueQZHBtvXe5lwduLEpxwiDiTDIryRZM6pRv8jks63FdY3uZ8PxJHJgV0XgRKtAyMRqtGlukq2wQ%2FwN%2FV%2B&X-Amz-Signature=6da28a54297533200a7c599be1d8068d6ee13feb7acf3cb0dfb3ed1ebf88caf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LX2MXTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7EqFh65G9%2FWx60U8Znn98RTfrVhJ7Ob4H5OQNY3I2RgIhAM9Ona8ckosQZbCCJDiBAebB1MXlCV%2Fsle57xAnTSiwNKv8DCH8QABoMNjM3NDIzMTgzODA1IgxZTVwxcs6hdCquUDkq3AOUkUhav3LMSNdUqRS8kJISRQ2aW9I%2B2atC6dbruqGtqEUB74LgXGOF9paEzWO65XlT5wkYbvNIL5jQL7tJVII7pfbynRbO73SLg5sPym5hV3i4Q%2FXNz5POUoq2Wkdq5drCxjckxtT9V%2FHc6usXtHtcKQ8Tn5nlNfnBC6c940mvjAS2nPsYpq0sX%2FcxhOCrdAEfBoobdqzUUbhGBvXL9S6C6deUTcc%2BcvhbL%2F489GcoUvOnYf%2BS1M5IsRBKUVDJHz8msW1JEFg2WVs9H41K3y9PfWMrvBHweCDrtMxVpQmsuXDNOtU6M8MkL%2BmBKe2D4GtIUVunIyxx26SB0KBMHL6kIoRGJarJRjoaDqSpYEqV%2BlV6SKfsQGrCDxnHLsg9yIvxnZ6IodjvpdUXM5rsaSUW%2BOH0XL9kIezaNAo2Mp6i%2FcFXoffwzhfuXKNmKDYeUFi0L7lO9CG1jYuO8Wk2pWNrCnHQK4ayF3S9viBIarz0c2PhXxaE4ustxtq4KtsrV8i%2FIoc8qKjtaqS2W25%2BOsGS0TpDrhhLNN3oOIO7lx5e%2FqWwbpsCoQiRcrAF2ohxaTYR6ZURNna%2Fjr%2F4f%2FBuZ4ZRVcOknH5rebKQfq8F37WScoFCeHRLhmS2pjax4zDB4YrKBjqkAf9eR1EuimUjpfz0s30t79CIQk3%2BmmaLKgAoTaAdG%2B1SSVrIPHvP4kaFw1P8lRNmXmwU%2BDW1MgwKsFJq5hrgVlyLxY%2FbJ7tyuTet2yZtxV%2Fa1AughcFiSnIEbj%2F2Tk30gHnbTHAXAiAueQZHBtvXe5lwduLEpxwiDiTDIryRZM6pRv8jks63FdY3uZ8PxJHJgV0XgRKtAyMRqtGlukq2wQ%2FwN%2FV%2B&X-Amz-Signature=1b8042f8d6aaf5e50dd14d2f2cb034bb2b4cc23da990173dffee2536b6dec4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
