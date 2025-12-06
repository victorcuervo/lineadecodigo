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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMZXW4F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8l%2BaTQH9lMoVQG%2BjRLUmQFDsG7or1Qz8%2Bg9E722httAIhAMsq%2Fatcygnh6l%2BCoNebAf3n%2FIf%2BbfX6Ct%2BjieELzR9fKv8DCHEQABoMNjM3NDIzMTgzODA1IgwRhgtQCT3byiJ2SkUq3AM0jrCrnlFNSO%2F6bmDD9bE2kDVFsPQtIQmM6nRXa%2FsDYu4Y5umTzehAVjRPlgGBVcHTHYMZV1dH1Gr0OJjlYj57blMAKLLuPuZrWo9Lhmhyel9433EU7c9%2BmiLPnEn9NhzQJjEI1RUs%2BKZ60kfYlEiy1C76k3cw92my05XPTEMk76jxR9taBUb6fGEU%2BDSc8z47sO91zx%2BTXI6z4hLAkwM%2FUGMlW8RjOJFRpXdKl06znO0Cu22OX3gxbwwbPyQgUrObdEQs9wJatAvYk2vo01kZvk7aPb%2FSqzCmZMJ6B4zGmQx9VtvQ3aemjsqHXCWEJP92k7IlbouBEpvLwRUyGgMqHZ48JbXZrWre%2B9hYmixYe1SAKMYDHqYVUWFRj1jScKK7uaXXutlCFGTZB58SCMjG%2FK30gBEghnjhCGD22E2T3nElCbYshLLBXyq6QopWYz%2Bviv%2FmxupfjwTs%2BasoJ5ogH8ZdNQo49TX%2F2cG8Nfv2OUePV0CqL%2FkSaIsCoZgc3QBSg%2Bf4hS6NPo1mHJBGm8iryR2mfqQeufWui5ArHV0Hp5t2YEUMzjCVJdZBQj6PE3yrIHDGmfoe72FpFqV5gzV3EU%2FhVl5hciO3VNYwEUcispK9x2WTzuXyT5y9fDDlvM%2FJBjqkAWxoU3kJzhzlzpZKjh2OOPhSCRWlaaNQtpWfg0T5%2FXxX%2ByRZ7cp%2FHk7tcS%2BMdQaGRewnxBLAWdpZ0bq9%2BKcwf1puJQkwo7fpJs3lhnf14Wp4cg1VTI6vF0XZryqfSjAd1nozJJ5Fcn0ZhA8MiGTov8Nm0NzDzWCGApM94TZdJwb1lJstnBywYVNt9hcTCTA%2BqVSgJQt4jVkwf%2BzwJpcMMogJ7GpS&X-Amz-Signature=a5028ffcb4395a71bad4ab70080fe7aaea1f00f24418515b9b76779b651810f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMZXW4F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8l%2BaTQH9lMoVQG%2BjRLUmQFDsG7or1Qz8%2Bg9E722httAIhAMsq%2Fatcygnh6l%2BCoNebAf3n%2FIf%2BbfX6Ct%2BjieELzR9fKv8DCHEQABoMNjM3NDIzMTgzODA1IgwRhgtQCT3byiJ2SkUq3AM0jrCrnlFNSO%2F6bmDD9bE2kDVFsPQtIQmM6nRXa%2FsDYu4Y5umTzehAVjRPlgGBVcHTHYMZV1dH1Gr0OJjlYj57blMAKLLuPuZrWo9Lhmhyel9433EU7c9%2BmiLPnEn9NhzQJjEI1RUs%2BKZ60kfYlEiy1C76k3cw92my05XPTEMk76jxR9taBUb6fGEU%2BDSc8z47sO91zx%2BTXI6z4hLAkwM%2FUGMlW8RjOJFRpXdKl06znO0Cu22OX3gxbwwbPyQgUrObdEQs9wJatAvYk2vo01kZvk7aPb%2FSqzCmZMJ6B4zGmQx9VtvQ3aemjsqHXCWEJP92k7IlbouBEpvLwRUyGgMqHZ48JbXZrWre%2B9hYmixYe1SAKMYDHqYVUWFRj1jScKK7uaXXutlCFGTZB58SCMjG%2FK30gBEghnjhCGD22E2T3nElCbYshLLBXyq6QopWYz%2Bviv%2FmxupfjwTs%2BasoJ5ogH8ZdNQo49TX%2F2cG8Nfv2OUePV0CqL%2FkSaIsCoZgc3QBSg%2Bf4hS6NPo1mHJBGm8iryR2mfqQeufWui5ArHV0Hp5t2YEUMzjCVJdZBQj6PE3yrIHDGmfoe72FpFqV5gzV3EU%2FhVl5hciO3VNYwEUcispK9x2WTzuXyT5y9fDDlvM%2FJBjqkAWxoU3kJzhzlzpZKjh2OOPhSCRWlaaNQtpWfg0T5%2FXxX%2ByRZ7cp%2FHk7tcS%2BMdQaGRewnxBLAWdpZ0bq9%2BKcwf1puJQkwo7fpJs3lhnf14Wp4cg1VTI6vF0XZryqfSjAd1nozJJ5Fcn0ZhA8MiGTov8Nm0NzDzWCGApM94TZdJwb1lJstnBywYVNt9hcTCTA%2BqVSgJQt4jVkwf%2BzwJpcMMogJ7GpS&X-Amz-Signature=c16487ed9fefa955f42705feb1e567ffa22c9bc69874d407bbe026065fedf691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
