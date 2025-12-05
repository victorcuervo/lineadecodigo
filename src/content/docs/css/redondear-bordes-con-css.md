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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVFX5LM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFv%2FcCiNEqWrFDUC1uau504nmxOz%2FyZURuDDnOYHY2e3AiB4SwxakyJ3WllhSFbCmA9bny29NvYdp3iHvwJxu4rgBCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbUGvsgdCA2bQJ9scKtwDPPX49bHsrJAdAEQKs9blyYAl1FgMCFmRC6Rxv7sWAkYwubOeMc2pjJIsSEK%2Bf2B%2BOu1RY%2FvmNNzSlo7lhK117oRQ07Ah%2FL2RIXWdy3hMHlXH8awoDYAY09Y0f%2FwzQKXuxOzfldV9f0LhIQCIeZHQX1FRjWImepMOtEOzpcpF9yz8Syjn0clz27x1mOe25f3EwRdOHf6VMCmppKD8vi95XgpBID4X2tGGZ%2BWynm8ng4%2BVIhwr9MQRzUkdsqQAsyI0E7Onk7gpMH0nnkTSksLCsK6E2uFTZda0fdE4LfFOG8hJSwXai7C2uZ%2FjIq9Z%2BjA%2Bs1tZW7aStj3kYRDS7kDqQS1%2Br8F68q3NaU%2FBQS0AAuySNiupNwZs7m%2B7roQskLVk8FJxDmr%2BjkLysUPm4x6MHX4E475KZAos%2FBbmVr1%2FYyEue0ndbj%2FIKF2CMbbinWh%2FlCYLsI3o4scgpCwOsb5V90UYQIl69UiSnXMtXb97dixepY9DShkgFD71dZUq38D0dFyLMOBw5swMow19th4JzFLEv5CMfQjAgv7neJaXb3ffO6wybkCrOAbVneRdCValhhvlWWHiroKA4xrm0NtTHelWdeRB%2Bmb%2BUuhrbLLF0jxGuk%2F0JUF7zl6VqLIwq87KyQY6pgFamLgjUiiHvfG9zVXkY8rbDK5wGVGMEebGpIao8ooWa6J1OCZPFLl1UhilUTyr4qz0HHXpQPveAfy4y%2F5vyUfRE5DtUtIxUUabi6st3PiMk%2BJjr6meuBn7oYZQDjGHWEGKTvw92oSSpKPJLc5uXQZ4Cy5ce%2Bc3BXgU9RxXbR8FIAbaeSPRBX8X6ppvplvwhDRTc7Q49IqOrRz96vSbeq8l7f2Nmd7c&X-Amz-Signature=ec7f8738475c37cec739079027b8e53d092ccdf1e489dfc29f14af58992f27f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVFX5LM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFv%2FcCiNEqWrFDUC1uau504nmxOz%2FyZURuDDnOYHY2e3AiB4SwxakyJ3WllhSFbCmA9bny29NvYdp3iHvwJxu4rgBCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbUGvsgdCA2bQJ9scKtwDPPX49bHsrJAdAEQKs9blyYAl1FgMCFmRC6Rxv7sWAkYwubOeMc2pjJIsSEK%2Bf2B%2BOu1RY%2FvmNNzSlo7lhK117oRQ07Ah%2FL2RIXWdy3hMHlXH8awoDYAY09Y0f%2FwzQKXuxOzfldV9f0LhIQCIeZHQX1FRjWImepMOtEOzpcpF9yz8Syjn0clz27x1mOe25f3EwRdOHf6VMCmppKD8vi95XgpBID4X2tGGZ%2BWynm8ng4%2BVIhwr9MQRzUkdsqQAsyI0E7Onk7gpMH0nnkTSksLCsK6E2uFTZda0fdE4LfFOG8hJSwXai7C2uZ%2FjIq9Z%2BjA%2Bs1tZW7aStj3kYRDS7kDqQS1%2Br8F68q3NaU%2FBQS0AAuySNiupNwZs7m%2B7roQskLVk8FJxDmr%2BjkLysUPm4x6MHX4E475KZAos%2FBbmVr1%2FYyEue0ndbj%2FIKF2CMbbinWh%2FlCYLsI3o4scgpCwOsb5V90UYQIl69UiSnXMtXb97dixepY9DShkgFD71dZUq38D0dFyLMOBw5swMow19th4JzFLEv5CMfQjAgv7neJaXb3ffO6wybkCrOAbVneRdCValhhvlWWHiroKA4xrm0NtTHelWdeRB%2Bmb%2BUuhrbLLF0jxGuk%2F0JUF7zl6VqLIwq87KyQY6pgFamLgjUiiHvfG9zVXkY8rbDK5wGVGMEebGpIao8ooWa6J1OCZPFLl1UhilUTyr4qz0HHXpQPveAfy4y%2F5vyUfRE5DtUtIxUUabi6st3PiMk%2BJjr6meuBn7oYZQDjGHWEGKTvw92oSSpKPJLc5uXQZ4Cy5ce%2Bc3BXgU9RxXbR8FIAbaeSPRBX8X6ppvplvwhDRTc7Q49IqOrRz96vSbeq8l7f2Nmd7c&X-Amz-Signature=bcc9b95c72d84cacddebca4555e5dea95db5248bd2a9a14495f25f13a29cd20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
