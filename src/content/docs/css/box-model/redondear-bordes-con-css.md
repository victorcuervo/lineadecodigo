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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UKBAH5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOQiWfCSjQsNsOGTmVToSJubV0ADxkf4atnfTb%2BMfOwgIgQZ%2BExf7My0dGvy9RGf8jWUWdk70v9pFC%2FV9TQjSzUGgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPLPdcz9A9zKYu9C%2FircA10JfilV%2F7aY09rRl5GSxK4yfV3d0eMtOzimy147uUrcl0qfwP1X%2FMaejDZWtQOa%2B%2FdZny9whk2OSEkUlNLiFAajHS2wEPJ9bWlwDtGMA3hrE5YfVomuIPRLE23UCoV2GN%2FwDcyaBAVACoKzdWriTsqi75F%2Bkp7s%2B7RhL%2BKKWSFnVt7cAQD1BvXUTLodUH4sDO8MXfDXfi3%2B9g%2FD01jg2pnRNWddCzOk0r94bTWcxKPt%2BGkmfDr6MC%2FbqvJnoZHcvlYmTy%2BRsidRRwhQKmnSoUcfspMH5pCzFdU1MigevCTjeZ9kXeUn%2BWoNNPiPYpT1us7L362w%2Br%2Bns3RGXhMTvqjUkBgkoNz7qSlD9A7%2BUm7JG3%2FYLYdFuml4HNhOdln%2BOmnJsfL85VdHp7rLdU%2F8BS68myKLDK9%2FpxsB332pLF25sCMDnkJNuWlwhieds5eH8RhGBxZknUEpVFBZ1Bmz9%2BTDVif7tXN8MMZO3OT4TIyS9vkYCLbh4zoxJKrxtPe7OHq118grx%2BZlA1rASAFCwWZZZiZxitLHD20ru8F6NFaq%2BRuz3iCIvDUx164B2GYvCeukAmuEFQC7OyzuWSuMFt0pTTGQSMT%2BxHzreT%2BPr1RStTrCb0j81a15PsdfMPaxiMoGOqUB5zlKpRqktKs6MFa%2B2%2FoIL5l28LduFfvGBkoi82FNTUY%2Bp0uYTu4OluI%2BbhFuHUvB3pT9CRdOIEKTp2v8oDpJghfyE3N2jfQITl%2BTA3FAKDcA9jxp99tkiw2smCm92fDdu9ECSlZ8gb3VzX77Ag7FlyVCPd%2BCEKu9nwIeOA2tGXs6lY%2FMdG0phcj008FgUNoAdykF2WFugCEHr%2B46afjWNkGbNCT%2B&X-Amz-Signature=1198ffe6782544508b5c0731d0d612397d09983bd7a5a34320ff69b403e4c73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UKBAH5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOQiWfCSjQsNsOGTmVToSJubV0ADxkf4atnfTb%2BMfOwgIgQZ%2BExf7My0dGvy9RGf8jWUWdk70v9pFC%2FV9TQjSzUGgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPLPdcz9A9zKYu9C%2FircA10JfilV%2F7aY09rRl5GSxK4yfV3d0eMtOzimy147uUrcl0qfwP1X%2FMaejDZWtQOa%2B%2FdZny9whk2OSEkUlNLiFAajHS2wEPJ9bWlwDtGMA3hrE5YfVomuIPRLE23UCoV2GN%2FwDcyaBAVACoKzdWriTsqi75F%2Bkp7s%2B7RhL%2BKKWSFnVt7cAQD1BvXUTLodUH4sDO8MXfDXfi3%2B9g%2FD01jg2pnRNWddCzOk0r94bTWcxKPt%2BGkmfDr6MC%2FbqvJnoZHcvlYmTy%2BRsidRRwhQKmnSoUcfspMH5pCzFdU1MigevCTjeZ9kXeUn%2BWoNNPiPYpT1us7L362w%2Br%2Bns3RGXhMTvqjUkBgkoNz7qSlD9A7%2BUm7JG3%2FYLYdFuml4HNhOdln%2BOmnJsfL85VdHp7rLdU%2F8BS68myKLDK9%2FpxsB332pLF25sCMDnkJNuWlwhieds5eH8RhGBxZknUEpVFBZ1Bmz9%2BTDVif7tXN8MMZO3OT4TIyS9vkYCLbh4zoxJKrxtPe7OHq118grx%2BZlA1rASAFCwWZZZiZxitLHD20ru8F6NFaq%2BRuz3iCIvDUx164B2GYvCeukAmuEFQC7OyzuWSuMFt0pTTGQSMT%2BxHzreT%2BPr1RStTrCb0j81a15PsdfMPaxiMoGOqUB5zlKpRqktKs6MFa%2B2%2FoIL5l28LduFfvGBkoi82FNTUY%2Bp0uYTu4OluI%2BbhFuHUvB3pT9CRdOIEKTp2v8oDpJghfyE3N2jfQITl%2BTA3FAKDcA9jxp99tkiw2smCm92fDdu9ECSlZ8gb3VzX77Ag7FlyVCPd%2BCEKu9nwIeOA2tGXs6lY%2FMdG0phcj008FgUNoAdykF2WFugCEHr%2B46afjWNkGbNCT%2B&X-Amz-Signature=304c7104481989752e48d93d0509fd545e36c0039d7d82a72aaead6bef300aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
