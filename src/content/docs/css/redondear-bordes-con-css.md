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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27SZ7V6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xNOoMt2atGcDmIstmyAkMYLsYzlBHtIz4zVuCbVu5AiA9NgpYvThjdDEDhbkzRURlvEdJiujj6U%2FbcM51ZYNXJyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIny%2BpVo5pbKORMGCKtwDGa8kR1bDeMXmvyfGHWX1VX%2F%2BtqIWskig%2BLgRa0NkvAmq%2BHYBUeeP8wk%2BllwbVxmuNxOtr6N%2B1jQXXPZWn2rBFni3LR6X3%2FAr%2F84preBNCFEoRD51QIqHAGGTEOPT7YhNyLEafb4T9V6ESSzeso573NLXUYX2RUQSft%2Bs9dOrYUL49WV96rMxmdHWCz0l2E1KwNPC6vkXEu623dh7S0IJOClI5gKbGs5aV0gKCzCEd%2FMzyyQRJ%2BFzpF%2F3do6ZJX0wT6c%2FPsDDe3lsNtHy4I49Cyon4l%2FcSrzK4XhWQdOorFp9fHyLtJR%2BD96ShIiOWpoytWPOw81MqYPe3XAz8xa%2BBzWCmaAtgOUTAoG3HiBeASk5gMmv63Gpmtbv%2BtflUHO9Z4233R3QH1vS1TDj3TTzG%2Bp52qAflOLi9z%2BJSJkDcihJOYJSHc%2Bv%2FQz7gbxnnmHxYALxabWz1SSVUi66o5Q3zbOGb29c0KX39KQhACJmtYnZ3eDz7471XJh%2FiAjcCBZhRw3HBiL6rY5gUJDJminpD3%2F%2B7Z9Vhzi49g93X4fj%2F2kBCUX88ECU2Mss%2BPXlhrOdinryh9KmxcXsvJDCRTVDbMyKzdWIFKE1EM%2BkAm2IuxNVMXDp4hRhws%2FcwwAwx8fXyQY6pgG0TK1S%2FRCrnStQIgdNCQ8hur46txPs79frJVsMZcOW15XZRN6v1qZr0lylYnT7V4BtdfcRV2hiSWmkrTMNcoKmgWpK1Qm6r8TIISD92xbkqY4w3pTiUK6MSibTUz6PbdnhlHVOBzD2pRKr8gaVyaIqRt2mTzEtlfEeYY9%2B9onomWDRjjViBaSKz9l9Ec9lc02ASbyGA06DzHFZsYjVAzjCkFYrWkk6&X-Amz-Signature=0a2ac56eac6d17f5a1d88a49d65258bbabe553eb655d0980a4920b3822767ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27SZ7V6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xNOoMt2atGcDmIstmyAkMYLsYzlBHtIz4zVuCbVu5AiA9NgpYvThjdDEDhbkzRURlvEdJiujj6U%2FbcM51ZYNXJyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIny%2BpVo5pbKORMGCKtwDGa8kR1bDeMXmvyfGHWX1VX%2F%2BtqIWskig%2BLgRa0NkvAmq%2BHYBUeeP8wk%2BllwbVxmuNxOtr6N%2B1jQXXPZWn2rBFni3LR6X3%2FAr%2F84preBNCFEoRD51QIqHAGGTEOPT7YhNyLEafb4T9V6ESSzeso573NLXUYX2RUQSft%2Bs9dOrYUL49WV96rMxmdHWCz0l2E1KwNPC6vkXEu623dh7S0IJOClI5gKbGs5aV0gKCzCEd%2FMzyyQRJ%2BFzpF%2F3do6ZJX0wT6c%2FPsDDe3lsNtHy4I49Cyon4l%2FcSrzK4XhWQdOorFp9fHyLtJR%2BD96ShIiOWpoytWPOw81MqYPe3XAz8xa%2BBzWCmaAtgOUTAoG3HiBeASk5gMmv63Gpmtbv%2BtflUHO9Z4233R3QH1vS1TDj3TTzG%2Bp52qAflOLi9z%2BJSJkDcihJOYJSHc%2Bv%2FQz7gbxnnmHxYALxabWz1SSVUi66o5Q3zbOGb29c0KX39KQhACJmtYnZ3eDz7471XJh%2FiAjcCBZhRw3HBiL6rY5gUJDJminpD3%2F%2B7Z9Vhzi49g93X4fj%2F2kBCUX88ECU2Mss%2BPXlhrOdinryh9KmxcXsvJDCRTVDbMyKzdWIFKE1EM%2BkAm2IuxNVMXDp4hRhws%2FcwwAwx8fXyQY6pgG0TK1S%2FRCrnStQIgdNCQ8hur46txPs79frJVsMZcOW15XZRN6v1qZr0lylYnT7V4BtdfcRV2hiSWmkrTMNcoKmgWpK1Qm6r8TIISD92xbkqY4w3pTiUK6MSibTUz6PbdnhlHVOBzD2pRKr8gaVyaIqRt2mTzEtlfEeYY9%2B9onomWDRjjViBaSKz9l9Ec9lc02ASbyGA06DzHFZsYjVAzjCkFYrWkk6&X-Amz-Signature=a2afdfcb3528d9dd4af038bf6ace2ef009cccb0e4581bebd54f9f3dc89a56f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
