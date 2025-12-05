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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMDKC6G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbgGvAmlCXMPGAvbdSj5rKHYYq4%2Bq5CVL0izInr6W3YAiEA1Fgeg1DN%2FXrshvpRhwrbB%2BzwvaNgMpwYltzV066YvKsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHCq%2Bhoy%2FhZ0y%2FvF%2BSrcA3HGtLtmTjujiI4RSxAgHtqg4fOHcAXNUcY14kgkczeEfvQijdK6G%2BVPVWWq%2BA9WmxGl51s6IigfJHpYnm37z1cyorI%2FPRe5bDhvf2wQQda3sIMQ5VM%2FJo%2BqOtSWZYFpqhqeQ5eV9v9P5ExNxqzoJTHKUghrelUslt3e5Kw7fstZcmJ9ecE6T%2B16XV%2FTk8qv09B6TtkcDhGJRXTqMXeaG6TOFAF83y7wsP503f12mWOjMPCTvjw1RkorRcoP7Coo3V5qvC4SHAGLb5QfuqSeNXhvLMCUsxK6n6uDH6j1qvTvQdKocMH%2F6GyqrzDZIqkAQSS882rIu0UqKMq%2BRgLEu4VSGT2cIkDUPShGBYVdLCg6b6jrGwvyBkcVr6cMxo4zVvO4jeKqiWKYQSg3%2BA8oISieAP%2B2mN56rggapZo5d2XotM5gr9jJwjrlof6OR0KN1xqNCFIfu2iekmnvwq9OcJ3f%2F8FMK0300vhPqx3WXQ9GTkyqHDnhXhCTJdRutowA4jMnnoYGI%2BoOu18dncpYQRa6eZNZ0BV2plIktYBNOF1dEV9Kz9aXP1yebaVstVxzMRvK%2ByJuEZ6GQ7zkrZQHbsWsvTyrT1ZcYgfOlxJfkcOmVu3BKyA1xFVKBedcMMOsyckGOqUBzJwrD%2BvQQ%2Fxca5kLUogSBv%2F77ywpnxVL2B8Zzrx7B6Rcez8CWV4uVghK8OkMLMlPpJwdC166aIAQaxJDw%2FcbqWSLMDoYcfWKvUwcHBjACDe%2FynWcMZTQYzx%2FLto34bXJ38BWoRcnTWJ7FxhUX9uKANhbV45%2BdeUqUWw2SiwbqRBqkChJ95HmDQQQ9syq8iRcl94b7AsSkjdRZWjSplOqALLnIF%2BF&X-Amz-Signature=a9c9b8ac762045e6a01253026a7e683d46fda0aa47ecf1088c317e64265db7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMDKC6G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbgGvAmlCXMPGAvbdSj5rKHYYq4%2Bq5CVL0izInr6W3YAiEA1Fgeg1DN%2FXrshvpRhwrbB%2BzwvaNgMpwYltzV066YvKsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHCq%2Bhoy%2FhZ0y%2FvF%2BSrcA3HGtLtmTjujiI4RSxAgHtqg4fOHcAXNUcY14kgkczeEfvQijdK6G%2BVPVWWq%2BA9WmxGl51s6IigfJHpYnm37z1cyorI%2FPRe5bDhvf2wQQda3sIMQ5VM%2FJo%2BqOtSWZYFpqhqeQ5eV9v9P5ExNxqzoJTHKUghrelUslt3e5Kw7fstZcmJ9ecE6T%2B16XV%2FTk8qv09B6TtkcDhGJRXTqMXeaG6TOFAF83y7wsP503f12mWOjMPCTvjw1RkorRcoP7Coo3V5qvC4SHAGLb5QfuqSeNXhvLMCUsxK6n6uDH6j1qvTvQdKocMH%2F6GyqrzDZIqkAQSS882rIu0UqKMq%2BRgLEu4VSGT2cIkDUPShGBYVdLCg6b6jrGwvyBkcVr6cMxo4zVvO4jeKqiWKYQSg3%2BA8oISieAP%2B2mN56rggapZo5d2XotM5gr9jJwjrlof6OR0KN1xqNCFIfu2iekmnvwq9OcJ3f%2F8FMK0300vhPqx3WXQ9GTkyqHDnhXhCTJdRutowA4jMnnoYGI%2BoOu18dncpYQRa6eZNZ0BV2plIktYBNOF1dEV9Kz9aXP1yebaVstVxzMRvK%2ByJuEZ6GQ7zkrZQHbsWsvTyrT1ZcYgfOlxJfkcOmVu3BKyA1xFVKBedcMMOsyckGOqUBzJwrD%2BvQQ%2Fxca5kLUogSBv%2F77ywpnxVL2B8Zzrx7B6Rcez8CWV4uVghK8OkMLMlPpJwdC166aIAQaxJDw%2FcbqWSLMDoYcfWKvUwcHBjACDe%2FynWcMZTQYzx%2FLto34bXJ38BWoRcnTWJ7FxhUX9uKANhbV45%2BdeUqUWw2SiwbqRBqkChJ95HmDQQQ9syq8iRcl94b7AsSkjdRZWjSplOqALLnIF%2BF&X-Amz-Signature=d6237d9e46ab58d2911dd7884638f54587b7a93a580bb4c18aaee6ea16011a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
