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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXKA7CA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SA%2BaqKDj0zuLEFPyQ87lQknl8GvtfPSUsPCl%2BN4EJQIgbGHj5u1g3yXlqoMyK75KzUCSUdhEEQ9wgkyhZ1m%2F8ysqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOJBcKAmhX4aabfyrcAx4FAz432mo%2FZYJwFukxJmmgR5TMGI9lWlCWrtUExNpA10thgQX%2BLdZJ1CYkneW0aaSbpxxcRhy4pp7BLl05uzGPSwO%2F6VhY6wL%2FrcfGz4WNPKJZGqFYPRFuSQuDSYGup4%2B8QpBO9%2FllU9WR7xYlnszLKGk2R2lMHcMPM1AB0W%2Bh7Js4Kt86Yxk6FfIGESkLlTXC6cUR62ByQNEUj8psFRWRM86raLcUlIOCXvC%2BD%2BB34wjQ6zcKF5QQ9x0mGxvDhjLVe%2Bf9CiXUlTB%2B222RnO8SdOzSQjKEa3NyjP6hYJGJxKeTJ5lxhyp08C6VW1rmGOW0Xp552%2BG7dnt6IEZWVN%2Bpsqa9yOurEua0RABwTd%2B93HBr%2FY%2FUdGDIa0SwyUBUJQof%2Fj%2FVj4GPQ5KDUyw4G2Yt4GjPY9fii6LqOehrBW5hoeK6YquIankx9YMcy15rfnhPyJqgspW9OCJDxA5NyxGeSUUoubtrOvgq2cvhs%2BfYlmCahOphxKXsczL3xrHICeQ7Jc0wyH9Omu%2F5YZLsPU4JHtZ81mGU%2F2evpXuZ8b1ohyC7eaXMK7EXTugUfd%2BxvGacBd%2FeQ83VIlHc0NDrT1tKVNO05%2FtTPzgKxKjf4WiBR7t8rQD0WAGnjzG9MNON3skGOqUBUR6nN2lj6DQPdsc7QF72xyvDHaQuSi3Tma%2BMOlKDPaWJU0UQoJRUUs3E8rlR%2F0pWf5YHgkljh7Ul%2F4XN641NdoS6C%2BaN%2FkccTLxbDWkJVRQXhOxl6tWIxoXUNtfN2Fz5Hlf%2Bowgdu7KVkIJR88dwy%2BVCFmqguNbSjeGgoxTfmv2l9t3tkYBXkkc4ILX0avuW32Ikje1nJNIMqSoWY5ctWlysbdUY&X-Amz-Signature=44356763bb45ac46feb98b91589a6ec481bb55d4a67bc95d17442fb6223ef723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXKA7CA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SA%2BaqKDj0zuLEFPyQ87lQknl8GvtfPSUsPCl%2BN4EJQIgbGHj5u1g3yXlqoMyK75KzUCSUdhEEQ9wgkyhZ1m%2F8ysqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOJBcKAmhX4aabfyrcAx4FAz432mo%2FZYJwFukxJmmgR5TMGI9lWlCWrtUExNpA10thgQX%2BLdZJ1CYkneW0aaSbpxxcRhy4pp7BLl05uzGPSwO%2F6VhY6wL%2FrcfGz4WNPKJZGqFYPRFuSQuDSYGup4%2B8QpBO9%2FllU9WR7xYlnszLKGk2R2lMHcMPM1AB0W%2Bh7Js4Kt86Yxk6FfIGESkLlTXC6cUR62ByQNEUj8psFRWRM86raLcUlIOCXvC%2BD%2BB34wjQ6zcKF5QQ9x0mGxvDhjLVe%2Bf9CiXUlTB%2B222RnO8SdOzSQjKEa3NyjP6hYJGJxKeTJ5lxhyp08C6VW1rmGOW0Xp552%2BG7dnt6IEZWVN%2Bpsqa9yOurEua0RABwTd%2B93HBr%2FY%2FUdGDIa0SwyUBUJQof%2Fj%2FVj4GPQ5KDUyw4G2Yt4GjPY9fii6LqOehrBW5hoeK6YquIankx9YMcy15rfnhPyJqgspW9OCJDxA5NyxGeSUUoubtrOvgq2cvhs%2BfYlmCahOphxKXsczL3xrHICeQ7Jc0wyH9Omu%2F5YZLsPU4JHtZ81mGU%2F2evpXuZ8b1ohyC7eaXMK7EXTugUfd%2BxvGacBd%2FeQ83VIlHc0NDrT1tKVNO05%2FtTPzgKxKjf4WiBR7t8rQD0WAGnjzG9MNON3skGOqUBUR6nN2lj6DQPdsc7QF72xyvDHaQuSi3Tma%2BMOlKDPaWJU0UQoJRUUs3E8rlR%2F0pWf5YHgkljh7Ul%2F4XN641NdoS6C%2BaN%2FkccTLxbDWkJVRQXhOxl6tWIxoXUNtfN2Fz5Hlf%2Bowgdu7KVkIJR88dwy%2BVCFmqguNbSjeGgoxTfmv2l9t3tkYBXkkc4ILX0avuW32Ikje1nJNIMqSoWY5ctWlysbdUY&X-Amz-Signature=3b58145f745a34e4ffd07167b63853a0fea6cfea50c34741a1efd89ad145e0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
