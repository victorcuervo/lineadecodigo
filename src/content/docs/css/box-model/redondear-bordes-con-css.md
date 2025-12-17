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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWK6OCGG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcERtyjjIW3PRbq1LR2yBuJGSSnRiz%2BNlC1CiA2aVl0AIhALdTzfoDqtc8RXwDLYAw6ktJHDlSXuaMlENqBDsildUYKv8DCHMQABoMNjM3NDIzMTgzODA1IgyfuuJw8emkKdEAAXEq3ANoJgZa1lqCYKyfRvUZFE0IajEAPpU8nQCbLA2%2Fnp09qfic0%2Fvsz1kaze4OhKUb5mIjgqMUl1PvPS6eZtefkBrqvOqVCd56TdGnbuaz%2F9MjOzIPJRqwBQXcvos3yXSVJz3WbF9joLwmXhl5xfjwybhUodR9j5sNEW%2FZaj4XmPjx2wEdtpulScvxZA9eCU%2FkLm0sjtsTwlFryIZe8iHM6YX2F1tMqmaGRI6tiOF%2FfkUyc8Od8ts9rzK%2Bc20cjef0Mn5gEDO%2BoFNR6ASybOPZOhvboq2hhIixnuGaznrX2P6PJI8N6UkLYOUqrl3%2FVEmYsA2dS%2BdLmlzrkQFgY2P4hOJgU7dLWuFnp9%2BeNV2bhfMuYMpt%2FVuk9Am5JapRqSLBV7xrBUkqZlJrUd7lItqf%2FEfMexHGJXi7TXFbTg76aivXuJ9IVuAOR5mWD%2FCpUIxeRH2cEXWOgyfScm28GELiTs2xeDHpsDn%2FCn0LJGdGYTazKn%2BtzwhEhP663xxlVFr6w5D%2BttcLOHCqOlokBSG%2B1nbK36Q0dm%2F1IyPgo%2FZJ5p3d2WvgkLHHIAKrG92QGIVgMD8AOWiQuJLA%2BuI4DjLPpchjL5p57i622ZXi9%2BUd1RzrFxRpzTvJnh5AnqS%2FGTCal4jKBjqkAY6QipDIGj3Abd0%2FvaakvRa5X3%2FbB9lHDGBNu7pb%2F%2FZgv59zG0XCqGATN%2F8UctoOrRLPJerDv5KG2Sukw6BL2i75Av4fQWC983SySSgNF4nKqpd%2BEbfoQ%2FvFB%2FMrCnZovLYawY49k%2B0evNW%2Fksn4SdfAXwFfn5TOH3HlHCvZWrbonZEFPL2bmpzfi32GhwsgsIju412myMGo0bSgnkI32RGpU0%2F%2B&X-Amz-Signature=c479e25eba7844e00e8d9dc38c79ad54fd9a68f01df98e59e02d13546084e488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWK6OCGG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcERtyjjIW3PRbq1LR2yBuJGSSnRiz%2BNlC1CiA2aVl0AIhALdTzfoDqtc8RXwDLYAw6ktJHDlSXuaMlENqBDsildUYKv8DCHMQABoMNjM3NDIzMTgzODA1IgyfuuJw8emkKdEAAXEq3ANoJgZa1lqCYKyfRvUZFE0IajEAPpU8nQCbLA2%2Fnp09qfic0%2Fvsz1kaze4OhKUb5mIjgqMUl1PvPS6eZtefkBrqvOqVCd56TdGnbuaz%2F9MjOzIPJRqwBQXcvos3yXSVJz3WbF9joLwmXhl5xfjwybhUodR9j5sNEW%2FZaj4XmPjx2wEdtpulScvxZA9eCU%2FkLm0sjtsTwlFryIZe8iHM6YX2F1tMqmaGRI6tiOF%2FfkUyc8Od8ts9rzK%2Bc20cjef0Mn5gEDO%2BoFNR6ASybOPZOhvboq2hhIixnuGaznrX2P6PJI8N6UkLYOUqrl3%2FVEmYsA2dS%2BdLmlzrkQFgY2P4hOJgU7dLWuFnp9%2BeNV2bhfMuYMpt%2FVuk9Am5JapRqSLBV7xrBUkqZlJrUd7lItqf%2FEfMexHGJXi7TXFbTg76aivXuJ9IVuAOR5mWD%2FCpUIxeRH2cEXWOgyfScm28GELiTs2xeDHpsDn%2FCn0LJGdGYTazKn%2BtzwhEhP663xxlVFr6w5D%2BttcLOHCqOlokBSG%2B1nbK36Q0dm%2F1IyPgo%2FZJ5p3d2WvgkLHHIAKrG92QGIVgMD8AOWiQuJLA%2BuI4DjLPpchjL5p57i622ZXi9%2BUd1RzrFxRpzTvJnh5AnqS%2FGTCal4jKBjqkAY6QipDIGj3Abd0%2FvaakvRa5X3%2FbB9lHDGBNu7pb%2F%2FZgv59zG0XCqGATN%2F8UctoOrRLPJerDv5KG2Sukw6BL2i75Av4fQWC983SySSgNF4nKqpd%2BEbfoQ%2FvFB%2FMrCnZovLYawY49k%2B0evNW%2Fksn4SdfAXwFfn5TOH3HlHCvZWrbonZEFPL2bmpzfi32GhwsgsIju412myMGo0bSgnkI32RGpU0%2F%2B&X-Amz-Signature=47176df938ec7c60837787013bf77ba4b4ff8a29e32477c4693f336786e5861f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
