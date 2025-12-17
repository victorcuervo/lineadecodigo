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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D5RH6GO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd23PbS2X%2BM5i0ZVcY8I9VAYw%2FgpjAMwmzSzsjPe96YQIhALb7L5d64F%2FViCGhuaSJkKcShJiZ%2BQ4RfArTGVSL0eaHKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNFhH4HwBM6kchPVAq3APDxXa%2FcU0VgkS4%2FBFxZz%2F%2FqylGIITGm3rFIkES%2B4AI3qKG50WFM4qo7WCF1De47yFZiddCamt3f0Qh6LKWFbp7ftiB%2Bit0vXtGSsdovd0hebic8hb4gih0SqzRJTSCs%2Byn5eQ81%2BZcPsI2m4DPB49nRxweYhSw%2FF0WTLmL36NBa8l7brcVm0tZu%2FGTgdLPU2OV1ao8L8kdqlpHpYpM2Yml7RWgkb%2BYbj6uM%2FZvGM%2FhwLmpD0N7TbaqfDMfz7lquwVNISDLqWYrYPWHMaDAFP9rozEc7iwnpQgDeSloKMT6qz49afSyhdOQ63HZB2kVeTI5pB0JupB3J8wF8BUcR%2F0SiXwMgUR1JL8b6Tfq7NiDDozZeyRegjXWuJY8xdEoNyR%2Fs10jmPOFlNL8%2BlMVLhULUszEVJR%2FE6pXUnbErH70hCGmaQzSXv7lS4uAKOgFpKpicJ3PbL%2FNlbIrfkoMGmFzRCZWUR2OYnxOPapuhWo9XyxkXpDUyKHzGFmjMfir1lyoahbRaM3lckDQd0Qjw6uAfsZSxeZBOXG9LvWm6RulQvNM8gS75%2BaJB4OtS%2Ba8LbsZGqlyDB2JlU2uYMnwzllKWBi4JmgJ65iIV7lUDjx%2F1WrBlqqss7vH%2BKUByDDZgYvKBjqkAasPsY6dpitneBmMmQ2L5IKeqAhz2XEh9oDdsBf8vNiB8gPk%2BBY1ejn0Ew7k9wHHHaBkx3HuPVCarwlDB9buBEv3W9OZ98xsMpk9f672Oym%2FFMC9m21bj0GXtUifJTw1sVrCoSSihzUd3RCNYtqazciIxIUUFOqcS5ORx2mqlMwSNa5v9bV%2BZ3TqontZQsTMo5sPx2BfbHC5ZQy5HegjUofkVkT7&X-Amz-Signature=3a09e40de859c098966176b6787cc3c3340926465dfa0b9c433ab62007afeb44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D5RH6GO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd23PbS2X%2BM5i0ZVcY8I9VAYw%2FgpjAMwmzSzsjPe96YQIhALb7L5d64F%2FViCGhuaSJkKcShJiZ%2BQ4RfArTGVSL0eaHKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNFhH4HwBM6kchPVAq3APDxXa%2FcU0VgkS4%2FBFxZz%2F%2FqylGIITGm3rFIkES%2B4AI3qKG50WFM4qo7WCF1De47yFZiddCamt3f0Qh6LKWFbp7ftiB%2Bit0vXtGSsdovd0hebic8hb4gih0SqzRJTSCs%2Byn5eQ81%2BZcPsI2m4DPB49nRxweYhSw%2FF0WTLmL36NBa8l7brcVm0tZu%2FGTgdLPU2OV1ao8L8kdqlpHpYpM2Yml7RWgkb%2BYbj6uM%2FZvGM%2FhwLmpD0N7TbaqfDMfz7lquwVNISDLqWYrYPWHMaDAFP9rozEc7iwnpQgDeSloKMT6qz49afSyhdOQ63HZB2kVeTI5pB0JupB3J8wF8BUcR%2F0SiXwMgUR1JL8b6Tfq7NiDDozZeyRegjXWuJY8xdEoNyR%2Fs10jmPOFlNL8%2BlMVLhULUszEVJR%2FE6pXUnbErH70hCGmaQzSXv7lS4uAKOgFpKpicJ3PbL%2FNlbIrfkoMGmFzRCZWUR2OYnxOPapuhWo9XyxkXpDUyKHzGFmjMfir1lyoahbRaM3lckDQd0Qjw6uAfsZSxeZBOXG9LvWm6RulQvNM8gS75%2BaJB4OtS%2Ba8LbsZGqlyDB2JlU2uYMnwzllKWBi4JmgJ65iIV7lUDjx%2F1WrBlqqss7vH%2BKUByDDZgYvKBjqkAasPsY6dpitneBmMmQ2L5IKeqAhz2XEh9oDdsBf8vNiB8gPk%2BBY1ejn0Ew7k9wHHHaBkx3HuPVCarwlDB9buBEv3W9OZ98xsMpk9f672Oym%2FFMC9m21bj0GXtUifJTw1sVrCoSSihzUd3RCNYtqazciIxIUUFOqcS5ORx2mqlMwSNa5v9bV%2BZ3TqontZQsTMo5sPx2BfbHC5ZQy5HegjUofkVkT7&X-Amz-Signature=5982f6e75627c24e0af62e8417c59e9ee468557c4b63d640057212ed6e175cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
