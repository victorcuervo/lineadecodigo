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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLK6ONB6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR9GKm87rFMfvVBABqVF%2FADUUFlbEHOOghn0%2BUb%2ByjBAiBO6HVWiPe3qM6UQay%2Bfd8wdgS7E2T8BzaVLf8M%2BNRhPyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTn3J4%2F9vGUV%2BucoKtwDRD89QuP8ix49hIUfH4wQRxDIQ4wQLbaDSVLBW9TMWeWQ2yJgwLkcfrdiCftz63tkK7Lh5KfN2c5WZfSkIICb6EHUMIkltF48weQMNN5mKV3fu%2FbogcMh6bZGyuVLARRBOzfkKZNJHML9t7uUtAXjXedZ0y7dmrAJ14IDJmq4lz1u0FUI3PPuWLTWn8SkMQlm%2BvaL8CLHClw1BMSsLnJrQAJitNZ3TV2HBwIo%2FwcP7tds%2FIlleIfthJnDVsKFbQ8zxnEAkweHmydrEQwU5mHrKUl%2F7b4LYeaF2MqmhkiBbb9Jd%2F9Qw22Fmw%2FFR2qAuDmNIDlRX%2FwvDYHlPwJKLP8Fea1LKGZq9QB68dY8oGT%2Bhiofry2nbqKkC%2Fpv0TAPelYDWrHgCgNhmieRmI6OitOcQV63VzxgaErKfAwvwQiKr59SQ4qfCNy%2BZ%2Bs6GbasYZ0knIEJxhC1WlwjA21hfaQXA6Pc4axjWg1rYR%2BJJRemu2WOviXEgBkgYbX12nc1Tya9sbP3IFK5NYHF5J6cTbvSZz4BRaPkhkrIwMAGAr3TuhvDZSYGVfSA4u4uj7wRCMggmQJ5q6aku76I3DJV%2FbUH0yNfREODMSDOSDvLSeL37GjD7h%2BURhfrmIaoZWowuJrVyQY6pgF%2BXyteA%2B5csCuNbkDvzLBWoflw7QCt7OIXlIj8t69aUUwDC%2F7o%2Fu3i0xT7y%2FFxhT1yuQ4g3M2U6%2B6LaAOgchyUF3rYCT6wOTzKA4r%2Bwcaqpy0HFqQFyiLWsMlk7pUCxmQMCU4uz7y2951GjItLJCiH7Ex%2ByB4RipCNJIMZBrlpF9TsHDo1Qw%2Bl2Wicr%2FPVqC%2Bxy6wjM9UjTv53YmyTcs7FtCIv8jhY&X-Amz-Signature=81d4a6362597e772bd579b0f65101d51a49e13a21e993945e09e154fee3afe51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLK6ONB6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR9GKm87rFMfvVBABqVF%2FADUUFlbEHOOghn0%2BUb%2ByjBAiBO6HVWiPe3qM6UQay%2Bfd8wdgS7E2T8BzaVLf8M%2BNRhPyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTn3J4%2F9vGUV%2BucoKtwDRD89QuP8ix49hIUfH4wQRxDIQ4wQLbaDSVLBW9TMWeWQ2yJgwLkcfrdiCftz63tkK7Lh5KfN2c5WZfSkIICb6EHUMIkltF48weQMNN5mKV3fu%2FbogcMh6bZGyuVLARRBOzfkKZNJHML9t7uUtAXjXedZ0y7dmrAJ14IDJmq4lz1u0FUI3PPuWLTWn8SkMQlm%2BvaL8CLHClw1BMSsLnJrQAJitNZ3TV2HBwIo%2FwcP7tds%2FIlleIfthJnDVsKFbQ8zxnEAkweHmydrEQwU5mHrKUl%2F7b4LYeaF2MqmhkiBbb9Jd%2F9Qw22Fmw%2FFR2qAuDmNIDlRX%2FwvDYHlPwJKLP8Fea1LKGZq9QB68dY8oGT%2Bhiofry2nbqKkC%2Fpv0TAPelYDWrHgCgNhmieRmI6OitOcQV63VzxgaErKfAwvwQiKr59SQ4qfCNy%2BZ%2Bs6GbasYZ0knIEJxhC1WlwjA21hfaQXA6Pc4axjWg1rYR%2BJJRemu2WOviXEgBkgYbX12nc1Tya9sbP3IFK5NYHF5J6cTbvSZz4BRaPkhkrIwMAGAr3TuhvDZSYGVfSA4u4uj7wRCMggmQJ5q6aku76I3DJV%2FbUH0yNfREODMSDOSDvLSeL37GjD7h%2BURhfrmIaoZWowuJrVyQY6pgF%2BXyteA%2B5csCuNbkDvzLBWoflw7QCt7OIXlIj8t69aUUwDC%2F7o%2Fu3i0xT7y%2FFxhT1yuQ4g3M2U6%2B6LaAOgchyUF3rYCT6wOTzKA4r%2Bwcaqpy0HFqQFyiLWsMlk7pUCxmQMCU4uz7y2951GjItLJCiH7Ex%2ByB4RipCNJIMZBrlpF9TsHDo1Qw%2Bl2Wicr%2FPVqC%2Bxy6wjM9UjTv53YmyTcs7FtCIv8jhY&X-Amz-Signature=f2538f448f79fb2d29f1b8d2e4cd89a28e3a3d21f5623e247b37bcf55e40fc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
