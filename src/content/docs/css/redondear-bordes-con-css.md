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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUX3GJOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoAqgu%2Bxevc%2Fk9ORYkzk0uTdnYRP2bkNHTBIqkWg%2BzyAiAJv2xzI0T1PXFerSV1t6zP20681EVH3nWiYnGJpqYoAyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzOakcWH%2FLzdmtYy2KtwDWNBXWEoaBmArFTajw1XuhXG1Okka1ibAK7u2JVFDyvg9w9Hm4DEl3QS%2B5t8Oi8gknbR8izQ0ED%2BG4mRQvremvAdABbb0TCOAxrvdF3qi730S%2Fi3ADCjmVdNR8wiA7zPN7kTZc1%2B8gWOtPABX3d6srHohVs%2FHuHjgijmHDPoO0tm2HsgDc5UkpyWX03QihdyreEDQ07obzHADyETC%2FFuAbFhU9Q%2B%2F5NHWDxNPX6XP4rbhRKVzqbBiCAUzhPMFLadryso8adaU6CuC7ura1yA7wqRI7x4%2BjemTtiPqG3e1kBHW%2FcnvcGg3pKaqKj878Po09X8zVFtRk0PnludSYr2LfbWSicxIjcm7jcpDILy7NE3%2BUFKqALmUbI7buLSzuileriLsKcVeyz%2BtLNz2cReuLG5xA%2FD1jMYvogaYRhOr5hZjgNBG0QSSezmrZw3AN26YFUnaKiYPfK3zfOS2uoPkmp6SxgTTHZLFPq3hOJBJgkwf3RIaDgQWa9e%2FOKup7W5iED0rNOBjCtQ2MEKLVhxkroiDBgv7TGI7abf4HOxUE2a0fzs5BYMy0QPORydYG1VJpq%2Fh9X4gP3jL3SWo5boBwRtdEKr0bLpGEVcmYbF3vPuEyzXRI4gdUp8o4I4wwKHYyQY6pgGEZJ%2Bl2JRTJ%2Br4fPC8jXbFum%2FrjBDxuauOUOy0XKsP8ABgv%2F0tMG5%2FXlSbxn88KqhCcvzXu8n69d7KGrHWWMfOztbwTUSEZGD48ySJ7clDPuPMEVo%2BGj7wNjiEo0BNNYdLxXUGyRotF6U4PfxEUCGnViMP5YZzEUgD2GxqvXz564n89rHpgcYqDa0cvRAF2CWDS47ri57PqYK54%2BSBuA1%2FsLt4aR2q&X-Amz-Signature=ad58e9ae9fc274eb650c0baa201c223b31129c31180d0c40d6328fc247910e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUX3GJOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoAqgu%2Bxevc%2Fk9ORYkzk0uTdnYRP2bkNHTBIqkWg%2BzyAiAJv2xzI0T1PXFerSV1t6zP20681EVH3nWiYnGJpqYoAyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzOakcWH%2FLzdmtYy2KtwDWNBXWEoaBmArFTajw1XuhXG1Okka1ibAK7u2JVFDyvg9w9Hm4DEl3QS%2B5t8Oi8gknbR8izQ0ED%2BG4mRQvremvAdABbb0TCOAxrvdF3qi730S%2Fi3ADCjmVdNR8wiA7zPN7kTZc1%2B8gWOtPABX3d6srHohVs%2FHuHjgijmHDPoO0tm2HsgDc5UkpyWX03QihdyreEDQ07obzHADyETC%2FFuAbFhU9Q%2B%2F5NHWDxNPX6XP4rbhRKVzqbBiCAUzhPMFLadryso8adaU6CuC7ura1yA7wqRI7x4%2BjemTtiPqG3e1kBHW%2FcnvcGg3pKaqKj878Po09X8zVFtRk0PnludSYr2LfbWSicxIjcm7jcpDILy7NE3%2BUFKqALmUbI7buLSzuileriLsKcVeyz%2BtLNz2cReuLG5xA%2FD1jMYvogaYRhOr5hZjgNBG0QSSezmrZw3AN26YFUnaKiYPfK3zfOS2uoPkmp6SxgTTHZLFPq3hOJBJgkwf3RIaDgQWa9e%2FOKup7W5iED0rNOBjCtQ2MEKLVhxkroiDBgv7TGI7abf4HOxUE2a0fzs5BYMy0QPORydYG1VJpq%2Fh9X4gP3jL3SWo5boBwRtdEKr0bLpGEVcmYbF3vPuEyzXRI4gdUp8o4I4wwKHYyQY6pgGEZJ%2Bl2JRTJ%2Br4fPC8jXbFum%2FrjBDxuauOUOy0XKsP8ABgv%2F0tMG5%2FXlSbxn88KqhCcvzXu8n69d7KGrHWWMfOztbwTUSEZGD48ySJ7clDPuPMEVo%2BGj7wNjiEo0BNNYdLxXUGyRotF6U4PfxEUCGnViMP5YZzEUgD2GxqvXz564n89rHpgcYqDa0cvRAF2CWDS47ri57PqYK54%2BSBuA1%2FsLt4aR2q&X-Amz-Signature=ccc663271fd0b7b645834c1e85c31487fffd5b06a40aa365017b29e7359be22e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
