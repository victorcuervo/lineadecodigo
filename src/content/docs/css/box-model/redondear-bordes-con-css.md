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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQ2HTKM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1EWAHQw4VvtWEdqfkRUmO8mzf3o1U7J6kUqN7FYJqaAiBcwgDLRq%2BrFr2sdkvopRfcAm3anVDb6h49WxZGkOkTkyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4H9Vjv0J%2BQNpABcfKtwDgN8WvhYIYYs0hw%2BTEgH9yVMYDOM2si4Y44Qh0KXf8Qvhn0xUJHfJJSwji7wTqewI49hgmB78I%2Box7mSyOhjy1H78Fuc%2Bsz4DpdqpVzh%2B%2F7HxeZggyaA6W6IF0mfFX809UrMlHtIasqMC5Igqs4TrqyO7QIILY6qmQuCsvdhCXbquMIPVO93YuACdr%2FSg38YL3dkwFCX1fD%2BlZU4eUU5ynTaoJHe5okhl3oLP6jSq9Ed9TsyUEP2m5IJ0Xy3PJ7NweW8574XYeiCXd0HxGRJxRkOdlAdCwWEOzXmS2nH4A0t7klWBWTom4tBooJ%2FJMQaUOBa772zVYZSeeTwdOS7IhFTAWbbYf1TmzWTg5N%2FsTXhiIR2%2B%2B1z6jq2NNqAbJ3RCldsGl4iqjNgu2JjoBMsUwuYmINVJZmGaEwshXdZZUAbHfJAWOjfx3EGgGcFXD07t%2F%2BKVrG9TMY84%2FVTSgLpVzQyNagkQOkxvibtiRRN%2BaFnkHYhHIuK7ePUc771o3aN%2BTF0YtNKJysR6S7pwCKRAw1rEUPPgC4upaNc0h0FTm8uxQzCQ9fdXBBlVtJdaePkZymAzVMcr4VH9fvFm6P%2Fhf8%2Bm5rSai1h0tqq3SVKebmAE7HYPYi5fztVRRt4w%2BJaIygY6pgHn9dYgZk3yP1%2FzZzT5cyt8VAaA4EBWMwI9fxEE9HzQE7bHR95G2uHuPoFyK1ip%2F31yvtigv%2F5%2FU5bHVw3R9kVqoxO7mZqc5xLLhzOLVLJbk1SpQl3g5x5XHl7No9ZfoAKCefVwC97aq%2FZP2jaIlVe93gbnm0vCvIOnQdyv2kodp0muElfKvRxCUdQisNWCRR%2F%2FAm%2BsaF%2BbjF2yIYXX5C5osKLLkf6B&X-Amz-Signature=2724183fd03f5df26895cc444c934de758a20e1a7564bfcfbfd87ac4d8a8e2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQ2HTKM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1EWAHQw4VvtWEdqfkRUmO8mzf3o1U7J6kUqN7FYJqaAiBcwgDLRq%2BrFr2sdkvopRfcAm3anVDb6h49WxZGkOkTkyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4H9Vjv0J%2BQNpABcfKtwDgN8WvhYIYYs0hw%2BTEgH9yVMYDOM2si4Y44Qh0KXf8Qvhn0xUJHfJJSwji7wTqewI49hgmB78I%2Box7mSyOhjy1H78Fuc%2Bsz4DpdqpVzh%2B%2F7HxeZggyaA6W6IF0mfFX809UrMlHtIasqMC5Igqs4TrqyO7QIILY6qmQuCsvdhCXbquMIPVO93YuACdr%2FSg38YL3dkwFCX1fD%2BlZU4eUU5ynTaoJHe5okhl3oLP6jSq9Ed9TsyUEP2m5IJ0Xy3PJ7NweW8574XYeiCXd0HxGRJxRkOdlAdCwWEOzXmS2nH4A0t7klWBWTom4tBooJ%2FJMQaUOBa772zVYZSeeTwdOS7IhFTAWbbYf1TmzWTg5N%2FsTXhiIR2%2B%2B1z6jq2NNqAbJ3RCldsGl4iqjNgu2JjoBMsUwuYmINVJZmGaEwshXdZZUAbHfJAWOjfx3EGgGcFXD07t%2F%2BKVrG9TMY84%2FVTSgLpVzQyNagkQOkxvibtiRRN%2BaFnkHYhHIuK7ePUc771o3aN%2BTF0YtNKJysR6S7pwCKRAw1rEUPPgC4upaNc0h0FTm8uxQzCQ9fdXBBlVtJdaePkZymAzVMcr4VH9fvFm6P%2Fhf8%2Bm5rSai1h0tqq3SVKebmAE7HYPYi5fztVRRt4w%2BJaIygY6pgHn9dYgZk3yP1%2FzZzT5cyt8VAaA4EBWMwI9fxEE9HzQE7bHR95G2uHuPoFyK1ip%2F31yvtigv%2F5%2FU5bHVw3R9kVqoxO7mZqc5xLLhzOLVLJbk1SpQl3g5x5XHl7No9ZfoAKCefVwC97aq%2FZP2jaIlVe93gbnm0vCvIOnQdyv2kodp0muElfKvRxCUdQisNWCRR%2F%2FAm%2BsaF%2BbjF2yIYXX5C5osKLLkf6B&X-Amz-Signature=524836b384b11775c56217ddf8b4659a12d189188eaa2a118f6a1d4c0cdd9a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
