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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKVSD56%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc7jVIfpKXHpSWXJ6Mk6gxqHo3hALN0gGgqNkrLJnzkgIgHes58DfYrZxrMK%2F5l8OksZIQVqofTqZFLLuMmWvyVA4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAVIu2WVr3VLJgfoVircA%2Fza9bMbIhfRC2t6KUw53U%2BMJMZ3d6yIq%2FZ2%2B3O65bR4GQHJ5IsIJ81uJxqfhfc2PjdjoGYrUZoIw%2B22zmCqx5mwhOFLpPPwMcTbzdQXWDvy5gE91WliDcGte1nbeWHhmIPwptvNtQGr71gkimxSLLMuW%2BkAxOJYlPIONaIIvVtTvJYWdjbIPLM9WOpJPIJ2G0Uz8K0FMzBkYEFh66iC8rkWtCxo68q9UuFInv%2BQROhA4H%2FXgBrC5lFL2Fnxs0YoTvXeheWrEz8ByrVeXs9R3GPdnzmm7zAYbne3E%2FjwKStL3pra%2BJw5PfRH6FUq0atgRDWA20rELBt5WkOxGE%2BzMdN8hRzUKyBZBsq1%2FeVOyELyiBZ1PhY%2FE9q4N948smGoW4ZgInkGdUhIYNEHyLO5VPpX7%2BSf0tRbK89g8XchqZlRnLQGmFL8wZ2xto%2Fvx357k88HlYDQXXZleceC9HfAcIsUPvisvGkuFy9iUDuLbTcKxcAU4I%2Fzqo2AThNSqBW4H%2BodJGTcjQKNPdfakYl%2FDdjKmCiv7mkNIIwCP9vQk%2FXmZqbarZrDXI2uTceY8k2m4N1iRiatzS2C8SCDFGtN0t2rj3l6RM0B5MFaBYlljkWgLr%2FRy2MZV94tz7GwMOHRicoGOqUBFi7mYLh1A406Ekg2dHOlbcTrFmxre%2FL1cLjCXfR0e4RWsYzel1AqOuN4dSLf9g7E8rG4KivnpscKvN1gO8lwqj0XQsjcu61zd%2FJEkBXgX11CbcYGy7a0roRaOZjR11yX21l1%2BbxTlrBqRO0cyqeB57HK2L%2FeY8BxYlaIVvHYEqC1LTTLnSJbArSeCKrVSfGWtEC97Zh2Zfgb8ImAHsiP8qdNZT9h&X-Amz-Signature=23c8e69d1088b90968553a0a15d68d9c5074b0c1625af0d5c48dd50053e7dc84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKVSD56%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc7jVIfpKXHpSWXJ6Mk6gxqHo3hALN0gGgqNkrLJnzkgIgHes58DfYrZxrMK%2F5l8OksZIQVqofTqZFLLuMmWvyVA4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAVIu2WVr3VLJgfoVircA%2Fza9bMbIhfRC2t6KUw53U%2BMJMZ3d6yIq%2FZ2%2B3O65bR4GQHJ5IsIJ81uJxqfhfc2PjdjoGYrUZoIw%2B22zmCqx5mwhOFLpPPwMcTbzdQXWDvy5gE91WliDcGte1nbeWHhmIPwptvNtQGr71gkimxSLLMuW%2BkAxOJYlPIONaIIvVtTvJYWdjbIPLM9WOpJPIJ2G0Uz8K0FMzBkYEFh66iC8rkWtCxo68q9UuFInv%2BQROhA4H%2FXgBrC5lFL2Fnxs0YoTvXeheWrEz8ByrVeXs9R3GPdnzmm7zAYbne3E%2FjwKStL3pra%2BJw5PfRH6FUq0atgRDWA20rELBt5WkOxGE%2BzMdN8hRzUKyBZBsq1%2FeVOyELyiBZ1PhY%2FE9q4N948smGoW4ZgInkGdUhIYNEHyLO5VPpX7%2BSf0tRbK89g8XchqZlRnLQGmFL8wZ2xto%2Fvx357k88HlYDQXXZleceC9HfAcIsUPvisvGkuFy9iUDuLbTcKxcAU4I%2Fzqo2AThNSqBW4H%2BodJGTcjQKNPdfakYl%2FDdjKmCiv7mkNIIwCP9vQk%2FXmZqbarZrDXI2uTceY8k2m4N1iRiatzS2C8SCDFGtN0t2rj3l6RM0B5MFaBYlljkWgLr%2FRy2MZV94tz7GwMOHRicoGOqUBFi7mYLh1A406Ekg2dHOlbcTrFmxre%2FL1cLjCXfR0e4RWsYzel1AqOuN4dSLf9g7E8rG4KivnpscKvN1gO8lwqj0XQsjcu61zd%2FJEkBXgX11CbcYGy7a0roRaOZjR11yX21l1%2BbxTlrBqRO0cyqeB57HK2L%2FeY8BxYlaIVvHYEqC1LTTLnSJbArSeCKrVSfGWtEC97Zh2Zfgb8ImAHsiP8qdNZT9h&X-Amz-Signature=8f529c432177923d0d013ad20c05ff5b6714ccfd97468b26551734fb68601624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
