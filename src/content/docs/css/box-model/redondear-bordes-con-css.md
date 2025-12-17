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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657PGQF6W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWD7VUZ0O10quHHLqYuDm%2F8JchKA7xbw5jiQ1gIXCbvgIhAOZMv%2FlcJVI4whAA59e2HWjFAG9zYSXF7vtsx24RZoW7Kv8DCH4QABoMNjM3NDIzMTgzODA1IgzpYr%2BDFwVtEzB0Rzwq3AOXLCJHKHO99xGErsHlN2L4W%2F7vyUDf9zARp8oDPYxpdyzRp0rqFVnyQEWe79DTtrsGApEUA5%2F%2FDuSumPtaHG0Rc3i8sVJanMiRr70sj8P7BxOBudSrcm2tQVlM2%2F9BsAEadDUgtEd9n1Qs1hwTVR5MhuLwGlcXcCl6Qd9AYDbE9GompHvmwdA65Rq6LZUNm7ejJy2M9LN5DqYI0dUKf128i91QVnP1K2LkicZIxtTWhPOQdYQF8iqsRYVHWdtr1nPYtA%2FETag3a4hWw5WW6M4a3lgImvw3dmSHN5ijoTZ3kogd1xIB1IVWTXa3dtvG6auVb0htWr9wO1d%2F2qW3sEc3l75vhEYzSSPvMW%2FMT5hcF5K9tPWtaapmiPitCoVkNsKA8V67CHU5CCmls1IcwrtIqI3iVTqE4hFgWAC%2FdyJIw74aPrroatDHLN9%2FOfDg0wAIeKP2jMBKklkPxqJ0wpOgh31cA4IdRpBPzS%2FPVdNEF1aEwdYPqinZbD3Uf0Vq%2F3Zpb4z0N3HeahEBD%2FrfUNpYOaocfkprfXd5BdIo53ejoksjJ6YEWa%2FBHmAFEkyprWGdU51RzGa20fo%2B%2BEj747d9V6bpGkISvpSRGpUWGWvumjYtbKYOrulauKrZXTDXxorKBjqkAVFsXE7rKKIM%2BbWVcRlV9aRM8w7hTDoE1GODzMVV9Upp8P1js02H3mNHmuFVygz4e3DbpI7tOG5RBjLmNuI6auGAsfJuLP%2BTKAIKxoIkJDnsgnXmFXOd85abK0mbLm7suQA%2BWa%2BMlCQTsru4A1kq2Lti3ifeX8UJFrfxqWW5BW22EzsQ5iQfbLuN3G%2BYiEI%2Blz%2Bgs4FSPpaPwutHnZiDEVHK66Cq&X-Amz-Signature=9da0a7bcda866350397612e734a0d6b7e7eae3db74c86ec89ac62e7a46e3c401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657PGQF6W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWD7VUZ0O10quHHLqYuDm%2F8JchKA7xbw5jiQ1gIXCbvgIhAOZMv%2FlcJVI4whAA59e2HWjFAG9zYSXF7vtsx24RZoW7Kv8DCH4QABoMNjM3NDIzMTgzODA1IgzpYr%2BDFwVtEzB0Rzwq3AOXLCJHKHO99xGErsHlN2L4W%2F7vyUDf9zARp8oDPYxpdyzRp0rqFVnyQEWe79DTtrsGApEUA5%2F%2FDuSumPtaHG0Rc3i8sVJanMiRr70sj8P7BxOBudSrcm2tQVlM2%2F9BsAEadDUgtEd9n1Qs1hwTVR5MhuLwGlcXcCl6Qd9AYDbE9GompHvmwdA65Rq6LZUNm7ejJy2M9LN5DqYI0dUKf128i91QVnP1K2LkicZIxtTWhPOQdYQF8iqsRYVHWdtr1nPYtA%2FETag3a4hWw5WW6M4a3lgImvw3dmSHN5ijoTZ3kogd1xIB1IVWTXa3dtvG6auVb0htWr9wO1d%2F2qW3sEc3l75vhEYzSSPvMW%2FMT5hcF5K9tPWtaapmiPitCoVkNsKA8V67CHU5CCmls1IcwrtIqI3iVTqE4hFgWAC%2FdyJIw74aPrroatDHLN9%2FOfDg0wAIeKP2jMBKklkPxqJ0wpOgh31cA4IdRpBPzS%2FPVdNEF1aEwdYPqinZbD3Uf0Vq%2F3Zpb4z0N3HeahEBD%2FrfUNpYOaocfkprfXd5BdIo53ejoksjJ6YEWa%2FBHmAFEkyprWGdU51RzGa20fo%2B%2BEj747d9V6bpGkISvpSRGpUWGWvumjYtbKYOrulauKrZXTDXxorKBjqkAVFsXE7rKKIM%2BbWVcRlV9aRM8w7hTDoE1GODzMVV9Upp8P1js02H3mNHmuFVygz4e3DbpI7tOG5RBjLmNuI6auGAsfJuLP%2BTKAIKxoIkJDnsgnXmFXOd85abK0mbLm7suQA%2BWa%2BMlCQTsru4A1kq2Lti3ifeX8UJFrfxqWW5BW22EzsQ5iQfbLuN3G%2BYiEI%2Blz%2Bgs4FSPpaPwutHnZiDEVHK66Cq&X-Amz-Signature=8bad55f71320f1b20b907ecc5a2956733d2aa856c36d0c1c338e7b6a7c093ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
