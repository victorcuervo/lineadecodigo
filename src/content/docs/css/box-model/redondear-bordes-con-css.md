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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4MHECM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1qsGDbgYSKL2QaRUt2iGz6%2FBlxqqmTH%2BDQ0goGVEkzAiEApfSG3OklhRW83vwa%2FToLU44CVZQ1UKYtItWWeo%2FQXsAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQ%2B7vbrPMrULD9F7yrcAxOR9ng5ezbcYzrR0I7C53WdkWumObMpbSxK9tZ8jgcVwhb5vkaPtRt9EOBIT4Q%2BVBl7Ww5QslyRBnIsZGkluoZDPtIAGIt9V%2B%2FToyXq%2F1TVqGhZoISCWsNBY%2FlaR4yMVNqG8878bsGeIss7ZxNgCbkqM%2BJquNzLlmvdq6ti39f7N13ZrXz2%2FiZvjpUHZQv07dBh530DVKMq31Y1F8w47j%2FasrnHadbJTd9bQlP4xiWt%2BHFmFbaAIYspATZA8E6PJOqi5%2FT6C2ShPvRwYuk9C8KqZJ3Bcrpl6V6cQ%2FrDtWFEFUwLQUZHiceDCU%2Fef%2FYP9C5GzML%2Fw7lNUroydCpK1X%2FOS1vXTpJh%2FG839PdFLFNBc8XNBZ5rKALK9yX7WO9Butf%2B8FxBAakAqqSosjGgfQFQF6Tfp7a8dR23JbJbR%2F36APJ%2F33XgR4oKwX%2Bxqr4SkbfznWnKJs9h%2BQAQPibSs%2FD%2FxRmrFzoJkYLzDqQIU7v5xsZhY1rtoDtVHEPutEJqSpfLW6lCw%2B4swbjirU5rDjvPFgJ2fsVhBFJ%2FFeexCciadAoG3l4yuJiCqDo63kG1O7biBRkKN0WSpYiAiST7Q8h6h84kgeJaOuHrx6ZB05zXTxRDqLT%2BmEKzjwLGMN%2BLjMoGOqUBTL9EWl8p5SFIwmawWPXbj%2Fduq3pdWTN0acq0tkBqhiyYydttw%2FJAU%2FucFkvPSbI8wDdVTa2GQw%2FldoLTSKcpdOTTmoCs5wSIs0qayUw5XAmrXyXTs%2B4uWuNJxcMVlnDeoFRd3JVVJlxiERLsoCWuLTybJ9W0CQ59Jc0glS3b5b0IZ4%2FcqW9b4wM1KSdgGhriUNJVOpbs%2FyoYOaVz%2FuLEiyoblXXI&X-Amz-Signature=603e60b1435138202bd82c827b81a0f43e535c94abf3c6c000dd2ce3ec2746b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4MHECM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1qsGDbgYSKL2QaRUt2iGz6%2FBlxqqmTH%2BDQ0goGVEkzAiEApfSG3OklhRW83vwa%2FToLU44CVZQ1UKYtItWWeo%2FQXsAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQ%2B7vbrPMrULD9F7yrcAxOR9ng5ezbcYzrR0I7C53WdkWumObMpbSxK9tZ8jgcVwhb5vkaPtRt9EOBIT4Q%2BVBl7Ww5QslyRBnIsZGkluoZDPtIAGIt9V%2B%2FToyXq%2F1TVqGhZoISCWsNBY%2FlaR4yMVNqG8878bsGeIss7ZxNgCbkqM%2BJquNzLlmvdq6ti39f7N13ZrXz2%2FiZvjpUHZQv07dBh530DVKMq31Y1F8w47j%2FasrnHadbJTd9bQlP4xiWt%2BHFmFbaAIYspATZA8E6PJOqi5%2FT6C2ShPvRwYuk9C8KqZJ3Bcrpl6V6cQ%2FrDtWFEFUwLQUZHiceDCU%2Fef%2FYP9C5GzML%2Fw7lNUroydCpK1X%2FOS1vXTpJh%2FG839PdFLFNBc8XNBZ5rKALK9yX7WO9Butf%2B8FxBAakAqqSosjGgfQFQF6Tfp7a8dR23JbJbR%2F36APJ%2F33XgR4oKwX%2Bxqr4SkbfznWnKJs9h%2BQAQPibSs%2FD%2FxRmrFzoJkYLzDqQIU7v5xsZhY1rtoDtVHEPutEJqSpfLW6lCw%2B4swbjirU5rDjvPFgJ2fsVhBFJ%2FFeexCciadAoG3l4yuJiCqDo63kG1O7biBRkKN0WSpYiAiST7Q8h6h84kgeJaOuHrx6ZB05zXTxRDqLT%2BmEKzjwLGMN%2BLjMoGOqUBTL9EWl8p5SFIwmawWPXbj%2Fduq3pdWTN0acq0tkBqhiyYydttw%2FJAU%2FucFkvPSbI8wDdVTa2GQw%2FldoLTSKcpdOTTmoCs5wSIs0qayUw5XAmrXyXTs%2B4uWuNJxcMVlnDeoFRd3JVVJlxiERLsoCWuLTybJ9W0CQ59Jc0glS3b5b0IZ4%2FcqW9b4wM1KSdgGhriUNJVOpbs%2FyoYOaVz%2FuLEiyoblXXI&X-Amz-Signature=ada168d1fdf339c71e2601d5887af9e95f100ac4d2035f0db5f5371c9fe6244f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
