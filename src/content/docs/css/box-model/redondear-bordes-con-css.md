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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGCWOKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh%2B%2F4MNqDI0jW68oekem5q6uDMcDvGQ13YZogv1J%2FaeAIgNao9f%2BYC%2BafJzfe5qrwwXZNifupCUTPTLafilrematYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXzeyX8ZSXOxx1qwyrcAzEKqG8JGHQPVIac7UjA3%2F7GwcNu7MnamxB%2FWbqf4djj3vI%2Bcj7umNxF4%2Fnud%2F4ntRamcA%2F7kLP7%2B6yL07pbrIFwbkri5HC9Z5zc4XaUgTqQCClXidUUZyRqF5Z3kJWtVwy7oolmuLYM8wtWOLjrh0Y7Ro2W3VuOHm%2BL6Yi54D43ZycsOofDwlAxLOFWhTPYensydI4WEujQJCnZzrhmtKHVkXJhMBi6fT2ap03IctdTw1Lp4qp%2F8A26vWGxFMThf3yB4uHGVwJT85ZL7VGEloDSnDVVKclT4jnuiLhfaIiJIjBbRALBWd170z6C75qKDKMFP5LLE%2FN6NRW94eHGjgpmi8dwZLR9oEwgaV3gIGoqOCfYTS99Pj8LpJiUe1L9Gu14NYBxdXpRbRW2SvM4Dm7T376sDRzFZLA5ml7J%2BX9eEGzLnYLXmTmlhUDQQhqQxRDml8imJFx1nryGnMR1nb%2BVYOq6K67ZfyrPZtoWJ%2F78j%2BnPJpCq1CagnEAtvbX9nJt0qSabTnwRc3mbCj0uMm78kEzhdoENRDY%2BDt3W1vXnommX2FwNV5NMQU40LCfURHPxEAgppWGZZeLd3ORBEp9DQ%2BURhLR8QxmgaN7pxUktTt%2ByHJ%2FfkFeA4%2FtuMLuKjMoGOqUBS5UR7KH2lfwlbabusG5nlZXpMsS7IdYvarcSHJSDTLf80SU0qerr2UNwlY%2FkiOf0sazFdaW%2FFFf%2BhpCOJEgYkXaB1p4yKeH8aMk2cqZyVxdBjZKyI4vVIiKBxroZmIudSbQuMmT9vJujNBzViYj%2FZyWdBbJKaymLhbBbDeORx2whjZFRu6EKrhHlm6AerV0ybfOkBpb8a1Df9yucW%2BLMdvj75wvA&X-Amz-Signature=82b54f77221bcf8fd88a5cef8c7bbf19bc33f7f08949599ea1546f7e0eb39cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGCWOKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh%2B%2F4MNqDI0jW68oekem5q6uDMcDvGQ13YZogv1J%2FaeAIgNao9f%2BYC%2BafJzfe5qrwwXZNifupCUTPTLafilrematYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXzeyX8ZSXOxx1qwyrcAzEKqG8JGHQPVIac7UjA3%2F7GwcNu7MnamxB%2FWbqf4djj3vI%2Bcj7umNxF4%2Fnud%2F4ntRamcA%2F7kLP7%2B6yL07pbrIFwbkri5HC9Z5zc4XaUgTqQCClXidUUZyRqF5Z3kJWtVwy7oolmuLYM8wtWOLjrh0Y7Ro2W3VuOHm%2BL6Yi54D43ZycsOofDwlAxLOFWhTPYensydI4WEujQJCnZzrhmtKHVkXJhMBi6fT2ap03IctdTw1Lp4qp%2F8A26vWGxFMThf3yB4uHGVwJT85ZL7VGEloDSnDVVKclT4jnuiLhfaIiJIjBbRALBWd170z6C75qKDKMFP5LLE%2FN6NRW94eHGjgpmi8dwZLR9oEwgaV3gIGoqOCfYTS99Pj8LpJiUe1L9Gu14NYBxdXpRbRW2SvM4Dm7T376sDRzFZLA5ml7J%2BX9eEGzLnYLXmTmlhUDQQhqQxRDml8imJFx1nryGnMR1nb%2BVYOq6K67ZfyrPZtoWJ%2F78j%2BnPJpCq1CagnEAtvbX9nJt0qSabTnwRc3mbCj0uMm78kEzhdoENRDY%2BDt3W1vXnommX2FwNV5NMQU40LCfURHPxEAgppWGZZeLd3ORBEp9DQ%2BURhLR8QxmgaN7pxUktTt%2ByHJ%2FfkFeA4%2FtuMLuKjMoGOqUBS5UR7KH2lfwlbabusG5nlZXpMsS7IdYvarcSHJSDTLf80SU0qerr2UNwlY%2FkiOf0sazFdaW%2FFFf%2BhpCOJEgYkXaB1p4yKeH8aMk2cqZyVxdBjZKyI4vVIiKBxroZmIudSbQuMmT9vJujNBzViYj%2FZyWdBbJKaymLhbBbDeORx2whjZFRu6EKrhHlm6AerV0ybfOkBpb8a1Df9yucW%2BLMdvj75wvA&X-Amz-Signature=4dd5fce19a8baf4732e1bada43d55f0b6e1de165e83dab937620335f68dfbb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
