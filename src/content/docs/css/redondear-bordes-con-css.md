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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPKTVPC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEpHDqSupJAJE1fGfpJQJRL88tGamxh%2B6%2B3q4GsKJu8wIhAMf9zbxN3LDW3zh4dUR78vILeniuWpYUZSqMntCrUmqpKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4NzTR%2F%2FHg78pLppIq3ANOGGqjKAWdIawisvShe32GmOZ58mJ8YbFNaWFVrRFkl%2F8S0lVZRXcFkZ4hyNIzVs4GRtVtnfmbkHbrP6TnYcC7wyMmxlP%2BkmAN5RagQ3UCIiNUBLkfRyj24l94pru81cy59i3i4OadR0KXxg6AlkXynd4zSR6NrFpEpOIbL9y5C2KTL2BbZZFtYjXSYxTi%2FjFxjnwLiZasJFT1dDQLkXUTEp6EMRvK7MSlwXCfGBsMmIaPFd0%2FQLqqN0WM%2FmnPyvDqV4h1t3vAoN1Y2tJSeq6lSGto11LKUaJRQ4n2tzlOO%2B%2FQiPXZ%2FhaUrB6CkHoOPlZkoHKUCpaiYLKls4fGQukQeWVFKJ1MM%2FD%2BK%2BTkzpXRXOPUlLNQP%2B4GuMQoxrYCpglS5V4sawO4F8Ba10d0rSGgZPSVCCtonggiMz3M9HhptQepuD%2BBIzTVu7H81i4ogB7vG5Wf1rih3CebTzbXTZk9J8Cvn95tPvqoXwrWiaI%2FtnGaSZINzzJTHnTKNwew7vuReo1jShozIFoXiWJhvhU4ded5ndsqbgVBwwJoXVdUjLyf5FnfyMnKfwaaxz%2BotUzx79Dy6eyyQFflxg%2BfyCc2%2BwnEFZlBfIWtiSuT1NVoIXrLDCZ8BIeWUvccvzDzlNnJBjqkAVrJ4p1LfAND%2F5naJMF%2BGB3r1uFAcEYhvLNGOoAE9w1111Mbo5M2oET3fAyg4GbQRfxfyNrwfpwyi6xZWjY%2BTjAEzC2ISFpishaSak5aZ7b%2BEPPBwaKyq0JN8Xrf9USijCRQfcPP8d2eLHA7W2QDztmZplmm5CfdXIPOU2F94Swl0Byh8mbsKkWme18F0HT7S38lfwh%2FAjkrzsE3pv9T8hQL2rV3&X-Amz-Signature=97ce350ebc60ae0b5a9a4b46ed945a8f8cd26a4e64fa0082af2f79fca92d05ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPKTVPC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEpHDqSupJAJE1fGfpJQJRL88tGamxh%2B6%2B3q4GsKJu8wIhAMf9zbxN3LDW3zh4dUR78vILeniuWpYUZSqMntCrUmqpKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4NzTR%2F%2FHg78pLppIq3ANOGGqjKAWdIawisvShe32GmOZ58mJ8YbFNaWFVrRFkl%2F8S0lVZRXcFkZ4hyNIzVs4GRtVtnfmbkHbrP6TnYcC7wyMmxlP%2BkmAN5RagQ3UCIiNUBLkfRyj24l94pru81cy59i3i4OadR0KXxg6AlkXynd4zSR6NrFpEpOIbL9y5C2KTL2BbZZFtYjXSYxTi%2FjFxjnwLiZasJFT1dDQLkXUTEp6EMRvK7MSlwXCfGBsMmIaPFd0%2FQLqqN0WM%2FmnPyvDqV4h1t3vAoN1Y2tJSeq6lSGto11LKUaJRQ4n2tzlOO%2B%2FQiPXZ%2FhaUrB6CkHoOPlZkoHKUCpaiYLKls4fGQukQeWVFKJ1MM%2FD%2BK%2BTkzpXRXOPUlLNQP%2B4GuMQoxrYCpglS5V4sawO4F8Ba10d0rSGgZPSVCCtonggiMz3M9HhptQepuD%2BBIzTVu7H81i4ogB7vG5Wf1rih3CebTzbXTZk9J8Cvn95tPvqoXwrWiaI%2FtnGaSZINzzJTHnTKNwew7vuReo1jShozIFoXiWJhvhU4ded5ndsqbgVBwwJoXVdUjLyf5FnfyMnKfwaaxz%2BotUzx79Dy6eyyQFflxg%2BfyCc2%2BwnEFZlBfIWtiSuT1NVoIXrLDCZ8BIeWUvccvzDzlNnJBjqkAVrJ4p1LfAND%2F5naJMF%2BGB3r1uFAcEYhvLNGOoAE9w1111Mbo5M2oET3fAyg4GbQRfxfyNrwfpwyi6xZWjY%2BTjAEzC2ISFpishaSak5aZ7b%2BEPPBwaKyq0JN8Xrf9USijCRQfcPP8d2eLHA7W2QDztmZplmm5CfdXIPOU2F94Swl0Byh8mbsKkWme18F0HT7S38lfwh%2FAjkrzsE3pv9T8hQL2rV3&X-Amz-Signature=d6c146e0d809be6d3d4bddb5fdd5ccb28da9953ca018ef8554ee7aa0d719351f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
