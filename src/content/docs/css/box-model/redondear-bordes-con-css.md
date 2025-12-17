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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSUFUTX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUh3oNJw66cO6wJDvWDlRR54KJV72tak0gAB%2B7RVZ75AiEAunp8wh3RYbCjL9f4PezFenBu1FXFTH9B44r879%2B%2FHREqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQpjfFV5zWnglBUnSrcAy3NoboutY2a%2BhqIegvMhP7xLyQrvTgeqzzBb%2BVp9CFwrRrhpM%2BQjK%2BL79gUvfwtP1UfFl%2B%2FQtNt1TgrmX1pGzHvMuHaONMSYCavca706M%2FlYu7P3VdADmEL9D8dw%2FG9KGMT7g7wEs3Jk462OWYfoVJt%2BEOGpTCYfl3dkxn4uOnbqPrG7CC%2BO26Ky1I9o%2BVWbZcN%2FV3bv%2F78HZKWtoHmHRJZgi5L5joOJCxOpxWb%2FQQBY%2FPZcse4rZfUZ3cqqcYwdl3b3XZnXnrqFgyAo65vhtsUqceG2xLoaKYq5R0De4YiGhv8Sd%2FsMqy7Wrlu7BvLgygVa1ry5f8bl29jnoIHgCRuSG64Yb0XWM%2BhseW%2FfukabiQnZRsJN3eH%2BZvtr9pXEGmI8WWL1F9KpJIYId0saKM3uS6IjbKivlwJTZmX9gJqSd0gvsj4pzow7Kx53fMGWgAM7d2BqqU0ck%2BmeWGvVoA%2FAqNBU%2F3o6KH3BhG1d%2F6t6IzVtZqUPG3GPpZvIhzursYI1wrb3avXD5juTz6EwDRQwcETyyzLk0TE05dhnZOjC43EyZXPXu7MkztdMn0URpxVwi2vbUSQug5XQ76QMv2Uj3aIGqEKl5yEAcuFLU%2FnItq8ALN8lhWnz3ISMMygi8oGOqUBATjhtivHPNJANaAIPOLwETEWNi7qG7Wfye6tJacZeH1%2F8xelDSHW7vkRoh%2BMCDDb%2FDm0Q3qHyVWDhx1x9YovS%2B7HRpnLyRjbzeFi0dnRYElNU3u2yMPmCPIf%2BMHJHsP6XflM85dNYFZPOrAxVqPUcaIg8ody7fSNo0AB1KXEwr1yWGlbj2OKEBYkPKTO7WVsgt6n86DqHon3wxz4EhkdMVTflUq%2B&X-Amz-Signature=08444f254e51ba8577371d984d43b50678f4b20cccdb63637c878469b85e8f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSUFUTX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUh3oNJw66cO6wJDvWDlRR54KJV72tak0gAB%2B7RVZ75AiEAunp8wh3RYbCjL9f4PezFenBu1FXFTH9B44r879%2B%2FHREqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQpjfFV5zWnglBUnSrcAy3NoboutY2a%2BhqIegvMhP7xLyQrvTgeqzzBb%2BVp9CFwrRrhpM%2BQjK%2BL79gUvfwtP1UfFl%2B%2FQtNt1TgrmX1pGzHvMuHaONMSYCavca706M%2FlYu7P3VdADmEL9D8dw%2FG9KGMT7g7wEs3Jk462OWYfoVJt%2BEOGpTCYfl3dkxn4uOnbqPrG7CC%2BO26Ky1I9o%2BVWbZcN%2FV3bv%2F78HZKWtoHmHRJZgi5L5joOJCxOpxWb%2FQQBY%2FPZcse4rZfUZ3cqqcYwdl3b3XZnXnrqFgyAo65vhtsUqceG2xLoaKYq5R0De4YiGhv8Sd%2FsMqy7Wrlu7BvLgygVa1ry5f8bl29jnoIHgCRuSG64Yb0XWM%2BhseW%2FfukabiQnZRsJN3eH%2BZvtr9pXEGmI8WWL1F9KpJIYId0saKM3uS6IjbKivlwJTZmX9gJqSd0gvsj4pzow7Kx53fMGWgAM7d2BqqU0ck%2BmeWGvVoA%2FAqNBU%2F3o6KH3BhG1d%2F6t6IzVtZqUPG3GPpZvIhzursYI1wrb3avXD5juTz6EwDRQwcETyyzLk0TE05dhnZOjC43EyZXPXu7MkztdMn0URpxVwi2vbUSQug5XQ76QMv2Uj3aIGqEKl5yEAcuFLU%2FnItq8ALN8lhWnz3ISMMygi8oGOqUBATjhtivHPNJANaAIPOLwETEWNi7qG7Wfye6tJacZeH1%2F8xelDSHW7vkRoh%2BMCDDb%2FDm0Q3qHyVWDhx1x9YovS%2B7HRpnLyRjbzeFi0dnRYElNU3u2yMPmCPIf%2BMHJHsP6XflM85dNYFZPOrAxVqPUcaIg8ody7fSNo0AB1KXEwr1yWGlbj2OKEBYkPKTO7WVsgt6n86DqHon3wxz4EhkdMVTflUq%2B&X-Amz-Signature=b94f17e6bb56cb2b9026ecea04ff0204855edc7f7f8c73dc8650175e53c78aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
