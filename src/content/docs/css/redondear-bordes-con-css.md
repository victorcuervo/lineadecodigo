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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSHZYNM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMHz7XdzE%2FWyOfO9%2F8%2BhZwV2f3xoO%2B9lBpoCWef3sGcAiAYJh%2Bf5cfQmUGBkG8li5pBkQDFPvGZWGT8Y3U6So38eyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0FsEJNygN3pjBUIbKtwD7XnrncdoSjlSslW%2BQ8%2BtJ%2F0q4MBZmjcAKas57efCqiJDb9aV4o%2F6P9YJaLUXu%2FleDHV6cspiGuQFvn%2FKBjMQ1yT3jrPY6la6ovyiNha8PDvD0t0zD%2F80LAa8vzuwnpn29%2Brt1NTEgLln%2FlDcWXfz1PEWSK%2By11XlY7hM3znciwqkAwd6tFgei9qMTTUNIVSIbGcrWPNbLEr6hYaU57WtKfxmxhV7I8f5%2F7ACjB7In4tdjy%2FS5Jta9eIC7i8DaKgyYB%2BA1h6PglHo4qcCrdS5EwDGSZIIRgSwx6ZsvFd5MxtutoX3kfKFVM%2B0S3ZtfaVgmUhKWptbS%2Ff5rhAC%2BEbRrsol2WVWG1sHIN1k2XD78NtZvlFGu4ZR6AbV6Wj6k7MXDiidZ1Otih9Uwz8VanZl93wR1KpAj2x59uUosysSeDhMPuaT4QIEDQBiWcPa5Wz9xxIb9Fpenw%2Fxv803TD4zUIcV4HqAuYqNyHsk6GJQQDbdW005CacdSlsQsqg3%2Fec4xq3u9GAvzce7J4tCaJ0g6Mb6Owu1hGKL8WqEN9JeDC3xqa0gVlTfc2HnZwyJ5N%2FNpRWoD2JNdfed87Si4%2FGE918YWZAeXU7yjpFTkEv8uDVbgZRlX%2B2NUT2ztLwws8TfyQY6pgHAH5DDCfDB0EZjMC0cQ0iGldRWekQurH1x93ZBpHEgHkT3tKCfWLHNeNozayl068taNCSNJfsQFcv%2BMg8juBNp42hh8W5D6u2rMeDFk7DChPgsX3o%2Bq63o3X8fMjBZfUkY4ARkc4skrXcmU2eMQSJcS1ayhoE77KW8bnWxkBverc6ly3tXp6A53nPd8Lmtm%2BgMi4E4bIyo9FowfH%2F50fUheKDgoX9X&X-Amz-Signature=b24d1abe64d208a5c49f8909bd42af0b22b511a490dab8fd4de0a2651472e97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSHZYNM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMHz7XdzE%2FWyOfO9%2F8%2BhZwV2f3xoO%2B9lBpoCWef3sGcAiAYJh%2Bf5cfQmUGBkG8li5pBkQDFPvGZWGT8Y3U6So38eyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0FsEJNygN3pjBUIbKtwD7XnrncdoSjlSslW%2BQ8%2BtJ%2F0q4MBZmjcAKas57efCqiJDb9aV4o%2F6P9YJaLUXu%2FleDHV6cspiGuQFvn%2FKBjMQ1yT3jrPY6la6ovyiNha8PDvD0t0zD%2F80LAa8vzuwnpn29%2Brt1NTEgLln%2FlDcWXfz1PEWSK%2By11XlY7hM3znciwqkAwd6tFgei9qMTTUNIVSIbGcrWPNbLEr6hYaU57WtKfxmxhV7I8f5%2F7ACjB7In4tdjy%2FS5Jta9eIC7i8DaKgyYB%2BA1h6PglHo4qcCrdS5EwDGSZIIRgSwx6ZsvFd5MxtutoX3kfKFVM%2B0S3ZtfaVgmUhKWptbS%2Ff5rhAC%2BEbRrsol2WVWG1sHIN1k2XD78NtZvlFGu4ZR6AbV6Wj6k7MXDiidZ1Otih9Uwz8VanZl93wR1KpAj2x59uUosysSeDhMPuaT4QIEDQBiWcPa5Wz9xxIb9Fpenw%2Fxv803TD4zUIcV4HqAuYqNyHsk6GJQQDbdW005CacdSlsQsqg3%2Fec4xq3u9GAvzce7J4tCaJ0g6Mb6Owu1hGKL8WqEN9JeDC3xqa0gVlTfc2HnZwyJ5N%2FNpRWoD2JNdfed87Si4%2FGE918YWZAeXU7yjpFTkEv8uDVbgZRlX%2B2NUT2ztLwws8TfyQY6pgHAH5DDCfDB0EZjMC0cQ0iGldRWekQurH1x93ZBpHEgHkT3tKCfWLHNeNozayl068taNCSNJfsQFcv%2BMg8juBNp42hh8W5D6u2rMeDFk7DChPgsX3o%2Bq63o3X8fMjBZfUkY4ARkc4skrXcmU2eMQSJcS1ayhoE77KW8bnWxkBverc6ly3tXp6A53nPd8Lmtm%2BgMi4E4bIyo9FowfH%2F50fUheKDgoX9X&X-Amz-Signature=b7ffc0bacc8b0817e85f35c2e641a93fb168edce0d280f1e567debc94897b755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
