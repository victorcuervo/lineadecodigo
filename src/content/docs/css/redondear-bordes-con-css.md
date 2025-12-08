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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPDJMFM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElfjuI%2FbDI00CmBinSfggmpX2y1KzvZYyapvIs%2FI3laAiEA0iw1qcTA%2FnCZv67JSbG%2BcwfJL77jFkr6UaO6HxWJX7wqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFgoQdUV%2F091v2MXyrcA1x6qwDwccEQWjsZ9V4xwqEELRdifOSFPTx32s5oeOfcUwcp68NL83mE9YCsu2GxcDwFuWPRybuY86JyA7gaWSr62HrNltDksq17jPj1BMvqvaKFsAvJAqMA%2FXHH9ky%2F9q%2BqtVSyz2HgrYK4%2FozIiwmXOCF4T6pJUDz0m8Swdj9kcvgIxUinnX4wmPoBLzEbx7jVQw1H2WSc2y9YxyqmwgkA6Q9z1PwIZ9V9veXPXLiTQGNXq2R0XeC717KWamd42fn68a9BY0gJ5rS3lHalDPF5Q1lvdiTFuDaSccw74bJfvt3Y4rVoMK4eDxP1FPz67bPi4Q8MQYzGJGb5%2FHIz55s%2BZVN6f7d3ewqNrdrrkoFfLHyBbaYSvwf8eZ0yclgxVAhxM2vikXRtLZJNcMuWh7odMlrjySLWP12fARTe1LI7eJKSt0xvf45UdllgbGFB0xd61lZYon8Tx%2FCBmjKfnlQUFIl42GeqNTj68SxIvLXF6NXn0NmhyqtBn159NAvHnXbg5arsrZpCAi9tkqM77uuEE6QF8MXOXsO22B3WmPtAZioWN0ihKpNAtd6YLKtBjwh9CrrjZQAEDJi9YqKbAXE0ZwzyKy5%2BAkvXgqNOJ5qaI32274xuXUA%2FIE4%2BMOf%2F3MkGOqUBmkcaPCBjTvj5LNA%2F%2BraOkq4bG13gWeZG89UaCMGB44onb7Iw%2BCql388vuHt%2F7poCjy2vPm8Z7nIvKFOUbCPUtTukGC0JRdoH36eat6ntLhWV9%2B%2BkOuA4%2BRj%2FqiQEuC5OXlevVM3ppPn9fKEKUqNmt5vmU%2BS48cieAlSd3JyVDDod8O38zm5oV5zAv0ZJJNdBNpQTNu%2BoYhhruCcuTwmxOiITjcad&X-Amz-Signature=1d213676c59baefda70ed54d87cc61fe35976c2cd184158de6ffb57f308eb106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPDJMFM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElfjuI%2FbDI00CmBinSfggmpX2y1KzvZYyapvIs%2FI3laAiEA0iw1qcTA%2FnCZv67JSbG%2BcwfJL77jFkr6UaO6HxWJX7wqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFgoQdUV%2F091v2MXyrcA1x6qwDwccEQWjsZ9V4xwqEELRdifOSFPTx32s5oeOfcUwcp68NL83mE9YCsu2GxcDwFuWPRybuY86JyA7gaWSr62HrNltDksq17jPj1BMvqvaKFsAvJAqMA%2FXHH9ky%2F9q%2BqtVSyz2HgrYK4%2FozIiwmXOCF4T6pJUDz0m8Swdj9kcvgIxUinnX4wmPoBLzEbx7jVQw1H2WSc2y9YxyqmwgkA6Q9z1PwIZ9V9veXPXLiTQGNXq2R0XeC717KWamd42fn68a9BY0gJ5rS3lHalDPF5Q1lvdiTFuDaSccw74bJfvt3Y4rVoMK4eDxP1FPz67bPi4Q8MQYzGJGb5%2FHIz55s%2BZVN6f7d3ewqNrdrrkoFfLHyBbaYSvwf8eZ0yclgxVAhxM2vikXRtLZJNcMuWh7odMlrjySLWP12fARTe1LI7eJKSt0xvf45UdllgbGFB0xd61lZYon8Tx%2FCBmjKfnlQUFIl42GeqNTj68SxIvLXF6NXn0NmhyqtBn159NAvHnXbg5arsrZpCAi9tkqM77uuEE6QF8MXOXsO22B3WmPtAZioWN0ihKpNAtd6YLKtBjwh9CrrjZQAEDJi9YqKbAXE0ZwzyKy5%2BAkvXgqNOJ5qaI32274xuXUA%2FIE4%2BMOf%2F3MkGOqUBmkcaPCBjTvj5LNA%2F%2BraOkq4bG13gWeZG89UaCMGB44onb7Iw%2BCql388vuHt%2F7poCjy2vPm8Z7nIvKFOUbCPUtTukGC0JRdoH36eat6ntLhWV9%2B%2BkOuA4%2BRj%2FqiQEuC5OXlevVM3ppPn9fKEKUqNmt5vmU%2BS48cieAlSd3JyVDDod8O38zm5oV5zAv0ZJJNdBNpQTNu%2BoYhhruCcuTwmxOiITjcad&X-Amz-Signature=002e7d0198378a483c7fb0115e1cdd7722aa451cb970c93ce1dd2e20aea98396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
