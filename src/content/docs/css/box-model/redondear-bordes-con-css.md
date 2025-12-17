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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBKOOGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvvZYWTsw4FnzgUXVP7glxE9pOQOhCdGVu4lMR00SWKAiEAmwrq4SxhBP0K22yMNHNUrfGMu4XTFZCEUQEYMRYwN2Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCREw2Gvwp7ghTJmzyrcA3kyXsXR1%2FejN3BfYD3wOEbqHNBqvuoVaIbrVgw0KrI%2Bgt2wP5HWRZrwaz24hrzHP1kT%2Fmw2keaRZ0AmzVh1tw5WysZ0vvPLpcJpnmlPLiChmgn9NY7yfQfkiQIYLGDBE0HgwWushR9R7EHTjMUDgE67CTMlLQZI%2FRw0HDTLLXWBo4wqiEN6DUAfTlRMzIIAwUbjUrLxmYQmftCmr6firhRLfiAB0kaBkPbMKspTtXhqQipvAwPdEYPlkUFToe3kMtAYyJG83foKOxgA4lkzrfgkcjcVtUNtSlDFFrm9GV%2F3uvCOs1VM4ml8g0Hjz3uRXd%2BAglriWukwFWIqz8HngduT8JxFwcbRs96Yfi%2B2dJ0Ou0M28xSGwz0CzybLZBTjTdY8LXwYcVIT8vzs%2FLOUewbbHbSk1cg%2BPGb74In1%2BfFYRVPuHz07zWtCFC%2FwsnShtk897FyyQLs2PTpjSvjMNFJVUaaf17LaSjz5bUXd9UQs8Xmo06n5KtI%2BNbmdSK%2FnizbOLFTuq%2FKW9D4JAzK5yGHaeDqbsxlvlber1%2Fhl8%2BzvIpXPeoQiwSKllI%2BWEch0fJMA4S%2BUKJfWebUGMJm9T1MLNWMWX9yGzhLRHzm3WgFiq4AC20jvhj2rbPUkMITfh8oGOqUBuTGt8BUjj4tk5s5X7TWdr0I7H3GU5T4K1Gu9cslG2rbBAP4LHQMDvaarAVGRuINFlWb%2B423XrHWjbCV3i6nOuHhdTUqbQzD7CBda7S%2ByVHRprsfkF6Aolg86gBZsWxidGZEvqkriXP7S5wAF8aAFQKOIM4VJcmznxDQTfPsngFu8b9BpoN%2BDUc%2BoDNkuLyXs4mALkYismpOYvpqZ%2BCk1dXmY%2B1Bo&X-Amz-Signature=f86e4dff1041b5e520f5de56c7dd292e8824374e895900658c8c130b66f3a62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBKOOGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvvZYWTsw4FnzgUXVP7glxE9pOQOhCdGVu4lMR00SWKAiEAmwrq4SxhBP0K22yMNHNUrfGMu4XTFZCEUQEYMRYwN2Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCREw2Gvwp7ghTJmzyrcA3kyXsXR1%2FejN3BfYD3wOEbqHNBqvuoVaIbrVgw0KrI%2Bgt2wP5HWRZrwaz24hrzHP1kT%2Fmw2keaRZ0AmzVh1tw5WysZ0vvPLpcJpnmlPLiChmgn9NY7yfQfkiQIYLGDBE0HgwWushR9R7EHTjMUDgE67CTMlLQZI%2FRw0HDTLLXWBo4wqiEN6DUAfTlRMzIIAwUbjUrLxmYQmftCmr6firhRLfiAB0kaBkPbMKspTtXhqQipvAwPdEYPlkUFToe3kMtAYyJG83foKOxgA4lkzrfgkcjcVtUNtSlDFFrm9GV%2F3uvCOs1VM4ml8g0Hjz3uRXd%2BAglriWukwFWIqz8HngduT8JxFwcbRs96Yfi%2B2dJ0Ou0M28xSGwz0CzybLZBTjTdY8LXwYcVIT8vzs%2FLOUewbbHbSk1cg%2BPGb74In1%2BfFYRVPuHz07zWtCFC%2FwsnShtk897FyyQLs2PTpjSvjMNFJVUaaf17LaSjz5bUXd9UQs8Xmo06n5KtI%2BNbmdSK%2FnizbOLFTuq%2FKW9D4JAzK5yGHaeDqbsxlvlber1%2Fhl8%2BzvIpXPeoQiwSKllI%2BWEch0fJMA4S%2BUKJfWebUGMJm9T1MLNWMWX9yGzhLRHzm3WgFiq4AC20jvhj2rbPUkMITfh8oGOqUBuTGt8BUjj4tk5s5X7TWdr0I7H3GU5T4K1Gu9cslG2rbBAP4LHQMDvaarAVGRuINFlWb%2B423XrHWjbCV3i6nOuHhdTUqbQzD7CBda7S%2ByVHRprsfkF6Aolg86gBZsWxidGZEvqkriXP7S5wAF8aAFQKOIM4VJcmznxDQTfPsngFu8b9BpoN%2BDUc%2BoDNkuLyXs4mALkYismpOYvpqZ%2BCk1dXmY%2B1Bo&X-Amz-Signature=306a63912e86bd32703a515f53c426fa90772bd41deb9687eeb990c4f291074d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
