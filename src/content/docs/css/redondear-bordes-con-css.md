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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFQITZN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpuT0uMYivXspDDth5R8EJuOTR%2BhrZuuY8enTZIqEChQIgVO9jQ3urCkdsTNUG7Q9cRPQOyBbCgIWI2DtRTCuJKIsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDq0WTCqVC1Ohp5rJCrcA9TBkB3wpJVIMRi%2BhKyv6GwkqXSeFdJeVe%2BA7TwH8Mt%2BXxKqhTXoY%2BT0hb75RLkaqnHRpDJQ4%2BPEbCYwCxKWwDcCmeHmmBag8eLonXLmZy6p42bA9DmOaoDxgFbGBQ1uHZEosfcJ2YMFY4whxlY9jWzjkR3jdgM8dgzoqgsBpNTJ5dU9BXrtTcLsZCBelufIxYMrmf5q6GxWkbBTHfJUtHp4%2FK2x95acdAdg%2BKRXemm%2BX891RCtl2aGVAdeOb9SeC3bH2VCWG5v8JT1%2BMJ2HDUvBpwzd8riiX0d4v9oOkxxzWi6LlBAqcVSa15iaMm5OdGTWL126G%2FYOoBiXr8N3shvkIsb0OCL2QlUdRO3IbamE8oyLLJ%2F6p2lwfc8AWoJUrbH3C1m5oH9NDjHjjuyIaOqKb%2BTJEAIYFLBeDzhVJOOA8RCrgZZPEaHsuckRUwrKTJeRgVG%2FReJYDyAUzhNJHbR2uZdccVbvM7rpJDXXj6DSAmzQOHErJ55XYImQqDKt2W44VDyPQiEEXgrTfVn9r0k2cqALK8vJ4x%2Fj1CaDRtMYA16KcfwvAJ3sR1dKEEiH8uv9%2Fyaoj7IM2V4BxFn9IJ79LjacLPE64MVfMjjCgbwA2HIW9MeKndzfukwoMO2a1MkGOqUBH8nHcFEfJTvN5FdcXZruGvheuB6mh9cTlke75Z4JByYdBbJxX4oFKVEa93H8pTiFmhjWRpt5Glexee4tCarhb%2FSWgRmzz1wHu3Tdmjn9mXiFO3rm%2FWAL5QTb5v2kIoTisyqJazY%2F6NTiashQaBVeZ8XIJQtxbG6XAU3eSdUpDOTWM6nH7c9%2FvUigvhpGgcawSmpKiAU1Qect7D7Bx2Fqp0b7Lonz&X-Amz-Signature=fa69559805873fe5dbc1b59d6d174267f0ef0e4a647d5171570767fe62d5d6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFQITZN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpuT0uMYivXspDDth5R8EJuOTR%2BhrZuuY8enTZIqEChQIgVO9jQ3urCkdsTNUG7Q9cRPQOyBbCgIWI2DtRTCuJKIsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDq0WTCqVC1Ohp5rJCrcA9TBkB3wpJVIMRi%2BhKyv6GwkqXSeFdJeVe%2BA7TwH8Mt%2BXxKqhTXoY%2BT0hb75RLkaqnHRpDJQ4%2BPEbCYwCxKWwDcCmeHmmBag8eLonXLmZy6p42bA9DmOaoDxgFbGBQ1uHZEosfcJ2YMFY4whxlY9jWzjkR3jdgM8dgzoqgsBpNTJ5dU9BXrtTcLsZCBelufIxYMrmf5q6GxWkbBTHfJUtHp4%2FK2x95acdAdg%2BKRXemm%2BX891RCtl2aGVAdeOb9SeC3bH2VCWG5v8JT1%2BMJ2HDUvBpwzd8riiX0d4v9oOkxxzWi6LlBAqcVSa15iaMm5OdGTWL126G%2FYOoBiXr8N3shvkIsb0OCL2QlUdRO3IbamE8oyLLJ%2F6p2lwfc8AWoJUrbH3C1m5oH9NDjHjjuyIaOqKb%2BTJEAIYFLBeDzhVJOOA8RCrgZZPEaHsuckRUwrKTJeRgVG%2FReJYDyAUzhNJHbR2uZdccVbvM7rpJDXXj6DSAmzQOHErJ55XYImQqDKt2W44VDyPQiEEXgrTfVn9r0k2cqALK8vJ4x%2Fj1CaDRtMYA16KcfwvAJ3sR1dKEEiH8uv9%2Fyaoj7IM2V4BxFn9IJ79LjacLPE64MVfMjjCgbwA2HIW9MeKndzfukwoMO2a1MkGOqUBH8nHcFEfJTvN5FdcXZruGvheuB6mh9cTlke75Z4JByYdBbJxX4oFKVEa93H8pTiFmhjWRpt5Glexee4tCarhb%2FSWgRmzz1wHu3Tdmjn9mXiFO3rm%2FWAL5QTb5v2kIoTisyqJazY%2F6NTiashQaBVeZ8XIJQtxbG6XAU3eSdUpDOTWM6nH7c9%2FvUigvhpGgcawSmpKiAU1Qect7D7Bx2Fqp0b7Lonz&X-Amz-Signature=efb7792c09177c85aeae63ea56a8108e6a086e868c248f87e77c011b06638042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
