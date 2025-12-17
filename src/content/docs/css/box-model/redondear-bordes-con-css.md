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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3KPWQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxreWMvOHpZmNY7B9fP3zzNy6IqU%2FEEOLWY3HNr%2BRRLgIhAMWiIPJbaEildGRoTl9fen4BAEYQa8Pqu%2BpxtPrVv3rCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW9ESML2gvXxl174Qq3APzEXTgshjOYqsYe4k4jTHJ%2FdppOxrQD%2F9K77Wl1CsHq0WudbyFrIAKZZvtbqpSBX2fVgV3AA5sDGkpscnpVb9XYD3HUfKOjqccX5K4%2FJp%2BOG9yLK6HTM%2BxhS7X%2FPXy91LEw%2FNGX9p1icatwGi%2FHuxLcwgvogmKKXkqggqfngVKD0fvf3RQvJ84ZssHQj2SJQSfRIr6%2FYBuOQpIphuQZE%2FhAJr0Q%2B85ZhT%2BDwDlnaE9Gz8y8QY4SNSleLD5IwFtafGtsbIQfQfzmo7UzrmWmpCEQiJriYaPd5r9dYVc6tXrzofYfVPirjZgpHaEpcpuECEvwB%2FrwLlqP2T7scpcqbr0YYKz040NNG9QGKN6XilAC1iVjn9khFiftFqQ0boEGpQshDi7aIwOot6YO4Ik8cY5B6q1Rt7N9hOSWk9ugNYYNPcYBEg3pfMCFJqXmaOtWe1xcGR%2FwmbEyu3s3T4jc0l0%2F9dJtW41JQHKd3uO%2Be%2FPOiVhJdtKYkO7dStlwFEqT%2BHFI9pLBIWx1JtS%2BTnDwfr1DJoIYFitCWcuZFGBrH%2BI4YIoo22ZGAUOBXm9cPHuUUss5l6iuY12xcQkgmbLSFaxvNOg6v7fM%2FXHbxOfcaxilMzGqmFro44M4xSMHDDwnovKBjqkARqWC%2FQI5l2mdZonm2Y%2Fi8UawhQXu1IMZ0NYaEGW%2B0GFOZu61YyNbJJGsbyjNQyRQQ9WndXDR1QfTmLo08Eg4I8fdZRm2erH979PAKDq8foVx%2FokRG3%2FIfkVqcFhoaKbMvU6A%2BgKd3nvzTJyQUmUIDztKUa9QnYOkHAyENkCPW31APnYRfqbY0E3F7GNYxp%2FN404Uw7MDH84z9JYMwIzQR343rxo&X-Amz-Signature=c6f89d65f1ea9cded234efcedf5336ed9b2114677c4d1dddcc1d6f5911b631aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GV3KPWQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxreWMvOHpZmNY7B9fP3zzNy6IqU%2FEEOLWY3HNr%2BRRLgIhAMWiIPJbaEildGRoTl9fen4BAEYQa8Pqu%2BpxtPrVv3rCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW9ESML2gvXxl174Qq3APzEXTgshjOYqsYe4k4jTHJ%2FdppOxrQD%2F9K77Wl1CsHq0WudbyFrIAKZZvtbqpSBX2fVgV3AA5sDGkpscnpVb9XYD3HUfKOjqccX5K4%2FJp%2BOG9yLK6HTM%2BxhS7X%2FPXy91LEw%2FNGX9p1icatwGi%2FHuxLcwgvogmKKXkqggqfngVKD0fvf3RQvJ84ZssHQj2SJQSfRIr6%2FYBuOQpIphuQZE%2FhAJr0Q%2B85ZhT%2BDwDlnaE9Gz8y8QY4SNSleLD5IwFtafGtsbIQfQfzmo7UzrmWmpCEQiJriYaPd5r9dYVc6tXrzofYfVPirjZgpHaEpcpuECEvwB%2FrwLlqP2T7scpcqbr0YYKz040NNG9QGKN6XilAC1iVjn9khFiftFqQ0boEGpQshDi7aIwOot6YO4Ik8cY5B6q1Rt7N9hOSWk9ugNYYNPcYBEg3pfMCFJqXmaOtWe1xcGR%2FwmbEyu3s3T4jc0l0%2F9dJtW41JQHKd3uO%2Be%2FPOiVhJdtKYkO7dStlwFEqT%2BHFI9pLBIWx1JtS%2BTnDwfr1DJoIYFitCWcuZFGBrH%2BI4YIoo22ZGAUOBXm9cPHuUUss5l6iuY12xcQkgmbLSFaxvNOg6v7fM%2FXHbxOfcaxilMzGqmFro44M4xSMHDDwnovKBjqkARqWC%2FQI5l2mdZonm2Y%2Fi8UawhQXu1IMZ0NYaEGW%2B0GFOZu61YyNbJJGsbyjNQyRQQ9WndXDR1QfTmLo08Eg4I8fdZRm2erH979PAKDq8foVx%2FokRG3%2FIfkVqcFhoaKbMvU6A%2BgKd3nvzTJyQUmUIDztKUa9QnYOkHAyENkCPW31APnYRfqbY0E3F7GNYxp%2FN404Uw7MDH84z9JYMwIzQR343rxo&X-Amz-Signature=4abbb93a22304704451c040ab9d1d49f12b8323579a096d269959c1c5c92f9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
