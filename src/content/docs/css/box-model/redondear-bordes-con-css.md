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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTIL2KB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc6RrZSlntfunzU7ubAwTWM3AN9Pil09zluFgdRoqPXQIgIeSUXVhNLqs0j%2B7KrUUfiikC4TX4Yz4Qh1xuPAQ6W9Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHDw2SHob5tDc2JvhCrcAzcTOEbmiKzJwOxOJ54sM0FDDSgEaFxFe7FNASi8jvzFRJuaji7rVEhAud2ODbF8gNI9%2B1CS5LflxYtUo1cjT34JXFvC7QylRQw5mJxsfz1r40PkHyrTEn413fBgn8Acd5eSil37Y6iR9nPS5Im2S2NvYIEYGROHfd0cpbg%2Fy0A%2BZD6TA5ugSaA3rFHaZynTmdU8SnKdyWtmNU733sIOxlpAwLnYmW36aDsbxEZw1wK0DfaoUoOvYNrMmuB9NXQCcX3mJCuipdu4cesPwUUzntQXVV9MUeF4PRInLO02MA3fAgVgWccxlE5p6vHmQG7n4qbmRjGjx7GzaFvadVGkkoGuzb596reouCbw10vkC3gYTttsYugytXShIJtw6K9%2BYFXSa6kyJWEXDs9rdwAtr3ej13NbD580xZOFA4q9wL8wHcQL11Tzh0xiL%2FDAKLmmevNPqo6GQwMnqirB43m1wx588iEEJf4mDGxSJd02LG9o8otczHgCsusews4pnUZGlvEgq4e38Fhf6F6t05CIM2nEcznFKPNa8CmPtW7AocTfNofJZefQpNHX11DapbTjc5m37t1pMtbYQcgI6JXvUP%2B9vQpBqiEKsLmL2Qffvm6xbUsrpPcJxpzilIVZMPjNiMoGOqUB2DF9MpDWIVfUL%2FtHkYOAvqQiKEEj0WYhlusG63m%2B6Yg4x4Mi2AsrXrBaMV3nQekVJoDGsPeYsOKRFNQO8Tk6xLbfNA91l9bvJIVmUiKvORs%2FOM5hUTyQjch9FbqjdEsR27amofB3vi6zOLO9YAkfvLKvk8pyYvEPJOf2oBFzFb3sj0Hyb3Ubl8k1d0iZlH3PDIMCu068sQwq9c3jhIVRZVh%2FYdj5&X-Amz-Signature=de002209bc677f8c1bfdc0ff3282ba849ddb31fc60cf05a2e8b57620607a7591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTIL2KB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc6RrZSlntfunzU7ubAwTWM3AN9Pil09zluFgdRoqPXQIgIeSUXVhNLqs0j%2B7KrUUfiikC4TX4Yz4Qh1xuPAQ6W9Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHDw2SHob5tDc2JvhCrcAzcTOEbmiKzJwOxOJ54sM0FDDSgEaFxFe7FNASi8jvzFRJuaji7rVEhAud2ODbF8gNI9%2B1CS5LflxYtUo1cjT34JXFvC7QylRQw5mJxsfz1r40PkHyrTEn413fBgn8Acd5eSil37Y6iR9nPS5Im2S2NvYIEYGROHfd0cpbg%2Fy0A%2BZD6TA5ugSaA3rFHaZynTmdU8SnKdyWtmNU733sIOxlpAwLnYmW36aDsbxEZw1wK0DfaoUoOvYNrMmuB9NXQCcX3mJCuipdu4cesPwUUzntQXVV9MUeF4PRInLO02MA3fAgVgWccxlE5p6vHmQG7n4qbmRjGjx7GzaFvadVGkkoGuzb596reouCbw10vkC3gYTttsYugytXShIJtw6K9%2BYFXSa6kyJWEXDs9rdwAtr3ej13NbD580xZOFA4q9wL8wHcQL11Tzh0xiL%2FDAKLmmevNPqo6GQwMnqirB43m1wx588iEEJf4mDGxSJd02LG9o8otczHgCsusews4pnUZGlvEgq4e38Fhf6F6t05CIM2nEcznFKPNa8CmPtW7AocTfNofJZefQpNHX11DapbTjc5m37t1pMtbYQcgI6JXvUP%2B9vQpBqiEKsLmL2Qffvm6xbUsrpPcJxpzilIVZMPjNiMoGOqUB2DF9MpDWIVfUL%2FtHkYOAvqQiKEEj0WYhlusG63m%2B6Yg4x4Mi2AsrXrBaMV3nQekVJoDGsPeYsOKRFNQO8Tk6xLbfNA91l9bvJIVmUiKvORs%2FOM5hUTyQjch9FbqjdEsR27amofB3vi6zOLO9YAkfvLKvk8pyYvEPJOf2oBFzFb3sj0Hyb3Ubl8k1d0iZlH3PDIMCu068sQwq9c3jhIVRZVh%2FYdj5&X-Amz-Signature=d8129d1bfc1f60aa8794429af9e8828d7ca66bb1eec704784aa2e75eb8c910d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
