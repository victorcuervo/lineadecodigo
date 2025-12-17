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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2INP3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhdzkIYRsABxav4cSnsu8QLJNeEkEK5NA10JxqhXGwxAiEA4zYR8T7GTKxol1rvgvMx1rGbJcpqPne59UfTn39orS8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQmiiFq3B%2BtADL0RyrcA1y1vtK3Zf0iu9RaMwaeS8CPuRgIzkZmHCCFIw2Mk%2BSlyT2de9pNiI6vdzL%2Fqp9Khb27U8j4E6LQ5vsS9L3XU475232pOguvwsmG7M6abCwcousCCHjrxjoky5zlJgOf6%2FIfja86r8arQKdatMosdxpvKK%2F9jjJZ%2BkPZXj4RGu3ggtBlLXjn%2F4DRZEdJncqhxPwOxHozqmkTlaojrZXkBsKvXVVPsgAsFHbjf1jIk4bpJfH9PVjwiE35E74dvm2B06q4VXgKeSUEFeUqJJZZyenQxIgS2%2BA6sAQsTr9A3mXJJ8axeuZFHiaVcbtn0OP9Cq6AuOcx54paHZHiazZLfKPnQ0lcst9wMnE%2FgV0j3%2BYAMJKQFJeL%2B7fmaGGLf%2BYDEHfgDUo3rTS5CAvbmnhe9sf4KU6EkeAzAGU6%2Bawdxi1VP9FUdV1nHrNX3MCdrSksUPAQaRNr8I6J0vPMWz0rBw5QPUSe5rBbLnXcVzn3IfR8A4Tnk2zycm6ill%2By%2BeOF5aYVepcNPYWdHgwPJ7LVRCxDI5Kp6BjxdK4FCI4YwoZcD5HSKJau0tgw%2BYuSKDMxgIM1J9LiXzCd3%2FJJu32YN2XH5YnvKy7pzdu5L%2FV7Xv95NdXduttTu%2B5VhLZnMNmAi8oGOqUBGDCuIwdEPH06F4WunU6u%2Bd4FjgilTm5ZzIpgBMLawHEjJNoKT2EwpR6X9ONqx8ahaWVuQDtY4Aa4P8t%2F1UfLUkXZXcR12g55P86er%2BYFPb9ZlzoFua80hXvM2gSH7tJkltxxP6HzvtDvssq6F0%2FCxIa1Y8jMnIh3P%2FMKc0ToXGoHOtvxp%2F6M7rqzSFrARiNQDOlkSTyn2bTRm2cwTv0ChuHQ0WAT&X-Amz-Signature=ffbd760832200cdbc757e749a53a141e9be2c93d34e5149743941b88c88acd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2INP3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhdzkIYRsABxav4cSnsu8QLJNeEkEK5NA10JxqhXGwxAiEA4zYR8T7GTKxol1rvgvMx1rGbJcpqPne59UfTn39orS8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQmiiFq3B%2BtADL0RyrcA1y1vtK3Zf0iu9RaMwaeS8CPuRgIzkZmHCCFIw2Mk%2BSlyT2de9pNiI6vdzL%2Fqp9Khb27U8j4E6LQ5vsS9L3XU475232pOguvwsmG7M6abCwcousCCHjrxjoky5zlJgOf6%2FIfja86r8arQKdatMosdxpvKK%2F9jjJZ%2BkPZXj4RGu3ggtBlLXjn%2F4DRZEdJncqhxPwOxHozqmkTlaojrZXkBsKvXVVPsgAsFHbjf1jIk4bpJfH9PVjwiE35E74dvm2B06q4VXgKeSUEFeUqJJZZyenQxIgS2%2BA6sAQsTr9A3mXJJ8axeuZFHiaVcbtn0OP9Cq6AuOcx54paHZHiazZLfKPnQ0lcst9wMnE%2FgV0j3%2BYAMJKQFJeL%2B7fmaGGLf%2BYDEHfgDUo3rTS5CAvbmnhe9sf4KU6EkeAzAGU6%2Bawdxi1VP9FUdV1nHrNX3MCdrSksUPAQaRNr8I6J0vPMWz0rBw5QPUSe5rBbLnXcVzn3IfR8A4Tnk2zycm6ill%2By%2BeOF5aYVepcNPYWdHgwPJ7LVRCxDI5Kp6BjxdK4FCI4YwoZcD5HSKJau0tgw%2BYuSKDMxgIM1J9LiXzCd3%2FJJu32YN2XH5YnvKy7pzdu5L%2FV7Xv95NdXduttTu%2B5VhLZnMNmAi8oGOqUBGDCuIwdEPH06F4WunU6u%2Bd4FjgilTm5ZzIpgBMLawHEjJNoKT2EwpR6X9ONqx8ahaWVuQDtY4Aa4P8t%2F1UfLUkXZXcR12g55P86er%2BYFPb9ZlzoFua80hXvM2gSH7tJkltxxP6HzvtDvssq6F0%2FCxIa1Y8jMnIh3P%2FMKc0ToXGoHOtvxp%2F6M7rqzSFrARiNQDOlkSTyn2bTRm2cwTv0ChuHQ0WAT&X-Amz-Signature=8e4cba88676ba02c5e8c3a808a86aabe48030157bcaabd3de6d811f29e4427b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
