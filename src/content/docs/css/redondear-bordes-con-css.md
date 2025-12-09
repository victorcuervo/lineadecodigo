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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWE3XBV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9Yuol7Wgz4Gwfdb5gcuurWXOAYFZV%2BR9XQ1P4O%2FV3gIgURXvjOSDcLuEdu18op5luALY40Kq%2FPw%2BsbAmrIdJM3UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqxuR1aa7rd3rCy3SrcA7n925IkgMXSFy0c8eQFu6eIsHQ%2F4dPif5%2FPTb5sU84LFN8kXrazE%2F0cNLSx7xBJbRh3TkhpNPZhIrzabT1ZFH0nuHRFlMNluQbuMrlCCZcLaiCFdxGrkW7UVShuOcRD0kCDgwV0xqy7hzoeFvV74bsHGXTbZElsPlcyMJ9pkd3GilcC2lb2Ol9K4xuG6HBd48W4%2FFeCkbV52i93xR6Lno6GkFj63nQOFxQsHlFn%2FHtQxpSlFFOu4jxCG%2Fl5SBgUOve6fxSzSVSO7RdUdV7EgU5qRkX1%2Fpab9uH%2B%2B%2BoTlM9Gm5zeYCXdstt49oIYIr4NBZGtYuOl6QpTLJsXXMcPH2s5q8R9EaN2Tgp9vwu%2BR7yDIeI2vyXhXi8nH94IaNuFWvUSlJZCOW9O%2FOir97ASoejEzIeyAvlVt4FCiSqpvQAtKw%2FDa3Ns6ofp4OUkk05Pr8mEh92GUDJTsBkIHv6Kl%2FU3AqFtQD8YPENy%2FqmMoMiUoRh%2BrZgEeWEh2uCuF70%2F5Tytvo293NTs8ckOTHwO1Omrk21%2FyKWh3RxOcIFm5JiQ%2BAt7YNEdKx2wr6wHnBWpsj5WiyEbU16Wdhz7va6zlOqE0zjAbKnrplUQSi9%2B6pzjy0vzVVPjuuaXL3MpMPyt3skGOqUBVJ6WUem%2FXdYcIJYXTGefjheGui2ADZZLbviHva0rNxMEpJGbNluCd2yqgKzeFRncWRI9v8P9ERu5xZkQIvpEa6EmF2PTD3%2Bd%2BKUw4HwAX9ZpRuWrwhjZZT%2Bdkf94SphVpOFkwz4seIPexSqTn22DexDY8cXGKVzyKc5MQvZdpiSi9g%2FNXC60siNNnKjo%2BQw1zP6gG9f4NAubNXpQ1BAWrdqbZpoc&X-Amz-Signature=1e33d511ee1a115f81b311eef1e7ccf01f8853102ada72ac47213c66cb8e933b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWE3XBV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9Yuol7Wgz4Gwfdb5gcuurWXOAYFZV%2BR9XQ1P4O%2FV3gIgURXvjOSDcLuEdu18op5luALY40Kq%2FPw%2BsbAmrIdJM3UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqxuR1aa7rd3rCy3SrcA7n925IkgMXSFy0c8eQFu6eIsHQ%2F4dPif5%2FPTb5sU84LFN8kXrazE%2F0cNLSx7xBJbRh3TkhpNPZhIrzabT1ZFH0nuHRFlMNluQbuMrlCCZcLaiCFdxGrkW7UVShuOcRD0kCDgwV0xqy7hzoeFvV74bsHGXTbZElsPlcyMJ9pkd3GilcC2lb2Ol9K4xuG6HBd48W4%2FFeCkbV52i93xR6Lno6GkFj63nQOFxQsHlFn%2FHtQxpSlFFOu4jxCG%2Fl5SBgUOve6fxSzSVSO7RdUdV7EgU5qRkX1%2Fpab9uH%2B%2B%2BoTlM9Gm5zeYCXdstt49oIYIr4NBZGtYuOl6QpTLJsXXMcPH2s5q8R9EaN2Tgp9vwu%2BR7yDIeI2vyXhXi8nH94IaNuFWvUSlJZCOW9O%2FOir97ASoejEzIeyAvlVt4FCiSqpvQAtKw%2FDa3Ns6ofp4OUkk05Pr8mEh92GUDJTsBkIHv6Kl%2FU3AqFtQD8YPENy%2FqmMoMiUoRh%2BrZgEeWEh2uCuF70%2F5Tytvo293NTs8ckOTHwO1Omrk21%2FyKWh3RxOcIFm5JiQ%2BAt7YNEdKx2wr6wHnBWpsj5WiyEbU16Wdhz7va6zlOqE0zjAbKnrplUQSi9%2B6pzjy0vzVVPjuuaXL3MpMPyt3skGOqUBVJ6WUem%2FXdYcIJYXTGefjheGui2ADZZLbviHva0rNxMEpJGbNluCd2yqgKzeFRncWRI9v8P9ERu5xZkQIvpEa6EmF2PTD3%2Bd%2BKUw4HwAX9ZpRuWrwhjZZT%2Bdkf94SphVpOFkwz4seIPexSqTn22DexDY8cXGKVzyKc5MQvZdpiSi9g%2FNXC60siNNnKjo%2BQw1zP6gG9f4NAubNXpQ1BAWrdqbZpoc&X-Amz-Signature=524e91c80c4551ef519b2d0e4307f94c2d003edb2643cd3bdc83e3708c55359f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
