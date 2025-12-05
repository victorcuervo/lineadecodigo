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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMK27326%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLQMDKVK12SlHv9P%2BQUAk3BPfGtNitvDkD6f5kWJm0cAIhAIPaSIP7L%2BQZ8oHpavAlmRnXDdjgvaADu0oPKuIRovZDKv8DCE8QABoMNjM3NDIzMTgzODA1IgzkxPxh5K87%2BcIUw5sq3AM%2FUJ%2FV6YJKwaPgid2kBqf7Mba77AhHwZJHtbddLHO7Wphoh1dRvv0QwoMJcXIjzNOqTVmsovsk9KXqSzl73pWByWwbgygQAWUHta2TC%2BjsX8UmF1sYb5WHPGvmiaklFKl48Q1eMb20rn6Q604JzV2%2BTh5DuNArc9a4asv%2F6lRqWd%2BDrdPQFiSdi5oNr%2Ba2sr0%2Ftz%2F8dSLAz57785zYn56oeu47EPihgwZnb0872TOrSS%2FdBuW%2BoBBW%2FWD53IEwm%2FZjmkhM8k9vFps%2F%2BBnp7PvSJIIzuvSIG7VHJLHMfmkvIKGReGQjf0qt2aM1VKt5OdcJBvRffv23b5%2B5%2Fej4Ao9G0zlffG6nOdwJywiHYWLBHdJmhzLLKV3ehHzfkJQzBxySjP0JU1gJ824WcE86l0Z3YvHjtkIyFFGFKH5uEXw7%2B%2BnXG4nZpDN03MWhm6V%2BAi1IquzWsKW97FcZm4sSo3a9xmYbtJ0R83WekRO4QpkBKg6foBrU5n%2BthQqJLuZiZT5Ira89mpkLH0bWyU6pcWgHXrK0NzVbqu2aaURhscoW5g%2FuBCAZG9ePWcQcy6Ru02cPq2LYI%2FLGWtHNOq5NgONFGNobVuzPDMq7D0epWgx8WtGl55BptCo3zVOf4jDejMjJBjqkAd5hnmc9knHFpEC0AvBHpkWCeF8%2BR%2BFXA7hUmdWx1CM3dD2E2EPvXHR2L0Hwy1a7kZS5rwKkkx466UO9wCjH3uRb8QrXND4mDin7qfLnxSbQb8vPBVoja6eG7me25lJb2Kq%2Foyb%2B7DN99fV5NMvVm10h0YKHStSXlT%2FCJSTJ93DpbUb7Z3%2B1lO4EMRSF2%2FtTbW%2F6eHgRrXi3FhzeDkFmBXmMkDGS&X-Amz-Signature=e4012b6a32e475bb1b3ece48d7b68ed3a41f90ce1461bf24962a747b997634ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMK27326%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLQMDKVK12SlHv9P%2BQUAk3BPfGtNitvDkD6f5kWJm0cAIhAIPaSIP7L%2BQZ8oHpavAlmRnXDdjgvaADu0oPKuIRovZDKv8DCE8QABoMNjM3NDIzMTgzODA1IgzkxPxh5K87%2BcIUw5sq3AM%2FUJ%2FV6YJKwaPgid2kBqf7Mba77AhHwZJHtbddLHO7Wphoh1dRvv0QwoMJcXIjzNOqTVmsovsk9KXqSzl73pWByWwbgygQAWUHta2TC%2BjsX8UmF1sYb5WHPGvmiaklFKl48Q1eMb20rn6Q604JzV2%2BTh5DuNArc9a4asv%2F6lRqWd%2BDrdPQFiSdi5oNr%2Ba2sr0%2Ftz%2F8dSLAz57785zYn56oeu47EPihgwZnb0872TOrSS%2FdBuW%2BoBBW%2FWD53IEwm%2FZjmkhM8k9vFps%2F%2BBnp7PvSJIIzuvSIG7VHJLHMfmkvIKGReGQjf0qt2aM1VKt5OdcJBvRffv23b5%2B5%2Fej4Ao9G0zlffG6nOdwJywiHYWLBHdJmhzLLKV3ehHzfkJQzBxySjP0JU1gJ824WcE86l0Z3YvHjtkIyFFGFKH5uEXw7%2B%2BnXG4nZpDN03MWhm6V%2BAi1IquzWsKW97FcZm4sSo3a9xmYbtJ0R83WekRO4QpkBKg6foBrU5n%2BthQqJLuZiZT5Ira89mpkLH0bWyU6pcWgHXrK0NzVbqu2aaURhscoW5g%2FuBCAZG9ePWcQcy6Ru02cPq2LYI%2FLGWtHNOq5NgONFGNobVuzPDMq7D0epWgx8WtGl55BptCo3zVOf4jDejMjJBjqkAd5hnmc9knHFpEC0AvBHpkWCeF8%2BR%2BFXA7hUmdWx1CM3dD2E2EPvXHR2L0Hwy1a7kZS5rwKkkx466UO9wCjH3uRb8QrXND4mDin7qfLnxSbQb8vPBVoja6eG7me25lJb2Kq%2Foyb%2B7DN99fV5NMvVm10h0YKHStSXlT%2FCJSTJ93DpbUb7Z3%2B1lO4EMRSF2%2FtTbW%2F6eHgRrXi3FhzeDkFmBXmMkDGS&X-Amz-Signature=5ba0bfc138c9b300ac6cae1d79beedd91f1a066ac1358e41de82f3a0bdef97d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
