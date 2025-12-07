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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOOE7JE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtBRXqhYleUTO5TvDDouetvhrMfTOgLxKN%2BJ%2B2wOduDwIgHvLVt62UwtusMtUJctYjbY5qEOShe9kIUbW9ZzL9T2wqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSJCu7frGJI1ADBqyrcAzOMCpnfpFs1aSV0%2Bqx2RLDXCmnYgthUAiM4OrfCK2Ub5HqkhaSuT8H0s%2Fn1lpAyqOx3iNVdiAEHJ%2BZx8vDI0DCBdMtEu2BbNd0mVhWEwORApNa8jC3W2sfcLh92MnSPvaRnqRodfacX5AFle9gF4BX1DSFlLcd63aPpr1VC4fkodxAGF5rsrr8FqiOPd8CVzORm4Y7RphvIoHMCHZpL3FirQI2NI86v54KzP8t6o%2FXlOalh6y7XNOFX0YO43mC7zFbzDLZDDY2jwp3GzKWaOQXwvkEgNR5csI5M%2FbLXwJHVM9f19nueKLH2mJebZRD35Ov9OS4QtndeVTiy6gfBtt7fDm23jxZypcKe8M8F7qcCeL%2Bjq%2BnTntq4wwWZJOdwTAd7uvqAVM1QcHMwsBm0FUxs3o46U8xAPdHwEVDBiC37zXZVDGPn%2BkZhd%2FdRabPJCzdVeV49z0iVOnlYnwyoTENjCjad355qRPFRH%2BQvAdsZZPNQIGeWRODomDf9zji1d%2B%2FpF85Fcxta1EUK4bQ3f2KAu60qFfbjEDS7w9q%2B5KasLmdsUE24jjhDk0l6oLv%2F0ioww1QkJU%2BrSHhxJ5CQuwaD2QWZnIwT%2F10rxZU9PXx8v18rcEgt5gkcqYwCMIXI18kGOqUBbCJHRnsI812UTuxWfTKD5A3lCM4fBerEnjCFo84VrgBhtYBfD7sHkAtAZEMmNTpfBTxlja%2Fcgig0SC4mmP8gnJirRSfiNIFgh%2FPPv14bxTVFcgurzd%2F8xxKpVyebq0i8pDXH3vw3CC5CER9jG%2FZd41Q1tBX24ZOqdM96LUPtYMfdooqjkxiezqgotkF1PSBjaTC6sgK5O3sXmtk8X%2B2ACCgbWqhf&X-Amz-Signature=8cb8d3ab74d5be68bd5a39e0f794df5456e8574a8f3a4824c2f7553ea9445b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOOE7JE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtBRXqhYleUTO5TvDDouetvhrMfTOgLxKN%2BJ%2B2wOduDwIgHvLVt62UwtusMtUJctYjbY5qEOShe9kIUbW9ZzL9T2wqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSJCu7frGJI1ADBqyrcAzOMCpnfpFs1aSV0%2Bqx2RLDXCmnYgthUAiM4OrfCK2Ub5HqkhaSuT8H0s%2Fn1lpAyqOx3iNVdiAEHJ%2BZx8vDI0DCBdMtEu2BbNd0mVhWEwORApNa8jC3W2sfcLh92MnSPvaRnqRodfacX5AFle9gF4BX1DSFlLcd63aPpr1VC4fkodxAGF5rsrr8FqiOPd8CVzORm4Y7RphvIoHMCHZpL3FirQI2NI86v54KzP8t6o%2FXlOalh6y7XNOFX0YO43mC7zFbzDLZDDY2jwp3GzKWaOQXwvkEgNR5csI5M%2FbLXwJHVM9f19nueKLH2mJebZRD35Ov9OS4QtndeVTiy6gfBtt7fDm23jxZypcKe8M8F7qcCeL%2Bjq%2BnTntq4wwWZJOdwTAd7uvqAVM1QcHMwsBm0FUxs3o46U8xAPdHwEVDBiC37zXZVDGPn%2BkZhd%2FdRabPJCzdVeV49z0iVOnlYnwyoTENjCjad355qRPFRH%2BQvAdsZZPNQIGeWRODomDf9zji1d%2B%2FpF85Fcxta1EUK4bQ3f2KAu60qFfbjEDS7w9q%2B5KasLmdsUE24jjhDk0l6oLv%2F0ioww1QkJU%2BrSHhxJ5CQuwaD2QWZnIwT%2F10rxZU9PXx8v18rcEgt5gkcqYwCMIXI18kGOqUBbCJHRnsI812UTuxWfTKD5A3lCM4fBerEnjCFo84VrgBhtYBfD7sHkAtAZEMmNTpfBTxlja%2Fcgig0SC4mmP8gnJirRSfiNIFgh%2FPPv14bxTVFcgurzd%2F8xxKpVyebq0i8pDXH3vw3CC5CER9jG%2FZd41Q1tBX24ZOqdM96LUPtYMfdooqjkxiezqgotkF1PSBjaTC6sgK5O3sXmtk8X%2B2ACCgbWqhf&X-Amz-Signature=0f1329bc4c6e93ea82d515e8c8f8a917f336428f35d11f8b9ec366ba90f2c5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
