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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R76PIFAR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDYj2Gou%2FlpXzAIN7JY2GIU5Hn0vhzZfq9xNygWN%2FxMjwIhAN6MIDIpJ%2B23kT7%2FspYqCa5M0tcIJP2R1kcpIHf3QlG%2FKv8DCD8QABoMNjM3NDIzMTgzODA1IgwgQma5NerYzb9fJacq3APHigD5KQlH1f1xdq0v5AJIAbl%2FBJAUXRWpkqlYlp40ttnJiUrL5QEBiTz02s7esPVFBY6VaZFmKKW%2Bb3AL43dCk0ObOUuh%2BCKKApGzQUy7TXNGS6YIxsgvD%2Fkhyhn7PUlwQwUITQCs9PFg8kmvVOqmgH%2FkRHlAL4aqYbNVkfv7O0pDeXwnj%2FABOr9poEeqaosIL46xqX0H8gNlxREU%2F%2FdkzNdD%2Fj6lMcgDJmlmoDIXuIsKTWl%2BgQX8%2BT3AM8jQpyI1b8fW8uujIrslkszz%2FjTq%2BQ9T8DvRWRDYGG1MCQ%2B1y8AD47uxEVLlgmRIgry37AHzhdmP0LqzG6TgwZ9CRb%2B%2FYdjYD19QN8CkpLsvvrAtQz51wqVBGOsetFcVCuSHpmixVXWmHhxTWUP8Fqy5KDgLid47QzSCaBjwvjPbO8JXFeAPJ%2BQVhegHSzdEiHbEOlhLR%2FlIxyCquWkkJF5QocAZmVGvtmcrJuRhAF2FLjbLNmwp2m%2Fy1fGFjotQtC7JenF5T%2FyBjkrhPDLac4TDh8FVILl8sjzaplqXsNW%2BlcTyCeBhGgU2A0RrV8elLbe9R1t0lqmNG7YcE6Gyl8iCk2zVQnaR%2FyEtD5Z9cGI6fWCCRCAj6lKUAbM0Lj7l7DCIysTJBjqkAWlqN70iAO%2FnFOw4Dsr8h2lCqFOYt9RfeMKTZlw%2FYLz8zwF2DOnh%2BqLLmlZIH%2F3PyYjlsxwIj%2FGC%2FNcEmEUJnXTBO%2BDxXYxTmDClnUdGCiAh1WftSsWZR4gdgruMSbwCrRoSUzAaT6aZze4jJTbnWK3SGrrfRPkUe8UbUcGylHitmD6HBI1yxzysnQVF1kfzge%2F2USb9UD1tQQd6OgfnI%2FhCTuuw&X-Amz-Signature=cad0ed546ec6b0abe19647a4b611b43f3c52468be27a8e286790eb9e7c1d4eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R76PIFAR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDYj2Gou%2FlpXzAIN7JY2GIU5Hn0vhzZfq9xNygWN%2FxMjwIhAN6MIDIpJ%2B23kT7%2FspYqCa5M0tcIJP2R1kcpIHf3QlG%2FKv8DCD8QABoMNjM3NDIzMTgzODA1IgwgQma5NerYzb9fJacq3APHigD5KQlH1f1xdq0v5AJIAbl%2FBJAUXRWpkqlYlp40ttnJiUrL5QEBiTz02s7esPVFBY6VaZFmKKW%2Bb3AL43dCk0ObOUuh%2BCKKApGzQUy7TXNGS6YIxsgvD%2Fkhyhn7PUlwQwUITQCs9PFg8kmvVOqmgH%2FkRHlAL4aqYbNVkfv7O0pDeXwnj%2FABOr9poEeqaosIL46xqX0H8gNlxREU%2F%2FdkzNdD%2Fj6lMcgDJmlmoDIXuIsKTWl%2BgQX8%2BT3AM8jQpyI1b8fW8uujIrslkszz%2FjTq%2BQ9T8DvRWRDYGG1MCQ%2B1y8AD47uxEVLlgmRIgry37AHzhdmP0LqzG6TgwZ9CRb%2B%2FYdjYD19QN8CkpLsvvrAtQz51wqVBGOsetFcVCuSHpmixVXWmHhxTWUP8Fqy5KDgLid47QzSCaBjwvjPbO8JXFeAPJ%2BQVhegHSzdEiHbEOlhLR%2FlIxyCquWkkJF5QocAZmVGvtmcrJuRhAF2FLjbLNmwp2m%2Fy1fGFjotQtC7JenF5T%2FyBjkrhPDLac4TDh8FVILl8sjzaplqXsNW%2BlcTyCeBhGgU2A0RrV8elLbe9R1t0lqmNG7YcE6Gyl8iCk2zVQnaR%2FyEtD5Z9cGI6fWCCRCAj6lKUAbM0Lj7l7DCIysTJBjqkAWlqN70iAO%2FnFOw4Dsr8h2lCqFOYt9RfeMKTZlw%2FYLz8zwF2DOnh%2BqLLmlZIH%2F3PyYjlsxwIj%2FGC%2FNcEmEUJnXTBO%2BDxXYxTmDClnUdGCiAh1WftSsWZR4gdgruMSbwCrRoSUzAaT6aZze4jJTbnWK3SGrrfRPkUe8UbUcGylHitmD6HBI1yxzysnQVF1kfzge%2F2USb9UD1tQQd6OgfnI%2FhCTuuw&X-Amz-Signature=8032855dcc72a4e4b579e04710d42e6f128dd879ba7ab66747b55052fbd5db8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
