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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFFL2EC7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BCqDqZwwu%2FhnLvXaQtnItHlPuHTltiSB4dYPxPgt4bQIgALFU16o%2BPC7t6qWZCeWX7sv6c8dJT%2B%2FXUZwWSFXPtnwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwjPYvuIHq3ydTYOyrcA7fZg3TMczHW042NWPcPtMuQbpPW%2FMQ38HL7g%2BDSQiUY22NnI0owKMrZLBlcG%2BYuBlHTeV3LK2imF6RnRGtrcHhDUxvvdl%2Beod43VVxpoaey5bIG6ijtdqrdN3rKkS3Dq%2FkpxAh9uKqO7k%2BLhERRXMA20NS910s6ghjF1%2FnE7b%2FnhWZOrt4DY9wotyVwdcl%2FSMytvN6XMTpUmu65ENanEZIbTWG3hKo5ef4FpOgi3Mjk9z1E167qgsKZmesMvd3%2FG3E483bTTqdmrVYKuVjn%2FopHkpnOhY4enscCDDuSXWOLMOatSjejOQJhF%2F1aIuUtYbp%2BbXHnCAi1gGB69INAxKH2vnyTlzFscv8pzNehL0Ah9TWdhQA1ANOIzuw8NC11GgNll1YdHSYftyQsqZYDCpnmF96mDF7noBUgM9e%2FTDWGjy7k8VaoauSUkXCVteKTwCP2f5Zq%2BfC6Lws5w%2Bvia6YKNOvGX0dTUHmzKEC%2BNKgh6KXrfCSc5VixgPAIp2zrVDfsi1%2B2wnrTdu5UGIPz5jR8fBgX1fHWG0BOmpYWzYDQ2p1SuinGhADthkW0t%2B6uAEckb5HEwaRUGiQK%2Bz2kHOkYDA6zFFgsSPoewGFPh5ux0hDh9ke2q9mrU8fkMO3G18kGOqUB5x4rVqNc9geNhSwBsAbkXJWMJZQgkzaPTiZgrey1KRULGw6yUdfELMsklWsc1GbEb1zJDfXAgB9mOhIVjCc3rT1qW8yvJmsJ0yqBWQboHUQHfBvFxi0yQ0oWN4a2TZnnhFDNGHEes2PVsMkUBBM28qppQwzXC5nKK9mZliDwvKCv%2FyYLOFZGgRj1OQ%2FPL3c01U5pxpHeo%2FlmNmZBdgywx7m19IR7&X-Amz-Signature=30453c12050838c0777dce81443592204e8aaf4c2b7973adae22c14c6aaa8d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFFL2EC7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BCqDqZwwu%2FhnLvXaQtnItHlPuHTltiSB4dYPxPgt4bQIgALFU16o%2BPC7t6qWZCeWX7sv6c8dJT%2B%2FXUZwWSFXPtnwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwjPYvuIHq3ydTYOyrcA7fZg3TMczHW042NWPcPtMuQbpPW%2FMQ38HL7g%2BDSQiUY22NnI0owKMrZLBlcG%2BYuBlHTeV3LK2imF6RnRGtrcHhDUxvvdl%2Beod43VVxpoaey5bIG6ijtdqrdN3rKkS3Dq%2FkpxAh9uKqO7k%2BLhERRXMA20NS910s6ghjF1%2FnE7b%2FnhWZOrt4DY9wotyVwdcl%2FSMytvN6XMTpUmu65ENanEZIbTWG3hKo5ef4FpOgi3Mjk9z1E167qgsKZmesMvd3%2FG3E483bTTqdmrVYKuVjn%2FopHkpnOhY4enscCDDuSXWOLMOatSjejOQJhF%2F1aIuUtYbp%2BbXHnCAi1gGB69INAxKH2vnyTlzFscv8pzNehL0Ah9TWdhQA1ANOIzuw8NC11GgNll1YdHSYftyQsqZYDCpnmF96mDF7noBUgM9e%2FTDWGjy7k8VaoauSUkXCVteKTwCP2f5Zq%2BfC6Lws5w%2Bvia6YKNOvGX0dTUHmzKEC%2BNKgh6KXrfCSc5VixgPAIp2zrVDfsi1%2B2wnrTdu5UGIPz5jR8fBgX1fHWG0BOmpYWzYDQ2p1SuinGhADthkW0t%2B6uAEckb5HEwaRUGiQK%2Bz2kHOkYDA6zFFgsSPoewGFPh5ux0hDh9ke2q9mrU8fkMO3G18kGOqUB5x4rVqNc9geNhSwBsAbkXJWMJZQgkzaPTiZgrey1KRULGw6yUdfELMsklWsc1GbEb1zJDfXAgB9mOhIVjCc3rT1qW8yvJmsJ0yqBWQboHUQHfBvFxi0yQ0oWN4a2TZnnhFDNGHEes2PVsMkUBBM28qppQwzXC5nKK9mZliDwvKCv%2FyYLOFZGgRj1OQ%2FPL3c01U5pxpHeo%2FlmNmZBdgywx7m19IR7&X-Amz-Signature=0e69f7396c9b3e98484e71005b92fa93b7245d89b5ac885894088bde132a8dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
