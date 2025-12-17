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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MF6A6I6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjFvZNu0xd1sPCE3gZx1YgoTirZunHQLHWBxOSO%2BQVkAiABBUN322FiN0O3p6%2FUCVT%2B%2B8qtfZa3ZOtZsm0qo7m0vSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMI9lpJI%2Fi9Oay2a3VKtwDbred9HIcBu61IDBPy91P6AwTq9WM1HoavSP0LPw5RxC8hhCReE0q7TUcnGaOuQIRtEe9EoXZFUyjyahELS9uvSq78QEzuEO4LKiNKpF9kx7xMdVfaXZ%2FBv3o5QaneafD8SJIn0X4pkSz4KDP6ohjgz3l0VXpACOOqD67c1fXjUn96t9rElfexPMTLcoO%2BbP8oHZTSrq19RYDB45ehJd6FcZ1jZlimKVPsH9ePtm1q2e%2FOaZZANlMhNCe9ArBhjNAg7By3hH7bv3QxhmqwYbRiAEQz8SaJSau3RQ9SNl%2FqVUB%2BOeciQDWWpfb0jwgtQTNsAFP3jN9BdCxIIT1ufkiomdSb0g4wa8yv7Y2swqJ4or5VXLfN8nAmngsLjV%2FOKZ75bKl0aaz3oWabmDxjpNC6yLXktX6a6xfRS46U8AEXL%2FamqN1p7%2F8zCmjMep0Vq36iOAvj%2F1pSWx1NywWbvutn4DwzwGtp6bvpwKDwIFfZWsMR2ZRCFj0JMGXfxnKZPkmCS7ozEvaTv8f2pATo%2F7RYPgaQHcNSTjCrth6SMEhkiTDCHT0EzjXT8JwJa3lOcX0hPDya506kN%2FKgBLyn7w1lZ%2FQkTOxn6Pt8Py5HwtuLZi%2Fe1pSYWmUDvHyAVwwz5WIygY6pgG0o6DHsw8u802KxIbCUcMhZWKutXZ1URjnYueQF6edbpPUGwqRKkcmLNP4b%2FNaDYB1MDp3q9dzH0FU%2Bs%2FY9AjLmRKVh8w9CuPu7aXB9iV%2BGJNFVZmNYPh040m3LxCi2gvBDoKScncMN6zhDwjoP3pwq4JuqM6cphS6JOL61BZ03shF4zg33WtUtVAFzoPUIZQ523iKLe7qKmUrFHK8JYpYRBvPVLgn&X-Amz-Signature=7ccef9a6479fa2921a861da812d580c93fd0addb2f9d2145e4d2b9a5e163e39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MF6A6I6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjFvZNu0xd1sPCE3gZx1YgoTirZunHQLHWBxOSO%2BQVkAiABBUN322FiN0O3p6%2FUCVT%2B%2B8qtfZa3ZOtZsm0qo7m0vSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMI9lpJI%2Fi9Oay2a3VKtwDbred9HIcBu61IDBPy91P6AwTq9WM1HoavSP0LPw5RxC8hhCReE0q7TUcnGaOuQIRtEe9EoXZFUyjyahELS9uvSq78QEzuEO4LKiNKpF9kx7xMdVfaXZ%2FBv3o5QaneafD8SJIn0X4pkSz4KDP6ohjgz3l0VXpACOOqD67c1fXjUn96t9rElfexPMTLcoO%2BbP8oHZTSrq19RYDB45ehJd6FcZ1jZlimKVPsH9ePtm1q2e%2FOaZZANlMhNCe9ArBhjNAg7By3hH7bv3QxhmqwYbRiAEQz8SaJSau3RQ9SNl%2FqVUB%2BOeciQDWWpfb0jwgtQTNsAFP3jN9BdCxIIT1ufkiomdSb0g4wa8yv7Y2swqJ4or5VXLfN8nAmngsLjV%2FOKZ75bKl0aaz3oWabmDxjpNC6yLXktX6a6xfRS46U8AEXL%2FamqN1p7%2F8zCmjMep0Vq36iOAvj%2F1pSWx1NywWbvutn4DwzwGtp6bvpwKDwIFfZWsMR2ZRCFj0JMGXfxnKZPkmCS7ozEvaTv8f2pATo%2F7RYPgaQHcNSTjCrth6SMEhkiTDCHT0EzjXT8JwJa3lOcX0hPDya506kN%2FKgBLyn7w1lZ%2FQkTOxn6Pt8Py5HwtuLZi%2Fe1pSYWmUDvHyAVwwz5WIygY6pgG0o6DHsw8u802KxIbCUcMhZWKutXZ1URjnYueQF6edbpPUGwqRKkcmLNP4b%2FNaDYB1MDp3q9dzH0FU%2Bs%2FY9AjLmRKVh8w9CuPu7aXB9iV%2BGJNFVZmNYPh040m3LxCi2gvBDoKScncMN6zhDwjoP3pwq4JuqM6cphS6JOL61BZ03shF4zg33WtUtVAFzoPUIZQ523iKLe7qKmUrFHK8JYpYRBvPVLgn&X-Amz-Signature=e3fe6bd031caf489e39cbf982639c9ebf781220c419a1e9e75dc0b452ed510ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
