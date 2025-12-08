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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHOGVEA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH14%2FyPw3gkHF%2B4PDE5EPj5zcTTbXGMNsQKt0%2BjFBNJAiAGT0U9SBcrkMXPmSiezu9gQIS3O%2FlauU0CfDSqpev0DCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQhePkWH5FYnKPm8iKtwDNiS3wXqTuqs1yLPbarbzo9CETslF4NT5I7187naRAUTRTkO86VnlPplVgpq%2FpWOUPEF3cJlaNx47QcSoT4fqE4VlbTDPjn3EaCAFhRSS0%2BQN4gNqiosI8lQX6ksleL2H%2FM5rewGymSnz8Mgz78AkojF1Qus7LIZh5gpaROU06sLSAQuqtpgZfRSc%2F1MAVQkaEMD3%2FwiNsJ1gaWwWjxsUhSdjyh%2FCVgf8uDh8YCA%2BjcueVQ46cb1xoBkEq1HMcKkKwusbORkWRBk6qbKJvVdaUySvppHMQF7eOUv%2FVVb4QOfpxg1rzwo0cMowLzGgULLHa0mfB9At1TPGIS6g9uzlmVKcpMrCfs2cBKSblIWDmJfjy9QK0rRkUE%2FQ8yMSvZKKKtnIHUG2gJQ1RKCOuX2P1%2B2zYpFVtwSM1R2H1awSFxAC%2BkJIoL3LV%2F8IU3XEw7CfbJ7tzvATIYI6GcXPCND2LGmmQJQ8%2Fz4Dppd2tFuPD6NHgQomX7cEXGect2h8Q4zNCb2Fim%2B7EIFQPkfgJekKisEzUW6jiBHIVq8xgA0qNEkm7x%2BMoh9zp%2FzWWfi1LpVHV6OR%2BHA0F9kpLpiiVlxidjQMs%2FeDJSMO9EZ7kxuHsFf7y2yVuT%2BhF%2B%2BtVXQw8JTZyQY6pgEHvpMQXdt5xWPvKCC7hZI2ZEYQnwIlboKQaROZn5IROmbpOaSa8a2HcJGw7ZX8Tb5KC3LOFQHjTYVHO5aVV3K8JfXUDrOalI3aMQyLiBm9FMlEbxCL6wSSWRZG04mbtlitM3jXrSZ5iHRVtATYibixFqfVmOlOIZhrUIK1fpQgjDti9T1yyiQPfRwJ0XrZBLvFd6uPNhOeCvOOHXqDj9M%2BwuglYa93&X-Amz-Signature=798b3f3a7b2a5d2741758363bc2e6f2b15551b088b0cc2978cf9693c0a556614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHOGVEA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH14%2FyPw3gkHF%2B4PDE5EPj5zcTTbXGMNsQKt0%2BjFBNJAiAGT0U9SBcrkMXPmSiezu9gQIS3O%2FlauU0CfDSqpev0DCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQhePkWH5FYnKPm8iKtwDNiS3wXqTuqs1yLPbarbzo9CETslF4NT5I7187naRAUTRTkO86VnlPplVgpq%2FpWOUPEF3cJlaNx47QcSoT4fqE4VlbTDPjn3EaCAFhRSS0%2BQN4gNqiosI8lQX6ksleL2H%2FM5rewGymSnz8Mgz78AkojF1Qus7LIZh5gpaROU06sLSAQuqtpgZfRSc%2F1MAVQkaEMD3%2FwiNsJ1gaWwWjxsUhSdjyh%2FCVgf8uDh8YCA%2BjcueVQ46cb1xoBkEq1HMcKkKwusbORkWRBk6qbKJvVdaUySvppHMQF7eOUv%2FVVb4QOfpxg1rzwo0cMowLzGgULLHa0mfB9At1TPGIS6g9uzlmVKcpMrCfs2cBKSblIWDmJfjy9QK0rRkUE%2FQ8yMSvZKKKtnIHUG2gJQ1RKCOuX2P1%2B2zYpFVtwSM1R2H1awSFxAC%2BkJIoL3LV%2F8IU3XEw7CfbJ7tzvATIYI6GcXPCND2LGmmQJQ8%2Fz4Dppd2tFuPD6NHgQomX7cEXGect2h8Q4zNCb2Fim%2B7EIFQPkfgJekKisEzUW6jiBHIVq8xgA0qNEkm7x%2BMoh9zp%2FzWWfi1LpVHV6OR%2BHA0F9kpLpiiVlxidjQMs%2FeDJSMO9EZ7kxuHsFf7y2yVuT%2BhF%2B%2BtVXQw8JTZyQY6pgEHvpMQXdt5xWPvKCC7hZI2ZEYQnwIlboKQaROZn5IROmbpOaSa8a2HcJGw7ZX8Tb5KC3LOFQHjTYVHO5aVV3K8JfXUDrOalI3aMQyLiBm9FMlEbxCL6wSSWRZG04mbtlitM3jXrSZ5iHRVtATYibixFqfVmOlOIZhrUIK1fpQgjDti9T1yyiQPfRwJ0XrZBLvFd6uPNhOeCvOOHXqDj9M%2BwuglYa93&X-Amz-Signature=52b1f62947b3a94de54f74e3989d73adc804f364e8e2f41be23954320dc8412d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
