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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBYWXVE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV%2BAyBdkwBsp%2FyMMFA%2BGHn2uI%2FqKfyeE7Osj4Ds1OcHQIgWvTTb09XvGQgrxUBMk4mc%2FpRGXC%2B%2BKSR%2BDAVveve1msq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIPsnjMqBvmbd8mFZSrcA5Y0a%2BQgwoqEc0YMFrzV%2B3SGHrHgbrCKAmR3cPhfWElApZQRaCgvercmvjWyDRmSuf57K585JmJFM3RiaM7umepq%2F5o4tyi2UMWrdIEcqCFn8JuFJCOu5o6xbXRY1HCxsB%2FkydKNqh5R0m8afcujlOMmrgaH%2FZ9SPsu6gDsQc4rRBX9uZykbPtzk0e5owDNdOlkiKf01YFtSiKIN1ccOKI36QHd54CM%2Bu5NiIQLR8VHpICB9T3oJRLgrpu9hsfv1smoQ6AZiIckmVY%2Fe9tEBsSQfocSoNrtBFC17U15QIEpHBohLWPnps3UX9vEspOuxhYx%2FMLG42g5cFEAeRJy8TD42Jktzm5FMEix3yPOJgWdr%2FH1EJ1yhPvwkygdF%2FG6cPB5X%2FUrkP%2Bmz8LdvMtq48xqIguBTmUbRand6ATAbOPlekztb2y%2FE3gB3mPnPC683fD8wx%2B9zM8iKCweTVEkXSywoLn%2B%2BNlzhmSmPe6BvhieZ%2Bv2li83ODJ%2BXRxdZHA98KJA7H8W9X9h5nrbi2PvfJNQ0%2FsQkbCgPNatnPt0rROos9lOKVIMb0uT3C6a%2F2aFJHqrUaNSVgAq1X%2FKdz1VNVu2XvILysOX4LzbjHHEvq0ke4UUOmtZVhfUmj3QPMNCm0MkGOqUBiASafuU0ykjeCfvpzj2zfG3LDovM8dousVsFc0Ki4IZC%2BDCSfFSQqXhnv6M2lLHjlwQun1FmqJFxREKvOgQHSGMfDkOYy5SQSaO5VIn0r%2FyB2v9tryw%2FiK1xGlY1NjGkEXSGseDR9%2FyDTDDB%2BXdZEBFxmvzDn589ZGPRIo2UhA7QYR%2Bid0tCuuoGWEPbfBV5uOTR%2B2XfdnmQuqOYQZuf7e9dQMPn&X-Amz-Signature=5807e00f4a5f84df767d4f389f93b21f4da0d9fd4f0fb2450a2b721d1f9c5807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBYWXVE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV%2BAyBdkwBsp%2FyMMFA%2BGHn2uI%2FqKfyeE7Osj4Ds1OcHQIgWvTTb09XvGQgrxUBMk4mc%2FpRGXC%2B%2BKSR%2BDAVveve1msq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIPsnjMqBvmbd8mFZSrcA5Y0a%2BQgwoqEc0YMFrzV%2B3SGHrHgbrCKAmR3cPhfWElApZQRaCgvercmvjWyDRmSuf57K585JmJFM3RiaM7umepq%2F5o4tyi2UMWrdIEcqCFn8JuFJCOu5o6xbXRY1HCxsB%2FkydKNqh5R0m8afcujlOMmrgaH%2FZ9SPsu6gDsQc4rRBX9uZykbPtzk0e5owDNdOlkiKf01YFtSiKIN1ccOKI36QHd54CM%2Bu5NiIQLR8VHpICB9T3oJRLgrpu9hsfv1smoQ6AZiIckmVY%2Fe9tEBsSQfocSoNrtBFC17U15QIEpHBohLWPnps3UX9vEspOuxhYx%2FMLG42g5cFEAeRJy8TD42Jktzm5FMEix3yPOJgWdr%2FH1EJ1yhPvwkygdF%2FG6cPB5X%2FUrkP%2Bmz8LdvMtq48xqIguBTmUbRand6ATAbOPlekztb2y%2FE3gB3mPnPC683fD8wx%2B9zM8iKCweTVEkXSywoLn%2B%2BNlzhmSmPe6BvhieZ%2Bv2li83ODJ%2BXRxdZHA98KJA7H8W9X9h5nrbi2PvfJNQ0%2FsQkbCgPNatnPt0rROos9lOKVIMb0uT3C6a%2F2aFJHqrUaNSVgAq1X%2FKdz1VNVu2XvILysOX4LzbjHHEvq0ke4UUOmtZVhfUmj3QPMNCm0MkGOqUBiASafuU0ykjeCfvpzj2zfG3LDovM8dousVsFc0Ki4IZC%2BDCSfFSQqXhnv6M2lLHjlwQun1FmqJFxREKvOgQHSGMfDkOYy5SQSaO5VIn0r%2FyB2v9tryw%2FiK1xGlY1NjGkEXSGseDR9%2FyDTDDB%2BXdZEBFxmvzDn589ZGPRIo2UhA7QYR%2Bid0tCuuoGWEPbfBV5uOTR%2B2XfdnmQuqOYQZuf7e9dQMPn&X-Amz-Signature=0b918b4f4d11096936d37de10b40d6865db63571a885efabda4b30f1879886b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
