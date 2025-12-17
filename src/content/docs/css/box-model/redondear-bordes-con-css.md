---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYEHWFMT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUu8ZgvFDe%2FR96Wmu%2BqWCyroYYM9rEoOPiKBFhe%2Bj6YAIhAOto3ZOLqMMOf515gWEqC3t0GtG0AaHL4niauoOjWWqKKv8DCHQQABoMNjM3NDIzMTgzODA1IgxWeeCaMFyn8jXKcZAq3AO7nM2x%2FosAzB2ABnk%2Fk78kLlEWO1ngr0n%2BJJOut6UEmGIlZ03Fo1qXxDzHNXrx0saKzfgBIvUHGzal6qADDfcneLgwaRF00jxPXP6O8YiE1za%2BFJoVlWFR%2BboxichkaqH1eYhCL58Ubz0vY6IfqLSv4CLOUnTdDmwl6FTsXVFzwPXBpvha1BNCebIuCWoqqhVTqHAAPJ8XJ%2BwABy7SZX%2Bg%2BQWdIQ4G2gjlkGwCRL1ZBSLsyaWH1nx81cT%2FsdctfFnZrA9s0Tou7Rq1yWnsveHv%2FYeTRm0By26CXTwu7XbI8PS1Ks298JkZX8XFH0Dc6TA%2BqRBty53vMp8DZrPV3R2%2FmIpbKM%2FY4KVnsPastbWEEKyhS1XBwm6eMjwSVRlavkfzRc%2FiY%2FjI4EX1%2Bbfx6c4gJPlixCWID%2Br5g1P6U4mhulT7ZNUObooy6GXm%2BKW%2BCtH9DO1Lb7dWGiZr%2FALe2gV2%2BwC6%2F%2BhJJJJOgUAkUvmR%2BeBhDmSdg4cYG3nUmVj357HZQEnxeIUWl1Wmpc8ZESJH1KgWmEz10pw2mQFHNHfiOi8wGxzjoYDlv67zPozNQBi4q3LM0kaVOwf%2B72sjNsHlSEEVuju6ZvVwQMju3kcBp%2BfLYpNBshRNZKLMHzC4sojKBjqkAc4eETEZJAYQQvNQjz63CJevrrSUZwSja7sw8lp3uAsHZF53Rmy7cfZGSOXlvo20Hfj4QmLduPIS7byzKvadT0WKnMlPaBIi0MZrDuMtf7oiUwDfsLLg9Vbb8t%2BeNPbhjk0bbn082gss4ieyUACI2eZKAK480k2Fq3wzYh%2FMyctkIQV%2Bg4ezJ2uhYu1WoLnZtGBh4k2yZLf6qcd54wOsI%2FbHr7i5&X-Amz-Signature=88be3bd43d53cc9e7e22c3338d30195f4fc16e3533e135f2f84ba049a3f2e72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYEHWFMT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUu8ZgvFDe%2FR96Wmu%2BqWCyroYYM9rEoOPiKBFhe%2Bj6YAIhAOto3ZOLqMMOf515gWEqC3t0GtG0AaHL4niauoOjWWqKKv8DCHQQABoMNjM3NDIzMTgzODA1IgxWeeCaMFyn8jXKcZAq3AO7nM2x%2FosAzB2ABnk%2Fk78kLlEWO1ngr0n%2BJJOut6UEmGIlZ03Fo1qXxDzHNXrx0saKzfgBIvUHGzal6qADDfcneLgwaRF00jxPXP6O8YiE1za%2BFJoVlWFR%2BboxichkaqH1eYhCL58Ubz0vY6IfqLSv4CLOUnTdDmwl6FTsXVFzwPXBpvha1BNCebIuCWoqqhVTqHAAPJ8XJ%2BwABy7SZX%2Bg%2BQWdIQ4G2gjlkGwCRL1ZBSLsyaWH1nx81cT%2FsdctfFnZrA9s0Tou7Rq1yWnsveHv%2FYeTRm0By26CXTwu7XbI8PS1Ks298JkZX8XFH0Dc6TA%2BqRBty53vMp8DZrPV3R2%2FmIpbKM%2FY4KVnsPastbWEEKyhS1XBwm6eMjwSVRlavkfzRc%2FiY%2FjI4EX1%2Bbfx6c4gJPlixCWID%2Br5g1P6U4mhulT7ZNUObooy6GXm%2BKW%2BCtH9DO1Lb7dWGiZr%2FALe2gV2%2BwC6%2F%2BhJJJJOgUAkUvmR%2BeBhDmSdg4cYG3nUmVj357HZQEnxeIUWl1Wmpc8ZESJH1KgWmEz10pw2mQFHNHfiOi8wGxzjoYDlv67zPozNQBi4q3LM0kaVOwf%2B72sjNsHlSEEVuju6ZvVwQMju3kcBp%2BfLYpNBshRNZKLMHzC4sojKBjqkAc4eETEZJAYQQvNQjz63CJevrrSUZwSja7sw8lp3uAsHZF53Rmy7cfZGSOXlvo20Hfj4QmLduPIS7byzKvadT0WKnMlPaBIi0MZrDuMtf7oiUwDfsLLg9Vbb8t%2BeNPbhjk0bbn082gss4ieyUACI2eZKAK480k2Fq3wzYh%2FMyctkIQV%2Bg4ezJ2uhYu1WoLnZtGBh4k2yZLf6qcd54wOsI%2FbHr7i5&X-Amz-Signature=fc7d119c542b2a125d8bb6023ee840fca29b2e49ae0dba15194478a89f0efe9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
