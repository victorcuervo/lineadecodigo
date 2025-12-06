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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664QKLDCR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUJDlajjdRjgGfxxtO2J1zKSy%2BH65ZT9wuUGYDFpU%2FFgIhAJ8PZn7PGXc6jHuV1xg5nHBBptsP2PRqieCoNH63fF6QKv8DCHEQABoMNjM3NDIzMTgzODA1Igzd%2BD4v55E4cVzhdyoq3AMx1dngxT02YQpntWKrgu2x9OX3BOE8tGhKf6FySu3ru4S31kZ2X4Gll0qssYDcleqZkrKfRovJSHreLffx7%2BvE2GLIqwhs7dTWuMWcuVo87Re86BXGKQv2AF4cGUBQiLIN7ScJ36o5gxYIG4lFrrMOo%2B2qjPAOMJIVzxrQ%2F5dibP0xQwj3La%2BQwdqB4yXYMLlObmEq6jh%2BBVVOgniN6KaAQZGHwQY%2FDBqpPRTQzazhSrbomTNpgFO0DH%2BEwmZEGnhCfrjMFH2wBmJb1PmPLctOIKDeamAhDIMqv6%2F%2F3N%2F4jz1Avh033kXslju3WCbEEao6vl%2BbE5dcGQEJE7yNgfNjjt33JNrSDeVklxoS6pMk%2BXKHZiPcljHxHoq1Q2SDso3duxk92LbN2heRPtTgwmpYwn7eBuazS07LKUj%2BlouVQgPkIFpkNwPP0Cs%2FgH1XvEiXZl52G%2B30kzwg6hJJ3uyrmdToQ6vznx1FiGOoE%2FYVNSbjk1W3Bk8xH9HkNO4hwRCwprml8nGq1F2sti7xL8jxJMOZLxJ5lXhlHZjrhVz9A0KaIYcs0OW48KTmnMpM3VMQl%2FFY6QuQo85%2BI7NOn9PoCUQxSI9%2FCabJj3xloGV6vMnMs0UJubIEKZBmpDCfvM%2FJBjqkAVsT0%2Ffa%2BLAThLfMJ86eLP55GSEvTai%2FTurOD9l6L6xksl%2FPDPXYRkkw9yoGI4jElx%2BAnXKdplBAyPARbktKQfW4x8xkinUPnZFwDFkd%2Fr09p%2BJslxBZOk1d33di5wvv7jX7aE%2FxOKyliMO4ZxP%2FFulP9OpDbFd3oEtX4%2BahKMVcZzxx5nDRxjzvWOVUcZ3vgN1Lx%2BdmiNOMJw8737Qs0I%2F70RXl&X-Amz-Signature=4ace495df59d6f8aec22dade3fbf3df639ab4771ed85dd9a4ac4e774c7095c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664QKLDCR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUJDlajjdRjgGfxxtO2J1zKSy%2BH65ZT9wuUGYDFpU%2FFgIhAJ8PZn7PGXc6jHuV1xg5nHBBptsP2PRqieCoNH63fF6QKv8DCHEQABoMNjM3NDIzMTgzODA1Igzd%2BD4v55E4cVzhdyoq3AMx1dngxT02YQpntWKrgu2x9OX3BOE8tGhKf6FySu3ru4S31kZ2X4Gll0qssYDcleqZkrKfRovJSHreLffx7%2BvE2GLIqwhs7dTWuMWcuVo87Re86BXGKQv2AF4cGUBQiLIN7ScJ36o5gxYIG4lFrrMOo%2B2qjPAOMJIVzxrQ%2F5dibP0xQwj3La%2BQwdqB4yXYMLlObmEq6jh%2BBVVOgniN6KaAQZGHwQY%2FDBqpPRTQzazhSrbomTNpgFO0DH%2BEwmZEGnhCfrjMFH2wBmJb1PmPLctOIKDeamAhDIMqv6%2F%2F3N%2F4jz1Avh033kXslju3WCbEEao6vl%2BbE5dcGQEJE7yNgfNjjt33JNrSDeVklxoS6pMk%2BXKHZiPcljHxHoq1Q2SDso3duxk92LbN2heRPtTgwmpYwn7eBuazS07LKUj%2BlouVQgPkIFpkNwPP0Cs%2FgH1XvEiXZl52G%2B30kzwg6hJJ3uyrmdToQ6vznx1FiGOoE%2FYVNSbjk1W3Bk8xH9HkNO4hwRCwprml8nGq1F2sti7xL8jxJMOZLxJ5lXhlHZjrhVz9A0KaIYcs0OW48KTmnMpM3VMQl%2FFY6QuQo85%2BI7NOn9PoCUQxSI9%2FCabJj3xloGV6vMnMs0UJubIEKZBmpDCfvM%2FJBjqkAVsT0%2Ffa%2BLAThLfMJ86eLP55GSEvTai%2FTurOD9l6L6xksl%2FPDPXYRkkw9yoGI4jElx%2BAnXKdplBAyPARbktKQfW4x8xkinUPnZFwDFkd%2Fr09p%2BJslxBZOk1d33di5wvv7jX7aE%2FxOKyliMO4ZxP%2FFulP9OpDbFd3oEtX4%2BahKMVcZzxx5nDRxjzvWOVUcZ3vgN1Lx%2BdmiNOMJw8737Qs0I%2F70RXl&X-Amz-Signature=8b89ca7e18a2f190b760222aef5908f906877998a31183f2c5f201d5f2d2a077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
