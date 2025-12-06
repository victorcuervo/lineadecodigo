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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQAPJODX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKg%2BaD6YGtmk8neGtWjeMtI%2BgZ%2Fmg%2Flvctl1bW5trmAAiEA6icHazn2yGpee7ZosmDpZCWL%2BXpT4f22KusjCfVRX5Uq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHx7jJaeB5xU31Ch4ircA07a9FlakkJPZRJ7T38psLz5C0RFemy7ihR1035N3lxA1y%2F4gRxT0m1fP1n5b9icyRAqW0aU1Mt8FYvRsbpTZTmTPaji7PubjuMt623HBHe5Kj0DDe17aYm4wNb5H6wY7XVDYsOQSTKTPw8ouoYJ52Uq2Pj%2B8bmc7MDaeCXFC03LTt%2F8PW2okBVJHmMuMlKUBmR82fiEW%2Bsyz4NL91hK5ZM9CzsRTBtp6%2FX4TRWcHlsTU3Eagz1q4zvLRBtAPOwauZd860EGQKNwJH2RofSeTz%2FCCunyP%2BdDrGESAHYVTdj31OS4bFywKLILmAZixCNI%2Btg8QU75Nb0dNcjICdAA%2FA8oKT5eeTCOneqVeEaSzSE2HQ5H%2Fw77i64aDF9mq92X7ZEH8poZkdk%2FQQ2kFtceHq1V1XSgV2VedKGPsuShNXL%2BPliEIb9Fe2dyOTwMxEqi4WyEtVkUJZH5SZoVzSivwGk6%2Bn%2BH3EoxfbIhd%2FNP7jVAQKiAk8z6SfXgZxzSTW%2FACTg1hm0MVnU%2FuzgeyPPclGFPyjH4f4DRo4U8qR6BRwlbmTABUnQCrmqk6JeFldol5hzGs6ECv3L6B3tpF2bMJ8wqp2sUIBe0IevnF4lSkbboXmDVvzFJ%2FbnmQuHHMP3D0ckGOqUBzvVJ7WQdTVXoShdwKFyd9gPYU5HYS%2BQ92jEw9ua1Nz7HvyGo3sUlImF6vPoXMfz%2B%2B9KoR%2B4RV1kKlNtK5wFijwXMSJp8otebHNcHd620CjAvSwVARG2qT%2F7vHUYtewKhCMiIGjd6vkSKaXzr4EB1f4a5DqgeXBJBtzdA%2F93wivDstpDOfeqhKuAjXeXwm6pDMrMP5FgIafcMRYD%2B4krA01BN7L8z&X-Amz-Signature=d88c2a3e6e4302c3e6b4ec81822662d259d8fcb169931456f1d6b7b4eeffd273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQAPJODX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKg%2BaD6YGtmk8neGtWjeMtI%2BgZ%2Fmg%2Flvctl1bW5trmAAiEA6icHazn2yGpee7ZosmDpZCWL%2BXpT4f22KusjCfVRX5Uq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHx7jJaeB5xU31Ch4ircA07a9FlakkJPZRJ7T38psLz5C0RFemy7ihR1035N3lxA1y%2F4gRxT0m1fP1n5b9icyRAqW0aU1Mt8FYvRsbpTZTmTPaji7PubjuMt623HBHe5Kj0DDe17aYm4wNb5H6wY7XVDYsOQSTKTPw8ouoYJ52Uq2Pj%2B8bmc7MDaeCXFC03LTt%2F8PW2okBVJHmMuMlKUBmR82fiEW%2Bsyz4NL91hK5ZM9CzsRTBtp6%2FX4TRWcHlsTU3Eagz1q4zvLRBtAPOwauZd860EGQKNwJH2RofSeTz%2FCCunyP%2BdDrGESAHYVTdj31OS4bFywKLILmAZixCNI%2Btg8QU75Nb0dNcjICdAA%2FA8oKT5eeTCOneqVeEaSzSE2HQ5H%2Fw77i64aDF9mq92X7ZEH8poZkdk%2FQQ2kFtceHq1V1XSgV2VedKGPsuShNXL%2BPliEIb9Fe2dyOTwMxEqi4WyEtVkUJZH5SZoVzSivwGk6%2Bn%2BH3EoxfbIhd%2FNP7jVAQKiAk8z6SfXgZxzSTW%2FACTg1hm0MVnU%2FuzgeyPPclGFPyjH4f4DRo4U8qR6BRwlbmTABUnQCrmqk6JeFldol5hzGs6ECv3L6B3tpF2bMJ8wqp2sUIBe0IevnF4lSkbboXmDVvzFJ%2FbnmQuHHMP3D0ckGOqUBzvVJ7WQdTVXoShdwKFyd9gPYU5HYS%2BQ92jEw9ua1Nz7HvyGo3sUlImF6vPoXMfz%2B%2B9KoR%2B4RV1kKlNtK5wFijwXMSJp8otebHNcHd620CjAvSwVARG2qT%2F7vHUYtewKhCMiIGjd6vkSKaXzr4EB1f4a5DqgeXBJBtzdA%2F93wivDstpDOfeqhKuAjXeXwm6pDMrMP5FgIafcMRYD%2B4krA01BN7L8z&X-Amz-Signature=898a27e4f34c7ed57de450edbf0901625e5d2ac9d7db2a5baba098dc9f5edbe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
