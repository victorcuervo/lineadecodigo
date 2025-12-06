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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNC5T3N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsMzyOZfuOdfxrYiRA%2BhKsSS%2FeJbdnGw553CfoMqiy7AIhAJ%2FESB2yZGQqYJLE5UcveWYWOBuChgj7X8XhZ5dFT2pSKv8DCH8QABoMNjM3NDIzMTgzODA1Igw2Ct6R4m0m0qVs%2BRgq3AM9bdDE8vPFoM9HFpsSCUb0P5txjWXbGOPjkiHD4fK63bxHSmn8xaEcxqiHwXZkwvPolj4cL7B1U7P2yi5ulpRpj37o75G%2FfufdX5TMOnjUYLw6mx486F6r2p8BufxVrZROE9XJORMchnJ0vnmgma9wUBTBkx62qJRtQdEyO1C5ldNRlyzi6cRy8%2FbonwobDoDiWaBQknLSnmVhtY0eJPJC2%2FqiXP1BTDeROV8zl%2FkFxgb7jxONtSKJkwL0RJNgBFzX%2BEtvjH4aQdkX6nK3VqYIRU2JBN%2FsP7zbi%2FALDPI2zt5kEtOxBm1B4iwAwn%2FF1PYogoGFH1q%2FWmNZIvuJg00inYMjegWjfaWVBz6vwo0BMjnzRLlf%2FRNHqtOrCjVqsgcSqAHkH4q5Cd4NKBweNB0ki1%2B54tOT4cDfI5oTryv%2FcTGZq9roeqfpDuYM%2FTrzIyBE9GkVjQWFcDRGNvUo34Rqj6u50DF8ahVNnTfWCMFMogoXbrqzswF85GBJLvqnPr0o%2F3171xrizGGKsI06W%2FuFBPhhcH71%2BmXl%2F7rniVmkV%2B2oGJggsfLkjKPcHADZ61A1Fz4DNsKgSxFazWYbGaW3rncNsPLKtOfwbLhPdzvuHEauImL37G7RspB5VTDQ09LJBjqkARYicYFxejPyMBjnWvNFnZVx3eKYn4qKO7vvhVn2nr8kczOx%2BkBI4TZWckU2U7zuzZ8hoJkTHXZ%2BHh0hcVfxzwgRfLfG1lZJTmQpqL7eosGOacmoqbqvcywFzGcZ4g7t1yt7HOgZ6PjIVSseFOuUqYEcq3DBW9iA6Vh8vgwTuQExT7DZA0JM4oLjxOaaoGbzqMXXbptOEABFW1eeVWHk00kLiNMA&X-Amz-Signature=4545ebf86ec1c42564de29f9d2a068a2c3615aaec26786d991adb6a54711ea43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNC5T3N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsMzyOZfuOdfxrYiRA%2BhKsSS%2FeJbdnGw553CfoMqiy7AIhAJ%2FESB2yZGQqYJLE5UcveWYWOBuChgj7X8XhZ5dFT2pSKv8DCH8QABoMNjM3NDIzMTgzODA1Igw2Ct6R4m0m0qVs%2BRgq3AM9bdDE8vPFoM9HFpsSCUb0P5txjWXbGOPjkiHD4fK63bxHSmn8xaEcxqiHwXZkwvPolj4cL7B1U7P2yi5ulpRpj37o75G%2FfufdX5TMOnjUYLw6mx486F6r2p8BufxVrZROE9XJORMchnJ0vnmgma9wUBTBkx62qJRtQdEyO1C5ldNRlyzi6cRy8%2FbonwobDoDiWaBQknLSnmVhtY0eJPJC2%2FqiXP1BTDeROV8zl%2FkFxgb7jxONtSKJkwL0RJNgBFzX%2BEtvjH4aQdkX6nK3VqYIRU2JBN%2FsP7zbi%2FALDPI2zt5kEtOxBm1B4iwAwn%2FF1PYogoGFH1q%2FWmNZIvuJg00inYMjegWjfaWVBz6vwo0BMjnzRLlf%2FRNHqtOrCjVqsgcSqAHkH4q5Cd4NKBweNB0ki1%2B54tOT4cDfI5oTryv%2FcTGZq9roeqfpDuYM%2FTrzIyBE9GkVjQWFcDRGNvUo34Rqj6u50DF8ahVNnTfWCMFMogoXbrqzswF85GBJLvqnPr0o%2F3171xrizGGKsI06W%2FuFBPhhcH71%2BmXl%2F7rniVmkV%2B2oGJggsfLkjKPcHADZ61A1Fz4DNsKgSxFazWYbGaW3rncNsPLKtOfwbLhPdzvuHEauImL37G7RspB5VTDQ09LJBjqkARYicYFxejPyMBjnWvNFnZVx3eKYn4qKO7vvhVn2nr8kczOx%2BkBI4TZWckU2U7zuzZ8hoJkTHXZ%2BHh0hcVfxzwgRfLfG1lZJTmQpqL7eosGOacmoqbqvcywFzGcZ4g7t1yt7HOgZ6PjIVSseFOuUqYEcq3DBW9iA6Vh8vgwTuQExT7DZA0JM4oLjxOaaoGbzqMXXbptOEABFW1eeVWHk00kLiNMA&X-Amz-Signature=d6081c04c75740c1b5c145e75829ee03f37caa83fffff50fdfe2463d2d991d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
