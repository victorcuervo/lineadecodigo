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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IPAK43X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzO4rFFXcZV0BehaRrmJqdfxDMjjnPeVczsMkArQRYbAiAq9r8Q3tpv%2BT84abzibVzHNrc%2FaPJsPmmg1z1wqOF3GSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjs9350qrSXuikG%2FkKtwDmlYOqNedxFaZ%2FZGy%2BTP0w%2FHp6qX5g5%2Ba%2FKDgASbN99qVdRTY4hNSNuRKVjQXmZl%2F5Xn90jMtJyWZbWDdvMnVMo8azSKkjA94nqiRuf3eP9jPdGFPjzAbQeC%2BAl%2BKK8tR1V0o8r0zrNtgzFLywa0X34kuLhGFhDiiOlhEAxUF1WkAhCRcJ0SotaFMy%2BFF6sGHeKOfqmVqjCb0c4SyWD0PM3wnYbHaG4HfjS3hln8lkG%2B4V7S39iQvP7YSKhWBRwt30ALSZZGf82%2BBAkwbHRVJI%2BMZ0zqmvUDM1TVI7VSn0s0Iw6As3BrruFQIEX8a%2FPl2%2BjfV6NaNNU0kmpJu8QW%2B4AE%2BCAuOQde6SR5z3mDt4eNm3jSi8nVo4imE%2BuScS2jqFc8YaO37ozpgoMpb6D%2BIoz8tSrrQMY0cD1xyGZossUUh2iXOqtA0HTCpBP0KlDG%2Fh5zIxMh3LYwj6Dir1Hb%2FNEtSXgWqvl7cu%2BwKnv%2BNTlC9d9jHer9x2oBo9YUnXDoohzXBwqTo18J1rsZWt0GhV%2BdQeO1bOjVAvjTW91HlzUnRhe4RDtZ29GONEXkX0wfdiRmTusupYQZktEnLMo5F2q9Kezum1Xd6qbJaV6PRSA1K5SVvf%2FJJlrs7%2BQcw2aHdyQY6pgE5J07W3h%2FFjQrUOsZEkoK6CU6N2rrJisONxmlyYvSiJKVT9hLce4vUr8v%2BZnJEMPF8KdRhSQzAQ2%2FltBchpW%2BWCOs40ER0TrDWPLIesNUsdN%2FVkx%2ByVEzaNgVyW3MwtX%2Bkaay%2F8nEVgwKJNHTIx431NXrGD%2Fg%2BAmFCh%2F%2F4b6%2BHNqpT0HCKVVpM7aHzKUIarH9AK9ZLrZNMLbMrb5Q9b5Xwqc0CqDhs&X-Amz-Signature=e7bfd0a1a22cc8882929bcc2aa1a8dccda6242b6ab590c8ebc1cb8eeec6969a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IPAK43X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzO4rFFXcZV0BehaRrmJqdfxDMjjnPeVczsMkArQRYbAiAq9r8Q3tpv%2BT84abzibVzHNrc%2FaPJsPmmg1z1wqOF3GSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjs9350qrSXuikG%2FkKtwDmlYOqNedxFaZ%2FZGy%2BTP0w%2FHp6qX5g5%2Ba%2FKDgASbN99qVdRTY4hNSNuRKVjQXmZl%2F5Xn90jMtJyWZbWDdvMnVMo8azSKkjA94nqiRuf3eP9jPdGFPjzAbQeC%2BAl%2BKK8tR1V0o8r0zrNtgzFLywa0X34kuLhGFhDiiOlhEAxUF1WkAhCRcJ0SotaFMy%2BFF6sGHeKOfqmVqjCb0c4SyWD0PM3wnYbHaG4HfjS3hln8lkG%2B4V7S39iQvP7YSKhWBRwt30ALSZZGf82%2BBAkwbHRVJI%2BMZ0zqmvUDM1TVI7VSn0s0Iw6As3BrruFQIEX8a%2FPl2%2BjfV6NaNNU0kmpJu8QW%2B4AE%2BCAuOQde6SR5z3mDt4eNm3jSi8nVo4imE%2BuScS2jqFc8YaO37ozpgoMpb6D%2BIoz8tSrrQMY0cD1xyGZossUUh2iXOqtA0HTCpBP0KlDG%2Fh5zIxMh3LYwj6Dir1Hb%2FNEtSXgWqvl7cu%2BwKnv%2BNTlC9d9jHer9x2oBo9YUnXDoohzXBwqTo18J1rsZWt0GhV%2BdQeO1bOjVAvjTW91HlzUnRhe4RDtZ29GONEXkX0wfdiRmTusupYQZktEnLMo5F2q9Kezum1Xd6qbJaV6PRSA1K5SVvf%2FJJlrs7%2BQcw2aHdyQY6pgE5J07W3h%2FFjQrUOsZEkoK6CU6N2rrJisONxmlyYvSiJKVT9hLce4vUr8v%2BZnJEMPF8KdRhSQzAQ2%2FltBchpW%2BWCOs40ER0TrDWPLIesNUsdN%2FVkx%2ByVEzaNgVyW3MwtX%2Bkaay%2F8nEVgwKJNHTIx431NXrGD%2Fg%2BAmFCh%2F%2F4b6%2BHNqpT0HCKVVpM7aHzKUIarH9AK9ZLrZNMLbMrb5Q9b5Xwqc0CqDhs&X-Amz-Signature=c054085024a11cd21480e682da25288d886a2e00e883d55afdb284aff5c08f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
