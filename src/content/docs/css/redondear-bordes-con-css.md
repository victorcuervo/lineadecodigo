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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYH6RGJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1LOoc7F8ADVWBVD5KrsSvDKVZ%2B2Ks%2FQR5mK7GNhX9RAiEA9uof1tVGyOOaMOWtcc4HRBjPdgcBBjZKtHe4jhgXoacqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt3aaeYzfj7vq6fgyrcA4MGNEKF%2FFRaBW%2FPSFi70AYRGJYEpzq8iFgcuEWerGl9Mrct0UOxRytZ%2BtKFIx8k6%2BRXpHuYRrl6yI9xaFwMhNTh%2FBUtP2QVuOND4%2Fkr2orA0Zu%2BcKHxV5hKcyHQbkUoPn%2Bi63lwCfHhW0CTL1lyXtXJrseYf35wN09pDPr2qFeKhd4hzmJh9XygHLkD3KL2bvwz2UM38RbJPEKYZRUwOd2tuZdPc%2FtPRaXrVy8OzWhLaNQoaZsIQYm6oA8FQhTTunva8t4gJBXtxuxiLsJQaZu9vrWqS%2Fihjl7kDN0Z0A%2FXR50HxwsJIAjXKulbIiLm5v0wjKJZaGRMvM7EJgNRBKndGW9NaBfHjFg6jouZBG7hzAkwZwSO8yrIwGU%2BlHrWfJ%2BEjqmJqCA%2B6y0BzUxnUX%2FixfAEO7MnH5k2QROG2B5Xf72oHp6Q%2Fwv0MjypTXZyRNKg0mg2XlhOSPuOxYDO7iSyTB0rhKf8ziw8F1T30%2FfpkrPwuhmaHPl7VceAkX7dewUNPhNbMWRSaXeETXEqMBqkBDtcx20mKup%2BEnZEgLzCtTDriuwzVnsuCNQC1T36iGAvVevF2xbHka5lMBAxsCs2VM15MokDF%2BE4uEhuHD8rTi1EtbiZtMbI28fBMIvv2MkGOqUBBr4psRQEyEQxx7ilHgTZBx2LNNF8%2Fns%2BofgIq9UITIirJLiOWbdStG%2F7uInd3FF%2Bdzyigy38AJXkCDzeJkHuNnif6Vv%2F3rM0Zs5%2Fq8j6Hz8sgC8v1ctqdaI8zpvPnd0CisJlvpolozlrjRZJczGtPGAQdIjIt%2FAeNy5fgesP933AVxHRQ%2BoosLem7O70AVlOLfP9mu9DCnfkz%2B9RJMzBe%2FP0gkN5&X-Amz-Signature=1a56710dcddb8499b716abb8450a2cc0303ddf49683fa6a46c5d8d8f2bd1f392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYH6RGJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1LOoc7F8ADVWBVD5KrsSvDKVZ%2B2Ks%2FQR5mK7GNhX9RAiEA9uof1tVGyOOaMOWtcc4HRBjPdgcBBjZKtHe4jhgXoacqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt3aaeYzfj7vq6fgyrcA4MGNEKF%2FFRaBW%2FPSFi70AYRGJYEpzq8iFgcuEWerGl9Mrct0UOxRytZ%2BtKFIx8k6%2BRXpHuYRrl6yI9xaFwMhNTh%2FBUtP2QVuOND4%2Fkr2orA0Zu%2BcKHxV5hKcyHQbkUoPn%2Bi63lwCfHhW0CTL1lyXtXJrseYf35wN09pDPr2qFeKhd4hzmJh9XygHLkD3KL2bvwz2UM38RbJPEKYZRUwOd2tuZdPc%2FtPRaXrVy8OzWhLaNQoaZsIQYm6oA8FQhTTunva8t4gJBXtxuxiLsJQaZu9vrWqS%2Fihjl7kDN0Z0A%2FXR50HxwsJIAjXKulbIiLm5v0wjKJZaGRMvM7EJgNRBKndGW9NaBfHjFg6jouZBG7hzAkwZwSO8yrIwGU%2BlHrWfJ%2BEjqmJqCA%2B6y0BzUxnUX%2FixfAEO7MnH5k2QROG2B5Xf72oHp6Q%2Fwv0MjypTXZyRNKg0mg2XlhOSPuOxYDO7iSyTB0rhKf8ziw8F1T30%2FfpkrPwuhmaHPl7VceAkX7dewUNPhNbMWRSaXeETXEqMBqkBDtcx20mKup%2BEnZEgLzCtTDriuwzVnsuCNQC1T36iGAvVevF2xbHka5lMBAxsCs2VM15MokDF%2BE4uEhuHD8rTi1EtbiZtMbI28fBMIvv2MkGOqUBBr4psRQEyEQxx7ilHgTZBx2LNNF8%2Fns%2BofgIq9UITIirJLiOWbdStG%2F7uInd3FF%2Bdzyigy38AJXkCDzeJkHuNnif6Vv%2F3rM0Zs5%2Fq8j6Hz8sgC8v1ctqdaI8zpvPnd0CisJlvpolozlrjRZJczGtPGAQdIjIt%2FAeNy5fgesP933AVxHRQ%2BoosLem7O70AVlOLfP9mu9DCnfkz%2B9RJMzBe%2FP0gkN5&X-Amz-Signature=85eeee342ce20a144bc0c29c290e17d7fb19e597c029a2d17a9a3f98ed82dee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
