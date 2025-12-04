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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6YWKFB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIF2OqRGc6ivzbCJ1bbXDMAZSxOYyY1xnbliIK%2F1niwePAiEAkfQElzTz5SgTwjz967n8CrsCuP68dpQgigXb0VEIfAgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDETrlSnG2FsVrNWTRCrcA6LFaQBpk%2B8VBXVDabzI0MW1eIKrfZn8XtAQF37q87SI8ZPKa125HleBlEjjmyDITnW%2FiGh5O7N9I5N2HuaWYyJrk6We50wO5u7xOPPpU0agdUHNNxtIEfiB%2B66eKNN0xt4Hvq%2BWRIWa5Z6cQCktLyqR6PDA1XQNjNuMaG63yzLKGkP33jq45S063ZBxFmH2aT0BmrmU56eNHcZq9gMWN1YzJt7x3OZrx%2BBIQXobj%2Bt72hwcNKXiG8EXjSizdysjuX%2FhkmBPL5SuA5lz4rF0YrRUgj4hOIZGQlmQXWZmvaUxvxOmUs7JoWQUSXullfxyjBX0uJJLrr%2Fg7CQcmHmOwE1JeJW2GkC5KWmpPtKTCx2BHmKRP9jcaLnsg4PbdZ7gElnJ8EwXtbvLMLLnlQFGYVNI2jshne1uANdYzAX7om2AGRP%2BVWuJO0WQWUwoW3s25XetaT4Nk9l5Usz0JD6Nm27p%2B2896%2BdNY3QPDyXYXg3xzQV%2FveF%2Bp9c%2BUDDkfMPXeenQjThMm9ElhdbTUSKWZdWNhmb66%2BLliPVhaqpeL32EXjMrs1ZNd2MSaB06%2BdACoUlyIXAoQRqHSL1sTO09TPKQbaGrPu8fXDA68TTEz2xaLP9jQ%2FGhXKKXfmBhMKWExskGOqUBYUi1WgyGluSqLDy0bOYbjiDyNAeskm5Oy3sdu8r96XxD5SUsCVchOfsrU9Xlt%2FNcOdhZ%2BJXw7uDi2grdnB6kqt3XLPx3mzjD8RFQ24GaAzekmRljv%2FHljRNbQevwuGmZvlb1GA09S2oH931gMpyAyRu2kZYLwS2udw4MSzOMaT2lvRgqLZ2SZZVn5VmRLvQa9apbLL3hO53jJcUtn7tiAq0JkPnT&X-Amz-Signature=448297bded00b83b16cf17b7a917e73f093e4b474fba8a17fbc778729a3ea5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6YWKFB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIF2OqRGc6ivzbCJ1bbXDMAZSxOYyY1xnbliIK%2F1niwePAiEAkfQElzTz5SgTwjz967n8CrsCuP68dpQgigXb0VEIfAgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDETrlSnG2FsVrNWTRCrcA6LFaQBpk%2B8VBXVDabzI0MW1eIKrfZn8XtAQF37q87SI8ZPKa125HleBlEjjmyDITnW%2FiGh5O7N9I5N2HuaWYyJrk6We50wO5u7xOPPpU0agdUHNNxtIEfiB%2B66eKNN0xt4Hvq%2BWRIWa5Z6cQCktLyqR6PDA1XQNjNuMaG63yzLKGkP33jq45S063ZBxFmH2aT0BmrmU56eNHcZq9gMWN1YzJt7x3OZrx%2BBIQXobj%2Bt72hwcNKXiG8EXjSizdysjuX%2FhkmBPL5SuA5lz4rF0YrRUgj4hOIZGQlmQXWZmvaUxvxOmUs7JoWQUSXullfxyjBX0uJJLrr%2Fg7CQcmHmOwE1JeJW2GkC5KWmpPtKTCx2BHmKRP9jcaLnsg4PbdZ7gElnJ8EwXtbvLMLLnlQFGYVNI2jshne1uANdYzAX7om2AGRP%2BVWuJO0WQWUwoW3s25XetaT4Nk9l5Usz0JD6Nm27p%2B2896%2BdNY3QPDyXYXg3xzQV%2FveF%2Bp9c%2BUDDkfMPXeenQjThMm9ElhdbTUSKWZdWNhmb66%2BLliPVhaqpeL32EXjMrs1ZNd2MSaB06%2BdACoUlyIXAoQRqHSL1sTO09TPKQbaGrPu8fXDA68TTEz2xaLP9jQ%2FGhXKKXfmBhMKWExskGOqUBYUi1WgyGluSqLDy0bOYbjiDyNAeskm5Oy3sdu8r96XxD5SUsCVchOfsrU9Xlt%2FNcOdhZ%2BJXw7uDi2grdnB6kqt3XLPx3mzjD8RFQ24GaAzekmRljv%2FHljRNbQevwuGmZvlb1GA09S2oH931gMpyAyRu2kZYLwS2udw4MSzOMaT2lvRgqLZ2SZZVn5VmRLvQa9apbLL3hO53jJcUtn7tiAq0JkPnT&X-Amz-Signature=fd8dd023baf2b32cfab6875ccd03ea04e7d8efa094aac853c5b16e7ca6f123ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
