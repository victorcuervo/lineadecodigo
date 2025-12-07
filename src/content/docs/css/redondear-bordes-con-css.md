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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXDI2B5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDeShjDHAavC6ofjTcbMxoK3IcrfZgfq%2F%2B%2FAA8YaWQcwIgORHb54uTlbRJG41xc2STsC6Ygybj%2BOxqzj1wV1jnt2sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj6ri0eeT9rDabHdCrcA9A0tOSyxRoevH2q%2BZ3iUFllR46BCIhB1OCc%2B7AoEgmnB4mp68AdMRRmM6bD1pOiWU2ERB0UOOvp9vrXmAhE8eFKIobMOWnpsLIDgnah3FKwgDj6W8bQLJbg36T2dgiMo6m68rrzFH86tMjna0WuC3552l%2FKoK%2F8UF6LHpAekr7awdWYp%2FjrF6jxZNUdVUg6PuwZfYlzdSj8Sotxmg4NjMUi24whX%2F89WGciFM%2F75pa3jVTZBrSqNQi8U6Ba8RkTyrq1iRzd0HX6GdFtPm17lwPiEa5UxMOXGOQNOSOG5hDFAYyT2byNVRCbxi89qm3vl1yWMuduzWiHrCc9V%2Fag2cDZnMILUgp%2BbHC4pSSOHiZYfsOpDPzIOKRxoYwadOJnnWQYol9i6nbWi%2FmOOxxSEY%2BSvYmFz33GXo9z11mxZJwCs6Ops540HwsyLcxBABDS3cXD8beg2VFc0Ut7MzILxfu2hapl%2FqP37HiDcdgh%2FSnwwcSkNkLpARrd3NVEPAikC%2FpDJDL8XoLwz7jGBugBxlh1PhTXV7uCLMRaMK3chnrSipsPXANiqc3URLTZ%2FGxY%2FJN0DNIHukSBfGrhYkFIyNbi4LBHdO611zNgzh2PAPHHdRgDXzqwV6NJHAskMKOh1MkGOqUBH1SUVP4f2PVIln5bLZfWqZ1ty4CmC0S%2BhJdBMumYCXU%2BKac72eAOJMdRQY5vyuMjitqrLS0OkaF%2F2k3E%2Fx%2Fj6SOfoGbOPsWwHFhVCu9NX9Q4h%2B233kbmAIZnfnNJ2DIRRzG5nsn2HGSmFHnnLINR9MOt%2Bg7rFjZA1UGMA%2BpM0vufQVJI4BBA%2BN2ozi%2Bz2D5y%2BxKYTQBvNhAAAc7YzsUNG%2B9qyNON&X-Amz-Signature=da936efa9a9c5b28fd28bac8ed5373b10c00257b35bdd3f606c2210793de76d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXDI2B5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDeShjDHAavC6ofjTcbMxoK3IcrfZgfq%2F%2B%2FAA8YaWQcwIgORHb54uTlbRJG41xc2STsC6Ygybj%2BOxqzj1wV1jnt2sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj6ri0eeT9rDabHdCrcA9A0tOSyxRoevH2q%2BZ3iUFllR46BCIhB1OCc%2B7AoEgmnB4mp68AdMRRmM6bD1pOiWU2ERB0UOOvp9vrXmAhE8eFKIobMOWnpsLIDgnah3FKwgDj6W8bQLJbg36T2dgiMo6m68rrzFH86tMjna0WuC3552l%2FKoK%2F8UF6LHpAekr7awdWYp%2FjrF6jxZNUdVUg6PuwZfYlzdSj8Sotxmg4NjMUi24whX%2F89WGciFM%2F75pa3jVTZBrSqNQi8U6Ba8RkTyrq1iRzd0HX6GdFtPm17lwPiEa5UxMOXGOQNOSOG5hDFAYyT2byNVRCbxi89qm3vl1yWMuduzWiHrCc9V%2Fag2cDZnMILUgp%2BbHC4pSSOHiZYfsOpDPzIOKRxoYwadOJnnWQYol9i6nbWi%2FmOOxxSEY%2BSvYmFz33GXo9z11mxZJwCs6Ops540HwsyLcxBABDS3cXD8beg2VFc0Ut7MzILxfu2hapl%2FqP37HiDcdgh%2FSnwwcSkNkLpARrd3NVEPAikC%2FpDJDL8XoLwz7jGBugBxlh1PhTXV7uCLMRaMK3chnrSipsPXANiqc3URLTZ%2FGxY%2FJN0DNIHukSBfGrhYkFIyNbi4LBHdO611zNgzh2PAPHHdRgDXzqwV6NJHAskMKOh1MkGOqUBH1SUVP4f2PVIln5bLZfWqZ1ty4CmC0S%2BhJdBMumYCXU%2BKac72eAOJMdRQY5vyuMjitqrLS0OkaF%2F2k3E%2Fx%2Fj6SOfoGbOPsWwHFhVCu9NX9Q4h%2B233kbmAIZnfnNJ2DIRRzG5nsn2HGSmFHnnLINR9MOt%2Bg7rFjZA1UGMA%2BpM0vufQVJI4BBA%2BN2ozi%2Bz2D5y%2BxKYTQBvNhAAAc7YzsUNG%2B9qyNON&X-Amz-Signature=0d1f4f47f4cd439a91c5a793cb6c97bd59437ff4a446cc68d4b52101686e2984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
