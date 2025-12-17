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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J25APP4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsY3rrq%2BuY5fwgjntOMub%2FZYbup2bP757yqqsR0XX%2BVAiBecjoiIuwRGAE2u%2BTGIpZ06lMPrJydlEOjvLgvX6iwoCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMZ8rf9rB6xqq3671CKtwDuYxggwYYs8j%2F8t3YKND8EbCECpFH1Ej0kig6eez7Vbe8wrFLV4b%2BiJy4LY%2Fi797i8QoH5i6mrtagw2hhiH8yskneZRbVqGEMXAkUxiL0zIbd3EsvqbUQa%2B1UbJdmtV1chiT%2FKucQFlquuTo%2F6fsvOh7RNC0lQVyOF3JAiFr1KN0GCVUM45IwAJTKtSsmxSz53CpH2cFEB42vunDdO%2BJ4QchJhh7kd9f4sVxu9giqhpZM3E2rXvR5wu%2F4LiMMfxbgS30%2FuZOAj6BV1e4JUMRJuwRk0k3IuC6HTOaUOGY93l9iFikm7fzGAV1Jj4Ic0jbaFwhW5ffdvuBHvD6pJBH6FHyZAVnO2rVvTuSA8doz80P07y%2FeTQEWrvsTXbBrTHNfe9t8HQVc3ibV40bvD4v51GQ41s5MSyKGYUHarMzJE05cdcD%2Buadm6wMl%2FhejMgZf9nbAhxYzJFcKtCwTeE4NF6zdQePjnFpiljp9Y9ISmgSsh4prc0%2Biyj27J0UhEMYBXVNzL1EDM0w4alMOO48AMw6AQx9EF19vflw7simIABdlxgGB4E5JG8fU%2FmMjZuY25tpY8RNLfmTz%2FPGwlm4Ri3xF1jOWS3bHLRCl6dIetffWlU0FWKSeATZyuU0w%2FrKIygY6pgHMiRjcj3%2F35D37Yr%2FmGlTSQFb9vJfw9Q2vMCoBWdn6c4f1%2BU9yE6YrbFsPIcAGBvt4YL081GSTM%2BDslPnuikLUkZwU89ZmZY4VDBqmPFpbqLKCa582a%2FxX3WYR2pxNbvg4dRZTfdagYE4OeOpqyIy%2BZ4mjfaMz1W7MsbWvQKQtDX7Lo1EPIOy2scXcwgEPyGA%2B09xuuQQAtrjklO9nEbPJ0PvNoqd8&X-Amz-Signature=051cd5f5d136d5fd5085ccb80dcf2e3c66515a369677205bfa3af1ec2bd3954d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J25APP4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsY3rrq%2BuY5fwgjntOMub%2FZYbup2bP757yqqsR0XX%2BVAiBecjoiIuwRGAE2u%2BTGIpZ06lMPrJydlEOjvLgvX6iwoCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMZ8rf9rB6xqq3671CKtwDuYxggwYYs8j%2F8t3YKND8EbCECpFH1Ej0kig6eez7Vbe8wrFLV4b%2BiJy4LY%2Fi797i8QoH5i6mrtagw2hhiH8yskneZRbVqGEMXAkUxiL0zIbd3EsvqbUQa%2B1UbJdmtV1chiT%2FKucQFlquuTo%2F6fsvOh7RNC0lQVyOF3JAiFr1KN0GCVUM45IwAJTKtSsmxSz53CpH2cFEB42vunDdO%2BJ4QchJhh7kd9f4sVxu9giqhpZM3E2rXvR5wu%2F4LiMMfxbgS30%2FuZOAj6BV1e4JUMRJuwRk0k3IuC6HTOaUOGY93l9iFikm7fzGAV1Jj4Ic0jbaFwhW5ffdvuBHvD6pJBH6FHyZAVnO2rVvTuSA8doz80P07y%2FeTQEWrvsTXbBrTHNfe9t8HQVc3ibV40bvD4v51GQ41s5MSyKGYUHarMzJE05cdcD%2Buadm6wMl%2FhejMgZf9nbAhxYzJFcKtCwTeE4NF6zdQePjnFpiljp9Y9ISmgSsh4prc0%2Biyj27J0UhEMYBXVNzL1EDM0w4alMOO48AMw6AQx9EF19vflw7simIABdlxgGB4E5JG8fU%2FmMjZuY25tpY8RNLfmTz%2FPGwlm4Ri3xF1jOWS3bHLRCl6dIetffWlU0FWKSeATZyuU0w%2FrKIygY6pgHMiRjcj3%2F35D37Yr%2FmGlTSQFb9vJfw9Q2vMCoBWdn6c4f1%2BU9yE6YrbFsPIcAGBvt4YL081GSTM%2BDslPnuikLUkZwU89ZmZY4VDBqmPFpbqLKCa582a%2FxX3WYR2pxNbvg4dRZTfdagYE4OeOpqyIy%2BZ4mjfaMz1W7MsbWvQKQtDX7Lo1EPIOy2scXcwgEPyGA%2B09xuuQQAtrjklO9nEbPJ0PvNoqd8&X-Amz-Signature=01bd59cbcf3448759ff3b08191e87ae6ab7b5293edfcb0b7e628b584e4a6cd02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
