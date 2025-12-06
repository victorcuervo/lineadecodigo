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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELD67DS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZxfCyLUjENXBEgmxRNqEYTRmZfsWNA%2B8wCjb77TrHhAiEAuDUSlqzoPDdL%2FL5yTl0cDUOl90YmFqKpDemV5%2B1e5owq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMQjjAzb%2BSCYwksqqyrcAwKyuncYRYQSTzQm3WIH4XaPZlfsA6gkxVlA2jH9Er0JIzMWj%2BP4rV%2Fnex6ge5FEP3fvB8oE1fbUeY9JqfRTr2zw5eDVM8vCdiudZlRDJIEUmI%2BtrfQCfy9xK3j%2BUK%2BqhMV4X4SfoHQgrqQjJJZnWBvNNS9xP6XSQNJGMRPylU8qAG%2FkBrEG0oTJdZft%2BDKF4XJsgVyze50gwVwj%2BMLzoXBoR9vZEaLklzrGfrgx6rE56%2FY28O9OmZaHmaSQHgob%2FizBYMNTBlz0SKqVd%2B5cI29ZWEJl5u2ohfffmX%2FI8%2BiEp6A58oNdCgE40dDy%2FhyfShypjaBz0hbtayNVM865ELSPALkJkBzOXwO6sgElsmrDporH897Pw1AgZdbFDG%2FEonjIgxVO33xCBMdQOZT2ldJSFqFSPSUeaTtlh9nZIJE3%2F%2Fcs%2B2d%2FZuuvn9fMoff3ADE%2B7moG%2BedlS6GNbf6dpxw4ssbmrKsycgLjEPUfcDRGjNlbMKfNf7kyfnYR918Oi4JC2ZLIvvY9wb6g4vdsGO4NpFFUy7B4LH1MRCvHrqiwEfRPLktGBmxZryI%2BbLLZqb%2BkQ5PmfIgM28ks6VUc0J1MHzhQF6VbgWqORkGQIYjki90yIWyD9r4wA8TIMNHL0ckGOqUB85giudCcMIslM3yoVCQcPRLkL4yKwLWzZCUpTjx1IFmOfcoZL9zbgvSpQxvF7RmdlAqOw7cWXcSQoBKq7oMleH2LXSkl1h02FMrhckhySjdVwECgyA2nKeXRn5j67vgImHyiuC0nCES7YEZriL6EpRacFHyl8zZkB7OeUwXZZ%2FMLhendd4wRiVs2kvIgXEPnmOueicBX4Mhbh76LrpIzFg6pXaKn&X-Amz-Signature=0b31fd899b67cd0bb60b140149c2f68d63e5739a8e9a5dec0c741b9e72b96e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELD67DS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZxfCyLUjENXBEgmxRNqEYTRmZfsWNA%2B8wCjb77TrHhAiEAuDUSlqzoPDdL%2FL5yTl0cDUOl90YmFqKpDemV5%2B1e5owq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMQjjAzb%2BSCYwksqqyrcAwKyuncYRYQSTzQm3WIH4XaPZlfsA6gkxVlA2jH9Er0JIzMWj%2BP4rV%2Fnex6ge5FEP3fvB8oE1fbUeY9JqfRTr2zw5eDVM8vCdiudZlRDJIEUmI%2BtrfQCfy9xK3j%2BUK%2BqhMV4X4SfoHQgrqQjJJZnWBvNNS9xP6XSQNJGMRPylU8qAG%2FkBrEG0oTJdZft%2BDKF4XJsgVyze50gwVwj%2BMLzoXBoR9vZEaLklzrGfrgx6rE56%2FY28O9OmZaHmaSQHgob%2FizBYMNTBlz0SKqVd%2B5cI29ZWEJl5u2ohfffmX%2FI8%2BiEp6A58oNdCgE40dDy%2FhyfShypjaBz0hbtayNVM865ELSPALkJkBzOXwO6sgElsmrDporH897Pw1AgZdbFDG%2FEonjIgxVO33xCBMdQOZT2ldJSFqFSPSUeaTtlh9nZIJE3%2F%2Fcs%2B2d%2FZuuvn9fMoff3ADE%2B7moG%2BedlS6GNbf6dpxw4ssbmrKsycgLjEPUfcDRGjNlbMKfNf7kyfnYR918Oi4JC2ZLIvvY9wb6g4vdsGO4NpFFUy7B4LH1MRCvHrqiwEfRPLktGBmxZryI%2BbLLZqb%2BkQ5PmfIgM28ks6VUc0J1MHzhQF6VbgWqORkGQIYjki90yIWyD9r4wA8TIMNHL0ckGOqUB85giudCcMIslM3yoVCQcPRLkL4yKwLWzZCUpTjx1IFmOfcoZL9zbgvSpQxvF7RmdlAqOw7cWXcSQoBKq7oMleH2LXSkl1h02FMrhckhySjdVwECgyA2nKeXRn5j67vgImHyiuC0nCES7YEZriL6EpRacFHyl8zZkB7OeUwXZZ%2FMLhendd4wRiVs2kvIgXEPnmOueicBX4Mhbh76LrpIzFg6pXaKn&X-Amz-Signature=e5ed5cb3b4de932542bef849df56e6464e8d3dead44f7e37e93d18a49217a211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
