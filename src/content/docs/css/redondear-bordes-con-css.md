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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVLX7RH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1TfFxl40cPPp9kYRbEBI9XhzXVRs%2BbnnqLixt1z6buAiEA0j3E5l433YJn6GtZa5gDrRyKGvqiZX%2FD%2FaFp8aXuwcMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP08ciwZigpQP4Ku7ircAwrH%2Ff8hJwzS97dmCrZvIjPQnlCfGtCmPxTjH2WFPtphhwdYt1EICMIrqlWMsoAZ7kukCqDbpSLVPBU5A15OaJIgCk45IsXZyr8TOeb%2Bb8OmleAmDUq7J3OLVpvZwUp6LiDstZfittEbawu3UtMfovHlw5gXr6jvjNK0%2BWdgLi%2FAFIv1LyoUh0tTpqZRujzNkMhKZqTruJFg8q6UjiCec4t1O433lmpfRas9Dfq67WzxlvP1qWRg5wIrKD0ejtYR29IwGrKZfQRFWY0a4BTTdmjvk5pxmYCFvFKTJVaVEIFOMCJYC6YSOd6QgJpubLzamtlLCoyGMvflTA%2BRukdqPrkBAaEHKFr58%2BeQQEysEA%2Boyf57byHHNq52Osnjr7KmbiAvNVJkLrRA6XZHt95IC8gnciYng5tUR0hAMXpKOug%2BZSrbZaRFFyQA17w4NqxH3LX2Cx7D8s0xco8itnKqRWzvS5mR%2FpTm69CpEPXb84tVdRQ%2Fq%2BN5xSrBbbfI%2BoZcF76vPJ%2BRqeJPhkoI7ENY2uoncJgRhPo5TBnIRxlP3Z33qgTXT2GtRMV%2Fo3YfFs7pKe87w3exw%2FEGt2wwKbP%2BxOe9ZgpGjOnjMcu6%2B9mSMUzyfRpBKwRrqV%2BdGAX8MJym0MkGOqUBX1gvQxGMpUenmUvA%2F2RpeQuueg7YAVUHXKSiXQxjsNDG6eE0E6mx2z7jbM5Zbm0oTbU6qqIG9xgFyIvaamwlBbiQZ2CBQ2hs76nsvJvvJ9%2F0tCGrVB6lM%2FkgGPwVcCuCzjoBt1fx4BXm2If%2FA2CK0Xzj7G3mJgjPDoYCDGr1mlUTckfXtX7cTh%2Bw5jEngjBbBbvZ23y%2Fee1oakPWIiy6MlZDG5u5&X-Amz-Signature=7872f95cf5c1e1752e35f448748dcde81b150fcb99a5fd553497f4fbc2df7734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVLX7RH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1TfFxl40cPPp9kYRbEBI9XhzXVRs%2BbnnqLixt1z6buAiEA0j3E5l433YJn6GtZa5gDrRyKGvqiZX%2FD%2FaFp8aXuwcMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP08ciwZigpQP4Ku7ircAwrH%2Ff8hJwzS97dmCrZvIjPQnlCfGtCmPxTjH2WFPtphhwdYt1EICMIrqlWMsoAZ7kukCqDbpSLVPBU5A15OaJIgCk45IsXZyr8TOeb%2Bb8OmleAmDUq7J3OLVpvZwUp6LiDstZfittEbawu3UtMfovHlw5gXr6jvjNK0%2BWdgLi%2FAFIv1LyoUh0tTpqZRujzNkMhKZqTruJFg8q6UjiCec4t1O433lmpfRas9Dfq67WzxlvP1qWRg5wIrKD0ejtYR29IwGrKZfQRFWY0a4BTTdmjvk5pxmYCFvFKTJVaVEIFOMCJYC6YSOd6QgJpubLzamtlLCoyGMvflTA%2BRukdqPrkBAaEHKFr58%2BeQQEysEA%2Boyf57byHHNq52Osnjr7KmbiAvNVJkLrRA6XZHt95IC8gnciYng5tUR0hAMXpKOug%2BZSrbZaRFFyQA17w4NqxH3LX2Cx7D8s0xco8itnKqRWzvS5mR%2FpTm69CpEPXb84tVdRQ%2Fq%2BN5xSrBbbfI%2BoZcF76vPJ%2BRqeJPhkoI7ENY2uoncJgRhPo5TBnIRxlP3Z33qgTXT2GtRMV%2Fo3YfFs7pKe87w3exw%2FEGt2wwKbP%2BxOe9ZgpGjOnjMcu6%2B9mSMUzyfRpBKwRrqV%2BdGAX8MJym0MkGOqUBX1gvQxGMpUenmUvA%2F2RpeQuueg7YAVUHXKSiXQxjsNDG6eE0E6mx2z7jbM5Zbm0oTbU6qqIG9xgFyIvaamwlBbiQZ2CBQ2hs76nsvJvvJ9%2F0tCGrVB6lM%2FkgGPwVcCuCzjoBt1fx4BXm2If%2FA2CK0Xzj7G3mJgjPDoYCDGr1mlUTckfXtX7cTh%2Bw5jEngjBbBbvZ23y%2Fee1oakPWIiy6MlZDG5u5&X-Amz-Signature=e7fe7d2f2ea1014770ea26c9a8b6b92877e9046f5efa54abb5771011d98d5873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
