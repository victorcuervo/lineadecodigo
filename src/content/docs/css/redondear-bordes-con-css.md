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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNWG35H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPt0BMz7GJcDthbWkKmcA1todllsHI%2FaGdFgOAV9YU9AiA8uHsBIrSAETlTLC01%2BtV29a6vgNIIwwElL1KupLd4uyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj2KEGWJl2PA%2Fm5rkKtwDDyOQN9sV2MWOJ2vcWXT30jsV3xMI1B%2BFwHeqKuY4uiDYFc9omV18DpV%2BBNfWMYMA3FyaMhanm%2FKy5B0k4DGtyfxUpobwgYm1Z55qSt9vmidJm1W%2FnIyNX0B%2BFBSBnYvIkSUSzUZAjHTOsULFzoh6tMCtMJsyKt7qeqIqUA4xlYPJi%2BjN3lOdmii0SmC2Uc1ybtGzsNOv0aMT5cBcLvGXnjwR6xYFL4EHJa8e884%2F79h%2BmjMDWxSCAh7Vbq6LUi5v29vEs%2FAeVTdGxCbxfSQBPdttI%2F4M31CT8Q9HssfnueMdDtc5ISlXFOONSuCEnakwzmxYLLMBiByETi4PXI7ab5thstuV%2FUzHlAvwI%2BYS1HKtyeB2PCVnzC9jF7l6ZOetUXixt1v1fyeV%2BCA7Bg1BXWGwENoGkh4e9iPbMNKcu9T%2BygwwxPvKw%2FS6BGYO0FnImmUnXnR9b5rcQ%2FyzqyAooIxx%2FvKSO0kbbrAw9Rfcyde%2F45IA24q2hnExWE7zpLJNxkzhU9rkv6yAf%2F7XNchePW9F68QXDeTuk6cwoC7wI77UOw6DRYtCCIdC04DyfGev1yGyOP0BK6eeq9A%2FZYH9AkyTZi1hO%2BKMIBY4D2NdRUvDjbIK4y3V5qNhi0EwtNzcyQY6pgG4z5alzyXybvRqjpBEfhkFc4mpcFmLJs%2BNvfgldJp92vyIEXZgmjZ8mml15JgHrQigpGaVf%2BW0dQ%2BUXnh5PIf26LVQ%2FB67Y%2Fmu9VH%2B02qotAUr4vAi6nc%2BtYxFXi2AQHZyv1Pvm6cQJnG%2B2rhNkWIbTslKoaV1LEW1M6%2FKVebHgxPhjNZDXIgxgk7SadJb09k09AL%2FNAfN8Cv7ZVkb48PaMF%2BTspfS&X-Amz-Signature=3f52bd0143ec78f52921beb12b21948656965f0b6f3cebd49bf2ba60ce2e4c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNWG35H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPt0BMz7GJcDthbWkKmcA1todllsHI%2FaGdFgOAV9YU9AiA8uHsBIrSAETlTLC01%2BtV29a6vgNIIwwElL1KupLd4uyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj2KEGWJl2PA%2Fm5rkKtwDDyOQN9sV2MWOJ2vcWXT30jsV3xMI1B%2BFwHeqKuY4uiDYFc9omV18DpV%2BBNfWMYMA3FyaMhanm%2FKy5B0k4DGtyfxUpobwgYm1Z55qSt9vmidJm1W%2FnIyNX0B%2BFBSBnYvIkSUSzUZAjHTOsULFzoh6tMCtMJsyKt7qeqIqUA4xlYPJi%2BjN3lOdmii0SmC2Uc1ybtGzsNOv0aMT5cBcLvGXnjwR6xYFL4EHJa8e884%2F79h%2BmjMDWxSCAh7Vbq6LUi5v29vEs%2FAeVTdGxCbxfSQBPdttI%2F4M31CT8Q9HssfnueMdDtc5ISlXFOONSuCEnakwzmxYLLMBiByETi4PXI7ab5thstuV%2FUzHlAvwI%2BYS1HKtyeB2PCVnzC9jF7l6ZOetUXixt1v1fyeV%2BCA7Bg1BXWGwENoGkh4e9iPbMNKcu9T%2BygwwxPvKw%2FS6BGYO0FnImmUnXnR9b5rcQ%2FyzqyAooIxx%2FvKSO0kbbrAw9Rfcyde%2F45IA24q2hnExWE7zpLJNxkzhU9rkv6yAf%2F7XNchePW9F68QXDeTuk6cwoC7wI77UOw6DRYtCCIdC04DyfGev1yGyOP0BK6eeq9A%2FZYH9AkyTZi1hO%2BKMIBY4D2NdRUvDjbIK4y3V5qNhi0EwtNzcyQY6pgG4z5alzyXybvRqjpBEfhkFc4mpcFmLJs%2BNvfgldJp92vyIEXZgmjZ8mml15JgHrQigpGaVf%2BW0dQ%2BUXnh5PIf26LVQ%2FB67Y%2Fmu9VH%2B02qotAUr4vAi6nc%2BtYxFXi2AQHZyv1Pvm6cQJnG%2B2rhNkWIbTslKoaV1LEW1M6%2FKVebHgxPhjNZDXIgxgk7SadJb09k09AL%2FNAfN8Cv7ZVkb48PaMF%2BTspfS&X-Amz-Signature=35996d47a02ae187b113912357d3e9349fa42c18427d80e10c4449f389a1480b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
