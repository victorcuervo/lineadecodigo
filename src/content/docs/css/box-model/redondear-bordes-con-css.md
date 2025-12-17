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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDG2QHP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxZTLKcuab6S9zLZtD2ecV%2FkQKn%2BRUk8Bh44AFFUVmwIhAILuwEtEoEbt35TqhPNrbga6FGurq%2FF%2BNbNcqF5yMcWGKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8KZwk5qrtFgu%2FYjYq3AOar5LQXbjrwbatsumZMFqBWqlg45gDcI23V54M4uUi66XUhkh%2FiU3xtDUqSAfuT4nSQfXYBLAkMjLM%2F5AonG3u6eRqPRlVsWdfrfmYLvsUeG47gHHFoohz5AeSvg5XXu9IPOOfr4EE5J5yXgNPmy09YtlvqY%2FVlAn0b5l9k4cLMRE0UAuI5n12UXE1dvKFgZH%2Bsi3iNvJ649clPlDnPFapvPocpYFU1bE2MQ8kFQX65i0%2F1BKRwkKv9i%2BkOgJo4m9ts9XYXhG6x4lRSfxI86ul6shCAF8shRGdOkbfdrNoKXDXmWuF0XiiA0mD5J9PRCqLaVdoFe5Sk3Eo7QKgjwWwHeJ9gejmAVoJeoQoA5BkYIdSVsA%2FTJbPXKvN%2B2g9o36dt6eJK699hy9KPJQLURR1T5cXjo6wx%2Bh8TJUAg14f3hhtpZLzj6UT5YHx7HvasYMtq%2BW%2FnH6cPm%2BPi4hWEEszILofsbzydUQU0%2BK3Jgcy%2FTTy3ez5uFLZr6Kb1OEojRVwA3tNqYjXGUXLURpqmvjhUprFitLAM0uY0BGQPYRIBmTPenVAbWcEkGVDJowap9ISQ6Kn1h7%2FbpJUysg8BGXskFEtRyffwgq%2FMI0G7zbsq6dy0PWfVGmPs9jbhDCFzojKBjqkAQFgKX5leSYCLEP7FxzRF5ylJTyc4jeBSqpbqNB%2BK8cOI4HifSjsuga6fwpvBPFl4v88v7EUt4Qev7mD7XTWQAvppyMwKEy1SkflxRr7yG5mnQabi9S44XkQIYRZUBgEYY2YoJ97WoLl%2FVVyPZ0YKVcxSyLleKMReeudddtJANc3OnaSik4%2F%2F7MIBZt%2F6o9fY2BLyGnHAlDLneokvVpFj%2B1NrWDH&X-Amz-Signature=8447d3b801590612258b5dee0a93423c72e5d9df93d2fc554f740c53032793e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDG2QHP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgxZTLKcuab6S9zLZtD2ecV%2FkQKn%2BRUk8Bh44AFFUVmwIhAILuwEtEoEbt35TqhPNrbga6FGurq%2FF%2BNbNcqF5yMcWGKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8KZwk5qrtFgu%2FYjYq3AOar5LQXbjrwbatsumZMFqBWqlg45gDcI23V54M4uUi66XUhkh%2FiU3xtDUqSAfuT4nSQfXYBLAkMjLM%2F5AonG3u6eRqPRlVsWdfrfmYLvsUeG47gHHFoohz5AeSvg5XXu9IPOOfr4EE5J5yXgNPmy09YtlvqY%2FVlAn0b5l9k4cLMRE0UAuI5n12UXE1dvKFgZH%2Bsi3iNvJ649clPlDnPFapvPocpYFU1bE2MQ8kFQX65i0%2F1BKRwkKv9i%2BkOgJo4m9ts9XYXhG6x4lRSfxI86ul6shCAF8shRGdOkbfdrNoKXDXmWuF0XiiA0mD5J9PRCqLaVdoFe5Sk3Eo7QKgjwWwHeJ9gejmAVoJeoQoA5BkYIdSVsA%2FTJbPXKvN%2B2g9o36dt6eJK699hy9KPJQLURR1T5cXjo6wx%2Bh8TJUAg14f3hhtpZLzj6UT5YHx7HvasYMtq%2BW%2FnH6cPm%2BPi4hWEEszILofsbzydUQU0%2BK3Jgcy%2FTTy3ez5uFLZr6Kb1OEojRVwA3tNqYjXGUXLURpqmvjhUprFitLAM0uY0BGQPYRIBmTPenVAbWcEkGVDJowap9ISQ6Kn1h7%2FbpJUysg8BGXskFEtRyffwgq%2FMI0G7zbsq6dy0PWfVGmPs9jbhDCFzojKBjqkAQFgKX5leSYCLEP7FxzRF5ylJTyc4jeBSqpbqNB%2BK8cOI4HifSjsuga6fwpvBPFl4v88v7EUt4Qev7mD7XTWQAvppyMwKEy1SkflxRr7yG5mnQabi9S44XkQIYRZUBgEYY2YoJ97WoLl%2FVVyPZ0YKVcxSyLleKMReeudddtJANc3OnaSik4%2F%2F7MIBZt%2F6o9fY2BLyGnHAlDLneokvVpFj%2B1NrWDH&X-Amz-Signature=550265a0d54cdef9825fe800edd89ee4da5941b8c5d614c320aecbec80622fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
