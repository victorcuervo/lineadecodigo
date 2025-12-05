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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UBRHSW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2%2BOaUXPcmi2d4%2FzlqvXXfNh9Lvp3fVSJeYyIu0I6QgIhAPks6E6bGPWqkKc5AhHcSPbjV9tiI99D2Ek1Nt2JTGdoKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMa4K8Ofcau84sFDYq3AOKMcET2DlGf%2FFdqa9Aqkw3a9JyuGgISlUyOikFj3b0H7oaAT2YbNeWUBb5PsaTUAaeVl0z7NJndWthiKWbZvXbhXjYti6eg%2F4Vya4tfJ%2BZmMsV19oSvZCiJoqoZcCV8ukh1V2cUAIl3WKacsywm1%2Ba8z5ctVQbO43rdzyZPNQLteVoJgFAR%2FXSxIFFpdVnjojn3OeO3i%2B98v8c2LlpnSkwUeEpM3%2FXn86Z346ilOs119Fb5Yd0e1bNoFF5Ycga5kPxY%2FnN8Yx%2BMmBStHed6NE9bd5KT%2FE7dKpFtruFOrW%2FQzRmWBPwJpgCIzxIp2HgLkGzadAZAyAszp20Qn%2BZMKxqdkmLbO0Phh7Z16lha8QsnNQw5a3toIEPr2vUb7nMYo2DpLKmO5yjut4H4h1RAPgQ56wYX%2FmuE3U0kFILfczSBbi6hv1Dfa3ZqybJ5nLEPd8dseqIvFX5aunhHFCg30nOl%2BvK67Dg6XzrK1b7aG3Mjl%2BwWfBxsf%2Bq0hS0cC5TEPlit1OLonZNwghTMo5wiCyiwuY9uoldl2K5LOPlryr7Nv%2FDxS6cJNykxWmPjEKB2sopzP77GSAYcEo8uWYzWnUQBlodtMWiFAupYzTvMb%2FTjzubuzZ7Whma8hYt6DC29MvJBjqkAXUH53eIFaim1i0X3fXK2YTx6fu53Eo%2BaJe6lDbnBRSrIz6SOdcGpoEJHsl7PU6oi9F0eBPwriStbyA4wQ2l0cvzDHoEqQ6Lhv6K8FjsnDLwXtspA%2FZxYCOrTPKKgFJNi%2FAKv7VVXAwyHAQf6emAYqdpfjEcJHp4TiXsUeaNndOs%2BUgD9VBp2S1PPVHgkF24WP4Tn9L5jpaaWjwAinRjq%2BA41CPy&X-Amz-Signature=e21296a08ede89774d22f2205e3fb0be2af67851d42babd61352c329c5fc08d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UBRHSW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2%2BOaUXPcmi2d4%2FzlqvXXfNh9Lvp3fVSJeYyIu0I6QgIhAPks6E6bGPWqkKc5AhHcSPbjV9tiI99D2Ek1Nt2JTGdoKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMa4K8Ofcau84sFDYq3AOKMcET2DlGf%2FFdqa9Aqkw3a9JyuGgISlUyOikFj3b0H7oaAT2YbNeWUBb5PsaTUAaeVl0z7NJndWthiKWbZvXbhXjYti6eg%2F4Vya4tfJ%2BZmMsV19oSvZCiJoqoZcCV8ukh1V2cUAIl3WKacsywm1%2Ba8z5ctVQbO43rdzyZPNQLteVoJgFAR%2FXSxIFFpdVnjojn3OeO3i%2B98v8c2LlpnSkwUeEpM3%2FXn86Z346ilOs119Fb5Yd0e1bNoFF5Ycga5kPxY%2FnN8Yx%2BMmBStHed6NE9bd5KT%2FE7dKpFtruFOrW%2FQzRmWBPwJpgCIzxIp2HgLkGzadAZAyAszp20Qn%2BZMKxqdkmLbO0Phh7Z16lha8QsnNQw5a3toIEPr2vUb7nMYo2DpLKmO5yjut4H4h1RAPgQ56wYX%2FmuE3U0kFILfczSBbi6hv1Dfa3ZqybJ5nLEPd8dseqIvFX5aunhHFCg30nOl%2BvK67Dg6XzrK1b7aG3Mjl%2BwWfBxsf%2Bq0hS0cC5TEPlit1OLonZNwghTMo5wiCyiwuY9uoldl2K5LOPlryr7Nv%2FDxS6cJNykxWmPjEKB2sopzP77GSAYcEo8uWYzWnUQBlodtMWiFAupYzTvMb%2FTjzubuzZ7Whma8hYt6DC29MvJBjqkAXUH53eIFaim1i0X3fXK2YTx6fu53Eo%2BaJe6lDbnBRSrIz6SOdcGpoEJHsl7PU6oi9F0eBPwriStbyA4wQ2l0cvzDHoEqQ6Lhv6K8FjsnDLwXtspA%2FZxYCOrTPKKgFJNi%2FAKv7VVXAwyHAQf6emAYqdpfjEcJHp4TiXsUeaNndOs%2BUgD9VBp2S1PPVHgkF24WP4Tn9L5jpaaWjwAinRjq%2BA41CPy&X-Amz-Signature=746c3158fe28d7159a77236001d8d5ec11dec4b12cad775039c79e6bd5cda240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
