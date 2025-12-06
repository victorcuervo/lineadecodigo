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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACET6B5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpkmwavmk4C8yp7XTCTRkFk0UgFgt4xk%2Bzc5UfG6azGQIgWGIPMRTR5GYmw2kJUWL0tE5rajiE7%2FMDvTnWWZGbtkQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKgZaBA%2FHuvcenhyuyrcAzz8BCi%2BFioo1wlQ8pADVsbJBcwUX0bU6edZcyofWwwD3mL5y0T7x0FaEJYXxK459yLfJRuSLQ%2FicWXjw6LWbKyzJtY6c%2FRkG25jdVNxiLW91gSKK%2BsC1YA40nZmcUWLo1fwcnxFGaZOq98Xig1vZ%2BT7Ckl%2B5PwjA7A1Rt5rBUVxR91ondp19zgeIA08%2BUgLmSkgXvROhiUHmuKUy4uiMD00DUh6VOdX9JkbQrNpaE%2BvoTlxW3MbcSQZUTTn%2FLB1aJD5PMiD2yDi49CHVye5PFZDTa0KofNquagvDKgKaiTPWhlDimS3awaOqMQKveY9wwDrtGY1mkGBkG7xmXkl30KV9wYb4BHJoKPJFhiPISs9wrFGcILi8behNDjOjgKbvUdsmeESAq%2BoawItmsUoq%2FGGTO2zpOH4uu7Yf9R4U8xlQ0QuSRpTwFia9TudHrWs7tMusOUVKdfZEB7yrDCRcTSq4xl5TqidDln%2Fb9ikVkh6dwqUorOjCrhSDPldMFLHjyCP1Mwg5Ntx%2F%2BxokqYL0NkiHB0vzAvJuTvMqKLQY5ASP5S9K8M6nSmQ9lxfkDbTixg%2BjZE2Sp3Jo4OLVLA1Iq3%2F6Hqq%2FRgZ%2FQyX3Zol2Z%2FlxDyjkJT4%2B71ZkC6hMI2n0MkGOqUBl8F8heLkOcvfOWiW0Z1RhDPffGK9A5mgpLr1nDWzm0%2BxIX0vBajKXZuhfzRRw99yS3gCVpmZjKo0rufwTDBzjadb4CxPT3FTk5fF33OVTeDDQGb2%2BBaKIuBD8ERMOMqPzGCmNFzYZTGahlVR%2B11YRtEEiW39yHg%2FrW%2Bf572U60l%2B93eDmDLo9xAk2%2B8S8rH2RoTroNDDA2fGYGseylZ%2Fe6Lf%2Bqf7&X-Amz-Signature=70b066e3824c24ee0fb9c137d8ca4d1b9b763e006d3e8b3458f532a4f073fa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACET6B5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpkmwavmk4C8yp7XTCTRkFk0UgFgt4xk%2Bzc5UfG6azGQIgWGIPMRTR5GYmw2kJUWL0tE5rajiE7%2FMDvTnWWZGbtkQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKgZaBA%2FHuvcenhyuyrcAzz8BCi%2BFioo1wlQ8pADVsbJBcwUX0bU6edZcyofWwwD3mL5y0T7x0FaEJYXxK459yLfJRuSLQ%2FicWXjw6LWbKyzJtY6c%2FRkG25jdVNxiLW91gSKK%2BsC1YA40nZmcUWLo1fwcnxFGaZOq98Xig1vZ%2BT7Ckl%2B5PwjA7A1Rt5rBUVxR91ondp19zgeIA08%2BUgLmSkgXvROhiUHmuKUy4uiMD00DUh6VOdX9JkbQrNpaE%2BvoTlxW3MbcSQZUTTn%2FLB1aJD5PMiD2yDi49CHVye5PFZDTa0KofNquagvDKgKaiTPWhlDimS3awaOqMQKveY9wwDrtGY1mkGBkG7xmXkl30KV9wYb4BHJoKPJFhiPISs9wrFGcILi8behNDjOjgKbvUdsmeESAq%2BoawItmsUoq%2FGGTO2zpOH4uu7Yf9R4U8xlQ0QuSRpTwFia9TudHrWs7tMusOUVKdfZEB7yrDCRcTSq4xl5TqidDln%2Fb9ikVkh6dwqUorOjCrhSDPldMFLHjyCP1Mwg5Ntx%2F%2BxokqYL0NkiHB0vzAvJuTvMqKLQY5ASP5S9K8M6nSmQ9lxfkDbTixg%2BjZE2Sp3Jo4OLVLA1Iq3%2F6Hqq%2FRgZ%2FQyX3Zol2Z%2FlxDyjkJT4%2B71ZkC6hMI2n0MkGOqUBl8F8heLkOcvfOWiW0Z1RhDPffGK9A5mgpLr1nDWzm0%2BxIX0vBajKXZuhfzRRw99yS3gCVpmZjKo0rufwTDBzjadb4CxPT3FTk5fF33OVTeDDQGb2%2BBaKIuBD8ERMOMqPzGCmNFzYZTGahlVR%2B11YRtEEiW39yHg%2FrW%2Bf572U60l%2B93eDmDLo9xAk2%2B8S8rH2RoTroNDDA2fGYGseylZ%2Fe6Lf%2Bqf7&X-Amz-Signature=afe675bb287f6c436f5130b0b147478fcd4e74b570e520bb1f36cd52f9cc85f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
