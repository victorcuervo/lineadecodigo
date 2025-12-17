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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AE563K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAH1%2BWZkoFRcUBho8c80jnZW9tmCTgz6NzP392Tqlw%2FFAiEA96sjs1EJ2k1sA%2Fuh7MYWyk63yFM3V%2ByW3vEC0hYkgMEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLk%2B6HSGP6m%2B1gyTASrcA2Mhqh5qZWaA6pyAk28RARlwg6yhjVJ8u3DB%2BGRHh4kzVj07bPOiklphCujmHSDRlLvCyxTnhP4Wku0XOyumuQBd7E0rNZFP9mJVBFDXX617Y3iJYmK8SmMdiIR1hvEHW9LPX%2B%2BPtmc6n8VjIQgCTcTgn7RXvu0qQSD4Z0GzyxzcCFyZc1jIIAY%2FSx751huUa83uqUlXEfVxt2oGQ8Ad2H7AlGVCCEpzEcqvcWHsGcBqtHbxNNTmtjOVqpbLpyAlUxMr5ggOmoIdWdEzEOieKSmTm02yvKOxvWSUKYu07zFKQdKPSxH%2Flygv3IACfKrCZDuatg6QUd7oAuVIGLheWLoEkex4PUhZ2wyiqSj5ICi1pP4xtl7FK8yQ%2FYne2GxLUIK%2B2PhNSZdbpiNc%2BVs16MeDHldI0xi3SayKVjTlXNXtR9FjasJCdg%2BlS%2F4ElAjYIgUZ0vBNryFE9MRNTU78Uj1rH9PaU7UPVFeaMqMXPuKvy%2Ber6lh9dNfTJpVmCel7baB3HJkVvcjx8MTONOqPORiVn7YqEg%2F8AwLXZCAYActKxQfic%2BQtKICTRTU70%2F%2BCu1yWVqj1eBW8AXfqzLM3A0LPb%2FTW20T0cQXjkog3h8dMopWaGDgOxXtZJDuwMNGLjMoGOqUB7qqw7GONg5Wjor2mzndPazzsn8diMMWV1gvB5b39znRA3guGjif50cDY3HWISN5wsXr3vqq1c7KOZCTq2V2399BrxysZJc8hBmK83LebPZdR8iGJj%2BmtMgHnMV3vKlUmktC9rZy1oEVKMxeXdHa1DhIw4Rojlxrp%2BnbR2HOzDcwO99DW%2BvIyKzZYOiVjf73%2BfRZud2B4xYqHo1i%2FUVQV1uiEceS7&X-Amz-Signature=1204283ceb4a5a3de5dc43a9425cf5712e54334455ed792614fc912a7a1d49c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AE563K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAH1%2BWZkoFRcUBho8c80jnZW9tmCTgz6NzP392Tqlw%2FFAiEA96sjs1EJ2k1sA%2Fuh7MYWyk63yFM3V%2ByW3vEC0hYkgMEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLk%2B6HSGP6m%2B1gyTASrcA2Mhqh5qZWaA6pyAk28RARlwg6yhjVJ8u3DB%2BGRHh4kzVj07bPOiklphCujmHSDRlLvCyxTnhP4Wku0XOyumuQBd7E0rNZFP9mJVBFDXX617Y3iJYmK8SmMdiIR1hvEHW9LPX%2B%2BPtmc6n8VjIQgCTcTgn7RXvu0qQSD4Z0GzyxzcCFyZc1jIIAY%2FSx751huUa83uqUlXEfVxt2oGQ8Ad2H7AlGVCCEpzEcqvcWHsGcBqtHbxNNTmtjOVqpbLpyAlUxMr5ggOmoIdWdEzEOieKSmTm02yvKOxvWSUKYu07zFKQdKPSxH%2Flygv3IACfKrCZDuatg6QUd7oAuVIGLheWLoEkex4PUhZ2wyiqSj5ICi1pP4xtl7FK8yQ%2FYne2GxLUIK%2B2PhNSZdbpiNc%2BVs16MeDHldI0xi3SayKVjTlXNXtR9FjasJCdg%2BlS%2F4ElAjYIgUZ0vBNryFE9MRNTU78Uj1rH9PaU7UPVFeaMqMXPuKvy%2Ber6lh9dNfTJpVmCel7baB3HJkVvcjx8MTONOqPORiVn7YqEg%2F8AwLXZCAYActKxQfic%2BQtKICTRTU70%2F%2BCu1yWVqj1eBW8AXfqzLM3A0LPb%2FTW20T0cQXjkog3h8dMopWaGDgOxXtZJDuwMNGLjMoGOqUB7qqw7GONg5Wjor2mzndPazzsn8diMMWV1gvB5b39znRA3guGjif50cDY3HWISN5wsXr3vqq1c7KOZCTq2V2399BrxysZJc8hBmK83LebPZdR8iGJj%2BmtMgHnMV3vKlUmktC9rZy1oEVKMxeXdHa1DhIw4Rojlxrp%2BnbR2HOzDcwO99DW%2BvIyKzZYOiVjf73%2BfRZud2B4xYqHo1i%2FUVQV1uiEceS7&X-Amz-Signature=ca536c839f211db4feb84351527b6e9bddf7fd45001ba9387a15bb2963871a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
