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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQARFIR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYHcddaSqClla5qtpHO5iIPkJzTe0p5apeM1r9Un6niAIgfR0NrN%2BsVDTaNsJ2eSfe2xhAC64CRBgdFfZSDF7pAQ0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtneOzVq6EKPIYi%2BCrcA7%2Fyacjbn3p9PQoOhRdUQNHutXhC%2F5wb0LyrOFL%2BFWjCdfzSHlZ%2FN7KrvwAlX7RF%2F65E06JSnGykAvW06Fd7BdQiwvPZ3lzQAhqjqDzsUXkGzEYiOa73nC6mKjLUweCYx0RNfzyu8iGRJ5jmQa4UIIi2OVsOrmMGjoJ4G8XB7JJs0oX2GS6JiI77HPC6TA4%2FukOVJd%2BnWGI02zr4UzRvsHmXUv4DmuJoMrBVPi0Ddei3v5Vr6Y7ooUXCwLac%2BkCo0MOykJf0dR5kpSxHScu05WG3pWVW0VWdWyeJykWtvUCC9U%2FYziXwaYBlKF4p244KBJX280d7ORsqlcPEqg30DFto4d3tByURAe5wCP8qtYC8mHBKj7iMvnBrhzZkF8fT6bSpuE0XPTBSskaZFtTDq%2Bul3dpxufaN%2FBBtFzEgPulyDQr%2BgXAyDh8BR6WV4MQwXv5dMg4%2FuRTSh4nwvRqzp9raVVcvD2DA39hxgUu6zj9uePtiVhdqiEISAdoTBLfwuK%2BVDUzqvkMTAFXmAhcIQ4C8YUvx8OYIr9VXTwEoeL6twWs1KuwN4x%2F1%2Bn8%2BIiybMXpeICzJigNs0VL8yePrKSW7o6NaaJOYLprx%2BVyvvPTCyTtWz246GDRCg6ScMIHt2ckGOqUBVSBxvu4r2IqSQMcuprfxXTjqCCUP4S%2BzlFx1V3UpfEtdIxlRsyLt9Z7DGYxZa2ykb5lYqRvqFVQoOA2QenqBQy5muDY5PRQKXjdP69Zh2qLgALx%2FNYo1r7ohADJokyIFhEFx%2BeSL3g90FJi%2FZNpaPEzH3McV5kzeW7egKIO%2Bo%2FoREvCL%2B2HoTmIW%2F2IdpoTFyfEkVEiY8ngTH%2FnJRw68JYdApew4&X-Amz-Signature=e0ebeff5b4156a5b7342c21f9320730d3bc8865550b37770c392df639e43149c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQARFIR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYHcddaSqClla5qtpHO5iIPkJzTe0p5apeM1r9Un6niAIgfR0NrN%2BsVDTaNsJ2eSfe2xhAC64CRBgdFfZSDF7pAQ0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtneOzVq6EKPIYi%2BCrcA7%2Fyacjbn3p9PQoOhRdUQNHutXhC%2F5wb0LyrOFL%2BFWjCdfzSHlZ%2FN7KrvwAlX7RF%2F65E06JSnGykAvW06Fd7BdQiwvPZ3lzQAhqjqDzsUXkGzEYiOa73nC6mKjLUweCYx0RNfzyu8iGRJ5jmQa4UIIi2OVsOrmMGjoJ4G8XB7JJs0oX2GS6JiI77HPC6TA4%2FukOVJd%2BnWGI02zr4UzRvsHmXUv4DmuJoMrBVPi0Ddei3v5Vr6Y7ooUXCwLac%2BkCo0MOykJf0dR5kpSxHScu05WG3pWVW0VWdWyeJykWtvUCC9U%2FYziXwaYBlKF4p244KBJX280d7ORsqlcPEqg30DFto4d3tByURAe5wCP8qtYC8mHBKj7iMvnBrhzZkF8fT6bSpuE0XPTBSskaZFtTDq%2Bul3dpxufaN%2FBBtFzEgPulyDQr%2BgXAyDh8BR6WV4MQwXv5dMg4%2FuRTSh4nwvRqzp9raVVcvD2DA39hxgUu6zj9uePtiVhdqiEISAdoTBLfwuK%2BVDUzqvkMTAFXmAhcIQ4C8YUvx8OYIr9VXTwEoeL6twWs1KuwN4x%2F1%2Bn8%2BIiybMXpeICzJigNs0VL8yePrKSW7o6NaaJOYLprx%2BVyvvPTCyTtWz246GDRCg6ScMIHt2ckGOqUBVSBxvu4r2IqSQMcuprfxXTjqCCUP4S%2BzlFx1V3UpfEtdIxlRsyLt9Z7DGYxZa2ykb5lYqRvqFVQoOA2QenqBQy5muDY5PRQKXjdP69Zh2qLgALx%2FNYo1r7ohADJokyIFhEFx%2BeSL3g90FJi%2FZNpaPEzH3McV5kzeW7egKIO%2Bo%2FoREvCL%2B2HoTmIW%2F2IdpoTFyfEkVEiY8ngTH%2FnJRw68JYdApew4&X-Amz-Signature=bb6a1e237b5cb7263dbe64c089daa4a49f683cd7cccfbf5d55c3a0f916b61785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
