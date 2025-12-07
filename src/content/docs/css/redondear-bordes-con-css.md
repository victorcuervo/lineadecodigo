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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USMX7UI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEM3cOEgAFqTJIp12WMNzScMm1eJ1Gdc5Ly8BqcP9XmaAiEA2XlNgmUy7x%2FBJst23L780Envsd8XZJMjQJMgGuYJXlYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASWhhVWyv5ORdMxmCrcA2bI8Y1gtRP3layOtYEuakOP0zbM10cGHNYEhpVrlFJpyXC%2FLNLUMBo0pdMqwLk3rNoGHkpLb25pBDMIx4p7nDuwx9XIJvluyCGYafnxRifLwMPTgJoAmhnL8PqVz6Re6VBLTGL%2BwafnOZ%2FGn1ZGlsMR0eY4tBS%2FKFduGLjk4hsHuq8F%2BcB0lLq5kibw97Mi7W7R45uPxRhhV2l%2FELCOWjCkYjIHX6Vuzx43BgyoRRVHamMktzPPbQGv5hQBfUjdKH6LQY7B2DlrnrDngimzip0VSKHrsKA67qhASzVAoc0E%2Fw4dXwIlqf%2F%2BW7HtO0rT%2FgCbisn2SPzMpJqfx8BAJk0kuowLVPGdYEEAHEE2OqQFi5ERTcEw7lX9MDOWfpTzZgqjLU%2BtHX8ED50udP0kl6DuSU9Il%2Boribot8e41oy30lzl0RCi%2BC9VDYMK93EgfvYCq%2F0u2YmB9EUJeTWyP7R3p15FOdNmtBiNkzOKp47wlsraSHJLM1hut0DP7W131uf%2FeWFG3UkoX%2FP4ICym2gkFQ1cFH%2FvgbcYlsKCqCgNzOszpTtgM%2F4x7vJr7wQLy%2BvVX4aF2wkhyI19BVOjXoOgoeO%2FB2D2%2F4Gc0c0Jp1kBWpSrCRmu3eZV5Yk31bMNv90skGOqUB5E42T6yg2Jbro6fQtXLMk%2FIyoFbkFDg1ELbZ9izUWwt0XaoPhegTxlt1Bo1%2BAoChiqfOz3ZhgExB22ZPHHWoSVBWDOewOKbUGAHnPDGxQkK7aGqx2%2FHyTe8eEWfnyxReIZSgu3oPKTTcVL1LIDnL0COys0KCiAh%2FLEBScdwGw8o6Xpz3uWk1%2BGAhe2Hm2SQ7K8X8FHxqWJEV5lCRDHWNRrnmnSP%2F&X-Amz-Signature=91402519fa4707f8f8e8623a311ef9489709eabe9b07b085fd35b0b65df88dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USMX7UI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEM3cOEgAFqTJIp12WMNzScMm1eJ1Gdc5Ly8BqcP9XmaAiEA2XlNgmUy7x%2FBJst23L780Envsd8XZJMjQJMgGuYJXlYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASWhhVWyv5ORdMxmCrcA2bI8Y1gtRP3layOtYEuakOP0zbM10cGHNYEhpVrlFJpyXC%2FLNLUMBo0pdMqwLk3rNoGHkpLb25pBDMIx4p7nDuwx9XIJvluyCGYafnxRifLwMPTgJoAmhnL8PqVz6Re6VBLTGL%2BwafnOZ%2FGn1ZGlsMR0eY4tBS%2FKFduGLjk4hsHuq8F%2BcB0lLq5kibw97Mi7W7R45uPxRhhV2l%2FELCOWjCkYjIHX6Vuzx43BgyoRRVHamMktzPPbQGv5hQBfUjdKH6LQY7B2DlrnrDngimzip0VSKHrsKA67qhASzVAoc0E%2Fw4dXwIlqf%2F%2BW7HtO0rT%2FgCbisn2SPzMpJqfx8BAJk0kuowLVPGdYEEAHEE2OqQFi5ERTcEw7lX9MDOWfpTzZgqjLU%2BtHX8ED50udP0kl6DuSU9Il%2Boribot8e41oy30lzl0RCi%2BC9VDYMK93EgfvYCq%2F0u2YmB9EUJeTWyP7R3p15FOdNmtBiNkzOKp47wlsraSHJLM1hut0DP7W131uf%2FeWFG3UkoX%2FP4ICym2gkFQ1cFH%2FvgbcYlsKCqCgNzOszpTtgM%2F4x7vJr7wQLy%2BvVX4aF2wkhyI19BVOjXoOgoeO%2FB2D2%2F4Gc0c0Jp1kBWpSrCRmu3eZV5Yk31bMNv90skGOqUB5E42T6yg2Jbro6fQtXLMk%2FIyoFbkFDg1ELbZ9izUWwt0XaoPhegTxlt1Bo1%2BAoChiqfOz3ZhgExB22ZPHHWoSVBWDOewOKbUGAHnPDGxQkK7aGqx2%2FHyTe8eEWfnyxReIZSgu3oPKTTcVL1LIDnL0COys0KCiAh%2FLEBScdwGw8o6Xpz3uWk1%2BGAhe2Hm2SQ7K8X8FHxqWJEV5lCRDHWNRrnmnSP%2F&X-Amz-Signature=94e4eb6bdae229b3464fb3c54229479817195e3b6b3f27ea57e5bad5064f37f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
