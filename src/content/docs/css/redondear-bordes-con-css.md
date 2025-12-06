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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSYAWNU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4irZHIHeZnEmfWIpC1cU1dkUdKH%2BASQdBOkaHvlgRnAiEAmEOdfX0oJVBbaL3x0wDbYqM%2FAD14y4L8iekFgjRklY0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJYMzJDwo9KnkpgspircAwlWEeRIWBVkWBvEvfrV2MCNmg7stOxIGWdLjpzQnUaWlQWM3h4rBQyIt6IXekJU7oPV8PoK4cOFYa05ZKYqoM2cL8IlPu5gc5GmkOPnTX4js9eM%2FJqJnLaVn8RmnqaRfUu%2BVW6L%2B1%2FYChc6g7ek4EzlujAzOmZZkTkof1b7kieZF2iIJ2jqL4tD5n8deytzMSviyi4cSQcGCgXxb%2B7J0j%2F9oW6DsG8pt2sKrdijaimg3SlBfDpb12im5X%2FM1UlDo2AvpHOm2tPn053oE%2FYGzCDEh7DWgbZM%2BQh9kTwLFxffuekqMkGo99s%2FX%2BwWrtKcHE99s8qSargTy46f9H1E%2F9s5Ppg4LSHJZh%2BzxhWjLUEcYhI0q2kJKdP0RIMvGo4Ik7xx9uzf3Qbnzfv30kTJZlTXt7zFdzeJrW5hfFiM6tJv4GiQ71%2FqECiXtWT3ibtlw8S3a%2Bhm8vFKZZ9ytnRT8bwLwtq6%2B%2Fu2UDo2%2Fap%2B0SVsu8MOmqA2YUOUau7%2FHSPksduhKdcwNoJ%2FIvx%2Bg%2FVe8WCuAE0D6hopI44PVjuYmqgK2dQ7%2BgNiRoPeNlJ3rkJMZISh9J7PV829yoYgf0oCjsI4q2%2B6khY4O0S8tUW6BAOShYYGPnwIrx%2FTWAy0MJrezskGOqUBVw2EUUBmeBVODfK4QqxwTHWy153%2BzMFzKvD%2FtlyAJKe3Dmewc%2Fm2wfEw6R1n2URi8okAMEmSlQHlpbOjEFuG12Jqx%2FHdv7e2kvO8FsMdJHJiK3liXMRGYmdPqxQXtx7e5e%2BYmOyQFdplr70PiDbUNsxH78YkG2UjTn4uLGxUGzzWRxhH3Pe2H3BDck63uZkcViLiqPX1BoL%2Bcug5XFXFQ390DAG0&X-Amz-Signature=0f67ad1d6f758563ef998c0df31ddd5e7754b2d06f22179693532b5c57109e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSYAWNU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4irZHIHeZnEmfWIpC1cU1dkUdKH%2BASQdBOkaHvlgRnAiEAmEOdfX0oJVBbaL3x0wDbYqM%2FAD14y4L8iekFgjRklY0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJYMzJDwo9KnkpgspircAwlWEeRIWBVkWBvEvfrV2MCNmg7stOxIGWdLjpzQnUaWlQWM3h4rBQyIt6IXekJU7oPV8PoK4cOFYa05ZKYqoM2cL8IlPu5gc5GmkOPnTX4js9eM%2FJqJnLaVn8RmnqaRfUu%2BVW6L%2B1%2FYChc6g7ek4EzlujAzOmZZkTkof1b7kieZF2iIJ2jqL4tD5n8deytzMSviyi4cSQcGCgXxb%2B7J0j%2F9oW6DsG8pt2sKrdijaimg3SlBfDpb12im5X%2FM1UlDo2AvpHOm2tPn053oE%2FYGzCDEh7DWgbZM%2BQh9kTwLFxffuekqMkGo99s%2FX%2BwWrtKcHE99s8qSargTy46f9H1E%2F9s5Ppg4LSHJZh%2BzxhWjLUEcYhI0q2kJKdP0RIMvGo4Ik7xx9uzf3Qbnzfv30kTJZlTXt7zFdzeJrW5hfFiM6tJv4GiQ71%2FqECiXtWT3ibtlw8S3a%2Bhm8vFKZZ9ytnRT8bwLwtq6%2B%2Fu2UDo2%2Fap%2B0SVsu8MOmqA2YUOUau7%2FHSPksduhKdcwNoJ%2FIvx%2Bg%2FVe8WCuAE0D6hopI44PVjuYmqgK2dQ7%2BgNiRoPeNlJ3rkJMZISh9J7PV829yoYgf0oCjsI4q2%2B6khY4O0S8tUW6BAOShYYGPnwIrx%2FTWAy0MJrezskGOqUBVw2EUUBmeBVODfK4QqxwTHWy153%2BzMFzKvD%2FtlyAJKe3Dmewc%2Fm2wfEw6R1n2URi8okAMEmSlQHlpbOjEFuG12Jqx%2FHdv7e2kvO8FsMdJHJiK3liXMRGYmdPqxQXtx7e5e%2BYmOyQFdplr70PiDbUNsxH78YkG2UjTn4uLGxUGzzWRxhH3Pe2H3BDck63uZkcViLiqPX1BoL%2Bcug5XFXFQ390DAG0&X-Amz-Signature=3d5fcb32803ace6d575e97205181ede6203e4cda0e30657082174c2c7f15aa9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
