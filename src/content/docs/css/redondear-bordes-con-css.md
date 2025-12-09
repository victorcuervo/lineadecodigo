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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VXJYB5W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkgHLTlzvdFjWzrJ10PbzV%2F0B48DQErCz8rCF1MRxR%2FAiAX%2BoUhQhwyBfxlIUpubvPxJUtb7ou5gZ8nuGHDHXgbxiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBSRbT7qStNf%2BASoKtwDZMLy1Ty7XMqU16p%2FYCaNTgpzZJRNoSo735IIa0U93Zu19ocmD3V8RYsdyYrHfViSxYZLfiVydjC%2FwBVT1eXo4Ix0UP6MZhFrc54NgfFOXtYduA5tflLCfNTwROFtv91fhhZYXx7RUlGBEAZXGhoDXEdOjNuaOlkafyOnbk5sDGQHmy6Q%2FbXRwLlu%2BN5HcSwq%2BiFaRaOMDsTPZUrhF8J2WD4iQzkYau8Sj%2FtvaiGfMKqOzQELyWCXVzlgR1%2FDfvCNDnT2e9aoA2Do1%2B0IhNlltYm%2Bn4Ng7XS%2FKUQ1e5VCU9GKnUOORUfg3XMm5aePnwHOa%2Bwt7AWSr62FGBljh27npjIVLlr5rRwDR7rqGIWmHMG%2FXmEvtw0%2FBevO3Rj4LjqD23L9YE53R5EOpl0enmChokbF7DEuS40WpPpy6yHpdmKEoAi7msY7HaK4qY0TT%2BeOM0%2BhJkzZexOYmA6sJMFu1m2bUDVnLLGoHqYH%2Fk7M9PGhnMkBEBdlxKN3DT3%2FUNrCEqhVWCIGR07WyVpjE%2BGYakIEqofQZTnJS0XYoA5JJ%2Fem4TCHEocs7Z%2Bid5moGXph2sIetyTac7Eax54jxnbQyHsw%2BUinMJVvy86buNGFqUxSSRxmfXJRwGAGaegwwI7eyQY6pgG%2FEKm9O6%2FoKeEx9seohLqEj6QtmK9hSr81Meht75v4N8w04QYF4YRCFfoS6AXUmiqFIYlbijLo%2B82ie5mEOzVaWVbJcwNMQBBGKlzczJSbt%2B9UdzRZCp1dFCYvzsefEmpLwkLqcC0WPIziiGCyE62C9sjO2HM30rxCUrFkitNU7MJpBszMKd6hCbMtkL79tZ%2FaqBF8fH5ayKeKJ6DeIR7bCpPN3%2Ffd&X-Amz-Signature=e5d116e96dd946d188ea5ac5427b0cddcc844c9f402b5cc3851787ec1899f447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VXJYB5W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkgHLTlzvdFjWzrJ10PbzV%2F0B48DQErCz8rCF1MRxR%2FAiAX%2BoUhQhwyBfxlIUpubvPxJUtb7ou5gZ8nuGHDHXgbxiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBSRbT7qStNf%2BASoKtwDZMLy1Ty7XMqU16p%2FYCaNTgpzZJRNoSo735IIa0U93Zu19ocmD3V8RYsdyYrHfViSxYZLfiVydjC%2FwBVT1eXo4Ix0UP6MZhFrc54NgfFOXtYduA5tflLCfNTwROFtv91fhhZYXx7RUlGBEAZXGhoDXEdOjNuaOlkafyOnbk5sDGQHmy6Q%2FbXRwLlu%2BN5HcSwq%2BiFaRaOMDsTPZUrhF8J2WD4iQzkYau8Sj%2FtvaiGfMKqOzQELyWCXVzlgR1%2FDfvCNDnT2e9aoA2Do1%2B0IhNlltYm%2Bn4Ng7XS%2FKUQ1e5VCU9GKnUOORUfg3XMm5aePnwHOa%2Bwt7AWSr62FGBljh27npjIVLlr5rRwDR7rqGIWmHMG%2FXmEvtw0%2FBevO3Rj4LjqD23L9YE53R5EOpl0enmChokbF7DEuS40WpPpy6yHpdmKEoAi7msY7HaK4qY0TT%2BeOM0%2BhJkzZexOYmA6sJMFu1m2bUDVnLLGoHqYH%2Fk7M9PGhnMkBEBdlxKN3DT3%2FUNrCEqhVWCIGR07WyVpjE%2BGYakIEqofQZTnJS0XYoA5JJ%2Fem4TCHEocs7Z%2Bid5moGXph2sIetyTac7Eax54jxnbQyHsw%2BUinMJVvy86buNGFqUxSSRxmfXJRwGAGaegwwI7eyQY6pgG%2FEKm9O6%2FoKeEx9seohLqEj6QtmK9hSr81Meht75v4N8w04QYF4YRCFfoS6AXUmiqFIYlbijLo%2B82ie5mEOzVaWVbJcwNMQBBGKlzczJSbt%2B9UdzRZCp1dFCYvzsefEmpLwkLqcC0WPIziiGCyE62C9sjO2HM30rxCUrFkitNU7MJpBszMKd6hCbMtkL79tZ%2FaqBF8fH5ayKeKJ6DeIR7bCpPN3%2Ffd&X-Amz-Signature=cf6c9698a068858edf53974d4aa563d8ce688f940aff43c03ac6772811ceb5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
