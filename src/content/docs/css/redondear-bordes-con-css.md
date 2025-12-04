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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYFZAGE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIElXKa1Jd%2BqgW23fZtnryeWjU6bZaLnYS5hWo%2F6R%2BgoDAiEA9EIGUXe098LVHguRj1gBzhbKnAC4AF3GGR6EDkivUhMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAn4%2F8SC4frC5agksCrcAxuT%2BeHcm9w9v2d1q6tjEmZUTF%2Bm4GSulb2tUWNBlOOs7PFmL3rW04i%2B1z8cDSWEd5gBb1dp%2FtRlJMemyFIrVKB0DWgSEJl74BQcsoCwsUDf9O1VRFCr%2BGKgadySp4mYAgGowz%2FMX%2BRS2t93ChVPLRnOYg4Vc%2FSjDd%2BkLjGQuoMm1w%2B5%2F8ZR4pxUBedLwvXDClBxs6ggewhQT%2F7E5vFvDyq0bFJQ24vt%2FDPpsJLIu86807yXauUKzr9bjJxllaTwWF1iJ%2FKkfRPEt4ZwLahWzXfxBRuYPaaBMgWi%2FudtvM9Cp5vVZma%2F8KP6OM8U2fU6%2BIwLE%2BJ6DyrWXlAXWd2dzfd8YhibYUQ5t7nCW8JxRrA2%2BQWVg9vArNgE4M1eDiOQkgkbKvO2plI6vob6ZrRLsbBbBy3jlFH0oAyGs%2BYNCb4ltmx5L5YCcXblRYyos331dXxlk3mFOF8gGlzWK%2F8Ys4Wi3cIzvKpfKrntMapX%2BwcP%2FspUG%2FnqzFmQYoh5Al0UWS8Yqy856Xwm3bu761%2BAYNaLZVrJjhdXzQGoOa%2FLQtCQ%2Bw%2B3NlerezofSj9pEG7IL%2FI67Uv6wMV7joVgniTdGikgUJG5V7q%2By6bTt4h0SnhEwLhuPeqYjVNrwTyvMPjUw8kGOqUBhvfSe%2FE4t%2BS1CHdNIzuaIe5cnxzmu7eUXy%2FyPfB6SaEvpiCj52877l%2FajfKiHBhea6JH%2Fa9YT3SXR8Z3mqIW6%2FC0%2BGfgmKRv7YGK9T%2BnlDX%2BAUb%2FGmUskLHg9YmdAZ%2FqjoewAjzMReoyafRlmcpstQmo3t5fvNNevt%2BhD0oGDimZj2qwb1XGa2vm1dC45rtTZX%2BmOcdfEk0SKQBZOq%2BPqSq9VecY&X-Amz-Signature=8bf12487b66aa2342001fa3c3dcdd752b898079efbcd94d2856dd44b8ccceb5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYFZAGE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIElXKa1Jd%2BqgW23fZtnryeWjU6bZaLnYS5hWo%2F6R%2BgoDAiEA9EIGUXe098LVHguRj1gBzhbKnAC4AF3GGR6EDkivUhMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAn4%2F8SC4frC5agksCrcAxuT%2BeHcm9w9v2d1q6tjEmZUTF%2Bm4GSulb2tUWNBlOOs7PFmL3rW04i%2B1z8cDSWEd5gBb1dp%2FtRlJMemyFIrVKB0DWgSEJl74BQcsoCwsUDf9O1VRFCr%2BGKgadySp4mYAgGowz%2FMX%2BRS2t93ChVPLRnOYg4Vc%2FSjDd%2BkLjGQuoMm1w%2B5%2F8ZR4pxUBedLwvXDClBxs6ggewhQT%2F7E5vFvDyq0bFJQ24vt%2FDPpsJLIu86807yXauUKzr9bjJxllaTwWF1iJ%2FKkfRPEt4ZwLahWzXfxBRuYPaaBMgWi%2FudtvM9Cp5vVZma%2F8KP6OM8U2fU6%2BIwLE%2BJ6DyrWXlAXWd2dzfd8YhibYUQ5t7nCW8JxRrA2%2BQWVg9vArNgE4M1eDiOQkgkbKvO2plI6vob6ZrRLsbBbBy3jlFH0oAyGs%2BYNCb4ltmx5L5YCcXblRYyos331dXxlk3mFOF8gGlzWK%2F8Ys4Wi3cIzvKpfKrntMapX%2BwcP%2FspUG%2FnqzFmQYoh5Al0UWS8Yqy856Xwm3bu761%2BAYNaLZVrJjhdXzQGoOa%2FLQtCQ%2Bw%2B3NlerezofSj9pEG7IL%2FI67Uv6wMV7joVgniTdGikgUJG5V7q%2By6bTt4h0SnhEwLhuPeqYjVNrwTyvMPjUw8kGOqUBhvfSe%2FE4t%2BS1CHdNIzuaIe5cnxzmu7eUXy%2FyPfB6SaEvpiCj52877l%2FajfKiHBhea6JH%2Fa9YT3SXR8Z3mqIW6%2FC0%2BGfgmKRv7YGK9T%2BnlDX%2BAUb%2FGmUskLHg9YmdAZ%2FqjoewAjzMReoyafRlmcpstQmo3t5fvNNevt%2BhD0oGDimZj2qwb1XGa2vm1dC45rtTZX%2BmOcdfEk0SKQBZOq%2BPqSq9VecY&X-Amz-Signature=5405e93917ac5eacc8f9793d0d23787506890209278b8402e720cc9a459bf101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
