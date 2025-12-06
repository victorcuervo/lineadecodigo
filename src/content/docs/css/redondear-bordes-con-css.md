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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7ITHFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu%2FYVf%2B4cf%2FjQW3CuCH8c8zpXS0LimFvM7BnHpJPTjDAiEAzB0DnbEnHVgeS%2F%2FOH%2BkH%2BtK6dBFLjDUA6KRpeokMzVkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLwKdLHsAuQhqq%2BG%2BCrcAw7%2Bh8x4BuoqTSQxchKMRhdhGu%2FAuHWxR28xtfXkjY5VqoB7yiG6hlWQY3M%2B2GR3zt6r45csx42npih%2FyMA5rHifJLZQ7s8T0Cnmvd5KZDA%2FS1qF3ZmBLr58r5Fh%2FNV93BdTIOpIRN%2BRq7DKdw%2BvZMDZRy8x8OBl%2BBxOaY46zrH5KpHbUyhW9yt30Hzky7X%2BN1eEs3353BzmyWcufuULveN2sAUrOiuCa%2B6hVHLcXNj%2FP8sKEXPly3gsAShShhcFDZl%2Bu4gvHnNn3QEG%2FIt%2BfaZbjOThfPPsLDr31YYM6MhPfJ%2F67jPyW6udfsFvy4KQLjI49wF7d%2BfgbVEzRjLjYVtp%2F5tZnGM1jTE3c8nu8piMZw6J0X%2FKo5e0bpcCBqLj3SVTM5ni6DfZkr4KysfeRBSWH3IsONlN2jFIUwlM2MvS3GX3jHuylpKCLHXRfbvzctr8ut4htqhI7%2FKnbLYEMtqdfro3fiIA1tJQYNREegPF0YD8n5VEvEdy3S8swnMf8NJxnIEj1dXZqpKU4Fyt%2FMEEvF%2FeWXoRpUDlcPO5HoDkziG7s9mu%2F0aJU886gGFAlfMv7ujoq%2FykftjFQd%2Bu3oiZ3kFgvuLc2MOmxao5bzdNWQtrQ8EhEKKHJCQ8MKem0MkGOqUBnmYkT6CmzIp2SB9zmeiSct2Ek41tz8L885RNPV5taJfxcEauSMSBriqF%2BNjPOkkZy9gfo2L75fIQaHgrzovwVK4ctbES1Dm3vP5KtHN318Nhk6PgHnpzdz10UYOzvxPm6JK3PtWvjW1i36WGP9xZSM9nqY4J3RREHSmv4YpvkFTyyHuG1kN14rutZ6mBj0aTQYaaJw2%2BnEqWDEkKteWewNDfsv8b&X-Amz-Signature=3f464826f791c19bf3e862d392ce440daaf65b7eea2a501dc809148f7de1cd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7ITHFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu%2FYVf%2B4cf%2FjQW3CuCH8c8zpXS0LimFvM7BnHpJPTjDAiEAzB0DnbEnHVgeS%2F%2FOH%2BkH%2BtK6dBFLjDUA6KRpeokMzVkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLwKdLHsAuQhqq%2BG%2BCrcAw7%2Bh8x4BuoqTSQxchKMRhdhGu%2FAuHWxR28xtfXkjY5VqoB7yiG6hlWQY3M%2B2GR3zt6r45csx42npih%2FyMA5rHifJLZQ7s8T0Cnmvd5KZDA%2FS1qF3ZmBLr58r5Fh%2FNV93BdTIOpIRN%2BRq7DKdw%2BvZMDZRy8x8OBl%2BBxOaY46zrH5KpHbUyhW9yt30Hzky7X%2BN1eEs3353BzmyWcufuULveN2sAUrOiuCa%2B6hVHLcXNj%2FP8sKEXPly3gsAShShhcFDZl%2Bu4gvHnNn3QEG%2FIt%2BfaZbjOThfPPsLDr31YYM6MhPfJ%2F67jPyW6udfsFvy4KQLjI49wF7d%2BfgbVEzRjLjYVtp%2F5tZnGM1jTE3c8nu8piMZw6J0X%2FKo5e0bpcCBqLj3SVTM5ni6DfZkr4KysfeRBSWH3IsONlN2jFIUwlM2MvS3GX3jHuylpKCLHXRfbvzctr8ut4htqhI7%2FKnbLYEMtqdfro3fiIA1tJQYNREegPF0YD8n5VEvEdy3S8swnMf8NJxnIEj1dXZqpKU4Fyt%2FMEEvF%2FeWXoRpUDlcPO5HoDkziG7s9mu%2F0aJU886gGFAlfMv7ujoq%2FykftjFQd%2Bu3oiZ3kFgvuLc2MOmxao5bzdNWQtrQ8EhEKKHJCQ8MKem0MkGOqUBnmYkT6CmzIp2SB9zmeiSct2Ek41tz8L885RNPV5taJfxcEauSMSBriqF%2BNjPOkkZy9gfo2L75fIQaHgrzovwVK4ctbES1Dm3vP5KtHN318Nhk6PgHnpzdz10UYOzvxPm6JK3PtWvjW1i36WGP9xZSM9nqY4J3RREHSmv4YpvkFTyyHuG1kN14rutZ6mBj0aTQYaaJw2%2BnEqWDEkKteWewNDfsv8b&X-Amz-Signature=a6808def862bee1d6c643c46078e5f5d5625c882cfa211eb16c5f173b2f7dfc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
