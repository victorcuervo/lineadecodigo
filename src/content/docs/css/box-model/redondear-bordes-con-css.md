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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERBXSMH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWAVg9vCrTFb8f1UHsld2fC19579FOKwdKLIU8E%2BwwnAiAi7DrQoxDVAC0h6zWATyvEJT%2FO6oFqgFyCoc76KMBPmyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMsE02AujPaGIraz5lKtwDLga54fa5%2F%2Bfckc5hgnsPVT5UU8rkLNNk8GawMhHA56S1Qm0oVx8BVoVLVBtRJrYA8VYtiJxNmo0vCAE25g2%2F3rOW0D26ZsN%2BXF0VRaruVGe5msOcsvgOAQlz9NcFR5OF%2BcYnA4XoHPpK0NhXrxokhLyHst7zlm%2BwwGTMQOAz6AWfjaGi0aGejqv3LsZejK6bf0VU3RPRoOMXq5m516Z%2BDOV7k08MLZTpyS%2FV69rXRaqQ7wimKRrgcY360nrvTvvtbghsUMLwXxBKbZcFi3vrMUsxomOgtI3BRhXytnvG2DXDGwnGR6vPk7LfThsMxb02LvtPnZjHseGK3iJ9Xn8BJLfkaZ73GqScSM%2BHp%2Fdv5tCwLNb2saUlGnhRHTZAgxXVeVVipFPQENEo%2Bi%2FIf3xP7xheDLOT0t%2FGKAgqSRrbCiFqu325xVQmNhgixAPcqEEcJht6kaM%2FEFdwVzI%2B81V3vJD%2Bv%2FY7KoZUvTc7b%2FMs8hQ07Twg8qaCfhkY%2FsvhxuC8OCdb5kXWX9MJ7YIs2ML2o9GORYJ2fxb9agGC2qryqsyc15dY7hVbQqh6L08dURkdU%2FRIP24PV18IbkoiSerbfVcaB8H9mRf4yZLpbCnpHvwjAuNcL9OQIKBYyU0wgLOIygY6pgEAi80n%2Bir%2Bt8NfKHQiIXv3JePoFfD6sT%2Bup5cwoNkSGHJuadVb9EX1iC8%2FY9NvPNfj4aKyAFm48%2F5hlsez8nSUNMUV7gLhtlcy%2BtFR7gFjZxvhK2OgmlPNCmLrq5NSP0F1nZG5BbFTlNKID0g%2B10hgUEfjpOovDp2G6%2BE32b%2BGkOepANJ%2FEn65Gckr%2FCGNBVMiOgQPAB6pAqPqdRxgBqRv9aJRwXTM&X-Amz-Signature=a3079f674f6785a6ab769bed6e3f4464792cf7de372639124abbe0390540357d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERBXSMH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWAVg9vCrTFb8f1UHsld2fC19579FOKwdKLIU8E%2BwwnAiAi7DrQoxDVAC0h6zWATyvEJT%2FO6oFqgFyCoc76KMBPmyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMsE02AujPaGIraz5lKtwDLga54fa5%2F%2Bfckc5hgnsPVT5UU8rkLNNk8GawMhHA56S1Qm0oVx8BVoVLVBtRJrYA8VYtiJxNmo0vCAE25g2%2F3rOW0D26ZsN%2BXF0VRaruVGe5msOcsvgOAQlz9NcFR5OF%2BcYnA4XoHPpK0NhXrxokhLyHst7zlm%2BwwGTMQOAz6AWfjaGi0aGejqv3LsZejK6bf0VU3RPRoOMXq5m516Z%2BDOV7k08MLZTpyS%2FV69rXRaqQ7wimKRrgcY360nrvTvvtbghsUMLwXxBKbZcFi3vrMUsxomOgtI3BRhXytnvG2DXDGwnGR6vPk7LfThsMxb02LvtPnZjHseGK3iJ9Xn8BJLfkaZ73GqScSM%2BHp%2Fdv5tCwLNb2saUlGnhRHTZAgxXVeVVipFPQENEo%2Bi%2FIf3xP7xheDLOT0t%2FGKAgqSRrbCiFqu325xVQmNhgixAPcqEEcJht6kaM%2FEFdwVzI%2B81V3vJD%2Bv%2FY7KoZUvTc7b%2FMs8hQ07Twg8qaCfhkY%2FsvhxuC8OCdb5kXWX9MJ7YIs2ML2o9GORYJ2fxb9agGC2qryqsyc15dY7hVbQqh6L08dURkdU%2FRIP24PV18IbkoiSerbfVcaB8H9mRf4yZLpbCnpHvwjAuNcL9OQIKBYyU0wgLOIygY6pgEAi80n%2Bir%2Bt8NfKHQiIXv3JePoFfD6sT%2Bup5cwoNkSGHJuadVb9EX1iC8%2FY9NvPNfj4aKyAFm48%2F5hlsez8nSUNMUV7gLhtlcy%2BtFR7gFjZxvhK2OgmlPNCmLrq5NSP0F1nZG5BbFTlNKID0g%2B10hgUEfjpOovDp2G6%2BE32b%2BGkOepANJ%2FEn65Gckr%2FCGNBVMiOgQPAB6pAqPqdRxgBqRv9aJRwXTM&X-Amz-Signature=b61f945f78285e06c4ef4f5946108a2ab69c6df4bd8bb4d270d9345f7b77518d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
