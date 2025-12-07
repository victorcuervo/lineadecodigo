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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GFXLAWF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNmU%2F81XMKQW7YDzEhoiDONWJ03e9QGO7uZgpVhJDWBAiAm9p7%2BsUbS2fhSAvekUnZyfcJbR5z7ChllOF%2F0tJvpXyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzO9KkZTr8ccbkpauKtwDo2KwEFS4v0tEZ6cFWsoz05Dw64eudDWMd9yfNqDJzxq3X1T7t0TTnUM8%2FFuzVQDLwhy6gTZ%2BJw5KXJwGBYjo0Og692Jsm%2FquWf10USG%2Bvx5DqTUyAVubNCQ%2FZPMrOwruZAER2n%2Ft1Wix8Qk9YRctRd1gtK%2BzaGmF%2FG0ThcwJQlwp10GoIh1r1xArxymMAlX7v794u57%2BMJ8su3fZ7%2BTMhQrDOj6rToGasInKaqo5BxtiS1Bg46WW%2BdmaxJ5deeUOaVKaaRE6TgALWKHmDA3eGOXl0rIg61tgJPyIbvpHO%2Bg53JEDYDMhimaS4nJo7QiT3dHDJwdyNlPOJ0bAK%2FIrvf09RIS8IfrdSh0m%2B09%2Br8e%2BXhyHJwAQoJm5dNJW2s3f9lykhEJlxIygILHFnXisiaKEhgTYKP1jLzv2LOCc6Io9AvCTB7ZECIbFIgVWW162q%2BBuxqwaYRGrEJthJhFi59dwDTawP4KlUAUsUP68HiCzaNgsx6ne19uqzD1d1OOrQRVBF9D3%2BDu1DJZi7Dn2RBnJ%2BKhkW75uyFok%2BSFw0RRsMLQZXeH%2BBJwvzJAyxwGUAbby%2Fh6Q9TpUKTxvGL1717pB3ssfuN9LMNPwWFmc8IxSlvbrR7HA1r0pFy8w2P3SyQY6pgGgLMywZEBmcfgtjZrGOPen9HYiyfQX49SfIWyedxCAE7hFq2Fa9%2FD%2BjiQbVFMcq9RtcnwONvd%2FJf0XuooG3%2BqolV7xAOVgKGkXhvBSOYb6MewDAQdsC9Su7etkDijPDyZmd%2B8Fft%2BC8JD2yL9Ts74GJOs%2FCMB7zbtxzb5lzusa8ovuujx47YwMqSNi1QwBo7NrnrUiZIneZGt6L34qNhytFLzsiK67&X-Amz-Signature=df9f89d3f3560a1d15536e7adc8cb10ef2a187f8efb98abc05f33d38443abfcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GFXLAWF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNmU%2F81XMKQW7YDzEhoiDONWJ03e9QGO7uZgpVhJDWBAiAm9p7%2BsUbS2fhSAvekUnZyfcJbR5z7ChllOF%2F0tJvpXyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzO9KkZTr8ccbkpauKtwDo2KwEFS4v0tEZ6cFWsoz05Dw64eudDWMd9yfNqDJzxq3X1T7t0TTnUM8%2FFuzVQDLwhy6gTZ%2BJw5KXJwGBYjo0Og692Jsm%2FquWf10USG%2Bvx5DqTUyAVubNCQ%2FZPMrOwruZAER2n%2Ft1Wix8Qk9YRctRd1gtK%2BzaGmF%2FG0ThcwJQlwp10GoIh1r1xArxymMAlX7v794u57%2BMJ8su3fZ7%2BTMhQrDOj6rToGasInKaqo5BxtiS1Bg46WW%2BdmaxJ5deeUOaVKaaRE6TgALWKHmDA3eGOXl0rIg61tgJPyIbvpHO%2Bg53JEDYDMhimaS4nJo7QiT3dHDJwdyNlPOJ0bAK%2FIrvf09RIS8IfrdSh0m%2B09%2Br8e%2BXhyHJwAQoJm5dNJW2s3f9lykhEJlxIygILHFnXisiaKEhgTYKP1jLzv2LOCc6Io9AvCTB7ZECIbFIgVWW162q%2BBuxqwaYRGrEJthJhFi59dwDTawP4KlUAUsUP68HiCzaNgsx6ne19uqzD1d1OOrQRVBF9D3%2BDu1DJZi7Dn2RBnJ%2BKhkW75uyFok%2BSFw0RRsMLQZXeH%2BBJwvzJAyxwGUAbby%2Fh6Q9TpUKTxvGL1717pB3ssfuN9LMNPwWFmc8IxSlvbrR7HA1r0pFy8w2P3SyQY6pgGgLMywZEBmcfgtjZrGOPen9HYiyfQX49SfIWyedxCAE7hFq2Fa9%2FD%2BjiQbVFMcq9RtcnwONvd%2FJf0XuooG3%2BqolV7xAOVgKGkXhvBSOYb6MewDAQdsC9Su7etkDijPDyZmd%2B8Fft%2BC8JD2yL9Ts74GJOs%2FCMB7zbtxzb5lzusa8ovuujx47YwMqSNi1QwBo7NrnrUiZIneZGt6L34qNhytFLzsiK67&X-Amz-Signature=9baf250054ee101f20d1ac0446337722da8acbc352f07c110bc7936cb957fb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
