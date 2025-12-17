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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYJ52DW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsF1cru06V4%2BtqxnJILiMrZLdBrGK6MfAEVn2HQmdn4AIhAJXto0YTiQDZHlfSKJ5l1TH4gaXMFZ5cHFkPrls9qLD6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLkHvSCHetZwpzfucq3AMtKGxbrjUiT9LV%2F93aeyw%2FYmAQzd%2Fx2AwkhJCGYXMqd6THcuHhqHKh%2F96gyvLI5aM70nA1i1Hu7Q8ARs%2B94HQEDbioqmEG%2FgXXnLzfBBl8QVivkaTAt1lAFCipaJaYwf54WoItrTPJi%2BNyavan2%2B2%2Fkotp%2BKAzEeWmoKvcOIdXQkX45eV%2BieZ8f5J4ZzfdC%2FJ9Y3yu0fBDNijplfzFUr2IsNyOr9SEZc9ZTZyJpuzMFLCGW6TcJgdhNaW51QHaFJYawBU%2Bsr0mpTGxS1rpNZLEtWNaHI%2F2C6K4qs12I7OJnHeXt7uacybUhhN01A7xKoNqVuImWEwa2RFKdmzED4GPmEFGeUdwH69nuFZn44GtFyhdfNH8ZSbzY0n6wfG22eqzyYD7iFZD2o4LqNlzvnk8mu%2FQ3GzZTFRWX5TpY0aaKoYhSIGIqiU%2F9DNO292M4r7iA1p3h3QVKoJlF6CXJioVCKPMbV1TOUWEmoNYjnBJEzmfALxgccVdY7tvLBSQtatBFqxRUWjwonx7Yp1wQg6OHSW15Hfv29tPn%2B%2F87QrYfJWYEETQP7WdQ7hq467jomnbR6PlGHdCdjuKhVEI6NKwY7RUSGh51g1WI913Tv4cMuJvRi70YhZmjj4D8zCZn4vKBjqkAevH2KrOsCvP0pfV2FFQXAjPOwi3dXghpoxkj8wbT7rBjiRix9Jy9TTGp1PiaWKVAG52QgEBKRko6aJITt1t%2FQauitGEYrqgLYx1W1ruNJLOrHyGtIOipDPIykcF%2Br3sBMgvaAvAEe%2F0d2wLpecQFdZiuBaXY51y94bO1ZUEVjOCaOiz6Fr%2F5ErVG%2F0bWxhkFyXzmGLYkVDOJ7TBJziffGaqbn%2Bw&X-Amz-Signature=ef0f0378e9d6b8236aa80608cbc2fa34c73b098e859b7cfe9461adc0a38ca191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYJ52DW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsF1cru06V4%2BtqxnJILiMrZLdBrGK6MfAEVn2HQmdn4AIhAJXto0YTiQDZHlfSKJ5l1TH4gaXMFZ5cHFkPrls9qLD6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLkHvSCHetZwpzfucq3AMtKGxbrjUiT9LV%2F93aeyw%2FYmAQzd%2Fx2AwkhJCGYXMqd6THcuHhqHKh%2F96gyvLI5aM70nA1i1Hu7Q8ARs%2B94HQEDbioqmEG%2FgXXnLzfBBl8QVivkaTAt1lAFCipaJaYwf54WoItrTPJi%2BNyavan2%2B2%2Fkotp%2BKAzEeWmoKvcOIdXQkX45eV%2BieZ8f5J4ZzfdC%2FJ9Y3yu0fBDNijplfzFUr2IsNyOr9SEZc9ZTZyJpuzMFLCGW6TcJgdhNaW51QHaFJYawBU%2Bsr0mpTGxS1rpNZLEtWNaHI%2F2C6K4qs12I7OJnHeXt7uacybUhhN01A7xKoNqVuImWEwa2RFKdmzED4GPmEFGeUdwH69nuFZn44GtFyhdfNH8ZSbzY0n6wfG22eqzyYD7iFZD2o4LqNlzvnk8mu%2FQ3GzZTFRWX5TpY0aaKoYhSIGIqiU%2F9DNO292M4r7iA1p3h3QVKoJlF6CXJioVCKPMbV1TOUWEmoNYjnBJEzmfALxgccVdY7tvLBSQtatBFqxRUWjwonx7Yp1wQg6OHSW15Hfv29tPn%2B%2F87QrYfJWYEETQP7WdQ7hq467jomnbR6PlGHdCdjuKhVEI6NKwY7RUSGh51g1WI913Tv4cMuJvRi70YhZmjj4D8zCZn4vKBjqkAevH2KrOsCvP0pfV2FFQXAjPOwi3dXghpoxkj8wbT7rBjiRix9Jy9TTGp1PiaWKVAG52QgEBKRko6aJITt1t%2FQauitGEYrqgLYx1W1ruNJLOrHyGtIOipDPIykcF%2Br3sBMgvaAvAEe%2F0d2wLpecQFdZiuBaXY51y94bO1ZUEVjOCaOiz6Fr%2F5ErVG%2F0bWxhkFyXzmGLYkVDOJ7TBJziffGaqbn%2Bw&X-Amz-Signature=859188fc85e866b333002fa1aeb99361cac53727770638b1f66f3c4ee1bd49c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
