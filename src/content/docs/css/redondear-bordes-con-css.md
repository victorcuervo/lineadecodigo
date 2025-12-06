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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH3K4YZ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYSE65fD3yp0xFF21lFqIHqFQMB6eeXOmAXXwpXRX20AiEAzzA9bIHtjKqUA2gh%2BaGNspaRs7%2F8d7bQngD3hvMJ5jsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJISZG4D9QztraFeuircA9v5loCFozkbJgVnRz8uCBobBSzMmCLL%2BxVte0HjcVNEJsRMMyFUgrJcBnB3kS%2FORIi9P8hvH7nwtVcXpEEkc8zdS2cF8w1r0y0Ont%2BO6hjXQiOoeZ10bL5bKzIQuQFAqQgB3456Wl3OFUzbQN%2BjxhbuDnXKqPo62gRq8dTHFLwhZZAEXWQBs67Gvty467ifN46MWEPwmysolcGecnT6z3k%2Bf4Y3Sm5TCwf816HqhWkEMENXad4ZkgJllyU9TtI3pnAonOatg6h60yw72CMRJT9lO9O8GVBld%2FyPAwclTnW5L%2Fyq0iPa94eBXr7o2TxAn5x4dgX9SOyCOZSzGONYOhNR9NDhiTlVPf4DHD9F7%2BYN3YJCcNeEUC7ZNwHadiFr7sPdior%2FuW9lihcMSVfA5KRyfv8r8b1fVOFllQB90oNpIEnNFzcpt2EUk9ZhB3UUWaLPF2u84lp7lMQBol3HzK3xc8bTRSHFIwdqCbOnywwu86vLFi4%2B7CQmJW6SVVNO03ZI6VV7wK93aoTuZ0kqGqsbVgV10cEZIrXyDsiyL92uRY9wGb7uwamenj43cTEG7dNNLCaYxPOKJy8FtLc8RISHNQ6XfCwhzdbY9J1aoGue7KjzamiCbCLXmDoyMLym0MkGOqUB%2BZEzDlhXsz8u971wNVaHoHHzI8cNbduHheshxJkpbu5SUyOi8P5VXqELUvXUzjeVLIU1SO9mnHzoKGVB8Y3tbSIHlYgsQdSISaV%2FnFnb%2Fe%2BadsnjXAkjTOqaQjQxpqSzr9vPXK7jgVJUbL1Ffj6BrbHzO8mtK16X5moe6IiNN7eGoi0u9b7VvrvHSaChl7BBAYfIIMWXO%2FhAWjR6SIFVxB0JuHRk&X-Amz-Signature=2a4c5d8dac8440b3b39c4b5ee245374c8ed66dec35db0ccdc83046ff3e2dd47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH3K4YZ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYSE65fD3yp0xFF21lFqIHqFQMB6eeXOmAXXwpXRX20AiEAzzA9bIHtjKqUA2gh%2BaGNspaRs7%2F8d7bQngD3hvMJ5jsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJISZG4D9QztraFeuircA9v5loCFozkbJgVnRz8uCBobBSzMmCLL%2BxVte0HjcVNEJsRMMyFUgrJcBnB3kS%2FORIi9P8hvH7nwtVcXpEEkc8zdS2cF8w1r0y0Ont%2BO6hjXQiOoeZ10bL5bKzIQuQFAqQgB3456Wl3OFUzbQN%2BjxhbuDnXKqPo62gRq8dTHFLwhZZAEXWQBs67Gvty467ifN46MWEPwmysolcGecnT6z3k%2Bf4Y3Sm5TCwf816HqhWkEMENXad4ZkgJllyU9TtI3pnAonOatg6h60yw72CMRJT9lO9O8GVBld%2FyPAwclTnW5L%2Fyq0iPa94eBXr7o2TxAn5x4dgX9SOyCOZSzGONYOhNR9NDhiTlVPf4DHD9F7%2BYN3YJCcNeEUC7ZNwHadiFr7sPdior%2FuW9lihcMSVfA5KRyfv8r8b1fVOFllQB90oNpIEnNFzcpt2EUk9ZhB3UUWaLPF2u84lp7lMQBol3HzK3xc8bTRSHFIwdqCbOnywwu86vLFi4%2B7CQmJW6SVVNO03ZI6VV7wK93aoTuZ0kqGqsbVgV10cEZIrXyDsiyL92uRY9wGb7uwamenj43cTEG7dNNLCaYxPOKJy8FtLc8RISHNQ6XfCwhzdbY9J1aoGue7KjzamiCbCLXmDoyMLym0MkGOqUB%2BZEzDlhXsz8u971wNVaHoHHzI8cNbduHheshxJkpbu5SUyOi8P5VXqELUvXUzjeVLIU1SO9mnHzoKGVB8Y3tbSIHlYgsQdSISaV%2FnFnb%2Fe%2BadsnjXAkjTOqaQjQxpqSzr9vPXK7jgVJUbL1Ffj6BrbHzO8mtK16X5moe6IiNN7eGoi0u9b7VvrvHSaChl7BBAYfIIMWXO%2FhAWjR6SIFVxB0JuHRk&X-Amz-Signature=ce6d22b72dbc7b09720a1d19aa1a27486d045025dd8283848c45f7a8a025e1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
