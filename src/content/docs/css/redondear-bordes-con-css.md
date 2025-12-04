---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ364KCC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDGDMQKXz8kIqOhMIO%2F%2F4hZTG1HLW9fFxHfrPnfXZ%2BUHgIgajClkA4dugB9SOrswvYwVcjR73XF6kDGpQl%2BvyUkh64q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNSvzhUn41yyljvMSCrcA2daWuvjhG0jMH1P5v5nh%2F1gb9RLA8QqQRICaC7D2y%2Ba06WO7sI1aiYXLDKAZnwinQbjVatpGDLwnh9ZAhn3WIxiIbKnODZHEYUaHZx8J%2BncBEk9hT5dk%2FcOnWBZUAFaeUg0IomWhoWd1Df2xPJaxcFQ2an%2B5Z7BXDVvoWSMJ1fRkO4HXTfO8fMObAza7PuSzp0bAvZ0a8NJ8hC1bApfn6%2FXFiuQ8zu2WqjLfrQfUrXg%2BUuhfU29ARf0SmCq6F9Owemvmz1uIhm5wOQa6FjKrsr1CeNNWcsrv%2F3yygl9TL8KJWUbUFrDgB94%2B7dfVtm4CoQNUbaZ%2BHiK5whHogd6amAt1k7sdTGfz9V5bDXmWaQ4FmmFKaSfgzRPxmu%2BVFUZyYMGC75rNTye8lZQywziLPF2xvHbT7mBmzAqLlrFg5CtmH8CVfFTCHo9H9QwojdgPNwol4l4b5%2F%2FJrGgiDjJbnkgLRQGRgRTuql3lDxcHDgK9A4AWTeaB6gByZCaYHj3eBoJaOfsqhJUB2KWXJgVcq6UNGlx4TNERlRujxMG8wF17j3zr8DwGhdXpCYXQ%2BBTLlGXUABBKNz%2Blsv7V3IFhEiMv76bLxnKy1ofhabEkgAdlFX0fSf4AMVduXuOMJPnxckGOqUBpcVkqliANQaW5onST5JLy8DVJDu%2BR3GzxToiyt51vwpskeNwGSo8sKlY7Bcry964qiM5ZoT2C3F1d9szmQLQI5QDiLPpwwUlAv6N6W9JV%2Bs%2FvpSfZKidwJPRYvqrCZffAsOz5advqus%2BKGCIy5hysVF5iBrvNw64qxyUl%2FQHcdM8QTcEjUViw%2Bni3qhZ6c9IlbnYsQkDgC16cbeeiesb0wQdNiVy&X-Amz-Signature=2409d1f3c155647919cf5c8fc6bfa9d0d180616b3bed6613a0c0e2bb71fde3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ364KCC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDGDMQKXz8kIqOhMIO%2F%2F4hZTG1HLW9fFxHfrPnfXZ%2BUHgIgajClkA4dugB9SOrswvYwVcjR73XF6kDGpQl%2BvyUkh64q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNSvzhUn41yyljvMSCrcA2daWuvjhG0jMH1P5v5nh%2F1gb9RLA8QqQRICaC7D2y%2Ba06WO7sI1aiYXLDKAZnwinQbjVatpGDLwnh9ZAhn3WIxiIbKnODZHEYUaHZx8J%2BncBEk9hT5dk%2FcOnWBZUAFaeUg0IomWhoWd1Df2xPJaxcFQ2an%2B5Z7BXDVvoWSMJ1fRkO4HXTfO8fMObAza7PuSzp0bAvZ0a8NJ8hC1bApfn6%2FXFiuQ8zu2WqjLfrQfUrXg%2BUuhfU29ARf0SmCq6F9Owemvmz1uIhm5wOQa6FjKrsr1CeNNWcsrv%2F3yygl9TL8KJWUbUFrDgB94%2B7dfVtm4CoQNUbaZ%2BHiK5whHogd6amAt1k7sdTGfz9V5bDXmWaQ4FmmFKaSfgzRPxmu%2BVFUZyYMGC75rNTye8lZQywziLPF2xvHbT7mBmzAqLlrFg5CtmH8CVfFTCHo9H9QwojdgPNwol4l4b5%2F%2FJrGgiDjJbnkgLRQGRgRTuql3lDxcHDgK9A4AWTeaB6gByZCaYHj3eBoJaOfsqhJUB2KWXJgVcq6UNGlx4TNERlRujxMG8wF17j3zr8DwGhdXpCYXQ%2BBTLlGXUABBKNz%2Blsv7V3IFhEiMv76bLxnKy1ofhabEkgAdlFX0fSf4AMVduXuOMJPnxckGOqUBpcVkqliANQaW5onST5JLy8DVJDu%2BR3GzxToiyt51vwpskeNwGSo8sKlY7Bcry964qiM5ZoT2C3F1d9szmQLQI5QDiLPpwwUlAv6N6W9JV%2Bs%2FvpSfZKidwJPRYvqrCZffAsOz5advqus%2BKGCIy5hysVF5iBrvNw64qxyUl%2FQHcdM8QTcEjUViw%2Bni3qhZ6c9IlbnYsQkDgC16cbeeiesb0wQdNiVy&X-Amz-Signature=863a50ad0fb95c5b374303f15df8429e6ad7bd1af22585ed93830616b2ff066b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
