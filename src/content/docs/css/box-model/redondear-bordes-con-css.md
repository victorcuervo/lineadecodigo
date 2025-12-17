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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV2NSDRH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyWypF0RZVzAsV73C9dVW%2Bh78gx53Q28NCRY1rL2PpZAIhALDQA7plSI6BQhRRj3J%2FWPk1ju8lwS2cI5ecDM6KGYlWKv8DCHcQABoMNjM3NDIzMTgzODA1IgyDjmN0u4mexcLlC3Iq3AMeZxwZhz1OfdtT2NSS1ddf5V2dzsH1BNI67lsXtUjvHdfgwiIkO4hu4ZqmqhD8IUbywiEVj2svDIDAcp%2BtiSGapKY3HeLi2IUH0LVid2%2FiD7CzsWt%2BQw5NwhcQt24QXn%2BDG3Jcog0Nofwjvq6Hay8x%2FmzfsZG7hFGpSO3vu1EwumGr1MZ5pLB3uSPglpLmK2rklbKcBTmRKRd6jwM0DRXeHupGhmTrrFmss6bA1FRBMgS0jAOJe6HbS14%2F%2FE9GmaENtFTqouaXd3fJasGKjgz1BgYn7ovYZ0GG9v1ih5ik6AF45051pCU%2BeMPaXmtLDcyG6y4Zkx6ul0gxfyBonjnIbKcS2xjAa3KpqnamoNuI5Ag%2FbEJT8eE0X%2B0ya%2Fsef3viMgHq8jZshuNrRnLFhF2RePNYfNZSmK886aGpV6VGukxNDhBx6miFNHhP%2Bp0dnEwBf8NHKz2Ok7hE9Bq9QAoSEzEvR9eLULZmoW1GOF68FFKzntbBHWwEn3EY4hHIh1H0K2amj62AbYIcOlhZBqheNc%2FRxr7TxEyoHJ%2Bm%2BuW4VtDroxsyTSKQBv74oLLuCoD%2BDF88Wd5Z%2BNyHCWNdv5F%2BWW79yZDIZ9K70gha9bJfOLN%2FRJb8xJHlz9xY%2BTCsgonKBjqkAQnS%2BLbOr%2FK19pt0UTfyYrMlr9PrWhe5er44hByPFPmruqn1D0inmuMtDN863Cdw8QLa33BHg4L4DhBAXSzfCVMF8I98dbxJzjCGlp5BcsdnXC0Y73od5IJzt2pwqwbkEgVTbwF%2FT18yLbGAc%2FF%2BACDzcTFAJhHt6zpan98OrI2UAu%2BXNqQmbZCv49NPL6dA7g7yOLx%2BUyxSKbF52Z7zmbRboMmF&X-Amz-Signature=20f6338e46b5759d7e315f4b66227f690e5a6262d914f8f9968dbc53797f3950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV2NSDRH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyWypF0RZVzAsV73C9dVW%2Bh78gx53Q28NCRY1rL2PpZAIhALDQA7plSI6BQhRRj3J%2FWPk1ju8lwS2cI5ecDM6KGYlWKv8DCHcQABoMNjM3NDIzMTgzODA1IgyDjmN0u4mexcLlC3Iq3AMeZxwZhz1OfdtT2NSS1ddf5V2dzsH1BNI67lsXtUjvHdfgwiIkO4hu4ZqmqhD8IUbywiEVj2svDIDAcp%2BtiSGapKY3HeLi2IUH0LVid2%2FiD7CzsWt%2BQw5NwhcQt24QXn%2BDG3Jcog0Nofwjvq6Hay8x%2FmzfsZG7hFGpSO3vu1EwumGr1MZ5pLB3uSPglpLmK2rklbKcBTmRKRd6jwM0DRXeHupGhmTrrFmss6bA1FRBMgS0jAOJe6HbS14%2F%2FE9GmaENtFTqouaXd3fJasGKjgz1BgYn7ovYZ0GG9v1ih5ik6AF45051pCU%2BeMPaXmtLDcyG6y4Zkx6ul0gxfyBonjnIbKcS2xjAa3KpqnamoNuI5Ag%2FbEJT8eE0X%2B0ya%2Fsef3viMgHq8jZshuNrRnLFhF2RePNYfNZSmK886aGpV6VGukxNDhBx6miFNHhP%2Bp0dnEwBf8NHKz2Ok7hE9Bq9QAoSEzEvR9eLULZmoW1GOF68FFKzntbBHWwEn3EY4hHIh1H0K2amj62AbYIcOlhZBqheNc%2FRxr7TxEyoHJ%2Bm%2BuW4VtDroxsyTSKQBv74oLLuCoD%2BDF88Wd5Z%2BNyHCWNdv5F%2BWW79yZDIZ9K70gha9bJfOLN%2FRJb8xJHlz9xY%2BTCsgonKBjqkAQnS%2BLbOr%2FK19pt0UTfyYrMlr9PrWhe5er44hByPFPmruqn1D0inmuMtDN863Cdw8QLa33BHg4L4DhBAXSzfCVMF8I98dbxJzjCGlp5BcsdnXC0Y73od5IJzt2pwqwbkEgVTbwF%2FT18yLbGAc%2FF%2BACDzcTFAJhHt6zpan98OrI2UAu%2BXNqQmbZCv49NPL6dA7g7yOLx%2BUyxSKbF52Z7zmbRboMmF&X-Amz-Signature=0c85fcc3ab1303bb29decae8baded7198d08bad7519a9e7d865b76be8f003d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
