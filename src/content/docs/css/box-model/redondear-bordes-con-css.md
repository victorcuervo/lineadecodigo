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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66WWXVH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkMYfmt0g9ugCEZiIKHpBgORSpvW2nW3Jn9NdyYvsCzAiEA0CjeBQ9sONNRSdFJ6pbHlvwcDAiutXFKPLQ4jMpkjOoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGaLyPduRT%2B27L8nGSrcA1PwY%2FD147BmU4GLH1W%2Bf58L7RRx2riOoIWkslilhc9qbfTt0zpl9Xfb3WG3WTfq5pOIfw08qQjNakcitBrfbiblWT7baZUUC1%2BKaZY3Xiu4P5NGSRlYo5mriv8SeKafnwWLyRtyLJFEZl58yvEiTewuLZa5cdDOcIDQT5vRIQ37aYbLbVHbyMDsCQWs8AnibHNXjG8kdgcyDbjFsDE9YQrLwulV8K6MeNqvjEsd6WI7srhQQQGs%2BtxqZv8Qp1R4ce1d0CBXLVZ2ESBlE%2F94RWOG2hdGHjVv0UCiIA8oPKO6SDNgWKukDsXLdda%2FYmrv2Rrwr8AD4i80yUsmDPCCVXWmp%2F%2F1r21JllQDRK%2B0NcVr75oWNBRTCUUWdbGYCxQcHiDH3dgtzH%2Ft2ajpCEaZ%2B49aAmqVOd2P7xUsWBHBu7Lug7T4YkpNUfMV4Vi0aO4xqRN%2FdyboRPKBHCNAB1riG8YHa6K%2F12joHvM5fYloIc%2BM4cTBm6LVkc4uIzzqYt%2BpLZpR4gEt8RmqUrA%2BhwWuP4ZMSoIRkcBgVp1bA1JsdjbFR8dhD4R%2Fzk0tyJYSVKy3WRx%2FMfyAHZ2ZkXxCzHulq3mMkEz1pV9dnhY%2BouzAYEhAan67MfpEMwcY82gIMKO4icoGOqUBHYz0P8n6%2F6JuHxFkxbXdaHwGSHXScaWLXlrFuFXv%2BdMjXVc6oXCuIH7ZQaDSlwI3Pu2e5uUcrhN1xUiONtsdf9dPVoG46jnnxBvw%2FOt1p6uD0E9F0RXc%2FbXF8Epy2b3VK8THh%2Bdt2si5L2j%2FxjH273t7NeyC6B%2BWp5dvNC%2B%2FXWKg2ISIouuUDbq47reyiDjPolOYrKkcQa%2FmuHhNaYJ37msI0a5Z&X-Amz-Signature=39a7d4d06927455f81ecd982420d3aa7120754885c7c5b563fca232fefeaa087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66WWXVH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkMYfmt0g9ugCEZiIKHpBgORSpvW2nW3Jn9NdyYvsCzAiEA0CjeBQ9sONNRSdFJ6pbHlvwcDAiutXFKPLQ4jMpkjOoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGaLyPduRT%2B27L8nGSrcA1PwY%2FD147BmU4GLH1W%2Bf58L7RRx2riOoIWkslilhc9qbfTt0zpl9Xfb3WG3WTfq5pOIfw08qQjNakcitBrfbiblWT7baZUUC1%2BKaZY3Xiu4P5NGSRlYo5mriv8SeKafnwWLyRtyLJFEZl58yvEiTewuLZa5cdDOcIDQT5vRIQ37aYbLbVHbyMDsCQWs8AnibHNXjG8kdgcyDbjFsDE9YQrLwulV8K6MeNqvjEsd6WI7srhQQQGs%2BtxqZv8Qp1R4ce1d0CBXLVZ2ESBlE%2F94RWOG2hdGHjVv0UCiIA8oPKO6SDNgWKukDsXLdda%2FYmrv2Rrwr8AD4i80yUsmDPCCVXWmp%2F%2F1r21JllQDRK%2B0NcVr75oWNBRTCUUWdbGYCxQcHiDH3dgtzH%2Ft2ajpCEaZ%2B49aAmqVOd2P7xUsWBHBu7Lug7T4YkpNUfMV4Vi0aO4xqRN%2FdyboRPKBHCNAB1riG8YHa6K%2F12joHvM5fYloIc%2BM4cTBm6LVkc4uIzzqYt%2BpLZpR4gEt8RmqUrA%2BhwWuP4ZMSoIRkcBgVp1bA1JsdjbFR8dhD4R%2Fzk0tyJYSVKy3WRx%2FMfyAHZ2ZkXxCzHulq3mMkEz1pV9dnhY%2BouzAYEhAan67MfpEMwcY82gIMKO4icoGOqUBHYz0P8n6%2F6JuHxFkxbXdaHwGSHXScaWLXlrFuFXv%2BdMjXVc6oXCuIH7ZQaDSlwI3Pu2e5uUcrhN1xUiONtsdf9dPVoG46jnnxBvw%2FOt1p6uD0E9F0RXc%2FbXF8Epy2b3VK8THh%2Bdt2si5L2j%2FxjH273t7NeyC6B%2BWp5dvNC%2B%2FXWKg2ISIouuUDbq47reyiDjPolOYrKkcQa%2FmuHhNaYJ37msI0a5Z&X-Amz-Signature=3a2882c42282e16991680973166954ef51a356b1e53bb13c43cf0a270cdd8583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
