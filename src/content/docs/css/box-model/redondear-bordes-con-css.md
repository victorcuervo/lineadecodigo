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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXWRZIM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNec%2F0MWXIFsBDZtoy0cYFoOVs8cr%2B9J7yyKIRd25RxgIhAPIFT3uqZ8LNWfBK8tZj3dsIO5uX7aHpy2CLJcsauzZ%2FKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEJroJL6IymQNRWtoq3AOmd3TPpI83Dqy9W%2BOCGS%2FWnK%2BLt5ocMK8%2F6r1HEZsX0rL9zzYZUpJJ0wnDervr9XNGdhKqlgqCcRe%2BzAfs21GAZzkvtTwJG%2FhaEv%2BmyJQSDtIod7mxmSjR0fPsfl%2BYO2KrCnrcIFiwS6t0pYwakUoLOE23C8lMIUoQ2JwXSBpdRFfQBWCyCvqdqNu7l32L80bM6tzJHLtLhY75PI0RaevHmrSyNOzjwxrLjqz6z%2Fa%2FT3cdWibooW9TIOAOVWWliHKTvZA5t3GTnKGWbabHR1AIeXZgABsTWZiCzQk%2F3JAnsK2tp3hh9FMmdt%2FQNNoLHKB3mopYMIyRGhXE7mE7OD%2FkCwQIZ1XnAT1ts%2BnwVZzmOZj7LjYvLpbGiEvTuHluJCVaAbyq9eqqh6uTZiE97oyVTZXsqYQzoi3iyYn3diwPio7aCh%2Fxctb2pkZgyrtoCZCDsmKYN%2F%2F3RFM%2FO4ynyZeAggk4ZY0pU15H1khuzlMORN8KNlvaOHBC%2BgMiK7y1MvFnlgyaThoLFFP%2FdrTu69gLhp1qSyhGyOEa6gDCEA%2BoEskgqtOHchrCQX%2FW1B4IPfqfhTV5VJHiGCqfTyV0z01%2FJntQTdaUQiuWvaYlDBYUDER88QKinzCLEZE2MTDan4vKBjqkARTUQesE2jzLU0Qo48qBzco3OnqIxs3WIa2g6H8uBg1R8R9WnpQU0VrKcL4CrsqEmxmmnxEF9UbI0Ccl98MEuIVyxlYNW9HdrWnilLKgAOQEV3VuWgApU0eeZLb5Mo3YyMBJVDIC9%2BWU3lBfprFn3dJivkJXC%2BwKPfcpOegnD2TdWsbNZvCm7dA0aj7il5B8%2Bcs96vEZzJufR4nXhrr%2FgB%2F9MjI6&X-Amz-Signature=93c95ba19a00baa19fbf5da0b44edb16b4ee09123a065fd5d010cc499d4a0aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXWRZIM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNec%2F0MWXIFsBDZtoy0cYFoOVs8cr%2B9J7yyKIRd25RxgIhAPIFT3uqZ8LNWfBK8tZj3dsIO5uX7aHpy2CLJcsauzZ%2FKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEJroJL6IymQNRWtoq3AOmd3TPpI83Dqy9W%2BOCGS%2FWnK%2BLt5ocMK8%2F6r1HEZsX0rL9zzYZUpJJ0wnDervr9XNGdhKqlgqCcRe%2BzAfs21GAZzkvtTwJG%2FhaEv%2BmyJQSDtIod7mxmSjR0fPsfl%2BYO2KrCnrcIFiwS6t0pYwakUoLOE23C8lMIUoQ2JwXSBpdRFfQBWCyCvqdqNu7l32L80bM6tzJHLtLhY75PI0RaevHmrSyNOzjwxrLjqz6z%2Fa%2FT3cdWibooW9TIOAOVWWliHKTvZA5t3GTnKGWbabHR1AIeXZgABsTWZiCzQk%2F3JAnsK2tp3hh9FMmdt%2FQNNoLHKB3mopYMIyRGhXE7mE7OD%2FkCwQIZ1XnAT1ts%2BnwVZzmOZj7LjYvLpbGiEvTuHluJCVaAbyq9eqqh6uTZiE97oyVTZXsqYQzoi3iyYn3diwPio7aCh%2Fxctb2pkZgyrtoCZCDsmKYN%2F%2F3RFM%2FO4ynyZeAggk4ZY0pU15H1khuzlMORN8KNlvaOHBC%2BgMiK7y1MvFnlgyaThoLFFP%2FdrTu69gLhp1qSyhGyOEa6gDCEA%2BoEskgqtOHchrCQX%2FW1B4IPfqfhTV5VJHiGCqfTyV0z01%2FJntQTdaUQiuWvaYlDBYUDER88QKinzCLEZE2MTDan4vKBjqkARTUQesE2jzLU0Qo48qBzco3OnqIxs3WIa2g6H8uBg1R8R9WnpQU0VrKcL4CrsqEmxmmnxEF9UbI0Ccl98MEuIVyxlYNW9HdrWnilLKgAOQEV3VuWgApU0eeZLb5Mo3YyMBJVDIC9%2BWU3lBfprFn3dJivkJXC%2BwKPfcpOegnD2TdWsbNZvCm7dA0aj7il5B8%2Bcs96vEZzJufR4nXhrr%2FgB%2F9MjI6&X-Amz-Signature=8d7a5db185835c9ae4158841969a0e9fc3b49375874e392ac28079d46ef67857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
