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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664QGIE5G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDil1Hy2A9lDKV%2B7CrbGEzliAfDh9e8ggFuhvugOZ%2FJyQIhAOVXnoy3Y50Sb1tvQFd71uQzywvPQ%2FXLfJ1Zx8g9CGB3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtmRGJ0T2Ox1WwjsMq3AMJo54NRMGa919162fxJEWbP39Qv2yxhFq8BLX%2Bg8waEloeIJKq%2BXGots7zgDjGRQWCUb567A8qs6H2PMbNrqWUSUgrzQDEsgzQwjIm66Tdf1nItAxe%2FaMc6b4NYPWR8jdatTp6FXZHrUS5bqe6OCBjIgIKpTaX7gkNmMupnhVawRXNx0VRNiGRPPQXSgI3LMd5W5Z2nCwyMquqpJK30OA8qQiFn8yJNp9Jk%2FkBMHUaSheah81R2ZjrTlASNSNuAL281PCc2CdjBtBB7mb1xVbbBOJgNTH%2FmF00BJhiVpPwPUR%2FxPfuQDDLni59vJm4W64TB3yx%2Fo%2B%2FoiTVUatNbpSVG%2BHdZmuZumer44sTXAkhTAqQDr21ccE9XBSQAz%2FSOU%2BggKSkGpH4jhNF7rGR7LGPpOOClaxQIFPcXcDQWtPUI9DKGBkInnMsPQwQPgR3Kf29LnGXiHN%2FpX5MFYUtFRDdK9tCw%2FZAE9WsZ%2FU6lxLI3qEO4LiwfkmhaurJrzAYp%2FqsbdzdM%2FcI0IiZ%2FzgIkoREPUMQh4RnP6yfxKDm%2BtO%2FJ0LnEiEw8iRhHWdq43YYZYcgwt4D6LNbRDnxtYlCI6vD4XO71XF1%2Fx2VLqST60VYpeUGXkPPKm2exSJ4jTC1oIvKBjqkAUx0eCzmpLcCmU541Cv5X4hYlhtcb3l3DnOwpquHUBcCotnEp9GaawchaX7qE42RYyJmnFlEyqSU2bxg2MFyG%2FG%2BPfC87OZHYIJWwKPnTOpGV%2FA4sm3YG%2BnrV37Ymqrcfj3h1cTiN5hoskj5Uqx6hXtnpw5%2Bkm6XkDiv4gSBiks%2BzZ6dx4iOu%2Bwb8XKS6QT%2BDCwkHJ2EociRfpJeTnsKbULWDfmn&X-Amz-Signature=908004f58b01e66498e8cf5e045dceb289221ceb1484701bd19fdd4afceb95e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664QGIE5G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDil1Hy2A9lDKV%2B7CrbGEzliAfDh9e8ggFuhvugOZ%2FJyQIhAOVXnoy3Y50Sb1tvQFd71uQzywvPQ%2FXLfJ1Zx8g9CGB3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtmRGJ0T2Ox1WwjsMq3AMJo54NRMGa919162fxJEWbP39Qv2yxhFq8BLX%2Bg8waEloeIJKq%2BXGots7zgDjGRQWCUb567A8qs6H2PMbNrqWUSUgrzQDEsgzQwjIm66Tdf1nItAxe%2FaMc6b4NYPWR8jdatTp6FXZHrUS5bqe6OCBjIgIKpTaX7gkNmMupnhVawRXNx0VRNiGRPPQXSgI3LMd5W5Z2nCwyMquqpJK30OA8qQiFn8yJNp9Jk%2FkBMHUaSheah81R2ZjrTlASNSNuAL281PCc2CdjBtBB7mb1xVbbBOJgNTH%2FmF00BJhiVpPwPUR%2FxPfuQDDLni59vJm4W64TB3yx%2Fo%2B%2FoiTVUatNbpSVG%2BHdZmuZumer44sTXAkhTAqQDr21ccE9XBSQAz%2FSOU%2BggKSkGpH4jhNF7rGR7LGPpOOClaxQIFPcXcDQWtPUI9DKGBkInnMsPQwQPgR3Kf29LnGXiHN%2FpX5MFYUtFRDdK9tCw%2FZAE9WsZ%2FU6lxLI3qEO4LiwfkmhaurJrzAYp%2FqsbdzdM%2FcI0IiZ%2FzgIkoREPUMQh4RnP6yfxKDm%2BtO%2FJ0LnEiEw8iRhHWdq43YYZYcgwt4D6LNbRDnxtYlCI6vD4XO71XF1%2Fx2VLqST60VYpeUGXkPPKm2exSJ4jTC1oIvKBjqkAUx0eCzmpLcCmU541Cv5X4hYlhtcb3l3DnOwpquHUBcCotnEp9GaawchaX7qE42RYyJmnFlEyqSU2bxg2MFyG%2FG%2BPfC87OZHYIJWwKPnTOpGV%2FA4sm3YG%2BnrV37Ymqrcfj3h1cTiN5hoskj5Uqx6hXtnpw5%2Bkm6XkDiv4gSBiks%2BzZ6dx4iOu%2Bwb8XKS6QT%2BDCwkHJ2EociRfpJeTnsKbULWDfmn&X-Amz-Signature=daed1a2961f97cfb34af20414cc7a43221085137349e5df0800266e68ed92aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
