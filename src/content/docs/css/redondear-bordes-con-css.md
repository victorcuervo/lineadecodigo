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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPYKTOX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmxHM12GBszdU%2FvLs07mw0auZo8RbAghEuk%2BUY1bQ0XAIhAJTh5FutE%2B7mHlRFhzHSTdMzjGzF37gcOVi2M8PUKqchKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmPKn%2FbUZHrjFrlIYq3AMkebJKAcilio%2FKV3mHWHge%2B1mlq4DEm1TqgL%2FMiwSSDMvL0j3jyiX78ETZb2gatxqxgqeBKShs4afX1r2yRjb6OJ2M%2FvWRs1qFWrpLAIf%2FHDdYe5DfZDSxO9LRVH2noLKsE5uje00kTycPZk%2BRQn2rYW7pcgn2FOEsmJwFmp6Ac%2Fp9aIsqYDcWZF7mNwG7iDo1ji7WW0JmcRGOVLOpSE7JAgwCNstnn9Rzgrr2HVWyhMjPPMWGp2Ld08HU1LlGM00sSzSG%2FSbIozJw5UDD9b3zB7YdnVKw5rs5Yf9z3jiyxSXWH3XXU8vnPIDn8a3jGZm8nx3us5TWYnO4ceZOevqHKOXXBCSXQulEvZ1G6iABWljPi%2BRRUhuNDHUJ8K%2B8DRmryPcSXSGyMWYaJ2IbfDL2gBpKSO8z980B%2FzmCMksz%2BanK0uTRWIE6mRcDppwdQ0CdZz%2B6fl7YcvxQH5RB9cd7f9lX1LtAc5mVZXnjp1nz6d%2FsON2mACUTGMW71PtJB8PAwzvIR7jUojnHZY96pl7fSN6FZuiRQZYWD5u8R%2FcnkDc0xklmfoPvwDjvX8wR%2FSGKsKife%2B8izmcMckaVrPUealg5s0X9a0at9p12ggOAX9cz%2BuOTpO%2B66sMUQTDZodjJBjqkASMdp0g%2FaeLJrdb87J%2BNccPFUd2P1o56uLw0Vr9OlAe4fNZB%2BznNNOSuSPpmDkThi3muIwjWSke4q%2B1AjYjd4OaXPmUn6iLQ2onZIXkDLPxSg5SM0tyPbTZHRc%2BF64k8j7hYO5gGy1Np7X37v%2FNfT9z%2B7i348OxpwqAWQaOqfHUve9u1JPZArwuEX0CVLdfF%2BhRzbg1aeDXKbphvSNbKKHoAO2RR&X-Amz-Signature=461990ac2b4d4880a9089b177dff4ed7825760720dc026f0501ffdf0a205cf11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPYKTOX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmxHM12GBszdU%2FvLs07mw0auZo8RbAghEuk%2BUY1bQ0XAIhAJTh5FutE%2B7mHlRFhzHSTdMzjGzF37gcOVi2M8PUKqchKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmPKn%2FbUZHrjFrlIYq3AMkebJKAcilio%2FKV3mHWHge%2B1mlq4DEm1TqgL%2FMiwSSDMvL0j3jyiX78ETZb2gatxqxgqeBKShs4afX1r2yRjb6OJ2M%2FvWRs1qFWrpLAIf%2FHDdYe5DfZDSxO9LRVH2noLKsE5uje00kTycPZk%2BRQn2rYW7pcgn2FOEsmJwFmp6Ac%2Fp9aIsqYDcWZF7mNwG7iDo1ji7WW0JmcRGOVLOpSE7JAgwCNstnn9Rzgrr2HVWyhMjPPMWGp2Ld08HU1LlGM00sSzSG%2FSbIozJw5UDD9b3zB7YdnVKw5rs5Yf9z3jiyxSXWH3XXU8vnPIDn8a3jGZm8nx3us5TWYnO4ceZOevqHKOXXBCSXQulEvZ1G6iABWljPi%2BRRUhuNDHUJ8K%2B8DRmryPcSXSGyMWYaJ2IbfDL2gBpKSO8z980B%2FzmCMksz%2BanK0uTRWIE6mRcDppwdQ0CdZz%2B6fl7YcvxQH5RB9cd7f9lX1LtAc5mVZXnjp1nz6d%2FsON2mACUTGMW71PtJB8PAwzvIR7jUojnHZY96pl7fSN6FZuiRQZYWD5u8R%2FcnkDc0xklmfoPvwDjvX8wR%2FSGKsKife%2B8izmcMckaVrPUealg5s0X9a0at9p12ggOAX9cz%2BuOTpO%2B66sMUQTDZodjJBjqkASMdp0g%2FaeLJrdb87J%2BNccPFUd2P1o56uLw0Vr9OlAe4fNZB%2BznNNOSuSPpmDkThi3muIwjWSke4q%2B1AjYjd4OaXPmUn6iLQ2onZIXkDLPxSg5SM0tyPbTZHRc%2BF64k8j7hYO5gGy1Np7X37v%2FNfT9z%2B7i348OxpwqAWQaOqfHUve9u1JPZArwuEX0CVLdfF%2BhRzbg1aeDXKbphvSNbKKHoAO2RR&X-Amz-Signature=cf6b2fe5b01ba4ecb284aa970e09c83945edecb551d2735ce092bece03b35840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
