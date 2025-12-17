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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV5EFZG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHAxjgXKifHyz%2B7A1FS89X8XywpUV%2FxM7WzqO48Yp4fAiEA7o0esnA9X0SFH4Jwj47AFIY%2Bvb7Sku52uBvgHUZafOcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCk6C5wrTsCXeU9ISCrcA1wdiU6bLqTaK8V1jukKjFDMjMlJe%2BAksJm2A1VfYU%2Bxb4TSqMQrHSQ3zH2b7WBy8evG5qJ3zMP1oxVT34aJpTdTfvfZSVEInBmm%2Bs5Kr5qP2f0Wk50MmZjyqTzRZ5Hnt%2FwhqC8976sWv%2FQlLYtCEfBqp6vC39uEfb2atYt7RgfrH57VVar3rrVHKbHfzs%2BJYUb%2FsZOcwAe0s0eybg%2BVEJ5EejaCkYWjD6OKuQp7Rl3svMpWwbtx3vUFedUFvyPvm7E1lG8EvQo%2BLQqdH0qmo%2Bys%2B%2BXQLlhmmZjPrVBzJfcwUmq6X073Grs4xLJqQGyT4QN2aGFIyIdY8qeGLbHP0R1EZzesNSkqqlvUk3pE7smeZLmcDdv8oKQZ45Jtt492AM2TfetNpa78A3MosZotq%2BtOIC6aI86GxPTRqNPCnAtJGVp9PmHSp76ag7fZI%2Bl4qZ2X3kEo%2BhjSY0AiBpUzUAMjy0y%2FSKRo7OakbhpS2VnXioZTBe3tOM0jWYX4PJOxKZ58q3vdWeeuYgNv7Zlg1fRm%2FIvc8OmdsKtZedL8W6LyuITIlabZBV4NpdoP%2Basa0xkRThv7dq%2BWKzedpTGvGOHt4UISguuZaDH2GSf2TtNDbOI7DTdUBmR4ZB0GMIirisoGOqUBu58axMWqzMYnHLVZaGqc50CELGB6IAew6cer9jVynOcLiGg9JCzmLwHtt2ABzNZWwYrFgzfhg7y3TGoCzve8U6bQpnvoOZZs2YiOFuTZXzF85CMv30yARHfcbwHEAFVSQRBiyYfR8MABs10ycRWM1ob0PWqipQNN0aibLa8OEGg1vHEp05%2Fg%2BORAcGga9XP2pCfivRuRpu5ZoHPAFBgQsx%2Bwf6V1&X-Amz-Signature=84a31f0cf951f639a948617100ed3689a70cb0914beadb4604c3c8d26180e4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV5EFZG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHAxjgXKifHyz%2B7A1FS89X8XywpUV%2FxM7WzqO48Yp4fAiEA7o0esnA9X0SFH4Jwj47AFIY%2Bvb7Sku52uBvgHUZafOcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCk6C5wrTsCXeU9ISCrcA1wdiU6bLqTaK8V1jukKjFDMjMlJe%2BAksJm2A1VfYU%2Bxb4TSqMQrHSQ3zH2b7WBy8evG5qJ3zMP1oxVT34aJpTdTfvfZSVEInBmm%2Bs5Kr5qP2f0Wk50MmZjyqTzRZ5Hnt%2FwhqC8976sWv%2FQlLYtCEfBqp6vC39uEfb2atYt7RgfrH57VVar3rrVHKbHfzs%2BJYUb%2FsZOcwAe0s0eybg%2BVEJ5EejaCkYWjD6OKuQp7Rl3svMpWwbtx3vUFedUFvyPvm7E1lG8EvQo%2BLQqdH0qmo%2Bys%2B%2BXQLlhmmZjPrVBzJfcwUmq6X073Grs4xLJqQGyT4QN2aGFIyIdY8qeGLbHP0R1EZzesNSkqqlvUk3pE7smeZLmcDdv8oKQZ45Jtt492AM2TfetNpa78A3MosZotq%2BtOIC6aI86GxPTRqNPCnAtJGVp9PmHSp76ag7fZI%2Bl4qZ2X3kEo%2BhjSY0AiBpUzUAMjy0y%2FSKRo7OakbhpS2VnXioZTBe3tOM0jWYX4PJOxKZ58q3vdWeeuYgNv7Zlg1fRm%2FIvc8OmdsKtZedL8W6LyuITIlabZBV4NpdoP%2Basa0xkRThv7dq%2BWKzedpTGvGOHt4UISguuZaDH2GSf2TtNDbOI7DTdUBmR4ZB0GMIirisoGOqUBu58axMWqzMYnHLVZaGqc50CELGB6IAew6cer9jVynOcLiGg9JCzmLwHtt2ABzNZWwYrFgzfhg7y3TGoCzve8U6bQpnvoOZZs2YiOFuTZXzF85CMv30yARHfcbwHEAFVSQRBiyYfR8MABs10ycRWM1ob0PWqipQNN0aibLa8OEGg1vHEp05%2Fg%2BORAcGga9XP2pCfivRuRpu5ZoHPAFBgQsx%2Bwf6V1&X-Amz-Signature=6fdacb228aee71b0baeb721e906de5fd6befb3de8ca35d052dc4e07866647814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
