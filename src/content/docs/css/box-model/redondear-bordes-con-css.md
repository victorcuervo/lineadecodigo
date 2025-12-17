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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANBAEPE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi12f09HlV7Z4W5bAD1sVDpyfsqX75oU%2B0HRuBpE3soAIhAP7%2BDTpsJLJg8Jy%2Bf55%2B0%2FipGePX%2FZlnNeb2TKHWZXXLKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsTH569Br1ion3OQEq3APmkqmxYQaXWS%2Fs0kB5%2BGbcNMVj2NcNc9GRHqRsWxtpiCsUKp8L5ng8xWHdklP1u%2Fe%2BA7ZZYEQDv7UIh4Fk6XJtAC%2F80penf55qp4cGX9sMabWCG1hVpe0bNWylLyBsuP53yAz9jPL56ya8A2tJhz7pLfEq4grLpDe6t%2FWxw%2F0KDZhPcSsnSWZtkLGnpOaONrVWehFdwHIy3nxsoCE8e5hSl448QzmfzAU37TPhQfnc7HSPCJzQtKW8qHvpAJGyPvSFoz7w4z9KVFkzPf238uVJoGFXZdDpBFe1h%2BB5VqmkDBkWzAag8%2BkX031hPhZGhs0OBe3O2bOnhJgL5M5Wuk75JX5mIe9jRUTT2plFniyYfoF2afK7IKOC9ITjfmGvi9zxuV5iL%2F9jK1UqqA8UtH%2BH%2FWTEgFdwaUo%2FAlLWXgX35AnqijlS%2BRwJ2nkGQ8tzAYKRA90OrlFX9M8uqi1bXvEsB2gUjdRtAL404WMRomV4XswEB5FbIbwrXIgxN%2FrtxU%2FkPdQVSvt58KV8YR0Zx0arXetjwoawdWTZY4LJsnAd8Sa0BsKiItv4zxZ4goXwuMPx%2F4DhzzikLyJWgGuG7QKOnArf4Ue76Tt3yCdkT%2BT4d0oVKdDffqd9A3dvyjCogYvKBjqkAddNwaU6m1NgWLWijqxD6mtAgVq6ZYVW1DSOsCQnFXVQMUM9RzDxVvLGaYK%2Fhyu9pdwK4xVGUhAfrIksF6DhT7ib2f%2FR2tnwdD9gquRDCfbOTRSLGaP%2BginTBJyUzz05bep2GAPDLXOYD7uRfy6oKKR4u9LrzbAeGs%2FVGz2HJEMft1ae%2F%2B0rWlLR09FbmbOskwF7d0gsvPwkFDDbzlpruyytCuNb&X-Amz-Signature=9681f737b22829099a4e2eb866d70509a0b88058fb37b7435c238247476a7180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANBAEPE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi12f09HlV7Z4W5bAD1sVDpyfsqX75oU%2B0HRuBpE3soAIhAP7%2BDTpsJLJg8Jy%2Bf55%2B0%2FipGePX%2FZlnNeb2TKHWZXXLKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsTH569Br1ion3OQEq3APmkqmxYQaXWS%2Fs0kB5%2BGbcNMVj2NcNc9GRHqRsWxtpiCsUKp8L5ng8xWHdklP1u%2Fe%2BA7ZZYEQDv7UIh4Fk6XJtAC%2F80penf55qp4cGX9sMabWCG1hVpe0bNWylLyBsuP53yAz9jPL56ya8A2tJhz7pLfEq4grLpDe6t%2FWxw%2F0KDZhPcSsnSWZtkLGnpOaONrVWehFdwHIy3nxsoCE8e5hSl448QzmfzAU37TPhQfnc7HSPCJzQtKW8qHvpAJGyPvSFoz7w4z9KVFkzPf238uVJoGFXZdDpBFe1h%2BB5VqmkDBkWzAag8%2BkX031hPhZGhs0OBe3O2bOnhJgL5M5Wuk75JX5mIe9jRUTT2plFniyYfoF2afK7IKOC9ITjfmGvi9zxuV5iL%2F9jK1UqqA8UtH%2BH%2FWTEgFdwaUo%2FAlLWXgX35AnqijlS%2BRwJ2nkGQ8tzAYKRA90OrlFX9M8uqi1bXvEsB2gUjdRtAL404WMRomV4XswEB5FbIbwrXIgxN%2FrtxU%2FkPdQVSvt58KV8YR0Zx0arXetjwoawdWTZY4LJsnAd8Sa0BsKiItv4zxZ4goXwuMPx%2F4DhzzikLyJWgGuG7QKOnArf4Ue76Tt3yCdkT%2BT4d0oVKdDffqd9A3dvyjCogYvKBjqkAddNwaU6m1NgWLWijqxD6mtAgVq6ZYVW1DSOsCQnFXVQMUM9RzDxVvLGaYK%2Fhyu9pdwK4xVGUhAfrIksF6DhT7ib2f%2FR2tnwdD9gquRDCfbOTRSLGaP%2BginTBJyUzz05bep2GAPDLXOYD7uRfy6oKKR4u9LrzbAeGs%2FVGz2HJEMft1ae%2F%2B0rWlLR09FbmbOskwF7d0gsvPwkFDDbzlpruyytCuNb&X-Amz-Signature=62a505fce60a5b3d79037b9e3f4a9200f5098fed8b4a22988206c354bfaf8a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
