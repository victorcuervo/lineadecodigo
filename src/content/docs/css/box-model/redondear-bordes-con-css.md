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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HAKPNN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4URq%2Fks%2F5TP26g7ZyQRGcKPigUe1wzlv5VPy2WCb5NwIgejkrgm13KkULpJG5UK7dfbI%2FixqSOEvdSmA2SwIP9%2B8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJoVJ2fwPjxj3v0OCrcA83%2BDhiWumhnUoE6y%2FOlATHRki79wCfz8h5WCyu9Vq9mDpDz%2FVxb4Be9YdkzvEx5IMWPBAjUMrl5%2FF%2BbwhAhposgYWlTLu8MSRITfCa85uuSZVSAN0ap%2Fx9Udz2Fp9Jmqp74cLktNjUofc0yqka4ca2HxtsYcv7rwPxe1NeVUJUmWb6KCkJmtf%2B3obLRLna%2FgnI%2FyaWN2EeQ3sB%2BzpvS3gX7qdjC2lulypUqPS51mk0iNFGXgEasNBnkJV%2BlRHqAe1BNNx83xmEFxrxh%2BRyby4ptXDPg9hK2oZp9z240znplAaJemOKW2bHgp6OQCUOAoJNZwa8zheDzQSbatPvqtrDyfzASi5vxMeu4bMNnErZ9eZbFeyiQxaFP0ly54pFdx3mim4JEEn1nxgz%2Bbn10c8f6%2FAqhjZaUTTTIhl5eKyygk9uHVQsyaKFuGLx%2BvwgnofktkwMCw8I4mUG0BmDNjHWSkoAMAJWShMAw%2FeP8RfTBIxwou9YOTuWzb61bgH%2FsQqsW9S9c3CNn4I30RmfFG9T%2BwcIwDh1KWKujn6aNEKspQArzoh8v5IC2fEcbYq6N9tzIY8CMzpOksnfgfrOIuUREzNOyq6DRuCW76PjCpyfePyyu%2FuTdeOk1XrZIMPyei8oGOqUBPYPp8l6IeY5Yt9qJupUN3MmoQbCZuCXbMS1cYQYt5OqdpZiWXz%2BWQX3%2FV0I5wzYXX8R5LorUtPVc%2FEwtP1%2FRHk1uIDYrUy%2BiY7tfBHtOHuWS1LW2kPaHYOAqn9dvmNfXQQMyBrYALaNzXL0OgVRJwm8zpHZBXk7jXyngmNZ2iyt4tMDc2QvYhJiLczbENWtwuUNHAR%2BobS2NdcyvPnstgH7UiyqJ&X-Amz-Signature=a0388485f9001c09589729d763015977133beb6cc33f2e17085cb85d9aa0af9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HAKPNN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4URq%2Fks%2F5TP26g7ZyQRGcKPigUe1wzlv5VPy2WCb5NwIgejkrgm13KkULpJG5UK7dfbI%2FixqSOEvdSmA2SwIP9%2B8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJoVJ2fwPjxj3v0OCrcA83%2BDhiWumhnUoE6y%2FOlATHRki79wCfz8h5WCyu9Vq9mDpDz%2FVxb4Be9YdkzvEx5IMWPBAjUMrl5%2FF%2BbwhAhposgYWlTLu8MSRITfCa85uuSZVSAN0ap%2Fx9Udz2Fp9Jmqp74cLktNjUofc0yqka4ca2HxtsYcv7rwPxe1NeVUJUmWb6KCkJmtf%2B3obLRLna%2FgnI%2FyaWN2EeQ3sB%2BzpvS3gX7qdjC2lulypUqPS51mk0iNFGXgEasNBnkJV%2BlRHqAe1BNNx83xmEFxrxh%2BRyby4ptXDPg9hK2oZp9z240znplAaJemOKW2bHgp6OQCUOAoJNZwa8zheDzQSbatPvqtrDyfzASi5vxMeu4bMNnErZ9eZbFeyiQxaFP0ly54pFdx3mim4JEEn1nxgz%2Bbn10c8f6%2FAqhjZaUTTTIhl5eKyygk9uHVQsyaKFuGLx%2BvwgnofktkwMCw8I4mUG0BmDNjHWSkoAMAJWShMAw%2FeP8RfTBIxwou9YOTuWzb61bgH%2FsQqsW9S9c3CNn4I30RmfFG9T%2BwcIwDh1KWKujn6aNEKspQArzoh8v5IC2fEcbYq6N9tzIY8CMzpOksnfgfrOIuUREzNOyq6DRuCW76PjCpyfePyyu%2FuTdeOk1XrZIMPyei8oGOqUBPYPp8l6IeY5Yt9qJupUN3MmoQbCZuCXbMS1cYQYt5OqdpZiWXz%2BWQX3%2FV0I5wzYXX8R5LorUtPVc%2FEwtP1%2FRHk1uIDYrUy%2BiY7tfBHtOHuWS1LW2kPaHYOAqn9dvmNfXQQMyBrYALaNzXL0OgVRJwm8zpHZBXk7jXyngmNZ2iyt4tMDc2QvYhJiLczbENWtwuUNHAR%2BobS2NdcyvPnstgH7UiyqJ&X-Amz-Signature=61d6e475964cbd60dc504c987a96cd0dd513d17634e60a8eacb3436d6370aff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
