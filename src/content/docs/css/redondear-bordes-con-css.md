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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA5U222M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Vt88wxkI2Yt2UEMc%2BRXDHk4ZUzBG3Y%2FWvS1Gxhn69gIgG8JL5O1l1hsrNHbXTeR9GfdT3EPnXhMx%2FSgV97dFhmAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYVnnUI0XjMXyshfircA0adjwntEK4mYCvCcpCVkNyyrQ3u0g0F%2F%2BQM84T3PSQLwNmHxd9rr4F2HtZYYu6Iv9MwoR%2BD2XZlL1I5G%2FghveSgwWocgaQo3WGuI9kM15rou%2B12yFUhi%2BU9XjtjhzpV4JodioF8Vqg8gWd%2BdXrMusiV%2B%2F5dwV%2FckCRccvr6e6JJ80secNeMyT1Guxhea4m40SJpiE2tUg0iPKX8rh%2BaQni9ktDi1Og0Z4%2FEJ8B1vM1bEXPJAb4JYKANnFGeQjAFfpKyM74Xkr%2BoCExl8u0OXH3EkrO2Gf%2FmVhUDNfLEIC6RgEPVK6%2BgofHHAQNlaJY5tAt6ye6pWPVNtwA%2BGIzfRWt8yBVt7VBR%2Fj%2FqQlhy3sn0UHB1uOQKZbWX2D3EQWyilOghvQ1qHXeA6P8Z6j%2BeCJYfq2wNJ65a7%2FUfnlEvcJpbIDLeZQcT3wbLuXWzDSuoXgltVoxokxmVjXS0P9oBTQHvFW%2BU%2FcxDZoGGm3XY1gxATObn7yXVUPYi5rKJTeXBrRdE6d2RjvZSWm8TVvh4k%2FHmTerC1BQ%2FJl62v16X51YGRvR72%2FJlC8ZaI2UzrrWl6pfFfScs8085m009dd63SDd0Fpqxnxmaoe3dmd8mRaDeyE1HAXQ%2Bx228Je%2BoMKCa1ckGOqUBsJxy4dYv6tWh%2F7MFdyvSV%2F%2BY3L4lRnzp2J7ZCfKMYHSbpznnmzOvv1gQvMhateFIeH5BnlV4sLTUraGkk9fjtnSKH68F9KsGeSQsJnc2N7Sn%2FB8e4d7PMo8qEJqVViRxgadmkII3WZ5Yv16zTOYOJ6BGu60H4rC49nkyPZWOmgieK9Zai666uTm2U0gidFf3wM4EoSpErA59LSpXK7vmflSOjfvr&X-Amz-Signature=b66ac6acb8dec93ed25d1cf7c2c19eb7080c5d57d8789428d76e5eabdb85842f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA5U222M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Vt88wxkI2Yt2UEMc%2BRXDHk4ZUzBG3Y%2FWvS1Gxhn69gIgG8JL5O1l1hsrNHbXTeR9GfdT3EPnXhMx%2FSgV97dFhmAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYVnnUI0XjMXyshfircA0adjwntEK4mYCvCcpCVkNyyrQ3u0g0F%2F%2BQM84T3PSQLwNmHxd9rr4F2HtZYYu6Iv9MwoR%2BD2XZlL1I5G%2FghveSgwWocgaQo3WGuI9kM15rou%2B12yFUhi%2BU9XjtjhzpV4JodioF8Vqg8gWd%2BdXrMusiV%2B%2F5dwV%2FckCRccvr6e6JJ80secNeMyT1Guxhea4m40SJpiE2tUg0iPKX8rh%2BaQni9ktDi1Og0Z4%2FEJ8B1vM1bEXPJAb4JYKANnFGeQjAFfpKyM74Xkr%2BoCExl8u0OXH3EkrO2Gf%2FmVhUDNfLEIC6RgEPVK6%2BgofHHAQNlaJY5tAt6ye6pWPVNtwA%2BGIzfRWt8yBVt7VBR%2Fj%2FqQlhy3sn0UHB1uOQKZbWX2D3EQWyilOghvQ1qHXeA6P8Z6j%2BeCJYfq2wNJ65a7%2FUfnlEvcJpbIDLeZQcT3wbLuXWzDSuoXgltVoxokxmVjXS0P9oBTQHvFW%2BU%2FcxDZoGGm3XY1gxATObn7yXVUPYi5rKJTeXBrRdE6d2RjvZSWm8TVvh4k%2FHmTerC1BQ%2FJl62v16X51YGRvR72%2FJlC8ZaI2UzrrWl6pfFfScs8085m009dd63SDd0Fpqxnxmaoe3dmd8mRaDeyE1HAXQ%2Bx228Je%2BoMKCa1ckGOqUBsJxy4dYv6tWh%2F7MFdyvSV%2F%2BY3L4lRnzp2J7ZCfKMYHSbpznnmzOvv1gQvMhateFIeH5BnlV4sLTUraGkk9fjtnSKH68F9KsGeSQsJnc2N7Sn%2FB8e4d7PMo8qEJqVViRxgadmkII3WZ5Yv16zTOYOJ6BGu60H4rC49nkyPZWOmgieK9Zai666uTm2U0gidFf3wM4EoSpErA59LSpXK7vmflSOjfvr&X-Amz-Signature=25110cdda3a7a187150fa4f1220b3406571cd388c132cd50675d2a234deeb1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
