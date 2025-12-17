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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLBK6JSL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEusHtv9FVMoG%2FyxuW%2FxqT4HOM4qX7WXE4zxQViMFlQnAiEAgb1%2BOcpjYMqd6Oi0%2BmgUJFubNw4oG2WKTsgrv0bQKgYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJyo5hUN5CmHP9k6XSrcAxjy7gUGKIbpZREpq4Pr7Y6j2Icj1%2FC7%2BtTtbx4UdGvMcxbCXLkl0clJGDDq8Fvt8PfHm%2BIyy%2BBmUW6y61pN3mtfQNKSWB838VITf7fbpu7j2AdDSEqb5fT%2FGavAM7ts%2BN0hwhKmJynzkbFigu2t4uEksoB6Rqz1dcUz0iY%2FZhLzs5I6z97Gn8WOfaCwKU1eFTFxwHoWj2nmCmS2t9xWbw5B7Ltp3tmM1O6A58gUJc4iWtk8S%2FCZfbXZBxsQ12H6hliMPwn3JYNMfuC3cZn%2Fsk4aY5mvBW3o5zpwxY6HySU9E4Xoh2QuV8yROptfbM0kRFqqciONxTwVjA0Dq03c4kP22hhh%2BkkxCGyLaVspPsmyvSF4qn8HwtRHt6YXdhI6fhHgJLSyaaFhmnsc1JYvJKfAishjmWs%2F6HCbaguaaMs4BMbe60FuptXKW4e7GKefgqijlOIXTvaWOSO5LbFwvAPoAQh5uc6ss1TZFfeLUU6awLwTnUEnd4222jnyGuutwR0anlHy%2FOZ2VCJDATXtsu91DHshmd1RoeAmZL4BTMaCo07wvYrXYzARotXONSSrwYLLdGBc5zqlSowb0RJ9LqwDnKMkG6sP4LXA4UnHAhbM%2Fxg99zQM63P%2BEa2XMOSdicoGOqUBI1oxOCpsOkM92pNYBVbwhbplHl52%2BpxjQ31XNVwm%2FIB6rc58vFfU3KbePUMRTiVyG8Am72joJVf7Uc1bN%2Bei8u9Vk2JrnI3Ffm0tRdDZRB3SzZe4wd2YvOANGzYdTGAl0%2FjlETyJBr0IngNW%2F0LR%2F%2BdHUZpx7rYz%2BrWMEbjjScZuTzZiKTFJmODzjpowZeHLvj%2BqmPnMBnJnHI72hwZZZ8qDjfQZ&X-Amz-Signature=b481fb0b9efb37d4e7fc428ab173962c33c047914344a66498f9ff5b8a6b7bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLBK6JSL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEusHtv9FVMoG%2FyxuW%2FxqT4HOM4qX7WXE4zxQViMFlQnAiEAgb1%2BOcpjYMqd6Oi0%2BmgUJFubNw4oG2WKTsgrv0bQKgYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJyo5hUN5CmHP9k6XSrcAxjy7gUGKIbpZREpq4Pr7Y6j2Icj1%2FC7%2BtTtbx4UdGvMcxbCXLkl0clJGDDq8Fvt8PfHm%2BIyy%2BBmUW6y61pN3mtfQNKSWB838VITf7fbpu7j2AdDSEqb5fT%2FGavAM7ts%2BN0hwhKmJynzkbFigu2t4uEksoB6Rqz1dcUz0iY%2FZhLzs5I6z97Gn8WOfaCwKU1eFTFxwHoWj2nmCmS2t9xWbw5B7Ltp3tmM1O6A58gUJc4iWtk8S%2FCZfbXZBxsQ12H6hliMPwn3JYNMfuC3cZn%2Fsk4aY5mvBW3o5zpwxY6HySU9E4Xoh2QuV8yROptfbM0kRFqqciONxTwVjA0Dq03c4kP22hhh%2BkkxCGyLaVspPsmyvSF4qn8HwtRHt6YXdhI6fhHgJLSyaaFhmnsc1JYvJKfAishjmWs%2F6HCbaguaaMs4BMbe60FuptXKW4e7GKefgqijlOIXTvaWOSO5LbFwvAPoAQh5uc6ss1TZFfeLUU6awLwTnUEnd4222jnyGuutwR0anlHy%2FOZ2VCJDATXtsu91DHshmd1RoeAmZL4BTMaCo07wvYrXYzARotXONSSrwYLLdGBc5zqlSowb0RJ9LqwDnKMkG6sP4LXA4UnHAhbM%2Fxg99zQM63P%2BEa2XMOSdicoGOqUBI1oxOCpsOkM92pNYBVbwhbplHl52%2BpxjQ31XNVwm%2FIB6rc58vFfU3KbePUMRTiVyG8Am72joJVf7Uc1bN%2Bei8u9Vk2JrnI3Ffm0tRdDZRB3SzZe4wd2YvOANGzYdTGAl0%2FjlETyJBr0IngNW%2F0LR%2F%2BdHUZpx7rYz%2BrWMEbjjScZuTzZiKTFJmODzjpowZeHLvj%2BqmPnMBnJnHI72hwZZZ8qDjfQZ&X-Amz-Signature=bd1b3ee7469525dba5364b14c024b567a5e2bb3aa8ccef877976326f343c5d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
