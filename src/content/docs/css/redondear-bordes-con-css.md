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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IWKSIA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl2j%2F2gzqZGDRV5EZYc55MwvNSwoCvoNZ9WclDbYnzsAiAFIAqCickvdCAS95IYDt9bYps3kfinmvWU4ORGdEOctSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2FOSNOiw%2Fy3EUxBuKtwD%2BbpeeG4UJg5mE1SNuhEqAss6um9i4l7T2W8WHdPHK1madv2thJFLYznrUA1t%2FMx6RrN2CDpB%2BCWjn5QfrWbg%2ByzjM4zII46ps9J%2Bv5nUpwnRMJiclG%2FgTNCmGaD%2F54uGbke3KdlCy5e%2B7YsSRa14bbBtF30tu0reeBLrd8yBxbtZE6wlyL9fJdxVKsXTZCR1A6sBCewjfYtamYbR8NcR9YMzVKgkdKjN9DfdUx%2FskMoFo2pAG8TLGg5RYrvPyE4lfmS%2FuoWgs1IfA9dPHAiCb%2Brz4OdkgXf3rog%2B7Dl8%2FawmrgpOQWEt%2BYC6bv50ublppOJ1CmUzoaWFc9dR3usnqRb5oqYXP5zyAWCv7NtNSRd7twg49VEEZMLyalBWZIbeC0XOwBpDXETauLcM8SfuzrDb9oKUY6RyjZ10gwkClUzJDG0409gEeZHyMpFHwZMBwKifXOuHdfpe6Z5y0Kl7%2Bic3oJ6mz%2Bqor0QFXwx8N%2FElZrjFodnZouTSi0JLc1Zk2iN0jcgGD5uDtxdXzlhtMTz6XE%2FqSDmlDc3CGsrxucAnHUbR4GHFdu%2FqS9nPNGjc4RHHZjdG2WV0EysHz9Rq0ELVXIDFoEkDr7oAIKRQ5JYUpQt9uAf%2FM9q%2B4IYwg%2F7SyQY6pgEXruiM9z1Z4T7%2B53ceHpAh7SZLb38XEYujeONIkIHaa0kb05QSGLZJWq%2Bw2O8HKbtOUrg9iPMmju6jROHuvJc3pfB%2FWzxpyHdPFmRvc1sV07mmFAuEnt5v%2BC2Y5Cd%2FOpzzM5rmfb629ASLajrZ65JDoUDpN87FrpvL9BlyY5rjVhsrMLAF0cEhxu%2FypjLoVQtbV37Ol2QXW6JFRcN%2F4PbL%2FflWc7KE&X-Amz-Signature=b3923a16caaa4b4c1d25895f34547c479be83eb9be009553068d50809ee2a812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IWKSIA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl2j%2F2gzqZGDRV5EZYc55MwvNSwoCvoNZ9WclDbYnzsAiAFIAqCickvdCAS95IYDt9bYps3kfinmvWU4ORGdEOctSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2FOSNOiw%2Fy3EUxBuKtwD%2BbpeeG4UJg5mE1SNuhEqAss6um9i4l7T2W8WHdPHK1madv2thJFLYznrUA1t%2FMx6RrN2CDpB%2BCWjn5QfrWbg%2ByzjM4zII46ps9J%2Bv5nUpwnRMJiclG%2FgTNCmGaD%2F54uGbke3KdlCy5e%2B7YsSRa14bbBtF30tu0reeBLrd8yBxbtZE6wlyL9fJdxVKsXTZCR1A6sBCewjfYtamYbR8NcR9YMzVKgkdKjN9DfdUx%2FskMoFo2pAG8TLGg5RYrvPyE4lfmS%2FuoWgs1IfA9dPHAiCb%2Brz4OdkgXf3rog%2B7Dl8%2FawmrgpOQWEt%2BYC6bv50ublppOJ1CmUzoaWFc9dR3usnqRb5oqYXP5zyAWCv7NtNSRd7twg49VEEZMLyalBWZIbeC0XOwBpDXETauLcM8SfuzrDb9oKUY6RyjZ10gwkClUzJDG0409gEeZHyMpFHwZMBwKifXOuHdfpe6Z5y0Kl7%2Bic3oJ6mz%2Bqor0QFXwx8N%2FElZrjFodnZouTSi0JLc1Zk2iN0jcgGD5uDtxdXzlhtMTz6XE%2FqSDmlDc3CGsrxucAnHUbR4GHFdu%2FqS9nPNGjc4RHHZjdG2WV0EysHz9Rq0ELVXIDFoEkDr7oAIKRQ5JYUpQt9uAf%2FM9q%2B4IYwg%2F7SyQY6pgEXruiM9z1Z4T7%2B53ceHpAh7SZLb38XEYujeONIkIHaa0kb05QSGLZJWq%2Bw2O8HKbtOUrg9iPMmju6jROHuvJc3pfB%2FWzxpyHdPFmRvc1sV07mmFAuEnt5v%2BC2Y5Cd%2FOpzzM5rmfb629ASLajrZ65JDoUDpN87FrpvL9BlyY5rjVhsrMLAF0cEhxu%2FypjLoVQtbV37Ol2QXW6JFRcN%2F4PbL%2FflWc7KE&X-Amz-Signature=bf321706ce3eae3d974748858150d2e7fb09dfb6f495daf0c215e6f1370b1bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
