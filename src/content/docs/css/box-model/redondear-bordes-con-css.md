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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF3K5LPN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA909m3zNtX%2BLwsGw8OJ1exS%2FLNqORJQjH9Tdl6pcRhAiEA%2FfNWXVkpJ7VftdF7rhwNA6x3PMkmuGHjGHi9zTIZ9FYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIavcAUMpTwalAennyrcA8lfFeOiyLaPIVJ7rucxYeFRLs1TvcXfgVbMaJsLt%2FH5Sp%2F5cRU4palSyuoH4oVgp6BwZHM4%2Fa9VOOKdkgQ3qTUMKlAkna1NmAztcRsDT%2BLCm%2FNs0wJXSTuw2buU1398pwJgb%2FUrYQ0yhdEpF9GVIQwbeAniYhFzZd9CCSnJA7oQdbBau0lEnsoIyvAAF56yILa9Awpd7gvwb65F%2BBPJoK4XjEaQpQdozOSpP1UXXIStBXDQynf0hehykMjYHjY5jjs8ewRCvO8qMX%2FBYzV0Fiq25itILmwodlsiVnsJ7ikzGPq6Yb9arJqqjz7IDYI3tIpF2m7akRY6NJGdznXRdnwnzBE4AvsrnzAxUBeAcTM21vWiT9iemoP6qGXR%2FBLhFjAgqj6cmeqBrkpG3M1Lv94%2BvGoY2%2FbifJcu%2BZOGYujx%2Fzj13WZEs5mqE03cosDKUV%2Bae%2Bp6XLMJMzLkCpCU7V6ssZtspTD8d2fXDVOZQ5gZIoiTB5EqHnYAAEmrrXLlP4RiHn52u096PlxEpwPjmuhyXbWx0Du77PLyCOAmoSUjo1XrItQ3PtBBNjCFD6%2FhulaFBbITR4A2DSTQoy2ZCgngoB8PUVeL8rvqd0Njf7Cb933ZXLNDSB28ZfUTMLedicoGOqUBEQ%2Fle2VQe3lJHmXdCayM1wJDZI5arjcSa0E8sELmNe8J6rjYmGYS3IevUOcYuYQleZaXs7WRxaNj08uYBO7QWnZYlOlII912B%2FQgEVjt%2Bh3GukjDCVTXAClMZs3hjKPXb%2BnyaNTKp5G%2FsdLjjoVqbiokCSLIgE%2BzmRZI6fEOtHz8u12CE1doY44n%2BjMy6LqB%2FzrLIVxwmK0HaDBB4bs5MY%2FVQ2An&X-Amz-Signature=6ae564257829fe61f9a76527d72dd8406e83ce71af809e76a7de6ba287f8d0db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF3K5LPN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA909m3zNtX%2BLwsGw8OJ1exS%2FLNqORJQjH9Tdl6pcRhAiEA%2FfNWXVkpJ7VftdF7rhwNA6x3PMkmuGHjGHi9zTIZ9FYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIavcAUMpTwalAennyrcA8lfFeOiyLaPIVJ7rucxYeFRLs1TvcXfgVbMaJsLt%2FH5Sp%2F5cRU4palSyuoH4oVgp6BwZHM4%2Fa9VOOKdkgQ3qTUMKlAkna1NmAztcRsDT%2BLCm%2FNs0wJXSTuw2buU1398pwJgb%2FUrYQ0yhdEpF9GVIQwbeAniYhFzZd9CCSnJA7oQdbBau0lEnsoIyvAAF56yILa9Awpd7gvwb65F%2BBPJoK4XjEaQpQdozOSpP1UXXIStBXDQynf0hehykMjYHjY5jjs8ewRCvO8qMX%2FBYzV0Fiq25itILmwodlsiVnsJ7ikzGPq6Yb9arJqqjz7IDYI3tIpF2m7akRY6NJGdznXRdnwnzBE4AvsrnzAxUBeAcTM21vWiT9iemoP6qGXR%2FBLhFjAgqj6cmeqBrkpG3M1Lv94%2BvGoY2%2FbifJcu%2BZOGYujx%2Fzj13WZEs5mqE03cosDKUV%2Bae%2Bp6XLMJMzLkCpCU7V6ssZtspTD8d2fXDVOZQ5gZIoiTB5EqHnYAAEmrrXLlP4RiHn52u096PlxEpwPjmuhyXbWx0Du77PLyCOAmoSUjo1XrItQ3PtBBNjCFD6%2FhulaFBbITR4A2DSTQoy2ZCgngoB8PUVeL8rvqd0Njf7Cb933ZXLNDSB28ZfUTMLedicoGOqUBEQ%2Fle2VQe3lJHmXdCayM1wJDZI5arjcSa0E8sELmNe8J6rjYmGYS3IevUOcYuYQleZaXs7WRxaNj08uYBO7QWnZYlOlII912B%2FQgEVjt%2Bh3GukjDCVTXAClMZs3hjKPXb%2BnyaNTKp5G%2FsdLjjoVqbiokCSLIgE%2BzmRZI6fEOtHz8u12CE1doY44n%2BjMy6LqB%2FzrLIVxwmK0HaDBB4bs5MY%2FVQ2An&X-Amz-Signature=ca9000f58e8dcc28c8b9cb29cbfb86acb7bc6e0a3cbfbe49e09dabc3a4b06c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
