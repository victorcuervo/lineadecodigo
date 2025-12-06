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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXDAFH2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9BpxVVytZoy9C3gL7n2aQpRP0vr7kAiBXuwoKm7QNlAiEAvY1IovHXhb1pNtIsj8Zeerpgwgyydg%2FOsE8bfypGKpkq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEjEaU1G2E759NthmCrcA7GQA6Ez34H8PpYXC%2BUDUGiIzkNyBMKPTxsZ4NbTobJ%2BetLkEY237%2FpuIq5QNYl7XuxFH6%2BK2lRsimTEZsv45LP6uZI0WPbVPBsnr70tN1NhZMehVltBvWHOWxgKH2W01tpABAdJMGcqTdA8Z9YsHOAjCPbWZz%2BNpQfF0YJQWGXWtH7p46uNEaDrHMip5F6s7Yul30whGhG%2B8vZ637NSdMbGcETNvA28mLo7tFt3xPrNsmLGbIaSeL9aBt5le8a%2FhAGaX0OQS2%2BA0P%2BEt8ZY4U4Gz%2F6CI9niWfpMXa6jrKvpDjKlk3Fa3fRv9Tj9vTrEdnQAs8aW4DsLEOJInjAX8Yx1sSlLn6jukYTUZakm2r8BqIZ%2FcPdhLIKz6%2BMjIIERyrRPj4pqmnva%2B1YtD8HdHKFgGuddSNXGpB3Eglskk8kh5IQq1uBUZnQTs73cX2n3lkHjRI97nfRdZ7r8Y7a2syObL2NwtYiKvK1rcYp9S9AGj%2FE4t8cD%2Buvcw%2B2x%2B%2FbreAKc5OhwXjfQHUQKfKzbl%2BOzlARkcRcWtuG3PzLfZrHLoiulFllmOKxklFdPgTMDutzsC%2FjhB35Jes2hkwmoPv9kY7uJcqdN3xPPeugVSVR%2Fl9DzOLFI2PxJAe0OMMWez8kGOqUBfu%2F9YQ%2FmylaT2t0%2BJItcW5QRqLpZLutEXp9%2BcSUCqadRWPdnT366R2SYw5NG1RW2lflhf59AgYxTBDLYiJyM88l4rhP38WJvOaP716ij1gI0CSgo6PM7vuvqXCgO%2FSDlPMcAigV6QBCVbWiZjH44OyV0Ji6EiOxg%2BtbDSGfATCeViutgEEHeQV6pr%2BerVqOu4x9OkNtjptHVzx3Si%2F6s9OPDxy%2FV&X-Amz-Signature=2c02d2c78217675b97a977e4dcfbc63d58c0d2a731d8709cfbe0b402df218258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXDAFH2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9BpxVVytZoy9C3gL7n2aQpRP0vr7kAiBXuwoKm7QNlAiEAvY1IovHXhb1pNtIsj8Zeerpgwgyydg%2FOsE8bfypGKpkq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEjEaU1G2E759NthmCrcA7GQA6Ez34H8PpYXC%2BUDUGiIzkNyBMKPTxsZ4NbTobJ%2BetLkEY237%2FpuIq5QNYl7XuxFH6%2BK2lRsimTEZsv45LP6uZI0WPbVPBsnr70tN1NhZMehVltBvWHOWxgKH2W01tpABAdJMGcqTdA8Z9YsHOAjCPbWZz%2BNpQfF0YJQWGXWtH7p46uNEaDrHMip5F6s7Yul30whGhG%2B8vZ637NSdMbGcETNvA28mLo7tFt3xPrNsmLGbIaSeL9aBt5le8a%2FhAGaX0OQS2%2BA0P%2BEt8ZY4U4Gz%2F6CI9niWfpMXa6jrKvpDjKlk3Fa3fRv9Tj9vTrEdnQAs8aW4DsLEOJInjAX8Yx1sSlLn6jukYTUZakm2r8BqIZ%2FcPdhLIKz6%2BMjIIERyrRPj4pqmnva%2B1YtD8HdHKFgGuddSNXGpB3Eglskk8kh5IQq1uBUZnQTs73cX2n3lkHjRI97nfRdZ7r8Y7a2syObL2NwtYiKvK1rcYp9S9AGj%2FE4t8cD%2Buvcw%2B2x%2B%2FbreAKc5OhwXjfQHUQKfKzbl%2BOzlARkcRcWtuG3PzLfZrHLoiulFllmOKxklFdPgTMDutzsC%2FjhB35Jes2hkwmoPv9kY7uJcqdN3xPPeugVSVR%2Fl9DzOLFI2PxJAe0OMMWez8kGOqUBfu%2F9YQ%2FmylaT2t0%2BJItcW5QRqLpZLutEXp9%2BcSUCqadRWPdnT366R2SYw5NG1RW2lflhf59AgYxTBDLYiJyM88l4rhP38WJvOaP716ij1gI0CSgo6PM7vuvqXCgO%2FSDlPMcAigV6QBCVbWiZjH44OyV0Ji6EiOxg%2BtbDSGfATCeViutgEEHeQV6pr%2BerVqOu4x9OkNtjptHVzx3Si%2F6s9OPDxy%2FV&X-Amz-Signature=8a5fd8b5d5527e0c524aabc6bc9b3a7589bf4e7f7165e27cc645b7d63e1dca14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
