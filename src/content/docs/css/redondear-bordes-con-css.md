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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEKRGWH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOUj8YJXTeIvyecn0oXIbWyKIPCJhj7uQS%2FUjI7%2F%2FAnAiEA4shRLkqEzozkmsmlAdFXYvFR6FbKLhbCF3ducxgDqEIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2FpFYO2vBOba7CFYircA5QPbgS%2FHBpw57DYe%2BXA7AwGOu9YLr6EAaCbp74BBUKM0wQXRgbEFWosukocRuUJiemmiYCkTc51ef92uISr0x1IwbuhuVO4d5iQXEGfgnFPYZaYLNSg8Zi69vzpzhnOf%2BecDyIs3ssyCGOxKFIeTR%2FWjF%2FXOVA0Jr97Yjb2OqqSaoE11%2FtPYusqa6XgBq6gF4XGGFixXUNgRXHkTaw9%2B%2BuWQJRmEgGJQPxTCr1Sf1aehTJ4kSF1Keot%2BeV4o5g81ihvwhfevcw%2BGkDdZfIS6V4jVY4z1cWLBZLzX8byUd%2BV2X9y%2FEo9%2FWIQi2UVEdvjIRj5bDC3COYhycLGD9i38HWepbxgRqHJnvZA%2BC6exyro3BgGczMdL5hYcxTq%2BLqSKqIZxsJhvnhWrA5GnGQxFIT7Aby6b5HrIUpU06M6JQfKBAdWzmsGnQv5XKLAToLF16FqzY0KrZgK3FIUuUAI5Km1ynMJWR9rIC8sX8no%2Fgb54MWytlfEPVIoXiCNMxpHUYsILTD6btnfCjtFpMHmWeGlmkil88%2FzFCmtsE63pLIXG5481cyQEJhZlWktrr30eLOCsmIAQgtRO55%2BUyx%2Bn%2FKgYSdIL5Kj3juP3gAfsJqlZfB8rIR9eyE788YGMO%2BGzckGOqUBwHbfoIlsyDZiTdfyYypWuZxYghfQ3WTfv5%2FMNrjf6U%2F6MUFCarTozVRJbcaNbpeD2F7biMArqgndSrF5Vtb5%2FcR4QZn8fT9PrSmS8I4OUDSinwsKOz3jvJjkmO6rtGyEJF3q3hKC2z%2BSUbL%2Bb8HmmuvHASmh1rPGv3kFGjKhkIdLHtKZYBNh9ejrOlOFaOTVtdid114VXohIll5yIuUnW6wpa4I8&X-Amz-Signature=38194b197df14dc05c3ef64b84490dabd40dab99765d6b2a44c4f7093c2209f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEKRGWH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOUj8YJXTeIvyecn0oXIbWyKIPCJhj7uQS%2FUjI7%2F%2FAnAiEA4shRLkqEzozkmsmlAdFXYvFR6FbKLhbCF3ducxgDqEIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2FpFYO2vBOba7CFYircA5QPbgS%2FHBpw57DYe%2BXA7AwGOu9YLr6EAaCbp74BBUKM0wQXRgbEFWosukocRuUJiemmiYCkTc51ef92uISr0x1IwbuhuVO4d5iQXEGfgnFPYZaYLNSg8Zi69vzpzhnOf%2BecDyIs3ssyCGOxKFIeTR%2FWjF%2FXOVA0Jr97Yjb2OqqSaoE11%2FtPYusqa6XgBq6gF4XGGFixXUNgRXHkTaw9%2B%2BuWQJRmEgGJQPxTCr1Sf1aehTJ4kSF1Keot%2BeV4o5g81ihvwhfevcw%2BGkDdZfIS6V4jVY4z1cWLBZLzX8byUd%2BV2X9y%2FEo9%2FWIQi2UVEdvjIRj5bDC3COYhycLGD9i38HWepbxgRqHJnvZA%2BC6exyro3BgGczMdL5hYcxTq%2BLqSKqIZxsJhvnhWrA5GnGQxFIT7Aby6b5HrIUpU06M6JQfKBAdWzmsGnQv5XKLAToLF16FqzY0KrZgK3FIUuUAI5Km1ynMJWR9rIC8sX8no%2Fgb54MWytlfEPVIoXiCNMxpHUYsILTD6btnfCjtFpMHmWeGlmkil88%2FzFCmtsE63pLIXG5481cyQEJhZlWktrr30eLOCsmIAQgtRO55%2BUyx%2Bn%2FKgYSdIL5Kj3juP3gAfsJqlZfB8rIR9eyE788YGMO%2BGzckGOqUBwHbfoIlsyDZiTdfyYypWuZxYghfQ3WTfv5%2FMNrjf6U%2F6MUFCarTozVRJbcaNbpeD2F7biMArqgndSrF5Vtb5%2FcR4QZn8fT9PrSmS8I4OUDSinwsKOz3jvJjkmO6rtGyEJF3q3hKC2z%2BSUbL%2Bb8HmmuvHASmh1rPGv3kFGjKhkIdLHtKZYBNh9ejrOlOFaOTVtdid114VXohIll5yIuUnW6wpa4I8&X-Amz-Signature=70b7c5879847d75298dca163fa90e8e2cebb2fd7e81e5f8863b4d2c96db47a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
