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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGHE5V4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzOnPvTzsXtlSyjdQPboRtbCyBBH7QGXYQco6yXEZyQIgFt%2FOZRB7fOHWGSxsOPzbN1l5PP6HJERzc2Pz1CveRr4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDtipdflK4ChI64LtSrcA87O3ZpY3KSjpz5FCoYwexlhUaB0fouDT0SXZScIuFDnBPQ%2FU8PALr1bLVG%2FeBvWM%2FpBEmxJupNhaHaQLntjFLaU7J8VER0sa4S6RV9Nx%2BdiHZS%2FhhkP9dKutHvhNU98kIxI5YBPRK2tzHbK71r1F61VKCMm%2Fc0aof4bOea1c90OE18DrKcHbfZ2NNpgmV9dl82pYs7cdeRY3oMiiq4aHFWCoXM8Z1iLTvAGwkd7gciFVQYFBGIYScjGzhP2S0Qdm842M6ef33OpOHeN7T%2FL49V5caDHCIkKiPbhuJdUoSWG9eM9dztWYIwr3hhpTjBBn91ogA4ECKWVkb5tDB1khx6eCa%2FquhhqS0Zfi7n3t%2FDHwtb0A8OVhNAC26BotamfEOrK30UVIaTqKMGso1HttJj%2FxyHsbYKuxOdpNMF0WpR20XxuNpCu05Znz5JdTvb9XuypVUkay0pjCYcLCo9sY4B%2BUtyf6OaA9R%2B2CBds5%2FRzGzEciKa3%2FxXj9e4rwF1nHLJlOOF2oWyzzplhYmIJMwBq3cFKkm84bRP3DlXZTTIDutKfGb6jdC16E40eRVFMiYfz7vv5OWH6Qxo8MfAJeu28H%2FJNhAtUPriQQCY7qQGl6pRNr14Wc6NoVE5%2BMKCPisoGOqUBmWFGwFEt2d%2BkB9CUWkz5fDEDvJWY3h7oOecA2GPJz%2BgnYsjtmTJLlfkFv%2FCk%2BFrCVdHm3yyz%2FMTOZYwhgRQTFzCdgk%2B6ZHiv4FTyJhkiTvJKREWLAxBB%2Fs%2BUqXTUbDR%2FyfifE9AP6dsOcpvJAqW5jX1aY9Dqr559XYLzVi74R8lEwBaucbf5HJP2UVvyv%2BjXhOG7nTLFafH4Swyr07wYH1YHgV38&X-Amz-Signature=15eccd251088a95b8d811486ff1cedcbc2f64844954f25ce2ff8a7a97e6980d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGHE5V4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzOnPvTzsXtlSyjdQPboRtbCyBBH7QGXYQco6yXEZyQIgFt%2FOZRB7fOHWGSxsOPzbN1l5PP6HJERzc2Pz1CveRr4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDtipdflK4ChI64LtSrcA87O3ZpY3KSjpz5FCoYwexlhUaB0fouDT0SXZScIuFDnBPQ%2FU8PALr1bLVG%2FeBvWM%2FpBEmxJupNhaHaQLntjFLaU7J8VER0sa4S6RV9Nx%2BdiHZS%2FhhkP9dKutHvhNU98kIxI5YBPRK2tzHbK71r1F61VKCMm%2Fc0aof4bOea1c90OE18DrKcHbfZ2NNpgmV9dl82pYs7cdeRY3oMiiq4aHFWCoXM8Z1iLTvAGwkd7gciFVQYFBGIYScjGzhP2S0Qdm842M6ef33OpOHeN7T%2FL49V5caDHCIkKiPbhuJdUoSWG9eM9dztWYIwr3hhpTjBBn91ogA4ECKWVkb5tDB1khx6eCa%2FquhhqS0Zfi7n3t%2FDHwtb0A8OVhNAC26BotamfEOrK30UVIaTqKMGso1HttJj%2FxyHsbYKuxOdpNMF0WpR20XxuNpCu05Znz5JdTvb9XuypVUkay0pjCYcLCo9sY4B%2BUtyf6OaA9R%2B2CBds5%2FRzGzEciKa3%2FxXj9e4rwF1nHLJlOOF2oWyzzplhYmIJMwBq3cFKkm84bRP3DlXZTTIDutKfGb6jdC16E40eRVFMiYfz7vv5OWH6Qxo8MfAJeu28H%2FJNhAtUPriQQCY7qQGl6pRNr14Wc6NoVE5%2BMKCPisoGOqUBmWFGwFEt2d%2BkB9CUWkz5fDEDvJWY3h7oOecA2GPJz%2BgnYsjtmTJLlfkFv%2FCk%2BFrCVdHm3yyz%2FMTOZYwhgRQTFzCdgk%2B6ZHiv4FTyJhkiTvJKREWLAxBB%2Fs%2BUqXTUbDR%2FyfifE9AP6dsOcpvJAqW5jX1aY9Dqr559XYLzVi74R8lEwBaucbf5HJP2UVvyv%2BjXhOG7nTLFafH4Swyr07wYH1YHgV38&X-Amz-Signature=efc5e9ee778fa40e1a7ef84bcc45fb211f5e4aa7e9e160e787d1baba0ee22e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
