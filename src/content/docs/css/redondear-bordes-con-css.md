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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6OC4PM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYPX8UXhbjr19idXdqdMIXTg6SnRNx1g1wrTAn8trWtAiAidd0MUtCqG88GHdUeBsT2jHtIrxoFMuU3ansMMmRahCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr194Yh9QrtnH1AKtKtwDVuHsa80OyUnPX%2B1BIzQBsfkZrfci4pqxx1FJ%2F%2BIfs496R3tYGdhporx6c39KqjJG8nmucNY8HPmKQZgOjmmxTnr%2FEZPvwbFAS%2Bob2fgntmE02nnRZ%2BbbnhsxrZUAltI%2FP264RNvwkZhVXvDgRTDYlE3dmLLr1PWL7RjFvZVJIS1%2BL4SN4OViXGJk0H2n2PB7R%2BQQ5YoZgNzUkFBgM2EXM1XdEZk%2FaAUZ4gTMNH8jbZ8aZ8hzCuQ83DuGNcOdpqKw1rpl6y8OwLGuYe2HHWxzGGigouZPxla%2FSDoK1CMWccICT0lX3JSVKvaAexlNgtRWAsnO1Zhl4SZdzcMI8OUMhu8Alg%2BNlnDgOcLr5QE6FEccEWjkGxXTkafmabQUrh181qlJHB37vqtGfsSVUIhZ5zPm8B26gV98rtUoEBumjvKwC9nXWarhMko5RHGutx8clUTC2xVdkjnWE1BzZYHcU52Iy5j%2Fj2v2yyMuPws1DK61ZTOnIrXfd6zXVj9ufkSzkROGzNqGf6MBpxVMGjBI7VXHckhihW%2BTD60C6hAwRE1CsaVdzTui4kIa361tXjiE8G56UWA4aklTRRRSJtZMBofksn1B1kzsLkQVjdDp2ESRIJogyBQFNzwLckkwibTcyQY6pgHtlppnx9wyszvcgoiI7jo2ifFGuD9IpPbRqTPqu6X1jLv37qPNsdqDhePwImxfcvlnyUS2jyY78GgVow9Nw4MORe80I2WC%2F3Bf4sl0bX6xTp9533Qsz%2BMUBPRVSiVwgcbgF9yRaI9z1Rn%2BVdaySMQeINnzESfzWuUPWfc6e1mPKjurZ5QktT%2BA5m01mYCQM2puNmo8hnE7dyAla9f3LxMeJLMjwr1%2B&X-Amz-Signature=e7a510c0975f078bac7a20922cc387324a16e536afcd9e6cb36501962b0f9641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6OC4PM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYPX8UXhbjr19idXdqdMIXTg6SnRNx1g1wrTAn8trWtAiAidd0MUtCqG88GHdUeBsT2jHtIrxoFMuU3ansMMmRahCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr194Yh9QrtnH1AKtKtwDVuHsa80OyUnPX%2B1BIzQBsfkZrfci4pqxx1FJ%2F%2BIfs496R3tYGdhporx6c39KqjJG8nmucNY8HPmKQZgOjmmxTnr%2FEZPvwbFAS%2Bob2fgntmE02nnRZ%2BbbnhsxrZUAltI%2FP264RNvwkZhVXvDgRTDYlE3dmLLr1PWL7RjFvZVJIS1%2BL4SN4OViXGJk0H2n2PB7R%2BQQ5YoZgNzUkFBgM2EXM1XdEZk%2FaAUZ4gTMNH8jbZ8aZ8hzCuQ83DuGNcOdpqKw1rpl6y8OwLGuYe2HHWxzGGigouZPxla%2FSDoK1CMWccICT0lX3JSVKvaAexlNgtRWAsnO1Zhl4SZdzcMI8OUMhu8Alg%2BNlnDgOcLr5QE6FEccEWjkGxXTkafmabQUrh181qlJHB37vqtGfsSVUIhZ5zPm8B26gV98rtUoEBumjvKwC9nXWarhMko5RHGutx8clUTC2xVdkjnWE1BzZYHcU52Iy5j%2Fj2v2yyMuPws1DK61ZTOnIrXfd6zXVj9ufkSzkROGzNqGf6MBpxVMGjBI7VXHckhihW%2BTD60C6hAwRE1CsaVdzTui4kIa361tXjiE8G56UWA4aklTRRRSJtZMBofksn1B1kzsLkQVjdDp2ESRIJogyBQFNzwLckkwibTcyQY6pgHtlppnx9wyszvcgoiI7jo2ifFGuD9IpPbRqTPqu6X1jLv37qPNsdqDhePwImxfcvlnyUS2jyY78GgVow9Nw4MORe80I2WC%2F3Bf4sl0bX6xTp9533Qsz%2BMUBPRVSiVwgcbgF9yRaI9z1Rn%2BVdaySMQeINnzESfzWuUPWfc6e1mPKjurZ5QktT%2BA5m01mYCQM2puNmo8hnE7dyAla9f3LxMeJLMjwr1%2B&X-Amz-Signature=d381b4ea4c3639c6e6673e2a787f9f88d12473df973c7750b304c4fdd37646e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
