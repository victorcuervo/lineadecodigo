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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL3WXUC7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbou6G6Bwrb1mI45sAVfBDyjycaT0oU4LTM3AGAZqbBAiB5REafH6IE72Usb7E0pSYUu1tazZ67pulf7yNgyjBRuir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMu72tWneOhmkkGIrmKtwDF%2F2scUgKC%2FN3OrKu9mB1CBf3nqt8sC73%2Ft%2BUyegHGBM%2FhtKBf0xMfDJrLxHQB4CP8hODIlZroWdWHIebUrnBGjip0gZ%2FJuHDPnMXgX6vr%2BcZ3y53Afd3xwD4pBoFhZ5iRApHMRadM8ZTNr%2F%2BjzWKVXZNZHRm1cw52Y8JVawvZ%2FkYQP8Jlou2%2B8vhhuYvJsvjVEFvJ8xN7Zhfl69Av67TA%2BbcrhXcWOMb098PiDdLkf8Y%2F1cN5MQFFsh8YVkZIXJgNgHdnImuimwQhdd%2FVhqa%2F%2FUYw0BnbfYex4ZLJUUPBxNyrsO1MGZhxbVjJ%2FebHLkEM%2BmGUKxnPScyPGzOp5kVhnvDsqGWH2TxlAqrp3VMUuZA2UOcfIxEgdVo5oxDTDX9tZCdY1m7pXL3UU4e2l76y9Fix3QeiV9fQGudyOsK0%2Fn7%2Fk9AYBA3vaJCjjxGt2U2vAR%2FKWdpy5C%2BNIx3mhmDpx5g7ugevD%2Bhatlax4dgpumvXAg%2FDDSMzQSZmV2M6heBwUK7YbauKH5Qmeduhve%2BZz5r%2BjLmuGHj%2FqUWV4MhEMnNTT1YcUvsTGFAjtfy43Cr7v3bWk3V8a1cubB%2FtG2iIg3W%2BaJsL8asdqq3JwOlqFuadPQNnjV%2Fuh7EI2Iw8OCKygY6pgGzT7wWbKiklUCsOefHQpg1Gb5O%2BM0J35lda26jxNLohD5nTShNnKIAO36GL1D0PtpJD69gG5FAwOj%2F9kOLF0DFlKigJjNiaqYPnwe2hIfCETdGIRo%2FSC74wBoyjtGkbA7DEVw4lO4pzG%2B%2BnZW0CrT6cyx2lT89MwVB7ZutX7QpHrq5hoYoml%2BTzenGuNtLvPoeDxNA6hoFMICgIAjXWobbOwjNUFr1&X-Amz-Signature=d03b2d2af54538aa0f1e286c38899b35137b812b43b4c9714d5ee60e3251799e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL3WXUC7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbou6G6Bwrb1mI45sAVfBDyjycaT0oU4LTM3AGAZqbBAiB5REafH6IE72Usb7E0pSYUu1tazZ67pulf7yNgyjBRuir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMu72tWneOhmkkGIrmKtwDF%2F2scUgKC%2FN3OrKu9mB1CBf3nqt8sC73%2Ft%2BUyegHGBM%2FhtKBf0xMfDJrLxHQB4CP8hODIlZroWdWHIebUrnBGjip0gZ%2FJuHDPnMXgX6vr%2BcZ3y53Afd3xwD4pBoFhZ5iRApHMRadM8ZTNr%2F%2BjzWKVXZNZHRm1cw52Y8JVawvZ%2FkYQP8Jlou2%2B8vhhuYvJsvjVEFvJ8xN7Zhfl69Av67TA%2BbcrhXcWOMb098PiDdLkf8Y%2F1cN5MQFFsh8YVkZIXJgNgHdnImuimwQhdd%2FVhqa%2F%2FUYw0BnbfYex4ZLJUUPBxNyrsO1MGZhxbVjJ%2FebHLkEM%2BmGUKxnPScyPGzOp5kVhnvDsqGWH2TxlAqrp3VMUuZA2UOcfIxEgdVo5oxDTDX9tZCdY1m7pXL3UU4e2l76y9Fix3QeiV9fQGudyOsK0%2Fn7%2Fk9AYBA3vaJCjjxGt2U2vAR%2FKWdpy5C%2BNIx3mhmDpx5g7ugevD%2Bhatlax4dgpumvXAg%2FDDSMzQSZmV2M6heBwUK7YbauKH5Qmeduhve%2BZz5r%2BjLmuGHj%2FqUWV4MhEMnNTT1YcUvsTGFAjtfy43Cr7v3bWk3V8a1cubB%2FtG2iIg3W%2BaJsL8asdqq3JwOlqFuadPQNnjV%2Fuh7EI2Iw8OCKygY6pgGzT7wWbKiklUCsOefHQpg1Gb5O%2BM0J35lda26jxNLohD5nTShNnKIAO36GL1D0PtpJD69gG5FAwOj%2F9kOLF0DFlKigJjNiaqYPnwe2hIfCETdGIRo%2FSC74wBoyjtGkbA7DEVw4lO4pzG%2B%2BnZW0CrT6cyx2lT89MwVB7ZutX7QpHrq5hoYoml%2BTzenGuNtLvPoeDxNA6hoFMICgIAjXWobbOwjNUFr1&X-Amz-Signature=8641d8a067d27077a17537bc40f10f69306beadd0a019561f8d9d1daa0f9f8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
