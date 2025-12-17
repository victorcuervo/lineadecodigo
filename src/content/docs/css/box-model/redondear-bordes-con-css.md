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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU2O4IUX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw51lWd%2FpiPeglsP8MK2BmCZdE4C%2BbYaXmKHJAMrlIwgIgD%2FXAmdDBZXM%2BoAdeC0ygzczJbJHwxGT6dr6LyfGGkmsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDP8AeJ749G7B7sTYxCrcAxC0USHmq97SIG0HrQYqEg%2FGmznKIabyyHCkVBn%2FuhwDgqpXJN5cr4xtSpu6s8BHUQL8W03XFky3UMpq4wy1iwVJH6C5RdP%2BII%2BUjFGjg4rz0l%2F3CTRNsXzUaMngb7THNJOiqQk8fxzTPzlKRUQ14FgwWf1ongAp4WDLYbR%2BzuFV76gSEYQUHaEtTsC75yxz1s9avLmXBamCLCNXjsDg3055JWUGhwcFwRY05fbSO2IamJyM1dqgl4VT9nwefwZDwlzIaX0%2BS60Ot2rVdsfdkYnTH2q5nnDG9BaQbkrkg%2BmfPJy2yhGJgkITrrKzZDpLsUCue9nFP11Zg92mtwF0lGLHybv4uV2EL4gmDlxSSAqpn%2Fyn9KHWlyDrMvyn3KlwXGCu4%2FB2kJ2JuoEhc%2B7rkQO27%2BXr146zr2T0kJwt5CETn0dNzwVE7Lt18gerh5DS0mg8aOhuf%2BZXZha5yeh1ldz4y9%2FNjVq%2FjZjEbIyi3%2BKvbd51FIxsCOqx1KFzDArkihYUVJEt9JV%2FBdoMegge5CmQ3ASXHU6etJxG6Q9VrV8O37GXeWFy3yF9BD84UjZBNtdFJvi8fmzFOtArIMe0pC12fMs6vJKOG%2F5X2uQYB38DtpJZciIvDK2nF4uuMIvSicoGOqUBM4Aui1wd4c4lH7ILUjBoZY%2BYIWhNy7YIqfNbeR8K5D62NqlB5ZXxUkeOJX05%2BmF01KVvvl4eCF8Jth1nYvlF%2BZgR7NYxaFIDVOynp%2BiRZi%2Ba5%2BU60f1W43qcrqpI%2FUYbDhmvppHKx%2F%2FHf2oAJ6vtWcPe0Ximi0B0HfQYdrWAmIlFvM7vwFe5JP9awVJZIjehS77AYHF6wPO5R9VaM10lwUfXjFWm&X-Amz-Signature=fc49bda494dbf3dbc72eb418b8650582a7631ce88be2fbca6af530860bd0ad2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU2O4IUX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw51lWd%2FpiPeglsP8MK2BmCZdE4C%2BbYaXmKHJAMrlIwgIgD%2FXAmdDBZXM%2BoAdeC0ygzczJbJHwxGT6dr6LyfGGkmsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDP8AeJ749G7B7sTYxCrcAxC0USHmq97SIG0HrQYqEg%2FGmznKIabyyHCkVBn%2FuhwDgqpXJN5cr4xtSpu6s8BHUQL8W03XFky3UMpq4wy1iwVJH6C5RdP%2BII%2BUjFGjg4rz0l%2F3CTRNsXzUaMngb7THNJOiqQk8fxzTPzlKRUQ14FgwWf1ongAp4WDLYbR%2BzuFV76gSEYQUHaEtTsC75yxz1s9avLmXBamCLCNXjsDg3055JWUGhwcFwRY05fbSO2IamJyM1dqgl4VT9nwefwZDwlzIaX0%2BS60Ot2rVdsfdkYnTH2q5nnDG9BaQbkrkg%2BmfPJy2yhGJgkITrrKzZDpLsUCue9nFP11Zg92mtwF0lGLHybv4uV2EL4gmDlxSSAqpn%2Fyn9KHWlyDrMvyn3KlwXGCu4%2FB2kJ2JuoEhc%2B7rkQO27%2BXr146zr2T0kJwt5CETn0dNzwVE7Lt18gerh5DS0mg8aOhuf%2BZXZha5yeh1ldz4y9%2FNjVq%2FjZjEbIyi3%2BKvbd51FIxsCOqx1KFzDArkihYUVJEt9JV%2FBdoMegge5CmQ3ASXHU6etJxG6Q9VrV8O37GXeWFy3yF9BD84UjZBNtdFJvi8fmzFOtArIMe0pC12fMs6vJKOG%2F5X2uQYB38DtpJZciIvDK2nF4uuMIvSicoGOqUBM4Aui1wd4c4lH7ILUjBoZY%2BYIWhNy7YIqfNbeR8K5D62NqlB5ZXxUkeOJX05%2BmF01KVvvl4eCF8Jth1nYvlF%2BZgR7NYxaFIDVOynp%2BiRZi%2Ba5%2BU60f1W43qcrqpI%2FUYbDhmvppHKx%2F%2FHf2oAJ6vtWcPe0Ximi0B0HfQYdrWAmIlFvM7vwFe5JP9awVJZIjehS77AYHF6wPO5R9VaM10lwUfXjFWm&X-Amz-Signature=ecefe59939650fa26a8a4b8445e21e9d0d0b3e4d5a05d60f89c4c0e2961723c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
