---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666CLLJ26%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9xZmuKWoilPrggqpEgFTITiYuq4MFyWuoObZnID5mQIhAN5wi0oa7WiSIpx0s0Ng0L6hpDMtcPbeYw6fRhFw4u9rKv8DCHgQABoMNjM3NDIzMTgzODA1IgzBUAk9n132G3rRXCYq3ANcWOJlTItcW0mKAgqp7My7WshaKs9CQZtVpOa6NPBLUDqlENR%2BqIFtMQ%2BF8sHq2nEFtSmg7D29yBZlx2EVPjyKp8PoU%2BUZrDntPfqdckSsmTEz8b5UUfVTSGMHnj668s8%2BurVKpUFp7IhVX%2FZ2seBrgFpMlwiGjfr%2BsqVwmVa03qhKM0KK3nY1MQwbQICyE4C8LjidbSXLGiyZPcbIDngv9oXPj04LHfk4L2NieOgz%2FPM512gBSJiRVOGRdidMjB%2FpvVhSC5A7bedxuDAJ4%2BW3rzoYCShM8Yqq2LSTWHCLrYn6E9ibgukX2eA65iV6fYvs0YJK%2Bl5vyLTYETHKMCwEwc3GJ3IjnHUTjM9nF9NT83qjtZVcOtnRhPUIRm4UyI%2FvtW%2F15fSigjSB7n1f1bQTY08QdoWer6Sz%2F%2Fl0kkWsTKEZeS4O5DzL8whM0upWplynlvOR0DaXV94irMd3gz0QLMafC4EdXHBhE8OOWZG2I9l8xCMzut0W2cJv78nuIREm49Op5mSXTy%2BKcEN0%2BtlPdZ8gUcgZ3HevKkgJMrcpsvpozByvGp9GZg0Vw%2Fc85fzU5oPQ%2BuGGJ%2B1XjTmvPmaMRtNtPxmUhaMtzzeCfqqqXqL5KyromSAnHffpoDC2nYnKBjqkAYqybOrVfobx5egXXm%2B8%2B5j2J8edpiAqYrnE1ujTDPTKZPlawdcDEKgrIhH0Kl4%2FW10tGVmGi9zwuFIzQ9FF44PKzIFkTIpt5A0uEi2j7iIAh895YFCqyV9IBEoYP5dOJLFkD39douhMF2DExXKn3O8u8dAr0nTp5Ttvwk2tLTC8KKzidEqEenwwp8ysLDv8oon4qS0hrvNsa2dXK1oGr91bLh6U&X-Amz-Signature=fcd318e64a5fc6cc53a8f8e557d0e9a243811d9392e59e552ce3cdfe3b8d7c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666CLLJ26%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9xZmuKWoilPrggqpEgFTITiYuq4MFyWuoObZnID5mQIhAN5wi0oa7WiSIpx0s0Ng0L6hpDMtcPbeYw6fRhFw4u9rKv8DCHgQABoMNjM3NDIzMTgzODA1IgzBUAk9n132G3rRXCYq3ANcWOJlTItcW0mKAgqp7My7WshaKs9CQZtVpOa6NPBLUDqlENR%2BqIFtMQ%2BF8sHq2nEFtSmg7D29yBZlx2EVPjyKp8PoU%2BUZrDntPfqdckSsmTEz8b5UUfVTSGMHnj668s8%2BurVKpUFp7IhVX%2FZ2seBrgFpMlwiGjfr%2BsqVwmVa03qhKM0KK3nY1MQwbQICyE4C8LjidbSXLGiyZPcbIDngv9oXPj04LHfk4L2NieOgz%2FPM512gBSJiRVOGRdidMjB%2FpvVhSC5A7bedxuDAJ4%2BW3rzoYCShM8Yqq2LSTWHCLrYn6E9ibgukX2eA65iV6fYvs0YJK%2Bl5vyLTYETHKMCwEwc3GJ3IjnHUTjM9nF9NT83qjtZVcOtnRhPUIRm4UyI%2FvtW%2F15fSigjSB7n1f1bQTY08QdoWer6Sz%2F%2Fl0kkWsTKEZeS4O5DzL8whM0upWplynlvOR0DaXV94irMd3gz0QLMafC4EdXHBhE8OOWZG2I9l8xCMzut0W2cJv78nuIREm49Op5mSXTy%2BKcEN0%2BtlPdZ8gUcgZ3HevKkgJMrcpsvpozByvGp9GZg0Vw%2Fc85fzU5oPQ%2BuGGJ%2B1XjTmvPmaMRtNtPxmUhaMtzzeCfqqqXqL5KyromSAnHffpoDC2nYnKBjqkAYqybOrVfobx5egXXm%2B8%2B5j2J8edpiAqYrnE1ujTDPTKZPlawdcDEKgrIhH0Kl4%2FW10tGVmGi9zwuFIzQ9FF44PKzIFkTIpt5A0uEi2j7iIAh895YFCqyV9IBEoYP5dOJLFkD39douhMF2DExXKn3O8u8dAr0nTp5Ttvwk2tLTC8KKzidEqEenwwp8ysLDv8oon4qS0hrvNsa2dXK1oGr91bLh6U&X-Amz-Signature=229d1b31b701204aad4c3f02468bb4cc8d08efe67b39ae678465cf48391255e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
